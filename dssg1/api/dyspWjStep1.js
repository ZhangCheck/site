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
	(0, _jsonp2["default"])("dyspWjStep1")(function (args, callback) {

	    var states = _global.Global.getState();

	    var detailMsg = states.dataList.zydysplb && states.dataList.zydysplb.detailMsgDataApi && states.dataList.zydysplb.detailMsgDataApi.data ? states.dataList.zydysplb.detailMsgDataApi : {};
	    var resSubscribeDetail = detailMsg ? detailMsg.detailSubscribeDataApi.data : {};
	    var config = {
	        "success": true,
	        "data": [{
	            "title": "订阅申请信息",
	            "showTitle": true,
	            "column": 2,
	            "labelCol": 1,
	            "wrapperCol": 6,
	            "data": [{ "name": "申请单位", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "createComp", "defaultValue": resSubscribeDetail.company ? resSubscribeDetail.company : "" }, { "name": "订阅设备", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "createEqu", "defaultValue": resSubscribeDetail.equipmentName ? resSubscribeDetail.equipmentName : "" }, { "name": "联系人", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "linkman", "defaultValue": resSubscribeDetail.linkMan ? resSubscribeDetail.linkMan : "" }, { "name": "联系电话", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "phone", "defaultValue": resSubscribeDetail.phone ? resSubscribeDetail.phone : "" }, { "name": "申请原因", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "domainName", "defaultValue": resSubscribeDetail.applyReason ? resSubscribeDetail.applyReason : "" }, { "name": "资源类型", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "resType", "defaultValue": resSubscribeDetail.resType == 1 ? "数据库" : resSubscribeDetail.resType == 2 ? "文件" : "API" }, { "name": "申请订阅时间", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "updataTime", "defaultValue": resSubscribeDetail.applyTime ? resSubscribeDetail.applyTime : "" }]
	        }]
	    };

	    callback(config);
	});

/***/ }
]);