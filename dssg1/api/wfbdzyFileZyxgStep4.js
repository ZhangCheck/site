webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(48);

	var _input = __webpack_require__(74);

	var _input2 = _interopRequireDefault(_input);

	var _css2 = __webpack_require__(2444);

	var _select = __webpack_require__(75);

	var _select2 = _interopRequireDefault(_select);

	var _css3 = __webpack_require__(54);

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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var FormItem = _form2["default"].Item; /**
	                                     * Created by liy on 2016/12/20 0020.
	                                     */

	var Option = _select2["default"].Option;
	(0, _jsonp2["default"])("wfbdzyFileZyxgStep4")(function (args, callback) {

	    var target = args.target;
	    var state = _global.Global.getState();
	    var getFieldValue = target.props.form.getFieldValue;
	    var getFieldDecorator = target.props.form.getFieldDecorator;
	    var dispatchStrategyJson = JSON.parse(state.dataList.getResourceForUpdate.data.dispatchStrategyJson);
	    var config = {
	        "success": true,
	        "data": [{
	            "title": "更新周期配置",
	            "column": 1,
	            "showTitle": true,
	            "labelCol": 1,
	            "titleIcon": "schedule-configuration",
	            "wrapperCol": 6,
	            "data": [{ "name": "调度模式", "type": "select", "labelCol": 10, "wrapperCol": 10, "field": "ddModel", "defaultValue": dispatchStrategyJson.dispatchType, "placeholder": "请选择...", "options": [{ value: 1, key: "周期模式" }, { value: 2, key: "定期模式" }, { value: 3, key: "触发器模式" }] }, { "name": "开始时间", "field": "startTime", "labelCol": 10, "wrapperCol": 10, "type": "datePicker", "defaultValue": dispatchStrategyJson.beginTime,
	                preRender: function preRender() {
	                    return _global.Global.getState().aiForm.wfbdzyFileZyxgStep4.form.getFieldValue('ddModel') == 2 || _global.Global.getState().aiForm.wfbdzyFileZyxgStep4.form.getFieldValue('ddModel') == 3 ? "hidden" : "";
	                }
	            }, { preRender: function preRender() {
	                    return _global.Global.getState().aiForm.wfbdzyFileZyxgStep4.form.getFieldValue('ddModel') == 2 || _global.Global.getState().aiForm.wfbdzyFileZyxgStep4.form.getFieldValue('ddModel') == 3 ? "hidden" : "";
	                },
	                "value": function value(config) {
	                    return _react2["default"].createElement(
	                        FormItem,
	                        { label: '\u95F4\u9694\u5468\u671F', labelCol: { span: 10 }, wrapperCol: { span: 10 } },
	                        _global.Global.getState().aiForm.wfbdzyFileZyxgStep4.form.getFieldDecorator("zqIntervalCycle", {
	                            initialValue: dispatchStrategyJson.cycle
	                        })(_react2["default"].createElement(_input2["default"], { name: '', style: { width: 250 } })),
	                        _global.Global.getState().aiForm.wfbdzyFileZyxgStep4.form.getFieldDecorator("zqTimeUnit", {
	                            initialValue: dispatchStrategyJson.dateTypeMin != null ? dispatchStrategyJson.dateTypeMin : 1
	                        })(_react2["default"].createElement(
	                            _select2["default"],
	                            { style: { width: 65 } },
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
	                    return _global.Global.getState().aiForm.wfbdzyFileZyxgStep4.form.getFieldValue('ddModel') == 1 || _global.Global.getState().aiForm.wfbdzyFileZyxgStep4.form.getFieldValue('ddModel') == 3 ? "hidden" : "";
	                },
	                "value": function value(config) {
	                    return _react2["default"].createElement(
	                        FormItem,
	                        { label: '\u95F4\u9694\u5468\u671F', labelCol: { span: 10 }, wrapperCol: { span: 10 } },
	                        _global.Global.getState().aiForm.wfbdzyFileZyxgStep4.form.getFieldDecorator("dqTimeUnit", {
	                            initialValue: dispatchStrategyJson.dateTypeMax ? dispatchStrategyJson.dateTypeMax : 1
	                        })(_react2["default"].createElement(
	                            _select2["default"],
	                            { style: { width: 100 } },
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
	                        [_global.Global.getState().aiForm.wfbdzyFileZyxgStep4.form.getFieldDecorator("dayTime", {
	                            initialValue: dispatchStrategyJson.day
	                        })(_react2["default"].createElement(_input2["default"], { style: { width: 50, margin: "0 5px" } })), _react2["default"].createElement(
	                            'span',
	                            null,
	                            '\u5929'
	                        )],
	                        [_global.Global.getState().aiForm.wfbdzyFileZyxgStep4.form.getFieldDecorator("hourTime", {
	                            initialValue: dispatchStrategyJson.hour
	                        })(_react2["default"].createElement(_input2["default"], { style: { width: 50, margin: "0 5px" } })), _react2["default"].createElement(
	                            'span',
	                            null,
	                            '\u65F6'
	                        )],
	                        [_global.Global.getState().aiForm.wfbdzyFileZyxgStep4.form.getFieldDecorator("minTime", {
	                            initialValue: dispatchStrategyJson.second
	                        })(_react2["default"].createElement(_input2["default"], { style: { width: 50, margin: "0 5px" } })), _react2["default"].createElement(
	                            'span',
	                            null,
	                            '\u5206'
	                        )]
	                    );
	                }
	            }]
	        }, {
	            "title": "文件共享等级配置",
	            "column": 1,
	            "showTitle": true,
	            "titleIcon": "file-text",
	            "labelCol": 1,
	            "wrapperCol": 6,
	            "data": [{ "name": "文件等级", "labelCol": 10, "wrapperCol": 10, "type": "select", "field": "fileLevel", "defaultValue": dispatchStrategyJson.level && dispatchStrategyJson.level != null ? dispatchStrategyJson.level : 1, "placeholder": "请选择...", "options": [{ "value": 1, "key": "一级" }, { "value": 2, "key": "二级" }, { "value": 3, "key": "三级" }] }]
	        }]
	    };
	    callback(config);
	});

/***/ }
]);