webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(1762);

	var _modal = __webpack_require__(29);

	var _modal2 = _interopRequireDefault(_modal);

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _css2 = __webpack_require__(54);

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

	var FormItem = _form2["default"].Item; /**
	                                     * Created by liy on 2016/12/16 0019.
	                                     */

	(0, _jsonp2["default"])("dyspSteper")(function (args, callback) {

	    callback({
	        "success": true,
	        "data": {
	            "afterSave": "datalistV1/dysp/list/0/10",
	            "steps": [{
	                "type": "aiForm",
	                "configStepApi": "getDyspEdit",
	                "arg": {
	                    detailMsg: (0, _extends3["default"])({}, _interfaces.dyspDetail, { body: (0, _extends3["default"])({}, _interfaces.dyspDetail.body, { id: _global.Global.getState().dataList.dysp ? _global.Global.getState().dataList.dysp.selectedRows : null }) })
	                },
	                "number": "1",
	                "name": "查看订阅申请",
	                "id": "getDyspEdit",
	                "footer": ["next", "cancel"],
	                "validate": function validate() {
	                    var selected = _global.Global.getState().dataList.dysp.selectedRows;
	                    var valid = selected && selected.length > 0;
	                    if (!valid) {
	                        _modal2["default"].warning({
	                            title: '提示',
	                            content: '请选择一个条目，然后点击”下一步“。'
	                        });
	                    }
	                    var form = _global.Global.getState().aiForm.getDyspEdit.form;
	                    var validate = false;
	                    form.validateFields(function (fileds) {
	                        validate = !fileds;
	                    });
	                    if (validate) {
	                        _global.Global.mark({ aiForm: { getDyspEdit: { values: form.getFieldsValue() } } });
	                    }
	                    return validate;
	                }
	            }, {
	                "type": "aiForm",
	                "configStepApi": "dyspSjkSjclcl",
	                "number": "2",
	                "name": "数据处理策略",
	                "id": "dyspSjkSjclcl",
	                customerClear: function customerClear() {
	                    _global.Global.mark({ aiForm: { dyspSjkSjclcl: null } });
	                    _global.Global.mark({ aiFormTable: { sjgl: null, sjzh: null, sjtm: null } });
	                },
	                "validate": function validate() {
	                    var form = _global.Global.getState().aiForm.dyspSjkSjclcl.form;
	                    var validate = false;
	                    form.validateFields(function (fileds) {
	                        validate = !fileds;
	                    });

	                    if (validate) {
	                        _global.Global.mark({ aiForm: { dyspSjkFbyl: null } });
	                        _global.Global.mark({ aiForm: { dyspSjkSjclcl: { values: form.getFieldsValue() } } });
	                    }
	                    return validate;
	                }
	            }, {
	                "type": "aiForm",
	                "configStepApi": "dyspSjkFbyl",
	                "arg": {},
	                "number": "3",
	                "name": "审批预览",
	                "id": "dyspSjkFbyl",
	                "validate": function validate() {
	                    var apiConfig = (0, _extends3["default"])({}, _interfaces.dyspSaveAllData, {
	                        body: (0, _extends3["default"])({}, _interfaces.dyspSaveAllData.body, _global.Global.getState().aiForm.dyspSjkFbyl.values) });
	                    return apiConfig;
	                }
	            }]
	        }
	    });
	});

/***/ }
]);