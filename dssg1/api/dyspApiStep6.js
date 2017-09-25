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

	var _dataFormat = __webpack_require__(64);

	var _global = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("dyspApiStep6")(function (args, callback) {
	    var states = _global.Global.getState();

	    var detailMsg = states.dataList.zydysplb && states.dataList.zydysplb.detailMsgDataApi && states.dataList.zydysplb.detailMsgDataApi.data ? states.dataList.zydysplb.detailMsgDataApi.data : {};

	    var resSubscribeDetail = states.dataList.zydysplb && states.dataList.zydysplb.detailMsgDataApi && states.dataList.zydysplb.detailMsgDataApi.detailSubscribeDataApi && states.dataList.zydysplb.detailMsgDataApi.detailSubscribeDataApi.data ? states.dataList.zydysplb.detailMsgDataApi.detailSubscribeDataApi.data : {};
	    // 输入参数控制策略
	    var inParameterStrategy = (0, _dataFormat.getAiFormTableValue)(states, "dyspApiStep3");

	    // 输出参数控制策略
	    var sensitiveFilteing = [],
	        dataFilteing = [],
	        dataDesen = [];
	    var sensitiveFilteing1 = (0, _dataFormat.getAiFormTableValue)(states, "dyspApiStep41");
	    sensitiveFilteing1.length > 0 && sensitiveFilteing1.map(function (item, index) {
	        sensitiveFilteing.push({
	            resourceName: item.resourceName1,
	            type: item.type1,
	            name: item.name1,
	            keyword: item.keyword
	        });
	    });
	    var dataFilteing1 = (0, _dataFormat.getAiFormTableValue)(states, "dyspApiStep42");
	    dataFilteing1.length > 0 && dataFilteing1.map(function (item, index) {
	        dataFilteing.push({
	            resourceName: item.resourceName2,
	            type: item.type2,
	            name: item.name2,
	            conditionExp: item.conditionExp,
	            compareValue: item.compareValue
	        });
	    });
	    var dataDesen1 = (0, _dataFormat.getAiFormTableValue)(states, "dyspApiStep43");
	    dataDesen1.length > 0 && dataDesen1.map(function (item, index) {
	        dataDesen.push({
	            resourceName: item.resourceName3,
	            type: item.type3,
	            name: item.name3,
	            displayRule: item.displayRule
	        });
	    });
	    var outParameterStrategy = { sensitiveFilteing: sensitiveFilteing, dataFilteing: dataFilteing, dataDesen: dataDesen };

	    var subscribeId = states.dataList.zydysplb.selectedRowKeys[0];

	    var resourceId = detailMsg.id;

	    var stepFiveValue = states.aiForm.dyspApiStep5.values;
	    stepFiveValue.requestTime = resSubscribeDetail.requestTime ? resSubscribeDetail.requestTime : "";

	    var requestNumber = stepFiveValue.requestNumber ? stepFiveValue.requestNumber : "";
	    var resultNumber = stepFiveValue.resultNumber ? stepFiveValue.resultNumber : "";

	    var values = (0, _extends3["default"])({}, stepFiveValue, { resourceId: resourceId, subscribeId: subscribeId, resType: detailMsg.resType, requestNumber: requestNumber, resultNumber: resultNumber,
	        inParameterStrategy: inParameterStrategy, outParameterStrategy: outParameterStrategy });

	    _global.Global.mark({ aiForm: { dyspApiStep6: { values: values } } });

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