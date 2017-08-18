webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(54);

	var _form = __webpack_require__(53);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(10);

	var _history = __webpack_require__(32);

	var _history2 = _interopRequireDefault(_history);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 *  by  tiangb
	 */
	var FormItem = _form2["default"].Item;
	(0, _jsonp2["default"])("wfbdzyApiDsfjkTxysjStep1")(function (args, callback) {
	    var states = _global.Global.getState();
	    var detailMsg = states.aiForm.wfbdzyApiDsfjkTxysjStep1 && states.aiForm.wfbdzyApiDsfjkTxysjStep1.detailMsgDataApi && states.aiForm.wfbdzyApiDsfjkTxysjStep1.detailMsgDataApi.data ? states.aiForm.wfbdzyApiDsfjkTxysjStep1.detailMsgDataApi.data : {};
	    var resCode = void 0,
	        resName = void 0,
	        inputType = false;
	    if (detailMsg.id) {
	        resCode = detailMsg.resCode;
	        resName = detailMsg.resName;
	        inputType = true;
	    }
	    var imageInfo = [];
	    if (detailMsg.picturePath) {
	        imageInfo.push({
	            uid: detailMsg.picturePath,
	            name: detailMsg.pictureName,
	            status: 'done'
	        });
	    }
	    callback({
	        "success": true,
	        "data": [{
	            "title": "填写数据源",
	            "column": 1,
	            "showTitle": false,
	            "data": [{ "name": "资源编码", "type": "input", props: { disabled: inputType }, "field": "resCode", "defaultValue": detailMsg.resCode ? detailMsg.resCode : "", "validate": [{ "required": true, "message": '请填写资源编码 !' }, {
	                    validator: function validator(rule, value, callback) {
	                        if (value && value != "") {
	                            if (!/^[\w-]+$/.test(value)) {
	                                callback('支持英文,数字,下划线，短横线！');
	                            }
	                            if (value.length > 20) {
	                                callback('请限制输入在20以内！');
	                            } else {
	                                if (resCode && value == resCode) {
	                                    callback();
	                                } else {
	                                    _global.Global.requestApi({ apiName: "checkIsOnly", body: { type: "2", resCodeOrName: value }, next: function next(action) {
	                                            if (action.data == false) {
	                                                callback('编码已使用，请修改！');
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
	                }] }, { "name": "资源名称", "type": "input", "field": "resName", "defaultValue": detailMsg.resName ? detailMsg.resName : "", "validate": [{ "required": true, "message": '请填写资源名称 !' }, {
	                    validator: function validator(rule, value, callback) {
	                        if (value && value != "") {
	                            if (value.length > 100) {
	                                callback('请限制输入在100以内！');
	                            } else {
	                                if (resName && value == resName) {
	                                    callback();
	                                } else if (!/^[\w\u4E00-\u9FA5\uFF00-\uFFFF]+$/.test(value)) {
	                                    callback('支持中英文、数字、下划线');
	                                } else {
	                                    _global.Global.requestApi({ apiName: "checkIsOnly", body: { type: "1", resCodeOrName: value }, next: function next(action) {
	                                            if (action.data == false) {
	                                                callback('名称已使用，请修改！');
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
	                }] }, { "name": "摘要", "type": "input", props: { type: "textarea", rows: 4 }, "defaultValue": detailMsg.abstracts ? detailMsg.abstracts : "", "field": "abstracts", "validate": [{ "required": true, "message": '请填写摘要!' }, {
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
	                }] }, { "name": "关键字", "type": "input", "field": "keyword", "defaultValue": detailMsg.keyword ? detailMsg.keyword : "", placeholder: "用\",\"隔开！", "validate": [{ "required": true, "message": '请填写关键字 !' }, {
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
	                }] }, { "type": "treeSelect", "name": "国家主题分类", "field": "themeType", dictId: "themeType", dictApi: { apiName: 'getDictsByType', body: { name: "themeType", type: 1 } }, "defaultValue": detailMsg.themeType ? detailMsg.themeType : "", "validate": [{ "required": true, "message": '不能为空!' }] }, { "name": "资源类型", "type": "text", "field": "resType", "defaultValue": "API" }, { "name": "数据提供方单位", "type": "input", "field": "rporgname", "defaultValue": detailMsg.rporgname ? detailMsg.rporgname : "", "validate": [{ "required": true, "message": '请填写数据提供方单位 !' }, {
	                    validator: function validator(rule, value, callback) {
	                        if (value.length > 100) {
	                            callback('请限制输入在100以内！');
	                        } else {
	                            callback();
	                        }
	                    }
	                }] }, { "name": "数据提供方地址", "type": "input", "field": "address", "defaultValue": detailMsg.address ? detailMsg.address : "", "validate": [{ "required": true, "message": '请填写数据提供方地址 !' }, {
	                    validator: function validator(rule, value, callback) {
	                        if (value.length > 100) {
	                            callback('请限制输入在100以内！');
	                        } else {
	                            callback();
	                        }
	                    }
	                }] }, //if(info.file.type.indexOf("image/")>= 0){
	            { "name": "发布原因", "type": "input", "field": "applyReason", "defaultValue": detailMsg.applyReason ? detailMsg.applyReason : "" }, { "name": "图片", "type": "upload", defaultValue: imageInfo, "field": "picturePath",
	                props: {
	                    action: _global.Global.server.split('api')[0] + 'api/fileUpload/uploadFile'
	                },
	                "validate": [{
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