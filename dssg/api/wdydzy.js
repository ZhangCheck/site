(function(){ var runed=0,temp,timer,time;webpackJsonp([3],{

/***/ 0:
/***/ temp = function(module, exports, __webpack_require__) {runed=true;

	'use strict';

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _css = __webpack_require__(1677);

	var _modal = __webpack_require__(49);

	var _modal2 = _interopRequireDefault(_modal);

	var _css2 = __webpack_require__(64);

	var _icon = __webpack_require__(20);

	var _icon2 = _interopRequireDefault(_icon);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _global = __webpack_require__(15);

	var _Utils = __webpack_require__(838);

	var _Utils2 = _interopRequireDefault(_Utils);

	var _dataFormat = __webpack_require__(172);

	var _jsonp = __webpack_require__(234);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("wdydZY")(function (args, callback) {
	    var state = _global.Global.getState();
	    callback({
	        "success": true,
	        "data": {

	            "id": "wdydZY",
	            "title": "交换任务监控",
	            "headConfig": [{

	                "headName": (0, _Utils2["default"])([{
	                    urlPart: "wfbdZY",
	                    name: "我发布的资源"
	                }, {
	                    urlPart: "wdydZY",
	                    name: "我订阅的资源"
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
	                                            var result = (0, _dataFormat.checkSelectId)(_global.Global, "wdydZY");
	                                            if (!result) {
	                                                _modal2["default"].warning({
	                                                    content: '请选择一条数据！'
	                                                });
	                                                return result;
	                                            } else {
	                                                var _state = _global.Global.getState();
	                                                var datas = _state.dataList.wdydZY.tableBodyDataApi.data.content;
	                                                var resultId = _state.dataList.wdydZY.selectedRows[0];
	                                                var body = {};
	                                                datas.forEach(function (items) {
	                                                    if (resultId == items.id) {
	                                                        body.id = items.id;
	                                                        body.subEquipmentId = items.subEquipmentId;
	                                                        body.pubEquipmentId = items.pubEquipmentId;
	                                                        body.actionType = 2;
	                                                        body.type = -1;
	                                                    }
	                                                });
	                                                _global.Global.requestApi({ "apiName": "startStopTask", body: (0, _extends3["default"])({}, body) }, ["requestResState", "receiveResState", "failedResState"], {});
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
	                                                var _state2 = _global.Global.getState();
	                                                var datas = _state2.dataList.wdydZY.tableBodyDataApi.data.content;
	                                                var resultId = _state2.dataList.wdydZY.selectedRows[0];
	                                                var body = {};
	                                                datas.forEach(function (items) {
	                                                    if (resultId == items.id) {
	                                                        body.id = items.id;
	                                                        body.subEquipmentId = items.subEquipmentId;
	                                                        body.pubEquipmentId = items.pubEquipmentId;
	                                                        body.actionType = 2;
	                                                        body.type = 0;
	                                                    }
	                                                });
	                                                _global.Global.requestApi({ "apiName": "startStopTask", body: (0, _extends3["default"])({}, body) }, ["requestResState", "receiveResState", "failedResState"], {});
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
	                    "data": [{ "type": "input", "col": 7, "name": "资源名称", "field": "resName" }, {
	                        "type": "treeSelect",
	                        "col": 5,
	                        "name": "订阅设备",
	                        "field": "themeType",
	                        options: { value: "_all_", key: "全部" },
	                        dictId: "dysb",
	                        dictApi: { apiName: 'dysb', body: {} }
	                    }, {
	                        "type": "select",
	                        "col": 5,
	                        "name": "运行状态",
	                        "field": "state",
	                        options: [{ value: "_all_", key: "全部" }, { value: "1", key: "正在运行" }, {
	                            value: "2",
	                            key: "等待下次运行"
	                        }, { value: "3", key: "资源暂停" }, { value: "4", key: "发布方暂停任务" }, { value: "5", key: "订阅方暂停任务" }]
	                    }, {
	                        "type": "button",
	                        "col": 2,
	                        "value": "查询",
	                        "pageName": "search",
	                        "btnType": "primary",
	                        "htmlType": "submit"
	                    }]
	                }],
	                "body": { apiName: 'findSubscribeResourceByPage' }
	            },
	            "table": {
	                "primarykey": "id",
	                "clounms": [{
	                    "title": "资源名称",
	                    "dataIndex": "resName",
	                    "key": "resName"
	                }, {
	                    "title": "资源编码",
	                    "dataIndex": "resCode",
	                    "key": "resCode"
	                }, {
	                    "title": "订阅设备",
	                    "dataIndex": "subEquipmentName",
	                    "key": "subEquipmentName"
	                }, {
	                    "title": "资源类型",
	                    "dataIndex": "resTypeName",
	                    "key": "resTypeName"
	                }, {
	                    "title": "状态",
	                    "dataIndex": "stateName",
	                    "key": "stateName"
	                }, {
	                    "title": "开始时间",
	                    "dataIndex": "startTime",
	                    "key": "startTime"
	                }, {
	                    "title": "下次运行时间",
	                    "dataIndex": "nextTime",
	                    "key": "nextTime"
	                }],
	                "body": { apiName: 'findSubscribeResourceByPage', body: { page: 0, size: 10 } }
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
	}); /* import './other.html';
	     import React from 'react';
	     import ReactDOM from 'react-dom'; */

/***/ },

/***/ 838:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.dlStateWarning = exports.selectedToFormArgs = undefined;

	var _css = __webpack_require__(1677);

	var _modal = __webpack_require__(49);

	var _modal2 = _interopRequireDefault(_modal);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _global = __webpack_require__(15);

	var _config = __webpack_require__(430);

	var _history = __webpack_require__(41);

	var _history2 = _interopRequireDefault(_history);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

});if(!runed){
            clearInterval(timer);
            timer = setInterval(function(){
                if(temp) {
                    temp(module, exports, __webpack_require__);
                    clearInterval(timer);
                    temp=null;
                    
                }
                time++;
                if(time>500){
                    clearInterval(timer);
                    console.log('more than 500 times')
                }
            },500);
        }})()