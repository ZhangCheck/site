webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _AiLabel = __webpack_require__(311);

	var _AiLabel2 = _interopRequireDefault(_AiLabel);

	var _AiFormTable = __webpack_require__(310);

	var _AiFormTable2 = _interopRequireDefault(_AiFormTable);

	var _aiFormTable = __webpack_require__(150);

	var _global = __webpack_require__(10);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _dataFormat = __webpack_require__(64);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * args为页面传送的参数
	 */
	(0, _jsonp2["default"])("wfbdzyApiBdsjyPzdyqxStep6")(function (args, callback) {

	    var target = args.target;
	    var states = _global.Global.getState();
	    var detailMsg = states.dataList.wfbdzyApiBdsjyXzsjyStep1 && states.dataList.wfbdzyApiBdsjyXzsjyStep1.detailMsgDataApi && states.dataList.wfbdzyApiBdsjyXzsjyStep1.detailMsgDataApi.data ? states.dataList.wfbdzyApiBdsjyXzsjyStep1.detailMsgDataApi.data : {};
	    var jkdzxx = (0, _dataFormat.getAiFormValue)(states, "wfbdzyApiBdsjySccspzStep4", 0);
	    _global.Global.requestApi({ "apiName": "getPublishURL", body: { url: "", realmName: "", serviceType: jkdzxx.serviceType, idThird: false } }, ["requestWsdl4jParse", "receiveWsdl4jParse", "failedWsdl4jParse"], { aiForm: { wfbdzyApiBdsjySccspzStep4: { url: null } } });
	    var columns = [{
	        "title": 'API等级',
	        "dataIndex": 'resLevel',
	        "key": 'resLevel',
	        "render": { "type": "select", field: "resLevel", options: [{ key: "一级", value: "1" }, { key: "二级", value: "2" }, { key: "三级", value: "3" }], props: { style: { width: 200 } } }
	    }];
	    callback({
	        "success": true,
	        "data": [{
	            "data": _react2["default"].createElement(_AiFormTable2["default"], { config: {
	                    "columns": columns, //表格标头数据
	                    "dataSource": [{
	                        "resLevel": detailMsg.resLevel ? detailMsg.resLevel : "1"
	                    }] //表格数据
	                }, id: 'aFTDStep6', form: target.props.form })

	        }]
	    });
	}); /* author by 田贵宾
	    import './other.html';
	    import React from 'react';
	    import ReactDOM from 'react-dom'; */

/***/ }
]);