(function () {
  'use strict';
  angular.module('horizon.framework.widgets', [
    'horizon.framework.widgets.hz-modal',
    'horizon.framework.widgets.hz-grid',
    'horizon.framework.widgets.help-panel',
    'horizon.framework.widgets.file',
    'horizon.framework.widgets.load-edit',
    'horizon.framework.widgets.wizard',
    'horizon.framework.widgets.workflowwizard',
    //'horizon.framework.widgets.table',
    'horizon.framework.widgets.modal',
    'horizon.framework.widgets.modal-wait-spinner',
    'horizon.framework.widgets.transfer-table',
    'horizon.framework.widgets.charts',
    'horizon.framework.widgets.action-list',
    // 'horizon.framework.widgets.metadata',
    // 'horizon.framework.widgets.metadata-tree',
    // 'horizon.framework.widgets.metadata-display',
    'horizon.framework.widgets.toast',
    'horizon.framework.widgets.message-alert',
    'horizon.framework.widgets.detail',
    'horizon.framework.widgets.drag-action',
    'horizon.framework.widgets.dragbar',
    // 'horizon.framework.widgets.tableDrag',
    'horizon.framework.widgets.magic-search',
    // 'horizon.framework.widgets.hz-tree',
    'horizon.framework.widgets.pagination',
    'horizon.framework.widgets.mouse-wheel',
    'horizon.framework.widgets.hz-toggle',
    'horizon.framework.widgets.tooltip',
    /*'ui.ace.config',
    'ui.ace',
    'ngTagsInput'*/
  ])
    .constant('horizon.framework.widgets.basePath', (window.WEBROOT || '') + 'static/framework/widgets/')
    .constant('backDrop', 'static');
})();
