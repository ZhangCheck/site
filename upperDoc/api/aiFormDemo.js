webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(268);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(12);

	var _AiForm = __webpack_require__(30);

	var _AiForm2 = _interopRequireDefault(_AiForm);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("aiFormDemo")(function (arg, callback) {
		var config = {
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
					}] }, { "name": "checkbox", "type": "checkbox", "field": "sports", "options": ["篮球", "足球", "乒乓球"], "defaultValue": ["篮球", "乒乓球"] }, { "name": "switch", "type": "switch", "field": "switch" }, { "name": "radio", "type": "radio", "field": "radio", "options": ["篮球", "足球", "乒乓球"], "defaultValue": "足球" }, { "name": "radio1", "type": "radio1", "field": "radio1", "options": [{ "value": "baskeball", "key": "篮球王子" }, { "value": "football", "key": "足球" }, { "value": "football", "key": "足球" }], "defaultValue": "football" }, { "name": "TimePicker", "type": "timePicker", "field": "timePicker", "defaultValue": "12:40", "help": "请填写信息" }, { "name": "rangePicker", "type": "rangePicker", "field": "rangePicker" }, { "type": "treeSelect", "name": "主题分类", props: { onSelect: function onSelect() {
							alert(123123);
						} }, "field": "themeType", dictId: "themeType", dictApi: { apiName: 'flglDataTree', body: { categoryType: 1 } } }, { "type": "treeSelect", "name": "部门分类", "field": "departmentType", dictId: "departmentType", dictApi: { apiName: 'flglDataTree', body: { categoryType: 2 } } }, { "name": "接口文档上传", "type": "upload", "field": "apiDoc1", props: { multiple: true, action: _global.Global.server + 'fileUpload/uploadFile' } }, { "type": "input", "name": "方法", "field": "methods", "validate": [{ "required": true, "message": 'Please input !' }] }, { "name": "请求方法", "type": "select", "field": "requestMode", "dictId": "requestMode", "placeholder": "请选择..." }]
			}]
		};

		callback({
			"success": true,
			"data": _react2["default"].createElement(
				'div',
				null,
				_react2["default"].createElement(
					'h2',
					{ style: { textAlign: 'center' } },
					'\u901A\u8FC7PageLoader\u4F7F\u7528\u8868\u5355\u7EC4\u4EF6'
				),
				_react2["default"].createElement(_AiForm2["default"], { config: config })
			)
		});
	});

/***/ }
]);