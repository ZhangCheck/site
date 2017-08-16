webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(442);

	var _message = __webpack_require__(424);

	var _message2 = _interopRequireDefault(_message);

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

	var AddAiFormPage = function (_Component) {
	  (0, _inherits3["default"])(AddAiFormPage, _Component);

	  function AddAiFormPage(props) {
	    (0, _classCallCheck3["default"])(this, AddAiFormPage);

	    var _this = (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));

	    _this.onClickCreator = _this.onClickCreator.bind(_this);
	    _global.Global.mark({
	      addAiFormPage: {
	        inst: {
	          source: ""
	        }

	      }
	    }, 'addAiForm_init');
	    return _this;
	  }

	  AddAiFormPage.prototype.onClickCreator = function onClickCreator(values) {
	    var forX = _global.Global.getHtmlArg('for');
	    var className = values.pageName.charAt(0).toUpperCase() + values.pageName.substr(1);

	    var source = void 0;
	    if (forX == 'stepper') {
	      var lastStepper = _global.Global.getState().framework.lastStepper;
	      var stepperName = void 0;
	      if (!lastStepper) {
	        _message2["default"].warning('不连续操作，视分步页面为"steperConfigDemo"');
	        stepperName = 'steperConfigDemo';
	      } else {
	        stepperName = lastStepper.pageName;
	      }
	      source = '//\u751F\u6210\u65E5\u671F\uFF1A' + new Date() + '\n//\u8BF7\u624B\u52A8\u521B\u5EFA\u9875\u9762\u6587\u4EF6 "src/pageArgs/' + values.pageName + '.js"\uFF0C\u5E76\u586B\u5145\u5F53\u524D\u5185\u5BB9\n//\u8BF7\u786E\u4FDD\u5206\u6B65\u9875\u9762(src/pageArgs/' + stepperName + '.js)\u4E2D\uFF0C\u914D\u7F6E\u4E86\'type\'\u4E3A\'aiForm\',\'configStepApi\'\u4E3A\'' + values.pageName + '\'\u7684\u9875\u9762\u9879\n//\u521B\u5EFA\u6587\u4EF6\u540E\uFF0C\u6D4F\u89C8\u8DEF\u7531\u5730\u5740\u201C#/steperV1/' + stepperName + '/1",\u53EF\u67E5\u770B\u5230\u9875\u9762\u5B9E\u9645\u6548\u679C\nimport React from \'react\';\nimport {Button,Form,Input,Icon,DatePicker,InputNumber,Modal} from \'antFB\';\nimport callback from \'../core/jsonp\';\nimport {Global} from \'../core/global\';\nimport history from \'../core/history\';\nimport StepContainerV1 from \'../containers/StepContainerV1\';\n\nconst FormItem = Form.Item;\n\ncallback("steperDemoStep2")((args,callback)=>{\n    let target = args.target;\n    let getFieldDecorator = target.props.form.getFieldDecorator;\n    let state =  Global.getState();\n    \n    //\u5404\u79CD\u63D0\u793A\uFF0C\u5982\u201D\u5E94\u8BE5\u4ECE\u524D\u4E00\u6B65\u5F00\u59CB\u7684\u63D0\u793A\u201C\n    /*let lastStepState = state.dataList.steperDemoStep1;\n    if(!lastStepState){\n        StepContainerV1.gotoFirst(\'' + stepperName + '\');\n        return;\n    }*/\n    \n    callback({\n        "success": true,\n        "data":[\n                {\n                    "title":"\u6211\u662F\u680F\u76EE\u4E00",\n                    "column":' + values.columnNumber + ', \n                    "labelCol":' + values.labelWidth + ',\n                    "wrapperCol":' + values.valueWidth + ',\n                    "showTitle":' + (values.showTitle || true) + ',\n                    "buttonConfigs":{\n                      "buttons":[\n                        \n                      ]\n                    },\n                    "data":[\n                      {"name":"\u670D\u52A1\u7C7B\u578B","type":"select","column":1,"labelCol":8,"wrapperCol":16,"field":"serviceType","dictId":"serviceType","defaultValue":"1",value:"2","placeholder":"\u8BF7\u9009\u62E9..."},\n                      \n                     ]\n                }\n            ]\n    })\n})';
	    } else {
	      source = '//\u751F\u6210\u65E5\u671F\uFF1A' + new Date() + '\n//\u8BF7\u624B\u52A8\u521B\u5EFA\u9875\u9762\u6587\u4EF6 "src/pageArgs/' + values.pageName + '.js"\uFF0C\u5E76\u586B\u5145\u5F53\u524D\u5185\u5BB9\n//\u521B\u5EFA\u6587\u4EF6\u540E\uFF0C\u6D4F\u89C8\u8DEF\u7531\u5730\u5740\u201C#/page/' + values.pageName + '",\u53EF\u67E5\u770B\u5230\u9875\u9762\u5B9E\u9645\u6548\u679C\nimport React,{Component} from \'react\';\nimport {Table,Button,Form,Input,Icon,DatePicker,InputNumber} from \'antFB\';\nimport callback from \'../core/jsonp\';\nimport {Global} from \'../core/global\';\nimport AiForm from \'../components/AiForm\';\nimport connect from \'../core/component\';\nimport { Link } from \'react-router\';\n\nclass ' + className + ' extends Component{\n\tconstructor(props){\n\t\tsuper(props);\n\t\tGlobal.mark({\n\t\t\t' + values.connect + ':{\n\t\t\t\t[props.id||\'undefined\']:{\n\n\t\t\t\t}\n\t\t\t}\n\t\t},\'' + className + '_init\');\n\t}\n\t\n\trender(){\n\t\tlet state = this.props.state;\n\t\tif(!state) return <div>...</div>\n\t\tlet config = {\n\t\t\t"success": true,\n\t\t\t"data":[{\n\t\t\t\t\t\t"title":"\u6211\u662F\u680F\u76EE\u4E00",\n\t\t\t\t\t\t"column":' + values.columnNumber + ', \n\t\t\t\t\t\t"labelCol":' + values.labelWidth + ',\n\t\t\t\t\t\t"wrapperCol":' + values.valueWidth + ',\n\t\t\t\t\t\t"showTitle":' + (values.showTitle || true) + ',\n\t\t\t\t\t\t"buttonConfigs":{\n\t\t\t\t\t\t\t"buttons":[\n\t\t\t\t\t\t\t\t{"type":"button","value":"\u8FD4\u56DE","field":"back",props:{style:{float:"right"}}},\n\t\t\t\t\t\t\t\t{"type":"button","value":"\u786E\u5B9A","field":"submit",props:{style:{float:"right"},btnType:"primary",htmlType:"submit"}},\n\t\t\t\t\t\t\t]\n\t\t\t\t\t\t},\n\t\t\t\t\t\t"data":[\n\t\t\t\t\t\t\t{"name":"\u670D\u52A1\u7C7B\u578B","type":"select","column":1,"labelCol":8,"wrapperCol":16,"field":"serviceType","dictId":"serviceType","defaultValue":"1",value:"2","placeholder":"\u8BF7\u9009\u62E9..."},\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t ]\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t}\n\n\t\treturn <div style={{width:\'100%\',height:\'100%\'}}>\n\t\t\t\t\t\t <AiForm fluid={' + (values.fluid ? 'true' : 'false') + '} config={config}/>\n\t\t\t\t\t </div>\n\t}\n}\n' + className + ' = connect("' + values.connect + '")(' + className + ')\n\ncallback("' + values.pageName + '")((arg,callback)=>{\n    callback({\n        "success": true,\n        "data":<' + className + ' id="' + values.instanceName + '"/>\n    })\n})';
	    }
	    _global.Global.mark({
	      addAiFormPage: {
	        inst: {
	          source: source
	        }
	      }
	    }, 'addAiFormPage_submit');
	  };

	  AddAiFormPage.prototype.render = function render() {
	    var state = this.props.state;
	    if (!state) return _react2["default"].createElement(
	      'div',
	      null,
	      '...'
	    );
	    var config = state.config;
	    var forX = _global.Global.getHtmlArg('for');

	    var creator = {
	      "success": true,
	      "data": [{
	        "title": "AiForm页面生成器",
	        "column": 2,
	        "labelCol": 1,
	        "wrapperCol": 23,
	        "showTitle": true,
	        "buttonConfigs": {
	          "buttons": [{ "type": "button", "value": "返回", "field": "back", props: { style: { "float": "right" } } }, { "type": "button", "value": "确定", "field": "submit", props: { style: { "float": "right" }, btnType: "primary", htmlType: "submit" } }]
	        },
	        "data": [{ "type": "input", "name": "页面名称", "field": "pageName", "defaultValue": forX == 'stepper' ? "steperDemoStep2" : "pageName", "validate": [{ "required": true, "message": 'Please input !' }] }, { "type": "input", "name": "关联树", "field": "connect", "defaultValue": "aiForm", "validate": [{ "required": true, "message": 'Please input !' }] }, { "type": "input", "name": "列数", "field": "columnNumber", defaultValue: "3", "validate": [{ "required": true, "message": 'Please input !' }] }, { "type": "input", "name": "字段名宽度", "field": "labelWidth", defaultValue: "8", "validate": [{ "required": true, "message": 'Please input !' }] }, { "type": "input", "name": "字段值宽度", "field": "valueWidth", defaultValue: "16", "validate": [{ "required": true, "message": 'Please input !' }] }, { "type": "input", "name": "aiForm树实例名", "field": "instanceName", defaultValue: "inst1", "validate": [{ "required": true, "message": 'Please input !' }] }, { "type": "switch", "name": "整体响应式", "field": "fluid", defaultValue: "false", "validate": [{ "required": true, "message": 'Please input !' }] }, { "type": _react2["default"].createElement(
	            _reactRouter.Link,
	            { to: '/page/aiFormDoc', target: '_blank' },
	            '\u67E5\u770BAPI'
	          ), "name": "AiForm API", "field": "api" }]
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

	  return AddAiFormPage;
	}(_react.Component);

	AddAiFormPage = (0, _component2["default"])('addAiFormPage')(AddAiFormPage);

	(0, _jsonp2["default"])("addAiFormPage")(function (arg, callback) {
	  callback({
	    "success": true,
	    "data": _react2["default"].createElement(AddAiFormPage, { id: 'inst' })
	  });
	});

/***/ }
]);