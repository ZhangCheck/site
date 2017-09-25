webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("addMenus")(function (args, callback) {
	    var target = args.target;
	    var values = _global.Global.getState().dataList.cdglList.detailMsgDataApi && _global.Global.getState().dataList.cdglList.detailMsgDataApi.data ? _global.Global.getState().dataList.cdglList.detailMsgDataApi.data : {};
	    var detailValue = [];
	    if (args.type == "add") {
	        detailValue.pid = values.id;
	        detailValue.level = parseInt(values.level) + 1;
	    } else {
	        detailValue = values;
	    }
	    callback({
	        "success": true,
	        "data": [{
	            "title": '新增菜单',
	            "column": 1,
	            "showTitle": true,
	            "buttonConfigs": {
	                "buttons": [{ "type": "button", "value": "返回", mark: "cdglList", "field": "back", props: { btnType: "primary", "style": { "float": "right" } } }, { "type": "button", "value": "确定", mark: "cdglList", "field": "submit", props: { "style": { "float": "right" }, htmlType: "submit" } }]
	            },
	            "data": [{ "type": "input", "name": "菜单名", "field": "name", "defaultValue": detailValue.name ? detailValue.name : "", "validate": [{ "required": true, "message": '不能为空 !' }] }, { "type": "input", "name": "访问路径", "field": "url", "defaultValue": detailValue.url ? detailValue.url : "" }, { "type": "input", "name": "菜单图标", "field": "icon", "defaultValue": detailValue.icon ? detailValue.icon : "" }, { "type": "input", "name": "菜单排位", "field": "sortOrder", "defaultValue": detailValue.sortOrder ? detailValue.sortOrder : "", "validate": [{ "required": true, "message": '不能为空 !' }, {
	                    validator: function validator(rule, value, callback) {
	                        if (!/^[0-9]*$/.test(value)) {
	                            callback('只能是数字');
	                        } else {
	                            callback();
	                        }
	                    }
	                }] }, { "type": "input", "name": "备注", "field": "description", "defaultValue": detailValue.description ? detailValue.description : "" }, { "type": "input", "name": "", "field": "id", "defaultValue": detailValue.id ? detailValue.id : "", props: { style: { display: "none" } } }, { "type": "input", "name": "", "field": "pid", "defaultValue": detailValue.pid ? detailValue.pid : "-1", props: { style: { display: "none" } } }, { "type": "input", "name": "", "field": "level", "defaultValue": detailValue.level ? detailValue.level : "1", props: { style: { display: "none" } } }]
	        }]
	    });
	});

/***/ }
]);