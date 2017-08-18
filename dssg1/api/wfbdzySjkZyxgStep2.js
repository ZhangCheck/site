webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _global = __webpack_require__(10);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _interfaces = __webpack_require__(35);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * Created by liy on 2016/12/19 0015.
	 */
	(0, _jsonp2["default"])("wfbdzySjkZyxgStep2")(function (args, callback) {
	    callback({
	        "success": true,
	        "data": {
	            "title": "",
	            "table": {
	                "primarykey": "id",
	                "clounms": [{
	                    "title": "数据源名称",
	                    "dataIndex": "name",
	                    "key": "name",
	                    "width": 250,
	                    render: function render(text, record, index) {
	                        return _react2["default"].createElement(
	                            'div',
	                            { title: text, style: { width: _global.Global.getState().framework.columnWidth, cursor: "pointer", display: "inline-block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } },
	                            text
	                        );
	                    }
	                }, {
	                    "title": "IP地址",
	                    "dataIndex": "ip",
	                    "key": "ip",
	                    "width": 250
	                }, {
	                    "title": "端口",
	                    "dataIndex": "port",
	                    "key": "port",
	                    "width": 250
	                }, {
	                    "title": "数据库类型",
	                    "dataIndex": "type",
	                    "key": "type",
	                    render: function render(text, record, index) {
	                        return record.dbType;
	                    }
	                }],
	                "body": { apiName: 'wfbdzySjkZyfbStep1TableData', next: function next() {
	                        var state = _global.Global.getState();
	                        var step1SelectRowsId = state.dataList.wfbdzySjk.selectedRows[0];
	                        _global.Global.requestApi((0, _extends3["default"])({}, _interfaces.wfbdzySjkUpdateResourceAllMsg, { body: (0, _extends3["default"])({}, _interfaces.wfbdzySjkUpdateResourceAllMsg.body, { id: step1SelectRowsId }), next: function next(action) {
	                                var state = _global.Global.getState();
	                                var resourceDataId = action.data.resourceItemDTO.dataSourceId;
	                                var step1TableData = state.dataList.wfbdzySjkZyxgStep2.tableBodyDataApi.data.content;
	                                step1TableData.forEach(function (item) {
	                                    if (resourceDataId == item.id) {
	                                        _global.Global.mark({ dataList: { wfbdzySjkZyxgStep2: { selectedRows: [item.id], itemId: item.id } } });
	                                    }
	                                });
	                            } }), ['requestgetResourceForUpdate', 'receievegetResourceForUpdate', 'failedgetResourceForUpdate'], { dataList: { getResourceForUpdate: null } });
	                    } //暂定此接口
	                } },
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