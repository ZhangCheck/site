webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _css = __webpack_require__(2235);

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
	(0, _jsonp2["default"])("wdydZY")(function (args, callback) {
	    var state = _global.Global.getState();
	    var roleCode = state.framework.loginApi.data.loginUserProfileDTO.roles.code;
	    var tabData = [];
	    if (roleCode.indexOf("ADMIN") > 0 || roleCode.indexOf("MANAGER") > 0) {
	        tabData = [{
	            show: "1",
	            urlPart: "wfbdZY",
	            name: "我发布的资源"
	        }, {
	            show: "1",
	            urlPart: "wdydZY",
	            name: "我订阅的资源"
	        }];
	    } else if (roleCode.indexOf("OWNER") > 0) {
	        tabData = [{
	            show: "1",
	            urlPart: "wfbdZY",
	            name: "我发布的资源"
	        }];
	        _history2["default"].push("datalistV1/wfbdZY/list/0/10");
	    } else {
	        tabData = [{
	            show: "1",
	            urlPart: "wdydZY",
	            name: "我订阅的资源"
	        }];
	    }
	    callback({
	        "success": true,
	        "data": {
	            "id": "wdydZY",
	            "title": "交换任务监控",
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
	                                            var result = (0, _dataFormat.checkSelectId)(_global.Global, "wdydZY");
	                                            if (!result) {
	                                                _modal2["default"].warning({
	                                                    content: '请选择一条数据！'
	                                                });
	                                                return result;
	                                            } else {
	                                                var flag = (0, _dataFormat.checkTableOneData2)(_global.Global, 'wdydZY', 'state');
	                                                if (flag) {
	                                                    _modal2["default"].warning({
	                                                        content: '已经是暂停状态！'
	                                                    });
	                                                    return flag;
	                                                }
	                                                var _state = _global.Global.getState();
	                                                var datas = _state.dataList.wdydZY.tableBodyDataApi.data.content;
	                                                var resultId = _state.dataList.wdydZY.selectedRows[0];

	                                                _modal2["default"].confirm({
	                                                    title: '告警信息',
	                                                    content: '确认暂停？',
	                                                    onOk: function onOk() {
	                                                        var body = {};
	                                                        datas.forEach(function (items) {
	                                                            if (resultId == items.subscribeId) {
	                                                                body.id = items.id;
	                                                                body.subEquipmentId = items.subEquipmentId;
	                                                                body.pubEquipmentId = items.pubEquipmentId;
	                                                                body.actionType = 2;
	                                                                body.type = -1;
	                                                            }
	                                                        });
	                                                        _global.Global.requestApi({ "apiName": "startStopTask", body: (0, _extends3["default"])({}, body) }, ["requestResState", "receiveResState", "failedResState"], {});
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
	                                            var result = (0, _dataFormat.checkSelectId)(_global.Global, "wdydZY");
	                                            if (!result) {
	                                                _modal2["default"].warning({
	                                                    content: '请选择一条数据！'
	                                                });
	                                                return result;
	                                            } else {
	                                                var flag = (0, _dataFormat.checkTableOneData2)(_global.Global, 'wdydZY', 'state');
	                                                if (!flag) {
	                                                    _modal2["default"].warning({
	                                                        content: '已经是启用状态！'
	                                                    });
	                                                    return flag;
	                                                }
	                                                var flag2 = (0, _dataFormat.checkTableOneData)(_global.Global, 'wdydZY', 'state', 4);
	                                                if (!flag2) {
	                                                    _modal2["default"].warning({
	                                                        content: '该任务已经被发布方暂停！'
	                                                    });
	                                                    return;
	                                                }
	                                                var _state2 = _global.Global.getState();
	                                                var datas = _state2.dataList.wdydZY.tableBodyDataApi.data.content;
	                                                var resultId = _state2.dataList.wdydZY.selectedRows[0];

	                                                _modal2["default"].confirm({
	                                                    title: '告警信息',
	                                                    content: '确认启用？',
	                                                    onOk: function onOk() {
	                                                        var body = {};
	                                                        datas.forEach(function (items) {
	                                                            if (resultId == items.subscribeId) {
	                                                                body.id = items.id;
	                                                                body.subEquipmentId = items.subEquipmentId;
	                                                                body.pubEquipmentId = items.pubEquipmentId;
	                                                                body.actionType = 2;
	                                                                body.type = 0;
	                                                            }
	                                                        });
	                                                        _global.Global.requestApi({ "apiName": "startStopTask", body: (0, _extends3["default"])({}, body) }, ["requestResState", "receiveResState", "failedResState"], {});
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
	                                            var result = (0, _dataFormat.checkSelectId)(_global.Global, "wdydZY");
	                                            if (!result) {
	                                                _modal2["default"].warning({
	                                                    content: '请选择一条数据！'
	                                                });
	                                                return result;
	                                            } else {
	                                                var _state3 = _global.Global.getState();
	                                                var datas = _state3.dataList.wdydZY.tableBodyDataApi.data.content;
	                                                var resultId = _state3.dataList.wdydZY.selectedRows[0];
	                                                var body = {};
	                                                datas.forEach(function (items) {
	                                                    if (resultId == items.subscribeId) {
	                                                        body.id = items.id;
	                                                        body.subEquipmentId = items.subEquipmentId;
	                                                        body.pubEquipmentId = items.pubEquipmentId;
	                                                        body.resourceType = items.resType;
	                                                    }
	                                                });
	                                                if ((0, _dataFormat.checkTableOneData2)(_global.Global, 'wdydZY', 'state')) {
	                                                    _modal2["default"].warning({
	                                                        title: '提示',
	                                                        content: '资源非运行状态不可调度'
	                                                    });
	                                                    return;
	                                                }
	                                                _global.Global.requestApi({ "apiName": "dispatchTask", body: (0, _extends3["default"])({}, body), next: function next(action) {
	                                                        if (action.success) {
	                                                            _modal2["default"].success({
	                                                                title: '提示',
	                                                                content: '调度任务发送成功!'
	                                                            });
	                                                            //刷新成功，重新跳转页面
	                                                            var lastUrl = _global.Global.getState().routing.path;
	                                                            _history2["default"].push(lastUrl.substring(1));
	                                                        } else {
	                                                            _modal2["default"].warning({
	                                                                title: '提示',
	                                                                content: action.message
	                                                            });
	                                                            //刷新成功，重新跳转页面
	                                                            var _lastUrl = _global.Global.getState().routing.path;
	                                                            _history2["default"].push(_lastUrl.substring(1));
	                                                        }
	                                                    } }, ["requestdispatchTask", "receivedispatchTask", "faileddispatchTask"], {});
	                                            }
	                                        } },
	                                    '\u8C03\u5EA6'
	                                )
	                            )
	                        )
	                    );
	                }
	            }],
	            "searchConfig": {
	                "data": [{
	                    "column": 3,
	                    "formItemRewiring": true,
	                    "data": [{ "type": "input", "col": 5, "name": "任务名称", "field": "taskName" }, { "type": "input", "col": 5, "name": "发布设备", "field": "pubEquipmentName" }, {
	                        "type": "button",
	                        "col": 4,
	                        "value": "查询",
	                        "pageName": "search",
	                        "btnType": "primary",
	                        "htmlType": "submit"
	                    }]
	                }],
	                "body": { apiName: 'findSubscribeResourceByPage' }
	            },
	            "table": {
	                "primarykey": "subscribeId",
	                "clounms": [{
	                    "title": "序号",
	                    "dataIndex": "",
	                    "key": "",
	                    "width": 50,
	                    render: function render(text, record, index) {
	                        var glState = _global.Global.getState().dataList.wdydZY;
	                        return _react2["default"].createElement(
	                            'div',
	                            null,
	                            index + 1 + glState.currentPage * glState.pageSize
	                        );
	                    }
	                }, {
	                    "title": "任务名称",
	                    "dataIndex": "taskName",
	                    "key": "resName"
	                }, {
	                    "title": "类型",
	                    "dataIndex": "resTypeName",
	                    "key": "resTypeName"
	                }, {
	                    "title": "发布设备",
	                    "dataIndex": "pubEquipmentName",
	                    "key": "pubEquipmentName"
	                }, {
	                    "title": "当前状态",
	                    "dataIndex": "stateName",
	                    "key": "stateName"
	                }, {
	                    "title": "下次运行时间",
	                    "dataIndex": "nextTime",
	                    "key": "nextTime",
	                    render: function render(text, record, index) {
	                        var time = text;
	                        if (text) {
	                            return time;
	                        } else {
	                            return "--";
	                        }
	                    }
	                }],
	                "body": { apiName: 'findSubscribeResourceByPage' }
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

	var _css = __webpack_require__(2235);

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