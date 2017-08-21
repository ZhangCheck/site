webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _AiLabel = __webpack_require__(1084);

	var _AiLabel2 = _interopRequireDefault(_AiLabel);

	var _aiFormTable = __webpack_require__(261);

	var _global = __webpack_require__(12);

	var _jsonp = __webpack_require__(268);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * args为页面传送的参数
	 */
	(0, _jsonp2["default"])("aiFormTableDemoTableConfig")(function (args, callback) {
	    var target = args.target;

	    //初始化展示数据
	    var dataSource = [{
	        datatime: "必选",
	        applytype: "jack",
	        applyproject: "like",
	        operation: ""
	    }];
	    /**
	     * title：表格标题
	     * dataIndex：表格字段名
	     * key：表格字段标识
	     *render：使用AiLable组件：返回单个标签，
	     * AiLabel组件目前仅使用与可编辑表格中
	     */
	    var columns = [{
	        "title": "是否必选*",
	        "dataIndex": "datatime",
	        "key": "datatime",
	        /**
	         * field的值和dataIndex值相同，便于编辑时值的替换
	         * @param text
	         * @param record  单行的值
	         * @param index   row的位置
	         * AiLabel组件：
	         * type：标签类型，defaultValue：默认值，width标签宽度,id:为一次组件数据调用的编号（页面传），
	         * record：一组的数据，index：标号，field:标签编号（和dataIndex相同），options下拉选择数据，可页面传输
	         */
	        "render": function render(text, record, index) {
	            return _react2["default"].createElement(_AiLabel2["default"], { args: { "type": "select", "defaultValue": record.datatime, "width": 200, "id": args.id, "record": record, "index": index, "field": "datatime", "options": ["必选", "可选"] } });
	        }
	    }, {
	        "title": "字段名称",
	        "dataIndex": "applytype",
	        "key": "applytype", //<AiLabel args={{"type":"input","defaultValue":record.applytype,"width":200,"id":args.id,"record":record,"index":index,"field":"applytype"}}/>
	        "render": function render(text, record, index) {
	            return _react2["default"].createElement(_AiLabel2["default"], { args: { "type": "select", "defaultValue": record.applytype, "width": 200, "id": args.id, "record": record, "index": index, "field": "applytype", "options": ["jack", "juce", "check"] } });
	        }

	    }, {
	        "title": "比较符",
	        "dataIndex": "applyproject",
	        "key": "applyproject",
	        "render": function render(text, record, index) {
	            return _react2["default"].createElement(_AiLabel2["default"], { args: { "type": "select", "width": 200, "defaultValue": record.applyproject, "id": args.id, "record": record, "index": index, "field": "applyproject", "options": ["=", "like"] } });
	        }
	    }, {
	        "title": "操作",
	        "dataIndex": "operation",
	        "key": "operation",
	        "render": [{ "type": "delete", "icon": "close-square" }, { "type": "add", "icon": "plus-square" }, { "type": "up", "icon": "arrow-up" }, { "type": "down", "icon": "arrow-down" }]

	    }];

	    callback({
	        "success": true,
	        "data": {
	            "columns": columns, //表格标头数据
	            "dataSource": dataSource, //表格数据
	            "addTemplate": { //表格初始化新增行数据
	                datatime: "必选",
	                applytype: "",
	                applyproject: "=",
	                operation: ""
	            }
	        }
	    });
	}); /* author by 田贵宾
	    import './other.html';
	    import React from 'react';
	    import ReactDOM from 'react-dom'; */

/***/ },

/***/ 1084:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(6);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(5);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _css = __webpack_require__(60);

	var _input = __webpack_require__(114);

	var _input2 = _interopRequireDefault(_input);

	var _css2 = __webpack_require__(40);

	var _button = __webpack_require__(31);

	var _button2 = _interopRequireDefault(_button);

	var _css3 = __webpack_require__(436);

	var _cascader = __webpack_require__(434);

	var _cascader2 = _interopRequireDefault(_cascader);

	var _css4 = __webpack_require__(265);

	var _switch = __webpack_require__(259);

	var _switch2 = _interopRequireDefault(_switch);

	var _css5 = __webpack_require__(263);

	var _inputNumber = __webpack_require__(257);

	var _inputNumber2 = _interopRequireDefault(_inputNumber);

	var _css6 = __webpack_require__(264);

	var _slider = __webpack_require__(258);

	var _slider2 = _interopRequireDefault(_slider);

	var _css7 = __webpack_require__(182);

	var _timePicker = __webpack_require__(260);

	var _timePicker2 = _interopRequireDefault(_timePicker);

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _css8 = __webpack_require__(139);

	var _datePicker = __webpack_require__(137);

	var _datePicker2 = _interopRequireDefault(_datePicker);

	var _css9 = __webpack_require__(99);

	var _checkbox = __webpack_require__(97);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	var _css10 = __webpack_require__(112);

	var _radio = __webpack_require__(92);

	var _radio2 = _interopRequireDefault(_radio);

	var _css11 = __webpack_require__(100);

	var _select = __webpack_require__(98);

	var _select2 = _interopRequireDefault(_select);

	var _css12 = __webpack_require__(59);

	var _form = __webpack_require__(58);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _moment = __webpack_require__(27);

	var _moment2 = _interopRequireDefault(_moment);

	var _component = __webpack_require__(14);

	var _component2 = _interopRequireDefault(_component);

	var _aiFormTable = __webpack_require__(261);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	_moment2["default"].locale('zh-cn');
	var FormItem = _form2["default"].Item;
	var Option = _select2["default"].Option;
	var RadioButton = _radio2["default"].Button;
	var RadioGroup = _radio2["default"].Group;
	var CheckboxGroup = _checkbox2["default"].Group;
	var MonthPicker = _datePicker2["default"].MonthPicker,
	    RangePicker = _datePicker2["default"].RangePicker;


	var Demo = _form2["default"].create()(_react2["default"].createClass({
	    displayName: 'Demo',
	    handleChange: function handleChange(record, id, index, name, type, event, value) {
	        //替换值
	        if (type == "input") {
	            record[name] = event.target.value;
	        } else {
	            record[name] = event;
	        }
	        this.props.actions.updateRow(record, id, index);
	        console.log("name=" + name + "---record=" + record + "---id=" + id + "---index=" + index + "---value=" + event);
	    },
	    render: function render() {
	        var _this = this;

	        if (!this.props.args) return _react2["default"].createElement(
	            'div',
	            null,
	            '\u6682\u65E0\u6570\u636E'
	        );
	        var arg = this.props.args;
	        var getFieldDecorator = this.props.form.getFieldDecorator;

	        function onChange(value, dateString) {
	            console.log('Selected Time: ', value);
	            console.log('Formatted Selected Time: ', dateString);
	        }

	        var customProps = arg.props ? arg.props : {};
	        var displayMode = {};
	        var mode = void 0;
	        if (arg.preRender) {
	            mode = arg.preRender();
	            if (mode == 'hidden') {
	                displayMode = { style: { visibility: mode } };
	            } else if (mode == "none") {
	                displayMode = { style: { display: mode } };
	            }
	        }
	        customProps = (0, _extends3["default"])({}, customProps, { style: (0, _extends3["default"])({}, customProps.style, displayMode) });

	        return _react2["default"].createElement(
	            FormItem,
	            {
	                label: arg.name ? arg.name : "" //标签名称
	                , labelCol: { span: arg.labelCol ? arg.labelCol : 2 },
	                wrapperCol: { span: arg.wrapperCol ? arg.wrapperCol : 4 }
	            },
	            function () {
	                var field = arg.field ? arg.field : arg.type ? arg.type : "default";
	                switch (arg.type ? arg.type : "default") {
	                    //时分
	                    case 'timePicker':
	                        return (0, _extends3["default"])({}, getFieldDecorator(field, arg.defaultValue ? {
	                            initialValue: (0, _moment2["default"])(arg.defaultValue, 'HH:mm')
	                        } : {})(_react2["default"].createElement(_timePicker2["default"], (0, _extends3["default"])({ placeholder: arg.placeholder ? arg.placeholder : "",
	                            format: 'HH:mm' }, customProps))));
	                    //年月日
	                    case 'datePicker':
	                        //return <DatePicker {...getFieldDecorator (arg.field,{initialValue:moment('2015-06-06', 'YYYY-MM-DD')})}/>
	                        return (0, _extends3["default"])({}, getFieldDecorator(field, arg.defaultValue ? {
	                            initialValue: (0, _moment2["default"])(arg.defaultValue, "YYYY-MM-DD")
	                        } : {})(_react2["default"].createElement(_datePicker2["default"], (0, _extends3["default"])({ placeholder: arg.placeholder ? arg.placeholder : "",
	                            format: 'YYYY-MM-DD' }, customProps))));
	                    //时间段
	                    case 'rangePicker':
	                        return (0, _extends3["default"])({}, getFieldDecorator(field, {})(_react2["default"].createElement(RangePicker
	                        //showTime 为时分秒设置样式  ，format为总的样式
	                        , (0, _extends3["default"])({ showTime: { format: arg.showTime ? arg.showTime : 'HH:mm:ss' },
	                            format: arg.format ? arg.format : "YYYY-MM-DD HH:mm:ss",
	                            placeholder: ['Start Time', 'End Time'],
	                            onChange: _this.onChange
	                        }, customProps))));
	                    //滑动条
	                    case 'slider':
	                        return (0, _extends3["default"])({}, getFieldDecorator(field, {})(_react2["default"].createElement(_slider2["default"], (0, _extends3["default"])({ marks: arg.marks ? arg.marks : "" }, customProps))));
	                    //数字输入框
	                    case 'inputNumber':
	                        //return <InputNumber  {...getFieldDecorator (arg.field,{initialValue:arg.defaultValue})}/>
	                        return (0, _extends3["default"])({}, getFieldDecorator(field, {
	                            initialValue: arg.defaultValue ? arg.defaultValue : 1
	                        })(_react2["default"].createElement(_inputNumber2["default"], (0, _extends3["default"])({ min: arg.min ? arg.min : 0, max: arg.max ? arg.max : 99 }, customProps))));
	                    //开关
	                    case 'switch':
	                        return (0, _extends3["default"])({}, getFieldDecorator(field, {})(_react2["default"].createElement(_switch2["default"], (0, _extends3["default"])({ checkedChildren: arg.checkedChildren ? arg.checkedChildren : "ON",
	                            unCheckedChildren: arg.unCheckedChildren ? arg.unCheckedChildren : "OFF",
	                            defaultChecked: arg.defaultChecked ? arg.defaultChecked : false }, customProps))));
	                    //多选框
	                    case 'checkbox':
	                        //return <CheckboxGroup options={arg.options} {...getFieldDecorator (arg.field,{initialValue:arg.defaultValue})}/>
	                        return (0, _extends3["default"])({}, getFieldDecorator(field, {
	                            initialValue: arg.defaultValue ? arg.defaultValue : ""
	                        })(_react2["default"].createElement(CheckboxGroup, (0, _extends3["default"])({ options: arg.options }, customProps))));
	                    //下拉列表
	                    case 'select':
	                        return (0, _extends3["default"])({}, getFieldDecorator(field, {
	                            initialValue: arg.defaultValue ? arg.defaultValue : ""
	                        })(_react2["default"].createElement(
	                            _select2["default"],
	                            (0, _extends3["default"])({ onChange: _this.handleChange.bind(_this, arg.record, arg.id, arg.index, field, "select"), placeholder: arg.placeholder ? arg.placeholder : "请选择..." }, customProps),
	                            arg.options.map(function (v) {
	                                return _react2["default"].createElement(
	                                    Option,
	                                    { value: v },
	                                    v
	                                );
	                            })
	                        )));
	                    //多级下拉选择
	                    case 'residence':
	                        return (0, _extends3["default"])({}, getFieldDecorator(field, {
	                            rules: [{
	                                type: 'array',
	                                required: true
	                                // message:arg.message?arg.message: '请选择' + arg.field + '!'
	                            }]
	                        })(_react2["default"].createElement(_cascader2["default"], (0, _extends3["default"])({ placeholder: arg.placeholder ? arg.placeholder : "请选择...",
	                            options: arg.options }, customProps))));
	                    case 'radio1':
	                        return (0, _extends3["default"])({}, getFieldDecorator(field, {
	                            initialValue: arg.defaultValue ? arg.defaultValue : ""
	                        })(_react2["default"].createElement(
	                            RadioGroup,
	                            customProps,
	                            arg.options.map(function (v, i) {
	                                return _react2["default"].createElement(
	                                    _radio2["default"],
	                                    { key: i,
	                                        value: v.value },
	                                    v.lable
	                                );
	                            })
	                        )));
	                    case 'radio':
	                        return (0, _extends3["default"])({}, getFieldDecorator(field, {
	                            initialValue: arg.defaultValue ? arg.defaultValue : ""
	                        })(_react2["default"].createElement(
	                            RadioGroup,
	                            customProps,
	                            arg.options.map(function (v) {
	                                return _react2["default"].createElement(
	                                    _radio2["default"],
	                                    { key: v, value: v },
	                                    v
	                                );
	                            })
	                        )));
	                    case 'button':
	                        return _react2["default"].createElement(
	                            _button2["default"],
	                            customProps,
	                            arg.value ? arg.value : "按钮"
	                        );
	                    //input前存在icon图标
	                    case 'input':
	                        return (0, _extends3["default"])({}, getFieldDecorator(field, {
	                            rules: arg.validate ? arg.validate : "",
	                            initialValue: arg.defaultValue ? arg.defaultValue : ""
	                        })(_react2["default"].createElement(_input2["default"], (0, _extends3["default"])({ onBlur: _this.handleChange.bind(_this, arg.record, arg.id, arg.index, field, "input"),
	                            placeholder: arg.placeholder ? arg.placeholder : "请输入..."
	                        }, customProps))));
	                    //文本样式表单
	                    case 'text':
	                        return (0, _extends3["default"])({}, getFieldDecorator(field, {})(_react2["default"].createElement(
	                            'p',
	                            null,
	                            arg.defaultValue ? arg.defaultValue : ""
	                        )));
	                    //input后面有√和×的提示  必填选项 前方存在红*
	                    default:
	                        return (0, _extends3["default"])({}, getFieldDecorator(field, {
	                            rules: arg.validate ? arg.validate : "",
	                            initialValue: arg.defaultValue ? arg.defaultValue : ""

	                        })(_react2["default"].createElement(_input2["default"], (0, _extends3["default"])({ disabled: arg.disabled ? arg.disabled : false,
	                            placeholder: arg.placeholder ? arg.placeholder : "请输入..." }, customProps))));
	                }
	            }()
	        );
	    }
	}));

	var AiLabel = function (_Component) {
	    (0, _inherits3["default"])(AiLabel, _Component);

	    function AiLabel(props) {
	        (0, _classCallCheck3["default"])(this, AiLabel);
	        return (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));
	    }

	    AiLabel.prototype.render = function render() {
	        var args = this.props.args;
	        return _react2["default"].createElement(Demo, { args: args, actions: this.props.actions });
	    };

	    return AiLabel;
	}(_react.Component);

	exports["default"] = (0, _component2["default"])('aiLabel', { updateRow: _aiFormTable.updateRow })(AiLabel);
	module.exports = exports['default'];

/***/ }

});