webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(1978);

	var _modal = __webpack_require__(29);

	var _modal2 = _interopRequireDefault(_modal);

	var _css2 = __webpack_require__(44);

	var _icon = __webpack_require__(19);

	var _icon2 = _interopRequireDefault(_icon);

	var _css3 = __webpack_require__(54);

	var _form = __webpack_require__(53);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _global = __webpack_require__(10);

	var _dataFormat = __webpack_require__(64);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _history = __webpack_require__(32);

	var _history2 = _interopRequireDefault(_history);

	var _AiForm = __webpack_require__(27);

	var _AiForm2 = _interopRequireDefault(_AiForm);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/* import './other.html';
	 import React from 'react';
	 import ReactDOM from 'react-dom'; */
	var FormItem = _form2["default"].Item;
	(0, _jsonp2["default"])("ftpYhgl")(function (args, callback) {
	    var state = _global.Global.getState();
	    callback({
	        "success": true,
	        "data": {
	            "id": "ftpYhgl",
	            "title": "FTP用户管理",
	            "buttonConfigs": [{ "buttonName": "add" }, { "buttonName": "edit" }, { "buttonName": "delete" }, {
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
	                                _react2["default"].createElement(_icon2["default"], { type: 'start' }),
	                                _react2["default"].createElement(
	                                    'a',
	                                    { onClick: function onClick() {
	                                            var result = (0, _dataFormat.checkSelectId)(_global.Global, "ftpYhgl");
	                                            if (!result) {
	                                                _modal2["default"].warning({
	                                                    content: '请选择一条数据！'
	                                                });
	                                                return result;
	                                            }
	                                            _modal2["default"].confirm({
	                                                title: '告警信息',
	                                                content: '确认启动服务？',
	                                                onOk: function onOk() {
	                                                    _global.Global.requestApi({
	                                                        apiName: 'startFtp'
	                                                    }, ["requestResState", "receiveResState", "failedResState"], {});
	                                                },
	                                                onCancel: function onCancel() {
	                                                    console.log("delete exit!!!");
	                                                }
	                                            });
	                                        } },
	                                    '\u542F\u52A8FTP\u670D\u52A1'
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
	                                _react2["default"].createElement(_icon2["default"], { type: 'pause' }),
	                                _react2["default"].createElement(
	                                    'a',
	                                    { onClick: function onClick() {
	                                            var result = (0, _dataFormat.checkSelectId)(_global.Global, "ftpYhgl");
	                                            if (!result) {
	                                                _modal2["default"].warning({
	                                                    content: '请选择一条数据！'
	                                                });
	                                                return result;
	                                            }
	                                            _modal2["default"].confirm({
	                                                title: '告警信息',
	                                                content: '确认停止服务？',
	                                                onOk: function onOk() {
	                                                    _global.Global.requestApi({
	                                                        apiName: 'stopFtp'
	                                                    }, ["requestResState", "receiveResState", "failedResState"], {});
	                                                },
	                                                onCancel: function onCancel() {
	                                                    console.log("delete exit!!!");
	                                                }
	                                            });
	                                        } },
	                                    '\u505C\u6B62FTP\u670D\u52A1'
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
	                                _react2["default"].createElement(_icon2["default"], { type: 'revise' }),
	                                _react2["default"].createElement(
	                                    'a',
	                                    { onClick: function onClick() {
	                                            var state = _global.Global.getState();
	                                            var setWhiteList = { show: true,
	                                                title: "设置白名单",
	                                                onCancel: function onCancel() {
	                                                    _global.Global.mark({ dataList: {
	                                                            ftpYhgl: {
	                                                                dialog: {
	                                                                    show: false
	                                                                }
	                                                            }
	                                                        }
	                                                    });
	                                                },
	                                                onOk: function onOk() {
	                                                    var form = _global.Global.getState().aiForm.setWhiteList.form;
	                                                    form.validateFields(function (fileds) {
	                                                        if (fileds) {
	                                                            return false;
	                                                        } else {
	                                                            _global.Global.mark({ dataList: { ftpYhgl: { dialog: { loading: true } } } });
	                                                            var values = form.getFieldsValue();
	                                                            _global.Global.requestApi({ apiName: "setWhiteList", body: values.ids, next: function next(action) {
	                                                                    if (action.data) {
	                                                                        _modal2["default"].warning({
	                                                                            title: '提示',
	                                                                            content: '添加成功！'
	                                                                        });
	                                                                        _global.Global.mark({ dataList: {
	                                                                                ftpYhgl: {
	                                                                                    dialog: null
	                                                                                }
	                                                                            }
	                                                                        });
	                                                                    } else {
	                                                                        _modal2["default"].warning({
	                                                                            title: '提示',
	                                                                            content: '添加失败！'
	                                                                        });
	                                                                        _global.Global.mark({ dataList: { ftpYhgl: { dialog: { loading: false } } } });
	                                                                    }
	                                                                } }, {}, {});
	                                                        }
	                                                    });
	                                                },
	                                                content: _react2["default"].createElement(_AiForm2["default"], { config: { apiName: 'setWhiteListData' }, id: 'setWhiteList' }) };
	                                            _global.Global.mark({ dataList: {
	                                                    ftpYhgl: {
	                                                        dialog: setWhiteList
	                                                    }
	                                                }
	                                            });
	                                        } },
	                                    '\u8BBE\u7F6E\u767D\u540D\u5355'
	                                )
	                            )
	                        )
	                    );
	                }
	            }],
	            "table": {
	                "primarykey": "id",
	                "clounms": [{
	                    "title": "用户名",
	                    "dataIndex": "name",
	                    "key": "name"
	                }, {
	                    "title": "对应目录",
	                    "dataIndex": "homeDirectory",
	                    "key": "homeDirectory"
	                }, {
	                    "title": "是否可写",
	                    "dataIndex": "writePermission",
	                    "key": "writePermission",
	                    render: function render(text, record, index) {
	                        switch (text) {
	                            case "1":
	                                return "是";
	                            case "0":
	                                return "否";
	                        }
	                    }
	                }],
	                "body": { apiName: 'ftpYhglData', body: { page: 0, size: 10 } }
	            },
	            "list": {
	                "view": null,
	                "listApi": null,

	                "saveApi": null
	            },
	            "add": {
	                "initData": {
	                    data: { apiName: "getFtpYhglEdit" }
	                },
	                "onAddSubmitApi": { "apiName": "ftpYhglAddData" }
	            },
	            "edit": {
	                "initData": {
	                    data: { apiName: "getFtpYhglEdit" }
	                },
	                "onUpdateSubmitApi": { "apiName": "ftpYhglEditData" }
	            },
	            "delete": {
	                "body": { apiName: 'deleteFtpUser' }
	            },
	            "detail": {
	                "initData": {
	                    data: { apiName: "sjyglDetailDemo" }
	                },
	                "body": { apiName: 'ftpYhglDetailData' }
	            },
	            "check": {
	                "view": null,
	                "checkApi": null
	            }
	        }
	    });
	});

/***/ }
]);