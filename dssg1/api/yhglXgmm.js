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

	(0, _jsonp2["default"])("yhglXgmm")(function (args, callback) {
	    var target = args.target;
	    var getFieldValue = target.props.form.getFieldValue;
	    var defaultValue = args.apiData ? args.apiData : {};
	    // let defaultValue = Global.getState().dataList.sjygl.detailMsgDataApi?Global.getState().dataList.sjygl.detailMsgDataApi.data:'';
	    callback({
	        "success": true,
	        "data": [{
	            "column": 1,
	            "data": [{ "type": "input", "name": "新密码", "field": "loginName" }, { "type": "input", "name": "确认密码", "field": "userName" }],

	            "buttonConfigs": {
	                "buttons": [{ "type": "button", "value": "取消", mark: "yhgl", props: { "style": { "float": "right" } } }, { "type": "button", "value": "确定", mark: "yhgl", props: { "style": { "float": "right" }, htmlType: "submit" } }]
	            }
	        }]
	    });
	});

/***/ }
]);