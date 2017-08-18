webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(2336);

	var _dropdown = __webpack_require__(506);

	var _dropdown2 = _interopRequireDefault(_dropdown);

	var _css2 = __webpack_require__(2338);

	var _modal = __webpack_require__(29);

	var _modal2 = _interopRequireDefault(_modal);

	var _css3 = __webpack_require__(44);

	var _icon = __webpack_require__(19);

	var _icon2 = _interopRequireDefault(_icon);

	var _css4 = __webpack_require__(1020);

	var _menu = __webpack_require__(1016);

	var _menu2 = _interopRequireDefault(_menu);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _Utils = __webpack_require__(565);

	var _Utils2 = _interopRequireDefault(_Utils);

	var _global = __webpack_require__(10);

	var _dataFormat = __webpack_require__(64);

	var _dataList = __webpack_require__(30);

	var _history = __webpack_require__(32);

	var _history2 = _interopRequireDefault(_history);

	var _StepContainerV = __webpack_require__(287);

	var _StepContainerV2 = _interopRequireDefault(_StepContainerV);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * Created by liy on 2016/12/20 0020.
	 */
	(0, _jsonp2["default"])("wfbdzyApi")(function (args, callback) {

	    var menu = _react2["default"].createElement(
	        _menu2["default"],
	        null,
	        _react2["default"].createElement(
	            _menu2["default"].Item,
	            { key: '0' },
	            _react2["default"].createElement(
	                'a',
	                { href: '#/steperV1/wfbdzyApiBdsjySteperDemo/1' },
	                '\u672C\u5730\u6570\u636E\u6E90\u63A5\u53E3'
	            )
	        ),
	        _react2["default"].createElement(
	            _menu2["default"].Item,
	            { key: '1' },
	            _react2["default"].createElement(
	                'a',
	                { href: '#/steperV1/wfbdzyApiDsfjjkSteperDemo/1' },
	                '\u7B2C\u4E09\u65B9\u63A5\u53E3'
	            )
	        )
	    );

	    callback({
	        "success": true,
	        "data": {
	            "id": "wfbdzyApi",
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
	            "buttonConfigs": [{ "buttonName": function buttonName(config) {
	                    return _react2["default"].createElement(
	                        'div',
	                        { className: "configRightBtnGp" },
	                        _react2["default"].createElement(
	                            'div',
	                            null,
	                            _react2["default"].createElement(_icon2["default"], { type: 'resource-look' }),
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
	                                        _history2["default"].push("/aiForm/wfbdzyApi/wfbdzyApiZyck/wfbdzyApiZyckData");
	                                    } },
	                                '\u8D44\u6E90\u67E5\u770B'
	                            )
	                        ),
	                        _react2["default"].createElement(
	                            'div',
	                            null,
	                            _react2["default"].createElement(
	                                _dropdown2["default"],
	                                { overlay: menu },
	                                _react2["default"].createElement(
	                                    'a',
	                                    { className: 'ant-dropdown-link', href: 'javascript:void(0)' },
	                                    _react2["default"].createElement(_icon2["default"], { type: 'menu-unfold' }),
	                                    '\u8D44\u6E90\u53D1\u5E03'
	                                )
	                            )
	                        ),
	                        _react2["default"].createElement(
	                            'div',
	                            null,
	                            _react2["default"].createElement(_icon2["default"], { type: 'pause' }),
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
	                                        var result3 = (0, _dataFormat.checkTableOneData)(_global.Global, "wfbdzyApi", "state", "2");
	                                        if (result3) {
	                                            _modal2["default"].warning({
	                                                content: '资源非发布状态,不允许此操作！'
	                                            });
	                                            return false;
	                                        }
	                                        var result2 = (0, _dataFormat.checkTableOneData)(_global.Global, "wfbdzyApi", "enableFlag", "-1");
	                                        if (!result2) {
	                                            _modal2["default"].warning({
	                                                content: '资源已暂停！'
	                                            });
	                                            return result2;
	                                        }

	                                        _modal2["default"].confirm({
	                                            title: '告警信息',
	                                            content: '确认暂停？',
	                                            onOk: function onOk() {
	                                                var selectedId = _global.Global.getState().dataList.wfbdzyApi.selectedRows;
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
	                                        var result = (0, _dataFormat.checkSelectId)(_global.Global, "wfbdzyApi");
	                                        if (!result) {
	                                            _modal2["default"].warning({
	                                                content: '请选择一条数据！'
	                                            });
	                                            return result;
	                                        }
	                                        var result3 = (0, _dataFormat.checkTableOneData)(_global.Global, "wfbdzyApi", "state", "2");
	                                        if (result3) {
	                                            _modal2["default"].warning({
	                                                content: '资源非发布状态,不允许此操作！'
	                                            });
	                                            return false;
	                                        }
	                                        var result2 = (0, _dataFormat.checkTableOneData)(_global.Global, "wfbdzyApi", "enableFlag", "0");
	                                        if (!result2) {
	                                            _modal2["default"].warning({
	                                                content: '资源已启用！'
	                                            });
	                                            return result2;
	                                        }

	                                        _modal2["default"].confirm({
	                                            title: '告警信息',
	                                            content: '确认启用？',
	                                            onOk: function onOk() {
	                                                var selectedId = _global.Global.getState().dataList.wfbdzyApi.selectedRows;
	                                                _global.Global.requestApi({ "apiName": "wfbdzySjkUpdateState", body: { id: selectedId, type: 0 } }, ["requestResState", "receiveResState", "failedResState"], {});
	                                            },
	                                            onCancel: function onCancel() {
	                                                console.log("delete exit!!!");
	                                            }
	                                        });
	                                    } },
	                                '\u542F\u7528'
	                            )
	                        ),
	                        _react2["default"].createElement(
	                            'div',
	                            null,
	                            _react2["default"].createElement(_icon2["default"], { type: 'revise' }),
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

	                                        var result2 = (0, _dataFormat.checkTableOneData1)(_global.Global, "wfbdzyApi", "state");
	                                        if (!result2) {
	                                            _modal2["default"].warning({
	                                                content: '资源非发布拒绝、已撤销和过期状态，不能编辑！'
	                                            });
	                                            return result2;
	                                        }
	                                        var selectedId = _global.Global.getState().dataList.wfbdzyApi.selectedRows;

	                                        var result1 = (0, _dataFormat.checkTableOneData)(_global.Global, "wfbdzyApi", "apiSource", "3d");
	                                        if (!result1) {
	                                            _global.Global.requestApi({ "apiName": "wfbdzyApiZybjData", body: { id: selectedId[0] }, next: function next(action) {
	                                                    _global.Global.mark({ aiForm: { wfbdzyApiDsfjkTxysjStep1: { detailMsgDataApi: action } } });
	                                                } }, {}, {});
	                                            window.location.href = "#/steperV1/wfbdzyApiDsfjjkUpdateSteperDemo/1";
	                                        } else {
	                                            _global.Global.requestApi({ "apiName": "wfbdzyApiZybjData", body: { id: selectedId[0] }, next: function next(action) {
	                                                    _global.Global.mark({ dataList: { wfbdzyApiBdsjyXzsjyStep1: { detailMsgDataApi: action } } });
	                                                } }, {}, {});
	                                            window.location.href = "#/steperV1/wfbdzyApiBdsjySteperUpdateDemo/1";
	                                        }
	                                    } },
	                                '\u8D44\u6E90\u4FEE\u6539'
	                            )
	                        ),
	                        _react2["default"].createElement(
	                            'div',
	                            null,
	                            _react2["default"].createElement(_icon2["default"], { type: 'cancel-share' }),
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
	                                        var result2 = (0, _dataFormat.checkTableOneData)(_global.Global, "wfbdzyApi", "state", "2");
	                                        if (result2) {
	                                            _modal2["default"].warning({
	                                                content: '资源非发布状态！'
	                                            });
	                                            return false;
	                                        }
	                                        var result1 = (0, _dataFormat.checkTableOneData)(_global.Global, "wfbdzyApi", "enableFlag", "-1");
	                                        if (!result1) {
	                                            _modal2["default"].warning({
	                                                content: '资源已暂停，不允许此操作！'
	                                            });
	                                            return false;
	                                        }

	                                        _history2["default"].push("/aiForm/wfbdzyApi/wfbdzyApiCxgx/wfbdzyApiZyckData");
	                                    } },
	                                '\u64A4\u9500\u5171\u4EAB'
	                            )
	                        ),
	                        _react2["default"].createElement(
	                            'div',
	                            null,
	                            _react2["default"].createElement(_icon2["default"], { type: 'delete-green' }),
	                            _react2["default"].createElement(
	                                'a',
	                                { onClick: function onClick() {
	                                        var result = (0, _dataFormat.checkSelectId)(_global.Global, "wfbdzyApi");
	                                        if (!result) {
	                                            _modal2["default"].warning({
	                                                content: '请选择一条数据！'
	                                            });
	                                            return result;
	                                        } else {
	                                            if (!(0, _dataFormat.checkTableOneData3)(_global.Global, 'wfbdzyApi', 'state')) {
	                                                _modal2["default"].warning({
	                                                    title: '提示',
	                                                    content: '只有发布拒绝、已撤消、已过期的才可以删除'
	                                                });
	                                            } else {
	                                                var selectId = _global.Global.getState().dataList.wfbdzyApi.selectedRows;
	                                                _modal2["default"].confirm({
	                                                    title: '告警信息',
	                                                    content: '确认删除资源？',
	                                                    onOk: function onOk() {
	                                                        _global.Global.requestApi({
	                                                            apiName: "deleteResource",
	                                                            body: { id: selectId[0] },
	                                                            next: function next(action) {
	                                                                if (action.success) {} else {
	                                                                    _modal2["default"].warning({
	                                                                        title: '提示',
	                                                                        content: '删除失败'
	                                                                    });
	                                                                }
	                                                                //刷新成功，重新跳转页面
	                                                                /*let lastUrl = Global.getState().routing.path;
	                                                                history.push(lastUrl.substring(1));*/
	                                                            }
	                                                        }, ["requestResState", "receiveResState", "failedResState"], {});
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
	                        )
	                    );
	                }
	            }],
	            "searchConfig": {
	                "data": [{
	                    "column": 6,
	                    "data": [{ "type": "input", "col": 7, "name": "资源名称/编码", "field": "resName" }, { "type": "treeSelect", "col": 7, "name": "国家主题分类", "field": "themeType", options: { value: "_all_", key: "全部" }, dictId: "themeType", dictApi: { apiName: 'getDictsByType', body: { name: "themeType", type: 1 } } }, { "type": "select", "col": 3, "name": "状态", "field": "state", options: [{ value: "_all_", key: "全部" }, { value: "1", key: "待审核" }, { value: "2", key: "发布" }, { value: "3", key: "发布拒绝" }, { value: "6", key: "待撤销" }, { value: "7", key: "已撤销" }, { value: "9", key: "已过期" }] }, { "type": "select", "col": 5, "name": "发布时间", "field": "applyTime", options: [{ value: "_all_", key: "全部" }, { value: "1", key: "最近一周" }, { value: "2", key: "最近一月" }, { value: "3", key: "最近三月" }, { value: "4", key: "最近一年" }] }, { "type": "button", "col": 1, "value": "查询", "pageName": "search", "btnType": "primary", "htmlType": "submit" }]
	                }],
	                "body": { apiName: 'wfbdzyApiTableData', body: { resType: 3 } }
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
	                    "dataIndex": "resLevelName",
	                    "key": "resLevelName"
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
	                    "title": "数据来源",
	                    "dataIndex": "apiPublishDataJson",
	                    "key": "apiPublishDataJson "
	                }, {
	                    "title": "资源状态",
	                    "dataIndex": "stateName",
	                    "key": "stateName "
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
	                    "title": "发布人",
	                    "dataIndex": "publishPerson",
	                    "key": "publishPerson "
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
	                "body": { apiName: 'wfbdzyApiTableData', body: { resType: 3 } }
	            },
	            "list": {
	                "view": null,
	                "listApi": null,
	                "saveApi": null
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

	var _css = __webpack_require__(2338);

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

/***/ },

/***/ 1016:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = undefined;

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(6);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(5);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _rcMenu = __webpack_require__(148);

	var _rcMenu2 = _interopRequireDefault(_rcMenu);

	var _openAnimation = __webpack_require__(457);

	var _openAnimation2 = _interopRequireDefault(_openAnimation);

	var _warning = __webpack_require__(106);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function noop() {}

	var Menu = function (_React$Component) {
	    (0, _inherits3["default"])(Menu, _React$Component);

	    function Menu(props) {
	        (0, _classCallCheck3["default"])(this, Menu);

	        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

	        _this.handleClick = function (e) {
	            _this.setOpenKeys([]);
	            _this.props.onClick(e);
	        };
	        _this.handleOpenChange = function (openKeys) {
	            _this.setOpenKeys(openKeys);
	            _this.props.onOpenChange(openKeys);
	        };
	        (0, _warning2["default"])(!('onOpen' in props || 'onClose' in props), '`onOpen` and `onClose` are removed, please use `onOpenChange` instead.');
	        _this.state = {
	            openKeys: []
	        };
	        return _this;
	    }

	    Menu.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if (this.props.mode === 'inline' && nextProps.mode !== 'inline') {
	            this.switchModeFromInline = true;
	        }
	        if ('openKeys' in nextProps) {
	            this.setOpenKeys(nextProps.openKeys);
	        }
	    };

	    Menu.prototype.setOpenKeys = function setOpenKeys(openKeys) {
	        if (!('openKeys' in this.props)) {
	            this.setState({ openKeys: openKeys });
	        }
	    };

	    Menu.prototype.render = function render() {
	        var openAnimation = this.props.openAnimation || this.props.openTransitionName;
	        if (!openAnimation) {
	            switch (this.props.mode) {
	                case 'horizontal':
	                    openAnimation = 'slide-up';
	                    break;
	                case 'vertical':
	                    // When mode switch from inline
	                    // submenu should hide without animation
	                    if (this.switchModeFromInline) {
	                        openAnimation = '';
	                        this.switchModeFromInline = false;
	                    } else {
	                        openAnimation = 'zoom-big';
	                    }
	                    break;
	                case 'inline':
	                    openAnimation = _openAnimation2["default"];
	                    break;
	                default:
	            }
	        }
	        var props = {};
	        var className = this.props.className + ' ' + this.props.prefixCls + '-' + this.props.theme;
	        if (this.props.mode !== 'inline') {
	            // 这组属性的目的是
	            // 弹出型的菜单需要点击后立即关闭
	            // 另外，弹出型的菜单的受控模式没有使用场景
	            props = {
	                openKeys: this.state.openKeys,
	                onClick: this.handleClick,
	                onOpenChange: this.handleOpenChange,
	                openTransitionName: openAnimation,
	                className: className
	            };
	        } else {
	            props = {
	                openAnimation: openAnimation,
	                className: className
	            };
	        }
	        return _react2["default"].createElement(_rcMenu2["default"], (0, _extends3["default"])({}, this.props, props));
	    };

	    return Menu;
	}(_react2["default"].Component);

	exports["default"] = Menu;

	Menu.Divider = _rcMenu.Divider;
	Menu.Item = _rcMenu.Item;
	Menu.SubMenu = _rcMenu.SubMenu;
	Menu.ItemGroup = _rcMenu.ItemGroup;
	Menu.defaultProps = {
	    prefixCls: 'ant-menu',
	    onClick: noop,
	    onOpenChange: noop,
	    className: '',
	    theme: 'light'
	};
	module.exports = exports['default'];

/***/ },

/***/ 1020:
[1543, 1530],

/***/ 1530:
16

});