webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(2798);

	var _modal = __webpack_require__(29);

	var _modal2 = _interopRequireDefault(_modal);

	var _getIterator2 = __webpack_require__(37);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

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
	(0, _jsonp2["default"])("zybmApiSteperUpdateDemo")(function (args, callback) {
	    var states = _global.Global.getState();
	    var list = states.mainConMenu && states.mainConMenu.selected;
	    if (!list) {
	        _StepContainerV2["default"]["goto"]('zybmApiSteperUpdateDemo', "/datalistV1/zybmgl/list/11/10?pmenu=datalistV1/mlgl/list/11/10");
	    }
	    callback({
	        "success": true,
	        "data": {
	            "afterSave": "/datalistV1/zybmgl/list/11/10?pmenu=datalistV1/mlgl/list/11/10?nodeId=" + list[0],
	            "lineDefinedWidth": 60,
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
	                "configStepApi": "zybmApiSrcspzStep3",
	                "number": "3",
	                "name": "输入参数配置",
	                "id": "zybmApiSrcspzStep3",
	                customerClear: function customerClear() {
	                    _global.Global.mark({ aiFormTable: { aFTDStep3: null } });
	                },
	                "validate": function validate() {

	                    var aFTDStep3 = (0, _dataFormat.getAiFormTableValue)(_global.Global.getState(), "aFTDStep3");
	                    if (aFTDStep3.length > 0) {
	                        var names = [];
	                        var _iteratorNormalCompletion = true;
	                        var _didIteratorError = false;
	                        var _iteratorError = undefined;

	                        try {
	                            for (var _iterator = (0, _getIterator3["default"])(aFTDStep3), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                                var value = _step.value;

	                                if (!/^[a-zA-Z]+$/.test(value.name)) {
	                                    _modal2["default"].warning({
	                                        title: "提示：",
	                                        content: "参数名称为英文，且不为空！"
	                                    });
	                                    return false;
	                                }

	                                if (names.indexOf(value.name) >= 0) {
	                                    _modal2["default"].warning({
	                                        title: "提示：",
	                                        content: "参数名称不能重复！"
	                                    });
	                                    return false;
	                                }
	                                names.push(value.name);
	                            }
	                        } catch (err) {
	                            _didIteratorError = true;
	                            _iteratorError = err;
	                        } finally {
	                            try {
	                                if (!_iteratorNormalCompletion && _iterator["return"]) {
	                                    _iterator["return"]();
	                                }
	                            } finally {
	                                if (_didIteratorError) {
	                                    throw _iteratorError;
	                                }
	                            }
	                        }
	                    }
	                    return true;
	                }
	            }, {
	                "type": "aiForm",
	                "configStepApi": "zybmApiSccspzStep4",
	                "number": "4",
	                "name": "输出参数配置",
	                "id": "zybmApiSccspzStep4",
	                customerClear: function customerClear() {
	                    _global.Global.mark({ aiFormTable: { aFTDStep4: null } });
	                },
	                "validate": function validate() {
	                    //获取step1的数据
	                    var sjkValuesStep1 = states.aiForm.zybmSjkTxbmsqStep1.values;

	                    var aFTDStep4 = (0, _dataFormat.getAiFormTableValue)(_global.Global.getState(), "aFTDStep4");
	                    if (aFTDStep4.length == 0) {
	                        if (sjkValuesStep1.apiType == "local") {
	                            _modal2["default"].warning({
	                                title: "提示：",
	                                content: "本地数据库类型资源，输出参数不能为空！"
	                            });
	                            return false;
	                        }
	                    } else {
	                        var names = [];
	                        var _iteratorNormalCompletion2 = true;
	                        var _didIteratorError2 = false;
	                        var _iteratorError2 = undefined;

	                        try {
	                            for (var _iterator2 = (0, _getIterator3["default"])(aFTDStep4), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                                var value = _step2.value;

	                                if (!/^[a-zA-Z]+$/.test(value.name)) {
	                                    _modal2["default"].warning({
	                                        title: "提示：",
	                                        content: "参数名称为英文！"
	                                    });
	                                    return false;
	                                }
	                                if (names.indexOf(value.name) >= 0) {
	                                    _modal2["default"].warning({
	                                        title: "提示：",
	                                        content: "参数名称不能重复！"
	                                    });
	                                    return false;
	                                }
	                                names.push(value.name);
	                            }
	                        } catch (err) {
	                            _didIteratorError2 = true;
	                            _iteratorError2 = err;
	                        } finally {
	                            try {
	                                if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
	                                    _iterator2["return"]();
	                                }
	                            } finally {
	                                if (_didIteratorError2) {
	                                    throw _iteratorError2;
	                                }
	                            }
	                        }
	                    }
	                    _global.Global.mark({ aiForm: { zybmSjkBmylStep4: null } });
	                    return true;
	                }
	            }, {
	                "arg": {},
	                "type": "aiForm",
	                "configStepApi": "zybmSjkBmylStep4",
	                "number": "5",
	                "name": "编目预览",
	                "id": "zybmSjkBmylStep4",
	                customerClear: function customerClear() {
	                    _global.Global.mark({ aiFormTable: { dsfStep3: null } });
	                },
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