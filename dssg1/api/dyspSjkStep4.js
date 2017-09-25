webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(54);

	var _form = __webpack_require__(53);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _dataFormat = __webpack_require__(64);

	var _global = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var FormItem = _form2["default"].Item;

	(0, _jsonp2["default"])("dyspSjkStep4")(function (args, callback) {
	    var states = _global.Global.getState();

	    var detailMsg = states.dataList.zydysplb && states.dataList.zydysplb.detailMsgDataApi && states.dataList.zydysplb.detailMsgDataApi.data ? states.dataList.zydysplb.detailMsgDataApi.data : {};

	    var subscribeId = states.dataList.zydysplb.selectedRowKeys[0];
	    var resourceId = detailMsg.id;
	    var tableJson = states.aiForm.dyspSjkStep2 && states.aiForm.dyspSjkStep2.selectedDbJson ? states.aiForm.dyspSjkStep2.selectedDbJson : [];

	    var values = { resourceId: resourceId, subscribeId: subscribeId, resType: detailMsg.resType, approvalDataJson: tableJson };

	    _global.Global.mark({ aiForm: { dyspSjkStep4: { values: values } } });

	    callback({
	        "success": true,
	        "data": [{
	            "title": "审批意见",
	            "column": 2,
	            "showTitle": false,
	            "data": [{ "name": "审批结果", "type": "select", "field": "approvalResult", options: [{ key: "同意订阅", value: "0" }, { key: "拒绝订阅", value: "-1" }], "defaultValue": "0" }, { "name": "审批意见", "type": "input", "field": "approvalOpinion" }]
	        }]
	    });
	});

/***/ }
]);