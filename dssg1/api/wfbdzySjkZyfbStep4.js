webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _dataFormat = __webpack_require__(64);

	var _global = __webpack_require__(10);

	var _history = __webpack_require__(32);

	var _history2 = _interopRequireDefault(_history);

	var _StepContainerV = __webpack_require__(287);

	var _StepContainerV2 = _interopRequireDefault(_StepContainerV);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("wfbdzySjkZyfbStep4")(function (args, callback) {
	    var states = _global.Global.getState();

	    _global.Global.getState().aiForm.wfbdzySjkZyfbStep4.fileId = new Array();
	    var allMsg = states.dataList.wfbdzySjkZyfbStep0.tableBodyDataApi.data.content;
	    var id = states.dataList.wfbdzySjkZyfbStep0.selectedRows;
	    var display = false;
	    var name = void 0,
	        code = void 0,
	        departmentName = void 0,
	        themeName = void 0;
	    allMsg.forEach(function (item) {
	        if (item.id == id[0]) {
	            name = item.resName;
	            code = item.resCode;
	            themeName = item.themeName;
	            departmentName = item.departmentName;
	            return;
	        }
	    });
	    var detailMsg = states.dataList.wfbdzySjk && states.dataList.wfbdzySjk.detailMsgDataApi && states.dataList.wfbdzySjk.detailMsgDataApi.data ? states.dataList.wfbdzySjk.detailMsgDataApi.data : {};
	    var values = states.aiForm.wfbdzySjkZyfbStep4.values ? states.aiForm.wfbdzySjkZyfbStep4.values : {};
	    if (states.aiForm.wfbdzySjkZyfbStep4.values) {
	        detailMsg = values;
	    }
	    callback({
	        "success": true,
	        "data": [{
	            "title": "",
	            "column": 1,
	            "labelCol": 8,
	            "wrapperCol": 16,
	            "showTitle": false,
	            "buttonConfigs": {},
	            "data": [{ "name": "资源编码", "type": "input", "field": "resCode", props: { style: { backgroundColor: '#F8F8F8', color: '#000000' } }, "disabled": true, "defaultValue": code }, { "name": "资源名称", "type": "input", "field": "resName", props: { style: { backgroundColor: '#F8F8F8', color: '#000000' } }, "disabled": true, "defaultValue": name }, { "name": "摘要", "type": "input", props: { type: "textarea", rows: 4, "style": { "height": 35 } }, "field": "abstracts", "validate": [{ "required": true, "message": '请填写摘要!' }, {
	                    validator: function validator(rule, value, callback) {
	                        if (value.length > 300) {
	                            callback('请限制输入在300以内！');
	                        } else if (!/^[\w\u4E00-\u9FA5\uFF00-\uFFFF]+$/.test(value)) {
	                            callback('支持中英文、数字、下划线');
	                        } else {
	                            callback();
	                        }
	                    }
	                }] }, { "name": "关键字", "type": "input", "field": "keyword", "validate": [{ "required": true, "message": '请填写要素 !' }, {
	                    validator: function validator(rule, value, callback) {
	                        if (value.length > 100) {
	                            callback('请限制输入在100以内！');
	                        } else if (!/^[\w,\u4E00-\u9FA5\uFF00-\uFFFF]+$/.test(value)) {
	                            callback('支持中英文、数字、下划线');
	                        } else {
	                            callback();
	                        }
	                    }
	                }] }, { "name": "国家主题分类", "type": "text", "field": "themeType",
	                "defaultValue": themeName }, { "name": "部门主题分类", "type": "text", "field": "departmentType",
	                "defaultValue": departmentName }, { "name": "订阅类型", "type": "text", "field": "dylx", 'defaultValue': '数据库' }, { "name": "数据提供方单位", "type": "input", "field": "rporgname", "validate": [{ "required": true, "message": '请填写数据提供方 !' }, {
	                    validator: function validator(rule, value, callback) {
	                        if (value.length > 100) {
	                            callback('请限制输入在100以内！');
	                        } else {
	                            callback();
	                        }
	                    }
	                }] }, { "name": "数据提供方地址", "type": "input", "field": "address", "validate": [{ "required": true, "message": '请填写数据提供方地址 !' }, {
	                    validator: function validator(rule, value, callback) {
	                        if (value.length > 100) {
	                            callback('请限制输入在100以内！');
	                        } else {
	                            callback();
	                        }
	                    }
	                }] }, { "name": "发布原因", "type": "input", "field": "applyReason" }, { "name": "图片", "type": "upload", "field": "picturePath",
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