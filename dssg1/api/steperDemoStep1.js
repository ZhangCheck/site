webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(26);

	var _button = __webpack_require__(23);

	var _button2 = _interopRequireDefault(_button);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _component = __webpack_require__(11);

	var _component2 = _interopRequireDefault(_component);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("steperDemoStep1")(function (args, callback) {
	    callback({
	        "success": true,
	        "data": {
	            "id": "dlDemo",
	            "title": "这是DataList组件页面！！！！！",
	            "headConfig": [{ "headName": _react2["default"].createElement(
	                    'h4',
	                    { style: { paddingLeft: 20, paddingTop: 10, paddingBottom: 10 } },
	                    '\u5217\u8868\u5934'
	                ) }],

	            "buttonConfigs": [{ "buttonName": "add" }, { "buttonName": "search" }, { "buttonName": "delete" }, { "buttonName": "edit" }],
	            "searchConfig": {
	                "data": [{
	                    "column": 3,
	                    "data": [
	                    /**
	                     * props:{type:primary}
	                     */
	                    { "type": "input", "name": "电影", "field": "movie" }, { "type": "button", "value": "查询", "pageName": "search", props: { type: "primary" }, "htmlType": "submit" }]
	                }],
	                "body": { apiName: 'getSearchData' }
	            },
	            "table": {
	                "primarykey": "number",
	                "clounms": [{
	                    "title": "序号",
	                    "dataIndex": "number",
	                    "key": "number"
	                }, {
	                    "title": "名称",
	                    "dataIndex": "name",
	                    "key": "name"
	                }, {
	                    "title": "英文名称4",
	                    "dataIndex": "englishName",
	                    "key": "englishName"
	                }, {
	                    "title": "编码",
	                    "dataIndex": "unicode",
	                    "key": "unicode"
	                }, {
	                    "title": "备注",
	                    "dataIndex": "remarks",
	                    "key": "remarks"
	                }, {
	                    "title": "操作",
	                    "dataIndex": "operation",
	                    "key": "operation",
	                    "render": ["edit", "delete", "detail", function (config) {
	                        return _react2["default"].createElement(
	                            _button2["default"],
	                            null,
	                            'test'
	                        );
	                    }]
	                }],
	                "body": { apiName: 'datalistBodyDemo' }
	            },
	            "list": {
	                "view": null,
	                "listApi": null,
	                "saveApi": null
	            },
	            "add": {
	                "data": [{
	                    "column": 3,
	                    "data": [{ "type": "input", "name": "电影", "field": "movie" }, { "type": "button", "value": "取消", "pageName": "add", "btnType": "primary", "htmlType": "button" }, { "type": "button", "value": "确定", "pageName": "add", "btnType": "primary", "htmlType": "submit" }]
	                }],
	                "submitApi": { apiName: "apiName" },
	                "onAddSubmitApi": { "apiName": "getAddData" }
	            },
	            "edit": {
	                // "data":[{
	                //     "column":3,
	                //     "data":[
	                //         {"type":"input","name":"电影" ,"field":"movie" },
	                //         {"type":"button","value":"取消","pageName":"edit" ,"btnType":"primary", "htmlType":"button" },
	                //         {"type":"button","value":"确定" ,"pageName":"edit" ,"btnType":"primary", "htmlType":"submit" }
	                //     ]
	                // }],
	                "initData": {
	                    data: { apiName: "datalistEditDemo" }
	                },
	                "onUpdateSubmitApi": { "apiName": "getUpdateData" }
	            },
	            "delete": {
	                "body": { apiName: 'getDeleteData' }
	            },
	            "detail": {
	                "data": [{
	                    "column": 3,
	                    "data": [{ "type": "input", "name": "电影", "field": "movie" }, { "type": "button", "value": "取消", "pageName": "detail", "btnType": "primary", "htmlType": "button" }, { "type": "button", "value": "确定", "pageName": "detail", "btnType": "primary", "htmlType": "submit" }]
	                }],
	                "body": { apiName: 'getDetailMsgData' }
	            },
	            "check": {
	                "view": null,
	                "checkApi": null
	            }
	        }
	    });
	});

/***/ }
]);