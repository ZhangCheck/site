(function () {
  'use strict';

  var push = Array.prototype.push;
  var noop = angular.noop;

  function pushUniList(target, list, idString) {
    var uniDict = {};
    for (var j=0; j<=target.length-1; j++) {
      var item = target[j];
      if (!uniDict[item[idString]]) {
        uniDict[item[idString]] = item;
      }
    }

    for (var k=0; k<=list.length-1; k++) {
      var list_item = list[k];
      if (!uniDict[list_item[idString]]) {
        target.push(list_item);
      }
    }
  }

  /**
   * @ngdoc overview
   * @name hz.dashboard.launch-instance
   *
   * @description
   * Manage workflow of creating server.
   */

  var module = angular.module('hz.dashboard.launch-instance');

  /**
   * @ngdoc service
   * @name launchInstanceModel
   *
   * @description
   * This is the M part in MVC design pattern for launch instance
   * wizard workflow. It is responsible for providing data to the
   * view of each step in launch instance workflow and collecting
   * user's input from view for  creation of new instance.  It is
   * also the center point of communication between launch instance
   * UI and services API.
   */

  module.factory('launchInstanceModel', ['$q', '$log', '$rootScope',
    'bytesFilter',
    'horizon.openstack-service-api.cinder',
    'horizon.openstack-service-api.glance',
    'horizon.openstack-service-api.keystone',
    'horizon.openstack-service-api.neutron',
    'horizon.openstack-service-api.nova',
    'horizon.openstack-service-api.novaExtensions',
    'horizon.openstack-service-api.security-group',
    'horizon.openstack-service-api.serviceCatalog',
    'horizon.openstack-service-api.billing',
    'horizon.framework.widgets.toast.service',
    '$filter',
    function ($q,
              $log,
              $rootScope,
              bytesFilter,
              cinderAPI,
              glanceAPI,
              keystoneAPI,
              neutronAPI,
              novaAPI,
              novaExtensions,
              securityGroup,
              serviceCatalog,
              billingAPI,
              toastService,
              $filter
              ) {

      var initPromise;

      // Constants (const in ES6)
      var NON_BOOTABLE_IMAGE_TYPES = ['aki', 'ari'];
      var SOURCE_TYPE_IMAGE = 'image';
      var SOURCE_TYPE_SNAPSHOT = 'snapshot';
      var SOURCE_TYPE_VOLUME = 'volume';

      var BARE_METAL_IMAGE_FILTER_ATTR = 'hypervisor_type';
      var BARE_METAL_IMAGE_FILTER_VAL = 'baremetal';

      /**
       * @ngdoc model api object
       */
      var model = {

        initializing: false,
        initialized: false,

        /**
         * @name newInstanceSpec
         *
         * @description
         * A dictionary like object containing specification collected from user's
         * input.  Its required properties include:
         *
         * @property {String} name: The new server name.
         * @property {String} source_type: The type of source
         *   Valid options: (image | snapshot | volume | volume_snapshot)
         * @property {String} source_id: The ID of the image / volume to use.
         * @property {String} flavor_id: The ID of the flavor to use.
         *
         * Other parameters are accepted as per the underlying novaclient:
         *  - https://github.com/openstack/python-novaclient/blob/master/novaclient/v2/servers.py#L417
         * But may be required additional values as per nova:
         *  - https://github.com/openstack/horizon/blob/master/openstack_dashboard/api/rest/nova.py#L127
         *
         * The JS code only needs to set the values below as they are made.
         * The createInstance function will map them appropriately.
         */

        // see initializeNewInstanceSpec
        newInstanceSpec: {},

        /**
         * cloud service properties, they should be READ-ONLY to all UI controllers
         */

        availabilityZones: [],
        servergroups: [],
        hosts: [],
        flavors: [],
        billingFlavorItems: [],
        allowedBootSources: [],
        images: [],
        allowCreateVolumeFromImage: false,
        arePortProfilesSupported: false,
        imageSnapshots: [],
        keypairs: [],
        metadataDefs: {
          flavor: null,
          image: null,
          volume: null
        },
        networks: [],
        ports: [],
        neutronEnabled: false,
        novaLimits: {},
        profiles: [],
        securityGroups: [],
        volumeBootable: false,
        volumes: [],
        volumeSnapshots: [],
        INSTANCE_APPOINT_HOST_JS: INSTANCE_APPOINT_HOST_JS,
        is_project_admin: USER_IS_PROJECT_ADMIN_JS,
        choose_share_net_enable: CHOOSE_SHARE_NET_JS,
        set_nic_ip_enable: ENABLE_SET_NIC_IP_JS,
        /**
         * api methods for UI controllers
         */

        initialize: initialize,
        createInstance: createInstance,
        _scope: null
      };

      // Local function.
      function initializeNewInstanceSpec() {

        model.newInstanceSpec = {
          availability_zone: null,
            server_group: null,
          admin_pass: null,
          config_drive: false,
          user_data: '',                  // REQUIRED Server Key.  Null allowed.
          disk_config: 'AUTO',
          flavor: null,                   // REQUIRED
          instance_count: 1,
          key_pair: [],                   // REQUIRED Server Key
          name: null,                     // REQUIRED
          networks: [],
          ports: [],
          profile: {},
          security_groups: [],            // REQUIRED Server Key. May be empty.
          source_type: null,              // REQUIRED for JS logic (image | snapshot | volume | volume_snapshot)
          source: [],
          vol_create: false,              // REQUIRED for JS logic
          vol_device_name: 'vda',         // May be null
          vol_delete_on_terminate: false,
          vol_size: 1,
          unit:'H',
          metadata: {}
        };
      }

      /**
       * @ngdoc method
       * @name launchInstanceModel.initialize
       * @returns {promise}
       *
       * @description
       * Send request to get all data to initialize the model.
       */

      function initialize(deep) {
        var deferred, promise;

        // Each time opening launch instance wizard, we need to do this, or
        // we can call the whole methods `reset` instead of `initialize`.
        initializeNewInstanceSpec();

        if (model.networks) {
          model.networks = [];
        }
        if (model.ports) {
          model.ports = [];
        }
        if(model.keypairs) {
          model.keypairs = [];
        }
        if (model.initializing) {
          promise = initPromise;

        } else if (model.initialized && !deep) {
          deferred = $q.defer();
          promise = deferred.promise;
          deferred.resolve();

        } else {
          model.initializing = true;
          model.allowedBootSources.length = 0;

          var promoseArr = [
            glanceAPI.getImages({status:'active'}).then(onGetImages, noop),
            novaAPI.getLenovoFlavorConfig().then(onGetLenovoFlavorConfig, noop),
            novaAPI.getAvailabilityZones().then(onGetAvailabilityZones, noop),
            novaAPI.listServerGroup().then(onGetServerGroups, noop),
            novaAPI.getKeypairs().then(onGetKeypairs, noop),
            novaAPI.getLimits().then(onGetNovaLimits, noop),
            securityGroup.query().then(onGetSecurityGroups, noop),
            serviceCatalog.ifTypeEnabled('network').then(getNetworks, noop),
            serviceCatalog.ifTypeEnabled('volume').then(getVolumes, noop)
          ];
          if (INSTANCE_APPOINT_HOST_JS) {
            promoseArr.push(novaAPI.getServices('nova-compute').then(onGetHosts, noop));
          }

          if ($rootScope.rootblock.billing_need) {
            var promises = [
              novaAPI.getFlavors(true, false),
              billingAPI.getPriceItems('instance')
            ];
            promoseArr.push($q.all(promises).then(onGetFlavorsAndBillingFlavorItems, noop));
          } else {
            var flavorPrimise = novaAPI.getFlavors(true, false).then(onGetFlavors, noop);
            promoseArr.push(flavorPrimise);
          }

          promise = $q.all(promoseArr);

          promise.then(
            function() {
              model.initializing = false;
              model.initialized = true;
              // This provides supplemental data non-critical to launching
              // an instance.  Therefore we load it only if the critical data
              // all loads successfully.
              //getMetadataDefinitions();
            },
            function () {
              model.initializing = false;
              model.initialized = false;
            }
          );
          initPromise = promise;
        }

        return promise;
      }

      /**
       * @ngdoc method
       * @name launchInstanceModel.createInstance
       * @returns {promise}
       *
       * @description
       * Send request for creating server.
       */

      function createInstance() {
        var finalSpec = angular.copy(model.newInstanceSpec);
        cleanNullProperties();

        setFinalSpecBootsource(finalSpec);
        setFinalSpecFlavor(finalSpec);
        setFinalSpecNetworks(finalSpec);
        setFinalSpecPorts(finalSpec);
        setFinalSpecKeyPairs(finalSpec);
        setFinalSpecSecurityGroups(finalSpec);
        setFinalSpecServerGroup(finalSpec);

        setFinalSpecMetadata(finalSpec);
        if (model.launchContext.policy_target_group) {
          setFinalSpecTargetGroup(finalSpec);
        }

        //return novaAPI.createServer(finalSpec);
        var result = novaAPI.createServer(finalSpec)
          .success(function(instances) {
            if (model._scope && typeof(model._scope.instances) === 'object') {
              // convert utc to local time
              instances.forEach(function(instance){
                instance.created = $filter('utcToLocal')(instance.created);
              });
              push.apply(model._scope.instances, instances);
            }
            toastService.add('success', gettext('The instance is creating') + ':' + finalSpec.name);
          });

        if (model._scope && typeof(model._scope.clearSelected) === 'function') {
            model._scope.clearSelected();
        }
        return result;
      }

      function cleanNullProperties(finalSpec) {
        // Initially clean fields that don't have any value.
        for (var key in finalSpec) {
          if (finalSpec.hasOwnProperty(key)  && finalSpec[key] === null) {
            delete finalSpec[key];
          }
        }
      }

      //
      // Local
      //

      function onGetAvailabilityZones(data) {
        model.availabilityZones.length = 0;
        push.apply(model.availabilityZones, data.data.items
          .filter(function (zone) {
            return zone.zoneState && zone.zoneState.available;
          })
          .map(function (zone) {
            return zone.zoneName;
          })
        );

        if (model.availabilityZones.length > 0) {
          model.newInstanceSpec.availability_zone = model.availabilityZones[0];
        }
      }


      function onGetServerGroups(data) {
        model.servergroups.length = 0;
        push.apply(model.servergroups, data.data.items);
      }

      function onGetHosts(data) {
        var services = data.data.items;
        var hosts = [];
        for(var i=0;i<services.length;i++){
          if(services[i].state == 'up' && services[i].host.indexOf('ironic') == -1){
            hosts.push(services[i]);
          }
        }
        model.hosts = hosts;
      }

      // Flavors

      function onGetFlavors(data) {
        model.flavors.length = 0;
          var srcItems = data.data.items;
          angular.forEach(srcItems,function(item){
            if(item.name.indexOf('ironic')=== -1){
              model.flavors.push(item);
            }
          });
      }


      function onGetFlavorsAndBillingFlavorItems(data) {
        var flavors = data[0].data.items;
        var billingFlavorItems = data[1].data.items;
        model.flavors.length = 0;
        model.billingFlavorItems.length = 0;
        var flavorIds = [];
        billingFlavorItems.forEach(function(flavorPriceItem){
            if (flavorPriceItem.flavor) {
                flavorIds.push(flavorPriceItem.flavor.id);
            }
        });
        var filteredFlavors = flavors.filter(function(flavor){
            return flavorIds.contains(flavor.id);
        });
        push.apply(model.flavors, filteredFlavors);
        push.apply(model.billingFlavorItems, billingFlavorItems);
      }

      function setFinalSpecFlavor(finalSpec) {
        if ( finalSpec.flavor ) {
          finalSpec.flavor_id = finalSpec.flavor.id;
        } else {
          delete finalSpec.flavor_id;
        }

        delete finalSpec.flavor;
      }

      // Keypairs

      function onGetKeypairs(data) {
        angular.extend(
          model.keypairs,
          data.data.items.map(function (e) {
            e.id = e.name;
            return e;
          }));
      }

      function setFinalSpecKeyPairs(finalSpec) {
        // Nova only wants the key name. It is a required field, even if None.
        if (!finalSpec.key_name && finalSpec.key_pair.length === 1) {
          finalSpec.key_name = finalSpec.key_pair[0].name;
        } else if (!finalSpec.key_name) {
          finalSpec.key_name = null;
        }

        delete finalSpec.key_pair;

        if (finalSpec.admin_pass === null) {
          delete finalSpec.admin_pass;
        }
      }

      // Security Groups

      function onGetSecurityGroups(data) {
        model.securityGroups.length = 0;
        push.apply(model.securityGroups, data.data.items);
        // set initial default
        if (model.newInstanceSpec.security_groups.length === 0 &&
            model.securityGroups.length > 0) {
          model.securityGroups.forEach(function (securityGroup) {
            if (securityGroup.name === 'default') {
              model.newInstanceSpec.security_groups.push(securityGroup);
            }
          });
        }
      }

      function setFinalSpecSecurityGroups(finalSpec) {
        // pull out the ids from the security groups objects
        var securityGroupIds = [];
        finalSpec.security_groups.forEach(function(securityGroup) {
          if (model.neutronEnabled) {
            securityGroupIds.push(securityGroup.id);
          } else {
            securityGroupIds.push(securityGroup.name);
          }
        });
        finalSpec.security_groups = securityGroupIds;
      }

      function setFinalSpecServerGroup(finalSpec) {
        if(finalSpec.server_group !== null) {
          finalSpec['scheduler_hints'] = {};
          finalSpec['scheduler_hints']['group'] = finalSpec.server_group.id;
          delete finalSpec.server_group;
        }
      }

      function setFinalSpecTargetGroup(finalSpec) {
        finalSpec.policy_target_group_id = model.launchContext.policy_target_group;
      }

      function setFinalSpecMetadata(finalSpec) {
          var metadataGroup = {};
          finalSpec.metadata.forEach(function (metadata) {
              if( metadata.key != '' ) {
                  metadataGroup[encode1(metadata.key)] = metadata.value;
              }
          });
          finalSpec.meta = metadataGroup;
          delete finalSpec.metadata;
      }

      function encode1(s) {
          return escape(s).replace(/%(u[0-9A-F]{4})|(%[0-9A-F]{2})/gm, function ($0, $1, $2) {
              return $1 && '\\' + $1.toLowerCase() || unescape($2);
          });
      }

      // Networks

      function getNetworks() {
        return neutronAPI.getNetworks({'router:external': 'false'}).then(onGetNetworks, noop).then(getPorts, noop);
      }

      function onGetNetworks(data) {
        model.neutronEnabled = true;
        model.networks.length = 0;
        // get subnets from networks, and provided to user to selected.
        var networks = data.data.items;
        var all_subnets = [];
        networks.forEach(function(network){
          if (network.shared && !model.choose_share_net_enable && !model.is_project_admin) {
            if (network['subnets'] && network['subnets'].length > 0) {
                all_subnets.push(network['subnets'][0]);
            }
          } else {
            all_subnets = all_subnets.concat(network['subnets']);
          }
        });
        push.apply(model.networks, all_subnets);
      }

      function setFinalSpecNetworks(finalSpec) {
        finalSpec.nics = [];
        finalSpec.networks.forEach(function (network) {
          if(network.shared && (model.is_project_admin === false && !model.set_nic_ip_enable)){
            finalSpec.nics.push({
              "net-id": network.network_id
            });
          }else{
            finalSpec.nics.push(
              {
                "net-id": network.network_id,
                "subnet-id": network.id,
                "v4-fixed-ip": network.ipv4
              });
          }
        });
        delete finalSpec.networks;
      }

      // Networks Port
      function getPorts() {
        model.ports.length = 0;
        keystoneAPI.getCurrentUserSession().success(function(data) {
          model.networks.forEach(function(network) {
            return neutronAPI.getPorts({subnet_id: network.id, tenant_id: data.project_id}).then(function(ports) {
              onGetPorts(ports, network);
            }, noop);
          });
        });
      }

      function onGetPorts(networkPorts, network) {
        var ports = [];

        networkPorts.data.items.forEach(function(port) {
          // no device_owner means that the port can be attached
          if (port.device_owner === "" && port.admin_state === "UP") {
            port.subnet_names = getPortSubnets(port, model.networks);
            port.network_name = network.name;
            ports.push(port);
          }
        });
        pushUniList(model.ports, ports, 'id');
      }

      // helper function to return an object of IP:NAME pairs for subnet mapping
      function getPortSubnets(port, subnets) {
        if (!subnets) {
          return;
        }
        var subnetNames = {};
        port.fixed_ips.forEach(function (ip) {
          subnets.forEach(function (subnet) {
            if (ip.subnet_id === subnet.id) {
              subnetNames[ip.ip_address] = {
                'subnet_name': subnet.name,
                'subnet_cidr': subnet.cidr
              };
            }
          });
        });

        return subnetNames;
      }

      function setFinalSpecPorts(finalSpec) {
        // nics should already be filled so we only append to it
        finalSpec.ports.forEach(function (port) {
          finalSpec.nics.push({
            "port-id": port.id
          });
        });
        delete finalSpec.ports;
      }
      // Boot Source

      function isBootableImageType(image) {
        // This is a blacklist of images that can not be booted.
        // If the image container type is in the blacklist
        // The evaluation will result in a 0 or greater index.
        return NON_BOOTABLE_IMAGE_TYPES.indexOf(image.container_format) < 0
                  && !(image.hasOwnProperty('properties') && image.properties.hasOwnProperty(BARE_METAL_IMAGE_FILTER_ATTR)
                      && image.properties[BARE_METAL_IMAGE_FILTER_ATTR] === BARE_METAL_IMAGE_FILTER_VAL );
      }

      function getImageType(image) {
        var imageType = 'image';
        if( (image.properties) && (image.properties.image_id || image.properties.image_type == 'snapshot') ){
          imageType = 'snapshot';
        }
        return imageType;
      }

      function onGetImages(data) {
        // images
        angular.forEach(data.data.items, function(item){
           item.size = bytesFilter(item.size);
        });
        model.images.length = 0;
        push.apply(model.images, data.data.items.filter(function (image) {
          return isBootableImageType(image) && (getImageType(image) === 'image');
        }));
        addAllowedBootSource(model.images, SOURCE_TYPE_IMAGE, gettext('Image'));

        // snapshots
        model.imageSnapshots.length = 0;
        push.apply(model.imageSnapshots, data.data.items.filter(function (image) {
          return isBootableImageType(image) && (getImageType(image) === 'snapshot');
        }));
        addAllowedBootSource(model.imageSnapshots, SOURCE_TYPE_SNAPSHOT, gettext('Instance Snapshot'));
      }

      function getVolumes() {
        var volumePromises = [];
        // Need to check if Volume service is enabled before getting volumes
        model.volumeBootable = true;
        addAllowedBootSource(model.volumes, SOURCE_TYPE_VOLUME, gettext('Volume'));
        volumePromises.push(cinderAPI.getVolumes({ status: 'available',  bootable: 1 })
          .then(onGetVolumes));
        // Can only boot image to volume if the Nova extension is enabled.
        novaExtensions.ifNameEnabled('BlockDeviceMappingV2Boot')
          .then(function() { model.allowCreateVolumeFromImage = true; });

        return $q.all(volumePromises);
      }

      function onGetVolumes(data) {
        model.volumes.length = 0;
        push.apply(model.volumes, data.data.items);
      }

      function addAllowedBootSource(rawTypes, type, label) {
        if (rawTypes && rawTypes.length > 0) {
          model.allowedBootSources.push({
            type: type,
            label: label
          });
        }
      }

      function setFinalSpecBootsource(finalSpec) {
        finalSpec.source_id = finalSpec.source && finalSpec.source[0] && finalSpec.source[0].id;
        delete finalSpec.source;

        switch (finalSpec.source_type.type) {
          case SOURCE_TYPE_IMAGE:
            setFinalSpecBootImageToVolume(finalSpec);
            break;
          case SOURCE_TYPE_SNAPSHOT:
            break;
          case SOURCE_TYPE_VOLUME:
            setFinalSpecBootFromVolumeDevice(finalSpec, 'vol');
            break;
          default:
            $log.error("Unknown source type: " + finalSpec.source_type);
        }

        if(INSTANCE_APPOINT_HOST_JS && finalSpec.selectHost && finalSpec.host){
          finalSpec.availability_zone = finalSpec.availability_zone + ':' + finalSpec.host;
        }

        delete finalSpec.seletHost;
        delete finalSpec.host;

        // The following are all fields gathered into simple fields by
        // steps so that the view can simply bind to simple model attributes
        // that are then transformed a single time to Nova's expectation
        // at launch time.
        delete finalSpec.source_type;
        delete finalSpec.vol_create;
        delete finalSpec.vol_device_name;
        delete finalSpec.vol_delete_on_terminate;
        delete finalSpec.vol_size;
      }

      function setFinalSpecBootImageToVolume(finalSpec) {
        if (finalSpec.vol_create) {
          // Specify null to get Autoselection (not empty string)
          var deviceName = finalSpec.vol_device_name ? finalSpec.vol_device_name : null;
          finalSpec.block_device_mapping_v2 = [];
          finalSpec.block_device_mapping_v2.push(
            {
              'device_name': deviceName,
              'source_type': SOURCE_TYPE_IMAGE,
              'destination_type': SOURCE_TYPE_VOLUME,
              'delete_on_termination': finalSpec.vol_delete_on_terminate ? 1 : 0,
              'uuid': finalSpec.source_id,
              'boot_index': '0',
              'volume_size': finalSpec.vol_size
            }
          );
        }
      }

      function setFinalSpecBootFromVolumeDevice(finalSpec, sourceType) {
        finalSpec.block_device_mapping = {};
        finalSpec.block_device_mapping[finalSpec.vol_device_name] = [
            finalSpec.source_id,
            ':',
            sourceType,
            '::',
            (finalSpec.vol_delete_on_terminate ? 1 : 0)
          ].join('');

        // Source ID must be empty for API
        finalSpec.source_id = '';
      }

      // Nova Limits

      function onGetNovaLimits(data) {
        angular.extend(model.novaLimits, data.data);
      }

      // Metadata Definitions

      /**
       * Metadata definitions provide supplemental information in detail
       * rows and should not slow down any of the other load processes.
       * All code should be written to treat metadata definitions as
       * optional, because they are never guaranteed to exist.
       */
      function getMetadataDefinitions() {
        // Metadata definitions often apply to multiple
        // resource types. It is optimal to make a single
        // request for all desired resource types.
        /*var resourceTypes = {
          flavor: 'OS::Nova::Flavor',
          image: 'OS::Glance::Image',
          volume: 'OS::Cinder::Volumes'
        };

        angular.forEach(resourceTypes, function (resourceType, key) {
          glanceAPI.getNamespaces({
            'resource_type': resourceType
          }, true)
          .then(function (data) {
            var namespaces = data.data.items;
            // This will ensure that the metaDefs model object remains
            // unchanged until metadefs are fully loaded. Otherwise,
            // partial results are loaded and can result in some odd
            // display behavior.
            if (namespaces.length) {
              model.metadataDefs[key] = namespaces;
            }
          });
        });*/
      }

      function onGetLenovoFlavorConfig(response) {
        var config = response.data;
        if (config.RAM_STEP) {
          model.lenovoFlavorStepConfig = config.RAM_STEP;
        }
        if (config.VOLUME_CONFIG) {
          model.lenovoFlavorVolumeConfig = config.VOLUME_CONFIG;
        }
      }

      return model;
    }
  ]);

})();
