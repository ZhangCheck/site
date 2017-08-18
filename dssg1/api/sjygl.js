webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(2150);

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

	/* import './other.html';
	 import React from 'react';
	 import ReactDOM from 'react-dom'; */
	(0, _jsonp2["default"])("sjygl")(function (args, callback) {
	    var state = _global.Global.getState();
	    //let name = getAiFormValue(state,"sjygl",0);
	    callback({
	        "success": true,
	        "data": {
	            "title": "数据源管理",
	            "buttonConfigs": [{ "buttonName": "add" }, { "buttonName": "edit" }, { "buttonName": function buttonName(config) {
	                    return _react2["default"].createElement(
	                        'div',
	                        { className: "configRightBtnGp" },
	                        _react2["default"].createElement(
	                            'div',
	                            null,
	                            _react2["default"].createElement(_icon2["default"], { type: 'dssg-delete' }),
	                            _react2["default"].createElement(
	                                'a',
	                                { onClick: function onClick() {
	                                        var result = (0, _dataFormat.checkSelectId)(_global.Global, "sjygl");
	                                        if (!result) {
	                                            _modal2["default"].warning({
	                                                content: '请选择一条数据！'
	                                            });
	                                            return result;
	                                        }
	                                        var selectedId = _global.Global.getState().dataList.sjygl.selectedRows;
	                                        _global.Global.requestApi({ "apiName": "sjyglCheckUse", body: { id: selectedId[0] }, next: function next(action) {

	                                                var result2 = action.data;
	                                                if (result2) {
	                                                    _modal2["default"].warning({
	                                                        content: '该项已被使用！'
	                                                    });
	                                                    return false;
	                                                } else {
	                                                    _modal2["default"].confirm({
	                                                        title: '告警信息',
	                                                        content: '确认删除？',
	                                                        onOk: function onOk() {
	                                                            _global.Global.requestApi({ apiName: "getDeleteData", body: { id: selectedId[0] }, next: function next(action) {

	                                                                    var lastUrl = _global.Global.getState().routing.path;
	                                                                    _history2["default"].push(lastUrl.substring(1));
	                                                                } });
	                                                        }
	                                                    });
	                                                }
	                                            } }, ['requestDeleteData', 'receieveDeleteData', 'failedDeleteData'], {});
	                                    } },
	                                '\u5220\u9664'
	                            )
	                        )
	                    );
	                }
	            }],
	            "searchConfig": {
	                "data": [{
	                    "column": 2,
	                    "formItemRewiring": true,
	                    "data": [{ "type": "input", "col": 5, "name": "数据源名称", "field": "name" }, { "type": "button", "col": 5, "value": "查询", "pageName": "search", "btnType": "primary", "htmlType": "submit" }]
	                }],
	                "body": { apiName: 'sjyglSearch', body: { page: 0, size: 10 } }
	            },
	            "table": {
	                "primarykey": "id",
	                "checkbox": "0",
	                "clounms": [{
	                    "title": "序号",
	                    "dataIndex": "",
	                    "key": "",
	                    "width": 50,
	                    "render": function render(text, recode, index) {
	                        var state = _global.Global.getState().dataList.sjygl;
	                        return _react2["default"].createElement(
	                            'div',
	                            null,
	                            index + 1 + state.currentPage * state.pageSize
	                        );
	                    }
	                }, {
	                    "title": "数据源名称",
	                    "dataIndex": "name",
	                    "key": "name",
	                    render: function render(text, record, index) {
	                        return _react2["default"].createElement(
	                            'div',
	                            { title: text, style: { width: _global.Global.getState().framework.columnWidth, cursor: "pointer", display: "inline-block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } },
	                            text
	                        );
	                    }
	                }, {
	                    "title": "IP地址",
	                    "dataIndex": "ip",
	                    "key": "ip"
	                }, {
	                    "title": "端口",
	                    "dataIndex": "port",
	                    "key": "port",
	                    "render": function render(text, record, index) {
	                        if (text && text != "") {
	                            return text;
	                        } else {
	                            return "--";
	                        }
	                    }
	                }, {
	                    "title": "数据源类型",
	                    "dataIndex": "type",
	                    "key": "type",
	                    render: function render(text, record, index) {
	                        if (record.type == 1) {
	                            return '数据库';
	                        } else {
	                            return '文件';
	                        }
	                    }
	                }, {
	                    "title": "操作",
	                    "dataIndex": "operation",
	                    "key": "operation",
	                    "render": ["detail"]
	                }],
	                "body": { apiName: 'sjyglSearch', body: { page: 0, size: 10 } }
	            },
	            "list": {
	                "view": null,
	                "listApi": null,

	                "saveApi": null
	            },
	            "add": {
	                "byDialog": {
	                    title: '新增数据源'
	                },
	                "initData": {
	                    data: { apiName: "sjyglEditDemo" }
	                },
	                "onAddSubmitApi": { "apiName": "sjyglAddData" }
	            },
	            "edit": {
	                "byDialog": {
	                    title: '编辑数据源'
	                },
	                "validate": function validate(_next) {
	                    var selectedId = _global.Global.getState().dataList.sjygl.selectedRows[0];
	                    //调用后台接口
	                    _global.Global.requestApi({ "apiName": "sjyglCheckUse", body: { id: selectedId }, next: function next(action) {
	                            var result2 = action.data;
	                            if (result2) {
	                                _modal2["default"].warning({
	                                    content: '该项已被使用,不允许编辑！'
	                                });
	                            } else {
	                                _next();
	                            }
	                        } }, ["request", "receiv", "failed"], {});
	                },
	                "initData": {
	                    data: { apiName: "sjyglEditDemo1" }
	                },
	                "onUpdateSubmitApi": { "apiName": "sjyglEditData" }
	            },
	            "delete": {
	                "body": { apiName: 'getDeleteData' }
	            },
	            "detail": {
	                "byDialog": {
	                    title: '查看数据源'
	                },
	                "initData": {
	                    data: { apiName: "sjyglDetailDemo" }
	                },
	                "body": { apiName: 'sjyglDetail' }
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