(function(){ var runed=0,temp,timer,time;webpackJsonp([3],{

/***/ 0:
/***/ temp = function(module, exports, __webpack_require__) {runed=true;

	'use strict';

	var _css = __webpack_require__(54);

	var _modal = __webpack_require__(49);

	var _modal2 = _interopRequireDefault(_modal);

	var _css2 = __webpack_require__(64);

	var _icon = __webpack_require__(20);

	var _icon2 = _interopRequireDefault(_icon);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _component = __webpack_require__(13);

	var _component2 = _interopRequireDefault(_component);

	var _jsonp = __webpack_require__(234);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _dataFormat = __webpack_require__(172);

	var _global = __webpack_require__(15);

	var _AiForm = __webpack_require__(36);

	var _AiForm2 = _interopRequireDefault(_AiForm);

	var _dataList = __webpack_require__(35);

	var _history = __webpack_require__(41);

	var _history2 = _interopRequireDefault(_history);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("banner")(function (args, callback) {
	    var dialogConfig = {
	        data: [{
	            "showTitle": false,
	            "data": []
	        }]
	    };

	    callback({
	        "success": true,
	        "data": {
	            "id": "banner",
	            "title": "这是DataList组件页面！！！！！",
	            "buttonConfigs": [{ "buttonName": "add" }, { "buttonName": "edit" }, {
	                "buttonName": function buttonName(config) {
	                    return _react2["default"].createElement(
	                        'div',
	                        { style: { "float": "left" } },
	                        _react2["default"].createElement(
	                            'div',
	                            null,
	                            _react2["default"].createElement(_icon2["default"], { type: 'menu-unfold' }),
	                            _react2["default"].createElement(
	                                'a',
	                                { onClick: function onClick() {
	                                        {
	                                            var result = (0, _dataFormat.checkSelectId)(_global.Global, 'banner');
	                                            if (!result) {
	                                                _modal2["default"].warning({
	                                                    content: '请选择一条数据！'
	                                                });
	                                                return false;
	                                            }
	                                            _history2["default"].push("/aiForm/banner/bannerDetail/bannerDetailData");
	                                        }
	                                    } },
	                                '\u8BE6\u60C5'
	                            )
	                        )
	                    );
	                }
	            }, { "buttonName": "delete", onClick: function onClick(e) {
	                    var finalData = _global.Global.getState().dataList.banner.selectedRows;
	                    var isData = _global.Global.getState().dataList.banner.tableBodyDataApi.data.content;
	                    for (var j = 0; j < finalData.length; j++) {
	                        for (var i = 0; i < isData.length; i++) {
	                            if (finalData[j] == isData[i].id) {
	                                if ("已发布" == isData[i].publishStatus) {
	                                    _modal2["default"].warning({
	                                        content: '不能删除已发布的数据！'
	                                    });
	                                    return false;
	                                }
	                            }
	                        }
	                    }
	                    return true;
	                } }, {
	                "buttonName": function buttonName(config) {
	                    return _react2["default"].createElement(
	                        'div',
	                        { style: { "float": "left" } },
	                        _react2["default"].createElement(
	                            'div',
	                            null,
	                            _react2["default"].createElement(_icon2["default"], { type: 'menu-unfold' }),
	                            _react2["default"].createElement(
	                                'a',
	                                { onClick: function onClick() {
	                                        {
	                                            var result = (0, _dataFormat.checkSelectId)(_global.Global, 'banner');
	                                            if (!result) {
	                                                _modal2["default"].warning({
	                                                    content: '请选择一条数据！'
	                                                });
	                                                return false;
	                                            }
	                                            var result2 = (0, _dataFormat.checkTableOneData)(_global.Global, "banner", "publishStatus", "已发布");
	                                            if (!result2) {
	                                                _modal2["default"].warning({
	                                                    content: '不能发布已发布的数据！'
	                                                });
	                                                return false;
	                                            }
	                                            var isData = _global.Global.getState().dataList.banner.tableBodyDataApi.data.content;
	                                            for (var i = 0; i < isData.length; i++) {
	                                                if ("已发布" == isData[i].publishStatus) {
	                                                    _modal2["default"].warning({
	                                                        content: '只能发布一条数据！'
	                                                    });
	                                                    return false;
	                                                }
	                                            }
	                                            var close = function close() {
	                                                _global.Global.mark({
	                                                    dataList: {
	                                                        banner: {
	                                                            dialog: {
	                                                                show: false
	                                                            }
	                                                        }
	                                                    }
	                                                });
	                                            };
	                                            _global.Global.mark({
	                                                dataList: {
	                                                    banner: {
	                                                        dialog: {
	                                                            show: true,
	                                                            content: _react2["default"].createElement(
	                                                                'div',
	                                                                null,
	                                                                _react2["default"].createElement(_AiForm2["default"], { id: 'recommend', version: '2', config: dialogConfig }),
	                                                                _react2["default"].createElement(
	                                                                    'div',
	                                                                    null,
	                                                                    '\u662F\u5426\u53D1\u5E03\u8BE5\u8D44\u6E90\uFF1F'
	                                                                )
	                                                            ),
	                                                            title: "发布资源",
	                                                            onOk: function onOk() {
	                                                                var fid = _global.Global.getState().dataList.banner.selectedRows[0];
	                                                                _global.Global.requestApi({
	                                                                    "apiName": "bannerPublishData",
	                                                                    "body": { id: fid, status: 1 }
	                                                                }, ["requestResState", "receiveResState", "failedResState"], {});
	                                                                var cPage = _global.Global.getState().dataList.banner.currentPage;
	                                                                _global.Global.dispatch((0, _dataList.requestTableBodyData)('banner', '', cPage, size = 10));
	                                                                close();
	                                                            },
	                                                            onCancel: close
	                                                        }

	                                                    }
	                                                }
	                                            });
	                                        }
	                                    } },
	                                '\u53D1\u5E03'
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
	                            null,
	                            _react2["default"].createElement(_icon2["default"], { type: 'menu-unfold' }),
	                            _react2["default"].createElement(
	                                'a',
	                                { onClick: function onClick() {
	                                        {
	                                            var result = (0, _dataFormat.checkSelectId)(_global.Global, 'banner');
	                                            if (!result) {
	                                                _modal2["default"].warning({
	                                                    content: '请选择一条数据！'
	                                                });
	                                                return false;
	                                            }
	                                            var result2 = (0, _dataFormat.checkTableOneData)(_global.Global, "banner", "publishStatus", "未发布");
	                                            if (!result2) {
	                                                _modal2["default"].warning({
	                                                    content: '不能撤销未发布的数据！'
	                                                });
	                                                return false;
	                                            }
	                                            var close = function close() {
	                                                _global.Global.mark({
	                                                    dataList: {
	                                                        banner: {
	                                                            dialog: {
	                                                                show: false
	                                                            }
	                                                        }
	                                                    }
	                                                });
	                                            };
	                                            _global.Global.mark({
	                                                dataList: {
	                                                    banner: {
	                                                        dialog: {
	                                                            show: true,
	                                                            content: _react2["default"].createElement(
	                                                                'div',
	                                                                null,
	                                                                _react2["default"].createElement(_AiForm2["default"], { id: 'recommend', version: '2', config: dialogConfig }),
	                                                                _react2["default"].createElement(
	                                                                    'div',
	                                                                    null,
	                                                                    '\u662F\u5426\u64A4\u9500\u8BE5\u8D44\u6E90\uFF1F'
	                                                                )
	                                                            ),
	                                                            title: "撤销资源",
	                                                            onOk: function onOk() {
	                                                                var fid2 = _global.Global.getState().dataList.banner.selectedRows[0];
	                                                                _global.Global.requestApi({
	                                                                    "apiName": "bannerPublishData",
	                                                                    "body": { id: fid2, status: 0 }
	                                                                }, ["requestResState", "receiveResState", "failedResState"], {});
	                                                                var cPage = _global.Global.getState().dataList.banner.currentPage;
	                                                                _global.Global.dispatch((0, _dataList.requestTableBodyData)('banner', '', cPage, size = 10));
	                                                                close();
	                                                            },
	                                                            onCancel: close
	                                                        }

	                                                    }
	                                                }
	                                            });
	                                        }
	                                    } },
	                                '\u64A4\u9500'
	                            )
	                        )
	                    );
	                }
	            }],
	            "searchConfig": {
	                "data": [{
	                    "column": 5,
	                    "data": [{ "type": "datePicker", "name": "日期", "col": 3, "field": "startTime", "props": { style: { width: 210 } } }, { "type": "datePicker", "name": "至", "col": 5, "field": "endTime", "props": { style: { width: 210 } } }, { "type": "select", "name": "资源类型", "col": 5, "field": "type", "options": [{ value: "1", key: "视频" }, { value: "2", key: "图片" }] }, { "type": "button", "col": 2, "value": "查询", "pageName": "search", props: { type: "primary" }, "htmlType": "submit" }]
	                }],
	                "body": { apiName: 'bannerListBody', body: { pageNum: 0, pageSize: 10 } }
	            },
	            "table": {
	                "primarykey": "id",
	                "clounms": [{
	                    "title": "创建日期",
	                    "dataIndex": "createTime",
	                    "key": "createTime",
	                    "width": 100
	                }, {
	                    "title": "标题",
	                    "dataIndex": "title",
	                    "key": "title",
	                    "width": 300
	                }, {
	                    "title": "类型",
	                    "dataIndex": "type",
	                    "key": "type",
	                    "width": 100
	                }, {
	                    "title": "状态",
	                    "dataIndex": "publishStatus",
	                    "key": "publishStatus",
	                    "width": 100
	                }],
	                "body": { apiName: 'bannerListBody' }
	            },
	            "list": {
	                "view": null,
	                "listApi": null,
	                "saveApi": null
	            },
	            "add": {
	                "initData": {
	                    data: { apiName: "bannerAdd" }
	                },
	                "onAddSubmitApi": { "apiName": "bannerAddData", "dataFormate": function dataFormate(values) {
	                        return (0, _dataFormat.finallyData)(values, _global.Global);
	                    } }
	            },
	            "edit": {
	                "initData": {
	                    data: { apiName: "bannerEdit" }
	                },
	                "onUpdateSubmitApi": { "apiName": "bannerEditData", "dataFormate": function dataFormate(values) {
	                        return (0, _dataFormat.finallyData)(values, _global.Global);
	                    } }
	            },
	            "detail": {
	                "body": { apiName: 'bannerDetailData' }
	            },
	            "delete": {
	                "body": { apiName: 'bannerDeleteData' }
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

	var _css8 = __webpack_require__(104);

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