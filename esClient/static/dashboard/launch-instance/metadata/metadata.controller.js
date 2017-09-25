(function () {
    'use strict';

    angular
        .module('hz.dashboard.launch-instance')
        .factory('LaunchInstanceMetaDataAction', LaunchInstanceMetaDataAction)
        .controller('LaunchInstanceMetaDataController', LaunchInstanceMetaDataController);

    LaunchInstanceMetaDataController.$inject = [
        '$scope',
        'LaunchInstanceMetaDataAction',
        'launchInstanceModel'
    ];

    function LaunchInstanceMetaDataController($scope, metadataAction, launchInstanceModel) {
        $scope.metadata = [];
        $scope.trans = {
            TITLE: gettext('Metadata Added'),
            NAME: gettext('Key'),
            EDITNAME: gettext('Edit name'),
            ATTR: gettext('Value'),
            EDITATTR: gettext('Edit value'),
            NODATA: gettext('No data, click the button below to add'),
            ADDDATA: gettext('Add a new metadata mannually'),
            KEYLENGTHLESS: gettext('Key length should be less than 256 chars.'),
            VALUELENGTHLESS: gettext('Value length should be less than 256 chars.'),
            KEYINVALID: gettext('The key name does not match the need.'),
            VALUEINVALID: gettext('The vaule name does not match the need.')
        };

        $scope.action = {
            add: function(){
                new metadataAction().add($scope.metadata);
            },
            remove: function(index){
                new metadataAction().remove(index, $scope.metadata);
            }
        };

        $scope.$watchCollection('metadata', function(newv, oldv){
            launchInstanceModel.newInstanceSpec.metadata = [];
            for( var i = 0, len = newv.length; i < len; i++ ) {
                launchInstanceModel.newInstanceSpec.metadata[i] = newv[i];
            }
        })
    }

    function LaunchInstanceMetaDataAction() {
        function action() {};

        action.prototype.add = function(data){
            var temp = {key: '', value: ''};
            data.push(temp);
        };

        action.prototype.remove = function( index, data ) {
            data.splice( index, 1 );
        };

        action.prototype.arr2obj = function( data ) {
            var obj = {};
            for(var i = 0, len = data.length; i < len; i++){
                obj[data[i].key] = data[i].value;
            }
            return obj;
        };

        return action;
    }
})();