webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("wfbdzyApiBdsjyXzsjyStep1")(function (args, callback) {

	    callback({
	        "success": true,
	        "data": {
	            "title": "",
	            "table": {
	                "primarykey": "id",
	                "clounms": [{
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
	                "body": { apiName: 'wfbdzySjkZyfbStep1TableData', next: function next(action) {
	                        var detailMsg = _global.Global.getState().dataList.wfbdzyApiBdsjyXzsjyStep1 && _global.Global.getState().dataList.wfbdzyApiBdsjyXzsjyStep1.detailMsgDataApi && _global.Global.getState().dataList.wfbdzyApiBdsjyXzsjyStep1.detailMsgDataApi.data ? _global.Global.getState().dataList.wfbdzyApiBdsjyXzsjyStep1.detailMsgDataApi.data : {};
	                        var dataSourceId = detailMsg.dataSourceId;
	                        if (dataSourceId) {
	                            var step1TableData = action.data && action.data.content ? action.data.content : [];

	                            step1TableData.length > 0 && step1TableData.forEach(function (item) {
	                                if (dataSourceId == item.id) {
	                                    _global.Global.mark({ dataList: { wfbdzyApiBdsjyXzsjyStep1: { selectedRows: [item.id], itemId: item.id } } });
	                                }
	                            });
	                        }
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