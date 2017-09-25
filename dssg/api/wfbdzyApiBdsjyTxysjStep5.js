(function(){ var runed=0,temp,timer,time;webpackJsonp([3],[
/* 0 */
/***/ temp = function(module, exports, __webpack_require__) {runed=true;

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _AiFormTable = __webpack_require__(428);

	var _AiFormTable2 = _interopRequireDefault(_AiFormTable);

	var _AiLabel = __webpack_require__(380);

	var _AiLabel2 = _interopRequireDefault(_AiLabel);

	var _jsonp = __webpack_require__(234);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(15);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("wfbdzyApiBdsjyTxysjStep5")(function (args, callback) {
	    var target = args.target;
	    var states = _global.Global.getState();

	    var detailMsg = states.dataList.wfbdzyApi && states.dataList.wfbdzyApi.detailMsgDataApi && states.dataList.wfbdzyApi.detailMsgDataApi.data ? states.dataList.wfbdzyApi.detailMsgDataApi.data : {};
	    var values = states.aiForm.wfbdzyApiBdsjyTxysjStep5.values ? states.aiForm.wfbdzyApiBdsjyTxysjStep5.values : {};
	    if (states.aiForm.wfbdzyApiBdsjyTxysjStep5.values) {
	        detailMsg = values;
	    }
	    callback({
	        "success": true,
	        "data": [{
	            "title": "",
	            "column": 1,
	            "data": [{ "name": "资源名称", "type": "input", "field": "resName", "defaultValue": detailMsg.resName ? detailMsg.resName : "", "validate": [{ "required": true, "message": '请填写资源名称 !' }] }, { "name": "摘要", "type": "input", props: { type: "textarea", rows: 4 }, "defaultValue": detailMsg.abstracts ? detailMsg.abstracts : "", "field": "abstracts", "validate": [{ "required": true, "message": '请填写摘要!' }] }, { "name": "要素", "type": "input", "field": "keyword", "defaultValue": detailMsg.keyword ? detailMsg.keyword : "", "validate": [{ "required": true, "message": '请填写要素 !' }] }, { "type": "treeSelect", "name": "国家主题分类", "field": "themeType", dictId: "themeType", dictApi: { apiName: 'flglDataTree', body: { categoryType: 1 } }, "defaultValue": detailMsg.themeType ? detailMsg.themeType : states.dicts.treeSelect.themeType.data.length > 0 ? states.dicts.treeSelect.themeType.data[0].value : "", "validate": [{ "required": true, "message": '不能为空!' }] }, { "type": "treeSelect", "name": "国家部门分类", "field": "departmentType", dictId: "departmentType", dictApi: { apiName: 'flglDataTree', body: { categoryType: 2 } }, "defaultValue": detailMsg.departmentType ? detailMsg.departmentType : states.dicts.treeSelect.departmentType.data.length > 0 ? states.dicts.treeSelect.departmentType.data[0].value : "", "validate": [{
	                    "required": true, "message": '不能为空!'
	                }] }, { "name": "资源类型", "type": "select", "field": "resType", "defaultValue": "3", "validate": [{ "required": true }], "placeholder": "请选择...", "options": [{ key: "API", value: "3" }] }, { "name": "数据提供方单位", "type": "input", "field": "rporgname", "defaultValue": detailMsg.rporgname ? detailMsg.rporgname : "", "validate": [{ "required": true, "message": '请填写数据提供方单位 !' }] }, { "name": "数据提供方地址", "type": "input", "field": "address", "defaultValue": detailMsg.address ? detailMsg.address : "", "validate": [{ "required": true, "message": '请填写数据提供方地址 !' }] }, { "name": "发布原因", "type": "input", "field": "applyReason", "defaultValue": detailMsg.applyReason ? detailMsg.applyReason : "" }]
	        }]
	    });
	}); /**
	     * Created by liy on 2016/12/20 0020.
	     */

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