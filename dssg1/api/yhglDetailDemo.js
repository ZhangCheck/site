webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(10);

	var _interfaces = __webpack_require__(35);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * Created by liy on 2016/12/17 0017.
	 */
	/**
	 * Created by liy on 2016/12/17 0017.
	 */
	(0, _jsonp2["default"])("yhglDetailDemo")(function (args, callback) {
	    var states = _global.Global.getState();
	    var detailMsgs = states.dataList.yhglZyck && states.dataList.yhglZyck.data ? states.dataList.yhglZyck.data : [];
	    callback({
	        "success": true,
	        "data": [{
	            "column": 2,
	            "data": [{ "type": "text", "name": "用户名", "field": "loginName", "defaultValue": detailMsgs.loginName }, { "type": "text", "name": "用户实名", "field": "userName", "defaultValue": detailMsgs.userName }, { "type": "text", "name": "用户角色", "field": "roleName", "defaultValue": detailMsgs.roleName }, { "type": "text", "name": "用户状态", "field": "state", "defaultValue": detailMsgs.state == 0 ? '正常' : '停用' }, { "type": "text", "name": "用户手机", "field": "telphone", "defaultValue": detailMsgs.telphone }, { "type": "text", "name": "邮箱", "field": "email", "defaultValue": detailMsgs.email }, { "type": "text", "name": "用户办公电话", "field": "cellPhoneNumber", "defaultValue": detailMsgs.cellPhoneNumber }],
	            "buttonConfigs": {
	                "buttons": [{ "type": "button", "value": "返回", mark: "yhgl", props: { "style": { "float": "right" } } }]
	            }
	        }]
	    });
	});

/***/ }
]);