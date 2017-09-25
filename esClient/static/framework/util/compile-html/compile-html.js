(function () {
  'use strict';

  angular.module('horizon.framework.util.compile-html', [])

  .directive("dyCompile", ["$compile", function($compile) {
    return {
      replace: true,
      restrict: 'EA',
      link: function(scope, elm, iAttrs) {
        var DUMMY_SCOPE = {
            $destroy: angular.noop
          },
          root = elm,
          childScope,
          destroyChildScope = function() {
            (childScope || DUMMY_SCOPE).$destroy();
          },
          adminSlide = function(){
            // var panelGroupHeader = $('.nav_accordion > dd > div > h4#ASSETS');
            // var ifActive =panelGroupHeader.hasClass("active");
            // if(!ifActive){
                // panelGroupHeader.addClass("mock-active");
                // panelGroupHeader.closest('div').find('ul')
                // .removeClass('hidden').slideDown();
            // }
          };
        iAttrs.$observe("html", function(html) {
          if (html) {
            destroyChildScope();
            childScope = scope.$new(false);
            var content = $compile(html)(childScope);
            root.replaceWith(content);
            adminSlide();
            root = content;
          }
          scope.$on("$destroy", destroyChildScope);
        });
      }
    };
  }])
})();
