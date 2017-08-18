webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("ftpUpdatePwd")(function (args, callback) {
	    var states = _global.Global.getState();
	    var target = args.target;
	    callback({
	        "success": true,
	        "data": [{
	            "title": "设置白名单",
	            //"column":1,
	            "data": [{ name: "", "type": "input", placeholder: "请用分号（;）分隔！", labelCol: 3, wrapperCol: 18, props: { type: "textarea", rows: 4 }, "field": "ids" }]
	        }]
	    });
	});

/***/ }
]);