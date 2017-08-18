webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(54);

	var _form = __webpack_require__(53);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _dataFormat = __webpack_require__(64);

	var _global = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var FormItem = _form2["default"].Item;
	(0, _jsonp2["default"])("dyspSjkStep1")(function (args, callback) {

	    var states = _global.Global.getState();

	    var detailMsg = states.dataList.zydysplb && states.dataList.zydysplb.detailMsgDataApi.detailSubscribeDataApi && states.dataList.zydysplb.detailMsgDataApi.detailSubscribeDataApi.data ? states.dataList.zydysplb.detailMsgDataApi.detailSubscribeDataApi.data : {};

	    var config = {
	        "success": true,
	        "data": [{
	            "title": "订阅申请信息",
	            "showTitle": true,
	            "column": 2,
	            "labelCol": 1,
	            "wrapperCol": 6,
	            "data": [{ "name": "申请单位", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "createComp", "defaultValue": detailMsg.company ? detailMsg.company : "" }, { "name": "订阅设备", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "createEqu", "defaultValue": detailMsg.equipmentName ? detailMsg.equipmentName : "" }, { "name": "联系人", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "linkman", "defaultValue": detailMsg.linkMan ? detailMsg.linkMan : "" }, { "name": "联系电话", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "phone", "defaultValue": detailMsg.phone ? detailMsg.phone : "" }, { "name": "申请原因", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "domainName", "defaultValue": detailMsg.applyReason ? detailMsg.applyReason : "" }, { "name": "订阅方式", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "catalogName", "defaultValue": detailMsg.model == 1 ? "完全同步模式" : "映射模式" }, { "name": "资源类型", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "resType", "defaultValue": detailMsg.resType == 1 ? "数据库" : detailMsg.resType == 2 ? "文件" : "API" }, { "name": "申请订阅时间", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "updataTime", "defaultValue": detailMsg.applyTime ? detailMsg.applyTime : "" }]
	        }]
	    };

	    callback(config);
	});

/***/ }
]);