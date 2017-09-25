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

	(0, _jsonp2["default"])("wfbdzySjkZyxgStep5")(function (args, callback) {
	    var state = _global.Global.getState();
	    var detail = state.dataList.getResourceForUpdate && state.dataList.getResourceForUpdate.data ? state.dataList.getResourceForUpdate.data : {};
	    var metaDatas = detail ? detail.metadataDTO : {};
	    var reason = detail.publishReason ? detail.publishReason : "";

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
	            "labelCol": 8,
	            "wrapperCol": 16,
	            "showTitle": false,
	            "buttonConfigs": {},
	            "data": [{ "name": "资源编码", "type": "input", props: { disabled: true }, "field": "resCode", "defaultValue": detail.resCode, "validate": [{ "required": true, "message": '请填写资源编码 !' }] }, { "name": "资源名称", "type": "input", props: { disabled: true }, "field": "resName", "defaultValue": metaDatas.restitle, "validate": [{ "required": true, "message": '请填写资源名称 !' }] }, { "name": "摘要", "type": "input", props: { type: "textarea", rows: 4 }, 'defaultValue': metaDatas.abstracts, "field": "abstracts", "validate": [{ "required": true, "message": '请填写摘要!' }, {
	                    validator: function validator(rule, value, callback) {
	                        if (value.length > 300) {
	                            callback('请限制输入在300以内！');
	                        } else if (!/^[\w\u4E00-\u9FA5\uFF00-\uFFFF]+$/.test(value)) {
	                            callback('支持中英文、数字、下划线');
	                        } else {
	                            callback();
	                        }
	                    }
	                }] }, { "name": "关键字", "type": "input", "field": "keyword", 'defaultValue': metaDatas.keyword, "validate": [{ "required": true, "message": '请填写要素 !' }, {
	                    validator: function validator(rule, value, callback) {
	                        if (value.length > 100) {
	                            callback('请限制输入在100以内！');
	                        } else if (!/^[\w,\u4E00-\u9FA5\uFF00-\uFFFF]+$/.test(value)) {
	                            callback('支持中英文、数字、下划线');
	                        } else {
	                            callback();
	                        }
	                    }
	                }] }, { "name": "国家主题分类", "type": "input", props: { disabled: true }, "field": "themeType", "defaultValue": metaDatas.subjectcarategory }, { "name": "部门主题分类", "type": "input", props: { disabled: true }, "field": "departmentType", "defaultValue": metaDatas.departmentcategory }, { "name": "订阅类型", "type": "text", "field": "resourceType", 'defaultValue': '数据库' }, { "name": "数据提供方单位", "type": "input", "field": "rporgname", 'defaultValue': metaDatas.rporgname, "validate": [{ "required": true, "message": '请填写数据提供方 !' }, {
	                    validator: function validator(rule, value, callback) {
	                        if (value.length > 100) {
	                            callback('请限制输入在100以内！');
	                        } else {
	                            callback();
	                        }
	                    }
	                }] }, { "name": "数据提供方地址", "type": "input", "field": "address", 'defaultValue': metaDatas.address, "validate": [{ "required": true, "message": '请填写数据提供方地址 !' }, {
	                    validator: function validator(rule, value, callback) {
	                        if (value.length > 100) {
	                            callback('请限制输入在100以内！');
	                        } else {
	                            callback();
	                        }
	                    }
	                }] }, { "name": "发布原因", "type": "input", "field": "applyReason", 'defaultValue': reason }, { "name": "图片", defaultValue: imageInfo, "type": "upload", "field": "picturePath",
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