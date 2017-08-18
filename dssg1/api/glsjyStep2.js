webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _component = __webpack_require__(11);

	var _component2 = _interopRequireDefault(_component);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("glsjyStep2")(function (args, callback) {
	    callback({
	        "success": true,
	        "data": {
	            "title": "",
	            "table": {
	                "clounms": [{
	                    "title": "数据源名称",
	                    "dataIndex": "sjymc",
	                    "key": "sjymc"
	                }, {
	                    "title": "IP地址",
	                    "dataIndex": "ipAddress",
	                    "key": "ipAddress"
	                }, {
	                    "title": "端口",
	                    "dataIndex": "port",
	                    "key": "port"
	                }, {
	                    "title": "数据源类型",
	                    "dataIndex": "sjylx",
	                    "key": "sjylx"
	                }],
	                "body": { apiName: 'sjyglTableData' //暂定此接口
	                } },
	            "list": {
	                "view": null,
	                "listApi": null,
	                "saveApi": null
	            },
	            "add": {
	                "data": [{
	                    "column": 2,
	                    "buttonConfigs": {
	                        "buttons": [{ "type": "button", "value": "取消", props: { type: "primary", "style": { "float": "right" } } }, { "type": "button", "value": "确定", props: { type: "primary", "style": { "float": "right" }, htmlType: "sumbit" } }, { "type": "button", "value": "测试连接", "field": "cslj", props: { "style": { "float": "right" } } }]
	                    },

	                    "data": [{ "type": "input", "name": "数据源名称", "field": "sjymc", "placeholder": "请输入数据源名称", "validate": [{ "required": true, "message": '请输入数据源名称!' }] }, { "type": "select", "name": "数据源类型", "dictId": "sjylx", "field": "sjylx" }, { "type": "select", "name": "数据库类型", "dictId": "sjklx", "field": "sjklx" }, { "type": "input", "name": "服务器IP地址", "field": "fwqipdz", "validate": [{ "required": true, "message": '请输入服务器IP地址!' }] }, { "type": "input", "name": "服务器端口", "field": "fwqdk", "validate": [{ "required": true, "message": '请输入服务器端口!' }] }, { "type": "input", "name": "数据库实例名称", "field": "sjkslmc", "validate": [{ "required": true, "message": '请输入数据库实例名称!' }] }, { "type": "input", "name": "用户名", "field": "yhm", "validate": [{ "required": true, "message": '请输入用户名!' }] }, { "type": "input", "name": "密码", "field": "mm", "validate": [{ "required": true, "message": '请输入密码!' }] }]
	                }],
	                "submitApi": { apiName: "getAddData" },
	                "onAddSubmitApi": { "apiName": "getAddData" }
	            },
	            "edit": {
	                "data": [{
	                    "column": 2,
	                    "buttonConfigs": {
	                        "buttons": [{ "type": "button", "value": "取消", props: { type: "primary", "style": { "float": "right" } } }, { "type": "button", "value": "确定", props: { type: "primary", "style": { "float": "right" }, htmlType: "sumbit" } }, { "type": "button", "value": "测试连接", "field": "cslj", props: { "style": { "float": "right" } } }]
	                    },

	                    "data": [{ "type": "input", "name": "数据源名称", "field": "sjymc", "placeholder": "请输入数据源名称", "validate": [{ "required": true, "message": '请输入数据源名称!' }] }, { "type": "select", "name": "数据源类型", "dictId": "sjylx", "field": "sjylx" }, { "type": "select", "name": "数据库类型", "dictId": "sjklx", "field": "sjklx" }, { "type": "input", "name": "服务器IP地址", "field": "fwqipdz", "validate": [{ "required": true, "message": '请输入服务器IP地址!' }] }, { "type": "input", "name": "服务器端口", "field": "fwqdk", "validate": [{ "required": true, "message": '请输入服务器端口!' }] }, { "type": "input", "name": "数据库实例名称", "field": "sjkslmc", "validate": [{ "required": true, "message": '请输入数据库实例名称!' }] }, { "type": "input", "name": "用户名", "field": "yhm", "validate": [{ "required": true, "message": '请输入用户名!' }] }, { "type": "input", "name": "密码", "field": "mm", "validate": [{ "required": true, "message": '请输入密码!' }] }]
	                }],
	                "onUpdateSubmitApi": { "apiName": "getUpdateData" }
	            },
	            "delete": {
	                "view": null,
	                "saveApi": null,
	                "body": { apiName: 'getDeleteData' }
	            },
	            "detail": {
	                "data": [{
	                    "column": 2,
	                    "data": [{ "type": "text", "name": "数据源名称" }, { "type": "text", "name": "数据源类型" }, { "type": "text", "name": "数据库类型" }, { "type": "text", "name": "服务器IP地址" }, { "type": "text", "name": "服务器端口" }, { "type": "text", "name": "数据库实例名称" }, { "type": "text", "name": "用户名" }, { "type": "text", "name": "密码" }]
	                }],
	                "body": { apiName: 'getDetailMsgData' }
	            },
	            "check": {
	                "view": null,
	                "checkApi": null
	            }
	        }
	    });
	});

/***/ }
]);