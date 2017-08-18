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

	(0, _jsonp2["default"])("zybmlcCk")(function (args, callback) {
	    var states = _global.Global.getState();
	    var target = args.target;
	    var detailValue = states.dataList && states.dataList.zybmgl && states.dataList.zybmgl.detailMsgDataApi ? states.dataList.zybmgl.detailMsgDataApi.data : {};
	    var recordDTO = detailValue.recordDTO ? detailValue.recordDTO : {};
	    callback({
	        "success": true,
	        "data": [{
	            "title": "查看编目申请",
	            "column": 2,
	            "showTitle": true,
	            "data": [{ "name": "编目单位", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "companyName", "defaultValue": detailValue.companyName ? detailValue.companyName : "" }, { "name": "编目节点", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "equipmentName", "defaultValue": detailValue.equipmentName ? detailValue.equipmentName : "" }, { "name": "联系人", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "linkman", "defaultValue": detailValue.linkman ? detailValue.linkman : "" }, { "name": "联系电话", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "phone", "defaultValue": detailValue.phone ? detailValue.phone : "" }, { "name": "资源域", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "doMainName", "defaultValue": detailValue.doMainName ? detailValue.doMainName : "" }, { "name": "资源目录", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "catalogName", "defaultValue": detailValue.catalogName ? detailValue.catalogName : "" }, { "name": "资源类型", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "resType", "defaultValue": detailValue.resType == 1 ? "数据库" : detailValue.resType == 2 ? "文件" : "API" }, { "name": "提交审批时间", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "subAuditTime", "defaultValue": recordDTO.subAuditTime ? recordDTO.subAuditTime : "" }]
	        }, {
	            "title": "编目审批信息",
	            "column": 2,
	            "showTitle": true,
	            "buttonConfigs": {
	                "buttons": [{ "type": "button", "value": "返回", "field": "back", props: { type: "primary", "style": { "float": "right" } } }]
	            },
	            "data": [{ "name": "审批单位", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "auditorCompany", "defaultValue": detailValue.auditorCompany ? detailValue.auditorCompany : "" }, { "name": "审批人", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "reviewUserName", "defaultValue": detailValue.auditorUserName ? detailValue.auditorUserName : "" }, { "name": "审批结果", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "result", "defaultValue": recordDTO.result ? recordDTO.result == "0" ? "通过" : "拒绝" : "" }, { "name": "审批意见", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "reviewDesc", "defaultValue": recordDTO.reviewDesc ? recordDTO.reviewDesc : "" }, { "name": "审批时间", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "reviewTime", "defaultValue": recordDTO.reviewTime ? recordDTO.reviewTime : "" }]
	        }]
	    });
	});

/***/ }
]);