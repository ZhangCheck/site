webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(44);

	var _icon = __webpack_require__(19);

	var _icon2 = _interopRequireDefault(_icon);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _global = __webpack_require__(10);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("jhrwjk")(function (args, callback) {
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
	                "body": { apiName: 'findSysRolesByPage' }
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

/***/ }
]);