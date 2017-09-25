webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(54);

	var _form = __webpack_require__(53);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var FormItem = _form2["default"].Item;

	(0, _jsonp2["default"])("apibdsjyjksrcspz")(function (args, callback) {
	    var target = args.target;

	    //初始化展示数据
	    var dataSource = [{
	        typeChoose: "",
	        paramsname: "jack",
	        bjf: "1",
	        change: "like"
	    }];
	    /**
	     * title：表格标题
	     * dataIndex：表格字段名
	     * key：表格字段标识
	     *render：使用AiLable组件：返回单个标签，
	     * AiLabel组件目前仅使用与可编辑表格中
	     */
	    var columns = [{
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
	        "title": "参数名称",
	        "dataIndex": "paramsname",
	        "key": "name", //<AiLabel args={{"type":"input","defaultValue":record.name,"width":200,"id":formTableId,"record":record,"index":index,"field":"name"}}/>
	        "render": { "type": "select", props: { style: { width: 200 } }, "options": ["jack", "check", "vicky"] }

	    }, {
	        "title": "比较符",
	        "dataIndex": "bjf",
	        "key": "bjf",
	        "render": { "type": "select", props: { style: { width: 200 } }, options: ["like", "="] }
	    }, {
	        "title": "操作",
	        "dataIndex": "operation",
	        "key": "operation",
	        "render": [{ "type": "delete", "icon": "close-square", props: { style: { fontSize: 19 } } }]

	    }];

	    callback({
	        "success": true,
	        "data": [{
	            "column": 1, //  form显示列数，首先读取每个标签的设置column值，不存在才会读取总的column,如果不存在，默认展示一列
	            "labelCol": 8, // form标头name宽度
	            "wrapperCol": 16, //form显示框宽度
	            "data": _react2["default"].createElement(AiFormTable, { config: {
	                    "columns": columns, //表格标头数据
	                    "dataSource": dataSource, //表格数据
	                    "addTemplate": { //表格初始化新增行数据
	                        typeChoose: "必选",
	                        name: "",
	                        telPhone: "111",
	                        change: "=",
	                        operation: ""
	                    }
	                }, id: 'aFTD', form: target.props.form })

	        }]
	    });
	});

/***/ }
]);