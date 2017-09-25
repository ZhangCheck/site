(function () {
    'use strict';

    var module = angular.module('hz.dashboard.baremetal-launch-instance', ['ngSanitize']);

    module.factory('launchBareInstanceWorkflow', [
        'dashboardBasePath',
        'hz.dashboard.workflow.factory',

        function (path, dashboardWorkflow) {
             var workflow = {
                title: gettext('Create Baremetal Instance'),
                steps: [
                    {
                        title: gettext('Select Boot Source'),
                        templateUrl: path + 'baremetal-launch-instance/source/source.html',
                        helpUrl: path + 'baremetal-launch-instance/source/source.help.html',
                        formName: 'launchInstanceSourceForm'
                    },
                    {
                        title: gettext('Node'),
                        templateUrl: path + 'baremetal-launch-instance/flavor/flavor.html',
                        helpUrl: path + 'baremetal-launch-instance/flavor/flavor.help.html',
                        formName: 'launchInstanceFlavorForm'
                    },
                    {
                        title: gettext('Networks'),
                        templateUrl: path + 'baremetal-launch-instance/network/network.html',
                        helpUrl: path + 'baremetal-launch-instance/network/network.help.html',
                        formName: 'launchInstanceNetworkForm',
                        requiredServiceTypes: ['network']
                    },
                    /*{
                     id: 'ports',
                     title: gettext('Network Ports'),
                     templateUrl: path + 'baremetal-launch-instance/networkports/ports.html',
                     helpUrl: path + 'baremetal-launch-instance/networkports/ports.help.html',
                     formName: 'launchInstanceNetworkPortForm',
                     requiredServiceTypes: ['network']
                     },*/
                    /*{
                        title: gettext('Security Groups'),
                        templateUrl: path + 'baremetal-launch-instance/security-groups/security-groups.html',
                        helpUrl: path + 'baremetal-launch-instance/security-groups/security-groups.help.html',
                        formName: 'launchInstanceAccessAndSecurityForm'
                    },*/
                    {
                        title: gettext('Key and Keypair'),
                        templateUrl: path + 'baremetal-launch-instance/keypair/keypair.html',
                        helpUrl: path + 'baremetal-launch-instance/keypair/keypair.help.html',
                        formName: 'launchInstanceKeypairForm'
                    },
                    {
                        title: gettext('Customization Script'),
                        templateUrl: path + 'baremetal-launch-instance/configuration/configuration.html',
                        helpUrl: path + 'baremetal-launch-instance/configuration/configuration.help.html',
                        formName: 'launchInstanceConfigurationForm'
                    }
                ],

                btnText: {
                    finish: gettext('Create Baremetal Instance')
                },

                btnIcon: {
                    finish: 'fa fa-cloud-download'
                }
            };

            if (!BARE_METAL_MULTI_TENANT_JS) {
                for (var i = 0; i < workflow.steps.length; i++) {
                    if (workflow.steps[i].formName === 'launchInstanceNetworkForm') {
                        workflow.steps.splice(i, 1);
                        break;
                    }
                }
            }

            return dashboardWorkflow(workflow);
        }
    ]);

    // Using bootstrap-ui modal widget
    module.constant('launchBareInstanceWizardModalSpec', {
        backdrop: 'static',
        controller: 'ModalContainerCtrl',
        template: '<wizard ng-controller="LaunchBareInstanceWizardCtrl"></wizard>',
        windowClass: 'modal-dialog-wizard'
    });

    /**
     * @name bootSourceTypes
     * @description Boot source types
     */
    module.constant('bootSourceTypes', {
        IMAGE: 'image',
        INSTANCE_SNAPSHOT: 'snapshot',
        VOLUME: 'volume',
        VOLUME_SNAPSHOT: 'volume_snapshot'
    });

    /**
     * @ngdoc filter
     * @name diskFormat
     * @description
     * Expects object and returns disk_format property value.
     * Returns empty string if input is null or not an object.
     * Uniquely required for the source step implementation of transfer tables
     */
    module.filter('diskFormat', function () {
        return function (input) {
            if (input === null || !angular.isObject(input) || !angular.isDefined(input.disk_format) || input.disk_format === null) {
                return '';
            } else {
                return input.disk_format.toUpperCase();
            }
        };
    });

    module.controller('LaunchBareInstanceWizardCtrl', [
        '$scope',
        '$rootScope',
        'launchBareInstanceModel',
        'launchBareInstanceWorkflow',
        'horizon.openstack-service-api.billing',
        'horizon.openstack-service-api.settings',
        'horizon.framework.widgets.wizard.events',
        LaunchBareInstanceWizardCtrl
    ]);

    module.controller('LaunchBareInstanceModalCtrl', [
        '$scope',
        '$modal',
        '$window',
        'launchBareInstanceWizardModalSpec',
        'horizon.framework.widgets.wizard.events',
        LaunchBareInstanceModalCtrl
    ]);

    function LaunchBareInstanceWizardCtrl($scope, rootScope,
                                          launchInstanceModel, launchInstanceWorkflow, billingAPI, settingsAPI, wizardEvents) {
        var instanceBilling = null;
        $scope.instance_billing = [];
        $scope.instancePrice = 0;
        $scope.workflow = launchInstanceWorkflow;
        $scope.model = launchInstanceModel;
        $scope.model.initialize(true);
        $scope.model.launchContext = $scope.launchContext;
        $scope.submit = $scope.model.createInstance;
        $scope.enableSetNicIP = false;

        var promise = settingsAPI.getSetting('ENABLE_SET_NIC_IP', false);
        promise.then(function (response) {
            $scope.enableSetNicIP = response;
        });
        $scope.$on(
            wizardEvents.AFTER_SUBMIT,
            function () {
                rootScope.$broadcast(wizardEvents.AFTER_SUBMIT);
            }
        );

        $scope.billingi18n = {
            info: {
                no_enough_balance: gettext('No Enough Balance'),
                no_active_fixing: gettext('No Active Fixing'),
                yuan: gettext('Yuan'),
                rmb_per_month: gettext('Yuan/Month'),
                hour: gettext('Hour'),
                month: gettext('Month'),
                year: gettext('Year'),
                billing_type: gettext('Billing Type')
            }
        };

        if (rootScope.rootblock.billing_need) {
            $scope.showBilling = true;
            if (rootScope.rootblock.active_fixing) {

                //to judge pre-paid is on or not
                settingsAPI.getSetting('PREBILLING', false).then(
                    function success(data) {
                        $scope.preBilling = data;
                    }
                );

                $scope.payment_type = [
                    {unit: 'H', unitLabel: gettext('By Hour')},
                    {unit: 'M', unitLabel: gettext('By Month')},
                    {unit: 'Y', unitLabel: gettext('By Year')}
                ];

                $scope.unitSelect = $scope.payment_type[0];

                $scope.changePayment = function (payment) {
                    $scope.unitSelect = payment;
                    if ($scope.unitSelect && $scope.unitSelect.unit === 'M') {
                        $scope.instancePrice = $scope.instancePriceModel['fee_month'];
                    } else if ($scope.unitSelect && $scope.unitSelect.unit === 'Y') {
                        $scope.instancePrice = $scope.instancePriceModel['fee_year'];
                    } else {
                        $scope.instancePrice = $scope.instancePriceModel['fee_hour'];
                    }
                };

                $scope.instance_billing = launchInstanceModel.billingFlavorItems;
                instanceBilling = $scope.instance_billing;

                $scope.$watch('model.newInstanceSpec', function (newVal, oldVal) {
                    for (var i = 0, len = instanceBilling.length; i < len; i++) {
                        if ($scope.model.newInstanceSpec.flavor && eval('(' + instanceBilling[i]['rule'] + ')')['flavor'] === $scope.model.newInstanceSpec.flavor.id) {
                            $scope.instancePriceModel = instanceBilling[i];
                            $scope.instancePrice = $scope.instancePriceModel['fee'];
                            if ($scope.unitSelect && $scope.unitSelect.unit === 'M') {
                                $scope.instancePrice = $scope.instancePriceModel['fee_month'];
                            } else if ($scope.unitSelect && $scope.unitSelect.unit === 'Y') {
                                $scope.instancePrice = $scope.instancePriceModel['fee_year'];
                            }
                        }
                    }
                }, true);

                $scope.$watch('unitSelect.unit', function (newVal, oldVal) {
                    if (newVal) {
                        $scope.model.newInstanceSpec.unit = newVal;
                    }
                }, true);


                billingAPI.getBalance().success(function (data) {
                    if (data <= 0) {
                        $scope.showBalance = true;
                    }
                });
            }
            else {
                $scope.noFixing = true;
            }
        }
    }

    function LaunchBareInstanceModalCtrl($scope, $modal, $window, modalSpec, wizardEvents) {
        $scope.openLaunchInstanceWizard = function (launchContext) {
            var localSpec = {
                resolve: {
                    launchContext: function () {
                        return launchContext;
                    }
                }
            };

            angular.extend(localSpec, modalSpec);

            var launchInstanceModal = $modal.open(localSpec);

            var handleModalClose = function (redirectPropertyName) {
                return function () {
                    var redirectPath = launchContext[redirectPropertyName];
                    if (redirectPath) {
                        if (redirectPath.charAt(0) === '/') {
                            // delete the first char if it's /
                            redirectPath = redirectPath.slice(1);
                        }
                        if (redirectPath.charAt(redirectPath.length - 1) === '/') {
                            redirectPath = redirectPath.slice(0, -1);
                        }

                        var pathName = $window.location.pathname;
                        if (pathName !== window.WEBROOT + redirectPath
                            && pathName !== window.WEBROOT + redirectPath + '/') {
                            $window.location.href = window.location.origin + (window.WEBROOT || '/') + redirectPath;
                        }
                    }
                };
            };
            $scope.$on(
                wizardEvents.AFTER_SUBMIT,
                function () {
                    if (launchContext.snapshot) {
                        handleModalClose('successUrl')();
                    }
                }
            );
        };
    }

})();
