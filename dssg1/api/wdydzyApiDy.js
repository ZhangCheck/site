webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(61);

	var _table = __webpack_require__(60);

	var _table2 = _interopRequireDefault(_table);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("wdydzyApiDy")(function (args, callback) {
	    var srcscolumns = [{
	        "title": "参数",
	        "dataIndex": "resourceName",
	        "key": "resourceName"
	    }, {
	        "title": "是否必须",
	        "dataIndex": "resourceEnglishName",
	        "key": "resourceEnglishName"
	    }, {
	        "title": "参数类型",
	        "dataIndex": "resourceUnicode",
	        "key": "resourceUnicode"
	    }, {
	        "title": "参数说明",
	        "dataIndex": "resourceType",
	        "key": "resourceType"
	    }];
	    var apigxdjcolumns = [{
	        "title": "API等级",
	        "dataIndex": "wjdj",
	        "key": "wjdj"
	    }];
	    callback({
	        "success": true,
	        "data": [{
	            "title": "元数据基本信息", //栏目标题
	            "column": 2, //  form显示列数，首先读取每个标签的设置column值，不存在才会读取总的column,如果不存在，默认展示一列
	            "labelCol": 8, // form标头name宽度
	            "wrapperCol": 16, //form显示框宽度
	            "showTitle": true, //是否展示栏目标题
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
	            { "name": "标题", "type": "text", "field": "title", "defaultValue": "内容是未知的" }, { "name": "摘要", "type": "text", "field": "zy", "defaultValue": "内容是未知的" }, { "name": "关键字", "type": "text", "field": "gjz", "defaultValue": "内容是未知的" }, { "name": "国家主题分类", "type": "text", "field": "gjztfl", "defaultValue": "内容是未知的" }, { "name": "部门主题分类", "type": "text", "field": "bmztfl", "defaultValue": "内容是未知的" }, { "name": "资源类型", "type": "text", "field": "bmztfl", "defaultValue": "内容是未知的" }, { "name": "数据提供方单位", "type": "text", "field": "sjtgfdw", "defaultValue": "内容是未知的" }, { "name": "数据提供方地址", "type": "text", "field": "sjtgfdw", "defaultValue": "内容是未知的" }]
	        }, {
	            "title": "输入参数配置", //栏目标题
	            "column": 2, //  form显示列数，首先读取每个标签的设置column值，不存在才会读取总的column,如果不存在，默认展示一列
	            "labelCol": 8, // form标头name宽度
	            "wrapperCol": 16, //form显示框宽度
	            "showTitle": true, //是否展示栏目标题
	            "data": function data() {
	                return _react2["default"].createElement(_table2["default"], { columns: srcscolumns, dataSource: "" });
	            }
	        }, {
	            "title": "输出参数配置", //栏目标题
	            "column": 2, //  form显示列数，首先读取每个标签的设置column值，不存在才会读取总的column,如果不存在，默认展示一列
	            "labelCol": 8, // form标头name宽度
	            "wrapperCol": 16, //form显示框宽度
	            "showTitle": true, //是否展示栏目标题
	            "data": function data() {
	                return _react2["default"].createElement(
	                    'div',
	                    null,
	                    _react2["default"].createElement(_table2["default"], { columns: srcscolumns, dataSource: "" })
	                );
	            }
	        }, {
	            "title": "接口地址信息", //栏目标题
	            "column": 1, //  form显示列数，首先读取每个标签的设置column值，不存在才会读取总的column,如果不存在，默认展示一列
	            "labelCol": 8, // form标头name宽度
	            "wrapperCol": 16, //form显示框宽度
	            "showTitle": true, //是否展示栏目标题
	            "data": [{ "name": "接口地址", "type": "text", "field": "fbyy", "defaultValue": "内容是未知的" }, { "name": "服务类型", "type": "text", "field": "sqr", "defaultValue": "内容是未知的" }, { "name": "方法", "type": "text", "field": "sqr", "defaultValue": "内容是未知的" }, { "name": "接口文档", "type": "text", "field": "fbyy", "defaultValue": "内容是未知的" }, { "name": "审核意见", "type": "text", "field": "fbyy", "defaultValue": "内容是未知的" }, { "name": "审核时间", "type": "text", "field": "sqr", "defaultValue": "内容是未知的" }]
	        }, {
	            "title": "API共享等级", //栏目标题
	            "column": 2, //  form显示列数，首先读取每个标签的设置column值，不存在才会读取总的column,如果不存在，默认展示一列
	            "labelCol": 8, // form标头name宽度
	            "wrapperCol": 16, //form显示框宽度
	            "showTitle": true, //是否展示栏目标题
	            "data": function data() {
	                return _react2["default"].createElement(
	                    'div',
	                    null,
	                    _react2["default"].createElement(
	                        'div',
	                        null,
	                        'API\u5171\u4EAB\u7B49\u7EA7\u914D\u7F6E'
	                    ),
	                    _react2["default"].createElement(_table2["default"], { columns: apigxdjcolumns, dataSource: "" })
	                );
	            }
	        }, {
	            "title": "资源申请发布信息", //栏目标题
	            "column": 2, //  form显示列数，首先读取每个标签的设置column值，不存在才会读取总的column,如果不存在，默认展示一列
	            "labelCol": 8, // form标头name宽度
	            "wrapperCol": 16, //form显示框宽度
	            "showTitle": true, //是否展示栏目标题
	            "data": [{ "name": "发布原因", "type": "text", "field": "fbyy", "defaultValue": "内容是未知的" }, { "name": "申请人", "type": "text", "field": "sqr", "defaultValue": "内容是未知的" }, { "name": "申请时间", "type": "text", "field": "sqr", "defaultValue": "内容是未知的" }, { "name": "审核结果", "type": "text", "field": "fbyy", "defaultValue": "内容是未知的" }, { "name": "审核意见", "type": "text", "field": "fbyy", "defaultValue": "内容是未知的" }, { "name": "审核时间", "type": "text", "field": "sqr", "defaultValue": "内容是未知的" }]
	        }]
	    });
	});

/***/ }
]);