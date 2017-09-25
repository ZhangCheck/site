/*
 * © Copyright 2015,2016 Hewlett Packard Enterprise Development Company LP
 * © Copyright 2016 Cray Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function () {
  'use strict';

  angular
    .module('horizon.openstack-service-api')
    .factory('horizon.openstack-service-api.ironic', ironicAPI);

  ironicAPI.$inject = [
    'horizon.framework.util.http.service',
    'horizon.framework.widgets.toast.service'
  ];

  /**
   * Service that provides access to the Ironic client API
   *
   * @param {object} apiService - HTTP service
   * @param {object} toastService - User message service
   * @return {object} Ironic API service
   */
  function ironicAPI(apiService, toastService) {
    var service = {
      createNode: createNode,
      deleteNode: deleteNode,
      deletePort: deletePort,
      getDrivers: getDrivers,
      getDriverProperties: getDriverProperties,
      getNode: getNode,
      getNodes: getNodes,
      getPortsWithNode: getPortsWithNode,
      createPort: createPort,
      updatePort: updatePort,
      updateNode: updateNode,
      updateNodeTenant: updateNodeTenant,
      powerOffNode: powerOffNode,
      powerOnNode: powerOnNode,
      putNodeInMaintenanceMode: putNodeInMaintenanceMode,
      removeNodeFromMaintenanceMode: removeNodeFromMaintenanceMode,
      removeErrNodePortFlavor: removeErrNodePortFlavor
    };

    return service;

    /**
     * Retrieve a list of nodes
     * http://docs.openstack.org/developer/ironic/webapi/v1.html#get--v1-nodes
     *
     * @return {promise} Node collection in JSON
     * http://docs.openstack.org/developer/ironic/webapi/v1.html#NodeCollection
     */
    function getNodes() {
      return apiService.get('/api/ironic/nodes/')
        .error(function() {
          toastService.add('error',
                           gettext('Unable to retrieve Ironic nodes.'));
        });
    }

    /**
     * Retrieve information about the given node.
     *
     * http://docs.openstack.org/developer/ironic/webapi/v1.html#get--v1-
     * nodes-(node_ident)
     *
     * @param {string} uuid – UUID or logical name of a node.
     * @return {promise} Node
     */
    function getNode(uuid) {
      return apiService.get('/api/ironic/nodes/' + uuid)
        .error(function(reason) {
          var msg = gettext('Unable to retrieve the Ironic node: %s');
          toastService.add('error', interpolate(msg, [reason], false));
        });
    }

    /**
     * Retrieve a list of ports associated with a node.
     *
     * http://docs.openstack.org/developer/ironic/webapi/v1.html#get--v1-ports
     *
     * @param {string} uuid – UUID or logical name of a node.
     * @return {promise} List of ports
     */
    function getPortsWithNode(uuid) {
      var config = {
        params : {
          node_id: uuid
        }
      };
      return apiService.get('/api/ironic/ports/', config)
        .error(function(reason) {
          var msg = gettext(
            'Unable to retrieve the Ironic node ports: %s');
          toastService.add('error', interpolate(msg, [reason], false));
        });
    }

    /**
     * Put the node in maintenance mode.
     *
     * http://docs.openstack.org/developer/ironic/webapi/v1.html#
     * put--v1-nodes-(node_ident)-maintenance
     *
     * @param {string} uuid – UUID or logical name of a node.
     * @param {string} reason – Reason for why node is being put into
     * maintenance mode
     * @return {promise} Promise
     */
    function putNodeInMaintenanceMode(uuid, reason) {
      var data = {
        maint_reason: reason ? reason : gettext("No maintenance reason given.")
      };
      return apiService.patch('/api/ironic/nodes/' + uuid + '/maintenance',
                              data)
        .error(function(reason) {
          var msg = gettext(
            'Unable to put the Ironic node in maintenance mode: %s');
          toastService.add('error', interpolate(msg, [reason], false));
        });
    }
    function updatePort(port_id, port) {
      var data = {
        port: port
      };
      return apiService.patch('/api/ironic/ports/' + port_id ,
                              data)
        .error(function(port) {
          var msg = gettext(
            'Unable to update the Ironic ports: %s');
          if(port.indexOf('Expected a MAC address but received')!=-1){
            toastService.add('error', interpolate(msg, [gettext('the mac address does not match the rule')], false));
          }else{
            toastService.add('error', interpolate(msg, [port], false));
          }
        });
    }
    function updateNodeTenant(node_id, node) {
      var data = {
        node: node
      };
      return apiService.patch('/api/ironic/nodetenant/' + node_id ,
                              data)
        .error(function(port) {
          var msg = gettext(
            'Unable to update the Ironic nodes: %s');
          toastService.add('error', interpolate(msg, [node.name], false));
        });
    }
    function updateNode(node_id, node) {
      var data = {
        node: node
      };
      return apiService.patch('/api/ironic/nodes/' + node_id ,
                              data)
        .error(function(port) {
          var msg = gettext(
            'Unable to update the Ironic nodes: %s');
          toastService.add('error', interpolate(msg, [node.name], false));
        });
    }
    /**
     * Remove the node from maintenance mode.
     *
     * http://docs.openstack.org/developer/ironic/webapi/v1.html#
     * delete--v1-nodes-(node_ident)-maintenance
     *
     * @param {string} uuid – UUID or logical name of a node.
     * @return {promise} Promise
     */
    function removeNodeFromMaintenanceMode(uuid) {
      return apiService.delete('/api/ironic/nodes/' + uuid + '/maintenance')
        .error(function(reason) {
          var msg = gettext('Unable to remove the Ironic node ' +
                            'from maintenance mode: %s');
          toastService.add('error', interpolate(msg, [reason], false));
        });
    }

    /**
     * Set the power state of the node.
     *
     * http://docs.openstack.org/developer/ironic/webapi/v1.html#
     * put--v1-nodes-(node_ident)-states-power
     *
     * @param {string} uuid – UUID or logical name of a node.
     * @return {promise} Promise
     */
    function powerOnNode(uuid) {
      var data = {
        state: 'on'
      };
      return apiService.patch('/api/ironic/nodes/' + uuid + '/states/power',
                              data)
        .error(function(reason) {
          var msg = gettext('Unable to power on the node: %s');
          toastService.add('error', interpolate(msg, [reason], false));
        });
    }

    /**
     * Set the power state of the node.
     *
     * http://docs.openstack.org/developer/ironic/webapi/v1.html#
     * put--v1-nodes-(node_ident)-states-power
     *
     * @param {string} uuid – UUID or logical name of a node.
     * @return {promise} Promise
     */
    function powerOffNode(uuid) {
      var data = {
        state: 'off'
      };
      return apiService.patch('/api/ironic/nodes/' + uuid + '/states/power',
                              data)
        .error(function(reason) {
          var msg = gettext('Unable to power off the node: %s');
          toastService.add('error', interpolate(msg, [reason], false));
        });
    }

    /**
     * Create an Ironic node
     *
     * http://docs.openstack.org/developer/ironic/webapi/v1.html#post--v1-nodes
     *
     * @param {object} params – Object containing parameters that define
     * the node to be created
     * @return {promise} Promise
     */
    function createNode(params) {
      var data = {
        node: params
      };
      return apiService.post('/api/ironic/nodes/', data)
        .success(function() {
        })
        .error(function(reason) {
          var msg = gettext('Unable to create node: %s');
          if (reason.indexOf('already exists')!= -1){
            reason = 'The name of the node already exists.';
          }else if(reason.indexOf('Ironic nodes exceed the max limitation')!= -1) {
            reason = 'Ironic nodes exceed the max limitation.'
          }
          toastService.add('error', interpolate(msg, [gettext(reason)], false));
        });
    }
    /**
     * Create an Ironic port
     *
     * http://docs.openstack.org/developer/ironic/webapi/v1.html#post--v1-ports
     *
     * @param {object} params – Object containing parameters that define
     * the node to be created
     * @return {promise} Promise
     */
    function createPort(params) {
      var data = {
        port: params
      };
      return apiService.post('/api/ironic/ports/', data)
        .success(function() {
        })
        .error(function(reason) {
          var msg = gettext('Unable to create port: %s');
          if(reason.indexOf('Expected a MAC address but received')!=-1){
            toastService.add('error', interpolate(msg, [gettext('the mac address does not match the rule')], false));
          }else{
            toastService.add('error', interpolate(msg, [reason], false));
          }
        });
    }
    /**
     * Delete the specified node from inventory
     *
     * http://docs.openstack.org/developer/ironic/webapi/v1.html#
     * delete--v1-nodes
     *
     * @param {string} nodeIdent – UUID or logical name of a node.
     * @return {promise} Promise
     */
    function deleteNode(nodeIdent) {
      var data = {
        node: nodeIdent
      };
      return apiService.delete('/api/ironic/nodes/', data)
        .success(function() {
        })
        .error(function(reason) {
          var msg = gettext('Unable to delete node %s: %s');
          toastService.add(
            'error',
            interpolate(msg, [nodeIdent, reason], false));
        });
    }
        /**
     * Delete the specified port from inventory
     *
     * http://docs.openstack.org/developer/ironic/webapi/v1.html#
     * delete--v1-nodes
     *
     * @param {string} portIdent – UUID or logical name of a node.
     * @return {promise} Promise
     */
    function deletePort(portIdent) {
      var data = {
        port: portIdent
      };
      return apiService.delete('/api/ironic/ports/', data)
        .success(function() {
        })
        .error(function(reason) {
          var msg = gettext('Unable to delete port %s: %s');
          toastService.add(
            'error',
            interpolate(msg, [portIdent, reason], false));
        });
    }

    /**
     * Retrieve the list of Ironic drivers
     *
     * http://docs.openstack.org/developer/ironic/webapi/v1.html#get--v1-drivers
     *
     * @return {promise} Driver collection in JSON
     * http://docs.openstack.org/developer/ironic/webapi/v1.html#DriverList
     */
    function getDrivers() {
      return apiService.get('/api/ironic/drivers/').error(function(reason) {
        var msg = gettext('Unable to retrieve Ironic drivers: %s');
        toastService.add('error', interpolate(msg, [reason], false));
      });
    }

    /**
     * Retrieve properities of a specified driver
     *
     * http://docs.openstack.org/developer/ironic/webapi/v1.html#
     * get--v1-drivers-properties
     *
     * @param {string} driverName - Driver name
     * @returns {promise} Property list
     */
    function getDriverProperties(driverName) {
      return apiService.get(
        '/api/ironic/drivers/' + driverName + '/properties').error(
          function(reason) {
            var msg = gettext(
              'Unable to retrieve driver properties: %s');
            toastService.add('error', interpolate(msg, [reason], false));
          });
    }

    function removeErrNodePortFlavor(instance_id, flavor_id){
      return apiService.delete(
        '/api/ironic/errnode/'+instance_id+'/'+flavor_id).error(
          function(err) {

          });
    }
  }

}());
