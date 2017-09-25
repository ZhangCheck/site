(function () {
    'use strict';

    function getArgs(fn){
        if(typeof fn !== 'function') return [];
          var COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
          var code = fn.toString().replace(COMMENTS, '');
          var result = code.slice(code.indexOf('(') + 1, code.indexOf(')'))
            .match(/([^\s,]+)/g);
          return result === null
            ? []
            : result;
    }

    var module = angular
        .module('horizon.framework.widgets.hz-modal', [])
        .provider('$hzModal', function () {
            var $hzModalProvider = {
                options: {},
                $get: ['$injector', '$rootScope', '$modal', function ($injector, $rootScope, $modal) {
                    var $hzModal = {};
                    $hzModal.open = function (modalOptions) {
                        var superController;
                        var controller = function ($scope, $modalInstance) {
                            $scope.cancel = function () {
                                $modalInstance.dismiss('cancel');
                            }
                            $scope.ok = function () {
                                $modalInstance.close('some value');
                            }
                            superController.apply(this, arguments)
                        }
                        if (angular.isArray(modalOptions.controller)) {
                            superController = modalOptions.controller[modalOptions.controller.length - 1];
                            modalOptions.controller[modalOptions.controller.length - 1] = controller;
                        } else {
                            superController = modalOptions.controller;
                            var args = getArgs(superController);
                            args.push(controller)
                            modalOptions.controller = args;
                        }

                        $modal.open(modalOptions);
                    }
                    return $hzModal;
                }]
            }
            return $hzModalProvider;
        })
        //.directive('hzModal', hzModal)
        .directive('hzModalTitle', hzModalTitle)
        //module.directive('hzModalHeader',hzModalHeader)
        .directive('hzModalBody', hzModalBody)
        .directive('hzModalFooter', hzModalFooter)

    function hzModalTitle() {
        return {
            restrict: 'E',
            transclude: true,
            template: '<div class="modal-header">\n' +
            '        <div class="modal-title" ng-transclude></div>\n' +
            '        <p class="modal-colsed" ng-click="cancel()">\n' +
            '            <i class="modal-colsed-icon"></i>\n' +
            '        </p>\n' +
            '    </div>'
        }
    }

    function hzModalBody() {
        return {
            restrict: 'E',
            transclude: true,
            template: '<div ng-transclude></div>',
            compile: function () {
                return {
                    pre: function ($scope, $element, $attrs) {
                        $element.addClass('modal-body');
                    }
                }
            }
        }
    }

    function hzModalHeader() {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                title: '='
            },
            template: '<div class="modal-header">\n' +
            '        <h3 class="modal-title">{$title$}</h3>\n' +
            '        <p class="modal-colsed" ng-click="cancel()">\n' +
            '            <i class="modal-colsed-icon"></i>\n' +
            '        </p>\n' +
            '    </div>'
        }
    }

    function hzModalFooter() {
        return {
            restrict: 'E',
            transclude: true,
            template: function ($element, $attrs) {
                if ($element.html().trim() == '') {
                    return '<div class="modal-footer">\n' +
                        '        <button class="btn btn-warning" ng-click="cancel()">Cancel</button>'+
                        '        <button class="btn btn-primary" ng-click="ok()">OK</button>\n' +
                        '    </div>'
                }
                return '<div class="modal-footer">\n' +
                    '        <div ng-transclude></div>' +
                    '    </div>'
            },
            compile: function () {
                return {}
            }
        }
    }

})();