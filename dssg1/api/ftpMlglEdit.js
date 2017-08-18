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

	(0, _jsonp2["default"])("ftpMlglEdit")(function (args, callback) {
	    var states = _global.Global.getState();
	    var target = args.target;
	    var detailValue = states.dataList.ftpMlgl.detailMsgDataApi ? states.dataList.ftpMlgl.detailMsgDataApi.data : {};
	    if (args.type) {
	        detailValue = {};
	    }
	    var title = args.apiData ? "编辑FTP目录" : "新增FTP目录";
	    callback({
	        "success": true,
	        "data": [{
	            "title": title,
	            "column": 1,
	            "showTitle": true,
	            "buttonConfigs": {
	                "buttons": [{ "type": "button", "value": "返回", mark: "ftpMlgl", "field": "back", props: { btnType: "primary", "style": { "float": "right" } } }, { "type": "button", "value": "确定", mark: "ftpMlgl", "field": "submit", props: { "style": { "float": "right" }, htmlType: "submit" } }]
	            },
	            "data": [{ "type": "select", "name": "内交换用户名", "field": "innerUserName", "options": [{ "value": "ihamalftp", "key": "ihamalftp" }, { "value": "inner", "key": "inner" }], "defaultValue": detailValue.innerUserName ? detailValue.innerUserName : "", "validate": [{
	                    "required": true, "message": '不能为空!'
	                }] }, { "type": "select", "name": "外交换用户名", "field": "outerUserName", "options": [{ "value": "ohamalftp", "key": "ohamalftp" }, { "value": "outer", "key": "outer" }], "defaultValue": detailValue.outerUserName ? detailValue.outerUserName : "" }, { "type": "input", "name": "内交换路径", "field": "innerAddress", "defaultValue": detailValue.innerAddress ? detailValue.innerAddress : "/", "validate": [{
	                    "required": true, "message": '不能为空!'
	                }] }, { "type": "input", "name": "外交换路径", "field": "outerAddress", "defaultValue": detailValue.outerAddress ? detailValue.outerAddress : "/", "validate": [{
	                    "required": true, "message": '不能为空!'
	                }] }, { "type": "select", "name": "传输方向", "field": "userFlag", "options": [{ "value": "1", "key": "由内到外" }, { "value": "0", "key": "由外到内" }], "defaultValue": detailValue.userFlag ? detailValue.userFlag : "1" }, { "type": "input", "field": "id", "defaultValue": detailValue.id ? detailValue.id : "", props: { style: { display: "none" } } }]
	        }]
	    });
	});

/***/ }
]);