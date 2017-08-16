(function(){ var runed=0,temp,timer,time;webpackJsonp([3],[
/* 0 */
/***/ temp = function(module, exports, __webpack_require__) {runed=true;

	'use strict';

	var _css = __webpack_require__(63);

	var _form = __webpack_require__(59);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(234);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(15);

	var _history = __webpack_require__(41);

	var _history2 = _interopRequireDefault(_history);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 *  by  tiangb
	 */
	var FormItem = _form2["default"].Item;
	(0, _jsonp2["default"])("wfbdzyApiDsfjkTxysjStep1")(function (args, callback) {
	    var states = _global.Global.getState();
	    var detailMsg = states.dataList.wfbdzyApiDsfjkTxysjStep1 && states.dataList.wfbdzyApiDsfjkTxysjStep1.detailMsgDataApi ? states.dataList.wfbdzyApiDsfjkTxysjStep1.detailMsgDataApi[0] : {};
	    var values = states.aiForm.wfbdzyApiDsfjkTxysjStep1.values ? states.aiForm.wfbdzyApiDsfjkTxysjStep1.values : {};
	    if (states.aiForm.wfbdzyApiDsfjkTxysjStep1.values) {
	        detailMsg = values;
	    }
	    callback({
	        "success": true,
	        "data": [{
	            "title": "填写数据源",
	            "column": 1,
	            "showTitle": false,
	            "data": [{ "name": "资源名称", "type": "input", "field": "resName", "defaultValue": detailMsg.resName ? detailMsg.resName : "", "validate": [{ "required": true, "message": '请填写资源名称 !' }] }, { "name": "摘要", "type": "input", props: { type: "textarea", rows: 4 }, "defaultValue": detailMsg.abstracts ? detailMsg.abstracts : "", "field": "abstracts", "validate": [{ "required": true, "message": '请填写摘要!' }] }, { "name": "要素", "type": "input", "field": "keyword", "defaultValue": detailMsg.keyword ? detailMsg.keyword : "", "validate": [{ "required": true, "message": '请填写要素 !' }] }, { "type": "treeSelect", "name": "国家主题分类", "field": "themeType", dictId: "themeType", dictApi: { apiName: 'flglDataTree', body: { categoryType: 1 } }, "defaultValue": detailMsg.themeType ? detailMsg.themeType : states.dicts.treeSelect && states.dicts.treeSelect.themeType && states.dicts.treeSelect.themeType.data.length > 0 ? states.dicts.treeSelect.themeType.data[0].value : "", "validate": [{ "required": true, "message": '不能为空!' }] }, { "type": "treeSelect", "name": "国家部门分类", "field": "departmentType", dictId: "departmentType", dictApi: { apiName: 'flglDataTree', body: { categoryType: 2 } }, "defaultValue": detailMsg.departmentType ? detailMsg.departmentType : states.dicts.treeSelect && states.dicts.treeSelect.departmentType && states.dicts.treeSelect.departmentType.data.length > 0 ? states.dicts.treeSelect.departmentType.data[0].value : "", "validate": [{
	                    "required": true, "message": '不能为空!'
	                }] }, { "name": "资源类型", "type": "select", "field": "resType", "defaultValue": "3", "validate": [{ "required": true }], "placeholder": "请选择...", "options": [{ key: "API", value: "3" }] }, { "name": "数据提供方单位", "type": "input", "field": "rporgname", "defaultValue": detailMsg.rporgname ? detailMsg.rporgname : "", "validate": [{ "required": true, "message": '请填写数据提供方单位 !' }] }, { "name": "数据提供方地址", "type": "input", "field": "address", "defaultValue": detailMsg.address ? detailMsg.address : "", "validate": [{ "required": true, "message": '请填写数据提供方地址 !' }] }, { "name": "发布原因", "type": "input", "field": "applyReason", "defaultValue": detailMsg.applyReason ? detailMsg.applyReason : "" }]
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