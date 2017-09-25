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
	(0, _jsonp2["default"])("zybmlcCkStep")(function (args, callback) {
	    var states = _global.Global.getState();
	    var list = states.mainConMenu && states.mainConMenu.selected;
	    if (!list) {
	        _StepContainerV2["default"]["goto"]('zybmlcCkStep', "/datalistV1/zybmgl/list/11/10?pmenu=datalistV1/mlgl/list/11/10");
	    }
	    callback({
	        "success": true,
	        "data": {
	            "afterSave": "/datalistV1/zybmgl/list/11/10?pmenu=datalistV1/mlgl/list/11/10?nodeId=" + list[0],
	            "steps": [{
	                "arg": {},
	                "type": "aiForm",
	                "configStepApi": "zybmlcCk",
	                "number": "1",
	                "name": "资源编目",
	                "id": "zybmlcCkStep1",
	                "footerHidden": true,
	                "customerClear": function customerClear() {
	                    _global.Global.mark({ dataList: { zybmgl: { detailMsgDataApi: null } } });
	                },
	                "validate": function validate() {
	                    return true;
	                }
	            }, {
	                "arg": {},
	                "type": "aiForm",
	                "configStepApi": "zybmlcCk",
	                "number": "2",
	                "name": "提交审核",
	                "footerHidden": true,
	                "id": "zybmlcCkStep2",
	                "validate": function validate() {
	                    return true;
	                }
	            }, {
	                "arg": {},
	                "type": "aiForm",
	                "configStepApi": "zybmlcCk",
	                "number": "3",
	                "name": "编目审核",
	                "id": "zybmlcCkStep3",
	                "footerHidden": true,
	                "validate": function validate() {
	                    return true;
	                }
	            }, {
	                "arg": {},
	                "type": "aiForm",
	                "configStepApi": "zybmlcCk",
	                "number": "4",
	                "name": "编目完成",
	                "id": "zybmlcCkStep4",
	                "footerHidden": true,
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