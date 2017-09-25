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

	var _reactRouter = __webpack_require__(88);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var FormItem = _form2["default"].Item;
	/**
	 * 管理节点设备初始设置
	 * 第一步
	 * 初始引导设置
	 */
	(0, _jsonp2["default"])("sbglStep0To1")(function (args, callback) {
		var config = {
			"success": true,
			"data": [{
				"title": "初始设置引导",
				"column": 1,
				"showTitle": true,
				"data": [{ "value": function value(config) {
						return _react2["default"].createElement(
							'div',
							{ style: { textAlign: "center", padding: "5px 20px 5px", backgroundColor: "#d9edf7", color: "#31708f" } },
							'\u5982\u679C\u6CA1\u6709\u8BBE\u7F6E\u5355\u4F4D\u4FE1\u606F\uFF0C\u8BF7\u5148\u53BB\u8BBE\u7F6E\uFF01\u5982\u679C\u5DF2\u8BBE\u7F6E\uFF0C\u8BF7\u70B9\u51FB\u4E0B\u4E00\u6B65\uFF01'
						);
					}
				}, {
					"value": function value(config) {
						return _react2["default"].createElement(
							FormItem,
							{ label: '\u5355\u4F4D\u540D\u79F0\uFF1A', labelCol: { span: 12 }, wrapperCol: { span: 12 } },
							_global.Global.getState().aiForm.sbglStep0To1.form.getFieldDecorator("dwmc", {
								initialValue: _global.Global.getState().framework.checkSetUpInfo.data && _global.Global.getState().framework.checkSetUpInfo.data.compay ? _global.Global.getState().framework.checkSetUpInfo.data.compay : "未设置"
							})(_react2["default"].createElement(
								_reactRouter.Link,
								{ style: { cursor: _global.Global.getState().framework.checkSetUpInfo.data && _global.Global.getState().framework.checkSetUpInfo.data.compay ? "default" : "pointer" }, to: _global.Global.getState().framework.checkSetUpInfo.data && _global.Global.getState().framework.checkSetUpInfo.data.compay ? "/steperV1/sbglStepers/1" : "/page/Dwgl" },
								_global.Global.getState().framework.checkSetUpInfo.data && _global.Global.getState().framework.checkSetUpInfo.data.compay ? "已设置" : "未设置"
							))
						);
					}
				}]
			}]

		};
		callback(config);
	});

/***/ }
]);