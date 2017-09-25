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

	var FormItem = _form2["default"].Item;
	/**
	 * 管理节点设备初始化
	 * 第三步
	 * 填写设备关键信息
	 */
	(0, _jsonp2["default"])("sbglStep2")(function (args, callback) {
	    var state = _global.Global.getState();
	    callback({
	        "success": true,
	        "data": [{
	            "title": "设置设备信息",
	            "column": 2,
	            "showTitle": true,
	            "data": [{ "name": "设备名称", "type": "input", "field": "equipmentName", "validate": [{ "required": true, "message": '请填写设备名称' }, {
	                    validator: function validator(rule, value, callback) {
	                        if ("" != value && value.length > 0) {
	                            if (value.length > 50) {
	                                callback("请限制输入在50以内");
	                            } else {
	                                callback();
	                            }
	                        } else {
	                            callback();
	                        }
	                    }
	                }] }, { "name": "单位名称", "type": "treeSelect", "field": "companyId", dictId: "companyId", "placeholder": "请选择...", dictApi: { apiName: 'findCenterCompanyMapInfo' } }, //后期后台改成get
	            { "name": "联系人", "type": "input", "field": "contacts", "validate": [{ "required": true, "message": '请填写联系人' }, {
	                    validator: function validator(rule, value, callback) {
	                        if ("" != value && value.length > 0) {
	                            if (value.length > 36) {
	                                callback("请限制输入在36以内");
	                            } else {
	                                callback();
	                            }
	                        } else {
	                            callback();
	                        }
	                    }
	                }] }, { "name": "联系电话", "type": "input", "field": "contactsTel",
	                "validate": [{ "required": true, "message": '请填写电话号码！' }, {
	                    validator: function validator(rule, value, callback) {
	                        var RegExp = /^((0\d{2,3}-\d{7,8})|(1[35847]\d{9}))$/;
	                        if (RegExp.test(value) == false) {
	                            callback('请填写正确的号码！');
	                        } else {
	                            callback();
	                        }
	                    }
	                }]
	            }, { "name": "邮箱", "type": "input", "field": "email", "validate": [{ "required": true, "type": 'email', "message": '请输入正确邮箱格式' }] }, { "name": "单位地址", "type": "input", "field": "address", "validate": [{ "required": true, "message": '请填写地址' }, {
	                    validator: function validator(rule, value, callback) {
	                        if ("" != value && value.length > 0) {
	                            if (value.length > 100) {
	                                callback("请限制输入在100以内");
	                            } else {
	                                callback();
	                            }
	                        } else {
	                            callback();
	                        }
	                    }
	                }] }]
	        }]
	    });
	});

/***/ }
]);