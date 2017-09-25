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

	var _interfaces = __webpack_require__(35);

	var _actionType = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var FormItem = _form2["default"].Item; /**
	                                     * Created by liy on 2016/12/17 0017.
	                                     */


	(0, _jsonp2["default"])("zyyglEdit")(function (args, callback) {
	    var target = args.target;
	    var state = _global.Global.getState();
	    var getFieldValue = target.props.form.getFieldValue;
	    var defaultValue = state.dataList.zyyglConfigs.detailMsgDataApi ? state.dataList.zyyglConfigs.detailMsgDataApi.data : {};
	    callback({
	        "success": true,
	        "data": [{
	            "column": 2,
	            "data": [{ "type": "input", disabled: true, "name": "资源域名称", props: { style: { backgroundColor: '#F8F8F8', color: '#000000' } }, "field": "name", validate: [{ "required": true, "message": '请输入资源域名称!'
	                }], "defaultValue": defaultValue.name ? defaultValue.name : '' }, { "type": "input", "name": "域管理员", "field": "contacts", "validate": [{ "required": true, "message": '请输入管理员名称' }], "defaultValue": defaultValue.contacts ? defaultValue.contacts : '' }, { "type": "input", "name": "联系电话", "field": "telphone", "validate": [{
	                    validator: function validator(rule, value, callback) {
	                        if (value != "" && !/^[1][0-9]{10}$/.test(value)) {
	                            callback('11位数字，由1开头');
	                        } else {
	                            callback();
	                        }
	                    }
	                }], "defaultValue": defaultValue.telphone ? defaultValue.telphone : '' }],
	            "buttonConfigs": {
	                "buttons": [{ "type": "button", "value": "取消", mark: "zyygl", props: { "style": { "float": "right" } } }, { "type": "button", "value": "确定", mark: "zyygl", props: { type: "primary", "style": { "float": "right" }, htmlType: "submit" } }]
	            }
	        }]
	    });
	});

/***/ }
]);