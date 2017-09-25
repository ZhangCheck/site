webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(1962);

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
	(0, _jsonp2["default"])("fbzywjDemoStep2")(function (args, callback) {
	    var state = _global.Global.getState();
	    var selectRowsIds = state.dataList.fbzywjDemoStep1 && state.dataList.fbzywjDemoStep1.selectedRows[0] ? state.dataList.fbzywjDemoStep1.selectedRows[0] : "";
	    var lastStepState = state.dataList.fbzywjDemoStep1;
	    if (!lastStepState) {
	        _modal2["default"].warning({
	            title: '提示',
	            content: '上一步或前几步没有完成，请返回重新开始发布。',
	            onOk: function onOk() {
	                /* */
	                setTimeout(function () {
	                    _global.Global.mark({ dataList: {
	                            fbzywjDemoStep1: null
	                        } });
	                    _history2["default"].push("datalistV1/fbzyList/list/11/10");
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
	                    "column": 2,
	                    "formItemRewiring": true,
	                    "data": [{ "type": "input", "col": 5, "name": "文件名", "field": "fileName" }, { "type": "select", "col": 5, "name": "文件类型", "field": "fileType",
	                        options: [{ value: "_all_", key: "全部" }, { value: "txt", key: "txt" }, { value: "jar", key: "jar" }, { value: "zip", key: "zip" }, { value: "rar", key: "rar" }, { value: "doc", key: "doc" }, { value: "xls", key: "xls" }, { value: "csv", key: "csv" }] }, { "type": "button", "value": "查询", "pageName": "search", "btnType": "primary", "htmlType": "submit" }]
	                }]
	            },
	            "table": {
	                "primarykey": "name",
	                "clounms": [{
	                    "title": "序号",
	                    "dataIndex": "",
	                    "key": "",
	                    "width": 50,
	                    render: function render(text, record, index) {
	                        var glState = _global.Global.getState().dataList.fbzywjDemoStep2;
	                        return _react2["default"].createElement(
	                            'div',
	                            null,
	                            index + 1 + glState.currentPage * glState.pageSize
	                        );
	                    }
	                }, {
	                    "title": "文件名",
	                    "dataIndex": "name",
	                    "key": "name",
	                    render: function render(text, record, index) {
	                        return _react2["default"].createElement(
	                            'div',
	                            { title: text, style: { width: _global.Global.getState().framework.columnWidth, cursor: "pointer", display: "inline-block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } },
	                            text
	                        );
	                    }
	                }, {
	                    "title": "文件类型",
	                    "dataIndex": "type",
	                    "key": "type"
	                }, {
	                    "title": "文件大小",
	                    "dataIndex": "cSize",
	                    "key": "cSize"
	                }, {
	                    "title": "最近修改日期",
	                    "dataIndex": "updateDate",
	                    "key": "updateDate"
	                }],
	                "body": function body() {
	                    return { apiName: 'fbzycxwj', body: { id: _global.Global.getState().dataList.fbzywjDemoStep1.selectedRows[0] } };
	                }
	            },
	            "check": {
	                "view": null,
	                "checkApi": null
	            }
	        }
	    });
	});

/***/ }
]);