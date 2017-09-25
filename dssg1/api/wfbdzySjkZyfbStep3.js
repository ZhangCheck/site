webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(10);

	var _dataFormat = __webpack_require__(64);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * Created by liy on 2016/12/19 0015.
	 */
	(0, _jsonp2["default"])("wfbdzySjkZyfbStep3")(function (args, callback) {
	    var state = _global.Global.getState();
	    state.connectDatasource.connectDataSourceDemo;
	    var connDataSource = state.connectDatasource.connectDataSourceDemo && state.connectDatasource.connectDataSourceDemo.getContentByTableTile && state.connectDatasource.connectDataSourceDemo.getContentByTableTile.data ? state.connectDatasource.connectDataSourceDemo.getContentByTableTile.data : "";
	    var tableName = connDataSource[0].tableName;
	    var colunmList = connDataSource[0].tableData;
	    var optionss = [];
	    colunmList.forEach(function (item, index) {
	        if (item.columnName == "PK" || item.columnName == "NotNullColumn") {} else if (item.valueType == "91" || item.valueType == "93") {
	            var a = { value: item.columnName, key: item.columnName };
	            optionss.push(a);
	        }
	    });
	    var config0 = {
	        "title": "同步类型配置",
	        "column": 1,
	        "showTitle": true,
	        "titleIcon": "schedule-configuration",
	        "data": [{ "name": "类型模式", "type": "text", "field": "ddModel", "defaultValue": '触发器同步' }]
	    };
	    var config2 = {
	        "title": "时间戳列表",
	        "column": 2,
	        "showTitle": true,
	        "titleIcon": "schedule-configuration",
	        "data": [{ "name": "表名", "type": "text", "field": "tableName", "value": tableName }, { "name": "列名", "type": "select", "field": "ColumnModel", "placeholder": "请选择...", "options": optionss }]
	    };
	    var config1 = {
	        "title": "同步类型配置",
	        "column": 1,
	        "showTitle": true,
	        "titleIcon": "schedule-configuration",
	        "data": [{ "name": "类型模式", "type": "select", "field": "ddModel", "value": 1, "placeholder": "请选择...", "options": [{ value: 1, key: "触发器同步" }, { value: 2, key: "时间戳同步" }],
	            props: { onSelect: function onSelect(value) {
	                    var step3 = _global.Global.getState().aiForm.wfbdzySjkZyfbStep3 && _global.Global.getState().aiForm.wfbdzySjkZyfbStep3.config.data;
	                    if (value == 1 && step3.length != 1) {
	                        _global.Global.mark({ aiForm: { wfbdzySjkZyfbStep3: { config: { data: [(0, _extends3["default"])({}, step3[0])] } } } });
	                    } else {
	                        if (value == 2 && step3.length == 1) {
	                            step3.push(config2);
	                            _global.Global.mark({ aiForm: { wfbdzySjkZyfbStep3: { config: { data: step3 } } } });
	                        }
	                    }
	                } } }]
	    };

	    var config = [];
	    if (connDataSource.length >= 2) {
	        config[0] = config0;
	    } else {
	        config[0] = config1;
	    }

	    callback({
	        "success": true,
	        "data": config
	    });
	});

/***/ }
]);