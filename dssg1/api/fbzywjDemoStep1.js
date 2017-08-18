webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(1935);

	var _modal = __webpack_require__(29);

	var _modal2 = _interopRequireDefault(_modal);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _component = __webpack_require__(11);

	var _component2 = _interopRequireDefault(_component);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _history = __webpack_require__(32);

	var _history2 = _interopRequireDefault(_history);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("fbzywjDemoStep1")(function (args, callback) {
	    var state = Global.getState();
	    var lastStepState = state.dataList.fbzyList;
	    if (!lastStepState) {
	        _modal2["default"].warning({
	            title: '提示',
	            content: '上一步或前几步没有完成，请返回重新开始发布。',
	            onOk: function onOk() {
	                /* */
	                setTimeout(function () {
	                    Global.mark({ dataList: {
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
	            "table": {
	                "primarykey": "id",
	                "clounms": [{
	                    "title": "序号",
	                    "dataIndex": "",
	                    "key": "",
	                    "width": 50,
	                    render: function render(text, record, index) {
	                        var glState = Global.getState().dataList.fbzywjDemoStep1;
	                        return _react2["default"].createElement(
	                            'div',
	                            null,
	                            index + 1 + glState.currentPage * glState.pageSize
	                        );
	                    }
	                }, {
	                    "title": "数据源名称",
	                    "dataIndex": "name",
	                    "key": "name",
	                    render: function render(text, record, index) {
	                        return _react2["default"].createElement(
	                            'div',
	                            { title: text, style: { width: Global.getState().framework.columnWidth, cursor: "pointer", display: "inline-block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } },
	                            text
	                        );
	                    }
	                }, {
	                    "title": "IP地址",
	                    "dataIndex": "ip",
	                    "key": "ip"
	                }, {
	                    "title": "端口",
	                    "dataIndex": "port",
	                    "key": "port"
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
	                "body": { apiName: 'fbzycxsjy', body: { type: 2 } }
	            }

	        }
	    });
	});

/***/ }
]);