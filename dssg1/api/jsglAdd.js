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

	(0, _jsonp2["default"])("jsglAdd")(function (args, callback) {
	    var target = args.target;
	    var getFieldValue = target.props.form.getFieldValue;
	    // let defaultValue = args.apiData?args.apiData:{};
	    // let defaultValue = Global.getState().dataList.sjygl.detailMsgDataApi?Global.getState().dataList.sjygl.detailMsgDataApi.data:'';
	    callback({
	        "success": true,
	        "data": [{
	            "column": 1,
	            "data": [{ "type": "input", "name": "角色名", "field": "name", "validate": [{ "required": true, "message": '请输入用户名' }], "defaultValue": '' }, { "type": "input", "name": "角色码", "field": "code", "validate": [{ "required": true, "message": '请输入角色码' }, {
	                    validator: function validator(rule, value, callback) {
	                        if (!/^ROLE_.*$/.test(value)) {
	                            callback('角色码必须以ROLE_开头');
	                        } else {
	                            callback();
	                        }
	                    }
	                }], "defaultValue": '' }, { "type": "input", "name": "描述", "field": "description", "defaultValue": '' }],
	            "buttonConfigs": {
	                "buttons": [{ "type": "button", "value": "返回", "field": "back", props: { btnType: "primary", "style": { "float": "right" } } }, { "type": "button", "value": "确定", "field": "submit", props: { btnType: "primary", "style": { "float": "right" }, htmlType: "submit" } }]
	            }
	        }]
	    });
	});

/***/ }
]);