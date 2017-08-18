webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(1677);

	var _modal = __webpack_require__(29);

	var _modal2 = _interopRequireDefault(_modal);

	var _css2 = __webpack_require__(1678);

	var _select = __webpack_require__(75);

	var _select2 = _interopRequireDefault(_select);

	var _css3 = __webpack_require__(54);

	var _form = __webpack_require__(53);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(10);

	var _interfaces = __webpack_require__(35);

	var _actionType = __webpack_require__(22);

	var _UploadText = __webpack_require__(1151);

	var _UploadText2 = _interopRequireDefault(_UploadText);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * Created by liy on 2016/12/17 0017.
	 */
	var FormItem = _form2["default"].Item;
	(0, _jsonp2["default"])("bannerEdit")(function (args, callback) {
	    var getHtmlArg = function getHtmlArg(name, defaultValue) {
	        var match = window.location.href.match(new RegExp(name + '=([^&#]*)'));
	        return match ? decodeURIComponent(match[1]) : defaultValue;
	    };
	    var server = '/api/';
	    server = getHtmlArg('server', server);
	    var target = args.target;
	    var defaultValue = args.apiData ? args.apiData : {};
	    var backValue = defaultValue.content[0];
	    backValue.eventList = [];
	    var getFieldDecorator = target.props.form.getFieldDecorator;
	    var tempFileArray = new Array();
	    for (var i = 0; i < backValue.attachmentList.length; i++) {
	        tempFileArray.push(backValue.attachmentList[i].fid);
	        backValue.eventList.push(backValue.attachmentList[i].thumbanilPath ? backValue.attachmentList[i].thumbanilPath : "");
	    }
	    _global.Global.mark({
	        aiForm: {
	            eventList: backValue.eventList
	        }
	    });
	    _global.Global.getState().aiForm.fileId = new Array();
	    _global.Global.getState().aiForm.fileId = tempFileArray;
	    target.props.form.setFieldsValue({
	        "type": backValue.type,
	        "doc": backValue.attachmentList.map(function (attachment) {
	            return {
	                uid: attachment.fid,
	                name: attachment.realFileName,
	                status: 'done',
	                url: attachment.relativePath,
	                thumbUrl: attachment.relativePath
	            };
	        }),

	        "title": backValue.title
	    });
	    callback({
	        "success": true,
	        "data": [{
	            "column": 2,
	            "data": [{
	                "type": "input",
	                "col": 8,
	                "name": "标题",
	                "field": "title",
	                "validate": [{ "required": true, "message": '请输入标题!' }]
	            }, {
	                "value": function value(config) {
	                    return _react2["default"].createElement(
	                        FormItem,
	                        {
	                            label: "banner类型",
	                            labelCol: { span: 6 },
	                            wrapperCol: { span: 10 }
	                        },
	                        getFieldDecorator("type", {
	                            initialValue: "2",
	                            rules: [{ required: true, message: '请输入类型!' }]
	                        })(_react2["default"].createElement(
	                            _select2["default"],
	                            null,
	                            _react2["default"].createElement(
	                                Option,
	                                { value: '2' },
	                                '\u56FE\u7247'
	                            )
	                        )),
	                        _react2["default"].createElement(
	                            'span',
	                            { style: { color: 'red', position: 'relative', top: '-31px', left: '110%' } },
	                            '\u56FE\u7247\u652F\u6301 jpg/png/gif \u683C\u5F0F'
	                        )
	                    );
	                }
	            }, {
	                "name": "文件",
	                "type": "upload",
	                "col": 8,
	                "validate": [{ "required": true, "message": '请上传文件!' }],
	                "field": "doc",
	                props: {
	                    action: server + 'fileUpload/uploadFile',
	                    beforeUpload: function beforeUpload(info) {
	                        var suffixName = info.name.split(".");
	                        if (suffixName[suffixName.length - 1] != "png" && suffixName[suffixName.length - 1] != "jpg" && suffixName[suffixName.length - 1] != "gif" && suffixName[suffixName.length - 1] != "PNG" && suffixName[suffixName.length - 1] != "JPG" && suffixName[suffixName.length - 1] != "GIF") {
	                            _modal2["default"].warning({
	                                content: '请上传png/jpg/gif格式的文件！'
	                            });
	                            return false;
	                        } else if (document.getElementsByClassName("ant-upload-list-item").length > 4) {
	                            _modal2["default"].warning({
	                                content: '最多上传5个附件！'
	                            });
	                            return false;
	                        }
	                    },
	                    onChange: function onChange(info) {
	                        if ("done" == info.file.status) {
	                            if (_global.Global.getState().aiForm.fileId == null || _global.Global.getState().aiForm.fileId == "null") _global.Global.getState().aiForm.fileId = [];
	                            if (_global.Global.getState().aiForm.eventList == null || _global.Global.getState().aiForm.eventList == "null") _global.Global.getState().aiForm.eventList = [];
	                            _global.Global.mark({
	                                aiForm: {
	                                    fileId: _global.Global.getState().aiForm.fileId.concat(info.file.response.filesId[0])
	                                }
	                            });
	                            _global.Global.mark({
	                                aiForm: {
	                                    eventList: _global.Global.getState().aiForm.eventList.concat("")
	                                }
	                            });
	                        }
	                        if ("removed" == info.file.status) {
	                            var fileIds = [];
	                            var eventLists = [];
	                            var removeIndex = void 0;
	                            for (var _i = 0; _i < _global.Global.getState().aiForm.fileId.length; _i++) {
	                                if (info.file.response) {
	                                    if (info.file.response.filesId[0] == _global.Global.getState().aiForm.fileId[_i]) removeIndex = _i;
	                                    if (info.file.response.filesId[0] != _global.Global.getState().aiForm.fileId[_i]) fileIds.push(_global.Global.getState().aiForm.fileId[_i]);
	                                } else {
	                                    if (info.file.uid == _global.Global.getState().aiForm.fileId[_i]) removeIndex = _i;
	                                    if (info.file.uid != _global.Global.getState().aiForm.fileId[_i]) fileIds.push(_global.Global.getState().aiForm.fileId[_i]);
	                                }
	                            }
	                            for (var _i2 = 0; _i2 < _global.Global.getState().aiForm.eventList.length; _i2++) {
	                                if (_i2 != removeIndex) eventLists.push(_global.Global.getState().aiForm.eventList[_i2]);
	                            }
	                            _global.Global.mark({
	                                aiForm: {
	                                    eventList: null
	                                }
	                            });
	                            _global.Global.mark({
	                                aiForm: {
	                                    eventList: eventLists
	                                }
	                            });
	                            _global.Global.mark({
	                                aiForm: {
	                                    fileId: null
	                                }
	                            });
	                            _global.Global.mark({
	                                aiForm: {
	                                    fileId: fileIds
	                                }
	                            });
	                        }
	                    }
	                }
	            }, { value: function value(config) {
	                    return _react2["default"].createElement(_UploadText2["default"], { getEventList: _global.Global.getState().aiForm.eventList, getFieldDecorator: target.props.form.getFieldDecorator });
	                } }],
	            "buttonConfigs": {
	                "buttons": [{ "type": "button", "value": "取消", mark: "banner", props: { "style": { "float": "right" } } }, {
	                    "type": "button",
	                    "value": "确定",
	                    mark: "banner",
	                    props: { "style": { "float": "right" }, htmlType: "submit" }
	                }]
	            }
	        }]
	    });
	});

/***/ },

/***/ 1151:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _css = __webpack_require__(48);

	var _input = __webpack_require__(74);

	var _input2 = _interopRequireDefault(_input);

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(6);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(5);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _css2 = __webpack_require__(54);

	var _form = __webpack_require__(53);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _component = __webpack_require__(11);

	var _component2 = _interopRequireDefault(_component);

	var _global = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var FormItem = _form2["default"].Item; //import styles from './Footer.less';

	var rootState = 'test';

	var type;

	var UploadText = function (_Component) {
	    (0, _inherits3["default"])(UploadText, _Component);

	    function UploadText(props) {
	        (0, _classCallCheck3["default"])(this, UploadText);
	        return (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));
	    }

	    UploadText.prototype.changeInput = function changeInput(fileNum, event) {
	        var field = event.target.id;
	        var value = event.target.value;
	        var values = [];
	        values[field] = value;
	        var tempList = [];
	        //let tempIndex = parseInt(event.target.id.replace("fileID",""));
	        for (var i = 0; i < _global.Global.getState().aiForm.eventList.length; i++) {
	            if (i == fileNum) {
	                tempList.push(value);
	            } else {
	                tempList.push(_global.Global.getState().aiForm.eventList[i]);
	            }
	        }
	        _global.Global.mark({
	            aiForm: {
	                eventList: tempList
	            }
	        });
	        if (type == 0) {
	            _global.Global.getState().aiForm.dataListAdd1.form.setFieldsValue(values);
	        } else {
	            _global.Global.getState().aiForm.dataListEdit.form.setFieldsValue(values);
	        }
	        _global.Global.mark();
	    };

	    UploadText.prototype.render = function render() {
	        var _this2 = this;

	        var state = _global.Global.getState();
	        var getFieldDecorator = this.props.getFieldDecorator;
	        var eventList = void 0;
	        this.props.getEventList ? eventList = this.props.getEventList : eventList = "";
	        if (eventList.length > 0) type = 1;else type = 0;
	        var fileId = _global.Global.getState().aiForm.fileId ? _global.Global.getState().aiForm.fileId : [];
	        var fileNum = 0;
	        var arr = [];
	        fileId.length > 0 && fileId.map(function (id, i) {
	            var field = 'fileID' + id;
	            fileNum++;
	            var top = void 0,
	                urlText = void 0;
	            if (fileNum == 1) {
	                urlText = 'url地址：';
	                top = { width: '250px', height: '23px', position: 'relative', top: '35px' };
	            } else if (fileNum == 2) {
	                urlText = '';
	                top = { width: '250px', height: '23px', position: 'relative', top: '17px', left: '54px' };
	            } else if (fileNum == 3) {
	                urlText = '';
	                top = { width: '250px', height: '23px', position: 'relative', top: '-1px', left: '54px' };
	            } else if (fileNum == 4) {
	                urlText = '';
	                top = { width: '250px', height: '23px', position: 'relative', top: '-19px', left: '54px' };
	            } else {
	                urlText = '';
	                top = { width: '250px', height: '23px', position: 'relative', top: '-36px', left: '54px' };
	            }
	            arr.push(_react2["default"].createElement(
	                FormItem,
	                {
	                    key: id,
	                    label: '',
	                    labelCol: { span: 0 },
	                    wrapperCol: { span: 24 }
	                },
	                [_react2["default"].createElement(
	                    'span',
	                    { style: { position: 'relative', top: '35px' } },
	                    urlText
	                ), getFieldDecorator(field, {
	                    initialValue: eventList.length > 0 ? _global.Global.getState().aiForm.eventList[i] : ""
	                })(_react2["default"].createElement(_input2["default"], { style: top, onChange: _this2.changeInput.bind(_this2, fileNum - 1), type: 'text' }))]
	            ));
	        });
	        return _react2["default"].createElement(
	            'div',
	            null,
	            arr.length > 0 ? arr : ""
	        );
	    };

	    return UploadText;
	}(_react.Component);

	exports["default"] = (0, _component2["default"])(rootState, {}, function (state) {
	    return { aiForm: state.aiForm };
	})(UploadText);
	module.exports = exports['default'];

/***/ }

});