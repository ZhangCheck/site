(function () {
  'use strict';

  var btnclass = "btn btn-primary btn-action btn-group";
  /**
   * @ngdoc directive
   * @name horizon.framework.widgets.hzGrid.directive:hzGrid
   * @element
   * @description
   * The `hzGrid` directive provides a data grid with search bar,pagination,and edit buttons
   *
   * @restrict E
   * @example
   * ```
   * <div class="parent-container">
   *   <hz-grid></hz-grid>
   * </div>
   * ```
   */
  var module = angular
    .module('horizon.framework.widgets.hz-grid', [
      'ui.grid',
      'ui.grid.pagination',
      'ui.grid.selection',
      'ui.grid.resizeColumns',
      'ui.grid.moveColumns',
      'horizon.framework.widgets.magic-search',
      'horizon.framework.util.compile-html',
      'horizon.framework.widgets.hz-modal'
    ]);

  module
    .constant("hzGridConstants", {
      events: {
        rowSelectionChanged: 'rowSelectionChanged',
        rowSelectionChangedBatch: 'rowSelectionChangedBatch'
      }
    })
    .controller('hzGridController', hzGridController)
    .directive('hzGrid', hzGrid)
    .directive('hzGridHead', hzGridHead)
    .directive('hzGridControl', function () {
      return {
        link: function (scope, element) {
          element.addClass('hz-grid-control')
        }
      }
    })
    .directive('hzGridSearch', hzGridSearch)
    .directive('hzGridBody', hzGridBody)
    .directive('hzGridFresh', hzGridFresh)
    .directive('hzGridAdd', hzGridAdd)
    .directive('hzGridDelete', hzGridDelete)
    .directive('hzGridEdit', hzGridEdit)
    .directive('hzGridDetail', hzGridDetail)

  hzGridController.$inject = [
    '$scope', '$element', '$attrs', 'hzGridConstants', '$q',
    '$hzModal', '$modal', '$state', '$interval',
    'horizon.framework.widgets.modal.service',
    'horizon.framework.util.http.service',
    'horizon.framework.widgets.toast.service',
  ]

  function hzGridController($scope, $element, $attrs, hzGridConstants, $q,
                            $hzModal, $modal,
                            $state, $interval,
                            smodal,
                            apiService,
                            toastService) {


    //$scope.$id = 'hz-grid';//+Date.parse(new Date());
    var self = this;
    $element.addClass('hz-grid');

    $scope.gridApi;
    var filterTimer;
    $scope.filter = function (query,type) {
      $scope.filterValue = query;
      $scope.filterType = type||'object';
      if ($scope.hzGridOptions.realPagination) {
        if(filterTimer){
          filterTimer = clearTimeout(filterTimer);
        }
        filterTimer = setTimeout($scope.gridApi.reload,400,1);
      }else{
        $scope.gridApi.grid.refresh();
      }
    }

    $scope.singleFilter = function (renderableRows) {
      if($scope.filterType=='object'){
          if ($scope.filterValue) {
          $scope.filterValue.split('&').forEach(function (x) {
            var arr = x.split('=');
            var field = arr[0];
            var filterFacets = $scope.hzGridOptions.filterFacets
            if (filterFacets) {
              var isServerFacet = filterFacets.some(function checkIsServer(facet) {
                return facet.name === field && facet.isServer;
              });

              if (isServerFacet) {
                return;
              }
            }

            var matcher = new RegExp(arr[1]);
            renderableRows.forEach(function (row) {
              var match = false;
              if (row.entity[field].match(matcher)) {
                match = true;
              }
              if (!match) {
                row.visible = false;
              }
            })
          });
        }
      }else if($scope.filterType=='text'){
            var rule = $scope.filterValue.replace(' ','|');
            var filterFacets = $scope.hzGridOptions.filterFacets;

            var matcher = new RegExp(rule);
            renderableRows.forEach(function (row) {
              var match = false;
              filterFacets.forEach(function(facet){
                var value = row.entity[facet.field||facet.name]
                //if(!value) debugger;
                  if (value && value.match(matcher)) {
                    match = true;
                    return false;
                  }
              })
              if (!match) {
                  row.visible = false;
              }
            })
      }else{
        //throw new Error('filterType error');
      }


      return renderableRows;
    };

    var defaultOptions = {
      paginationPageSizes: [200, 500, 1000],
      paginationPageSize: 200,
      realPagination: false,
      totalItems: 0,
      gridHeight: 600,
      rowHeight: 38,
      headerRowHeight: 38,
      footerHeight: 36
    }

    var hzGridOptions;
    if (!$scope.hzGridOptions) {
      throw new Error('hz-grid must set hz-grid-options')
    } else {
      $scope.hzGridOptions = angular.merge({}, defaultOptions, $scope.hzGridOptions)
      hzGridOptions = $scope.hzGridOptions
    }

    if ($scope.hzGridOptions.realPagination) {
      $scope.hzGridOptions.useCustomPagination = true;
      $scope.hzGridOptions.useExternalPagination = true;
    } else {
      $scope.hzGridOptions.useCustomPagination = false;
      $scope.hzGridOptions.useExternalPagination = false;
    }

    $scope.$on('currentPage', function () {
      debugger;
    })

    var oldOnRegisterApi = hzGridOptions.onRegisterApi;
    hzGridOptions.onRegisterApi = function (gridApi) {
      $scope.gridApi = gridApi;
      window.gridApi = gridApi;//todo:remove
      $scope.gridApi.grid.registerRowsProcessor($scope.singleFilter, 200);

      gridApi.add = self.add;
      gridApi.delete = self.delete;
      gridApi.edit = self.edit;
      gridApi.detail = self.detail;
      gridApi.reload = self.loadData;
      gridApi.openModal = self.openModal;

      gridApi.pagination.on.paginationChanged($scope, function (pageNumber, pageSize) {
        if ($scope.hzGridOptions.realPagination) {
          self.loadData(pageNumber, pageSize);
        }
      })

      if (oldOnRegisterApi) {
        oldOnRegisterApi(gridApi);
      }

      //todo: find when or use table
      self.onResize();

      $interval(function () {
        $scope.gridApi.core.handleWindowResize();
      }, 500, 10);
    }

    if (hzGridOptions.filterFacets === void(0)) {
      var filterFacets = [];
      angular.forEach(hzGridOptions.columnDefs, function (column) {
        filterFacets.push(
          {
            label: column.name.charAt(0).toUpperCase() + column.name.substr(1),
            name: column.field || column.name,
            singleton: true
          }
        )
      })

      hzGridOptions.filterFacets = filterFacets
    }

    /*$scope.$watch('hzGridOptions',function(v){
        $scope.gridApi.core.refresh();
   })*/


    function requestData(apiConfig, itemStart, pageSize, filter) {
      var api;
      if (angular.isFunction(apiConfig)) {
        return apiConfig(itemStart, pageSize);
      } else if (angular.isObject(apiConfig)) {
        api = angular.copy(apiConfig);
      } else if (angular.isString(apiConfig)) {
        api = {
          url: apiConfig
        }
      } else {
        var errorMsg = gettext("HzGrid apiConfig, must be object or string, but " + apiConfig);
        toastService.add('error', errorMsg);
        return $q(function (resolve, reject) {
          reject(errorMsg);
        });
      }

      if (!api.errorMsg) {
        api.errorMsg = 'Unable to retrieve: ' + api.url;
      }

      if (itemStart != void(0)) {
        angular.merge(api, {
          data: {
            itemStart: itemStart,
            pageSize: pageSize
          }
        })
      }

      if (filter) {
        angular.merge(api, {
          data: {
            filter: filter
          }
        })
      }

      return apiService.http(api)
        .error(function () {
          toastService.add('error', gettext(api.errorMsg));
        });
    }

    self.loadData = function (pageNumber, pageSize, filter) {
      var itemStart;
      if ($scope.hzGridOptions.realPagination) {
        pageSize = pageSize === void(0) ? $scope.hzGridOptions.paginationPageSize : pageSize;
        itemStart = pageNumber === void(0) ? 0 : (pageNumber - 1) * pageSize;

        requestData($scope.hzGridOptions.countApi, undefined, undefined, $scope.filterValue)
          .then(function (request) {
            $scope.hzGridOptions.totalItems = parseInt(request.data);
            var length = Math.ceil((parseInt(request.data) || 0) / $scope.hzGridOptions.paginationPageSize);
            var pageSizes = [];
            for (var i = 0; i < length; i++) {
              pageSizes.push($scope.hzGridOptions.paginationPageSize);
            }
            $scope.hzGridOptions.paginationPageSizes = pageSizes;
          }, function (err) {
            console.error('failed to load count', err)
          })
      }
      $scope.loading = true;
      if (filter === void(0)) {
        filter = $scope.filterValue;
      }

      requestData($scope.hzGridOptions.listApi, itemStart, pageSize, filter)
        .then(function (request) {
          $scope.hzGridOptions.data = request.data;
          $scope.loading = false;
        }, function (err) {
          $scope.loading = false;
          $scope.errorMsg = getText('Grid failed to load paginated data!')
          $scope.hzGridOptions.data = [];
          toastService.add('error', $scope.errorMsg)
        })

    }

    self.openModal = function (config) {
      if (angular.isObject(config)) {
        angular.merge(config, {
          resolve: {
            gridApi: function () {
              return $scope.gridApi
            }
          }
        })
        $hzModal.open(config);
      } else if (angular.isFunction(config)) {
        config($scope.gridApi);
      } else if (angular.isString(config)) {
        $state.change(config);
      } else {
        throw new Error('Hz-grid config type must be object,function or string.')
      }
    }

    self.add = function ($event) {
      if ($event && angular.element($event.currentTarget).hasClass('disabled')) {
        return
      }
      self.openModal($scope.hzGridOptions.add)
    }

    self.delete = function ($event) {
      if ($event && angular.element($event.currentTarget).hasClass('disabled')) {
        return
      }
      self.openModal($scope.hzGridOptions.delete)
    }

    self.edit = function ($event) {
      if ($event && angular.element($event.currentTarget).hasClass('disabled')) {
        return
      }
      self.openModal($scope.hzGridOptions.edit);
    }

    self.detail = function ($event) {
      if ($event && angular.element($event.currentTarget).hasClass('disabled')) {
        return
      }
      self.openModal($scope.hzGridOptions.detail)
    }

    $scope.$on('searchUpdated-ms-context', function (event, query) {
      $scope.filter(query);
    })
    $scope.$on('textSearch-ms-context',function(event,query){
      $scope.filter(query,'text');
    })

    self.onResize = function () {
      $scope.gridHeight = $element[0].offsetHeight - $element.find('.hz-grid-head')[0].offsetHeight - 10;
      //$scope.hzGridOptions.gridHeight = $scope.gridHeight;
      //$scope.gridApi.grid.refreshRows();
      //$scope.gridApi.grid.gridHeight = $scope.gridHeight;
      //$scope.gridApi.core.handleWindowResize();
    }

    window.addEventListener('resize', self.onResize)
    self.loadData();

  }

  hzGrid.$inject = ['horizon.framework.widgets.basePath'];

  /**
   * @ngdoc directive
   * @name horizon.framework.widgets.hzGrid.directive:hzGrid
   * @element
   * @description
   * The `hzGrid` directive provides a data grid with search bar,pagination,and edit buttons
   *
   * @restrict E
   * @example
   * ```
   * <div class="parent-container">
   *   <hz-grid></hz-grid>
   * </div>
   * ```
   * @param hzGridOptions config hz-grid
   *        hzGridOptions.uiGrid          ui-grid config
   *        hzGridOptions.filterFacets    search's filterFacets config
   *        hzGridOptions.listApi     {string|function}       list config,
   *                                                       function like x(start,pageSize){}
   *        hzGridOptions.add             add config
   *        hzGridOptions.delete          delete config
   *        hzGridOptions.edit            delete config
   *
   */
  function hzGrid(path) {
    return {
      restrict: 'E',
      transclude: true,
      scope: {
        hzGridOptions: '=',
      },
      templateUrl: path + 'hz-grid/hz-grid.html',
      compile: function () {
        return {
          pre: function ($scope, element, attrs) {

          },
          post: function ($scope, element, attrs, ctrl) {
            console.log('post')
          }
        }
      },

      controller: 'hzGridController'
    };
  }

  function hzGridHead() {
    return {
      require: '^^hzGrid',
      compile: function () {
        return {
          post: function ($scope, element, attrs, ctrls) {
            element.addClass('hz-grid-head clearfix');
          }
        }
      }
    }
  }

  hzGridSearch.$inject = [];

  function hzGridSearch() {
    return {
      require: '^^hzGrid',
      replace: true,
      scope: true,
      template: '<div class="hz-grid-search" ng-if="hzGridOptions && hzGridOptions.filterFacets" >\n' +
      '  <div class="search-bar">' +
      '    <hz-magic-search-bar id="search"></hz-magic-search-bar>' +
      '  </div></div>',

      compile: function () {
        return {
          pre: function ($scope, $element, $attrs, controls) {
            if (controls && controls.length > 0) {
              $scope.hzGridOptions = controls[0].hzGridOptions;
            }
            $element.addClass('hz-grid-search')
          }
        }
      }
    }
  }

  function hzGridBody() {
    return {
      require: '^^hzGrid',
      replace: true,
      scope: true,
      template:
      '<div style="position: relative;height:{$gridHeight$}px">' +
      '   <div ng-if="loading" style="position: absolute;top:30px;left:50%;">' +
      '     <img class="load-detail" src="/static/bootstrap/img/loading.gif" alt=""/>' +
      '   </div>' +
      '   <div ng-if="errorMsg" style="position: absolute;top:30px;width:100%;text-align: center;">{$errorMsg$}</div>' +
      '   <div id="{$id$}" ui-grid="hzGridOptions" style="height:{$gridHeight$}px" class="grid"\n' +
      '       ui-grid-selection\n' +
      '       ui-grid-pagination\n' +
      '       ui-grid-resize-columns\n' +
      '       ui-grid-move-columns\n' +
      //'       ui-grid-auto-resize'+
      '></div></div>',
      compile: function () {
        return {
          pre: function ($scope) {
            $scope.id = 'grid' + Date.parse(new Date());
          },
          post: function ($scope, $element, $attrs, controls) {
            $scope.hzGridOptions = $scope.$parent.hzGridOptions;
          }
        }
      }

    }
  }

  function hzGridFresh() {
    return {
      require: '^^hzGrid',
      restrict: 'A',
      link: function ($scope, element, attr, ctrls) {
        element
          .addClass(btnclass)
          .html('<i class="icon icon-refresh"></i>')
          .on('click', function () {
            ctrls.loadData();
          })
      }
    }
  }

  function hzGridAdd() {
    return {
      require: '^^hzGrid',
      restrict: 'A',
      scope: true,
      compile: function () {
        return {
          pre: function ($scope, $element, $attrs, ctls) {
            $element
              .addClass(btnclass)
              .html('<i class="icon icon-add" style="margin-right:5px"></i>' + $element.html())
              .on('click', ctls.add)
          }
        }
      }
    }
  }

  function hzGridDelete() {
    return {
      require: '^^hzGrid',
      restrict: 'A',
      transclude: true,
      template: '<i class="icon icon-delete" style="margin-right:5px"></i><span ng-transclude></span>',
      compile: function () {
        return {
          pre: function ($scope, $element, $attrs, ctrls) {
            $element
              .addClass(btnclass)
              .on('click', ctrls.delete)

            $scope.$parent.$watch('gridApi.grid.selection.selectedCount', function (value) {
              if (value <= 0) {
                $element.addClass('btn-danger disabled')
              } else {
                $element.removeClass('disabled')
              }
            })

          }
        }
      }
    }
  }

  function hzGridEdit() {
    return {
      require: '^^hzGrid',
      restrict: 'A',
      transclude: true,
      template: '<i class="icon icon-edit" style="margin-right:5px"></i><span ng-transclude></span>',
      compile: function () {
        return {
          pre: function ($scope, $element, $attrs, ctrls) {
            $element
              .addClass(btnclass)
              .on('click', ctrls.edit)
            $scope.$parent.$watch('gridApi.grid.selection.selectedCount', function (value) {
              if (value != 1) {
                $element.addClass('disabled')
              } else {
                $element.removeClass('disabled')
              }
            })
          }
        }
      }
    }
  }

  function hzGridDetail() {
    return {
      require: '^^hzGrid',
      restrict: 'A',
      transclude: true,
      template: '<i class="icon icon-detail" style="margin-right:5px"></i><span ng-transclude></span>',
      compile: function () {
        return {
          pre: function ($scope, $element, $attrs, ctrls) {
            $element
              .addClass(btnclass)
              .on('click', ctrls.detail)
            $scope.$parent.$watch('gridApi.grid.selection.selectedCount', function (value) {
              if (value != 1) {
                $element.addClass('disabled')
              } else {
                $element.removeClass('disabled')
              }
            })
          }
        }
      }
    }
  }

})();
