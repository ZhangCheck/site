webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _css = __webpack_require__(2358);

	var _modal = __webpack_require__(29);

	var _modal2 = _interopRequireDefault(_modal);

	var _css2 = __webpack_require__(54);

	var _form = __webpack_require__(53);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(10);

	var _interfaces = __webpack_require__(35);

	var _StepContainerV = __webpack_require__(287);

	var _StepContainerV2 = _interopRequireDefault(_StepContainerV);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var FormItem = _form2["default"].Item;
	(0, _jsonp2["default"])("wfbdzyApiDsfjjkSteperDemo")(function (args, callback) {
	    var states = _global.Global.getState();
	    var list = states.aiForm.wfbdzyApiDsfjkTxurlStep2;
	    var step = states.stepContainer.wfbdzyApiDsfjjkSteperDemo.step;
	    if (!list && step != 1) {
	        _StepContainerV2["default"].gotoFirst('wfbdzyApiDsfjkTxurlStep2');
	    }
	    callback({
	        "success": true,
	        "data": {
	            "afterSave": "datalistV1/fbzyList/list/0/10",
	            "steps": [{
	                "arg": {},
	                "type": "aiForm",
	                "configStepApi": "wfbdzyApiDsfjkTxurlStep2",
	                "number": "1",
	                "name": "填写来源URL",
	                "id": "wfbdzyApiDsfjkTxurlStep2",
	                "validate": function validate() {
	                    var state = _global.Global.getState();
	                    var form = state.aiForm.wfbdzyApiDsfjkTxurlStep2.form;
	                    var validate = false;
	                    var functionName = void 0;
	                    var funUrlBool = state.aiForm.wfbdzyApiDsfjkTxurlStep2.funNameBool;
	                    if (form.getFieldsValue().serviceType == "webservice") {
	                        if (!(state.aiForm.wfbdzyApiDsfjkTxurlStep2.functionName && state.aiForm.wfbdzyApiDsfjkTxurlStep2.functionName.data)) {
	                            _modal2["default"].warning({
	                                content: "方法未获得，请填写正确接口URL！"
	                            });
	                            return false;
	                        } else {
	                            //有方法
	                            functionName = state.aiForm.wfbdzyApiDsfjkTxurlStep2.functionName.data;
	                        }
	                    }

	                    form.validateFields(function (fileds) {
	                        validate = !fileds;
	                    });
	                    if (validate) {
	                        var values = form.getFieldsValue();
	                        if (form.getFieldsValue().serviceType == "webservice") {
	                            var funName = state.aiForm.wfbdzyApiDsfjkTxurlStep2.functionName;
	                            functionName = funName && funName.data ? funName.data.join() : "";
	                            values.functionName = functionName;
	                        }
	                        _global.Global.mark({ aiForm: { wfbdzyApiDsfjkFbylStep4: null } });
	                        _global.Global.mark({ aiForm: { wfbdzyApiDsfjkTxurlStep2: { values: values } } });
	                    }
	                    return validate;
	                }
	            }, {
	                "arg": {},
	                "type": "aiForm",
	                "configStepApi": "wfbdzyApiDsfjkFbylStep4",
	                "number": "2",
	                "name": "发布预览",
	                "id": "wfbdzyApiDsfjkFbylStep4",
	                "validate": function validate() {
	                    var apiConfig = (0, _extends3["default"])({}, _interfaces.zyfbApiAllSaveAllData, {
	                        body: (0, _extends3["default"])({}, _global.Global.getState().aiForm.wfbdzyApiDsfjkFbylStep4.values) });
	                    return apiConfig;
	                }
	            }]
	        }
	    });
	});

/***/ }
]);