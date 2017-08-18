webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _stringify = __webpack_require__(128);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _css = __webpack_require__(26);

	var _button = __webpack_require__(23);

	var _button2 = _interopRequireDefault(_button);

	var _css2 = __webpack_require__(2150);

	var _modal = __webpack_require__(29);

	var _modal2 = _interopRequireDefault(_modal);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _ConnectDatasource = __webpack_require__(217);

	var _ConnectDatasource2 = _interopRequireDefault(_ConnectDatasource);

	var _global = __webpack_require__(10);

	var _interfaces = __webpack_require__(35);

	var _history = __webpack_require__(32);

	var _history2 = _interopRequireDefault(_history);

	var _dataFormat = __webpack_require__(64);

	var _actionType = __webpack_require__(22);

	var _jsCookie = __webpack_require__(137);

	var _jsCookie2 = _interopRequireDefault(_jsCookie);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("sbglSubStepers")(function (args, callback) {
	    callback({
	        "success": true,
	        "data": {
	            "isModal": true,
	            "afterSave": "page/Sbglsub",
	            "steps": [{
	                "type": "aiForm",
	                "configStepApi": "sbglSubStep1",
	                "number": "1",
	                "name": "注册协议",
	                "id": "sbglSubStep1",
	                "footer": ['next', function () {
	                    return _react2["default"].createElement(
	                        _button2["default"],
	                        { type: 'primary', style: { backgroundColor: '#c2c2c2', borderColor: '#d9d9d9', color: '#666' }, onClick: function onClick() {
	                                _modal2["default"].confirm({
	                                    title: '提示信息',
	                                    content: '取消将退出系统，是否确认？',
	                                    onOk: function onOk() {
	                                        _global.Global.mark({
	                                            framework: {
	                                                loginApi: {
	                                                    data: null
	                                                },
	                                                loginOutApi: {
	                                                    data: "login"
	                                                }
	                                            }
	                                        });
	                                        _jsCookie2["default"].remove('dssgUserInfo', { path: '/' });
	                                        console.log("system exit..success...");
	                                    },
	                                    onCancel: function onCancel() {
	                                        console.log("reset exit!!!");
	                                    }
	                                });
	                            } },
	                        '\u53D6\u6D88'
	                    );
	                }],
	                "validate": function validate() {
	                    var form = _global.Global.getState().aiForm.sbglSubStep1.form;
	                    var validate = false;
	                    form.validateFields(function (err, values) {
	                        if (values.tyxy == false) {
	                            validate = false;
	                            _modal2["default"].warning({
	                                title: '提示',
	                                content: '请同意此协议！',
	                                onOk: function onOk() {}
	                            });
	                        } else {
	                            validate = true;
	                        }
	                    });
	                    return validate;
	                }
	            }, {
	                "type": "aiForm",
	                "configStepApi": "sbglSubStep2",
	                "number": "2",
	                "name": "认证管理节点证书",
	                "id": "sbglSubStep2",
	                "footer": [function () {
	                    return _react2["default"].createElement(
	                        _button2["default"],
	                        { type: 'primary', onClick: function onClick() {
	                                _global.Global.mark({
	                                    sbglsub: {
	                                        sbglsub_inst: {
	                                            file: false,
	                                            defaultFiles: {}
	                                        }
	                                    }
	                                }, 'prev_upload');
	                                //移除已上传的部分
	                                var sbglSubstepInfoRemove = _global.Global.getState().aiForm.sbglSubStep2.config.data;
	                                sbglSubstepInfoRemove[1] = {};
	                                _global.Global.mark({
	                                    aiForm: {
	                                        sbglSubStep2: {
	                                            config: {
	                                                data: sbglSubstepInfoRemove
	                                            }
	                                        }
	                                    }
	                                });
	                                var filename = _global.Global.getState().aiForm.sbglSubStep2.filename;
	                                _global.Global.requestApi({ apiName: 'removeFileData', body: { filename: filename }, next: function next(action) {} }, { framework: { removeFileData: null } });
	                                _history2["default"].push("steperV1/sbglSubStepers/1");
	                            } },
	                        '\u4E0A\u4E00\u6B65'
	                    );
	                }, function () {
	                    return _react2["default"].createElement(
	                        _button2["default"],
	                        { type: 'primary', onClick: function onClick() {
	                                if (_global.Global.getState().sbglsub.sbglsub_inst.file) {
	                                    if (_global.Global.getState().aiForm.sbglSubStep2.config.data[1]) {
	                                        var nodeValues = _global.Global.getState().aiForm.fileDatas;
	                                        _global.Global.requestApi({ apiName: 'authCenterEquipement', body: nodeValues, next: function next(action) {
	                                                if (action.code == '0') {
	                                                    _history2["default"].push("steperV1/sbglSubStepers/3");
	                                                } else {
	                                                    _modal2["default"].warning({
	                                                        title: '提示',
	                                                        content: '保存中心证书信息失败！',
	                                                        onOk: function onOk() {
	                                                            //处理已经成功的加入设备中的文件信息
	                                                        }
	                                                    });
	                                                }
	                                            } }, { aiForm: { authCenterEquipement: null } });
	                                    }
	                                } else {
	                                    _modal2["default"].warning({
	                                        title: '提示',
	                                        content: '请上传管理节点证书，认证后继续下一步。'
	                                    });
	                                }
	                            } },
	                        '\u4E0B\u4E00\u6B65'
	                    );
	                }]
	            }, {
	                "type": "aiForm",
	                "configStepApi": "sbglSubStep3",
	                "number": "3",
	                "name": "设置设备信息",
	                "id": "sbglSubStep3",
	                "footer": ["prev", 'next'],
	                "validate": function validate() {
	                    var form = _global.Global.getState().aiForm.sbglSubStep3.form;
	                    var validate = false;
	                    form.validateFields(function (fileds) {
	                        validate = !fileds;
	                        console.log("fileds:", fileds);
	                    });
	                    if (validate) {
	                        _global.Global.mark({
	                            aiForm: {
	                                sbglSubStep3: {
	                                    values: form.getFieldsValue()
	                                }
	                            }
	                        });
	                        if (_global.Global.getState().aiForm.sbglSubStep3.values) {
	                            var state = _global.Global.getState();
	                            var nodeValues = state.aiForm.sbglSubStep3.values;
	                            _global.Global.requestApi({ apiName: 'createLocalCerInfo', body: nodeValues, next: function next(action) {
	                                    if (action.code == '0') {
	                                        _global.Global.requestApi({ apiName: 'getLocalEquimentInfo', next: function next(result) {
	                                                if (result.code == '0') {
	                                                    _global.Global.mark({
	                                                        framework: {
	                                                            loginApi: {
	                                                                data: {
	                                                                    loginUserProfileDTO: {
	                                                                        equimentDssgEnable: true,
	                                                                        currentEquipment: result.data
	                                                                    }
	                                                                }
	                                                            }
	                                                        }
	                                                    });
	                                                    _history2["default"].push("steperV1/sbglSubStepers/4");
	                                                }
	                                            } }, { aiForm: { getLocalEquimentInfo: null } });
	                                    } else {
	                                        _modal2["default"].warning({
	                                            title: '提示',
	                                            content: '设备信息设置失败',
	                                            onOk: function onOk() {}
	                                        });
	                                    }
	                                } }, { aiForm: { createLocalCerInfo: null } });
	                        }
	                    }
	                    return false;
	                }

	            }, {
	                "type": "aiForm",
	                "configStepApi": "sbglSubStep4",
	                "number": "4",
	                "name": "下载设备证书",
	                "id": "sbglSubStep4",
	                "footer": [function () {
	                    var step3Datas = _global.Global.getState().aiForm.getLocalEquimentInfo && _global.Global.getState().aiForm.getLocalEquimentInfo.data ? _global.Global.getState().aiForm.getLocalEquimentInfo.data : {};
	                    var url = _interfaces.server + "syselocalquipment/downCerFile?publicip=" + step3Datas.publicIp;
	                    return _react2["default"].createElement(
	                        'a',
	                        { href: url },
	                        _react2["default"].createElement(
	                            _button2["default"],
	                            { title: '\u4E0B\u8F7D\u8BC1\u4E66', type: 'primary', style: { backgroundColor: '#ffae78', borderColor: '#ffae78' } },
	                            '\u4E0B\u8F7D\u8BC1\u4E66'
	                        )
	                    );
	                }, function () {
	                    return _react2["default"].createElement(
	                        _button2["default"],
	                        { style: { backgroundColor: '#48c2a9', borderColor: '#48c2a9', color: '#fff' }, onClick: function onClick() {
	                                var loginInfo = _jsCookie2["default"].get('dssgUserInfo');
	                                var session = loginInfo ? JSON.parse(loginInfo) : null;
	                                if (session) {
	                                    session.loginUserProfileDTO.equimentDssgEnable = true;
	                                    _jsCookie2["default"].set("dssgUserInfo", (0, _stringify2["default"])(session), { path: '/' });
	                                }
	                                _history2["default"].push("page/Sbglsub");
	                            }
	                        },
	                        '\u5B8C\u6210'
	                    );
	                }],
	                "validate": function validate() {
	                    return true;
	                }
	            }]
	        }
	    });
	});

/***/ }
]);