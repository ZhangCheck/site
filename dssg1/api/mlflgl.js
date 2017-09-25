webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(2093);

	var _modal = __webpack_require__(29);

	var _modal2 = _interopRequireDefault(_modal);

	var _css2 = __webpack_require__(44);

	var _icon = __webpack_require__(19);

	var _icon2 = _interopRequireDefault(_icon);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _global = __webpack_require__(10);

	var _history = __webpack_require__(32);

	var _history2 = _interopRequireDefault(_history);

	var _dataFormat = __webpack_require__(64);

	var _dataList = __webpack_require__(30);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _Utils = __webpack_require__(565);

	var _Utils2 = _interopRequireDefault(_Utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("mlflglList")(function (args, callback) {
	    callback({
	        "success": true,
	        "data": {
	            "id": "mlflgl",
	            "title": "目录分类管理",
	            "buttonConfigs": [{ "buttonName": "add" }, { "buttonName": function buttonName(config) {
	                    return _react2["default"].createElement(
	                        'div',
	                        { className: "configRightBtnGp" },
	                        _react2["default"].createElement(
	                            'div',
	                            null,
	                            _react2["default"].createElement(_icon2["default"], { type: 'revise' }),
	                            _react2["default"].createElement(
	                                'a',
	                                { onClick: function onClick() {
	                                        var result = (0, _dataFormat.checkSelectId)(_global.Global, "mlflgl");
	                                        if (!result) {
	                                            _modal2["default"].warning({
	                                                content: '请选择一条数据！'
	                                            });
	                                            return result;
	                                        }
	                                        var selectedId = _global.Global.getState().dataList.mlflgl.selectedRows[0];
	                                        _global.Global.requestApi({ "apiName": "mlflglDetail", body: { id: selectedId }, next: function next(action) {

	                                                var dirCode = action.data[0].dirCode;
	                                                if (["01", "02", "03"].indexOf(dirCode) >= 0) {
	                                                    _modal2["default"].warning({
	                                                        content: '该数据不允许编辑！'
	                                                    });
	                                                    return false;
	                                                } else {
	                                                    _history2["default"].push("/aiForm/mlflgl/getMlflglEdit/mlflglDetail");
	                                                }
	                                            } }, ["request", "receiv", "failed"], {});
	                                    } },
	                                '\u7F16 \u8F91'
	                            )
	                        ),
	                        _react2["default"].createElement(
	                            'div',
	                            null,
	                            _react2["default"].createElement(_icon2["default"], { type: 'delete-green' }),
	                            _react2["default"].createElement(
	                                'a',
	                                { onClick: function onClick() {
	                                        var result = (0, _dataFormat.checkSelectId)(_global.Global, "mlflgl");
	                                        if (!result) {
	                                            _modal2["default"].warning({
	                                                content: '请选择一条数据！'
	                                            });
	                                            return result;
	                                        }
	                                        var selectedId = _global.Global.getState().dataList.mlflgl.selectedRows;
	                                        _global.Global.requestApi({ "apiName": "mlflglDetail", body: { id: selectedId[0] }, next: function next(action) {

	                                                var dirCode = action.data[0].dirCode;
	                                                if (["01", "02", "03"].indexOf(dirCode) >= 0) {
	                                                    _modal2["default"].warning({
	                                                        content: '该数据不允许删除！'
	                                                    });
	                                                    return false;
	                                                } else {
	                                                    _modal2["default"].confirm({
	                                                        title: '告警信息',
	                                                        content: '确认删除？',
	                                                        onOk: function onOk() {
	                                                            _global.Global.requestApi({ apiName: "deletemlflglInfo", body: { id: selectedId[0] }, next: function next(action) {
	                                                                    if (action.data == false) {

	                                                                        _modal2["default"].warning({
	                                                                            content: '目录分类已被使用无法删除！'
	                                                                        });
	                                                                        var lastUrl = _global.Global.getState().routing.path;
	                                                                        _history2["default"].push(lastUrl.substring(1));
	                                                                        return false;
	                                                                    } else {
	                                                                        var _lastUrl = _global.Global.getState().routing.path;
	                                                                        _history2["default"].push(_lastUrl.substring(1));
	                                                                    }
	                                                                } });
	                                                        }
	                                                    });
	                                                }
	                                            } }, ['requestDeleteData', 'receieveDeleteData', 'failedDeleteData'], {});
	                                    } },
	                                '\u5220 \u9664'
	                            )
	                        )
	                    );
	                }
	            }],
	            "searchConfig": {
	                "data": [{
	                    "column": 9,
	                    "data": [{ "type": "input", "col": 7, "name": "目录名称", "field": "dirName" }, { "type": "button", "col": 1, "value": "查询", field: "button", "pageName": "search", "btnType": "primary", "htmlType": "submit" }]
	                }],
	                "body": { apiName: 'mlflglData' }
	            },
	            "table": {
	                "primarykey": "id",
	                "clounms": [{
	                    "title": "目录名称",
	                    "dataIndex": "dirName",
	                    "key": "dirName",
	                    render: function render(text, record, index) {
	                        return _react2["default"].createElement(
	                            'div',
	                            { title: text, style: { width: _global.Global.getState().framework.columnWidth, cursor: "pointer", display: "inline-block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } },
	                            text
	                        );
	                    }
	                }, {
	                    "title": "目录编码",
	                    "dataIndex": "dirCode",
	                    "key": "dirCode",
	                    render: function render(text, record, index) {
	                        return _react2["default"].createElement(
	                            'div',
	                            { title: text, style: { width: _global.Global.getState().framework.columnWidth, cursor: "pointer", display: "inline-block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } },
	                            text
	                        );
	                    }
	                }, {
	                    "title": "描述",
	                    "dataIndex": "dirDesc",
	                    "key": "dirDesc",
	                    render: function render(text, record, index) {
	                        return _react2["default"].createElement(
	                            'div',
	                            { title: text, style: { width: _global.Global.getState().framework.columnWidth, cursor: "pointer", display: "inline-block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } },
	                            text
	                        );
	                    }
	                }],
	                "body": { apiName: 'mlflglData' }
	            },
	            "list": {
	                "view": null,
	                "listApi": null,
	                "saveApi": null
	            },
	            "add": {
	                "initData": {
	                    data: { apiName: "getMlflglEdit" }
	                },
	                "onAddSubmitApi": { "apiName": "mlflglAddInfo" }
	            },
	            "edit": {
	                "initData": {
	                    data: { apiName: "getMlflglEdit" }
	                },
	                "onUpdateSubmitApi": { "apiName": "mlflglEditInfo" }
	            },
	            "delete": {
	                "body": { apiName: 'deletemlflglInfo' }
	            },
	            "detail": {
	                "body": { apiName: 'mlflglDetail' }
	            },
	            "check": {
	                "view": null,
	                "checkApi": null
	            }
	        }
	    });
	});
	/* import './other.html';
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

	var _css = __webpack_require__(2093);

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