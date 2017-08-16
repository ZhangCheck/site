(function(){ var runed=0,temp,timer,time;webpackJsonp([3],[
/* 0 */
/***/ temp = function(module, exports, __webpack_require__) {runed=true;

	'use strict';

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _global = __webpack_require__(15);

	var _interfaces = __webpack_require__(33);

	var _jsonp = __webpack_require__(234);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * Created by liy on 2016/12/19 0015.
	 */
	(0, _jsonp2["default"])("wfbdzySjkZyxgStep1")(function (args, callback) {
	    callback({
	        "success": true,
	        "data": {
	            "title": "",
	            "searchConfig": {
	                "data": [{
	                    "column": 4,
	                    "data": [{ "type": "input", "name": "目录名称/编码", "field": "resName" }, { "type": "treeSelect", "name": "主题分类", "field": "themeType", dictId: "themeType", dictApi: { apiName: 'flglData' } }, { "type": "treeSelect", "name": "部门分类", "field": "departmentType", dictId: "departmentType", dictApi: { apiName: 'flglData' } }, { "type": "button", "value": "查询", "pageName": "search", "btnType": "primary", "htmlType": "submit" }]
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
	                    "dataIndex": "themeType",
	                    "key": "themeType"
	                }, {
	                    "title": "部门分类",
	                    "dataIndex": "departmentName",
	                    "key": "departmentType"
	                }, {
	                    "title": "资源等级",
	                    "dataIndex": "resLevel",
	                    "key": "resLevel"
	                }],
	                "body": { apiName: 'wfbdzySjkZyfbStep0TableData', next: function next() {
	                        debugger;
	                        var state = _global.Global.getState();
	                        var step1SelectRowsId = state.dataList.wfbdzySjk.selectedRows[0];
	                        _global.Global.requestApi((0, _extends3["default"])({}, _interfaces.wfbdzySjkUpdateResourceAllMsg, { body: (0, _extends3["default"])({}, _interfaces.wfbdzySjkUpdateResourceAllMsg.body, { id: step1SelectRowsId }), next: function next(action) {
	                                var state = _global.Global.getState();
	                                var resourceDataId = action.data.resourceItemDTO.resourceId;
	                                var step1TableData = _global.Global.getState().dataList.wfbdzySjkZyxgStep1.tableBodyDataApi.data.content;
	                                step1TableData.forEach(function (item) {

	                                    if (resourceDataId == item.id) {
	                                        _global.Global.mark({ dataList: { wfbdzySjkZyxgStep1: { selectedRows: [item.id], itemId: item.id } } });
	                                    }
	                                });
	                            } }), ['requestgetResourceForUpdate', 'receievegetResourceForUpdate', 'failedgetResourceForUpdate'], { dataList: { getResourceForUpdate: null } });
	                    } } //暂定此接口
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