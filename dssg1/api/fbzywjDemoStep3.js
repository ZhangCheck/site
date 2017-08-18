webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(48);

	var _input = __webpack_require__(74);

	var _input2 = _interopRequireDefault(_input);

	var _css2 = __webpack_require__(1962);

	var _modal = __webpack_require__(29);

	var _modal2 = _interopRequireDefault(_modal);

	var _css3 = __webpack_require__(1765);

	var _select = __webpack_require__(75);

	var _select2 = _interopRequireDefault(_select);

	var _css4 = __webpack_require__(54);

	var _form = __webpack_require__(53);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _AiFormTable = __webpack_require__(310);

	var _AiFormTable2 = _interopRequireDefault(_AiFormTable);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(10);

	var _history = __webpack_require__(32);

	var _history2 = _interopRequireDefault(_history);

	var _Timer = __webpack_require__(1149);

	var _Timer2 = _interopRequireDefault(_Timer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * Created by liy on 2016/12/20 0020.
	 */
	var FormItem = _form2["default"].Item;
	var Option = _select2["default"].Option;
	(0, _jsonp2["default"])("fbzywjDemoStep3")(function (args, callback) {
	    var target = args.target;
	    var state = _global.Global.getState();
	    var getFieldValue = target.props.form.getFieldValue;
	    var getFieldDecorator = target.props.form.getFieldDecorator;
	    var lastStepState = state.dataList.fbzywjDemoStep1;
	    if (!lastStepState) {
	        _modal2["default"].warning({
	            title: '提示',
	            content: '上一步或前几步没有完成，请返回重新开始发布。',
	            onOk: function onOk() {
	                /* */
	                setTimeout(function () {
	                    _global.Global.mark({ aiForm: {
	                            fbzywjDemoStep3: null
	                        } });
	                    _history2["default"].push("datalistV1/fbzyList/list/11/10");
	                }, 500);
	            }
	        });
	        return;
	    }
	    var config = {
	        "success": true,
	        "data": [{
	            "title": "更新周期配置",
	            "column": 1,
	            "showTitle": true,
	            "labelCol": 12,
	            "titleIcon": "schedule-configuration",
	            "wrapperCol": 12,
	            "data": [{ "name": "调度模式", "type": "select", "field": "ddModel", "defaultValue": 1, "placeholder": "请选择...", "options": [{ value: 1, key: "周期模式" }, { value: 2, key: "定期模式" }, { value: 3, key: "触发器模式" }] }, { "name": "开始时间", "field": "startTime", "type": "datePicker", "defaultValue": "",
	                preRender: function preRender() {
	                    return _global.Global.getState().aiForm.fbzywjDemoStep3.form.getFieldValue('ddModel') == 2 || _global.Global.getState().aiForm.fbzywjDemoStep3.form.getFieldValue('ddModel') == 3 ? "hidden" : "";
	                }
	            }, { preRender: function preRender() {
	                    return _global.Global.getState().aiForm.fbzywjDemoStep3.form.getFieldValue('ddModel') == 2 || _global.Global.getState().aiForm.fbzywjDemoStep3.form.getFieldValue('ddModel') == 3 ? "hidden" : "";
	                },
	                "value": function value(config) {
	                    return _react2["default"].createElement(
	                        FormItem,
	                        { label: '\u95F4\u9694\u5468\u671F', labelCol: { span: 12 }, wrapperCol: { span: 12 } },
	                        _global.Global.getState().aiForm.fbzywjDemoStep3.form.getFieldDecorator("zqIntervalCycle", {
	                            initialValue: ""
	                        })(_react2["default"].createElement(_input2["default"], { name: '', style: { width: "70%" } })),
	                        _global.Global.getState().aiForm.fbzywjDemoStep3.form.getFieldDecorator("zqTimeUnit", {
	                            initialValue: 1
	                        })(_react2["default"].createElement(
	                            _select2["default"],
	                            { style: { width: "30%", marginTop: "-3px" } },
	                            function () {

	                                return [{ "value": 1, "key": "时" }, { "value": 2, "key": "分" }, { "value": 3, "key": "秒" }].map(function (dict, i) {
	                                    return _react2["default"].createElement(
	                                        Option,
	                                        { key: dict.key ? dict.key : "", value: dict.value },
	                                        dict.key
	                                    );
	                                });
	                            }()
	                        ))
	                    );
	                }

	            }, { preRender: function preRender() {
	                    return _global.Global.getState().aiForm.fbzywjDemoStep3.form.getFieldValue('ddModel') == 1 || _global.Global.getState().aiForm.fbzywjDemoStep3.form.getFieldValue('ddModel') == 3 ? "hidden" : "";
	                },
	                "value": _react2["default"].createElement(_Timer2["default"], { id: 'fbzywjDemoStep3' })
	            }]
	        }]
	    };

	    callback(config);
	});

/***/ },

/***/ 1149:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _css = __webpack_require__(48);

	var _input = __webpack_require__(74);

	var _input2 = _interopRequireDefault(_input);

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(6);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(5);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _css2 = __webpack_require__(1765);

	var _select = __webpack_require__(75);

	var _select2 = _interopRequireDefault(_select);

	var _css3 = __webpack_require__(54);

	var _form = __webpack_require__(53);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _component = __webpack_require__(11);

	var _component2 = _interopRequireDefault(_component);

	var _global = __webpack_require__(10);

	var _Loading = __webpack_require__(78);

	var _Loading2 = _interopRequireDefault(_Loading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	//import styles from './Footer.less';
	var FormItem = _form2["default"].Item;
	var Option = _select2["default"].Option;

	var rootState = 'customComponent';

	var Timer = function (_Component) {
		(0, _inherits3["default"])(Timer, _Component);

		function Timer() {
			(0, _classCallCheck3["default"])(this, Timer);
			return (0, _possibleConstructorReturn3["default"])(this, _Component.apply(this, arguments));
		}

		Timer.prototype.render = function render() {
			var glState = _global.Global.getState();
			var form = glState.aiForm[this.props.id].form;
			var getFieldDecorator = form.getFieldDecorator;
			var defaultVaules = glState.aiForm[this.props.id].values || {};
			return _react2["default"].createElement(
				FormItem,
				{ label: '\u95F4\u9694\u5468\u671F', labelCol: { span: 12 }, wrapperCol: { span: 12 } },
				getFieldDecorator("dqTimeUnit", {
					initialValue: defaultVaules.dqTimeUnit || 1
				})(_react2["default"].createElement(
					_select2["default"],
					{ style: { width: 200, marginTop: "-3px" } },
					function () {

						return [{ "value": 1, "key": "每月" }, { "value": 2, "key": "每周" }, { "value": 3, "key": "每天" }].map(function (dict, i) {
							return _react2["default"].createElement(
								Option,
								{ key: dict.key ? dict.key : "", value: dict.value },
								dict.key
							);
						});
					}()
				)),
				function () {

					return form.getFieldValue('dqTimeUnit') == "3" ? null : [getFieldDecorator("dayTime", {
						initialValue: defaultVaules.dayTime
					})(_react2["default"].createElement(_input2["default"], { style: { width: 50, margin: "0 5px" } })), _react2["default"].createElement(
						'span',
						null,
						'\u5929'
					)];
				}(),
				[getFieldDecorator("hourTime", {
					initialValue: defaultVaules.hourTime
				})(_react2["default"].createElement(_input2["default"], { style: { width: 50, margin: "0 5px" } })), _react2["default"].createElement(
					'span',
					null,
					'\u65F6'
				)],
				[getFieldDecorator("minTime", {
					initialValue: defaultVaules.minTime
				})(_react2["default"].createElement(_input2["default"], { style: { width: 50, margin: "0 5px" } })), _react2["default"].createElement(
					'span',
					null,
					'\u5206'
				)]
			);
		};

		return Timer;
	}(_react.Component);

	exports["default"] = Timer;
	module.exports = exports['default'];

/***/ }

});