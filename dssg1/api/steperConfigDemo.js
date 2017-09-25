webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _css = __webpack_require__(2174);

	var _modal = __webpack_require__(29);

	var _modal2 = _interopRequireDefault(_modal);

	var _css2 = __webpack_require__(26);

	var _button = __webpack_require__(23);

	var _button2 = _interopRequireDefault(_button);

	var _css3 = __webpack_require__(54);

	var _form = __webpack_require__(53);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _ConnectDatasource = __webpack_require__(217);

	var _ConnectDatasource2 = _interopRequireDefault(_ConnectDatasource);

	var _global = __webpack_require__(10);

	var _interfaces = __webpack_require__(35);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var FormItem = _form2["default"].Item;

	(0, _jsonp2["default"])("steperConfigDemo")(function (args, callback) {
	    callback({
	        "success": true,
	        "data": {
	            "afterSave": "issue",
	            "steps": [{
	                "type": "datalist",
	                "configStepApi": "steperDemoStep1",
	                "number": "1",
	                "name": "datalist页面",
	                "id": "steperDemoStep1",
	                "footer": [function () {
	                    return _react2["default"].createElement(
	                        _button2["default"],
	                        null,
	                        '\u6D4B\u8BD5\u8FDE\u63A5'
	                    );
	                }, "next", "cancel"],
	                "footerHidden": true,
	                "validate": function validate() {
	                    var selected = _global.Global.getState().dataList.steperDemoStep1.selectedRows;
	                    var validate = selected && selected.length > 0;
	                    if (!validate) {
	                        _modal2["default"].warning({
	                            title: '提示',
	                            content: '请选择一个条目，然后点击”下一步“。'
	                        });
	                    }
	                    return validate;
	                }
	            }, {
	                "type": "aiForm",
	                "configStepApi": "steperDemoStep2",
	                "number": "3",
	                "name": "aiForm页面",
	                "id": "steperDemoStep2"
	            }, {
	                "type": _react2["default"].createElement(
	                    'div',
	                    { style: { paddingLeft: 30 } },
	                    '\u81EA\u5B9A\u4E49\u5185\u5BB9\uFF0C\u53EF\u4EE5\u653E\u4EFB\u4F55\u4E1C\u897F\uFF01\uFF01'
	                ),
	                "configStepApi": "steperDemoStep3",
	                "number": "2",
	                "name": "自定义页面",
	                "id": "steperDemoStep3",
	                "validate": function validate() {
	                    var apiConfig = (0, _extends3["default"])({}, _interfaces.saveSuccess, { body: (0, _extends3["default"])({}, _interfaces.saveSuccess.body, { data: "anyThing" }) });
	                    return apiConfig;
	                }
	            }]
	        }
	    });
	});

/***/ }
]);