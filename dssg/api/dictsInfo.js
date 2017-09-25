(function(){ var runed=0,temp,timer,time;webpackJsonp([3],{

/***/ 0:
/***/ temp = function(module, exports, __webpack_require__) {runed=true;

	'use strict';

	var _css = __webpack_require__(1488);

	var _modal = __webpack_require__(49);

	var _modal2 = _interopRequireDefault(_modal);

	var _css2 = __webpack_require__(64);

	var _icon = __webpack_require__(20);

	var _icon2 = _interopRequireDefault(_icon);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(234);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(15);

	var _AiForm = __webpack_require__(36);

	var _AiForm2 = _interopRequireDefault(_AiForm);

	var _Utils = __webpack_require__(838);

	var _Utils2 = _interopRequireDefault(_Utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("dictsInfo")(function (args, callback) {
	    callback({
	        "success": true,
	        "data": {
	            "id": "dictsInfo",
	            "title": "数据字典",
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
	                                _react2["default"].createElement(_icon2["default"], { type: 'add' }),
	                                _react2["default"].createElement(
	                                    'a',
	                                    { onClick: function onClick() {
	                                            var state = _global.Global.getState();
	                                            var dictsInfoId = state.dataList.dictsInfo.selectedRows;
	                                            if (dictsInfoId && dictsInfoId.length > 1) {
	                                                _modal2["default"].warning({
	                                                    title: "提示",
	                                                    content: "请选择一条以内数据！"
	                                                });
	                                            }
	                                            if (dictsInfoId && dictsInfoId.length == 1) {
	                                                _global.Global.requestApi({ apiName: "flglDetail", body: { id: dictsInfoId[0] } }, ['requesta', 'receieve', 'failedDetailMsg'], { dataList: { dictsInfo: { detailMsgDataApi: null } } });
	                                            } else {
	                                                _global.Global.mark({ dataList: { dictsInfo: { detailMsgDataApi: null } } });
	                                                _global.Global.mark({ dataList: {
	                                                        dictsInfo: {
	                                                            action: "add"
	                                                        }
	                                                    }
	                                                });
	                                            }
	                                            var updatePwdInfo = { show: true,
	                                                title: "新增字典",
	                                                onCancel: function onCancel() {
	                                                    _global.Global.mark({ dataList: {
	                                                            dictsInfo: {
	                                                                dialog: {
	                                                                    show: false
	                                                                },
	                                                                detailMsgDataApi: null
	                                                            }
	                                                        },
	                                                        aiForm: {
	                                                            dictEditData: null
	                                                        }
	                                                    });
	                                                },
	                                                onOk: function onOk() {
	                                                    var form = _global.Global.getState().aiForm.dictEditData.form;
	                                                    form.validateFields(function (fileds) {
	                                                        if (fileds) {
	                                                            return false;
	                                                        } else {
	                                                            var values = form.getFieldsValue();
	                                                            _global.Global.requestApi({ apiName: "updateFtpPwd", body: { values: values } }, ['requestUpateData', 'receievegetUpdateData', 'failedDetailMsg'], {});
	                                                        }
	                                                    });
	                                                },
	                                                content: _react2["default"].createElement(_AiForm2["default"], { config: { apiName: 'dictEditData' }, id: 'dictEditData' }) };
	                                            _global.Global.mark({ dataList: {
	                                                    dictsInfo: {
	                                                        dialog: updatePwdInfo
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
	                                _react2["default"].createElement(_icon2["default"], { type: 'revise' }),
	                                _react2["default"].createElement(
	                                    'a',
	                                    { onClick: function onClick() {
	                                            var state = _global.Global.getState();
	                                            var dictsInfoId = state.dataList.dictsInfo.selectedRows;
	                                            if (dictsInfoId && dictsInfoId.length == 1) {
	                                                _global.Global.requestApi({ apiName: "flglDetail", body: { id: dictsInfoId[0] } }, ['requesta', 'receieve', 'failedDetailMsg'], { dataList: { dictsInfo: { detailMsgDataApi: null } } });
	                                                var updatePwdInfo = { show: true,
	                                                    title: "修改字典",
	                                                    onCancel: function onCancel() {
	                                                        _global.Global.mark({ dataList: {
	                                                                dictsInfo: {
	                                                                    dialog: {
	                                                                        show: false
	                                                                    }
	                                                                }
	                                                            }
	                                                        });
	                                                    },
	                                                    onOk: function onOk() {
	                                                        var form = _global.Global.getState().aiForm.dictEditData.form;
	                                                        form.validateFields(function (fileds) {
	                                                            if (fileds) {
	                                                                return false;
	                                                            } else {
	                                                                var values = form.getFieldsValue();
	                                                                _global.Global.requestApi({ apiName: "updateFtpPwd", body: { values: values } }, ['requestUpateData', 'receievegetUpdateData', 'failedDetailMsg'], {});
	                                                            }
	                                                        });
	                                                    },
	                                                    content: _react2["default"].createElement(_AiForm2["default"], { config: { apiName: 'dictEditData' }, id: 'dictEditData' }) };
	                                                _global.Global.mark({ dataList: {
	                                                        dictsInfo: {
	                                                            dialog: updatePwdInfo
	                                                        }
	                                                    }
	                                                });
	                                            } else {
	                                                _modal2["default"].warning({
	                                                    title: '提示',
	                                                    content: '请选择一条信息进行操作!'
	                                                });
	                                            }
	                                        } },
	                                    '\u4FEE\u6539'
	                                )
	                            )
	                        )
	                    );
	                }
	            }, { "buttonName": "delete" }],
	            "table": {
	                "primarykey": "id",
	                "pagination": false,
	                "clounms": [{
	                    "title": "字典项",
	                    "dataIndex": "name",
	                    "key": "name",
	                    "width": "30%"
	                }, {
	                    "title": "字典编码",
	                    "dataIndex": "code",
	                    "key": "code",
	                    "width": "30%"
	                }, {
	                    "title": "描述",
	                    "dataIndex": "description",
	                    "key": "description",
	                    "width": "30%"
	                }],
	                "body": { apiName: 'flglData' }
	            },
	            "list": {
	                "view": null,
	                "listApi": null,
	                "saveApi": null
	            },
	            "add": {
	                "initData": {
	                    data: { apiName: "getFlglEdit" }
	                },
	                "onAddSubmitApi": { "apiName": "addFlglInfo" }
	            },
	            "edit": {
	                "initData": {
	                    data: { apiName: "getFlglEdit" }
	                },
	                "onUpdateSubmitApi": { "apiName": "editFlglInfo" }
	            },
	            "delete": {
	                "body": { apiName: 'deleteFlglInfo' }
	            },
	            "detail": {
	                "body": { apiName: 'flglDetail' }
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

	var _css8 = __webpack_require__(1480);

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

/***/ 838:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.dlStateWarning = exports.selectedToFormArgs = undefined;

	var _css = __webpack_require__(1488);

	var _modal = __webpack_require__(49);

	var _modal2 = _interopRequireDefault(_modal);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _global = __webpack_require__(15);

	var _config = __webpack_require__(430);

	var _history = __webpack_require__(41);

	var _history2 = _interopRequireDefault(_history);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports["default"] = function (tabs, args) {
	    /*item.show 用于其他tab的展示标志位，eg部门分类和主题分类*/
	    return tabs.map(function (item, i) {
	        if (_config.resourceType.indexOf(item.name) != -1 || item.show == "1") {
	            return _react2["default"].createElement(
	                'div',
	                { className: "configLeftBtnGp" },
	                _react2["default"].createElement(
	                    'a',
	                    { href: "#/datalistV1/" + item.urlPart + "/list/0/10", className: args.target.props.params.config == item.urlPart ? "configLeftBtnGpA" : "" },
	                    _react2["default"].createElement(
	                        'span',
	                        null,
	                        item.name
	                    )
	                )
	            );
	        }
	    });
	};

	var selectedToFormArgs = exports.selectedToFormArgs = function selectedToFormArgs(datalistId) {
	    return {};
	};

	var dlStateWarning = exports.dlStateWarning = function dlStateWarning(key) {
	    _modal2["default"].warning({
	        title: "提示1",
	        content: "页面刷新，请重新选择要查看的条目。",
	        onOk: function onOk() {
	            setTimeout(function () {
	                var config = _global.Global.getState().routing.path.match(new RegExp('datalistV1/(\\w*)/' + key));
	                _history2["default"].push("datalistV1/" + config[1] + "/list/0/10");
	            }, 500);
	        }
	    });
	};

/***/ },

/***/ 961:
377,

/***/ 974:
17

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