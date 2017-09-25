webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("bannerDetail")(function (args, callback) {
	    var states = _global.Global.getState();
	    var values = states.dataList.banner.detailMsgDataApi && states.dataList.banner.detailMsgDataApi.data ? states.dataList.banner.detailMsgDataApi.data : {};
	    var backData = values.content[0];
	    var config = [];
	    var detailConfig = {
	        "column": 2,
	        "labelCol": 8,
	        "wrapperCol": 20,
	        "showTitle": true,
	        "data": [{ "type": "text", "name": "标题", "field": "restitle", "defaultValue": backData.title ? backData.title : "" }, { "type": "text", "name": "banner类型", "field": "abstracts", "defaultValue": "图片" }],
	        "buttonConfigs": {
	            "buttons": [{ "type": "button", "value": "返回", mark: "sjygl", props: { "style": { "float": "right" }, htmlType: "submit" } }]
	        }
	    };
	    for (var i = 0; i < backData.attachmentList.length; i++) {
	        detailConfig.data.push({ "type": "text", "name": "文件" + (i + 1), "field": "file" + i, "defaultValue": backData.attachmentList[i].fileName });
	        detailConfig.data.push({ "type": "text", "name": "链接地址" + (i + 1), "field": "url" + i, "defaultValue": backData.attachmentList[i].thumbanilPath == "" ? "无" : backData.attachmentList[i].thumbanilPath });
	    }
	    config.push((0, _extends3["default"])({}, detailConfig));
	    callback({
	        "success": true,
	        "data": config
	    });
	});

/***/ }
]);