webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _getIterator2 = __webpack_require__(37);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _css = __webpack_require__(2358);

	var _modal = __webpack_require__(29);

	var _modal2 = _interopRequireDefault(_modal);

	var _css2 = __webpack_require__(44);

	var _icon = __webpack_require__(19);

	var _icon2 = _interopRequireDefault(_icon);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _DataList = __webpack_require__(104);

	var _DataList2 = _interopRequireDefault(_DataList);

	var _global = __webpack_require__(10);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _Utils = __webpack_require__(565);

	var _Utils2 = _interopRequireDefault(_Utils);

	var _dataFormat = __webpack_require__(64);

	var _interfaces = __webpack_require__(35);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("wfbdzyFile")(function (args, callback) {
	    callback({
	        "success": true,
	        "data": {
	            "id": "wfbdzyFile",
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
	                        null,
	                        _react2["default"].createElement(
	                            'div',
	                            { className: 'configRightBtnGp' },
	                            _react2["default"].createElement(
	                                'div',
	                                null,
	                                _react2["default"].createElement(_icon2["default"], { type: 'resource-look' }),
	                                _react2["default"].createElement(
	                                    'a',
	                                    { onClick: function onClick() {
	                                            var result = (0, _dataFormat.checkSelectId)(_global.Global, "wfbdzyFile");
	                                            if (!result) {
	                                                _modal2["default"].warning({
	                                                    title: '提示',
	                                                    content: '请选择一条数据！'
	                                                });
	                                                return result;
	                                            }
	                                            window.location.href = "#/aiForm/wfbdzyFile/wfbdzyFileZyck/wfbdzyFileZyckData";
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
	                                    { onClick: function onClick() {
	                                            var result = (0, _dataFormat.checkSelectId)(_global.Global, "wfbdzyFile");
	                                            if (result) {
	                                                _modal2["default"].warning({
	                                                    title: '提示',
	                                                    content: '请勿选择数据，请直接发布资源！'
	                                                });
	                                                return result;
	                                            }
	                                            window.location.href = "#/steperV1/wfbdzyFileZyfbSteperDemo/1";
	                                        } },
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
	                                            var selectedId = states.dataList.wfbdzyFile.selectedRows;
	                                            if (!(selectedId && selectedId.length == 1)) {
	                                                _modal2["default"].warning({
	                                                    title: '提示',
	                                                    content: '请选择单条资源进行修改'
	                                                });
	                                                return;
	                                            }
	                                            var result2 = (0, _dataFormat.checkTableOneData1)(_global.Global, "wfbdzyFile", "state");
	                                            if (result2) {
	                                                _global.Global.requestApi({
	                                                    apiName: 'wfbdzyZyxgGetResourceForUpdate',
	                                                    body: {
	                                                        id: _global.Global.getState().dataList.wfbdzyFile.selectedRows[0]
	                                                    },
	                                                    next: function next() {
	                                                        var result = _global.Global.getState().aiForm.wfbdzyFileUpdate;
	                                                        if (result && result.apiData) {
	                                                            window.location.href = '#/steperV1/wfbdzyFileZyxgSteperDemo/1';
	                                                        } else {
	                                                            _modal2["default"].warning({
	                                                                title: '提示',
	                                                                content: '根据Id获取资源信息接口失败'
	                                                            });
	                                                        }
	                                                    }
	                                                }, ['requestTableField', 'receieveTableField', 'failedTableField'], {
	                                                    aiForm: {
	                                                        wfbdzyFileUpdate: {
	                                                            apiData: null
	                                                        }
	                                                    }
	                                                });
	                                                return;
	                                            } else {
	                                                _modal2["default"].warning({
	                                                    content: '资源非发布拒绝、已撤销和过期状态，不能修改!'
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
	                                            var result = (0, _dataFormat.checkSelectId)(_global.Global, 'wfbdzyFile');
	                                            if (!result) {
	                                                _modal2["default"].warning({
	                                                    content: '请选择一条数据！'
	                                                });
	                                                return result;
	                                            }
	                                            var flag = (0, _dataFormat.checkTableOneData)(_global.Global, 'wfbdzyFile', 'state', '9');
	                                            if (!flag) {
	                                                _modal2["default"].warning({
	                                                    title: '提示',
	                                                    content: '资源已过期,不允许此操作！'
	                                                });
	                                                return;
	                                            }
	                                            var result2 = (0, _dataFormat.checkTableOneData)(_global.Global, "wfbdzyFile", "enableFlag", "-1");
	                                            var result3 = (0, _dataFormat.checkTableOneData)(_global.Global, "wfbdzyFile", "state", "2");
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
	                                                    var selectedId = _global.Global.getState().dataList.wfbdzyFile.selectedRows;
	                                                    _global.Global.requestApi((0, _extends3["default"])({}, _interfaces.wfbdzySjkUpdateState, { body: (0, _extends3["default"])({}, _interfaces.wfbdzySjkUpdateState.body, { id: selectedId, type: -1 }) }), ["requestResState", "receiveResState", "failedResState"], {});
	                                                },
	                                                onCancel: function onCancel() {
	                                                    console.log("暂停 exit!!!");
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
	                                            var result = (0, _dataFormat.checkSelectId)(_global.Global, "wfbdzyFile");
	                                            if (!result) {
	                                                _modal2["default"].warning({
	                                                    title: '提示',
	                                                    content: '请选择一条数据！'
	                                                });
	                                                return result;
	                                            }
	                                            var flag = (0, _dataFormat.checkTableOneData)(_global.Global, 'wfbdzyFile', 'state', '9');
	                                            if (!flag) {
	                                                _modal2["default"].warning({
	                                                    title: '提示',
	                                                    content: '资源已过期,不允许此操作！'
	                                                });
	                                                return;
	                                            }
	                                            var result2 = (0, _dataFormat.checkTableOneData)(_global.Global, "wfbdzyFile", "enableFlag", "0");
	                                            var result3 = (0, _dataFormat.checkTableOneData)(_global.Global, "wfbdzyFile", "state", "2");
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
	                                                    var selectedId = _global.Global.getState().dataList.wfbdzyFile.selectedRows;
	                                                    _global.Global.requestApi((0, _extends3["default"])({}, _interfaces.wfbdzySjkUpdateState, {
	                                                        body: (0, _extends3["default"])({}, _interfaces.wfbdzySjkUpdateState.body, { id: selectedId, type: 0 }) }), ["requestResState", "receiveResState", "failedResState"], {});
	                                                },
	                                                onCancel: function onCancel() {
	                                                    console.log("启用 exit!!!");
	                                                }
	                                            });
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
	                                            var result = states.dataList.wfbdzyFile.selectedRows;
	                                            if (!(result && result.length == 1)) {
	                                                _modal2["default"].warning({
	                                                    title: '提示',
	                                                    content: '请选择一条资源进行删除'
	                                                });
	                                            } else {
	                                                if (!(0, _dataFormat.checkTableOneData3)(_global.Global, 'wfbdzyFile', 'state')) {
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
	                                                                apiName: "deleteResource",
	                                                                body: { id: result[0] },
	                                                                next: function next(action) {
	                                                                    if (action.success) {} else {
	                                                                        _modal2["default"].warning({
	                                                                            title: '提示',
	                                                                            content: '删除失败'
	                                                                        });
	                                                                    }
	                                                                    //刷新成功，重新跳转页面
	                                                                    /* let lastUrl = Global.getState().routing.path;
	                                                                    history.push(lastUrl.substring(1));  */
	                                                                }
	                                                            }, ['requestResState', 'receiveResState', 'failedResState'], {});
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
	                                            var result = (0, _dataFormat.checkSelectId)(_global.Global, "wfbdzyFile");
	                                            if (!result) {
	                                                _modal2["default"].warning({
	                                                    title: '提示',
	                                                    content: '请选择一条数据！'
	                                                });
	                                                return result;
	                                            }
	                                            var result2 = (0, _dataFormat.checkTableOneData)(_global.Global, "wfbdzyFile", "state", "7");
	                                            if (!result2) {
	                                                _modal2["default"].warning({
	                                                    title: '提示',
	                                                    content: '资源已撤销！'
	                                                });
	                                                return result2;
	                                            }
	                                            var flag = (0, _dataFormat.checkTableOneData)(_global.Global, 'wfbdzyFile', 'state', '9');
	                                            if (!flag) {
	                                                _modal2["default"].warning({
	                                                    title: '提示',
	                                                    content: '资源已过期,不允许此操作！'
	                                                });
	                                                return;
	                                            }
	                                            var result3 = (0, _dataFormat.checkTableOneData)(_global.Global, "wfbdzyFile", "state", "2");
	                                            if (result3) {
	                                                _modal2["default"].warning({
	                                                    content: '资源非发布状态！'
	                                                });
	                                                return false;
	                                            }
	                                            window.location.href = "#/aiForm/wfbdzyFile/wfbdzyFileCxgx/wfbdzyFileZyckData";
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
	                                            var result = (0, _dataFormat.checkSelectId)(_global.Global, "wfbdzyFile");
	                                            if (!result) {
	                                                _modal2["default"].warning({
	                                                    title: '提示',
	                                                    content: '请选择一条数据！'
	                                                });
	                                                return result;
	                                            }
	                                            var flag = (0, _dataFormat.checkTableOneData)(_global.Global, 'wfbdzyFile', 'state', '9');
	                                            if (!flag) {
	                                                _modal2["default"].warning({
	                                                    title: '提示',
	                                                    content: '资源已过期,不允许此操作！'
	                                                });
	                                                return;
	                                            }
	                                            var result2 = (0, _dataFormat.checkTableOneData)(_global.Global, "wfbdzyFile", "state", "2");
	                                            if (result2) {
	                                                _modal2["default"].warning({
	                                                    content: '资源非发布状态！'
	                                                });
	                                                return false;
	                                            }
	                                            var states = _global.Global.getState();
	                                            var values = states.dataList.wfbdzyFile.tableBodyDataApi && states.dataList.wfbdzyFile.tableBodyDataApi.data ? states.dataList.wfbdzyFile.tableBodyDataApi.data.content : [];
	                                            var action = 1;
	                                            var _iteratorNormalCompletion = true;
	                                            var _didIteratorError = false;
	                                            var _iteratorError = undefined;

	                                            try {
	                                                for (var _iterator = (0, _getIterator3["default"])(values), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                                                    var data = _step.value;

	                                                    if (data.id == states.dataList.wfbdzyFile.selectedRows[0]) {
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
	                                                window.location.href = "#/aiForm/wfbdzyFile/wfbdzyFileCxdy/wfbdzyFileZyckData";
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
	                    "data": [{ "type": "input", "col": 6, "name": "资源名称/编码", "field": "resName" }, { "type": "treeSelect", "col": 6, "name": "国家主题分类", "field": "themeType", options: { value: "_all_", key: "全部" }, dictId: "themeType", dictApi: { apiName: 'getDictsByType', body: { name: "themeType", type: 1 } } }, { "type": "select", "col": 5, "name": "状态", "field": "state",
	                        "options": [{ value: "_all_", key: "全部" }, { value: 1, key: "待审核" }, { value: 2, key: "发布" }, { value: 3, key: "发布拒绝" }, { value: 6, key: "待撤销" }, { value: 7, key: "已撤销" }, { value: 9, key: "已过期" }]
	                    }, { "type": "select", "col": 5, "name": "发布时间", "field": "applyTime", options: [{ value: "_all_", key: "全部" }, { value: "1", key: "最近一周" }, { value: "2", key: "最近一月" }, { value: "3", key: "最近三月" }, { value: "4", key: "最近一年" }] }, { "type": "button", "col": 2, "value": "查询", "pageName": "search", "btnType": "primary", "htmlType": "submit" }]
	                }],
	                "body": { apiName: 'wfbdzyFileTableData' }
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
	                    "key": "resCode"
	                }, {
	                    "title": "资源等级",

	                    "dataIndex": "resLevel",
	                    "key": "resLevel",
	                    render: function render(text, record, index) {
	                        if (record.resLevel == 1) {
	                            return '一级';
	                        } else if (record.resLevel == 2) {
	                            return '二级';
	                        } else if (record.resLevel == 3) {
	                            return '三级';
	                        }
	                    }
	                }, {
	                    "title": "国家主题分类",
	                    "dataIndex": "themeType",
	                    "key": "themeType",
	                    render: function render(text, record, index) {
	                        return record.themeName;
	                    }
	                }, {
	                    "title": "部门主题分类",
	                    "dataIndex": "departmentType",
	                    "key": "departmentType",
	                    render: function render(text, record, index) {
	                        return record.departmentName;
	                    }
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
	                    "dataIndex": "state",
	                    "key": "state ",
	                    render: function render(text, record, index) {
	                        if (record.state == 1) {
	                            return '待审核';
	                        } else if (record.state == 2) {
	                            return '发布';
	                        } else if (record.state == 3) {
	                            return '发布拒绝';
	                        } else if (record.state == 6) {
	                            return '待撤销';
	                        } else if (record.state == 7) {
	                            return '已撤销';
	                        } else if (record.state == 9) {
	                            return '已过期';
	                        }
	                    }
	                }, {
	                    "title": "启停状态",
	                    "dataIndex": "enableFlag",
	                    "key": "enableFlag ",
	                    render: function render(text, record, index) {
	                        if (record.state == '2') {
	                            switch (text) {
	                                case "0":
	                                    return "已启用";
	                                case "-1":
	                                    return "已暂停";
	                            }
	                        } else {
	                            return '--';
	                        }
	                    }
	                }, {
	                    "title": "订阅用户",
	                    "dataIndex": "subscripPereosns",
	                    "key": "subscripPereosns ",
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
	                "body": { apiName: 'wfbdzyFileTableData' }
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
	}); /**
	     * Created by liy on 2016/12/20 0020.
	     *
	     */

/***/ },

/***/ 565:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.dlStateWarning = exports.selectedToFormArgs = undefined;

	var _css = __webpack_require__(2358);

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