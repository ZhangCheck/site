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

	var _dataFormat = __webpack_require__(172);

	var _global = __webpack_require__(15);

	var _jsonp = __webpack_require__(234);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * Created by liy on 2016/12/20 0020.
	 */
	var FormItem = _form2["default"].Item;
	(0, _jsonp2["default"])("wfbdzySjkCxgx")(function (args, callback) {
	    var metadataDetail = args.detail ? args.detail.metadataDTO : {};
	    var zyfbxx = args.detail ? args.detail.processRecordDTO : {};
	    var values = {};
	    values = (0, _extends3["default"])({}, values, { resourceId: args.detail.id, type: "-1" });

	    callback({
	        "success": true,
	        "data": [{
	            "title": "元数据基本信息",
	            "column": 2,
	            "showTitle": true,
	            "titleIcon": "file-text",
	            "data": [{ "type": "text", "name": "标题", "field": "restitle", "defaultValue": metadataDetail.restitle ? metadataDetail.restitle : "" }, { "type": "text", "name": "摘要", "field": "abstracts", "defaultValue": metadataDetail.abstracts ? metadataDetail.abstracts : "" }, { "type": "text", "name": "关键字", "field": "keyword", "defaultValue": metadataDetail.keyword ? metadataDetail.keyword : "" }, { "type": "text", "name": "国家主题分类", "field": "subjectcarategory", "defaultValue": metadataDetail.subjectcarategory ? metadataDetail.subjectcarategory : "" }, { "type": "text", "name": "部门主题分类", "field": "departmentcategory", "defaultValue": metadataDetail.departmentcategory ? metadataDetail.departmentcategory : "" }, { "type": "text", "name": "资源类型", "field": "resourceType", "defaultValue": '数据库' }, { "type": "text", "name": "数据提供方单位", "field": "rporgname", "defaultValue": metadataDetail.rporgname ? metadataDetail.rporgname : "" }, { "type": "text", "name": "数据提供方地址", "field": "address", "defaultValue": metadataDetail.address ? metadataDetail.address : "" }]
	        }, {
	            "title": "资源发布信息",
	            "column": 2,
	            "showTitle": true,
	            "titleIcon": "notification",
	            "data": [{ "type": "text", "name": "发布原因", "field": "applyReason", "defaultValue": zyfbxx.applyReason ? zyfbxx.applyReason : "" }, { "type": "text", "name": "申请人", "field": "applyUser", "defaultValue": zyfbxx.applyUser ? zyfbxx.applyUser : "" }, { "type": "text", "name": "发布时间", "field": "applyTime", "defaultValue": zyfbxx.applyTime ? zyfbxx.applyTime : "" }, { "type": "text", "name": "审核结果", "field": "result", "defaultValue": zyfbxx.result ? zyfbxx.result == 0 ? '通过' : '拒绝' : "" }, { "type": "text", "name": "审核意见", "field": "reviewDesc", "defaultValue": zyfbxx.reviewDesc ? zyfbxx.reviewDesc : "" }, { "type": "text", "name": "审核时间", "field": "reviewTime", "defaultValue": zyfbxx.reviewTime ? zyfbxx.reviewTime : "" }]
	        }, {
	            "title": "资源撤销申请信息",
	            "column": 2,
	            "showTitle": true,
	            "titleIcon": "rollback",
	            "buttonConfigs": {
	                "onSubmitApi": { apiName: "wfbdzyCxgxSubmit", body: (0, _extends3["default"])({}, values) },
	                "getValue": { id: "aFBCD", index: 2 },
	                "changeValue": { key: "effectiveData", format: "YYYY-MM-DD HH:mm:ss" },
	                "buttons": [{ "type": "button", "value": "取消", props: { "style": { "float": "right" } } }, { "type": "button", "value": "撤销共享", props: { type: "primary", "style": { "float": "right" } } }]
	            },
	            "data": [{ "name": "撤销原因", "type": "input", "field": "applyReason" }, { "name": "申请生效时间", "type": "datePicker", "field": "effectiveData", props: { showTime: true } }, { "name": "申请人", "type": "text", "field": "applyUser", "defaultValue": _global.Global.getState().framework.loginApi.data.loginUserProfileDTO.loginName }]
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