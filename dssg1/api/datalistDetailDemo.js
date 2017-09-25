webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _global = __webpack_require__(10);

	var _global2 = _interopRequireDefault(_global);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	//
	(0, _jsonp2["default"])("datalistDetailDemo")(function (args, callback) {
	    //从树中读取详情数据
	    var defaultValue = _global2["default"].getState().dataList.datalistDemo.detailMsgDataApi.data || {};
	    //视图配置(AiForm)
	    callback({
	        "success": true,
	        "data": [{
	            "title": "DataList详情页面", //栏目抬头
	            "column": 2, //列数（布局）
	            "showTitle": true, //是否显示栏目抬头
	            "titleIcon": "file-text", //栏目抬头前的图标
	            "data": [//表单项
	            { "name": "序号", "type": "text", "field": "number", "defaultValue": defaultValue.number ? defaultValue.number : "test" }, { "name": "名称", "type": "text", "field": "name", "defaultValue": defaultValue.name ? defaultValue.name : "" }, { "name": "英文名称", "type": "text", "field": "englishName", "defaultValue": defaultValue.englishName ? defaultValue.englishName : "" }, { "name": "编码", "type": "text", "field": "unicode", "defaultValue": defaultValue.unicode ? defaultValue.unicode : "" }, { "name": "备注", "type": "text", "field": "remarks", "defaultValue": defaultValue.remarks ? defaultValue.remarks : "" }],
	            "buttonConfigs": { //底部按钮
	                "buttons": [{ "type": "button", "value": "返回", mark: "sjygl", props: { "style": { "float": "right" }, htmlType: "submit" } }]
	            }
	        }]
	    });
	});

/***/ }
]);