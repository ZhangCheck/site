webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _defineProperty2 = __webpack_require__(24);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(332);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _Utils = __webpack_require__(1088);

	var _Utils2 = _interopRequireDefault(_Utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	debugger;
	(0, _jsonp2["default"])("flglList")(function (args, callback) {
	    var target = args.target;

	    callback({
	        "success": true,
	        "data": {
	            "id": "flgl",
	            "title": "分类管理",
	            "headConfig": [{
	                "headName": (0, _Utils2["default"])([{
	                    urlPart: "flgl",
	                    name: "主题分类"
	                }, {
	                    urlPart: "bmgl",
	                    name: "部门分类"
	                }], args)
	            }],
	            "buttonConfigs": [{ "buttonName": "add" }, { "buttonName": "delete" }, { "buttonName": "edit" }, { "buttonName": "direction", "act": "up", "icon": "arrow-up", "value": "上移" }, //上移
	            { "buttonName": "direction", "act": "down", "icon": "arrow-down", "value": "下移" }, //下移
	            { "buttonName": "direction", "act": "upgrade", "icon": "arrow-left", "value": "升级" }, //升级
	            { "buttonName": "direction", "act": "downgrade", "icon": "arrow-right", "value": "降级" } //降级
	            ],
	            "searchConfig": {
	                "data": [{
	                    "column": 4,
	                    "data": [{ "type": "input", "name": "分类名称", "field": "name" }, { "type": "select", "name": "分类级别", "field": "typeLevel", "options": ["一级", "二级"] }, { "type": "button", "value": "查询", "pageName": "search", "btnType": "primary", "htmlType": "submit" }, { "type": "button", "value": "重置", "pageName": "resert", "htmlType": "reset" }]
	                }],
	                "body": { apiName: 'getSearchData' }
	            },
	            "table": {
	                "primarykey": "id",
	                "clounms": [/*{
	                            title: '序号',
	                            dataIndex: 'index',
	                            key: 'index',
	                            render: (text, record, index) => {
	                            return <span>{index + 1}</span>
	                            },
	                            },*/(0, _defineProperty3["default"])({
	                    title: '分类名称',
	                    dataIndex: 'name',
	                    key: 'name',
	                    width: '30%'
	                }, 'width', '30%'), {
	                    title: '编号',
	                    dataIndex: 'code',
	                    key: 'code',
	                    width: '30%'
	                }, {
	                    title: '描述',
	                    dataIndex: 'remark',
	                    key: 'remark',
	                    width: '30%'
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
	                "onAddSubmitApi": { "apiName": "getAddData" }
	            },
	            "edit": {
	                "initData": {
	                    data: { apiName: "getFlglEdit" }
	                },
	                "editonUpdateSubmitApi": { "apiName": "getAddData" }
	            },
	            "delete": {
	                "body": { apiName: 'getDeleteData' }
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

/***/ },

/***/ 1088:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports["default"] = function (tabs, args) {
	    return tabs.map(function (item, i) {
	        return _react2["default"].createElement(
	            "div",
	            { className: "configLeftBtnGp" },
	            " ",
	            _react2["default"].createElement(
	                "a",
	                { href: "#/datalist/list/" + item.urlPart + "/0/10",
	                    className: args.target.props.params.config == item.urlPart ? "configLeftBtnGpA" : "" },
	                _react2["default"].createElement(
	                    "span",
	                    null,
	                    item.name
	                )
	            ),
	            " "
	        );
	    });
	};

	module.exports = exports['default'];

/***/ }

});