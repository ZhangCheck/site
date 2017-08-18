webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _AiFormTable = __webpack_require__(310);

	var _AiFormTable2 = _interopRequireDefault(_AiFormTable);

	var _global = __webpack_require__(10);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * args为页面传送的参数
	 */
	(0, _jsonp2["default"])("viewTableWfbdzyApiConfig")(function (args, callback) {
	    var target = args.target;
	    var states = _global.Global.getState();
	    var detailMsg = states.dataList.wfbdzyApi && states.dataList.wfbdzyApi.detailMsgDataApi && states.dataList.wfbdzyApi.detailMsgDataApi.data ? states.dataList.wfbdzyApi.detailMsgDataApi.data : {};
	    var outParams = detailMsg.outParameterJson ? detailMsg.outParameterJson : [];
	    var params = [];
	    outParams.length > 0 && outParams.map(function (outParam, i) {
	        if (states.connectDatasource.connectDataSourceApi.tableIds.indexOf(outParam.table) != -1) {
	            params[params.length] = outParam;
	        }
	    });
	    var dataSource = states.aiFormTable.aFTDApi && states.aiFormTable.aFTDApi.config ? states.aiFormTable.aFTDApi.config.dataSource : params;
	    /*dataSource.map((data,i)=>{
	        let key;
	        for(key in data){
	            if(key.indexOf("_field")>=0){
	                delete data[key]
	            }
	        }
	    });*/
	    var columns = [/*{
	                   "title": '数据项名称',
	                   "dataIndex": 'showName',
	                   "key": "showName",
	                   "render": {"type":"input",props:{style:{width:"100%",left:"40%",marginTop:"5%"}}}
	                   },*/{
	        "title": '字段名称',
	        "dataIndex": 'name',
	        "key": 'name'
	    }, {
	        "title": '字段类型',
	        "dataIndex": 'type',
	        "key": "type"
	    }, {
	        "title": '数据来源',
	        "dataIndex": 'table',
	        "key": "table"
	    }, {
	        "title": "操作",
	        "dataIndex": "operation",
	        "key": "operation",
	        "render": [{ "type": "delete", "icon": "close-square", props: { style: { fontSize: 19 } } }, { "type": "up", "icon": "arrow-up", props: { style: { fontSize: 19 } } }, { "type": "down", "icon": "arrow-down", props: { style: { fontSize: 19 } } }]

	    }];

	    callback({
	        "success": true,

	        "data": [{
	            "childrenContentNoBorder": true,

	            "data": _react2["default"].createElement(_AiFormTable2["default"], { config: {

	                    "columns": columns, //表格标头数据
	                    "dataSource": dataSource, //表格数据
	                    "columnsAreAlltext": true
	                }, id: 'aFTDApi', sign: outParams.length > 0 ? "viewApi" : "", form: target.props.form })
	        }]
	    });
	});

/***/ }
]);