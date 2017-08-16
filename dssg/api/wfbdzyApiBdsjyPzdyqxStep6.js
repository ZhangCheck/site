(function(){ var runed=0,temp,timer,time;webpackJsonp([3],[
/* 0 */
/***/ temp = function(module, exports, __webpack_require__) {runed=true;

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _AiLabel = __webpack_require__(380);

	var _AiLabel2 = _interopRequireDefault(_AiLabel);

	var _AiFormTable = __webpack_require__(428);

	var _AiFormTable2 = _interopRequireDefault(_AiFormTable);

	var _aiFormTable = __webpack_require__(159);

	var _global = __webpack_require__(15);

	var _jsonp = __webpack_require__(234);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _dataFormat = __webpack_require__(172);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * args为页面传送的参数
	 */
	(0, _jsonp2["default"])("wfbdzyApiBdsjyPzdyqxStep6")(function (args, callback) {

	    var target = args.target;
	    var states = _global.Global.getState();
	    var detailMsg = states.dataList.wfbdzyApi && states.dataList.wfbdzyApi.detailMsgDataApi && states.dataList.wfbdzyApi.detailMsgDataApi.data ? states.dataList.wfbdzyApi.detailMsgDataApi.data : {};
	    var jkdzxx = (0, _dataFormat.getAiFormValue)(states, "wfbdzyApiBdsjySccspzStep4", 0);
	    _global.Global.requestApi({ "apiName": "getPublishURL", body: { url: "", serviceType: jkdzxx.serviceType, idThird: false } }, ["requestWsdl4jParse", "receiveWsdl4jParse", "failedWsdl4jParse"], { aiForm: { url: null } });
	    var resLevel = detailMsg.resLevel ? detailMsg.resLevel : "1";
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
	                        "resLevel": resLevel
	                    }] }, id: 'aFTDStep6', form: target.props.form })

	        }]
	    });
	}); /* author by 田贵宾
	    import './other.html';
	    import React from 'react';
	    import ReactDOM from 'react-dom'; */

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