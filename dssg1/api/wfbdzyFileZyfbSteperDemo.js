webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _css = __webpack_require__(2455);

	var _modal = __webpack_require__(29);

	var _modal2 = _interopRequireDefault(_modal);

	var _css2 = __webpack_require__(54);

	var _form = __webpack_require__(53);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(10);

	var _interfaces = __webpack_require__(35);

	var _dataFormat = __webpack_require__(64);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var FormItem = _form2["default"].Item; /**
	                                    * Created by liy on 2016/12/20 0020.
	                                    */

	(0, _jsonp2["default"])("wfbdzyFileZyfbSteperDemo")(function (args, callback) {
	    //let target = args.target;
	    callback({
	        "success": true,
	        "data": {
	            "lineDefinedWidth": 60,
	            "afterSave": "datalistV1/wfbdzyFile/list/0/10",
	            "steps": [{
	                "type": "datalist",
	                "configStepApi": "wfbdzyFileZyfbStep1",
	                "number": "1",
	                "name": "选择数据源",
	                "id": "wfbdzyFileZyfbStep1",
	                "footer": ['next', 'cancel'],
	                "arg": { onChange: function onChange() {
	                        _global.Global.mark({
	                            dataList: {
	                                wfbdzyFileZyfbStep2: null
	                            }
	                        });
	                    } },
	                "validate": function validate() {
	                    var selected = _global.Global.getState().dataList.wfbdzyFileZyfbStep1.selectedRows;
	                    var validate = selected && selected.length == 1;
	                    if (!validate) {
	                        _modal2["default"].warning({
	                            title: '提示',
	                            content: '请选择一条数据源，再点击”下一步“。'
	                        });
	                    }
	                    return validate;
	                }
	            }, {
	                "type": "datalist",
	                "configStepApi": "wfbdzyFileZyfbStep2",
	                "number": "2",
	                "name": "选择文件",
	                "id": "wfbdzyFileZyfbStep2",
	                "validate": function validate() {
	                    var selected = _global.Global.getState().dataList.wfbdzyFileZyfbStep2.selectedRows;
	                    var validate = selected && selected.length > 0;
	                    if (!validate) {
	                        _modal2["default"].warning({
	                            title: '提示',
	                            content: '请选择一个文件，再点击”下一步“。'
	                        });
	                    }
	                    return validate;
	                }
	            }, {
	                "type": "aiForm",
	                "configStepApi": "wfbdzyFileZyfbStep3",
	                "number": "3",
	                "name": "填写元数据",
	                "id": "wfbdzyFileZyfbStep3",
	                "validate": function validate() {
	                    var form = _global.Global.getState().aiForm.wfbdzyFileZyfbStep3.form;
	                    var values = form.getFieldsValue();
	                    var validate = false;
	                    form.validateFields(function (fileds) {
	                        validate = !fileds;
	                    });
	                    if (validate) {
	                        _global.Global.mark({ aiForm: { wfbdzyFileZyfbStep3To4: null } });
	                        _global.Global.mark({ aiForm: { wfbdzyFileZyfbStep3: { values: (0, _extends3["default"])({}, values) }
	                            }
	                        });
	                    }
	                    return validate;
	                }
	            }, {
	                "type": "aiForm",
	                "configStepApi": "wfbdzyFileZyfbStep3To4",
	                "number": "4",
	                "name": "配置资源有效期",
	                "id": "wfbdzyFileZyfbStep3To4",
	                customerClear: function customerClear() {
	                    _global.Global.mark({ aiFormTable: { fileFbStep4: null } });
	                },
	                "validate": function validate() {
	                    var state = _global.Global.getState();
	                    var validate = false;
	                    var formValue = {};
	                    var values = state.aiFormTable.fileFbStep4.config.dataSource[0];
	                    if (!values.validBeginTime || values.validBeginTime == "" || !values.validEndTime || values.validEndTime == "") {
	                        _modal2["default"].warning({
	                            content: "时间不能为空！"
	                        });
	                        validate = false;
	                    } else {
	                        var validBeginTime = values.validBeginTime;
	                        var validEndTime = values.validEndTime;
	                        formValue["validBeginTime"] = validBeginTime;
	                        formValue["validEndTime"] = validEndTime;
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
	                        //Global.mark({aiForm: {wfbdzyFileZyfbStep4: null}});
	                        _global.Global.mark({ aiForm: { wfbdzyFileZyfbStep3To4: { values: formValue } } });
	                    }
	                    return validate;
	                }
	            }, {
	                "type": "aiForm",
	                "configStepApi": "wfbdzyFileZyfbStep4",
	                "number": "5",
	                "name": "配置订阅权限",
	                "id": "wfbdzyFileZyfbStep4",
	                "validate": function validate() {
	                    var form = _global.Global.getState().aiForm.wfbdzyFileZyfbStep4.form;
	                    var validate = false;
	                    form.validateFields(function (fileds) {
	                        validate = !fileds;
	                    });
	                    var compareTimes = new Date(form.getFieldValue('startTime'));
	                    var values = _global.Global.getState().aiFormTable.fileFbStep4.config.dataSource[0];
	                    var startTimes = new Date(values.validBeginTime);
	                    var endTimes = new Date(values.validEndTime);

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
	                        if (compareTimes.getTime() > startTimes.getTime() && compareTimes.getTime() < endTimes.getTime()) {
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
	                        _global.Global.mark({ aiForm: { wfbdzyFileZyfbStep5: null } });
	                        _global.Global.mark({
	                            aiForm: {
	                                wfbdzyFileZyfbStep4: {
	                                    values: form.getFieldsValue()
	                                }
	                            }
	                        });
	                    }
	                    return validate;
	                }
	            }, {
	                "type": "aiForm",
	                "configStepApi": "wfbdzyFileZyfbStep5",
	                "number": "6",
	                "name": "发布资源预览",
	                "id": "wfbdzyFileZyfbStep5",
	                "style": "gray",
	                "validate": function validate() {
	                    var state = _global.Global.getState();
	                    var step3Values = state.aiForm.wfbdzyFileZyfbStep3.values;
	                    var step4Values = state.aiForm.wfbdzyFileZyfbStep4.values;
	                    var step1SelectRowsId = state.dataList.wfbdzyFileZyfbStep1.selectedRows[0]; //只能是一条数据源
	                    var step2 = state.dataList.wfbdzyFileZyfbStep2;
	                    var step2SelectRows = step2.selectedRows;
	                    var step2Datas = step2.tableBodyDataApi.data;
	                    var themeTypeName = (0, _dataFormat.gettreeSelectName)(state, "themeType", step3Values.themeType ? step3Values.themeType : "");
	                    var departmentTypeName = (0, _dataFormat.gettreeSelectName)(state, "departmentType", step3Values.departmentType ? step3Values.departmentType : "");
	                    var themeType = step3Values.themeType;
	                    var departmentType = step3Values.departmentType;
	                    var times = _global.Global.getState().aiForm.wfbdzyFileZyfbStep3To4.values;
	                    //共享文件信息
	                    var step2SelectDatas = [];
	                    step2SelectRows.forEach(function (val) {
	                        step2Datas.forEach(function (val2) {
	                            if (val == val2.name) {
	                                step2SelectDatas.push(val2);
	                            }
	                        });
	                    });

	                    //调度模式
	                    var fileLevel = step4Values.fileLevel;
	                    var dispatchStrategy = {};
	                    if (step4Values.ddModel == 1) {
	                        dispatchStrategy.dispatchType = 1;
	                        dispatchStrategy.beginTime = step4Values.startTime.format("YYYY-MM-DD HH:mm:ss");
	                        dispatchStrategy.cycle = parseInt(step4Values.zqIntervalCycle);
	                        dispatchStrategy.dateTypeMin = step4Values.zqTimeUnit;
	                        dispatchStrategy.dateTypeMax = "";
	                        dispatchStrategy.day = "";
	                        dispatchStrategy.hour = "";
	                        dispatchStrategy.second = "";
	                    } else if (step4Values.ddModel == 2) {
	                        dispatchStrategy.dispatchType = 2;
	                        dispatchStrategy.beginTime = ""; //step4Values.startTime;
	                        dispatchStrategy.cycle = "";
	                        dispatchStrategy.dateTypeMin = "";
	                        dispatchStrategy.dateTypeMax = step4Values.dqTimeUnit;
	                        dispatchStrategy.day = parseInt(step4Values.dayTime);
	                        dispatchStrategy.hour = parseInt(step4Values.hourTime);
	                        dispatchStrategy.second = parseInt(step4Values.minTime);
	                    } else {
	                        dispatchStrategy.dispatchType = 3;
	                        dispatchStrategy.beginTime = ""; //step4Values.startTime;
	                        dispatchStrategy.cycle = "";
	                        dispatchStrategy.dateTypeMin = "";
	                        dispatchStrategy.dateTypeMax = "";
	                        dispatchStrategy.day = "";
	                        dispatchStrategy.hour = "";
	                        dispatchStrategy.second = "";
	                    }
	                    //元数据
	                    var metadataDTO = {
	                        "resCode": step3Values.resCode, //后加字段
	                        "restitle": step3Values.resName,
	                        "abstracts": step3Values.abstracts,
	                        "rporgname": step3Values.rporgname,
	                        "address": step3Values.address,
	                        "keyword": step3Values.keyword,
	                        "subjectcarategory": step3Values.themeType,
	                        "industrycategory": step3Values.departmentType,
	                        "reason": step3Values.applyReason,
	                        "resourceType": "2"

	                    };
	                    var picturePath = step3Values.picturePath && step3Values.picturePath.length > 0 && step3Values.picturePath[0].response ? step3Values.picturePath[0].response.filesId[0] : step3Values.picturePath && step3Values.picturePath.length > 0 ? step3Values.picturePath[0].uid : "";
	                    var values = state.aiFormTable.fileFbStep4.config.dataSource[0];
	                    var validBeginTime = values.validBeginTime;
	                    var validEndTime = values.validEndTime;
	                    var apiConfig = (0, _extends3["default"])({}, _interfaces.wfbdzyFilePublishResource, {
	                        body: (0, _extends3["default"])({}, _interfaces.wfbdzyFilePublishResource.body, {
	                            resCode: step3Values.resCode,
	                            themeTypeName: themeTypeName,
	                            departmentTypeName: departmentTypeName,
	                            themeType: themeType,
	                            departmentType: departmentType,
	                            dataSourceId: step1SelectRowsId,
	                            fileDataJson: step2SelectDatas,
	                            dispatchStrategy: dispatchStrategy,
	                            resLevel: fileLevel,
	                            metadataDTO: metadataDTO,
	                            picturePath: picturePath,
	                            validBeginTime: validBeginTime,
	                            validEndTime: validEndTime
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