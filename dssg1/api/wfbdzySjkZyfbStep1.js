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

	var _StepContainerV = __webpack_require__(287);

	var _StepContainerV2 = _interopRequireDefault(_StepContainerV);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("wfbdzySjkZyfbStep1")(function (args, callback) {
	    var state = _global.Global.getState();

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
	                    render: function render(text, record, index) {
	                        var glState = _global.Global.getState().dataList.wfbdzySjkZyfbStep1;
	                        return _react2["default"].createElement(
	                            'div',
	                            null,
	                            index + 1 + glState.currentPage * glState.pageSize
	                        );
	                    }
	                }, {
	                    "title": "数据源名称",
	                    "dataIndex": "name",
	                    "key": "name"

	                }, {
	                    "title": "IP地址",
	                    "dataIndex": "ip",
	                    "key": "ip"
	                }, {
	                    "title": "端口",
	                    "dataIndex": "port",
	                    "key": "port"
	                }, {
	                    "title": "数据库类型",
	                    "dataIndex": "type",
	                    "key": "type",
	                    render: function render(text, record, index) {
	                        return record.dbType;
	                    }
	                }],
	                "body": { apiName: 'wfbdzySjkZyfbStep1TableData' }
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