/**
 * Copyright 2015 EasyStack Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License. You may obtain
 * a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */
(function () {
  'use strict';

  angular
    .module('horizon.openstack-service-api')
    .service('horizon.openstack-service-api.nova', NovaAPI);

  NovaAPI.$inject = ['horizon.framework.util.http.service',
                     'horizon.framework.widgets.toast.service',
                     '$window'];

  /**
   * @ngdoc service
   * @name horizon.openstack-service-api.nova
   * @description Provides access to Nova APIs.
   */
  function NovaAPI(apiService, toastService, $window) {

       // Keypairs

       /**
        * @name horizon.openstack-service-api.novaAPI.getKeypairs
        * @description
        * Get a list of keypairs.
        *
        * The listing result is an object with property "items". Each item is
        * a keypair.
        */
      this.getKeypairs = function() {
        return apiService.get('/api/nova/keypairs/')
          .error(function () {
            toastService.add('error', gettext('Unable to retrieve keypairs.'));
          });
      };

      /**
       * @name horizon.openstack-service-api.novaAPI.createKeypair
       * @description
       * Create a new keypair.  This returns the new keypair object on success.
       *
       * @param {Object} newKeypair
       * The keypair to create.
       *
       * @param {string} newKeypair.name
       * The name of the new keypair. Required.
       *
       * @param {string} newKeypair.public_key
       * The public key.  Optional.
       */
     this.createKeypair = function(newKeypair) {
       return apiService.post('/api/nova/keypairs/', newKeypair)
         .error(function (err) {
           if (angular.isDefined(newKeypair.public_key)) {
             err = err || '';
             toastService.add('error', gettext('Unable to import the keypair.'));
           } else {
             toastService.add('error', gettext('Unable to create the keypair.'));
           }
         });
      };

      /**
       * @name horizon.openstack-service-api.novaAPI.deleteKeypair
       * @description
       * Delete a keypair.
     * @param {string} id
       * Specifies the id of the keypair to request.
       */
      this.deleteKeypair = function(id) {
          return apiService.delete('/api/nova/keypair/' + id)
            .error(function () {
              toastService.add('error', gettext('Unable to delete the keypair.'));
            });
        };

        /**
         * @name horizon.openstack-service-api.novaAPI.deleteKeypairs
         * @description
         * Delete keypairs.
       * @param {string} names
         * Specifies the names of the keypair to request.
         */
        this.deleteKeypairs = function(names) {
            return apiService.delete('/api/nova/keypairs/', names)
              .error(function () {
                toastService.add('error', gettext('Unable to delete the keypair.'));
              });
       };

       // Availability Zones

       /**
        * @name horizon.openstack-service-api.novaAPI.getAvailabilityZones
        * @description
        * Get a list of Availability Zones.
        *
        * The listing result is an object with property "items". Each item is
        * an availability zone.
        */
      this.getAvailabilityZones = function(detailed) {
        var config = {'params': {'detailed': detailed}};
        return apiService.get('/api/nova/availzones/', config)
          .error(function () {
            toastService.add('error',
                          gettext('Unable to retrieve the availability zones.'));
          });
      };

      // Aggregates

      /**
       * @name horizon.openstack-service-api.novaAPI.getAggregates
       * @description
       *  Get a list of  Aggregates.
       */
      this.getAggregates = function() {
        return apiService.get('/api/nova/aggregates/')
          .error(function () {
            toastService.add('error', gettext('Unable to retrieve aggregates.'));
          });
      };

      /**
       * @name horizon.openstack-service-api.novaAPI.createAggregate
       * @description
       *  Create an aggregate.
       */
      this.createAggregate = function(aggregateName, zoneName) {
        var body = {'name': aggregateName, 'availability_zone': zoneName};
        return apiService.post('/api/nova/aggregates/', body)
          .error(function () {
            toastService.add('error', gettext('Unable to create an aggregate.'));
          });
      };

      /**
       * @name horizon.openstack-service-api.novaAPI.getAggregate
       * @description
       *  Get an list an aggregate.
       */
      this.getAggregate = function(aggregateId) {
        return apiService.get('/api/nova/aggregates/{0}/'.format(aggregateId));
      };

      /**
       * @name horizon.openstack-service-api.novaAPI.editAggregate
       * @description
       *  Edit an aggregate.
       */
      this.editAggregate = function(aggregateId, aggregateName, zoneName) {
        var body = {'name': aggregateName, 'availability_zone': zoneName};
        return apiService.patch('/api/nova/aggregates/{0}/'.format(aggregateId), body)
          .error(function () {
            toastService.add('error', gettext('Unable to update aggregate.'));
          });
      };

      /**
       * @name horizon.openstack-service-api.novaAPI.deleteAggregate
       * @description
       *  Delete an aggregate.
       */
      this.deleteAggregate = function(aggregateId) {
        return apiService.delete('/api/nova/aggregates/{0}/'.format(aggregateId))
          .error(function () {
            toastService.add('error', gettext('Unable to delete aggregate.'));
          });
      };

      /**
       * @name horizon.openstack-service-api.novaAPI.updateAggregateHosts
       * @description
       *  Update Aggregate Hosts.
       */
      this.updateAggregateHosts = function(aggregateId, action, host) {
        var body = {'action': action, 'host': host};
        return apiService.post('/api/nova/aggregates/{0}/'.format(aggregateId), body)
          .error(function () {
            toastService.add('error', gettext('Unable to update aggregate hosts.'));
          });
      };

      // Limits

      /**
       * @name horizon.openstack-service-api.novaAPI.getLimits
       * @description
       * Returns current limits.
       *
       * @example
       * The following is an example response:
       * {
       *   "maxImageMeta": 128,
       *   "maxPersonality": 5,
       *   "maxPersonalitySize": 10240,
       *   "maxSecurityGroupRules": 20,
       *   "maxSecurityGroups": 10,
       *   "maxServerGroupMembers": 10,
       *   "maxServerGroups": 10,
       *   "maxServerMeta": 128,
       *   "maxTotalCores": 20,
       *   "maxTotalFloatingIps": 10,
       *   "maxTotalInstances": 10,
       *   "maxTotalKeypairs": 100,
       *   "maxTotalRAMSize": 51200,
       *   "totalCoresUsed": 1,
       *   "totalFloatingIpsUsed": 0,
       *   "totalInstancesUsed": 1,
       *   "totalRAMUsed": 512,
       *   "totalSecurityGroupsUsed": 1,
       *   "totalServerGroupsUsed": 0
       * }
       */
      this.getLimits = function() {
        return apiService.get('/api/nova/limits/')
          .success(function(data){
            for(var i in data){
              if(data[i] == -1){
                data[i] = Infinity
              }
            }
          })
          .error(function () {
            toastService.add('error', gettext('Unable to retrieve limits information.'));
          });
      };

      /**
       * @name horizon.openstack-service-api.novaAPI.createServer
       * @description
       * Create snapshot for a server. The required parameters:
       *
       * "name"
       *
       * This returns the new server object on success.
       */
      this.createServerSnapshot = function(id, name, metadata) {
        return apiService.post('/api/nova/servers/' + id +
                               '/snapshotcreate', {'name': name, 'metadata': metadata})
          .error(function () {
            toastService.add('error', gettext('Unable to create a snapshot for server.'));
          });
      };

      // Servers

      /**
       * @name horizon.openstack-service-api.novaAPI.createServer
       * @description
       * Create a server using the parameters supplied in the
       * newServer. The required parameters:
       *
       * "name", "source_id", "flavor_id", "key_name", "user_data"
       *     All strings
       * "security_groups"
       *     An array of one or more objects with a "name" attribute.
       *
       * Other parameters are accepted as per the underlying novaclient:
       * "block_device_mapping", "block_device_mapping_v2", "nics", "meta",
       * "availability_zone", "instance_count", "admin_pass", "disk_config",
       * "config_drive"
       *
       * This returns the new server object on success.
       */
      this.createServer = function(newServer) {
        return apiService.post('/api/nova/servers/', newServer)
          .error(function (data, status, headers, config) {
            if (status == 409 && data && data.indexOf('No more IP addresses')!=-1) {
                toastService.add('error', gettext(
                    'Unable to create the server, No more IP addresses available on network.'));
            } else {
              if (TRANSPARENT_ERROR_MSG && data) {
                toastService.add('error', interpolate(gettext('Unable to create server. Reason: %s'), [data]));
              } else {
                toastService.add('error', gettext('Unable to create server.'));
              }
            }
          });
      };

      // ironic create server
      this.createIronicServer = function(newServer) {
        return apiService.post('/api/nova/baremetalservers/', newServer)
          .error(function (data, status) {
            if (status == 409 && data && data.indexOf('No more IP addresses')!=-1) {
                toastService.add('error', gettext(
                    'Unable to create baremetal instance, No more IP addresses available on network.'));
            } else {
              if (TRANSPARENT_ERROR_MSG && data) {
                toastService.add('error', interpolate(gettext('Unable to create baremetal instance. Reason: %s'), [data]));
              } else {
                toastService.add('error', gettext('Unable to create baremetal instance.'));
              }
            }
          });
      };
      /**
       * @name horizon.openstack-service-api.novaAPI.getServer
       * @description
       * Get a single server by ID
       * @param {string} id
       * Specifies the id of the server to request.
       */
      this.getServer = function(id) {
        return apiService.get('/api/nova/servers/' + id)
          .error(function () {
            toastService.add('error', gettext('Unable to retrieve server.'));
        });
      };

      this.refreshServer = function(id) {
        return apiService.get('/api/nova/servers/' + id + '/');
      };

      /**
       * @name horizon.openstack-service-api.novaAPI.getServerVNC
       * @description
       * Get a single server vnc by ID
       * @param {string} id
       * Specifies the id of the server to request.
       */
      this.getServerVNC = function(id) {
        return apiService.get('/api/nova/servers/' + id + '/vnc')
          .error(function () {
            toastService.add('error', gettext('Unable to retrieve server vnc information.'));
        });
      };

      /**
       * @name horizon.openstack-service-api.novaAPI.getServerConsoleOutput
       * @description
       * Get a single server vnc by ID
       * @param {string} id
       * Specifies the id of the server to request.
       */
      this.getServerConsoleOutput = function(id, length) {
        var config = length ? {'params': {'tail_length': length}} : {};
        return apiService.get('/api/nova/servers/' + id + '/consoleoutput', config)
          .error(function () {
            toastService.add('error', gettext('Unable to retrieve server console log.'));
        });
      };

      /**
       * @name horizon.openstack-service-api.novaAPI.getServers
       * @description
       * Get a list of servers.
       *
       * The listing result is an object with property "items." Each item is
       * a server.
       *
       * @param {Object} params
       * Query parameters. Optional.
       *
       * @param {string} param.search_opts
       * Filters to pass through the API.
       */
      this.getServers = function(params) {
        var config = (params) ? {'params': params} : {};
        return apiService.get('/api/nova/servers/', config)
          .error(function () {
            toastService.add('error', gettext('Unable to retrieve servers.'));
        });
      };
      /**
       * @name horizon.openstack-service-api.novaAPI.deleteServer
       * @description
       * Delete a single server by ID
       * @param {string} id
       * Specifies the id of the server to request.
       */
      this.deleteServer = function(id) {
        return apiService.delete('/api/nova/servers/' + id + '/')
          .error(function (data) {
            if (TRANSPARENT_ERROR_MSG && data) {
              toastService.add('error', interpolate(gettext('Unable to delete server. Reason: %s'), [data]));
            } else {
              toastService.add('error', gettext('Unable to delete server.'));
            }
        });
      };

      this.deleteIronicServer = function(id, flavor_id) {
        return apiService.delete('/api/nova/baremetalservers/' + id + '/'+ flavor_id+ '/')
          .error(function () {
            if (TRANSPARENT_ERROR_MSG && data) {
              toastService.add('error', interpolate(gettext('Unable to delete server. Reason: %s'), [data]));
            } else {
              toastService.add('error', gettext('Unable to delete server.'));
            }
        });
      };

      /**
       * @name horizon.openstack-service-api.novaAPI.editServer
       * @description edit server with a new name
       * @returns The new server object on success.
       * @param {Object} id
       * The old server id to update name
       * @param {Object} param
       * The name to update.
       *
       * Example param object
       * {
       *    "name": "myNewServer",
       * }
       *
       * Description of properties on the param
       *
       * @property {string} param.name
       * The new name of the server. Required.
       */
      this.editServer = function(id, param) {
        return apiService.patch('/api/nova/servers/' + id, param)
          .error(function () {
            toastService.add('error', gettext('Unable to edit server.'));
        });
      };

      /**
       * @name horizon.openstack-service-api.novaAPI.pauseServer
       * @description
       * Pause a single server by ID
       * @param {string} id
       * Specifies the id of the server to request.
       */
      this.pauseServer = function(id) {
        return apiService.post('/api/nova/servers/' + id + '/pause')
          .error(function () {
            toastService.add('error', gettext('Unable to pause server.'));
        });
      };

      /**
       * @name horizon.openstack-service-api.novaAPI.softRebootServer
       * @description
       * Pause a single server by ID
       * @param {string} id
       * Specifies the id of the server to request.
       */
      this.softrebootServer = function(id) {
        return apiService.post('/api/nova/servers/' + id + '/softreboot')
          .error(function () {
            toastService.add('error', gettext('Unable to reboot server.'));
        });
      };


      /**
       * @name horizon.openstack-service-api.novaAPI.unpauseServer
       * @description
       * Unpause a single server by ID
       * @param {string} id
       * Specifies the id of the server to request.
       */
      this.unpauseServer = function(id) {
        return apiService.post('/api/nova/servers/' + id + '/unpause')
          .error(function () {
            toastService.add('error', gettext('Unable to unpause server.'));
        });
      };

      /**
       * @name horizon.openstack-service-api.novaAPI.suspendServer
       * @description
       * Suspend a single server by ID
       * @param {string} id
       * Specifies the id of the server to request.
       */
      this.suspendServer = function(id) {
        return apiService.post('/api/nova/servers/' + id + '/suspend')
          .error(function () {
            toastService.add('error', gettext('Unable to suspend server.'));
        });
      };

      /**
       * @name horizon.openstack-service-api.novaAPI.resumeServer
       * @description
       * Resume a single server by ID
       * @param {string} id
       * Specifies the id of the server to request.
       */
      this.resumeServer = function(id) {
        return apiService.post('/api/nova/servers/' + id + '/resume')
          .error(function () {
            toastService.add('error', gettext('Unable to resume server.'));
        });
      };

      /**
       * @name horizon.openstack-service-api.novaAPI.rebuildServer
       * @description
       * rebuild a server with a new image
       * @param {Object} id
       * The old server id to rebuild
       * @param {Object} param
       *
       * Example param object
       * {
       *    "image_id": "xxxx",
       * }
       *
       * Description of properties on the param
       *
       * @property {string} param.image_id
       * The new image of the server to rebuild. Required.
       */
      this.rebuildServer = function(id, param) {
        return apiService.post('/api/nova/servers/' + id + '/rebuild', param)
          .error(function () {
            toastService.add('error', gettext('Unable to rebuild server.'));
        });
      };

      /**
       * @name horizon.openstack-service-api.novaAPI.migrateServer
       * @description
       * Migrate a single server by ID
       * @param {string} id
       * Specifies the id of the server to request.
       */
      this.migrateServer = function(id) {
        return apiService.post('/api/nova/servers/' + id + '/migrate')
          .error(function () {
            //toastService.add('error', gettext('Unable to migrate server.'));
        });
      };

      /**
       * @name horizon.openstack-service-api.novaAPI.livemigrateServer
       * @description
       * Live migrate a single server by ID with a new host
       * @param {Object} id
       * The server id to live migrate
       * @param {Object} param
       *
       * Example param object
       * {
       *    "host": "xxxx",
       * }
       *
       * Description of properties on the param
       *
       * @property {string} param.host
       * The new host of the server to live migrate. Required.
       */
      this.liveMigrateServer = function(id, param) {
        return apiService.post('/api/nova/servers/' + id + '/livemigrate', param)
          .error(function () {
            var msg = gettext('Unable to live migrate server %s.');
            var name = param.name ? param.name : '';
            toastService.add('error', interpolate(msg, [name]));
        });
      };

      /**
       * @name horizon.openstack-service-api.novaAPI.resizeServer
       * @description
       * Resize a single server by ID with a new flavor
       * @param {Object} id
       * The server id to resize
       * @param {Object} param
       *
       * Example param object
       * {
       *    "flavor": "xxxx",
       * }
       *
       * Description of properties on the param
       *
       * @property {string} param.flavor
       * The new flavor of the server to resize. Required.
       */
      this.resizeServer = function(id, param) {
        return apiService.post('/api/nova/servers/' + id + '/resize', param)
          .error(function (message, status) {
            if(status == 403 && message.indexOf('Quota exceeded') >= 0){
              toastService.add('error', gettext('Quota exceeded, Unable to resize server.'));
            }else{
              toastService.add('error', gettext('Unable to resize server.'));
            }
        });
      };

      /**
       * @name horizon.openstack-service-api.novaAPI.confirmresizeServer
       * @description
       * Confirm resize a single server by ID
       * @param {string} id
       * Specifies the id of the server to request.
       */
      this.confirmresizeServer = function(id) {
        return apiService.post('/api/nova/servers/' + id + '/confirm_resize')
          .error(function () {
            toastService.add('error', gettext('Unable to confirm resize server.'));
        });
      };

      /**
       * @name horizon.openstack-service-api.novaAPI.revertresizeServer
       * @description
       * Revert resize a single server by ID
       * @param {string} id
       * Specifies the id of the server to request.
       */
      this.revertresizeServer = function(id) {
        return apiService.post('/api/nova/servers/' + id + '/revert_resize')
          .error(function () {
            toastService.add('error', gettext('Unable to revert resize server.'));
        });
      };

      /**
       * @name horizon.openstack-service-api.novaAPI.startServer
       * @description
       * Start a single server by ID
       * @param {string} id
       * Specifies the id of the server to request.
       */
      this.startServer = function(id) {
        return apiService.post('/api/nova/servers/' + id + '/start')
          .error(function () {
            toastService.add('error', gettext('Unable to start server.'));
        });
      };

      /**
       * @name horizon.openstack-service-api.novaAPI.stopServer
       * @description
       * Stop a single server by ID
       * @param {string} id
       * Specifies the id of the server to request.
       */
      this.stopServer = function(id) {
        return apiService.post('/api/nova/servers/' + id + '/stop')
          .error(function () {
            toastService.add('error', gettext('Unable to stop server.'));
        });
      };

      /**
       * @name horizon.openstack-service-api.novaAPI.netassociateServer
       * @description
       * Associate server with a new network
       * @param {Object} id
       * The server id to associate network
       * @param {Object} param
       *
       * Example param object
       * {
       *    "port_id": "xxxx",
       *    "network_id": "xxxx",
       *    "fixed_ip": "xxxx",
       * }
       *
       * Description of properties on the param
       *
       * @property {string} param.port_id
       * Port id that created automatically in a network subnet, Required
       * @property {string} param.network_id
       * Network id that associated with server. Required.
       * @property {string} param.fixed_ip
       * Fixed ip in subnet. Optional.
       */
      this.netassociateServer = function(id, param) {
        return apiService.post('/api/nova/servers/' + id + '/netassociate', param)
          .error(function () {
            toastService.add('error', gettext('Unable to associate network to server.'));
        });
      };

      /**
       * @name horizon.openstack-service-api.novaAPI.netdisassociateServer
       * @description
       * Disassociate a port in server
       * @param {Object} id
       * The server id to disassociate network
       * @param {Object} param
       *
       * Example param object
       * {
       *    "port_id": "xxxx",
       * }
       *
       * Description of properties on the param
       *
       * @property {string} param.port_id
       * Port id that associated with server to disassociate. Required
       */
      this.netdisassociateServer = function(id, param) {
        return apiService.post('/api/nova/servers/' + id + '/netdisassociate', param)
          .error(function () {
            toastService.add('error', gettext('Unable to disassociate network of server.'));
        });
      };

      /**
       * @name horizon.openstack-service-api.novaAPI.attachVolume2Server
       * @description
       * Attach a volume to a server
       * @param {Object} id
       * The server id to attach a volume
       * @param {Object} param
       *
       * Example param object
       * {
       *    "volume_id": "xxxx",
       *    "device": "xxxx",
       * }
       *
       * Description of properties on the param
       *
       * @property {string} param.volume_id
       * Volume id that to attach to server, Required
       * @property {string} param.device
       * Mounting point of volume that to attach to server. Required.
       */
      this.attachVolume2Server = function(id, param) {
        return apiService.post('/api/nova/servers/' + id + '/volattach', param)
          .error(function () {
            toastService.add('error', gettext('Unable to attach volume to the server.'));
        });
      };

      /**
       * @name horizon.openstack-service-api.novaAPI.dettachVolume4Server
       * @description
       * Dettach the volume has been attached to the server
       * @param {Object} id
       * The server id to dettach network
       * @param {Object} param
       *
       * Example param object
       * {
       *    "volume_id": "xxxx",
       * }
       *
       * Description of properties on the param
       *
       * @property {string} param.volume_id
       * Attached volume id, Required
       */
      this.detachVolume4Server = function(id, param) {
        return apiService.post('/api/nova/servers/' + id + '/voldetach', param)
          .error(function () {
            toastService.add('error', gettext('Unable to detach volume from the server.'));
        });
      };


      /**
       * @name horizon.openstack-service-api.novaAPI.lockServer
       * @description
       * Lock a single server by ID
       * @param {string} id
       * Specifies the id of the server to request.
       */
      this.lockServer = function(id, showError) {
        return apiService.post('/api/nova/servers/' + id + '/lock')
          .error(function () {
            showError && toastService.add('error', gettext('Unable to lock server.'));
        });
      };

      /**
       * @name horizon.openstack-service-api.novaAPI.unlockServer
       * @description
       * Unlock a single server by ID
       * @param {string} id
       * Specifies the id of the server to request.
       */
      this.unlockServer = function(id, showError) {
        return apiService.post('/api/nova/servers/' + id + '/unlock')
          .error(function () {
            showError && toastService.add('error', gettext('Unable to unlock server.'));
        });
      };

      /**
       * @name horizon.openstack-service-api.novaAPI.volumesServer
       * @description
       * Get single server's volumes by ID
       * @param {string} id
       * Specifies the id of the server to request.
       */
      this.getServerVolumes = function(id) {
        return apiService.get('/api/nova/servers/' + id + '/volumes')
          .error(function () {
            toastService.add('error', gettext('Unable to get server attached volumes.'));
        });
      };

      //Hypervisors

      /**
       * @name horizon.openstack-service-api.novaAPI.getHypervisors
       * @description
       * Get all hypervisors from nova
       */
      this.getHypervisors = function(param) {
        return apiService.get('/api/nova/hypervisors/'+param)
          .error(function () {
            toastService.add('error', gettext('Unable to get hypervisors.'));
        });
      };

      //Extensions

      /**
       * @name horizon.openstack-service-api.novaAPI.getExtensions
       * @description
       * Returns a list of enabled extensions.
       *
       * The listing result is an object with property "items". Each item is
       * an extension.
       * @example
       * The following is an example response:
       *
       *  {
       *    "items": [
       *      {
       *        "alias": "NMN",
       *        "description": "Multiple network support.",
       *        "links": [],
       *        "name": "Multinic",
       *        "namespace": "http://docs.openstack.org/compute/ext/multinic/api/v1.1",
       *        "updated": "2011-06-09T00:00:00Z"
       *      }
       *    ]
       *  }
       */
      this.getExtensions = function(config) {
        return apiService.get('/api/nova/extensions/', config)
          .error(function () {
            toastService.add('error', gettext('Unable to retrieve extensions.'));
          });
      };

      //Services

      /**
       * @name horizon.openstack-service-api.novaAPI.getServices
       * @description
       * Get all services from nova
       */
      this.getServices = function(binary) {
        var config = {'params': {binary: binary}};
        return apiService.get('/api/nova/services/', config)
          .error(function () {
            toastService.add('error', gettext('Unable to get nova services.'));
        });
      };

      /**
       * @name horizon.openstack-service-api.novaAPI.enableService
       * @description
       * Enable a nova compute service
       * @param {Object} node_id
       * ID of node to enable
       * @param {Object} param
       *
       * Example param object
       * {
       *    "binary": "nova-compute",
       * }
       *
       * Description of properties on the param
       *
       * @property {string} param.binary
       *  Name of service of nova compute to enable. Required
       */
      this.enableService = function(param) {
        return apiService.post('/api/nova/services/'+param.node_id+'/enable', param)
          .error(function () {
            toastService.add('error', gettext('Unable to enable compute services.'));
        });
      };

      /**
       * @name horizon.openstack-service-api.novaAPI.disableService
       * @description
       * Disable a nova compute service
       * @param {Object} node_id
       * ID of node to enable
       * @param {Object} param
       *
       * Example param object
       * {
       *    "binary": "nova-compute",
       *    "reason": "For maitainance",
       * }
       *
       * Description of properties on the param
       *
       * @property {string} param.binary
       *  Name of service of nova compute to disable. Required
       * @property {string} param.reason
       *  Reason of diable service. Required
       */
      this.disableService = function(param) {
        return apiService.post('/api/nova/services/'+param.node_id+'/disable', param)
          .error(function () {
            toastService.add('error', gettext('Unable to disable compute services.'));
        });
      };

      //Flavors

      /**
       * @name horizon.openstack-service-api.novaAPI.getFlavors
       * @description
       * Returns a list of flavors.
       *
       * The listing result is an object with property "items". Each item is
       * a flavor.
       *
       * @param {boolean} isPublic (optional)
       * True if public flavors should be returned. If not specified, the API
       * will return public flavors by default for Admins and only project
       * flavors for non-admins.
       * @param {boolean} getExtras (optional)
       * Also retrieve the extra specs. This is expensive (one extra underlying
       * call per flavor).
       */
      this.getFlavors = function(isPublic, getExtras) {
        var config = {is_public: isPublic, get_extras: getExtras};
        return apiService.get('/api/nova/flavors/', {'params': config})
          .success(function (data) {
            // The colon character ':' in the flavor data causes problems when used
            // in Angular $parse() statements. Since these values are used as keys
            // to lookup data (and may end up in a $parse()) provide "user-friendly"
            // attributes
            if ( data && data.items ) {
              data.items.map(function(item) {
                if ( item.hasOwnProperty('OS-FLV-EXT-DATA:ephemeral')) {
                  item.ephemeral = item['OS-FLV-EXT-DATA:ephemeral'];
                }
                if ( item.hasOwnProperty('OS-FLV-DISABLED:disabled')) {
                  item.disabled = item['OS-FLV-DISABLED:disabled'];
                }
                if ( item.hasOwnProperty('os-flavor-access:is_public')) {
                  item.is_public = item['os-flavor-access:is_public'];
                }
              });
            }
          })
          .error(function () {
            toastService.add('error', gettext('Unable to retrieve flavors.'));
          });
      };

      this.getBareMetalFlavors = function(isPublic, getExtras) {
        var config = {is_public: isPublic, get_extras: getExtras};
        return apiService.get('/api/nova/baremetalflavors/', {'params': config})
          .success(function (data) {
            // The colon character ':' in the flavor data causes problems when used
            // in Angular $parse() statements. Since these values are used as keys
            // to lookup data (and may end up in a $parse()) provide "user-friendly"
            // attributes
            if ( data && data.items ) {
              data.items.map(function(item) {
                if ( item.hasOwnProperty('OS-FLV-EXT-DATA:ephemeral')) {
                  item.ephemeral = item['OS-FLV-EXT-DATA:ephemeral'];
                }
                if ( item.hasOwnProperty('OS-FLV-DISABLED:disabled')) {
                  item.disabled = item['OS-FLV-DISABLED:disabled'];
                }
                if ( item.hasOwnProperty('os-flavor-access:is_public')) {
                  item.is_public = item['os-flavor-access:is_public'];
                }
              });
            }
          })
          .error(function () {
            toastService.add('error', gettext('Unable to retrieve flavors.'));
          });
      };
      this.getAllFlavors = function(getExtras) {
        var config = {get_extras: getExtras};
        return apiService.get('/api/nova/allflavors/', {'params': config})
          .success(function (data) {
            // The colon character ':' in the flavor data causes problems when used
            // in Angular $parse() statements. Since these values are used as keys
            // to lookup data (and may end up in a $parse()) provide "user-friendly"
            // attributes
            if ( data && data.items ) {
              data.items.map(function(item) {
                if ( item.hasOwnProperty('OS-FLV-EXT-DATA:ephemeral')) {
                  item.ephemeral = item['OS-FLV-EXT-DATA:ephemeral'];
                }
                if ( item.hasOwnProperty('OS-FLV-DISABLED:disabled')) {
                  item.disabled = item['OS-FLV-DISABLED:disabled'];
                }
                if ( item.hasOwnProperty('os-flavor-access:is_public')) {
                  item.is_public = item['os-flavor-access:is_public'];
                }
              });
            }
          })
          .error(function () {
            toastService.add('error', gettext('Unable to retrieve flavors.'));
          });
      };
      /**
       * @name horizon.openstack-service-api.novaAPI.getFlavor
       * @description
       * Get a single flavor by ID.
       * @param {string} id
       * Specifies the id of the flavor to request.
       * @param {boolean} getExtras (optional)
       * Also retrieve the extra specs for the flavor.
       * General user has no access.
       */
      this.getFlavor = function(id, getExtras, quiet) {
        var config = {'params': {}};
        if (getExtras) { config.params.get_extras = 'true'; }
        var promise = apiService.get('/api/nova/flavors/' + id, config);
        return quiet ? promise : promise.error(function () {
          toastService.add('error', gettext('Unable to retrieve flavor.'));
        });
      };

      /**
       * @name horizon.openstack-service-api.novaAPI.getFlavorFree
       * @description
       * Get a single flavor by ID.
       * @param {string} id
       * Specifies the id of the flavor to request.
       * @param {boolean} getExtras (optional)
       * Also retrieve the extra specs for the flavor.
       * No access control
       */
      this.getFlavorFree = function(id, getExtras) {
        var config = {'params': {}};
        if (getExtras) { config.params.get_extras = 'true'; }
        var promise = apiService.get('/api/nova/flavorsfree/' + id + '/', config);
        return promise.error(function () {
          toastService.add('error', gettext('Unable to retrieve flavor.'));
        });
      };

      /**
       * @name createFlavor
       * @description
       * Create a single flavor.
       * @param {flavor} flavor
       * Flavor to create
       * @returns {Object} The result of the API call
       */
      this.createFlavor = function(flavor) {
        return apiService.post('/api/nova/flavors/', flavor)
          .error(function () {
            toastService.add('error', gettext('Unable to create the flavor.'));
          });
      };

      /**
       * @name updateFlavor
       * @description
       * Update a single flavor.
       * @param {flavor} flavor
       * Flavor to update
       * @returns {Object} The result of the API call
       */
      this.updateFlavor = function(flavor) {
        return apiService.patch('/api/nova/flavors/' + flavor.id + '/', flavor)
          .error(function () {
            toastService.add('error', gettext('Unable to update the flavor.'));
          });
      };

      /**
       * @name deleteFlavor
       * @description
       * Delete a single flavor by ID.
       *
       * @param {String} flavorId
       * Flavor to delete
       *
       * @param {boolean} suppressError
       * If passed in, this will not show the default error handling
       * (horizon alert). The glance API may not have metadata definitions
       * enabled.
       * @returns {Object} The result of the API call
       */
      this.deleteFlavor = function(flavorId, suppressError) {
        var promise = apiService.delete('/api/nova/flavors/' + flavorId + '/');
        return suppressError ? promise : promise.error(function() {
          var msg = gettext('Unable to delete the flavor with id: %(id)s');
          toastService.add('error', interpolate(msg, { id: flavorId }, true));
        });
      };

      /**
       * @name horizon.openstack-service-api.novaAPI.getFlavorExtraSpecs
       * @description
       * Get a single flavor's extra specs by ID.
       * @param {string} id
       * Specifies the id of the flavor to request the extra specs.
       */
      this.getFlavorExtraSpecs = function(id) {
        return apiService.get('/api/nova/flavors/' + id + '/extra-specs/')
          .error(function () {
            toastService.add('error', gettext('Unable to retrieve the flavor extra specs.'));
        });
      };

     /**
      * @name horizon.openstack-service-api.nova.editFlavorExtraSpecs
      * @description
      * Update a single flavor's extra specs by ID.
      * @param {string} id
      * @param {object} updated New extra specs.
      * @param {[]} removed Names of removed extra specs.
      */
      this.editFlavorExtraSpecs = function(id, updated, removed) {
       return apiService.patch(
         '/api/nova/flavors/' + id + '/extra-specs/',
         {
           updated: updated,
           removed: removed
         }
       ).error(function () {
         toastService.add('error', gettext('Unable to edit the flavor extra specs.'));
       });
     };

     /**
      * @name horizon.openstack-service-api.nova.getAggregateExtraSpecs
      * @description
      * Get a single aggregate's extra specs by ID.
      * @param {string} id
      * Specifies the id of the flavor to request the extra specs.
      */
     this.getAggregateExtraSpecs = function(id) {
       return apiService.get('/api/nova/aggregates/' + id + '/extra-specs/')
         .error(function () {
           toastService.add('error', gettext('Unable to retrieve the aggregate extra specs.'));
       });
     };

     /**
      * @name horizon.openstack-service-api.nova.editAggregateExtraSpecs
      * @description
      * Update a single aggregate's extra specs by ID.
      * @param {string} id
      * @param {object} updated New extra specs.
      * @param {[]} removed Names of removed extra specs.
      */
      this.editAggregateExtraSpecs = function(id, updated, removed) {
       return apiService.patch(
         '/api/nova/aggregates/' + id + '/extra-specs/',
         {
           updated: updated,
           removed: removed
         }
       ).error(function () {
         toastService.add('error', gettext('Unable to edit the aggregate extra specs.'));
       });
     };

      this.getLenovoFlavorConfig = function() {
        return apiService.get('/api/nova/lenovoflavorconfig/');
      };
      this.getCreateKeypairUrl = function(keyPairName) {
        // NOTE: WEBROOT by definition must end with a slash (local_settings.py).
        return $window.WEBROOT + "api/nova/keypairs/" +
          encodeURIComponent(keyPairName) + "/";
      };
      this.getRegenerateKeypairUrl = function (keyPairName) {
        return this.getCreateKeypairUrl(keyPairName) + "?regenerate=true";
      };

      this.getMonitor = function(url, value){
        return apiService.get(url, {params: value})
          .error(function () {
            toastService.add('error', gettext('Unable to retrieve monitor.'));
          });
      };
      this.getMonitorMetaData = function(id){
        var url = '/project/instances/' + id + '/monitormetadata';
        return apiService.get(url)
          .error(function () {
            toastService.add('error', gettext('Unable to retrieve monitor.'));
          });
      };
      this.getHardwareUsage = function() {
             return apiService.get('/api/nova/hypervisorhardwareusage/')
                .error(function () {
                 toastService.add('error', gettext('Unable to get the hardware usage.'));
                 });
         };
      this.createServerGroup = function(newServerGroup) {
          return apiService.post('/api/nova/server_group/', newServerGroup)
              .error(function(){
                  toastService.add('error', gettext('Unable to create server group.'));
              });
      };
      this.listServerGroup = function(all_projects){
          var config = {'params': {'all_projects': all_projects}};
          return apiService.get('/api/nova/server_group/', config)
              .error(function(){
                  toastService.add('error', gettext('Unable to get server groups.'));
              })
      };
      this.deleteServerGroup = function(id){
          return apiService.delete('/api/nova/server_group/'+id)
              .error(function(){
                  var msg = gettext('Unable to delete the server group with id: %(id)s');
                    toastService.add('error', interpolate(msg, { id: id }, true));
              })
      };
    /**
         * @name horizon.openstack-service-api.novaAPI.updateMetadata
         * @description
         * update metadatas to a server
         * @param {Object} id
         * The server id to update metadata
         * @param {Object} param
         *
         * Example param object
         * {
         *    "metadata": {"":"","":""}
         * }
         *
         */
        this.updateMetadata = function(id, param) {
          return apiService.post('/api/nova/services/' + id + '/updatemetadata/', param)
            .error(function () {
              toastService.add('error', gettext('Unable to update metadata to the server.'));
          });
        };

        this.deleteMetadata = function(id, param) {
          return apiService.post('/api/nova/services/' + id + '/deletemetadata/', param)
            .error(function () {
              toastService.add('error', gettext('Unable to delete metadata to the server.'));
          });
        };
  }

  /**
   * @ngdoc service
   * @name horizon.openstack-service-api.novaExtensions
   * @description
   * Provides cached access to Nova Extensions with utilities to help
   * with asynchronous data loading. The cache may be reset at any time
   * by accessing the cache and calling removeAll. The next call to any
   * function will retrieve fresh results.
   *
   * The enabled extensions do not change often, so using cached data will
   * speed up results. Even on a local devstack in informal testing,
   * this saved between 30 - 100 ms per request.
   */
  angular
    .module('horizon.openstack-service-api')
    .factory('horizon.openstack-service-api.novaExtensions', NovaExtensionsAPI);

  NovaExtensionsAPI.$inject = ['$cacheFactory',
                               '$q',
                               'horizon.openstack-service-api.nova'];

  function NovaExtensionsAPI($cacheFactory, $q, novaAPI) {
    var service = {};
    service.cache = $cacheFactory('horizon.openstack-service-api.novaExtensions', {capacity: 1});

    service.get = function () {
      return novaAPI.getExtensions({cache: service.cache})
        .then(function (data) {
          return data.data.items;
        });
    };

    service.ifNameEnabled = function(desired) {
      var deferred = $q.defer();

      service.get().then(onDataLoaded, onDataFailure);

      function onDataLoaded(extensions) {
        if (enabled(extensions, 'name', desired)) {
          deferred.resolve();
        } else {
          deferred.reject(interpolate(
            gettext('Extension is not enabled: %(extension)s.'),
            {extension: desired},
            true));
        }
      }

      function onDataFailure() {
        deferred.reject(gettext('Cannot get the Nova extension list.'));
      }

      return deferred.promise;
    };

    // This is an alias to support the extension directive default interface
    service.ifEnabled = service.ifNameEnabled;

    function enabled(resources, key, desired) {
      if (resources) {
        return resources.some(function (resource) {
          return resource[key] === desired;
        });
      } else {
        return false;
      }
    }

    return service;
  }
}());
