(function(){ var runed=0,temp,timer,time;webpackJsonp([3],[
/* 0 */
/***/ temp = function(module, exports, __webpack_require__) {runed=true;

	'use strict';

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(234);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(15);

	var _dataFormat = __webpack_require__(172);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * Created by liy on 2016/12/19 0015.
	 */
	(0, _jsonp2["default"])("wfbdzySjkZyfbStep3")(function (args, callback) {
	    var state = _global.Global.getState();
	    var columns = [];
	    var results = (0, _dataFormat.jsonStrToArray)(state.connectDatasource.connectDataSourceDemo.requestDataItemContent.data.dbJson);
	    var sourceColumns = [];
	    var dataSource3 = state.aiFormTable.aFTD.config.dataSource;
	    var dataSource4 = state.connectDatasource.connectDataSourceDemo.tableFileds;
	    dataSource3.forEach(function (item) {
	        sourceColumns.push({
	            "dataItemName": item.name,
	            "dataItemCode": item.code,
	            "table": item.dataSource,
	            "columnName": "",
	            "showName": item.columnName,
	            "index": item.index,
	            "type": item.dataType
	        });
	    });
	    dataSource4.forEach(function (item) {
	        sourceColumns.forEach(function (item1) {
	            if (item.columnName == item1.showName) {
	                item1.columnName = item.columnCode;
	                return;
	            }
	        });
	    });
	    var viewSource = {
	        "dataSourceId": state.dataList.wfbdzySjkZyfbStep1.selectedRows[0],
	        "dbPublishDataJson": {
	            "table_releation": [],
	            "pk": "id",
	            "sourceColumns": sourceColumns
	        }
	    };
	    results.forEach(function (item) {
	        columns.push({
	            "title": item.name,
	            "dataIndex": "",
	            "key": ''
	        });
	    });
	    dataSource3.forEach(function (item) {
	        dataSource4.forEach(function (item1) {
	            if (item.columnName == item1.columnName) {
	                columns.forEach(function (fuck) {
	                    if (fuck.title == item.name) {
	                        fuck.dataIndex = item1.columnCode;
	                        fuck.key = item1.columnCode;
	                        return;
	                    }
	                });
	            }
	        });
	    });
	    callback({
	        "success": true,
	        "data": {
	            "title": "",
	            "table": {
	                "primarykey": "id",
	                "clounms": columns,
	                "body": { apiName: 'wfbdzySjkZyfbStep3TableData', body: (0, _extends3["default"])({}, viewSource) }
	            },
	            "list": {
	                "view": null,
	                "listApi": null,
	                "saveApi": null
	            },
	            "add": {},
	            "edit": {},
	            "delete": {},
	            "detail": {},
	            "check": {
	                "view": null,
	                "checkApi": null
	            }
	        }
	    });
	});

/***/ }
]);if(!runed){
            clearInterval(timer);
            timer = setInterval(function(){
                if(temp) {
                    temp(module, exports, __webpack_require__);
                    clearInterval(timer);
                    temp=null;
                    
                }
                time++;
                if(time>500){
                    clearInterval(timer);
                    console.log('more than 500 times')
                }
            },500);
        }})()