webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("jhrzDetail")(function (args, callback) {
	    //拿到树
	    var states = _global.Global.getState().dataList;
	    var jhrzModalDatas = "";
	    var listName = states.listName;
	    if (listName == "jhrzwfbdZY") {
	        jhrzModalDatas = states.jhrzwfbdZY && states.jhrzwfbdZY.detailMsgDataApi && states.jhrzwfbdZY.detailMsgDataApi.data ? states.jhrzwfbdZY.detailMsgDataApi.data : {};
	    } else if (listName == "jhrzwdydZY") {
	        jhrzModalDatas = states.jhrzwdydZY && states.jhrzwdydZY.detailMsgDataApi && states.jhrzwdydZY.detailMsgDataApi.data ? states.jhrzwdydZY.detailMsgDataApi.data : {};
	    }

	    //定义select框中的选项变量option

	    var showValue = void 0;
	    var fields = [{ "name": "任务名称", "type": "text", "field": "taskName", "defaultValue": jhrzModalDatas.taskName }, { "name": "类型", "type": "text", "resTypeName": "contacts", "defaultValue": jhrzModalDatas.resTypeName }, { "name": "抽取数", "type": "text", "field": "extractValue", "defaultValue": jhrzModalDatas.extractCount }, { "name": "抽取流量(kb)", "type": "text", "field": "extractValue", "defaultValue": jhrzModalDatas.extractValue }, { "name": "加载量", "type": "text", "field": "loadCount", "defaultValue": jhrzModalDatas.loadCount }, { "name": "加载流量(kb)", "type": "text", "field": "loadValue", "defaultValue": jhrzModalDatas.loadValue }, { "name": "开始时间", "type": "text", "field": "startTime", "defaultValue": jhrzModalDatas.startTime }, { "name": "结束时间", "type": "text", "field": "stopTime", "defaultValue": jhrzModalDatas.endTime }];

	    callback({
	        "success": true,
	        "data": [{
	            "title": "查看任务",
	            "column": 2,
	            "showTitle": false,
	            "buttonConfigs": {
	                "buttons": [{ "type": "button", "value": "返回", mark: "metadata", "field": "back", props: { btnType: "primary", "style": { "float": "right" } } }]
	            },
	            "data": fields
	        }]
	    });
	});

/***/ }
]);