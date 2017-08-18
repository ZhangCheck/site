webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(61);

	var _table = __webpack_require__(60);

	var _table2 = _interopRequireDefault(_table);

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _dataFormat = __webpack_require__(64);

	var _global = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("wfbdzyApiDsfjkUpdateFbylStep4")(function (args, callback) {
	    var states = _global.Global.getState();
	    var url = states.aiForm.url ? states.aiForm.url.data : "";
	    var metadataDetail = (0, _dataFormat.getAiFormValue)(states, "wfbdzyApiDsfjkTxysjStep1", 0);
	    var jkdzxx = (0, _dataFormat.getAiFormValue)(states, "wfbdzyApiDsfjkTxurlStep2", 0);
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
	    }, {
	        "title": '',
	        "dataIndex": 'startTime',
	        "key": 'startTime'
	    }, {
	        "title": '',
	        "dataIndex": 'jgzq',
	        "key": 'jgzq'
	    }];
	    var values = (0, _extends3["default"])({}, metadataDetail, jkdzxx, pzdyqx[0], { resId: args.apiData.id, functionName: functionName });
	    _global.Global.mark({ aiForm: { wfbdzyApiDsfjkUpdateFbylStep4: { values: values } } });
	    callback({
	        "success": true,
	        "data": [{
	            "title": "元数据基本信息", //栏目标题
	            "column": 2, //  form显示列数，首先读取每个标签的设置column值，不存在才会读取总的column,如果不存在，默认展示一列
	            "labelCol": 8, // form标头name宽度
	            "wrapperCol": 16, //form显示框宽度
	            "showTitle": true, //是否展示栏目标题
	            "data": [{ "type": "text", "name": "标题", "field": "restitle", "defaultValue": metadataDetail.resName ? metadataDetail.resName : "" }, { "type": "text", "name": "摘要", "field": "abstracts", "defaultValue": metadataDetail.abstracts ? metadataDetail.abstracts : "" }, { "type": "text", "name": "关键字", "field": "keyword", "defaultValue": metadataDetail.keyword ? metadataDetail.keyword : "" }, { "type": "text", "name": "国家主题分类", "field": "themeType", "defaultValue": metadataDetail.themeType ? metadataDetail.themeType : "" }, { "type": "text", "name": "部门主题分类", "field": "departmentType", "defaultValue": metadataDetail.departmentType ? metadataDetail.departmentType : "" }, { "type": "text", "name": "资源类型", "field": "resType", "defaultValue": metadataDetail.dylx ? metadataDetail.dylx : "" }, { "type": "text", "name": "数据提供方单位", "field": "rporgname", "defaultValue": metadataDetail.rporgname ? metadataDetail.rporgname : "" }, { "type": "text", "name": "数据提供方地址", "field": "address", "defaultValue": metadataDetail.address ? metadataDetail.address : "" }]
	        }, {
	            "title": "接口地址信息", //栏目标题
	            "column": 1, //  form显示列数，首先读取每个标签的设置column值，不存在才会读取总的column,如果不存在，默认展示一列
	            "labelCol": 8, // form标头name宽度
	            "wrapperCol": 16, //form显示框宽度
	            "showTitle": true, //是否展示栏目标题
	            "data": [{ "name": "接口地址", "type": "text", "field": "URL", "defaultValue": url }, { "name": "服务类型", "type": "text", "field": "serviceType", "defaultValue": jkdzxx.serviceType ? jkdzxx.serviceType : "" }, { "name": "方法", "type": "text", "field": "functionName", "defaultValue": jkdzxx.functionName ? jkdzxx.functionName : "" }]
	        }, {
	            "title": "API共享等级", //栏目标题
	            "showTitle": true, //是否展示栏目标题
	            "data": function data() {
	                return _react2["default"].createElement(
	                    'div',
	                    null,
	                    _react2["default"].createElement(
	                        'div',
	                        null,
	                        'API\u5171\u4EAB\u7B49\u7EA7\u914D\u7F6E'
	                    ),
	                    _react2["default"].createElement(_table2["default"], { columns: apigxdjcolumns, dataSource: pzdyqx })
	                );
	            }
	        }, {
	            "title": "资源申请发布信息", //栏目标题
	            "column": 2, //  form显示列数，首先读取每个标签的设置column值，不存在才会读取总的column,如果不存在，默认展示一列
	            "labelCol": 8, // form标头name宽度
	            "wrapperCol": 16, //form显示框宽度
	            "showTitle": true, //是否展示栏目标题
	            "data": [{ "name": "发布原因", "type": "text", "field": "applyReason", "defaultValue": metadataDetail.applyReason ? metadataDetail.applyReason : "" }, { "name": "申请人", "type": "text", "field": "applyuser", "defaultValue": "登录人" }]
	        }]
	    });
	});

/***/ }
]);