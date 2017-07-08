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

	(0, _jsonp2["default"])("wjxzfbml")(function (args, callback) {
	    callback({
	        "success": true,
	        "data": {
	            "id": "dlDemo",
	            "title": "文件选择发布目录",
	            "searchConfig": {
	                "data": [{
	                    "column": 3,
	                    "data": [{ "type": "input", "name": "目录名称/编码", "field": "movie" }, { "name": "主题分类", "type": "select", "field": "ztfl", "placeholder": "请选择...", "options": ["全部", "人员", "机构"] }, { "name": "部门分类", "type": "select", "field": "ztfl", "placeholder": "请选择...", "options": ["全部", "人员", "机构"] }, { "type": "button", "value": "查询", "pageName": "search", "btnType": "primary", "htmlType": "submit" }]
	                }],
	                "body": { apiName: 'getSearchData' }
	            },
	            "table": {
	                "primarykey": "number",
	                "clounms": [{
	                    "title": "目录名称",
	                    "dataIndex": "dirName",
	                    "key": "dirName"
	                }, {
	                    "title": "目录英文名称",
	                    "dataIndex": "dirEnglishName",
	                    "key": "dirEnglishName"
	                }, {
	                    "title": "目录编码",
	                    "dataIndex": "dirUnicode",
	                    "key": "dirUnicode"
	                }, {
	                    "title": "主题分类",
	                    "dataIndex": "themeType",
	                    "key": "themeType"
	                }, {
	                    "title": "部门分类",
	                    "dataIndex": "depType",
	                    "key": "depType"
	                }, {
	                    "title": "资源等级",
	                    "dataIndex": "resourceLevel",
	                    "key": "operation"
	                }],
	                "body": { apiName: 'getResourceTableBody' }
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