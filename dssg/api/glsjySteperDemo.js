(function(){ var runed=0,temp,timer,time;webpackJsonp([3],[
/* 0 */
/***/ temp = function(module, exports, __webpack_require__) {runed=true;

	'use strict';

	var _css = __webpack_require__(30);

	var _button = __webpack_require__(28);

	var _button2 = _interopRequireDefault(_button);

	var _css2 = __webpack_require__(63);

	var _form = __webpack_require__(59);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(234);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var FormItem = _form2["default"].Item;

	(0, _jsonp2["default"])("glsjySteperDemo")(function (args, callback) {
	    //let target = args.target;
	    callback({
	        "success": true,
	        "data": {
	            "saveDataApi": {
	                "apiName": "glsjySaveAllData"
	            },
	            "steps": [{
	                "type": "datalist",
	                "configStepApi": "glsjyStep1",
	                "number": "1",
	                "name": "选择数据源",
	                "id": "glsjyStep1",
	                "footer": [function () {
	                    return _react2["default"].createElement(
	                        _button2["default"],
	                        null,
	                        '\u6D4B\u8BD5\u8FDE\u63A5'
	                    );
	                }, "next", "cancel"]
	            }, {
	                "type": "datalist",
	                "configStepApi": "glsjyStep2",
	                "number": "2",
	                "name": "关联数据表",
	                "id": "glsjyStep2"
	            }, {
	                "type": "datalist",
	                "configStepApi": "glsjyStep3",
	                "number": "3",
	                "name": "数据预览",
	                "id": "glsjyStep3"
	            }]
	        }
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