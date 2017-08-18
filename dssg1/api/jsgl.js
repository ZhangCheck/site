webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(2024);

	var _modal = __webpack_require__(29);

	var _modal2 = _interopRequireDefault(_modal);

	var _css2 = __webpack_require__(44);

	var _icon = __webpack_require__(19);

	var _icon2 = _interopRequireDefault(_icon);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _global = __webpack_require__(10);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _dataFormat = __webpack_require__(64);

	var _AiForm = __webpack_require__(27);

	var _AiForm2 = _interopRequireDefault(_AiForm);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/*import {showDetailDlg} from "../actions/dataList"*/

	(0, _jsonp2["default"])("jsgl")(function (args, callback) {
	    var state = _global.Global.getState();
	    callback({
	        "success": true,
	        "data": {
	            "title": "角色管理",
	            "buttonConfigs": [{
	                "buttonName": "add"
	            }, {
	                "buttonName": "edit"
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
	                                            var result = (0, _dataFormat.checkSelectId)(_global.Global, "jsgl");
	                                            if (!result) {
	                                                _modal2["default"].warning({
	                                                    content: '请选择一条数据！'
	                                                });
	                                                return result;
	                                            }

	                                            var selectId = _global.Global.getState().dataList.jsgl.selectedRows[0];

	                                            var setMenuByRole = { show: "true", width: "80%",
	                                                title: "配置菜单",
	                                                onCancel: function onCancel() {
	                                                    _global.Global.mark({ dataList: {
	                                                            dictsInfo: {
	                                                                dialogs: {
	                                                                    show: false
	                                                                },
	                                                                setMenuByRole: null
	                                                            }
	                                                        }
	                                                    });
	                                                },
	                                                onOk: function onOk() {
	                                                    //let form = Global.getState().aiForm.jsglPzcd;
	                                                    var value = _global.Global.getState().aiForm.jsglPzcd.defaultTreeData.data.roleId;
	                                                    var ids = _global.Global.getState().aiForm.jsglPzcd.defaultTreeData.data.myMenu;
	                                                    _global.Global.requestApi({
	                                                        apiName: "assignMenus",
	                                                        body: {
	                                                            roleid: value,
	                                                            menuids: ids
	                                                        },
	                                                        next: function next(action) {
	                                                            if (action.success) {
	                                                                _modal2["default"].success({
	                                                                    title: '提示',
	                                                                    content: '配置菜单成功'
	                                                                });
	                                                                window.history.back(-1);
	                                                                return;
	                                                            } else {
	                                                                _modal2["default"].warning({
	                                                                    title: '提示',
	                                                                    content: '配置菜单失败'
	                                                                });
	                                                                return;
	                                                            }
	                                                        }
	                                                    }, ['requestAssignMenus', 'receieveAssignMenus', 'failedAssignMenus'], {});
	                                                },
	                                                content: _react2["default"].createElement(_AiForm2["default"], { config: { apiName: 'jsglPzcd' }, id: 'jsglPzcd' }) };
	                                            _global.Global.mark({ dataList: {
	                                                    jsgl: {
	                                                        dialog: setMenuByRole
	                                                    }
	                                                }
	                                            });
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
	                    "key": "name",
	                    render: function render(text, record, index) {
	                        return _react2["default"].createElement(
	                            'div',
	                            { title: text, style: { width: _global.Global.getState().framework.columnWidth, cursor: "pointer", display: "inline-block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } },
	                            text
	                        );
	                    }
	                }, {
	                    "title": "描述",
	                    "dataIndex": "description",
	                    "key": "description",
	                    render: function render(text, record, index) {
	                        return _react2["default"].createElement(
	                            'div',
	                            { title: text, style: { width: _global.Global.getState().framework.columnWidth, cursor: "pointer", display: "inline-block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } },
	                            text
	                        );
	                    }
	                }, {
	                    "title": "菜单",
	                    "dataIndex": "menus",
	                    "key": "menus",
	                    render: function render(text, record, index) {
	                        return _react2["default"].createElement(
	                            'div',
	                            { style: { textOverflow: 'ellipsis', overflow: 'hidden', width: '40em', whiteSpace: 'nowrap' }, title: record.menus },
	                            record.menus
	                        );
	                    }
	                }],
	                "body": { apiName: 'findSysRolesByPage', body: { page: 0, size: 10 } }
	            },
	            "list": {
	                "view": null,
	                "listApi": null,

	                "saveApi": null
	            },
	            "add": {
	                "byDialog": {
	                    title: '新增角色'
	                },
	                "initData": {
	                    data: { apiName: "jsglAdd" }
	                },
	                "onAddSubmitApi": { "apiName": "saveSysRoles" }
	            },
	            "edit": {
	                "byDialog": {
	                    title: '编辑角色'
	                },
	                "initData": {
	                    data: { apiName: "jsglEdit" }
	                },
	                "onUpdateSubmitApi": { "apiName": "updateSysRoles" }
	            },
	            "delete": {
	                "body": { apiName: 'deleteSysRoles' }
	            },
	            /*"detail":{
	                "initData":{
	                    data:{apiName:"jsglPzcd"}
	                },
	                "body":{apiName:'findSysMenusAllList'}
	            },*/
	            "check": {
	                "view": null,
	                "checkApi": null
	            }
	        }
	    });
	});

/***/ }
]);