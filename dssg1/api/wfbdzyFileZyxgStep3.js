webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(54);

	var _form = __webpack_require__(53);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _AiFormTable = __webpack_require__(310);

	var _AiFormTable2 = _interopRequireDefault(_AiFormTable);

	var _AiLabel = __webpack_require__(311);

	var _AiLabel2 = _interopRequireDefault(_AiLabel);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(10);

	var _history = __webpack_require__(32);

	var _history2 = _interopRequireDefault(_history);

	var _interfaces = __webpack_require__(35);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var FormItem = _form2["default"].Item; /**
	                                     * Created by liy on 2016/12/20 0020.
	                                     */

	(0, _jsonp2["default"])("wfbdzyFileZyxgStep3")(function (args, callback) {
	    var state = _global.Global.getState();
	    var metaDataDTO = state.dataList.getResourceForUpdate.data.metadataDTO;
	    var detail = state.dataList.getResourceForUpdate && state.dataList.getResourceForUpdate.data ? state.dataList.getResourceForUpdate.data : {};
	    var resCode1 = detail.resCode;
	    var resName1 = detail.resName;

	    var imageInfo = [];
	    if (detail.picturePath) {
	        imageInfo.push({
	            uid: detail.picturePath,
	            name: detail.pictureName,
	            status: 'done'
	        });
	    }

	    callback({
	        "success": true,
	        "data": [{
	            "title": "",
	            "column": 1,
	            "showTitle": false,
	            "data": [{ "name": "文件编码", "labelCol": 10, "wrapperCol": 10, "type": "input", "field": "resCode", "validate": [{ "required": true, "message": '请填写文件编码 !' }, {
	                    validator: function validator(rule, value, callback) {
	                        if (value && value != "" && value != resCode1) {
	                            if (!/^[\w-]+$/.test(value)) {
	                                callback('支持英文,数字,下划线，短横线！');
	                            }
	                            if (value.length > 20) {
	                                callback('请限制输入在20以内！');
	                            } else {
	                                var LastWord = _global.Global.getState().aiForm.wfbdzyFileZyxgStep3.values ? _global.Global.getState().aiForm.wfbdzyFileZyxgStep3.values.resCode : "";
	                                if (LastWord && LastWord == value) {
	                                    callback();
	                                } else {
	                                    _global.Global.requestApi({ apiName: "checkResCodeORResName", body: { resCode: value }, next: function next(action) {
	                                            if (action.data == false) {
	                                                callback('资源编码已存在，请修改！');
	                                            } else {
	                                                callback();
	                                            }
	                                        } }, {}, {});
	                                }
	                            }
	                        } else {
	                            callback();
	                        }
	                    }
	                }], "defaultValue": detail.resCode }, { "name": "文件名称", "labelCol": 10, "wrapperCol": 10, "type": "input", "field": "resName", "validate": [{ "required": true, "message": '请填写文件名称 !' }, {
	                    validator: function validator(rule, value, callback) {
	                        if (value && value != "" && value != resName1) {
	                            if (value.length > 100) {
	                                callback('请限制输入在100以内！');
	                            } else if (!/^[\w\u4E00-\u9FA5\uFF00-\uFFFF]+$/.test(value)) {
	                                callback('支持中英文、数字、下划线');
	                            } else {
	                                var LastWord = _global.Global.getState().aiForm.wfbdzyFileZyxgStep3.values ? _global.Global.getState().aiForm.wfbdzyFileZyxgStep3.values.resName : "";
	                                if (LastWord && LastWord == value) {
	                                    callback();
	                                } else {
	                                    _global.Global.requestApi({ apiName: "checkResCodeORResName", body: { resName: value }, next: function next(action) {
	                                            if (action.data == false) {
	                                                callback('资源名称已存在，请修改！');
	                                            } else {
	                                                callback();
	                                            }
	                                        } }, {}, {});
	                                }
	                            }
	                        } else {
	                            callback();
	                        }
	                    }
	                }], "defaultValue": metaDataDTO.restitle }, { "name": "摘要", "labelCol": 10, "wrapperCol": 10, "type": "input", props: { type: "textarea", rows: 4 }, "field": "abstracts", "validate": [{ "required": true, "message": '请填写摘要!' }, {
	                    validator: function validator(rule, value, callback) {
	                        if (value && value != "") {
	                            if (value.length > 300) {
	                                callback('请限制输入在300以内！');
	                            } else if (!/^[\w\u4E00-\u9FA5\uFF00-\uFFFF]+$/.test(value)) {
	                                callback('支持中英文、数字、下划线');
	                            } else {
	                                callback();
	                            }
	                        } else {
	                            callback();
	                        }
	                    }
	                }], "defaultValue": metaDataDTO.abstracts }, { "name": "关键字", "labelCol": 10, "wrapperCol": 10, "type": "input", "field": "keyword", "validate": [{ "required": true, "message": '请填写要素 !' }, {
	                    validator: function validator(rule, value, callback) {
	                        if (value && value != "") {
	                            if (value.length > 100) {
	                                callback('请限制输入在100以内！');
	                            } else if (!/^[\w,\u4E00-\u9FA5\uFF00-\uFFFF]+$/.test(value)) {
	                                callback('支持中英文、数字、下划线');
	                            } else {
	                                callback();
	                            }
	                        } else {
	                            callback();
	                        }
	                    }
	                }], "defaultValue": metaDataDTO.keyword }, { "type": "treeSelect", "labelCol": 10, "wrapperCol": 10, "name": "国家主题分类", "field": "themeType", dictId: "themeType", dictApi: { apiName: 'getDictsByType', body: { name: "themeType", type: 1 } },
	                "defaultValue": detail.themeType ? detail.themeType : "", "validate": [{ "required": true, "message": '请选择主题分类!' }] }, { "name": "订阅类型", "labelCol": 10, "wrapperCol": 10, "type": "text", "field": "dylx", "defaultValue": "文件", value: "文件" }, { "name": "数据提供方", "labelCol": 10, "wrapperCol": 10, "type": "input", "field": "rporgname", "validate": [{ "required": true, "message": '请填写数据提供方 !' }, {
	                    validator: function validator(rule, value, callback) {
	                        if (value && value != "") {
	                            if (value.length > 100) {
	                                callback('请限制输入在100以内！');
	                            } else if (!/^[\w\u4E00-\u9FA5\uFF00-\uFFFF]+$/.test(value)) {
	                                callback('支持中英文、数字、下划线');
	                            } else {
	                                callback();
	                            }
	                        } else {
	                            callback();
	                        }
	                    }
	                }], "defaultValue": metaDataDTO.rporgname }, { "name": "数据提供方地址", "labelCol": 10, "wrapperCol": 10, "type": "input", "field": "address", "validate": [{ "required": true, "message": '请填写数据提供方地址 !' }, {
	                    validator: function validator(rule, value, callback) {
	                        if (value && value != "") {
	                            if (value.length > 100) {
	                                callback('请限制输入在100以内！');
	                            } else if (!/^[\w\u4E00-\u9FA5\uFF00-\uFFFF]+$/.test(value)) {
	                                callback('支持中英文、数字、下划线');
	                            } else {
	                                callback();
	                            }
	                        } else {
	                            callback();
	                        }
	                    }
	                }], "defaultValue": metaDataDTO.address }, { "name": "发布原因", "labelCol": 10, "wrapperCol": 10, "type": "input", "field": "applyReason", "defaultValue": metaDataDTO.reason, "validate": [{
	                    validator: function validator(rule, value, callback) {
	                        if (value && value != "") {
	                            if (value.length > 100) {
	                                callback('请限制输入在100以内！');
	                            } else if (!/^[\w\u4E00-\u9FA5\uFF00-\uFFFF]+$/.test(value)) {
	                                callback('支持中英文、数字、下划线');
	                            } else {
	                                callback();
	                            }
	                        } else {
	                            callback();
	                        }
	                    }
	                }] }, { "name": "图片", "labelCol": 10, "wrapperCol": 10, "defaultValue": imageInfo, "type": "upload", "field": "picturePath",
	                props: {
	                    action: _global.Global.server.split('api')[0] + 'api/fileUpload/uploadFile'
	                }, "validate": [{
	                    validator: function validator(rule, value, callback) {
	                        if (value.length > 0) {
	                            if (value.length == 1) {
	                                if (value[0].type != "" && value[0].type.indexOf("image/") >= 0) {
	                                    callback();
	                                } else {
	                                    callback('格式不正确，请换成图片！');
	                                }
	                            } else {
	                                callback('图片只能上传一个！');
	                            }
	                        } else {
	                            callback();
	                        }
	                    }
	                }]
	            }]
	        }]
	    });
	});

/***/ }
]);