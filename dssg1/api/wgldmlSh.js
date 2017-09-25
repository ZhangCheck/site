webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _css = __webpack_require__(2755);

	var _modal = __webpack_require__(29);

	var _modal2 = _interopRequireDefault(_modal);

	var _css2 = __webpack_require__(44);

	var _icon = __webpack_require__(19);

	var _icon2 = _interopRequireDefault(_icon);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _global = __webpack_require__(10);

	var _dataFormat = __webpack_require__(64);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _history = __webpack_require__(32);

	var _history2 = _interopRequireDefault(_history);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("wgldmlSh")(function (args, callback) {
	    callback({
	        "success": true,
	        "data": {
	            "id": "wgldmlSh",
	            "title": "我管理的目录",
	            "buttonConfigs": [{ "buttonName": function buttonName(config) {
	                    return _react2["default"].createElement(
	                        "div",
	                        { className: "configRightBtnGp" },
	                        _react2["default"].createElement(
	                            "div",
	                            null,
	                            _react2["default"].createElement(_icon2["default"], { type: "approval-manage" }),
	                            _react2["default"].createElement(
	                                "a",
	                                { onClick: function onClick() {
	                                        var result = (0, _dataFormat.checkSelectId)(_global.Global, "wgldmlSh");
	                                        if (!result) {
	                                            _modal2["default"].warning({
	                                                content: '请选择一条数据！'
	                                            });
	                                            return result;
	                                        }
	                                        /*let result2  =  checkTableOneData(Global,"wgldmlSh","state","2");
	                                               if(result2){
	                                                           Modal.warning({
	                                                               content: '资源非发布状态！'
	                                                           });
	                                                           return false;
	                                                      }*/
	                                        _history2["default"].push("/aiForm/wgldmlSh/mlShJsonp/mlShInfo");
	                                    } },
	                                "\u5BA1\u6838"
	                            )
	                        )
	                    );
	                } }],
	            "searchConfig": {
	                "data": [{
	                    "column": 6,
	                    "data": [{ "type": "input", "col": 7, "name": "目录名称/编码", "field": "resName" }, { "type": "treeSelect", "col": 7, "name": "国家主题分类", "field": "themeType", options: { value: "_all_", key: "全部" }, dictId: "themeType", dictApi: { apiName: 'flglDataTree', body: { categoryType: 1 } } }, { "type": "select", "col": 4, "name": "目录状态", "field": "state", options: [{ value: "_all_", key: "全部" }, { value: "1", key: "待审核" }, { value: "2", key: "发布" }, { value: "3", key: "发布拒绝" }] }, { "type": "select", "col": 5, "name": "目录分类", "field": "state", options: [{ value: "_all_", key: "全部" }, { value: "1", key: "共享目录" }, { value: "2", key: "采集目录" }, { value: "3", key: "开放目录" }] }, { "type": "button", "col": 1, "value": "查询", field: "button", "pageName": "search", "btnType": "primary", "htmlType": "submit" }]
	                }],
	                "body": { apiName: 'wgldmlShData' }
	            },
	            "table": {
	                "primarykey": "id",
	                "clounms": [{
	                    "title": "目录名称",
	                    "dataIndex": "resName",
	                    "key": "resName"
	                }, {
	                    "title": "目录英文名称",
	                    "dataIndex": "resEname",
	                    "key": "resEname"
	                }, {
	                    "title": "目录编码",
	                    "dataIndex": "resCode",
	                    "key": "resCode"
	                }, {
	                    "title": "目录分类",
	                    "dataIndex": "resType",
	                    "key": "resType"
	                }, {
	                    "title": "国家主题分类",
	                    "dataIndex": "themeName",
	                    "key": "themeName"
	                }, {
	                    "title": "部门主题分类",
	                    "dataIndex": "departmentName",
	                    "key": "departmentName"
	                }, {
	                    "title": "提供单位",
	                    "dataIndex": "resComp",
	                    "key": "resComp"
	                }, {
	                    "title": "目录状态",
	                    "dataIndex": "stateName",
	                    "key": "stateName"
	                }, {
	                    "title": "操作",
	                    "dataIndex": "operation",
	                    "key": "operation",
	                    "render": ["detail"]
	                }],
	                "body": { apiName: 'wgldmlShData' }
	            },
	            "list": {
	                "view": null,
	                "listApi": null,
	                "saveApi": null
	            },
	            "add": {
	                "initData": {
	                    data: {}
	                },
	                "onAddSubmitApi": {}
	            },
	            "edit": {
	                "initData": {
	                    data: {}
	                },
	                "onUpdateSubmitApi": {}
	            },
	            "delete": {
	                "body": {}
	            },
	            "detail": {
	                "initData": {
	                    data: { apiName: "getWgldmlShDetail" }
	                },
	                "body": { apiName: 'wgldmlShDetail' }
	            },
	            "check": {
	                "view": null,
	                "checkApi": null
	            }
	        }
	    });
	}); /* import './other.html';
	     import React from 'react';
	     import ReactDOM from 'react-dom'; */

/***/ }
]);