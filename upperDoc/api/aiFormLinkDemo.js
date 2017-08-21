webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(40);

	var _button = __webpack_require__(31);

	var _button2 = _interopRequireDefault(_button);

	var _css2 = __webpack_require__(60);

	var _input = __webpack_require__(114);

	var _input2 = _interopRequireDefault(_input);

	var _css3 = __webpack_require__(59);

	var _form = __webpack_require__(58);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(268);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var FormItem = _form2["default"].Item;

	(0, _jsonp2["default"])("aiFormLinkDemo")(function (args, callback) {
	    var target = args.target;
	    var getFieldValue = target.props.form.getFieldValue;

	    var config = {
	        "success": true,
	        "data": [{
	            "title": "我是栏目",
	            "column": 3,
	            "labelCol": 8,
	            "wrapperCol": 16,
	            "data": [{ "name": "服务类型11", "type": "select", "field": "serviceType", "dictId": "demo", "placeholder": "请选择...", props: {
	                    //onChange:onChange
	                } }, { "name": "性别", "type": "select", "field": "sex", "dictId": "21", "placeholder": "请选择...", preRender: function preRender() {
	                    return getFieldValue('serviceType') == '2' ? "hidden" : "";
	                } }, { "name": "checkbox", "type": "checkbox", "field": "sports", "options": ["篮球", "足球", "乒乓球"], "defaultValue": ["篮球", "乒乓球"] }, { "name": "switch", "type": "switch", "field": "sports1" }, { "name": "radio", "type": "radio", "field": "sports2", "options": ["篮球", "足球", "乒乓球"], "defaultValue": "足球" }, { "name": "radio", "type": "radio1", "field": "sportMan", "options": [{ "value": "baskeball", "lable": "篮球王子" }, { "value": "football", "lable": "足球" }, { "value": "football", "lable": "足球" }], "defaultValue": "football" }, { "name": "TimePicker", "type": "timePicker", "field": "timePicker", "defaultValue": "12:40", "help": "请填写信息" }, { "name": "rangePicker", "type": "rangePicker", "field": "rangePicker" }, { "value": function value(config) {
	                    return _react2["default"].createElement(
	                        FormItem,
	                        {
	                            label: '\u59D3\u540D',
	                            labelCol: { span: 8 },
	                            wrapperCol: { span: 14 },
	                            hasFeedback: true,
	                            help: '\u6211\u662F\u63D0\u793A\u4FE1\u606F' },
	                        _react2["default"].createElement(_input2["default"], { disabled: true, value: 'tiangb@fable.cn', name: 'username' })
	                    );
	                }
	            }, { "type": "input", "name": "方法", "field": "methods", "validate": [{ "required": true, "message": 'Please input !' }] }, { "name": "请求方法", "type": "select", "field": "requestMode", "dictId": "requestMode", "placeholder": "请选择..." }, { "value": function value(config) {
	                    return _react2["default"].createElement(
	                        _button2["default"],
	                        { type: 'primary', htmlType: 'submit' },
	                        'submit'
	                    );
	                } }]
	        }]
	    };

	    callback(config);
	});

/***/ }
]);