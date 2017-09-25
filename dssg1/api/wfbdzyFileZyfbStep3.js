webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(54);

	var _form = __webpack_require__(53);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _AiFormTable = __webpack_require__(310);

	var _AiFormTable2 = _interopRequireDefault(_AiFormTable);

	var _AiLabel = __webpack_require__(311);

	var _AiLabel2 = _interopRequireDefault(_AiLabel);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(10);

	var _history = __webpack_require__(32);

	var _history2 = _interopRequireDefault(_history);

	var _interfaces = __webpack_require__(35);

	var _UploaderForIe = __webpack_require__(2450);

	var _UploaderForIe2 = _interopRequireDefault(_UploaderForIe);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var FormItem = _form2["default"].Item;

	(0, _jsonp2["default"])("wfbdzyFileZyfbStep3")(function (args, callback) {
	    var state = _global.Global.getState();
	    /* let lastStepState = state.dataList.wfbdzyFileZyfbStep1;
	    if(!lastStepState){
	        Modal.warning({
	            title: '提示',
	            content: '上一步或前几步没有完成，请返回第一步重新开始。',
	            onOk:()=>{
	                  setTimeout(()=>{
	                    Global.mark({aiForm:{
	                        wfbdzyFileZyfbStep3:null
	                    }});
	                    history.push(state.routing.path.replace(/\/\d+/,'/1'));
	                },500)
	              }
	        });
	        return;
	    } */

	    callback({
	        "success": true,
	        "data": [{
	            "title": "",
	            "column": 2,
	            "labelCol": 10,
	            "wrapperCol": 14,
	            "showTitle": false,
	            "data": [{ "name": "文件编码", "type": "input", "field": "resCode", "validate": [{ "required": true, "message": '请填写文件编码 !' }, {
	                    validator: function validator(rule, value, callback) {
	                        if (value && value != "") {
	                            if (!/^[\w-]+$/.test(value)) {
	                                callback('支持英文,数字,下划线，短横线！');
	                            }
	                            if (value.length > 20) {
	                                callback('请限制输入在20以内！');
	                            } else {
	                                var LastWord = _global.Global.getState().aiForm.wfbdzyFileZyfbStep3.values ? _global.Global.getState().aiForm.wfbdzyFileZyfbStep3.values.resCode : "";
	                                if (LastWord && LastWord == value) {
	                                    callback();
	                                } else {
	                                    _global.Global.requestApi({ apiName: "checkResCodeORResName", body: { resCode: value }, next: function next(action) {
	                                            if (action.data == false) {
	                                                callback('文件编码已存在，请修改！');
	                                            } else {
	                                                callback();
	                                            }
	                                        } }, {}, {});
	                                }
	                            }
	                        } else {
	                            callback();
	                        }
	                    }
	                }] }, { "name": "文件名称", "type": "input", "field": "resName", "validate": [{ "required": true, "message": '请填写文件名称 !' }, {
	                    validator: function validator(rule, value, callback) {
	                        if (value && value != "") {
	                            if (value.length > 100) {
	                                callback('请限制输入在100以内！');
	                            } else if (!/^[\w\u4E00-\u9FA5\uFF00-\uFFFF]+$/.test(value)) {
	                                callback('支持中英文、数字、下划线');
	                            } else {
	                                var LastWord = _global.Global.getState().aiForm.wfbdzyFileZyfbStep3.values ? _global.Global.getState().aiForm.wfbdzyFileZyfbStep3.values.resName : "";
	                                if (LastWord && LastWord == value) {
	                                    callback();
	                                } else {
	                                    _global.Global.requestApi({ apiName: "checkResCodeORResName", body: { resName: value }, next: function next(action) {
	                                            if (action.data == false) {
	                                                callback('文件名称已存在，请修改！');
	                                            } else {
	                                                callback();
	                                            }
	                                        } }, {}, {});
	                                }
	                            }
	                        } else {
	                            callback();
	                        }
	                    }
	                }] }, { "name": "摘要", "type": "input", "field": "abstracts", "validate": [{ "required": true, "message": '请填写摘要!' }, {
	                    validator: function validator(rule, value, callback) {
	                        if (value && value != "") {
	                            if (value.length > 300) {
	                                callback('请限制输入在300以内！');
	                            } else if (!/^[\w\u4E00-\u9FA5\uFF00-\uFFFF]+$/.test(value)) {
	                                callback('支持中英文、数字、下划线');
	                            } else {
	                                callback();
	                            }
	                        } else {
	                            callback();
	                        }
	                    }
	                }] }, { "name": "关键字", "type": "input", "field": "keyword", placeholder: "用逗号隔开 ", "validate": [{ "required": true, "message": '请填写关键字!' }, {
	                    validator: function validator(rule, value, callback) {
	                        if (value && value != "") {
	                            if (value.length > 100) {
	                                callback('请限制输入在100以内！');
	                            } else if (!/^[\w,\u4E00-\u9FA5\uFF00-\uFFFF]+$/.test(value)) {
	                                callback('支持中英文、数字、下划线');
	                            } else {
	                                callback();
	                            }
	                        } else {
	                            callback();
	                        }
	                    }
	                }] }, { "type": "treeSelect", "name": "国家主题分类", "field": "themeType", dictId: "themeType", dictApi: { apiName: 'getDictsByType', body: { name: "themeType", type: 1 } },
	                "defaultValue": state.dicts.treeSelect && state.dicts.treeSelect.themeType && state.dicts.treeSelect.themeType.data && state.dicts.treeSelect.themeType.data.themeType && state.dicts.treeSelect.themeType.data.themeType.length > 0 ? state.dicts.treeSelect.themeType.data.themeType[0].value : ""

	            }, { "name": "订阅类型", "type": "text", "field": "dylx", "defaultValue": "文件", value: "文件" }, { "name": "数据提供方", "type": "input", "field": "rporgname", "validate": [{ "required": true, "message": '请填写数据提供方 !' }, {
	                    validator: function validator(rule, value, callback) {
	                        if (value && value != "") {
	                            if (value.length > 100) {
	                                callback('请限制输入在100以内！');
	                            } else if (!/^[\w\u4E00-\u9FA5\uFF00-\uFFFF]+$/.test(value)) {
	                                callback('支持中英文、数字、下划线');
	                            } else {
	                                callback();
	                            }
	                        } else {
	                            callback();
	                        }
	                    }
	                }] }, { "name": "数据提供方地址", "type": "input", "field": "address", "validate": [{ "required": true, "message": '请填写数据提供方地址 !' }, {
	                    validator: function validator(rule, value, callback) {
	                        if (value && value != "") {
	                            if (value.length > 100) {
	                                callback('请限制输入在100以内！');
	                            } else if (!/^[\w\u4E00-\u9FA5\uFF00-\uFFFF]+$/.test(value)) {
	                                callback('支持中英文、数字、下划线');
	                            } else {
	                                callback();
	                            }
	                        } else {
	                            callback();
	                        }
	                    }
	                }] }, { "name": "发布原因", "type": "input", "field": "applyReason", "validate": [{
	                    validator: function validator(rule, value, callback) {
	                        if (value && value != "") {
	                            if (value.length > 100) {
	                                callback('请限制输入在100以内！');
	                            } else if (!/^[\w\u4E00-\u9FA5\uFF00-\uFFFF]+$/.test(value)) {
	                                callback('支持中英文、数字、下划线');
	                            } else {
	                                callback();
	                            }
	                        } else {
	                            callback();
	                        }
	                    }
	                }] }, { "name": "图片", "type": "upload", "field": "picturePath",
	                props: {
	                    action: _global.Global.server.split('api')[0] + 'api/fileUpload/uploadFile'
	                }, "validate": [{
	                    validator: function validator(rule, value, callback) {
	                        if (value.length > 0) {
	                            if (value.length == 1) {
	                                if (value[0].type != "" && value[0].type.indexOf("image/") >= 0) {
	                                    callback();
	                                } else {
	                                    callback('格式不正确，请换成图片！');
	                                }
	                            } else {
	                                callback('图片只能上传一个！');
	                            }
	                        } else {
	                            callback();
	                        }
	                    }
	                }]
	            }]
	        }]
	    });
	});

/***/ },

/***/ 1012:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"footer":"footer___1VVCW"};

/***/ },

/***/ 2450:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _css = __webpack_require__(559);

	var _upload = __webpack_require__(528);

	var _upload2 = _interopRequireDefault(_upload);

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _css2 = __webpack_require__(26);

	var _button = __webpack_require__(23);

	var _button2 = _interopRequireDefault(_button);

	var _css3 = __webpack_require__(44);

	var _icon = __webpack_require__(19);

	var _icon2 = _interopRequireDefault(_icon);

	var _defineProperty2 = __webpack_require__(7);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(6);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(5);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _Footer = __webpack_require__(1012);

	var _Footer2 = _interopRequireDefault(_Footer);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _component = __webpack_require__(11);

	var _component2 = _interopRequireDefault(_component);

	var _global = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var rootState = 'uploader';

	var UploaderForIe9 = function (_Component) {
	    (0, _inherits3["default"])(UploaderForIe9, _Component);

	    function UploaderForIe9(props) {
	        (0, _classCallCheck3["default"])(this, UploaderForIe9);

	        var _this = (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));

	        _this.onChange = _this.onChange.bind(_this);
	        _global.Global.mark({
	            uploader: (0, _defineProperty3["default"])({}, _this.props.id, {
	                fileList: []
	            })
	        }, 'UploaderForIe9_init');
	        return _this;
	    }

	    UploaderForIe9.prototype.onChange = function onChange(info) {
	        var fileList = info.fileList;
	        fileList = fileList.map(function (file) {
	            if (file.response) {
	                // Component will show file.url as link
	                file.url = file.response.url;
	            }
	            return file;
	        });

	        /*fileList = fileList.filter((file) => {
	            if (file.response) {
	                return file.response.status === 'success';
	            }
	            return true;
	        });*/

	        _global.Global.mark({
	            uploader: (0, _defineProperty3["default"])({}, this.props.id, {
	                fileList: fileList
	            })
	        }, 'UploaderForIe9_onChange');
	    };

	    UploaderForIe9.prototype.render = function render() {
	        if (!this.props.state) return _react2["default"].createElement(
	            'div',
	            null,
	            '...'
	        );
	        var props = {
	            action: this.props.action,
	            onChange: this.onChange
	        };

	        return _react2["default"].createElement(
	            _upload2["default"],
	            (0, _extends3["default"])({}, props, { fileList: this.props.state.fileList }),
	            _react2["default"].createElement(
	                _button2["default"],
	                null,
	                _react2["default"].createElement(_icon2["default"], { type: 'upload' }),
	                ' upload'
	            )
	        );
	    };

	    return UploaderForIe9;
	}(_react.Component);

	exports["default"] = (0, _component2["default"])(rootState)(UploaderForIe9);
	module.exports = exports['default'];

/***/ }

});