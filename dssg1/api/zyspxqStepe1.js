webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _component = __webpack_require__(11);

	var _component2 = _interopRequireDefault(_component);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(10);

	var _global2 = _interopRequireDefault(_global);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * 资源订阅审批详情分步1
	 */
	(0, _jsonp2["default"])("zyspxqStepe1")(function (args, callback) {
	    var glState = _global2["default"].getState();
	    if (!glState.dataList || !glState.dataList.zydysplb) {
	        _global2["default"].history.push('/dataListV1/zydysplb/list/10/11');
	        return;
	    }
	    var zydysplb = glState.dataList && glState.dataList.zydysplb && glState.dataList.zydysplb.detailMsgDataApi && glState.dataList.zydysplb.detailMsgDataApi.data.length > 0 ? glState.dataList.zydysplb.detailMsgDataApi.data[0] : {};
	    var publishTime = zydysplb.approvalTime;
	    if (null == publishTime || "" == publishTime) {
	        publishTime = "";
	    } else if (publishTime.length > 19) {
	        publishTime = publishTime.substr(0, 19);
	    }

	    var requestTime = zydysplb.applyTime;
	    if (null == requestTime || "" == requestTime) {
	        requestTime = "";
	    } else if (requestTime.length > 19) {
	        requestTime = requestTime.substr(0, 19);
	    }

	    callback({
	        "success": true,
	        "data": [{
	            "title": "订阅申请信息",
	            "column": 2,
	            "labelCol": 8,
	            "wrapperCol": 16,
	            "showTitle": true,
	            "data": [{ "name": "申请单位", "type": "text", "labelCol": 8, "wrapperCol": 16, "field": "applyCompany", "defaultValue": zydysplb.applyCompany ? zydysplb.applyCompany : "--" }, { "name": "订阅设备", "type": "text", "labelCol": 8, "wrapperCol": 16, "field": "subSendEquipment", "defaultValue": zydysplb.subSendEquipment ? zydysplb.subSendEquipment : "--" }, { "name": "联系人", "type": "text", "labelCol": 8, "wrapperCol": 16, "field": "applyPerson", "defaultValue": zydysplb.applyPerson ? zydysplb.applyPerson : "--" }, { "name": "联系电话", "type": "text", "labelCol": 8, "wrapperCol": 16, "field": "sendPhone", "defaultValue": zydysplb.sendPhone ? zydysplb.sendPhone : "--" }, { "name": "申请原因", "type": "text", "labelCol": 8, "wrapperCol": 16, "field": "applyReason", "defaultValue": zydysplb.applyReason ? zydysplb.applyReason : "--" }, { "name": "订阅方式", preRender: function preRender() {
	                    if (zydysplb.resType == "1") {
	                        return '';
	                    } else {
	                        return 'none';
	                    }
	                }, "type": "text", "labelCol": 8, "wrapperCol": 16, "field": "model", "defaultValue": zydysplb.model == 1 ? "完全" : zydysplb.model == 2 ? "映射" : '--' }, { "name": "资源类型", "type": "text", "labelCol": 8, "wrapperCol": 16, "field": "resType", "defaultValue": zydysplb.resType == 1 ? "数据库" : zydysplb.resType == 2 ? "文件" : zydysplb.resType == 3 ? "API" : '--' }, { "name": "申请订阅时间", "type": "text", "labelCol": 8, "wrapperCol": 16, "field": "applyTime", "defaultValue": requestTime ? requestTime : "--" }]
	        }, {
	            "title": "订阅审批信息",
	            "column": 2,
	            "labelCol": 8,
	            "wrapperCol": 16,
	            "showTitle": true,
	            "buttonConfigs": {
	                "buttons": [{ "type": "button", "value": "返回", "field": "back", props: { type: "primary", "style": { "float": "right" } } }]
	            },
	            "data": [{ "name": "审批单位", "type": "text", "labelCol": 8, "wrapperCol": 16, "field": "approvalcCompany", "defaultValue": zydysplb.approvalcCompany ? zydysplb.approvalcCompany : "--" }, { "name": "审批设备", "type": "text", "labelCol": 8, "wrapperCol": 16, "field": "subRecvEquipment", "defaultValue": zydysplb.subRecvEquipment ? zydysplb.subRecvEquipment : "--" }, { "name": "审批结果", "type": "text", "labelCol": 8, "wrapperCol": 16, "field": "state", "defaultValue": zydysplb.state == 2 ? "审核通过" : zydysplb.state == 3 ? "审核拒绝" : '正在审核' }, { "name": "审批人", "type": "text", "labelCol": 8, "wrapperCol": 16, "field": "approvalPerson", "defaultValue": zydysplb.approvalPerson ? zydysplb.approvalPerson : "" }, { "name": "联系电话", "type": "text", "labelCol": 8, "wrapperCol": 16, "field": "recPhone", "defaultValue": zydysplb.recPhone ? zydysplb.recPhone : "--" }, { "name": "审批时间", "type": "text", "labelCol": 8, "wrapperCol": 16, "field": "approvalTime", "defaultValue": publishTime ? publishTime : "--" }]
	        }]

	    });
	});

/***/ }
]);