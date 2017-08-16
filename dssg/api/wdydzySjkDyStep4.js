(function(){ var runed=0,temp,timer,time;webpackJsonp([3],[
/* 0 */
/***/ temp = function(module, exports, __webpack_require__) {runed=true;

	'use strict';

	var _css = __webpack_require__(30);

	var _button = __webpack_require__(28);

	var _button2 = _interopRequireDefault(_button);

	var _css2 = __webpack_require__(1692);

	var _modal = __webpack_require__(49);

	var _modal2 = _interopRequireDefault(_modal);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(234);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(15);

	var _history = __webpack_require__(41);

	var _history2 = _interopRequireDefault(_history);

	var _dataFormat = __webpack_require__(172);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("wdydzySjkDyStep4")(function (args, callback) {
	    var state = _global.Global.getState();
	    //各种提示，如”应该从前一步开始的提示“
	    var lastStepState = state.dataList.wdydzySjkDyStep3 && state.dataList.wdydzySjkDyStep2 && state.dataList.wdydzySjkDyStep1;
	    if (!lastStepState) {
	        _modal2["default"].warning({

	            title: '提示',
	            content: '页面刷新，请重新选择资源进行订阅',
	            onOk: function onOk() {
	                /* */
	                setTimeout(function () {
	                    _global.Global.mark({ aiForm: {
	                            wdydzySjkDyStep4: null
	                        } });
	                    _history2["default"].push('/datalistV1/wdydzySjk/list/0/10');
	                }, 500);
	            }
	        });
	        return;
	    }
	    callback({
	        "success": true,
	        "data": {
	            "table": {
	                "clounms": [{
	                    "title": "表名",
	                    "dataIndex": "name",
	                    "key": "name"
	                }, {
	                    "title": "描述",
	                    "dataIndex": "desc",
	                    "key": "desc"
	                }, {
	                    "title": "字段预览",
	                    "dataIndex": "fieldPreview",
	                    "key": "fieldPreview",
	                    "render": [function (config) {
	                        return _react2["default"].createElement(
	                            _button2["default"],
	                            null,
	                            '\u67E5\u770B'
	                        );
	                    }]
	                }],
	                "body": { apiName: 'wdydzySjkDyStep4Data', body: { id: state.dataList.wdydzySjkDyStep3.selectedRows[0] } }
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