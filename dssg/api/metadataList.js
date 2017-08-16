(function(){ var runed=0,temp,timer,time;webpackJsonp([3],[
/* 0 */
/***/ temp = function(module, exports, __webpack_require__) {runed=true;

	'use strict';

	var _css = __webpack_require__(1581);

	var _modal = __webpack_require__(49);

	var _modal2 = _interopRequireDefault(_modal);

	var _css2 = __webpack_require__(64);

	var _icon = __webpack_require__(20);

	var _icon2 = _interopRequireDefault(_icon);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _global = __webpack_require__(15);

	var _dataFormat = __webpack_require__(172);

	var _jsonp = __webpack_require__(234);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _history = __webpack_require__(41);

	var _history2 = _interopRequireDefault(_history);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/* import './other.html';
	 import React from 'react';
	 import ReactDOM from 'react-dom'; */
	(0, _jsonp2["default"])("metadataList")(function (args, callback) {
	    callback({
	        "success": true,
	        "data": {
	            "id": "metadata",
	            "title": "数据源管理",
	            "buttonConfigs": [{ "buttonName": "add", showName: "发布" }, { "buttonName": function buttonName(config) {
	                    return _react2["default"].createElement(
	                        'div',
	                        { className: "configRightBtnGp" },
	                        _react2["default"].createElement(
	                            'div',
	                            null,
	                            _react2["default"].createElement(_icon2["default"], { type: 'cancel-subscribe' }),
	                            _react2["default"].createElement(
	                                'a',
	                                { onClick: function onClick() {
	                                        var result = (0, _dataFormat.checkSelectId)(_global.Global, "wfbdzyApi");
	                                        if (!result) {
	                                            _modal2["default"].warning({
	                                                content: '请选择一条数据！'
	                                            });
	                                            return result;
	                                        }
	                                        var result1 = (0, _dataFormat.checkTableOneData)(_global.Global, "wfbdzyApi", "enableFlag", "-1");
	                                        if (!result1) {
	                                            _modal2["default"].warning({
	                                                content: '资源已暂停，不能操作！'
	                                            });
	                                            return false;
	                                        }
	                                        var result2 = (0, _dataFormat.checkTableOneData)(_global.Global, "wfbdzyApi", "state", "2");
	                                        if (result2) {
	                                            _modal2["default"].warning({
	                                                content: '资源非发布状态！'
	                                            });
	                                            return false;
	                                        }
	                                        var selectedId = _global.Global.getState().dataList.metadata.selectedRows;
	                                        _global.Global.requestApi({ "apiName": "wfbdzySjkUpdateState", body: { id: selectedId, type: -1 } }, ["requestResState", "receiveResState", "failedResState"], {});
	                                    } },
	                                '\u64A4\u9500'
	                            )
	                        ),
	                        _react2["default"].createElement(
	                            'div',
	                            null,
	                            _react2["default"].createElement(_icon2["default"], { type: 'lead-in' }),
	                            _react2["default"].createElement(
	                                'a',
	                                { onClick: function onClick() {
	                                        var result = (0, _dataFormat.checkSelectId)(_global.Global, "wfbdzyApi");
	                                        if (!result) {
	                                            _modal2["default"].warning({
	                                                content: '请选择一条数据！'
	                                            });
	                                            return result;
	                                        }
	                                        var result1 = (0, _dataFormat.checkTableOneData)(_global.Global, "wfbdzyApi", "enableFlag", "-1");
	                                        if (!result1) {
	                                            _modal2["default"].warning({
	                                                content: '资源已暂停，不能操作！'
	                                            });
	                                            return false;
	                                        }
	                                        var result2 = (0, _dataFormat.checkTableOneData)(_global.Global, "wfbdzyApi", "state", "2");
	                                        if (result2) {
	                                            _modal2["default"].warning({
	                                                content: '资源非发布状态！'
	                                            });
	                                            return false;
	                                        }
	                                        var selectedId = _global.Global.getState().dataList.metadata.selectedRows;
	                                        _global.Global.requestApi({ "apiName": "wfbdzySjkUpdateState", body: { id: selectedId, type: -1 } }, ["requestResState", "receiveResState", "failedResState"], {});
	                                    } },
	                                '\u5BFC\u5165'
	                            )
	                        ),
	                        _react2["default"].createElement(
	                            'div',
	                            null,
	                            _react2["default"].createElement(_icon2["default"], { type: 'lead-out' }),
	                            _react2["default"].createElement(
	                                'a',
	                                { onClick: function onClick() {
	                                        var result = (0, _dataFormat.checkSelectId)(_global.Global, "wfbdzyApi");
	                                        if (!result) {
	                                            _modal2["default"].warning({
	                                                content: '请选择一条数据！'
	                                            });
	                                            return result;
	                                        }
	                                        var result1 = (0, _dataFormat.checkTableOneData)(_global.Global, "wfbdzyApi", "enableFlag", "-1");
	                                        if (!result1) {
	                                            _modal2["default"].warning({
	                                                content: '资源已暂停，不能操作！'
	                                            });
	                                            return false;
	                                        }
	                                        var result2 = (0, _dataFormat.checkTableOneData)(_global.Global, "wfbdzyApi", "state", "2");
	                                        if (result2) {
	                                            _modal2["default"].warning({
	                                                content: '资源非发布状态！'
	                                            });
	                                            return false;
	                                        }
	                                        var selectedId = _global.Global.getState().dataList.metadata.selectedRows;
	                                        _global.Global.requestApi({ "apiName": "wfbdzySjkUpdateState", body: { id: selectedId, type: -1 } }, ["requestResState", "receiveResState", "failedResState"], {});
	                                    } },
	                                '\u5BFC\u51FA'
	                            )
	                        )
	                    );
	                } }, { "buttonName": "delete" }],
	            "searchConfig": {
	                "data": [{
	                    "column": 6,
	                    "data": [{ "type": "input", "col": 8, "name": "数据元名称/编码", "field": "metaName" }, { "type": "select", "col": 6, "name": "数据元分类", "field": "metaSort",
	                        "options": [{ value: "_all_", key: "全部" }, { value: 1, key: "人员类" }, { value: 2, key: "机构类" }, { value: 3, key: "物品类" }]
	                    }, { "type": "select", "col": 5, "name": "状态", "field": "state",
	                        "options": [{ value: "_all_", key: "全部" }, { value: 1, key: "待审核" }, { value: 2, key: "已发布" }, { value: 3, key: "发布拒绝" }, { value: 7, key: "已撤销" }]
	                    }, { "type": "button", "col": 4, "value": "查询", field: "button", "pageName": "search", "btnType": "primary", "htmlType": "submit" }]
	                }],
	                "body": { apiName: 'metadataData' }
	            },
	            "table": {
	                "primarykey": "id",
	                "clounms": [{
	                    "title": "数据元名称",
	                    "dataIndex": "metaName",
	                    "key": "metaName"
	                }, {
	                    "title": "数据元英文名称",
	                    "dataIndex": "metaEname",
	                    "key": "metaEname"
	                }, {
	                    "title": "数据元编码",
	                    "dataIndex": "metaCode",
	                    "key": "metaCode"
	                }, {
	                    "title": "数据元分类",
	                    "dataIndex": "metaSortName",
	                    "key": "metaSortName"
	                }, {
	                    "title": "数据类型",
	                    "dataIndex": "metaType",
	                    "key": "metaType",
	                    "render": function render(text, record, index) {
	                        switch (text) {
	                            case "12":
	                                return "文本";
	                            case "3":
	                                return "日期";
	                            case "91":
	                                return "数据";
	                            case "93":
	                                return "时间";
	                            case "2005":
	                                return "字符大型对象";
	                            case "2004":
	                                return "二进制大型对象";
	                        }
	                    }
	                }, {
	                    "title": "数据长度",
	                    "dataIndex": "metaLength",
	                    "key": "metaLength"
	                }, {
	                    "title": "版本号",
	                    "dataIndex": "version",
	                    "key": "version"
	                }, {
	                    "title": "提交单位",
	                    "dataIndex": "submitComp",
	                    "key": "submitComp"
	                }, {
	                    "title": "提交人",
	                    "dataIndex": "submitPeople",
	                    "key": "submitPeople"
	                }, {
	                    "title": "提交时间",
	                    "dataIndex": "submitTime",
	                    "key": "submitTime"
	                }, {
	                    "title": "状态",
	                    "dataIndex": "state",
	                    "key": "state",
	                    "render": function render(text, record, index) {
	                        switch (text) {
	                            case "1":
	                                return "待审核";
	                            case "2":
	                                return "已发布";
	                            case "3":
	                                return "发布拒绝";
	                            case "7":
	                                return "已撤销";
	                        }
	                    }
	                }, {
	                    "title": "操作",
	                    "dataIndex": "operation",
	                    "key": "operation",
	                    "render": ["detail", "edit", "delete"]
	                }],
	                "body": { apiName: 'metadataData' }
	            },
	            "list": {
	                "view": null,
	                "listApi": null,
	                "saveApi": null
	            },
	            "add": {
	                "initData": {
	                    data: { apiName: "getMetadataAdd" }
	                },
	                "onAddSubmitApi": { "apiName": "metadataAddData" }
	            },
	            "edit": {
	                "initData": {
	                    data: { apiName: "getMetadataEdit" }
	                },
	                "onUpdateSubmitApi": { "apiName": "metadataEditData", dataFormate: function dataFormate(values) {

	                        return (0, _dataFormat.dataHandle)(values, _global.Global);
	                    } }
	            },
	            "delete": {
	                "body": { apiName: 'metadataDelete' }
	            },
	            "detail": {
	                "initData": {
	                    data: { apiName: "getMetadataDetail" }
	                },
	                "body": { apiName: 'metadataDetail' }
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