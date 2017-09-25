/*
 * Copyright 2015 IBM Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(function () {
  'use strict';

  angular
    .module('horizon.openstack-service-api')
    .factory('horizon.openstack-service-api.sahara', saharaAPI);

  saharaAPI.$inject = [
    'horizon.framework.util.http.service',
    'horizon.framework.widgets.toast.service'
  ];

  /**
   * @ngdoc service
   * @name horizon.openstack-service-api.sahara
   * @description Provides direct pass through to sahara with NO abstraction.
   * @param apiService The horizon core API service.
   * @param toastService The horizon toast service.
   * @returns The sahara service API.
   */

  function saharaAPI(apiService, toastService) {
    var service = {
      checkClusterResource: checkClusterResource,
      getClusters: getClusters,
      getTemplates: getTemplates,
      getTemplatesall: getTemplatesall,
      getTemplate_id: getTemplate_id,
      deleteTemplate_id: deleteTemplate_id,
      createCluster: createCluster,
      createTemplateCluster: createTemplateCluster,
      getCluster: getCluster,
      editCluster: editCluster,
      scaleCluster: scaleCluster,
      getPlugins: getPlugins,
      getClusterTemplate: getClusterTemplate,
      deleteSaharaCluster: deleteSaharaCluster,
      getSaharaFlavors: getSaharaFlavors,
      detailSaharaCluster: detailSaharaCluster,
      updateTemplate: updateTemplate,
      refreshCluster: refreshCluster,
      checkClusterName: checkClusterName,
      checkClusterTemplateName: checkClusterTemplateName,
      filterClusterNetwork: filterClusterNetwork
    };

    return service;

    function checkClusterResource(resource_name){
      return apiService.get('/api/sahara/check_cluster_resource/'+ resource_name + '/')
       .error(function(){
          toastService.add('error', gettext('Unable to check cluster resource.'));
        })
    }

    function getClusters(params){
      var config = (params) ? {'params': params} : {};
      return apiService.get('/api/sahara/clusters/', config)
        .error(function (){
          toastService.add('error', gettext('Unable to retrieve Clusters.'));
        })
    }

    function createCluster(param){
     return apiService.post('/api/sahara/clusters/', param)
        .error(function (){
          toastService.add('error', gettext('Unable to create clusters.'));
        })
    }

    function getTemplates(plugin_name, param){
      var config = param ? {'params':{'scope':param}} : {};
      return apiService.get('/api/sahara/templates/'+ plugin_name + '/', config)
       .error(function(){
          toastService.add('error', gettext('Unable to get data.'));
        })
    }

    function getTemplate_id(template_id){
      return apiService.get('/api/sahara/template/'+ template_id + '/')
       .error(function(){
          toastService.add('error', gettext('Unable to get data.'));
        })
    }

    function deleteTemplate_id(template_id){
      return apiService.delete('/api/sahara/template/'+ template_id + '/')
       .error(function(){
          toastService.add('error', gettext('Unable to delete template.'));
        })
    }

    function getTemplatesall(){
      return apiService.get('/api/sahara/templates/all/')
       .error(function(){
          toastService.add('error', gettext('Unable to get data.'));
        })
    }

    function createTemplateCluster(plugin_name, param){
     return apiService.post('/api/sahara/templates/'+ plugin_name + '/', param)
        .error(function (){
          toastService.add('error', gettext('Unable to create Template.'));
        })
    }

    function getCluster(id){
      return apiService.get('/api/sahara/cluster/'+ id + '/')
       .error(function(){
          toastService.add('error', gettext('Unable to retrieve Cluster.'));
        })
    }

    function editCluster(id, params){
      return apiService.patch('/api/sahara/cluster/'+ id + '/', params)
       .error(function(){
          toastService.add('error', gettext('Unable to update Cluster.'));
        })
    }

    function scaleCluster(id, params){
      return apiService.put('/api/sahara/cluster/'+ id + '/', params)
       .error(function(){
          toastService.add('error', gettext('Unable to update Cluster.'));
        })
    }

    function getPlugins(){
      return apiService.get('/api/sahara/plugins/')
        .error(function (){
          toastService.add('error', gettext('Unable to retrieve plugins.'));
      })
    }

    function getClusterTemplate(plugin_name){
      return apiService.get('/api/sahara/templates/' + plugin_name + '/')
        .error(function (){
          toastService.add('error', gettext('Unable to retrieve cluster template.'));
      })
    }

    function deleteSaharaCluster(cluster, quiet){
      var promise = apiService.delete('/api/sahara/cluster/'+ cluster.id + '/');
      return quiet ? promise : promise.error(function (response, status) {
          toastService.add('error',
              interpolate(gettext('Unable to delete Clusters: %s.'), [cluster.name]))
      });
    }


    function getSaharaFlavors(plugin_name){
      return apiService.get('/api/sahara/flavors/' + plugin_name + '/')
        .error(function (){
          toastService.add('error', gettext('Unable to retrieve flavors.'));
      })
    }

    function detailSaharaCluster(id){
      return apiService.get('/api/sahara/cluster/'+ id + '/')
        .error(function (){
          toastService.add('error', gettext('Unable to get detail.'));
      })
    }

    function updateTemplate(id, params){
      return apiService.patch('/api/sahara/template/'+ id + '/', params)
       .error(function(){
          toastService.add('error', gettext('Unable to update Template.'));
        })
    }

    function refreshCluster(id) {
        return apiService.get('/api/sahara/cluster/'+ id + '/')
    }

    function checkClusterName(name){
        return apiService.get('/api/sahara/clustername/'+ name + '/');
    }

    function checkClusterTemplateName(name){
        return apiService.get('/api/sahara/templatename/'+ name + '/');
    }

    function filterClusterNetwork(){
      return apiService.get('/api/sahara/filter_cluster_network/')
        .error(function (){
          toastService.add('error', gettext('Unable to retrieve networks.'));
      })
    }
  }
}());
