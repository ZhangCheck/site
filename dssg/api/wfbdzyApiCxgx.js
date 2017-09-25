(function(){ var runed=0,temp,timer,time;webpackJsonp([3],[
/* 0 */
/***/ temp = function(module, exports, __webpack_require__) {runed=true;

	'use strict';

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _css = __webpack_require__(63);

	var _form = __webpack_require__(59);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _AiFormTable = __webpack_require__(428);

	var _AiFormTable2 = _interopRequireDefault(_AiFormTable);

	var _AiLabel = __webpack_require__(380);

	var _AiLabel2 = _interopRequireDefault(_AiLabel);

	var _jsonp = __webpack_require__(234);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(15);

	var _dataFormat = __webpack_require__(172);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var FormItem = _form2["default"].Item;

	(0, _jsonp2["default"])("wfbdzyApiCxgx")(function (args, callback) {
	    var states = _global.Global.getState();
	    var datas = states.dataList.wfbdzyApi.detailMsgDataApi && states.dataList.wfbdzyApi.detailMsgDataApi.data ? states.dataList.wfbdzyApi.detailMsgDataApi.data : {};
	    var metadataDetail = datas ? datas.metadataDTO : {};
	    var zyfbxx = datas.processRecordDTO ? datas.processRecordDTO : {};
	    var userName = states.framework.loginApi.data.loginUserProfileDTO.loginName;
	    var values = {};
	    values = (0, _extends3["default"])({}, values, { resourceId: zyfbxx.resourceId, type: "-1" });
	    callback({
	        "success": true,
	        "data": [{
	            "title": "元数据基本信息",
	            "column": 2,
	            "showTitle": true,
	            "titleIcon": "file-text",
	            "data": [{ "type": "text", "name": "标题", "field": "restitle", "defaultValue": datas.resName ? datas.resName : "" }, { "type": "text", "name": "摘要", "field": "abstracts", "defaultValue": metadataDetail.abstracts ? metadataDetail.abstracts : "" }, { "type": "text", "name": "关键字", "field": "keyword", "defaultValue": metadataDetail.keyword ? metadataDetail.keyword : "" }, { "type": "text", "name": "国家主题分类", "field": "themeType", "defaultValue": datas.themeTypeName ? datas.themeTypeName : "" }, { "type": "text", "name": "部门主题分类", "field": "departmentType", "defaultValue": datas.departmentTypeName ? datas.departmentTypeName : "" }, { "type": "text", "name": "资源类型", "field": "resourceType", "defaultValue": "API" }, { "type": "text", "name": "数据提供方单位", "field": "rporgname", "defaultValue": metadataDetail.rporgname ? metadataDetail.rporgname : "" }, { "type": "text", "name": "数据提供方地址", "field": "address", "defaultValue": metadataDetail.address ? metadataDetail.address : "" }]
	        }, {
	            "title": "资源发布信息",
	            "column": 2,
	            "showTitle": true,
	            "titleIcon": "notification",
	            "data": [{ "type": "text", "name": "发布原因", "field": "applyReason1", "defaultValue": zyfbxx.applyReason ? zyfbxx.applyReason : "" }, { "type": "text", "name": "申请人", "field": "applyUser", "defaultValue": zyfbxx.applyUser ? zyfbxx.applyUser : "" }, { "type": "text", "name": "发布时间", "field": "applyTime", "defaultValue": zyfbxx.applyTime ? zyfbxx.applyTime : "" }, { "type": "text", "name": "审核结果", "field": "result", "defaultValue": zyfbxx.result == "0" ? "通过" : zyfbxx.result == "-1" ? "拒绝" : "" }, { "type": "text", "name": "审核意见", "field": "subOpinion", "defaultValue": zyfbxx.reviewDesc ? zyfbxx.reviewDesc : "" }, { "type": "text", "name": "审核时间", "field": "reviewTime", "defaultValue": zyfbxx.reviewTime ? zyfbxx.reviewTime : "" }]
	        }, {
	            "title": "资源撤销申请信息",
	            "column": 2,
	            "showTitle": true,
	            "titleIcon": "rollback",
	            "buttonConfigs": {
	                "onSubmitApi": { apiName: "wfbdzyCxgxSubmit", body: (0, _extends3["default"])({}, values) },
	                "getValue": { id: "aFBCD", index: 2 },
	                "changeValue": { key: "effectiveData", format: "YYYY-MM-DD HH:mm:ss" },
	                "buttons": [{ "type": "button", "value": "取消", "ignore": "ignore", props: { "style": { "float": "right" } } }, { "type": "button", "value": "撤销共享", "ignore": "ignore", field: "submit", props: { type: "primary", "style": { "float": "right" } } }]
	            },
	            "data": [{ "name": "撤销原因", "type": "input", "field": "applyReason" }, { "name": "申请生效时间", "type": "datePicker", format: "YYYY-MM-DD HH:mm:ss", "field": "effectiveData" }, { "name": "申请人", "type": "text", ignore: "ignore", "defaultValue": userName, field: "applyUser" }]
	        }]
	    });
	});

/***/ }
]);if(!runed){
            clearInterval(timer);
            timer = setInterval(function(){
                if(temp) {
                    temp(module, exports, __webpack_require__);
                    clearInterval(timer);
                    temp=null;
                    
                }
                time++;
                if(time>500){
                    clearInterval(timer);
                    console.log('more than 500 times')
                }
            },500);
        }})()