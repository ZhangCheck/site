webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(2446);

	var _modal = __webpack_require__(29);

	var _modal2 = _interopRequireDefault(_modal);

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
	(0, _jsonp2["default"])("wfbdzyFileZyfbStep2")(function (args, callback) {
	    var state = _global.Global.getState();
	    var selectRowsIds = state.dataList.wfbdzyFileZyfbStep1 && state.dataList.wfbdzyFileZyfbStep1.selectedRows[0] ? state.dataList.wfbdzyFileZyfbStep1.selectedRows[0] : "";
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
	                    "data": [{ "type": "input", "col": 5, "name": "文件名", "field": "fileName" }, { "type": "select", "col": 5, "name": "文件类型", "field": "fileType",
	                        options: [{ value: "_all_", key: "全部" }, { value: "txt", key: "txt" }, { value: "jar", key: "jar" }, { value: "zip", key: "zip" }, { value: "rar", key: "rar" }, { value: "doc", key: "doc" }, { value: "excl", key: "excl" }, { value: "csv", key: "csv" }] }, { "type": "button", "value": "查询", "pageName": "search", "btnType": "primary", "htmlType": "submit" }]
	                }],
	                "body": { apiName: 'wfbdzyFileZyfbStep2TableData',
	                    body: { dataSourceId: selectRowsIds }
	                }
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
	                "body": { apiName: 'wfbdzyFileZyfbStep2TableData', body: { dataSourceId: selectRowsIds } }
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