(function(){ var runed=0,temp,timer,time;webpackJsonp([3],{

/***/ 0:
/***/ temp = function(module, exports, __webpack_require__) {runed=true;

	'use strict';

	var _css = __webpack_require__(104);

	var _select = __webpack_require__(103);

	var _select2 = _interopRequireDefault(_select);

	var _css2 = __webpack_require__(63);

	var _form = __webpack_require__(59);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(234);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(15);

	var _interfaces = __webpack_require__(33);

	var _actionType = __webpack_require__(25);

	var _UploadText = __webpack_require__(1328);

	var _UploadText2 = _interopRequireDefault(_UploadText);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * Created by liy on 2016/12/17 0017.
	 */
	var FormItem = _form2["default"].Item;
	(0, _jsonp2["default"])("bannerAdd")(function (args, callback) {
	    var getHtmlArg = function getHtmlArg(name, defaultValue) {
	        var match = window.location.href.match(new RegExp(name + '=([^&#]*)'));
	        return match ? decodeURIComponent(match[1]) : defaultValue;
	    };
	    _global.Global.getState().aiForm.fileId = new Array();
	    var server = '/api/';
	    server = getHtmlArg('server', server);
	    var target = args.target;
	    var getFieldDecorator = target.props.form.getFieldDecorator;
	    callback({
	        "success": true,
	        "data": [{
	            "column": 2,
	            "data": [{ "type": "input", "col": 8, "name": "标题", "field": "title", "validate": [{ "required": true, "message": '请输入标题!' }] }, { "value": function value(config) {
	                    return _react2["default"].createElement(
	                        FormItem,
	                        {
	                            label: "banner类型",
	                            labelCol: { span: 4 },
	                            wrapperCol: { span: 20 }
	                        },
	                        getFieldDecorator("type", {
	                            initialValue: "2",
	                            rules: [{ required: true, message: '请输入类型!' }]
	                        })(_react2["default"].createElement(
	                            _select2["default"],
	                            null,
	                            _react2["default"].createElement(
	                                Option,
	                                { value: '1' },
	                                '\u89C6\u9891'
	                            ),
	                            _react2["default"].createElement(
	                                Option,
	                                { value: '2' },
	                                '\u56FE\u7247'
	                            )
	                        )),
	                        _react2["default"].createElement(
	                            'span',
	                            { style: { color: 'red', marginLeft: '20px' } },
	                            '\u56FE\u7247\u652F\u6301 jpg/png \u683C\u5F0F'
	                        )
	                    );
	                }
	            }, { "name": "文件", "type": "upload", "col": 8, "validate": [{ "required": true, "message": '请输入标题!' }], "field": "doc",
	                props: {
	                    action: server + 'fileUpload/uploadFile',
	                    onChange: function onChange(info) {
	                        if ("done" == info.file.status) {
	                            _global.Global.mark({
	                                aiForm: {
	                                    fileId: _global.Global.getState().aiForm.fileId.concat(info.file.response.filesId[0])
	                                }
	                            });
	                        }
	                        if ("removed" == info.file.status) {
	                            var fileIds = [];
	                            for (var i = 0; i < _global.Global.getState().aiForm.fileId.length; i++) {
	                                if (info.file.response.filesId[0] != _global.Global.getState().aiForm.fileId[i]) fileIds.push(_global.Global.getState().aiForm.fileId[i]);
	                            }
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
	                    return _react2["default"].createElement(_UploadText2["default"], { getFieldDecorator: target.props.form.getFieldDecorator });
	                } }],

	            "buttonConfigs": {
	                "buttons": [{ "type": "button", "value": "取消", mark: "banner", props: { "style": { "float": "right" } } }, { "type": "button", "value": "确定", mark: "banner", props: { "style": { "float": "right" }, htmlType: "submit" } }]
	            }
	        }]
	    });
	});

/***/ },

/***/ 1328:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _css = __webpack_require__(44);

	var _input = __webpack_require__(85);

	var _input2 = _interopRequireDefault(_input);

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(6);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(5);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _css2 = __webpack_require__(63);

	var _form = __webpack_require__(59);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _component = __webpack_require__(13);

	var _component2 = _interopRequireDefault(_component);

	var _global = __webpack_require__(15);

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

	    UploadText.prototype.changeInput = function changeInput(event) {
	        var field = event.target.id;
	        var value = event.target.value;
	        var values = [];
	        values[field] = value;
	        if (type = 0) {
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
	            var field = "fileID" + fileNum;
	            fileNum++;
	            arr.push(_react2["default"].createElement(
	                FormItem,
	                {
	                    label: '',
	                    labelCol: { span: 8 },
	                    wrapperCol: { span: 14 }
	                },
	                getFieldDecorator(field, {
	                    initialValue: eventList.length > 0 ? eventList[i] : ""
	                })(_react2["default"].createElement(_input2["default"], { onChange: _this2.changeInput.bind(_this2), type: 'text' }))
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

});if(!runed){
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