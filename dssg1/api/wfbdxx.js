webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(2338);

	var _modal = __webpack_require__(29);

	var _modal2 = _interopRequireDefault(_modal);

	var _css2 = __webpack_require__(44);

	var _icon = __webpack_require__(19);

	var _icon2 = _interopRequireDefault(_icon);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _global = __webpack_require__(10);

	var _Utils = __webpack_require__(565);

	var _Utils2 = _interopRequireDefault(_Utils);

	var _dataFormat = __webpack_require__(64);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("wfbdxx")(function (args, callback) {
	    var state = _global.Global.getState();
	    callback({
	        "success": true,
	        "data": {
	            "title": "消息管理",
	            "headConfig": [{

	                "headName": (0, _Utils2["default"])([{
	                    show: "1",
	                    urlPart: "wsddxx",
	                    name: "我收到的消息"
	                }, {
	                    show: "1",
	                    urlPart: "wfbdxx",
	                    name: "我发布的消息"
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
	                                _react2["default"].createElement(_icon2["default"], { type: 'pause-circle-o' }),
	                                _react2["default"].createElement(
	                                    'a',
	                                    { onClick: function onClick() {
	                                            var state = _global.Global.getState();
	                                            var userIds = state.dataList.yhgl.selectedRows;
	                                            if (userIds && userIds.length == 1) {
	                                                var dataSource = state.dataList.yhgl.tableBodyDataApi.data.content;
	                                                dataSource.forEach(function (items) {
	                                                    if (items.id == userIds) {
	                                                        if (items.state == '-1') {
	                                                            _modal2["default"].warning({
	                                                                title: '提示',
	                                                                content: '用户已经是停用状态'
	                                                            });
	                                                            return;
	                                                        } else {
	                                                            _global.Global.requestApi({
	                                                                apiName: 'startOrStopSysUser',
	                                                                body: {
	                                                                    id: userIds[0],
	                                                                    state: '-1'
	                                                                }
	                                                            }, ["requestResState", "receiveResState", "failedResState"], {});
	                                                            return;
	                                                        }
	                                                    }
	                                                });
	                                            } else {
	                                                _modal2["default"].warning({
	                                                    title: '提示',
	                                                    content: '请选择单条信息进行操作!!'
	                                                });
	                                            }
	                                        } },
	                                    '\u53D1\u5E03\u65B0\u6D88\u606F'
	                                )
	                            )
	                        )
	                    );
	                }
	            }, { "buttonName": "delete" }],
	            "searchConfig": {
	                "data": [{
	                    "column": 4,
	                    "data": [{ "type": "input", "col": 8, "name": "消息内容", "field": "loginName" }, {
	                        "type": "select",
	                        "col": 6,
	                        "name": "消息类别",
	                        "field": "roleCode",
	                        options: [{ value: "_all_", key: "全部" }, { key: '待办事项', value: 'ROLE_DATA_MANAGER' }, { key: '系统消息', value: 'ROLE_SHARE_MANAGER' }, { key: '告警消息', value: 'ROLE_LOG_MANAGER' }]
	                    }, { "type": "button", "col": 3, "value": "查询", "pageName": "search", "btnType": "primary", "htmlType": "submit" }]
	                }],
	                "body": { apiName: 'findSysMessage', body: { page: 0, size: 10 } }
	            },
	            "table": {
	                "primarykey": "id",
	                "clounms": [{
	                    "title": "序号",
	                    "dataIndex": "",
	                    "key": "",
	                    render: function render(text, _render, index) {
	                        return index + 1;
	                    }
	                }, {
	                    "title": "发件人",
	                    "dataIndex": "createUser",
	                    "key": "createUser"
	                }, {
	                    "title": "消息内容",
	                    "dataIndex": "content",
	                    "key": "content"
	                }, {
	                    "title": "时间",
	                    "dataIndex": "createTime",
	                    "key": "createTime"
	                }],
	                "body": { apiName: 'findSysMessage', body: { page: 0, size: 10 } }
	            },
	            "list": {
	                "view": null,
	                "listApi": null,

	                "saveApi": null
	            },
	            "delete": {
	                "body": { apiName: 'deleteSysUser' }
	            },
	            "detail": {
	                "initData": {
	                    data: { apiName: "sjyglDetailDemo" }
	                },
	                "body": { apiName: 'findSysUserById' }
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

/***/ }

});