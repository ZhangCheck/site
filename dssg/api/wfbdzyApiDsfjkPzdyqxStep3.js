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

	(0, _jsonp2["default"])("wfbdzyApiDsfjkPzdyqxStep3")(function (args, callback) {
	    var states = _global.Global.getState();
	    var detailMsg = states.dataList.wfbdzyApiDsfjkTxysjStep1 && states.dataList.wfbdzyApiDsfjkTxysjStep1.detailMsgDataApi ? states.dataList.wfbdzyApiDsfjkTxysjStep1.detailMsgDataApi[0] : {};

	    var target = args.target;
	    var jkdzxx = states.aiForm.wfbdzyApiDsfjkTxurlStep2.values;
	    _global.Global.requestApi({ "apiName": "getPublishURL", body: { url: jkdzxx.apiUrl, serviceType: jkdzxx.serviceType, idThird: true }, next: function next(action) {
	            _global.Global.mark({ aiForm: { url: null } });
	            _global.Global.mark({ aiForm: { url: action } });
	        } }, ["requestWsdl4jParse", "receiveWsdl4jParse", "failedWsdl4jParse"], {});
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
	                }, id: 'dsfStep3', form: target.props.form })

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