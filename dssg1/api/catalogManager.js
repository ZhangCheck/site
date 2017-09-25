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
	(0, _jsonp2["default"])("catalogManager")(function (args, callback) {
	    callback({
	        "success": true,
	        "data": {
	            "id": "catalogManager",
	            "title": "目录管理",
	            "buttonConfigs": [{ "buttonName": "add" }, { "buttonName": "edit" }, { "buttonName": "delete" }],
	            "table": {
	                "primarykey": "id",
	                "clounms": [{
	                    "title": "序号",
	                    "dataIndex": "***",
	                    "key": "***"
	                }, {
	                    "title": "目录名称",
	                    "dataIndex": "name",
	                    "key": "name"
	                }, {
	                    "title": "目录审核节点",
	                    "dataIndex": "auditorEquipment",
	                    "key": "auditorEquipment"
	                }, {
	                    "title": "目录审核员",
	                    "dataIndex": "auditorUserName",
	                    "key": "auditorUserName"
	                }, {
	                    "title": "联系电话",
	                    "dataIndex": "telphone",
	                    "key": "telphone"
	                }, {
	                    "title": "审核单位",
	                    "dataIndex": "auditorCompany",
	                    "key": "auditorCompany"
	                }],
	                "body": { apiName: 'findCatalogList', body: { page: 0, size: 10, id: 'dsafsadfdsaf234234234' } }
	            },
	            "list": {
	                "view": null,
	                "listApi": null,
	                "saveApi": null
	            },
	            "add": {
	                "byDialog": true,
	                "initData": {
	                    data: { "apiName": "catalogAdd", url: 'api/catalogAdd.js', dataType: 'jsonp' }
	                },
	                "onAddSubmitApi": { "apiName": "saveCatalogInfo" }
	            },
	            "edit": {
	                "initData": {
	                    data: { "apiName": "catalogAdd", url: 'api/catalogAdd.js', dataType: 'jsonp' }
	                },
	                "onUpdateSubmitApi": { "apiName": "updateCatalogInfo" }
	            },
	            "delete": {
	                "body": { apiName: 'deleteCatalogById' //删除行接口
	                },
	                "detail": {
	                    "initData": {
	                        data: { "apiName": "CatalogInfo", url: 'api/CatalogInfo.js', dataType: 'jsonp' }
	                    },
	                    "body": { apiName: 'findCatalogInfo' }
	                },
	                "check": {
	                    "view": null,
	                    "checkApi": null
	                }
	            }
	        } });
	});

/***/ }
]);