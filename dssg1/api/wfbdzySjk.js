webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _getIterator2 = __webpack_require__(37);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _css = __webpack_require__(2476);

	var _modal = __webpack_require__(29);

	var _modal2 = _interopRequireDefault(_modal);

	var _css2 = __webpack_require__(44);

	var _icon = __webpack_require__(19);

	var _icon2 = _interopRequireDefault(_icon);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _Utils = __webpack_require__(565);

	var _Utils2 = _interopRequireDefault(_Utils);

	var _global = __webpack_require__(10);

	var _history = __webpack_require__(32);

	var _history2 = _interopRequireDefault(_history);

	var _interfaces = __webpack_require__(35);

	var _dataFormat = __webpack_require__(64);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("wfbdzySjk")(function (args, callback) {
	    callback({
	        "success": true,
	        "data": {
	            "id": "wfbdzySjk",
	            "title": "我发布的资源",
	            "headConfig": [{

	                "headName": (0, _Utils2["default"])([{
	                    urlPart: "wfbdzySjk",
	                    name: "数据库"
	                }, {
	                    urlPart: "wfbdzyFile",
	                    name: "文件"
	                }, {
	                    urlPart: "wfbdzyApi",
	                    name: "API"
	                }], args)
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
	                                _react2["default"].createElement(_icon2["default"], { type: 'resource-look' }),
	                                _react2["default"].createElement(
	                                    'a',
	                                    { onClick: function onClick() {
	                                            var states = _global.Global.getState();
	                                            var result = states.dataList.wfbdzySjk.selectedRows;
	                                            if (!(result && result.length == 1)) {
	                                                _modal2["default"].warning({
	                                                    title: '提示',
	                                                    content: '请选择一条资源进行查看'
	                                                });
	                                            } else {
	                                                window.location.href = '#/aiForm/wfbdzySjk/wfbdzySjkZyck/wfbdzySjkZyckData';
	                                            }
	                                        } },
	                                    '\u8D44\u6E90\u67E5\u770B'
	                                )
	                            ),
	                            _react2["default"].createElement(
	                                'div',
	                                null,
	                                _react2["default"].createElement(_icon2["default"], { type: 'resource-publish' }),
	                                _react2["default"].createElement(
	                                    'a',
	                                    { href: '#/steperV1/wfbdzySjkZyfbSteperDemo/1' },
	                                    '\u8D44\u6E90\u53D1\u5E03'
	                                )
	                            ),
	                            _react2["default"].createElement(
	                                'div',
	                                null,
	                                _react2["default"].createElement(_icon2["default"], { type: 'revise' }),
	                                _react2["default"].createElement(
	                                    'a',
	                                    { onClick: function onClick() {
	                                            var states = _global.Global.getState();
	                                            var selectedId = states.dataList.wfbdzySjk.selectedRows;
	                                            if (!(selectedId && selectedId.length == 1)) {
	                                                _modal2["default"].warning({
	                                                    title: '提示',
	                                                    content: '请选择单条资源进行修改'
	                                                });
	                                                return;
	                                            }
	                                            var result2 = (0, _dataFormat.checkTableOneData1)(_global.Global, "wfbdzySjk", "state");
	                                            if (result2) {
	                                                _global.Global.requestApi({
	                                                    apiName: 'wfbdzySjkUpdateResourceAllMsg',
	                                                    body: {
	                                                        id: _global.Global.getState().dataList.wfbdzySjk.selectedRows[0]
	                                                    },
	                                                    next: function next(action) {
	                                                        if (action && action.data) {
	                                                            window.location.href = '#/steperV1/wfbdzySjkZyxgSteperDemo/1';
	                                                        } else {
	                                                            _modal2["default"].warning({
	                                                                title: '提示',
	                                                                content: '根据Id获取资源信息接口失败'
	                                                            });
	                                                        }
	                                                    }
	                                                }, ['requestTableField', 'receieveTableField', 'failedTableField'], {});
	                                                return;
	                                            } else {
	                                                _modal2["default"].warning({
	                                                    content: '资源非发布拒绝、已撤销和过期状态，不能修改！'
	                                                });
	                                                return;
	                                            }
	                                        } },
	                                    '\u8D44\u6E90\u4FEE\u6539'
	                                )
	                            ),
	                            _react2["default"].createElement(
	                                'div',
	                                null,
	                                _react2["default"].createElement(_icon2["default"], { type: 'pause' }),
	                                _react2["default"].createElement(
	                                    'a',
	                                    { onClick: function onClick() {
	                                            var result = (0, _dataFormat.checkSelectId)(_global.Global, 'wfbdzySjk');
	                                            if (!result) {
	                                                _modal2["default"].warning({
	                                                    content: '请选择一条数据！'
	                                                });
	                                                return result;
	                                            }
	                                            var flag = (0, _dataFormat.checkTableOneData)(_global.Global, 'wfbdzySjk', 'state', '9');
	                                            if (!flag) {
	                                                _modal2["default"].warning({
	                                                    title: '提示',
	                                                    content: '资源已过期,不允许此操作！'
	                                                });
	                                                return;
	                                            }
	                                            var result2 = (0, _dataFormat.checkTableOneData)(_global.Global, "wfbdzySjk", "enableFlag", "-1");
	                                            var result3 = (0, _dataFormat.checkTableOneData)(_global.Global, "wfbdzySjk", "state", "2");
	                                            if (result3) {
	                                                _modal2["default"].warning({
	                                                    content: '非发布状态不可启停！'
	                                                });
	                                                return false;
	                                            } else if (!result2) {
	                                                _modal2["default"].warning({
	                                                    content: '资源已暂停！'
	                                                });
	                                                return result2;
	                                            }
	                                            _modal2["default"].confirm({
	                                                title: '告警信息',
	                                                content: '确认暂停？',
	                                                onOk: function onOk() {
	                                                    var selectedId = _global.Global.getState().dataList.wfbdzySjk.selectedRows[0];
	                                                    _global.Global.requestApi({ "apiName": "wfbdzySjkUpdateState", body: { id: selectedId, type: -1 } }, ["requestResState", "receiveResState", "failedResState"], {});
	                                                },
	                                                onCancel: function onCancel() {
	                                                    console.log("delete exit!!!");
	                                                }
	                                            });
	                                        } },
	                                    '\u6682\u505C'
	                                )
	                            ),
	                            _react2["default"].createElement(
	                                'div',
	                                null,
	                                _react2["default"].createElement(_icon2["default"], { type: 'start' }),
	                                _react2["default"].createElement(
	                                    'a',
	                                    { onClick: function onClick() {
	                                            {
	                                                var result = (0, _dataFormat.checkSelectId)(_global.Global, 'wfbdzySjk');
	                                                if (!result) {
	                                                    _modal2["default"].warning({
	                                                        content: '请选择一条数据！'
	                                                    });
	                                                    return result;
	                                                }
	                                                var flag = (0, _dataFormat.checkTableOneData)(_global.Global, 'wfbdzySjk', 'state', '9');
	                                                if (!flag) {
	                                                    _modal2["default"].warning({
	                                                        title: '提示',
	                                                        content: '资源已过期,不允许此操作！'
	                                                    });
	                                                    return;
	                                                }
	                                                var result2 = (0, _dataFormat.checkTableOneData)(_global.Global, "wfbdzySjk", "enableFlag", "0");
	                                                var result3 = (0, _dataFormat.checkTableOneData)(_global.Global, "wfbdzySjk", "state", "2");
	                                                if (result3) {
	                                                    _modal2["default"].warning({
	                                                        content: '非发布状态不可启停！'
	                                                    });
	                                                    return false;
	                                                } else if (!result2) {
	                                                    _modal2["default"].warning({
	                                                        content: '资源已启用！'
	                                                    });
	                                                    return result2;
	                                                }
	                                                _modal2["default"].confirm({
	                                                    title: '告警信息',
	                                                    content: '确认启用？',
	                                                    onOk: function onOk() {
	                                                        var selectedId = _global.Global.getState().dataList.wfbdzySjk.selectedRows[0];
	                                                        _global.Global.requestApi({
	                                                            "apiName": "wfbdzySjkUpdateState",
	                                                            body: { id: selectedId, type: 0 }
	                                                        }, ["requestResState", "receiveResState", "failedResState"], {});
	                                                    },
	                                                    onCancel: function onCancel() {
	                                                        console.log("delete exit!!!");
	                                                    }
	                                                });
	                                            }
	                                        } },
	                                    '\u542F\u7528'
	                                )
	                            ),
	                            _react2["default"].createElement(
	                                'div',
	                                null,
	                                _react2["default"].createElement(_icon2["default"], { type: 'delete-green' }),
	                                _react2["default"].createElement(
	                                    'a',
	                                    { onClick: function onClick() {
	                                            var states = _global.Global.getState();
	                                            var result = states.dataList.wfbdzySjk.selectedRows;
	                                            if (!(result && result.length == 1)) {
	                                                _modal2["default"].warning({
	                                                    title: '提示',
	                                                    content: '请选择一条资源进行删除'
	                                                });
	                                            } else {
	                                                if (!(0, _dataFormat.checkTableOneData3)(_global.Global, 'wfbdzySjk', 'state')) {
	                                                    _modal2["default"].warning({
	                                                        title: '提示',
	                                                        content: '只有发布拒绝、已撤消、已过期的才可以删除'
	                                                    });
	                                                } else {
	                                                    _modal2["default"].confirm({
	                                                        title: '告警信息',
	                                                        content: '确认删除资源？',
	                                                        onOk: function onOk() {
	                                                            _global.Global.requestApi({
	                                                                "apiName": "deleteResource",
	                                                                body: { id: result[0] },
	                                                                next: function next(action) {
	                                                                    if (action.success) {
	                                                                        _modal2["default"].success({
	                                                                            title: '提示',
	                                                                            content: '删除成功'
	                                                                        });
	                                                                    } else {
	                                                                        _modal2["default"].warning({
	                                                                            title: '提示',
	                                                                            content: '删除失败'
	                                                                        });
	                                                                    }
	                                                                    //刷新成功，重新跳转页面
	                                                                    var lastUrl = _global.Global.getState().routing.path;
	                                                                    _history2["default"].push(lastUrl.substring(1));
	                                                                }
	                                                            }, ['requestClearLogs', 'receieveClearLogs', 'failedClearLogs'], {});
	                                                        },
	                                                        onCancel: function onCancel() {
	                                                            console.log("reset exit!!!");
	                                                        }
	                                                    });
	                                                }
	                                            }
	                                        } },
	                                    '\u8D44\u6E90\u5220\u9664'
	                                )
	                            ),
	                            _react2["default"].createElement(
	                                'div',
	                                null,
	                                _react2["default"].createElement(_icon2["default"], { type: 'cancel-share' }),
	                                _react2["default"].createElement(
	                                    'a',
	                                    { onClick: function onClick() {
	                                            var result = (0, _dataFormat.checkSelectId)(_global.Global, "wfbdzySjk");
	                                            if (!result) {
	                                                _modal2["default"].warning({
	                                                    content: '请选择一条数据！'
	                                                });
	                                                return result;
	                                            }
	                                            var flag = (0, _dataFormat.checkTableOneData)(_global.Global, 'wfbdzySjk', 'state', '9');
	                                            if (!flag) {
	                                                _modal2["default"].warning({
	                                                    title: '提示',
	                                                    content: '资源已过期,不允许此操作！'
	                                                });
	                                                return;
	                                            }
	                                            var result2 = (0, _dataFormat.checkTableOneData)(_global.Global, "wfbdzySjk", "state", "2");
	                                            if (result2) {
	                                                _modal2["default"].warning({
	                                                    content: '资源非发布状态！'
	                                                });
	                                                return false;
	                                            }

	                                            var result3 = (0, _dataFormat.checkTableOneData)(_global.Global, "wfbdzySjk", "state", "7");
	                                            if (!result3) {
	                                                _modal2["default"].warning({
	                                                    title: '提示',
	                                                    content: '资源已撤销！'
	                                                });
	                                                return result3;
	                                            }
	                                            window.location.href = "#/aiForm/wfbdzySjk/wfbdzySjkCxgx/wfbdzySjkZyckData";
	                                        } },
	                                    '\u64A4\u9500\u5171\u4EAB'
	                                )
	                            ),
	                            _react2["default"].createElement(
	                                'div',
	                                null,
	                                _react2["default"].createElement(_icon2["default"], { type: 'cancel-subscribe' }),
	                                _react2["default"].createElement(
	                                    'a',
	                                    { onClick: function onClick() {
	                                            var result = (0, _dataFormat.checkSelectId)(_global.Global, "wfbdzySjk");
	                                            if (!result) {
	                                                _modal2["default"].warning({
	                                                    content: '请选择一条数据！'
	                                                });
	                                                return result;
	                                            }
	                                            var flag = (0, _dataFormat.checkTableOneData)(_global.Global, 'wfbdzySjk', 'state', '9');
	                                            if (!flag) {
	                                                _modal2["default"].warning({
	                                                    title: '提示',
	                                                    content: '资源已过期,不允许此操作！'
	                                                });
	                                                return;
	                                            }
	                                            var result2 = (0, _dataFormat.checkTableOneData)(_global.Global, "wfbdzySjk", "state", "2");
	                                            if (result2) {
	                                                _modal2["default"].warning({
	                                                    content: '资源非发布状态！'
	                                                });
	                                                return false;
	                                            }
	                                            var states = _global.Global.getState();
	                                            var values = states.dataList.wfbdzySjk.tableBodyDataApi && states.dataList.wfbdzySjk.tableBodyDataApi.data ? states.dataList.wfbdzySjk.tableBodyDataApi.data.content : [];
	                                            var action = 1;
	                                            var _iteratorNormalCompletion = true;
	                                            var _didIteratorError = false;
	                                            var _iteratorError = undefined;

	                                            try {
	                                                for (var _iterator = (0, _getIterator3["default"])(values), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                                                    var data = _step.value;

	                                                    if (data.id == states.dataList.wfbdzySjk.selectedRows[0]) {
	                                                        if (!data.subscripPereosns) {
	                                                            action = 0;
	                                                            break;
	                                                        }
	                                                    }
	                                                }
	                                            } catch (err) {
	                                                _didIteratorError = true;
	                                                _iteratorError = err;
	                                            } finally {
	                                                try {
	                                                    if (!_iteratorNormalCompletion && _iterator["return"]) {
	                                                        _iterator["return"]();
	                                                    }
	                                                } finally {
	                                                    if (_didIteratorError) {
	                                                        throw _iteratorError;
	                                                    }
	                                                }
	                                            }

	                                            if (action == 0) {
	                                                _modal2["default"].warning({
	                                                    content: '资源未订阅！'
	                                                });
	                                                return false;
	                                            } else {
	                                                window.location.href = "#/aiForm/wfbdzySjk/wfbdzySjkCxdy/wfbdzySjkZyckData";
	                                            }
	                                        } },
	                                    '\u64A4\u9500\u8BA2\u9605'
	                                )
	                            )
	                        )
	                    );
	                }
	            }],
	            "searchConfig": {
	                "data": [{
	                    "column": 6,
	                    "data": [{ "type": "input",
	                        "col": 6,
	                        "name": "资源名称/编码",
	                        "field": "resName"
	                    }, {
	                        "type": "treeSelect",
	                        "col": 6,
	                        "name": "国家主题分类",
	                        "field": "themeType",
	                        options: { value: "_all_", key: "全部" },
	                        dictId: "themeType",
	                        dictApi: { apiName: 'getDictsByType', body: { name: "themeType", type: 1 } }
	                    }, {
	                        "type": "select",
	                        "col": 6,
	                        "name": "状态",
	                        "field": "state",
	                        options: [{ value: "_all_", key: "全部" }, { value: "1", key: "待审核" }, { value: "2", key: "发布" }, { value: "3", key: "发布拒绝" }, { value: "6", key: "待撤销" }, { value: "7", key: "已撤销" }, { value: "9", key: "已过期" }]
	                    }, {
	                        "type": "select",
	                        "col": 4,
	                        "name": "发布时间",
	                        "field": "applyTime",
	                        options: [{ value: "_all_", key: "全部" }, { value: "1", key: "最近一周" }, {
	                            value: "2",
	                            key: "最近一月"
	                        }, { value: "3", key: "最近三月" }, { value: "4", key: "最近一年" }]
	                    }, {
	                        "type": "select",
	                        "col": 6,
	                        "name": "目录分类",
	                        "field": "resClassDirId",
	                        options: { value: "_all_", key: "全部" },
	                        dictId: "resClassDirId",
	                        dictApi: { apiName: 'getDictsByType', body: { name: "resClassDirId", type: 7 } }
	                    }, {
	                        "type": "button",
	                        "col": 3,
	                        "value": "查询",
	                        "pageName": "search",
	                        "btnType": "primary",
	                        "htmlType": "submit"

	                    }]
	                }],
	                "body": { apiName: 'wfbdzySjkSearch' }
	            },
	            "table": {
	                "primarykey": "id",
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
	                    "title": "目录分类",
	                    "dataIndex": "resClassDirName",
	                    "key": "resClassDirName"
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
	                    "key": "cycle ",
	                    render: function render(text, record, index) {
	                        if (record.cycle && !record.cycle == "") {
	                            return record.cycle;
	                        } else {
	                            return "--";
	                        }
	                    }

	                }, {
	                    "title": "资源状态",
	                    "dataIndex": "stateName",
	                    "key": "stateName"
	                }, {
	                    "title": "启停状态",
	                    "dataIndex": "enableFlag",
	                    "key": "enableFlag ",
	                    render: function render(text, record, index) {
	                        if (record.state == "2") {
	                            switch (text) {
	                                case "0":
	                                    return "已启用";
	                                case "-1":
	                                    return "已暂停";
	                            }
	                        } else {
	                            return "--";
	                        }
	                    }
	                }, {
	                    "title": "订阅设备",
	                    "dataIndex": "subscripPereosns",
	                    "key": "subscripPereosns",
	                    render: function render(text, record, index) {
	                        if (record.subscripPereosns == "" || record.subscripPereosns == null) {
	                            return "--";
	                        } else {
	                            return _react2["default"].createElement(
	                                'div',
	                                { title: text, style: { width: _global.Global.getState().framework.columnWidth, cursor: "pointer", display: "inline-block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } },
	                                text
	                            );
	                        }
	                    }
	                }, {
	                    "title": "发布人",
	                    "dataIndex": "publishPerson",
	                    "key": "publishPerson"
	                }, {
	                    "title": "发布时间",
	                    "dataIndex": "applyTime",
	                    "key": "applyTime",
	                    render: function render(text, _render, index) {
	                        if (text && text != "") {
	                            return text.substring(0, 16);
	                        }
	                    }
	                }],
	                "body": { apiName: 'wfbdzySjkTableData' }
	            },
	            "list": {
	                "view": null,
	                "listApi": null,
	                "saveApi": null
	            },
	            "add": {},
	            "edit": {},
	            "delete": {},
	            "detail": {},
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

	var _css = __webpack_require__(2476);

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