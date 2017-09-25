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
	(0, _jsonp2["default"])("zybmSjkTxbmsqStep1")(function (args, callback) {
	    var target = args.target;
	    var getFieldValue = target.props.form.getFieldValue;
	    var states = _global.Global.getState();
	    var detailMsg = states.aiForm.zybmSjkTxbmsqStep1 && states.aiForm.zybmSjkTxbmsqStep1.detailMsgDataApi && states.aiForm.zybmSjkTxbmsqStep1.detailMsgDataApi.data ? states.aiForm.zybmSjkTxbmsqStep1.detailMsgDataApi.data : {};
	    var equipmentInfo = states.framework.loginApi.data.loginUserProfileDTO.currentEquipment;
	    var selectType = "select",
	        defaultValue = 1;
	    if (detailMsg.id) {
	        //selectType="text";
	        detailMsg.resType = detailMsg.resType == "1" ? 1 : detailMsg.resType == "2" ? 2 : 3;
	    }
	    callback({
	        "success": true,
	        "data": [{
	            "title": "填写编目申请",
	            "column": 2,
	            "showTitle": false,
	            "labelCol": 8,
	            "wrapperCol": 16,
	            "data": [{ "name": "编目原因", "type": "input", "defaultValue": detailMsg.catalogUnit ? detailMsg.catalogUnit : "", "field": "catalogUnit", "validate": [{
	                    validator: function validator(rule, value, callback) {
	                        if (value.length > 200) {
	                            callback('请限制输入在200以内！');
	                        } else {
	                            callback();
	                        }
	                    }
	                }] }, { "name": "资源类型", "type": "select", "field": "resType", "defaultValue": detailMsg.resType ? detailMsg.resType : defaultValue, options: [{ key: "数据库", value: 1 }, { key: "文件", value: 2 }, { key: "API", value: 3 }],
	                props: { onSelect: function onSelect(value, option) {
	                        if (value == 1) {
	                            if (detailMsg.id) {
	                                _history2["default"].push("steperV1/zybmSjkSteperUpdateDemo/1");
	                            } else {
	                                _history2["default"].push("steperV1/zybmSjkSteperDemo/1");
	                            }
	                        } else if (value == 2) {
	                            if (detailMsg.id) {
	                                _history2["default"].push("steperV1/zybmFileSteperUpdateDemo/1");
	                            } else {
	                                _history2["default"].push("steperV1/zybmFileSteperDemo/1");
	                            }
	                        } else if (value == 3) {
	                            if (detailMsg.id) {
	                                _history2["default"].push("steperV1/zybmApiSteperUpdateDemo/1");
	                            } else {
	                                _history2["default"].push("steperV1/zybmApiSteperDemo/1");
	                            }
	                        }
	                    } }, validate: [{ "required": true, "message": '不能为空 !' }] }, { "name": "联系人", "type": "input", "field": "linkman", "defaultValue": detailMsg.linkman ? detailMsg.linkman : equipmentInfo.contacts ? equipmentInfo.contacts : "", "validate": [{ "required": true, "message": '不能为空 !' }, {
	                    validator: function validator(rule, value, callback) {
	                        if (value && value != "") {
	                            if (value.length > 36) {
	                                callback('请限制输入在36以内！');
	                            } else if (!/^[\w,\u4E00-\u9FA5\uFF00-\uFFFF]+$/.test(value)) {
	                                callback('支持中英文、数字、下划线');
	                            } else {
	                                callback();
	                            }
	                        } else {
	                            callback();
	                        }
	                    }
	                }] }, { "name": "联系电话", "type": "input", "field": "phone", "defaultValue": detailMsg.phone ? detailMsg.phone : equipmentInfo.telphone ? equipmentInfo.telphone : "", validate: [{
	                    validator: function validator(rule, value, callback) {
	                        if (value != "" && !(/^[1][0-9]{10}$/.test(value) || /^([0][0-9]{9,11})$/.test(value) || /^(^[0]\d{2,3}[-]\d{7,8})$/.test(value))) {
	                            callback('格式：0xxx+7-8位号码或11位手机号');
	                        } else {
	                            callback();
	                        }
	                    }
	                }] }, { "name": "数据来源", "type": "select", "field": "apiType", options: [{ key: "本地数据库", value: "local" }, { key: "第三方API", value: "3d" }], "defaultValue": detailMsg.apiType ? detailMsg.apiType : "local", preRender: function preRender() {
	                    return _global.Global.getState().aiForm.zybmSjkTxbmsqStep1.form.getFieldValue("resType") != '3' ? "hidden" : "";
	                }, validate: [{ "required": true, "message": '不能为空 !' }] }]
	        }]
	    });
	});

/***/ }
]);