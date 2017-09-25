(function() {
  'use strict';

  /**
   * @ngdoc controller
   * @name SimpleModalController
   *
   * @param(object) scope of the controller
   * @param(object) modal instance from angular-bootstrap
   * @param(object) context object provided by the user
   *
   * @description
   * Horizon's controller for confirmation dialog.
   * Passes context along to the template.
   * If user presses cancel button or closes dialog, modal gets dismissed.
   * If user presses submit button, modal gets closed.
   * This controller is automatically included in modalService.
   */
  angular
    .module('horizon.framework.widgets.modal')
    .controller('SimpleModalController', SimpleModalController);

  SimpleModalController.$inject = [
    '$scope',
    '$modalInstance',
    'context'
  ];

  function SimpleModalController(scope, $modalInstance, context) {
    var modalCtrl = this;
    modalCtrl.context = context;
    // TODO: add this to judge if it is a new Trans Object if not use old; if yes, use new
    modalCtrl.context.newTransToast = !angular.isString(context.body);
    modalCtrl.submit = function() { $modalInstance.close(); };
    modalCtrl.cancel = function() { $modalInstance.dismiss('cancel'); };
    scope.modalCtrl = modalCtrl;
  } // end of function

})();
