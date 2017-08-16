webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(29);

	var _button = __webpack_require__(26);

	var _button2 = _interopRequireDefault(_button);

	var _defineProperty2 = __webpack_require__(7);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(6);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(5);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(250);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(12);

	var _AiForm = __webpack_require__(27);

	var _AiForm2 = _interopRequireDefault(_AiForm);

	var _component = __webpack_require__(11);

	var _component2 = _interopRequireDefault(_component);

	var _reactRouter = __webpack_require__(87);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var PageDemo = function (_Component) {
		(0, _inherits3["default"])(PageDemo, _Component);

		function PageDemo(props) {
			(0, _classCallCheck3["default"])(this, PageDemo);

			var _this = (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));

			_global.Global.mark({
				pageDemo: (0, _defineProperty3["default"])({}, props.id, {
					value: "initValue"
				})
			}, 'pageDemo_init');
			return _this;
		}

		PageDemo.prototype.onClickBt = function onClickBt() {
			_global.Global.mark({
				pageDemo: (0, _defineProperty3["default"])({}, this.props.id, {
					value: Math.random()
				})
			}, 'aiFormDoc_onClickFormRouter');
		};

		PageDemo.prototype.render = function render() {
			var state = this.props.state;
			if (!state) return _react2["default"].createElement(
				'div',
				null,
				'...'
			);

			//jsx
			return _react2["default"].createElement(
				'div',
				{ className: 'p' },
				_react2["default"].createElement(
					'h3',
					null,
					'PageDemo'
				),
				_react2["default"].createElement(
					'div',
					{ style: { color: 'red', 'marginLeft': 30 }, className: 'dd' },
					this.props.state.value
				),
				_react2["default"].createElement(
					'div',
					{ className: 'p' },
					_react2["default"].createElement(
						'div',
						null,
						'\u8FD9\u662F\u4E00\u4E2A\u5F02\u6B65\u9875\u9762\uFF0C\u901A\u8FC7\u8DEF\u7531\u5668PageLoader\u52A0\u8F7D\uFF0C\u5B83\u652F\u6301\u5B9E\u65F6\u7F16\u8BD1\u3001\u5B9E\u65F6\u66F4\u65B0\u3001\u6811\u7ED1\u5B9A\uFF0C\u6539\u53D8\u6E90\u7801\u65F6\u4E0D\u7528\u5237\u65B0\u9875\u9762\u81EA\u52A8\u66F4\u65B0\uFF1B\u6539\u53D8\u7ED1\u5B9A\u7684\u6811\u8282\u70B9\u65F6\uFF0C\u89C6\u56FE\u81EA\u52A8\u66F4\u65B0\u3002'
					),
					_react2["default"].createElement(
						'div',
						null,
						'\u6811\u7ED1\u5B9A:',
						this.props.state.value
					),
					_react2["default"].createElement(
						_button2["default"],
						{ type: 'primary', onClick: this.onClickBt.bind(this) },
						'\u70B9\u6211\u6539\u53D8\u6811'
					)
				),
				_react2["default"].createElement('pre', { style: { marginTop: 10 }, dangerouslySetInnerHTML: { __html: '//pageArgs/pageDemo.js\nimport React,{Component} from &#x27;react&#x27;;\nimport {Table,Button,Form,Input,Icon,DatePicker,InputNumber} from &#x27;antFB&#x27;;\nimport callback from &#x27;../core/jsonp&#x27;;\nimport {Global} from &#x27;../core/global&#x27;;\nimport AiForm from &#x27;../components/AiForm&#x27;;\nimport connect from &#x27;../core/component&#x27;;\nimport { Link } from &#x27;react-router&#x27;;\n\nclass PageDemo extends Component{\n\tconstructor(props){\n\t\tsuper(props);\n\t\tGlobal.mark({\n\t\t\tpageDemo:{\n\t\t\t\t[props.id]:{\n\t\t\t\t\tvalue:&quot;initValue&quot;\n\t\t\t\t}\n\t\t\t}\n\t\t},&#x27;pageDemo_init&#x27;);\n\t}\n\tonClickBt (){\n\t\tGlobal.mark({\n\t\t\tpageDemo:{\n\t\t\t\t[this.props.id]:{\n\t\t\t\t\tvalue:Math.random()\n\t\t\t\t}\n\t\t\t}\n\t\t},&#x27;aiFormDoc_onClickFormRouter&#x27;);\n\t}\n\trender(){\n\t\tlet state = this.props.state;\n\t\tif(!state) return &lt;div&gt;...&lt;/div&gt;\n\t\t\n\t\treturn &lt;div className=&#x27;p&#x27;&gt;\n                    &lt;h3&gt;PageDemo&lt;/h3&gt;\n\t\t\t\t\t&lt;div className=&#x27;p&#x27;&gt;\n\t\t\t\t\t\t&lt;div&gt;\u8FD9\u662F\u4E00\u4E2A\u5F02\u6B65\u9875\u9762\uFF0C\u901A\u8FC7\u8DEF\u7531\u5668PageLoader\u52A0\u8F7D\uFF0C\u5B83\u652F\u6301\u5B9E\u65F6\u7F16\u8BD1\u3001\u5B9E\u65F6\u66F4\u65B0\u3001\u6811\u7ED1\u5B9A\uFF0C\u6539\u53D8\u6E90\u7801\u65F6\u4E0D\u7528\u5237\u65B0\u9875\u9762\u81EA\u52A8\u66F4\u65B0\uFF1B\u6539\u53D8\u7ED1\u5B9A\u7684\u6811\u8282\u70B9\u65F6\uFF0C\u89C6\u56FE\u81EA\u52A8\u66F4\u65B0\u3002&lt;/div&gt;\n\t\t\t\t\t\t&lt;div&gt;\u6811\u7ED1\u5B9A:{this.props.state.value}&lt;/div&gt;\n\t\t\t\t\t\t&lt;Button onClick={this.onClickBt.bind(this)}&gt;\n\t\t\t\t\t\t\t\u70B9\u6211\u6539\u53D8\u6811\n\t\t\t\t\t\t&lt;/Button&gt;\n\t\t\t\t\t&lt;/div&gt;\n                    &lt;pre dangerouslySetInnerHTML={{__html:\n&#x60;//pageArgs/pageDemo.js\n\n&#x60;}}&gt;                                \n                     &lt;/pre&gt;\n\t\t\t\t\t\t\n\t\t\t\t\t\t\n                &lt;/div&gt;\n\t}\n}\n\nPageDemo = connect(&#x27;pageDemo&#x27;)(PageDemo)\n\ncallback(&quot;pageDemo&quot;)((arg,callback)=&gt;{\n    callback({\n        &quot;success&quot;: true,\n        &quot;data&quot;:&lt;PageDemo id=&quot;pageDemo_inst&quot;/&gt;\n    })\n})\n' } })
			);
		};

		return PageDemo;
	}(_react.Component);

	PageDemo = (0, _component2["default"])('pageDemo')(PageDemo);

	(0, _jsonp2["default"])("pageDemo")(function (arg, callback) {
		callback({
			"success": true,
			"data": _react2["default"].createElement(PageDemo, { id: 'pageDemo_inst' })
		});
	});

/***/ }
]);