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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var FormItem = _form2["default"].Item;
	(0, _jsonp2["default"])("sbglSubStep3")(function (args, callback) {
	    var state = _global.Global.getState();
	    callback({
	        "success": true,
	        "data": [{
	            "title": "设置设备信息",
	            "column": 2,
	            "showTitle": true,
	            "titleIcon": "copy",
	            "data": [{ "name": "设备名称", "type": "input", "field": "equipmentName", "validate": [{ "required": true, "message": '请填写设备名称' }] }, { "name": "联系人", "type": "input", "field": "person", "validate": [{ "required": true, "message": '请填写联系人' }] }, { "name": "联系电话", "type": "input", "field": "telephone", "validate": [{ "required": true, "message": '请填写联系电话' }] }, { "name": "邮箱", "type": "input", "field": "email", "validate": [{ "required": true, "message": '请填写邮箱' }] }, { "name": "单位地址", "type": "input", "field": "address", "validate": [{ "required": true, "message": '请填写地址' }] }]
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