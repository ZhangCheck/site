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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var FormItem = _form2["default"].Item;

	(0, _jsonp2["default"])("apibdsyyjkpzdyqx")(function (args, callback) {
	    var apibdsyyjkpzdyqxcolumns = [{
	        "title": "API等级",
	        "dataIndex": "wjdj",
	        "key": "wjdj",
	        "render": { "type": "select", props: { style: { width: 200 } }, "options": ["一级", "二级", "三级"] }
	    }];
	    callback({
	        "success": true,
	        "data": [{
	            "title": "API共享等级", //栏目标题
	            "column": 2, //  form显示列数，首先读取每个标签的设置column值，不存在才会读取总的column,如果不存在，默认展示一列
	            "labelCol": 8, // form标头name宽度
	            "wrapperCol": 16, //form显示框宽度
	            "showTitle": true, //是否展示栏目标题
	            "data": _react2["default"].createElement(_AiFormTable2["default"], { config: {
	                    "columns": apibdsyyjkpzdyqxcolumns, //表格标头数据
	                    "dataSource": [] }, id: 'aFTD' })
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