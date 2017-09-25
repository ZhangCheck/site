webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(10);

	var _interfaces = __webpack_require__(35);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * Created by liy on 2016/12/17 0017.
	 */
	/**
	 * Created by liy on 2016/12/17 0017.
	 */
	(0, _jsonp2["default"])("sjyglDetailDemo")(function (args, callback) {
	    // let target = args.target;
	    var defaultValue = _global.Global.getState().dataList.sjygl && _global.Global.getState().dataList.sjygl.detailMsgDataApi ? _global.Global.getState().dataList.sjygl.detailMsgDataApi.data : {};
	    var type = defaultValue.type ? defaultValue.type : 1;
	    callback({
	        "success": true,
	        "data": [{
	            "column": 2,
	            "data": [{ "type": "text", "name": "数据源名称", "field": "name", "defaultValue": defaultValue.name }, { "type": "text", "name": "数据源类型", "field": "type", "defaultValue": defaultValue.type == 1 ? '数据库' : '文件' }, { "type": "text", "name": "数据库类型", "dictId": "sjklx", "field": "dbType", "defaultValue": defaultValue.dbType == "MSSQL" ? "SQLServer" : defaultValue.dbType, preRender: function preRender() {
	                    return type == 2 ? "hidden" : "";
	                } }, { "type": "text", "name": "传输协议", "field": "ftpType", "defaultValue": defaultValue.ftpType == 1 ? 'FTP' : 'SMB', preRender: function preRender() {
	                    return type == 1 ? "hidden" : "";
	                } }, { "type": "text", "name": "文件服务器编码", "field": "unicode",
	                "defaultValue": defaultValue.unicode == 1 ? 'GBK' : defaultValue.unicode == 2 ? 'UTF-8' : 'GB2312',
	                preRender: function preRender() {
	                    return type == 1 ? "hidden" : "";
	                }
	            }, { "type": "text", "name": "服务器IP地址", "field": "ip", "defaultValue": defaultValue.ip }, { "type": "text", "name": "服务器端口", "field": "port", "defaultValue": defaultValue.port }, { "type": "text", "name": "文件路径", "field": "ftpAddress", "defaultValue": defaultValue.ftpAddress, preRender: function preRender() {
	                    return type == 1 ? "hidden" : "";
	                } }, { "type": "text", "name": "数据库实例名称", "field": "dbInstanceName", "defaultValue": defaultValue.dbInstanceName, preRender: function preRender() {
	                    return type == 2 ? "hidden" : "";
	                } }, { "type": "text", "name": "用户名", "field": "username", "defaultValue": defaultValue.username }, { "type": "text", "name": "密码", "field": "password", "defaultValue": defaultValue.password }],
	            "buttonConfigs": {
	                "buttons": [{ "type": "button", "value": "返回", mark: "sjygl", props: { "style": { "float": "right" } } }]
	            }
	        }]
	    });
	});

/***/ }
]);