(function(){ var runed=0,temp,timer,time;webpackJsonp([3],[
/* 0 */
/***/ temp = function(module, exports, __webpack_require__) {runed=true;

	'use strict';

	var _css = __webpack_require__(63);

	var _form = __webpack_require__(59);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _AiFormTable = __webpack_require__(428);

	var _AiFormTable2 = _interopRequireDefault(_AiFormTable);

	var _AiLabel = __webpack_require__(380);

	var _AiLabel2 = _interopRequireDefault(_AiLabel);

	var _jsonp = __webpack_require__(234);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(15);

	var _history = __webpack_require__(41);

	var _history2 = _interopRequireDefault(_history);

	var _interfaces = __webpack_require__(33);

	var _dataFormat = __webpack_require__(172);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var FormItem = _form2["default"].Item;
	(0, _jsonp2["default"])("sbglStep3")(function (args, callback) {
	    var state = _global.Global.getState();
	    var step2Datas = state.aiForm.sbglStep2 ? state.aiForm.sbglStep2.values : "";
	    var sbIpMessage = state.aiForm.sbIpMes ? state.aiForm.sbIpMes.data.content[0] : "";
	    var unitNameTrue = (0, _dataFormat.gettreeSelectName)(state, "unitName", step2Datas.unitName ? step2Datas.unitName : "");
	    var ssywzxTrue = (0, _dataFormat.gettreeSelectName)(state, "ssywzx", step2Datas.ssywzx ? step2Datas.ssywzx : "");
	    var ssxzcjTrue = (0, _dataFormat.gettreeSelectName)(state, "ssxzcj", step2Datas.ssxzcj ? step2Datas.ssxzcj : "");
	    callback({
	        "success": true,
	        "data": [{
	            "title": "设置IP信息",
	            "column": 3,
	            "showTitle": true,
	            "titleIcon": "copy",
	            "data": [{ "name": "设备编码", "type": "text", "field": "sbCode", "defaultValue": sbIpMessage.sbCode }, { "name": "内网IP", "type": "text", "field": "inIP", "defaultValue": sbIpMessage.inIP }, { "name": "内网网关", "type": "text", "field": "inGateway", "defaultValue": sbIpMessage.inGateway }, { "name": "子网掩码", "type": "text", "field": "zwym", "defaultValue": sbIpMessage.zwym }, { "name": "外网IP", "type": "text", "field": "outIP", "defaultValue": sbIpMessage.outIP }, { "name": "外网网关", "type": "text", "field": "outGateway", "defaultValue": sbIpMessage.outGateway }, { "name": "子网掩码", "type": "text", "field": "zwymOut", "defaultValue": sbIpMessage.zwymOut }]
	        }, {
	            "title": "设备单位信息",
	            "column": 2,
	            "showTitle": true,
	            "titleIcon": "copy",
	            "data": [{ "name": "设备名称", "type": "text", "field": "equipmentName", "defaultValue": step2Datas.equipmentName }, { "name": "单位名称", "type": "text", "field": "unitName", "defaultValue": unitNameTrue }, { "name": "联系人", "type": "text", "field": "person", "defaultValue": step2Datas.person }, { "name": "联系电话", "type": "text", "field": "telephone", "defaultValue": step2Datas.telephone }, { "name": "邮箱", "type": "text", "field": "email", "defaultValue": step2Datas.email }, { "name": "单位地址", "type": "text", "field": "address", "defaultValue": step2Datas.address }, { "name": "所属业务专线", "type": "text", "field": "ssywzx", "defaultValue": ssywzxTrue }, { "name": "所属行政层级", "type": "text", "field": "ssxzcj", "defaultValue": ssxzcjTrue }]
	        }]
	    });
	});

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