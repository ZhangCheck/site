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

	var _global = __webpack_require__(10);

	var _history = __webpack_require__(32);

	var _history2 = _interopRequireDefault(_history);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 *  by  tiangb
	 */
	var FormItem = _form2["default"].Item;
	(0, _jsonp2["default"])("zybmShCkbmsqStep1")(function (args, callback) {
	    var target = args.target;
	    var states = _global.Global.getState();
	    var detailMsg = states.aiForm.zybmShCkbmsqStep1 && states.aiForm.zybmShCkbmsqStep1.detailMsgDataApi && states.aiForm.zybmShCkbmsqStep1.detailMsgDataApi.data ? states.aiForm.zybmShCkbmsqStep1.detailMsgDataApi.data : {};
	    var recordDTO = detailMsg.recordDTO ? detailMsg.recordDTO : {};
	    callback({
	        "success": true,
	        "data": [{
	            "title": "查看编目申请",
	            "column": 2,
	            "showTitle": true,
	            "data": [{ "name": "编目单位", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "createComp", "defaultValue": detailMsg.companyName ? detailMsg.companyName : "" }, { "name": "编目节点", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "createEqu", "defaultValue": detailMsg.equipmentName ? detailMsg.equipmentName : "" }, { "name": "联系人", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "linkman", "defaultValue": detailMsg.linkman ? detailMsg.linkman : "" }, { "name": "联系电话", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "phone", "defaultValue": detailMsg.phone ? detailMsg.phone : "" }, { "name": "资源域", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "doMainName", "defaultValue": detailMsg.doMainName ? detailMsg.doMainName : "" }, { "name": "资源目录", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "catalogName", "defaultValue": detailMsg.catalogName ? detailMsg.catalogName : "" }, { "name": "资源类型", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "resType", "defaultValue": detailMsg.resType == 1 ? "数据库" : detailMsg.resType == 2 ? "文件" : "API" }, { "name": "提交审批时间", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "subAuditTime", "defaultValue": recordDTO.subAuditTime ? recordDTO.subAuditTime : "" }]
	        }]
	    });
	});

/***/ }
]);