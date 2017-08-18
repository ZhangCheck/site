webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("wjtxysjxx")(function (args, callback) {
	    var target = args.target;
	    callback({
	        "success": true,
	        "data": [{
	            "data": [
	            /**
	             * data数据标准
	             * 标头和显示框宽度（labelCol和wrapperCol），先读每个标签内的，如果没有再读上面总的，
	             * “dictId”为下拉选择字典数据的id，存在就调用字典接口
	             * 可自定义标签，如下（1）号位子
	             * column 为单个标签占有的列数  ，可通过和labelCol、wrapperCol调试样式
	             * 数据中可有属性：一下
	             * field：唯一标识，type：标签类型（input/select/checkbox/switch/radio/timePicker/rangePicker/datePicker/inputNumber等）           必须有
	             * column：标签所占总的列数中的几列，labelCol：标头宽度，wrapperCol：数据框宽度，validate：规则，options：checkbox和select数据          选择有
	             * defaultValue：默认值，defaultValue显示数据， name：标签的名称，                                                                 选择有
	             */
	            { "type": "input", "name": "资源名称", "field": "resourceName", "validate": [{ "required": true, "message": 'Please input !' }] }, { "type": "input", props: { rows: 4, type: "textarea" }, "name": "摘要", "field": "resourceName", "validate": [{ "required": true, "message": 'Please input !' }] }, { "type": "input", "name": "要素", "field": "resourceName", "validate": [{ "required": true, "message": 'Please input !' }] }, { "name": "国家主题分类", "type": "select", "field": "countryThemeType", "validate": [{ "required": true }], "placeholder": "请选择...", "options": ["篮球", "足球", "乒乓球"] }, { "name": "部门主题分类", "type": "select", "field": "depThemeType", "validate": [{ "required": true }], "placeholder": "请选择...", "options": ["篮球", "足球", "乒乓球"] }, { "name": "订阅类型", "type": "select", "field": "dyType", "validate": [{ "required": true }], "placeholder": "请选择...", "options": ["数据", "文件"] }, { "type": "input", "name": "数据提供方", "field": "sjtgf", "validate": [{ "required": true, "message": 'Please input !' }] }, { "type": "input", "name": "数据提供方地址", "field": "sjtgfdz", "validate": [{ "required": true, "message": 'Please input !' }] }, { "type": "input", "name": "发布原因", "field": "fbyy", "validate": [{ "required": true, "message": 'Please input !' }] }]
	        }]
	    });
	});

/***/ }
]);