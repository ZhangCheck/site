webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _css = __webpack_require__(54);

	var _form = __webpack_require__(53);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(10);

	var _dataFormat = __webpack_require__(64);

	var _interfaces = __webpack_require__(35);

	var _StepContainerV = __webpack_require__(287);

	var _StepContainerV2 = _interopRequireDefault(_StepContainerV);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * Created by liy on 2016/12/16 0019. 
	 */
	var FormItem = _form2["default"].Item;
	(0, _jsonp2["default"])("zybmFileSteperDemo")(function (args, callback) {
	    var states = _global.Global.getState();
	    var list = states.mainConMenu && states.mainConMenu.selected;
	    if (!list) {
	        _StepContainerV2["default"]["goto"]('zybmSjkSteperDemo', "/datalistV1/zybmgl/list/11/10?pmenu=datalistV1/mlgl/list/11/10");
	    }
	    callback({
	        "success": true,
	        "data": {
	            "afterSave": "/datalistV1/zybmgl/list/11/10?pmenu=datalistV1/mlgl/list/11/10?nodeId=" + list[0],
	            "steps": [{
	                "arg": {},
	                "type": "aiForm",
	                "configStepApi": "zybmSjkTxbmsqStep1",
	                "number": "1",
	                "name": "填写编目申请",
	                "id": "zybmSjkTxbmsqStep1",
	                "footer": ['next', 'cancel'],
	                "validate": function validate() {
	                    var form = _global.Global.getState().aiForm.zybmSjkTxbmsqStep1.form;
	                    var values = form.getFieldsValue();
	                    var validate = false;
	                    form.validateFields(function (fileds) {
	                        validate = !fileds;
	                    });

	                    if (validate) {
	                        _global.Global.mark({ aiForm: { zybmSjkTxbmsqStep1: { values: (0, _extends3["default"])({}, values) } } });
	                    }
	                    return validate;
	                }
	            }, {
	                "arg": {},
	                "type": "aiForm",
	                "configStepApi": "zybmSjkTxyshStep2",
	                "number": "2",
	                "name": "填写元数据",
	                "id": "zybmSjkTxyshStep2",
	                "validate": function validate() {
	                    var state = _global.Global.getState();
	                    var form = state.aiForm.zybmSjkTxyshStep2.form;
	                    var values = form.getFieldsValue();
	                    var validate = false;
	                    form.validateFields(function (fileds) {
	                        validate = !fileds;
	                    });
	                    if (validate) {
	                        _global.Global.mark({ aiForm: { zybmSjkBmylStep4: null } });
	                        _global.Global.mark({ aiForm: { zybmSjkTxyshStep2: { values: values } } });
	                    }
	                    return validate;
	                }
	            }, {
	                "arg": {},
	                "type": "aiForm",
	                "configStepApi": "zybmSjkBmylStep4",
	                "number": "3",
	                "name": "编目预览",
	                "id": "zybmSjkBmylStep4",
	                customerClear: function customerClear() {
	                    _global.Global.mark({ aiFormTable: { dsfStep3: null } });
	                },
	                "validate": function validate() {
	                    var apiConfig = (0, _extends3["default"])({}, _interfaces.saveResourceCatalog, {
	                        body: (0, _extends3["default"])({}, _global.Global.getState().aiForm.zybmSjkBmylStep4.values) });
	                    return apiConfig;
	                }
	            }]
	        }
	    });
	});

/***/ }
]);