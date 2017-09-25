(function () {
  'use strict';

  /*
   * @ngdoc factory
   * @name horizon.framework.widgets.modal-wait-spinner.factory:WaitSpinnerService
   * @description
   * In order to provide a seamless transition to a Horizon that uses more Angular
   * based pages, the service is currently implemented using the existing
   * Spin.js library and the corresponding JQuery plugin (jquery.spin.js). This widget
   * looks and feels the same as the existing spinner we are familiar with in Horizon.
   * Over time, uses of the existing Horizon spinner ( horizon.modals.modal_spinner() )
   * can be phased out, or refactored to use this component.
   */
  angular
    .module('horizon.framework.widgets.modal-wait-spinner')
    .factory('horizon.framework.widgets.modal-wait-spinner.service', WaitSpinnerService);

  WaitSpinnerService.$inject = ['$modal'];

  function WaitSpinnerService ($modal) {
    var spinner = this;
    var service = {
      showModalSpinner: showModalSpinner,
      hideModalSpinner: hideModalSpinner
    };

    return service;

    ////////////////////

    function showModalSpinner(spinnerText) {
      var modalOptions = {
        backdrop: 'static',
        /*
         * Using <div> for wait-spinner instead of a wait-spinner element
         * because the existing Horizon spinner CSS styling expects a div
         * for the modal-body
         */
        //template: '<div wait-spinner class="modal-body" bar text="' + spinnerText + '"></div>',
        template: '<div class="horizon-pending-bar"><div class="modal-body"><span>'+spinnerText+'...</span></div><div class="progress progress-striped active"><div class="progress-bar" style="width: 100%"></div></div></div>',
        windowClass: 'modal-wait-spinner modal_wrapper loading'
      };
      spinner.modalInstance = $modal.open(modalOptions);
    }

    function hideModalSpinner() {
      if (spinner.modalInstance) {
        spinner.modalInstance.dismiss();
        delete(spinner.modalInstance);
      }
    }
  }
})();
