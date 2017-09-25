webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(54);

	var _form = __webpack_require__(53);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _AiFormTable = __webpack_require__(310);

	var _AiFormTable2 = _interopRequireDefault(_AiFormTable);

	var _AiLabel = __webpack_require__(311);

	var _AiLabel2 = _interopRequireDefault(_AiLabel);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(10);

	var _history = __webpack_require__(32);

	var _history2 = _interopRequireDefault(_history);

	var _interfaces = __webpack_require__(35);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var FormItem = _form2["default"].Item;
	(0, _jsonp2["default"])("sbglSubStep4")(function (args, callback) {
	    var state = _global.Global.getState();
	    var step3Datas = state.aiForm.getLocalEquimentInfo && state.aiForm.getLocalEquimentInfo.data ? state.aiForm.getLocalEquimentInfo.data : {};
	    callback({
	        "success": true,
	        "data": [{
	            "title": "设置IP信息",
	            "column": 2,
	            "showTitle": true,
	            "data": [{ "name": "设备序列号", "type": "text", "field": "equipmentIdentify", "defaultValue": step3Datas.identifyication }, { "name": "设备角色", "type": "text", "field": "none", "defaultValue": step3Datas.centerFlag == 1 ? "管理节点" : "接入节点" }, { "name": "设备外网地址", "type": "text", "field": "publicIp", "defaultValue": step3Datas.publicIp }, { "name": "设备内网地址", "type": "text", "field": "innerIp", "defaultValue": step3Datas.innerIp }]
	        }, {
	            "title": "设备单位信息",
	            "column": 2,
	            "showTitle": true,
	            "data": [{ "name": "设备名称", "type": "text", "field": "name", "defaultValue": step3Datas.name }, { "name": "单位名称", "type": "text", "field": "company", "defaultValue": "--" }, { "name": "联系人", "type": "text", "field": "contacts", "defaultValue": step3Datas.contacts }, { "name": "联系电话", "type": "text", "field": "telphone", "defaultValue": step3Datas.telphone }, { "name": "联系邮箱", "type": "text", "field": "email", "defaultValue": step3Datas.email }, { "name": "单位地址", "type": "text", "field": "address", "defaultValue": step3Datas.address }]
	        }]
	    });
	});

/***/ }
]);