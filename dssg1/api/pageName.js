webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

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

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(10);

	var _AiForm = __webpack_require__(27);

	var _AiForm2 = _interopRequireDefault(_AiForm);

	var _component = __webpack_require__(11);

	var _component2 = _interopRequireDefault(_component);

	var _reactRouter = __webpack_require__(88);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	//生成日期：Wed Jun 07 2017 17:14:59 GMT+0800 (中国标准时间)
	//请手动创建页面文件 "src/pageArgs/pageName.js"，并填充当前内容
	//创建文件后，浏览路由地址“#/page/pageName",可查看到页面实际效果
	var PageName = function (_Component) {
	  (0, _inherits3["default"])(PageName, _Component);

	  function PageName(props) {
	    (0, _classCallCheck3["default"])(this, PageName);

	    var _this = (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));

	    _global.Global.mark({
	      aiForm: (0, _defineProperty3["default"])({}, props.id, {})
	    }, 'PageName_init');
	    return _this;
	  }

	  PageName.prototype.render = function render() {
	    var state = this.props.state;
	    if (!state) return _react2["default"].createElement(
	      'div',
	      null,
	      '...'
	    );
	    var config = {
	      "success": true,
	      "data": [{
	        "title": "我是栏目一",
	        "column": 3,
	        "labelCol": 8,
	        "wrapperCol": 16,
	        "showTitle": true,
	        "buttonConfigs": {
	          "buttons": [{ "type": "button", "value": "返回", "field": "back", props: { style: { "float": "right" } } }, { "type": "button", "value": "确定", "field": "submit", props: { style: { "float": "right" }, btnType: "primary", htmlType: "submit" } }]
	        },
	        "data": [{ "name": "label", "type": "input", "field": "fieldName", "validate": [] }]
	      }]
	    };

	    return _react2["default"].createElement(
	      'div',
	      { style: { width: '100%', height: '100%' } },
	      _react2["default"].createElement(_AiForm2["default"], { fluid: false, config: config })
	    );
	  };

	  return PageName;
	}(_react.Component);

	PageName = (0, _component2["default"])("aiForm")(PageName);

	(0, _jsonp2["default"])("pageName")(function (arg, callback) {
	  callback({
	    "success": true,
	    "data": _react2["default"].createElement(PageName, { id: 'inst1' })
	  });
	});

/***/ }
]);