webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(6);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(5);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(250);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(12);

	var _AiForm = __webpack_require__(27);

	var _AiForm2 = _interopRequireDefault(_AiForm);

	var _component = __webpack_require__(11);

	var _component2 = _interopRequireDefault(_component);

	var _reactRouter = __webpack_require__(87);

	var _AiFormTable = __webpack_require__(443);

	var _AiFormTable2 = _interopRequireDefault(_AiFormTable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var AddStepperPage = function (_Component) {
	  (0, _inherits3["default"])(AddStepperPage, _Component);

	  function AddStepperPage(props) {
	    (0, _classCallCheck3["default"])(this, AddStepperPage);

	    var _this = (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));

	    _this.onClickCreator = _this.onClickCreator.bind(_this);
	    _global.Global.mark({
	      pageLoader: {
	        inst: {
	          source: ""
	        }

	      }
	    }, 'addStepper_init');
	    return _this;
	  }

	  AddStepperPage.prototype.onClickCreator = function onClickCreator(values) {
	    var className = values.pageName.charAt(0).toUpperCase() + values.pageName.substr(1);
	    var source = '//\u751F\u6210\u65E5\u671F\uFF1A' + new Date() + '\n//\u8BF7\u624B\u52A8\u521B\u5EFA\u9875\u9762\u6587\u4EF6 "src/pageArgs/' + values.pageName + '.js"\uFF0C\u5E76\u586B\u5145\u5F53\u524D\u5185\u5BB9\n//\u521B\u5EFA\u6587\u4EF6\u540E\uFF0C\u6D4F\u89C8\u8DEF\u7531\u5730\u5740 "#/steperV1/' + values.pageName + '/1",\u53EF\u67E5\u770B\u5230\u9875\u9762\u5B9E\u9645\u6548\u679C\nimport React from \'react\';\nimport {Button,Form,Input,Icon,DatePicker,InputNumber,Modal} from \'antFB\';\nimport callback from \'../core/jsonp\';\nimport ConnectDatasource from \'../components/ConnectDatasource\';\nimport {Global} from \'../core/global\';\nimport {saveSuccess} from \'../interfaces\';\n\nconst FormItem = Form.Item;\n\ncallback("' + values.pageName + '")((args,callback)=>{\n    callback(\n        {\n            "success": true,\n            "data": {\n                "afterSave":"issue",\n                "steps":[\n                    {\n                        "type":"datalist",\n                        "configStepApi":"steperDemoStep1",\n                        "number":"1",\n                        "name":"datalist\u9875\u9762",\n                        "id":"steperDemoStep1",\n                        "footer":[()=>{\n                            return <Button>\u6D4B\u8BD5\u8FDE\u63A5</Button>;\n                        },"next","cancel"],\n                        "validate":()=>{\n                            let selected = Global.getState().dataList.steperDemoStep1.selectedRows\n                            let validate = selected&&selected.length>0;\n                            if(!validate){\n                                Modal.warning({\n                                    title: \'\u63D0\u793A\',\n                                    content: \'\u8BF7\u9009\u62E9\u4E00\u4E2A\u6761\u76EE\uFF0C\u7136\u540E\u70B9\u51FB\u201D\u4E0B\u4E00\u6B65\u201C\u3002\',\n                                });\n                            }\n                            return validate;\n                        }\n                    },\n                    {\n                        "type":"aiForm",\n                        "configStepApi":"steperDemoStep2",\n                        "number":"3",\n                        "name":"aiForm\u9875\u9762",\n                        "id":"steperDemoStep2"\n                    },\n                    {\n                        "type":<div style={{paddingLeft:30}}>\u81EA\u5B9A\u4E49\u5185\u5BB9\uFF0C\u53EF\u4EE5\u653E\u4EFB\u4F55\u4E1C\u897F\uFF01\uFF01</div>,\n                        "configStepApi":"steperDemoStep3",\n                        "number":"2",\n                        "name":"\u81EA\u5B9A\u4E49\u9875\u9762",\n                        "id":"steperDemoStep3",\n                        "validate":()=>{\n                            let apiConfig = {...saveSuccess,body:{...saveSuccess.body,data:"anyThing"}}\n                            return apiConfig;\n                        }\n                    }\n                    \n\n\n                ]\n            }\n        }\n    );\n})';

	    _global.Global.mark({
	      framework: {
	        lastStepper: values
	      },
	      pageLoader: {
	        inst: {
	          source: source
	        }
	      }
	    }, 'addPage_submit');
	  };

	  AddStepperPage.prototype.componentWillUnmount = function componentWillUnmount() {
	    _global.Global.mark({
	      pageLoader: {
	        inst: {
	          source: ""
	        }
	      }
	    }, 'addPage_clear');
	  };

	  AddStepperPage.prototype.render = function render() {
	    var state = this.props.state;
	    if (!state) return _react2["default"].createElement(
	      'div',
	      null,
	      '...'
	    );
	    var config = state.config;

	    var creator = {
	      "success": true,
	      "data": [{
	        "title": "分步页面生成器",
	        "column": 1,
	        "labelCol": 1,
	        "wrapperCol": 23,
	        "showTitle": true,
	        "buttonConfigs": {
	          "buttons": [{ "type": "button", "value": "返回", "field": "back", props: { style: { "float": "right" } } }, { "type": "button", "value": "确定", "field": "submit", props: { style: { "float": "right" }, btnType: "primary", htmlType: "submit" } }]
	        },
	        "data": [{ "type": "input", "name": "页面名称", "field": "pageName", "defaultValue": "steperConfigDemo", "validate": [{ "required": true, "message": 'Please input !' }] }, { "type": _react2["default"].createElement(
	            _reactRouter.Link,
	            { to: '/page/stepperDoc', target: '_blank' },
	            '\u67E5\u770BApi'
	          ), "name": "Api", "field": "api" }]
	      }]
	    };

	    var source = this.props.state.source;
	    return _react2["default"].createElement(
	      'div',
	      { className: 'p' },
	      _react2["default"].createElement(
	        'div',
	        { className: 'p' },
	        _react2["default"].createElement(_AiForm2["default"], { id: 'aiFormCreator', onSubmit: this.onClickCreator, fluid: true, config: creator })
	      ),
	      _react2["default"].createElement('textarea', { value: source, style: { width: '100%', height: 400 } })
	    );
	  };

	  return AddStepperPage;
	}(_react.Component);

	AddStepperPage = (0, _component2["default"])('pageLoader')(AddStepperPage);

	(0, _jsonp2["default"])("addStepperPage")(function (arg, callback) {
	  callback({
	    "success": true,
	    "data": _react2["default"].createElement(AddStepperPage, { id: 'inst' })
	  });
	});

/***/ }
]);