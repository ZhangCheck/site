(function(){ var runed=0,temp,timer,time;webpackJsonp([3],[
/* 0 */
/***/ temp = function(module, exports, __webpack_require__) {runed=true;

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _component = __webpack_require__(13);

	var _component2 = _interopRequireDefault(_component);

	var _jsonp = __webpack_require__(234);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("wfbdzySjkGlsjyStep3")(function (args, callback) {
	    callback({
	        "success": true,
	        "data": {
	            "title": "",
	            "table": {
	                "clounms": [{
	                    "title": "姓名",
	                    "dataIndex": "xm",
	                    "key": "xm"
	                }, {
	                    "title": "身份证",
	                    "dataIndex": "sfz",
	                    "key": "sfz"
	                }, {
	                    "title": "出生日期",
	                    "dataIndex": "csrq",
	                    "key": "csrq"
	                }, {
	                    "title": "家庭住址",
	                    "dataIndex": "jtzz",
	                    "key": "jtzz"
	                }, {
	                    "title": "暂住地址",
	                    "dataIndex": "zzdz",
	                    "key": "zzdz"
	                }, {
	                    "title": "联系电话",
	                    "dataIndex": "lxdh",
	                    "key": "lxdh"
	                }],
	                "body": { apiName: 'wfbdzySjkGlsjyStep3TableData' } //暂定此接口
	            },
	            "list": {
	                "view": null,
	                "listApi": null,
	                "saveApi": null
	            },
	            "add": {},
	            "edit": {},
	            "delete": {},
	            "detail": {},
	            "check": {
	                "view": null,
	                "checkApi": null
	            }
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