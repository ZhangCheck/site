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

	(0, _jsonp2["default"])("wjsjyl")(function (args, callback) {
	    callback({
	        "success": true,
	        "data": {
	            "table": {
	                "clounms": [{
	                    "title": "姓名",
	                    "dataIndex": "name",
	                    "key": "name"
	                }, {
	                    "title": "身份证",
	                    "dataIndex": "identity",
	                    "key": "identity"
	                }, {
	                    "title": "出生日期",
	                    "dataIndex": "birthday",
	                    "key": "birthday"
	                }, {
	                    "title": "家庭住址",
	                    "dataIndex": "familyAddress",
	                    "key": "familyAddress"
	                }, {
	                    "title": "暂住地址",
	                    "dataIndex": "stayAddress",
	                    "key": "stayAddress"
	                }, {
	                    "title": "联系电话",
	                    "dataIndex": "telephone",
	                    "key": "telephone"
	                }],
	                "body": { apiName: 'getDataPreviewTableBody' }
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