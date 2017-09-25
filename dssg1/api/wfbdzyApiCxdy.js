webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(61);

	var _table = __webpack_require__(60);

	var _table2 = _interopRequireDefault(_table);

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _css2 = __webpack_require__(54);

	var _form = __webpack_require__(53);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _AiFormTable = __webpack_require__(310);

	var _AiFormTable2 = _interopRequireDefault(_AiFormTable);

	var _AiLabel = __webpack_require__(311);

	var _AiLabel2 = _interopRequireDefault(_AiLabel);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _dataFormat = __webpack_require__(64);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var FormItem = _form2["default"].Item; /**
	                                     * Created by liy on 2016/12/20 0020.
	                                     */

	(0, _jsonp2["default"])("wfbdzyApiCxdy")(function (args, callback) {
	    var metadataDetail = args.detail ? args.detail.metadataDTO : {};
	    var subscriber = args.detail && args.detail.subscriber ? args.detail.subscriber : [];
	    //订阅用户
	    var dyyhCloumn = [{
	        title: "订阅用户",
	        dataIndex: 'subscriber',
	        key: 'subscriber'
	    }, {
	        title: "订阅单位",
	        dataIndex: 'subUnit',
	        key: 'subUnit'
	    }, {
	        title: "用户等级",
	        dataIndex: 'level',
	        key: 'level'
	    }, {
	        title: "申请原因",
	        dataIndex: 'applyCause',
	        key: 'applyCause'
	    }, {
	        title: "订阅时间",
	        dataIndex: 'subscriptionTime',
	        key: 'subscriptionTime'
	    }, {
	        title: "联系电话",
	        dataIndex: 'telPhone',
	        key: 'telPhone'
	    }];
	    var values = {};
	    values = (0, _extends3["default"])({}, values, { resourceId: args.detail.id, subSendEquipment: "1" });
	    callback({
	        "success": true,
	        "data": [{
	            "title": "元数据基本信息",
	            "column": 2,
	            "showTitle": true,
	            "titleIcon": "file-text",
	            "data": [{ "type": "text", "name": "标题", "field": "restitle", "defaultValue": metadataDetail.restitle ? metadataDetail.restitle : "" }, { "type": "text", "name": "摘要", "field": "abstracts", "defaultValue": metadataDetail.abstracts ? metadataDetail.abstracts : "" }, { "type": "text", "name": "关键字", "field": "keyword", "defaultValue": metadataDetail.keyword ? metadataDetail.keyword : "" }, { "type": "text", "name": "国家主题分类", "field": "subjectcarategory", "defaultValue": metadataDetail.subjectcarategory ? metadataDetail.subjectcarategory : "" }, { "type": "text", "name": "部门主题分类", "field": "departmentCategory", "defaultValue": metadataDetail.departmentCategory ? metadataDetail.departmentCategory : "" }, { "type": "text", "name": "资源类型", "field": "resourceType", "defaultValue": "API" }, { "type": "text", "name": "数据提供方单位", "field": "rporgname", "defaultValue": metadataDetail.rporgname ? metadataDetail.rporgname : "" }, { "type": "text", "name": "数据提供方地址", "field": "address", "defaultValue": metadataDetail.address ? metadataDetail.address : "" }]
	        }, {
	            "title": "订阅用户",
	            "showTitle": true,
	            "titleIcon": "user",
	            "data": function data() {
	                return _react2["default"].createElement(_table2["default"], { columns: dyyhCloumn, dataSource: subscriber, bordered: true });
	            }
	        }, {
	            "title": "资源撤销订阅信息",
	            "column": 2,
	            "showTitle": true,
	            "titleIcon": "rollback",
	            "buttonConfigs": {
	                "onSubmitApi": { apiName: "wfbdzyCxdySubmit", body: (0, _extends3["default"])({}, values) },
	                "getValue": { id: "aFBCD", index: 2 },
	                "buttons": [{ "type": "button", "value": "取消", props: { "style": { "float": "right" } } }, { "type": "button", "value": "确定", "field": "submit", props: { type: "primary", "style": { "float": "right" } } }]
	            },
	            "data": [{ "name": "撤销原因", "type": "input", "field": "revokeReason" }, { "name": "申请人", "type": "text", "field": "applyUser", "defaultValue": "登录人" }]
	        }]
	    });
	});

/***/ }
]);