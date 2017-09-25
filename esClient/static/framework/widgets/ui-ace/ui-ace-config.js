(function() {
  'use strict';

/**
 * Binds a ACE Editor widget
 */
angular.module('ui.ace.config', [])
  .directive('uiAceConfig', uiAceConfig)
  function uiAceConfig() {
    var directive = {
      link: link,
      restrict: 'AE',
    };
    return directive;
    function link(scope, element, attrs) {
      scope.aceConfig = {
        mode: 'yaml',
        theme: 'monokai',
        showInvisibles: true,
        advanced: {
         enableBasicAutocompletion: true,
         enableLiveAutocompletion: false
        }
      };
    };
  }
})();