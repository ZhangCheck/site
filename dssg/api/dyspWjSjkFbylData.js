(function(){ var runed=0,temp,timer,time;webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__("./node_modules/webpack-hot-middleware-ie8/client.js?path=http:/127.0.0.1:8000/__webpack_hmr");
	module.exports = __webpack_require__("1484732967000");if(!runed){
            clearInterval(timer);
            timer = setInterval(function(){
                if(temp) {
                    temp(module, exports, __webpack_require__);
                    clearInterval(timer);
                    delete temp;
                    
                }
                time++;
                if(time>500){
                    clearInterval(timer);
                    console.log('more than 500 times')
                }
            },500);
        }


/***/ },

/***/ "1484732967000":
/***/ temp=function(module, exports, __webpack_require__) {
runed = true;

	'use strict';

	var _react = __webpack_require__("./node_modules/react/react.js");

	var _react2 = _interopRequireDefault(_react);

	var _AiLabel = __webpack_require__("./src/components/AiLabel.js");

	var _AiLabel2 = _interopRequireDefault(_AiLabel);

	var _AiFormTable = __webpack_require__("./src/components/AiFormTable.js");

	var _AiFormTable2 = _interopRequireDefault(_AiFormTable);

	var _aiFormTable = __webpack_require__("./src/actions/aiFormTable.js");

	var _global = __webpack_require__("./src/core/global.js");

	var _jsonp = __webpack_require__("./src/core/jsonp.js");

	var _jsonp2 = _interopRequireDefault(_jsonp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("dyspWjSjkFbylData")(function (args, callback) {
	    var apiData = args.apiData;
	    var ysjBasicInf = apiData ? apiData.metadataDTO : {};
	    var processRecordDTO = apiData ? apiData.processRecordDTO : {};
	    var departmentTypeName = apiData ? apiData.departmentTypeName : "";
	    var themeTypeName = apiData ? apiData.themeTypeName : "";
	    var resSubscribeDTO = apiData ? apiData.resSubscribeDTO : {};
	    callback({
	        "success": true,
	        "data": [{
	            "title": "元数据基本信息",
	            "column": 2,
	            "showTitle": true,
	            "titleIcon": "file-text",
	            "data": [{ "type": "text", "name": "标题", "field": "resName", "defaultValue": ysjBasicInf.restitle ? ysjBasicInf.restitle : "" }, { "type": "text", "name": "摘要", "field": "abstracts", "defaultValue": ysjBasicInf.abstracts ? ysjBasicInf.abstracts : "" }, { "type": "text", "name": "关键字", "field": "keyword", "defaultValue": ysjBasicInf.keyword ? ysjBasicInf.keyword : "" }, { "type": "text", "name": "国家主题分类", "field": "themeTypeName", "defaultValue": themeTypeName }, { "type": "text", "name": "部门主题分类", "field": "departmentTypeName", "defaultValue": departmentTypeName }, { "type": "text", "name": "订阅类型", "field": "resourceType", "defaultValue": "文件" }, { "type": "text", "name": "数据提供方单位", "field": "rporgname", "defaultValue": ysjBasicInf.rporgname ? ysjBasicInf.rporgname : "" }, { "type": "text", "name": "数据提供方地址", "field": "address", "defaultValue": ysjBasicInf.address ? ysjBasicInf.address : "" }]
	        }, {
	            "title": "资源申请订阅信息",
	            "column": 2,
	            "showTitle": true,
	            "titleIcon": "file-text",
	            "data": [{ "name": "申请订阅原因", "type": "text", "field": "applyReason", "defaultValue": resSubscribeDTO.applyReason }, { "name": "申请人", "type": "text", "field": "applyUser", "defaultValue": resSubscribeDTO.applyPerson }, { "name": "申请订阅时间", "type": "text", "field": "applyTime", "defaultValue": resSubscribeDTO.applyTime }]
	        }, {
	            "title": "资源订阅审批信息",
	            "column": 2,
	            "showTitle": true,
	            "titleIcon": "file-text",
	            "data": [{ "type": "text", "name": "审批结果", "field": "result", "defaultValue": _global.Global.getState().aiForm.getDyspWjEdit.result == "0" ? "通过" : "拒绝" }, { "name": "审批意见", "type": "text", "field": "reviewDesc", "defaultValue": _global.Global.getState().aiForm.getDyspWjEdit.reviewDesc }]
	        }]
	    });
	});

/***/ }

});
})()
//# sourceMappingURL=pageArgs.js.map