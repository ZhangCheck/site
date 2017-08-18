webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(2501);

	var _modal = __webpack_require__(29);

	var _modal2 = _interopRequireDefault(_modal);

	var _css2 = __webpack_require__(26);

	var _button = __webpack_require__(23);

	var _button2 = _interopRequireDefault(_button);

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _ConnectDatasource = __webpack_require__(217);

	var _ConnectDatasource2 = _interopRequireDefault(_ConnectDatasource);

	var _global = __webpack_require__(10);

	var _interfaces = __webpack_require__(35);

	var _dataFormat = __webpack_require__(64);

	var _StepContainerV = __webpack_require__(287);

	var _StepContainerV2 = _interopRequireDefault(_StepContainerV);

	var _actionType = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("wfbdzySjkZyfbSteperDemo")(function (args, callback) {

	    var states = _global.Global.getState();
	    var list = states.dataList.fbzyList;
	    if (!list) {
	        _StepContainerV2["default"]["goto"]('wfbdzySjkZyfbSteperDemo', "/datalistV1/fbzyList/list/11/10");
	    }
	    callback({
	        "success": true,
	        "data": {
	            "afterSave": "datalistV1/fbzyList/list/11/10",
	            "steps": [{
	                "type": "datalist",
	                "configStepApi": "wfbdzySjkZyfbStep1",
	                "number": "1",
	                "name": "选择数据源",
	                "id": "wfbdzySjkZyfbStep1",
	                "footer": [function () {
	                    return _react2["default"].createElement(
	                        _button2["default"],
	                        { type: 'primary', onClick: function onClick() {
	                                var selected = _global.Global.getState().dataList.wfbdzySjkZyfbStep1.selectedRows;
	                                if (selected.length == 1) {
	                                    _global.Global.requestApi((0, _extends3["default"])({}, _interfaces.dataSourceByIdTest, {
	                                        body: { id: selected[0] }
	                                    }), _actionType.returnResult.requestDataSourceTest, {
	                                        dataList: {
	                                            wfbdzySjkZyfbSteperDemo: null
	                                        }
	                                    });
	                                }
	                            } },
	                        '\u6D4B\u8BD5\u8FDE\u63A5'
	                    );
	                }, "next", "cancel"],
	                "validate": function validate() {
	                    var state = _global.Global.getState();
	                    var selected = state.dataList.wfbdzySjkZyfbStep1.selectedRows;
	                    var validate = selected && selected.length == 1;
	                    var result = state.dataList.wfbdzySjkZyfbSteperDemo ? _global.Global.getState().dataList.wfbdzySjkZyfbSteperDemo.data : undefined;
	                    if (!validate) {
	                        if (result) {
	                            _modal2["default"].warning({
	                                title: '提示',
	                                content: '先测试数据源是否通畅'
	                            });
	                            return;
	                        }
	                        _modal2["default"].warning({
	                            title: '提示',
	                            content: '请选择一个条目，然后点击”下一步“。'
	                        });
	                    }
	                    var marked = {
	                        aiFormTable: { aFTD: null },
	                        dataList: { wfbdzySjkZyfbStep2: null },
	                        connectDatasource: { connectDataSourceDemo: null },
	                        aiForm: { wfbdzySjkZyfbStep2: null }
	                        /*  var preSelected = state.stepContainer.wfbdzySjkZyfbSteperDemo.step1_preSelected
	                          if(preSelected && preSelected[0]!=selected[0]){
	                              marked.connectDatasource={connectDataSourceDemo: null}
	                              marked.aiForm={wfbdzySjkZyfbStep2: null}
	                          }*/
	                    };_global.Global.mark(marked, 'wfbdzySjkZyfbStep1_validate');
	                    return validate;
	                }
	            }, {
	                "type": _react2["default"].createElement(_ConnectDatasource2["default"], { id: 'connectDataSourceDemo',
	                    dataSourceApiName: { apiName: "getTableFields" },
	                    allConfigs: { apiName: "viewTableDemoConfig" },
	                    getTablesInfo: { apiName: "getAddTableData" },
	                    dataFormTableId: 'wfbdzySjkZyfbStep1', dataFromId: 'wfbdzySjkZyfbStep1',
	                    configs: { apiName: "findResourceByID" } }),
	                "configStepApi": "wfbdzySjkZyfbStep2",
	                "number": "2",
	                "name": "关联数据表",
	                "id": "wfbdzySjkZyfbStep2",
	                "validate_onPrev": function validate_onPrev(cb) {
	                    _global.Global.mark({
	                        stepContainer: {
	                            wfbdzySjkZyfbSteperDemo: {
	                                step1_preSelected: _global.Global.getState().dataList.wfbdzySjkZyfbStep1.selectedRows
	                            }
	                        }
	                    }, 'remember_selectedRows');
	                    cb();
	                },
	                "validate": function validate() {
	                    var validate = true;
	                    var result = _global.Global.getState().connectDatasource.connectDataSourceDemo.showDataSourceDlg === undefined ? false : true;
	                    var result1 = _global.Global.getState().connectDatasource.connectDataSourceDemo.tableIds;
	                    var result2 = _global.Global.getState().connectDatasource.connectDataSourceDemo.linkdatas;
	                    if (result1 && result1.length >= 2) {
	                        if (!result2) {
	                            _modal2["default"].warning({
	                                title: '提示',
	                                content: '请选择表与表之间的关联关系'
	                            });
	                            validate = false;
	                        }
	                        var tableContents = _global.Global.getState().aiFormTable.aFTD.config.dataSource;
	                        var tableNames = [];
	                        tableContents.forEach(function (items) {
	                            if (items.pk) {
	                                tableNames.push(items.dataSource);
	                            }
	                        });
	                        /* if(tableNames&&unique(tableNames).length>0&&unique(tableNames).length<2){
	                             Modal.warning({
	                                 title: '提示',
	                                 content: '数据项标记为主键的不允许只选择一张表的字段'
	                             });
	                             validate = false;
	                         }*/
	                    }

	                    if (!result) {
	                        validate = false;
	                    } else {
	                        var dataSource = _global.Global.getState().aiFormTable.aFTD.config.dataSource;
	                        if (dataSource.length > 0) {
	                            var dataCheck = [];
	                            for (var i = 0; i < dataSource.length; i++) {
	                                var item = dataSource[i];
	                                if (dataCheck.indexOf(item.columnName) < 0 || "" == item.columnName) {
	                                    dataCheck.push(item.columnName);
	                                    if (item.pk) {
	                                        if (!item.columnName || item.columnName == "" || item.columnName == "-1") {
	                                            _modal2["default"].warning({
	                                                title: '提示',
	                                                content: '标识为主键的数据项必须映射'
	                                            });
	                                            validate = false;
	                                            break;
	                                        }
	                                    } else {
	                                        validate = true;
	                                    }
	                                } else {
	                                    _modal2["default"].warning({
	                                        title: '提示',
	                                        content: '字段名称不能选择同一个字段！'
	                                    });
	                                    validate = false;
	                                    break;
	                                }
	                            }
	                        }
	                    }
	                    _global.Global.mark({ aiForm: { wfbdzySjkZyfbStep4: null } });
	                    return validate;
	                }
	            }, {
	                "type": "aiForm",
	                "configStepApi": "wfbdzySjkZyfbStep3",
	                "number": "3",
	                "name": "配置同步类型",
	                "id": "wfbdzySjkZyfbStep3",
	                "validate": function validate() {
	                    var form = _global.Global.getState().aiForm.wfbdzySjkZyfbStep3.form;
	                    var validate = false;
	                    if (form.getFieldValue("ColumnModel") == "") {
	                        validate = false;
	                        _modal2["default"].warning({
	                            title: '提示',
	                            content: '时间戳字段不可为空！'
	                        });
	                    } else {
	                        validate = true;
	                    }
	                    if (validate) {
	                        _global.Global.mark({ aiForm: { wfbdzySjkZyfbStep5: null } });
	                        _global.Global.mark({ aiForm: { wfbdzySjkZyfbStep3: { values: form.getFieldsValue() } } });
	                    }
	                    return validate;
	                }
	            }, {
	                "type": "aiForm",
	                "configStepApi": "wfbdzySjkZyfbStep5",
	                "number": "4",
	                "name": "配置更新策略",
	                "id": "wfbdzySjkZyfbStep5",
	                "validate": function validate() {
	                    var form = _global.Global.getState().aiForm.wfbdzySjkZyfbStep5.form;
	                    var validate = false;
	                    form.validateFields(function (fileds) {
	                        validate = !fileds;
	                    });
	                    var dayTime = parseInt(form.getFieldValue('dayTime'));
	                    var hourTime = parseInt(form.getFieldValue('hourTime'));
	                    var minTime = parseInt(form.getFieldValue('minTime'));

	                    var compareTimes = new Date(form.getFieldValue('startTime'));
	                    var zqIntervalCycle = form.getFieldValue('zqIntervalCycle');
	                    var zqTimeUnit = form.getFieldValue('zqTimeUnit');
	                    var dqTimeUnit = form.getFieldValue('dqTimeUnit');
	                    if (form.getFieldValue('ddModel') == 1) {
	                        if (!(compareTimes && compareTimes.getTime())) {
	                            _modal2["default"].warning({
	                                title: '提示',
	                                content: '开始时间不能为空!'
	                            });
	                            return false;
	                        }
	                        if (!zqIntervalCycle) {
	                            _modal2["default"].warning({
	                                title: '提示',
	                                content: '间隔周期不能为空!'
	                            });
	                            return false;
	                        } else if (zqIntervalCycle && (zqTimeUnit == 1 || zqTimeUnit == 2 || zqTimeUnit == 3)) {
	                            if (!/^[0-9]+$/.test(zqIntervalCycle)) {
	                                _modal2["default"].warning({
	                                    title: '提示',
	                                    content: '时间格式不正确!'
	                                });
	                                return false;
	                            } else if (zqTimeUnit == 1 && (zqIntervalCycle > 12 || zqIntervalCycle < 0)) {
	                                _modal2["default"].warning({
	                                    title: '提示',
	                                    content: '时间格式不正确!'
	                                });
	                                return false;
	                            } else if ((zqTimeUnit == 2 || zqTimeUnit == 3) && (zqIntervalCycle > 59 || zqIntervalCycle < 0)) {
	                                _modal2["default"].warning({
	                                    title: '提示',
	                                    content: '时间格式不正确!'
	                                });
	                                return false;
	                            }
	                        }
	                    }

	                    if (form.getFieldValue('ddModel') == 2) {
	                        if (1 == dqTimeUnit) {
	                            if (isNaN(dayTime) || isNaN(hourTime) || isNaN(minTime)) {
	                                _modal2["default"].warning({
	                                    title: '提示',
	                                    content: '时间格式不正确!'
	                                });
	                                return;
	                            }
	                            if (dayTime > 31 || dayTime < 1) {
	                                _modal2["default"].warning({
	                                    title: '提示',
	                                    content: '时间格式不正确!'
	                                });
	                                return;
	                            }
	                        } else if (2 == dqTimeUnit) {
	                            if (isNaN(hourTime) || isNaN(minTime)) {
	                                _modal2["default"].warning({
	                                    title: '提示',
	                                    content: '时间格式不正确!'
	                                });
	                                return;
	                            }
	                            if (dayTime > 7 || dayTime < 1) {
	                                _modal2["default"].warning({
	                                    title: '提示',
	                                    content: '时间格式不正确!'
	                                });
	                                return;
	                            }
	                        } else if (3 == dqTimeUnit) {
	                            if (isNaN(hourTime) || isNaN(minTime)) {
	                                _modal2["default"].warning({
	                                    title: '提示',
	                                    content: '时间格式不正确!'
	                                });
	                                return;
	                            }
	                        }
	                        var dayFlag = true;
	                        if (!isNaN(dayTime)) {
	                            dayFlag = /^[0-9]+$/.test(dayTime);
	                        }
	                        if (!dayFlag || !/^[0-9]+$/.test(hourTime) || !/^[0-9]+$/.test(minTime)) {
	                            _modal2["default"].warning({
	                                title: '提示',
	                                content: '时间格式不正确!'
	                            });
	                            validate = false;
	                        } else if (hourTime > 23 || hourTime < 0 || minTime > 59 || minTime < 0) {
	                            _modal2["default"].warning({
	                                title: '提示',
	                                content: '时间格式不正确!'
	                            });
	                            validate = false;
	                        } else {
	                            validate = true;
	                        }
	                    }
	                    if (validate) {
	                        _global.Global.mark({ aiForm: { wfbdzySjkZyfbStep6: null } });
	                        _global.Global.mark({ aiForm: { wfbdzySjkZyfbStep5: { values: form.getFieldsValue() } } });
	                    }
	                    return validate;
	                }
	            }, {
	                "type": "aiForm",
	                "configStepApi": "wfbdzySjkZyfbStep6",
	                "number": "5",
	                "name": "发布预览",
	                "id": "wfbdzySjkZyfbStep6",
	                "style": "gray",
	                "validate": function validate() {
	                    var apiConfig = (0, _extends3["default"])({}, _interfaces.zyfbApiAllSaveAllData, {
	                        body: (0, _extends3["default"])({}, _interfaces.zyfbApiAllSaveAllData.body, _global.Global.getState().stepContainer.stepValues) });
	                    return apiConfig;
	                }
	            }]
	        }
	    });
	});

/***/ }
]);