webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(49);

	var _form = __webpack_require__(47);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(250);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var FormItem = _form2["default"].Item;

	(0, _jsonp2["default"])("aiTreeTableDemo")(function (args, callback) {
	    callback({
	        "success": true,
	        "data": {
	            "title": "这是formTable页面！！！！！",
	            "buttonConfigs": [{ "buttonName": "add" }, { "buttonName": "delete" }, { "buttonName": "edit" }, { "buttonName": "direction", "act": "up", "value": "上移" }, //上移
	            { "buttonName": "direction", "act": "down", "value": "下移" }, //下移
	            { "buttonName": "direction", "act": "upgrade", "value": "升级" }, //升级
	            { "buttonName": "direction", "act": "downgrade", "value": "降级" } //降级
	            ],
	            "searchConfig": {
	                "data": [{
	                    "column": 3,
	                    "data": [{ "type": "input", "name": "分类名称", "field": "name" }, { "type": "select", "name": "分类级别", "field": "typeLevel", "options": ["一级", "二级"] }, { "type": "button", "value": "查询", "pageName": "search", "btnType": "primary", "htmlType": "submit" }, { "type": "button", "value": "重置", "pageName": "resert", "htmlType": "reset" }]
	                }]
	            },
	            "table": {
	                "primarykey": "code",
	                "clounms": [{
	                    title: '分类名称',
	                    dataIndex: 'name',
	                    key: 'name',
	                    width: '30%'
	                }, {
	                    title: '编号',
	                    dataIndex: 'code',
	                    key: 'code',
	                    width: '30%'
	                }, {
	                    title: '描述',
	                    dataIndex: 'describe',
	                    key: 'describe',
	                    width: '30%'
	                }],
	                "body": { apiName: 'getTreeTableData' }
	            },
	            "list": {
	                "view": null,
	                "listApi": null,
	                "saveApi": null
	            },
	            "add": {
	                "initData": {
	                    "data": [{
	                        "column": 1,
	                        "labelCol": 2, // form标头name宽度
	                        "wrapperCol": 6, //form显示框宽度
	                        "showTitle": false, //是否展示栏目标题
	                        "buttonConfigs": {
	                            "buttons": [{ "type": "button", "value": "返回", "field": "back", props: { style: { "float": "left" } } }, { "type": "button", "value": "确定", "field": "submit", props: { style: { "float": "left" }, btnType: "primary", htmlType: "submit" } }]
	                        },
	                        "data": [{ "name": "分类名称", "type": "input", "field": "name" }, { "name": "上级目录", "type": "select", "field": "parentDirectory", "dictId": "typeDirectory", "placeholder": "请选择..." }, { "name": "分类编号", "type": "input", "field": "code" }, { "name": "描述", "type": "input", "field": "describe", props: { rows: 4, type: "textarea" } }]
	                    }]
	                },
	                "onAddSubmitApi": { "apiName": "getAddData" }
	            },
	            "edit": {
	                "data": [{
	                    "column": 1,
	                    "labelCol": 2, // form标头name宽度
	                    "wrapperCol": 6, //form显示框宽度
	                    "showTitle": false, //是否展示栏目标题
	                    "buttonConfigs": {
	                        "buttons": [{ "type": "button", "value": "返回", "field": "back", props: { style: { "float": "left" } } }, { "type": "button", "value": "确定", "field": "submit", props: { style: { "float": "left" }, btnType: "primary", htmlType: "submit" } }]
	                    },
	                    "data": [{ "name": "分类名称", "type": "input", "field": "name" }, { "name": "上级目录", "type": "select", "field": "parentDirectory", "dictId": "typeDirectory", "placeholder": "请选择..." }, { "name": "分类编号", "type": "input", "field": "code" }, { "name": "描述", "type": "input", "field": "describe", props: { rows: 4, type: "textarea" } }]
	                }],
	                "onAddSubmitApi": { "apiName": "getAddData" }
	            },
	            "delete": {
	                "view": null,
	                "saveApi": null
	            },
	            "detail": {
	                "data": [{
	                    "column": 3,
	                    "data": [{ "type": "input", "name": "电影", "field": "movie" }, { "type": "button", "value": "取消", "pageName": "detail", "btnType": "primary", "htmlType": "button" }, { "type": "button", "value": "确定", "pageName": "detail", "btnType": "primary", "htmlType": "submit" }]
	                }]
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