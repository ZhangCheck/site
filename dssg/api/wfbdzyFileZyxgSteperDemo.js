(function(){ var runed=0,temp,timer,time;webpackJsonp([3],[
/* 0 */
/***/ temp = function(module, exports, __webpack_require__) {runed=true;

	'use strict';

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _css = __webpack_require__(1778);

	var _modal = __webpack_require__(49);

	var _modal2 = _interopRequireDefault(_modal);

	var _css2 = __webpack_require__(63);

	var _form = __webpack_require__(59);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(234);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(15);

	var _interfaces = __webpack_require__(33);

	var _dataFormat = __webpack_require__(172);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var FormItem = _form2["default"].Item; /**
	                                     * Created by liy
	                                     * on 2017/1/11 0011.
	                                     */
	/**
	 * Created by liy on 2016/12/20 0020.
	 */

	(0, _jsonp2["default"])("wfbdzyFileZyxgSteperDemo")(function (args, callback) {

	    //let target = args.target;
	    callback({
	        "success": true,
	        "data": {
	            "afterSave": "datalistV1/wfbdzyFile/list/0/10",
	            "steps": [{
	                "type": "datalist",
	                "configStepApi": "wfbdzyFileZyxgStep1",
	                "number": "1",
	                "name": "选择数据源",
	                "id": "wfbdzyFileZyxgStep1",
	                "footer": ['next', 'cancel']
	            }, {
	                "type": "datalist",
	                "configStepApi": "wfbdzyFileZyxgStep2",
	                "number": "2",
	                "name": "选择文件",
	                "id": "wfbdzyFileZyxgStep2",
	                "validate": function validate() {
	                    var selected = _global.Global.getState().dataList.wfbdzyFileZyxgStep2.selectedRows;
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
	                "configStepApi": "wfbdzyFileZyxgStep3",
	                "number": "3",
	                "name": "填写元数据",
	                "id": "wfbdzyFileZyxgStep3",
	                "validate": function validate() {
	                    var form = _global.Global.getState().aiForm.wfbdzyFileZyxgStep3.form;
	                    var validate = false;
	                    form.validateFields(function (fileds) {
	                        validate = !fileds;
	                    });
	                    if (validate) {
	                        _global.Global.mark({
	                            aiForm: {
	                                wfbdzyFileZyxgStep3: {
	                                    values: form.getFieldsValue()
	                                }
	                            }
	                        });
	                    }
	                    return validate;
	                }
	            }, {
	                "type": "aiForm",
	                "configStepApi": "wfbdzyFileZyxgStep4",
	                "number": "4",
	                "name": "配置订阅权限",
	                "id": "wfbdzyFileZyxgStep4",
	                "validate": function validate() {
	                    var form = _global.Global.getState().aiForm.wfbdzyFileZyxgStep4.form;
	                    _global.Global.mark({
	                        aiForm: {
	                            wfbdzyFileZyxgStep4: {
	                                values: form.getFieldsValue()
	                            }
	                        }
	                    });
	                    return true;
	                }
	            }, {
	                "type": "aiForm",
	                "configStepApi": "wfbdzyFileZyxgStep5",
	                "number": "5",
	                "name": "发布资源预览",
	                "id": "wfbdzyFileZyxgStep5",
	                "style": "gray",
	                "validate": function validate() {
	                    var state = _global.Global.getState();
	                    var step3Values = state.aiForm.wfbdzyFileZyxgStep3.values;
	                    var step4Values = state.aiForm.wfbdzyFileZyxgStep4.values;
	                    var step1SelectRowsId = state.dataList.wfbdzyFileZyxgStep1.selectedRows[0]; //只能是一条数据源
	                    var xgId = state.dataList.wfbdzyFile.selectedRows[0];
	                    var step2 = state.dataList.wfbdzyFileZyxgStep2;
	                    var step2SelectRows = step2.selectedRows;
	                    var step2Datas = step2.tableBodyDataApi.data;
	                    var themeTypeName = (0, _dataFormat.gettreeSelectName)(state, "themeType", step3Values.themeType ? step3Values.themeType : "");
	                    var departmentTypeName = (0, _dataFormat.gettreeSelectName)(state, "departmentType", step3Values.departmentType ? step3Values.departmentType : "");
	                    var themeType = step3Values.themeType;
	                    var departmentType = step3Values.departmentType;
	                    //共享文件信息
	                    var step2SelectDatas = [];
	                    step2SelectRows.forEach(function (val) {
	                        step2Datas.forEach(function (val2) {
	                            if (val == val2.id) {
	                                step2SelectDatas.push(val2);
	                            }
	                        });
	                    });
	                    //调度模式
	                    var fileLevel = step4Values.fileLevel;
	                    var dispatchStrategy = {};
	                    if (step4Values.ddModel == 1) {
	                        dispatchStrategy.dispatchType = 1;
	                        dispatchStrategy.beginTime = step4Values.startTime.format("YYYY-MM-DD HH:mm");
	                        dispatchStrategy.cycle = parseInt(step4Values.zqIntervalCycle);
	                        dispatchStrategy.dateTypeMin = step4Values.zqTimeUnit;
	                        dispatchStrategy.dateTypeMax = "";
	                        dispatchStrategy.day = "";
	                        dispatchStrategy.hour = "";
	                        dispatchStrategy.second = "";
	                    } else {
	                        dispatchStrategy.dispatchType = 2;
	                        dispatchStrategy.beginTime = ""; //step4Values.startTime;
	                        dispatchStrategy.cycle = "";
	                        dispatchStrategy.dateTypeMin = "";
	                        dispatchStrategy.dateTypeMax = step4Values.dqTimeUnit;
	                        dispatchStrategy.day = parseInt(step4Values.dayTime);
	                        dispatchStrategy.hour = parseInt(step4Values.hourTime);
	                        dispatchStrategy.second = parseInt(step4Values.minTime);
	                    }
	                    //元数据
	                    var metadataDTO = {
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
	                    var apiConfig = (0, _extends3["default"])({}, _interfaces.wfbdzyFilePublishResource, {
	                        body: (0, _extends3["default"])({}, _interfaces.wfbdzyFilePublishResource.body, { id: xgId, themeTypeName: themeTypeName, departmentTypeName: departmentTypeName, themeType: themeType, departmentType: departmentType, dataSourceId: step1SelectRowsId, fileDataJson: step2SelectDatas, dispatchStrategy: dispatchStrategy, resLevel: fileLevel, metadataDTO: metadataDTO
	                        })
	                    });
	                    console.log(apiConfig);
	                    return apiConfig;
	                }
	            }]
	        }
	    });
	});

/***/ }
]);if(!runed){
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