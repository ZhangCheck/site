/*
Copyright 2017 EasyStack, Inc.
*/
(function () {
  'use strict';

  angular
    .module('horizon.openstack-service-api')
    .service('horizon.openstack-service-api.trove', TroveAPI);

  TroveAPI.$inject = ['horizon.framework.util.http.service',
                     'horizon.framework.widgets.toast.service'];

  /**
   * @ngdoc service
   * @name horizon.openstack-service-api.trove
   * @description Provides access to Trove APIs.
   */
  function TroveAPI(apiService, toastService) {

      this.getDatabaseInstances = function() {
        return apiService.get('/api/troves/instances/')
      };

      this.createDatabaseInstance = function(instance) {
        return apiService.post('/api/troves/instances/', instance)
      };

      this.getDatabaseClusters = function() {
        return apiService.get('/api/troves/clusters/')
      };

      this.createDatabaseCluster = function(cluster) {
        return apiService.post('/api/troves/clusters/', cluster)
          .error(function () {
            toastService.add('error', gettext('Unable to create clusters.'));
        });
      };

      this.deleteDatabaseCluster = function(clusterId) {
        return apiService.delete('/api/troves/cluster/' + clusterId)
          .error(function () {
            toastService.add('error', gettext('Unable to delete clusters.'));
        });
      };

      this.forceDeleteDatabaseCluster = function(instanceId) {
        return apiService.delete('/api/troves/cluster/' + instanceId + '/forceDelete')
      };

      this.getDatabaseCluster = function(clusterId) {
        return apiService.get('/api/troves/cluster/' + clusterId)
      };

      this.getDatabaseClusterNodes = function(clusterId) {
        return apiService.get('/api/troves/cluster/' + clusterId + '/nodes')
          .error(function () {
            toastService.add('error', gettext('Unable to retrieve cluster nodes.'));
        });
      };

      this.deleteDatabaseClusterNodes = function(node) {
        return apiService.delete('/api/troves/cluster/' + node.cluster_id + '/nodes', node)
          .error(function () {
            toastService.add('error', gettext('Unable to delete cluster nodes.'));
        });
      };

      this.createDatabaseClusterNode = function(node) {
        return apiService.post('/api/troves/nodes/', node)
          .error(function () {
            toastService.add('error', gettext('Unable to add cluster nodes.'));
        });
      };

      this.getDatabaseInstance = function(instanceId) {
        return apiService.get('/api/troves/instance/' + instanceId)
      };

      this.deleteDatabaseInstance = function(instanceId) {
        return apiService.delete('/api/troves/instance/' + instanceId)
      };

      this.restartDatabaseInstance = function(instanceId) {
        return apiService.patch('/api/troves/instance/' + instanceId)
          .error(function () {
            toastService.add('error', gettext('Unable to restart instance.'));
        });
      };

      this.editDatabaseInstance = function(instance) {
        return apiService.patch('/api/troves/instance/' + instance.id + '/edit', instance)
          .error(function () {
            toastService.add('error', gettext('Unable to edit instance.'));
        });
      };

      this.forceDeleteDatabaseInstance = function(instanceId) {
        return apiService.delete('/api/troves/instance/' + instanceId + '/edit')
      };

     this.attachDatabaseConfiguration = function(instance) {
        return apiService.patch('/api/troves/instance/' + instance.id + '/configuration', instance)
          .error(function () {
            toastService.add('error', gettext('Unable to attach configuration.'));
        });
      };

      this.detachDatabaseConfiguration = function(instance_id) {
        return apiService.delete('/api/troves/instance/' + instance_id + '/configuration')
          .error(function () {
            toastService.add('error', gettext('Unable to detach configuration.'));
        });
      };

      this.resizeDatabaseInstance = function(flavor) {
        return apiService.post('/api/troves/resizes/', flavor)
          .error(function () {
            toastService.add('error', gettext('Unable to resize instance flavor.'));
        });
      };

      this.resizeDatabaseVolume = function(volume) {
        return apiService.patch('/api/troves/resizes/', volume)
          .error(function () {
            toastService.add('error', gettext('Unable to resize instance volume.'));
        });
      };

      this.getAllDatastoreTypes = function() {
        return apiService.get('/api/troves/datastores/type')
          .error(function () {
            toastService.add('error', gettext('Unable to retrieve datastore versions.'));
        });
      };

      this.getDatastoreVersions = function(datastore) {
        var config = {datastore: datastore};
        return apiService.get('/api/troves/datastores/', {'params': config})
          .error(function () {
            toastService.add('error', gettext('Unable to retrieve datastore versions.'));
        });
      };

      this.getUsers = function(instanceId) {
        return apiService.get('/api/troves/users/' + instanceId)
          .error(function () {
            toastService.add('error', gettext('Unable to retrieve users.'));
        });
      };

      this.getUser = function(instanceId, user) {
        var config = {instance_id: instanceId, username: user.name , hostname:user.host};
        return apiService.get('/api/troves/users/', {'params': config}).error(function() {
          toastService.add('error', gettext('Unable to retrieve users.'));
        });
      };

      this.deleteUser = function(instanceId, user) {
        return apiService.delete('/api/troves/users/' + instanceId, user)
          .error(function () {
            toastService.add('error', gettext('Unable to delete users.'));
        });
      };

      this.createUser = function(user) {
        return apiService.post('/api/troves/users/', user)
          .error(function (data) {
          if (data && data.indexOf('already exists')!=-1) {
            toastService.add('error', interpolate(gettext('A user with the name %s already exists'), [user.name]));
          } else if (data && data.indexOf('it is either malformed or otherwise incorrect')!=-1) {
            toastService.add('error', gettext('The host pattern is incorrect.'));
          } else {
            toastService.add('error', gettext('Unable to create user.'));
          }
        });
      };

      this.editUsers = function(user) {
        return apiService.patch('/api/troves/users/', user)
          .error(function () {
            toastService.add('error', gettext('Unable to edit user.'));
        });
      };

      this.enableRootUser = function(instanceId) {
        return apiService.patch('/api/troves/users/' + instanceId)
          .error(function () {
            toastService.add('error', gettext('Unable to enable root user.'));
        });
      };

      this.getFlavors = function() {
        return apiService.get('/api/troves/flavors/')
          .error(function () {
            toastService.add('error', gettext('Unable to retrieve instance flavors.'));
        });
      };

      this.getBackups = function(instanceId) {
        return apiService.get('/api/troves/backups/' + instanceId)
          .error(function () {
            toastService.add('error', gettext('Unable to retrieve backups.'));
        });
      };

      this.getAllInstanceBackups = function() {
        return apiService.get('/api/troves/backups/')
          .error(function () {
            toastService.add('error', gettext('Unable to retrieve backups.'));
        });
      };

      this.getBackup = function(backupId) {
        return apiService.get('/api/troves/backup/' + backupId)
          .error(function () {
            toastService.add('error', gettext('Unable to retrieve backups.'));
        });
      };

      this.createBackup = function(backup) {
        return apiService.post('/api/troves/backups/', backup)
          .error(function () {
            toastService.add('error', gettext('Unable to create backup.'));
        });
      };

      this.deleteBackup = function(instanceId, backup) {
        return apiService.delete('/api/troves/backups/' + instanceId, backup)
          .error(function () {
            toastService.add('error', gettext('Unable to delete backup.'));
        });
      };

      this.getDatabases = function(instanceId) {
        return apiService.get('/api/troves/databases/' + instanceId + '/')
          .error(function () {
            toastService.add('error', gettext('Unable to retrieve databases.'));
        });
      };

      this.createDatabase = function(database) {
        return apiService.post('/api/troves/databases/', database)
          .error(function () {
            toastService.add('error', gettext('Unable to create database.'));
        });
      };

      this.deleteDatabase = function(instanceId, user) {
        return apiService.delete('/api/troves/databases/' + instanceId, user)
          .error(function () {
            toastService.add('error', gettext('Unable to delete database.'));
        });
      };

      this.getConfigurations = function() {
        return apiService.get('/api/troves/configurations/')
          .error(function () {
            toastService.add('error', gettext('Unable to retrieve database configuration.'));
        });
      };

     this.createConfigurations = function(configuration) {
        return apiService.post('/api/troves/configurations/', configuration)
          .error(function () {
            toastService.add('error', gettext('Unable to create database configuration.'));
        });
      };

      this.getConfiguration = function(configuration_id) {
        return apiService.get('/api/troves/configurations/' + configuration_id)
          .error(function () {
            toastService.add('error', 'Unable to get database configuration.');
        });
      };

      this.editConfiguration = function(configuration) {
        return apiService.patch('/api/troves/configurations/' + configuration.id, configuration)
          .error(function () {
            toastService.add('error', 'Unable to edit database configuration.');
        });
      };

     this.deleteConfiguration = function(configuration_id) {
        return apiService.delete('/api/troves/configurations/' + configuration_id)
          .error(function () {
            toastService.add('error', 'Unable to delete database configuration.');
        });
      };

      this.getDefaultValues = function(group_id) {
        return apiService.get('/api/troves/configurations/' + group_id + '/values')
          .error(function () {
            toastService.add('error', gettext('Unable to create database configuration.'));
        });
      };

     this.getDefaultValues = function(data) {
        var config = {datastore: data.datastore_name, datastore_version: data.datastore_version_id};
        return apiService.get('/api/troves/configuration/parameters', {'params': config}).error(function() {
          toastService.add('error', gettext('Unable to retrieve users.'));
        });
      };

      this.getConfigurationInstances = function(group_id) {
        return apiService.get('/api/troves/configurations/' + group_id + '/instances')
          .error(function () {
            toastService.add('error', gettext('Unable to retrieve database configuration.'));
        });
      };
  }
}());
