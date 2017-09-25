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

	(0, _jsonp2["default"])("xzfbml")(function (args, callback) {
	    callback({
	        "success": true,
	        "data": {
	            "id": "dlDemo",
	            "title": "选择发布目录",
	            "searchConfig": {
	                "data": [{
	                    "column": 3,
	                    "data": [{ "type": "input", "name": "目录名称/编码", "field": "movie" }, { "name": "国家主题分类", "type": "select", "field": "ztfl", "placeholder": "请选择...", "options": ["全部", "人员", "机构"] }, { "name": "部门主题分类", "type": "select", "field": "ztfl", "placeholder": "请选择...", "options": ["全部", "人员", "机构"] }, { "type": "button", "value": "查询", "pageName": "search", "btnType": "primary", "htmlType": "submit" }]
	                }],
	                "body": { apiName: 'getSearchData' }
	            },
	            "table": {
	                "primarykey": "number",
	                "clounms": [{
	                    "title": "目录名称",
	                    "dataIndex": "dirName",
	                    "key": "dirName"
	                }, {
	                    "title": "目录英文名称",
	                    "dataIndex": "dirEnglishName",
	                    "key": "dirEnglishName"
	                }, {
	                    "title": "目录编码",
	                    "dataIndex": "dirUnicode",
	                    "key": "dirUnicode"
	                }, {
	                    "title": "国家主题分类",
	                    "dataIndex": "themeType",
	                    "key": "themeType"
	                }, {
	                    "title": "部门主题分类",
	                    "dataIndex": "depType",
	                    "key": "depType"
	                }, {
	                    "title": "资源等级",
	                    "dataIndex": "resourceLevel",
	                    "key": "operation"
	                }],
	                "body": { apiName: 'getResourceTableBody' }
	            },
	            "list": {
	                "view": null,
	                "listApi": null,
	                "saveApi": null
	            },
	            "add": {
	                "data": [{
	                    "column": 3,
	                    "data": [{ "type": "input", "name": "电影", "field": "movie" }, { "type": "button", "value": "取消", "pageName": "add", "btnType": "primary", "htmlType": "button" }, { "type": "button", "value": "确定", "pageName": "add", "btnType": "primary", "htmlType": "submit" }]
	                }],
	                "submitApi": { apiName: "apiName" },
	                "onAddSubmitApi": { "apiName": "getAddData" }
	            },
	            "edit": {
	                "data": [{
	                    "column": 3,
	                    "data": [{ "type": "input", "name": "电影", "field": "movie" }, { "type": "button", "value": "取消", "pageName": "edit", "btnType": "primary", "htmlType": "button" }, { "type": "button", "value": "确定", "pageName": "edit", "btnType": "primary", "htmlType": "submit" }]
	                }],
	                "onUpdateSubmitApi": { "apiName": "getUpdateData" }
	            },
	            "delete": {
	                "body": { apiName: 'getDeleteData' }
	            },
	            "detail": {
	                "data": [{
	                    "column": 3,
	                    "data": [{ "type": "input", "name": "电影", "field": "movie" }, { "type": "button", "value": "取消", "pageName": "detail", "btnType": "primary", "htmlType": "button" }, { "type": "button", "value": "确定", "pageName": "detail", "btnType": "primary", "htmlType": "submit" }]
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