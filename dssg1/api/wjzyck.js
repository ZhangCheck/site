webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(61);

	var _table = __webpack_require__(60);

	var _table2 = _interopRequireDefault(_table);

	var _css2 = __webpack_require__(54);

	var _form = __webpack_require__(53);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _AiFormTable = __webpack_require__(310);

	var _AiFormTable2 = _interopRequireDefault(_AiFormTable);

	var _AiLabel = __webpack_require__(311);

	var _AiLabel2 = _interopRequireDefault(_AiLabel);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var FormItem = _form2["default"].Item;

	(0, _jsonp2["default"])("wjzyck")(function (args, callback) {
	    var gxwjcolumns = [{
	        "title": "文件名",
	        "dataIndex": "resourceName",
	        "key": "resourceName"
	    }, {
	        "title": "文件类型",
	        "dataIndex": "resourceEnglishName",
	        "key": "resourceEnglishName"
	    }, {
	        "title": "文件大小",
	        "dataIndex": "resourceUnicode",
	        "key": "resourceUnicode"
	    }, {
	        "title": "最后更新时间",
	        "dataIndex": "resourceType",
	        "key": "resourceType"
	    }];
	    var gxclcolumns = [{
	        "title": "调度模式",
	        "dataIndex": "ddms",
	        "key": "ddms"
	    }, {
	        "title": "开始时间",
	        "dataIndex": "startTime",
	        "key": "startTime"
	    }, {
	        "title": "间隔周期",
	        "dataIndex": "jgzq",
	        "key": "jgzq"
	    }];var wjgxdjcolumns = [{
	        "title": "文件等级",
	        "dataIndex": "wjdj",
	        "key": "wjdj"
	    }];
	    var dyyhcolumns = [{
	        "title": "订阅用户",
	        "dataIndex": "dyyh",
	        "key": "dyyh"
	    }, {
	        "title": "订阅单位",
	        "dataIndex": "dydw",
	        "key": "dydw"
	    }, {
	        "title": "用户等级",
	        "dataIndex": "yhdj",
	        "key": "yhdj"
	    }, {
	        "title": "申请原因",
	        "dataIndex": "sqyy",
	        "key": "sqyy"
	    }, {
	        "title": "订阅时间",
	        "dataIndex": "dysj",
	        "key": "dysj"
	    }, {
	        "title": "联系电话",
	        "dataIndex": "lxdh",
	        "key": "lxdh"
	    }, {
	        "title": "订阅类容",
	        "dataIndex": "dynr",
	        "key": "dynr"
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
	            "title": "共享文件信息", //栏目标题
	            "column": 2, //  form显示列数，首先读取每个标签的设置column值，不存在才会读取总的column,如果不存在，默认展示一列
	            "labelCol": 8, // form标头name宽度
	            "wrapperCol": 16, //form显示框宽度
	            "showTitle": true, //是否展示栏目标题
	            "data": function data() {
	                return _react2["default"].createElement(_table2["default"], { columns: gxwjcolumns, dataSource: "" });
	            }
	        }, {
	            "title": "更新策略", //栏目标题
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
	                        '\u8C03\u5EA6\u7B56\u7565'
	                    ),
	                    _react2["default"].createElement(_table2["default"], { columns: gxclcolumns, dataSource: "" })
	                );
	            }
	        }, {
	            "title": "文件共享等级", //栏目标题
	            "column": 2, //  form显示列数，首先读取每个标签的设置column值，不存在才会读取总的column,如果不存在，默认展示一列
	            "labelCol": 8, // form标头name宽度
	            "wrapperCol": 16, //form显示框宽度
	            "showTitle": true, //是否展示栏目标题
	            "data": function data() {
	                return _react2["default"].createElement(_table2["default"], { columns: wjgxdjcolumns, dataSource: "" });
	            }
	        }, {
	            "title": "订阅用户", //栏目标题
	            "column": 2, //  form显示列数，首先读取每个标签的设置column值，不存在才会读取总的column,如果不存在，默认展示一列
	            "labelCol": 8, // form标头name宽度
	            "wrapperCol": 16, //form显示框宽度
	            "showTitle": true, //是否展示栏目标题
	            "data": function data() {
	                return _react2["default"].createElement(_table2["default"], { columns: dyyhcolumns, dataSource: "" });
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