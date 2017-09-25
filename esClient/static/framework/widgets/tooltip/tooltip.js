/**
 * Copyright 2017 EasyStack Inc.
 */
(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name horizon.framework.widgets.tooltip.directive:tooltipTriggerWrap
   */
  angular
    .module('horizon.framework.widgets.tooltip')
    .directive('tooltipTriggerEvent', tooltipTriggerEvent);

  tooltipTriggerEvent.$inject = [
    '$timeout'
  ];

  function tooltipTriggerEvent($timeout) {
    var directive = {
      link: link,
      restrict: 'A'
    };

    return directive;

    function link(scope, element, attrs) {
        attrs.$observe('event', function(value) {
            if(value === 'true' || value === 'false') {
                $timeout(function(){
                   element.trigger('tooltipTriggerEvent');
                });
            }
        });
        element.on({
           mouseout: function() {
             element.trigger('tooltipTriggerEvent');
           },
           mouseenter: function() {
             element.trigger('tooltipTriggerEvent');
           }
        });
    }
  }
})();