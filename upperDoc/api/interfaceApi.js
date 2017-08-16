webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(71);

	var _table = __webpack_require__(68);

	var _table2 = _interopRequireDefault(_table);

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

	var InterfaceApi = function (_Component) {
		(0, _inherits3["default"])(InterfaceApi, _Component);

		function InterfaceApi(props) {
			(0, _classCallCheck3["default"])(this, InterfaceApi);
			return (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));
		}

		InterfaceApi.prototype.render = function render() {
			/*let state = this.props.state;
	  if(!state) return <div>...</div>*/

			var dataSource = [{
				key: 'apiName',
				name: 'apiName',
				age: 'string',
				address: '(\u5FC5\u9009) \u63A5\u53E3\u540D\uFF0C\u5982\u679C\u5168\u5C40\u63A5\u53E3\u914D\u7F6E\u6587\u4EF6(src/interfaces.js)\u4E2D\u5B58\u5728\u540C\u540D\u63A5\u53E3\u914D\u7F6E\uFF0C\u90A3\u4E48\u5408\u5E76\u5F53\u524D\u63A5\u53E3\u548C\u5168\u5C40\u63A5\u53E3\u540E\u53D1\u51FA\u8BF7\u6C42\uFF0C\u5F53\u524D\u63A5\u53E3\u914D\u7F6E\u4F18\u5148\u7EA7\u9AD8\u4E8E\u5168\u5C40\u63A5\u53E3\u914D\u7F6E'
			}, {
				key: 'url',
				name: 'url',
				age: 'string',
				address: '(\u53EF\u9009) \u63A5\u53E3url\u5730\u5740\uFF0C\u4F7F\u7528\u9759\u6001\u6570\u636E\u6E90\uFF08fbMode=16\uFF09\u65F6\uFF0C\u63A5\u53E3\u76F4\u63A5\u8C03\u7528url\u5730\u5740\uFF0C\u4F7F\u7528\u52A8\u6001\u6570\u636E\u6E90\uFF08fbMode=5\uFF09\u65F6\uFF0C\u5982\u679CremoteUrl\u672A\u5B9A\u4E49\uFF0C\u5219\u8C03\u7528url\uFF1B\u5982\u679C\u672A\u5B9A\u4E49\uFF0C\u4E14\u5168\u5C40\u63A5\u53E3\u914D\u7F6E\u4E2D\u4E5F\u672A\u5B9A\u4E49\uFF0C\u5219\u9ED8\u8BA4\u503C\u4E3A"/api/{apiName}"'
			}, {
				key: 'remoteUrl',
				name: 'remoteUrl',
				age: 'string',
				address: '(可选) 接口远程数据源地址,使用动态数据源（fbMode=5）时有效，如果是通用接口服务器上的接口，此值可以使用Global.server获取地址前缀，如Global.server+"somePath"可以等到"{通用接口服务器}/api/somePath"的接口地址'
			}, {
				key: 'method',
				name: 'method',
				age: 'string',
				address: '(可选) 接口请求方法，可选值有"post","get","put","delete","patch"'
			}, {
				key: 'body',
				name: 'body',
				age: 'object|string',
				address: '(可选) 接口上传的数据，如果是get方法，body内容将被组织在网址上发出请求，如果是其它请求，body将被组织在请求体上发出。'
			}, {
				key: 'dataType',
				name: 'dataType',
				age: 'string',
				address: '(\u53EF\u9009) \u63A5\u53E3\u8FD4\u56DE\u503C\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\u6709"json","jsonp"\uFF0C\u9ED8\u8BA4\u503C json,\n"json"\u7528\u4E8E\u8BF7\u6C42\u5E38\u89C4\u63A5\u53E3\u6570\u636E\n"jsonp"\u7528\u4E8E\u52A0\u622A\u5F02\u6B65\u9875\u9762\n\u4F7F\u7528jsonp\u65F6\uFF0C\u9700\u8981\u6EE1\u8DB3\u4EE5\u4E0B\u8981\u4EF6\uFF1A\n\t1\uFF0C\u63A5\u53E3\u914D\u7F6E\u4E2D\u5B9A\u4E49\u4E86"jsonpCallbackName"\uFF0C\u4E14\u503C\u5168\u5C40\u552F\u4E00\n\t2\uFF0C\u5B50\u9875\u9762\u7B26\u5408"\u81EA\u5B9A\u4E49\u9875\u9762"\u89C4\u8303\u4E8C\n\t3\uFF0C\u5B50\u9875\u9762\u4E2D"callback"\u540D\u548C"jsonpCallbackName"\u503C\u76F8\u540C\n\u521B\u5EFA\u5B50\u9875\u9762\u65F6\u53EF\u76F4\u63A5\u514B\u9686pageArgs/pageDemo.js\u9875\u9762'
			}, {
				key: 'jsonpCallbackName',
				name: 'jsonpCallbackName',
				age: "string",
				address: '(可选) jsonp回调名，dataType为jsonp时有效'
			}, {
				key: 'jsonpArgs',
				name: 'jsonpArgs',
				age: "*",
				address: '(可选) 提供给jsonp页面的参数（不建议使用), 向子页面传递数据时，建议通过树传递，jsonp子页面支持树绑定'
			}, {
				key: 'next',
				name: 'next',
				age: "function",
				address: '(可选) 接口回调，发生在接口数据写入到树之前，参数为action,action.data即接口数据；该方法可以用以桥接数据等。'
			}, {
				key: 'proxy',
				name: 'proxy',
				age: "string|function",
				address: '(可选) 接口代理'
			}];

			var columns = [{
				title: '参数名',
				dataIndex: 'name',
				key: 'name',
				width: 200,
				className: 'tbLeft'
			}, {
				title: '类型',
				dataIndex: 'age',
				key: 'age',
				width: 100,
				className: 'tbLeft'
			}, {
				title: '功能描述',
				dataIndex: 'address',
				key: 'address',
				className: 'tbLeft'
			}];

			return _react2["default"].createElement(
				'div',
				{ className: 'p' },
				_react2["default"].createElement(
					'h3',
					null,
					'\u63A5\u53E3\u914D\u7F6E\u53C2\u6570'
				),
				_react2["default"].createElement(
					'div',
					{ className: 'p' },
					_react2["default"].createElement('div', null),
					'\u6BCF\u4E2A\u63A5\u53E3\u914D\u7F6E\uFF0C\u90FD\u53EF\u4EE5\u662F\u4E00\u4E2A\u63A5\u53E3\u914D\u7F6E\u5BF9\u8C61\uFF0C\u6216\u8005\u662F\u4E00\u4E2A\u8FD4\u56DE\u63A5\u53E3\u5BF9\u8C61\u7684\u51FD\u6570,\u4EE5\u4E0B\u662F\u63A5\u53E3\u5BF9\u8C61\u7684\u6240\u6709\u53C2\u6570',
					_react2["default"].createElement(_table2["default"], { pagination: false, columns: columns, dataSource: dataSource })
				)
			);
		};

		return InterfaceApi;
	}(_react.Component);

	InterfaceApi = (0, _component2["default"])('interfaceApi')(InterfaceApi);

	(0, _jsonp2["default"])("interfaceApi")(function (arg, callback) {
		callback({
			"success": true,
			"data": _react2["default"].createElement(InterfaceApi, { id: 'interfaceApi_inst' })
		});
	});

/***/ }
]);