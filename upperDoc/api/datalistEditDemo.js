webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(250);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("datalistEditDemo")(function (args, callback) {
	    //从树中读取详情数据
	    var state = Global.getState(),
	        detailMsgDataApi = state.dataList.datalistDemo.detailMsgDataApi,
	        defaultValue = detailMsgDataApi && detailMsgDataApi.data || {};
	    //视图配置(AiForm)
	    callback({
	        "success": true,
	        "data": [{
	            "title": "DataList编辑页面", //栏目抬头
	            "column": 2, //列数（布局）
	            "showTitle": true, //是否显示栏目抬头
	            "titleIcon": "file-text", //栏目抬头前的图标
	            "data": [//表单项
	            { "name": "序号", "type": "input", "field": "number", "defaultValue": defaultValue.number ? defaultValue.number : "test" }, { "name": "名称", "type": "input", "field": "name", "defaultValue": defaultValue.name ? defaultValue.name : "" }, { "name": "英文名称", "type": "input", "field": "englishName", "defaultValue": defaultValue.englishName ? defaultValue.englishName : "" }, { "name": "编码", "type": "input", "field": "unicode", "defaultValue": defaultValue.unicode ? defaultValue.unicode : "" }, { "name": "备注", "type": "input", "field": "remarks", "defaultValue": defaultValue.remarks ? defaultValue.remarks : "" }],
	            "buttonConfigs": { //底部按钮
	                "buttons": [{ "type": "button", "value": "取消", mark: "sjygl", props: { "style": { "float": "right" } } }, { "type": "button", "value": "确定", mark: "sjygl", props: { "style": { "float": "right" }, htmlType: "submit" } }, { "type": "button", "value": "测试连接", props: { type: "primary", "style": { "float": "right" }, htmlType: "button", onClick: function onClick() {} }

	                }]
	            }
	        }]
	    });
	});

/***/ }
]);