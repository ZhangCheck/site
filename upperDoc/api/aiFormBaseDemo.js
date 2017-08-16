webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(55);

	var _input = __webpack_require__(96);

	var _input2 = _interopRequireDefault(_input);

	var _css2 = __webpack_require__(49);

	var _form = __webpack_require__(47);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(250);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(12);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var FormItem = _form2["default"].Item;

	(0, _jsonp2["default"])("aiFormBaseDemo")(function (args, callback) {
	    var target = args.target;
	    var getFieldDecorator = target.props.form.getFieldDecorator;
	    var server = "http://192.168.80.11:8081/api/";
	    callback({
	        "success": true,
	        "data": [{
	            "title": "我是栏目一",
	            "column": 3,
	            "labelCol": 8,
	            "wrapperCol": 16,
	            "showTitle": true,
	            "buttonConfigs": {
	                "buttons": [{ "type": "button", "value": "返回", "field": "back", props: { style: { "float": "right" } } }, { "type": "button", "value": "确定", "field": "submit", props: { style: { "float": "right", backgroundColor: "red" }, btnType: "primary", htmlType: "submit" } }]
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
	                }] }, { "name": "checkbox", "type": "checkbox", "field": "sports", "options": ["篮球", "足球", "乒乓球"], "defaultValue": ["篮球", "乒乓球"] }, { "name": "switch", "type": "switch", "field": "switch" }, { "name": "radio", "type": "radio", "field": "radio", "options": ["篮球", "足球", "乒乓球"], "defaultValue": "足球" }, { "name": "radio1", "type": "radio1", "field": "radio1", "options": [{ "value": "baskeball", "key": "篮球王子" }, { "value": "football", "key": "足球" }, { "value": "football", "key": "足球" }], "defaultValue": "football" }, { "name": "TimePicker", "type": "timePicker", "field": "timePicker", "defaultValue": "12:40", "help": "请填写信息" }, { "name": "rangePicker", "type": "rangePicker", "field": "rangePicker" }, { "value": function value(config) {
	                    return _react2["default"].createElement(
	                        FormItem,
	                        {
	                            label: '\u59D3\u540D',
	                            labelCol: { span: 8 },
	                            wrapperCol: { span: 14 },
	                            hasFeedback: true,
	                            help: '\u6211\u662F\u63D0\u793A\u4FE1\u606F'
	                        },
	                        getFieldDecorator("ccc", {
	                            initialValue: "你好，我是自定义标签"
	                        })(_react2["default"].createElement(_input2["default"], { name: 'username' }))
	                    );
	                }
	            }, { "type": "treeSelect", "name": "主题分类", props: { onSelect: function onSelect() {
	                        alert(123123);
	                    } }, "field": "themeType", dictId: "themeType", dictApi: { apiName: 'flglDataTree', body: { categoryType: 1 } } }, { "type": "treeSelect", "name": "部门分类", "field": "departmentType", dictId: "departmentType", dictApi: { apiName: 'flglDataTree', body: { categoryType: 2 } } }, { "name": "接口文档上传", "type": "upload", "field": "apiDoc1", props: { multiple: true, action: server + 'fileUpload/uploadFile' } }, { "type": "input", "name": "方法", "field": "methods", "validate": [{ "required": true, "message": 'Please input !' }] }, { "name": "请求方法", "type": "select", "field": "requestMode", "dictId": "requestMode", "placeholder": "请选择..." }]
	        }]
	    });
	});

/***/ }
]);