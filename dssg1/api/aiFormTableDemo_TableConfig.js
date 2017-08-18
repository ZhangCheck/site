webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _AiLabel = __webpack_require__(311);

	var _AiLabel2 = _interopRequireDefault(_AiLabel);

	var _aiFormTable = __webpack_require__(150);

	var _global = __webpack_require__(10);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * args为页面传送的参数
	 */
	(0, _jsonp2["default"])("aiFormTableDemoTableConfig")(function (args, callback) {
	    var target = args.target;

	    //初始化展示数据
	    var dataSource = [{
	        datatime: "必选",
	        applytype: "jack",
	        applyproject: "like",
	        operation: ""
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
	        "dataIndex": "datatime",
	        "key": "datatime",
	        /**
	         * field的值和dataIndex值相同，便于编辑时值的替换
	         * @param text
	         * @param record  单行的值
	         * @param index   row的位置
	         * AiLabel组件：
	         * type：标签类型，defaultValue：默认值，width标签宽度,id:为一次组件数据调用的编号（页面传），
	         * record：一组的数据，index：标号，field:标签编号（和dataIndex相同），options下拉选择数据，可页面传输
	         */
	        "render": function render(text, record, index) {
	            return _react2["default"].createElement(_AiLabel2["default"], { args: { "type": "select", "defaultValue": record.datatime, "width": 200, "id": args.id, "record": record, "index": index, "field": "datatime", "options": ["必选", "可选"] } });
	        }
	    }, {
	        "title": "字段名称",
	        "dataIndex": "applytype",
	        "key": "applytype", //<AiLabel args={{"type":"input","defaultValue":record.applytype,"width":200,"id":args.id,"record":record,"index":index,"field":"applytype"}}/>
	        "render": function render(text, record, index) {
	            return _react2["default"].createElement(_AiLabel2["default"], { args: { "type": "select", "defaultValue": record.applytype, "width": 200, "id": args.id, "record": record, "index": index, "field": "applytype", "options": ["jack", "juce", "check"] } });
	        }

	    }, {
	        "title": "比较符",
	        "dataIndex": "applyproject",
	        "key": "applyproject",
	        "render": function render(text, record, index) {
	            return _react2["default"].createElement(_AiLabel2["default"], { args: { "type": "select", "width": 200, "defaultValue": record.applyproject, "id": args.id, "record": record, "index": index, "field": "applyproject", "options": ["=", "like"] } });
	        }
	    }, {
	        "title": "操作",
	        "dataIndex": "operation",
	        "key": "operation",
	        "render": [{ "type": "delete", "icon": "close-square" }, { "type": "add", "icon": "plus-square" }, { "type": "up", "icon": "arrow-up" }, { "type": "down", "icon": "arrow-down" }]

	    }];

	    callback({
	        "success": true,
	        "data": {
	            "columns": columns, //表格标头数据
	            "dataSource": dataSource, //表格数据
	            "addTemplate": { //表格初始化新增行数据
	                datatime: "必选",
	                applytype: "",
	                applyproject: "=",
	                operation: ""
	            }
	        }
	    });
	}); /* author by 田贵宾
	    import './other.html';
	    import React from 'react';
	    import ReactDOM from 'react-dom'; */

/***/ }
]);