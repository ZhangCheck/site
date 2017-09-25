(function () {
  'use strict';

  angular.module('horizon.framework.util', [
    'horizon.framework.util.bind-scope',
    'horizon.framework.util.file',
    'horizon.framework.util.filters',
    'horizon.framework.util.http',
    'horizon.framework.util.i18n',
    'horizon.framework.util.tech-debt',
    'horizon.framework.util.workflow',
    'horizon.framework.util.validators',
    'horizon.framework.util.compile-html'
  ])
    .constant('horizon.framework.util.basePath', (window.WEBROOT || '') + 'static/framework/util/');
})();
