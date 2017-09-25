(function () {
  'use strict';

  var module = angular.module('hz.dashboard.baremetal-launch-instance');

  /**
   * @ngdoc controller
   * @name hz.dashboard.launch-instance.LaunchInstanceSecurityGroupsCtrl
   * @description
   * Allows selection of security groups.
   */
  module.controller('LaunchBareInstanceSecurityGroupsCtrl', [
    'launchBareInstanceModel',
    function (launchInstanceModel) {
      var ctrl = this;

      ctrl.label = {
        title: gettext('Security Groups'),
        subtitle: gettext('Select the security groups.'),
        name: gettext('Name'),
        description: gettext('Description')
      };

      ctrl.tableLabels = {
        direction: gettext('Direction'),
        ethertype: gettext('Ether Type'),
        protocol: gettext('Protocol'),
        port_range_min: gettext('Min Port'),
        port_range_max: gettext('Max Port'),
        remote_ip_prefix: gettext('Remote')
      };

      ctrl.tableData = {
        available: launchInstanceModel.securityGroups,
        allocated: launchInstanceModel.newInstanceSpec.security_groups,
        displayedAvailable: [],
        displayedAllocated: []
      };

      ctrl.tableDetails =
        '/static/dashboard/launch-instance/security-groups/security-group-details.html';

      ctrl.tableHelp = {
        noneAllocText: gettext(
          'Select one or more security groups from the available groups below.'
        ),
        availHelpText: gettext('Select one or more')
      };

      ctrl.tableLimits = {
        maxAllocation: -1
      };

      ctrl.filterFacets = [
        {
          label: gettext('Name'),
          name: 'name',
          singleton: true
        },
        {
          label: gettext('Description'),
          name: 'description',
          singleton: true
        }
      ];

      ctrl.nullToString = function(value){
         return (value == null) ? gettext('Any') : value;
      };

      ctrl.remoteToString = function (remote_ip_prefix, remote_group_id) {
         var remote = ' - ';
         if (remote_ip_prefix != null){
            remote = gettext('CIDR') + ': ' + remote_ip_prefix;
         }
         if (remote_group_id != null){
            var remote_group_name = '';
            for(var i=0;i<launchInstanceModel.securityGroups.length;i++) {
              if(launchInstanceModel.securityGroups[i].id === remote_group_id) {
                remote_group_name = launchInstanceModel.securityGroups[i].name;
                break;
              }
            }
            remote = gettext('Security Groups') + ': ' + remote_group_name;
         }
         return remote;
      };
    }
  ]);

  /**
   * @ngdoc controller
   * @name hz.dashboard.launch-instance.LaunchInstanceSecurityGroupsHelpCtrl
   * @description
   * Provide help for selection of security groups and key pairs.
   */
  module.controller('LaunchBareInstanceSecurityGroupsHelpCtrl', [function () {
      var ctrl = this;

      ctrl.title = gettext('Security Groups Help');

      ctrl.paragraphs = [
        // jscs:disable maximumLineLength
        gettext('Security groups define a set of IP filter rules that determine how network traffic flows to and from an instance. Users can add additional rules to an existing security group to further define the access options for an instance. To create additional rules, go to the <b>Compute | Secuirty Groups</b> view, then find the security group and click <b>Groups Detail</b>.'),
        // jscs:enable maximumLineLength
        gettext('Security groups are project-specific and cannot be shared across projects.'),
        // jscs:disable maximumLineLength
        gettext('If a security group is not associated with an instance before it is launched, then you will have very limited access to the instance after it is deployed. You will only be able to access the instance from a VNC console.')
        // jscs:enable maximumLineLength
      ];
    }
  ]);
})();
