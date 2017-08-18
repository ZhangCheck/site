webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/* import './other.html';
	 import React from 'react';
	 import ReactDOM from 'react-dom'; */
	(0, _jsonp2["default"])("ftpRz")(function (args, callback) {
	    callback({
	        "success": true,
	        "data": {
	            "id": "ftpRz",
	            "title": "FTP日志",
	            "searchConfig": {
	                "data": [{
	                    "column": 6,
	                    "data": [{ "name": "时间范围", "col": 15, "type": "rangePicker", "field": "timeRange" }, { "type": "select", "col": 6, "name": "传输", "field": "state", options: [{ value: "_all_", key: "全部" }, { value: "1", key: "内网" }, { value: "2", key: "外网" }] }, { "type": "button", "col": 2, "value": "查询", "pageName": "search", "btnType": "primary", "htmlType": "submit" }]
	                }],
	                "body": { apiName: 'ftpRzData', dataFormate: { "key": "timeRange", format: "YYYY-MM-DD HH:mm:ss" } }
	            },
	            "table": {
	                "primarykey": "id",
	                "clounms": [{
	                    "title": "用户名",
	                    "dataIndex": "username",
	                    "key": "username"
	                }, {
	                    "title": "登录时间",
	                    "dataIndex": "loginTime",
	                    "key": "loginTime"
	                }, {
	                    "title": "登录ip",
	                    "dataIndex": "clientIp",
	                    "key": "clientIp"
	                }, {
	                    "title": "文件名",
	                    "dataIndex": "filename",
	                    "key": "filename"
	                }, {
	                    "title": "传输",
	                    "dataIndex": "direction",
	                    "key": "direction",
	                    render: function render(text, record, index) {
	                        switch (text) {
	                            case "1":
	                                return "内网";
	                            case "0":
	                                return "外网";
	                        }
	                    }
	                }, {
	                    "title": "操作方式",
	                    "dataIndex": "operation",
	                    "key": "operation",
	                    render: function render(text, record, index) {
	                        switch (text) {
	                            case "1":
	                                return "内->外";
	                            case "0":
	                                return "外->内";
	                        }
	                    }
	                }],
	                "body": { apiName: 'ftpRzData' }
	            },
	            "add": {
	                "initData": {
	                    data: { apiName: "getFtpRzEdit" }
	                },
	                "onAddSubmitApi": { "apiName": "ftpRzAddData" }
	            },
	            "edit": {
	                "initData": {
	                    data: { apiName: "getFtpRzEdit" }
	                },
	                "onUpdateSubmitApi": { "apiName": "ftpRzEditData" }
	            },
	            "delete": {
	                "body": { apiName: 'deleteSysUser' }
	            },
	            "detail": {
	                "initData": {
	                    data: { apiName: "sjyglDetailDemo" }
	                },
	                "body": { apiName: 'ftpRzDetailData' }
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