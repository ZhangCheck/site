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

	var _interfaces = __webpack_require__(35);

	var _actionType = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var FormItem = _form2["default"].Item; /**
	                                     * Created by liy on 2016/12/17 0017.
	                                     */

	(0, _jsonp2["default"])("zyyglAdd")(function (args, callback) {
	    var target = args.target;
	    var getFieldValue = target.props.form.getFieldValue;
	    var current = _global.Global.getState().framework.loginApi.data.loginUserProfileDTO.currentEquipment;
	    var defaultValue = {};
	    callback({
	        "success": true,
	        "isModal": true,
	        "data": [{
	            "column": 2,
	            "isModal": true,
	            "data": [{ "type": "input", "name": "资源域名称", "field": "name", "validate": [{ "required": true, "message": '请输入资源域名称' }, {
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
	                }], "defaultValue": defaultValue.name ? defaultValue.name : '' }, { "type": "input", "name": "域管理员", "field": "contacts", "validate": [{ "required": true, "message": '请输入管理员名称' }, {
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
	                }], "defaultValue": current ? current.contacts : '' }, { "type": "input", "name": "联系电话", "field": "telphone", "validate": [{
	                    validator: function validator(rule, value, callback) {
	                        var RegExp = /^((0\d{2,3}-\d{7,8})|(1[35847]\d{9}))$/;
	                        if (RegExp.test(value) == false) {
	                            callback('请填写正确的号码！');
	                        } else {
	                            callback();
	                        }
	                    }
	                }], "defaultValue": current ? current.telphone : '' }],
	            "buttonConfigs": {
	                "buttons": [{ "type": "button", "value": "取消", props: { "style": { "float": "right" } } }, { "type": "button", "value": "确定", props: { type: "primary", "style": { "float": "right" }, htmlType: "submit" } }]
	            }
	        }]
	    });
	});

/***/ }
]);