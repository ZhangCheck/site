webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(268);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(12);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("interfaceConfig")(function (arg, callback) {
	    callback({
	        "success": true,
	        "data": _react2["default"].createElement(
	            'div',
	            { className: 'p' },
	            _react2["default"].createElement(
	                'h3',
	                null,
	                '\u5168\u5C40\u63A5\u53E3\u914D\u7F6E'
	            ),
	            _react2["default"].createElement(
	                'div',
	                { className: 'p' },
	                _react2["default"].createElement(
	                    'div',
	                    null,
	                    'src/interface.js\u6587\u4EF6\u4E3A\u5168\u5C40\u63A5\u53E3\u914D\u7F6E\u6587\u4EF6\uFF0C\u7528\u4E8E\u63A5\u53E3\u91CD\u7528'
	                ),
	                _react2["default"].createElement('pre', { dangerouslySetInnerHTML: { __html: 'let interfaces = {\n    "todos":{},\n    "apiDemo":{},\n      "topoDemo":{},\n    "saveSuccess":{},\n    "timeout":{},\n    "todosJsonp":{dataType:\'jsonp\'},\n    "login":{remoteUrl:server+"login/commonLogin",method:"post"},\n    ...\n ' } }),
	                _react2["default"].createElement(
	                    'div',
	                    null,
	                    '\u6BCF\u4E00\u4E2A\u63A5\u53E3\u90FD\u662F\u4E00\u4E2A\u952E\u503C\u5BF9'
	                ),
	                _react2["default"].createElement(
	                    'div',
	                    null,
	                    '\u5176\u4E2D\u7684\u952E\u5373\u63A5\u53E3\u540D\uFF0C\u5BF9\u5E94Global.requestApi(apiConfig,treeNodeMark)\u4E2D\u7684apiConfig\u4E2D\u7684apiName'
	                ),
	                _react2["default"].createElement(
	                    'div',
	                    null,
	                    '\u5176\u4E2D\u7684\u503C\u5BF9\u5E94 apiConfig\u7684\u5176\u5B83\u53C2\u6570'
	                ),
	                _react2["default"].createElement(
	                    'div',
	                    null,
	                    '\u8C03\u7528Global.requestApi\u65F6\uFF0C\u51FD\u6570\u63A5\u53E3\u914D\u7F6E(\u53C2\u6570apiConfig)\u4F18\u5148\u4E8E\u5168\u5C40\u63A5\u53E3\u914D\u7F6E'
	                ),
	                _react2["default"].createElement('pre', { dangerouslySetInnerHTML: { __html: '//\u5168\u5C40\u63A5\u53E3\u914D\u7F6E src/interfaces.js\nlet interfaces = {\n    &quot;apiDemo&quot;:{url:&#39;api/a.json&#39;,remoteUrl:&#39;api/ar&#39;,body:{a:&#39;a&#39;,c:&#39;c&#39;}},\n    ...\n//\u9875\u9762\u4E2D\u63A5\u53E3\u8C03\u7528\nGlobal.requestApi({\n    apiName:&#39;apiDemo&#39;,\n    url:&#39;api/b.json&#39;,\n    body:{\n        b:&#39;bbb&#39;,\n        c:&#39;cc&#39;\n    }\n})\n//\u5219\u63A5\u53E3\u914D\u7F6E\u7B49\u4EF7\u4E8E\nGlobal.requestApi({\n    apiName:&#39;apiDemo&#39;,\n    url:&#39;api/b.json&#39;,\n    remoteUrl:&#39;api/ar&#39;,\n    body:{\n        a:&#39;a&#39;,\n        b:&#39;bbb&#39;,\n        c:&#39;cc&#39;\n    }\n}) ' } })
	            )
	        )
	    });
	});

/***/ }
]);