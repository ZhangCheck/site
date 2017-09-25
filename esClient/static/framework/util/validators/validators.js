(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name horizon.framework.util.validators
   * @description
   *
   * # horizon.framework.util.validators
   *
   * The `horizon.framework.util.validators` module provides support for validating
   * forms.
   *
   * | Directives                                                                      |
   * |---------------------------------------------------------------------------------|
   * | {@link horizon.framework.util.validators.directive:validateNumberMax `validateNumberMax`} |
   * | {@link horizon.framework.util.validators.directive:validateNumberMin `validateNumberMin`} |
   * | {@link horizon.framework.util.validators.directive:notBlank `notBlank`} |
   * | {@link horizon.framework.util.validators.directive:hzPasswordMatch `hzPasswordMatch`} |
   *
   */
  angular.module('horizon.framework.util.validators', [])

  /**
   * @ngdoc directive
   * @name horizon.framework.util.validators.directive:validateNumberMax
   * @element ng-model
   * @description
   * The `validateNumberMax` directive provides max validation
   * for the form input elements. This is an alternative to
   * `max` which doesn't re-evaluate expression passed in on
   * change. This allows the max value to be dynamically
   * specified.
   *
   * The model and view value is not set to undefined if
   * input does not pass validation. This is so that
   * components that are watching this value can determine
   * what to do with it. For example, quota charts can
   * still render and display over-utilized slices in red.
   *
   * Validator returns true if model/view value <= max value.
   *
   * @restrict A
   *
   * @example
   * ```
   * <input type="text" ng-model="value"
   *   validate-number-max="{$ maxNumber $}">
   * ```
   */
  .directive('validateNumberMax', [function () {
    return {
      require:  'ngModel',
      restrict: 'A',
      link:     function (scope, element, attrs, ctrl) {
        if (!ctrl) {
          return;
        }

        var maxValidator = function (value) {
          var max = scope.$eval(attrs.validateNumberMax);
          if (angular.isDefined(max) && !ctrl.$isEmpty(value) && value > max) {
            ctrl.$setValidity('validateNumberMax', false);
          } else {
            ctrl.$setValidity('validateNumberMax', true);
          }

          // Return the value rather than undefined if invalid
          return value;
        };

        /**
         * Re-validate if value is changed through the UI
         * or model (programmatically)
         */
        ctrl.$parsers.push(maxValidator);
        ctrl.$formatters.push(maxValidator);

        attrs.$observe('validateNumberMax', function () {
          maxValidator(ctrl.$modelValue);
        });
      }
    };
  }])
  .directive('nmax', [function () {
    return {
      require:  'ngModel',
      restrict: 'A',
      link:     function (scope, element, attrs, ctrl) {
        if (!ctrl) {
          return;
        }

        var maxValidator = function (value) {
          var max = scope.$eval(attrs.nmax);
          if (angular.isDefined(max) && !ctrl.$isEmpty(value) && value > max) {
            ctrl.$setValidity('nmax', false);
          } else {
            ctrl.$setValidity('nmax', true);
          }

          // Return the value rather than undefined if invalid
          return value;
        };

        /**
         * Re-validate if value is changed through the UI
         * or model (programmatically)
         */
        ctrl.$parsers.push(maxValidator);
        ctrl.$formatters.push(maxValidator);

        attrs.$observe('nmax', function () {
          maxValidator(ctrl.$modelValue);
        });
      }
    };
  }])

  /**
   * @ngdoc directive
   * @name horizon.framework.util.validators.directive:validateNumberMin
   * @element ng-model
   * @description
   * The `validateNumberMin` directive provides min validation
   * for form input elements. This is an alternative to `min`
   * which doesn't re-evaluate the expression passed in on
   * change. This allows the min value to be dynamically
   * specified.
   *
   * The model and view value is not set to undefined if
   * input does not pass validation. This is so that
   * components that are watching this value can determine
   * what to do with it. For example, quota charts can
   * still render and display over-utilized slices in red.
   *
   * Validator returns true is model/view value >= min value.
   *
   * @restrict A
   *
   * @example
   * ```
   * <input type="text" ng-model="value"
   *   validate-number-min="{$ minNumber $}">
   * ```
   */
  .directive('validateNumberMin', [function () {
    return {
      require:  'ngModel',
      restrict: 'A',
      link:     function (scope, element, attrs, ctrl) {
        if (!ctrl) {
          return;
        }

        var minValidator = function (value) {
          var min = scope.$eval(attrs.validateNumberMin);
          if (angular.isDefined(min) && !ctrl.$isEmpty(value) && value < min) {
            ctrl.$setValidity('validateNumberMin', false);
          } else {
            ctrl.$setValidity('validateNumberMin', true);
          }

          // Return the value rather than undefined if invalid
          return value;
        };

        /**
         * Re-validate if value is changed through the UI
         * or model (programmatically)
         */
        ctrl.$parsers.push(minValidator);
        ctrl.$formatters.push(minValidator);

        attrs.$observe('validateNumberMin', function () {
          minValidator(ctrl.$modelValue);
        });
      }
    };
  }])
  .directive('nmin', [function () {
    return {
      require:  'ngModel',
      restrict: 'A',
      link:     function (scope, element, attrs, ctrl) {
        if (!ctrl) {
          return;
        }

        var minValidator = function (value) {
          var min = scope.$eval(attrs.nmin);
          if (angular.isDefined(min) && !ctrl.$isEmpty(value) && value < min) {
            ctrl.$setValidity('nmin', false);
          } else {
            ctrl.$setValidity('nmin', true);
          }

          // Return the value rather than undefined if invalid
          return value;
        };

        /**
         * Re-validate if value is changed through the UI
         * or model (programmatically)
         */
        ctrl.$parsers.push(minValidator);
        ctrl.$formatters.push(minValidator);

        attrs.$observe('nmin', function () {
          minValidator(ctrl.$modelValue);
        });
      }
    };
  }])
  .directive('neven', [function () {
    return {
      require:  'ngModel',
      // restrict: 'A',
      link:     function (scope, element, attrs, ctrl) {
        if (!ctrl) {
          return;
        }

        var evenValidator = function (value) {
          var min = scope.$eval(attrs.neven);
          if (angular.isDefined(min) && !ctrl.$isEmpty(value) && value % 2 === 0) {
            ctrl.$setValidity('neven', false);
          } else {
            ctrl.$setValidity('neven', true);
          }

          // Return the value rather than undefined if invalid
          return value;
        };

        /**
         * Re-validate if value is changed through the UI
         * or model (programmatically)
         */
        ctrl.$parsers.push(evenValidator);
        ctrl.$formatters.push(evenValidator);

        attrs.$observe('neven', function () {
          evenValidator(ctrl.$modelValue);
        });
      }
    };
  }])

  .directive('ueven', [function () {
    return {
      require: 'ngModel',
      // restrict: 'A',
      link: function (scope, element, attrs, ctrl) {
        if (!ctrl) {
          return;
        }

        var evenValidator = function (value) {
          if (!ctrl.$isEmpty(value) && value % 2 === 0) {
            ctrl.$setValidity('neven', false);
          } else {
            ctrl.$setValidity('neven', true);
          }

          // Return the value rather than undefined if invalid
          return value;
        };

        /**
         * Re-validate if value is changed through the UI
         * or model (programmatically)
         */
        ctrl.$parsers.push(evenValidator);
        ctrl.$formatters.push(evenValidator);

        attrs.$observe('neven', function () {
          evenValidator(ctrl.$modelValue);
        });
      }
    };
  }])

  /**
   * @ngdoc directive
   * @name notBlank
   * @element ng-model
   * @description Ensure that the value is not blank
   */
  .directive('notBlank', function () {
    return {
      require: 'ngModel',
      link:    function (scope, elm, attrs, ctrl) {
        ctrl.$parsers.unshift(function (viewValue) {
          if (viewValue.length) {
            // it is valid
            ctrl.$setValidity('notBlank', true);
            return viewValue;
          }
          // it is invalid, return undefined (no model update)
          ctrl.$setValidity('notBlank', false);
          return undefined;
        });
      }
    };
  })
  /**
   * @ngdoc directive
   * @name startChar
   * @element ng-model
   * @description Ensure that the value start with Latin
   */
  .directive('startChar', function () {
    return {
      restrict: "A",
      require: "ngModel",
      link: function(scope, element, attrs, c){
        var reg = /^[a-zA-Z]+$/;
        scope.$watch(attrs.ngModel, function(n,o){
          if(!n)
            return;
          if(o!==n){
            if(!reg.test(n[0])){
              c.$setValidity('startChar', false);
            }else{
              c.$setValidity('startChar', true);
            }
          }
        });
      }
    };
  })
  /**
   * @ngdoc directive
   * @name hzPasswordMatch
   * @element ng-model
   *
   * @description
   * A directive to ensure that password matches.
   * Changing the password or confirmation password triggers a validation check.
   * However, only the confirmation password will show an error if match is false.
   * The goal is to check that confirmation password matches the password,
   * not whether the password matches the confirmation password.
   * The behavior here is NOT bi-directional.
   *
   * @restrict A
   *
   * @scope
   * hzPasswordMatch - form model to validate against
   *
   * @example:
   * <form name="form">
   *  <input type='password' id="psw" ng-model="user.psw" name="psw">
   *  <input type='password' ng-model="user.cnf" hz-password-match="form.psw">
   * </form>
   *
   * Note that id and name are required for the password input.
   * This directive uses the form model and id for validation check.
   */
  .directive('hzPasswordMatch', function () {
    return {
      restrict: 'A',
      require: 'ngModel',
      scope: { pw: '=hzPasswordMatch' },
      link: function (scope, element, attr, ctrl) {

        // helper function to check that password matches
        function passwordCheck() {
          scope.$apply(function () {
          	var val,pwVal;
            var match = ((val = ctrl.$viewValue === undefined ? '' : ctrl.$viewValue) === (pwVal = scope.pw.$viewValue === undefined ? '' : scope.pw.$viewValue));
            ctrl.$setValidity('match', match);
          });
        }

        /**
         * this ensures that typing in either input
         * will trigger the password match
         */
        var pwElement = $('#' + scope.pw.$name);
        pwElement.on('keyup change', passwordCheck);
        element.on('keyup change', passwordCheck);
      } // end of link
    }; // end of return
  })

  .directive('integer', function() {
    var INTEGER_REGEXP = /^\-?\d+$/;
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$parsers.unshift(function(viewValue) {
          if (INTEGER_REGEXP.test(viewValue)) {
            // 验证通过
            ctrl.$setValidity('integer', true);
            return viewValue;
          } else {
            // 验证不通过 返回 undefined (不会有模型更新)
            ctrl.$setValidity('integer', false);
            return undefined;
          }
        });
      }
    };
  })

 .directive('smartFloat', function() {
   var FLOAT_REGEXP = /^\-?\d+((\.|\,)\d+)?$/;
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$parsers.unshift(function(viewValue) {
          if (FLOAT_REGEXP.test(viewValue)) {
            ctrl.$setValidity('float', true);
            return parseFloat(viewValue.replace(',', '.'));
          } else {
            ctrl.$setValidity('float', false);
            return undefined;
          }
        });
      }
    };
 })

 .directive('even', function() {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$parsers.unshift(function(viewValue) {
          if (viewValue === '') {
            ctrl.$setValidity('required', true);
            ctrl.$setValidity('even', false);
            return viewValue;
          }
          if (viewValue % 2 === 1) {
            ctrl.$setValidity('even', true);
            return viewValue;
          } else {
            ctrl.$setValidity('even', false);
            return undefined;
          }
        });
      }
    };
 })

 .directive('odd', function() {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$parsers.unshift(function(viewValue) {
          if (viewValue % 2 === 0) {
            ctrl.$setValidity('odd', true);
            return viewValue;
          } else {
            ctrl.$setValidity('odd', false);
            return undefined;
          }
        });
      }
    };
 })
 .directive('amount', function() {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        scope.$watch(attrs.ngModel, function(n,o){
          if(n !== o){
            // In k8s create app add service form, when the container CPU is empty,
            // it should not verify that it is valid.
            if(attrs.eid && attrs.id === 'container_cpu' && n === null) {
              ctrl.$setValidity('amount', true);
            } else {
              var reg = new RegExp('^(0|[1-9][0-9]*)(\.[0-9]{0,'+ parseFloat(attrs.amount) +'})?$', "gi");
              ctrl.$setValidity('amount', reg.test(n));
            }
          }
        });
      }
    };
 })
  /**
   * @ngdoc directive
   * @name horizon.framework.util.validators:validateUnique
   * @element ng-model
   * @description
   * The `validateUnique` directive provides validation for form input elements to ensure
   * values are unique.
   *
   * The form input value can be validated against an array of values or a custom validator
   * function can be provided. If an array of values is specified, the validator returns true
   * if the value is not found in the array. If a function is specified, the validator returns
   * the value of the function which should evaluate to true or false.
   *
   * @restrict A
   *
   * @example
   * ```
   * <input type="number" ng-model="value"
   *   validate-unique="[80,443]">
   * ```
   *
   * @example
   * ```
   * <input type="string" ng-model="value"
   *   validate-unique="ctrl.validateUniqueName">
   *
   * ctrl.validateUniqueName = function(value) {
   *   return !existingItems.some(function(item) {
   *     return item.leaf && item.leaf.name === value;
   *   });
   * };
   * ```
   */
  .directive('validateUnique', function () {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function (scope, element, attr, ctrl) {

        ctrl.$parsers.push(validate);
        ctrl.$formatters.push(validate);
        attr.$observe('validateUnique', function () {
     　    validate(ctrl.$modelValue);
        });

        function validate(value) {
          var param = scope.$eval(attr.validateUnique);
          var unique = true;
          if (angular.isArray(param) && param.length > 0) {
            unique = param.indexOf(value) < 0;
          } else if (angular.isFunction(param)) {
            unique = param(value);
          }
          ctrl.$setValidity('unique', unique);
          return value;
        }
      }
    };
  });
})();
