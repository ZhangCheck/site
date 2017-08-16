(function(){ var runed=0,temp,timer,time;webpackJsonp([3],[
/* 0 */
/***/ temp = function(module, exports, __webpack_require__) {runed=true;

	'use strict';

	var _css = __webpack_require__(1759);

	var _modal = __webpack_require__(49);

	var _modal2 = _interopRequireDefault(_modal);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(234);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(15);

	var _history = __webpack_require__(41);

	var _history2 = _interopRequireDefault(_history);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * Created by liy on 2016/12/20 0020.
	 */
	(0, _jsonp2["default"])("wfbdzyFileZyfbStep2")(function (args, callback) {
	    var state = _global.Global.getState();
	    var selectRowsIds = state.dataList.wfbdzyFileZyfbStep1 && state.dataList.wfbdzyFileZyfbStep1.selectedRows[0] ? state.dataList.wfbdzyFileZyfbStep1.selectedRows[0] : "";
	    state.dataList.wfbdzyFileZyfbStep2.selectedRows = [];
	    var lastStepState = state.dataList.wfbdzyFileZyfbStep1;
	    if (!lastStepState) {
	        _modal2["default"].warning({
	            title: '提示',
	            content: '上一步或前几步没有完成，请返回第一步重新开始。',
	            onOk: function onOk() {
	                /* */
	                setTimeout(function () {
	                    _global.Global.mark({ dataList: {
	                            wfbdzyFileZyfbStep2: null
	                        } });
	                    _history2["default"].push(state.routing.path.replace(/\/\d+/, '/1'));
	                }, 500);
	            }
	        });
	        return;
	    }
	    callback({
	        "success": true,
	        "data": {
	            "title": "",
	            "searchConfig": {
	                "data": [{
	                    "column": 6,
	                    "data": [{ "type": "input", "name": "文件名", "field": "name" }, { "type": "button", "value": "查询", "pageName": "search", "btnType": "primary", "htmlType": "submit" }]
	                }],
	                "body": { apiName: 'wfbdzyFileZyfbStep2TableData', body: { datasourceId: selectRowsIds } }
	            },
	            "table": {
	                "primarykey": "id",
	                "clounms": [{
	                    "title": "文件名",
	                    "dataIndex": "name",
	                    "key": "name"
	                }, {
	                    "title": "文件类型",
	                    "dataIndex": "type",
	                    "key": "type"
	                }, {
	                    "title": "文件大小",
	                    "dataIndex": "size",
	                    "key": "size"
	                }, {
	                    "title": "最近修改日期",
	                    "dataIndex": "updateDate",
	                    "key": "updateDate"
	                }],
	                "body": { apiName: 'wfbdzyFileZyfbStep2TableData', body: { datasourceId: selectRowsIds } }
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