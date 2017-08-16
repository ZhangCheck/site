(function(){ var runed=0,temp,timer,time;webpackJsonp([3],[
/* 0 */
/***/ temp = function(module, exports, __webpack_require__) {runed=true;

	'use strict';

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

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

	(0, _jsonp2["default"])("sjyglEditDemo")(function (args, callback) {
	    var target = args.target;
	    var getFieldValue = target.props.form.getFieldValue;
	    var defaultValue = args.apiData ? args.apiData : {};
	    // let defaultValue = Global.getState().dataList.sjygl.detailMsgDataApi?Global.getState().dataList.sjygl.detailMsgDataApi.data:'';
	    callback({
	        "success": true,
	        "data": [{
	            "column": 2,
	            "data": [{ "type": "input", "name": "数据源名称", "field": "name", "validate": [{ "required": true, "message": '请输入数据源名称!' }], "defaultValue": defaultValue.name }, { "type": "select", "name": "数据源类型", 'options': [{ key: '数据库', value: '1' }, { key: '文件', value: '2' }], "field": "type", "validate": [{ "required": true, "message": '请输入数据源类型!' }], "defaultValue": defaultValue.type ? defaultValue.type : '1' }, { "type": "select", "name": "数据库类型", 'options': [{ key: 'Oracle', value: 'Oracle' }, { key: 'MySQL', value: 'MySQL' }, { key: 'MSSQL', value: 'MSSQL' }, { key: 'DB2', value: 'DB2' }, { key: 'Sybase', value: 'Sybase' }], "field": "dbType", "validate": [{ "required": true, "message": '请输入数据库类型!' }], "defaultValue": defaultValue.dbType, preRender: function preRender() {
	                    return getFieldValue('type') == '2' ? "hidden" : "";
	                } }, { "type": "select", "name": "传输协议", 'options': [{ key: 'FTP', value: '1' }, { key: 'SMB', value: '2' }], "field": "ftpType", "validate": [{ "required": true, "message": '请选择文件传输类型!' }], "defaultValue": defaultValue.ftpType ? defaultValue.ftpType : '1', preRender: function preRender() {
	                    return getFieldValue('type') == '1' ? "hidden" : "";
	                } }, { "type": "input", "name": "服务器IP地址", "field": "ip", "validate": [{ "required": true, "message": '请输入服务器IP地址!' }], "defaultValue": defaultValue.ip }, { "type": "input", "name": "文件路径", "field": "ftpAddress", "defaultValue": defaultValue.ftpAddress, preRender: function preRender() {
	                    return getFieldValue('type') == '1' ? "hidden" : "";
	                } }, { "type": "input", "name": "服务器端口", "field": "port", "validate": [{ "required": true, "message": '请输入服务器端口!' }], "defaultValue": defaultValue.port }, { "type": "input", "name": "数据库实例名称", "field": "dbInstanceName", "validate": [{ "required": true, "message": '请输入数据库实例名称!' }], "defaultValue": defaultValue.dbInstanceName, preRender: function preRender() {
	                    return getFieldValue('type') == '2' ? "hidden" : "";
	                } }, { "type": "input", "name": "用户名", "field": "username", "validate": [{ "required": true, "message": '请输入用户名!' }], "defaultValue": defaultValue.username }, { "type": "password", "name": "密码", "field": "password", "validate": [{ "required": true, "message": '请输入密码!' }], "defaultValue": defaultValue.password }],

	            "buttonConfigs": {
	                "buttons": [{ "type": "button", "value": "取消", mark: "sjygl", props: { "style": { "float": "right" } } }, { "type": "button", "value": "确定", mark: "sjygl", props: { "style": { "float": "right" }, htmlType: "submit" } }, { "type": "button", "value": "测试连接", props: { type: "primary", "style": { "float": "right" }, htmlType: "button", onClick: function onClick() {
	                            _global.Global.requestApi((0, _extends3["default"])({}, _interfaces.dataSourceByObjTest, {
	                                body: (0, _extends3["default"])({}, _global.Global.getState().aiForm.dataListAdd1 ? _global.Global.getState().aiForm.dataListAdd1.form.getFieldsValue() : _global.Global.getState().aiForm.dataListEdit.form.getFieldsValue())
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