(function(){ var runed=0,temp,timer,time;webpackJsonp([3],[
/* 0 */
/***/ temp = function(module, exports, __webpack_require__) {runed=true;

	'use strict';

	var _css = __webpack_require__(73);

	var _table = __webpack_require__(69);

	var _table2 = _interopRequireDefault(_table);

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(234);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _dataFormat = __webpack_require__(172);

	var _global = __webpack_require__(15);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("wfbdzyApiDsfjkFbylStep4")(function (args, callback) {
	    var states = _global.Global.getState();

	    var target = args.target;
	    var getFieldValue = target.props.form.getFieldValue;
	    var detailMsg = states.dataList.wfbdzyApiDsfjkTxysjStep1 && states.dataList.wfbdzyApiDsfjkTxysjStep1.detailMsgDataApi ? states.dataList.wfbdzyApiDsfjkTxysjStep1.detailMsgDataApi[0] : {};
	    var url = states.aiForm.url ? states.aiForm.url.data : "";
	    var metadataDetail = states.aiForm.wfbdzyApiDsfjkTxysjStep1.values;
	    var jkdzxx = states.aiForm.wfbdzyApiDsfjkTxurlStep2.values;
	    if (!jkdzxx.apiDoc && jkdzxx.apiDoc == "") {
	        delete jkdzxx.apiDoc;
	    }
	    var functionName = states.aiForm.wfbdzyApiDsfjkTxurlStep2.functionName && states.aiForm.wfbdzyApiDsfjkTxurlStep2.functionName.data ? states.aiForm.wfbdzyApiDsfjkTxurlStep2.functionName.data.join() : "";
	    var pzdyqx = (0, _dataFormat.getAiFormTableValue)(states, "dsfStep3");
	    var apigxdjcolumns = [{
	        "title": 'API等级',
	        "dataIndex": 'resLevel',
	        "key": 'resLevel',
	        render: function render(text, _render, index) {
	            switch (text) {
	                case "1":
	                    return "一级";
	                case "2":
	                    return "二级";
	                case "3":
	                    return "三级";
	            }
	        }
	    }];

	    var userName = states.framework.loginApi.data.loginUserProfileDTO.loginName;
	    var themeName = (0, _dataFormat.gettreeSelectName)(states, "themeType", metadataDetail.themeType);
	    var departmentName = (0, _dataFormat.gettreeSelectName)(states, "departmentType", metadataDetail.departmentType);
	    if (detailMsg.id) {
	        metadataDetail.resId = detailMsg.id;
	    }
	    metadataDetail.themeTypeName = themeName;
	    metadataDetail.departmentTypeName = departmentName;

	    var values = (0, _extends3["default"])({}, metadataDetail, jkdzxx, pzdyqx[0], { functionName: functionName });
	    _global.Global.mark({ aiForm: { wfbdzyApiDsfjkFbylStep4: { values: values } } });
	    callback({
	        "success": true,
	        "data": [{
	            "title": "元数据基本信息", //栏目标题
	            "column": 2, //  form显示列数，首先读取每个标签的设置column值，不存在才会读取总的column,如果不存在，默认展示一列
	            "labelCol": 8, // form标头name宽度
	            "wrapperCol": 16, //form显示框宽度
	            "showTitle": true, //是否展示栏目标题
	            "titleIcon": "metadata-message",
	            "data": [{ "type": "text", "name": "标题", "field": "restitle", "defaultValue": metadataDetail.resName ? metadataDetail.resName : "" }, { "type": "text", "name": "摘要", "field": "abstracts", "defaultValue": metadataDetail.abstracts ? metadataDetail.abstracts : "" }, { "type": "text", "name": "关键字", "field": "keyword", "defaultValue": metadataDetail.keyword ? metadataDetail.keyword : "" }, { "type": "text", "name": "国家主题分类", "field": "themeType", "defaultValue": themeName }, { "type": "text", "name": "部门主题分类", "field": "departmentType", "defaultValue": departmentName }, { "type": "text", "name": "资源类型", "field": "resType", "defaultValue": "API" }, { "type": "text", "name": "数据提供方单位", "field": "rporgname", "defaultValue": metadataDetail.rporgname ? metadataDetail.rporgname : "" }, { "type": "text", "name": "数据提供方地址", "field": "address", "defaultValue": metadataDetail.address ? metadataDetail.address : "" }]
	        }, {
	            "title": "接口地址信息", //栏目标题
	            "column": 1, //  form显示列数，首先读取每个标签的设置column值，不存在才会读取总的column,如果不存在，默认展示一列
	            "labelCol": 8, // form标头name宽度
	            "wrapperCol": 16, //form显示框宽度
	            "showTitle": true, //是否展示栏目标题
	            "titleIcon": "schedule-configuration",
	            "data": [{ "name": "接口地址", "type": "text", "field": "URL", "defaultValue": url }, { "name": "服务类型", "type": "text", "field": "serviceType", "defaultValue": jkdzxx.serviceType ? jkdzxx.serviceType : "" }, { "name": "方法", "type": "text", "field": "functionName", "defaultValue": jkdzxx.functionName ? jkdzxx.functionName : "", preRender: function preRender() {
	                    return jkdzxx.serviceType == 'rest' ? "hidden" : "";
	                } }]
	        }, {
	            "title": "API共享等级", //栏目标题
	            "showTitle": true, //是否展示栏目标题
	            "titleIcon": "schedule-configuration",
	            "data": function data() {
	                return _react2["default"].createElement(
	                    'div',
	                    null,
	                    _react2["default"].createElement(
	                        'div',
	                        null,
	                        'API\u5171\u4EAB\u7B49\u7EA7\u914D\u7F6E'
	                    ),
	                    _react2["default"].createElement(_table2["default"], { columns: apigxdjcolumns, dataSource: pzdyqx, pagination: false })
	                );
	            }
	        }, {
	            "title": "资源申请发布信息", //栏目标题
	            "column": 2, //  form显示列数，首先读取每个标签的设置column值，不存在才会读取总的column,如果不存在，默认展示一列
	            "labelCol": 8, // form标头name宽度
	            "wrapperCol": 16, //form显示框宽度
	            "showTitle": true, //是否展示栏目标题
	            "titleIcon": "schedule-configuration",
	            "data": [{ "name": "发布原因", "type": "text", "field": "applyReason", "defaultValue": metadataDetail.applyReason ? metadataDetail.applyReason : "" }, { "name": "申请人", "type": "text", "field": "applyuser", "defaultValue": userName }]
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