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

	var _jsonp = __webpack_require__(250);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(12);

	var _AiForm = __webpack_require__(27);

	var _AiForm2 = _interopRequireDefault(_AiForm);

	var _component = __webpack_require__(11);

	var _component2 = _interopRequireDefault(_component);

	var _reactRouter = __webpack_require__(87);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	//生成日期：Thu Jun 01 2017 16:28:37 GMT+0800 (中国标准时间)
	//请手动创建页面文件 "src/pageArgs/aiFormPageDemo.js"，并填充当前内容
	//创建文件后，浏览路由地址“#/page/aiFormPageDemo",可查看到页面实际效果
	var AiFormPageDemo = function (_Component) {
	  (0, _inherits3["default"])(AiFormPageDemo, _Component);

	  function AiFormPageDemo(props) {
	    (0, _classCallCheck3["default"])(this, AiFormPageDemo);

	    var _this = (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));

	    _global.Global.mark({
	      aiForm: (0, _defineProperty3["default"])({}, props.id, {})
	    }, 'AiFormPageDemo_init');
	    return _this;
	  }

	  AiFormPageDemo.prototype.render = function render() {
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
	        "labelCol": undefined,
	        "wrapperCol": 16,
	        "showTitle": true,
	        "buttonConfigs": {
	          "buttons": [{ "type": "button", "value": "返回", "field": "back", props: { style: { "float": "right" } } }, { "type": "button", "value": "确定", "field": "submit", props: { style: { "float": "right" }, btnType: "primary", htmlType: "submit" } }]
	        },
	        "data": [{ "name": "服务类型", "type": "select", "column": 1, "labelCol": 8, "wrapperCol": 16, "field": "serviceType", "dictId": "serviceType", "defaultValue": "1", value: "2", "placeholder": "请选择..." }, { "name": "字典项获取下拉数据", "type": "select", "field": "boxs", "dictId": "21", "validate": [{
	            "required": true, "message": 'Please input your E-mail!'
	          }], "placeholder": "请选择..." }, { "name": "接口获取下拉数据", "type": "select", "field": "name", "validate": [{
	            "required": true, "message": 'Please input your E-mail!'
	          }], "dictId": "resName", "dictApi": { apiName: "getResName" }, "placeholder": "请选择..." }, { "name": "无字典项", "type": "select", "field": "sex", "placeholder": "请选择...", "defaultValue": "篮球", "options": ["篮球", "足球", "乒乓球"] }, { "type": "treeSelect", "name": "treeSelect1", "field": "themeType", dictId: "themeType", dictApi: { apiName: 'flglData' }, "defaultValue": "常驻人口", "validate": [{
	            "required": true, "message": '不能为空!'
	          }] }, { "name": "邮箱", "type": "input", "field": "email", "defaultValue": "tiangb@fable.cn",
	          "validate": [{
	            "type": 'email', "message": 'The input is not valid E-mail!'
	          }, {
	            "required": true, "message": 'Please input your E-mail!'
	          }] }, { "name": "checkbox", "type": "checkbox", "field": "sports", "options": ["篮球", "足球", "乒乓球"], "defaultValue": ["篮球", "乒乓球"] }, { "name": "switch", "type": "switch", "field": "switch" }, { "name": "radio", "type": "radio", "field": "radio", "options": ["篮球", "足球", "乒乓球"], "defaultValue": "足球" }, { "name": "radio1", "type": "radio1", "field": "radio1", "options": [{ "value": "baskeball", "key": "篮球王子" }, { "value": "football", "key": "足球" }, { "value": "football", "key": "足球" }], "defaultValue": "football" }, { "name": "TimePicker", "type": "timePicker", "field": "timePicker", "defaultValue": "12:40", "help": "请填写信息" }, { "name": "rangePicker", "type": "rangePicker", "field": "rangePicker" }, { "type": "treeSelect", "name": "主题分类", props: { onSelect: function onSelect() {
	              alert(123123);
	            } }, "field": "themeType", dictId: "themeType", dictApi: { apiName: 'flglDataTree', body: { categoryType: 1 } } }, { "type": "treeSelect", "name": "部门分类", "field": "departmentType", dictId: "departmentType", dictApi: { apiName: 'flglDataTree', body: { categoryType: 2 } } }, { "name": "接口文档上传", "type": "upload", "field": "apiDoc1", props: { multiple: true, action: _global.Global.server + 'fileUpload/uploadFile' } }, { "type": "input", "name": "方法", "field": "methods", "validate": [{ "required": true, "message": 'Please input !' }] }, { "name": "请求方法", "type": "select", "field": "requestMode", "dictId": "requestMode", "placeholder": "请选择..." }]
	      }]
	    };

	    return _react2["default"].createElement(
	      'div',
	      { style: { width: '100%', height: '100%' } },
	      _react2["default"].createElement(_AiForm2["default"], { fluid: false, config: config })
	    );
	  };

	  return AiFormPageDemo;
	}(_react.Component);

	AiFormPageDemo = (0, _component2["default"])("aiForm")(AiFormPageDemo);

	(0, _jsonp2["default"])("aiFormPageDemo")(function (arg, callback) {
	  callback({
	    "success": true,
	    "data": _react2["default"].createElement(AiFormPageDemo, { id: 'inst1' })
	  });
	});

/***/ }
]);