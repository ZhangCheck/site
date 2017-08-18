webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("ftpMlgl2")(function (args, callback) {
	    var config = {
	        "success": true,
	        "data": {
	            "id": "ftpMlgl2",
	            "title": "FTP目录管理2",
	            "buttonConfigs": [{ "buttonName": "add" }, { "buttonName": "delete" }, { "buttonName": "edit" }],
	            "table": {
	                "primarykey": "id",
	                "clounms": [{
	                    "title": "资源名称",
	                    "dataIndex": "innerUserName",
	                    "key": "innerUserName"
	                }, {
	                    "title": "资源类型",
	                    "dataIndex": "outerUserName",
	                    "key": "outerUserName"
	                }, {
	                    "title": "编目节点",
	                    "dataIndex": "innerAddress",
	                    "key": "innerAddress"
	                }, {
	                    "title": "编目单位",
	                    "dataIndex": "outerAddress",
	                    "key": "outerAddress"
	                }, {
	                    "title": "编目状态",
	                    "dataIndex": "userFlag",
	                    "key": "userFlag"
	                }],
	                "body": { apiName: 'ftpMlglData', body: {} }
	            }

	        }
	    };
	    setTimeout(function () {
	        //Todo:默认选中第一个域，表格展示第一个域下的数据，还需改进
	        config.data.table.body.body.id = _global.Global.getState().mainConMenu.selected == undefined ? null : _global.Global.getState().mainConMenu.selected;
	        callback(config);
	    }, 500);
	}); /* import './other.html';
	     import React from 'react';
	     import ReactDOM from 'react-dom'; */

/***/ }
]);