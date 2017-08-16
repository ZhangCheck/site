webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _aiFormTable = __webpack_require__(167);

	var _framework = __webpack_require__(246);

	var _jsonp = __webpack_require__(250);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _AiFormTable = __webpack_require__(443);

	var _AiFormTable2 = _interopRequireDefault(_AiFormTable);

	var _global = __webpack_require__(12);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * args为页面传送的参数
	 */
	(0, _jsonp2["default"])("aiFormTableDemo")(function (args, callback) {
	    var target = args.target;

	    //初始化展示数据
	    var dataSource = [{
	        typeChoose: "可选",
	        name: "jack",
	        telPhone: "1",
	        change: "like",
	        operation: "",
	        text: "good"
	    }, {
	        typeChoose: "可选",
	        name: "jim",
	        telPhone: "2",
	        change: "=",
	        operation: "",
	        text: "good1"
	    }, {
	        typeChoose: "必选",
	        name: "jack",
	        telPhone: "3",
	        change: "like",
	        operation: "",
	        text: "good2"
	    }];
	    /**
	     * title：表格标题
	     * dataIndex：表格字段名
	     * key：表格字段标识
	     *render：使用AiLable组件：返回单个标签，
	     * AiLabel组件目前仅使用与可编辑表格中
	     */
	    var columns = [{
	        "title": "静态测试",
	        "dataIndex": "text",
	        "key": "text"
	    }, {
	        "title": "是否必选*",
	        "dataIndex": "typeChoose",
	        "key": "typeChoose",
	        /**
	         * field的值和dataIndex值相同，便于编辑时值的替换
	         * @param text
	         * @param record  单行的值
	         * @param index   row的位置
	         * AiLabel组件：
	         * type：标签类型，defaultValue：默认值，width标签宽度,id:为一次组件数据调用的编号（页面传），
	         * record：一组的数据，index：标号，field:标签编号（和dataIndex相同），options下拉选择数据，可页面传输
	         */
	        "render": { "type": "select", props: { style: { width: 200 }, onChange: function onChange(value, text, record, index, that) {
	                    console.log("是否必选改变了:" + value, text, record, index);
	                    //Global.dispatch(updateRow({},"aFTD",index));
	                } }, "options": ["必选", "可选"] }
	    }, {
	        "title": "字段名称",
	        "dataIndex": "name",
	        "key": "name", //<AiLabel args={{"type":"input","defaultValue":record.name,"width":200,"id":formTableId,"record":record,"index":index,"field":"name"}}/>
	        "render": { "type": "select", props: { style: { width: 200 } }, "options": ["jack", "check", "vicky"] }

	    }, {
	        "title": "电话",
	        "dataIndex": "telPhone",
	        "key": "telPhone", //<AiLabel args={{"type":"input","defaultValue":record.name,"width":200,"id":formTableId,"record":record,"index":index,"field":"telPhone"}}/>
	        "render": { "type": "input", props: { style: { width: 200 } } }

	    }, {
	        "title": "比较符",
	        "dataIndex": "change",
	        "key": "change",
	        "render": { "type": "select", props: { style: { width: 200 } }, options: ["like", "="] }
	    }, {
	        "title": "操作",
	        "dataIndex": "operation",
	        "key": "operation",
	        "render": [{ "type": "delete", "icon": "close-square", props: { style: { fontSize: 19 } } }, { "type": "add", "icon": "plus-square", props: { style: { fontSize: 19 } } }, { "type": "up", "icon": "arrow-up", props: { style: { fontSize: 19 } } }, { "type": "down", "icon": "arrow-down", props: { style: { fontSize: 19 } } }]
	    }];
	    var columns1 = [{
	        "title": "静态测试",
	        "dataIndex": "text1",
	        "key": "text1"
	    }, {
	        "title": "是否必选*",
	        "dataIndex": "typeChoose1",
	        "key": "typeChoose1",
	        /**
	         * field的值和dataIndex值相同，便于编辑时值的替换
	         * @param text
	         * @param record  单行的值
	         * @param index   row的位置
	         * AiLabel组件：
	         * type：标签类型，defaultValue：默认值，width标签宽度,id:为一次组件数据调用的编号（页面传），
	         * record：一组的数据，index：标号，field:标签编号（和dataIndex相同），options下拉选择数据，可页面传输
	         */
	        "render": { "type": "select", props: { style: { width: 200 }, onChange: function onChange(value, text, record, index, that) {
	                    console.log("是否必选改变了:" + value, text, record, index);
	                    //Global.dispatch(updateRow({},"aFTD",index));
	                } }, "options": ["必选", "可选"] }
	    }, {
	        "title": "字段名称",
	        "dataIndex": "name1",
	        "key": "name1", //<AiLabel args={{"type":"input","defaultValue":record.name,"width":200,"id":formTableId,"record":record,"index":index,"field":"name"}}/>
	        "render": { "type": "select", props: { style: { width: 200 } }, "options": ["jack", "check", "vicky"] }

	    }, {
	        "title": "电话",
	        "dataIndex": "telPhone1",
	        "key": "telPhone1", //<AiLabel args={{"type":"input","defaultValue":record.name,"width":200,"id":formTableId,"record":record,"index":index,"field":"telPhone"}}/>
	        "render": { "type": "input", props: { style: { width: 200 } } }

	    }, {
	        "title": "比较符",
	        "dataIndex": "change1",
	        "key": "change1",
	        "render": { "type": "select", props: { style: { width: 200 } }, options: ["like", "="] }
	    }, {
	        "title": "操作",
	        "dataIndex": "operation1",
	        "key": "operation1",
	        "render": [{ "type": "delete", "icon": "close-square", props: { style: { fontSize: 19 } } }, { "type": "add", "icon": "plus-square", props: { style: { fontSize: 19 } } }, { "type": "up", "icon": "arrow-up", props: { style: { fontSize: 19 } } }, { "type": "down", "icon": "arrow-down", props: { style: { fontSize: 19 } } }]

	    }];
	    callback({
	        "success": true,
	        "data": [{
	            "title": "我是栏目一1", //栏目标题
	            "column": 1, //  form显示列数，首先读取每个标签的设置column值，不存在才会读取总的column,如果不存在，默认展示一列
	            "labelCol": 8, // form标头name宽度
	            "wrapperCol": 16, //form显示框宽度
	            "showTitle": true, //是否展示栏目标题
	            "buttonConfigs": {
	                "buttons": [{ "type": "button", "value": "返回", "field": "back", props: { btnType: "primary", "style": { "float": "right" } } }, { "type": "button", "value": "确定", "field": "submit", props: { "style": { "float": "right" }, htmlType: "submit" } }]
	            },
	            "data": _react2["default"].createElement(_AiFormTable2["default"], { config: {
	                    "columns": columns, //表格标头数据
	                    "dataSource": [], //表格数据
	                    "addTemplate": { //表格初始化新增行数据
	                        typeChoose: "必选",
	                        name: "",
	                        telPhone: "111",
	                        change: "=",
	                        operation: ""
	                    }
	                }, id: 'aFTD', buttons: 'add', form: target.props.form })

	        }, {
	            "buttonConfigs": {
	                "buttons": [{ "type": "button", "value": "返回", "field": "back", props: { btnType: "primary", "style": { "float": "right" } } }, { "type": "button", "value": "确定", "field": "submit", props: { "style": { "float": "right" }, htmlType: "submit" } }]
	            },
	            "data": _react2["default"].createElement(_AiFormTable2["default"], { config: {
	                    "columns": columns1, //表格标头数据
	                    "dataSource": [], //表格数据
	                    "addTemplate": { //表格初始化新增行数据
	                        typeChoose1: "必选",
	                        name1: "",
	                        telPhone1: "111",
	                        change1: "=",
	                        operation1: ""
	                    }
	                }, id: 'aFTD11', buttons: 'add', form: target.props.form })

	        }]
	    });
	});

/***/ }
]);