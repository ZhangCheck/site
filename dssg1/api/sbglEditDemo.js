webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(54);

	var _form = __webpack_require__(53);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var FormItem = _form2["default"].Item;
	(0, _jsonp2["default"])("sbglEditDemo")(function (args, callback) {
		console.log("args:", args);
		callback({
			"success": true,
			"data": [{
				"title": "修改设备信息",
				"column": 2,
				"showTitle": false,
				"data": [{ "name": "设备名称", "type": "input", "field": "equipmentName", "defaultValue": "", "validate": [{ "required": true, "message": '请填写设备名称' }] }, //xgsbxxModalDatas.equipmentName
				{ "name": "单位名称", "type": "treeSelect", "field": "companyId", dictId: "companyId", dictApi: { apiName: 'findCenterCompanyMapInfo' } }, { "name": "联系人", "type": "input", "field": "contacts", "defaultValue": "", "validate": [{ "required": true, "message": '请填写联系人' }] }, { "name": "联系电话", "type": "input", "field": "contactsTel", "defaultValue": "",
					"validate": [{ "required": true, "message": '请填写电话号码！' }, {
						validator: function validator(rule, value, callback) {
							if (value != "" && !/^1[0-9]{10}$/.test(value)) {
								callback('请填写正确的电话号码！');
							} else {
								callback();
							}
						}
					}]
				}, { "name": "邮箱", "type": "input", "field": "email", "defaultValue": "", "validate": [{ "required": true, "type": 'email', "message": '请输入正确邮箱格式' }] }, { "name": "单位地址", "type": "input", "field": "address", "defaultValue": "", "validate": [{ "required": true, "message": '请填写地址' }] }, { "name": "所属业务条线", "type": "treeSelect", "field": "serviceId", "placeholder": "请选择...", dictId: "serviceId", dictApi: { apiName: 'getCenterDicts', body: { name: "serviceId", type: 4 } } }, { "name": "所属行政层级", "type": "treeSelect", "field": "mechanismLevelId", "placeholder": "请选择...", dictId: "mechanismLevelId", dictApi: { apiName: 'getCenterDicts', body: { name: "mechanismLevelId", type: 5 } } }]

			}]
		});
	});

/***/ }
]);