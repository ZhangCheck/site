webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(2455);

	var _modal = __webpack_require__(29);

	var _modal2 = _interopRequireDefault(_modal);

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

	var _StepContainerV = __webpack_require__(287);

	var _StepContainerV2 = _interopRequireDefault(_StepContainerV);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * Created by zhaoxl on 2017/4/17 0017.
	 */

	var FormItem = _form2["default"].Item;
	var Option = _select2["default"].Option;
	(0, _jsonp2["default"])("wfbdzyFileZyfbStep3To4")(function (args, callback) {
	    var target = args.target;
	    var state = _global.Global.getState();
	    var getFieldValue = target.props.form.getFieldValue;
	    var getFieldDecorator = target.props.form.getFieldDecorator;
	    var lastStepState = state.dataList.wfbdzyFileZyfbStep1;
	    if (!lastStepState) {
	        _modal2["default"].warning({
	            title: '提示',
	            content: '上一步或前几步没有完成，请返回第一步重新开始。',
	            onOk: function onOk() {
	                /* */
	                setTimeout(function () {
	                    _global.Global.mark({ aiForm: {
	                            wfbdzyFileZyfbStep3: null
	                        } });
	                    _history2["default"].push(state.routing.path.replace(/\/\d+/, '/1'));
	                }, 500);
	            }
	        });
	        return;
	    }
	    var columns = [{
	        "title": '',
	        "dataIndex": 'resRender',
	        "key": 'resRender',
	        "render": function render() {
	            return _react2["default"].createElement(
	                'div',
	                { style: { width: 200, marginLeft: "20%" } },
	                "资源有效期"
	            );
	        }
	    }, {
	        "title": '开始时间',
	        "dataIndex": 'validBeginTime',
	        "key": 'validBeginTime',
	        "render": { "type": "datePicker", field: "validBeginTime", props: { style: { width: 200, left: "50%", marginTop: "4%" } } }
	    }, {
	        "title": '结束时间',
	        "dataIndex": 'validEndTime',
	        "key": 'validEndTime',
	        "render": { "type": "datePicker", field: "validEndTime", props: { style: { width: 200, left: "50%", marginTop: "4%" }, disabledDate: function disabledDate(current) {
	                    return current && current.valueOf() < Date.now() - 86400; //减去一天
	                } } }
	    }];

	    var config = {
	        "success": true,
	        "data": [{
	            "title": "资源有效期",
	            "column": 1,
	            "showTitle": true,
	            "titleIcon": "copy",

	            "data": function data() {
	                return _react2["default"].createElement(
	                    'div',
	                    { className: "customizedTable" },
	                    _react2["default"].createElement(_AiFormTable2["default"], { config: {
	                            "columns": columns, //表格标头数据
	                            "dataSource": [{
	                                "resRender": "资源有效期",
	                                "validBeginTime": "",
	                                "validEndTime": ""
	                            }] //表格数据
	                        }, id: 'fileFbStep4', form: target.props.form })
	                );
	            }

	        }]
	    };
	    callback(config);
	});

/***/ }
]);