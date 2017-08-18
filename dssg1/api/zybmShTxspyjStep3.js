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

	(0, _jsonp2["default"])("zybmShTxspyjStep3")(function (args, callback) {
	    var states = _global.Global.getState();

	    callback({
	        "success": true,
	        "data": [{
	            "title": "审批意见",
	            "column": 2,
	            "labelCol": 8,
	            "wrapperCol": 16,
	            "showTitle": true,
	            "data": [{ "name": "审批结果", "type": "select", "field": "result", options: [{ key: "同意发布", value: "0" }, { key: "拒绝发布", value: "-1" }], "defaultValue": "0" }, { "name": "审批意见", "type": "input", "field": "reviewDesc" }]
	        }]
	    });
	}); /**
	     *  by  tiangb
	     */

/***/ }
]);