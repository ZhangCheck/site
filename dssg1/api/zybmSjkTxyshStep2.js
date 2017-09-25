webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(2798);

	var _modal = __webpack_require__(29);

	var _modal2 = _interopRequireDefault(_modal);

	var _css2 = __webpack_require__(54);

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
	(0, _jsonp2["default"])("zybmSjkTxyshStep2")(function (args, callback) {
	    var states = _global.Global.getState();
	    var detailMsg = states.aiForm.zybmSjkTxbmsqStep1 && states.aiForm.zybmSjkTxbmsqStep1.detailMsgDataApi && states.aiForm.zybmSjkTxbmsqStep1.detailMsgDataApi.data ? states.aiForm.zybmSjkTxbmsqStep1.detailMsgDataApi.data : {};

	    var resCode = "",
	        resName = "",
	        resEname = "",
	        inputType = false,
	        imageInfo = [];
	    if (detailMsg.id) {
	        resCode = detailMsg.resCode;
	        resName = detailMsg.resName;
	        resEname = detailMsg.resEname;
	        inputType = true;
	        detailMsg.attachmentId && imageInfo.push({
	            uid: detailMsg.attachmentId ? detailMsg.attachmentId : "",
	            name: detailMsg.realFileName ? detailMsg.realFileName : "",
	            status: 'done',
	            url: detailMsg.filePath ? detailMsg.filePath : ""
	        });
	    }
	    //选中目录id
	    var catalogId = states.mainConMenu && states.mainConMenu.selected && states.mainConMenu.selected.length > 0 ? states.mainConMenu.selected[0] : "123";
	    callback({
	        "success": true,
	        "data": [{
	            "title": "填写数据源",
	            "column": 2,
	            "showTitle": false,
	            "data": [{ "name": "资源名称", "type": "input", "field": "resName", "defaultValue": detailMsg.resName ? detailMsg.resName : "", "validate": [{ "required": true, "message": '请填写资源名称 !' }, {
	                    validator: function validator(rule, value, callback) {
	                        if (value && value != "") {
	                            if (value.length > 150) {
	                                callback('请限制输入在150以内！');
	                            } else {
	                                var resName1 = _global.Global.getState().aiForm.zybmSjkTxyshStep2.values ? _global.Global.getState().aiForm.zybmSjkTxyshStep2.values.resName : "";
	                                if (value == resName || value == resName1) {
	                                    callback();
	                                } else if (!/^[\w\u4E00-\u9FA5\uFF00-\uFFFF]+$/.test(value)) {
	                                    callback('支持中英文、数字、下划线');
	                                } else {
	                                    _global.Global.requestApi({ apiName: "checkResNameOrCode", body: { nameOrCode: value, type: 1, catalogId: catalogId }, next: function next(action) {
	                                            if (action.data > 0) {
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
	                }] }, { "name": "资源英文名称", "type": "input", "field": "resEname", "defaultValue": detailMsg.resEname ? detailMsg.resEname : "", "validate": [{ "required": true, "message": '请填写资源名称 !' }, {
	                    validator: function validator(rule, value, callback) {
	                        if (value && value != "") {
	                            if (value.length > 150) {
	                                callback('请限制输入在150以内！');
	                            } else {
	                                var resEname1 = _global.Global.getState().aiForm.zybmSjkTxyshStep2.values ? _global.Global.getState().aiForm.zybmSjkTxyshStep2.values.resEname : "";
	                                if (value == resEname || value == resEname1) {
	                                    callback();
	                                } else if (!/^[a-zA-Z]+$/.test(value)) {
	                                    callback('目前仅支持纯英文！');
	                                } else {
	                                    _global.Global.requestApi({ apiName: "checkResNameOrCode", body: { nameOrCode: value, type: 3, catalogId: catalogId }, next: function next(action) {
	                                            if (action.data > 0) {
	                                                callback('英文名称已使用，请修改！');
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
	                }] }, { "name": "资源编码", "type": "input", props: { disabled: false }, "field": "resCode", "defaultValue": detailMsg.resCode ? detailMsg.resCode : "", "validate": [{ "required": true, "message": '请填写资源编码 !' }, {
	                    validator: function validator(rule, value, callback) {
	                        if (value && value != "") {
	                            if (!/^[\w-]+$/.test(value)) {
	                                callback('支持英文,数字,下划线，短横线！');
	                            }
	                            if (value.length > 150) {
	                                callback('请限制输入在150以内！');
	                            } else {
	                                var resCode1 = _global.Global.getState().aiForm.zybmSjkTxyshStep2.values ? _global.Global.getState().aiForm.zybmSjkTxyshStep2.values.resCode : "";
	                                if (value == resCode || value == resCode1) {
	                                    callback();
	                                } else {
	                                    _global.Global.requestApi({ apiName: "checkResNameOrCode", body: { nameOrCode: value, type: 2, catalogId: catalogId }, next: function next(action) {
	                                            if (action.data > 0) {
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
	                }] }, { "name": "资源等级", "type": "select", "field": "resLevel", "defaultValue": detailMsg.resLevel ? detailMsg.resLevel : "1", options: [{ key: "部分共享", value: "1" }, { key: "完全共享", value: "2" }], "validate": [{ "required": true, "message": '请填写更新周期 !' }] }, { "name": "资源摘要", "type": "input", "defaultValue": detailMsg.abstracts ? detailMsg.abstracts : "", "field": "abstracts", "validate": [{ "required": true, "message": '请填写摘要!' }, {
	                    validator: function validator(rule, value, callback) {
	                        if (value && value != "") {
	                            if (value.length > 400) {
	                                callback('请限制输入在400以内！');
	                            } else {
	                                callback();
	                            }
	                        } else {
	                            callback();
	                        }
	                    }
	                }] }, { "name": "更新周期", "type": "input", "field": "updateCycle", "placeholder": "日/周/月/年", "defaultValue": detailMsg.updateCycle ? detailMsg.updateCycle : "", "validate": [{ "required": true, "message": '请填写更新周期 !' }, {
	                    validator: function validator(rule, value, callback) {
	                        if (value && value != "") {
	                            if (value.length > 50) {
	                                callback('请限制输入在50以内！');
	                            } else {
	                                callback();
	                            }
	                        } else {
	                            callback();
	                        }
	                    }
	                }] }, { "type": "treeSelect", "name": "主题分类", "field": "themeType", dictId: "themeType", dictApi: { apiName: 'getDictsByType', body: { name: "themeType", type: 1 } }, "defaultValue": detailMsg.themeType ? detailMsg.themeType : "", "validate": [{ "required": true, "message": '不能为空 !' }] }, { "type": "treeSelect", "name": "行业分类", "field": "industryType", dictId: "industryType", dictApi: { apiName: 'getDictsByType', body: { name: "industryType", type: 2 } }, "defaultValue": detailMsg.industryType ? detailMsg.industryType : "", "validate": [{ "required": true, "message": '不能为空 !' }] }, { "name": "图片", "formItemHeight": "77", "type": "upload", defaultValue: imageInfo, "field": "attachmentId",
	                props: {
	                    action: _global.Global.server.split('api')[0] + 'api/fileUpload/uploadFile',
	                    beforeUpload: function beforeUpload(file) {
	                        if (!file.type.match(/image\/*/)) {
	                            _modal2["default"].warning({
	                                title: '提示',
	                                content: '格式不正确，请上传图片',
	                                onOk: function onOk() {}
	                            });
	                            return false;
	                        }
	                        if (_global.Global.getState().aiForm.zybmSjkTxyshStep2.alreadyUpload) {
	                            _modal2["default"].warning({
	                                title: '提示',
	                                content: '只能上传一个文件',
	                                onOk: function onOk() {}
	                            });
	                            return false;
	                        }
	                    }
	                }

	            }]
	        }]
	    });
	});

/***/ }
]);