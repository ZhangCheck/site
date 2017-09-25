webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(2358);

	var _modal = __webpack_require__(29);

	var _modal2 = _interopRequireDefault(_modal);

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(10);

	var _interfaces = __webpack_require__(35);

	var _StepContainerV = __webpack_require__(287);

	var _StepContainerV2 = _interopRequireDefault(_StepContainerV);

	var _history = __webpack_require__(32);

	var _history2 = _interopRequireDefault(_history);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * Created by liy on 2016/12/16 0019.
	 */
	(0, _jsonp2["default"])("wfbdzyApiDsfjjkUpdateSteperDemo")(function (args, callback) {
	    var list = _global.Global.getState().dataList.wfbdzyApi;
	    if (!list || !list.selectedRows) {
	        _StepContainerV2["default"]["goto"]('wfbdzyApiDsfjjkUpdateSteperDemo', "datalistV1/wfbdzyApi/list/0/10");
	        return;
	    }
	    callback({
	        "success": true,
	        "data": {
	            "afterSave": "datalistV1/wfbdzyApi/list/0/10",
	            "steps": [{
	                "arg": {
	                    //detailMsg:{...wfbdzyApiZybjData,body:{id:Global.getState().dataList.wfbdzyApi.selectedRows}}
	                },
	                "type": "aiForm",
	                "configStepApi": "wfbdzyApiDsfjkTxysjStep1",
	                //"footer":['next',"cancel"],
	                "number": "1",
	                "validate": function validate() {
	                    var form = _global.Global.getState().aiForm.wfbdzyApiDsfjkTxysjStep1 && _global.Global.getState().aiForm.wfbdzyApiDsfjkTxysjStep1.form ? _global.Global.getState().aiForm.wfbdzyApiDsfjkTxysjStep1.form : {};
	                    var values = form.getFieldsValue();
	                    var validate = false;
	                    form.validateFields(function (fileds) {
	                        validate = !fileds;
	                    });
	                    /* if(values.picturePath && values.picturePath.length>1){
	                         Modal.warning({
	                             title:"提示",
	                             content:"图片只能上传一张！"
	                         });
	                         validate = false;
	                     }*/
	                    if (validate) {
	                        _global.Global.mark({ aiForm: { wfbdzyApiDsfjkTxysjStep1: { values: (0, _extends3["default"])({}, values) } } });
	                    }
	                    return validate;
	                },
	                "name": "填写元数据",
	                "footer": ['next', 'cancel'],
	                "id": "wfbdzyApiDsfjkTxysjStep1"
	            }, {
	                "arg": {},
	                "type": "aiForm",
	                "configStepApi": "wfbdzyApiDsfjkTxurlStep2",
	                "number": "2",
	                "name": "填写URL",
	                "id": "wfbdzyApiDsfjkTxurlStep2",
	                //"footer":['prev','next'],
	                "validate": function validate() {
	                    var state = _global.Global.getState();
	                    var form = state.aiForm.wfbdzyApiDsfjkTxurlStep2.form;
	                    var validate = false;
	                    var functionName = void 0;
	                    var funUrlBool = state.aiForm.wfbdzyApiDsfjkTxurlStep2.funNameBool;
	                    if (funUrlBool) {
	                        if (form.getFieldsValue().serviceType == "webservice") {
	                            if (!(state.aiForm.wfbdzyApiDsfjkTxurlStep2.functionName && state.aiForm.wfbdzyApiDsfjkTxurlStep2.functionName.data)) {
	                                _modal2["default"].warning({
	                                    content: "方法未获得，请更换URL或域名！"
	                                });
	                                return false;
	                            } else {
	                                //有方法
	                                if (funUrlBool == 0) {
	                                    _modal2["default"].warning({
	                                        content: "地址已发布，请更换URL或域名！"
	                                    });
	                                    return false;
	                                }
	                            }
	                        } else {
	                            if (funUrlBool == 0) {
	                                _modal2["default"].warning({
	                                    content: "地址不符合或已发布，请更换！"
	                                });
	                                return false;
	                            }
	                        }
	                    }

	                    form.validateFields(function (fileds) {
	                        validate = !fileds;
	                    });
	                    if (validate) {
	                        var values = form.getFieldsValue();
	                        if (form.getFieldsValue().serviceType == "webservice") {
	                            var funName = state.aiForm.wfbdzyApiDsfjkTxurlStep2.functionName;
	                            functionName = funName && funName.data ? funName.data.join() : "";
	                            values.functionName = functionName;
	                        }

	                        _global.Global.mark({ aiForm: { wfbdzyApiDsfjkPzdyqxStep2To3: null } });
	                        _global.Global.mark({ aiFormTable: { dsfStep2To3: null } });
	                        _global.Global.mark({ aiForm: { wfbdzyApiDsfjkTxurlStep2: { values: values } } });
	                    }
	                    return validate;
	                }
	            }, {
	                "type": "aiForm",
	                "configStepApi": "wfbdzyApiDsfjkPzdyqxStep2To3",
	                "number": "3",
	                "name": "配置资源有效期",
	                "id": "wfbdzyApiDsfjkPzdyqxStep2To3",
	                "validate": function validate() {
	                    var state = _global.Global.getState();
	                    var validate = false;
	                    var values = state.aiFormTable.dsfStep2To3.config.dataSource[0];
	                    if (!values.validBeginTime || values.validBeginTime == "" || !values.validEndTime || values.validEndTime == "") {
	                        _modal2["default"].warning({
	                            content: "时间不能为空！"
	                        });
	                        validate = false;
	                    } else {
	                        var validBeginTime = typeof values.validBeginTime == "string" ? new Date(values.validBeginTime) : values.validBeginTime;
	                        var validEndTime = typeof values.validEndTime == "string" ? new Date(values.validEndTime) : values.validEndTime;

	                        //let validBeginTime = values.validBeginTime.valueOf();
	                        //let validEndTime = values.validEndTime.valueOf();
	                        if (validBeginTime.valueOf() >= validEndTime.valueOf()) {
	                            _modal2["default"].warning({
	                                content: "开始时间要小于结束时间！"
	                            });
	                            validate = false;
	                        } else {
	                            validate = true;
	                        }
	                    }
	                    _global.Global.mark({ aiFormTable: { dsfStep3: null } });
	                    _global.Global.mark({ aiForm: { wfbdzyApiDsfjkPzdyqxStep3: null } });
	                    return validate;
	                }
	            }, {
	                "arg": {},
	                "type": "aiForm",
	                "configStepApi": "wfbdzyApiDsfjkPzdyqxStep3",
	                "number": "3",
	                "name": "配置订阅权限",
	                "id": "wfbdzyApiDsfjkPzdyqxStep3",
	                //"footer":['prev','next'],
	                "validate": function validate() {
	                    _global.Global.mark({ aiForm: { wfbdzyApiDsfjkFbylStep4: null } });
	                    return true;
	                }
	            }, {
	                "arg": {},
	                "type": "aiForm",
	                "configStepApi": "wfbdzyApiDsfjkFbylStep4",
	                "number": "4",
	                "name": "发布资源预览",
	                "id": "wfbdzyApiDsfjkFbylStep4",
	                //"footer":['prev','next'],
	                "validate": function validate() {

	                    var apiConfig = (0, _extends3["default"])({}, _interfaces.wfbdzyApiDsfjkAllUpdateAllData, {
	                        body: (0, _extends3["default"])({}, _interfaces.wfbdzyApiDsfjkAllUpdateAllData.body, _global.Global.getState().aiForm.wfbdzyApiDsfjkFbylStep4.values) });
	                    return apiConfig;
	                }
	            }]
	        }
	    });
	});

/***/ }
]);