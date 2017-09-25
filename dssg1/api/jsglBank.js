webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(2026);

	var _modal = __webpack_require__(29);

	var _modal2 = _interopRequireDefault(_modal);

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _css2 = __webpack_require__(44);

	var _icon = __webpack_require__(19);

	var _icon2 = _interopRequireDefault(_icon);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _global = __webpack_require__(10);

	var _dataFormat = __webpack_require__(64);

	var _AiForm = __webpack_require__(27);

	var _AiForm2 = _interopRequireDefault(_AiForm);

	var _DataListV = __webpack_require__(121);

	var _DataListV2 = _interopRequireDefault(_DataListV);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("jsgl")(function (args, callback) {
	    var state = _global.Global.getState();
	    callback({
	        "success": true,
	        "data": {
	            "title": "角色管理",
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
	                                            _global.Global.mark({
	                                                dataList: {
	                                                    jsgl: {
	                                                        dialog: {
	                                                            show: true,
	                                                            title: '新增角色',
	                                                            onOk: function onOk() {
	                                                                var state = _global.Global.getState();
	                                                                var form = state.aiForm.jsglAdd.form;
	                                                                form.validateFields(function (fileds) {
	                                                                    if (fileds) {
	                                                                        return false;
	                                                                    } else {
	                                                                        _global.Global.mark({
	                                                                            dataList: {
	                                                                                jsgl: {
	                                                                                    dialog: {
	                                                                                        show: false
	                                                                                    }
	                                                                                }
	                                                                            }
	                                                                        });
	                                                                        var values = form.getFieldsValue();
	                                                                        _global.Global.requestApi({ apiName: "saveSysRoles", body: (0, _extends3["default"])({}, values), next: function next() {
	                                                                                var state = _global.Global.getState();
	                                                                            } }, ['requestSaveSysRoles', 'receieveSaveSysRoles', 'failedSaveSysRoles'], {
	                                                                            dataList: {
	                                                                                jsgl: {
	                                                                                    jsglAdd: {
	                                                                                        addResult: null
	                                                                                    }
	                                                                                }
	                                                                            }
	                                                                        });
	                                                                    }
	                                                                });
	                                                            },
	                                                            onCancel: function onCancel() {
	                                                                _global.Global.mark({
	                                                                    dataList: {
	                                                                        jsgl: {
	                                                                            dialog: {
	                                                                                show: false
	                                                                            }
	                                                                        }
	                                                                    }
	                                                                });
	                                                                return;
	                                                            },

	                                                            content: _react2["default"].createElement(_AiForm2["default"], { config: { apiName: 'jsglAdd' }, id: 'jsglAdd' })
	                                                        }
	                                                    }
	                                                }
	                                            });
	                                        } },
	                                    '\u65B0\u589E'
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
	                                            if (!state.dataList.jsgl.selectedRows || state.dataList.jsgl.selectedRows && state.dataList.jsgl.selectedRows.length != 1) {
	                                                _modal2["default"].warning({
	                                                    title: '提示',
	                                                    content: '请选择单挑数据'
	                                                });
	                                            }
	                                            _global.Global.requestApi({ apiName: "findSysRolesByIdInfo", body: { id: _global.Global.getState().dataList.jsgl.selectedRows.join(',') }, next: function next() {
	                                                    _global.Global.mark({
	                                                        dataList: {
	                                                            jsgl: {
	                                                                dialog: {
	                                                                    show: true,
	                                                                    title: '编辑角色',
	                                                                    onOk: function onOk() {
	                                                                        var state = _global.Global.getState();
	                                                                        var form = state.aiForm.jsglEdit.form;

	                                                                        form.validateFields(function (fileds) {
	                                                                            if (fileds) {
	                                                                                return false;
	                                                                            } else {
	                                                                                _global.Global.mark({
	                                                                                    dataList: {
	                                                                                        jsgl: {
	                                                                                            dialog: {
	                                                                                                show: false
	                                                                                            }
	                                                                                        }
	                                                                                    }
	                                                                                });
	                                                                                var values = form.getFieldsValue();
	                                                                                _global.Global.requestApi({ apiName: "updateSysRoles", body: (0, _extends3["default"])({}, values) }, ['requestupdateSysRoles', 'receieveupdateSysRoles', 'failedupdateSysRoles'], {});
	                                                                            }
	                                                                        });
	                                                                    },
	                                                                    onCancel: function onCancel() {
	                                                                        _global.Global.mark({
	                                                                            dataList: {
	                                                                                jsgl: {
	                                                                                    dialog: {
	                                                                                        show: false
	                                                                                    }
	                                                                                }
	                                                                            }
	                                                                        });
	                                                                        return;
	                                                                    },
	                                                                    content: _react2["default"].createElement(_AiForm2["default"], { config: { apiName: 'jsglEdit' }, id: 'jsglEdit' })
	                                                                }
	                                                            }
	                                                        }
	                                                    });
	                                                } }, ['requestJsglEditData', 'receievegetJsglEditData', 'failedJsglEditData'], {
	                                                dataList: {
	                                                    jsgl: {
	                                                        detailData: null
	                                                    }
	                                                }
	                                            });
	                                        } },
	                                    '\u7F16\u8F91'
	                                )
	                            )
	                        )
	                    );
	                }
	            }, { "buttonName": "delete" }, {

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
	                                            window.location.href = '#/aiForm/jsgl/jsglPzcd/findSysMenusAllList';
	                                        } },
	                                    '\u914D\u7F6E\u83DC\u5355'
	                                )
	                            )
	                        )
	                    );
	                }
	            }],

	            "table": {
	                "primarykey": "roleId",
	                "clounms": [{
	                    "title": "角色名",
	                    "dataIndex": "name",
	                    "key": "name"
	                }, {
	                    "title": "描述",
	                    "dataIndex": "description",
	                    "key": "description"
	                }, {
	                    "title": "菜单",
	                    "dataIndex": "menus",
	                    "key": "menus"
	                }],
	                "body": { apiName: 'findSysRolesByPage', body: { page: 0, size: 10 } }
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
	                "body": { apiName: 'deleteSysRoles' }
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
]);