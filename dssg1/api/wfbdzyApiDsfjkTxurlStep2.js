webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(2358);

	var _modal = __webpack_require__(29);

	var _modal2 = _interopRequireDefault(_modal);

	var _css2 = __webpack_require__(54);

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

	var _dataFormat = __webpack_require__(64);

	var _global = __webpack_require__(10);

	var _ApiMethods = __webpack_require__(1124);

	var _ApiMethods2 = _interopRequireDefault(_ApiMethods);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var FormItem = _form2["default"].Item; /**
	                                     * Created by liy on 2016/12/20 0020.
	                                     * change  tiangb
	                                     */


	(0, _jsonp2["default"])("wfbdzyApiDsfjkTxurlStep2")(function (args, callback) {
	    var states = _global.Global.getState();

	    var detailMsg = states.aiForm.wfbdzyApiDsfjkTxysjStep1 && states.aiForm.wfbdzyApiDsfjkTxysjStep1.detailMsgDataApi && states.aiForm.wfbdzyApiDsfjkTxysjStep1.detailMsgDataApi.data ? states.aiForm.wfbdzyApiDsfjkTxysjStep1.detailMsgDataApi.data : {};
	    var apiUrl = void 0,
	        realmNameOld = void 0;
	    if (detailMsg.id) {
	        apiUrl = detailMsg.apiUrl;
	        realmNameOld = detailMsg.realmName;
	    }
	    var values = states.aiForm.wfbdzyApiDsfjkTxurlStep2.values ? states.aiForm.wfbdzyApiDsfjkTxurlStep2.values : {};
	    if (states.aiForm.wfbdzyApiDsfjkTxurlStep2.values) {
	        detailMsg = values;
	    }
	    var target = args.target;
	    var getFieldValue = target.props.form.getFieldValue;

	    var documentInfo = [];
	    var config = {
	        "success": true,
	        "data": [{
	            "title": "填写URL",
	            "column": 2,
	            "data": [{ "name": "服务类型", "type": "select", "field": "serviceType", "defaultValue": detailMsg.serviceType ? detailMsg.serviceType : "webservice", options: ["webservice", "rest"], "placeholder": "请选择...", "validate": [{ "required": true, "message": '不能为空!' }] }, { "name": "接口URL", field: "apiUrl", "type": "input", "defaultValue": detailMsg.apiUrl ? detailMsg.apiUrl : "", "validate": [{ "required": true, "message": '不能为空 !' }, {
	                    validator: function validator(rule, value, callback) {
	                        if (value != "") {
	                            var wsdlURI = void 0;
	                            var _states = _global.Global.getState();
	                            var realmName = (0, _dataFormat.getAiFormValue)(_states, "wfbdzyApiDsfjkTxurlStep2", 0).realmName;
	                            if (apiUrl && value == apiUrl && realmNameOld && realmNameOld == realmName) {
	                                callback();
	                            } else {
	                                wsdlURI = (0, _dataFormat.getAiFormValue)(_states, "wfbdzyApiDsfjkTxurlStep2", 0).apiUrl;
	                                _global.Global.mark({ aiForm: { wfbdzyApiDsfjkTxurlStep2: { functionName: null } } });
	                                _global.Global.requestApi({ apiName: "checkThirdUrlIsValidity", body: { url: wsdlURI, realmName: realmName }, next: function next(action) {
	                                        if (action.data == false) {
	                                            _global.Global.mark({ aiForm: { wfbdzyApiDsfjkTxurlStep2: { funNameBool: 0 } } });
	                                        } else {
	                                            _global.Global.mark({ aiForm: { wfbdzyApiDsfjkTxurlStep2: { funNameBool: 1 } } });
	                                        }
	                                    } }, {}, {});
	                                callback();
	                            }
	                            _global.Global.requestApi({ "apiName": "wsdl4jParse", body: { wsdlURI: wsdlURI }, next: function next(action) {
	                                    _global.Global.mark({ aiForm: { wfbdzyApiDsfjkTxurlStep2: { functionName: action } } });
	                                } }, ["requestWsdl4jParse", "receiveWsdl4jParse", "failedWsdl4jParse"], {});
	                        } else {
	                            callback();
	                        }
	                    }
	                }] }, { value: function value(config) {
	                    return _react2["default"].createElement(_ApiMethods2["default"], { formItemHeight: 77, getFieldDecorator: target.props.form.getFieldDecorator });
	                },
	                preRender: function preRender() {
	                    return _global.Global.getState().aiForm.wfbdzyApiDsfjkTxurlStep2.form.getFieldValue("serviceType") == "webservice" ? '' : "hidden";
	                } }, //方法

	            { "name": "接口文档", "formItemHeight": "77", "type": "upload", defaultValue: documentInfo, "field": "apiDocId",
	                props: {
	                    action: _global.Global.server.split('api')[0] + 'api/fileUpload/uploadFile',
	                    beforeUpload: function beforeUpload(file) {
	                        if (!file.type.match(/application\/msword/) && !file.type.match(/application\/pdf/) && !file.type.match(/application\/vnd/) && !file.type.match(/text\/plain/)) {
	                            _modal2["default"].warning({
	                                title: '提示',
	                                content: '格式不正确，请上传文档',
	                                onOk: function onOk() {}
	                            });
	                            return false;
	                        }
	                        if (_global.Global.getState().aiForm.wfbdzyApiDsfjkTxurlStep2.alreadyUpload) {
	                            _modal2["default"].warning({
	                                title: '提示',
	                                content: '只能上传一个文档',
	                                onOk: function onOk() {}
	                            });
	                            return false;
	                        }
	                        if (file.size > 1024 * 1024) {
	                            _modal2["default"].warning({
	                                title: '提示',
	                                content: '文档不能大于1M',
	                                onOk: function onOk() {}
	                            });
	                            return false;
	                        }
	                    }
	                },
	                "validate": [{ "required": true }]

	                //  {"name":"接口文档","type":"upload","defaultValue":detailMsg.apiDoc?detailMsg.apiDoc:null,"field":"apiDoc",props:{multiple:true,action: '/upload.do'}}

	            }]
	        }]
	    };

	    callback(config);
	});

/***/ },

/***/ 1124:
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

	var _css2 = __webpack_require__(2334);

	var _select = __webpack_require__(75);

	var _select2 = _interopRequireDefault(_select);

	var _css3 = __webpack_require__(54);

	var _form = __webpack_require__(53);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _component = __webpack_require__(11);

	var _component2 = _interopRequireDefault(_component);

	var _global = __webpack_require__(10);

	var _interfaces = __webpack_require__(35);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	//import styles from './Footer.less';
	var FormItem = _form2["default"].Item;
	var rootState = 'test';
	var Option = _select2["default"].Option;

	var ApiMethods = function (_Component) {
	    (0, _inherits3["default"])(ApiMethods, _Component);

	    function ApiMethods(props) {
	        (0, _classCallCheck3["default"])(this, ApiMethods);
	        return (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));
	    }
	    /*{"name":"方法",field:"functionName","defaultValue":urlDetail.functionName?urlDetail.functionName:"","type":"input",preRender:()=>{
	     return getFieldValue('serviceType') == 'rest'?"hidden":"";
	     }
	     },*/


	    ApiMethods.prototype.render = function render() {
	        var state = _global.Global.getState();
	        var detailMsg = state.aiForm.wfbdzyApiDsfjkTxysjStep1 && state.aiForm.wfbdzyApiDsfjkTxysjStep1.detailMsgDataApi && state.aiForm.wfbdzyApiDsfjkTxysjStep1.detailMsgDataApi.data ? state.aiForm.wfbdzyApiDsfjkTxysjStep1.detailMsgDataApi.data : {};
	        var getFieldDecorator = this.props.getFieldDecorator;
	        var values = state.aiForm.wfbdzyApiDsfjkTxurlStep2.form.getFieldsValue();
	        var functionName = [];
	        if (values.serviceType == "rest") {
	            return null;
	        } else {
	            functionName = state.aiForm.wfbdzyApiDsfjkTxurlStep2 && state.aiForm.wfbdzyApiDsfjkTxurlStep2.functionName && state.aiForm.wfbdzyApiDsfjkTxurlStep2.functionName.data && state.aiForm.wfbdzyApiDsfjkTxurlStep2.functionName.data.length > 0 ? state.aiForm.wfbdzyApiDsfjkTxurlStep2.functionName.data : [];
	            return functionName.length > 0 ? _react2["default"].createElement(
	                FormItem,
	                { style: { height: this.props.formItemHeight ? this.props.formItemHeight : "" },

	                    label: '\u65B9\u6CD5',
	                    labelCol: { span: 12 },
	                    wrapperCol: { span: 12 }
	                },
	                getFieldDecorator("functionName", {
	                    initialValue: functionName[0]
	                })(_react2["default"].createElement(
	                    _select2["default"],
	                    null,
	                    function () {

	                        return functionName.map(function (item) {
	                            return _react2["default"].createElement(
	                                Option,
	                                { key: item + Math.random(), value: item + Math.random() },
	                                item
	                            );
	                        });
	                    }()
	                ))
	            ) : _react2["default"].createElement(
	                FormItem,
	                { style: { height: this.props.formItemHeight ? this.props.formItemHeight : "" },
	                    label: '\u65B9\u6CD5',
	                    labelCol: { span: 12 },
	                    wrapperCol: { span: 12 }
	                },
	                getFieldDecorator("functionName", {})(_react2["default"].createElement(_input2["default"], null))
	            );
	        }
	    };

	    return ApiMethods;
	}(_react.Component);

	exports["default"] = (0, _component2["default"])(rootState, {}, function (state) {
	    return { aiForm: state.aiForm };
	})(ApiMethods);
	module.exports = exports['default'];

/***/ }

});