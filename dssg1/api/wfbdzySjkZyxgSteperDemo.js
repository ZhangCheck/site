webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(26);

	var _button = __webpack_require__(23);

	var _button2 = _interopRequireDefault(_button);

	var _css2 = __webpack_require__(2501);

	var _modal = __webpack_require__(29);

	var _modal2 = _interopRequireDefault(_modal);

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _ConnectDatasourceUpdate = __webpack_require__(1129);

	var _ConnectDatasourceUpdate2 = _interopRequireDefault(_ConnectDatasourceUpdate);

	var _AiForm = __webpack_require__(27);

	var _AiForm2 = _interopRequireDefault(_AiForm);

	var _global = __webpack_require__(10);

	var _StepContainerV = __webpack_require__(287);

	var _StepContainerV2 = _interopRequireDefault(_StepContainerV);

	var _interfaces = __webpack_require__(35);

	var _actionType = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * Created by liy on 2016/12/19 0019.
	 */
	(0, _jsonp2["default"])("wfbdzySjkZyxgSteperDemo")(function (args, callback) {
	    //let target = args.target;
	    var list = _global.Global.getState().dataList.wfbdzySjk;
	    if (!list || !list.selectedRows) {
	        _StepContainerV2["default"]["goto"]('wfbdzySjkZyxgSteperDemo', "datalistV1/wfbdzySjk/list/0/10");
	        return;
	    }
	    var state = _global.Global.getState();
	    callback({
	        "success": true,
	        "data": {
	            "afterSave": "datalistV1/wfbdzySjk/list/0/10",
	            "steps": [{
	                "type": "datalist",
	                "configStepApi": "wfbdzySjkZyxgStep2",
	                "number": "1",
	                "name": "选择数据源",
	                "id": "wfbdzySjkZyxgStep2",
	                "footer": [function () {
	                    return _react2["default"].createElement(
	                        _button2["default"],
	                        { onClick: function onClick() {
	                                var selected = _global.Global.getState().dataList.wfbdzySjkZyxgStep2.selectedRows;
	                                if (selected.length == 1) {
	                                    _global.Global.requestApi((0, _extends3["default"])({}, _interfaces.dataSourceByIdTest, {
	                                        body: { id: selected[0] }
	                                    }), _actionType.returnResult.requestDataSourceTest, {
	                                        dataList: {
	                                            wfbdzySjkZyfbSteperDemo: null
	                                        }
	                                    });
	                                } else {
	                                    _modal2["default"].warning({
	                                        title: '提示',
	                                        content: '请选择一个数据源，进行测试！'
	                                    });
	                                }
	                            } },
	                        '\u6D4B\u8BD5\u8FDE\u63A5'
	                    );
	                }, "next", "cancel"],
	                "validate": function validate() {
	                    var selected = _global.Global.getState().dataList.wfbdzySjkZyxgStep2 ? _global.Global.getState().dataList.wfbdzySjkZyxgStep2.selectedRows : null;
	                    var validate = selected && selected.length == 1;
	                    var result = _global.Global.getState().dataList.wfbdzySjkZyxgSteperDemo ? _global.Global.getState().dataList.wfbdzySjkZyxgSteperDemo.data : undefined;
	                    if (!validate) {
	                        _modal2["default"].warning({
	                            title: '提示',
	                            content: '请选择一个条目，然后点击”下一步“。'
	                        });
	                        return validate;
	                    }
	                    _global.Global.mark({ connectDatasource: { ConnectDatasourceUpdate: null } });
	                    return validate;
	                }
	            }, {
	                "type": _react2["default"].createElement(
	                    'div',
	                    null,
	                    _react2["default"].createElement(_ConnectDatasourceUpdate2["default"], { id: 'ConnectDatasourceUpdate',
	                        dataSourceApiName: { apiName: "getTableFields" },
	                        allConfigs: { apiName: "wfbdzySjkZyxgStep3" },
	                        getTablesInfo: { apiName: "getAddTableData" },
	                        dataFormTableId: 'wfbdzySjkZyxgStep2',
	                        dataToTableId: 'wfbdzySjk',
	                        configs: { apiName: "getDataItemContent" } })
	                ),
	                "number": "2",
	                "name": "关联数据表",
	                "id": "wfbdzySjkZyxgStep3"
	            }, {
	                "arg": {},
	                "type": "aiForm",
	                "configStepApi": "wfbdzySjkZyxgStep5",
	                "number": "3",
	                "name": "填写元数据信息",
	                "id": "wfbdzySjkZyxgStep5",
	                "validate": function validate() {
	                    _global.Global.mark({ connectDatasource: { ConnectDatasourceUpdate: { outIndexs: null } } });
	                    var form = _global.Global.getState().aiForm.wfbdzySjkZyxgStep5.form;
	                    var values = form.getFieldsValue();
	                    var validate = false;
	                    form.validateFields(function (fileds) {
	                        validate = !fileds;
	                    });
	                    if (validate) {
	                        _global.Global.mark({ aiForm: { wfbdzySjkZyxgStep8: null } });
	                        _global.Global.mark({ aiFormTable: { sjkXgStep8: null } });
	                        _global.Global.mark({ aiForm: { wfbdzySjkZyxgStep5: { values: (0, _extends3["default"])({}, values) } } });
	                    }
	                    return validate;
	                }
	            }, {
	                "type": "aiForm",
	                "configStepApi": "wfbdzySjkZyxgStep8",
	                "number": "4",
	                "name": "配置资源有效期",
	                "id": "wfbdzySjkZyxgStep8",
	                "validate": function validate() {
	                    var state = _global.Global.getState();
	                    var validate = false;
	                    var formValue = {};
	                    var values = state.aiFormTable.sjkXgStep8.config.dataSource[0];
	                    if (!values.validBeginTime || values.validBeginTime == "" || !values.validEndTime || values.validEndTime == "") {
	                        _modal2["default"].warning({
	                            content: "时间不能为空！"
	                        });
	                        validate = false;
	                    } else {
	                        var validBeginTime = typeof values.validBeginTime == "string" ? new Date(values.validBeginTime) : values.validBeginTime;
	                        var validEndTime = typeof values.validEndTime == "string" ? new Date(values.validEndTime) : values.validEndTime;
	                        formValue["validBeginTime"] = values.validBeginTime;
	                        formValue["validEndTime"] = values.validEndTime;
	                        if (validBeginTime.valueOf() >= validEndTime.valueOf()) {
	                            _modal2["default"].warning({
	                                content: "开始时间要小于结束时间！"
	                            });
	                            validate = false;
	                        } else {
	                            validate = true;
	                        }
	                    }
	                    if (validate) {
	                        _global.Global.mark({ aiForm: { wfbdzySjkZyxgStep6: null } });
	                        _global.Global.mark({ aiForm: { wfbdzySjkZyxgStep8: { values: formValue } } });
	                    }
	                    return validate;
	                }
	            }, {
	                "type": "aiForm",
	                "configStepApi": "wfbdzySjkZyxgStep6",
	                "number": "5",
	                "name": "配置更新策略",
	                "id": "wfbdzySjkZyxgStep6",
	                "validate": function validate() {
	                    var form = _global.Global.getState().aiForm.wfbdzySjkZyxgStep6.form;
	                    var validate = false;
	                    form.validateFields(function (fileds) {
	                        validate = !fileds;
	                    });
	                    var compareTimes = new Date(form.getFieldValue('startTime'));
	                    var values = _global.Global.getState().aiForm.wfbdzySjkZyxgStep8.values;

	                    var startTimes = typeof values.validBeginTime == "string" ? new Date(values.validBeginTime) : values.validBeginTime;
	                    var endTimes = typeof values.validEndTime == "string" ? new Date(values.validEndTime) : values.validEndTime;

	                    if (form.getFieldValue('ddModel') == 2) {
	                        var dayTime = parseInt(form.getFieldValue('dayTime'));
	                        var hourTime = parseInt(form.getFieldValue('hourTime'));
	                        var minTime = parseInt(form.getFieldValue('minTime'));
	                        var dqTimeUnit = parseInt(form.getFieldValue('dqTimeUnit'));
	                        if (!/^[0-9]+$/.test(hourTime) || !/^[0-9]+$/.test(minTime)) {
	                            _modal2["default"].warning({
	                                title: '提示',
	                                content: '请正确填写时间!'
	                            });
	                            validate = false;
	                        } else if (hourTime > 24 || hourTime < 0 || minTime > 60 || minTime < 0) {
	                            _modal2["default"].warning({
	                                title: '提示',
	                                content: '请正确填写时间!'
	                            });
	                            validate = false;
	                        } else if (dqTimeUnit == 1) {
	                            if (!/^[0-9]+$/.test(dayTime) || dayTime > 31 || dayTime <= 0) {
	                                _modal2["default"].warning({
	                                    title: '提示',
	                                    content: '请正确填写时间!'
	                                });
	                                validate = false;
	                            } else {
	                                validate = true;
	                            }
	                        } else if (dqTimeUnit == 2) {
	                            if (!/^[0-9]+$/.test(dayTime) || dayTime > 7 || dayTime <= 0) {
	                                _modal2["default"].warning({
	                                    title: '提示',
	                                    content: '请正确填写时间!'
	                                });
	                                validate = false;
	                            } else {
	                                validate = true;
	                            }
	                        } else {
	                            validate = true;
	                        }
	                    } else if (form.getFieldValue('ddModel') == 1) {
	                        var zqIntervalCycle = parseInt(form.getFieldValue('zqIntervalCycle'));
	                        var zqTimeUnit = parseInt(form.getFieldValue('zqTimeUnit'));
	                        if (compareTimes.valueOf() > startTimes.valueOf() && compareTimes.valueOf() < endTimes.valueOf()) {
	                            if (zqTimeUnit == 3 || zqTimeUnit == 2) {
	                                if (!/^[0-9]+$/.test(zqIntervalCycle)) {
	                                    _modal2["default"].warning({
	                                        title: '提示',
	                                        content: '请正确填写时间!'
	                                    });
	                                    validate = false;
	                                } else if (zqIntervalCycle > 60 || zqIntervalCycle < 0) {
	                                    _modal2["default"].warning({
	                                        title: '提示',
	                                        content: '请正确填写时间!'
	                                    });
	                                    validate = false;
	                                } else {
	                                    validate = true;
	                                }
	                            } else if (zqTimeUnit == 1) {
	                                if (!/^[0-9]+$/.test(zqIntervalCycle)) {
	                                    _modal2["default"].warning({
	                                        title: '提示',
	                                        content: '请正确填写时间!'
	                                    });
	                                    validate = false;
	                                } else if (zqIntervalCycle > 24 || zqIntervalCycle < 0) {
	                                    _modal2["default"].warning({
	                                        title: '提示',
	                                        content: '请正确填写时间!'
	                                    });
	                                    validate = false;
	                                } else {
	                                    validate = true;
	                                }
	                            } else {
	                                validate = true;
	                            }
	                        } else {
	                            _modal2["default"].warning({
	                                title: '提示',
	                                content: '周期模式时间不允许超出资源有效期时间'
	                            });
	                            validate = false;
	                        }
	                    }
	                    if (validate) {
	                        // let validBeginTime = form.getFieldValue('startTime');
	                        // let validEndTime = form.getFieldValue('endTime');
	                        _global.Global.mark({ aiForm: { wfbdzySjkZyxgStep7: null } });
	                        _global.Global.mark({ aiForm: { wfbdzySjkZyxgStep6: { values: form.getFieldsValue() } } });
	                    }
	                    return validate;
	                }
	            }, {
	                "type": "aiForm",
	                "configStepApi": "wfbdzySjkZyxgStep7",
	                "number": "6",
	                "name": "发布预览",
	                "id": "wfbdzySjkZyxgStep7",
	                "style": "gray",
	                "validate": function validate() {
	                    var newState = _global.Global.getState();
	                    var values = newState.aiForm.wfbdzySjkZyxgStep7.values;
	                    var apiConfig = (0, _extends3["default"])({}, _interfaces.RePublishResource, { body: (0, _extends3["default"])({}, _interfaces.RePublishResource.body, values) });
	                    _global.Global.mark({ dataList: { getResourceForUpdate: null } });
	                    return apiConfig;
	                    // let form = Global.getState().aiForm.wfbdzyFileZyfbStep3.form;
	                    // let upload = form.getFieldsValue();
	                    // let apiConfig = {...wfbdzySjkZyfbSaveAllData, body: {...wfbdzySjkZyfbSaveAllData.body, data: upload}}
	                    // return apiConfig;
	                    // console.log(Global.getState().aiForm.wfbdzyFileZyfbStep3.values)
	                }
	            }]
	        }
	    });
	});

/***/ },

/***/ 1129:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getIterator2 = __webpack_require__(37);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _css = __webpack_require__(61);

	var _table = __webpack_require__(60);

	var _table2 = _interopRequireDefault(_table);

	var _css2 = __webpack_require__(2501);

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

	var _zrender = __webpack_require__(190);

	var _zrender2 = _interopRequireDefault(_zrender);

	__webpack_require__(2732);

	__webpack_require__(186);

	var _Group = __webpack_require__(144);

	var _Group2 = _interopRequireDefault(_Group);

	var _Rect = __webpack_require__(2729);

	var _Rect2 = _interopRequireDefault(_Rect);

	var _Text = __webpack_require__(205);

	var _Text2 = _interopRequireDefault(_Text);

	var _text = __webpack_require__(123);

	var _text2 = _interopRequireDefault(_text);

	var _Arrow = __webpack_require__(285);

	var _Arrow2 = _interopRequireDefault(_Arrow);

	var _global = __webpack_require__(10);

	var _history = __webpack_require__(32);

	var _history2 = _interopRequireDefault(_history);

	var _dataList = __webpack_require__(30);

	var _interfaces = __webpack_require__(35);

	var _interfaces2 = _interopRequireDefault(_interfaces);

	var _StepContainerV = __webpack_require__(287);

	var _StepContainerV2 = _interopRequireDefault(_StepContainerV);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	//import ZLine from 'zrender/lib/graphic/shape/Line';
	var RadioGroup = _radio2["default"].Group;
	//import ZPolygon from 'zrender/lib/graphic/shape/Polygon';
	/**
	 * Created by liy on 2016/12/6 0006.
	 */

	var directions = [null, "left", "right", "inner"];

	var ConnectDatasourceUpdate = function (_Component) {
	    (0, _inherits3["default"])(ConnectDatasourceUpdate, _Component);

	    function ConnectDatasourceUpdate(props) {
	        (0, _classCallCheck3["default"])(this, ConnectDatasourceUpdate);

	        var _this = (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));

	        _this.lineMap = {};
	        var state = _global.Global.getState();
	        var oldId = state.dataList.wfbdzySjkZyxgStep2.itemId;
	        var newId = state.dataList.wfbdzySjkZyxgStep2.selectedRows[0];
	        var resources = state.dataList.getResourceForUpdate.data.resourceItemDTO;
	        var allDatas = JSON.parse(resources.dbPublishDataJson);
	        //Method getAddTableData;
	        var tableIds = allDatas.tables;
	        if (oldId == newId) {
	            _global.Global.mark({
	                connectDatasource: {
	                    ConnectDatasourceUpdate: {
	                        tableIds: tableIds
	                    }
	                }
	            });
	            var config = _this.props.dataSourceApiName;

	            _global.Global.requestApi({ apiName: config.apiName, body: { datasourceId: oldId, tableName: tableIds }, next: function next(action) {
	                    _global.Global.mark({
	                        connectDatasource: {
	                            ConnectDatasourceUpdate: {
	                                getContentByTableTile: action
	                            }
	                        } });
	                } }, {});
	            var linkdatas = [];
	            allDatas.table_releation.forEach(function (items, index) {
	                var sources = items.releation;
	                var from = {};var to = {};
	                var sourceFileds = sources.split(',');
	                from.table = items.sourceTable;
	                from.field = sourceFileds[0];
	                from.zField = '';
	                to.table = items.targetTable;
	                to.field = sourceFileds[1];
	                to.zField = '';
	                // {from:compState.selectFrom,to:compState.selectTo,linkType:1,id:id}
	                linkdatas.push({
	                    from: { table: items.sourceTable, field: sourceFileds[0], zField: '' },
	                    to: { table: items.targetTable, field: sourceFileds[1], zField: '' },
	                    linkType: items.joinType,
	                    id: items.sourceTable + '_' + items.targetTable
	                });
	                _global.Global.mark({
	                    connectDatasource: {
	                        ConnectDatasourceUpdate: {
	                            linkdatas: linkdatas
	                        }
	                    } });
	            });
	        } else {
	            var tables = [];
	            _global.Global.requestApi({ apiName: 'getAddTableData', body: { id: newId }, next: function next(action) {
	                    tableIds.forEach(function (item) {
	                        action.data.forEach(function (item1) {
	                            if (item1.name == item) {
	                                tables.push(item);
	                            }
	                        });
	                    });
	                    _global.Global.mark({
	                        connectDatasource: {
	                            ConnectDatasourceUpdate: {
	                                tableIds: tables
	                            }
	                        }
	                    });
	                } }, {});
	        }
	        return _this;
	    }

	    ConnectDatasourceUpdate.prototype.componentDidMount = function componentDidMount() {
	        console.log("page ready");
	        // ----- component init here -----
	        //var i = interfaces[this.props.getTablesInfo.apiName];
	        //var itemInterface = interfaces[this.props.configs.apiName];
	        //this.props.actions.requestTables(this.props.id,{...i,body:{...i.body,id:this.props.glState.dataList[this.props.dataFormTableId].selectedRows[0],page:0,size:10}});
	        //this.props.actions.requestDataDir({...itemInterface,body:{...itemInterface.body,id:this.props.glState.dataList[this.props.dataToTableId].selectedRows[0]}},this.props.id);
	        var i = _interfaces2["default"][this.props.getTablesInfo.apiName];
	        this.props.actions.requestTables(this.props.id, (0, _extends3["default"])({}, i, { body: (0, _extends3["default"])({}, i.body, { id: this.props.glState.dataList[this.props.dataFormTableId].selectedRows[0], page: 0, size: 10 }),
	            next: function next(action) {
	                var states = _global.Global.getState();
	                var resources = states.dataList.getResourceForUpdate.data.resourceItemDTO;
	                var allDatas = JSON.parse(resources.dbPublishDataJson);
	                //Method getAddTableData;
	                var tableIds = allDatas.tables;
	                var selectKeys = [];
	                //判断第一步骤的数据源id发生改变，改变之后第二步选中的表数据数组为[]
	                //if(detailMsg.dataSourceId == states.dataList.wfbdzyApiBdsjyXzsjyStep1.selectedRows[0]){
	                var tables = action.data.content;
	                tables.map(function (table, i) {
	                    tableIds.map(function (tab, j) {
	                        if (tab == table.name) {
	                            var num = selectKeys.length;
	                            selectKeys[num] = i;
	                        }
	                    });
	                });
	                //}
	                _global.Global.mark({ connectDatasource: {
	                        ConnectDatasourceUpdate: {
	                            selectKeys: selectKeys
	                        }
	                    }
	                });
	            } }));
	        this.onResize = this.onResize.bind(this);
	        window.addEventListener('resize', this.onResize);
	    };

	    ConnectDatasourceUpdate.prototype.onResize = function onResize(e) {
	        this.props.actions.mark(this.props.id, { resize: true });
	        setTimeout(this.props.actions.mark.bind(this, this.props.id, { resize: false }), 1000);
	    };

	    ConnectDatasourceUpdate.prototype.componentWillUnmount = function componentWillUnmount() {
	        console.log("willUnmount:", this.zr);
	        if (this.zr) this.zr.dispose();
	        window.removeEventListener('resize', this.onResize);
	    };

	    ConnectDatasourceUpdate.prototype.render = function render() {
	        var _this2 = this;

	        var state = this.props.state;
	        var glState = _global.Global.getState();
	        var actions = this.props.actions;
	        var id = this.props.id;
	        var resources = glState.dataList.getResourceForUpdate.data.resourceItemDTO;
	        var allDatas = JSON.parse(resources.dbPublishDataJson);
	        var cloumns = [{
	            "title": "数据表名称",
	            "dataIndex": "name"
	        }];

	        var tableTiles = [];
	        if (glState && actions && glState.connectDatasource && glState.connectDatasource.ConnectDatasourceUpdate && glState.connectDatasource.ConnectDatasourceUpdate.requestTables && glState.connectDatasource.ConnectDatasourceUpdate.requestTables.data) {
	            glState.connectDatasource.ConnectDatasourceUpdate.requestTables.data.content.forEach(function (tableTile, key) {
	                tableTiles.push({
	                    key: key,
	                    tableName: tableTile.name
	                });
	            });
	        }
	        var rowSelection = {
	            type: this.props.mode == 'api' ? 'radio' : 'checkbox',
	            selectedRowKeys: _global.Global.getState() && _global.Global.getState().dataList && _global.Global.getState().dataList.wfbdzySjkZyxgStep2 && _global.Global.getState().dataList.wfbdzySjkZyxgStep2.page && _global.Global.getState().dataList.wfbdzySjkZyxgStep2.tableIds && _global.Global.getState().dataList.wfbdzySjkZyxgStep2.tableIds[_global.Global.getState().dataList.wfbdzySjkZyxgStep2.page] ? _global.Global.getState().dataList.wfbdzySjkZyxgStep2.tableIds[_global.Global.getState().dataList.wfbdzySjkZyxgStep2.page] : "",

	            onChange: function onChange(selectedRowKeys, selectedRows) {
	                console.log(selectedRowKeys, selectedRows);
	                var state = _global.Global.getState();
	                if (state.dataList.wfbdzySjkZyxgStep2 && state.dataList.wfbdzySjkZyxgStep2.page) {
	                    (function () {
	                        var page = state.dataList.wfbdzySjkZyxgStep2.page;
	                        var tableIds = state.dataList.wfbdzySjkZyxgStep2.tableIds ? state.dataList.wfbdzySjkZyxgStep2.tableIds : {};
	                        var tableNames = state.dataList.wfbdzySjkZyxgStep2.tableNames ? state.dataList.wfbdzySjkZyxgStep2.tableNames : {};
	                        tableIds[page] = selectedRowKeys; //connectDatasource.connectDataSourceApi.tableIds
	                        var tableName = [];
	                        selectedRows.forEach(function (item, index) {
	                            tableName.push(item.name);
	                            //tableIds.names = selectedRowKeys;
	                        });
	                        tableNames[page] = tableName;
	                        _global.Global.mark({ dataList: { wfbdzySjkZyxgStep2: { tableIds: tableIds } } });
	                        _global.Global.mark({ dataList: { wfbdzySjkZyxgStep2: { tableNames: tableNames } } });
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
	        var columns = [];
	        var radioStyle = {
	            display: 'block',
	            height: '30px',
	            lineHeight: '30px'
	        };
	        console.log("render connect");
	        //let glState = Global.getState();
	        //多张联合表列数组
	        return _react2["default"].createElement(
	            'div',
	            null,
	            _global.Global.getState().connectDatasource && _global.Global.getState().connectDatasource.ConnectDatasourceUpdate && _global.Global.getState().connectDatasource.ConnectDatasourceUpdate && actions && _global.Global.getState().connectDatasource.ConnectDatasourceUpdate.requestTables && _global.Global.getState().connectDatasource.ConnectDatasourceUpdate.requestTables.data && _global.Global.getState().connectDatasource.ConnectDatasourceUpdate.requestTables.data.content && !_global.Global.getState().connectDatasource.ConnectDatasourceUpdate.tableIds && _react2["default"].createElement(
	                'div',
	                { style: { textAlign: 'center', paddingTop: 30 } },
	                _react2["default"].createElement(
	                    _button2["default"],
	                    { type: 'primary', onClick: actions.showDataSourceDlg.bind(this, id, true) },
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
	            _global.Global.getState().connectDatasource && _global.Global.getState().connectDatasource.ConnectDatasourceUpdate && _global.Global.getState().connectDatasource.ConnectDatasourceUpdate.showDataSourceDlg && _react2["default"].createElement(
	                _modal2["default"],
	                { title: '\u9009\u62E9\u6570\u636E\u6E90', maskClosable: false, visible: _global.Global.getState().connectDatasource.ConnectDatasourceUpdate.showDataSourceDlg,
	                    onOk: function () {
	                        var result = _global.Global.getState().connectDatasource.ConnectDatasourceUpdate.tableIds && _global.Global.getState().connectDatasource.ConnectDatasourceUpdate.tableIds.length > 0;
	                        if (result) {
	                            actions.showDataSourceDlg(id, false);
	                            var config = _this2.props.dataSourceApiName;
	                            //config.body = {...config.body,body:{dataSourceId:this.props.glState.dataList[this.props.dataFromId].selectedRows[0]}};
	                            actions.getContentByTableTile(_global.Global.getState().connectDatasource.ConnectDatasourceUpdate.tableIds, _this2.props.glState.dataList[_this2.props.dataFormTableId].selectedRows[0], config, id);
	                            setTimeout(function () {
	                                _this2.createTables();
	                            }, 300);
	                        } else {
	                            actions.showDataSourceDlg(id, false);
	                            return;
	                        }
	                    }.bind(this),
	                    onCancel: function onCancel() {
	                        //actions.addTable(id, []);
	                        actions.showDataSourceDlg(id, false);
	                        return;
	                    }
	                },
	                _global.Global.getState().connectDatasource && _global.Global.getState().connectDatasource.ConnectDatasourceUpdate && actions && _global.Global.getState().connectDatasource.ConnectDatasourceUpdate.requestTables && _global.Global.getState().connectDatasource.ConnectDatasourceUpdate.requestTables.data && _global.Global.getState().connectDatasource.ConnectDatasourceUpdate.requestTables.data.content && _react2["default"].createElement(_table2["default"], { rowSelection: rowSelection, columns: cloumns, bordered: true,
	                    dataSource: _global.Global.getState().dataList.ConnectDatasourceUpdate && _global.Global.getState().dataList.ConnectDatasourceUpdate.tableBodyDataApi.data && _global.Global.getState().dataList.ConnectDatasourceUpdate.tableBodyDataApi.data.content ? _global.Global.getState().dataList.ConnectDatasourceUpdate.tableBodyDataApi.data.content : _global.Global.getState().connectDatasource.ConnectDatasourceUpdate.requestTables.data.content,
	                    pagination: {
	                        total: state.requestTables.data.totalElements,
	                        size: state.requestTables.data.totalElements / 10, pageSize: 10,
	                        onChange: function (current) {
	                            _global.Global.mark({ dataList: { wfbdzySjkZyxgStep2: { page: current } } });
	                            var page1 = current - 1;
	                            _this2.props.actions.requestTableBodyData(_this2.props.id, {
	                                apiName: 'getAddTableData',
	                                body: { id: _global.Global.getState().dataList[_this2.props.dataFormTableId].selectedRows[0] },
	                                page: page1,
	                                size: 10
	                            }, page1);
	                        }.bind(this)
	                    }
	                })
	            ),
	            _global.Global.getState().connectDatasource && _global.Global.getState().connectDatasource.ConnectDatasourceUpdate && _global.Global.getState().connectDatasource.ConnectDatasourceUpdate.addTableFlag && _react2["default"].createElement(
	                _modal2["default"],
	                { title: '\u9009\u62E9\u6570\u636E\u6E901', visible: _global.Global.getState().connectDatasource.ConnectDatasourceUpdate.addTableFlag,
	                    onOk: function () {
	                        var result = _global.Global.getState().connectDatasource.ConnectDatasourceUpdate.tableIds && _global.Global.getState().connectDatasource.ConnectDatasourceUpdate.tableIds.length > 0;
	                        if (result) {
	                            actions.addTableFlag(id, false);
	                            var config = _this2.props.dataSourceApiName;
	                            //config.body = {...config.body,body:{dataSourceId:this.props.glState.dataList[this.props.dataFromId].selectedRows[0]}};
	                            actions.getContentByTableTile(_global.Global.getState().connectDatasource.ConnectDatasourceUpdate.tableIds, _this2.props.glState.dataList[_this2.props.dataFormTableId].selectedRows[0], config, id);
	                        } else {
	                            actions.addTableFlag(id, false);
	                            return;
	                        }
	                    }.bind(this),
	                    onCancel: function onCancel() {
	                        /*Global.mark({
	                             connectDatasource:{
	                                 ConnectDatasourceUpdate:{
	                                     tableIds:detailMsg.tables
	                                 }
	                             }
	                         }) ;*/
	                        _global.Global.mark({ dataList: { wfbdzySjkZyxgStep2: null } });
	                        _global.Global.mark({ connectDatasource: { ConnectDatasourceUpdate: { showDataSourceDlg: false } } });
	                    }
	                },
	                _global.Global.getState().connectDatasource && _global.Global.getState().connectDatasource.ConnectDatasourceUpdate && actions && _global.Global.getState().connectDatasource.ConnectDatasourceUpdate.requestTables && _global.Global.getState().connectDatasource.ConnectDatasourceUpdate.requestTables.data && _global.Global.getState().connectDatasource.ConnectDatasourceUpdate.requestTables.data.content && _react2["default"].createElement(_table2["default"], { rowSelection: rowSelection, columns: cloumns,
	                    dataSource: _global.Global.getState().dataList.ConnectDatasourceUpdate && _global.Global.getState().dataList.ConnectDatasourceUpdate.tableBodyDataApi.data && _global.Global.getState().dataList.ConnectDatasourceUpdate.tableBodyDataApi.data.content ? _global.Global.getState().dataList.ConnectDatasourceUpdate.tableBodyDataApi.data.content : _global.Global.getState().connectDatasource.ConnectDatasourceUpdate.requestTables.data.content,
	                    pagination: {
	                        total: _global.Global.getState().connectDatasource.ConnectDatasourceUpdate.requestTables.data.totalElements,
	                        size: _global.Global.getState().connectDatasource.ConnectDatasourceUpdate.requestTables.data.totalElements / 10,
	                        pageSize: 10,
	                        onChange: function (current) {
	                            _global.Global.mark({ dataList: { wfbdzySjkZyxgStep2: { page: current } } });
	                            var page1 = current - 1;
	                            _this2.props.actions.requestTableBodyData(_this2.props.id, {
	                                apiName: 'getAddTableData',
	                                body: { id: _global.Global.getState().dataList[_this2.props.dataFormTableId].selectedRows[0] },
	                                page: page1,
	                                size: 10
	                            }, page1);
	                        }.bind(this)
	                    }
	                })
	            ),
	            _global.Global.getState().connectDatasource && (_global.Global.getState().connectDatasource.ConnectDatasourceUpdate && _global.Global.getState().connectDatasource.ConnectDatasourceUpdate.selectFrom && _global.Global.getState().connectDatasource.ConnectDatasourceUpdate.selectTo || _global.Global.getState().connectDatasource.ConnectDatasourceUpdate && _global.Global.getState().connectDatasource.ConnectDatasourceUpdate.showConnectDlg) && _react2["default"].createElement(
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
	            _global.Global.getState().connectDatasource && _global.Global.getState().connectDatasource.ConnectDatasourceUpdate && _global.Global.getState().connectDatasource.ConnectDatasourceUpdate.linkdatas && function () {
	                var index = 0;
	                for (var linkId in _this2.lineMap) {
	                    var _line = _this2.lineMap[linkId];
	                    _this2.stage.remove(_line);
	                }
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;

	                try {
	                    for (var _iterator = (0, _getIterator3["default"])(_global.Global.getState().connectDatasource.ConnectDatasourceUpdate.linkdatas), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var link = _step.value;

	                        var leftZField = void 0,
	                            rightZField = void 0;
	                        if (!link.from.zField) continue;
	                        if (link.from.zField.parent.position[0] < link.to.zField.parent.position[0]) {
	                            leftZField = link.from.zField;
	                            rightZField = link.to.zField;
	                        } else {
	                            leftZField = link.to.zField;
	                            rightZField = link.from.zField;
	                        }
	                        if (!_this2.lineMap[link.id]) {
	                            var line = new _Arrow2["default"]({
	                                style: {
	                                    stroke: "#CDCDCD"
	                                },
	                                shape: {
	                                    link: link
	                                }
	                            });

	                            line.on('mouseover', function (index, e) {
	                                if (_this2.stage.moving) return;
	                                var line = e.target;
	                                line.style.stroke = '#00b3b2';
	                                line.dirty(true);
	                                _this2.editBtns.ignore = false;
	                                _this2.editBtns.position = [-_this2.stage.position[0] + e.offsetX, -_this2.stage.position[1] + e.offsetY + 10];
	                                _this2.editBtns.dirty(true);
	                                _this2.overLink = index;
	                                _this2.overLine = line;
	                            }.bind(_this2, index));

	                            line.on('mouseout', function (index, e) {
	                                var line = e.target;
	                                line.style.stroke = '#CDCDCD';
	                                line.dirty(true);
	                                if (_this2.editTimer) {
	                                    clearTimeout(_this2.editTimer);
	                                }
	                                _this2.editTimer = setTimeout(function () {
	                                    _this2.editBtns.ignore = true;
	                                }, 3000);
	                            }.bind(_this2, index));
	                            _this2.lineMap[link.id] = line;
	                            _this2.stage.addBefore(line, _this2.stage.children()[1]);
	                        } else {
	                            var _line2 = _this2.lineMap[link.id];
	                            _line2.dirty(true);
	                            _this2.stage.addBefore(_line2, _this2.stage.children()[1]);
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
	            _global.Global.getState().connectDatasource && _global.Global.getState().connectDatasource.ConnectDatasourceUpdate && _global.Global.getState().connectDatasource.ConnectDatasourceUpdate.tableIds && _global.Global.getState().connectDatasource.ConnectDatasourceUpdate.getContentByTableTile && _global.Global.getState().connectDatasource.ConnectDatasourceUpdate.getContentByTableTile.data && _react2["default"].createElement(
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
	                        stage.add(bg);

	                        var editBtns = _this2.editBtns = new _Group2["default"]({
	                            ignore: true
	                        });

	                        editBtns.on('mouseover', function () {
	                            if (this.editTimer) {
	                                clearTimeout(this.editTimer);
	                            }
	                            this.overLine.style.stroke = '#00b3b2';
	                            this.overLine.dirty(true);
	                        }.bind(_this2));
	                        editBtns.on('mouseout', function (e) {
	                            var rect = this.editBtns.getBoundingRect();
	                            var x = -this.stage.position[0] + e.offsetX - this.editBtns.position[0];
	                            var y = -this.stage.position[1] + e.offsetY - this.editBtns.position[1];
	                            if (!rect.contain(x, y)) {
	                                this.editBtns.ignore = true;
	                                this.overLine.style.stroke = '#CDCDCD';
	                                this.overLine.dirty(true);
	                                this.editBtns.dirty(true);
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
	                        }.bind(_this2));
	                        editBtns.add(delBtn);

	                        _this2.createTables = function () {

	                            stage._children.map(function (child, i) {
	                                if (child.type == "table") {
	                                    stage.remove(child);
	                                }
	                            });
	                            var state = _global.Global.getState().connectDatasource.ConnectDatasourceUpdate;
	                            state.tableIds.forEach(function (tableId, i) {
	                                var item = state.getContentByTableTile.data;
	                                var tableIdd = tableId;
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
	                                item.forEach(function (items, j) {
	                                    if (tableId == items.tableName) {
	                                        var zFieldes = state.linkdatas; //[]
	                                        var zFieldesBank = zFieldes;
	                                        items.tableData.forEach(function (field, i) {
	                                            if (field.columnName == 'pk' || field.columnName == 'PK' || field.columnName == "NotNullColumn") {
	                                                return;
	                                            }
	                                            var fieldContent = field.columnCode + "   " + field.type;
	                                            var truncateText = _text2["default"].truncateText(fieldContent, 150);
	                                            text = new _Text2["default"]({
	                                                position: [10, 30 + 20 * i],
	                                                style: {
	                                                    x: 0,
	                                                    y: 0,
	                                                    text: truncateText,
	                                                    width: 180,
	                                                    height: 20,
	                                                    //fill: field.columnName == 'PK'?'#FF0000':'#666666',
	                                                    fill: field.pk == true ? '#FF0000' : '#666666',
	                                                    textFont: '14px Microsoft Yahei',
	                                                    textBaseline: 'top',
	                                                    textAlign: 'left'
	                                                },
	                                                onmousedown: function onmousedown() {
	                                                    this.dirty(true);
	                                                    actions.setSelectField(id, tableId, field.columnCode, this);
	                                                }
	                                            });
	                                            // if(zFieldes.field == field && !tree.zField){
	                                            // zFieldes[ii].zField = text;
	                                            // }
	                                            if (zFieldes) {
	                                                zFieldes.forEach(function (zItems, index) {
	                                                    if (items.tableName == zItems.from.table && field.columnName == zItems.from.field) {
	                                                        zFieldesBank[index].from.zField = text;
	                                                    } else if (items.tableName == zItems.to.table && field.columnName == zItems.to.field) {
	                                                        zFieldesBank[index].to.zField = text;
	                                                    }
	                                                });
	                                                _global.Global.mark({
	                                                    connectDatasource: {
	                                                        ConnectDatasourceUpdate: {
	                                                            linkdatas: null
	                                                        }
	                                                    } });
	                                                _global.Global.mark({
	                                                    connectDatasource: {
	                                                        ConnectDatasourceUpdate: {
	                                                            linkdatas: zFieldesBank
	                                                        }
	                                                    } });
	                                            }
	                                            group.add(text);
	                                        });
	                                    }
	                                });
	                                var realHeight = item.length * 20;
	                                if (realHeight > 235) {
	                                    rect.setShape({ height: realHeight + 30 });
	                                }
	                                rect.on('mousedown', onMouseDown);
	                                //rect.on('mousemove',onMouseMove);
	                                group.position = [i * 240, 0];
	                                stage.add(group);
	                            });
	                        };
	                        _this2.createTables();
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
	            _react2["default"].createElement(
	                _button2["default"],
	                { type: 'primary', onClick: function onClick() {
	                        var states = _global.Global.getState();
	                        if (!(states.dataList.wfbdzySjkZyxgStep2 && states.dataList.wfbdzySjkZyxgStep2.page)) {
	                            _global.Global.mark({ dataList: { wfbdzySjkZyxgStep2: { page: 1 } } });
	                            var tableNames = {},
	                                tableIds = {};
	                            tableNames[1] = allDatas.tables;
	                            _global.Global.mark({ dataList: { wfbdzySjkZyxgStep2: { tableNames: tableNames } } });
	                            tableIds[1] = states.connectDatasource.ConnectDatasourceUpdate.selectKeys;
	                            _global.Global.mark({ dataList: { wfbdzySjkZyxgStep2: { tableIds: tableIds } } });
	                        } else {
	                            _global.Global.mark({ dataList: { wfbdzySjkZyxgStep2: { page: 1 } } });
	                        }
	                        _global.Global.mark({ connectDatasource: { ConnectDatasourceUpdate: { showDataSourceDlg: true } } });
	                    } },
	                '\u6DFB\u52A0\u6570\u636E\u8868'
	            ),
	            state && state.tableIds && state.getContentByTableTile && state.getContentByTableTile.data && state.getContentByTableTile.data.length > 0 && _react2["default"].createElement(_AiForm2["default"], { config: { apiName: "wfbdzySjkZyxgStep3" } })
	        );
	    };

	    return ConnectDatasourceUpdate;
	}(_react.Component);

	exports["default"] = (0, _component2["default"])('connectDatasource', { addTableFlag: _connectDataSource.addTableFlag, requestTableBodyData: _dataList.requestTableBodyData, getContentByTableTile: _connectDataSource.getContentByTableTile, showDataSourceDlg: _connectDataSource.showDataSourceDlg, setSelectField: _connectDataSource.setSelectField, linkData: _connectDataSource.linkData, setLinkType: _connectDataSource.setLinkType, requestTables: _connectDataSource.requestTables, addTable: _connectDataSource.addTable, requestDataDir: _connectDataSource.requestDataDir, showConnectDlg: _connectDataSource.showConnectDlg, updateLine: _connectDataSource.updateLine, mark: _connectDataSource.mark, delLink: _connectDataSource.delLink }, function (state, dispatchProps, ownProps) {
	    return { glState: state };
	})(ConnectDatasourceUpdate);
	module.exports = exports['default'];

/***/ }

});