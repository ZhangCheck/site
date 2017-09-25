(function () {
    'use strict';

    angular.module('horizon.framework.widgets.mouse-wheel', [])

        .directive('ngMouseWheelUp', function () {
            return function (scope, element, attrs) {
                element.bind("DOMMouseScroll mousewheel onmousewheel", function (event) {

                    // cross-browser wheel delta
                    var event = window.event || event; // old IE support
                    var delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));

                    if (delta > 0) {
                        scope.$apply(function () {
                            scope.$eval(attrs.ngMouseWheelUp);
                        });

                        // for IE
                        event.returnValue = false;
                        // for Chrome and Firefox
                        if (event.preventDefault) {
                            event.preventDefault();
                        }

                    }
                });
            };
        })

        .directive('ngMouseWheelDown', function () {
            return function (scope, element, attrs) {
                element.bind("DOMMouseScroll mousewheel onmousewheel", function (event) {

                    // cross-browser wheel delta
                    var event = window.event || event; // old IE support
                    var delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));

                    if (delta < 0) {
                        scope.$apply(function () {
                            scope.$eval(attrs.ngMouseWheelDown);
                        });

                        // for IE
                        event.returnValue = false;
                        // for Chrome and Firefox
                        if (event.preventDefault) {
                            event.preventDefault();
                        }

                    }
                });
            };
        })
        .directive('ngMouseWheelDownNextPage', function () {
            return function (scope, element, attrs) {
                element.bind("DOMMouseScroll mousewheel onmousewheel", function (event) {

                    // cross-browser wheel delta
                    var event = window.event || event; // old IE support
                    var delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
                    //mouse wheel down event
                    if (delta < 0) {
                       if(attrs.$$element[0].scrollTop>0 && (attrs.$$element[0].offsetHeight + attrs.$$element[0].scrollTop >
                          50 + document.querySelectorAll('ul.log-content')[0].offsetHeight)){
                          scope.$apply(function () {
                            scope.$eval(attrs.ngMouseWheelDownNextPage);
                          });
                          // for IE
                          event.returnValue = false;
                          // for Chrome and Firefox
                          if (event.preventDefault) {
                              event.preventDefault();
                          }
                       }

                    }
                });
            };
        })
    .directive('ngMouseWheelUpNextPage', function () {
            return function (scope, element, attrs) {
                element.bind("DOMMouseScroll mousewheel onmousewheel", function (event) {

                    // cross-browser wheel delta
                    var event = window.event || event; // old IE support
                    var delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));

                    if (delta > 0) {
                        if(50>attrs.$$element[0].scrollTop > 0) {
                            scope.$apply(function () {
                                scope.$eval(attrs.ngMouseWheelUp);
                            });

                            // for IE
                            event.returnValue = false;
                            // for Chrome and Firefox
                            if (event.preventDefault) {
                                event.preventDefault();
                            }
                        }

                    }
                });
            };
        });

})();
