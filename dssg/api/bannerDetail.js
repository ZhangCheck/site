(function(){ var runed=0,temp,timer,time;webpackJsonp([3],[
/* 0 */
/***/ temp = function(module, exports, __webpack_require__) {runed=true;

	'use strict';

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(234);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(15);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("bannerDetail")(function (args, callback) {
	    var states = _global.Global.getState();
	    var values = states.dataList.banner.detailMsgDataApi && states.dataList.banner.detailMsgDataApi.data ? states.dataList.banner.detailMsgDataApi.data : {};
	    var backData = values.content[0];
	    var eventList = "";
	    var fileList = "";
	    for (var i = 0; i < backData.attachmentList.length; i++) {
	        fileList += backData.attachmentList[i].fileName + "</br>";
	        backData.attachmentList[i].thumbanilPath == "" ? backData.attachmentList[i].thumbanilPath = "无" : backData.attachmentList[i].thumbanilPath;
	        eventList += backData.attachmentList[i].thumbanilPath + "</br>";
	    }
	    var config = [];
	    var detailConfig = {
	        "title": "详情",
	        "column": 2,
	        "labelCol": 8,
	        "wrapperCol": 20,
	        "showTitle": true,
	        "data": [{ "type": "text", "name": "标题", "field": "restitle", "defaultValue": backData.title ? backData.title : "" }, { "type": "text", "name": "banner类型", "field": "abstracts", "defaultValue": backData.type ? backData.type : "" }, { "type": "text", "name": "文件", "field": "keyword", "defaultValue": fileList ? fileList : "" }, { "type": "text", "name": "链接地址", "field": "event", "defaultValue": eventList ? eventList : "" }]
	    };
	    config.push((0, _extends3["default"])({}, detailConfig));
	    callback({
	        "success": true,
	        "data": config
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