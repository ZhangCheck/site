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

	(0, _jsonp2["default"])("page")(function (arg, callback) {
	    callback({
	        "success": true,
	        "data": _react2["default"].createElement(
	            'div',
	            { style: { padding: 10 } },
	            _react2["default"].createElement(
	                'h3',
	                null,
	                '\u5D4C\u5165\u5F0F\u9875\u9762\u7684\u521B\u5EFA'
	            ),
	            _react2["default"].createElement(
	                'div',
	                { style: { paddingLeft: 20 } },
	                _react2["default"].createElement(
	                    'div',
	                    null,
	                    '\u5D4C\u5165\u9875\u9762\u662F\u6307\u5C06\u88AB\u6253\u5305\u5230index.js\u4E2D\u7684\u9875\u9762,\u5D4C\u5165\u5F0F\u9875\u9762\u5199\u5728src/containers\u6587\u4EF6\u5939\u4E0B'
	                ),
	                _react2["default"].createElement(
	                    'div',
	                    null,
	                    '\u5D4C\u5165\u9875\u9762\u901A\u5E38\u5728index.dev.js\u6216\u7531\u5176\u5B83\u5D4C\u5165\u9875\u9762\u901A\u8FC7import\u5F15\u5165'
	                ),
	                _react2["default"].createElement(
	                    'div',
	                    null,
	                    '\u5D4C\u5165\u5F0F\u9875\u9762\u5C06\u589E\u52A0\u9879\u76EE\u5927\u5C0F(index.js)'
	                ),
	                _react2["default"].createElement(
	                    'div',
	                    null,
	                    _react2["default"].createElement(
	                        _reactRouter.Link,
	                        { to: 'componentDemo' },
	                        '\u70B9\u51FB\u67E5\u770B\u5D4C\u5165\u5F0F\u9875\u9762\u5B9E\u4F8B'
	                    )
	                ),
	                _react2["default"].createElement('pre', { dangerouslySetInnerHTML: { __html: '//containers/page.js\nimport React, { Component, PropTypes } from &#x27;react&#x27;;\nimport CustomComponent from &#x27;../components/CustomComponent&#x27;;\nimport connect from &#x27;../core/compoent&#x27;;\n\nclass ComponentDemo extends Component{\n    render() {\n        console.log(&quot;render customDemo&quot;);\n        return (\n            &lt;div&gt;\n                &lt;CustomComponent id=&quot;customDemo&quot;/&gt;\n            &lt;/div&gt;\n        );\n    }\n}\n\nexport default connect(&#x27;nothing&#x27;)(ComponentDemo)\n' } })
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
	                    '\u5F02\u6B65\u9875\u9762\u9700\u8981\u7B26\u5408\u4E00\u5B9A\u7684\u683C\u5F0F\uFF0C\u624D\u901A\u88AB\u52A0\u8F7D\u540E\u8C03\u7528\uFF0C\u8BF7\u53C2\u89C1\u4E0B\u9762\u7684\u5B9E\u4F8B'
	                ),
	                _react2["default"].createElement(
	                    _reactRouter.Link,
	                    { to: 'page/pageDemo' },
	                    '\u70B9\u51FB\u67E5\u770B\u5F02\u6B65\u9875\u9762\u5B9E\u4F8B'
	                ),
	                _react2["default"].createElement('pre', { dangerouslySetInnerHTML: { __html: '//pageArgs/pageDemo.js\nimport React,{Component} from &#x27;react&#x27;;\nimport {Table,Button,Form,Input,Icon,DatePicker,InputNumber} from &#x27;antFB&#x27;;\nimport callback from &#x27;../core/jsonp&#x27;;\nimport {Global} from &#x27;../core/global&#x27;;\nimport AiForm from &#x27;../components/AiForm&#x27;;\nimport connect from &#x27;../core/component&#x27;;\nimport { Link } from &#x27;react-router&#x27;;\n\nclass PageDemo extends Component{\n    constructor(props){\n        super(props);\n        Global.mark({\n            pageDemo:{\n                [props.id]:{\n                    value:&quot;initValue&quot;\n                }\n            }\n        },&#x27;pageDemo_init&#x27;);\n    }\n    onClickBt (){\n        Global.mark({\n            pageDemo:{\n                [this.props.id]:{\n                    value:Math.random()\n                }\n            }\n        },&#x27;aiFormDoc_onClickFormRouter&#x27;);\n    }\n    render(){\n        let state = this.props.state;\n        if(!state) return &lt;div&gt;...&lt;/div&gt;\n        \n        return &lt;div className=&#x27;p&#x27;&gt;\n                    &lt;h3&gt;PageDemo&lt;/h3&gt;\n                    &lt;div className=&#x27;p&#x27;&gt;\n                        &lt;div&gt;\u8FD9\u662F\u4E00\u4E2A\u5F02\u6B65\u9875\u9762\uFF0C\u901A\u8FC7\u8DEF\u7531\u5668PageLoader\u52A0\u8F7D\uFF0C\u5B83\u652F\u6301\u5B9E\u65F6\u7F16\u8BD1\u3001\u5B9E\u65F6\u66F4\u65B0\u3001\u6811\u7ED1\u5B9A\uFF0C\u6539\u53D8\u6E90\u7801\u65F6\u4E0D\u7528\u5237\u65B0\u9875\u9762\u81EA\u52A8\u66F4\u65B0\uFF1B\u6539\u53D8\u7ED1\u5B9A\u7684\u6811\u8282\u70B9\u65F6\uFF0C\u89C6\u56FE\u81EA\u52A8\u66F4\u65B0\u3002&lt;/div&gt;\n                        &lt;div&gt;\u6811\u7ED1\u5B9A:{this.props.state.value}&lt;/div&gt;\n                        &lt;div onClick={this.onClickBt.bind(this)}&gt;\n                            \u70B9\u6211\u6539\u53D8\u6811\n                        &lt;/div&gt;\n                    &lt;/div&gt;\n                    &lt;pre dangerouslySetInnerHTML={{__html:\n&#x60;//pageArgs/pageDemo.js\n\n&#x60;}}&gt;                                \n                     &lt;/pre&gt;\n                        \n                        \n                &lt;/div&gt;\n    }\n}\n\nPageDemo = connect(&#x27;pageDemo&#x27;)(PageDemo)\n\ncallback(&quot;pageDemo&quot;)((arg,callback)=&gt;{\n    callback({\n        &quot;success&quot;: true,\n        &quot;data&quot;:&lt;PageDemo id=&quot;pageDemo_inst&quot;/&gt;\n    })\n})\n' } })
	            )
	        )
	    });
	});

/***/ }
]);