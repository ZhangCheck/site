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

	var AddPage = function (_Component) {
	  (0, _inherits3["default"])(AddPage, _Component);

	  function AddPage(props) {
	    (0, _classCallCheck3["default"])(this, AddPage);

	    var _this = (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));

	    _this.onClickCreator = _this.onClickCreator.bind(_this);
	    _global.Global.mark({
	      pageLoader: {
	        inst: {
	          source: ""
	        }

	      }
	    }, 'addAiForm_init');
	    return _this;
	  }

	  AddPage.prototype.onClickCreator = function onClickCreator(values) {
	    var className = values.pageName.charAt(0).toUpperCase() + values.pageName.substr(1);
	    var source = '//\u751F\u6210\u65E5\u671F\uFF1A' + new Date() + '\n//\u8BF7\u624B\u52A8\u521B\u5EFA\u9875\u9762\u6587\u4EF6 "src/pageArgs/' + values.pageName + '.js"\uFF0C\u5E76\u586B\u5145\u5F53\u524D\u5185\u5BB9\n//\u521B\u5EFA\u6587\u4EF6\u540E\uFF0C\u6D4F\u89C8\u8DEF\u7531\u5730\u5740\u201C#/page/' + values.pageName + '",\u53EF\u67E5\u770B\u5230\u9875\u9762\u5B9E\u9645\u6548\u679C\nimport React,{Component} from \'react\';\nimport {Table,Button,Form,Input,Icon,DatePicker,InputNumber} from \'antFB\';\nimport callback from \'../core/jsonp\';\nimport {Global} from \'../core/global\';\nimport AiForm from \'../components/AiForm\';\nimport connect from \'../core/component\';\nimport { Link } from \'react-router\';\n\nclass ' + className + ' extends Component{\n\tconstructor(props){\n\t\tsuper(props);\n\t\tthis.onClickBt = this.onClickBt.bind(this);\n\t\tGlobal.mark({\n\t\t\t' + values.connect + ':{ \n\t\t\t\t[props.id||\'undefined\']:{\n\t\t\t\t\tvalue:"initValue"\n\t\t\t\t}\n\t\t\t}\n\t\t},\'' + className + '_init\'); \n\t}\n\tonClickBt (){\n\t\tGlobal.mark({\n\t\t\t' + values.connect + ':{\n\t\t\t\t[this.props.id]:{\n\t\t\t\t\tvalue:Math.random()\n\t\t\t\t}\n\t\t\t}\n\t\t},\'aiFormDoc_onClickFormRouter\');\n\t}\n\trender(){\n\t\tlet state = this.props.state;\n\t\tif(!state) return <div>...</div>\n\t\t\n\t\treturn <div className=\'p\'> \n                <h3>' + className + '</h3>\n                <div style={{paddingLeft:30}}>\n                  <div>\u8FD9\u662F\u4E00\u4E2A\u5F02\u6B65\u9875\u9762\uFF0C\u901A\u8FC7\u8DEF\u7531\u5668PageLoader\u52A0\u8F7D\uFF0C\u5B83\u652F\u6301\u5B9E\u65F6\u7F16\u8BD1\u3001\u6811\u7ED1\u5B9A\uFF0C\u6539\u53D8\u6E90\u7801\u65F6\u4E0D\u7528\u5237\u65B0\u9875\u9762\u81EA\u52A8\u66F4\u65B0\uFF1B\u6539\u53D8\u7ED1\u5B9A\u7684\u6811\u8282\u70B9\u65F6\uFF0C\u89C6\u56FE\u81EA\u52A8\u66F4\u65B0\u3002</div>\n                  <div>\u6811\u7ED1\u5B9A:{this.props.state.value}</div>\n                  <Button type=\'primary\' onClick={this.onClickBt}>\n                    \u4E8B\u4EF6\u5904\u7406\n                  </Button>\n                </div>\n           </div>\n\t}\n}\n\n' + className + ' = connect("' + values.connect + '")(' + className + ')\n\ncallback("' + values.pageName + '")((arg,callback)=>{\n    callback({\n        "success": true,\n        "data":<' + className + ' id="' + values.instanceName + '"/>\n    })\n})';

	    _global.Global.mark({
	      pageLoader: {
	        inst: {
	          source: source
	        }
	      }
	    }, 'addPage_submit');
	  };

	  AddPage.prototype.componentWillUnmount = function componentWillUnmount() {
	    _global.Global.mark({
	      pageLoader: {
	        inst: {
	          source: ""
	        }
	      }
	    }, 'addPage_submit');
	  };

	  AddPage.prototype.render = function render() {
	    var state = this.props.state;
	    if (!state) return _react2["default"].createElement(
	      'div',
	      null,
	      '...'
	    );
	    var config = state.config;

	    var creator = {
	      "success": true,
	      "data": [{
	        "title": "普通页面生成器",
	        "column": 1,
	        "labelCol": 1,
	        "wrapperCol": 23,
	        "showTitle": true,
	        "buttonConfigs": {
	          "buttons": [{ "type": "button", "value": "返回", "field": "back", props: { style: { "float": "right" } } }, { "type": "button", "value": "确定", "field": "submit", props: { style: { "float": "right" }, btnType: "primary", htmlType: "submit" } }]
	        },
	        "data": [{ "type": "input", "name": "页面名称", "field": "pageName", "defaultValue": "pageName", "validate": [{ "required": true, "message": 'Please input !' }] }, { "type": "input", "name": "关联树", "field": "connect", "defaultValue": "pageDemo", "validate": [{ "required": true, "message": 'Please input !' }] }, { "type": "input", "name": "树实例名", "field": "instanceName", "defaultValue": "instance1", "validate": [{ "required": true, "message": 'Please input !' }] }, { "type": _react2["default"].createElement(
	            _reactRouter.Link,
	            { to: '/page/pageDemo', target: '_blank' },
	            '\u67E5\u770B\u5B9E\u4F8B'
	          ), "name": "页面实例", "field": "api" }]
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

	  return AddPage;
	}(_react.Component);

	AddPage = (0, _component2["default"])('pageLoader')(AddPage);

	(0, _jsonp2["default"])("addPage")(function (arg, callback) {
	  callback({
	    "success": true,
	    "data": _react2["default"].createElement(AddPage, { id: 'inst' })
	  });
	});

/***/ }
]);