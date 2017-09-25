webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _AiFormTable = __webpack_require__(310);

	var _AiFormTable2 = _interopRequireDefault(_AiFormTable);

	var _dataFormat = __webpack_require__(64);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("dyspApiEditData")(function (args, callback) {
	    var target = args.target;
	    var metadataDetail = args.apiData ? args.apiData.metadataDTO : {};
	    var zydyxx = args.apiData ? args.apiData.resSubscribeDTO : {};
	    callback({
	        "success": true,
	        "data": [{
	            "title": "元数据基本信息",
	            "column": 2,
	            "showTitle": true,
	            "titleIcon": "file-text",
	            "data": [{ "type": "text", "name": "标题", "field": "restitle", "defaultValue": metadataDetail.restitle ? metadataDetail.restitle : "" }, { "type": "text", "name": "摘要", "field": "abstracts", "defaultValue": metadataDetail.abstracts ? metadataDetail.abstracts : "" }, { "type": "text", "name": "关键字", "field": "keyword", "defaultValue": metadataDetail.keyword ? metadataDetail.keyword : "" }, { "type": "text", "name": "国家主题分类", "field": "subjectcarategory", "defaultValue": metadataDetail.subjectcarategory ? metadataDetail.subjectcarategory : "" }, { "type": "text", "name": "部门主题分类", "field": "departmentCategory", "defaultValue": metadataDetail.departmentCategory ? metadataDetail.departmentCategory : "" }, { "type": "text", "name": "资源类型", "field": "resourceType", "defaultValue": metadataDetail.resourceType ? metadataDetail.resourceType : "" }, { "type": "text", "name": "数据提供方单位", "field": "rporgname", "defaultValue": metadataDetail.rporgname ? metadataDetail.rporgname : "" }, { "type": "text", "name": "数据提供方地址", "field": "address", "defaultValue": metadataDetail.address ? metadataDetail.address : "" }]
	        }, {
	            "title": "资源申请订阅信息",
	            "column": 2,
	            "showTitle": true,
	            "titleIcon": "notification",
	            "data": [{ "type": "text", "name": "申请订阅原因", "field": "applyReason", "defaultValue": zydyxx.applyReason ? zydyxx.applyReason : "" }, { "type": "text", "name": "申请人", "field": "applyPerson", "defaultValue": zydyxx.applyPerson ? zydyxx.applyPerson : "" }, { "type": "text", "name": "申请订阅时间", "field": "applyTime", "defaultValue": zydyxx.applyTime ? zydyxx.applyTime : "" }]
	        }, {
	            "title": "资源订阅审批信息",
	            "column": 1,
	            "showTitle": true,
	            "titleIcon": "notification",
	            "buttonConfigs": {
	                "buttons": [{ "type": "button", "value": "取消", "field": "back", props: { btnType: "primary", "style": { "float": "right" } } }, { "type": "button", "value": "提交", props: { "style": { "float": "right" }, htmlType: "submit" } }]
	            },
	            "data": [{ "type": "select", "name": "审批结果", "field": "result", "options": ["通过", "拒绝"] }, { "type": "input", "inputType": "textarea", "name": "审批意见", "field": "opinion", props: { rows: 4 } }]
	        }]
	    });
	});

/***/ }
]);