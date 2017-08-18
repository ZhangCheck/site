webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(2776);

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

	var _history = __webpack_require__(32);

	var _history2 = _interopRequireDefault(_history);

	var _interfaces = __webpack_require__(35);

	var _dataFormat = __webpack_require__(64);

	var _tableLayout = __webpack_require__(1130);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _Utils = __webpack_require__(565);

	var _Utils2 = _interopRequireDefault(_Utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("wscdzyWj")(function (args, callback) {
	    callback({
	        "success": true,
	        "data": {
	            "id": "wscdzyWj",
	            "title": "我收藏的资源",
	            "headConfig": [{
	                "headName": (0, _Utils2["default"])([{
	                    urlPart: "wscdzySjk",
	                    name: "数据库"
	                }, {
	                    urlPart: "wscdzyWj",
	                    name: "文件"
	                }, {
	                    urlPart: "wscdzyApi",
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
	                            _react2["default"].createElement(_icon2["default"], { type: 'delete-green' }),
	                            _react2["default"].createElement(
	                                'a',
	                                { onClick: function onClick() {
	                                        var selectedId = _global.Global.getState().dataList.wscdzyWj.selectedRows;
	                                        if (selectedId && selectedId.length == 1) {
	                                            _modal2["default"].confirm({
	                                                title: '告警信息',
	                                                content: '确认删除？',
	                                                onOk: function onOk() {
	                                                    _global.Global.requestApi({
	                                                        apiName: "unCollectionResource",
	                                                        body: { id: selectedId[0] },
	                                                        next: function next(action) {
	                                                            //刷新成功，重新跳转页面
	                                                            /*let lastUrl = Global.getState().routing.path;
	                                                             history.push(lastUrl.substring(1));*/
	                                                        }
	                                                    }, ["requestResState", "receiveResState", "failedResState"], {});
	                                                }
	                                            });
	                                        } else {
	                                            _modal2["default"].warning({
	                                                content: '请选择一条数据操作！'
	                                            });
	                                        }
	                                    } },
	                                '\u5220 \u9664'
	                            )
	                        )
	                    );
	                }
	            }],
	            "searchConfig": {
	                "data": [{
	                    "column": 2,
	                    "data": [{ "type": "input", labelCol: "18", wrapperCol: "5", "col": 22, "name": "资源名称/发布单位/国家主题分类", "field": "resName" }, { "type": "button",
	                        "col": 1,
	                        "value": "查询",
	                        "pageName": "search",
	                        "btnType": "primary",
	                        "htmlType": "submit" }]
	                }],
	                "body": { apiName: 'wscdzyTableData', body: { action_type: "2", resType: "2" } }
	            },

	            "table": {
	                "primarykey": "id",
	                "showHeader": false,
	                "clounms": [{
	                    "title": "",
	                    "dataIndex": "resName",
	                    "key": "resName",
	                    "width": "200px",
	                    "render": _tableLayout.column9Render
	                }, {
	                    "title": "",
	                    "dataIndex": "resCode",
	                    "key": "resCode",
	                    "render": _tableLayout.column10Render
	                }, {
	                    "title": "",
	                    "dataIndex": "resLevelName",
	                    "key": "resLevelName",
	                    "render": _tableLayout.column11Render
	                }],
	                "body": { apiName: 'wscdzyTableData', body: { action_type: "2", resType: "2" } }
	            }
	        }
	    });
	}); /**
	     * Created by zhaoxl on 2017/4/14 0014.
	     */
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

	var _css = __webpack_require__(2776);

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

/***/ 1130:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _css = __webpack_require__(282);

	var _rate = __webpack_require__(280);

	var _rate2 = _interopRequireDefault(_rate);

	var _css2 = __webpack_require__(2776);

	var _modal = __webpack_require__(29);

	var _modal2 = _interopRequireDefault(_modal);

	var _css3 = __webpack_require__(44);

	var _icon = __webpack_require__(19);

	var _icon2 = _interopRequireDefault(_icon);

	var _defineProperty2 = __webpack_require__(7);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	exports.column1Render = column1Render;
	exports.column2Render = column2Render;
	exports.column2To3Render = column2To3Render;
	exports.column3Render = column3Render;
	exports.column4Render = column4Render;
	exports.column5Render = column5Render;
	exports.column6Render = column6Render;
	exports.column7Render = column7Render;
	exports.column8Render = column8Render;
	exports.column11Render = column11Render;
	exports.column12Render = column12Render;
	exports.column9Render = column9Render;
	exports.column10Render = column10Render;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _global = __webpack_require__(10);

	var _history = __webpack_require__(32);

	var _history2 = _interopRequireDefault(_history);

	var _dataFormat = __webpack_require__(64);

	var _DataList = __webpack_require__(104);

	var _DataList2 = _interopRequireDefault(_DataList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 *
	 * @param text
	 * @param record
	 * @param index
	 * @returns {XML}
	 */
	var getHtmlArg = function getHtmlArg(name, defaultValue) {
		var match = window.location.href.match(new RegExp(name + '=([^&#]*)'));
		return match ? decodeURIComponent(match[1]) : defaultValue;
	};
	var server = 'dssg';
	var portalUrl = "dssg-portal";
	if (process) {
		if (false) server = 'http://192.168.0.254:8080/dssg/';
	}
	try {
		var serverUrl = getHtmlArg('server', server);
		if (serverUrl.indexOf("api") >= 0 && serverUrl.indexOf("dssg") < 0) {
			/* let index = server.indexOf("api");
	   server = server.substring(0,index)+"dssg/";*/
			server = serverUrl.replace("api", "dssg");
			portalUrl = serverUrl.replace("api", "dssg-portal");
		} else if (serverUrl.indexOf("dssg") >= 0) {
			var index = serverUrl.indexOf("dssg");
			server = serverUrl.substring(0, index);
			var root = window.location.href.match(/(.*)\/dssg\//)[1];
			portalUrl = root + "/dssg-portal/";
		}
	} catch (ex) {}

	function column1Render(text, record, index) {
		return _react2["default"].createElement(
			'div',
			{ className: '' + _DataList2["default"].columnOne },
			_react2["default"].createElement(
				'div',
				{ className: '' + _DataList2["default"].columnTime },
				record.applyTime ? record.applyTime.substring(0, 16) : '2017-2-9  10:10'
			),
			_react2["default"].createElement(
				'div',
				null,
				_react2["default"].createElement('img', { alt: record.resName, src: record.pictureUrl ? server + record.pictureUrl : "images/timg.png", style: { width: '120px', height: '120px', borderRadius: "8px", border: 'none' } })
			)
		);
	}
	/**
	 * 第二列渲染
	 * @param text
	 * @param record
	 * @param index
	 * @returns {XML}
	 */
	function column2Render(text, record, index) {

		return _react2["default"].createElement(
			'div',
			{ className: '' + _DataList2["default"].columnSecond },
			_react2["default"].createElement(
				'div',
				{ title: record.resName ? record.resName : '深圳市规划保护范围及建设控制地带', className: '' + _DataList2["default"].columnSecondTitle },
				record.resName ? record.resName : '深圳市规划保护范围及建设控制地带'
			),
			_react2["default"].createElement(
				'div',
				{ className: 'clearfix' },
				_react2["default"].createElement(
					'p',
					null,
					'\u7B80\u4ECB\uFF1A'
				),
				_react2["default"].createElement(
					'p',
					{ title: record.abstracts ? record.abstracts : '内容简介无' },
					record.abstracts ? record.abstracts : '内容简介无'
				)
			),
			_react2["default"].createElement(
				'div',
				null,
				'\u6570\u636E\u63D0\u4F9B\u65B9\u5355\u4F4D\uFF1A',
				record.publishDept ? record.publishDept : '未知'
			),
			_react2["default"].createElement(
				'div',
				null,
				'\u56FD\u5BB6\u4E3B\u9898\u5206\u7C7B:',
				record.themeName ? record.themeName : "未知"
			)
		);
	}
	function column2To3Render(text, record, index) {
		return _react2["default"].createElement(
			'div',
			{ className: '' + _DataList2["default"].columnSedToThd },
			_react2["default"].createElement(
				'div',
				{ className: '' + _DataList2["default"].columnHeader },
				'\u7533\u8BF7\u5355\u4F4D'
			),
			_react2["default"].createElement(
				'div',
				null,
				record.applyUser ? record.applyUser : ""
			)
		);
	}
	function column3Render(text, record, index) {

		return _react2["default"].createElement(
			'div',
			{ className: '' + _DataList2["default"].columnThird },
			_react2["default"].createElement(
				'div',
				{ className: '' + _DataList2["default"].columnHeader },
				'\u8D44\u6E90\u72B6\u6001'
			),
			_react2["default"].createElement(
				'div',
				{ style: { color: "red" } },
				record.stateName ? record.stateName : '待审核'
			),
			_react2["default"].createElement(
				'div',
				null,
				_react2["default"].createElement(
					'a',
					{ onClick: function onClick() {
							var ids = [];
							ids.push(record.subscribeId);
							var tt = _global.Global.getState().routing.path.match(/wdydzy(\w*)/);
							if (tt) {
								tt = tt[1];
								var ww = "wdydzy" + tt;
								_global.Global.mark({
									dataList: (0, _defineProperty3["default"])({}, ww, {
										selectedRows: null,
										selectedRowsTrue: null
									})
								});
								_global.Global.mark({
									dataList: (0, _defineProperty3["default"])({}, ww, {
										selectedRows: ids,
										selectedRowsTrue: record.id
									})
								});
								var dd = "/aiForm/wdydzy" + tt + "/wdydzy" + tt.toLowerCase() + "zyck/wdydzy" + tt + "ZyckData";
								_history2["default"].push(dd);
							}
						} },
					'\u8D44\u6E90\u67E5\u770B'
				)
			)
		);
	}
	function column4Render(text, record, index) {
		var state = record.state ? record.state : "";
		if (state == "1") {
			//订阅状态：通过
			return _react2["default"].createElement(
				'div',
				{ className: '' + _DataList2["default"].columnFourth },
				_react2["default"].createElement('div', { className: '' + _DataList2["default"].columnHeader }),
				_react2["default"].createElement(
					'div',
					null,
					_react2["default"].createElement(
						'a',
						{ onClick: function onClick() {
								var ids = [];
								ids.push(record.subscribeId);
								var tt = _global.Global.getState().routing.path.match(/wdydzy(\w*)/);
								if (tt) {
									tt = tt[1];
									var ww = "wdydzy" + tt;
									_global.Global.mark({
										dataList: (0, _defineProperty3["default"])({}, ww, {
											selectedRows: null,
											selectedRowsTrue: null
										})
									});
									_global.Global.mark({
										dataList: (0, _defineProperty3["default"])({}, ww, {
											selectedRows: ids,
											selectedRowsTrue: record.id
										})
									});
									if (tt == "Sjk") {
										_history2["default"].push("/aiForm/wdydzySjk/wdydzysjkcxdy/wdydzyQxdyDetail");
									} else if (tt == "Wj") {
										_history2["default"].push("/aiForm/wdydzyWj/wdydzywjcxdy/wdyzyWjCxdyData");
									}
								}

								// window.location.href="#/aiForm/wdydzySjk/wdydzysjkcxdy/wdydzyQxdyDetail"; 
							} },
						'\u53D6\u6D88\u8BA2\u9605'
					)
				)
			);
		} else if (state == "0") {
			//订阅状态：待审核
			return _react2["default"].createElement(
				'div',
				{ className: '' + _DataList2["default"].columnFourth },
				_react2["default"].createElement('div', { className: '' + _DataList2["default"].columnHeader }),
				_react2["default"].createElement(
					'div',
					null,
					'--'
				)
			);
		} else if (state == "2" || state == "8") {
			//订阅状态：拒绝和取消订阅
			return _react2["default"].createElement(
				'div',
				{ className: '' + _DataList2["default"].columnFourth },
				_react2["default"].createElement('div', { className: '' + _DataList2["default"].columnHeader }),
				_react2["default"].createElement(
					'div',
					null,
					_react2["default"].createElement(_icon2["default"], { type: 'cancel-subscribe' }),
					_react2["default"].createElement(
						'a',
						{ onClick: function onClick() {
								var type = record.resType,
								    id = record.id;
								window.open(portalUrl + "index.html#/subscribe?type=" + type + "&id=" + id);
							} },
						'\u91CD\u65B0\u8BA2\u9605'
					)
				),
				_react2["default"].createElement(
					'div',
					null,
					_react2["default"].createElement(
						'a',
						{ onClick: function onClick() {
								_modal2["default"].confirm({
									title: "告警信息",
									content: "确认删除？",
									onOk: function onOk() {
										_global.Global.requestApi({
											apiName: "deleteSubscribe",
											body: { subscribeId: record.subscribeId },
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
										}, ['requestClearLogs', 'receieveClearLogs', 'failedClearLogs']);
									},
									onCancel: function onCancel() {
										console.log("reset exit!!!");
									}
								});
							} },
						'\u5220\u9664'
					)
				)
			);
		} else if (state == "5" || state == "7") {
			//订阅状态：撤销和过期
			return _react2["default"].createElement(
				'div',
				{ className: '' + _DataList2["default"].columnFourth },
				_react2["default"].createElement('div', { className: '' + _DataList2["default"].columnHeader }),
				_react2["default"].createElement(
					'div',
					null,
					_react2["default"].createElement(
						'a',
						{ onClick: function onClick() {
								_modal2["default"].confirm({
									title: "告警信息",
									content: "确认删除？",
									onOk: function onOk() {
										_global.Global.requestApi({
											apiName: "deleteSubscribe",
											body: { subscribeId: record.subscribeId },
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
										}, ['requestClearLogs', 'receieveClearLogs', 'failedClearLogs']);
									},
									onCancel: function onCancel() {
										console.log("reset exit!!!");
									}
								});
							} },
						'\u5220\u9664'
					)
				)
			);
		}
	}

	function column5Render(text, record, index) {
		return _react2["default"].createElement(
			'div',
			{ style: { cursor: "pointer" }, className: '' + _DataList2["default"].columnSecondText },
			_react2["default"].createElement(
				'span',
				{ onClick: function onClick() {
						var type = record.resType,
						    id = record.id;
						window.open(portalUrl + "/index.html#/detail?type=" + type + "&id=" + id);
					} },
				_react2["default"].createElement(
					'div',
					null,
					'\u8D44\u6E90\u8BC4\u5206\uFF1A',
					_react2["default"].createElement(_rate2["default"], { disabled: true, defaultValue: record.assessment_num })
				),
				_react2["default"].createElement(
					'div',
					null,
					'\u66F4\u65B0\u65F6\u95F4\uFF1A',
					record.update_time ? record.update_time.substring(0, 16) : "已是最新版本"
				)
			)
		);
	}

	function column6Render(text, record, index) {
		return _react2["default"].createElement(
			'div',
			{ style: { cursor: "pointer" }, className: '' + _DataList2["default"].columnSecondText },
			_react2["default"].createElement(
				'span',
				{ onClick: function onClick() {
						var type = record.resType,
						    id = record.id;
						window.open(portalUrl + "/index.html#/detail?type=" + type + "&id=" + id);
					} },
				_react2["default"].createElement(
					'div',
					null,
					'\u66F4\u65B0\u65F6\u95F4\uFF1A',
					record.update_time ? record.update_time.substring(0, 16) : "已是最新版本"
				),
				_react2["default"].createElement(
					'div',
					null,
					'\u4E0B\u8F7D\u6570\u91CF\uFF1A ',
					record.download_num ? record.download_num : '251'
				),
				_react2["default"].createElement(
					'div',
					null,
					'\u8D44\u6E90\u8BC4\u5206\uFF1A ',
					_react2["default"].createElement(_rate2["default"], { disabled: true, defaultValue: record.assessment_num })
				)
			)
		);
	}
	function column7Render(text, record, index) {
		return _react2["default"].createElement(
			'div',
			{ style: { cursor: "pointer" }, className: '' + _DataList2["default"].columnOne },
			_react2["default"].createElement(
				'span',
				{ onClick: function onClick() {
						var type = record.resType,
						    id = record.id;
						window.open(portalUrl + "/index.html#/detail?type=" + type + "&id=" + id);
					} },
				_react2["default"].createElement(
					'div',
					{ className: '' + _DataList2["default"].columnTime },
					record.applyTime ? record.applyTime.substring(0, 16) : ''
				),
				_react2["default"].createElement('img', { alt: record.resName, src: record.pictureUrl ? server + record.pictureUrl : "images/timg.png", style: { width: '120px', height: '120px', borderRadius: "8px" } })
			)
		);
	}

	function column8Render(text, record, index) {

		return _react2["default"].createElement(
			'div',
			{ style: { cursor: "pointer" }, className: '' + _DataList2["default"].columnSecondText },
			_react2["default"].createElement(
				'span',
				{ onClick: function onClick() {
						var type = record.resType,
						    id = record.id;
						window.open(portalUrl + "/index.html#/detail?type=" + type + "&id=" + id);
					} },
				_react2["default"].createElement(
					'div',
					{ title: record.resName ? record.resName : '深圳市规划保护范围及建设控制地带', className: '' + _DataList2["default"].columnSecondTitle },
					record.resName ? record.resName : '深圳市规划保护范围及建设控制地带'
				),
				_react2["default"].createElement(
					'div',
					{ className: 'clearfix' },
					_react2["default"].createElement(
						'p',
						null,
						'\u7B80\u4ECB\uFF1A'
					),
					_react2["default"].createElement(
						'p',
						{ title: record.abstracts ? record.abstracts : '内容简介无' },
						record.abstracts ? record.abstracts : '内容简介无'
					)
				),
				_react2["default"].createElement(
					'div',
					null,
					'\u6570\u636E\u63D0\u4F9B\u65B9\u5355\u4F4D\uFF1A',
					record.publishDept ? record.publishDept : '未知'
				),
				_react2["default"].createElement(
					'div',
					null,
					'\u56FD\u5BB6\u4E3B\u9898\u5206\u7C7B\uFF1A',
					record.themeName ? record.themeName : "未知"
				)
			)
		);
	}

	function column11Render(text, record, index) {
		return _react2["default"].createElement(
			'div',
			{ style: { cursor: "pointer" }, className: '' + _DataList2["default"].columnSecondText },
			_react2["default"].createElement(
				'span',
				{ onClick: function onClick() {
						var type = record.resType,
						    id = record.id;
						window.open(portalUrl + "/index.html#/detail?type=" + type + "&id=" + id);
					} },
				_react2["default"].createElement(
					'div',
					null,
					'\u8D44\u6E90\u8BC4\u5206\uFF1A',
					_react2["default"].createElement(_rate2["default"], { disabled: true, defaultValue: record.assessment_num })
				),
				_react2["default"].createElement(
					'div',
					null,
					'\u66F4\u65B0\u65F6\u95F4\uFF1A',
					record.update_time ? record.update_time.substring(0, 16) : "已是最新版本"
				)
			)
		);
	}

	function column12Render(text, record, index) {
		return _react2["default"].createElement(
			'div',
			{ style: { cursor: "pointer" }, className: '' + _DataList2["default"].columnSecondText },
			_react2["default"].createElement(
				'span',
				{ onClick: function onClick() {
						var type = record.resType,
						    id = record.id;
						window.open(portalUrl + "/index.html#/detail?type=" + type + "&id=" + id);
					} },
				_react2["default"].createElement(
					'div',
					null,
					'\u66F4\u65B0\u65F6\u95F4\uFF1A',
					record.update_time ? record.update_time.substring(0, 16) : "已是最新版本"
				),
				_react2["default"].createElement(
					'div',
					null,
					'\u4E0B\u8F7D\u6570\u91CF\uFF1A',
					record.download_num ? record.download_num : '251'
				),
				_react2["default"].createElement(
					'div',
					null,
					'\u8D44\u6E90\u8BC4\u5206\uFF1A ',
					_react2["default"].createElement(_rate2["default"], { disabled: true, defaultValue: record.assessment_num })
				)
			)
		);
	}

	function column9Render(text, record, index) {
		return _react2["default"].createElement(
			'div',
			{ style: { cursor: "pointer" }, className: '' + _DataList2["default"].columnOne },
			_react2["default"].createElement(
				'span',
				{ onClick: function onClick() {
						var type = record.resType,
						    id = record.id;
						window.open(portalUrl + "/index.html#/detail?type=" + type + "&id=" + id);
					} },
				_react2["default"].createElement(
					'div',
					{ className: '' + _DataList2["default"].columnTime },
					record.applyTime ? record.applyTime.substring(0, 16) : ''
				),
				_react2["default"].createElement('img', { alt: record.resName, src: record.pictureUrl ? server + record.pictureUrl : "images/timg.png", style: { width: '120px', height: '120px', borderRadius: "8px" } })
			)
		);
	}

	function column10Render(text, record, index) {

		return _react2["default"].createElement(
			'div',
			{ style: { cursor: "pointer" }, className: '' + _DataList2["default"].columnSecondText },
			_react2["default"].createElement(
				'span',
				{ onClick: function onClick() {
						var type = record.resType,
						    id = record.id;
						window.open(portalUrl + "/index.html#/detail?type=" + type + "&id=" + id);
					} },
				_react2["default"].createElement(
					'div',
					{ title: record.resName ? record.resName : '深圳市规划保护范围及建设控制地带', className: '' + _DataList2["default"].columnSecondTitle },
					record.resName ? record.resName : '深圳市规划保护范围及建设控制地带'
				),
				_react2["default"].createElement(
					'div',
					{ className: 'clearfix' },
					_react2["default"].createElement(
						'p',
						null,
						'\u7B80\u4ECB\uFF1A'
					),
					_react2["default"].createElement(
						'p',
						{ title: record.abstracts ? record.abstracts : '内容简介无' },
						record.abstracts ? record.abstracts : '内容简介无'
					)
				),
				_react2["default"].createElement(
					'div',
					null,
					'\u6570\u636E\u63D0\u4F9B\u65B9\u5355\u4F4D\uFF1A',
					record.publishDept ? record.publishDept : '未知'
				),
				_react2["default"].createElement(
					'div',
					null,
					'\u56FD\u5BB6\u4E3B\u9898\u5206\u7C7B\uFF1A',
					record.themeName ? record.themeName : "未知"
				)
			)
		);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(87)))

/***/ }

});