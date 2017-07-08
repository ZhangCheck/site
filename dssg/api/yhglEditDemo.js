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

	(0, _jsonp2["default"])("yhglEditDemo")(function (args, callback) {
	    var target = args.target;
	    var getFieldValue = target.props.form.getFieldValue;
	    //let defaultValue = args.apiData?args.apiData:{};
	    var defaultValue = _global.Global.getState().dataList.yhgl.detailMsgDataApi ? _global.Global.getState().dataList.yhgl.detailMsgDataApi.data : {};
	    var options = [{ key: '数据管理员', value: 'ROLE_DATA_MANAGER' }, { key: '共享管理员', value: 'ROLE_SHARE_MANAGER' }, { key: '日志管理员', value: 'ROLE_LOG_MANAGER' }];
	    var attays = ["ROLE_ADMIN", "ROLE_CENTRE_MANAGER"];
	    var display = false;
	    if (attays.indexOf(defaultValue.roleId) >= 0) {
	        display = true;
	        options = [{ key: '系统管理员', value: 'ROLE_ADMIN' }, { key: '中心管理员', value: 'ROLE_CENTRE_MANAGER' }];
	    }
	    callback({
	        "success": true,
	        "data": [{
	            "column": 2,
	            "data": [{ "type": "input", "name": "用户名", "field": "loginName", props: { style: { backgroundColor: '#F8F8F8', color: '#000000' } }, "disabled": display, validate: [{ "required": true, "message": '请输入用户名!'
	                }], "defaultValue": defaultValue.loginName ? defaultValue.loginName : '' }, { "type": "input", "name": "用户实名", "disabled": display, props: { style: { backgroundColor: '#F8F8F8', color: '#000000' } }, "field": "userName", "validate": [{ "required": true, "message": '请输入用户实名!' }, {
	                    validator: function validator(rule, value, callback) {
	                        if (!/^.{2,20}$/.test(value)) {
	                            callback('2-20个字符,支持中英文、数字、下划线');
	                        } else {
	                            callback();
	                        }
	                    }
	                }], "defaultValue": defaultValue.userName ? defaultValue.userName : '' }, { "type": "select", "name": "用户角色", props: { style: { backgroundColor: '#F8F8F8', color: '#000000' }, disabled: display }, 'options': options, "field": "roleId", "validate": [{ "required": true, "message": '请选择用户角色' }], "defaultValue": defaultValue.roleId ? defaultValue.roleId : '' }, { "type": "input", "name": "用户手机", "field": "telphone", "validate": [{
	                    validator: function validator(rule, value, callback) {
	                        if (value != "" && (!/[1][0-9]{10}/.test(value) || !/[0-9-()()]{11,13}/.test(value))) {
	                            callback('11位数字，由1开头');
	                        } else {
	                            callback();
	                        }
	                    }
	                }], "defaultValue": defaultValue.telphone ? defaultValue.telphone : '' }, { "type": "input", "name": "邮箱", "field": "email", "defaultValue": defaultValue.email ? defaultValue.email : '' }, { "type": "input", "name": "用户办公电话", "field": "cellPhoneNumber", "validate": [{
	                    validator: function validator(rule, value, callback) {
	                        if (value != "" && !/[0-9-()()]{11,13}/.test(value)) {
	                            callback('区号+号码,区号以0开头,3位或4位,号码由7位或8位数字组成');
	                        } else {
	                            callback();
	                        }
	                    } }], "defaultValue": defaultValue.cellPhoneNumber ? defaultValue.cellPhoneNumber : '' }],

	            "buttonConfigs": {
	                "buttons": [{ "type": "button", "value": "取消", mark: "yhgl", props: { "style": { "float": "right" } } }, { "type": "button", "value": "确定", mark: "yhgl", props: { "style": { "float": "right" }, htmlType: "submit" } }]
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