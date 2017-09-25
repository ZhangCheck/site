webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _defineProperty2 = __webpack_require__(7);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(10);

	var _interfaces = __webpack_require__(35);

	var _actionType = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("dwglEdit")(function (args, callback) {
	    var _ref;

	    var target = args.target;
	    var state = _global.Global.getState();
	    var detailValue = state.dataList.dwglConfigs.detailMsgDataApi ? state.dataList.dwglConfigs.detailMsgDataApi.data : {};
	    var name = "";
	    if (detailValue.id) {
	        name = detailValue.name;
	    }
	    callback({
	        "success": true,
	        "isModal": true,
	        "data": [{
	            "column": 1,
	            "isModal": true,
	            "buttonConfigs": {
	                "buttons": [{ "type": "button", "value": "返回", mark: "dwgl", "field": "back", props: { btnType: "primary", "style": { "float": "right" } } }, { "type": "button", "value": "确定", mark: "dwgl", "field": "submit", props: { type: "primary", "style": { "float": "right" }, htmlType: "submit" } }]
	            },
	            "data": [{ "type": "input", "name": "单位名称", "field": "name", "defaultValue": detailValue.name ? detailValue.name : "",
	                "validate": [{ "required": true, "message": '不能为空 !' }, { validator: function validator(rule, value, callback) {
	                        if (value && value != "") {
	                            if (value.length > 50) {
	                                callback('请限制输入在50以内！');
	                            } else {
	                                if (name && value == name) {
	                                    callback();
	                                } else {
	                                    _global.Global.requestApi({
	                                        apiName: "checkComCodeAndName",
	                                        body: { type: "1", nameOrCode: value },
	                                        next: function next(action) {
	                                            if (action.data == false) {
	                                                callback('名称已使用，请修改！');
	                                            } else {
	                                                callback();
	                                            }
	                                        }
	                                    }, {}, {});
	                                }
	                            }
	                        } else {
	                            callback();
	                        }
	                    }
	                }] }, (_ref = { "type": "input", "name": "单位编码", "field": "code", props: { disabled: true } }, (0, _defineProperty3["default"])(_ref, 'field', "code"), (0, _defineProperty3["default"])(_ref, "defaultValue", detailValue.code ? detailValue.code : ""), (0, _defineProperty3["default"])(_ref, "validate", [{ "required": true, "message": '不能为空 !' }]), _ref), { "type": "input", "name": "备注", "field": "description", "defaultValue": detailValue.description ? detailValue.description : "" }, { "type": "input", "name": "", "field": "id", "defaultValue": detailValue.id ? detailValue.id : "", props: { style: { display: "none" } } }, { "type": "input", "name": "", "field": "pid", "defaultValue": detailValue.pid ? detailValue.pid : "0", props: { style: { display: "none" } } }, { "type": "input", "name": "", "field": "level", "defaultValue": detailValue.level ? detailValue.level : "1", props: { style: { display: "none" } } }, { "type": "input", "name": "", "field": "idex", "defaultValue": detailValue.idex ? detailValue.idex : "0", props: { style: { display: "none" } } }]
	        }]
	    });
	});

/***/ }
]);