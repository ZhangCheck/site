(function(){ var runed=0,temp,timer,time;webpackJsonp([3],[
/* 0 */
/***/ temp = function(module, exports, __webpack_require__) {runed=true;

	"use strict";

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	window["wdydzyWjDyStep2"]({
	    "success": true,
	    "data": {
	        "table": {
	            "clounms": [{
	                "title": "数据源名称",
	                "dataIndex": "dataSourceName",
	                "key": "dataSourceName"
	            }, {
	                "title": "ip地址",
	                "dataIndex": "ipAddress",
	                "key": "ipAddress"
	            }, {
	                "title": "端口",
	                "dataIndex": "port",
	                "key": "port"
	            }, {
	                "title": "数据源类型",
	                "dataIndex": "dataSourceType",
	                "key": "dataSourceType"
	            }],
	            "body": { apiName: 'getDataSourceTableBodyData' }
	        }
	    }
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