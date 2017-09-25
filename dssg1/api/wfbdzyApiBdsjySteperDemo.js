webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getIterator2 = __webpack_require__(37);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _css = __webpack_require__(26);

	var _button = __webpack_require__(23);

	var _button2 = _interopRequireDefault(_button);

	var _css2 = __webpack_require__(2358);

	var _modal = __webpack_require__(29);

	var _modal2 = _interopRequireDefault(_modal);

	var _css3 = __webpack_require__(54);

	var _form = __webpack_require__(53);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _ConnectDatasourceApi = __webpack_require__(1127);

	var _ConnectDatasourceApi2 = _interopRequireDefault(_ConnectDatasourceApi);

	var _global = __webpack_require__(10);

	var _dataFormat = __webpack_require__(64);

	var _interfaces = __webpack_require__(35);

	var _actionType = __webpack_require__(22);

	var _StepContainerV = __webpack_require__(287);

	var _StepContainerV2 = _interopRequireDefault(_StepContainerV);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * Created by liy on 2016/12/16 0019.
	 */
	var FormItem = _form2["default"].Item;
	(0, _jsonp2["default"])("wfbdzyApiBdsjySteperDemo")(function (args, callback) {
	    var states = _global.Global.getState();
	    var list = states.dataList.wfbdzyApiBdsjyXzsjyStep1;
	    var step = states.stepContainer.wfbdzyApiBdsjySteperDemo.step;
	    if (!list && step != 1) {
	        _StepContainerV2["default"].gotoFirst('wfbdzyApiBdsjyXzsjyStep1');
	    }
	    callback({
	        "success": true,
	        "data": {
	            "afterSave": "datalistV1/fbzyList/list/0/10",
	            "steps": [{
	                "type": "datalist",
	                "configStepApi": "wfbdzyApiBdsjyXzsjyStep1",
	                "number": "1",
	                "name": "选择数据源",
	                "id": "wfbdzyApiBdsjyXzsjyStep1",
	                customerClear: function customerClear() {
	                    _global.Global.mark({ aiForm: { wfbdzyApiBdsjyXzsjyStep1: null } });
	                },
	                "footer": [function () {
	                    return _react2["default"].createElement(
	                        _button2["default"],
	                        { style: { backgroundColor: "#1f93e4" }, onClick: function onClick() {
	                                var selected = _global.Global.getState().dataList.wfbdzyApiBdsjyXzsjyStep1.selectedRows;
	                                if (selected.length == 1) {
	                                    _global.Global.requestApi({ apiName: "dataSourceByIdTest",
	                                        body: { id: selected[0] }
	                                    }, _actionType.returnResult.requestDataSourceTest, {
	                                        dataList: {
	                                            wfbdzySjkZyfbSteperDemo: null
	                                        }
	                                    });
	                                } else {
	                                    _modal2["default"].warning({
	                                        title: '提示',
	                                        content: '请选择一个数据，进行测试！'
	                                    });
	                                }
	                            } },
	                        '\u6D4B\u8BD5\u8FDE\u63A5'
	                    );
	                }, "next", "cancel"],
	                "validate": function validate() {
	                    var selected = _global.Global.getState().dataList.wfbdzyApiBdsjyXzsjyStep1.selectedRows;
	                    var valid = selected && selected.length == 1;
	                    if (!valid) {
	                        _modal2["default"].warning({
	                            title: '提示',
	                            content: '请选择一条数据源，然后点击"下一步"。'
	                        });
	                        return valid;
	                    }
	                    _global.Global.mark({ aiForm: { wfbdzyApiBdsjyXzsjyStep1: { selectedRows: selected } } });
	                    return valid;
	                }
	            }, {
	                "type": _react2["default"].createElement(_ConnectDatasourceApi2["default"], { id: 'connectDataSourceApi',
	                    dataSourceApiName: { apiName: "getTableFields" },
	                    allConfigs: { apiName: "viewTableWfbdzyApiConfig" },
	                    getTablesInfo: { apiName: "getAddTableData" },
	                    dataFormTableId: 'wfbdzyApiBdsjyXzsjyStep1',
	                    configs: { apiName: "getDataItemContent" } }),
	                "configStepApi": "",
	                "number": "2",
	                "name": "关联数据表",
	                customerClear: function customerClear() {
	                    _global.Global.mark({ aiFormTable: { aFTDApi: null } });
	                    _global.Global.mark({ dataList: { wfbdzyApiBdsjySrcspzStep2: null } });
	                    _global.Global.mark({ connectDatasource: { connectDataSourceApi: null } });
	                },
	                "id": "wfbdzyApiBdsjySrcspzStep2",
	                "validate": function validate() {
	                    var tables = _global.Global.getState().connectDatasource.connectDataSourceApi.tableIds;

	                    if (tables && tables.length > 1) {
	                        var tableReleation = _global.Global.getState().connectDatasource.connectDataSourceApi.linkdatas ? _global.Global.getState().connectDatasource.connectDataSourceApi.linkdatas : [];
	                        var tabless = [];
	                        if (tableReleation.length > 0) {
	                            tableReleation.map(function (items, i) {
	                                tabless.push(items.from.table);
	                                tabless.push(items.to.table);
	                            });
	                            var _iteratorNormalCompletion = true;
	                            var _didIteratorError = false;
	                            var _iteratorError = undefined;

	                            try {
	                                for (var _iterator = (0, _getIterator3["default"])(tables), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                                    var table = _step.value;

	                                    if (tabless.indexOf(table) < 0) {
	                                        _modal2["default"].warning({
	                                            content: "请添加表关联关系！"
	                                        });
	                                        return false;
	                                    }
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
	                        } else {
	                            _modal2["default"].warning({
	                                content: "请添加表关联关系！"
	                            });
	                            return false;
	                        }
	                    }
	                    var params = _global.Global.getState().aiFormTable.aFTDApi.config.dataSource;
	                    if (params.length == 0) {
	                        _modal2["default"].warning({
	                            content: "数据表字段信息不能为空！"
	                        });
	                        return false;
	                    }
	                    /*let names = [];
	                      for(let param of params){
	                          if(!param.showName || param.showName == ""){
	                    Modal.warning({
	                                  content:"数据项名称不能为空！"
	                              });
	                              return false;
	                    }else if(names.indexOf(param.showName)<0){
	                              names.push(param.showName)
	                          }else{
	                              Modal.warning({
	                                  content:"数据项名称重复，请修改！"
	                              });
	                              return false;
	                          }
	                        }*/
	                    _global.Global.mark({ aiForm: { wfbdzyApiBdsjySrcspzStep3: null } });
	                    return true;
	                }
	            }, {
	                "arg": {},
	                "type": "aiForm",
	                "configStepApi": "wfbdzyApiBdsjySrcspzStep3",
	                "number": "3",
	                "name": "输入参数",
	                "id": "wfbdzyApiBdsjySrcspzStep3",
	                customerClear: function customerClear() {
	                    _global.Global.mark({ aiFormTable: { aFTDStep3: null } });
	                },
	                "validate": function validate() {
	                    _global.Global.mark({ connectDatasource: { connectDataSourceApi: { outIndexs: null } } });
	                    var state = _global.Global.getState();
	                    var form = state.aiForm.wfbdzyApiBdsjySrcspzStep3.form;
	                    var datas = state.aiFormTable.aFTDApi && state.aiFormTable.aFTDApi.config.dataSource ? state.aiFormTable.aFTDApi.config.dataSource : [];
	                    var datas3 = state.aiFormTable.aFTDStep3 && state.aiFormTable.aFTDStep3.config.dataSource ? state.aiFormTable.aFTDStep3.config.dataSource : [];
	                    var indexs = [];
	                    datas.map(function (data, i) {
	                        if (data.enable == true) {
	                            indexs[indexs.length] = i;
	                        }
	                    });
	                    _global.Global.mark({ connectDatasource: { connectDataSourceApi: { outIndexs: indexs } } });
	                    var dataSource = datas3.length > 0 ? (0, _dataFormat.getAiFormTableValue)(state, "aFTDStep3") : [];
	                    if (dataSource.length > 0) {
	                        var queryName = [];
	                        var _iteratorNormalCompletion2 = true;
	                        var _didIteratorError2 = false;
	                        var _iteratorError2 = undefined;

	                        try {
	                            for (var _iterator2 = (0, _getIterator3["default"])(dataSource), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                                var _data = _step2.value;

	                                if (queryName.indexOf(_data.sname) < 0) {
	                                    queryName.push(_data.sname);
	                                } else {
	                                    _modal2["default"].warning({
	                                        content: "查询字段重复，请修改！"
	                                    });
	                                    return false;
	                                }
	                            }
	                        } catch (err) {
	                            _didIteratorError2 = true;
	                            _iteratorError2 = err;
	                        } finally {
	                            try {
	                                if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
	                                    _iterator2["return"]();
	                                }
	                            } finally {
	                                if (_didIteratorError2) {
	                                    throw _iteratorError2;
	                                }
	                            }
	                        }

	                        for (var i = 0; i < datas.length; i++) {
	                            var _iteratorNormalCompletion3 = true;
	                            var _didIteratorError3 = false;
	                            var _iteratorError3 = undefined;

	                            try {
	                                for (var _iterator3 = (0, _getIterator3["default"])(dataSource), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                                    var data = _step3.value;

	                                    var strName = data.name;
	                                    var name = strName.substring(strName.indexOf(".") + 1);
	                                    if (datas[i].name == name) {
	                                        data["table"] = datas[i].table ? datas[i].table : "";
	                                        data["type"] = datas[i].type ? datas[i].type : "";
	                                        data["hiddenName"] = datas[i].name ? datas[i].name : "";
	                                        data["value"] = datas[i].value ? datas[i].value : "";
	                                        data["name"] = name;
	                                    }
	                                }
	                            } catch (err) {
	                                _didIteratorError3 = true;
	                                _iteratorError3 = err;
	                            } finally {
	                                try {
	                                    if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
	                                        _iterator3["return"]();
	                                    }
	                                } finally {
	                                    if (_didIteratorError3) {
	                                        throw _iteratorError3;
	                                    }
	                                }
	                            }
	                        }
	                    }
	                    var validate = false;
	                    form.validateFields(function (fileds) {
	                        validate = !fileds;
	                    });
	                    if (validate) {
	                        _global.Global.mark({ aiForm: { wfbdzyApiBdsjySrcspzStep3: { values: null } } });
	                        _global.Global.mark({ aiForm: { wfbdzyApiBdsjySrcspzStep3: { values: dataSource } } });
	                    }
	                    return validate;
	                }
	            }, {
	                "arg": {},
	                "type": "aiForm",
	                "configStepApi": "wfbdzyApiBdsjySccspzStep4",
	                "number": "4",
	                "name": "输出参数",
	                "id": "wfbdzyApiBdsjySccspzStep4",
	                "validate": function validate() {
	                    var state = _global.Global.getState();
	                    if (state.connectDatasource.connectDataSourceApi.outIndexs && state.connectDatasource.connectDataSourceApi.outIndexs.length < 1) {
	                        _modal2["default"].warning({
	                            content: "请选择输出参数！"
	                        });
	                        return false;
	                    }
	                    var datas4 = state.aiFormTable.aFTDStep4 && state.aiFormTable.aFTDStep4.config.dataSource ? state.aiFormTable.aFTDStep4.config.dataSource : [];
	                    var dataSource = datas4.length > 0 ? (0, _dataFormat.getAiFormTableValue)(state, "aFTDStep4") : [];
	                    var queryName = [];
	                    var _iteratorNormalCompletion4 = true;
	                    var _didIteratorError4 = false;
	                    var _iteratorError4 = undefined;

	                    try {
	                        for (var _iterator4 = (0, _getIterator3["default"])(dataSource), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	                            var data = _step4.value;

	                            if (queryName.indexOf(data.sname) < 0) {
	                                queryName.push(data.sname);
	                            } else {
	                                _modal2["default"].warning({
	                                    content: "查询字段重复，请修改！"
	                                });
	                                return false;
	                            }
	                        }
	                    } catch (err) {
	                        _didIteratorError4 = true;
	                        _iteratorError4 = err;
	                    } finally {
	                        try {
	                            if (!_iteratorNormalCompletion4 && _iterator4["return"]) {
	                                _iterator4["return"]();
	                            }
	                        } finally {
	                            if (_didIteratorError4) {
	                                throw _iteratorError4;
	                            }
	                        }
	                    }

	                    var form = state.aiForm.wfbdzyApiBdsjySccspzStep4.form;
	                    var values = state.aiForm.wfbdzyApiBdsjySccspzStep4.values ? state.aiForm.wfbdzyApiBdsjySccspzStep4.values : {};

	                    var validate = false;
	                    form.validateFields(function (fileds) {
	                        validate = !fileds;
	                    });
	                    if (validate) {
	                        _global.Global.mark({ aiForm: { wfbdzyApiBdsjySccspzStep4: { values: (0, _extends3["default"])({}, values, form.getFieldsValue()) } } });
	                    }
	                    return validate;
	                }
	            }, {
	                "arg": {},
	                "type": "aiForm",
	                "configStepApi": "wfbdzyApiBdsjyTxysjStep5",
	                "number": "5",
	                "name": "接口方式",
	                "id": "wfbdzyApiBdsjyTxysjStep5",
	                "validate": function validate() {
	                    var form = _global.Global.getState().aiForm.wfbdzyApiBdsjyTxysjStep5.form;
	                    var values = form.getFieldsValue();
	                    var validate = false;
	                    form.validateFields(function (fileds) {
	                        validate = !fileds;
	                    });
	                    /*if(values.picturePath && values.picturePath.length>1){
	                        Modal.warning({
	                            title:"提示",
	                            content:"图片只能上传一张！"
	                        });
	                        validate = false;
	                    }*/
	                    if (validate) {
	                        _global.Global.mark({ aiForm: { wfbdzyApiBdsjyFbylStep7: null } });
	                        _global.Global.mark({ aiForm: { wfbdzyApiBdsjyTxysjStep5: { values: (0, _extends3["default"])({}, values) } } });
	                    }
	                    return validate;
	                }
	            }, /*{
	                 "type": "aiForm",
	                 "configStepApi": "wfbdzyApiBdsjyPzdyqxStep5To6",
	                 "number": "6",
	                 "name": "配置资源有效期",
	                 "id": "wfbdzyApiBdsjyPzdyqxStep5To6",
	                 customerClear:()=>{
	                     Global.mark({aiFormTable: {aFTDStep5To6: null}});
	                 },
	                 "validate": () => {
	                     let state = Global.getState();
	                     let validate = false;
	                     let values = state.aiFormTable.aFTDStep5To6.config.dataSource[0];
	                     if(!values.validBeginTime || values.validBeginTime=="" ||!values.validEndTime || values.validEndTime==""){
	                         Modal.warning({
	                             content:"时间不能为空！"
	                         });
	                         validate = false;
	                     }else{
	                         let validBeginTime = values.validBeginTime.valueOf();
	                         let validEndTime = values.validEndTime.valueOf();
	                         if(validBeginTime>= validEndTime){
	                             Modal.warning({
	                                 content:"开始时间要小于结束时间！"
	                             });
	                             validate = false;
	                         }else{
	                             validate = true;
	                         }
	                     }
	                     Global.mark({aiForm: {wfbdzyApiBdsjyPzdyqxStep6: null}});
	                     return validate;
	                 }
	               },{
	                 "arg":{
	                   },
	                 "type":"aiForm",
	                 "configStepApi":"wfbdzyApiBdsjyPzdyqxStep6",
	                 "number":"7",
	                 "name":"配置订阅权限",
	                 "id":"wfbdzyApiBdsjyPzdyqxStep6",
	                 customerClear:()=>{
	                     Global.mark({aiFormTable: {aFTDStep6: null}});
	                 },
	                 "validate": () => {
	                     let form = Global.getState().aiForm.wfbdzyApiBdsjyPzdyqxStep6.form;
	                     let validate = false;
	                     form.validateFields((fileds) => {
	                         validate = !fileds;
	                     });
	                     if (validate) {
	                         Global.mark({aiForm:{wfbdzyApiBdsjyFbylStep7:null}});
	                         Global.mark({aiForm: {wfbdzyApiBdsjyPzdyqxStep6: {values: form.getFieldsValue()}}})
	                     }
	                     return validate;
	                 }
	               },*/{
	                "arg": {},
	                "type": "aiForm",
	                "configStepApi": "wfbdzyApiBdsjyFbylStep7",
	                "number": "6",
	                "name": "发布预览",
	                "id": "wfbdzyApiBdsjyFbylStep7",
	                "validate": function validate() {
	                    var apiConfig = (0, _extends3["default"])({}, _interfaces.zyfbApiAllSaveAllData, {
	                        body: (0, _extends3["default"])({}, _interfaces.zyfbApiAllSaveAllData.body, _global.Global.getState().aiForm.wfbdzyApiBdsjyFbylStep7.values) });
	                    return apiConfig;
	                }
	            }]
	        }
	    });
	});

/***/ },

/***/ 1127:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _keys = __webpack_require__(152);

	var _keys2 = _interopRequireDefault(_keys);

	var _getIterator2 = __webpack_require__(37);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _css = __webpack_require__(61);

	var _table = __webpack_require__(60);

	var _table2 = _interopRequireDefault(_table);

	var _css2 = __webpack_require__(2358);

	var _modal = __webpack_require__(29);

	var _modal2 = _interopRequireDefault(_modal);

	var _css3 = __webpack_require__(26);

	var _button = __webpack_require__(23);

	var _button2 = _interopRequireDefault(_button);

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(6);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(5);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _css4 = __webpack_require__(76);

	var _radio = __webpack_require__(63);

	var _radio2 = _interopRequireDefault(_radio);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _component = __webpack_require__(11);

	var _component2 = _interopRequireDefault(_component);

	var _connectDataSource = __webpack_require__(281);

	var _AiForm = __webpack_require__(27);

	var _AiForm2 = _interopRequireDefault(_AiForm);

	var _dataList = __webpack_require__(30);

	var _zrender = __webpack_require__(190);

	var _zrender2 = _interopRequireDefault(_zrender);

	__webpack_require__(2357);

	__webpack_require__(186);

	var _Group = __webpack_require__(144);

	var _Group2 = _interopRequireDefault(_Group);

	var _Rect = __webpack_require__(2354);

	var _Rect2 = _interopRequireDefault(_Rect);

	var _Text = __webpack_require__(205);

	var _Text2 = _interopRequireDefault(_Text);

	var _text = __webpack_require__(123);

	var _text2 = _interopRequireDefault(_text);

	var _Arrow = __webpack_require__(285);

	var _Arrow2 = _interopRequireDefault(_Arrow);

	var _aiFormTable = __webpack_require__(150);

	var _global = __webpack_require__(10);

	var _dataFormat = __webpack_require__(64);

	var _interfaces = __webpack_require__(35);

	var _interfaces2 = _interopRequireDefault(_interfaces);

	var _history = __webpack_require__(32);

	var _history2 = _interopRequireDefault(_history);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * Created by tiangb on 2016/12/6 0006.
	 */
	var RadioGroup = _radio2["default"].Group;
	var directions = [null, "left", "right", "inner"];

	var ConnectDatasourceApi = function (_Component) {
	    (0, _inherits3["default"])(ConnectDatasourceApi, _Component);

	    function ConnectDatasourceApi(props) {
	        (0, _classCallCheck3["default"])(this, ConnectDatasourceApi);

	        var _this = (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));

	        _this.lineMap = {};
	        return _this;
	    }

	    ConnectDatasourceApi.prototype.componentDidMount = function componentDidMount() {
	        var i = _interfaces2["default"][this.props.getTablesInfo.apiName];
	        this.props.actions.requestTables(this.props.id, (0, _extends3["default"])({}, i, { body: (0, _extends3["default"])({}, i.body, { id: this.props.glState.dataList[this.props.dataFormTableId].selectedRows[0], page: 0, size: 10 }) }));

	        this.onResize = this.onResize.bind(this);
	        window.addEventListener('resize', this.onResize);
	    };

	    ConnectDatasourceApi.prototype.onResize = function onResize(e) {
	        this.props.actions.mark(this.props.id, { resize: true });
	        setTimeout(this.props.actions.mark.bind(this, this.props.id, { resize: false }), 1000);
	    };

	    ConnectDatasourceApi.prototype.componentWillUnmount = function componentWillUnmount() {
	        console.log("willUnmount:", this.zr);
	        if (this.zr) this.zr.dispose();
	        window.removeEventListener('resize', this.onResize);
	    };

	    ConnectDatasourceApi.prototype.render = function render() {
	        var _this2 = this;

	        var state = this.props.state;
	        var actions = this.props.actions;
	        var id = this.props.id;
	        var cloumns = [{
	            "title": "数据表名称",
	            "dataIndex": "name"
	        }];

	        var tableTiles = [];
	        if (state && actions && state.requestTables && state.requestTables.data && state.requestTables.data.content) {
	            state.requestTables.data.content.forEach(function (tableTile, key) {
	                tableTiles.push({
	                    key: key,
	                    dataTableName: tableTile.name
	                });
	            });
	        }
	        var rowSelection = {
	            type: this.props.mode == 'api' ? 'radio' : 'checkbox',
	            selectedRowKeys: _global.Global.getState() && _global.Global.getState().dataList && _global.Global.getState().dataList.wfbdzyApiBdsjySrcspzStep2 && _global.Global.getState().dataList.wfbdzyApiBdsjySrcspzStep2.page && _global.Global.getState().dataList.wfbdzyApiBdsjySrcspzStep2.tableIds && _global.Global.getState().dataList.wfbdzyApiBdsjySrcspzStep2.tableIds[_global.Global.getState().dataList.wfbdzyApiBdsjySrcspzStep2.page] ? _global.Global.getState().dataList.wfbdzyApiBdsjySrcspzStep2.tableIds[_global.Global.getState().dataList.wfbdzyApiBdsjySrcspzStep2.page] : "",

	            onChange: function onChange(selectedRowKeys, selectedRows) {
	                console.log(selectedRowKeys, selectedRows);
	                var state = _global.Global.getState();
	                if (state.dataList.wfbdzyApiBdsjySrcspzStep2 && state.dataList.wfbdzyApiBdsjySrcspzStep2.page) {
	                    (function () {
	                        var page = state.dataList.wfbdzyApiBdsjySrcspzStep2.page;
	                        var tableIds = state.dataList.wfbdzyApiBdsjySrcspzStep2.tableIds ? state.dataList.wfbdzyApiBdsjySrcspzStep2.tableIds : {};
	                        var tableNames = state.dataList.wfbdzyApiBdsjySrcspzStep2.tableNames ? state.dataList.wfbdzyApiBdsjySrcspzStep2.tableNames : {};
	                        tableIds[page] = selectedRowKeys; //connectDatasource.connectDataSourceApi.tableIds
	                        var tableName = [];
	                        selectedRows.forEach(function (item, index) {
	                            tableName.push(item.name);
	                            //tableIds.names = selectedRowKeys;
	                        });
	                        tableNames[page] = tableName;
	                        _global.Global.mark({ dataList: { wfbdzyApiBdsjySrcspzStep2: { tableIds: tableIds } } });
	                        _global.Global.mark({ dataList: { wfbdzyApiBdsjySrcspzStep2: { tableNames: tableNames } } });
	                        var key = void 0,
	                            names = [];
	                        for (key in tableNames) {
	                            tableNames[key].forEach(function (tableName, i) {
	                                names.push(tableName);
	                            });
	                        };
	                        actions.addTable(id, names);
	                    })();
	                } else {
	                    var tableName = [];
	                    selectedRows.forEach(function (item, index) {
	                        tableName.push(item.name);
	                    });
	                    actions.addTable(id, tableName);
	                }
	            }
	        };

	        //多张联合表内容数组
	        // const data = [];
	        var columns = [];
	        var radioStyle = {
	            display: 'block',
	            height: '30px',
	            lineHeight: '30px'
	        };
	        //多张联合表列数组
	        return _react2["default"].createElement(
	            'div',
	            null,
	            state && actions && state.requestTables && state.requestTables.data && state.requestTables.data.content && !state.tableIds && _react2["default"].createElement(
	                'div',
	                { style: { textAlign: 'center', paddingTop: 30 } },
	                _react2["default"].createElement(
	                    _button2["default"],
	                    { type: 'primary', onClick: function onClick() {
	                            _global.Global.mark({ dataList: { wfbdzyApiBdsjySrcspzStep2: { page: 1 } } });
	                            actions.showDataSourceDlg(id, true);
	                        } },
	                    '\u6DFB\u52A0\u6570\u636E\u8868'
	                )
	            ),
	            state && state.msg && _react2["default"].createElement(
	                _modal2["default"],
	                { title: '\u63D0\u793A', visible: true,
	                    onOk: function () {
	                        actions.mark(id, { msg: null });
	                    }.bind(this),
	                    onCancel: function onCancel() {
	                        actions.mark(id, { msg: null });
	                    }
	                },
	                state.msg
	            ),
	            state && state.showDataSourceDlg && _react2["default"].createElement(
	                _modal2["default"],
	                { title: '\u9009\u62E9\u8868', maskClosable: false, visible: state.showDataSourceDlg,
	                    onOk: function () {
	                        var states = _global.Global.getState();

	                        var result = state.tableIds && state.tableIds.length > 0;
	                        if (result) {
	                            actions.showDataSourceDlg(id, false);
	                            var tableTitle = void 0;
	                            if (state && state.requestTables && state.requestTables.data && state.requestTables.data.content && state.tableIds) {
	                                tableTitle = state.tableIds;
	                            }
	                            var config = _this2.props.dataSourceApiName;

	                            actions.getContentByTableTile(tableTitle, _this2.props.glState.dataList[_this2.props.dataFormTableId].selectedRows[0], config, id);
	                        } else {
	                            actions.showDataSourceDlg(id, false);
	                            return;
	                        }
	                    }.bind(this),
	                    onCancel: function onCancel() {
	                        _global.Global.mark({
	                            connectDatasource: {
	                                connectDataSourceApi: {
	                                    tableIds: null
	                                }
	                            }
	                        });
	                        actions.showDataSourceDlg(id, false);
	                    }

	                },
	                state && actions && state.requestTables && state.requestTables.data && state.requestTables.data.content && _react2["default"].createElement(_table2["default"], { rowSelection: rowSelection, bordered: true, columns: cloumns, dataSource: _global.Global.getState().dataList.connectDataSourceApi && _global.Global.getState().dataList.connectDataSourceApi.tableBodyDataApi.data && _global.Global.getState().dataList.connectDataSourceApi.tableBodyDataApi.data.content ? _global.Global.getState().dataList.connectDataSourceApi.tableBodyDataApi.data.content : state.requestTables.data.content,
	                    pagination: {
	                        total: state.requestTables.data.totalElements,
	                        size: state.requestTables.data.totalElements / 10,
	                        pageSize: 10,
	                        onChange: function (current) {
	                            _global.Global.mark({ dataList: { wfbdzyApiBdsjySrcspzStep2: { page: current } } });
	                            var page1 = current - 1;
	                            _this2.props.actions.requestTableBodyData(_this2.props.id, { apiName: 'getAddTableData',
	                                body: { id: _global.Global.getState().dataList[_this2.props.dataFormTableId].selectedRows[0] },
	                                page: page1,
	                                size: 10 }, page1);
	                        }.bind(this)
	                    }
	                })
	            ),
	            state && (state.selectFrom && state.selectTo || state.showConnectDlg) && _react2["default"].createElement(
	                _modal2["default"],
	                { title: '\u8FDE\u63A5\u7C7B\u578B', visible: true,
	                    onOk: function () {
	                        actions.showConnectDlg(id, false);
	                        actions.linkData(id);
	                        actions.setLinkType(id, false, state.linkType);
	                        actions.setSelectField(id, null, null);
	                    }.bind(this),
	                    onCancel: function onCancel() {
	                        actions.setSelectField(id, null, null);
	                        actions.showConnectDlg(id, false);
	                    }
	                },
	                _react2["default"].createElement(
	                    RadioGroup,
	                    { onChange: function onChange(e) {
	                            actions.setLinkType(id, true, e.target.value);
	                        }, value: state.linkType != undefined ? state.linkType : "1" },
	                    _react2["default"].createElement(
	                        _radio2["default"],
	                        { style: radioStyle, value: '1' },
	                        '\u5DE6\u8FDE\u63A5'
	                    ),
	                    _react2["default"].createElement(
	                        _radio2["default"],
	                        { style: radioStyle, value: '2' },
	                        '\u53F3\u8FDE\u63A5'
	                    ),
	                    _react2["default"].createElement(
	                        _radio2["default"],
	                        { style: radioStyle, value: '3' },
	                        '\u5185\u8FDE\u63A5'
	                    )
	                )
	            ),
	            state && state.linkdatas && function () {
	                var index = 0;
	                for (var linkId in _this2.lineMap) {
	                    var _line = _this2.lineMap[linkId];
	                    _this2.stage.remove && _this2.stage.remove(_line);
	                }
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;

	                try {
	                    for (var _iterator = (0, _getIterator3["default"])(state.linkdatas), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var link = _step.value;

	                        if (!_this2.lineMap[link.id]) {
	                            var line = new _Arrow2["default"]({
	                                style: {
	                                    stroke: "#CDCDCD"
	                                },
	                                shape: {
	                                    link: link
	                                }
	                            });

	                            line.on('mouseover', function (id, e) {
	                                index = (0, _keys2["default"])(_this2.lineMap).indexOf(id);
	                                if (index == -1) debugger;
	                                if (_this2.stage.moving) return;
	                                var line = e.target;
	                                line.style.stroke = '#00b3b2';
	                                line.dirty(true);
	                                _this2.editBtns.ignore = false;
	                                _this2.editBtns.position = [-_this2.stage.position[0] + e.offsetX, -_this2.stage.position[1] + e.offsetY + 10];
	                                _this2.editBtns.dirty(true);
	                                _this2.overLink = index;
	                                _this2.overLine = line;
	                            }.bind(_this2, link.id));

	                            line.on('mouseout', function (id, e) {
	                                index = (0, _keys2["default"])(_this2.lineMap).indexOf(id);
	                                if (index == -1) debugger;
	                                var line = e.target;
	                                line.style.stroke = '#CDCDCD';
	                                line.dirty(true);
	                                if (_this2.editTimer) {
	                                    clearTimeout(_this2.editTimer);
	                                }
	                                _this2.editTimer = setTimeout(function () {
	                                    _this2.editBtns.ignore = true;
	                                }, 3000);
	                            }.bind(_this2, link.id));
	                            _this2.lineMap[link.id] = line;
	                            _this2.stage.addBefore && _this2.stage.addBefore(line, _this2.stage.children()[1]);
	                        } else {
	                            var _line2 = _this2.lineMap[link.id];
	                            _line2.dirty(true);
	                            _this2.stage.addBefore && _this2.stage.addBefore(_line2, _this2.stage.children()[1]);
	                        }
	                        index++;
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
	            }.bind(this)(),
	            state && state.tableIds && !state.showDataSourceDlg && state.getContentByTableTile && state.getContentByTableTile.data && _react2["default"].createElement(
	                'div',
	                { id: 'cavas', style: { width: "100%", height: 300 }, ref: function (dom) {
	                        _this2.canvas = dom;
	                        if (_this2.zr || !dom) return; //this.zr.dispose();

	                        var ox = void 0,
	                            oy = void 0,
	                            dx = void 0,
	                            dy = void 0,
	                            mx = void 0,
	                            my = void 0,
	                            ux = void 0,
	                            uy = void 0,
	                            vx = void 0,
	                            vy = void 0,
	                            moveTarget = void 0;
	                        var onMouseDown = function onMouseDown(e) {
	                            moveTarget = e.target.parent;
	                            dx = e.offsetX;
	                            dy = e.offsetY;
	                            ox = moveTarget.position[0];
	                            oy = moveTarget.position[1];
	                            _this2.stage.moving = true;
	                        };
	                        var onMouseMove = function onMouseMove(e) {
	                            if (dx != null) {
	                                mx = e.offsetX;
	                                my = e.offsetY;
	                                vx = mx - dx;
	                                vy = my - dy;
	                                moveTarget.position[0] = ox + vx;
	                                moveTarget.position[1] = oy + vy;
	                                moveTarget.dirty(true);
	                                if (moveTarget.type == "table") {
	                                    //actions.updateLine(id);
	                                    var _iteratorNormalCompletion2 = true;
	                                    var _didIteratorError2 = false;
	                                    var _iteratorError2 = undefined;

	                                    try {
	                                        for (var _iterator2 = (0, _getIterator3["default"])(_this2.props.state.linkdatas), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                                            var link = _step2.value;

	                                            if (_this2.lineMap[link.id]) {
	                                                _this2.lineMap[link.id].dirty(true);
	                                            }
	                                        }
	                                    } catch (err) {
	                                        _didIteratorError2 = true;
	                                        _iteratorError2 = err;
	                                    } finally {
	                                        try {
	                                            if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
	                                                _iterator2["return"]();
	                                            }
	                                        } finally {
	                                            if (_didIteratorError2) {
	                                                throw _iteratorError2;
	                                            }
	                                        }
	                                    }
	                                }
	                            }
	                        };
	                        var onMouseUp = function onMouseUp() {
	                            dx = dy = null;
	                            _this2.stage.moving = false;
	                        };
	                        var onMouseOut = function onMouseOut(e) {
	                            /* if(e.target == this.zr){
	                             dx = dy = null;
	                             } */
	                        };

	                        var zr = _this2.zr = _zrender2["default"].init(dom);
	                        var stage = _this2.stage = new _Group2["default"]({
	                            position: [10, 10]
	                        });
	                        var bg = new _Rect2["default"]({
	                            position: [-100000, -100000],
	                            shape: {
	                                r: 4,
	                                x: 0,
	                                y: 0,
	                                width: 200000,
	                                height: 200000
	                            },
	                            style: {
	                                fill: "#fff",
	                                stroke: '#D2D2D2',
	                                lineWidth: 1
	                            }
	                        });
	                        bg.on('mousedown', onMouseDown);
	                        //bg.on('mousemove',onMouseMove);
	                        stage.add(bg);

	                        var editBtns = _this2.editBtns = new _Group2["default"]({
	                            ignore: true
	                        });

	                        editBtns.on('mouseover', function () {
	                            if (_this2.editTimer) {
	                                clearTimeout(_this2.editTimer);
	                            }
	                            _this2.overLine.style.stroke = '#00b3b2';
	                            _this2.overLine.dirty(true);
	                        }.bind(_this2));
	                        editBtns.on('mouseout', function (e) {
	                            var rect = _this2.editBtns.getBoundingRect();
	                            var x = -_this2.stage.position[0] + e.offsetX - _this2.editBtns.position[0];
	                            var y = -_this2.stage.position[1] + e.offsetY - _this2.editBtns.position[1];
	                            if (!rect.contain(x, y)) {
	                                _this2.editBtns.ignore = true;
	                                _this2.overLine.style.stroke = '#CDCDCD';
	                                _this2.overLine.dirty(true);
	                                _this2.editBtns.dirty(true);
	                            }
	                        }.bind(_this2));

	                        var editBg = new _Rect2["default"]({
	                            position: [-50, 0],
	                            shape: {
	                                r: 4,
	                                x: 0,
	                                y: 0,
	                                width: 100,
	                                height: 26
	                            },
	                            style: {
	                                fill: "#ffffff",
	                                stroke: null,
	                                lineWidth: 0
	                            },
	                            name: 'editBg'
	                        });
	                        editBtns.add(editBg);

	                        var editBtn = new _Rect2["default"]({
	                            position: [-45, 0],
	                            shape: {
	                                r: 4,
	                                x: 0,
	                                y: 0,
	                                width: 40,
	                                height: 26
	                            },
	                            style: {
	                                fill: "#fff",
	                                stroke: '#D2D2D2',
	                                lineWidth: 1,
	                                text: '编辑'
	                            }
	                        });
	                        editBtn.on('click', function () {
	                            actions.mark(id, {
	                                currentLink: _this2.overLink,
	                                linkType: _this2.props.state.linkdatas[_this2.overLink].linkType,
	                                showConnectDlg: true
	                            });
	                            _this2.editBtns.hide();
	                        }.bind(_this2));
	                        editBtns.add(editBtn);

	                        var delBtn = new _Rect2["default"]({
	                            position: [5, 0],
	                            shape: {
	                                r: 4,
	                                x: 0,
	                                y: 0,
	                                width: 40,
	                                height: 26
	                            },
	                            style: {
	                                fill: "#fff",
	                                stroke: '#D2D2D2',
	                                lineWidth: 1,
	                                text: '删除'
	                            }
	                        });
	                        delBtn.on('click', function () {
	                            actions.mark(id, { currentLink: _this2.overLink });

	                            _this2.editBtns.hide();
	                            actions.delLink(id);
	                            var lineId = (0, _keys2["default"])(_this2.lineMap)[_this2.overLink];
	                            delete _this2.lineMap[lineId];
	                        }.bind(_this2));
	                        editBtns.add(delBtn);
	                        var states = _global.Global.getState();
	                        var dataSource = states.aiFormTable && states.aiFormTable.aFTDApi && states.aiFormTable.aFTDApi.config && states.aiFormTable.aFTDApi.config.dataSource ? states.aiFormTable.aFTDApi.config.dataSource : [];
	                        state.tableIds.forEach(function (tableId, i) {

	                            var tableInfo = state.getContentByTableTile.data;
	                            //表序号

	                            var group = new _Group2["default"]({
	                                draggable: true,
	                                type: 'table'
	                            });

	                            var rect = new _Rect2["default"]({
	                                position: [0, 25],
	                                shape: {
	                                    r: 2,
	                                    x: 0,
	                                    y: 0,
	                                    width: 200,
	                                    height: 235
	                                },
	                                style: {
	                                    fill: "#fff",
	                                    stroke: '#D2D2D2',
	                                    lineWidth: 1
	                                }
	                            });
	                            group.add(rect);

	                            //表名称
	                            var text = new _Text2["default"]({
	                                position: [100, 0],
	                                style: {
	                                    x: 0,
	                                    y: 0,
	                                    text: tableId,
	                                    width: 200,
	                                    height: 50,
	                                    fill: '#666666',
	                                    textFont: '18px Microsoft Yahei',
	                                    textBaseline: 'top',
	                                    textAlign: 'center'
	                                }
	                            });
	                            group.add(text);

	                            tableInfo.forEach(function (table, j) {
	                                var item = table.tableData;
	                                tableId == table.tableName && item.forEach(function (field, j) {
	                                    if (field.columnName != "PK" && field.columnName != "pk" && field.columnName != "NotNullColumn") {
	                                        var clickNum = 0;
	                                        var dbClickTimer = null;
	                                        var fieldContent = field.columnCode + "   " + field.type;
	                                        var truncateText = _text2["default"].truncateText(fieldContent, 150);
	                                        text = new _Text2["default"]({
	                                            position: [10, 30 + 20 * j],
	                                            style: {
	                                                x: 0,
	                                                y: 0,
	                                                text: truncateText,
	                                                width: 180,
	                                                height: 20,
	                                                fill: '#666666',
	                                                textFont: '14px Microsoft Yahei',
	                                                textBaseline: 'top',
	                                                textAlign: 'left'
	                                            },

	                                            onclick: function onclick() {
	                                                if (clickNum == 0) {
	                                                    dbClickTimer = setTimeout(function () {
	                                                        this.dirty(true);
	                                                        actions.setSelectField(id, tableId, field.columnCode, this);
	                                                        clickNum = 0;
	                                                    }.bind(this), 200);
	                                                    clickNum++;
	                                                } else {
	                                                    clearTimeout(dbClickTimer);
	                                                    var dataPara = _global.Global.getState().aiFormTable.aFTDApi && _global.Global.getState().aiFormTable.aFTDApi.config && _global.Global.getState().aiFormTable.aFTDApi.config.dataSource ? _global.Global.getState().aiFormTable.aFTDApi.config.dataSource : [];
	                                                    var name = field.columnCode;
	                                                    var dataType = field.type;
	                                                    var tableName = tableId;
	                                                    var data = { name: name,
	                                                        showName: name,
	                                                        //dataType:dataType,
	                                                        table: tableName,
	                                                        enable: true,
	                                                        type: dataType,
	                                                        length: dataType.substring(dataType.indexOf("(") + 1, dataType.indexOf(")")),
	                                                        index: dataPara.length + 1 + "" };

	                                                    //showName字段改成可修改

	                                                    for (var p in data) {
	                                                        if (p == "showName") {
	                                                            data[p + '_field'] = p + "_field" + "_" + dataPara.length;
	                                                            data[data[p + '_field']] = data[p];
	                                                            data.key = Math.random().toString();
	                                                        }
	                                                    }

	                                                    _global.Global.mark({
	                                                        aiForm: { wfbdzyApiBdsjySrcspzStep3: null }
	                                                    });
	                                                    var names = [];

	                                                    if (dataPara.length > 0) {
	                                                        dataPara.map(function (data, i) {
	                                                            names.push(data.table + "." + data.name);
	                                                        });
	                                                        if (names.indexOf(data.table + "." + data.name) < 0) {
	                                                            //dataSource.push(data);
	                                                            _global.Global.dispatch((0, _aiFormTable.addRow)(data, "aFTDApi"));
	                                                        } else {
	                                                            return false;
	                                                        }
	                                                    } else {
	                                                        //dataSource.push(data);
	                                                        _global.Global.dispatch((0, _aiFormTable.addRow)(data, "aFTDApi"));
	                                                    }
	                                                    clickNum = 0;
	                                                }
	                                            }

	                                        });
	                                        group.add(text);
	                                    }
	                                });
	                            });

	                            var realHeight = tableInfo.length * 20;
	                            if (realHeight > 235) {
	                                rect.setShape({ height: realHeight + 30 });
	                            }

	                            rect.on('mousedown', onMouseDown);
	                            //rect.on('mousemove',onMouseMove);
	                            group.position = [i * 240, 0];
	                            stage.add(group);
	                        });

	                        zr.on('mouseup', onMouseUp);
	                        zr.on('mousemove', onMouseMove);
	                        zr.on('mouseout', onMouseOut);
	                        stage.position[0] = zr.painter._width / 2 - 1 * state.tableIds.length * 220 / 2;
	                        stage.add(editBtns);
	                        zr.add(stage);
	                    }.bind(this) },
	                state && state.resize && function () {
	                    _this2.zr.resize({ width: _this2.canvas.offsetWidth, height: _this2.canvas.offsetHeight });
	                }()
	            ),
	            state && state.tableIds && state.getContentByTableTile && state.getContentByTableTile.data && _react2["default"].createElement(_AiForm2["default"], { config: { apiName: this.props.allConfigs.apiName }, id: 'viewTableApiDemo1' })
	        );
	    };

	    return ConnectDatasourceApi;
	}(_react.Component);

	exports["default"] = (0, _component2["default"])('connectDatasource', { addRow: _aiFormTable.addRow, requestTableBodyData: _dataList.requestTableBodyData, getContentByTableTile: _connectDataSource.getContentByTableTile, showDataSourceDlg: _connectDataSource.showDataSourceDlg, setSelectField: _connectDataSource.setSelectField, linkData: _connectDataSource.linkData, setLinkType: _connectDataSource.setLinkType, requestTables: _connectDataSource.requestTables, addTable: _connectDataSource.addTable, requestDataDir: _connectDataSource.requestDataDir, showConnectDlg: _connectDataSource.showConnectDlg, updateLine: _connectDataSource.updateLine, mark: _connectDataSource.mark, delLink: _connectDataSource.delLink }, function (state, dispatchProps, ownProps) {
	    return { glState: state };
	})(ConnectDatasourceApi);
	module.exports = exports['default'];

/***/ }

});