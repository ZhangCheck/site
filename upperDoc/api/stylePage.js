webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(250);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(12);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("stylePage")(function (arg, callback) {
	    callback({
	        "success": true,
	        "data": _react2["default"].createElement(
	            'div',
	            { style: { padding: 10 } },
	            _react2["default"].createElement(
	                'h3',
	                null,
	                '\u6837\u5F0F\u57FA\u7840'
	            ),
	            _react2["default"].createElement(
	                'div',
	                { style: { paddingLeft: 20 } },
	                _react2["default"].createElement(
	                    'ol',
	                    null,
	                    _react2["default"].createElement(
	                        'li',
	                        null,
	                        '\u9879\u76EE\u4E2D\u6837\u5F0F\u5206\u4E24\u79CD\uFF0C\u884C\u5185\u6837\u5F0F\u548C\u7531less\u7F16\u8BD1\u7684\u6837\u5F0F\u7C7B'
	                    ),
	                    _react2["default"].createElement(
	                        'li',
	                        null,
	                        '\u884C\u5185\u6837\u5F0F\u5199\u6CD5',
	                        _react2["default"].createElement('pre', { dangerouslySetInnerHTML: { __html: '//\u884C\u5185\u6837\u5F0F\n<div style={{background:\'red\'}}>\u7EA2\u8272\u80CC\u666F</div>\n' } })
	                    ),
	                    _react2["default"].createElement(
	                        'li',
	                        null,
	                        'less\u6837\u5F0F\u5199\u6CD5-\u9875\u9762\u6837\u5F0F',
	                        _react2["default"].createElement('pre', { dangerouslySetInnerHTML: { __html: '//\u5B9A\u4E49\u6837\u5F0F\u6587\u4EF6 components/SomeComponent.less\n.redBg{\n    background:red;                          //\u9075\u5FAAless\u8BED\u6CD5\n}\n\n//\u4F7F\u7528less\u6837\u5F0F\u7C7B components/SomeComponent.js\nimport styles from \'./SomeComponent.less\';   //\u5F15\u5165\u6837\u5F0F\u7C7B\n...\n<div className={styles.redBg}>\u7EA2\u8272\u80CC\u666F</div> //\u4F7F\u7528\u6837\u5F0F\u7C7B\n...\n' } })
	                    ),
	                    _react2["default"].createElement(
	                        'li',
	                        null,
	                        'less\u6837\u5F0F\u5199\u6CD5-\u5168\u5C40\u6837\u5F0F',
	                        _react2["default"].createElement('pre', { dangerouslySetInnerHTML: { __html: '//\u5B9A\u4E49\u6837\u5F0F\u6587\u4EF6 components/SomeComponent.less\n:global {\n    .redBg{\n        background:red;                          //\u9075\u5FAAless\u8BED\u6CD5\n    }\n}\n\n//\u4F7F\u7528less\u6837\u5F0F\u7C7B components/SomeComponent.js\nimport styles from \'./SomeComponent.less\';   //\u5F15\u5165\u6837\u5F0F\u7C7B\n...\n<div className=\'redBg\'>\u7EA2\u8272\u80CC\u666F</div> //\u4F7F\u7528\u6837\u5F0F\u7C7B\n...\n' } })
	                    )
	                )
	            )
	        )
	    });
	});

/***/ }
]);