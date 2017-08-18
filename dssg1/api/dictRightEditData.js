webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(1723);

	var _modal = __webpack_require__(29);

	var _modal2 = _interopRequireDefault(_modal);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _dataFormat = __webpack_require__(64);

	var _global = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("dictRightEditData")(function (args, callback) {
	    var target = args.target;
	    var state = _global.Global.getState();
	    var values = state.dataList.dictsInfo.detailMsgDataApi && state.dataList.dictsInfo.detailMsgDataApi.data ? state.dataList.dictsInfo.detailMsgDataApi.data : {};
	    var detailValue = [],
	        imageInfo = [],
	        inputType = false;
	    if (state.dataList.dictsInfo.detailMsgDataApi && state.dataList.dictsInfo.detailMsgDataApi.data) {
	        detailValue = values;
	        inputType = true;
	        imageInfo.push({
	            uid: values.imageUrl,
	            name: values.imageName,
	            status: 'done'
	        });
	    }
	    if (state.dataList.dictsInfo.detailMsgDataApi && state.dataList.dictsInfo.detailMsgDataApi.level) {
	        detailValue.level = state.dataList.dictsInfo.detailMsgDataApi.level;
	    }
	    var name = detailValue.name ? detailValue.name : null;
	    var code = detailValue.code ? detailValue.code : null;
	    var config = [{ "type": "input", "name": "字典项", "field": "name", "defaultValue": detailValue.name ? detailValue.name : "",
	        "validate": [{ "required": true, "message": '不能为空 !' }, {
	            validator: function validator(rule, value, callback) {
	                if (value.length > 20) {
	                    callback('请限制输入在20以内！');
	                } else {
	                    if (name && value == name) {
	                        callback();
	                    } else if (value && value != "") {
	                        _global.Global.requestApi({ apiName: "checkCodeOrName", body: { name: value }, next: function next(action) {
	                                if (action.data == false) {
	                                    callback('名称已使用！');
	                                } else {
	                                    callback();
	                                }
	                            } }, {}, {});
	                    } else {
	                        callback();
	                    }
	                }
	            }
	        }] }, { "type": "input", "name": "编码", props: { disabled: inputType }, "field": "code", "defaultValue": detailValue.code ? detailValue.code : "",
	        "validate": [{ "required": true, "message": '不能为空 !' }, {
	            validator: function validator(rule, value, callback) {
	                if (value && value != "" && !/^[A-Za-z0-9]+$/.test(value)) {
	                    callback('请填写英文或数字！');
	                }
	                if (value.length > 20) {
	                    callback('请限制输入在20以内！');
	                } else {
	                    if (code && value == code) {
	                        callback();
	                    } else if (value && value != "") {
	                        _global.Global.requestApi({ apiName: "checkCodeOrName", body: { code: value }, next: function next(action) {
	                                if (action.data == false) {
	                                    callback('编码已使用！');
	                                } else {
	                                    callback();
	                                }
	                            } }, {}, {});
	                    } else {
	                        callback();
	                    }
	                }
	            }
	        }] }, { "type": "input", "name": "备注", "field": "description", "defaultValue": detailValue.description ? detailValue.description : "" }];
	    //DICTIONARY-FIXE-LEVEL-ONE-000001 为主题分类的id
	    var selected = state.mainConMenu && state.mainConMenu.selected && state.mainConMenu.selected.length == 1 ? state.mainConMenu.selected[0] : null;
	    var treeSort = (0, _dataFormat.getLeftTreeName)(state, selected, "sort");
	    if (selected && treeSort == "1" || treeSort == "2") {
	        if (!detailValue.level || detailValue.level && detailValue.level == 2) {
	            _global.Global.getState().aiForm.dictRightEditData.fileId = new Array();
	            config.push({ "name": "图片", "formItemHeight": "77", "type": "upload", defaultValue: imageInfo, "field": "imageUrl",
	                props: {
	                    action: _global.Global.server.split('api')[0] + 'api/fileUpload/uploadFile',
	                    beforeUpload: function beforeUpload(file) {
	                        if (!file.type.match(/image\/*/)) {
	                            _modal2["default"].warning({
	                                title: '提示',
	                                content: '格式不正确，请上传图片',
	                                onOk: function onOk() {}
	                            });
	                            return false;
	                        }
	                        if (_global.Global.getState().aiForm.dictRightEditData.alreadyUpload) {
	                            _modal2["default"].warning({
	                                title: '提示',
	                                content: '只能上传一个文件',
	                                onOk: function onOk() {}
	                            });
	                            return false;
	                        }
	                    }
	                },
	                "validate": [{ "required": true, "message": '不能为空 !' }]
	            });
	        }
	    }
	    callback({
	        "success": true,
	        "data": [{
	            "title": "",
	            "column": 1,
	            "labelCol": 7,
	            "wrapperCol": 15,
	            "data": config
	        }]
	    });
	});

/***/ }
]);