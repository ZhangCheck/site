(function(){ var runed=0,temp,timer,time;webpackJsonp([3],[
/* 0 */
/***/ temp = function(module, exports, __webpack_require__) {runed=true;

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(234);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(15);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("bmglEditData")(function (args, callback) {
	    var target = args.target;
	    var values = _global.Global.getState().dataList.bmgl.detailMsgDataApi && _global.Global.getState().dataList.bmgl.detailMsgDataApi.data ? _global.Global.getState().dataList.bmgl.detailMsgDataApi.data : {};
	    var detailValue = [];
	    if (args.type == "add") {

	        detailValue.pid = values.id;
	        detailValue.level = parseInt(values.level) + 1;
	    } else {
	        detailValue = values;
	    }
	    var title = detailValue.id ? "编辑分类" : "新增分类";
	    callback({
	        "success": true,
	        "data": [{
	            "title": title,
	            "column": 1,
	            "showTitle": true,
	            "buttonConfigs": {
	                "buttons": [{ "type": "button", "value": "返回", mark: "bmgl", "field": "back", props: { btnType: "primary", "style": { "float": "right" } } }, { "type": "button", "value": "确定", mark: "bmgl", "field": "submit", props: { "style": { "float": "right" }, htmlType: "submit" } }]
	            },
	            "data": [{ "type": "input", "name": "分类名称", "field": "name", "defaultValue": detailValue.name ? detailValue.name : "", "validate": [{ "required": true, "message": '不能为空 !' }] }, { "type": "input", "name": "分类编码", "field": "code", "defaultValue": detailValue.code ? detailValue.code : "", "validate": [{ "required": true, "message": '不能为空 !' }] }, { "type": "input", "name": "备注", "field": "description", "defaultValue": detailValue.description ? detailValue.description : "" }, { "type": "input", "name": "", "field": "id", "defaultValue": detailValue.id ? detailValue.id : "", props: { style: { display: "none" } } }, { "type": "input", "name": "", "field": "pid", "defaultValue": detailValue.pid ? detailValue.pid : "0", props: { style: { display: "none" } } }, { "type": "input", "name": "", "field": "level", "defaultValue": detailValue.level ? detailValue.level : "1", props: { style: { display: "none" } } }, { "type": "input", "name": "", "field": "categoryType", "defaultValue": 2, props: { style: { display: "none" } } }, { "type": "input", "name": "", "field": "idex", "defaultValue": detailValue.idex ? detailValue.idex : "0", props: { style: { display: "none" } } }]
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