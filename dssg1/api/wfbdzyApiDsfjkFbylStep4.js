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

	var _dataFormat = __webpack_require__(64);

	var _global = __webpack_require__(10);

	var _ApiMethods = __webpack_require__(1124);

	var _ApiMethods2 = _interopRequireDefault(_ApiMethods);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var FormItem = _form2["default"].Item;

	(0, _jsonp2["default"])("wfbdzyApiDsfjkFbylStep4")(function (args, callback) {
	    var states = _global.Global.getState();

	    var detailMsg = states.dataList.fbzyList && states.dataList.fbzyList.detailMsgDataApi && states.dataList.fbzyList.detailMsgDataApi.data ? states.dataList.fbzyList.detailMsgDataApi.data : {};

	    var recordDTO = detailMsg.recordDTO ? detailMsg.recordDTO : {};

	    var stepTwoValue = states.aiForm.wfbdzyApiDsfjkTxurlStep2.values;

	    var apiDocId = states.aiForm.wfbdzyApiDsfjkTxurlStep2.value[0].uid;

	    //提交数据封装
	    var values = { resourceId: detailMsg.id, resType: detailMsg.resType, apiSource: detailMsg.apiType, serviceType: stepTwoValue.serviceType, apiUrl: stepTwoValue.apiUrl,
	        functionName: stepTwoValue.functionName, apiDocId: apiDocId };
	    _global.Global.mark({ aiForm: { wfbdzyApiDsfjkFbylStep4: { values: values } } });
	    var webserviceConfig = {
	        "success": true,
	        "data": [{
	            "title": "查看编目申请",
	            "showTitle": true,
	            "column": 2,
	            "labelCol": 1,
	            "childrenContentFormItemHeightLow": true,
	            "wrapperCol": 6,
	            "data": [{ "name": "编目单位", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "createComp", "defaultValue": detailMsg.companyName ? detailMsg.companyName : "" }, { "name": "编目节点", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "createEqu", "defaultValue": detailMsg.equipmentName ? detailMsg.equipmentName : "" }, { "name": "联系人", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "linkman", "defaultValue": detailMsg.linkman ? detailMsg.linkman : "" }, { "name": "联系电话", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "phone", "defaultValue": detailMsg.phone ? detailMsg.phone : "" }, { "name": "资源域", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "doMainName", "defaultValue": detailMsg.doMainName ? detailMsg.doMainName : "" }, { "name": "资源目录", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "catalogName", "defaultValue": detailMsg.catalogName ? detailMsg.catalogName : "" }, { "name": "资源类型", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "resType", "defaultValue": detailMsg.resType == 1 ? "数据库" : detailMsg.resType == 2 ? "文件" : "API" }, { "name": "提交审批时间", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "subAuditTime", "defaultValue": recordDTO.subAuditTime ? recordDTO.subAuditTime : "" }]
	        }, {
	            "title": "接口地址信息",
	            "showTitle": true,
	            "column": 2,
	            "labelCol": 1,
	            "childrenContentFormItemHeightLow": true,
	            "wrapperCol": 6,
	            "data": [{ "name": "接口地址", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "createComp", "defaultValue": stepTwoValue.apiUrl ? stepTwoValue.apiUrl : "" }, { "name": "服务类型", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "createEqu", "defaultValue": stepTwoValue.serviceType ? stepTwoValue.serviceType : "" }, { "name": "方法", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "linkman", "defaultValue": stepTwoValue.functionName ? stepTwoValue.functionName : "" }]
	        }]
	    };

	    var restConfig = {
	        "success": true,
	        "data": [{
	            "title": "查看编目申请",
	            "showTitle": true,
	            "column": 2,
	            "labelCol": 1,
	            "childrenContentFormItemHeightLow": true,
	            "wrapperCol": 6,
	            "data": [{ "name": "编目单位", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "createComp", "defaultValue": detailMsg.companyName ? detailMsg.companyName : "" }, { "name": "编目节点", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "createEqu", "defaultValue": detailMsg.equipmentName ? detailMsg.equipmentName : "" }, { "name": "联系人", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "linkman", "defaultValue": detailMsg.linkman ? detailMsg.linkman : "" }, { "name": "联系电话", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "phone", "defaultValue": detailMsg.phone ? detailMsg.phone : "" }, { "name": "资源域", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "doMainName", "defaultValue": detailMsg.doMainName ? detailMsg.doMainName : "" }, { "name": "资源目录", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "catalogName", "defaultValue": detailMsg.catalogName ? detailMsg.catalogName : "" }, { "name": "资源类型", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "resType", "defaultValue": detailMsg.resType == 1 ? "数据库" : detailMsg.resType == 2 ? "文件" : "API" }, { "name": "提交审批时间", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "subAuditTime", "defaultValue": recordDTO.subAuditTime ? recordDTO.subAuditTime : "" }]
	        }, {
	            "title": "接口地址信息",
	            "showTitle": true,
	            "column": 2,
	            "labelCol": 1,
	            "childrenContentFormItemHeightLow": true,
	            "wrapperCol": 6,
	            "data": [{ "name": "接口地址", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "createComp", "defaultValue": stepTwoValue.apiUrl ? stepTwoValue.apiUrl : "" }, { "name": "服务类型", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "createEqu", "defaultValue": stepTwoValue.serviceType ? stepTwoValue.serviceType : "" }]
	        }]
	    };

	    if (stepTwoValue.serviceType == "webservice") {
	        callback(webserviceConfig);
	    } else {
	        callback(restConfig);
	    }
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