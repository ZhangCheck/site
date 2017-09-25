(function () {
    'use strict';
    angular.module('horizon.framework.widgets.hz-toggle', [])
        .directive('hzToggle', ['horizon.framework.widgets.basePath',
            function (path) {
                return {
                    scope: {
                        model: '=model',
                        spanText: '=spanText',
                        hiddenSwitch: '=hiddenSwitch'
                    },
                    controller: 'hzToggleCtrl',
                    templateUrl: path + "hz-toggle/hz-toggle.html"

                };
            }])
        .controller('hzToggleCtrl', [
            '$rootScope', '$scope', function ($rootScope, $scope) {
                $scope.hiddenSwitch = $scope.hiddenSwitch? true: false;
                $scope.spanText = $scope.spanText? $scope.spanText:'track';
                $scope.toggle = function () {
                    $rootScope.$broadcast('hz-toggle.changed', !$scope.model);
                    return $scope.model = !$scope.model;
                };
            }
        ]);
})();
