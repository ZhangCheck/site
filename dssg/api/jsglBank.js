(function(){ var runed=0,temp,timer,time;webpackJsonp([3],{

/***/ 0:
/***/ temp = function(module, exports, __webpack_require__) {runed=true;

	'use strict';

	var _css = __webpack_require__(1581);

	var _modal = __webpack_require__(49);

	var _modal2 = _interopRequireDefault(_modal);

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _css2 = __webpack_require__(64);

	var _icon = __webpack_require__(20);

	var _icon2 = _interopRequireDefault(_icon);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _global = __webpack_require__(15);

	var _dataFormat = __webpack_require__(172);

	var _AiForm = __webpack_require__(36);

	var _AiForm2 = _interopRequireDefault(_AiForm);

	var _DataListV = __webpack_require__(836);

	var _DataListV2 = _interopRequireDefault(_DataListV);

	var _jsonp = __webpack_require__(234);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/* import './other.html';
	 import React from 'react';
	 import ReactDOM from 'react-dom'; */
	(0, _jsonp2["default"])("jsgl")(function (args, callback) {
	    var state = _global.Global.getState();
	    callback({
	        "success": true,
	        "data": {
	            "title": "角色管理",
	            "buttonConfigs": [{
	                "buttonName": function buttonName(config) {
	                    return _react2["default"].createElement(
	                        'div',
	                        { style: { "float": "left" } },
	                        _react2["default"].createElement(
	                            'div',
	                            { className: "configRightBtnGp" },
	                            _react2["default"].createElement(
	                                'div',
	                                null,
	                                _react2["default"].createElement(_icon2["default"], { type: 'search' }),
	                                _react2["default"].createElement(
	                                    'a',
	                                    { onClick: function onClick() {
	                                            _global.Global.mark({
	                                                dataList: {
	                                                    jsgl: {
	                                                        dialog: {
	                                                            show: true,
	                                                            title: '新增角色',
	                                                            onOk: function onOk() {
	                                                                var state = _global.Global.getState();
	                                                                var form = state.aiForm.jsglAdd.form;
	                                                                form.validateFields(function (fileds) {
	                                                                    if (fileds) {
	                                                                        return false;
	                                                                    } else {
	                                                                        _global.Global.mark({
	                                                                            dataList: {
	                                                                                jsgl: {
	                                                                                    dialog: {
	                                                                                        show: false
	                                                                                    }
	                                                                                }
	                                                                            }
	                                                                        });
	                                                                        var values = form.getFieldsValue();
	                                                                        _global.Global.requestApi({ apiName: "saveSysRoles", body: (0, _extends3["default"])({}, values), next: function next() {
	                                                                                var state = _global.Global.getState();
	                                                                            } }, ['requestSaveSysRoles', 'receieveSaveSysRoles', 'failedSaveSysRoles'], {
	                                                                            dataList: {
	                                                                                jsgl: {
	                                                                                    jsglAdd: {
	                                                                                        addResult: null
	                                                                                    }
	                                                                                }
	                                                                            }
	                                                                        });
	                                                                    }
	                                                                });
	                                                            },
	                                                            onCancel: function onCancel() {
	                                                                _global.Global.mark({
	                                                                    dataList: {
	                                                                        jsgl: {
	                                                                            dialog: {
	                                                                                show: false
	                                                                            }
	                                                                        }
	                                                                    }
	                                                                });
	                                                                return;
	                                                            },

	                                                            content: _react2["default"].createElement(_AiForm2["default"], { config: { apiName: 'jsglAdd' }, id: 'jsglAdd' })
	                                                        }
	                                                    }
	                                                }
	                                            });
	                                        } },
	                                    '\u65B0\u589E'
	                                )
	                            )
	                        )
	                    );
	                }
	            }, {
	                "buttonName": function buttonName(config) {
	                    return _react2["default"].createElement(
	                        'div',
	                        { style: { "float": "left" } },
	                        _react2["default"].createElement(
	                            'div',
	                            { className: "configRightBtnGp" },
	                            _react2["default"].createElement(
	                                'div',
	                                null,
	                                _react2["default"].createElement(_icon2["default"], { type: 'search' }),
	                                _react2["default"].createElement(
	                                    'a',
	                                    { onClick: function onClick() {
	                                            var state = _global.Global.getState();
	                                            if (!state.dataList.jsgl.selectedRows || state.dataList.jsgl.selectedRows && state.dataList.jsgl.selectedRows.length != 1) {
	                                                _modal2["default"].warning({
	                                                    title: '提示',
	                                                    content: '请选择单挑数据'
	                                                });
	                                            }
	                                            _global.Global.requestApi({ apiName: "findSysRolesByIdInfo", body: { id: _global.Global.getState().dataList.jsgl.selectedRows.join(',') }, next: function next() {
	                                                    _global.Global.mark({
	                                                        dataList: {
	                                                            jsgl: {
	                                                                dialog: {
	                                                                    show: true,
	                                                                    title: '编辑角色',
	                                                                    onOk: function onOk() {
	                                                                        var state = _global.Global.getState();
	                                                                        var form = state.aiForm.jsglEdit.form;

	                                                                        form.validateFields(function (fileds) {
	                                                                            if (fileds) {
	                                                                                return false;
	                                                                            } else {
	                                                                                _global.Global.mark({
	                                                                                    dataList: {
	                                                                                        jsgl: {
	                                                                                            dialog: {
	                                                                                                show: false
	                                                                                            }
	                                                                                        }
	                                                                                    }
	                                                                                });
	                                                                                var values = form.getFieldsValue();
	                                                                                _global.Global.requestApi({ apiName: "updateSysRoles", body: (0, _extends3["default"])({}, values) }, ['requestupdateSysRoles', 'receieveupdateSysRoles', 'failedupdateSysRoles'], {});
	                                                                            }
	                                                                        });
	                                                                    },
	                                                                    onCancel: function onCancel() {
	                                                                        _global.Global.mark({
	                                                                            dataList: {
	                                                                                jsgl: {
	                                                                                    dialog: {
	                                                                                        show: false
	                                                                                    }
	                                                                                }
	                                                                            }
	                                                                        });
	                                                                        return;
	                                                                    },
	                                                                    content: _react2["default"].createElement(_AiForm2["default"], { config: { apiName: 'jsglEdit' }, id: 'jsglEdit' })
	                                                                }
	                                                            }
	                                                        }
	                                                    });
	                                                } }, ['requestJsglEditData', 'receievegetJsglEditData', 'failedJsglEditData'], {
	                                                dataList: {
	                                                    jsgl: {
	                                                        detailData: null
	                                                    }
	                                                }
	                                            });
	                                        } },
	                                    '\u7F16\u8F91'
	                                )
	                            )
	                        )
	                    );
	                }
	            }, { "buttonName": "delete" }, {

	                "buttonName": function buttonName(config) {
	                    return _react2["default"].createElement(
	                        'div',
	                        { style: { "float": "left" } },
	                        _react2["default"].createElement(
	                            'div',
	                            { className: "configRightBtnGp" },
	                            _react2["default"].createElement(
	                                'div',
	                                null,
	                                _react2["default"].createElement(_icon2["default"], { type: 'pause-circle-o' }),
	                                _react2["default"].createElement(
	                                    'a',
	                                    { onClick: function onClick() {
	                                            window.location.href = '#/aiForm/jsgl/jsglPzcd/findSysMenusAllList';
	                                        } },
	                                    '\u914D\u7F6E\u83DC\u5355'
	                                )
	                            )
	                        )
	                    );
	                }
	            }],

	            "table": {
	                "primarykey": "roleId",
	                "clounms": [{
	                    "title": "角色名",
	                    "dataIndex": "name",
	                    "key": "name"
	                }, {
	                    "title": "描述",
	                    "dataIndex": "description",
	                    "key": "description"
	                }, {
	                    "title": "菜单",
	                    "dataIndex": "menus",
	                    "key": "menus"
	                }],
	                "body": { apiName: 'findSysRolesByPage', body: { page: 0, size: 10 } }
	            },
	            "list": {
	                "view": null,
	                "listApi": null,

	                "saveApi": null
	            },
	            "add": {
	                "initData": {
	                    data: { apiName: "yhglAddDemo" }
	                },
	                "onAddSubmitApi": { "apiName": "yhglAddData" }
	            },
	            "edit": {
	                "initData": {
	                    data: { apiName: "yhglEditDemo" }
	                },
	                "onUpdateSubmitApi": { "apiName": "yhglEditData" }
	            },
	            "delete": {
	                "body": { apiName: 'deleteSysRoles' }
	            },
	            "detail": {
	                "initData": {
	                    data: { apiName: "sjyglDetailDemo" }
	                },
	                "body": { apiName: 'findSysUserById' }
	            },
	            "check": {
	                "view": null,
	                "checkApi": null
	            }
	        }
	    });
	});

/***/ },

/***/ 36:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _css = __webpack_require__(30);

	var _button = __webpack_require__(28);

	var _button2 = _interopRequireDefault(_button);

	var _css2 = __webpack_require__(377);

	var _col = __webpack_require__(196);

	var _col2 = _interopRequireDefault(_col);

	var _css3 = __webpack_require__(64);

	var _icon = __webpack_require__(20);

	var _icon2 = _interopRequireDefault(_icon);

	var _getIterator2 = __webpack_require__(48);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _css4 = __webpack_require__(961);

	var _row = __webpack_require__(318);

	var _row2 = _interopRequireDefault(_row);

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _typeof2 = __webpack_require__(37);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _defineProperty2 = __webpack_require__(7);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(6);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(5);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _css5 = __webpack_require__(160);

	var _datePicker = __webpack_require__(138);

	var _datePicker2 = _interopRequireDefault(_datePicker);

	var _css6 = __webpack_require__(102);

	var _checkbox = __webpack_require__(91);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	var _css7 = __webpack_require__(93);

	var _radio = __webpack_require__(74);

	var _radio2 = _interopRequireDefault(_radio);

	var _css8 = __webpack_require__(1524);

	var _select = __webpack_require__(103);

	var _select2 = _interopRequireDefault(_select);

	var _css9 = __webpack_require__(63);

	var _form = __webpack_require__(59);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _AiFormItem = __webpack_require__(379);

	var _AiFormItem2 = _interopRequireDefault(_AiFormItem);

	var _moment = __webpack_require__(22);

	var _moment2 = _interopRequireDefault(_moment);

	var _component = __webpack_require__(13);

	var _component2 = _interopRequireDefault(_component);

	var _aiForm3 = __webpack_require__(158);

	var _dataList5 = __webpack_require__(35);

	var _AiForm = __webpack_require__(974);

	var _AiForm2 = _interopRequireDefault(_AiForm);

	var _redux = __webpack_require__(47);

	var _dataFormat = __webpack_require__(172);

	var _global = __webpack_require__(15);

	var _actionType = __webpack_require__(25);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	_moment2["default"].locale('zh-cn');
	var FormItem = _form2["default"].Item;
	var Option = _select2["default"].Option;
	var RadioButton = _radio2["default"].Button;
	var RadioGroup = _radio2["default"].Group;
	var CheckboxGroup = _checkbox2["default"].Group;
	var MonthPicker = _datePicker2["default"].MonthPicker,
	    RangePicker = _datePicker2["default"].RangePicker;

	//form表单提交API接口
	//var submitApi="";

	var AiForm = function (_Component) {
	    (0, _inherits3["default"])(AiForm, _Component);

	    function AiForm(props) {
	        (0, _classCallCheck3["default"])(this, AiForm);

	        //获取表单提交接口
	        //submitApi = props.submitApi;
	        return (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));
	    }

	    AiForm.prototype.componentDidMount = function componentDidMount() {
	        _global.Global.mark({
	            aiForm: (0, _defineProperty3["default"])({}, this.props.id, {
	                form: this.props.form
	            })
	        });

	        if (this.props.perennity && this.props.state && this.props.state.config && this.props.state.config.data) {
	            console.log('aiForm ' + this.props.id + " is perennity");
	        } else {
	            if (this.props.detailMsg) {
	                var detailMsg = this.props.detailMsg;
	                this.props.actions.requestStepDetailMsg(detailMsg, this.props.config, this, this.props.id); //json
	            } else {
	                if ((0, _typeof3["default"])(this.props.config) == 'object' && this.props.config.apiName) {

	                    this.props.actions.requestTestMyForm((0, _extends3["default"])({}, this.props.config, { jsonpArgs: (0, _extends3["default"])({}, this.props.config.jsonpArgs, { target: this }) }), this.props.id);
	                } else {
	                    this.props.actions.readDict(this.props.config);
	                    this.props.actions.requestInitMyForm(this.props.config, this.props.id);
	                }
	            }
	        }
	    };

	    AiForm.prototype.handleSubmit = function handleSubmit(e) {
	        var _this2 = this;

	        e.preventDefault();
	        this.props.form.validateFieldsAndScroll(function (err, values) {
	            if (!err) {
	                console.log('Received values of form: ', values);
	                // 提交表单
	                //this.props.actions.submitAct(this.props.submitApi,values)
	                if (values.button) {
	                    delete values.button;
	                }
	                var key = void 0;

	                for (key in values) {
	                    if (values[key] == "_all_") {
	                        delete values[key];
	                    }
	                }
	                if (_this2.props.onSubmit) {
	                    _this2.props.onSubmit(values);
	                } else {
	                    console.log('valuse=: ', values);
	                }
	            }
	        });
	    };

	    //slect下拉联动


	    AiForm.prototype.handleChange = function handleChange(args, linkage, value) {
	        //"linkage":[{"field":"methods","value":"rest","type":"replace","data":"{"name":"请求方法","type":"select","field":"sex","dictId":"requestMode","placeholder":"请选择..."}"}]},
	        {/* if(linkage[0].val==value){
	            args.map((arg,i)=>{
	            if(arg.field==linkage[0].field){
	            args[i]=linkage[0].data;
	            }
	            })
	            }*/}
	    };

	    AiForm.prototype.getChange = function getChange(arg, event) {
	        //替换值
	        console.log("arg=" + arg.field);
	        console.log("id=" + this.props.id);
	        var field = arg.field;
	        var id = this.props.id;
	        var code = arg.code ? arg.code : "";
	        var value = "";
	        if (arg.type == "input") {
	            console.log("event=" + event.target.value);
	            value = event.target.value;
	        } else {
	            console.log("event=" + event);
	            value = event;
	        }

	        this.props.actions.saveStepForm(id, field, value, code);
	    };

	    AiForm.prototype.customChange = function customChange(arg, event) {
	        //替换值
	        console.log("id=" + event.id);
	        console.log("value=" + event.value);
	        //this.props.actions.saveStepForm(id,field,value);
	    };

	    AiForm.prototype.render = function render() {
	        var _this3 = this;

	        try {
	            var _ret = function () {
	                var state = _this3.props.state;
	                //return <div>{this.props.id}</div>
	                if (state && state.config && state.config.msg) return {
	                        v: _react2["default"].createElement(
	                            'div',
	                            null,
	                            'msg:',
	                            state.config.msg
	                        )
	                    };

	                if (!_this3.props.state || !_this3.props.state.config || !_this3.props.state.config.data || _this3.props.state.config.data.length == 0) return {
	                        v: _react2["default"].createElement(
	                            'div',
	                            null,
	                            '...'
	                        )
	                    };

	                var args = _this3.props.state.config.data;
	                var getFieldDecorator = _this3.props.form.getFieldDecorator;


	                var all = [];
	                //获取下拉框的field条件
	                var dictInterfaces = [];
	                var columnIndex = -1;
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;

	                try {
	                    var _loop = function _loop() {
	                        var formList = _step.value;

	                        columnIndex++;
	                        var children = [];
	                        var dataList = formList.data;
	                        var col = formList.column ? formList.column : 1;
	                        //框架默认页面分为24份
	                        var colSpan = 24 / col;
	                        var offset = 0;
	                        var code = _this3.props.id;
	                        if (formList.showTitle ? formList.showTitle : false) {
	                            all.push(_react2["default"].createElement(
	                                'div',
	                                { key: 'aiTitle' + columnIndex, className: "formListTitle" },
	                                _react2["default"].createElement(_icon2["default"], { className: "titleIcon", type: formList.titleIcon }),
	                                _react2["default"].createElement(
	                                    'span',
	                                    { className: "title" },
	                                    formList.title
	                                )
	                            ));
	                        }

	                        //自定义标签
	                        if (typeof formList.data == "function") {
	                            children.push(_react2["default"].createElement(
	                                _col2["default"],
	                                { key: 'column' + columnIndex, span: colSpan, offset: offset },
	                                formList.data(_this3.props.form)
	                            ));
	                        } else if (Array.isArray(dataList)) {
	                            formList.code = code;
	                            dataList.forEach(function (arg, i) {
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

	                                if (arg.type == null || arg.type == "") {
	                                    // let fun = arg.value();
	                                    //if(fun.props && fun.props.children && fun.props.children.props)
	                                    //fun.props.children.props = {...fun.props.children.props,onChange:this.customChange.bind(this,fun.props.children.props)}
	                                    if (mode != "hidden") {
	                                        children.push(_react2["default"].createElement(
	                                            _col2["default"],
	                                            (0, _extends3["default"])({ span: colSpan, key: "aiItem" + columnIndex + "_" + i, offset: offset }, displayMode),
	                                            typeof arg.value == 'function' ? arg.value() : arg
	                                        ));
	                                    }
	                                } else {
	                                    arg.code = code;
	                                    if (arg.type == "upload" && arg.props && arg.props.onChange) {
	                                        arg.props = (0, _extends3["default"])({}, arg.props);
	                                    } else {
	                                        arg.props = (0, _extends3["default"])({}, arg.props, { onChange: _this3.getChange.bind(_this3, arg) });
	                                    }
	                                    children.push(_react2["default"].createElement(_AiFormItem2["default"], { key: "aiItem" + columnIndex + "_" + i, arg: arg, form: _this3.props.form, spanPerCol: colSpan, dicts: _this3.props.dicts, state: _this3.props.state, columnIndex: columnIndex, itemIndex: i }));
	                                }
	                            });
	                        } else {
	                            children.push(_react2["default"].createElement(
	                                _col2["default"],
	                                { span: colSpan, offset: offset, key: 'column' + columnIndex },
	                                formList.data
	                            ));
	                        }
	                        var buttons = [];
	                        formList.buttonConfigs && formList.buttonConfigs.buttons && formList.buttonConfigs.buttons.map(function (button, btnIndex) {
	                            var customProps = button.props ? button.props : {};
	                            var displayMode = {};
	                            var mode = void 0;
	                            if (button.preRender) {
	                                mode = button.preRender();
	                                if (mode == 'hidden') {
	                                    displayMode = { style: { visibility: mode } };
	                                } else if (mode == "none") {
	                                    displayMode = { style: { display: mode } };
	                                }
	                            }
	                            customProps = (0, _extends3["default"])({}, customProps, { style: (0, _extends3["default"])({}, customProps.style, displayMode) });

	                            buttons.push(_react2["default"].createElement(
	                                'div',
	                                { key: 'buttonConfigs' + btnIndex },
	                                mode != "hidden" && _react2["default"].createElement(
	                                    _button2["default"],
	                                    (0, _extends3["default"])({ className: "aiFormBtn", onClick: function () {
	                                            if (button.value == '取消' || button.value == "返回") {
	                                                if (button.mark) {
	                                                    var mark = button.mark;
	                                                    _global.Global.mark({ dataList: (0, _defineProperty3["default"])({}, mark, { detailMsgDataApi: null }) });
	                                                    _global.Global.mark({ dataList: (0, _defineProperty3["default"])({}, mark, { selectedRows: null }) });
	                                                    //清除可编辑表，eg：我管理的目录编辑之后，清除aiFormTable数据
	                                                    if (_global.Global.getState().aiFormTable[mark]) {
	                                                        _global.Global.mark({ aiFormTable: (0, _defineProperty3["default"])({}, mark, null) });
	                                                    }
	                                                }
	                                                _global.Global.mark({ aiForm: (0, _defineProperty3["default"])({}, this.props.id, null) });
	                                                window.history.back(-1); //回退到上一步
	                                            } else {
	                                                if (formList.buttonConfigs && formList.buttonConfigs.getValue) {
	                                                    var config = formList.buttonConfigs.onSubmitApi;
	                                                    var params = formList.buttonConfigs.getValue;
	                                                    var value = (0, _dataFormat.getAiFormValue)(_global.Global.getState(), params.id, params.index);
	                                                    if (formList.buttonConfigs.changeValue) {
	                                                        var param = formList.buttonConfigs.changeValue;
	                                                        if (value[param.key] != "") {
	                                                            value[param.key] = value[param.key].format(param.format);
	                                                        }
	                                                    }
	                                                    config.body = (0, _extends3["default"])({}, config.body, value);
	                                                    if (button.mark) {
	                                                        var _mark = button.mark;
	                                                        _global.Global.mark({ dataList: (0, _defineProperty3["default"])({}, _mark, { detailMsgDataApi: null }) });
	                                                        _global.Global.mark({ dataList: (0, _defineProperty3["default"])({}, _mark, { selectedRows: null }) });
	                                                    }
	                                                    this.props.actions.onSubmitAction(config);
	                                                }
	                                            }
	                                        }.bind(_this3) }, customProps),
	                                    button.value ? button.value : "按钮"
	                                )
	                            ));
	                        });
	                        formList.buttonConfigs && formList.buttonConfigs.buttons && children.push(_react2["default"].createElement(
	                            'div',
	                            { key: "buttonConfigs" + columnIndex },
	                            _react2["default"].createElement(
	                                _col2["default"],
	                                { span: 24, key: 'btnsCon' + columnIndex, offset: offset, style: { position: "fixed", zIndex: "998", bottom: "5%", right: "100" } },
	                                buttons
	                            )
	                        ));

	                        //合并
	                        all = all.concat(_react2["default"].createElement(
	                            'div',
	                            { key: "childrenContent" + columnIndex, className: "childrenContent" },
	                            children
	                        ));
	                    };

	                    for (var _iterator = (0, _getIterator3["default"])(args), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        _loop();
	                    }
	                } catch (err) {
	                    _didIteratorError = true;
	                    _iteratorError = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion && _iterator["return"]) {
	                            _iterator["return"]();
	                        }
	                    } finally {
	                        if (_didIteratorError) {
	                            throw _iteratorError;
	                        }
	                    }
	                }

	                return {
	                    v: _react2["default"].createElement(
	                        _row2["default"],
	                        { style: { overflowY: "auto", height: "100%" } },
	                        _react2["default"].createElement(
	                            _form2["default"],
	                            {
	                                onSubmit: _this3.handleSubmit.bind(_this3),
	                                horizontal: true,
	                                className: 'ant-advanced-search-form' },
	                            all
	                        )
	                    )
	                };
	            }();

	            if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3["default"])(_ret)) === "object") return _ret.v;
	        } catch (ex) {
	            console.log("error:", ex.trace);
	            return _react2["default"].createElement(
	                'div',
	                null,
	                '\u9875\u9762\u6E32\u67D3\u9519\u8BEF:',
	                ex.message
	            );
	        }
	    };

	    return AiForm;
	}(_react.Component);

	var Demo = _form2["default"].create()(AiForm);

	exports["default"] = (0, _component2["default"])('aiForm', { requestInitMyForm: _aiForm3.requestInitMyForm, requestTestMyForm: _aiForm3.requestTestMyForm, readDict: _aiForm3.readDict, updateOneRow: _aiForm3.updateOneRow, saveStepForm: _aiForm3.saveStepForm, requestStepDetailMsg: _dataList5.requestStepDetailMsg, onSubmitAction: _aiForm3.onSubmitAction }, function (state) {
	    return { dicts: state.dicts };
	})(Demo);
	module.exports = exports['default'];

/***/ },

/***/ 118:
/***/ function(module, exports, __webpack_require__) {

	/* components */
	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _Router2 = __webpack_require__(1005);

	var _Router3 = _interopRequireDefault(_Router2);

	exports.Router = _Router3['default'];

	var _Link2 = __webpack_require__(891);

	var _Link3 = _interopRequireDefault(_Link2);

	exports.Link = _Link3['default'];

	var _IndexLink2 = __webpack_require__(999);

	var _IndexLink3 = _interopRequireDefault(_IndexLink2);

	exports.IndexLink = _IndexLink3['default'];

	/* components (configuration) */

	var _IndexRedirect2 = __webpack_require__(1000);

	var _IndexRedirect3 = _interopRequireDefault(_IndexRedirect2);

	exports.IndexRedirect = _IndexRedirect3['default'];

	var _IndexRoute2 = __webpack_require__(1001);

	var _IndexRoute3 = _interopRequireDefault(_IndexRoute2);

	exports.IndexRoute = _IndexRoute3['default'];

	var _Redirect2 = __webpack_require__(892);

	var _Redirect3 = _interopRequireDefault(_Redirect2);

	exports.Redirect = _Redirect3['default'];

	var _Route2 = __webpack_require__(1003);

	var _Route3 = _interopRequireDefault(_Route2);

	exports.Route = _Route3['default'];

	/* mixins */

	var _History2 = __webpack_require__(998);

	var _History3 = _interopRequireDefault(_History2);

	exports.History = _History3['default'];

	var _Lifecycle2 = __webpack_require__(1002);

	var _Lifecycle3 = _interopRequireDefault(_Lifecycle2);

	exports.Lifecycle = _Lifecycle3['default'];

	var _RouteContext2 = __webpack_require__(1004);

	var _RouteContext3 = _interopRequireDefault(_RouteContext2);

	exports.RouteContext = _RouteContext3['default'];

	/* utils */

	var _useRoutes2 = __webpack_require__(516);

	var _useRoutes3 = _interopRequireDefault(_useRoutes2);

	exports.useRoutes = _useRoutes3['default'];

	var _RouteUtils = __webpack_require__(163);

	exports.createRoutes = _RouteUtils.createRoutes;

	var _RoutingContext2 = __webpack_require__(893);

	var _RoutingContext3 = _interopRequireDefault(_RoutingContext2);

	exports.RoutingContext = _RoutingContext3['default'];

	var _PropTypes2 = __webpack_require__(193);

	var _PropTypes3 = _interopRequireDefault(_PropTypes2);

	exports.PropTypes = _PropTypes3['default'];

	var _match2 = __webpack_require__(1011);

	var _match3 = _interopRequireDefault(_match2);

	exports.match = _match3['default'];

	var _Router4 = _interopRequireDefault(_Router2);

	exports['default'] = _Router4['default'];

/***/ },

/***/ 158:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.setDefaultValue = exports.readDict = exports.saveStepForm = exports.updateOneRow = exports.onSubmitAction = exports.submitDemo = exports.requestTestMyForm = exports.requestInitMyForm = undefined;

	var _defineProperty2 = __webpack_require__(7);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _actionType = __webpack_require__(25);

	var Types = _interopRequireWildcard(_actionType);

	var _api = __webpack_require__(40);

	var _global = __webpack_require__(15);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	// home action
	var requestInitMyForm = exports.requestInitMyForm = function requestInitMyForm(config, id) {
	    return {
	        //[API]:{types:Types.initMyForm.initMyFormApi}
	        type: Types.aiForm.init,
	        config: config,
	        id: id
	    };
	};

	var requestTestMyForm = exports.requestTestMyForm = function requestTestMyForm(api, id) {
	    _global.Global.requestApi(api, Types.aiForm.initMyFormApi, {
	        aiForm: (0, _defineProperty3["default"])({}, id, {
	            config: null
	        })

	    });
	    //[API]:{types:Types.aiForm.initMyFormApi,apiConfig:api},
	    //id:id
	};
	var submitDemo = exports.submitDemo = function submitDemo(values, id) {
	    var _ref;

	    return _ref = {}, (0, _defineProperty3["default"])(_ref, _api.API, { types: Types.aiForm.submitFormApi, apiConfig: { apiName: "onsubmitTest" } }), (0, _defineProperty3["default"])(_ref, 'id', id), (0, _defineProperty3["default"])(_ref, 'values', values), _ref;
	};
	var onSubmitAction = exports.onSubmitAction = function onSubmitAction(config) {
	    var _ref2;

	    return _ref2 = {}, (0, _defineProperty3["default"])(_ref2, _api.API, { types: Types.aiForm.submitFormApi, apiConfig: config }), (0, _defineProperty3["default"])(_ref2, 'config', config), _ref2;
	};
	/**
	 * 更新一整行数据
	 * @param row
	 * @param id
	 * @param rowIndex
	 */
	var updateOneRow = exports.updateOneRow = function updateOneRow(row, id, rowIndex) {
	    return {
	        type: Types.aiForm.updateOneRow,
	        rows: row,
	        id: id,
	        rowIndex: rowIndex
	    };
	};
	var saveStepForm = exports.saveStepForm = function saveStepForm(id, field, value, code) {
	    return {
	        type: Types.aiForm.saveStepForm,
	        field: field,
	        id: id,
	        value: value,
	        code: code
	    };
	};
	/**
	 * 提交表单
	 * @param config  接口参数
	 * @param values  表单提交数据
	 */
	//获取字典
	var readDict = exports.readDict = function readDict(config) {
	    //todo: get dicts form config
	    var dicts = [];
	    var customDicts = [];
	    config.data && config.data.length > 0 && config.data.map(function (forms) {
	        forms.data && forms.data.length > 0 && forms.data.filter(function (form) {
	            return form.dictId != null;
	        }).map(function (form, i) {
	            if (form.defaultValue != undefined) {
	                form.value = form.defaultValue;
	            }
	            if (form.dictApi) {
	                var customDict = [];
	                customDict.dictApi = form.dictApi;
	                customDict.dictId = form.dictId;
	                customDicts.push(customDict);
	            } else {
	                dicts.push(form.dictId);
	            }
	        });
	    });
	    //getDicts 获取字典表接口
	    setDefaultValue(config);
	    if (dicts.length == 0 && !customDicts) return null;
	    return { type: Types.aiForm.readDict, dicts: { apiName: "getDicts", body: dicts }, customApi: customDicts };
	};

	var setDefaultValue = exports.setDefaultValue = function setDefaultValue(config) {
	    //todo: get dicts form config
	    config.data && config.data.length > 0 && config.data.map(function (forms) {
	        forms.data && forms.data.length > 0 && forms.data.map(function (form, i) {
	            if (form.defaultValue != undefined) {
	                form.value = form.defaultValue;
	            }
	        });
	    });
	};

/***/ },

/***/ 163:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.isReactChildren = isReactChildren;
	exports.createRouteFromReactElement = createRouteFromReactElement;
	exports.createRoutesFromReactChildren = createRoutesFromReactChildren;
	exports.createRoutes = createRoutes;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _warning = __webpack_require__(50);

	var _warning2 = _interopRequireDefault(_warning);

	function isValidChild(object) {
	  return object == null || _react2['default'].isValidElement(object);
	}

	function isReactChildren(object) {
	  return isValidChild(object) || Array.isArray(object) && object.every(isValidChild);
	}

	function checkPropTypes(componentName, propTypes, props) {
	  componentName = componentName || 'UnknownComponent';

	  for (var propName in propTypes) {
	    if (propTypes.hasOwnProperty(propName)) {
	      var error = propTypes[propName](props, propName, componentName);

	      /* istanbul ignore if: error logging */
	      if (error instanceof Error)  true ? _warning2['default'](false, error.message) : undefined;
	    }
	  }
	}

	function createRoute(defaultProps, props) {
	  return _extends({}, defaultProps, props);
	}

	function createRouteFromReactElement(element) {
	  var type = element.type;
	  var route = createRoute(type.defaultProps, element.props);

	  if (type.propTypes) checkPropTypes(type.displayName || type.name, type.propTypes, route);

	  if (route.children) {
	    var childRoutes = createRoutesFromReactChildren(route.children, route);

	    if (childRoutes.length) route.childRoutes = childRoutes;

	    delete route.children;
	  }

	  return route;
	}

	/**
	 * Creates and returns a routes object from the given ReactChildren. JSX
	 * provides a convenient way to visualize how routes in the hierarchy are
	 * nested.
	 *
	 *   import { Route, createRoutesFromReactChildren } from 'react-router'
	 *   
	 *   const routes = createRoutesFromReactChildren(
	 *     <Route component={App}>
	 *       <Route path="home" component={Dashboard}/>
	 *       <Route path="news" component={NewsFeed}/>
	 *     </Route>
	 *   )
	 *
	 * Note: This method is automatically used when you provide <Route> children
	 * to a <Router> component.
	 */

	function createRoutesFromReactChildren(children, parentRoute) {
	  var routes = [];

	  _react2['default'].Children.forEach(children, function (element) {
	    if (_react2['default'].isValidElement(element)) {
	      // Component classes may have a static create* method.
	      if (element.type.createRouteFromReactElement) {
	        var route = element.type.createRouteFromReactElement(element, parentRoute);

	        if (route) routes.push(route);
	      } else {
	        routes.push(createRouteFromReactElement(element));
	      }
	    }
	  });

	  return routes;
	}

	/**
	 * Creates and returns an array of routes from the given object which
	 * may be a JSX route, a plain object route, or an array of either.
	 */

	function createRoutes(routes) {
	  if (isReactChildren(routes)) {
	    routes = createRoutesFromReactChildren(routes);
	  } else if (routes && !Array.isArray(routes)) {
	    routes = [routes];
	  }

	  return routes;
	}

/***/ },

/***/ 193:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.falsy = falsy;

	var _react = __webpack_require__(1);

	var func = _react.PropTypes.func;
	var object = _react.PropTypes.object;
	var arrayOf = _react.PropTypes.arrayOf;
	var oneOfType = _react.PropTypes.oneOfType;
	var element = _react.PropTypes.element;
	var shape = _react.PropTypes.shape;
	var string = _react.PropTypes.string;

	function falsy(props, propName, componentName) {
	  if (props[propName]) return new Error('<' + componentName + '> should not have a "' + propName + '" prop');
	}

	var history = shape({
	  listen: func.isRequired,
	  pushState: func.isRequired,
	  replaceState: func.isRequired,
	  go: func.isRequired
	});

	exports.history = history;
	var location = shape({
	  pathname: string.isRequired,
	  search: string.isRequired,
	  state: object,
	  action: string.isRequired,
	  key: string
	});

	exports.location = location;
	var component = oneOfType([func, string]);
	exports.component = component;
	var components = oneOfType([component, object]);
	exports.components = components;
	var route = oneOfType([object, element]);
	exports.route = route;
	var routes = oneOfType([route, arrayOf(route)]);

	exports.routes = routes;
	exports['default'] = {
	  falsy: falsy,
	  history: history,
	  location: location,
	  component: component,
	  components: components,
	  route: route
	};

/***/ },

/***/ 231:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var apiDemo = exports.apiDemo = ['requestApiDemo', 'receieveApiDemo', 'failedApiDemo'];
	var testApi1 = exports.testApi1 = ['requestTest1', 'receieveTest1', 'failedTest1'];
	var normalAct = exports.normalAct = 'normalAct';
	var jsonpDemo = exports.jsonpDemo = {
	    jsonpDemoApi: ['requestJsonpDemo', 'receieveJsonpDemo', 'failedJsonpDemo']
	};

/***/ },

/***/ 238:
17,

/***/ 295:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.compilePattern = compilePattern;
	exports.matchPattern = matchPattern;
	exports.getParamNames = getParamNames;
	exports.getParams = getParams;
	exports.formatPattern = formatPattern;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(75);

	var _invariant2 = _interopRequireDefault(_invariant);

	function escapeRegExp(string) {
	  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	}

	function escapeSource(string) {
	  return escapeRegExp(string).replace(/\/+/g, '/+');
	}

	function _compilePattern(pattern) {
	  var regexpSource = '';
	  var paramNames = [];
	  var tokens = [];

	  var match = undefined,
	      lastIndex = 0,
	      matcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|\*\*|\*|\(|\)/g;
	  while (match = matcher.exec(pattern)) {
	    if (match.index !== lastIndex) {
	      tokens.push(pattern.slice(lastIndex, match.index));
	      regexpSource += escapeSource(pattern.slice(lastIndex, match.index));
	    }

	    if (match[1]) {
	      regexpSource += '([^/?#]+)';
	      paramNames.push(match[1]);
	    } else if (match[0] === '**') {
	      regexpSource += '([\\s\\S]*)';
	      paramNames.push('splat');
	    } else if (match[0] === '*') {
	      regexpSource += '([\\s\\S]*?)';
	      paramNames.push('splat');
	    } else if (match[0] === '(') {
	      regexpSource += '(?:';
	    } else if (match[0] === ')') {
	      regexpSource += ')?';
	    }

	    tokens.push(match[0]);

	    lastIndex = matcher.lastIndex;
	  }

	  if (lastIndex !== pattern.length) {
	    tokens.push(pattern.slice(lastIndex, pattern.length));
	    regexpSource += escapeSource(pattern.slice(lastIndex, pattern.length));
	  }

	  return {
	    pattern: pattern,
	    regexpSource: regexpSource,
	    paramNames: paramNames,
	    tokens: tokens
	  };
	}

	var CompiledPatternsCache = {};

	function compilePattern(pattern) {
	  if (!(pattern in CompiledPatternsCache)) CompiledPatternsCache[pattern] = _compilePattern(pattern);

	  return CompiledPatternsCache[pattern];
	}

	/**
	 * Attempts to match a pattern on the given pathname. Patterns may use
	 * the following special characters:
	 *
	 * - :paramName     Matches a URL segment up to the next /, ?, or #. The
	 *                  captured string is considered a "param"
	 * - ()             Wraps a segment of the URL that is optional
	 * - *              Consumes (non-greedy) all characters up to the next
	 *                  character in the pattern, or to the end of the URL if
	 *                  there is none
	 * - **             Consumes (greedy) all characters up to the next character
	 *                  in the pattern, or to the end of the URL if there is none
	 *
	 * The return value is an object with the following properties:
	 *
	 * - remainingPathname
	 * - paramNames
	 * - paramValues
	 */

	function matchPattern(pattern, pathname) {
	  // Make leading slashes consistent between pattern and pathname.
	  if (pattern.charAt(0) !== '/') {
	    pattern = '/' + pattern;
	  }
	  if (pathname.charAt(0) !== '/') {
	    pathname = '/' + pathname;
	  }

	  var _compilePattern2 = compilePattern(pattern);

	  var regexpSource = _compilePattern2.regexpSource;
	  var paramNames = _compilePattern2.paramNames;
	  var tokens = _compilePattern2.tokens;

	  regexpSource += '/*'; // Capture path separators

	  // Special-case patterns like '*' for catch-all routes.
	  var captureRemaining = tokens[tokens.length - 1] !== '*';

	  if (captureRemaining) {
	    // This will match newlines in the remaining path.
	    regexpSource += '([\\s\\S]*?)';
	  }

	  var match = pathname.match(new RegExp('^' + regexpSource + '$', 'i'));

	  var remainingPathname = undefined,
	      paramValues = undefined;
	  if (match != null) {
	    if (captureRemaining) {
	      remainingPathname = match.pop();
	      var matchedPath = match[0].substr(0, match[0].length - remainingPathname.length);

	      // If we didn't match the entire pathname, then make sure that the match
	      // we did get ends at a path separator (potentially the one we added
	      // above at the beginning of the path, if the actual match was empty).
	      if (remainingPathname && matchedPath.charAt(matchedPath.length - 1) !== '/') {
	        return {
	          remainingPathname: null,
	          paramNames: paramNames,
	          paramValues: null
	        };
	      }
	    } else {
	      // If this matched at all, then the match was the entire pathname.
	      remainingPathname = '';
	    }

	    paramValues = match.slice(1).map(function (v) {
	      return v != null ? decodeURIComponent(v) : v;
	    });
	  } else {
	    remainingPathname = paramValues = null;
	  }

	  return {
	    remainingPathname: remainingPathname,
	    paramNames: paramNames,
	    paramValues: paramValues
	  };
	}

	function getParamNames(pattern) {
	  return compilePattern(pattern).paramNames;
	}

	function getParams(pattern, pathname) {
	  var _matchPattern = matchPattern(pattern, pathname);

	  var paramNames = _matchPattern.paramNames;
	  var paramValues = _matchPattern.paramValues;

	  if (paramValues != null) {
	    return paramNames.reduce(function (memo, paramName, index) {
	      memo[paramName] = paramValues[index];
	      return memo;
	    }, {});
	  }

	  return null;
	}

	/**
	 * Returns a version of the given pattern with params interpolated. Throws
	 * if there is a dynamic segment of the pattern for which there is no param.
	 */

	function formatPattern(pattern, params) {
	  params = params || {};

	  var _compilePattern3 = compilePattern(pattern);

	  var tokens = _compilePattern3.tokens;

	  var parenCount = 0,
	      pathname = '',
	      splatIndex = 0;

	  var token = undefined,
	      paramName = undefined,
	      paramValue = undefined;
	  for (var i = 0, len = tokens.length; i < len; ++i) {
	    token = tokens[i];

	    if (token === '*' || token === '**') {
	      paramValue = Array.isArray(params.splat) ? params.splat[splatIndex++] : params.splat;

	      !(paramValue != null || parenCount > 0) ?  true ? _invariant2['default'](false, 'Missing splat #%s for path "%s"', splatIndex, pattern) : _invariant2['default'](false) : undefined;

	      if (paramValue != null) pathname += encodeURI(paramValue);
	    } else if (token === '(') {
	      parenCount += 1;
	    } else if (token === ')') {
	      parenCount -= 1;
	    } else if (token.charAt(0) === ':') {
	      paramName = token.substring(1);
	      paramValue = params[paramName];

	      !(paramValue != null || parenCount > 0) ?  true ? _invariant2['default'](false, 'Missing "%s" parameter for path "%s"', paramName, pattern) : _invariant2['default'](false) : undefined;

	      if (paramValue != null) pathname += encodeURIComponent(paramValue);
	    } else {
	      pathname += token;
	    }
	  }

	  return pathname.replace(/\/+/g, '/');
	}

/***/ },

/***/ 515:
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.loopAsync = loopAsync;
	exports.mapAsync = mapAsync;

	function loopAsync(turns, work, callback) {
	  var currentTurn = 0,
	      isDone = false;

	  function done() {
	    isDone = true;
	    callback.apply(this, arguments);
	  }

	  function next() {
	    if (isDone) return;

	    if (currentTurn < turns) {
	      work.call(this, currentTurn++, next, done);
	    } else {
	      done.apply(this, arguments);
	    }
	  }

	  next();
	}

	function mapAsync(array, work, callback) {
	  var length = array.length;
	  var values = [];

	  if (length === 0) return callback(null, values);

	  var isDone = false,
	      doneCount = 0;

	  function done(index, error, value) {
	    if (isDone) return;

	    if (error) {
	      isDone = true;
	      callback(error);
	    } else {
	      values[index] = value;

	      isDone = ++doneCount === length;

	      if (isDone) callback(null, values);
	    }
	  }

	  array.forEach(function (item, index) {
	    work(item, index, function (error, value) {
	      done(index, error, value);
	    });
	  });
	}

/***/ },

/***/ 516:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _warning = __webpack_require__(50);

	var _warning2 = _interopRequireDefault(_warning);

	var _historyLibActions = __webpack_require__(137);

	var _historyLibUseQueries = __webpack_require__(1018);

	var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);

	var _computeChangedRoutes2 = __webpack_require__(1007);

	var _computeChangedRoutes3 = _interopRequireDefault(_computeChangedRoutes2);

	var _TransitionUtils = __webpack_require__(1006);

	var _isActive2 = __webpack_require__(1010);

	var _isActive3 = _interopRequireDefault(_isActive2);

	var _getComponents = __webpack_require__(1008);

	var _getComponents2 = _interopRequireDefault(_getComponents);

	var _matchRoutes = __webpack_require__(1012);

	var _matchRoutes2 = _interopRequireDefault(_matchRoutes);

	function hasAnyProperties(object) {
	  for (var p in object) {
	    if (object.hasOwnProperty(p)) return true;
	  }return false;
	}

	/**
	 * Returns a new createHistory function that may be used to create
	 * history objects that know about routing.
	 *
	 * Enhances history objects with the following methods:
	 *
	 * - listen((error, nextState) => {})
	 * - listenBeforeLeavingRoute(route, (nextLocation) => {})
	 * - match(location, (error, redirectLocation, nextState) => {})
	 * - isActive(pathname, query, indexOnly=false)
	 */
	function useRoutes(createHistory) {
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var routes = options.routes;

	    var historyOptions = _objectWithoutProperties(options, ['routes']);

	    var history = _historyLibUseQueries2['default'](createHistory)(historyOptions);
	    var state = {};

	    function isActive(pathname, query) {
	      var indexOnly = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

	      return _isActive3['default'](pathname, query, indexOnly, state.location, state.routes, state.params);
	    }

	    function createLocationFromRedirectInfo(_ref) {
	      var pathname = _ref.pathname;
	      var query = _ref.query;
	      var state = _ref.state;

	      return history.createLocation(history.createPath(pathname, query), state, _historyLibActions.REPLACE);
	    }

	    var partialNextState = undefined;

	    function match(location, callback) {
	      if (partialNextState && partialNextState.location === location) {
	        // Continue from where we left off.
	        finishMatch(partialNextState, callback);
	      } else {
	        _matchRoutes2['default'](routes, location, function (error, nextState) {
	          if (error) {
	            callback(error);
	          } else if (nextState) {
	            finishMatch(_extends({}, nextState, { location: location }), callback);
	          } else {
	            callback();
	          }
	        });
	      }
	    }

	    function finishMatch(nextState, callback) {
	      var _computeChangedRoutes = _computeChangedRoutes3['default'](state, nextState);

	      var leaveRoutes = _computeChangedRoutes.leaveRoutes;
	      var enterRoutes = _computeChangedRoutes.enterRoutes;

	      _TransitionUtils.runLeaveHooks(leaveRoutes);

	      _TransitionUtils.runEnterHooks(enterRoutes, nextState, function (error, redirectInfo) {
	        if (error) {
	          callback(error);
	        } else if (redirectInfo) {
	          callback(null, createLocationFromRedirectInfo(redirectInfo));
	        } else {
	          // TODO: Fetch components after state is updated.
	          _getComponents2['default'](nextState, function (error, components) {
	            if (error) {
	              callback(error);
	            } else {
	              // TODO: Make match a pure function and have some other API
	              // for "match and update state".
	              callback(null, null, state = _extends({}, nextState, { components: components }));
	            }
	          });
	        }
	      });
	    }

	    var RouteGuid = 1;

	    function getRouteID(route) {
	      return route.__id__ || (route.__id__ = RouteGuid++);
	    }

	    var RouteHooks = {};

	    function getRouteHooksForRoutes(routes) {
	      return routes.reduce(function (hooks, route) {
	        hooks.push.apply(hooks, RouteHooks[getRouteID(route)]);
	        return hooks;
	      }, []);
	    }

	    function transitionHook(location, callback) {
	      _matchRoutes2['default'](routes, location, function (error, nextState) {
	        if (nextState == null) {
	          // TODO: We didn't actually match anything, but hang
	          // onto error/nextState so we don't have to matchRoutes
	          // again in the listen callback.
	          callback();
	          return;
	        }

	        // Cache some state here so we don't have to
	        // matchRoutes() again in the listen callback.
	        partialNextState = _extends({}, nextState, { location: location });

	        var hooks = getRouteHooksForRoutes(_computeChangedRoutes3['default'](state, partialNextState).leaveRoutes);

	        var result = undefined;
	        for (var i = 0, len = hooks.length; result == null && i < len; ++i) {
	          // Passing the location arg here indicates to
	          // the user that this is a transition hook.
	          result = hooks[i](location);
	        }

	        callback(result);
	      });
	    }

	    function beforeUnloadHook() {
	      // Synchronously check to see if any route hooks want
	      // to prevent the current window/tab from closing.
	      if (state.routes) {
	        var hooks = getRouteHooksForRoutes(state.routes);

	        var message = undefined;
	        for (var i = 0, len = hooks.length; typeof message !== 'string' && i < len; ++i) {
	          // Passing no args indicates to the user that this is a
	          // beforeunload hook. We don't know the next location.
	          message = hooks[i]();
	        }

	        return message;
	      }
	    }

	    var unlistenBefore = undefined,
	        unlistenBeforeUnload = undefined;

	    /**
	     * Registers the given hook function to run before leaving the given route.
	     *
	     * During a normal transition, the hook function receives the next location
	     * as its only argument and must return either a) a prompt message to show
	     * the user, to make sure they want to leave the page or b) false, to prevent
	     * the transition.
	     *
	     * During the beforeunload event (in browsers) the hook receives no arguments.
	     * In this case it must return a prompt message to prevent the transition.
	     *
	     * Returns a function that may be used to unbind the listener.
	     */
	    function listenBeforeLeavingRoute(route, hook) {
	      // TODO: Warn if they register for a route that isn't currently
	      // active. They're probably doing something wrong, like re-creating
	      // route objects on every location change.
	      var routeID = getRouteID(route);
	      var hooks = RouteHooks[routeID];

	      if (hooks == null) {
	        var thereWereNoRouteHooks = !hasAnyProperties(RouteHooks);

	        hooks = RouteHooks[routeID] = [hook];

	        if (thereWereNoRouteHooks) {
	          // setup transition & beforeunload hooks
	          unlistenBefore = history.listenBefore(transitionHook);

	          if (history.listenBeforeUnload) unlistenBeforeUnload = history.listenBeforeUnload(beforeUnloadHook);
	        }
	      } else if (hooks.indexOf(hook) === -1) {
	        hooks.push(hook);
	      }

	      return function () {
	        var hooks = RouteHooks[routeID];

	        if (hooks != null) {
	          var newHooks = hooks.filter(function (item) {
	            return item !== hook;
	          });

	          if (newHooks.length === 0) {
	            delete RouteHooks[routeID];

	            if (!hasAnyProperties(RouteHooks)) {
	              // teardown transition & beforeunload hooks
	              if (unlistenBefore) {
	                unlistenBefore();
	                unlistenBefore = null;
	              }

	              if (unlistenBeforeUnload) {
	                unlistenBeforeUnload();
	                unlistenBeforeUnload = null;
	              }
	            }
	          } else {
	            RouteHooks[routeID] = newHooks;
	          }
	        }
	      };
	    }

	    /**
	     * This is the API for stateful environments. As the location
	     * changes, we update state and call the listener. We can also
	     * gracefully handle errors and redirects.
	     */
	    function listen(listener) {
	      // TODO: Only use a single history listener. Otherwise we'll
	      // end up with multiple concurrent calls to match.
	      return history.listen(function (location) {
	        if (state.location === location) {
	          listener(null, state);
	        } else {
	          match(location, function (error, redirectLocation, nextState) {
	            if (error) {
	              listener(error);
	            } else if (redirectLocation) {
	              history.transitionTo(redirectLocation);
	            } else if (nextState) {
	              listener(null, nextState);
	            } else {
	               true ? _warning2['default'](false, 'Location "%s" did not match any routes', location.pathname + location.search + location.hash) : undefined;
	            }
	          });
	        }
	      });
	    }

	    return _extends({}, history, {
	      isActive: isActive,
	      match: match,
	      listenBeforeLeavingRoute: listenBeforeLeavingRoute,
	      listen: listen
	    });
	  };
	}

	exports['default'] = useRoutes;
	module.exports = exports['default'];

/***/ },

/***/ 836:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(7);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(6);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(5);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _component = __webpack_require__(13);

	var _component2 = _interopRequireDefault(_component);

	var _ButtonComponetV = __webpack_require__(1307);

	var _ButtonComponetV2 = _interopRequireDefault(_ButtonComponetV);

	var _HeadComponent = __webpack_require__(965);

	var _HeadComponent2 = _interopRequireDefault(_HeadComponent);

	var _AiForm = __webpack_require__(36);

	var _AiForm2 = _interopRequireDefault(_AiForm);

	var _dataList3 = __webpack_require__(35);

	var _TableComponentV = __webpack_require__(1324);

	var _TableComponentV2 = _interopRequireDefault(_TableComponentV);

	var _DataList = __webpack_require__(238);

	var _DataList2 = _interopRequireDefault(_DataList);

	var _interfaces = __webpack_require__(33);

	var _interfaces2 = _interopRequireDefault(_interfaces);

	var _global = __webpack_require__(15);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var DataList = function (_Component) {
	    (0, _inherits3["default"])(DataList, _Component);

	    function DataList(props) {
	        (0, _classCallCheck3["default"])(this, DataList);

	        var _this = (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));

	        if (_this.props.perennity && _this.props.state && _this.props.state.getDataListApi) {
	            console.log("datalist", _this.props.id, "don't need update");
	        } else if (_this.props.configs && _this.props.configs.apiName) {
	            _this.props.actions.requestDataList(_this.props.configs, _this.props.id);
	        } else {}
	        if (!_this.props.perennity) {
	            _global.Global.mark({
	                dataList: (0, _defineProperty3["default"])({}, _this.props.id, {
	                    selectedRows: null
	                })
	            });
	        }
	        return _this;
	    }

	    DataList.prototype.componentDidMount = function componentDidMount() {
	        //--- init comp ---

	    };

	    DataList.prototype.componentWillUnmount = function componentWillUnmount() {};

	    DataList.prototype.onChange = function onChange() {
	        if (this.props.onChange) this.props.onChange();
	        if (this.props.state.getDataListApi.data.onChange) this.props.state.getDataListApi.data.onChange();
	    };

	    DataList.prototype.render = function render() {
	        var _this2 = this;

	        var state = this.props.state;
	        var isDataListApi = this.props.actions && state && state.getDataListApi && state.getDataListApi.data;
	        return state ? _react2["default"].createElement(
	            'div',
	            { className: 'moduleStyle' },
	            _react2["default"].createElement(
	                'div',
	                { style: { height: "100%" } },
	                _react2["default"].createElement(
	                    'div',
	                    { ref: function ref(dom) {
	                            _this2.headers = dom;
	                        } },
	                    _react2["default"].createElement(
	                        'div',
	                        { className: 'topComponents' },
	                        _react2["default"].createElement(
	                            'div',
	                            { className: 'headComponents' },
	                            this.props.state && this.props.state.getDataListApi && this.props.state.getDataListApi.data && this.props.state.getDataListApi.data.headConfig && _react2["default"].createElement(_HeadComponent2["default"], { perennity: this.props.perennity, id: this.props.id, dlActions: this.props.actions, state: this.props.state, buttonConfigs: this.props.state.getDataListApi.data.headConfig })
	                        ),
	                        _react2["default"].createElement(
	                            'div',
	                            { className: 'buttonComponents' },
	                            this.props.state && this.props.actions && this.props.state.getDataListApi && this.props.state.getDataListApi.data && this.props.state.getDataListApi.data.buttonConfigs && _react2["default"].createElement(_ButtonComponetV2["default"], { perennity: this.props.perennity, id: this.props.id, dlActions: this.props.actions, state: this.props.state, buttonConfigs: this.props.state.getDataListApi.data.buttonConfigs })
	                        )
	                    ),
	                    _react2["default"].createElement(
	                        'div',
	                        { className: 'searchForm' },
	                        this.props.state && this.props.state.getDataListApi && this.props.state.getDataListApi.data && this.props.state.getDataListApi.data.searchConfig && this.props.actions &&
	                        //this.props.actions.requestTableBodyData({...i,body:{...i.body,...j,page:1,size:5}},this.props.id);
	                        _react2["default"].createElement(_AiForm2["default"], { perennity: this.props.perennity, id: this.props.id, config: this.props.state.getDataListApi.data.searchConfig, onSubmit: function onSubmit(values) {
	                                _global.Global.mark({
	                                    dataList: (0, _defineProperty3["default"])({}, _this2.props.id, {
	                                        tableBodyDataApi: null,
	                                        currentPage: 0
	                                    })
	                                });
	                                _this2.props.actions.requestTableBodyData(_this2.props.id, null, 0, 15);
	                            } })
	                    )
	                ),
	                _react2["default"].createElement(
	                    'div',
	                    { className: 'tableComponents', style: { top: this.headers ? this.headers.offsetHeight : "64px" } },
	                    this.props.actions && this.props.state && this.props.state.getDataListApi && this.props.state.getDataListApi.data && this.props.state.getDataListApi.data.table && _react2["default"].createElement(_TableComponentV2["default"], { onChange: this.onChange.bind(this), perennity: this.props.perennity, id: this.props.id, configs: this.props.state.getDataListApi, dlActions: this.props.actions, dlState: this.props.state })
	                )
	            )
	        ) : _react2["default"].createElement(
	            'div',
	            null,
	            '....'
	        );
	    };

	    return DataList;
	}(_react.Component);
	/*import HeadComponent from '../components/HeadComponent';*/


	exports["default"] = (0, _component2["default"])('dataList', { requestAddData: _dataList3.requestAddData, requestDeleteData: _dataList3.requestDeleteData, requestDetailMsg: _dataList3.requestDetailMsg, requestSearchData: _dataList3.requestSearchData, requestUpateData: _dataList3.requestUpateData, requestDataList: _dataList3.requestDataList, requestTableBodyData: _dataList3.requestTableBodyData, setSelectedRowsToState: _dataList3.setSelectedRowsToState, requestDirection: _dataList3.requestDirection, showDataSource: _dataList3.showDataSource, getEquipmentInfo: _dataList3.getEquipmentInfo }, function (state) {
	    return { dicts: state.dicts };
	})(DataList);
	module.exports = exports['default'];

/***/ },

/***/ 891:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _React$PropTypes = _react2['default'].PropTypes;
	var bool = _React$PropTypes.bool;
	var object = _React$PropTypes.object;
	var string = _React$PropTypes.string;
	var func = _React$PropTypes.func;

	function isLeftClickEvent(event) {
	  return event.button === 0;
	}

	function isModifiedEvent(event) {
	  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
	}

	function isEmptyObject(object) {
	  for (var p in object) {
	    if (object.hasOwnProperty(p)) return false;
	  }return true;
	}

	/**
	 * A <Link> is used to create an <a> element that links to a route.
	 * When that route is active, the link gets the value of its
	 * `activeClassName` prop
	 *
	 * For example, assuming you have the following route:
	 *
	 *   <Route path="/posts/:postID" component={Post} />
	 *
	 * You could use the following component to link to that route:
	 *
	 *   <Link to={`/posts/${post.id}`} />
	 *
	 * Links may pass along location state and/or query string parameters
	 * in the state/query props, respectively.
	 *
	 *   <Link ... query={{ show: true }} state={{ the: 'state' }} />
	 */

	var Link = (function (_Component) {
	  _inherits(Link, _Component);

	  function Link() {
	    _classCallCheck(this, Link);

	    _Component.apply(this, arguments);
	  }

	  Link.prototype.handleClick = function handleClick(event) {
	    var allowTransition = true;

	    if (this.props.onClick) this.props.onClick(event);

	    if (isModifiedEvent(event) || !isLeftClickEvent(event)) return;

	    if (event.defaultPrevented === true) allowTransition = false;

	    // If target prop is set (e.g. to "_blank") let browser handle link.
	    /* istanbul ignore if: untestable with Karma */
	    if (this.props.target) {
	      if (!allowTransition) event.preventDefault();

	      return;
	    }

	    event.preventDefault();

	    if (allowTransition) {
	      var _props = this.props;
	      var state = _props.state;
	      var to = _props.to;
	      var query = _props.query;
	      var hash = _props.hash;

	      if (hash) to += hash;

	      this.context.history.pushState(state, to, query);
	    }
	  };

	  Link.prototype.render = function render() {
	    var _this = this;

	    var _props2 = this.props;
	    var to = _props2.to;
	    var query = _props2.query;
	    var hash = _props2.hash;
	    var state = _props2.state;
	    var activeClassName = _props2.activeClassName;
	    var activeStyle = _props2.activeStyle;
	    var onlyActiveOnIndex = _props2.onlyActiveOnIndex;

	    var props = _objectWithoutProperties(_props2, ['to', 'query', 'hash', 'state', 'activeClassName', 'activeStyle', 'onlyActiveOnIndex']);

	    // Manually override onClick.
	    props.onClick = function (e) {
	      return _this.handleClick(e);
	    };

	    // Ignore if rendered outside the context of history, simplifies unit testing.
	    var history = this.context.history;

	    if (history) {
	      props.href = history.createHref(to, query);

	      if (hash) props.href += hash;

	      if (activeClassName || activeStyle != null && !isEmptyObject(activeStyle)) {
	        if (history.isActive(to, query, onlyActiveOnIndex)) {
	          if (activeClassName) props.className += props.className === '' ? activeClassName : ' ' + activeClassName;

	          if (activeStyle) props.style = _extends({}, props.style, activeStyle);
	        }
	      }
	    }

	    return _react2['default'].createElement('a', props);
	  };

	  return Link;
	})(_react.Component);

	Link.contextTypes = {
	  history: object
	};

	Link.propTypes = {
	  to: string.isRequired,
	  query: object,
	  hash: string,
	  state: object,
	  activeStyle: object,
	  activeClassName: string,
	  onlyActiveOnIndex: bool.isRequired,
	  onClick: func
	};

	Link.defaultProps = {
	  onlyActiveOnIndex: false,
	  className: '',
	  style: {}
	};

	exports['default'] = Link;
	module.exports = exports['default'];

/***/ },

/***/ 892:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _invariant = __webpack_require__(75);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _RouteUtils = __webpack_require__(163);

	var _PatternUtils = __webpack_require__(295);

	var _PropTypes = __webpack_require__(193);

	var _React$PropTypes = _react2['default'].PropTypes;
	var string = _React$PropTypes.string;
	var object = _React$PropTypes.object;

	/**
	 * A <Redirect> is used to declare another URL path a client should
	 * be sent to when they request a given URL.
	 *
	 * Redirects are placed alongside routes in the route configuration
	 * and are traversed in the same manner.
	 */

	var Redirect = (function (_Component) {
	  _inherits(Redirect, _Component);

	  function Redirect() {
	    _classCallCheck(this, Redirect);

	    _Component.apply(this, arguments);
	  }

	  /* istanbul ignore next: sanity check */

	  Redirect.prototype.render = function render() {
	     true ?  true ? _invariant2['default'](false, '<Redirect> elements are for router configuration only and should not be rendered') : _invariant2['default'](false) : undefined;
	  };

	  return Redirect;
	})(_react.Component);

	Redirect.createRouteFromReactElement = function (element) {
	  var route = _RouteUtils.createRouteFromReactElement(element);

	  if (route.from) route.path = route.from;

	  route.onEnter = function (nextState, replaceState) {
	    var location = nextState.location;
	    var params = nextState.params;

	    var pathname = undefined;
	    if (route.to.charAt(0) === '/') {
	      pathname = _PatternUtils.formatPattern(route.to, params);
	    } else if (!route.to) {
	      pathname = location.pathname;
	    } else {
	      var routeIndex = nextState.routes.indexOf(route);
	      var parentPattern = Redirect.getRoutePattern(nextState.routes, routeIndex - 1);
	      var pattern = parentPattern.replace(/\/*$/, '/') + route.to;
	      pathname = _PatternUtils.formatPattern(pattern, params);
	    }

	    replaceState(route.state || location.state, pathname, route.query || location.query);
	  };

	  return route;
	};

	Redirect.getRoutePattern = function (routes, routeIndex) {
	  var parentPattern = '';

	  for (var i = routeIndex; i >= 0; i--) {
	    var route = routes[i];
	    var pattern = route.path || '';
	    parentPattern = pattern.replace(/\/*$/, '/') + parentPattern;

	    if (pattern.indexOf('/') === 0) break;
	  }

	  return '/' + parentPattern;
	};

	Redirect.propTypes = {
	  path: string,
	  from: string, // Alias for path
	  to: string.isRequired,
	  query: object,
	  state: object,
	  onEnter: _PropTypes.falsy,
	  children: _PropTypes.falsy
	};

	exports['default'] = Redirect;
	module.exports = exports['default'];

/***/ },

/***/ 893:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _invariant = __webpack_require__(75);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _RouteUtils = __webpack_require__(163);

	var _getRouteParams = __webpack_require__(1009);

	var _getRouteParams2 = _interopRequireDefault(_getRouteParams);

	var _React$PropTypes = _react2['default'].PropTypes;
	var array = _React$PropTypes.array;
	var func = _React$PropTypes.func;
	var object = _React$PropTypes.object;

	/**
	 * A <RoutingContext> renders the component tree for a given router state
	 * and sets the history object and the current location in context.
	 */

	var RoutingContext = (function (_Component) {
	  _inherits(RoutingContext, _Component);

	  function RoutingContext() {
	    _classCallCheck(this, RoutingContext);

	    _Component.apply(this, arguments);
	  }

	  RoutingContext.prototype.getChildContext = function getChildContext() {
	    var _props = this.props;
	    var history = _props.history;
	    var location = _props.location;

	    return { history: history, location: location };
	  };

	  RoutingContext.prototype.createElement = function createElement(component, props) {
	    return component == null ? null : this.props.createElement(component, props);
	  };

	  RoutingContext.prototype.render = function render() {
	    var _this = this;

	    var _props2 = this.props;
	    var history = _props2.history;
	    var location = _props2.location;
	    var routes = _props2.routes;
	    var params = _props2.params;
	    var components = _props2.components;

	    var element = null;

	    if (components) {
	      element = components.reduceRight(function (element, components, index) {
	        if (components == null) return element; // Don't create new children; use the grandchildren.

	        var route = routes[index];
	        var routeParams = _getRouteParams2['default'](route, params);
	        var props = {
	          history: history,
	          location: location,
	          params: params,
	          route: route,
	          routeParams: routeParams,
	          routes: routes
	        };

	        if (_RouteUtils.isReactChildren(element)) {
	          props.children = element;
	        } else if (element) {
	          for (var prop in element) {
	            if (element.hasOwnProperty(prop)) props[prop] = element[prop];
	          }
	        }

	        if (typeof components === 'object') {
	          var elements = {};

	          for (var key in components) {
	            if (components.hasOwnProperty(key)) {
	              // Pass through the key as a prop to createElement to allow
	              // custom createElement functions to know which named component
	              // they're rendering, for e.g. matching up to fetched data.
	              elements[key] = _this.createElement(components[key], _extends({
	                key: key }, props));
	            }
	          }

	          return elements;
	        }

	        return _this.createElement(components, props);
	      }, element);
	    }

	    !(element === null || element === false || _react2['default'].isValidElement(element)) ?  true ? _invariant2['default'](false, 'The root route must render a single element') : _invariant2['default'](false) : undefined;

	    return element;
	  };

	  return RoutingContext;
	})(_react.Component);

	RoutingContext.propTypes = {
	  history: object.isRequired,
	  createElement: func.isRequired,
	  location: object.isRequired,
	  routes: array.isRequired,
	  params: object.isRequired,
	  components: array.isRequired
	};

	RoutingContext.defaultProps = {
	  createElement: _react2['default'].createElement
	};

	RoutingContext.childContextTypes = {
	  history: object.isRequired,
	  location: object.isRequired
	};

	exports['default'] = RoutingContext;
	module.exports = exports['default'];

/***/ },

/***/ 961:
377,

/***/ 965:
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

	var _css = __webpack_require__(1581);

	var _modal = __webpack_require__(49);

	var _modal2 = _interopRequireDefault(_modal);

	var _css2 = __webpack_require__(30);

	var _button = __webpack_require__(28);

	var _button2 = _interopRequireDefault(_button);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _moment = __webpack_require__(22);

	var _moment2 = _interopRequireDefault(_moment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	_moment2["default"].locale('zh-cn');
	var ButtonGroup = _button2["default"].Group;
	var confirm = _modal2["default"].confirm;

	var HeadComponent = function (_Component) {
	    (0, _inherits3["default"])(HeadComponent, _Component);

	    function HeadComponent(props) {
	        (0, _classCallCheck3["default"])(this, HeadComponent);
	        return (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));
	    }

	    HeadComponent.prototype.render = function render() {
	        var buttonConfigs = this.props.buttonConfigs;
	        var buttonGroup = buttonConfigs.map(function (buttonList, i) {
	            var btn = typeof buttonList.headName == 'function' ? buttonList.headName() : buttonList.headName;
	            //if(!btn.key) btn.key='list_head_btn_'+i;
	            return btn;
	        });
	        return _react2["default"].createElement(
	            'div',
	            null,
	            _react2["default"].createElement(
	                ButtonGroup,
	                null,
	                buttonGroup
	            )
	        );
	    };

	    return HeadComponent;
	}(_react.Component);

	exports["default"] = HeadComponent;
	module.exports = exports['default'];

/***/ },

/***/ 967:
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

	var _css = __webpack_require__(1581);

	var _modal = __webpack_require__(49);

	var _modal2 = _interopRequireDefault(_modal);

	var _css2 = __webpack_require__(44);

	var _input = __webpack_require__(85);

	var _input2 = _interopRequireDefault(_input);

	var _css3 = __webpack_require__(255);

	var _switch = __webpack_require__(244);

	var _switch2 = _interopRequireDefault(_switch);

	var _css4 = __webpack_require__(233);

	var _inputNumber = __webpack_require__(197);

	var _inputNumber2 = _interopRequireDefault(_inputNumber);

	var _css5 = __webpack_require__(254);

	var _slider = __webpack_require__(243);

	var _slider2 = _interopRequireDefault(_slider);

	var _css6 = __webpack_require__(160);

	var _datePicker = __webpack_require__(138);

	var _datePicker2 = _interopRequireDefault(_datePicker);

	var _css7 = __webpack_require__(171);

	var _timePicker = __webpack_require__(245);

	var _timePicker2 = _interopRequireDefault(_timePicker);

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _css8 = __webpack_require__(30);

	var _button = __webpack_require__(28);

	var _button2 = _interopRequireDefault(_button);

	var _css9 = __webpack_require__(93);

	var _radio = __webpack_require__(74);

	var _radio2 = _interopRequireDefault(_radio);

	var _css10 = __webpack_require__(1524);

	var _select = __webpack_require__(103);

	var _select2 = _interopRequireDefault(_select);

	var _css11 = __webpack_require__(63);

	var _form = __webpack_require__(59);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _moment = __webpack_require__(22);

	var _moment2 = _interopRequireDefault(_moment);

	var _component = __webpack_require__(13);

	var _component2 = _interopRequireDefault(_component);

	var _customComponent = __webpack_require__(1293);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	_moment2["default"].locale('zh-cn');
	var FormItem = _form2["default"].Item;
	var Option = _select2["default"].Option;
	var RadioButton = _radio2["default"].Button;
	var RadioGroup = _radio2["default"].Group;

	var Demo = _form2["default"].create()(_react2["default"].createClass({
	    displayName: 'Demo',
	    getInitialState: function getInitialState() {
	        return { visible: false };
	    },
	    handleSubmit: function handleSubmit() {
	        console.log(this.props.form.getFieldsValue());
	        var values = this.props.form.getFieldsValue();
	        this.hideModal();
	        // this.props.onOk(values);
	        // this.props.buttonActions.requestDeleteData();
	        if (this.props.pageName == '新增') {
	            this.props.buttonActions.requestAddData();
	        } else if (this.props.pageName == '编辑') {
	            this.props.buttonActions.requestUpateData();
	        }
	    },
	    showModal: function showModal() {
	        this.setState({ visible: true });
	    },
	    hideModal: function hideModal() {
	        this.setState({ visible: false });
	    },
	    normFile: function normFile(e) {
	        if (Array.isArray(e)) {
	            return e;
	        }
	        return e && e.fileList;
	    },
	    render: function render() {
	        if (!this.props.args || this.props.args.length == 0) return _react2["default"].createElement(
	            'div',
	            null,
	            '\u6682\u65E0\u6570\u636E'
	        );
	        var args = this.props.args;
	        var name = this.props.pageName;
	        var getFieldDecorator = this.props.form.getFieldDecorator;

	        return _react2["default"].createElement(
	            'div',
	            null,
	            _react2["default"].createElement(
	                _button2["default"],
	                { type: 'primary', onClick: this.showModal, icon: 'cloud' },
	                name
	            ),
	            _react2["default"].createElement(
	                _modal2["default"],
	                { title: name + "页面", visible: this.state.visible, onOk: this.handleSubmit, onCancel: this.hideModal, maskClosable: false },
	                _react2["default"].createElement(
	                    _form2["default"],
	                    { onSubmit: this.onSubmit },
	                    args.map(function (arg, i) {
	                        //const labelCol = arg.labelCol;
	                        //const wrapperCol = arg.wrapperCol;
	                        return _react2["default"].createElement(
	                            FormItem,
	                            {
	                                label: arg.name,
	                                labelCol: { span: 4 },
	                                wrapperCol: { span: 20 }
	                            },
	                            function () {
	                                switch (arg.type) {
	                                    case 'timePicker':
	                                        return _react2["default"].createElement(_timePicker2["default"], (0, _extends3["default"])({ defaultValue: (0, _moment2["default"])(arg.defaultValue, 'HH:mm:ss') }, getFieldDecorator(arg.field, { initialValue: (0, _moment2["default"])(arg.defaultValue, 'HH:MM') })));
	                                    case 'datePicker':
	                                        return _react2["default"].createElement(_datePicker2["default"], (0, _extends3["default"])({ defaultValue: (0, _moment2["default"])(new Date(), 'YYYY-MM-DD') }, getFieldDecorator(arg.field, { initialValue: (0, _moment2["default"])(new Date(), 'YYYY-MM-DD') })));
	                                    case 'slider':
	                                        return _react2["default"].createElement(_slider2["default"], (0, _extends3["default"])({ min: arg.min, max: arg.max }, getFieldDecorator(arg.field, { initialValue: arg.defaultValue })));
	                                    case 'inputNumber':
	                                        return _react2["default"].createElement(_inputNumber2["default"], (0, _extends3["default"])({ defaultValue: arg.defaultValue }, getFieldDecorator(arg.field, { initialValue: arg.defaultValue })));
	                                    case 'switch':
	                                        return _react2["default"].createElement(_switch2["default"], (0, _extends3["default"])({ defaultValue: arg.defaultValue }, getFieldDecorator(arg.field, { initialValue: arg.defaultValue, valuePropName: 'checked' })));
	                                    case 'checkbox':
	                                        return _react2["default"].createElement(CheckboxGroup, (0, _extends3["default"])({ defaultValue: arg.defaultValue, options: arg.options }, getFieldDecorator(arg.field, { initialValue: arg.defaultValue })));
	                                    case 'select':
	                                        return _react2["default"].createElement(
	                                            _select2["default"],
	                                            (0, _extends3["default"])({ defaultValue: arg.defaultValue }, getFieldDecorator(arg.field, { rules: arg.validate, initialValue: arg.defaultValue })),
	                                            arg.options.map(function (v) {
	                                                return _react2["default"].createElement(
	                                                    Option,
	                                                    { value: v },
	                                                    v
	                                                );
	                                            })
	                                        );
	                                    case 'radio':
	                                        return _react2["default"].createElement(
	                                            RadioGroup,
	                                            (0, _extends3["default"])({ defaultValue: arg.defaultValue }, getFieldDecorator(arg.field, { initialValue: arg.defaultValue })),
	                                            arg.options.map(function (v) {
	                                                return _react2["default"].createElement(
	                                                    _radio2["default"],
	                                                    { key: v.value, value: v.value },
	                                                    v.label
	                                                );
	                                            })
	                                        );
	                                    default:
	                                        return _react2["default"].createElement(_input2["default"], (0, _extends3["default"])({ defaultValue: arg.defaultValue, placeholder: arg.placeholder ? arg.placeholder : "请输入..." }, getFieldDecorator(arg.field, { initialValue: arg.defaultValue })));
	                                }
	                            }()
	                        );
	                    })
	                )
	            )
	        );
	    }
	}));

	var MyForm = function (_Component) {
	    (0, _inherits3["default"])(MyForm, _Component);

	    function MyForm(props) {
	        (0, _classCallCheck3["default"])(this, MyForm);
	        return (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));
	    }

	    MyForm.prototype.render = function render() {
	        var args = this.props.args;
	        var pageName = this.props.pageName;
	        return _react2["default"].createElement(Demo, { args: args, pageName: pageName, addSubmit: this.props.addSubmit, buttonActions: this.props.buttonActions });
	    };

	    return MyForm;
	}(_react.Component);

	exports["default"] = (0, _component2["default"])('aiForm', { normalApi: _customComponent.normalApi })(MyForm);
	module.exports = exports['default'];

/***/ },

/***/ 974:
17,

/***/ 998:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _PropTypes = __webpack_require__(193);

	/**
	 * A mixin that adds the "history" instance variable to components.
	 */
	var History = {

	  contextTypes: {
	    history: _PropTypes.history
	  },

	  componentWillMount: function componentWillMount() {
	    this.history = this.context.history;
	  }

	};

	exports['default'] = History;
	module.exports = exports['default'];

/***/ },

/***/ 999:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Link = __webpack_require__(891);

	var _Link2 = _interopRequireDefault(_Link);

	/**
	 * An <IndexLink> is used to link to an <IndexRoute>.
	 */

	var IndexLink = (function (_Component) {
	  _inherits(IndexLink, _Component);

	  function IndexLink() {
	    _classCallCheck(this, IndexLink);

	    _Component.apply(this, arguments);
	  }

	  IndexLink.prototype.render = function render() {
	    return _react2['default'].createElement(_Link2['default'], _extends({}, this.props, { onlyActiveOnIndex: true }));
	  };

	  return IndexLink;
	})(_react.Component);

	exports['default'] = IndexLink;
	module.exports = exports['default'];

/***/ },

/***/ 1000:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _warning = __webpack_require__(50);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(75);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Redirect = __webpack_require__(892);

	var _Redirect2 = _interopRequireDefault(_Redirect);

	var _PropTypes = __webpack_require__(193);

	var _React$PropTypes = _react2['default'].PropTypes;
	var string = _React$PropTypes.string;
	var object = _React$PropTypes.object;

	/**
	 * An <IndexRedirect> is used to redirect from an indexRoute.
	 */

	var IndexRedirect = (function (_Component) {
	  _inherits(IndexRedirect, _Component);

	  function IndexRedirect() {
	    _classCallCheck(this, IndexRedirect);

	    _Component.apply(this, arguments);
	  }

	  /* istanbul ignore next: sanity check */

	  IndexRedirect.prototype.render = function render() {
	     true ?  true ? _invariant2['default'](false, '<IndexRedirect> elements are for router configuration only and should not be rendered') : _invariant2['default'](false) : undefined;
	  };

	  return IndexRedirect;
	})(_react.Component);

	IndexRedirect.propTypes = {
	  to: string.isRequired,
	  query: object,
	  state: object,
	  onEnter: _PropTypes.falsy,
	  children: _PropTypes.falsy
	};

	IndexRedirect.createRouteFromReactElement = function (element, parentRoute) {
	  /* istanbul ignore else: sanity check */
	  if (parentRoute) {
	    parentRoute.indexRoute = _Redirect2['default'].createRouteFromReactElement(element);
	  } else {
	     true ? _warning2['default'](false, 'An <IndexRedirect> does not make sense at the root of your route config') : undefined;
	  }
	};

	exports['default'] = IndexRedirect;
	module.exports = exports['default'];

/***/ },

/***/ 1001:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _warning = __webpack_require__(50);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(75);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _RouteUtils = __webpack_require__(163);

	var _PropTypes = __webpack_require__(193);

	var func = _react2['default'].PropTypes.func;

	/**
	 * An <IndexRoute> is used to specify its parent's <Route indexRoute> in
	 * a JSX route config.
	 */

	var IndexRoute = (function (_Component) {
	  _inherits(IndexRoute, _Component);

	  function IndexRoute() {
	    _classCallCheck(this, IndexRoute);

	    _Component.apply(this, arguments);
	  }

	  /* istanbul ignore next: sanity check */

	  IndexRoute.prototype.render = function render() {
	     true ?  true ? _invariant2['default'](false, '<IndexRoute> elements are for router configuration only and should not be rendered') : _invariant2['default'](false) : undefined;
	  };

	  return IndexRoute;
	})(_react.Component);

	IndexRoute.propTypes = {
	  path: _PropTypes.falsy,
	  component: _PropTypes.component,
	  components: _PropTypes.components,
	  getComponent: func,
	  getComponents: func
	};

	IndexRoute.createRouteFromReactElement = function (element, parentRoute) {
	  /* istanbul ignore else: sanity check */
	  if (parentRoute) {
	    parentRoute.indexRoute = _RouteUtils.createRouteFromReactElement(element);
	  } else {
	     true ? _warning2['default'](false, 'An <IndexRoute> does not make sense at the root of your route config') : undefined;
	  }
	};

	exports['default'] = IndexRoute;
	module.exports = exports['default'];

/***/ },

/***/ 1002:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(75);

	var _invariant2 = _interopRequireDefault(_invariant);

	var object = _react2['default'].PropTypes.object;

	/**
	 * The Lifecycle mixin adds the routerWillLeave lifecycle method to a
	 * component that may be used to cancel a transition or prompt the user
	 * for confirmation.
	 *
	 * On standard transitions, routerWillLeave receives a single argument: the
	 * location we're transitioning to. To cancel the transition, return false.
	 * To prompt the user for confirmation, return a prompt message (string).
	 *
	 * During the beforeunload event (assuming you're using the useBeforeUnload
	 * history enhancer), routerWillLeave does not receive a location object
	 * because it isn't possible for us to know the location we're transitioning
	 * to. In this case routerWillLeave must return a prompt message to prevent
	 * the user from closing the window/tab.
	 */
	var Lifecycle = {

	  contextTypes: {
	    history: object.isRequired,
	    // Nested children receive the route as context, either
	    // set by the route component using the RouteContext mixin
	    // or by some other ancestor.
	    route: object
	  },

	  propTypes: {
	    // Route components receive the route object as a prop.
	    route: object
	  },

	  componentDidMount: function componentDidMount() {
	    !this.routerWillLeave ?  true ? _invariant2['default'](false, 'The Lifecycle mixin requires you to define a routerWillLeave method') : _invariant2['default'](false) : undefined;

	    var route = this.props.route || this.context.route;

	    !route ?  true ? _invariant2['default'](false, 'The Lifecycle mixin must be used on either a) a <Route component> or ' + 'b) a descendant of a <Route component> that uses the RouteContext mixin') : _invariant2['default'](false) : undefined;

	    this._unlistenBeforeLeavingRoute = this.context.history.listenBeforeLeavingRoute(route, this.routerWillLeave);
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    if (this._unlistenBeforeLeavingRoute) this._unlistenBeforeLeavingRoute();
	  }

	};

	exports['default'] = Lifecycle;
	module.exports = exports['default'];

/***/ },

/***/ 1003:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _invariant = __webpack_require__(75);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _RouteUtils = __webpack_require__(163);

	var _PropTypes = __webpack_require__(193);

	var _React$PropTypes = _react2['default'].PropTypes;
	var string = _React$PropTypes.string;
	var func = _React$PropTypes.func;

	/**
	 * A <Route> is used to declare which components are rendered to the
	 * page when the URL matches a given pattern.
	 *
	 * Routes are arranged in a nested tree structure. When a new URL is
	 * requested, the tree is searched depth-first to find a route whose
	 * path matches the URL.  When one is found, all routes in the tree
	 * that lead to it are considered "active" and their components are
	 * rendered into the DOM, nested in the same order as in the tree.
	 */

	var Route = (function (_Component) {
	  _inherits(Route, _Component);

	  function Route() {
	    _classCallCheck(this, Route);

	    _Component.apply(this, arguments);
	  }

	  /* istanbul ignore next: sanity check */

	  Route.prototype.render = function render() {
	     true ?  true ? _invariant2['default'](false, '<Route> elements are for router configuration only and should not be rendered') : _invariant2['default'](false) : undefined;
	  };

	  return Route;
	})(_react.Component);

	Route.createRouteFromReactElement = _RouteUtils.createRouteFromReactElement;

	Route.propTypes = {
	  path: string,
	  component: _PropTypes.component,
	  components: _PropTypes.components,
	  getComponent: func,
	  getComponents: func
	};

	exports['default'] = Route;
	module.exports = exports['default'];

/***/ },

/***/ 1004:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var object = _react2['default'].PropTypes.object;

	/**
	 * The RouteContext mixin provides a convenient way for route
	 * components to set the route in context. This is needed for
	 * routes that render elements that want to use the Lifecycle
	 * mixin to prevent transitions.
	 */
	var RouteContext = {

	  propTypes: {
	    route: object.isRequired
	  },

	  childContextTypes: {
	    route: object.isRequired
	  },

	  getChildContext: function getChildContext() {
	    return {
	      route: this.props.route
	    };
	  }

	};

	exports['default'] = RouteContext;
	module.exports = exports['default'];

/***/ },

/***/ 1005:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _warning = __webpack_require__(50);

	var _warning2 = _interopRequireDefault(_warning);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _historyLibCreateHashHistory = __webpack_require__(408);

	var _historyLibCreateHashHistory2 = _interopRequireDefault(_historyLibCreateHashHistory);

	var _RouteUtils = __webpack_require__(163);

	var _RoutingContext = __webpack_require__(893);

	var _RoutingContext2 = _interopRequireDefault(_RoutingContext);

	var _useRoutes = __webpack_require__(516);

	var _useRoutes2 = _interopRequireDefault(_useRoutes);

	var _PropTypes = __webpack_require__(193);

	var _React$PropTypes = _react2['default'].PropTypes;
	var func = _React$PropTypes.func;
	var object = _React$PropTypes.object;

	/**
	 * A <Router> is a high-level API for automatically setting up
	 * a router that renders a <RoutingContext> with all the props
	 * it needs each time the URL changes.
	 */

	var Router = (function (_Component) {
	  _inherits(Router, _Component);

	  function Router(props, context) {
	    _classCallCheck(this, Router);

	    _Component.call(this, props, context);

	    this.state = {
	      location: null,
	      routes: null,
	      params: null,
	      components: null
	    };
	  }

	  Router.prototype.handleError = function handleError(error) {
	    if (this.props.onError) {
	      this.props.onError.call(this, error);
	    } else {
	      // Throw errors by default so we don't silently swallow them!
	      throw error; // This error probably occurred in getChildRoutes or getComponents.
	    }
	  };

	  Router.prototype.componentWillMount = function componentWillMount() {
	    var _this = this;

	    var _props = this.props;
	    var history = _props.history;
	    var children = _props.children;
	    var routes = _props.routes;
	    var parseQueryString = _props.parseQueryString;
	    var stringifyQuery = _props.stringifyQuery;

	    var createHistory = history ? function () {
	      return history;
	    } : _historyLibCreateHashHistory2['default'];

	    this.history = _useRoutes2['default'](createHistory)({
	      routes: _RouteUtils.createRoutes(routes || children),
	      parseQueryString: parseQueryString,
	      stringifyQuery: stringifyQuery
	    });

	    this._unlisten = this.history.listen(function (error, state) {
	      if (error) {
	        _this.handleError(error);
	      } else {
	        _this.setState(state, _this.props.onUpdate);
	      }
	    });
	  };

	  /* istanbul ignore next: sanity check */

	  Router.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	     true ? _warning2['default'](nextProps.history === this.props.history, 'You cannot change <Router history>; it will be ignored') : undefined;

	     true ? _warning2['default']((nextProps.routes || nextProps.children) === (this.props.routes || this.props.children), 'You cannot change <Router routes>; it will be ignored') : undefined;
	  };

	  Router.prototype.componentWillUnmount = function componentWillUnmount() {
	    if (this._unlisten) this._unlisten();
	  };

	  Router.prototype.render = function render() {
	    var _state = this.state;
	    var location = _state.location;
	    var routes = _state.routes;
	    var params = _state.params;
	    var components = _state.components;
	    var _props2 = this.props;
	    var RoutingContext = _props2.RoutingContext;
	    var createElement = _props2.createElement;

	    var props = _objectWithoutProperties(_props2, ['RoutingContext', 'createElement']);

	    if (location == null) return null; // Async match

	    // Only forward non-Router-specific props to routing context, as those are
	    // the only ones that might be custom routing context props.
	    Object.keys(Router.propTypes).forEach(function (propType) {
	      return delete props[propType];
	    });

	    return _react2['default'].createElement(RoutingContext, _extends({}, props, {
	      history: this.history,
	      createElement: createElement,
	      location: location,
	      routes: routes,
	      params: params,
	      components: components
	    }));
	  };

	  return Router;
	})(_react.Component);

	Router.propTypes = {
	  history: object,
	  children: _PropTypes.routes,
	  routes: _PropTypes.routes, // alias for children
	  RoutingContext: func.isRequired,
	  createElement: func,
	  onError: func,
	  onUpdate: func,
	  parseQueryString: func,
	  stringifyQuery: func
	};

	Router.defaultProps = {
	  RoutingContext: _RoutingContext2['default']
	};

	exports['default'] = Router;
	module.exports = exports['default'];

/***/ },

/***/ 1006:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.runEnterHooks = runEnterHooks;
	exports.runLeaveHooks = runLeaveHooks;

	var _AsyncUtils = __webpack_require__(515);

	function createEnterHook(hook, route) {
	  return function (a, b, callback) {
	    hook.apply(route, arguments);

	    if (hook.length < 3) {
	      // Assume hook executes synchronously and
	      // automatically call the callback.
	      callback();
	    }
	  };
	}

	function getEnterHooks(routes) {
	  return routes.reduce(function (hooks, route) {
	    if (route.onEnter) hooks.push(createEnterHook(route.onEnter, route));

	    return hooks;
	  }, []);
	}

	/**
	 * Runs all onEnter hooks in the given array of routes in order
	 * with onEnter(nextState, replaceState, callback) and calls
	 * callback(error, redirectInfo) when finished. The first hook
	 * to use replaceState short-circuits the loop.
	 *
	 * If a hook needs to run asynchronously, it may use the callback
	 * function. However, doing so will cause the transition to pause,
	 * which could lead to a non-responsive UI if the hook is slow.
	 */

	function runEnterHooks(routes, nextState, callback) {
	  var hooks = getEnterHooks(routes);

	  if (!hooks.length) {
	    callback();
	    return;
	  }

	  var redirectInfo = undefined;
	  function replaceState(state, pathname, query) {
	    redirectInfo = { pathname: pathname, query: query, state: state };
	  }

	  _AsyncUtils.loopAsync(hooks.length, function (index, next, done) {
	    hooks[index](nextState, replaceState, function (error) {
	      if (error || redirectInfo) {
	        done(error, redirectInfo); // No need to continue.
	      } else {
	          next();
	        }
	    });
	  }, callback);
	}

	/**
	 * Runs all onLeave hooks in the given array of routes in order.
	 */

	function runLeaveHooks(routes) {
	  for (var i = 0, len = routes.length; i < len; ++i) {
	    if (routes[i].onLeave) routes[i].onLeave.call(routes[i]);
	  }
	}

/***/ },

/***/ 1007:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _PatternUtils = __webpack_require__(295);

	function routeParamsChanged(route, prevState, nextState) {
	  if (!route.path) return false;

	  var paramNames = _PatternUtils.getParamNames(route.path);

	  return paramNames.some(function (paramName) {
	    return prevState.params[paramName] !== nextState.params[paramName];
	  });
	}

	/**
	 * Returns an object of { leaveRoutes, enterRoutes } determined by
	 * the change from prevState to nextState. We leave routes if either
	 * 1) they are not in the next state or 2) they are in the next state
	 * but their params have changed (i.e. /users/123 => /users/456).
	 *
	 * leaveRoutes are ordered starting at the leaf route of the tree
	 * we're leaving up to the common parent route. enterRoutes are ordered
	 * from the top of the tree we're entering down to the leaf route.
	 */
	function computeChangedRoutes(prevState, nextState) {
	  var prevRoutes = prevState && prevState.routes;
	  var nextRoutes = nextState.routes;

	  var leaveRoutes = undefined,
	      enterRoutes = undefined;
	  if (prevRoutes) {
	    leaveRoutes = prevRoutes.filter(function (route) {
	      return nextRoutes.indexOf(route) === -1 || routeParamsChanged(route, prevState, nextState);
	    });

	    // onLeave hooks start at the leaf route.
	    leaveRoutes.reverse();

	    enterRoutes = nextRoutes.filter(function (route) {
	      return prevRoutes.indexOf(route) === -1 || leaveRoutes.indexOf(route) !== -1;
	    });
	  } else {
	    leaveRoutes = [];
	    enterRoutes = nextRoutes;
	  }

	  return {
	    leaveRoutes: leaveRoutes,
	    enterRoutes: enterRoutes
	  };
	}

	exports['default'] = computeChangedRoutes;
	module.exports = exports['default'];

/***/ },

/***/ 1008:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _AsyncUtils = __webpack_require__(515);

	function getComponentsForRoute(location, route, callback) {
	  if (route.component || route.components) {
	    callback(null, route.component || route.components);
	  } else if (route.getComponent) {
	    route.getComponent(location, callback);
	  } else if (route.getComponents) {
	    route.getComponents(location, callback);
	  } else {
	    callback();
	  }
	}

	/**
	 * Asynchronously fetches all components needed for the given router
	 * state and calls callback(error, components) when finished.
	 *
	 * Note: This operation may finish synchronously if no routes have an
	 * asynchronous getComponents method.
	 */
	function getComponents(nextState, callback) {
	  _AsyncUtils.mapAsync(nextState.routes, function (route, index, callback) {
	    getComponentsForRoute(nextState.location, route, callback);
	  }, callback);
	}

	exports['default'] = getComponents;
	module.exports = exports['default'];

/***/ },

/***/ 1009:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _PatternUtils = __webpack_require__(295);

	/**
	 * Extracts an object of params the given route cares about from
	 * the given params object.
	 */
	function getRouteParams(route, params) {
	  var routeParams = {};

	  if (!route.path) return routeParams;

	  var paramNames = _PatternUtils.getParamNames(route.path);

	  for (var p in params) {
	    if (params.hasOwnProperty(p) && paramNames.indexOf(p) !== -1) routeParams[p] = params[p];
	  }return routeParams;
	}

	exports['default'] = getRouteParams;
	module.exports = exports['default'];

/***/ },

/***/ 1010:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _PatternUtils = __webpack_require__(295);

	function deepEqual(a, b) {
	  if (a == b) return true;

	  if (a == null || b == null) return false;

	  if (Array.isArray(a)) {
	    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
	      return deepEqual(item, b[index]);
	    });
	  }

	  if (typeof a === 'object') {
	    for (var p in a) {
	      if (!a.hasOwnProperty(p)) {
	        continue;
	      }

	      if (a[p] === undefined) {
	        if (b[p] !== undefined) {
	          return false;
	        }
	      } else if (!b.hasOwnProperty(p)) {
	        return false;
	      } else if (!deepEqual(a[p], b[p])) {
	        return false;
	      }
	    }

	    return true;
	  }

	  return String(a) === String(b);
	}

	function paramsAreActive(paramNames, paramValues, activeParams) {
	  // FIXME: This doesn't work on repeated params in activeParams.
	  return paramNames.every(function (paramName, index) {
	    return String(paramValues[index]) === String(activeParams[paramName]);
	  });
	}

	function getMatchingRouteIndex(pathname, activeRoutes, activeParams) {
	  var remainingPathname = pathname,
	      paramNames = [],
	      paramValues = [];

	  for (var i = 0, len = activeRoutes.length; i < len; ++i) {
	    var route = activeRoutes[i];
	    var pattern = route.path || '';

	    if (pattern.charAt(0) === '/') {
	      remainingPathname = pathname;
	      paramNames = [];
	      paramValues = [];
	    }

	    if (remainingPathname !== null) {
	      var matched = _PatternUtils.matchPattern(pattern, remainingPathname);
	      remainingPathname = matched.remainingPathname;
	      paramNames = [].concat(paramNames, matched.paramNames);
	      paramValues = [].concat(paramValues, matched.paramValues);
	    }

	    if (remainingPathname === '' && route.path && paramsAreActive(paramNames, paramValues, activeParams)) return i;
	  }

	  return null;
	}

	/**
	 * Returns true if the given pathname matches the active routes
	 * and params.
	 */
	function routeIsActive(pathname, routes, params, indexOnly) {
	  var i = getMatchingRouteIndex(pathname, routes, params);

	  if (i === null) {
	    // No match.
	    return false;
	  } else if (!indexOnly) {
	    // Any match is good enough.
	    return true;
	  }

	  // If any remaining routes past the match index have paths, then we can't
	  // be on the index route.
	  return routes.slice(i + 1).every(function (route) {
	    return !route.path;
	  });
	}

	/**
	 * Returns true if all key/value pairs in the given query are
	 * currently active.
	 */
	function queryIsActive(query, activeQuery) {
	  if (activeQuery == null) return query == null;

	  if (query == null) return true;

	  return deepEqual(query, activeQuery);
	}

	/**
	 * Returns true if a <Link> to the given pathname/query combination is
	 * currently active.
	 */
	function isActive(pathname, query, indexOnly, location, routes, params) {
	  if (location == null) return false;

	  if (!routeIsActive(pathname, routes, params, indexOnly)) return false;

	  return queryIsActive(query, location.query);
	}

	exports['default'] = isActive;
	module.exports = exports['default'];

/***/ },

/***/ 1011:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(75);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _historyLibCreateMemoryHistory = __webpack_require__(1016);

	var _historyLibCreateMemoryHistory2 = _interopRequireDefault(_historyLibCreateMemoryHistory);

	var _historyLibUseBasename = __webpack_require__(1017);

	var _historyLibUseBasename2 = _interopRequireDefault(_historyLibUseBasename);

	var _RouteUtils = __webpack_require__(163);

	var _useRoutes = __webpack_require__(516);

	var _useRoutes2 = _interopRequireDefault(_useRoutes);

	var createHistory = _useRoutes2['default'](_historyLibUseBasename2['default'](_historyLibCreateMemoryHistory2['default']));

	/**
	 * A high-level API to be used for server-side rendering.
	 *
	 * This function matches a location to a set of routes and calls
	 * callback(error, redirectLocation, renderProps) when finished.
	 *
	 * Note: You probably don't want to use this in a browser. Use
	 * the history.listen API instead.
	 */
	function match(_ref, callback) {
	  var routes = _ref.routes;
	  var location = _ref.location;
	  var parseQueryString = _ref.parseQueryString;
	  var stringifyQuery = _ref.stringifyQuery;
	  var basename = _ref.basename;

	  !location ?  true ? _invariant2['default'](false, 'match needs a location') : _invariant2['default'](false) : undefined;

	  var history = createHistory({
	    routes: _RouteUtils.createRoutes(routes),
	    parseQueryString: parseQueryString,
	    stringifyQuery: stringifyQuery,
	    basename: basename
	  });

	  // Allow match({ location: '/the/path', ... })
	  if (typeof location === 'string') location = history.createLocation(location);

	  history.match(location, function (error, redirectLocation, nextState) {
	    callback(error, redirectLocation, nextState && _extends({}, nextState, { history: history }));
	  });
	}

	exports['default'] = match;
	module.exports = exports['default'];

/***/ },

/***/ 1012:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(50);

	var _warning2 = _interopRequireDefault(_warning);

	var _AsyncUtils = __webpack_require__(515);

	var _PatternUtils = __webpack_require__(295);

	var _RouteUtils = __webpack_require__(163);

	function getChildRoutes(route, location, callback) {
	  if (route.childRoutes) {
	    callback(null, route.childRoutes);
	  } else if (route.getChildRoutes) {
	    route.getChildRoutes(location, function (error, childRoutes) {
	      callback(error, !error && _RouteUtils.createRoutes(childRoutes));
	    });
	  } else {
	    callback();
	  }
	}

	function getIndexRoute(route, location, callback) {
	  if (route.indexRoute) {
	    callback(null, route.indexRoute);
	  } else if (route.getIndexRoute) {
	    route.getIndexRoute(location, function (error, indexRoute) {
	      callback(error, !error && _RouteUtils.createRoutes(indexRoute)[0]);
	    });
	  } else if (route.childRoutes) {
	    (function () {
	      var pathless = route.childRoutes.filter(function (obj) {
	        return !obj.hasOwnProperty('path');
	      });

	      _AsyncUtils.loopAsync(pathless.length, function (index, next, done) {
	        getIndexRoute(pathless[index], location, function (error, indexRoute) {
	          if (error || indexRoute) {
	            var routes = [pathless[index]].concat(Array.isArray(indexRoute) ? indexRoute : [indexRoute]);
	            done(error, routes);
	          } else {
	            next();
	          }
	        });
	      }, function (err, routes) {
	        callback(null, routes);
	      });
	    })();
	  } else {
	    callback();
	  }
	}

	function assignParams(params, paramNames, paramValues) {
	  return paramNames.reduce(function (params, paramName, index) {
	    var paramValue = paramValues && paramValues[index];

	    if (Array.isArray(params[paramName])) {
	      params[paramName].push(paramValue);
	    } else if (paramName in params) {
	      params[paramName] = [params[paramName], paramValue];
	    } else {
	      params[paramName] = paramValue;
	    }

	    return params;
	  }, params);
	}

	function createParams(paramNames, paramValues) {
	  return assignParams({}, paramNames, paramValues);
	}

	function matchRouteDeep(route, location, remainingPathname, paramNames, paramValues, callback) {
	  var pattern = route.path || '';

	  if (pattern.charAt(0) === '/') {
	    remainingPathname = location.pathname;
	    paramNames = [];
	    paramValues = [];
	  }

	  if (remainingPathname !== null) {
	    var matched = _PatternUtils.matchPattern(pattern, remainingPathname);
	    remainingPathname = matched.remainingPathname;
	    paramNames = [].concat(paramNames, matched.paramNames);
	    paramValues = [].concat(paramValues, matched.paramValues);

	    if (remainingPathname === '' && route.path) {
	      var _ret2 = (function () {
	        var match = {
	          routes: [route],
	          params: createParams(paramNames, paramValues)
	        };

	        getIndexRoute(route, location, function (error, indexRoute) {
	          if (error) {
	            callback(error);
	          } else {
	            if (Array.isArray(indexRoute)) {
	              var _match$routes;

	               true ? _warning2['default'](indexRoute.every(function (route) {
	                return !route.path;
	              }), 'Index routes should not have paths') : undefined;
	              (_match$routes = match.routes).push.apply(_match$routes, indexRoute);
	            } else if (indexRoute) {
	               true ? _warning2['default'](!indexRoute.path, 'Index routes should not have paths') : undefined;
	              match.routes.push(indexRoute);
	            }

	            callback(null, match);
	          }
	        });
	        return {
	          v: undefined
	        };
	      })();

	      if (typeof _ret2 === 'object') return _ret2.v;
	    }
	  }

	  if (remainingPathname != null || route.childRoutes) {
	    // Either a) this route matched at least some of the path or b)
	    // we don't have to load this route's children asynchronously. In
	    // either case continue checking for matches in the subtree.
	    getChildRoutes(route, location, function (error, childRoutes) {
	      if (error) {
	        callback(error);
	      } else if (childRoutes) {
	        // Check the child routes to see if any of them match.
	        matchRoutes(childRoutes, location, function (error, match) {
	          if (error) {
	            callback(error);
	          } else if (match) {
	            // A child route matched! Augment the match and pass it up the stack.
	            match.routes.unshift(route);
	            callback(null, match);
	          } else {
	            callback();
	          }
	        }, remainingPathname, paramNames, paramValues);
	      } else {
	        callback();
	      }
	    });
	  } else {
	    callback();
	  }
	}

	/**
	 * Asynchronously matches the given location to a set of routes and calls
	 * callback(error, state) when finished. The state object will have the
	 * following properties:
	 *
	 * - routes       An array of routes that matched, in hierarchical order
	 * - params       An object of URL parameters
	 *
	 * Note: This operation may finish synchronously if no routes have an
	 * asynchronous getChildRoutes method.
	 */
	function matchRoutes(routes, location, callback) {
	  var remainingPathname = arguments.length <= 3 || arguments[3] === undefined ? location.pathname : arguments[3];
	  var paramNames = arguments.length <= 4 || arguments[4] === undefined ? [] : arguments[4];
	  var paramValues = arguments.length <= 5 || arguments[5] === undefined ? [] : arguments[5];
	  return (function () {
	    _AsyncUtils.loopAsync(routes.length, function (index, next, done) {
	      matchRouteDeep(routes[index], location, remainingPathname, paramNames, paramValues, function (error, match) {
	        if (error || match) {
	          done(error, match);
	        } else {
	          next();
	        }
	      });
	    }, callback);
	  })();
	}

	exports['default'] = matchRoutes;
	module.exports = exports['default'];

/***/ },

/***/ 1014:
/***/ function(module, exports) {

	'use strict';
	module.exports = function (str) {
		return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
			return '%' + c.charCodeAt(0).toString(16).toUpperCase();
		});
	};


/***/ },

/***/ 1016:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(50);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(75);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _Actions = __webpack_require__(137);

	var _createHistory = __webpack_require__(409);

	var _createHistory2 = _interopRequireDefault(_createHistory);

	var _parsePath = __webpack_require__(119);

	var _parsePath2 = _interopRequireDefault(_parsePath);

	function createStateStorage(entries) {
	  return entries.filter(function (entry) {
	    return entry.state;
	  }).reduce(function (memo, entry) {
	    memo[entry.key] = entry.state;
	    return memo;
	  }, {});
	}

	function createMemoryHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  if (Array.isArray(options)) {
	    options = { entries: options };
	  } else if (typeof options === 'string') {
	    options = { entries: [options] };
	  }

	  var history = _createHistory2['default'](_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    finishTransition: finishTransition,
	    saveState: saveState,
	    go: go
	  }));

	  var _options = options;
	  var entries = _options.entries;
	  var current = _options.current;

	  if (typeof entries === 'string') {
	    entries = [entries];
	  } else if (!Array.isArray(entries)) {
	    entries = ['/'];
	  }

	  entries = entries.map(function (entry) {
	    var key = history.createKey();

	    if (typeof entry === 'string') return { pathname: entry, key: key };

	    if (typeof entry === 'object' && entry) return _extends({}, entry, { key: key });

	     true ?  true ? _invariant2['default'](false, 'Unable to create history entry from %s', entry) : _invariant2['default'](false) : undefined;
	  });

	  if (current == null) {
	    current = entries.length - 1;
	  } else {
	    !(current >= 0 && current < entries.length) ?  true ? _invariant2['default'](false, 'Current index must be >= 0 and < %s, was %s', entries.length, current) : _invariant2['default'](false) : undefined;
	  }

	  var storage = createStateStorage(entries);

	  function saveState(key, state) {
	    storage[key] = state;
	  }

	  function readState(key) {
	    return storage[key];
	  }

	  function getCurrentLocation() {
	    var entry = entries[current];
	    var key = entry.key;
	    var basename = entry.basename;
	    var pathname = entry.pathname;
	    var search = entry.search;

	    var path = (basename || '') + pathname + (search || '');

	    var state = undefined;
	    if (key) {
	      state = readState(key);
	    } else {
	      state = null;
	      key = history.createKey();
	      entry.key = key;
	    }

	    var location = _parsePath2['default'](path);

	    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
	  }

	  function canGo(n) {
	    var index = current + n;
	    return index >= 0 && index < entries.length;
	  }

	  function go(n) {
	    if (n) {
	      if (!canGo(n)) {
	         true ? _warning2['default'](false, 'Cannot go(%s) there is not enough history', n) : undefined;
	        return;
	      }

	      current += n;

	      var currentLocation = getCurrentLocation();

	      // change action to POP
	      history.transitionTo(_extends({}, currentLocation, { action: _Actions.POP }));
	    }
	  }

	  function finishTransition(location) {
	    switch (location.action) {
	      case _Actions.PUSH:
	        current += 1;

	        // if we are not on the top of stack
	        // remove rest and push new
	        if (current < entries.length) entries.splice(current);

	        entries.push(location);
	        saveState(location.key, location.state);
	        break;
	      case _Actions.REPLACE:
	        entries[current] = location;
	        saveState(location.key, location.state);
	        break;
	    }
	  }

	  return history;
	}

	exports['default'] = createMemoryHistory;
	module.exports = exports['default'];

/***/ },

/***/ 1017:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _ExecutionEnvironment = __webpack_require__(242);

	var _runTransitionHook = __webpack_require__(298);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _extractPath = __webpack_require__(410);

	var _extractPath2 = _interopRequireDefault(_extractPath);

	var _parsePath = __webpack_require__(119);

	var _parsePath2 = _interopRequireDefault(_parsePath);

	var _deprecate = __webpack_require__(297);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	function useBasename(createHistory) {
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var basename = options.basename;

	    var historyOptions = _objectWithoutProperties(options, ['basename']);

	    var history = createHistory(historyOptions);

	    // Automatically use the value of <base href> in HTML
	    // documents as basename if it's not explicitly given.
	    if (basename == null && _ExecutionEnvironment.canUseDOM) {
	      var base = document.getElementsByTagName('base')[0];

	      if (base) basename = _extractPath2['default'](base.href);
	    }

	    function addBasename(location) {
	      if (basename && location.basename == null) {
	        if (location.pathname.indexOf(basename) === 0) {
	          location.pathname = location.pathname.substring(basename.length);
	          location.basename = basename;

	          if (location.pathname === '') location.pathname = '/';
	        } else {
	          location.basename = '';
	        }
	      }

	      return location;
	    }

	    function prependBasename(location) {
	      if (!basename) return location;

	      if (typeof location === 'string') location = _parsePath2['default'](location);

	      var pname = location.pathname;
	      var normalizedBasename = basename.slice(-1) === '/' ? basename : basename + '/';
	      var normalizedPathname = pname.charAt(0) === '/' ? pname.slice(1) : pname;
	      var pathname = normalizedBasename + normalizedPathname;

	      return _extends({}, location, {
	        pathname: pathname
	      });
	    }

	    // Override all read methods with basename-aware versions.
	    function listenBefore(hook) {
	      return history.listenBefore(function (location, callback) {
	        _runTransitionHook2['default'](hook, addBasename(location), callback);
	      });
	    }

	    function listen(listener) {
	      return history.listen(function (location) {
	        listener(addBasename(location));
	      });
	    }

	    // Override all write methods with basename-aware versions.
	    function push(location) {
	      history.push(prependBasename(location));
	    }

	    function replace(location) {
	      history.replace(prependBasename(location));
	    }

	    function createPath(location) {
	      return history.createPath(prependBasename(location));
	    }

	    function createHref(location) {
	      return history.createHref(prependBasename(location));
	    }

	    function createLocation() {
	      return addBasename(history.createLocation.apply(history, arguments));
	    }

	    // deprecated
	    function pushState(state, path) {
	      if (typeof path === 'string') path = _parsePath2['default'](path);

	      push(_extends({ state: state }, path));
	    }

	    // deprecated
	    function replaceState(state, path) {
	      if (typeof path === 'string') path = _parsePath2['default'](path);

	      replace(_extends({ state: state }, path));
	    }

	    return _extends({}, history, {
	      listenBefore: listenBefore,
	      listen: listen,
	      push: push,
	      replace: replace,
	      createPath: createPath,
	      createHref: createHref,
	      createLocation: createLocation,

	      pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
	      replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
	    });
	  };
	}

	exports['default'] = useBasename;
	module.exports = exports['default'];

/***/ },

/***/ 1018:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _warning = __webpack_require__(50);

	var _warning2 = _interopRequireDefault(_warning);

	var _queryString = __webpack_require__(1029);

	var _runTransitionHook = __webpack_require__(298);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _parsePath = __webpack_require__(119);

	var _parsePath2 = _interopRequireDefault(_parsePath);

	var _deprecate = __webpack_require__(297);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	var SEARCH_BASE_KEY = '$searchBase';

	function defaultStringifyQuery(query) {
	  return _queryString.stringify(query).replace(/%20/g, '+');
	}

	var defaultParseQueryString = _queryString.parse;

	function isNestedObject(object) {
	  for (var p in object) {
	    if (object.hasOwnProperty(p) && typeof object[p] === 'object' && !Array.isArray(object[p]) && object[p] !== null) return true;
	  }return false;
	}

	/**
	 * Returns a new createHistory function that may be used to create
	 * history objects that know how to handle URL queries.
	 */
	function useQueries(createHistory) {
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var stringifyQuery = options.stringifyQuery;
	    var parseQueryString = options.parseQueryString;

	    var historyOptions = _objectWithoutProperties(options, ['stringifyQuery', 'parseQueryString']);

	    var history = createHistory(historyOptions);

	    if (typeof stringifyQuery !== 'function') stringifyQuery = defaultStringifyQuery;

	    if (typeof parseQueryString !== 'function') parseQueryString = defaultParseQueryString;

	    function addQuery(location) {
	      if (location.query == null) {
	        var search = location.search;

	        location.query = parseQueryString(search.substring(1));
	        location[SEARCH_BASE_KEY] = { search: search, searchBase: '' };
	      }

	      // TODO: Instead of all the book-keeping here, this should just strip the
	      // stringified query from the search.

	      return location;
	    }

	    function appendQuery(location, query) {
	      var _extends2;

	      var queryString = undefined;
	      if (!query || (queryString = stringifyQuery(query)) === '') return location;

	       true ? _warning2['default'](stringifyQuery !== defaultStringifyQuery || !isNestedObject(query), 'useQueries does not stringify nested query objects by default; ' + 'use a custom stringifyQuery function') : undefined;

	      if (typeof location === 'string') location = _parsePath2['default'](location);

	      var searchBaseSpec = location[SEARCH_BASE_KEY];
	      var searchBase = undefined;
	      if (searchBaseSpec && location.search === searchBaseSpec.search) {
	        searchBase = searchBaseSpec.searchBase;
	      } else {
	        searchBase = location.search || '';
	      }

	      var search = searchBase + (searchBase ? '&' : '?') + queryString;

	      return _extends({}, location, (_extends2 = {
	        search: search
	      }, _extends2[SEARCH_BASE_KEY] = { search: search, searchBase: searchBase }, _extends2));
	    }

	    // Override all read methods with query-aware versions.
	    function listenBefore(hook) {
	      return history.listenBefore(function (location, callback) {
	        _runTransitionHook2['default'](hook, addQuery(location), callback);
	      });
	    }

	    function listen(listener) {
	      return history.listen(function (location) {
	        listener(addQuery(location));
	      });
	    }

	    // Override all write methods with query-aware versions.
	    function push(location) {
	      history.push(appendQuery(location, location.query));
	    }

	    function replace(location) {
	      history.replace(appendQuery(location, location.query));
	    }

	    function createPath(location, query) {
	      //warning(
	      //  !query,
	      //  'the query argument to createPath is deprecated; use a location descriptor instead'
	      //)
	      return history.createPath(appendQuery(location, query || location.query));
	    }

	    function createHref(location, query) {
	      //warning(
	      //  !query,
	      //  'the query argument to createHref is deprecated; use a location descriptor instead'
	      //)
	      return history.createHref(appendQuery(location, query || location.query));
	    }

	    function createLocation() {
	      return addQuery(history.createLocation.apply(history, arguments));
	    }

	    // deprecated
	    function pushState(state, path, query) {
	      if (typeof path === 'string') path = _parsePath2['default'](path);

	      push(_extends({ state: state }, path, { query: query }));
	    }

	    // deprecated
	    function replaceState(state, path, query) {
	      if (typeof path === 'string') path = _parsePath2['default'](path);

	      replace(_extends({ state: state }, path, { query: query }));
	    }

	    return _extends({}, history, {
	      listenBefore: listenBefore,
	      listen: listen,
	      push: push,
	      replace: replace,
	      createPath: createPath,
	      createHref: createHref,
	      createLocation: createLocation,

	      pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
	      replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
	    });
	  };
	}

	exports['default'] = useQueries;
	module.exports = exports['default'];

/***/ },

/***/ 1029:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strictUriEncode = __webpack_require__(1014);

	exports.extract = function (str) {
		return str.split('?')[1] || '';
	};

	exports.parse = function (str) {
		if (typeof str !== 'string') {
			return {};
		}

		str = str.trim().replace(/^(\?|#|&)/, '');

		if (!str) {
			return {};
		}

		return str.split('&').reduce(function (ret, param) {
			var parts = param.replace(/\+/g, ' ').split('=');
			// Firefox (pre 40) decodes `%3D` to `=`
			// https://github.com/sindresorhus/query-string/pull/37
			var key = parts.shift();
			var val = parts.length > 0 ? parts.join('=') : undefined;

			key = decodeURIComponent(key);

			// missing `=` should be `null`:
			// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
			val = val === undefined ? null : decodeURIComponent(val);

			if (!ret.hasOwnProperty(key)) {
				ret[key] = val;
			} else if (Array.isArray(ret[key])) {
				ret[key].push(val);
			} else {
				ret[key] = [ret[key], val];
			}

			return ret;
		}, {});
	};

	exports.stringify = function (obj) {
		return obj ? Object.keys(obj).sort().map(function (key) {
			var val = obj[key];

			if (val === undefined) {
				return '';
			}

			if (val === null) {
				return key;
			}

			if (Array.isArray(val)) {
				return val.slice().sort().map(function (val2) {
					return strictUriEncode(key) + '=' + strictUriEncode(val2);
				}).join('&');
			}

			return strictUriEncode(key) + '=' + strictUriEncode(val);
		}).filter(function (x) {
			return x.length > 0;
		}).join('&') : '';
	};


/***/ },

/***/ 1293:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.normalApi = undefined;

	var _defineProperty2 = __webpack_require__(7);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _demoType = __webpack_require__(231);

	var Types = _interopRequireWildcard(_demoType);

	var _api = __webpack_require__(40);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	// 常用
	var normalApi = exports.normalApi = function normalApi(id) {
	    var _ref;

	    return _ref = {}, (0, _defineProperty3["default"])(_ref, _api.API, { types: Types.testApi, apiConfig: { apiName: 'login' } }), (0, _defineProperty3["default"])(_ref, 'id', id), _ref;
	};

/***/ },

/***/ 1307:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _css = __webpack_require__(64);

	var _icon = __webpack_require__(20);

	var _icon2 = _interopRequireDefault(_icon);

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(6);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(5);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _css2 = __webpack_require__(1581);

	var _modal = __webpack_require__(49);

	var _modal2 = _interopRequireDefault(_modal);

	var _css3 = __webpack_require__(30);

	var _button = __webpack_require__(28);

	var _button2 = _interopRequireDefault(_button);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _moment = __webpack_require__(22);

	var _moment2 = _interopRequireDefault(_moment);

	var _component = __webpack_require__(13);

	var _component2 = _interopRequireDefault(_component);

	var _global = __webpack_require__(15);

	var _redux = __webpack_require__(47);

	var _ModelForm = __webpack_require__(967);

	var _ModelForm2 = _interopRequireDefault(_ModelForm);

	var _DataList = __webpack_require__(238);

	var _DataList2 = _interopRequireDefault(_DataList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	_moment2["default"].locale('zh-cn');

	var ButtonGroup = _button2["default"].Group;
	var confirm = _modal2["default"].confirm;

	var AiButton = function (_Component) {
	    (0, _inherits3["default"])(AiButton, _Component);

	    function AiButton(props) {
	        (0, _classCallCheck3["default"])(this, AiButton);
	        return (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));
	    }

	    AiButton.prototype.render = function render() {
	        var _this2 = this;

	        var forms = [{ "name": "性别", "type": "select", "field": "select-multiple", "options": ["aaa", "bbb"], "defaultValue": "aaa", "validate": [{ required: true, message: '请输入内容!', type: 'array' }] }, { "name": "姓名", "type": "input", "field": "input", "placeholder": "请输入信息", "defaultValue": "aaa", "validate": [{ required: true, message: '请输入内容!', type: 'array' }] }];
	        var buttonConfigs = this.props.buttonConfigs;
	        var buttonGroup = [];
	        buttonGroup.push(buttonConfigs.map(function (buttonList, i) {
	            switch (buttonList.buttonName) {
	                case 'add':
	                    // return <ModelForm args={forms} pageName = "新增" buttonActions={this.props.dlActions}/>
	                    /*if(buttonList.type && buttonList.type == "add"){
	                      }*/
	                    var states = _global.Global.getState();
	                    return _react2["default"].createElement(
	                        _button2["default"],
	                        { key: 'listAdd', className: "dataListBtn", type: 'primary', onClick: function () {
	                                if (buttonList.type && buttonList.type == "add") {
	                                    if (this.props.state.selectedRows && this.props.state.selectedRows.length == 1) {
	                                        window.location.href = '#/datalistV1/' + this.props.id + '/add/' + this.props.state.selectedRows;
	                                    } else if (this.props.state.selectedRows && this.props.state.selectedRows.length > 1) {
	                                        _modal2["default"].warning({
	                                            content: "请选择一条以内数据进行操作！"
	                                        });
	                                        return false;
	                                    } else {
	                                        window.location.href = '#/datalistV1/' + this.props.id + '/add';
	                                    }
	                                } else {
	                                    window.location.href = '#/datalistV1/' + this.props.id + '/add';
	                                }
	                            }.bind(_this2) },
	                        _react2["default"].createElement(_icon2["default"], { type: 'add' }),
	                        _react2["default"].createElement(
	                            'a',
	                            null,
	                            buttonList.showName ? buttonList.showName : "新增"
	                        )
	                    );
	                case 'search':
	                    return _react2["default"].createElement(
	                        _button2["default"],
	                        { key: 'listSearch', type: 'primary', className: "dataListBtn", onClick: function onClick() {
	                                return _this2.props.dlActions.requestSearchData(_this2.props.id);
	                            } },
	                        _react2["default"].createElement(_icon2["default"], { type: 'eye' }),
	                        _react2["default"].createElement(
	                            'a',
	                            { href: 'javascript:void(0)' },
	                            '\u67E5\u8BE2'
	                        )
	                    );
	                case 'edit':
	                    return _react2["default"].createElement(
	                        _button2["default"],
	                        { key: 'listEdit', type: 'primary', className: "dataListBtn", onClick: function () {
	                                if (this.props.state.selectedRows == null || this.props.state.selectedRows.length != 1) {
	                                    _modal2["default"].warning({
	                                        content: '请选择一条数据！'
	                                    });
	                                    return;
	                                }
	                                window.location.href = '#/datalistV1/' + this.props.id + '/edit/' + this.props.state.selectedRows;
	                            }.bind(_this2) },
	                        _react2["default"].createElement(_icon2["default"], { type: 'revise' }),
	                        _react2["default"].createElement(
	                            'a',
	                            { href: 'javascript:void(0)' },
	                            '\u7F16\u8F91'
	                        )
	                    );
	                case 'delete':
	                    return _react2["default"].createElement(
	                        _button2["default"],
	                        { key: 'listDelete', type: 'primary', className: "dataListBtn", onClick: function () {
	                                if (this.props.state.selectedRows == null || this.props.state.selectedRows.length == 0) {

	                                    _modal2["default"].warning({
	                                        content: '请选择数据！'
	                                    });

	                                    return false;
	                                }
	                                if (buttonList.onClick) {
	                                    var isContinue = buttonList.onClick();
	                                    if (!isContinue) return false;
	                                }
	                                _modal2["default"].confirm({
	                                    title: '告警信息',
	                                    content: '确认删除？',
	                                    onOk: function () {
	                                        console.log('delete success!');
	                                        this.props.dlActions.requestDeleteData(this.props.state.selectedRows, this.props.id, this.props.state.getDataListApi.data["delete"].body);
	                                    }.bind(this),
	                                    onCancel: function onCancel() {
	                                        console.log("delete exit!!!");
	                                    }
	                                });
	                            }.bind(_this2) },
	                        _react2["default"].createElement(_icon2["default"], { type: 'delete-green' }),
	                        _react2["default"].createElement(
	                            'a',
	                            { href: 'javascript:void(0)' },
	                            '\u5220\u9664'
	                        )
	                    );
	                case 'detail':
	                // return <ModelForm args={forms} />
	                case 'direction':
	                    return _react2["default"].createElement(
	                        _button2["default"],
	                        { key: Math.random(), className: "dataListBtn", onClick: function () {
	                                //selectedRows:选中id；tableBodyDataApi：树的全部值
	                                this.props.dlActions.requestDirection(buttonList.act, this.props.id);
	                            }.bind(_this2) },
	                        buttonList.icon ? _react2["default"].createElement(_icon2["default"], { type: buttonList.icon }) : "",
	                        _react2["default"].createElement(
	                            'a',
	                            { href: 'javascript:void(0)' },
	                            buttonList.value ? buttonList.value : ""
	                        )
	                    );
	                default:
	                    return buttonList.buttonName();
	            }
	        }));
	        return _react2["default"].createElement(
	            'div',
	            { style: { paddingTop: "25", paddingBottom: "5" } },
	            _react2["default"].createElement(
	                ButtonGroup,
	                null,
	                buttonGroup
	            )
	        );
	    };

	    return AiButton;
	}(_react.Component);

	exports["default"] = AiButton;
	module.exports = exports['default'];

/***/ },

/***/ 1324:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _css = __webpack_require__(30);

	var _button = __webpack_require__(28);

	var _button2 = _interopRequireDefault(_button);

	var _css2 = __webpack_require__(64);

	var _icon = __webpack_require__(20);

	var _icon2 = _interopRequireDefault(_icon);

	var _css3 = __webpack_require__(73);

	var _table = __webpack_require__(69);

	var _table2 = _interopRequireDefault(_table);

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _defineProperty2 = __webpack_require__(7);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(6);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(5);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _css4 = __webpack_require__(1581);

	var _modal = __webpack_require__(49);

	var _modal2 = _interopRequireDefault(_modal);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _moment = __webpack_require__(22);

	var _moment2 = _interopRequireDefault(_moment);

	var _component = __webpack_require__(13);

	var _component2 = _interopRequireDefault(_component);

	var _dataList4 = __webpack_require__(35);

	var _interfaces = __webpack_require__(33);

	var _interfaces2 = _interopRequireDefault(_interfaces);

	var _AiForm = __webpack_require__(36);

	var _AiForm2 = _interopRequireDefault(_AiForm);

	var _DataList = __webpack_require__(238);

	var _DataList2 = _interopRequireDefault(_DataList);

	var _global = __webpack_require__(15);

	var _history = __webpack_require__(41);

	var _history2 = _interopRequireDefault(_history);

	var _reactRouter = __webpack_require__(118);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var confirm = _modal2["default"].confirm;
	_moment2["default"].locale('zh-cn');

	var TableComponent = function (_Component) {
	    (0, _inherits3["default"])(TableComponent, _Component);

	    TableComponent.prototype.onRowClick = function onRowClick(record, index) {};

	    TableComponent.prototype.onDragStart = function onDragStart(record, index) {};

	    function TableComponent(props) {
	        (0, _classCallCheck3["default"])(this, TableComponent);

	        var _this = (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));

	        _this.pageSize = 15;
	        _this.onResize = _this.onResize.bind(_this);
	        // if(this.props.configs.data)
	        _global.Global.mark({
	            dataList: (0, _defineProperty3["default"])({}, _this.props.id, {
	                currentPage: 0
	            })
	        });
	        if (_this.props.perennity && _this.props.dlState && _this.props.dlState.tableBodyDataApi) {
	            console.log("don't need reload table data");
	        } else {

	            _this.loadTable(0);
	        }

	        return _this;
	    }

	    TableComponent.prototype.loadTable = function loadTable(page) {
	        if (this.props.configs.data.table.body.apiName) {
	            var id = this.props.id;
	            var config = (0, _extends3["default"])({}, this.props.configs.data.table.body);
	            if (_global.Global.getState().aiForm && _global.Global.getState().aiForm[id] && _global.Global.getState().aiForm[id].form) {
	                var body = _global.Global.getState().aiForm[id].form.getFieldsValue();
	                delete body.button;
	                this.props.configs.data.table.body.body = (0, _extends3["default"])({}, this.props.configs.data.table.body.body, body);
	                config = (0, _extends3["default"])({}, config, { body: (0, _extends3["default"])({}, this.props.configs.data.table.body.body) });
	            }

	            this.props.actions.requestTableBodyData(id, config, page, this.pageSize);
	        }
	    };

	    TableComponent.prototype.onResize = function onResize() {
	        if (this.dataBody) {
	            this.bodyHeight = this.dataBody ? this.dataBody.offsetHeight - 70 : 300;
	            this.pageSize = Math.floor((this.bodyHeight - 38) / (this.props.rowHeight || 27)) || 1;
	            this.loadTable(0);
	        }
	    };

	    TableComponent.prototype.componentDidMount = function componentDidMount() {
	        window.addEventListener('resize', this.onResize);
	    };

	    TableComponent.prototype.componentWillUnmount = function componentWillUnmount() {
	        window.removeEventListener('resize', this.onResize);
	    };

	    TableComponent.prototype.render = function render() {
	        var _this4 = this;

	        var state = this.props.dlState;

	        var actions = this.props.dlActions;
	        var equipmentCloumn = [{
	            "title": "设备名称",
	            "dataIndex": "name",
	            "key": "name"
	        }, {
	            "title": "设备编码",
	            "dataIndex": "code",
	            "key": "code"
	        }, {
	            "title": "联系人",
	            "dataIndex": "contacts",
	            "key": "contacts"
	        }, {
	            "title": "联系电话",
	            "dataIndex": "telphone",
	            "key": "telphone"
	        }, {
	            "title": "入网时间",
	            "dataIndex": "time",
	            "key": "time"
	        }];

	        //设置目录和设备之间的授权
	        function setEmpower(record) {
	            var _this2 = this;

	            var config = { "apiName": "getEquipmentInfo", body: { "resId": record.id }, next: function next(action) {
	                    if (action.data) {
	                        actions.showDataSource(_this2.props.id, true);
	                    }
	                } };
	            //获取设备信息
	            actions.getEquipmentInfo(this.props.id, config);
	            //Global.requestApi(config,["req","res","failed"],{datalist:{[this.props.id]:{equipmentInfo:null}}});

	        }
	        function handleOk() {

	            actions.showDataSource(state.id, false);
	        }
	        function handleCancel() {
	            actions.showDataSource(state.id, false);
	        }
	        function showConfirm(record) {
	            var _this3 = this;

	            confirm({
	                title: '告警信息',
	                content: '确认删除？',
	                onOk: function () {
	                    console.log('delete success!');
	                    var arrs = [];
	                    arrs.push(record[_this3.props.configs.data.table.primarykey]);
	                    actions.requestDeleteData(arrs, _this3.props.id, _this3.props.configs.data["delete"].body);
	                }.bind(this),
	                onCancel: function onCancel() {
	                    console.log("delete exit!!!");
	                }
	            });
	        }
	        var aiFormData = {
	            "data": [{
	                "column": 2,
	                "data": [{ "type": "input", "name": "设备名称", "field": "name" }, { "type": "button", "value": "查询", "pageName": "search", "btnType": "primary", "htmlType": "submit" }]
	            }, {
	                "data": function data() {
	                    return _react2["default"].createElement(_table2["default"], { defaultExpandAllRows: true, pagination: false, rowSelection: {
	                            selectedRowKeys: _this4.props.dlState && _this4.props.dlState.selectedRows ? _this4.props.dlState.selectedRows : [],
	                            onChange: function (selectedRowKeys, selectedRows) {
	                                console.log('selectedRowKeys: ' + selectedRowKeys, 'selectedRows: ', selectedRows);
	                                _this4.props.actions.setSelectedRowsToState(Array.isArray(selectedRowKeys) ? selectedRowKeys : selectedRowKeys, _this4.props.id);
	                            }.bind(_this4)
	                        }, onDragStart: _this4.onDragStart, onRowClick: _this4.onRowClick, columns: equipmentCloumn, dataSource: _this4.props.dlState.equipmentInfo.data, bordered: true });
	                }
	            }]
	        };

	        var tableConfigs = this.props.configs ? this.props.configs : null;
	        if (tableConfigs && tableConfigs.data) {
	            var arrs = tableConfigs.data.table.clounms;
	            arrs.forEach(function (column, i) {

	                if (column.render && column.render instanceof Array) {
	                    var arrs1 = column.render;
	                    var primarykey = tableConfigs.data.table.primarykey;
	                    column.render = function (text, record, index) {
	                        var btns = [];
	                        arrs1.forEach(function (item, j) {
	                            switch (item) {

	                                case 'edit':
	                                    btns.push(_react2["default"].createElement(
	                                        _button2["default"],
	                                        { type: 'primary', className: "dataListBtn", onClick: function () {
	                                                var primarykey = tableConfigs.data.table.primarykey;
	                                                _history2["default"].push('datalistV1/' + this.props.id + '/edit/' + record[primarykey]);
	                                            }.bind(_this4) },
	                                        _react2["default"].createElement(_icon2["default"], { type: 'revise' })
	                                    ));
	                                    break;
	                                case 'delete':
	                                    btns.push(_react2["default"].createElement(
	                                        _button2["default"],
	                                        { type: 'primary', className: "dataListBtn", onClick: showConfirm.bind(_this4, record) },
	                                        _react2["default"].createElement(_icon2["default"], { type: 'delete-green' })
	                                    ));
	                                    break;
	                                case 'detail':
	                                    btns.push(_react2["default"].createElement(
	                                        _button2["default"],
	                                        { type: 'primary', className: "dataListBtn", onClick: function () {
	                                                //this.props.dlActions.requestDetailMsg(this.props.id,this.props.configs.data.detail.body);
	                                                var primarykey = tableConfigs.data.table.primarykey;
	                                                var id = record[primarykey];
	                                                var dataListId = this.props.id;
	                                                _global.Global.mark({ dataList: (0, _defineProperty3["default"])({}, dataListId, { selectedRows: [id] }) });
	                                                //history.push(`datalistV1/${this.props.id}/detail/${record[primarykey]}`);
	                                                var detailInfo = this.props.configs.data.detail.body.apiName;
	                                                var detailData = this.props.configs.data.detail.initData.data.apiName;
	                                                _history2["default"].push('/aiForm/' + dataListId + '/' + detailData + '/' + detailInfo);
	                                                //history.push('datalistV1/fbshsyzysjk/list/0/10');
	                                                {
	                                                    console.log("detail page success!!!");
	                                                }
	                                            }.bind(_this4) },
	                                        _react2["default"].createElement(_icon2["default"], { type: 'resource-look' })
	                                    ));
	                                    break;
	                                case 'empower':
	                                    //授权，只用于"我管理的目录"授权
	                                    btns.push(_react2["default"].createElement(
	                                        _button2["default"],
	                                        { type: 'primary', onClick: setEmpower.bind(_this4, record), className: "dataListBtn" },
	                                        _react2["default"].createElement(_icon2["default"], { type: 'key' })
	                                    ));
	                                    break;
	                                default:
	                                    btns.push(item());
	                                    break;
	                            }
	                        });
	                        return btns;
	                    };
	                }
	            });
	        }
	        var dataSource = void 0;

	        if (this.props.dlState.tableBodyDataApi && this.props.dlState.tableBodyDataApi.data && tableConfigs.data && tableConfigs.data.table) {
	            dataSource = this.props.dlState.tableBodyDataApi.data.content ? this.props.dlState.tableBodyDataApi.data.content : this.props.dlState.tableBodyDataApi.data ? this.props.dlState.tableBodyDataApi.data : [];
	        } else if (this.props.configs.data.table.body.dataSource) {
	            dataSource = this.props.configs.data.table.body.dataSource;
	        }
	        if (!Array.isArray(dataSource)) console.log("Datasource data format error: not array!");
	        return _react2["default"].createElement(
	            'div',
	            { ref: function ref(dom) {
	                    setTimeout(function () {
	                        if (!_this4.init) {
	                            _this4.init = true;
	                            _this4.dataBody = dom;
	                            _this4.onResize();
	                        }
	                    }, 500);
	                }, className: "dataBody" },
	            dataSource && _react2["default"].createElement(_table2["default"], { rowKey: tableConfigs.data.table.primarykey,
	                fixed: { height: this.bodyHeight },
	                rowSelection: {
	                    selectedRowKeys: this.props.dlState && this.props.dlState.selectedRows ? this.props.dlState.selectedRows : [],
	                    onChange: function (selectedRowKeys, selectedRows) {
	                        console.log('selectedRowKeys: ' + selectedRowKeys, 'selectedRows: ', selectedRows);
	                        _this4.props.actions.setSelectedRowsToState(Array.isArray(selectedRowKeys) ? selectedRowKeys : selectedRowKeys, _this4.props.id);
	                        if (_this4.props.onChange) _this4.props.onChange(selectedRowKeys, selectedRows);
	                    }.bind(this)
	                },
	                columns: tableConfigs.data.table.clounms,
	                dataSource: dataSource,
	                pagination: tableConfigs.data.table.pagination ? false : {
	                    total: this.props.dlState.tableBodyDataApi ? this.props.dlState.tableBodyDataApi.data.totalElements : dataSource.length,
	                    size: this.props.dlState.tableBodyDataApi ? this.props.dlState.tableBodyDataApi.data.totalPages : dataSource.length / 15,
	                    defaultCurrent: state.currentPage + 1,
	                    pageSize: this.pageSize,
	                    onChange: function (current) {
	                        _this4.loadTable(current - 1);
	                        _global.Global.mark({
	                            dataList: (0, _defineProperty3["default"])({}, _this4.props.id, {
	                                currentPage: current - 1
	                            })
	                        });
	                    }.bind(this)
	                },
	                bordered: true }),
	            state && state.showDataSource && state.equipmentInfo.data && function () {
	                return _react2["default"].createElement(
	                    _modal2["default"],
	                    { title: '\u9009\u62E9\u76EE\u5F55', visible: state.showDataSource,
	                        onOk: handleOk, onCancel: handleCancel,
	                        okText: '\u786E\u8BA4', cancelText: '\u53D6\u6D88', width: 800
	                    },
	                    _react2["default"].createElement(_AiForm2["default"], { config: aiFormData })
	                );
	            }()
	        );
	    };

	    return TableComponent;
	}(_react.Component);

	exports["default"] = (0, _component2["default"])('tableComponent', { setSelectedRowsToState: _dataList4.setSelectedRowsToState, requestTableBodyData: _dataList4.requestTableBodyData })(TableComponent);
	module.exports = exports['default'];

/***/ }

});if(!runed){
            clearInterval(timer);
            timer = setInterval(function(){
                if(temp) {
                    temp(module, exports, __webpack_require__);
                    clearInterval(timer);
                    temp=null;
                    
                }
                time++;
                if(time>500){
                    clearInterval(timer);
                    console.log('more than 500 times')
                }
            },500);
        }})()