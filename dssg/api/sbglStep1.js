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
	(0, _jsonp2["default"])("sbglStep1")(function (args, callback) {
	    var state = _global.Global.getState();
	    callback({
	        "success": true,
	        "data": [{
	            "title": "注册协议",
	            "column": 1,
	            "showTitle": true,
	            "titleIcon": "copy",
	            "data": [{ "value": function value(connfig) {
	                    return _react2["default"].createElement(
	                        'div',
	                        null,
	                        '\u672C\u534F\u8BAE\u662F**\u534F\u8BAE\u6309\u65F6\u6253\u7B97\u5927\u6240\u5927\u6240\u5927\u6240\u5927\u6240\u5927\u6240\u5927\u6240\u5927\u6240\u5927\u6240\u5927\u6240\u5927\u6240\u5927\u6240\u591A!\u672C\u534F\u8BAE\u662F**\u534F\u8BAE\u6309\u65F6\u6253\u7B97\u5927\u6240\u5927\u6240\u5927\u6240\u5927\u6240\u5927\u6240\u5927\u6240\u5927\u6240\u5927\u6240\u5927\u6240\u5927\u6240\u5927\u6240\u591A'
	                    );
	                } }, { "type": "checkbox", "field": "tyxy", option: "我同意上述协议" }]
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