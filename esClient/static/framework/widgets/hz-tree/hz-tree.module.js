(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name horizon.framework.widgets.org-tree
   * @description
   *
   * # horizon.framework.widgets.org-tree
   *
   * The `horizon.framework.widgets.org-tree` provides widgets and service
   * with logic for editing org.
   *
   * | Directives                                                                                 |
   * |--------------------------------------------------------------------------------------------|
   * | {@link horizon.framework.widgets.org-tree.directive:hzMetadataTree `hzMetadataTree`}                  |
   * | {@link horizon.framework.widgets.org-tree.directive:hzMetadataTreeItem `hzMetadataTreeItem`}          |
   * | {@link horizon.framework.widgets.org-tree.directive:hzMetadataTreeUnique `hzMetadataTreeUnique`}      |
   * |--------------------------------------------------------------------------------------------|
   * | Controllers                                                                                |
   * |--------------------------------------------------------------------------------------------|
   * | {@link horizon.framework.widgets.org-tree.controller:hzMetadataTreeCtrl `hzMetadataTreeCtrl`}         |
   * | {@link horizon.framework.widgets.org-tree.controller:hzMetadataTreeItemCtrl `hzMetadataTreeItemCtrl`} |
   *
   */
  angular.module('horizon.framework.widgets.hz-tree', ['ui.tree'])

  /**
   * @ngdoc parameters
   * @name horizon.framework.widgets.org-tree.constant:orgTreeDefaults
   * @param {object} text Text constants
   */
  .config(function(treeConfig){
      treeConfig.defaultCollapsed = true;
  })
  .constant('horizon.framework.widgets.hz-tree.defaults', {
     /*clickEvent : 'ORG-TREE-NODE-CLICK',
     expendEvent : 'ORG-TREE-NODE-EXPEND'*/
     activeEvent: 'ORG-TREE-NODE-ACTIVE'
  })

  /**
   * @ngdoc directive
   * @name horizon.framework.widgets.org-tree.directive:hzMetadataTree
   * @scope
   *
   * @description
   * The `hzMetadataTree` directive provide support for modifying existing
   * org properties and adding new from org catalog.
   *
   * @param {Tree=} model Model binding
   * @param {object[]=} available List of available namespaces
   * @param {object=} existing Key-value pairs with existing properties
   * @param {object=} text Text override
   */
  .directive('hzTree', [ 'horizon.framework.widgets.basePath',
    function (path) {
      return {
        scope: {
          treeData: '=treeData',
          treeClick: '=treeClick',
          activeNode: '=activeNode'
        },
        controller: 'hzTreeCtrl',
        templateUrl: path + 'hz-tree/hz-tree.html'
      };
    }
  ])

  .factory('horizon.framework.widgets.hz-tree.service',[function(){
      return {
          collapseMark: collapseMark
          //activeMark: activeMark
      };
      // this is expand event
      function collapseMark(data){
          if (data.hasOwnProperty('collapsed')){
              data['collapsed'] = !data['collapsed'];
          }else{
              data['collapsed'] = false;
          }
          return data;
      }
  }])
  /**
   * @ngdoc controller
   * @name horizon.framework.widgets.org-tree.controller:hzOrgTreeCtrl
   * @description
   * Controller used by `hzOrgTree`
   */
  .controller('hzTreeCtrl', [
    '$scope',
    'horizon.framework.widgets.hz-tree.service',
    'horizon.framework.widgets.hz-tree.defaults',
    'horizon.framework.widgets.basePath',
    function ($scope, treeService, events, path) {
      $scope.path = path + 'hz-tree/';
      if($scope.treeData && $scope.treeData[0].id == 'adminprice_platform'){
        $scope.aId = $scope.treeData[0].id;
      }else {
        $scope.aId = 'default';
      }
      $scope.$watch('activeNode', function(n, o){
        if(n!==o){
            $scope.aId = n || 'default';
        }
      }, true);
      $scope.fetchChild = function(nodeScope){
         nodeScope.node = treeService.collapseMark(nodeScope.node);
         $scope.treeClick = {'type': 'toggle', 'curNode':nodeScope.node, 'treeData': nodeScope.treeData};
         //$scope.$emit(defaults.expendEvent, {'curNode':nodeScope.node, 'treeData': nodeScope.treeData});
      };
      $scope.nodeClick = function(node){
        if(node['forbidden']){

        }else{
          $scope.aId = node.id;
          $scope.treeClick = {'type': 'click', 'curNode':node};
        }
      }

    }
  ]);

})();
