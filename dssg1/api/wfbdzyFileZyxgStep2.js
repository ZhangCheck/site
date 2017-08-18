webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(10);

	var _history = __webpack_require__(32);

	var _history2 = _interopRequireDefault(_history);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * Created by liy on 2016/12/20 0020.
	 */
	(0, _jsonp2["default"])("wfbdzyFileZyxgStep2")(function (args, callback) {
	    var state = _global.Global.getState();
	    var selectRowsIds = state.dataList.wfbdzyFileZyxgStep1 && state.dataList.wfbdzyFileZyxgStep1.selectedRows[0] ? state.dataList.wfbdzyFileZyxgStep1.selectedRows[0] : "";
	    callback({
	        "success": true,
	        "data": {
	            "title": "",
	            "searchConfig": {
	                "data": [{
	                    "column": 6,
	                    "data": [{ "type": "input", "name": "文件名", "field": "name" }, { "type": "select", "col": 5, "name": "文件类型", "field": "fileType",
	                        options: [{ value: "_all_", key: "全部" }, { value: "txt", key: "txt" }, { value: "jar", key: "jar" }, { value: "zip", key: "zip" }, { value: "rar", key: "rar" }, { value: "doc", key: "doc" }, { value: "excl", key: "excl" }, { value: "csv", key: "csv" }] }, { "type": "button", "value": "查询", "pageName": "search", "btnType": "primary", "htmlType": "submit" }]
	                }],
	                "body": { apiName: 'wfbdzyFileZyfbStep2TableData', body: { dataSourceId: selectRowsIds } }
	            },
	            "table": {
	                "primarykey": "name",
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
	                "body": { apiName: 'wfbdzyFileZyfbStep2TableData', body: { dataSourceId: selectRowsIds }, next: function next(action) {
	                        var state = _global.Global.getState();
	                        var fileDatas = state.dataList.getResourceForUpdate && state.dataList.getResourceForUpdate.data.fileJson ? JSON.parse(state.dataList.getResourceForUpdate.data.fileJson) : {};
	                        var step2TableData = action.data;
	                        var idArray = [];
	                        step2TableData.forEach(function (item) {
	                            fileDatas.forEach(function (item2) {
	                                if (item2.name == item.name) {
	                                    idArray.push(item.name);
	                                } else {}
	                            });
	                        });
	                        _global.Global.mark({ dataList: { wfbdzyFileZyxgStep2: { selectedRows: idArray } } });
	                    }
	                }
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
]);