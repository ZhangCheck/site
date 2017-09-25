(function(){ var runed=0,temp,timer,time;webpackJsonp([3],[
/* 0 */
/***/ temp = function(module, exports, __webpack_require__) {runed=true;

	'use strict';

	var _css = __webpack_require__(63);

	var _form = __webpack_require__(59);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(234);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(15);

	var _interfaces = __webpack_require__(33);

	var _actionType = __webpack_require__(25);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var FormItem = _form2["default"].Item; /**
	                                     * Created by liy on 2016/12/17 0017.
	                                     */

	(0, _jsonp2["default"])("yhglAddDemo")(function (args, callback) {
	    var target = args.target;
	    var getFieldValue = target.props.form.getFieldValue;
	    var defaultValue = {};
	    callback({
	        "success": true,
	        "data": [{
	            "column": 2,
	            "data": [{ "type": "input", "name": "用户名", "field": "loginName", "validate": [{ "required": true, "message": '请输入用户名' }, {
	                    validator: function validator(rule, value, callback) {
	                        if (!/^[a-zA-Z0-9_]{3,16}$/.test(value)) {
	                            callback('只能由数字、英文、下划线组成,并以字母开头');
	                        } else {
	                            callback();
	                        }
	                    }
	                }], "defaultValue": defaultValue.loginName ? defaultValue.loginName : '' }, { "type": "input", "name": "用户实名", "field": "userName", "validate": [{ "required": true, "message": '请输入用户实名' }, {
	                    validator: function validator(rule, value, callback) {
	                        if (!/^.{2,20}$/.test(value)) {
	                            callback('2-20个字符,支持中英文、数字、下划线');
	                        } else {
	                            callback();
	                        }
	                    }
	                }], "defaultValue": defaultValue.userName ? defaultValue.userName : '' }, { "type": "select", "name": "用户角色", 'options': [{ key: '数据管理员', value: 'ROLE_DATA_MANAGER' }, { key: '共享管理员', value: 'ROLE_SHARE_MANAGER' }, { key: '日志管理员', value: 'ROLE_LOG_MANAGER' }], "field": "roleId", "validate": [{ "required": true, "message": '请选择用户角色' }], "defaultValue": defaultValue.roleName ? defaultValue.roleName : '' }, { "type": "input", "name": "用户手机", "field": "telphone", "validate": [{
	                    validator: function validator(rule, value, callback) {
	                        if (value != "" && (!/[1][0-9]{10}/.test(value) || !/[0-9-()()]{11,13}/.test(value))) {
	                            callback('11位数字，由1开头');
	                        } else {
	                            callback();
	                        }
	                    }
	                }], "defaultValue": defaultValue.telphone ? defaultValue.telphone : '' }, { "type": "input", "name": "邮箱", "field": "email", "validate": [{ "required": false, "type": 'email', "message": '请输入正确邮箱格式' }], "defaultValue": defaultValue.email ? defaultValue.email : '' }, { "type": "input", "name": "用户办公电话", "field": "cellPhoneNumber", "validate": [{
	                    validator: function validator(rule, value, callback) {
	                        if (value != "" && !/[0-9-()()]{11,13}/.test(value)) {
	                            callback('以0开头的3-4位区号+7-8位号码组成');
	                        } else {
	                            callback();
	                        }
	                    }
	                }], "defaultValue": defaultValue.cellPhoneNumber ? defaultValue.cellPhoneNumber : '' }],
	            "buttonConfigs": {
	                "buttons": [{ "type": "button", "value": "取消", props: { "style": { "float": "right" } } }, { "type": "button", "value": "确定", props: { "style": { "float": "right" }, htmlType: "submit" } }]
	            }
	        }]
	    });
	});

/***/ }
]);if(!runed){
            clearInterval(timer);
            timer = setInterval(function(){
                if(temp) {
                    temp(module, exports, __webpack_require__);
                    clearInterval(timer);
                    temp=null;
                    
                }
                time++;
                if(time>500){
                    clearInterval(timer);
                    console.log('more than 500 times')
                }
            },500);
        }})()