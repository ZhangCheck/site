(function(){ var runed=0,temp,timer,time;webpackJsonp([3],[
/* 0 */
/***/ temp = function(module, exports, __webpack_require__) {runed=true;

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(234);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("wfbdzySjkZyfbStep0")(function (args, callback) {
	    callback({

	        "success": true,
	        "data": {
	            "title": "",
	            "searchConfig": {

	                "data": [{
	                    "column": 4,
	                    "data": [{ "type": "input", "col": 7, "name": "目录名称/编码", "field": "resName" }, { "type": "treeSelect", "col": 7, "name": "主题分类", "field": "themeType", options: { value: "_all_", key: "全部" }, dictId: "themeType", dictApi: { apiName: 'flglDataTree', body: { categoryType: 1 } } }, { "type": "treeSelect", "col": 7, "name": "部门分类", "field": "departmentType", options: { value: "_all_", key: "全部" }, dictId: "departmentType", dictApi: { apiName: 'flglDataTree', body: { categoryType: 2 } } }, { "type": "button", "col": 3, "value": "查询", "pageName": "search", "btnType": "primary", "htmlType": "submit" }]
	                }],
	                "body": { apiName: 'wfbdzySjkZyfbStep0Search' }
	            },
	            "table": {
	                "primarykey": "id",
	                "clounms": [{
	                    "title": "目录名称",
	                    "dataIndex": "resName",
	                    "key": "resName",
	                    "width": 250
	                }, {
	                    "title": "目录英文名称",
	                    "dataIndex": "resEname",
	                    "key": "resEname",
	                    "width": 250
	                }, {
	                    "title": "目录编码",
	                    "dataIndex": "resCode",
	                    "key": "resCode",
	                    "width": 250
	                }, {
	                    "title": "主题分类",
	                    "dataIndex": "themeName",
	                    "key": "themeName"
	                }, {
	                    "title": "部门分类",
	                    "dataIndex": "departmentName",
	                    "key": "departmentType"
	                }, {
	                    "title": "资源等级",
	                    "dataIndex": "resLevel",
	                    "key": "resLevel",
	                    render: function render(text, record, index) {
	                        switch (record.resLevel) {
	                            case '1':
	                                return '一级';
	                            case '2':
	                                return '二级';
	                            case '3':
	                                return '三级';
	                        }
	                    }
	                }],
	                "body": { apiName: 'wfbdzySjkZyfbStep0TableData', body: {} }
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