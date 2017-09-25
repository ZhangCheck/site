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

	(0, _jsonp2["default"])("apijkrzwfbdzyDetail")(function (args, callback) {
	    var states = _global.Global.getState();
	    var detailValue = states.dataList.apijkrzwfbdzy && states.dataList.apijkrzwfbdzy.detailMsgDataApi && states.dataList.apijkrzwfbdzy.detailMsgDataApi.data ? states.dataList.apijkrzwfbdzy.detailMsgDataApi.data : {};

	    callback({
	        "success": true,
	        "data": [{
	            "title": "请求数据",
	            "column": 1,
	            "labelCol": 8,
	            "wrapperCol": 16,
	            "childrenContentNoBorder": true,
	            "childrenContentFormItemHeightLow": true,
	            "showTitle": true,
	            "data": function data(config) {
	                return _react2["default"].createElement(
	                    'div',
	                    { style: { margin: '0 12px', height: '150px', overflowY: "auto", OVERFLOWX: "hidden", wordBreak: "break-all", whiteSpace: 'normal', wordWrap: "break-word" } },
	                    detailValue.requestData ? detailValue.requestData : "无"
	                );
	            }

	        }, {
	            "title": "响应数据",
	            "column": 1,
	            "labelCol": 8,
	            "wrapperCol": 16,
	            "childrenContentNoBorder": true,
	            "childrenContentFormItemHeightLow": true,
	            "showTitle": true,
	            "data": function data(config) {
	                return _react2["default"].createElement(
	                    'div',
	                    { style: { margin: '0 12px', height: '150px', overflowY: "auto", wordBreak: "break-all", whiteSpace: 'normal', wordWrap: "break-word" } },
	                    detailValue.responseData ? detailValue.responseData : "无"
	                );
	            }
	        }]

	    });
	});

/***/ }
]);