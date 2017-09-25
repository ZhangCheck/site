webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _interfaces = __webpack_require__(35);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("metadataAdd")(function (args, callback) {
	    var target = args.target;
	    var state = Global.getState();
	    var getFieldValue = target.props.form.getFieldValue;
	    var bbh = "/\d+\.\d+*/";
	    callback({
	        "success": true,
	        "data": [{
	            "title": "新增数据元",
	            "column": 2,
	            "labelCol": 8, // form标头name宽度
	            "wrapperCol": 16, //form显示框宽度
	            "buttonConfigs": {
	                "buttons": [{ "type": "button", "value": "取消", mark: "metadata", "field": "back", props: { btnType: "primary", "style": { "float": "right" } } }, { "type": "button", "value": "发布", mark: "metadata", "field": "submit", props: { type: "primary", "style": { "float": "right" }, htmlType: "submit" } }]
	            },
	            "showTitle": false,
	            "data": [{ "type": "input", "name": "数据元名称", "field": "name", "placeholder": "汉字、数字、字母或下划线", "validate": [{
	                    "required": true, "message": '不能为空!'
	                }, {
	                    validator: function validator(rule, value, callback) {
	                        if (value && value != "") {
	                            if (value.length > 100) {
	                                callback('请限制输入长度在100以内！');
	                            } else {
	                                Global.requestApi({ apiName: "checkMetadataNameIsOnly", body: { name: value }, next: function next(action) {
	                                        if (action.data == false) {
	                                            callback('名称已存在，请修改！');
	                                        } else {
	                                            callback();
	                                        }
	                                    } }, {}, {});
	                            }
	                        } else {
	                            callback();
	                        }
	                    }
	                }] }, { "type": "input", "name": "数据元英文名称", "field": "englishName", "validate": [{
	                    "required": true, "message": '不能为空！'
	                }, {
	                    validator: function validator(rule, value, callback) {
	                        if (value != "" && !/^[A-Za-z0-9]+$/.test(value)) {
	                            callback('请填写英文或数字！');
	                        }
	                        if (value.length > 100) {
	                            callback('请限制输入长度在100以内！');
	                        } else {
	                            callback();
	                        }
	                    }
	                }] }, { "type": "input", "name": "数据元编码", "field": "code", "placeholder": "数字、字母或下划线", "validate": [{
	                    "required": true, "message": '不能为空!'
	                }, {
	                    validator: function validator(rule, value, callback) {
	                        if (value && value != "") {
	                            if (!/^[A-Za-z0-9]+$/.test(value)) {
	                                callback('请填写英文或数字！');
	                            }
	                            if (value.length > 200) {
	                                callback('请限制输入长度在200以内！');
	                            } else {
	                                Global.requestApi({ apiName: "checkMetadataCodeIsOnly", body: { code: value }, next: function next(action) {
	                                        if (action.data == false) {
	                                            callback('编码已存在，请修改！');
	                                        } else {
	                                            callback();
	                                        }
	                                    } }, {}, {});
	                            }
	                        } else {
	                            callback();
	                        }
	                    }
	                }] }, { "type": "treeSelect", "name": "数据元分类", defaultValue: state.dicts.treeSelect && state.dicts.treeSelect.classify && state.dicts.treeSelect.classify.data.classify && state.dicts.treeSelect.classify.data.classify.length > 0 ? state.dicts.treeSelect.classify.data.classify[0].value : "", "field": "classify", dictId: "classify", dictApi: { apiName: 'getDictsByType', body: { type: 3, name: "classify" } }, "validate": [{
	                    "required": true, "message": '不能为空!'
	                }] }, { "type": "select", "name": "数据类型", "field": "dataType", options: [{ value: "12", key: "文本" }, { value: "3", key: "数字" }, { value: "91", key: "日期" }, { value: "93", key: "时间" }, { value: "4", key: "整型" }], defaultValue: "12", "validate": [{
	                    "required": true, "message": '不能为空!'
	                }] }, { "type": "input", "name": "数据长度", "field": "dataLength", preRender: function preRender() {
	                    return ["91", "93"].indexOf(getFieldValue('dataType')) < 0 ? "" : "hidden";
	                }, "validate": [{
	                    "required": true, "message": '不能为空!'
	                }, {
	                    validator: function validator(rule, value, callback) {
	                        var dataType = getFieldValue('dataType');
	                        if (value != "" && !/^[0-9]+$/.test(value)) {
	                            callback('请填写正确整数！');
	                        } else {
	                            callback();
	                        }
	                    }
	                }] }, { "type": "select", "name": "是否字典项", "field": "isDictionary", "options": [{ "value": "0", "key": "是" }, { "value": "1", "key": "否" }], defaultValue: "1" }, { "type": "select", "name": "用户字典", "field": "dictionaryId", dictId: "dictionaryId", dictApi: { apiName: 'getCenterDicts', body: { type: 6, name: "dictionaryId" } }, "validate": [{
	                    "required": true, "message": '不能为空!'
	                }], preRender: function preRender() {
	                    return getFieldValue('isDictionary') == '1' ? "hidden" : "";
	                } }, { "type": "input", "name": "值域", "field": "valueScope",
	                "validate": [{
	                    validator: function validator(rule, value, callback) {
	                        if (value.length > 100) {
	                            callback('请限制输入长度在100以内！');
	                        } else {
	                            callback();
	                        }
	                    }
	                }]
	            }, { "type": "input", "name": "提交单位", "field": "submitCompany", "validate": [{
	                    "required": true, "message": '不能为空!'
	                }, {
	                    validator: function validator(rule, value, callback) {
	                        if (value.length > 100) {
	                            callback('请限制输入长度在100以内！');
	                        } else {
	                            callback();
	                        }
	                    }
	                }] }, { "type": "input", "name": "提交人", "field": "submitUser", "validate": [{
	                    "required": true, "message": '不能为空!'
	                }, {
	                    validator: function validator(rule, value, callback) {
	                        if (value.length > 36) {
	                            callback('请限制输入长度在36以内！');
	                        } else {
	                            callback();
	                        }
	                    }
	                }] }, { "type": "datePicker", "name": "版本日期", "field": "versionDate" }, { "type": "input", "name": "版本号", "field": "versionNumber", "validate": [{
	                    "required": true, "message": '不能为空!'
	                }, {
	                    validator: function validator(rule, value, callback) {
	                        if (value.length > 10) {
	                            callback('请限制输入长度在10以内！');
	                        }
	                        if (!/.*[a-zA-Z]+.*/.test(value)) {
	                            if (!/^\d+(\.\d+)*$/.test(value)) {
	                                callback('请输入正确格式！');
	                            } else {
	                                callback();
	                            }
	                        } else {
	                            callback('请输入数字！');
	                        }
	                    }
	                }] }]
	        }]
	    });
	});

/***/ }
]);