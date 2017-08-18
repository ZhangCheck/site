webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(1752);

	var _modal = __webpack_require__(29);

	var _modal2 = _interopRequireDefault(_modal);

	var _css2 = __webpack_require__(44);

	var _icon = __webpack_require__(19);

	var _icon2 = _interopRequireDefault(_icon);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _global = __webpack_require__(10);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _Utils = __webpack_require__(565);

	var _Utils2 = _interopRequireDefault(_Utils);

	var _dataFormat = __webpack_require__(64);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("dyspList")(function (args, callback) {
	    callback({
	        "success": true,
	        "data": {
	            "id": "dysp",
	            "title": "订阅审核",
	            "headConfig": [{
	                "headName": (0, _Utils2["default"])([{
	                    urlPart: "dysp",
	                    name: "数据库"
	                }, {
	                    urlPart: "dyspWj",
	                    name: "文件"
	                }], args)
	            }],

	            "buttonConfigs": [{ "buttonName": function buttonName(config) {
	                    return _react2["default"].createElement(
	                        'div',
	                        null,
	                        _react2["default"].createElement(
	                            'div',
	                            { className: "configRightBtnGp" },
	                            _react2["default"].createElement(
	                                'div',
	                                null,
	                                _react2["default"].createElement(_icon2["default"], { type: 'resource-look' }),
	                                _react2["default"].createElement(
	                                    'a',
	                                    { onClick: function onClick() {
	                                            var result = (0, _dataFormat.checkSelectId)(_global.Global, "dysp");
	                                            if (!result) {
	                                                _modal2["default"].warning({
	                                                    title: '提示',
	                                                    content: '请选择一条数据！'
	                                                });
	                                                return result;
	                                            }
	                                            window.location.href = "#/aiForm/dysp/getDyspDetail/dyspDetail";
	                                        } },
	                                    '\u8D44\u6E90\u67E5\u770B'
	                                )
	                            ),
	                            _react2["default"].createElement(
	                                'div',
	                                null,
	                                _react2["default"].createElement(_icon2["default"], { type: 'approval-manage' }),
	                                _react2["default"].createElement(
	                                    'a',
	                                    { onClick: function onClick() {
	                                            var result = (0, _dataFormat.checkSelectId)(_global.Global, "dysp");
	                                            if (!result) {
	                                                _modal2["default"].warning({
	                                                    title: '提示',
	                                                    content: '请选择一条数据！'
	                                                });
	                                                return result;
	                                            }
	                                            var result2 = (0, _dataFormat.checkTableOneData)(_global.Global, "dysp", "state", "6");
	                                            if (!result2) {
	                                                _modal2["default"].warning({
	                                                    title: '提示',
	                                                    content: '资源未订阅！'
	                                                });
	                                                return result2;
	                                            }
	                                            var result3 = (0, _dataFormat.checkTableOneData)(_global.Global, "dysp", "state", "1");
	                                            if (!result3) {
	                                                _modal2["default"].warning({
	                                                    title: '提示',
	                                                    content: '资源已通过！'
	                                                });
	                                                return result3;
	                                            }
	                                            var result4 = (0, _dataFormat.checkTableOneData)(_global.Global, "dysp", "state", "2");
	                                            if (!result4) {
	                                                _modal2["default"].warning({
	                                                    title: '提示',
	                                                    content: '资源已拒绝！'
	                                                });
	                                                return result4;
	                                            }
	                                            window.location.href = "#/steperV1/dyspSteper/1";
	                                        } },
	                                    '\u8BA2\u9605\u5BA1\u6279'
	                                )
	                            )
	                        )
	                    );
	                }
	            }],
	            "searchConfig": {
	                "data": [{
	                    "column": 6,
	                    "data": [{ "type": "input", "col": 7, "name": "资源名称/编码", "field": "resName" }, { "type": "treeSelect", "col": 7, "name": "国家主题分类", "field": "themeType", options: { value: "_all_", key: "全部" }, dictId: "themeType", dictApi: { apiName: 'getDictsByType', body: { name: "themeType", type: 1 } } }, { "type": "select", "col": 3, "name": "状态", "field": "state",
	                        "options": [{ value: "_all_", key: "全部" }, { value: "0", key: "待审核" }, { value: 1, key: "通过" }, { value: 2, key: "拒绝" }]
	                    }, { "type": "select", "col": 5, "name": "发布时间", "field": "approvalTime", options: [{ value: "_all_", key: "全部" }, { value: "1", key: "最近一周" }, { value: "2", key: "最近一月" }, { value: "3", key: "最近三月" }, { value: "4", key: "最近一年" }] }, { "type": "button", "col": 1, "value": "查询", "pageName": "search", "btnType": "primary", "htmlType": "submit" }]
	                }],
	                "body": { apiName: 'dyspData', body: { resType: 1, listType: 5 } }
	            },
	            "table": {
	                "primarykey": "subscribeId",
	                "clounms": [{
	                    "title": "资源名称",
	                    "dataIndex": "resName",
	                    "key": "resName",
	                    render: function render(text, record, index) {
	                        return _react2["default"].createElement(
	                            'div',
	                            { title: text, style: { width: _global.Global.getState().framework.columnWidth, cursor: "pointer", display: "inline-block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } },
	                            text
	                        );
	                    }
	                }, {
	                    "title": "资源编码",
	                    "dataIndex": "resCode",
	                    "key": "resCode",
	                    render: function render(text, record, index) {
	                        return _react2["default"].createElement(
	                            'div',
	                            { title: text, style: { width: _global.Global.getState().framework.columnWidth, cursor: "pointer", display: "inline-block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } },
	                            text
	                        );
	                    }
	                }, {
	                    "title": "资源等级",
	                    "dataIndex": "resLevelName",
	                    "key": "resLevelName"
	                }, {
	                    "title": "国家主题分类",
	                    "dataIndex": "themeName",
	                    "key": "themeName"
	                }, {
	                    "title": "部门主题分类",
	                    "dataIndex": "departmentName",
	                    "key": "departmentName"
	                }, {
	                    "title": "更新周期",
	                    "dataIndex": "cycle",
	                    "key": "cycle",
	                    render: function render(text, record, index) {
	                        if (record.cycle && !record.cycle == "") {
	                            return record.cycle;
	                        } else {
	                            return "--";
	                        }
	                    }
	                }, {
	                    "title": "申请单位",
	                    "dataIndex": "applayDept",
	                    "key": "applayDept",
	                    render: function render(text, record, index) {
	                        return _react2["default"].createElement(
	                            'div',
	                            { title: text, style: { width: _global.Global.getState().framework.columnWidth, cursor: "pointer", display: "inline-block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } },
	                            text
	                        );
	                    }
	                }, {
	                    "title": "订阅状态",
	                    "dataIndex": "stateName",
	                    "key": "stateName"
	                }, {
	                    "title": "订阅用户",
	                    "dataIndex": "subscribeDept",
	                    "key": "subscribeDept"
	                }, {
	                    "title": "订阅时间",
	                    "dataIndex": "applyTime",
	                    "key": "applyTime"
	                }],
	                "body": { apiName: 'dyspData', body: { resType: 1, listType: 5 } }
	            },
	            "edit": {
	                "initData": {
	                    data: { apiName: "getDyspEdit" }
	                },
	                "onUpdateSubmitApi": { "apiName": "wgldmlEdit" }
	            },
	            "detail": {
	                "initData": {
	                    data: { apiName: "getDyspDetail" }
	                },
	                "body": { apiName: 'dyspDetail' }
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

/***/ },

/***/ 565:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.dlStateWarning = exports.selectedToFormArgs = undefined;

	var _css = __webpack_require__(1752);

	var _modal = __webpack_require__(29);

	var _modal2 = _interopRequireDefault(_modal);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _global = __webpack_require__(10);

	var _config = __webpack_require__(286);

	var _history = __webpack_require__(32);

	var _history2 = _interopRequireDefault(_history);

	var _dataList = __webpack_require__(30);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	//HeadComponent组件的配置项headConfig里的initListTab
	exports["default"] = function (tabs, args) {
	    /*item.show 用于其他tab的展示标志位，eg部门分类和主题分类*/
	    return tabs.map(function (item, i) {
	        if (_config.resourceType.indexOf(item.name) != -1 || item.show == "1") {
	            return _react2["default"].createElement(
	                'div',
	                { className: "configLeftBtnGp" },
	                _react2["default"].createElement(
	                    'a',
	                    { href: "#/datalistV1/" + item.urlPart + "/list/0/10", className: args.target.props.params.config == item.urlPart ? "configLeftBtnGpA" : "" },
	                    _react2["default"].createElement(
	                        'span',
	                        null,
	                        item.name
	                    )
	                )
	            );
	        }
	    });
	};

	var selectedToFormArgs = exports.selectedToFormArgs = function selectedToFormArgs(datalistId) {
	    return {};
	};

	var dlStateWarning = exports.dlStateWarning = function dlStateWarning(key) {
	    _modal2["default"].warning({
	        title: "提示1",
	        content: "页面刷新，请重新选择要查看的条目。",
	        onOk: function onOk() {
	            setTimeout(function () {
	                var config = _global.Global.getState().routing.path.match(new RegExp('datalistV1/(\\w*)/' + key));
	                _history2["default"].push("datalistV1/" + config[1] + "/list/0/10");
	            }, 500);
	        }
	    });
	};

/***/ }

});