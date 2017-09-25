webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _Utils = __webpack_require__(565);

	var _Utils2 = _interopRequireDefault(_Utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("flglList")(function (args, callback) {
	    callback({
	        "success": true,
	        "data": {
	            "id": "flgl",
	            "title": "国家主题分类",
	            "headConfig": [{
	                "headName": (0, _Utils2["default"])([{
	                    show: "1",
	                    urlPart: "flgl",
	                    name: "国家主题分类"
	                }, {
	                    show: "1",
	                    urlPart: "bmgl",
	                    name: "部门主题分类"
	                }], args)
	            }],
	            "buttonConfigs": [{ "buttonName": "add", type: "add" }, { "buttonName": "delete" }, { "buttonName": "edit" }, { "buttonName": "direction", "act": "up", "icon": "up", "value": "上移" }, //上移
	            { "buttonName": "direction", "act": "down", "icon": "down", "value": "下移" }, //下移
	            { "buttonName": "direction", "act": "upgrade", "icon": "arrow-left", "value": "升级" }, //升级
	            { "buttonName": "direction", "act": "downgrade", "icon": "arrow-right", "value": "降级" //降级
	            }],
	            "searchConfig": {
	                "data": [{
	                    "column": 4,
	                    "data": [{ "type": "input", col: 8, "name": "分类名称", "field": "name" }, { "type": "select", col: 7, "name": "分类级别", "field": "level", "options": [{ key: "全部", value: "_all_" }, { key: "一级", value: "1" }, { key: "二级", value: "2" }] }, { "type": "button", col: 4, "value": "查询", "pageName": "search", "btnType": "primary", "htmlType": "submit" }]
	                }],
	                "body": { apiName: 'flglData', body: { categoryType: 1 } }
	            },
	            "table": {
	                "primarykey": "id",
	                "pagination": false,
	                "clounms": [{
	                    "title": "分类名称",
	                    "dataIndex": "name",
	                    "key": "name",
	                    "width": "30%"
	                }, {
	                    "title": "编号",
	                    "dataIndex": "code",
	                    "key": "code",
	                    "width": "30%"
	                }, {
	                    "title": "描述",
	                    "dataIndex": "description",
	                    "key": "description",
	                    "width": "30%"
	                }],
	                "body": { apiName: 'flglData' }
	            },
	            "list": {
	                "view": null,
	                "listApi": null,
	                "saveApi": null
	            },
	            "add": {
	                "initData": {
	                    data: { apiName: "getFlglEdit" }
	                },
	                "onAddSubmitApi": { "apiName": "addFlglInfo" }
	            },
	            "edit": {
	                "initData": {
	                    data: { apiName: "getFlglEdit" }
	                },
	                "onUpdateSubmitApi": { "apiName": "editFlglInfo" }
	            },
	            "delete": {
	                "body": { apiName: 'deleteFlglInfo' }
	            },
	            "detail": {
	                "body": { apiName: 'flglDetail' }
	            },
	            "check": {
	                "view": null,
	                "checkApi": null
	            }
	        }
	    });
	});

	/* 
	callback("flglList")((args,callback)=>{
	    let target = args.target;

	    callback({
	    "success": true,
	    "data": {
	        "id":"flgl",
	        "title":"分类管理",
	        "headConfig": [
	            {
	                "headName": initListTab([
	                    {
	                        urlPart: "flgl",
	                        name: "主题分类"
	                    },
	                    {
	                        urlPart: "bmgl",
	                        name: "部门分类"
	                    }
	                ],args)
	            }
	        ],
	        "buttonConfigs":[
	            {"buttonName":"add"},
	            {"buttonName":"delete"},
	            {"buttonName":"edit"},
	            {"buttonName":"direction","act":"up","icon":"arrow-up","value":"上移"},           //上移
	            {"buttonName":"direction","act":"down","icon":"arrow-down","value":"下移"},         //下移
	            {"buttonName":"direction","act":"upgrade","icon":"arrow-left","value":"升级"},      //升级
	            {"buttonName":"direction","act":"downgrade","icon":"arrow-right","value":"降级"}     //降级
	        ],
	        "searchConfig":{
	            "data":[{
	                "column":4,
	                "data":[
	                    {"type":"input","name":"分类名称" ,"field":"name" },
	                    {"type":"select","name":"分类级别" ,"field":"level","options":["一级","二级"]},
	                    {"type":"button","value":"查询" ,"pageName":"search" ,"btnType":"primary", "htmlType":"submit"},
	                    {"type":"button","value":"重置" ,"pageName":"resert","htmlType":"reset"}
	                ]
	            }],
	            "body":{apiName:'getSearchData'}
	        },
	        "table":{
	            "primarykey":"id",
	            "clounms":[{
	                title: '分类名称',
	                dataIndex: 'name',
	                key: 'name',
	                width: '30%',
	                width: '30%',
	            }, {
	                title: '编号',
	                dataIndex: 'code',
	                key: 'code',
	                width: '30%',
	            }, {
	                title: '描述',
	                dataIndex: 'description',
	                key: 'description',
	                width: '30%',
	            }],
	            "body":{apiName:'flglData'}
	        },
	        "list":{
	            "view":null,
	            "listApi":null,
	            "saveApi":null
	        },
	        "add":{
	            "initData":{
	                data:{apiName:"getFlglEdit"}
	            },
	            "onAddSubmitApi":{"apiName":"getAddData"}
	        },
	        "edit":{
	            "initData":{
	                data:{apiName:"getFlglEdit"}
	            },
	            "editonUpdateSubmitApi":{"apiName":"getAddData"}
	        },
	        "delete":{
	            "body":{apiName:'getDeleteData'}
	        },
	        "detail":{
	            "body":{apiName:'flglDetail'}
	        },
	        "check":{
	            "view":null,
	            "checkApi":null
	        }
	    }
	})
	}) */

/***/ },

/***/ 565:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.dlStateWarning = exports.selectedToFormArgs = undefined;

	var _css = __webpack_require__(1967);

	var _modal = __webpack_require__(29);

	var _modal2 = _interopRequireDefault(_modal);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _global = __webpack_require__(10);

	var _config = __webpack_require__(286);

	var _history = __webpack_require__(32);

	var _history2 = _interopRequireDefault(_history);

	var _dataList = __webpack_require__(30);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	//HeadComponent组件的配置项headConfig里的initListTab
	exports["default"] = function (tabs, args) {
	    /*item.show 用于其他tab的展示标志位，eg部门分类和主题分类*/
	    return tabs.map(function (item, i) {
	        if (_config.resourceType.indexOf(item.name) != -1 || item.show == "1") {
	            return _react2["default"].createElement(
	                'div',
	                { className: "configLeftBtnGp" },
	                _react2["default"].createElement(
	                    'a',
	                    { href: "#/datalistV1/" + item.urlPart + "/list/0/10", className: args.target.props.params.config == item.urlPart ? "configLeftBtnGpA" : "" },
	                    _react2["default"].createElement(
	                        'span',
	                        null,
	                        item.name
	                    )
	                )
	            );
	        }
	    });
	};

	var selectedToFormArgs = exports.selectedToFormArgs = function selectedToFormArgs(datalistId) {
	    return {};
	};

	var dlStateWarning = exports.dlStateWarning = function dlStateWarning(key) {
	    _modal2["default"].warning({
	        title: "提示1",
	        content: "页面刷新，请重新选择要查看的条目。",
	        onOk: function onOk() {
	            setTimeout(function () {
	                var config = _global.Global.getState().routing.path.match(new RegExp('datalistV1/(\\w*)/' + key));
	                _history2["default"].push("datalistV1/" + config[1] + "/list/0/10");
	            }, 500);
	        }
	    });
	};

/***/ }

});