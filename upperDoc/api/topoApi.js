webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(250);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(12);

	var _reactRouter = __webpack_require__(87);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("topoApi")(function (arg, callback) {
	    callback({
	        "success": true,
	        "data": _react2["default"].createElement(
	            'div',
	            { style: { padding: 10 } },
	            _react2["default"].createElement(
	                'h3',
	                null,
	                '\u7EC4\u7F51\u7F51\u72B6\u56FE'
	            ),
	            _react2["default"].createElement(
	                _reactRouter.Link,
	                { to: 'topoDemo' },
	                '\u7EC4\u7F51\u7F51\u72B6\u56FE\u5B9E\u4F8B'
	            ),
	            _react2["default"].createElement(
	                'h3',
	                null,
	                '\u63A5\u53E3\u6570\u636E\u683C\u5F0F'
	            ),
	            _react2["default"].createElement(
	                'div',
	                { className: 'p' },
	                _react2["default"].createElement('pre', { dangerouslySetInnerHTML: { __html: '\n[\n    {"id":"0","name":"Mine","isMine":true,"out":["09","13"]},\n\t{"id":"1","name":"\u957F\u540D\u79F0\u8282\u70B9\u957F\u540D\u79F0\u8282\u70B9","out":["10","19","15","13"]},\n\t{"id":"2","name":"\u8282\u70B92","out":["10","7","15"]},\n\t{"id":"3","name":"\u8282\u70B93","out":["6","20"]},\n\t{"id":"4","name":"\u8282\u70B94","out":["14","11","5"]},\n\t{"id":"5","name":"\u8282\u70B95","out":["17","8"]},\n\t{"id":"6","name":"\u8282\u70B96","out":["14","09"]},\n\t{"id":"7","name":"\u8282\u70B97","out":["20","8","15"]},\n\t{"id":"8","name":"\u8282\u70B98","out":["3","12"]},\n\t{"id":"09","name":"\u8282\u70B909","out":["19","16","13","18"]},\n\t{"id":"10","name":"\u8282\u70B910","out":["2","10"]},\n\t{"id":"11","name":"\u8282\u70B911","out":["12","1"]},\n\t{"id":"12","name":"\u8282\u70B912","out":["5","16"]},\n\t{"id":"13","name":"\u8282\u70B913","out":["2","4"]},\n\t{"id":"14","name":"\u8282\u70B914","out":["18","09"]},\n\t{"id":"15","name":"\u8282\u70B915","out":["13","6"]},\n\t{"id":"16","name":"\u8282\u70B916","out":["18","7"]},\n\t{"id":"17","name":"\u8282\u70B917","out":["19","6"]},\n\t{"id":"18","name":"\u8282\u70B918","out":["11","1"]},\n\t{"id":"19","name":"\u8282\u70B919","out":["3","11"]},\n\t{"id":"20","name":"\u8282\u70B920","out":["17","09","4"]}\n]\n                                ' } }),
	                _react2["default"].createElement(
	                    'div',
	                    null,
	                    'id:\u8282\u70B9id name:\u8282\u70B9\u540D',
	                    _react2["default"].createElement('br', null),
	                    'isMine:\u662F\u5426\u662F\u6211\u7684\u8BBE\u5907(\u4E3B\u8282\u70B9)',
	                    _react2["default"].createElement('br', null),
	                    'out:\u4ECE\u5F53\u524D\u8282\u70B9\u94FE\u51FA\u5230\u5916\u90E8\u8282\u70B9\u7684\u8282\u70B9\u540D'
	                )
	            )
	        )
	    });
	});

/***/ }
]);