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

	var FormItem = _form2["default"].Item;

	(0, _jsonp2["default"])("wfbdzyApiBdsjySccspzStep4")(function (args, callback) {

	    var target = args.target;
	    var states = _global.Global.getState();

	    var detailMsg = states.dataList.wfbdzyApiBdsjyXzsjyStep1 && states.dataList.wfbdzyApiBdsjyXzsjyStep1.detailMsgDataApi && states.dataList.wfbdzyApiBdsjyXzsjyStep1.detailMsgDataApi.data ? states.dataList.wfbdzyApiBdsjyXzsjyStep1.detailMsgDataApi.data : {};
	    var srcspz = [];
	    /*let dataSource = [{name:"aaa"},{name:"bbb"}];*/
	    var dataSource = (0, _dataFormat.jsonStrToArray)(states.dataList.fbzyList.detailMsgDataApi.data.apiJson)[0].responseStruct;
	    var datas = states.aiFormTable.aFTDApi.config.dataSource;

	    var tables = states.connectDatasource && states.connectDatasource.connectDataSourceApi && states.connectDatasource.connectDataSourceApi.tableIds ? states.connectDatasource.connectDataSourceApi.tableIds : [];
	    if (tables.length == 1) {
	        for (var i = 0; i < datas.length; i++) {
	            srcspz[i] = datas[i].name;
	        }
	    } else {
	        for (var _i = 0; _i < datas.length; _i++) {
	            srcspz[_i] = datas[_i].table + "." + datas[_i].name;
	        }
	    }

	    if (dataSource.length > 0) {
	        dataSource.map(function (data) {
	            data.sname = srcspz[0];
	            data.conditionExp = "like";
	        });
	    }

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
	        "key": 'name'
	    }, {
	        "title": '参数类型',
	        dataIndex: 'type',
	        key: 'type',
	        render: function render(text, _render, index) {
	            switch (text) {
	                case "12":
	                    return "文本";
	                case "3":
	                    return "数字";
	                case "91":
	                    return "日期";
	                case "93":
	                    return "时间";
	                case "4":
	                    return "整型";
	                case "2005":
	                    return "字符大型对象";
	                case "2004":
	                    return "二进制大型对象";
	                default:
	                    return "文本";
	            }
	        }
	    }, {
	        "title": '查询字段',
	        "dataIndex": 'sname',
	        "key": 'sname',
	        "render": { "type": "select", "labelCol": 0, "wrapperCol": 24, options: srcspz, props: { style: { width: "100%" } } }
	    }, {
	        "title": '是否可为空',
	        "dataIndex": 'notNull',
	        "key": 'notNull',
	        render: function render(text, _render2, index) {
	            switch (text) {
	                case "0":
	                    return "是";
	                case "1":
	                    return "否";
	                default:
	                    return "否";
	            }
	        }
	    }];
	    callback({
	        "success": true,
	        "data": [{
	            "data": _react2["default"].createElement(_AiFormTable2["default"], { config: {
	                    "columns": columns, //表格标头数据
	                    "dataSource": dataSource //表格数据
	                }, id: 'aFTDStep4', form: target.props.form })

	        }]
	    });
	});

/***/ }
]);