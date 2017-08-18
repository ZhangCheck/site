webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("metadataEdit")(function (args, callback) {
	    var states = _global.Global.getState();
	    var target = args.target;
	    var getFieldValue = target.props.form.getFieldValue;
	    var detailValue = states.dataList.metadata.detailMsgDataApi ? states.dataList.metadata.detailMsgDataApi.data : {};
	    var dataSource = detailValue.centerDataElementDTOList ? detailValue.centerDataElementDTOList : [];
	    var code = detailValue.code ? detailValue.code : "";
	    var name = detailValue.name ? detailValue.name : "";
	    var bbh = /^[0-9]\.[0-9]\.[0-9]{3}$/;
	    var values = {};
	    values = { id: detailValue.id, code: detailValue.code };
	    callback({
	        "success": true,
	        "data": [{
	            "title": "数据元信息",
	            "column": 2,
	            //"showTitle":true,
	            "data": [{ "type": "input", "name": "数据元名称", "field": "name", defaultValue: detailValue.name, "placeholder": "汉字、数字、字母或下划线", "validate": [{
	                    "required": true, "message": '不能为空!'
	                }, {
	                    validator: function validator(rule, value, callback) {
	                        if (value && value != "") {
	                            if (value.length > 100) {
	                                callback('请限制输入在100以内！');
	                            } else {
	                                if (name != "" && value == name) {
	                                    callback();
	                                } else {
	                                    _global.Global.requestApi({ apiName: "checkMetadataNameIsOnly", body: { name: value }, next: function next(action) {
	                                            if (action.data == false) {
	                                                callback('名称已存在，请修改！');
	                                            } else {
	                                                callback();
	                                            }
	                                        } }, {}, {});
	                                }
	                                //callback();
	                            }
	                        } else {
	                            callback();
	                        }
	                    }
	                }] }, { "type": "input", "name": "数据元英文名称", "field": "englishName", defaultValue: detailValue.englishName, "validate": [{
	                    validator: function validator(rule, value, callback) {
	                        if (value && value != "" && !/^[A-Za-z0-9]+$/.test(value)) {
	                            callback('请填写英文或数字！');
	                        }
	                        if (value.length > 100) {
	                            callback('请限制输入长度在100以内！');
	                        } else {
	                            callback();
	                        }
	                    }
	                }, {
	                    "required": true, "message": '不能为空！'
	                }] }, { "type": "input", "name": "数据元编码", "field": "code", props: { disabled: true }, defaultValue: detailValue.code, "placeholder": "数字、字母或下划线", "validate": [{
	                    "required": true, "message": '不能为空!'
	                }, {
	                    validator: function validator(rule, value, callback) {
	                        if (value && value != "" && !/^[A-Za-z0-9_]+$/.test(value)) {
	                            callback('请填写英文、数字或下划线！');
	                        }
	                        if (value.length > 200) {
	                            callback('请限制输入在200以内！');
	                        } else {
	                            if (code != "" && value == code) {
	                                callback();
	                            } else {
	                                _global.Global.requestApi({ apiName: "checkMetadataIsOnly", body: { code: value }, next: function next(action) {
	                                        if (action.data == false) {
	                                            callback('编码已存在，请修改！');
	                                        } else {
	                                            callback();
	                                        }
	                                    } }, {}, {});
	                            }
	                            //callback();
	                        }
	                    }
	                }] }, { "type": "treeSelect", "name": "数据元分类", "field": "classify", props: { disabled: true }, "dictId": "classify", defaultValue: detailValue.classify ? detailValue.classify : "",
	                dictApi: { apiName: 'getDictsByType', body: { type: 3, name: "classify" } },
	                "validate": [{
	                    "required": true, "message": '不能为空!'
	                }] }, { "type": "select", "name": "数据类型", "field": "dataType", defaultValue: detailValue.dataType, options: [{ value: "12", key: "文本" }, { value: "3", key: "数字" }, { value: "91", key: "日期" }, { value: "93", key: "时间" }, { value: "4", key: "整型" }], "validate": [{
	                    "required": true, "message": '不能为空!'
	                }] }, { "type": "input", "name": "数据长度", defaultValue: detailValue.dataLength, "field": "dataLength", preRender: function preRender() {
	                    return ["91", "93"].indexOf(getFieldValue('dataType')) < 0 ? "" : "hidden";
	                }, "validate": [{
	                    "required": true, "message": '不能为空!'
	                }, {
	                    validator: function validator(rule, value, callback) {
	                        var dataType = getFieldValue('dataType');
	                        if (value && value != "" && !/^[0-9]+$/.test(value)) {
	                            callback('请填写正确整数！');
	                        } else {
	                            callback();
	                        }
	                    }
	                }] }, { "type": "select", "name": "是否字典项", "field": "isDictionary", props: { disabled: true }, defaultValue: detailValue.isDictionary ? detailValue.isDictionary : "1", "options": [{ "value": "0", "key": "是" }, { "value": "1", "key": "否" }] }, { "type": "select", "name": "用户字典", "field": "dictionaryId", props: { disabled: true },
	                defaultValue: detailValue.dictionaryId ? detailValue.dictionaryId : "",
	                "dictId": "dictionaryId",
	                dictApi: { apiName: 'getCenterDicts', body: { type: 6, name: "dictionaryId" } },
	                "validate": [{ "required": true, "message": '不能为空!' }],
	                preRender: function preRender() {
	                    return getFieldValue('isDictionary') == '1' ? "hidden" : "";
	                }
	            }, { "type": "input", "name": "值域", "field": "valueScope",
	                "validate": [{
	                    validator: function validator(rule, value, callback) {
	                        if (value.length > 100) {
	                            callback('请限制输入长度在100以内！');
	                        } else {
	                            callback();
	                        }
	                    }
	                }],
	                defaultValue: detailValue.valueScope ? detailValue.valueScope : "" }, { "type": "input", "name": "提交单位", "field": "submitCompany", defaultValue: detailValue.submitCompany, "validate": [{
	                    "required": true, "message": '不能为空!'
	                }, {
	                    validator: function validator(rule, value, callback) {
	                        if (value.length > 100) {
	                            callback('请限制输入长度在100以内！');
	                        } else {
	                            callback();
	                        }
	                    }
	                }] }, { "type": "input", "name": "提交人", "field": "submitUser", defaultValue: detailValue.submitUser, "validate": [{
	                    "required": true, "message": '不能为空!'
	                }, {
	                    validator: function validator(rule, value, callback) {
	                        if (value.length > 36) {
	                            callback('请限制输入长度在36以内！');
	                        } else {
	                            callback();
	                        }
	                    }
	                }] }, { "type": "datePicker", "name": "版本日期", "field": "versionDate", defaultValue: detailValue.versionDate, "validate": [{
	                    "required": false, "message": '不能为空!'
	                }] }, { "type": "input", "name": "版本号", "field": "versionNumber", defaultValue: detailValue.versionNumber, "validate": [{
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
	                }] }],
	            "buttonConfigs": {
	                "buttons": [{ "type": "button", "value": "取消", "ignore": "ignore", props: { "style": { "float": "right" } } }, { "type": "button", "value": "确定", props: { "type": "primary", "style": { "float": "right" }, htmlType: "submit" } }]
	            }
	        }]
	    });
	});

/***/ }
]);