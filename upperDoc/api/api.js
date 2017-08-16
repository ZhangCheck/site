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

	(0, _jsonp2["default"])("page")(function (arg, callback) {
	    callback({
	        "success": true,
	        "data": _react2["default"].createElement(
	            'div',
	            { style: { padding: 10 } },
	            _react2["default"].createElement(
	                'h3',
	                null,
	                'API'
	            ),
	            _react2["default"].createElement(
	                'div',
	                { style: { paddingLeft: 20 } },
	                _react2["default"].createElement(
	                    'div',
	                    null,
	                    '\u5D4C\u5165\u9875\u9762\u662F\u6307\u5C06\u88AB\u6253\u5305\u5230index.js\u4E2D\u7684\u9875\u9762'
	                ),
	                _react2["default"].createElement(
	                    'div',
	                    null,
	                    '\u5D4C\u5165\u9875\u9762\u901A\u5E38\u5728index.dev.js\u6216\u7531\u5176\u5B83\u5D4C\u5165\u9875\u9762\u901A\u8FC7import\u5F15\u5165'
	                ),
	                _react2["default"].createElement(
	                    'div',
	                    null,
	                    '\u5D4C\u5165\u9875\u9762\u5C06\u589E\u52A0\u9879\u76EE\u5927\u5C0F(index.js)'
	                )
	            ),
	            _react2["default"].createElement(
	                'h3',
	                null,
	                '\u5F02\u6B65\u9875\u9762\u7684\u521B\u5EFA'
	            ),
	            _react2["default"].createElement(
	                'div',
	                { style: { paddingLeft: 20 } },
	                _react2["default"].createElement(
	                    'div',
	                    null,
	                    '\u5F02\u6B65\u9875\u9762\u662F\u6307\u9879\u76EE\u8FD0\u884C\u540E\uFF0C\u901A\u8FC7ajax\u5F02\u6B65\u52A0\u8F7D\u5230\u9879\u76EE\u4E2D\u7684\u9875\u9762'
	                ),
	                _react2["default"].createElement(
	                    'div',
	                    null,
	                    '\u5F02\u6B65\u9875\u9762\u5C06\u88AB\u7F16\u8BD1\u5230"public/api"\u76EE\u5F55\u4E0B'
	                ),
	                _react2["default"].createElement(
	                    'div',
	                    null,
	                    '\u5F02\u6B65\u9875\u9762\u662Fjs\u6587\u4EF6\uFF0C\u901A\u8FC7jsonp\u52A0\u8F7D\u8FD0\u884C'
	                ),
	                _react2["default"].createElement(
	                    'div',
	                    null,
	                    '\u5F02\u6B65\u9875\u9762\u9700\u8981\u7B26\u5408\u4E00\u5B9A\u7684\u683C\u5F0F\uFF0C\u624D\u901A\u88AB\u52A0\u8F7D\u540E\u8C03\u7528\uFF0C\u683C\u5F0F\u5982\u4E0B'
	                ),
	                _react2["default"].createElement('pre', { dangerouslySetInnerHTML: { __html: '\n    import React from &#39;react&#39;;\n    import {Button,Form,Input,Icon,DatePicker,InputNumber} from &#39;antFB&#39;;\n    import callback from &#39;../core/jsonp&#39;;\n    import {Global} from &#39;../core/global&#39;;\n\n    const FormItem = Form.Item;\n\n    callback(&quot;jsonpCallbackName&quot;)((args,callback)=&gt;{\n        let target = args.target;\n        let getFieldDecorator = target.props.form.getFieldDecorator;\n        callback({\n            &quot;success&quot;: true,\n            &quot;data&quot;:&quot;&quot;,\n         });\n    });\n                                ' } })
	            )
	        )
	    });
	});

/***/ }
]);