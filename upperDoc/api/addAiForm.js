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

	var AddAiForm = function (_Component) {
	  (0, _inherits3["default"])(AddAiForm, _Component);

	  function AddAiForm(props) {
	    (0, _classCallCheck3["default"])(this, AddAiForm);

	    var _this = (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));

	    _this.onClickCreator = _this.onClickCreator.bind(_this);
	    _global.Global.mark({
	      addAiForm: {
	        inst: {
	          config: {
	            "success": true,
	            "data": [{
	              "title": "AiForm",
	              "column": 3,
	              "labelCol": 24,
	              "wrapperCol": 0,
	              "showTitle": true,
	              "buttonConfigs": {
	                "buttons": [{ "type": "button", "value": "返回", "field": "back", props: { style: { "float": "right" } } }, { "type": "button", "value": "确定", "field": "submit", props: { style: { "float": "right" }, btnType: "primary", htmlType: "submit" } }]
	              },
	              "data": [{ "name": "服务类型", "type": "select", "column": 1, "labelCol": 8, "wrapperCol": 16, "field": "serviceType", "dictId": "serviceType", "defaultValue": "1", value: "2", "placeholder": "请选择..." }, { "name": "字典项获取下拉数据", "type": "select", "field": "boxs", "dictId": "21", "validate": [{
	                  "required": true, "message": 'Please input your E-mail!'
	                }], "placeholder": "请选择..." }, { "name": "接口获取下拉数据", "type": "select", "field": "name", "validate": [{
	                  "required": true, "message": 'Please input your E-mail!'
	                }], "dictId": "resName", "dictApi": { apiName: "getResName" }, "placeholder": "请选择..." }, { "name": "无字典项", "type": "select", "field": "sex", "placeholder": "请选择...", "defaultValue": "篮球", "options": ["篮球", "足球", "乒乓球"] }, { "type": "treeSelect", "name": "treeSelect1", "field": "themeType", dictId: "themeType", dictApi: { apiName: 'flglData' }, "defaultValue": "常驻人口", "validate": [{
	                  "required": true, "message": '不能为空!'
	                }] }, { "name": "邮箱", "type": "input", "field": "email", "defaultValue": "tiangb@fable.cn",
	                "validate": [{
	                  "type": 'email', "message": 'The input is not valid E-mail!'
	                }, {
	                  "required": true, "message": 'Please input your E-mail!'
	                }] }, { "name": "checkbox", "type": "checkbox", "field": "sports", "options": ["篮球", "足球", "乒乓球"], "defaultValue": ["篮球", "乒乓球"] }, { "name": "switch", "type": "switch", "field": "switch" }, { "name": "radio", "type": "radio", "field": "radio", "options": ["篮球", "足球", "乒乓球"], "defaultValue": "足球" }, { "name": "radio1", "type": "radio1", "field": "radio1", "options": [{ "value": "baskeball", "key": "篮球王子" }, { "value": "football", "key": "足球" }, { "value": "football", "key": "足球" }], "defaultValue": "football" }, { "name": "TimePicker", "type": "timePicker", "field": "timePicker", "defaultValue": "12:40", "help": "请填写信息" }, { "name": "rangePicker", "type": "rangePicker", "field": "rangePicker" }, { "type": "treeSelect", "name": "主题分类", props: { onSelect: function onSelect() {
	                    alert(123123);
	                  } }, "field": "themeType", dictId: "themeType", dictApi: { apiName: 'flglDataTree', body: { categoryType: 1 } } }, { "type": "treeSelect", "name": "部门分类", "field": "departmentType", dictId: "departmentType", dictApi: { apiName: 'flglDataTree', body: { categoryType: 2 } } }, { "name": "接口文档上传", "type": "upload", "field": "apiDoc1", props: { multiple: true, action: _global.Global.server + 'fileUpload/uploadFile' } }, { "type": "input", "name": "方法", "field": "methods", "validate": [{ "required": true, "message": 'Please input !' }] }, { "name": "请求方法", "type": "select", "field": "requestMode", "dictId": "requestMode", "placeholder": "请选择..." }]
	            }]
	          }
	        }

	      }
	    }, 'addAiForm_init');
	    return _this;
	  }

	  AddAiForm.prototype.onClickCreator = function onClickCreator(values) {};

	  AddAiForm.prototype.render = function render() {
	    var state = this.props.state;
	    if (!state) return _react2["default"].createElement(
	      'div',
	      null,
	      '...'
	    );
	    var config = state.config;
	    var columns = [{
	      "title": "名称",
	      "dataIndex": "name",
	      "key": "name"
	    }, {
	      "title": "类型",
	      "dataIndex": "type",
	      "key": "type",
	      "render": { "type": "select", props: { style: { width: 200 }, onChange: function onChange(value, text, record, index, that) {
	            console.log("是否必选改变了:" + value, text, record, index);
	            //Global.dispatch(updateRow({},"aFTD",index));
	          } }, "options": ["select", "input", "checkbox", "switch", "radio", "datepicker", "timepicker"] }
	    }, {
	      "title": "字段",
	      "dataIndex": "field",
	      "key": "field", //<AiLabel args={{"type":"input","defaultValue":record.name,"width":200,"id":formTableId,"record":record,"index":index,"field":"name"}}/>
	      "render": { "type": "input", props: { style: { width: 200 } } }
	    }, {
	      "title": "默认值",
	      "dataIndex": "defaultValue",
	      "key": "defaultValue", //<AiLabel args={{"type":"input","defaultValue":record.name,"width":200,"id":formTableId,"record":record,"index":index,"field":"telPhone"}}/>
	      "render": { "type": "input", props: { style: { width: 200 } } }

	    }, {
	      "title": "校验",
	      "dataIndex": "validate",
	      "key": "validate",
	      "render": { "type": "select", props: { style: { width: 200 } }, options: ["like", "="] }
	    }, {
	      "title": "操作",
	      "dataIndex": "operation",
	      "key": "operation",
	      "render": [{ "type": "delete", "icon": "close-square", props: { style: { fontSize: 19 } } }, { "type": "add", "icon": "plus-square", props: { style: { fontSize: 19 } } }, { "type": "up", "icon": "arrow-up", props: { style: { fontSize: 19 } } }, { "type": "down", "icon": "arrow-down", props: { style: { fontSize: 19 } } }]
	    }];
	    var creator = {
	      "success": true,
	      "data": [{
	        "title": "生成器参数",
	        "column": 1,
	        "labelCol": 1,
	        "wrapperCol": 23,
	        "showTitle": true,
	        "buttonConfigs": {
	          "buttons": [{ "type": "button", "value": "返回", "field": "back", props: { style: { "float": "right" } } }, { "type": "button", "value": "确定", "field": "submit", props: { style: { "float": "right" }, btnType: "primary", htmlType: "submit" } }]
	        },
	        /*"data":[
	          {"type":"input","name":"列数" ,"field":"columns",defualtValue:"3","validate": [{"required": true, "message": 'Please input !'}]},
	          ]*/
	        "data": _react2["default"].createElement(_AiFormTable2["default"], { config: {
	            "columns": columns, //表格标头数据
	            "dataSource": [], //表格数据
	            "addTemplate": { //表格初始化新增行数据
	              name: "字段名",
	              type: "select",
	              field: "fieldName",
	              defaultValue: "",
	              operation: ""
	            }
	          }, id: 'aFTD', buttons: 'add', form: 'aiFormCreator' })
	      }]
	    };

	    return _react2["default"].createElement(
	      'div',
	      { className: 'p' },
	      _react2["default"].createElement(
	        'h3',
	        null,
	        'AiForm\u7EC4\u4EF6\u751F\u6210\u5668'
	      ),
	      _react2["default"].createElement(
	        'div',
	        { className: 'p' },
	        _react2["default"].createElement(_AiForm2["default"], { id: 'aiFormCreator', onSubmit: this.onClickCreator, fluid: true, config: creator })
	      )
	    );
	  };

	  return AddAiForm;
	}(_react.Component);

	AddAiForm = (0, _component2["default"])('addAiForm')(AddAiForm);

	(0, _jsonp2["default"])("addAiForm")(function (arg, callback) {
	  callback({
	    "success": true,
	    "data": _react2["default"].createElement(AddAiForm, { id: 'inst' })
	  });
	});

/***/ }
]);