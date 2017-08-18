webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _component = __webpack_require__(11);

	var _component2 = _interopRequireDefault(_component);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _moment = __webpack_require__(28);

	var _moment2 = _interopRequireDefault(_moment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("fbzyfxAPITable")(function (args, callback) {
	    var config = {
	        "success": true,
	        "data": {
	            "id": "fbzyfxAPITable",
	            "title": "",
	            "table": {
	                "primarykey": "id",
	                "clounms": [{
	                    "title": "日期",
	                    "dataIndex": "collectTime",
	                    "key": "collectTime"
	                }, {
	                    "title": "发布资源数",
	                    "dataIndex": "pubResourceNum",
	                    "key": "pubResourceNum"
	                }, {
	                    "title": "订阅设备数",
	                    "dataIndex": "subEquipmentNum",
	                    "key": "subEquipmentNum"
	                }, {
	                    "title": "调用次数",
	                    "dataIndex": "extractTaskNum",
	                    "key": "extractTaskNum"
	                }],
	                "body": function body() {
	                    var value = Global.getState().aiForm.fbzyfxcx.form;
	                    var myBody = {
	                        resourceId: value.getFieldValue("resourceId") ? value.getFieldValue("resourceId") : null,
	                        equipment: value.getFieldValue("equipment") ? value.getFieldValue("equipment") : null,
	                        startTime: value.getFieldValue("SEtime") ? (0, _moment2["default"])(value.getFieldValue("SEtime")[0]).format("YYYY-MM-DD") : null,
	                        endTime: value.getFieldValue("SEtime") ? (0, _moment2["default"])((0, _moment2["default"])(value.getFieldValue("SEtime")[1]).add(1, 'days')).format("YYYY-MM-DD") : null,
	                        resType: 3
	                    };
	                    return { apiName: 'fbzyfxTable', body: (0, _extends3["default"])({}, myBody) };
	                }

	            }

	        }
	    };
	    callback(config);
	});

/***/ }
]);