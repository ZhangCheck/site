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

	var _jsonp = __webpack_require__(268);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(12);

	var _AiForm = __webpack_require__(30);

	var _AiForm2 = _interopRequireDefault(_AiForm);

	var _component = __webpack_require__(14);

	var _component2 = _interopRequireDefault(_component);

	var _reactRouter = __webpack_require__(88);

	var _AiFormTable = __webpack_require__(438);

	var _AiFormTable2 = _interopRequireDefault(_AiFormTable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var AddAiFormItem = function (_Component) {
	  (0, _inherits3["default"])(AddAiFormItem, _Component);

	  function AddAiFormItem(props) {
	    (0, _classCallCheck3["default"])(this, AddAiFormItem);

	    var _this = (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));

	    _this.onClickCreator = _this.onClickCreator.bind(_this);
	    _global.Global.mark({
	      pageLoader: {
	        inst: {
	          source: ""
	        }

	      }
	    }, 'addAiFormItem_init');
	    return _this;
	  }

	  AddAiFormItem.prototype.onClickCreator = function onClickCreator(values) {
	    //let className = values.pageName.charAt(0).toUpperCase()+values.pageName.substr(1);
	    var formItemSrc = "";
	    var props = values.props && values.props != "" ? '"props":' + values.props + ',' : '';
	    if (values.preRender && values.preRender != '') {
	      props += '"preRender":' + values.preRender + ',';
	    }
	    if (values.column && values.column != '') {
	      props += '"column":' + values.column + ',';
	    }
	    if (values.labelCol && values.labelCol != '') {
	      props += '"labelCol":' + values.labelCol + ',';
	    }
	    if (values.wrapperCol && values.wrapperCol != '') {
	      props += '"wrapperCol":' + values.wrapperCol + ',';
	    }

	    switch (values.type) {
	      case 'upload':
	        formItemSrc = '{\n  "name": "' + values.name + '", "type": "upload", "field": "' + values.field + '", props: {\n    listType: "picture-card",\n    action: Global.server.split(\'api\')[0] + \'api/fileUpload/uploadFile\'\n  }\n},';
	        break;
	      case 'text':
	        formItemSrc = '{"name":"' + values.name + '","type":"text","field":"' + values.field + '",' + props + '"defaultValue":"' + (values.defaultValue || 'static text') + '"},';
	        break;
	      case 'button':
	        formItemSrc = '{"name":"' + values.name + '","type":"button","field":"' + values.field + '",' + props + '"defaultValue":"' + values.defaultValue + '"},';
	        break;
	      case 'select_options':
	        formItemSrc = '{"name":"' + values.name + '","type":"select","field":"' + values.field + '","defaultValue":"' + values.defaultValue + '","options":' + values.options + ',' + props + '"validate":' + values.validate + ',"placeholder":"\u8BF7\u9009\u62E9..."},';
	        break;
	      case 'select_字典':
	        formItemSrc = '{"name":"' + values.name + '","type":"select","field":"' + values.field + '","dictId":"' + values.dictId + '","defaultValue":"' + values.defaultValue + '","value":"' + values.value + '",' + props + '"validate":' + values.validate + ',"placeholder":"\u8BF7\u9009\u62E9..."},';
	        break;
	      case 'select_字典接口':
	        formItemSrc = '{"name":"' + values.name + '","type":"select","field":"' + values.field + '","dictId":"' + values.dictId + '","dictApi":' + values.dictApi + ',' + props + '"validate":' + values.validate + ',"placeholder":"\u8BF7\u9009\u62E9..."},';
	        break;
	      case 'treeSelect_字典接口':
	        formItemSrc = '{"name": "' + values.name + '","type": "treeSelect","field": "' + values.field + '",dictId: "' + values.dictId + '","dictApi": ' + values.dictApi + ',"defaultValue":"' + values.defaultValue + '",' + props + '"validate":' + values.validate + '},';
	        break;
	      case 'checkbox_options':
	        formItemSrc = '{"name":"' + values.name + '","type":"checkbox","field":"' + values.field + '","options":' + values.options + ',"defaultValue":"' + values.defaultValue + '",' + props + '"validate":' + values.validate + '},';
	        break;
	      case 'checkbox_字典':
	        formItemSrc = '{"name":"' + values.name + '","type":"checkbox","field":"' + values.field + '","dictId":"' + values.dictId + '","defaultValue":"' + values.defaultValue + '",' + props + '"validate":' + values.validate + '},';
	        break;
	      case 'checkbox_字典接口':
	        formItemSrc = '{"name":"' + values.name + '","type":"checkbox","field":"' + values.field + '","dictId":"' + values.dictId + '",dictApi:' + values.dictApi + ',"defaultValue":"' + values.defaultValue + '",' + props + '"validate":' + values.validate + '},';
	        break;
	      case 'switch':
	        formItemSrc = '{"name":"' + values.name + '","type":"switch","field":"' + values.field + '"},';
	        break;
	      case 'radio_options':
	        formItemSrc = '{"name":"' + values.radio + '","type":"radio","field":"' + values.field + '","options":' + values.options + ',"defaultValue":"' + values.defaultValue + '",' + props + '"validate":' + values.validate + '},';
	        break;
	      case 'radio_字典':
	        formItemSrc = '{"name":"' + values.radio + '","type":"radio","field":"' + values.field + '","dictId":"' + values.dictId + '","defaultValue":"' + values.defaultValue + '",' + props + '"validate":' + values.validate + '},';
	        break;
	      case 'radio_字典接口':
	        formItemSrc = '{"name":"' + values.radio + '","type":"radio","field":"' + values.field + '","dictId":"' + values.dictId + '",dictApi:' + values.dictApi + ',"defaultValue":"' + values.defaultValue + '",' + props + '"validate":' + values.validate + '},';
	        break;
	      case 'timePicker':
	        formItemSrc = '{"name":"' + values.name + '","type":"timePicker","field":"' + values.field + '","defaultValue":"' + values.defaultValue + '","help":"\u8BF7\u586B\u5199\u4FE1\u606F",' + props + '"validate":' + values.validate + '},';
	        break;
	      case 'datePicker':
	        formItemSrc = '{"name":"' + values.name + '","type":"datePicker","field":"' + values.field + '","defaultValue":"' + values.defaultValue + '","help":"\u8BF7\u586B\u5199\u4FE1\u606F",' + props + '"validate":' + values.validate + '},';
	        break;
	      case 'rangePicker':
	        formItemSrc = '{"name":"' + values.name + '","type":"rangePicker","field":"' + values.field + '",' + props + '"validate":' + values.validate + '},';
	        break;
	      case 'upload':
	        if (!props.action) {
	          props.action = "Global.server+'fileUpload/uploadFile'";
	        }
	        formItemSrc = '{"name":"' + values.name + '","type":"upload","field":"' + values.field + '",' + props + '"validate":' + values.validate + '},';
	        break;
	      case 'input':
	        formItemSrc = '{"name":"' + values.name + '","type":"input","field":"' + values.field + '",' + props + '"validate":' + values.validate + '},';
	        break;
	      case 'inputNumber':
	        formItemSrc = '{"name":"' + values.name + '","type":"inputNumber","field":"' + values.field + '",' + props + '"validate":' + values.validate + '},';
	        break;
	      case 'slider':
	        formItemSrc = '{"name":"' + values.name + '","type":"slider","field":"' + values.field + '",' + props + '"validate":' + values.validate + '},';
	        break;
	    }

	    _global.Global.mark({
	      pageLoader: {
	        inst: {
	          source: formItemSrc
	        }
	      }
	    }, 'addAiFormItem_submit');
	  };

	  AddAiFormItem.prototype.render = function render() {
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
	        "title": "AiForm表单项生成器",
	        "column": 2,
	        "labelCol": 1,
	        "wrapperCol": 23,
	        "showTitle": true,
	        "buttonConfigs": {
	          "buttons": [{ "type": "button", "value": "返回", "field": "back", props: { style: { "float": "right" } } }, { "type": "button", "value": "确定", "field": "submit", props: { style: { "float": "right" }, btnType: "primary", htmlType: "submit" } }]
	        },
	        "data": [{ "type": "input", "name": "字段", "field": "field", "defaultValue": "fieldName", "validate": [{ "required": true, "message": 'Please input !' }] }, { "type": "input", "name": "名称", "field": "name", "defaultValue": "label", "validate": [{ "required": true, "message": 'Please select !' }] }, { "type": "select", "name": "类型", "field": "type", "column": 1, "labelCol": 8, "wrapperCol": 16, "dictId": "aiFormItemType", "defaultValue": "input",
	          "value": "2", "placeholder": "请选择...", "validate": [{ "required": true, "message": 'Please select !' }] }, { "type": "input", "name": "默认值", "field": "defaultValue", defaultValue: "" }, { "type": "input", "name": "所占列数", "field": "column", defaultValue: "" }, { "type": "input", "name": "键宽", "field": "labelCol", defaultValue: "" }, { "type": "input", "name": "值宽", "field": "wrapperCol", defaultValue: "" }, { "type": "textarea", "name": "校验规则", "field": "validate", defaultValue: "[]" }, { "type": "textarea", "name": "preRender", "field": "preRender", defaultValue: "" }, { "type": "textarea", "name": "props", "field": "props", defaultValue: "" }, { "name": "preRender样例:", column: 2, "field": "preRenderSample", type: _react2["default"].createElement('pre', { dangerouslySetInnerHTML: { __html: '()=&gt;{\n    let type = Global.getState().aiForm.aiFormCreator.form.getFieldValue(&#x27;type&#x27;)\n    return type &amp;&amp; (type.match(/_\u5B57\u5178/)||type==&#x27;treeSelect&#x27;)?&quot;&quot;:&quot;hidden&quot;;\n  }\n' } }) }, { "type": _react2["default"].createElement(
	            _reactRouter.Link,
	            { to: '/page/aiFormDoc', target: '_blank' },
	            '\u67E5\u770BAPI'
	          ), "name": "AiForm API", "field": "api" }]
	      }, {
	        "title": "其它参数",
	        "column": 1,
	        "labelCol": 1,
	        "wrapperCol": 23,
	        "showTitle": false,
	        "buttonConfigs": {},
	        "data": [{ "type": "input", "name": "dictId", "field": "dictId", "defaultValue": "21", "preRender": function preRender() {
	            var type = _global.Global.getState().aiForm.aiFormCreator.form.getFieldValue('type');
	            return type && (type.match(/_字典/) || type == 'treeSelect') ? "" : "hidden";
	          } }, { "type": "input", "name": "value", "field": "value", "defaultValue": "", preRender: function preRender() {
	            var type = _global.Global.getState().aiForm.aiFormCreator.form.getFieldValue('type');
	            return type && type.match(/^select_/) ? "" : "hidden";
	          } }, { "type": "textarea", "name": "dictApi", "field": "dictApi", "defaultValue": '{apiName:"flglData"}', preRender: function preRender() {
	            var type = _global.Global.getState().aiForm.aiFormCreator.form.getFieldValue('type');
	            return type && type.match(/_字典接口$/) ? "" : "hidden";
	          } }, { "type": "textarea", "name": "options", "field": "options", "defaultValue": '[{key:"篮球",value:1},{key:"乒乓球",value:2}]', preRender: function preRender() {
	            var type = _global.Global.getState().aiForm.aiFormCreator.form.getFieldValue('type');
	            return type && type.match(/_options$/) ? "" : "hidden";
	          } }]
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

	  return AddAiFormItem;
	}(_react.Component);

	AddAiFormItem = (0, _component2["default"])('pageLoader')(AddAiFormItem);

	(0, _jsonp2["default"])("addAiFormItem")(function (arg, callback) {
	  callback({
	    "success": true,
	    "data": _react2["default"].createElement(AddAiFormItem, { id: 'inst' })
	  });
	});

/***/ }
]);