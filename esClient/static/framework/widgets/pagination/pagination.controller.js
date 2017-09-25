(function () {
  'use strict';

  angular.module('horizon.framework.widgets.pagination', ['ui.bootstrap'])

  .directive('hzPage', [ 'horizon.framework.widgets.basePath',
    function (path) {
      return {
        scope: {
          totalItems: '=totalItems',
          currentPage: '=currentPage',
          maxSize: '=maxSize'
        },
        controller: 'hzPageCtrl',
        templateUrl: path + 'pagination/pagination.html'
      };
    }
  ])

  .factory('horizon.framework.widgets.pagination.service',[function(){
     return {};
  }])
  .controller('hzPageCtrl', [
    '$scope',
    'horizon.framework.widgets.pagination.service',
    'horizon.framework.widgets.basePath',
    function ($scope, pageService, path) {
      $scope.path = path + 'pagination/';
    }
  ]);

})();
