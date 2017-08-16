(function(){ var runed=0,temp,timer,time;webpackJsonp([3],[
/* 0 */
/***/ temp = function(module, exports, __webpack_require__) {runed=true;

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _component = __webpack_require__(13);

	var _component2 = _interopRequireDefault(_component);

	var _jsonp = __webpack_require__(234);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("wfbdzyFileZyfbStep1")(function (args, callback) {

	    callback({
	        "success": true,
	        "data": {
	            "title": "",
	            "searchConfig": {
	                "data": [{
	                    "column": 6,
	                    "data": [{ "type": "input", col: 5, "name": "数据源名称", "field": "name" }, { "type": "button", "value": "查询", "pageName": "search", "btnType": "primary", "htmlType": "submit" }]
	                }],
	                "body": { apiName: 'wfbdzyFileZyfbStep1TableData', body: { type: 2 } }
	            },
	            "table": {
	                "primarykey": "id",
	                "clounms": [{
	                    "title": "数据源名称",
	                    "dataIndex": "name",
	                    "key": "name"
	                }, {
	                    "title": "文件路径",
	                    "dataIndex": "ftpAddress",
	                    "key": "ftpAddress"
	                }, {
	                    "title": "IP",
	                    "dataIndex": "ip",
	                    "key": "ip"
	                }, {
	                    "title": "传输协议",
	                    "dataIndex": "ftpType",
	                    "key": "ftpType"
	                }, {
	                    "title": "数据源类型",
	                    "dataIndex": "type",
	                    "key": "type",
	                    render: function render(text, record, index) {
	                        if (record.type == 1) {
	                            return '数据库';
	                        } else {
	                            return '文件';
	                        }
	                    }
	                }],
	                "body": { apiName: 'wfbdzyFileZyfbStep1TableData', body: { type: 2 } }
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