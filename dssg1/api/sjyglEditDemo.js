webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

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

	(0, _jsonp2["default"])("sjyglEditDemo")(function (args, callback) {
	    var target = args.target;
	    var state = _global.Global.getState();
	    var getFieldValue = target.props.form.getFieldValue;

	    var defaultValue = state.dataList.sjygl && state.dataList.sjygl.detailMsgDataApi && state.dataList.sjygl.detailMsgDataApi.data ? state.dataList.sjygl.detailMsgDataApi.data : {};
	    callback({
	        "success": true,
	        "data": [{
	            "column": 2,
	            "data": [{ "type": "input", "name": "数据源名称", "field": "name", "validate": [{ "required": true, "message": '请输入数据源名称!' }, {
	                    validator: function validator(rule, value, callback) {
	                        if (value && value != "") {
	                            if (value.length > 255) {
	                                callback("数据源名称长度应小于256");
	                            } else if (defaultValue.name != value) {
	                                _global.Global.requestApi({
	                                    apiName: "checkResDataSourceName",
	                                    body: { name: value },
	                                    next: function next(action) {
	                                        if (action.data == false) {
	                                            callback('数据源名称已存在！');
	                                        } else {
	                                            callback();
	                                        }
	                                    }
	                                }, {}, {});
	                            } else {
	                                callback();
	                            }
	                        } else {
	                            callback();
	                        }
	                    }
	                }], "defaultValue": defaultValue.name ? defaultValue.name : "" }, { "type": "select", "name": "数据源类型", 'options': [{ key: '数据库', value: '1' }, { key: '文件', value: '2' }], "field": "type", "validate": [{ "required": true, "message": '请输入数据源类型!' }], "defaultValue": defaultValue.type ? defaultValue.type : '1' }, { "type": "select", "name": "数据库类型", 'options': [{ key: 'Oracle', value: 'Oracle' }, { key: 'MySQL', value: 'MySQL' }, { key: 'SQLServer', value: 'MSSQL' }], "field": "dbType", "validate": [{ "required": true, "message": '请输入数据库类型!' }], "defaultValue": defaultValue.dbType ? defaultValue.dbType : "Oracle", preRender: function preRender() {
	                    return getFieldValue('type') == '2' ? "hidden" : "";
	                } }, { "type": "select", "name": "传输协议", 'options': [{ key: 'FTP', value: '1' }, { key: 'SMB', value: '2' }], "field": "ftpType",
	                "validate": [{ "required": true, "message": '请选择文件传输类型!' }],
	                "defaultValue": defaultValue.ftpType ? defaultValue.ftpType == 0 ? defaultValue.ftpType = "1" : defaultValue.ftpType : "1",
	                preRender: function preRender() {
	                    return getFieldValue('type') == '1' ? "hidden" : "";
	                } }, { "type": "select", "name": "文件服务器编码", 'options': [{ key: 'GBK', value: '1' }, { key: 'UTF-8', value: '2' }, { key: 'GB2312', value: '3' }], "field": "unicode",
	                "validate": [{ "required": true, "message": '请选择文件服务器编码!' }],
	                "defaultValue": defaultValue.unicode ? defaultValue.unicode == 0 ? defaultValue.unicode = "1" : defaultValue.unicode : "1",
	                preRender: function preRender() {
	                    return getFieldValue('type') == '1' || getFieldValue('ftpType') == 2 ? "hidden" : "";
	                } }, { "type": "input", "name": "服务器IP地址", "field": "ip", "validate": [{ "required": true, "message": '请输入服务器IP地址!' }, {
	                    validator: function validator(rule, value, callback) {
	                        if (value && !/^(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])$/.test(value)) {
	                            callback("服务器IP地址格式不正确");
	                        } else {
	                            callback();
	                        }
	                    }
	                }], "defaultValue": defaultValue.ip }, { "type": "input", "name": "服务器端口", "field": "port", "validate": [{ "required": true, "message": '请输入服务器端口!' }, {
	                    validator: function validator(rule, value, callback) {
	                        if (value && !/^[0-9]{1,}$/.test(value)) {
	                            callback("服务器端口只能由数字组成");
	                        } else {
	                            callback();
	                        }
	                    }
	                }], "defaultValue": defaultValue.port ? defaultValue.port : "",
	                preRender: function preRender() {
	                    return getFieldValue('ftpType') == '2' ? "hidden" : "";
	                } }, { "type": "input", "name": "文件路径", "field": "ftpAddress", "validate": [{ "required": true, "message": '不能为空!' }], "defaultValue": defaultValue.ftpAddress ? defaultValue.ftpAddress : "/", preRender: function preRender() {
	                    return getFieldValue('type') == '1' ? "hidden" : "";
	                } }, { "type": "input", "name": "数据库实例名称", "field": "dbInstanceName", "validate": [{ "required": true, "message": '请输入数据库实例名称!' }, {
	                    validator: function validator(rule, value, callback) {
	                        if (value && value != "") {
	                            if (value.indexOf(" ") != -1) {
	                                callback("请填写正确数据库实例名称");
	                            } else if (value.length > 255) {
	                                callback("数据库实例名称长度应小于256");
	                            } else {
	                                callback();
	                            }
	                        } else {
	                            callback();
	                        }
	                    }
	                }], "defaultValue": defaultValue.dbInstanceName, preRender: function preRender() {
	                    return getFieldValue('type') == '2' ? "hidden" : "";
	                } }, { "type": "input", "name": "用户名", "field": "username", "validate": [{ "required": true, "message": '请输入用户名!' }, { validator: function validator(rule, value, callback) {
	                        if (value.indexOf(" ") != -1) {
	                            callback("请填写正确的用户名");
	                        } else if (value.length > 255) {
	                            callback("用户名长度应小于256");
	                        } else {
	                            callback();
	                        }
	                    }
	                }], "defaultValue": defaultValue.username }, { "type": "password", "name": "密码", "field": "password", "validate": [{ "required": true, "message": '请输入密码!' }, { validator: function validator(rule, value, callback) {
	                        if (value.indexOf(" ") != -1) {
	                            callback("请填写正确的密码");
	                        } else if (value.length > 255) {
	                            callback("密码长度应小于256");
	                        } else {
	                            callback();
	                        }
	                    }
	                }], "defaultValue": defaultValue.password }],

	            "buttonConfigs": {
	                "buttons": [{ "type": "button", "value": "取消", mark: "sjygl", props: { "style": { "float": "right" } } }, { "type": "button", "value": "确定", mark: "sjygl", props: { type: "primary", "style": { "float": "right" }, htmlType: "submit"
	                        // , onClick: () => {"apiName":"sjyglAddData"}
	                    } }, { "type": "button", "value": "测试连接", props: { type: "primary", "style": { "float": "right" }, htmlType: "button", onClick: function onClick() {
	                            _global.Global.getState().aiForm.sjyglEditDemo.config.data[0].buttonConfigs.buttons[2].props.disabled = true;
	                            _global.Global.getState().aiForm.sjyglEditDemo.config.data[0].buttonConfigs.buttons[2].value = "连接中...";

	                            _global.Global.requestApi((0, _extends3["default"])({}, _interfaces.dataSourceByObjTest, { body: (0, _extends3["default"])({}, _global.Global.getState().aiForm.sjyglEditDemo ? _global.Global.getState().aiForm.sjyglEditDemo.form.getFieldsValue() : _global.Global.getState().aiForm.sjyglEditDemo.form.getFieldsValue()),
	                                next: function next(action) {
	                                    _global.Global.getState().aiForm.sjyglEditDemo.config.data[0].buttonConfigs.buttons[2].props.disabled = false;
	                                    _global.Global.getState().aiForm.sjyglEditDemo.config.data[0].buttonConfigs.buttons[2].value = "测试连接";
	                                }
	                            }), _actionType.returnResult.requestDataSourceTest, {
	                                dataList: {
	                                    wfbdzySjkZyfbSteperDemo: null
	                                }
	                            });
	                        } }

	                }]
	            }
	        }]
	    });
	});

/***/ }
]);