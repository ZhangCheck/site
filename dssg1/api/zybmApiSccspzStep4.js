webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(54);

	var _form = __webpack_require__(53);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _AiLabel = __webpack_require__(311);

	var _AiLabel2 = _interopRequireDefault(_AiLabel);

	var _AiFormTable = __webpack_require__(310);

	var _AiFormTable2 = _interopRequireDefault(_AiFormTable);

	var _aiFormTable = __webpack_require__(150);

	var _global = __webpack_require__(10);

	var _dataFormat = __webpack_require__(64);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _history = __webpack_require__(32);

	var _history2 = _interopRequireDefault(_history);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/* author by 田贵宾
	 import './other.html';
	 import React from 'react';
	 import ReactDOM from 'react-dom'; */
	var FormItem = _form2["default"].Item;
	(0, _jsonp2["default"])("zybmApiSccspzStep4")(function (args, callback) {
	    var target = args.target;
	    var states = _global.Global.getState();

	    var detailValue = states.aiForm.zybmSjkTxbmsqStep1 && states.aiForm.zybmSjkTxbmsqStep1.detailMsgDataApi && states.aiForm.zybmSjkTxbmsqStep1.detailMsgDataApi.data ? states.aiForm.zybmSjkTxbmsqStep1.detailMsgDataApi.data : {};
	    var apiJson = detailValue.apiJson && detailValue.apiJson != null && detailValue.apiJson != "" ? (0, _dataFormat.jsonStrToArray)(detailValue.apiJson) : [];
	    var aFTDStep4 = apiJson.length > 0 ? apiJson[0].responseStruct : [];
	    var typesList = [{ key: "文本", value: "12" }, { key: "日期", value: "91" }, { key: "数字", value: "3" }, { key: "时间", value: "93" }, { key: "整型", value: "4" }];
	    /**
	     * title：表格标题
	     * dataIndex：表格字段名
	     * key：表格字段标识
	     *render：使用AiLable组件：返回单个标签，
	     * AiLabel组件目前仅使用与可编辑表格中
	     */
	    var columns = [{
	        "title": '参数名称',
	        "dataIndex": 'name',
	        "key": 'name',
	        "render": { "type": "input", "labelCol": 0, "wrapperCol": 24, props: { style: { width: "100%" } } }
	    }, {
	        "title": '参数类型',
	        "dataIndex": 'type',
	        "key": 'type',
	        "render": { "type": "select", options: typesList, "labelCol": 0, "wrapperCol": 24, props: { style: { width: "100%" } } }
	    }, {
	        "title": '是否可为空',
	        "dataIndex": 'notNull',
	        "key": 'notNull',
	        "render": { "type": "select", options: [{ key: "是", value: "0" }, { key: "否", value: "1" }], "labelCol": 0, "wrapperCol": 24, props: { style: { width: "100%" } } }
	    }, {
	        "title": '说明',
	        "dataIndex": 'desc',
	        "key": 'desc',
	        "render": { "type": "input", "labelCol": 0, "wrapperCol": 24, props: { style: { width: "100%" } } }
	    }, {
	        "title": "操作",
	        "dataIndex": "operation",
	        "key": "operation",
	        "render": [{ "type": "up", "icon": "arrow-up", props: { style: { fontSize: 19 } } }, { "type": "down", "icon": "arrow-down", props: { style: { fontSize: 19 } } }, { "type": "delete", "icon": "close-square", props: { style: { fontSize: 19 } } }]
	    }];
	    callback({
	        "success": true,
	        "data": [{
	            "data": _react2["default"].createElement(_AiFormTable2["default"], { config: {
	                    "columns": columns, //表格标头数据
	                    "dataSource": aFTDStep4, //表格数据
	                    "addTemplate": { //表格初始化新增行数据
	                        "type": "12",
	                        "notNull": "0",
	                        "name": "",
	                        "desc": "",
	                        "operation": ""
	                    }
	                }, id: 'aFTDStep4', buttons: 'add', form: target.props.form })

	        }]
	    });
	});

/***/ }
]);