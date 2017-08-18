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
	(0, _jsonp2["default"])("zybmShSteperDemo")(function (args, callback) {
	    var states = _global.Global.getState();
	    var list = _global.Global.getState().dataList.zybmgl;
	    if (!list) {
	        _StepContainerV2["default"]["goto"]('zybmShCkbmsqStep1', "/datalistV1/zybmgl/list/11/10?pmenu=datalistV1/mlgl/list/11/10");
	    }
	    var catalogId = states.mainConMenu.selected[0];
	    callback({
	        "success": true,
	        "data": {
	            "afterSave": "/datalistV1/zybmgl/list/11/10?pmenu=datalistV1/mlgl/list/11/10?nodeId=" + catalogId,
	            "isModal": true,
	            "steps": [{
	                "arg": {},
	                "type": "aiForm",
	                "configStepApi": "zybmShCkbmsqStep1",
	                "number": "1",
	                "name": "查看编目申请",
	                "id": "zybmShCkbmsqStep1",
	                "footer": ['next', 'cancel'],
	                "validate": function validate() {
	                    return true;
	                }
	            }, {
	                "arg": {},
	                "type": "aiForm",
	                "configStepApi": "zybmShCkyshxxStep2",
	                "number": "2",
	                "name": "查看元数据信息",
	                "id": "zybmShCkyshxxStep2",
	                "validate": function validate() {
	                    return true;
	                }
	            }, {
	                "arg": {},
	                "type": "aiForm",
	                "configStepApi": "zybmShTxspyjStep3",
	                "number": "3",
	                "name": "填写审批意见",
	                "id": "zybmShTxspyjStep3",
	                "validate": function validate() {
	                    var states = _global.Global.getState();
	                    var values = states.aiForm.zybmShTxspyjStep3.form.getFieldsValue();
	                    var apiConfig = (0, _extends3["default"])({}, _interfaces.auditResource, {
	                        body: (0, _extends3["default"])({}, values, { resourceId: states.dataList.zybmgl.selectedRows[0] }) });
	                    return apiConfig;
	                }
	            }]
	        }
	    });
	});

/***/ }
]);