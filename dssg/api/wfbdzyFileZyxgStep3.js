(function(){ var runed=0,temp,timer,time;webpackJsonp([3],[
/* 0 */
/***/ temp = function(module, exports, __webpack_require__) {runed=true;

	'use strict';

	var _css = __webpack_require__(1778);

	var _modal = __webpack_require__(49);

	var _modal2 = _interopRequireDefault(_modal);

	var _css2 = __webpack_require__(63);

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

	var _history = __webpack_require__(41);

	var _history2 = _interopRequireDefault(_history);

	var _interfaces = __webpack_require__(33);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var FormItem = _form2["default"].Item; /**
	                                     * Created by liy on 2016/12/20 0020.
	                                     */

	(0, _jsonp2["default"])("wfbdzyFileZyxgStep3")(function (args, callback) {
	    var state = _global.Global.getState();
	    var metaDataDTO = state.dataList.getResourceForUpdate.data.metadataDTO;
	    var lastStepState = state.dataList.wfbdzyFileZyxgStep1;
	    var departmentType = state.dataList.getResourceForUpdate.data.departmentType;
	    var themeType = state.dataList.getResourceForUpdate.data.themeType;
	    if (!lastStepState) {
	        _modal2["default"].warning({
	            title: '提示',
	            content: '上一步或前几步没有完成，请返回第一步重新开始。',
	            onOk: function onOk() {
	                /* */
	                setTimeout(function () {
	                    _global.Global.mark({ aiForm: {
	                            wfbdzyFileZyxgStep3: null
	                        } });
	                    _history2["default"].push(state.routing.path.replace(/\/\d+/, '/1'));
	                }, 500);
	            }
	        });
	        return;
	    }

	    callback({
	        "success": true,
	        "data": [{
	            "title": "",
	            "column": 1,
	            "showTitle": false,
	            "data": [{ "name": "文件编码", "labelCol": 10, "wrapperCol": 10, "type": "input", "field": "wjbm", "validate": [{ "required": true, "message": '请填写文件编码 !' }], "defaultValue": metaDataDTO.restitle }, { "name": "文件名称", "labelCol": 10, "wrapperCol": 10, "type": "input", "field": "resName", "validate": [{ "required": true, "message": '请填写文件名称 !' }], "defaultValue": metaDataDTO.restitle }, { "name": "摘要", "labelCol": 10, "wrapperCol": 10, "type": "input", props: { type: "textarea", rows: 4 }, "field": "abstracts", "validate": [{ "required": true, "message": '请填写摘要!' }], "defaultValue": metaDataDTO.abstracts }, { "name": "要素", "labelCol": 10, "wrapperCol": 10, "type": "input", "field": "keyword", "validate": [{ "required": true, "message": '请填写要素 !' }], "defaultValue": metaDataDTO.keyword }, { "type": "treeSelect", "labelCol": 10, "wrapperCol": 10, "name": "国家主题分类", "field": "themeType", dictId: "themeType", dictApi: { apiName: 'flglDataTree', body: { categoryType: 1 } }, "defaultValue": metaDataDTO.themeType ? metaDataDTO.themeType : "", "validate": [{ "required": true, "message": '不能为空!' }] }, { "type": "treeSelect", "labelCol": 10, "wrapperCol": 10, "name": "国家部门分类", "field": "departmentType", dictId: "departmentType", dictApi: { apiName: 'flglDataTree', body: { categoryType: 2 } }, "defaultValue": metaDataDTO.departmentType ? metaDataDTO.departmentType : "", "validate": [{
	                    "required": true, "message": '不能为空!'
	                }] }, { "name": "订阅类型", "labelCol": 10, "wrapperCol": 10, "type": "text", "field": "dylx", "defaultValue": "文件", value: "文件" }, { "name": "数据提供方", "labelCol": 10, "wrapperCol": 10, "type": "input", "field": "rporgname", "validate": [{ "required": true, "message": '请填写数据提供方 !' }], "defaultValue": metaDataDTO.rporgname }, { "name": "数据提供方地址", "labelCol": 10, "wrapperCol": 10, "type": "input", "field": "address", "validate": [{ "required": true, "message": '请填写数据提供方地址 !' }], "defaultValue": metaDataDTO.address }, { "name": "发布原因", "labelCol": 10, "wrapperCol": 10, "type": "input", "field": "applyReason", "defaultValue": metaDataDTO.reason }]
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