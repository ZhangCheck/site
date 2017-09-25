webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(2785);

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
	(0, _jsonp2["default"])("wsddxx")(function (args, callback) {
	    var state = _global.Global.getState();
	    callback({
	        "success": true,
	        "data": {
	            "id": "wsddxx",
	            "title": "消息管理",
	            "buttonConfigs": [{
	                "buttonName": function buttonName(config) {
	                    return _react2["default"].createElement(
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
	                                        var userIds = state.dataList.xxgl.selectedRows;
	                                        if (userIds && userIds.length > 0) {
	                                            _global.Global.requestApi({
	                                                apiName: 'updateSysMessageIsRead',
	                                                body: userIds

	                                            }, ["requestResState", "receiveResState", "failedResState"], {});
	                                        } else {
	                                            _modal2["default"].warning({
	                                                title: '提示',
	                                                content: '请选择信息进行操作!!'
	                                            });
	                                        }
	                                    } },
	                                '\u6807\u8BB0\u5DF2\u8BFB'
	                            )
	                        )
	                    );
	                }
	            }, { "buttonName": "delete" }],
	            "searchConfig": {
	                "data": [{
	                    "column": 4,
	                    "formItemRewiring": true,
	                    "data": [{ "type": "input", "col": 8, "name": "消息内容", "field": "content" }, {
	                        "type": "select",
	                        "col": 6,
	                        "name": "消息类别",
	                        "field": "type",
	                        options: [{ value: "_all_", key: "全部" }, { key: '待办事项', value: '4' }, { key: '系统消息', value: '2' }, { key: '告警消息', value: '3' }]
	                    }, { "type": "button", "col": 3, "value": "查询", "pageName": "search", "btnType": "primary", "htmlType": "submit" }]
	                }],
	                "body": { apiName: 'findSysMessage' }
	            },
	            "table": {
	                "primarykey": "id",
	                "clounms": [{
	                    "title": "序号",
	                    "dataIndex": "",
	                    "key": "",
	                    "width": 50,
	                    "render": function render(text, recode, index) {
	                        var state = _global.Global.getState().dataList.xxgl;
	                        return _react2["default"].createElement(
	                            'div',
	                            null,
	                            index + 1 + state.currentPage * state.pageSize
	                        );
	                    }
	                }, {
	                    "title": "消息内容",
	                    "dataIndex": "type",
	                    "key": "type",
	                    "render": function render(text, _render, index) {
	                        //let styleInfo = render.state == "1"?{fontWeight:"bold",float:"left"}:{float:"left"};
	                        /*case "1" : return <div style={styleInfo}>{"【通知公告】"+render.content}</div>;*/
	                        var content = "";
	                        if (text == "2") {
	                            content = "【系统消息】" + _render.content;
	                        } else if (text == "3") {
	                            content = "【告警消息】" + _render.content;
	                        } else {
	                            content = "【待办事项】" + _render.content;
	                        }

	                        if (_render.state == "1") {
	                            return _react2["default"].createElement(
	                                'div',
	                                { title: content, style: { fontWeight: "bold", "float": "left" }, onClick: function onClick() {
	                                        _global.Global.requestApi({
	                                            apiName: 'updateSysMessageIsRead',
	                                            body: [_render.id]
	                                        }, ["request", "receive", "failed"], {});
	                                        if (text != "4") {
	                                            var lastUrl = _global.Global.getState().routing.path;
	                                            _history2["default"].push(lastUrl.substring(1));
	                                        } else {
	                                            _history2["default"].push(_render.menuClassification);
	                                        }
	                                    } },
	                                content
	                            );
	                        } else {
	                            return _react2["default"].createElement(
	                                'div',
	                                { title: content, style: { "float": "left" }, onClick: function onClick() {
	                                        if (text == "4") {
	                                            _history2["default"].push(_render.menuClassification);
	                                        }
	                                    } },
	                                content
	                            );
	                        }
	                    }
	                }, {
	                    "title": "时间",
	                    "dataIndex": "createTime",
	                    "key": "createTime"
	                }],
	                "body": { apiName: 'findSysMessage' }
	            },
	            "delete": {
	                "body": { apiName: 'deleteSysMessage' }
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

	var _css = __webpack_require__(2785);

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