webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(6);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(5);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(268);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(12);

	var _AiForm = __webpack_require__(30);

	var _AiForm2 = _interopRequireDefault(_AiForm);

	var _component = __webpack_require__(14);

	var _component2 = _interopRequireDefault(_component);

	var _reactRouter = __webpack_require__(88);

	var _AiFormTable = __webpack_require__(438);

	var _AiFormTable2 = _interopRequireDefault(_AiFormTable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var AddInterface = function (_Component) {
	  (0, _inherits3["default"])(AddInterface, _Component);

	  function AddInterface(props) {
	    (0, _classCallCheck3["default"])(this, AddInterface);

	    var _this = (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));

	    _this.onClickCreator = _this.onClickCreator.bind(_this);
	    _global.Global.mark({
	      pageLoader: {
	        inst: {
	          source: ""
	        }

	      }
	    }, 'addInterface_init');
	    return _this;
	  }

	  AddInterface.prototype.onClickCreator = function onClickCreator(values) {
	    var source = void 0;
	    var dynamics = [];
	    if (!values.isGlobalInterface) {
	      dynamics.push('"apiName":"' + values.apiName + '"');
	    }
	    if (values.url != '') {
	      dynamics.push('"url":"' + values.url + '"');
	    }
	    if (values.remoteUrl != '') {
	      dynamics.push('"remoteUrl":"' + values.remoteUrl + '"');
	    }
	    if (values.method != 'get') {
	      dynamics.push('"method":"' + values.method + '"');
	    }
	    if (values.body != '{}') {
	      dynamics.push('"body":' + values.body);
	    }
	    if (values.dataType != 'json') {
	      dynamics.push('"dataType":"' + values.dataType + '"');
	      if (values.jsonpCallbackName == '') {
	        //dynamics.push(`"jsonpCallbackName":"${values.apiName}"`)
	      } else {
	        dynamics.push('"jsonpCallbackName":"' + values.jsonpCallbackName + '"');
	      }
	    }
	    if (values.next != '(action)=>{}') {
	      dynamics.push('"next":' + values.next);
	    }
	    var dynamicStr = dynamics.join(',');

	    if (values.isGlobalInterface) {
	      source = '//\u5168\u5C40\u63A5\u53E3\u8BF7\u589E\u52A0\u4EE5\u4E0B\u63A5\u53E3\u4EE3\u7801\u5230 src/interfaces.js\n"' + values.apiName + '":{' + dynamicStr + '}';
	    } else {
	      source = '{' + dynamicStr + '}';
	    }

	    _global.Global.mark({
	      pageLoader: {
	        inst: {
	          source: source
	        }
	      }
	    }, 'addInterfacePage_submit');
	  };

	  AddInterface.prototype.render = function render() {
	    var state = this.props.state;
	    if (!state) return _react2["default"].createElement(
	      'div',
	      null,
	      '...'
	    );
	    var config = state.config;
	    var forX = _global.Global.getHtmlArg('for');

	    var creator = {
	      "success": true,
	      "data": [{
	        "title": "接口生成器",
	        "column": 2,
	        "labelCol": 1,
	        "wrapperCol": 23,
	        "showTitle": true,
	        "buttonConfigs": {
	          "buttons": [{ "type": "button", "value": "返回", "field": "back", props: { style: { "float": "right" } } }, { "type": "button", "value": "确定", "field": "submit", props: { style: { "float": "right" }, btnType: "primary", htmlType: "submit" } }]
	        },
	        "data": [{ "type": "input", "name": "接口名称(apiName)", "field": "apiName", "defaultValue": "apiName", "validate": [{ "required": true, "message": 'Please input !' }] }, { "type": "input", "name": "本地静态数据地址(url)", "field": "url", "defaultValue": "" }, { "type": "input", "name": "运程动态数据地址(remoteUrl)", "field": "remoteUrl", defaultValue: "" }, { "type": "select", "name": "数据类型(dataType)", "field": "dataType", "defaultValue": "json", "options": [{ key: "json", value: 'json' }, { key: "jsonp", value: 'jsonp' }], "validate": [] }, { "type": "select", "name": "请求方法(method)", "field": "method", defaultValue: "get", "options": [{ key: 'get', value: 'get' }, { key: 'post', value: 'post' }] }, { "type": "textarea", "name": "请求体(body)", "field": "body", defaultValue: "{}" }, { "type": "textarea", "name": "回调函数(next)", "field": "next", defaultValue: "(action)=>{}" }, { "type": "input", "name": "jsonp回调函数名(jsonpCallbackName)", "field": "jsonpCallbackName", preRender: function preRender() {
	            if (_global.Global.getState().aiForm.aiFormCreator.form.getFieldValue("dataType") != "jsonp") {
	              return 'none';
	            }
	          } }, { "name": "全局接口配置", "type": "switch", "field": "isGlobalInterface", defaultValue: false }, { "type": _react2["default"].createElement(
	            _reactRouter.Link,
	            { to: '/page/interfaceApi', target: '_blank' },
	            '\u67E5\u770BAPI'
	          ), "name": "API", "field": "api" }]
	      }]
	    };
	    var source = this.props.state.source;
	    return _react2["default"].createElement(
	      'div',
	      { className: 'p' },
	      _react2["default"].createElement(
	        'div',
	        { className: 'p' },
	        _react2["default"].createElement(_AiForm2["default"], { id: 'aiFormCreator', onSubmit: this.onClickCreator, fluid: true, config: creator })
	      ),
	      _react2["default"].createElement('textarea', { value: source, style: { width: '100%', height: 400 } })
	    );
	  };

	  return AddInterface;
	}(_react.Component);

	AddInterface = (0, _component2["default"])('pageLoader')(AddInterface);

	(0, _jsonp2["default"])("addInterface")(function (arg, callback) {
	  callback({
	    "success": true,
	    "data": _react2["default"].createElement(AddInterface, { id: 'inst' })
	  });
	});

/***/ }
]);