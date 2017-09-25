
(function() {
  'use strict';

  angular
    .module('horizon.framework.widgets.message-alert')
    .directive('messageAlert', toast);

  toast.$inject = ['horizon.framework.widgets.message-alert.service',
                   'horizon.framework.widgets.basePath'];

  function toast(alertService, path) {
    var directive = {
      restrict: 'EA',
      templateUrl: path + 'message-alert/message-alert.html',
      scope: {},
      link: link
    };

    return directive;

    function link(scope) {
      scope.alert = alertService;
    }
  }

})();
