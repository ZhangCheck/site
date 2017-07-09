
/** @template/js/Typeahead.js **/
angular.extendArray(angular.module("ui.bootstrap").requires,["ui.bootstrap.typeahead","ui.bootstrap.position","ui.bootstrap.bindHtml"]);
angular.extendArray(angular.module("ui.bootstrap.tpls").requires,["template/typeahead/typeahead-match.html","template/typeahead/typeahead-popup.html"]);

angular.module('ui.bootstrap.typeahead', ['ui.bootstrap.position', 'ui.bootstrap.bindHtml'])

/**
 * A helper service that can parse typeahead's syntax (string provided by users)
 * Extracted to a separate service for ease of unit testing
 */
    .factory('typeaheadParser', ['$parse', function ($parse) {

        //                      00000111000000000000022200000000000000003333333333333330000000000044000
        var TYPEAHEAD_REGEXP = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;

        return {
            parse:function (input) {

                var match = input.match(TYPEAHEAD_REGEXP);
                if (!match) {
                    throw new Error(
                        'Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_"' +
                        ' but got "' + input + '".');
                }

                return {
                    itemName:match[3],
                    source:$parse(match[4]),
                    viewMapper:$parse(match[2] || match[1]),
                    modelMapper:$parse(match[1])
                };
            }
        };
    }])

    .directive('typeahead', ['$compile', '$parse', '$q', '$timeout', '$document', '$position', 'typeaheadParser',
        function ($compile, $parse, $q, $timeout, $document, $position, typeaheadParser) {

            var HOT_KEYS = [9, 13, 27, 38, 40];

            return {
                require:'ngModel',
                link:function (originalScope, element, attrs, modelCtrl) {

                    //SUPPORTED ATTRIBUTES (OPTIONS)

                    //minimal no of characters that needs to be entered before typeahead kicks-in
                    var minSearch = originalScope.$eval(attrs.typeaheadMinLength) || 1;

                    //minimal wait time after last character typed before typeahead kicks-in
                    var waitTime = originalScope.$eval(attrs.typeaheadWaitMs) || 0;

                    //should it restrict model values to the ones selected from the popup only?
                    var isEditable = originalScope.$eval(attrs.typeaheadEditable) !== false;

                    //binding to a variable that indicates if matches are being retrieved asynchronously
                    var isLoadingSetter = $parse(attrs.typeaheadLoading).assign || angular.noop;

                    //a callback executed when a match is selected
                    var onSelectCallback = $parse(attrs.typeaheadOnSelect);

                    var inputFormatter = attrs.typeaheadInputFormatter ? $parse(attrs.typeaheadInputFormatter) : undefined;

                    var appendToBody =  attrs.typeaheadAppendToBody ? originalScope.$eval(attrs.typeaheadAppendToBody) : false;

                    var focusFirst = originalScope.$eval(attrs.typeaheadFocusFirst) !== false;

                    //INTERNAL VARIABLES

                    //model setter executed upon match selection
                    var $setModelValue = $parse(attrs.ngModel).assign;

                    //expressions used by typeahead
                    var parserResult = typeaheadParser.parse(attrs.typeahead);

                    var hasFocus;

                    //create a child scope for the typeahead directive so we are not polluting original scope
                    //with typeahead-specific data (matches, query etc.)
                    var scope = originalScope.$new();
                    originalScope.$on('$destroy', function(){
                        scope.$destroy();
                    });

                    // WAI-ARIA
                    var popupId = 'typeahead-' + scope.$id + '-' + Math.floor(Math.random() * 10000);
                    element.attr({
                        'aria-autocomplete': 'list',
                        'aria-expanded': false,
                        'aria-owns': popupId
                    });

                    //pop-up element used to display matches
                    var popUpEl = angular.element('<div typeahead-popup></div>');
                    popUpEl.attr({
                        id: popupId,
                        matches: 'matches',
                        active: 'activeIdx',
                        select: 'select(activeIdx)',
                        query: 'query',
                        position: 'position'
                    });
                    //custom item template
                    if (angular.isDefined(attrs.typeaheadTemplateUrl)) {
                        popUpEl.attr('template-url', attrs.typeaheadTemplateUrl);
                    }

                    var resetMatches = function() {
                        scope.matches = [];
                        scope.activeIdx = -1;
                        element.attr('aria-expanded', false);
                    };

                    var getMatchId = function(index) {
                        return popupId + '-option-' + index;
                    };

                    // Indicate that the specified match is the active (pre-selected) item in the list owned by this typeahead.
                    // This attribute is added or removed automatically when the `activeIdx` changes.
                    scope.$watch('activeIdx', function(index) {
                        if (index < 0) {
                            element.removeAttr('aria-activedescendant');
                        } else {
                            element.attr('aria-activedescendant', getMatchId(index));
                        }
                    });

                    var getMatchesAsync = function(inputValue) {

                        var locals = {$viewValue: inputValue};
                        isLoadingSetter(originalScope, true);
                        $q.when(parserResult.source(originalScope, locals)).then(function(matches) {

                            //it might happen that several async queries were in progress if a user were typing fast
                            //but we are interested only in responses that correspond to the current view value
                            var onCurrentRequest = (inputValue === modelCtrl.$viewValue);
                            if (onCurrentRequest && hasFocus) {
                                if (matches && matches.length > 0) {

                                    scope.activeIdx = focusFirst ? 0 : -1;
                                    scope.matches.length = 0;

                                    //transform labels
                                    for(var i=0; i<matches.length; i++) {
                                        locals[parserResult.itemName] = matches[i];
                                        scope.matches.push({
                                            id: getMatchId(i),
                                            label: parserResult.viewMapper(scope, locals),
                                            model: matches[i]
                                        });
                                    }

                                    scope.query = inputValue;
                                    //position pop-up with matches - we need to re-calculate its position each time we are opening a window
                                    //with matches as a pop-up might be absolute-positioned and position of an input might have changed on a page
                                    //due to other elements being rendered
                                    scope.position = appendToBody ? $position.offset(element) : $position.position(element);
                                    scope.position.top = scope.position.top + element.prop('offsetHeight');

                                    element.attr('aria-expanded', true);
                                } else {
                                    resetMatches();
                                }
                            }
                            if (onCurrentRequest) {
                                isLoadingSetter(originalScope, false);
                            }
                        }, function(){
                            resetMatches();
                            isLoadingSetter(originalScope, false);
                        });
                    };

                    resetMatches();

                    //we need to propagate user's query so we can higlight matches
                    scope.query = undefined;

                    //Declare the timeout promise var outside the function scope so that stacked calls can be cancelled later
                    var timeoutPromise;

                    var scheduleSearchWithTimeout = function(inputValue) {
                        timeoutPromise = $timeout(function () {
                            getMatchesAsync(inputValue);
                        }, waitTime);
                    };

                    var cancelPreviousTimeout = function() {
                        if (timeoutPromise) {
                            $timeout.cancel(timeoutPromise);
                        }
                    };

                    //plug into $parsers pipeline to open a typeahead on view changes initiated from DOM
                    //$parsers kick-in on all the changes coming from the view as well as manually triggered by $setViewValue
                    modelCtrl.$parsers.unshift(function (inputValue) {

                        hasFocus = true;

                        if (inputValue && inputValue.length >= minSearch) {
                            if (waitTime > 0) {
                                cancelPreviousTimeout();
                                scheduleSearchWithTimeout(inputValue);
                            } else {
                                getMatchesAsync(inputValue);
                            }
                        } else {
                            isLoadingSetter(originalScope, false);
                            cancelPreviousTimeout();
                            resetMatches();
                        }

                        if (isEditable) {
                            return inputValue;
                        } else {
                            if (!inputValue) {
                                // Reset in case user had typed something previously.
                                modelCtrl.$setValidity('editable', true);
                                return inputValue;
                            } else {
                                modelCtrl.$setValidity('editable', false);
                                return undefined;
                            }
                        }
                    });

                    modelCtrl.$formatters.push(function (modelValue) {

                        var candidateViewValue, emptyViewValue;
                        var locals = {};

                        // The validity may be set to false via $parsers (see above) if
                        // the model is restricted to selected values. If the model
                        // is set manually it is considered to be valid.
                        if (!isEditable) {
                            modelCtrl.$setValidity('editable', true);
                        }

                        if (inputFormatter) {

                            locals.$model = modelValue;
                            return inputFormatter(originalScope, locals);

                        } else {

                            //it might happen that we don't have enough info to properly render input value
                            //we need to check for this situation and simply return model value if we can't apply custom formatting
                            locals[parserResult.itemName] = modelValue;
                            candidateViewValue = parserResult.viewMapper(originalScope, locals);
                            locals[parserResult.itemName] = undefined;
                            emptyViewValue = parserResult.viewMapper(originalScope, locals);

                            return candidateViewValue!== emptyViewValue ? candidateViewValue : modelValue;
                        }
                    });

                    scope.select = function (activeIdx) {
                        //called from within the $digest() cycle
                        var locals = {};
                        var model, item;

                        locals[parserResult.itemName] = item = scope.matches[activeIdx].model;
                        model = parserResult.modelMapper(originalScope, locals);
                        $setModelValue(originalScope, model);
                        modelCtrl.$setValidity('editable', true);
                        modelCtrl.$setValidity('parse', true);

                        onSelectCallback(originalScope, {
                            $item: item,
                            $model: model,
                            $label: parserResult.viewMapper(originalScope, locals)
                        });

                        resetMatches();

                        //return focus to the input element if a match was selected via a mouse click event
                        // use timeout to avoid $rootScope:inprog error
                        $timeout(function() { element[0].focus(); }, 0, false);
                    };

                    //bind keyboard events: arrows up(38) / down(40), enter(13) and tab(9), esc(27)
                    element.bind('keydown', function (evt) {

                        //typeahead is open and an "interesting" key was pressed
                        if (scope.matches.length === 0 || HOT_KEYS.indexOf(evt.which) === -1) {
                            return;
                        }

                        // if there's nothing selected (i.e. focusFirst) and enter is hit, don't do anything
                        if (scope.activeIdx == -1 && (evt.which === 13 || evt.which === 9)) {
                            return;
                        }

                        evt.preventDefault();

                        if (evt.which === 40) {
                            scope.activeIdx = (scope.activeIdx + 1) % scope.matches.length;
                            scope.$digest();

                        } else if (evt.which === 38) {
                            scope.activeIdx = (scope.activeIdx > 0 ? scope.activeIdx : scope.matches.length) - 1;
                            scope.$digest();

                        } else if (evt.which === 13 || evt.which === 9) {
                            scope.$apply(function () {
                                scope.select(scope.activeIdx);
                            });

                        } else if (evt.which === 27) {
                            evt.stopPropagation();

                            resetMatches();
                            scope.$digest();
                        }
                    });

                    element.bind('blur', function (evt) {
                        hasFocus = false;
                    });

                    // Keep reference to click handler to unbind it.
                    var dismissClickHandler = function (evt) {
                        if (element[0] !== evt.target) {
                            resetMatches();
                            scope.$digest();
                        }
                    };

                    $document.bind('click', dismissClickHandler);

                    originalScope.$on('$destroy', function(){
                        $document.unbind('click', dismissClickHandler);
                        if (appendToBody) {
                            $popup.remove();
                        }
                        // Prevent jQuery cache memory leak
                        popUpEl.remove();
                    });

                    var $popup = $compile(popUpEl)(scope);

                    if (appendToBody) {
                        $document.find('body').append($popup);
                    } else {
                        element.after($popup);
                    }
                }
            };

        }])

    .directive('typeaheadPopup', function () {
        return {
            restrict:'EA',
            scope:{
                matches:'=',
                query:'=',
                active:'=',
                position:'=',
                select:'&'
            },
            replace:true,
            templateUrl:'template/typeahead/typeahead-popup.html',
            link:function (scope, element, attrs) {

                scope.templateUrl = attrs.templateUrl;

                scope.isOpen = function () {
                    return scope.matches.length > 0;
                };

                scope.isActive = function (matchIdx) {
                    return scope.active == matchIdx;
                };

                scope.selectActive = function (matchIdx) {
                    scope.active = matchIdx;
                };

                scope.selectMatch = function (activeIdx) {
                    scope.select({activeIdx:activeIdx});
                };
            }
        };
    })

    .directive('typeaheadMatch', ['$templateRequest', '$compile', '$parse', function ($templateRequest, $compile, $parse) {
        return {
            restrict:'EA',
            scope:{
                index:'=',
                match:'=',
                query:'='
            },
            link:function (scope, element, attrs) {
                var tplUrl = $parse(attrs.templateUrl)(scope.$parent) || 'template/typeahead/typeahead-match.html';
                $templateRequest(tplUrl).then(function(tplContent) {
                    $compile(tplContent.trim())(scope, function(clonedElement){
                        element.replaceWith(clonedElement);
                    });
                });
            }
        };
    }])

    .filter('typeaheadHighlight', function() {

        function escapeRegexp(queryToEscape) {
            return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
        }

        return function(matchItem, query) {
            return query ? ('' + matchItem).replace(new RegExp(escapeRegexp(query), 'gi'), '<strong>$&</strong>') : matchItem;
        };
    });

angular.module('ui.bootstrap.position', [])

/**
 * A set of utility methods that can be use to retrieve position of DOM elements.
 * It is meant to be used where we need to absolute-position DOM elements in
 * relation to other, existing elements (this is the case for tooltips, popovers,
 * typeahead suggestions etc.).
 */
    .factory('$position', ['$document', '$window', function ($document, $window) {

        function getStyle(el, cssprop) {
            if (el.currentStyle) { //IE
                return el.currentStyle[cssprop];
            } else if ($window.getComputedStyle) {
                return $window.getComputedStyle(el)[cssprop];
            }
            // finally try and get inline style
            return el.style[cssprop];
        }

        /**
         * Checks if a given element is statically positioned
         * @param element - raw DOM element
         */
        function isStaticPositioned(element) {
            return (getStyle(element, 'position') || 'static' ) === 'static';
        }

        /**
         * returns the closest, non-statically positioned parentOffset of a given element
         * @param element
         */
        var parentOffsetEl = function (element) {
            var docDomEl = $document[0];
            var offsetParent = element.offsetParent || docDomEl;
            while (offsetParent && offsetParent !== docDomEl && isStaticPositioned(offsetParent) ) {
                offsetParent = offsetParent.offsetParent;
            }
            return offsetParent || docDomEl;
        };

        return {
            /**
             * Provides read-only equivalent of jQuery's position function:
             * http://api.jquery.com/position/
             */
            position: function (element) {
                var elBCR = this.offset(element);
                var offsetParentBCR = { top: 0, left: 0 };
                var offsetParentEl = parentOffsetEl(element[0]);
                if (offsetParentEl != $document[0]) {
                    offsetParentBCR = this.offset(angular.element(offsetParentEl));
                    offsetParentBCR.top += offsetParentEl.clientTop - offsetParentEl.scrollTop;
                    offsetParentBCR.left += offsetParentEl.clientLeft - offsetParentEl.scrollLeft;
                }

                var boundingClientRect = element[0].getBoundingClientRect();
                return {
                    width: boundingClientRect.width || element.prop('offsetWidth'),
                    height: boundingClientRect.height || element.prop('offsetHeight'),
                    top: elBCR.top - offsetParentBCR.top,
                    left: elBCR.left - offsetParentBCR.left
                };
            },

            /**
             * Provides read-only equivalent of jQuery's offset function:
             * http://api.jquery.com/offset/
             */
            offset: function (element) {
                var boundingClientRect = element[0].getBoundingClientRect();
                return {
                    width: boundingClientRect.width || element.prop('offsetWidth'),
                    height: boundingClientRect.height || element.prop('offsetHeight'),
                    top: boundingClientRect.top + ($window.pageYOffset || $document[0].documentElement.scrollTop),
                    left: boundingClientRect.left + ($window.pageXOffset || $document[0].documentElement.scrollLeft)
                };
            },

            /**
             * Provides coordinates for the targetEl in relation to hostEl
             */
            positionElements: function (hostEl, targetEl, positionStr, appendToBody) {

                var positionStrParts = positionStr.split('-');
                var pos0 = positionStrParts[0], pos1 = positionStrParts[1] || 'center';

                var hostElPos,
                    targetElWidth,
                    targetElHeight,
                    targetElPos;

                hostElPos = appendToBody ? this.offset(hostEl) : this.position(hostEl);

                targetElWidth = targetEl.prop('offsetWidth');
                targetElHeight = targetEl.prop('offsetHeight');

                var shiftWidth = {
                    center: function () {
                        return hostElPos.left + hostElPos.width / 2 - targetElWidth / 2;
                    },
                    left: function () {
                        return hostElPos.left;
                    },
                    right: function () {
                        return hostElPos.left + hostElPos.width;
                    }
                };

                var shiftHeight = {
                    center: function () {
                        return hostElPos.top + hostElPos.height / 2 - targetElHeight / 2;
                    },
                    top: function () {
                        return hostElPos.top;
                    },
                    bottom: function () {
                        return hostElPos.top + hostElPos.height;
                    }
                };

                switch (pos0) {
                    case 'right':
                        targetElPos = {
                            top: shiftHeight[pos1](),
                            left: shiftWidth[pos0]()
                        };
                        break;
                    case 'left':
                        targetElPos = {
                            top: shiftHeight[pos1](),
                            left: hostElPos.left - targetElWidth
                        };
                        break;
                    case 'bottom':
                        targetElPos = {
                            top: shiftHeight[pos0](),
                            left: shiftWidth[pos1]()
                        };
                        break;
                    default:
                        targetElPos = {
                            top: hostElPos.top - targetElHeight,
                            left: shiftWidth[pos1]()
                        };
                        break;
                }

                return targetElPos;
            }
        };
    }]);

angular.module('ui.bootstrap.bindHtml', [])

    .directive('bindHtmlUnsafe', function () {
        return function (scope, element, attr) {
            element.addClass('ng-binding').data('$binding', attr.bindHtmlUnsafe);
            scope.$watch(attr.bindHtmlUnsafe, function bindHtmlUnsafeWatchAction(value) {
                element.html(value || '');
            });
        };
    });
angular.module("template/typeahead/typeahead-match.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("template/typeahead/typeahead-match.html",
        "<a tabindex=\"-1\" bind-html-unsafe=\"match.label | typeaheadHighlight:query\"></a>");
}]);

angular.module("template/typeahead/typeahead-popup.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("template/typeahead/typeahead-popup.html",
        "<ul class=\"dropdown-menu\" ng-show=\"isOpen()\" ng-style=\"{top: position.top+'px', left: position.left+'px'}\" style=\"display: block;\" role=\"listbox\" aria-hidden=\"{{!isOpen()}}\">\n" +
        "    <li ng-repeat=\"match in matches track by $index\" ng-class=\"{active: isActive($index) }\" ng-mouseenter=\"selectActive($index)\" ng-click=\"selectMatch($index)\" role=\"option\" id=\"{{match.id}}\">\n" +
        "        <div typeahead-match index=\"$index\" match=\"match\" query=\"query\" template-url=\"templateUrl\"></div>\n" +
        "    </li>\n" +
        "</ul>\n" +
        "");
}]);
/** @template/js/Typeahead.js end **/

/** @template/js/TypeaheadDemo.js **/
angular.module('ngApp').controller('TypeaheadCtrl', function($scope, $http) {

    $scope.selected = undefined;
    $scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
    // Any function returning a promise object can be used to load values asynchronously
    $scope.getLocation = function(val) {
        return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {
            params: {
                address: val,
                sensor: false
            }
        }).then(function(response){
            return response.data.results.map(function(item){
                return item.formatted_address;
            });
        });
    };

    $scope.statesWithFlags = [{'name':'Alabama','flag':'5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png'},{'name':'Alaska','flag':'e/e6/Flag_of_Alaska.svg/43px-Flag_of_Alaska.svg.png'},{'name':'Arizona','flag':'9/9d/Flag_of_Arizona.svg/45px-Flag_of_Arizona.svg.png'},{'name':'Arkansas','flag':'9/9d/Flag_of_Arkansas.svg/45px-Flag_of_Arkansas.svg.png'},{'name':'California','flag':'0/01/Flag_of_California.svg/45px-Flag_of_California.svg.png'},{'name':'Colorado','flag':'4/46/Flag_of_Colorado.svg/45px-Flag_of_Colorado.svg.png'},{'name':'Connecticut','flag':'9/96/Flag_of_Connecticut.svg/39px-Flag_of_Connecticut.svg.png'},{'name':'Delaware','flag':'c/c6/Flag_of_Delaware.svg/45px-Flag_of_Delaware.svg.png'},{'name':'Florida','flag':'f/f7/Flag_of_Florida.svg/45px-Flag_of_Florida.svg.png'},{'name':'Georgia','flag':'5/54/Flag_of_Georgia_%28U.S._state%29.svg/46px-Flag_of_Georgia_%28U.S._state%29.svg.png'},{'name':'Hawaii','flag':'e/ef/Flag_of_Hawaii.svg/46px-Flag_of_Hawaii.svg.png'},{'name':'Idaho','flag':'a/a4/Flag_of_Idaho.svg/38px-Flag_of_Idaho.svg.png'},{'name':'Illinois','flag':'0/01/Flag_of_Illinois.svg/46px-Flag_of_Illinois.svg.png'},{'name':'Indiana','flag':'a/ac/Flag_of_Indiana.svg/45px-Flag_of_Indiana.svg.png'},{'name':'Iowa','flag':'a/aa/Flag_of_Iowa.svg/44px-Flag_of_Iowa.svg.png'},{'name':'Kansas','flag':'d/da/Flag_of_Kansas.svg/46px-Flag_of_Kansas.svg.png'},{'name':'Kentucky','flag':'8/8d/Flag_of_Kentucky.svg/46px-Flag_of_Kentucky.svg.png'},{'name':'Louisiana','flag':'e/e0/Flag_of_Louisiana.svg/46px-Flag_of_Louisiana.svg.png'},{'name':'Maine','flag':'3/35/Flag_of_Maine.svg/45px-Flag_of_Maine.svg.png'},{'name':'Maryland','flag':'a/a0/Flag_of_Maryland.svg/45px-Flag_of_Maryland.svg.png'},{'name':'Massachusetts','flag':'f/f2/Flag_of_Massachusetts.svg/46px-Flag_of_Massachusetts.svg.png'},{'name':'Michigan','flag':'b/b5/Flag_of_Michigan.svg/45px-Flag_of_Michigan.svg.png'},{'name':'Minnesota','flag':'b/b9/Flag_of_Minnesota.svg/46px-Flag_of_Minnesota.svg.png'},{'name':'Mississippi','flag':'4/42/Flag_of_Mississippi.svg/45px-Flag_of_Mississippi.svg.png'},{'name':'Missouri','flag':'5/5a/Flag_of_Missouri.svg/46px-Flag_of_Missouri.svg.png'},{'name':'Montana','flag':'c/cb/Flag_of_Montana.svg/45px-Flag_of_Montana.svg.png'},{'name':'Nebraska','flag':'4/4d/Flag_of_Nebraska.svg/46px-Flag_of_Nebraska.svg.png'},{'name':'Nevada','flag':'f/f1/Flag_of_Nevada.svg/45px-Flag_of_Nevada.svg.png'},{'name':'New Hampshire','flag':'2/28/Flag_of_New_Hampshire.svg/45px-Flag_of_New_Hampshire.svg.png'},{'name':'New Jersey','flag':'9/92/Flag_of_New_Jersey.svg/45px-Flag_of_New_Jersey.svg.png'},{'name':'New Mexico','flag':'c/c3/Flag_of_New_Mexico.svg/45px-Flag_of_New_Mexico.svg.png'},{'name':'New York','flag':'1/1a/Flag_of_New_York.svg/46px-Flag_of_New_York.svg.png'},{'name':'North Carolina','flag':'b/bb/Flag_of_North_Carolina.svg/45px-Flag_of_North_Carolina.svg.png'},{'name':'North Dakota','flag':'e/ee/Flag_of_North_Dakota.svg/38px-Flag_of_North_Dakota.svg.png'},{'name':'Ohio','flag':'4/4c/Flag_of_Ohio.svg/46px-Flag_of_Ohio.svg.png'},{'name':'Oklahoma','flag':'6/6e/Flag_of_Oklahoma.svg/45px-Flag_of_Oklahoma.svg.png'},{'name':'Oregon','flag':'b/b9/Flag_of_Oregon.svg/46px-Flag_of_Oregon.svg.png'},{'name':'Pennsylvania','flag':'f/f7/Flag_of_Pennsylvania.svg/45px-Flag_of_Pennsylvania.svg.png'},{'name':'Rhode Island','flag':'f/f3/Flag_of_Rhode_Island.svg/32px-Flag_of_Rhode_Island.svg.png'},{'name':'South Carolina','flag':'6/69/Flag_of_South_Carolina.svg/45px-Flag_of_South_Carolina.svg.png'},{'name':'South Dakota','flag':'1/1a/Flag_of_South_Dakota.svg/46px-Flag_of_South_Dakota.svg.png'},{'name':'Tennessee','flag':'9/9e/Flag_of_Tennessee.svg/46px-Flag_of_Tennessee.svg.png'},{'name':'Texas','flag':'f/f7/Flag_of_Texas.svg/45px-Flag_of_Texas.svg.png'},{'name':'Utah','flag':'f/f6/Flag_of_Utah.svg/45px-Flag_of_Utah.svg.png'},{'name':'Vermont','flag':'4/49/Flag_of_Vermont.svg/46px-Flag_of_Vermont.svg.png'},{'name':'Virginia','flag':'4/47/Flag_of_Virginia.svg/44px-Flag_of_Virginia.svg.png'},{'name':'Washington','flag':'5/54/Flag_of_Washington.svg/46px-Flag_of_Washington.svg.png'},{'name':'West Virginia','flag':'2/22/Flag_of_West_Virginia.svg/46px-Flag_of_West_Virginia.svg.png'},{'name':'Wisconsin','flag':'2/22/Flag_of_Wisconsin.svg/45px-Flag_of_Wisconsin.svg.png'},{'name':'Wyoming','flag':'b/bc/Flag_of_Wyoming.svg/43px-Flag_of_Wyoming.svg.png'}];
});
/** @template/js/TypeaheadDemo.js end **/

/** @template/js/bootstrap/button.js **/
/* ========================================================================
 * Bootstrap: button.js v3.3.5
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.VERSION  = '3.3.5'

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state += 'Text'

    if (data.resetText == null) $el.data('resetText', $el[val]())

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      $el[val](data[state] == null ? this.options[state] : data[state])

      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked')) changed = false
        $parent.find('.active').removeClass('active')
        this.$element.addClass('active')
      } else if ($input.prop('type') == 'checkbox') {
        if (($input.prop('checked')) !== this.$element.hasClass('active')) changed = false
        this.$element.toggleClass('active')
      }
      $input.prop('checked', this.$element.hasClass('active'))
      if (changed) $input.trigger('change')
    } else {
      this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
      this.$element.toggleClass('active')
    }
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  var old = $.fn.button

  $.fn.button             = Plugin
  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document)
    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      var $btn = $(e.target)
      if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
      Plugin.call($btn, 'toggle')
      if (!($(e.target).is('input[type="radio"]') || $(e.target).is('input[type="checkbox"]'))) e.preventDefault()
    })
    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
    })

}(jQuery);
/** @template/js/bootstrap/button.js end **/
