webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(2798);

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
	(0, _jsonp2["default"])("zybmSjkSteperUpdateDemo")(function (args, callback) {
	    var states = _global.Global.getState();
	    var list = states.mainConMenu && states.mainConMenu.selected;
	    if (!list) {
	        _StepContainerV2["default"]["goto"]('zybmSjkSteperUpdateDemo', "/datalistV1/zybmgl/list/11/10?pmenu=datalistV1/mlgl/list/11/10");
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

	                        _global.Global.mark({ aiForm: { zybmSjkTxyshStep2: { values: values } } });
	                    }
	                    return validate;
	                }
	            }, {
	                "type": "aiForm",
	                "configStepApi": "zybmSjkBjsjxStep3",
	                "number": "3",
	                "name": "编辑数据项",
	                "id": "zybmSjkBjsjxStep3",
	                customerClear: function customerClear() {
	                    _global.Global.mark({ aiFormTable: { zybmglStep3: null } });
	                },
	                "validate": function validate() {
	                    var state = _global.Global.getState();
	                    var dbJson = (0, _dataFormat.getAiFormTableValue)(state, "zybmglStep3");
	                    if (dbJson.length == 0) {
	                        _modal2["default"].warning({
	                            title: "提示",
	                            content: "请添加数据项！"
	                        });
	                        return false;
	                    } else {
	                        var action = 0,
	                            pkData = [],
	                            meName = [],
	                            meEName = [],
	                            meCode = [];
	                        for (var i = 0; i < dbJson.length; i++) {
	                            var data = dbJson[i];
	                            if (data.pk == true) {
	                                action = 1;
	                                pkData.push((0, _extends3["default"])({}, data));
	                            }
	                            if (data.name == "" || data.code == "" || data.ename == "") {
	                                action = 3;
	                                break;
	                            }
	                            if (data.name != "" && data.name.length > 30) {
	                                action = 6;
	                                break;
	                            }
	                            if (meEName.indexOf(data.ename) < 0) {
	                                if (/^[a-zA-Z]{1}[a-zA-Z_0-9]{0,25}$/.test(data.ename)) {
	                                    meEName.push(data.ename);
	                                } else {
	                                    action = 4;
	                                    break;
	                                }
	                            } else {
	                                action = 2;
	                                break;
	                            }
	                            if (meName.indexOf(data.name) < 0) {
	                                meName.push(data.name);
	                            } else {
	                                action = 2;
	                                break;
	                            }
	                            if (meCode.indexOf(data.code) < 0) {
	                                meCode.push(data.code);
	                            } else {
	                                action = 2;
	                                break;
	                            }
	                            if (data.type != "91" && data.type != "93") {
	                                if (!/^[1-9][0-9]*$/.test(data.length)) {
	                                    action = 5;
	                                    break;
	                                }
	                            }
	                        }
	                        if (action == 6) {
	                            _modal2["default"].warning({
	                                title: "提示",
	                                content: "数据项名称限长30！"
	                            });
	                            return false;
	                        } else if (action == 5) {
	                            _modal2["default"].warning({
	                                title: "提示",
	                                content: "数据项长度为数字，且不为空！"
	                            });
	                            return false;
	                        } else if (action == 4) {
	                            _modal2["default"].warning({
	                                title: "提示",
	                                content: "数据项英文名称规则为26以内的首位字母的数字、字母、下划线组成！"
	                            });
	                            return false;
	                        } else if (action == 3) {
	                            _modal2["default"].warning({
	                                title: "提示",
	                                content: "名称或编码不能为空！"
	                            });
	                            return false;
	                        } else if (action == 2) {
	                            _modal2["default"].warning({
	                                title: "提示",
	                                content: "名称或编码重复，请修改！"
	                            });
	                            return false;
	                        } else if (action == 0) {
	                            _modal2["default"].warning({
	                                title: "提示",
	                                content: "请标注主键！"
	                            });
	                            return false;
	                        } else if (action == 1) {
	                            _global.Global.mark({ aiForm: { zybmSjkBmylStep4: null } });
	                            return true;
	                        }
	                    }
	                }
	            }, {
	                "arg": {},
	                "type": "aiForm",
	                "configStepApi": "zybmSjkBmylStep4",
	                "number": "4",
	                "name": "编目预览",
	                "id": "zybmSjkBmylStep4",
	                "validate": function validate() {
	                    var apiConfig = (0, _extends3["default"])({}, _interfaces.updateResourceCatalog, {
	                        body: (0, _extends3["default"])({}, _global.Global.getState().aiForm.zybmSjkBmylStep4.values) });
	                    return apiConfig;
	                }
	            }]
	        }
	    });
	});

/***/ }
]);