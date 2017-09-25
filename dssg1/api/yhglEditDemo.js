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

	(0, _jsonp2["default"])("yhglEditDemo")(function (args, callback) {
	    var target = args.target;
	    var getFieldValue = target.props.form.getFieldValue;
	    var defaultValue = _global.Global.getState().dataList.yhgl.detailMsgDataApi ? _global.Global.getState().dataList.yhgl.detailMsgDataApi.data : {};
	    /*let options = [{key:'数据管理员',value:'ROLE_DATA_MANAGER'},
	     {key:'共享管理员',value:'ROLE_SHARE_MANAGER'},
	     {key:'日志管理员',value:'ROLE_LOG_MANAGER'}];*/
	    var attays = ["ROLE_ADMIN", "ROLE_CENTRE_ADMIN"];
	    var display = false,
	        selectType = "select";
	    if (attays.indexOf(defaultValue.roleId) >= 0) {
	        display = true;
	        selectType = "input";
	        //options = [{key:'系统管理员',value:'ROLE_ADMIN'},{key:'中心管理员',value:'ROLE_CENTRE_MANAGER'}];
	    }
	    callback({
	        "success": true,
	        "data": [{
	            "column": 2,
	            "data": [{ "type": "input", disabled: true, "name": "用户名", props: { style: { backgroundColor: '#F8F8F8', color: '#000000' } }, "field": "loginName", validate: [{ "required": true, "message": '请输入用户名!'
	                }], "defaultValue": defaultValue.loginName ? defaultValue.loginName : '' }, { "type": "input", disabled: display, "name": "用户实名", "field": "userName", "validate": [{ "required": true, "message": '请输入用户实名!' }, {
	                    validator: function validator(rule, value, callback) {
	                        if (value && value != "") {
	                            if (value.length < 2 || value.length > 20) {
	                                callback('长度为2-20！');
	                            } else if (!/^[\w\u4E00-\u9FA5\uFF00-\uFFFF]{2,20}$/.test(value)) {
	                                callback('支持中英文、数字、下划线');
	                            } else {
	                                callback();
	                            }
	                        } else {
	                            callback();
	                        }
	                    }
	                }], "defaultValue": defaultValue.userName ? defaultValue.userName : '' }, { "type": selectType, disabled: display, "name": "用户角色", dictId: "roleId", dictApi: { apiName: "findRoleList" }, "field": "roleId", "validate": [{ "required": true, "message": '请选择用户角色' }], "defaultValue": display ? defaultValue.roleName : defaultValue.roleId ? defaultValue.roleId : "" }, { "type": "input", "name": "用户手机", "field": "telphone", "validate": [{
	                    validator: function validator(rule, value, callback) {
	                        if (value != "" && !/^[1][0-9]{10}$/.test(value)) {
	                            callback('11位数字，由1开头');
	                        } else {
	                            callback();
	                        }
	                    }
	                }], "defaultValue": defaultValue.telphone ? defaultValue.telphone : '' }, { "type": "input", "name": "邮箱", "field": "email", "validate": [{ "required": false, "type": 'email', "message": '请输入正确邮箱格式' }], "defaultValue": defaultValue.email ? defaultValue.email : '' }, { "type": "input", "name": "用户办公电话", "field": "cellPhoneNumber", "validate": [{
	                    validator: function validator(rule, value, callback) {
	                        if (value != "" && !(/^([0][0-9]{9,11})$/.test(value) || /^(^[0]\d{2,3}[-]\d{7,8})$/.test(value))) {
	                            callback('以0开头的3-4位区号+7-8位号码组成');
	                        } else {
	                            callback();
	                        }
	                    } }], "defaultValue": defaultValue.cellPhoneNumber ? defaultValue.cellPhoneNumber : '' }],

	            "buttonConfigs": {
	                "buttons": [{ "type": "button", "value": "取消", mark: "yhgl", props: { "style": { "float": "right" } } }, { "type": "button", "value": "确定", mark: "yhgl", props: { "style": { "float": "right" }, type: "primary", htmlType: "submit" } }]
	            }
	        }]
	    });
	});

/***/ }
]);