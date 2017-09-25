webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _css = __webpack_require__(26);

	var _button = __webpack_require__(23);

	var _button2 = _interopRequireDefault(_button);

	var _css2 = __webpack_require__(1935);

	var _modal = __webpack_require__(29);

	var _modal2 = _interopRequireDefault(_modal);

	var _css3 = __webpack_require__(54);

	var _form = __webpack_require__(53);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _ConnectDatasource = __webpack_require__(217);

	var _ConnectDatasource2 = _interopRequireDefault(_ConnectDatasource);

	var _global = __webpack_require__(10);

	var _interfaces = __webpack_require__(35);

	var _actionType = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var FormItem = _form2["default"].Item;

	(0, _jsonp2["default"])("fbzywjConfigDemo")(function (args, callback) {
	    callback({
	        "success": true,
	        "data": {

	            "afterSave": "datalistV1/fbzyList/list/0/10",
	            "steps": [{
	                "type": "datalist",
	                "configStepApi": "fbzywjDemoStep1",
	                "number": "1",
	                "name": "选择数据源",
	                "id": "fbzywjDemoStep1",
	                "footer": [function () {
	                    return _react2["default"].createElement(
	                        _button2["default"],
	                        { type: 'primary', onClick: function onClick() {
	                                var selected = _global.Global.getState().dataList.fbzywjDemoStep1.selectedRows;
	                                if (selected.length == 1) {
	                                    _global.Global.requestApi({ apiName: "dataSourceByIdTest",
	                                        body: { id: selected[0] },
	                                        next: function next(action) {
	                                            if (action.success) {
	                                                _modal2["default"].warning({
	                                                    title: '提示',
	                                                    content: '测试连接通过！'
	                                                });
	                                            } else {
	                                                _modal2["default"].warning({
	                                                    title: '提示',
	                                                    content: '测试连接失败！'
	                                                });
	                                            }
	                                        }
	                                    }, _actionType.returnResult.requestDataSourceTest, {
	                                        dataList: {
	                                            fbzywjConfigDemo: null
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
	                    var selected = _global.Global.getState().dataList.fbzywjDemoStep1.selectedRows;
	                    var validate = selected && selected.length > 0 && selected.length < 2;
	                    if (!validate) {
	                        _modal2["default"].warning({
	                            title: '提示',
	                            content: '请选择一条数据源，然后点击”下一步“。'
	                        });
	                    }
	                    return validate;
	                }
	            }, {
	                "type": "datalist",
	                "configStepApi": "fbzywjDemoStep2",
	                "number": "2",
	                "name": "选择文件",
	                "id": "fbzywjDemoStep2",
	                "validate": function validate() {
	                    var selected = _global.Global.getState().dataList.fbzywjDemoStep2.selectedRows;
	                    var validate = selected && selected.length > 0;
	                    if (!validate) {
	                        _modal2["default"].warning({
	                            title: '提示',
	                            content: '请至少选择一个文件，再点击”下一步“。'
	                        });
	                    }
	                    return validate;
	                }
	            }, {
	                "type": "aiForm",
	                "configStepApi": "fbzywjDemoStep3",
	                "number": "3",
	                "name": "配置更新策略",
	                "id": "fbzywjDemoStep3",
	                "validate": function validate() {
	                    var form = _global.Global.getState().aiForm.fbzywjDemoStep3.form;
	                    var validate = false;
	                    form.validateFields(function (fileds) {
	                        validate = !fileds;
	                    });
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
	                    }
	                    if (validate) {
	                        _global.Global.mark({ aiForm: { fbzywjDemoStep4: null } });
	                        _global.Global.mark({
	                            aiForm: {
	                                fbzywjDemoStep3: {
	                                    values: form.getFieldsValue()
	                                }
	                            }
	                        });
	                    }
	                    return validate;
	                }
	            }, {

	                "type": "aiForm",
	                "configStepApi": "fbzywjDemoStep4",
	                "number": "4",
	                "name": "发布资源预览",
	                "id": "fbzywjDemoStep4",
	                "style": "gray",
	                "validate": function validate() {
	                    var state = _global.Global.getState();
	                    var step1SelectRowsId = state.dataList.fbzywjDemoStep1.selectedRows[0]; //只能是一条数据源
	                    var step2 = state.dataList.fbzywjDemoStep2;
	                    var step2SelectRows = step2.selectedRows;
	                    var step2Datas = step2.tableBodyDataApi.data;
	                    var ysjBasicInf = state.dataList.fbzyList.detailMsgDataApi.data;
	                    var step3Values = state.aiForm.fbzywjDemoStep3.values;
	                    //共享文件信息
	                    var step2SelectDatas = [];
	                    step2SelectRows.forEach(function (val) {
	                        step2Datas.forEach(function (val2) {
	                            if (val == val2.name) {
	                                step2SelectDatas.push(val2);
	                            }
	                        });
	                    });
	                    var dispatchStrategy = {};
	                    if (step3Values.ddModel == 1) {
	                        dispatchStrategy.dispatchType = 1;
	                        dispatchStrategy.beginTime = step3Values.startTime.format("YYYY-MM-DD HH:mm:ss");
	                        dispatchStrategy.cycle = parseInt(step3Values.zqIntervalCycle);
	                        dispatchStrategy.dateTypeMin = step3Values.zqTimeUnit;
	                        dispatchStrategy.dateTypeMax = "";
	                        dispatchStrategy.day = "";
	                        dispatchStrategy.hour = "";
	                        dispatchStrategy.second = "";
	                    } else if (step3Values.ddModel == 2) {
	                        dispatchStrategy.dispatchType = 2;
	                        dispatchStrategy.beginTime = ""; //step3Values.startTime;
	                        dispatchStrategy.cycle = "";
	                        dispatchStrategy.dateTypeMin = "";
	                        dispatchStrategy.dateTypeMax = step3Values.dqTimeUnit;
	                        dispatchStrategy.day = parseInt(step3Values.dayTime);
	                        dispatchStrategy.hour = parseInt(step3Values.hourTime);
	                        dispatchStrategy.second = parseInt(step3Values.minTime);
	                    } else {
	                        dispatchStrategy.dispatchType = 3;
	                        dispatchStrategy.beginTime = ""; //step3Values.startTime;
	                        dispatchStrategy.cycle = "";
	                        dispatchStrategy.dateTypeMin = "";
	                        dispatchStrategy.dateTypeMax = "";
	                        dispatchStrategy.day = "";
	                        dispatchStrategy.hour = "";
	                        dispatchStrategy.second = "";
	                    }
	                    var apiConfig = (0, _extends3["default"])({}, _interfaces.fbzywjPublishResource, {
	                        body: (0, _extends3["default"])({}, _interfaces.fbzywjPublishResource.body, {
	                            resourceId: ysjBasicInf.id,
	                            dataSourceId: step1SelectRowsId,
	                            fileJson: step2SelectDatas,
	                            resType: ysjBasicInf.resType,
	                            dispatchStrategyJson: dispatchStrategy
	                        })
	                    });
	                    return apiConfig;
	                }
	            }]
	        }
	    });
	});

/***/ }
]);