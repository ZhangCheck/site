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

	(0, _jsonp2["default"])("data")(function (arg, callback) {
	    callback({
	        "success": true,
	        "data": _react2["default"].createElement(
	            'div',
	            { style: { padding: 10 } },
	            _react2["default"].createElement(
	                'h3',
	                null,
	                '\u6570\u636E\u7ED3\u6784'
	            ),
	            _react2["default"].createElement(
	                'div',
	                { style: { paddingLeft: 20 } },
	                _react2["default"].createElement(
	                    'div',
	                    null,
	                    '\u9879\u76EE\u6240\u6709\u6570\u636E\u5B58\u653E\u5728\u540C\u4E00\u4E2Ajson\u5BF9\u8C61\u4E2D(store)\uFF0C\u6211\u4EEC\u79F0\u4E4B\u4E3A"\u6811"\u6216"\u72B6\u6001\u6811"'
	                ),
	                _react2["default"].createElement(
	                    'div',
	                    null,
	                    '\u6811\u548C\u89C6\u56FE\u7684\u5173\u7CFB\u662F\u5355\u5411\u7684\uFF0C\u5373\u6811\u53D8\u5316\u4E86\uFF0C\u5EFA\u7ACB\u5173\u7CFB\u7684\u89C6\u56FE\u5C31\u4F1A\u53D8\uFF0C\u53CD\u4E4B\u4E0D\u7136'
	                ),
	                _react2["default"].createElement(
	                    'div',
	                    null,
	                    '\u89C6\u56FE\u7684\u53D8\u5316\u65F6,\u5982\u679C\u8981\u5F15\u8D77\u6811\u7684\u53D8\u5316\uFF0C\u901A\u8FC7Global.mark\u624B\u52A8\u4FEE\u6539\u6811'
	                ),
	                _react2["default"].createElement(
	                    'div',
	                    null,
	                    '\u5B8C\u6574\u521B\u5EFA\u5904\u7406\u8FC7\u7A0B\u5206\u4E3A\u4EE5\u4E0B\u4E09\u6B65\uFF1A'
	                ),
	                _react2["default"].createElement(
	                    'h3',
	                    null,
	                    '\u4E00\uFF0C\u521B\u5EFA\u6811\u6839\u8282\u70B9(\u6570\u636E)'
	                ),
	                _react2["default"].createElement(
	                    'div',
	                    null,
	                    '\u6811\u7684\u6839\u8282\u70B9\u548C\u9ED8\u8BA4\u503C\u5728reducers/index.js\u4E2D\u5B9A\u4E49'
	                ),
	                _react2["default"].createElement('pre', { dangerouslySetInnerHTML: { __html: '\n/* \n   reducers/index.js\n   \u4EE5\u4E0B\u4EE3\u7801\u5B9A\u4E49\u4E86\u8FD9\u6837\u7684\u6811\n    {\n        demo:{\n                node1:&#39;node1&#39;,\n                node2:{\n                       node2_1:&#39;node2_1&#39;\n                }\n        }\n    }\n*/\n...\nlet reducers = { \n    demo:markReducer(&quot;demo&quot;,{\n        node1:&#39;node1&#39;,\n        node2:{\n            node2_1:&#39;node2_1&#39;\n        }\n    }),\n....\n                                ' } }),
	                _react2["default"].createElement(
	                    'h3',
	                    null,
	                    '\u4E8C\uFF0C\u521B\u5EFA\u7EC4\u4EF6(\u89C6\u56FE)'
	                ),
	                _react2["default"].createElement(
	                    'div',
	                    null,
	                    '\u4F7F\u7528 core/component.js \u5EFA\u7ACB\u6811\u548C\u89C6\u56FE\u5173\u7CFB'
	                ),
	                _react2["default"].createElement('pre', { dangerouslySetInnerHTML: { __html: '/*\n   containers/Demo.js\n   \u4EE5\u4E0B\u4EE3\u7801\u521B\u5EFA\u4E86Demo\u9875\u9762\uFF0C\u5E76\u5C06\u9875\u9762\u7684props.state\u548C\u6811\u4E2D\u7684demo\u8282\u70B9\u5BF9\u7B49\u5173\u7CFB\n   \u5C06\u9875\u9762\u5185\u5BB9\u548Cdemo.node1\u5EFA\u7ACB\u7ED1\u5B9A\u5173\u7CFB\n   \u5F53\u6811\u4E2D\u7684demo.node1\u503C\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u9875\u9762\u4E0A\u663E\u793A\u7684\u6587\u5B57\u4E5F\u53D1\u751F\u53D8\u5316\n*/\nimport React, { Component, PropTypes } from &#39;react&#39;;\nimport connect from &#39;../core/component&#39;;\n\nclass Demo extends Component{  \n    constructor(props){\n        super(props);\n    }\n    \n    render(){ \n        &lt;div&gt;{this.props.state.node1}&lt;/div&gt;\n    }\n}\n\nexport default connect(&quot;demo&quot;)(Demo)' } }),
	                _react2["default"].createElement(
	                    'h3',
	                    null,
	                    '\u4E09\uFF0C\u66F4\u65B0\u6811\u53D8\u5316(\u5904\u7406\u4E1A\u52A1)'
	                ),
	                _react2["default"].createElement(
	                    'div',
	                    null,
	                    '\u52A8\u6001\u8282\u70B9\u6216\u6240\u6709\u5B50\u8282\u70B9\u7684\u4FEE\u6539\u901A\u8FC7Global.mark\u65B9\u6CD5\u8FDB\u884C'
	                ),
	                _react2["default"].createElement(
	                    'div',
	                    null,
	                    '\u4F7F\u7528 Global.mark \u4FEE\u6539\u6811\u65F6\uFF0C\u662F\u5C06\u65B0\u503C\u5408\u5E76\u5230\u6811\u4E0A\uFF0C\u5373\u5B58\u5728\u5219\u8986\u76D6\uFF0C\u4E0D\u5B58\u5728\u5219\u521B\u5EFA\u3002 \u5BF9\u4E8E\u6570\u7EC4\uFF0C\u59CB\u7EC8\u8986\u76D6\u539F\u8282\u70B9\uFF0C\u6240\u4EE5\u5982\u679C\u5411\u6570\u7EC4\u8282\u70B9\u4E2D\u589E\u52A0\u6216\u5220\u9664\u503C\uFF0C\u9700\u5148\u53D6\u5F97\u539F\u8282\u70B9\uFF0C\u5411\u5176\u589E\u52A0\u6216\u5220\u9664\u4E00\u4E2A\u503C\u540E\uFF0C\u518D\u4F7F\u7528Global.mark\u653E\u56DE\u6811\u4E2D\u3002'
	                ),
	                _react2["default"].createElement('pre', { dangerouslySetInnerHTML: { __html: '/*\n   \u5728\u4EFB\u610F\u65F6\u523B\u6216\u5728\u6D4F\u89C8\u5668\u63A7\u5236\u53F0\u4E2D\u8C03\u7528\u4EE5\u4E0B\u4EE3\u7801\u540E\uFF0C\u6811\u5C06\u53D8\u66F4\u4E3A:\n   {\n        demo:{\n                node1:&#39;newValues&#39;,\n                node2:{\n                       node2_1:&#39;node2_1&#39;\n                }\n        }\n    }\n    \u754C\u9762\u4E0A\u5C06\u663E\u793A\u6587\u5B57 "newValue" \n*/\nGlobal.mark({\n                demo:{\n                        node1:"newValue"\n                     }\n            });\n\n//\u5411\u6570\u7EC4\u4E2D\u8282\u70B9\u4E2D\u6DFB\u52A0\u4E00\u4E2A\u65B0\u503C\nlet someArr = Global.getState().someRoot.someArr;\nsomeArr.push(\'newValue\');\nGlobal.mark({\n    someRoot:{\n        someArr:someArr\n    }\n})\n\n//\u6E05\u7A7A\u6570\u7EC4\u8282\u70B9\nGlobal.mark({\n    someRoot:{\n        someArr:[]\n    }\n})\n'
	                    } }),
	                _react2["default"].createElement(
	                    'div',
	                    null,
	                    '\u5F00\u53D1\u73AF\u5883\u4E2D\u53EF\u4EE5\u901A\u8FC7\u5FEB\u6377\u952E ctl+alt+h \u6253\u5F00\u6811\u7684\u8C03\u8BD5\u89C6\u56FE'
	                ),
	                _react2["default"].createElement(
	                    'div',
	                    { className: 'code' },
	                    _react2["default"].createElement('img', { src: 'images/treePanel.jpg' })
	                ),
	                _react2["default"].createElement(
	                    'div',
	                    null,
	                    '\u4E5F\u53EF\u4EE5\u901A\u8FC7js\u7684Global.getState()\u67E5\u770B\u6574\u68F5\u6811'
	                ),
	                _react2["default"].createElement(
	                    'div',
	                    null,
	                    '\u9ED8\u8BA4\u6A21\u5F0F\u4EE5\u6811\u7684\u6BCF\u6761\u6839\u8282\u70B9\u4E3A\u72EC\u7ACB\u5206\u679D\uFF0C\u6839\u8282\u70B9\u7684\u53D8\u5316\u53EA\u5F71\u54CD\u5F53\u524D\u6839\u8282\u70B9\u4E0A\u7684\u89C6\u56FE'
	                )
	            ),
	            _react2["default"].createElement(
	                'h3',
	                null,
	                '\u5176\u5B83'
	            ),
	            _react2["default"].createElement(
	                'div',
	                { style: { paddingLeft: 20 } },
	                _react2["default"].createElement(
	                    'div',
	                    null,
	                    '\u5FC5\u987B\u5728reducers/index.js\u4E2D\u5B9A\u4E49\u9ED8\u8BA4\u8282\u70B9\uFF0C\u5C3D\u91CF\u5728reducers/index.js\u5B9A\u4E49\u9ED8\u8BA4\u503C\uFF0C\u4E5F\u53EF\u4EE5\u5728\u7EC4\u4EF6constructor\u4E2D\u5B9A\u4E49\u9ED8\u8BA4\u503C'
	                ),
	                _react2["default"].createElement(
	                    'div',
	                    null,
	                    '\u6BCF\u4E2AGlobal.mark\u90FD\u662F\u4E00\u4E2A\u884C\u4E3A\uFF0C\u4F7F\u7528Global.mark\u65F6\u4F20\u9012\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF08\u884C\u4E3A\u540D\uFF09\uFF0C\u6807\u8BC6\u51FA\u5F53\u524D\u4FEE\u6539\u884C\u4E3A\u7684\u540D\u79F0\uFF0C\u4F7F\u6240\u6709\u7684\u884C\u4E3A\u90FD\u662F\u53EF\u8FFD\u8E2A\u7684\u3002'
	                ),
	                _react2["default"].createElement(
	                    'div',
	                    null,
	                    '\u6574\u4E2A\u9879\u76EE\u7684\u8FC7\u7A0B\u662F\u53EF\u5206\u6790\u7684\uFF0C\u9879\u76EE\u6240\u6709\u7684\u884C\u4E3A\u548C\u6240\u6709\u72B6\u6001\u53D8\u52A8\uFF0C\u90FD\u88AB\u8BB0\u5F55\u5728\u6811\u7684\u8C03\u8BD5\u9762\u677F\u4E2D\uFF0C\u5728\u4EFB\u610F\u65F6\u523B\u90FD\u53EF\u4EE5\u67E5\u770B\u5386\u53F2\u884C\u4E3A\u548C\u6811\u7684\u5386\u53F2\u72B6\u6001\u6216\u53D8\u5316\uFF0C\u8FD9\u662F\u533A\u522B\u4E0E\u4F20\u7EDF\u9879\u76EE\u5F00\u53D1\u7A81\u51FA\u7279\u70B9\u3002'
	                )
	            )
	        )
	    });
	});

/***/ }
]);