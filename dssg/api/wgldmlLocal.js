(function(){ var runed=0,temp,timer,time;webpackJsonp([3],[
/* 0 */
/***/ temp = function(module, exports, __webpack_require__) {runed=true;

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _global = __webpack_require__(15);

	var _dataFormat = __webpack_require__(172);

	var _jsonp = __webpack_require__(234);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/* import './other.html';
	 import React from 'react';
	 import ReactDOM from 'react-dom'; */
	(0, _jsonp2["default"])("wgldmlLocalList")(function (args, callback) {
	    callback({
	        "success": true,
	        "data": {
	            "id": "wgldmlLocal",
	            "title": "我管理的目录",
	            "searchConfig": {
	                "data": [{
	                    "column": 6,
	                    "data": [{ "type": "input", "col": 8, "name": "目录名称/编码", "field": "resName" }, { "type": "treeSelect", "col": 6, "name": "主题分类", "field": "themeType", options: { value: "_all_", key: "全部" }, dictId: "themeType", dictApi: { apiName: 'flglDataTree', body: { categoryType: 1 } } }, { "type": "treeSelect", "col": 6, "name": "部门分类", "field": "departmentType", options: { value: "_all_", key: "全部" }, dictId: "departmentType", dictApi: { apiName: 'flglDataTree', body: { categoryType: 2 } } }, { "type": "button", "col": 4, "value": "查询", field: "button", "pageName": "search", "btnType": "primary", "htmlType": "submit" }]
	                }],
	                "body": { apiName: 'wgldmlLocalData' }
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
	                    "title": "主题分类",
	                    "dataIndex": "themeName",
	                    "key": "themeName"
	                }, {
	                    "title": "部门分类",
	                    "dataIndex": "departmentName",
	                    "key": "departmentName"
	                }, {
	                    "title": "资源等级",
	                    "dataIndex": "resLevel",
	                    "key": "resLevel",
	                    render: function render(text, record, index) {
	                        switch (text) {
	                            case "1":
	                                return "一级";
	                            case "2":
	                                return "二级";
	                            case "3":
	                                return "三级";
	                        }
	                    }
	                }, {
	                    "title": "授权设备",
	                    "dataIndex": "equipment",
	                    "key": "equipment"
	                }, {
	                    "title": "资源状态",
	                    "dataIndex": "state",
	                    "key": "state",
	                    "render": function render(text, record, index) {
	                        switch (text) {
	                            case "0":
	                                return "初始化";
	                            case "2":
	                                return "已发布";
	                        }
	                    }
	                }, {
	                    "title": "操作",
	                    "dataIndex": "operation",
	                    "key": "operation",
	                    "render": ["detail", "edit"]
	                }],
	                "body": { apiName: 'wgldmlLocalData' }
	            },
	            "list": {
	                "view": null,
	                "listApi": null,
	                "saveApi": null
	            },
	            "add": {
	                "initData": {
	                    data: { apiName: "getWgldmlLocalEdit" }
	                },
	                "onAddSubmitApi": { "apiName": "wgldmlAddLocalData", dataFormate: function dataFormate(values) {
	                        return (0, _dataFormat.dataHandle)(values, _global.Global);
	                    } }
	            },
	            "edit": {
	                "initData": {
	                    data: { apiName: "getWgldmlLocalEdit" }
	                },
	                "onUpdateSubmitApi": { "apiName": "wgldmlEditLocalData", dataFormate: function dataFormate(values) {

	                        return (0, _dataFormat.dataHandle)(values, _global.Global);
	                    } }
	            },
	            "delete": {
	                "body": { apiName: 'wgldmlDeleteLocalInfo' }
	            },
	            "detail": {
	                "initData": {
	                    data: { apiName: "getWgldmlLocalDetail" }
	                },
	                "body": { apiName: 'wgldmlLocalDetail' }
	            },
	            "check": {
	                "view": null,
	                "checkApi": null
	            }
	        }
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