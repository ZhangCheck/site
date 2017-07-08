(function(){ var runed=0,temp,timer,time;webpackJsonp([3],[
/* 0 */
/***/ temp = function(module, exports, __webpack_require__) {runed=true;

	'use strict';

	var _css = __webpack_require__(1836);

	var _modal = __webpack_require__(49);

	var _modal2 = _interopRequireDefault(_modal);

	var _css2 = __webpack_require__(64);

	var _icon = __webpack_require__(20);

	var _icon2 = _interopRequireDefault(_icon);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _global = __webpack_require__(15);

	var _dataFormat = __webpack_require__(172);

	var _jsonp = __webpack_require__(234);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/* import './other.html';
	 import React from 'react';
	 import ReactDOM from 'react-dom'; */
	(0, _jsonp2["default"])("yhgl")(function (args, callback) {
	    var state = _global.Global.getState();
	    callback({
	        "success": true,
	        "data": {
	            "title": "用户管理",
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
	                                _react2["default"].createElement(_icon2["default"], { type: 'search' }),
	                                _react2["default"].createElement(
	                                    'a',
	                                    { onClick: function onClick() {
	                                            var state = _global.Global.getState();
	                                            var userIds = state.dataList.yhgl.selectedRows;
	                                            if (userIds && userIds.length == 1) {
	                                                _global.Global.requestApi({
	                                                    apiName: 'findSysUserById',
	                                                    body: {
	                                                        id: userIds[0]
	                                                    },
	                                                    next: function next() {
	                                                        window.location.href = "#/aiForm/yhgl/yhglDetailDemo/findSysUserById";
	                                                    }
	                                                }, ['requestUser', 'receieveUser', 'failedUser'], {
	                                                    dataList: {
	                                                        yhglZyck: null
	                                                    }
	                                                });
	                                            } else {
	                                                _modal2["default"].warning({
	                                                    title: '提示',
	                                                    content: '请选择单条信息进行查看!!'
	                                                });
	                                            }
	                                        } },
	                                    '\u67E5\u770B'
	                                )
	                            )
	                        )
	                    );
	                }
	            }, { "buttonName": "add" }, { "buttonName": "delete" }, { "buttonName": "edit" }, {
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
	                                    '\u505C\u7528'
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
	                                _react2["default"].createElement(_icon2["default"], { type: 'play-circle-o' }),
	                                _react2["default"].createElement(
	                                    'a',
	                                    { onClick: function onClick() {
	                                            var state = _global.Global.getState();
	                                            var userIds = state.dataList.yhgl.selectedRows;
	                                            if (userIds && userIds.length == 1) {
	                                                var dataSource = state.dataList.yhgl.tableBodyDataApi.data.content;
	                                                dataSource.forEach(function (items) {
	                                                    if (items.id == userIds) {
	                                                        if (items.state == '0') {
	                                                            _modal2["default"].warning({
	                                                                title: '提示',
	                                                                content: '用户已经是启动状态'
	                                                            });
	                                                            return;
	                                                        } else {
	                                                            _global.Global.requestApi({
	                                                                apiName: 'startOrStopSysUser',
	                                                                body: {
	                                                                    id: userIds[0],
	                                                                    state: '0'
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
	                                _react2["default"].createElement(_icon2["default"], { type: 'search' }),
	                                _react2["default"].createElement(
	                                    'a',
	                                    { onClick: function onClick() {
	                                            var state = _global.Global.getState();
	                                            var userIds = state.dataList.yhgl.selectedRows;
	                                            if (userIds && userIds.length == 1) {
	                                                _modal2["default"].confirm({
	                                                    title: '告警信息',
	                                                    content: '确认重置密码？',
	                                                    onOk: function onOk() {
	                                                        _global.Global.requestApi({
	                                                            apiName: 'resetUserPassword',
	                                                            body: {
	                                                                id: userIds[0]
	                                                            },
	                                                            next: function next() {
	                                                                if (state.dataList.yhgl.resetPass.data) {
	                                                                    _modal2["default"].success({
	                                                                        title: '提示',
	                                                                        content: '重置密码成功'
	                                                                    });
	                                                                } else {
	                                                                    _modal2["default"].warning({
	                                                                        title: '提示',
	                                                                        content: '重置密码失败'
	                                                                    });
	                                                                }
	                                                            }
	                                                        }, ['requestReset', 'receieveReset', 'failedReset'], {
	                                                            dataList: {
	                                                                yhgl: {
	                                                                    resetPass: null
	                                                                }
	                                                            }
	                                                        });
	                                                    },
	                                                    onCancel: function onCancel() {
	                                                        console.log("reset exit!!!");
	                                                    }
	                                                });
	                                            } else {
	                                                _modal2["default"].warning({
	                                                    title: '提示',
	                                                    content: '请选择单条信息进行操作!!'
	                                                });
	                                            }
	                                        } },
	                                    '\u91CD\u7F6E\u5BC6\u7801'
	                                )
	                            )
	                        )
	                    );
	                }
	            }],
	            "searchConfig": {
	                "data": [{
	                    "column": 6,
	                    "data": [{ "type": "input", "col": 5, "name": "用户名", "field": "loginName" }, {
	                        "type": "select",
	                        "col": 5,
	                        "name": "用户角色",
	                        "field": "roleCode",
	                        options: [{ value: "_all_", key: "全部" }, { key: '数据管理员', value: 'ROLE_DATA_MANAGER' }, { key: '共享管理员', value: 'ROLE_SHARE_MANAGER' }, { key: '日志管理员', value: 'ROLE_LOG_MANAGER' }]
	                    }, { "type": "button", "col": 3, "value": "查询", "pageName": "search", "btnType": "primary", "htmlType": "submit" }]
	                }],
	                "body": { apiName: 'findSysUser', body: { page: 0, size: 10 } }
	            },
	            "table": {
	                "primarykey": "id",
	                "clounms": [{
	                    "title": "用户名",
	                    "dataIndex": "loginName",
	                    "key": "loginName"
	                }, {
	                    "title": "用户实名",
	                    "dataIndex": "userName",
	                    "key": "userName"
	                }, {
	                    "title": "用户角色",
	                    "dataIndex": "roleName",
	                    "key": "roleName"
	                }, {
	                    "title": "用户手机",
	                    "dataIndex": "telphone",
	                    "key": "telphone"
	                }, {
	                    "title": "用户办公电话",
	                    "dataIndex": "cellPhoneNumber",
	                    "key": "cellPhoneNumber"
	                }, {
	                    "title": "电子邮件",
	                    "dataIndex": "email",
	                    "key": "email"
	                }, {
	                    "title": "用户状态",
	                    "dataIndex": "state",
	                    "key": "state",
	                    render: function render(text, record, index) {
	                        switch (record.state) {
	                            case '0':
	                                return '正常';
	                            case '-1':
	                                return '停用';
	                            default:
	                                return '停用';
	                        }
	                    }
	                }],
	                "body": { apiName: 'findSysUser', body: { page: 0, size: 10 } }
	            },
	            "list": {
	                "view": null,
	                "listApi": null,

	                "saveApi": null
	            },
	            "add": {
	                "initData": {
	                    data: { apiName: "yhglAddDemo" }
	                },
	                "onAddSubmitApi": { "apiName": "yhglAddData" }
	            },
	            "edit": {
	                "initData": {
	                    data: { apiName: "yhglEditDemo" }
	                },
	                "onUpdateSubmitApi": { "apiName": "yhglEditData" }
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
	});

/***/ }
]);if(!runed){
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