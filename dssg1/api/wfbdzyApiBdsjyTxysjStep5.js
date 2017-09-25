webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _AiLabel = __webpack_require__(311);

	var _AiLabel2 = _interopRequireDefault(_AiLabel);

	var _AiFormTable = __webpack_require__(310);

	var _AiFormTable2 = _interopRequireDefault(_AiFormTable);

	var _ApiInterFaceSet = __webpack_require__(1123);

	var _ApiInterFaceSet2 = _interopRequireDefault(_ApiInterFaceSet);

	var _aiFormTable = __webpack_require__(150);

	var _global = __webpack_require__(10);

	var _dataFormat = __webpack_require__(64);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _history = __webpack_require__(32);

	var _history2 = _interopRequireDefault(_history);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("wfbdzyApiBdsjyTxysjStep5")(function (args, callback) {
	    var target = args.target;
	    var states = _global.Global.getState();

	    /**
	     * title：表格标题
	     * dataIndex：表格字段名
	     * key：表格字段标识
	     *render：使用AiLable组件：返回单个标签，
	     * AiLabel组件目前仅使用与可编辑表格中
	     */
	    var columns = [{
	        "title": '接口类型',
	        "dataIndex": 'serviceType',
	        "key": 'serviceType',
	        "render": { "type": "select", "labelCol": 0, "wrapperCol": 24, options: [{ key: "webservice", value: "webservice" }, { key: "rest", value: "rest" }], props: {
	                style: { width: "100%" },
	                onChange: function onChange(value, text, record, index, that) {
	                    var rows = (0, _extends3["default"])({}, record);
	                    if (value == "webservice") {
	                        rows.messageFormat = "XML";
	                        rows["messageFormat_field_" + index] = "XML";
	                        rows.url = "http://X.X.X.X:XXXX/services/res?wsdl";
	                        rows["url_field_" + index] = "http://X.X.X.X:XXXX/services/res?wsdl";
	                    } else {
	                        rows.messageFormat = "JSON";
	                        rows["messageFormat_field_" + index] = "JSON";
	                        rows.url = "http://X.X.X.X:XXXX/restService/getData/资源ID";
	                        rows["url_field_" + index] = "http://X.X.X.X:XXXX/restService/getData/资源ID";
	                    }
	                    rows.key = Math.random();
	                    that.props.actions.updateRow(rows, "aFTDStep5", index);
	                }
	            } }
	    }, {
	        "title": '方法名称',
	        "dataIndex": 'functionName',
	        "key": 'functionName'
	    }, {
	        "title": '报文格式',
	        "dataIndex": 'messageFormat',
	        "key": 'messageFormat'
	    }, {
	        "title": 'URL地址',
	        "dataIndex": 'url',
	        "key": 'url'
	    }];
	    callback({
	        "success": true,
	        "data": [{
	            "data": _react2["default"].createElement(_AiFormTable2["default"], { config: {
	                    "columns": columns, //表格标头数据
	                    "dataSource": [{
	                        serviceType: "webservice",
	                        functionName: "getdb",
	                        messageFormat: "XML",
	                        url: "http://X.X.X.X:XXXX/services/res?wsdl"
	                    }]
	                }, id: 'aFTDStep5', form: target.props.form })
	        }]
	    });
	});

/***/ },

/***/ 1123:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(6);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(5);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _component = __webpack_require__(11);

	var _component2 = _interopRequireDefault(_component);

	var _global = __webpack_require__(10);

	var _AiFormTable = __webpack_require__(310);

	var _AiFormTable2 = _interopRequireDefault(_AiFormTable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	//import styles from './Footer.less';
	var rootState = 'test';

	var ApiInterFaceSet = function (_Component) {
	    (0, _inherits3["default"])(ApiInterFaceSet, _Component);

	    function ApiInterFaceSet(props) {
	        (0, _classCallCheck3["default"])(this, ApiInterFaceSet);
	        return (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));
	    }

	    ApiInterFaceSet.prototype.render = function render() {
	        var state = _global.Global.getState();
	        var columns = this.props.columns;
	        var target = this.props.target;
	        var dataSource = [{
	            serviceType: "webservice",
	            functionName: "getdb",
	            messageFormat: "XML",
	            url: "http://0.0.0.0:8080/services/res?wsdl"
	        }];
	        var aFTDStep5Data = _global.Global.getState().aiFormTable.aFTDStep5 && _global.Global.getState().aiFormTable.aFTDStep5.config && _global.Global.getState().aiFormTable.aFTDStep5.config.dataSource.length > 0 ? _global.Global.getState().aiFormTable.aFTDStep5.config.dataSource : [];
	        if (aFTDStep5Data.length > 0) {
	            if (aFTDStep5Data[0].serviceType == "Rest") {
	                aFTDStep5Data[0].messageFormat = "JSON";
	            } else {
	                aFTDStep5Data[0].messageFormat = "XML";
	            }
	            //Global.mark({aiFormTable:{aFTDStep5:{config:{dataSource:null}}}});
	            //Global.mark({aiFormTable:{aFTDStep5:{config:{dataSource:dataSource}}}});
	        }
	        return _react2["default"].createElement(_AiFormTable2["default"], { config: {
	                "columns": columns, //表格标头数据
	                "dataSource": aFTDStep5Data.length > 0 ? aFTDStep5Data : dataSource //表格数据
	            }, id: 'aFTDStep5', form: target.props.form });
	    };

	    return ApiInterFaceSet;
	}(_react.Component);

	exports["default"] = (0, _component2["default"])(rootState, {}, function (state) {
	    return { aiForm: state.aiForm };
	})(ApiInterFaceSet);
	module.exports = exports['default'];

/***/ }

});