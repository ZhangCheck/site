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

	(0, _jsonp2["default"])("cdglList")(function (args, callback) {
	    var target = args.target;

	    callback({
	        "success": true,
	        "data": {
	            "id": "bmgl",
	            "title": "菜单管理",
	            "buttonConfigs": [{ "buttonName": "add", type: "add" }, { "buttonName": "delete" }, { "buttonName": "edit" }],
	            "table": {
	                "primarykey": "id",
	                "clounms": [{
	                    title: '菜单名',
	                    dataIndex: 'name',
	                    key: 'name',
	                    width: '30%'
	                }, {
	                    title: '访问路径',
	                    dataIndex: 'url',
	                    key: 'url',
	                    width: '30%',
	                    render: function render(text, record, index) {
	                        return _react2["default"].createElement(
	                            'div',
	                            { title: text, style: { width: Global.getState().framework.columnWidth, cursor: "pointer", display: "inline-block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } },
	                            text
	                        );
	                    }
	                }, {
	                    title: '描述',
	                    dataIndex: 'description',
	                    key: 'description',
	                    width: '30%'
	                }],
	                "body": { apiName: 'findSysMenusAll' }
	            },
	            "list": {
	                "view": null,
	                "listApi": null,
	                "saveApi": null
	            },
	            "add": {
	                "initData": {
	                    data: { apiName: "addMenus" }
	                },
	                "onAddSubmitApi": { "apiName": "addMenusInfo" }
	            },
	            "edit": {
	                "initData": {
	                    data: { apiName: "addMenus" }
	                },
	                "onUpdateSubmitApi": { "apiName": "updateSysMenus" }
	            },
	            "delete": {
	                "body": { apiName: 'deleteSysMenus' }
	            },
	            "detail": {
	                "body": { apiName: 'findSysMenusByIdInfo' }
	            },
	            "check": {
	                "view": null,
	                "checkApi": null
	            }
	        }
	    });
	});

/***/ },

/***/ 565:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.dlStateWarning = exports.selectedToFormArgs = undefined;

	var _css = __webpack_require__(1694);

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