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

	var AddComponent = function (_Component) {
	  (0, _inherits3["default"])(AddComponent, _Component);

	  function AddComponent(props) {
	    (0, _classCallCheck3["default"])(this, AddComponent);

	    var _this = (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));

	    _this.onClickCreator = _this.onClickCreator.bind(_this);
	    _global.Global.mark({
	      pageLoader: {
	        inst: {
	          source: ""
	        }
	      }
	    }, 'addComponent_init');
	    return _this;
	  }

	  AddComponent.prototype.onClickCreator = function onClickCreator(values) {
	    var className = values.className.charAt(0).toUpperCase() + values.className.substr(1);
	    var source = '//\u8BF7\u624B\u52A8\u521B\u5EFA\u7EC4\u4EF6\u6587\u4EF6 "src/components/' + className + '.js"\uFF0C\u5E76\u586B\u5145\u4EE5\u4E0B\u5185\u5BB9\uFF1A\n//\u751F\u6210\u65E5\u671F\uFF1A' + new Date() + '\n\n//import styles from \'./CustomComponent.less\';\nimport React, { Component, PropTypes } from \'react\';\nimport connect from \'../core/component\';\nimport Global from \'../core/global\';\n\nclass ' + className + ' extends Component{  \n    constructor(props){\n        super(props);\n        //\u521D\u59CB\u5316\u6811\n        Global.mark({o\n            ' + values.connect + ':{\n                [this.props.id||\'undefined\']:{\n                    customProp:\'good\'\n                }\n            }\n        },\'' + className + '_init\'); \n    }\n    render(){ \n    \tlet state = this.props.state;\n    \tif(!state) return <div>...</div>\n      return  <div style={{marginTop:10}}>\n                <span className={styles.text}>\u8FD9\u662F\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7EC4\u4EF6, \u6811\u8282\u70B9\u503C:{state.customProp}</span> \n              </div>\n    }\n}\n\nexport default connect("' + values.connect + '",null,' + values.otherState + ')(' + className + ')\n';
	    /*let otherState = 'null';
	    if(values.otherState){
	      otherState =
	    `(state,props)=>{
	    }`
	    }*/
	    _global.Global.mark({
	      pageLoader: {
	        inst: {
	          source: source
	        }
	      }
	    }, 'addComponent_submit');
	  };

	  AddComponent.prototype.render = function render() {
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
	        "title": "组件生成器",
	        "column": 2,
	        "labelCol": 1,
	        "wrapperCol": 23,
	        "showTitle": true,
	        "buttonConfigs": {
	          "buttons": [{ "type": "button", "value": "返回", "field": "back", props: { style: { "float": "right" } } }, { "type": "button", "value": "确定", "field": "submit", props: { style: { "float": "right" }, btnType: "primary", htmlType: "submit" } }]
	        },
	        "data": [{ "type": "input", "name": "类名", "field": "className", "defaultValue": "SomeComponentClassName", "validate": [{ "required": true, "message": 'Please input !' }] }, { "type": "input", "name": "关联树(props.state)", "field": "connect", "defaultValue": "customComponent", "validate": [{ "required": true, "message": 'Please input !' }] }, { "type": "textarea", "name": "相关树(props.*)", "field": "otherState", defaultValue: "null" }, { name: '相关树实例', column: 1, field: 'otherStateDsc', type: _react2["default"].createElement('pre', { dangerouslySetInnerHTML: { __html: '(state,props)=&gt;{\n    return {\n      framework:state.framework\n    }\n }' } }) }, { "type": _react2["default"].createElement(
	            _reactRouter.Link,
	            { to: '/page/component', target: '_blank' },
	            '\u67E5\u770BAPI'
	          ), "name": "AiForm API", "field": "api" }]
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

	  return AddComponent;
	}(_react.Component);

	AddComponent = (0, _component2["default"])('pageLoader')(AddComponent);

	(0, _jsonp2["default"])("addComponent")(function (arg, callback) {
	  callback({
	    "success": true,
	    "data": _react2["default"].createElement(AddComponent, { id: 'inst' })
	  });
	});

/***/ }
]);