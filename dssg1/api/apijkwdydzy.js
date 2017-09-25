webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _css = __webpack_require__(1671);

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

	var _Utils = __webpack_require__(565);

	var _Utils2 = _interopRequireDefault(_Utils);

	var _dataFormat = __webpack_require__(64);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/* import './other.html';
	 import React from 'react';
	 import ReactDOM from 'react-dom'; */
	(0, _jsonp2["default"])("apijkwdydzy")(function (args, callback) {
	    var state = _global.Global.getState();
	    var roleCode = state.framework.loginApi.data.loginUserProfileDTO.roles.code;
	    var tabData = [];
	    tabData = [{
	        show: "1",
	        urlPart: "apijkwfbdzy",
	        name: "我发布的资源"
	    }, {
	        show: "1",
	        urlPart: "apijkwdydzy",
	        name: "我订阅的资源"
	    }];
	    callback({
	        "success": true,
	        "data": {
	            "id": "apijkwdydzy",
	            "title": "API接口监控",
	            "headConfig": [{
	                "headName": (0, _Utils2["default"])(tabData, args)
	            }],
	            "buttonConfigs": [{
	                "buttonName": function buttonName(config) {
	                    return _react2["default"].createElement(
	                        'div',
	                        { style: { "float": "left" } },
	                        _react2["default"].createElement(
	                            'div',
	                            { className: "configRightBtnGp" },
	                            _react2["default"].createElement(
	                                'div',
	                                null,
	                                _react2["default"].createElement(_icon2["default"], { type: 'pause-circle-o' }),
	                                _react2["default"].createElement(
	                                    'a',
	                                    { onClick: function onClick() {
	                                            var result = (0, _dataFormat.checkSelectId)(_global.Global, "apijkwdydzy");
	                                            if (!result) {
	                                                _modal2["default"].warning({
	                                                    content: '请选择一条数据！'
	                                                });
	                                                return result;
	                                            } else {
	                                                var flag1 = (0, _dataFormat.checkTableOneData)(_global.Global, 'apijkwdydzy', 'state', -1);
	                                                var flag2 = (0, _dataFormat.checkTableOneData)(_global.Global, 'apijkwdydzy', 'stateSubs', -1);
	                                                if (!flag2) {
	                                                    _modal2["default"].warning({
	                                                        content: '已经是暂停状态！'
	                                                    });
	                                                    return false;
	                                                } else if (!flag1) {
	                                                    _modal2["default"].warning({
	                                                        content: '该服务任务已经被发布方暂停！'
	                                                    });
	                                                    return false;
	                                                }
	                                                var _state = _global.Global.getState();
	                                                var selecetId = _state.dataList.apijkwdydzy.selectedRows;
	                                                _modal2["default"].confirm({
	                                                    title: '告警信息',
	                                                    content: '确认暂停？',
	                                                    onOk: function onOk() {
	                                                        var body = { id: selecetId[0], stateSubs: -1, actionType: 2 };
	                                                        _global.Global.requestApi({ "apiName": "startStopService", body: (0, _extends3["default"])({}, body) }, ["requestResState", "receiveResState", "failedResState"], {});
	                                                    },
	                                                    onCancel: function onCancel() {
	                                                        console.log("delete exit!!!");
	                                                    }
	                                                });
	                                            }
	                                        } },
	                                    '\u6682\u505C'
	                                )
	                            )
	                        )
	                    );
	                }
	            }, {

	                "buttonName": function buttonName(config) {
	                    return _react2["default"].createElement(
	                        'div',
	                        { style: { "float": "left" } },
	                        _react2["default"].createElement(
	                            'div',
	                            { className: "configRightBtnGp" },
	                            _react2["default"].createElement(
	                                'div',
	                                null,
	                                _react2["default"].createElement(_icon2["default"], { type: 'pause-circle-o' }),
	                                _react2["default"].createElement(
	                                    'a',
	                                    { onClick: function onClick() {
	                                            var result = (0, _dataFormat.checkSelectId)(_global.Global, "apijkwdydzy");
	                                            if (!result) {
	                                                _modal2["default"].warning({
	                                                    content: '请选择一条数据！'
	                                                });
	                                                return result;
	                                            } else {
	                                                var flag1 = (0, _dataFormat.checkTableOneData)(_global.Global, 'apijkwdydzy', 'state', 0);
	                                                var flag2 = (0, _dataFormat.checkTableOneData)(_global.Global, 'apijkwdydzy', 'stateSubs', 0);
	                                                if (!flag1 && !flag2) {
	                                                    _modal2["default"].warning({
	                                                        content: '已经是启用状态！'
	                                                    });
	                                                    return false;
	                                                } else if (flag1) {
	                                                    _modal2["default"].warning({
	                                                        content: '该服务任务只能由暂停方启用！'
	                                                    });
	                                                    return false;
	                                                }

	                                                var _state2 = _global.Global.getState();
	                                                var selecetId = _state2.dataList.apijkwdydzy.selectedRows;
	                                                _modal2["default"].confirm({
	                                                    title: '告警信息',
	                                                    content: '确认启用？',
	                                                    onOk: function onOk() {
	                                                        var body = { id: selecetId[0], stateSubs: 0, actionType: 2 };
	                                                        _global.Global.requestApi({ "apiName": "startStopService", body: (0, _extends3["default"])({}, body) }, ["requestResState", "receiveResState", "failedResState"], {});
	                                                    },
	                                                    onCancel: function onCancel() {
	                                                        console.log("delete exit!!!");
	                                                    }
	                                                });
	                                            }
	                                        } },
	                                    '\u542F\u7528'
	                                )
	                            )
	                        )
	                    );
	                }
	            }],
	            "searchConfig": {
	                "data": [{
	                    "column": 6,
	                    "formItemRewiring": true,
	                    "data": [{ "type": "input", "col": 6, "name": "API接口服务", "field": "taskName" }, { "type": "input", "col": 6, "name": "发布设备", "field": "subEquipmentName" }, {
	                        "type": "button",
	                        "col": 2,
	                        "value": "查询",
	                        "pageName": "search",
	                        "btnType": "primary",
	                        "htmlType": "submit"
	                    }]
	                }],
	                "body": { apiName: 'findPublishResourceByPage' }
	            },
	            "table": {
	                "primarykey": "id",
	                "clounms": [{
	                    "title": "序号",
	                    "dataIndex": "index",
	                    "key": "index",
	                    "width": 50,
	                    "render": function render(text, recode, index) {
	                        var state = _global.Global.getState().dataList.apijkwdydzy;
	                        return _react2["default"].createElement(
	                            'div',
	                            null,
	                            index + 1 + state.currentPage * state.pageSize
	                        );
	                    }
	                }, {
	                    "title": "API接口服务",
	                    "dataIndex": "taskName",
	                    "key": "resName"
	                }, {
	                    "title": "类型",
	                    "dataIndex": "apiSource",
	                    "key": "apiSource",
	                    "render": function render(text, record, index) {
	                        if (record.apiSource == "3d") {
	                            return "第三方API";
	                        } else if (record.apiSource == "local") {
	                            return "本地数据源";
	                        }
	                    }
	                }, {
	                    "title": "发布设备",
	                    "dataIndex": "pubEquipmentName",
	                    "key": "pubEquipmentName"
	                }, {
	                    "title": "当前状态",
	                    "dataIndex": "stateName",
	                    "key": "stateName",
	                    "render": function render(text, record, index) {
	                        if (record.state == 0 && record.stateSubs == 0) {
	                            return "启用";
	                        } else if (record.state == -1) {
	                            return "发布方暂停";
	                        } else if (record.stateSubs == -1) {
	                            return "订阅方暂停";
	                        }
	                    }
	                }, {
	                    "title": "请求时段",
	                    "dataIndex": "requestTime",
	                    "key": "requestTime"
	                }, {
	                    "title": "每日最大请求次数",
	                    "dataIndex": "requestNumber",
	                    "key": "requestNumber",
	                    "render": function render(text, record, index) {
	                        if (record.requestNumber == null) {
	                            return "-";
	                        } else {
	                            return record.requestNumber;
	                        }
	                    }
	                }, {
	                    "title": "当日请求次数",
	                    "dataIndex": "currentNumber",
	                    "key": "currentNumber"
	                }],
	                "body": { apiName: 'mySubscribeResourceByPage' }
	            },
	            "list": {
	                "view": null,
	                "listApi": null,

	                "saveApi": null
	            },

	            "add": {
	                "initData": {
	                    data: { apiName: "jsglAdd" }
	                },
	                "onAddSubmitApi": { "apiName": "saveSysRoles" }
	            },
	            "edit": {
	                "initData": {
	                    data: { apiName: "jsglEdit" }
	                },
	                "onUpdateSubmitApi": { "apiName": "updateSysRoles" }
	            },
	            "delete": {
	                "body": { apiName: 'deleteSysRoles' }
	            },
	            "detail": {
	                "initData": {
	                    data: { apiName: "jsglEdit" }
	                },
	                "body": { apiName: 'findSysRolesByIdInfo' }
	            },
	            "check": {
	                "view": null,
	                "checkApi": null
	            }
	        }
	    });
	});

/***/ },

/***/ 565:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.dlStateWarning = exports.selectedToFormArgs = undefined;

	var _css = __webpack_require__(1671);

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