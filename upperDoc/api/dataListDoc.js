webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(71);

	var _table = __webpack_require__(68);

	var _table2 = _interopRequireDefault(_table);

	var _defineProperty2 = __webpack_require__(7);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

	var _dataListV = __webpack_require__(1376);

	var _dataListV2 = _interopRequireDefault(_dataListV);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var DataListDoc = function (_Component) {
	  (0, _inherits3["default"])(DataListDoc, _Component);

	  function DataListDoc(props) {
	    (0, _classCallCheck3["default"])(this, DataListDoc);

	    var _this = (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));

	    _global.Global.mark({
	      dataListDoc: (0, _defineProperty3["default"])({}, props.id, {
	        showCode: true
	      })
	    }, 'dataListDoc_init');
	    return _this;
	  }

	  DataListDoc.prototype.onClickCode = function onClickCode() {
	    _global.Global.mark({
	      dataListDoc: (0, _defineProperty3["default"])({}, this.props.id, {
	        showCode: !this.props.state.showCode

	      })
	    });
	  };

	  DataListDoc.prototype.render = function render() {
	    var state = this.props.state;
	    if (!state) return _react2["default"].createElement(
	      'div',
	      null,
	      '...1'
	    );

	    var dataSource = [{
	      key: 'perennity',
	      name: 'perennity',
	      age: 'bool',
	      address: '是否持久化，为true时，重新加载该dataList组件时，清空选中项（重置selectedRows为空数组）'
	    }, {
	      key: 'id',
	      name: 'id',
	      age: 'string',
	      address: '组件实例名标识，用于在树中区别不同的dataList实例'
	    }, {
	      key: 'config',
	      name: 'config',
	      age: 'array',
	      address: 'dataList的配置文件'
	    }, {
	      key: 'config.title',
	      name: 'config.title',
	      age: "string",
	      address: '组件标题(以被config.hadConfig取代)'
	    }, {
	      key: 'config.headConfig',
	      name: 'config.headConfig',
	      age: "array|function",
	      address: '\u5217\u8868\u5934\u914D\u7F6E\uFF08\u5982\u6807\u9898)\n\u4F8B\u5B50:\n...\n\t&quot;headConfig&quot;:[\n        {&quot;headName&quot;:&lt;h4 style={{paddingLeft:20,paddingTop:10,paddingBottom:10}}&gt;\u5217\u8868\u5934&lt;/h4&gt;} //\u8868\u5934\u914D\u7F6E\n    ]'
	    }, {
	      key: 'config.buttonConfigs',
	      name: 'config.buttonConfigs',
	      age: "array|function|dom",
	      address: '\u9876\u90E8\u6309\u94AE\u680F\u914D\u7F6E,\u4E00\u822C\u7528\u4E8E\u6279\u5904\u7406\uFF08\u591A\u884C\u5904\u7406)\nconfig.buttonConfigs\u7C7B\u578B\u4E3Aarray\u65F6\uFF0C\u6570\u636E\u683C\u5F0F\u4E3A\uFF1A\n\t"buttonConfigs":[ \n        "add","edit","detail","delete"\n    ]\n\tconfig.buttonConfigs[x] \u53EF\u9009\u503C\u6709:"add"(\u65B0\u589E),"edit"(\u7F16\u8F91),"delete"(\u5220\u9664),"detail(\u8BE6\u60C5)",function\u6216dom,\n\tconfig.buttonConfigs[x] \u4E3Afunction\u6216dom\u65F6\u4E3A\u81EA\u5B9A\u4E49\u9876\u90E8\u6309\u94AE\n  config.buttonConfigs\u7C7B\u578B\u4E3Afunction\u6216dom\u65F6\u4E3A\u81EA\u5B9A\u4E49\u9876\u90E8\u6309\u94AE\u680F\n  (\u542B\u6709config.buttonConfigs[x].buttonName\u5C5E\u6027\u4E3A\u65E7\u6A21\u5F0F\u5DF2\u4E0D\u5EFA\u8BAE\u4F7F\u7528)\n'
	    }, {
	      key: 'config.searchConfig',
	      name: 'config.searchConfig',
	      age: "object",
	      address: '\u6A21\u7CCA\u67E5\u8BE2\u8868\u5355\u914D\u7F6E\uFF0C\u6A21\u7CCA\u67E5\u8BE2\u662F\u4E00\u4E2AAiForm\u5B9E\u4F8B\n\u6570\u636E\u683C\u5F0F\n\t"searchConfig":{ //\u6A21\u7CCA\u67E5\u8BE2\u8868\u5355\u914D\u7F6E AiForm\n\t    "data":[{\n\t        "column":3,\n\t        "data":[\n\t            {"type":"input","name":"\u7535\u5F71" ,"field":"movie" },\n\t            {"type":"button","value":"\u67E5\u8BE2" ,"pageName":"search",props:{type:"primary"}, "htmlType":"submit"}\n\t        ]\n\t    }]\n\t}\nconfig.searchConfig.data\u662F\u4E00\u4E2AAiForm\u914D\u7F6E\u6587\u4EF6\uFF0C\u5177\u4F53\u53C2\u6570\u8BF7\u67E5\u770B\u7EC4\u4EF6AiForm\u6587\u6863'
	    }, {
	      key: 'config.table',
	      name: 'config.table',
	      age: "object",
	      address: '\u8868\u683C\u914D\u7F6E\u9879\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u8868\u683C\u5B57\u6BB5\uFF0C\u8868\u683C\u6570\u636E\u7B49\n\u5B9E\u4F8B\uFF1A\n"table":{ \n            "primarykey":"number", \n            "clounms":[  //\u8868\u683C\u5217\u914D\u7F6E\uFF0C\u8BE6\u89C1ant.design\n                {\n                    "title":"\u5E8F\u53F7",\n                    "dataIndex": "number",\n                    "key": "number"\n                },\n                {\n                    "title":"\u540D\u79F0",\n                    "dataIndex": "name",\n                    "key": "name"\n                },\n                {\n                    "title":"\u82F1\u6587\u540D\u79F04",\n                    "dataIndex": "englishName",\n                    "key": "englishName"\n                },\n                {\n                    "title":"\u7F16\u7801",\n                    "dataIndex": "unicode",\n                    "key": "unicode"\n                },\n                {\n                    "title":"\u5907\u6CE8",\n                    "dataIndex": "remarks",\n                    "key": "remarks"\n                },\n                {\n                    "title":"\u64CD\u4F5C",\n                    "dataIndex": "operation",\n                    "key": "operation",\n                    "render":["edit","delete","detail"]\n                }\n            ],\n            "body":{apiName:\'datalistBodyDemo\'} \n        }\n\t\t  '
	    }, {
	      key: 'config.table.primarykey',
	      name: 'config.table.primarykey',
	      age: "string",
	      address: '主键，将传递到详情接口'
	    }, {
	      key: 'config.table.showHeader',
	      name: 'config.table.showHeader',
	      age: "bool",
	      address: '是否显示默认列头'
	    }, {
	      key: 'config.table.clounms',
	      name: 'config.table.clounms',
	      age: "array",
	      address: '\u8868\u683C\u5217\u914D\u7F6E\uFF0C\u5217\u914D\u7F6E\u8BE6\u89C1 https://ant.design/components/table-cn/'
	    }, {
	      key: 'config.table.body',
	      name: 'config.table.body',
	      age: "object",
	      address: '表格数据接口配置，接口配置参数详见 https://fablefrontend.github.io/#/page/interfaceApi'
	    }, {
	      key: 'config.add',
	      name: 'config.add',
	      age: "object",
	      address: '"\u65B0\u589E"\u914D\u7F6E\u9879\n\u683C\u5F0F:\n{\n    byDialog:true,\n    initData:{\n        data:{apiName:"datalistEditDemo"} \n    },\n    onAddSubmitApi:{"apiName":"getAddData"}\n}\n\t\t  '
	    }, {
	      key: 'config.add.validate',
	      name: 'config.add.validate',
	      age: "function(callback)",
	      address: '新增页面先行校验'
	    }, {
	      key: 'config.add.byDialog',
	      name: 'config.add.byDialog',
	      age: "bool||object",
	      address: '是否通过对话框形式打开新增页面，默认false'
	    }, {
	      key: 'config.add.byDialog.title',
	      name: 'config.add.byDialog.title',
	      age: "string",
	      address: '新增页面对话框标题名称'
	    }, {
	      key: 'config.add.byDialog.width',
	      name: 'config.add.byDialog.width',
	      age: "string||number",
	      address: '新增页面对话框的宽度，默认"80%"'
	    }, {
	      key: 'config.add.initData.data',
	      name: 'config.add.initData.data',
	      age: "object",
	      address: '新增页面的视图接口(即jsonp子页面),接口参数请参见https://fablefrontend.github.io/#/page/interfaceApi'
	    }, {
	      key: 'config.add.onAddSubmitApi',
	      name: 'config.add.onAddSubmitApi',
	      age: "objject",
	      address: '新增页面的提交接口，新增页面是一个AiForm组件页面，提交的数据即form表单数据，其字段由视图接口配置的jsonp子页面内的aiForm配置项决定'
	    }, {
	      key: 'config.edit.validate',
	      name: 'config.edit.validate',
	      age: "function(callback)",
	      address: '编辑页面先行校验'
	    }, {
	      key: 'config.edit.byDialog',
	      name: 'config.edit.byDialog',
	      age: "bool||object",
	      address: '是否通过对话框形式打开编辑页面，默认false'
	    }, {
	      key: 'config.edit.byDialog.title',
	      name: 'config.edit.byDialog.title',
	      age: "string",
	      address: '编辑页面对话框标题名称'
	    }, {
	      key: 'config.edit.byDialog.width',
	      name: 'config.edit.byDialog.width',
	      age: "string||number",
	      address: '编辑页面对话框的宽度，默认"80%"'
	    }, {
	      key: 'config.edit.initData.data',
	      name: 'config.edit.initData.data',
	      age: "object",
	      address: '编辑页面的视图接口(即jsonp子页面),接口参数请参见https://fablefrontend.github.io/#/page/interfaceApi'
	    }, {
	      key: 'config.edit.onUpdateSubmitApi',
	      name: 'config.edit.onUpdateSubmitApi',
	      age: "object",
	      address: '编辑页面的提交接口，新增页面是一个AiForm组件页面，提交的数据即form表单数据，其字段由视图接口配置的jsonp子页面内的aiForm配置项决定，表单项默认值由config.detail.body配置的详情接口决定。'
	    }, {
	      key: 'config.delete.body',
	      name: 'config.delete.body',
	      age: "object",
	      address: '数据表删除接口，上传值为当前操作的行的主键数组或当前选中的多行的主键数组'
	    }, {
	      key: 'config.detail.validate',
	      name: 'config.detail.validate',
	      age: "function(callback)",
	      address: '详情页面先行校验'
	    }, {
	      key: 'config.detail.byDialog',
	      name: 'config.detail.byDialog',
	      age: "bool||object",
	      address: '是否通过对话框形式打开详情页面，默认false'
	    }, {
	      key: 'config.detail.byDialog.title',
	      name: 'config.detail.byDialog.title',
	      age: "string",
	      address: '详情页面对话框标题名称'
	    }, {
	      key: 'config.detail.byDialog.width',
	      name: 'config.detail.byDialog.width',
	      age: "string||number",
	      address: '详情页面对话框的宽度，默认"80%"'
	    }, {
	      key: 'config.detail.initData.data',
	      name: 'config.detail.initData.data',
	      age: "object",
	      address: '详情页面的视图接口(子页面）(详情页面可以是一个AiForm表单页面或自定义页面)'
	    }, {
	      key: 'config.detail.body',
	      name: 'config.detail.body',
	      age: "object",
	      address: '详情页面的数据接口，除了详情页面调用该接口外，编辑页面也调用这个接口初始化页面。详情数据树节点为 dataList[dataListId].detailMsg'
	    }, {
	      key: 'config.minPageSize',
	      name: 'config.minPageSize',
	      age: 'number',
	      address: '每页最小条目数，不定义该参数或参数值小于1时为自动动态计算条目数'
	    }, {
	      key: 'dataList接口',
	      name: '',
	      age: "",
	      address: '(组件接口调用（通用）："Global.getState().someComponent.someInstance.someApi()")'
	    }, {
	      key: 'setDialog(dialogConfig)',
	      name: 'setDialog(dialogConfig)',
	      age: "参数dialogConfig",
	      address: '用于在dataList中弹出自定义对话框，参数格式：{show:bool,content:stringOrDom}，show为是否显示，content为显示内容'
	    }];

	    var columns = [{
	      title: '参数名',
	      dataIndex: 'name',
	      key: 'name',
	      width: 190,
	      className: 'tbLeft'
	    }, {
	      title: '类型',
	      dataIndex: 'age',
	      key: 'age',
	      className: 'tbLeft',
	      width: 120
	    }, {
	      title: '功能描述',
	      dataIndex: 'address',
	      key: 'address',
	      className: 'tbLeft'
	    }];

	    return _react2["default"].createElement(
	      'div',
	      { className: 'p' },
	      _react2["default"].createElement(
	        'h3',
	        null,
	        'DataList\u7EC4\u4EF6'
	      ),
	      _react2["default"].createElement(
	        'div',
	        { className: 'p' },
	        _react2["default"].createElement(
	          'div',
	          null,
	          'DataList\u7EC4\u4EF6\u7528\u4EE5\u5C55\u793A\u6570\u636E\u5217\u8868\uFF0C\u542B\u6709\u589E\u5220\u6539\u67E5\u529F\u80FD,DataList\u7EC4\u4EF6\u662F\u4E2D\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u4E2D\u4F7F\u7528\u6700\u591A\u7684\u7EC4\u4EF6\u3002DataListV1\u8DEF\u7531\uFF0C\u662FdataList\u7684\u4E3B\u8981\u4F7F\u7528\u5F62\u5F0F\uFF0C\u5982DataListV1/someDataList/list/11/10\u5C31\u662F\u6253\u5F00\u63A5\u53E3\u540D\u4E3A"someDataList"\u7684dataList\u9875\u9762\u3002'
	        ),
	        _react2["default"].createElement(
	          'div',
	          null,
	          _react2["default"].createElement(
	            _reactRouter.Link,
	            { to: '/datalistV1/datalistDemo/list/11/10' },
	            ' \u8DEF\u7531\u5B9E\u4F8B '
	          ),
	          ' ',
	          _react2["default"].createElement('br', null),
	          _react2["default"].createElement(
	            'a',
	            { href: 'javascript:void(0)', onClick: this.onClickCode.bind(this) },
	            ' \u8DEF\u7531\u5B9E\u4F8B\u6E90\u7801 '
	          )
	        ),
	        state.showCode && _react2["default"].createElement('pre', { dangerouslySetInnerHTML: {
	            __html: '//pageArgs/dataListDemo.js\nimport React, { Component, PropTypes } from &#x27;react&#x27;;\nimport connect from &#x27;../core/component&#x27;;\nimport callback from &#x27;../core/jsonp&#x27;;\nimport {Button} from &#x27;antFB&#x27;;\n\ncallback(&quot;datalistDemo&quot;)((args,callback)=&gt;{\n    callback({\n    &quot;success&quot;: true,\n    &quot;data&quot;: {\n        &quot;title&quot;:&quot;\u8FD9\u662FDataList\u7EC4\u4EF6\u9875\u9762\uFF01\uFF01\uFF01\uFF01\uFF01&quot;,\n        &quot;headConfig&quot;:[\n            {&quot;headName&quot;:&lt;h4 style={{paddingLeft:20,paddingTop:10,paddingBottom:10}}&gt;\u5217\u8868\u5934&lt;/h4&gt;} //\u8868\u5934\u914D\u7F6E\n        ],\n        &quot;buttonConfigs&quot;:[ //\u9876\u90E8\u6309\u94AE\u914D\u7F6E\n            {&quot;buttonName&quot;:&quot;add&quot;},\n            {&quot;buttonName&quot;:&quot;delete&quot;}\n        ], \n        \n        &quot;searchConfig&quot;:{ //\u6A21\u7CCA\u67E5\u8BE2\u8868\u5355\u914D\u7F6E AiForm\n            &quot;data&quot;:[{\n                &quot;column&quot;:3,\n                &quot;data&quot;:[\n                    {&quot;type&quot;:&quot;input&quot;,&quot;name&quot;:&quot;\u7535\u5F71&quot; ,&quot;field&quot;:&quot;movie&quot; },\n                    {&quot;type&quot;:&quot;button&quot;,&quot;value&quot;:&quot;\u67E5\u8BE2&quot; ,&quot;pageName&quot;:&quot;search&quot;,props:{type:&quot;primary&quot;}, &quot;htmlType&quot;:&quot;submit&quot;}\n                ]\n            }]\n        },\n        &quot;table&quot;:{ //\u8868\u683C\u914D\u7F6E\n            &quot;primarykey&quot;:&quot;number&quot;, //\u4E3B\u952E\uFF0C(\u5C06\u4F20\u9012\u5230\u8BE6\u60C5\u63A5\u53E3)\n            &quot;clounms&quot;:[  //\u8868\u683C\u5217\u914D\u7F6E\uFF0C\u8BE6\u89C1ant.design\n                {\n                    &quot;title&quot;:&quot;\u5E8F\u53F7&quot;,\n                    &quot;dataIndex&quot;: &quot;number&quot;,\n                    &quot;key&quot;: &quot;number&quot;\n                },\n                {\n                    &quot;title&quot;:&quot;\u540D\u79F0&quot;,\n                    &quot;dataIndex&quot;: &quot;name&quot;,\n                    &quot;key&quot;: &quot;name&quot;\n                },\n                {\n                    &quot;title&quot;:&quot;\u82F1\u6587\u540D\u79F04&quot;,\n                    &quot;dataIndex&quot;: &quot;englishName&quot;,\n                    &quot;key&quot;: &quot;englishName&quot;\n                },\n                {\n                    &quot;title&quot;:&quot;\u7F16\u7801&quot;,\n                    &quot;dataIndex&quot;: &quot;unicode&quot;,\n                    &quot;key&quot;: &quot;unicode&quot;\n                },\n                {\n                    &quot;title&quot;:&quot;\u5907\u6CE8&quot;,\n                    &quot;dataIndex&quot;: &quot;remarks&quot;,\n                    &quot;key&quot;: &quot;remarks&quot;\n                },\n                {\n                    &quot;title&quot;:&quot;\u64CD\u4F5C&quot;,\n                    &quot;dataIndex&quot;: &quot;operation&quot;,\n                    &quot;key&quot;: &quot;operation&quot;,\n                    &quot;render&quot;:[&quot;edit&quot;,&quot;delete&quot;,&quot;detail&quot;]\n                }\n            ],\n            &quot;body&quot;:{apiName:&#x27;datalistBodyDemo&#x27;} //\u8868\u6570\u636E\u63A5\u53E3\u914D\u7F6E\n        },\n        &quot;add&quot;:{\n            initData:{\n                data:{apiName:&quot;datalistEditDemo&quot;} //\u65B0\u589E-\u89C6\u56FE\u63A5\u53E3\n            },\n            &quot;onAddSubmitApi&quot;:{&quot;apiName&quot;:&quot;getAddData&quot;}//\u65B0\u589E-\u63D0\u4EA4\u63A5\u53E3\n        },\n        &quot;edit&quot;:{\n            &quot;initData&quot;:{\n              data:{apiName:&quot;datalistEditDemo&quot;} //\u7F16\u8F91\u89C6\u56FE\u63A5\u53E3 Datalist\u5728\u7F16\u8F91\u9875\u9762\uFF0C\u5148\u8C03\u7528\u201C\u8BE6\u60C5\u6570\u636E\u63A5\u53E3\u201D\u8BFB\u53D6\u6570\u636E\uFF0C\u518D\u8C03\u7528\u672C\u884C\u89C6\u56FE\u63A5\u53E3\n            },\n            &quot;onUpdateSubmitApi&quot;:{&quot;apiName&quot;:&quot;saveApi&quot;} //\u7F16\u8F91-\u63D0\u4EA4\u63A5\u53E3\n        },\n        &quot;delete&quot;:{\n            &quot;body&quot;:{apiName:&#x27;getDeleteData&#x27;} //\u5220\u9664\u884C\u63A5\u53E3\n        },\n        &quot;detail&quot;:{\n            &quot;initData&quot;:{\n              data:{apiName:&quot;datalistDetailDemo&quot;} //\u8BE6\u60C5\u89C6\u56FE\u63A5\u53E3 \u6309primarykey\u8BFB\u53D6\u8BE6\u60C5\u4FE1\u606F\n            },\n            &quot;body&quot;:{apiName:&#x27;datalistDetailMsgDemo&#x27;} //\u8BE6\u60C5\u6570\u636E\u63A5\u53E3        \n\t\t},\n        &quot;check&quot;:{\n            &quot;view&quot;:null,\n            &quot;checkApi&quot;:null\n        }\n    }\n})})\n'
	          } })
	      ),
	      _react2["default"].createElement(
	        'h3',
	        null,
	        'DataList\u7EC4\u4EF6\u53C2\u6570'
	      ),
	      _react2["default"].createElement(
	        'div',
	        { className: 'p' },
	        _react2["default"].createElement(_table2["default"], { pagination: false, columns: columns, dataSource: dataSource })
	      )
	    );
	  };

	  return DataListDoc;
	}(_react.Component);

	DataListDoc = (0, _component2["default"])('dataListDoc', null, function (state) {})(DataListDoc);

	(0, _jsonp2["default"])("dataListDoc")(function (arg, callback) {
	  callback({
	    "success": true,
	    "data": _react2["default"].createElement(DataListDoc, { id: 'dataListDoc_inst' })
	  });
	});

/***/ },

/***/ 255:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1028);

/***/ },

/***/ 885:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.dlStateWarning = exports.selectedToFormArgs = undefined;

	var _css = __webpack_require__(31);

	var _modal = __webpack_require__(30);

	var _modal2 = _interopRequireDefault(_modal);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _global = __webpack_require__(12);

	var _config = __webpack_require__(268);

	var _history = __webpack_require__(36);

	var _history2 = _interopRequireDefault(_history);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports["default"] = function (tabs, args) {
	    /*item.show 用于其他tab的展示标志位，eg部门分类和主题分类*/
	    return tabs.map(function (item, i) {
	        if (_config.resourceType.indexOf(item.name) != -1 || item.show == "1") {
	            return _react2["default"].createElement(
	                'div',
	                { className: "configLeftBtnGp" },
	                _react2["default"].createElement(
	                    'a',
	                    { href: "#/datalistV1/" + item.urlPart + "/list/0/10", className: args.target.props.params.config == item.urlPart ? "configLeftBtnGpA" : "" },
	                    _react2["default"].createElement(
	                        'span',
	                        null,
	                        item.name
	                    )
	                )
	            );
	        }
	    });
	};

	var selectedToFormArgs = exports.selectedToFormArgs = function selectedToFormArgs(datalistId) {
	    return {};
	};

	var dlStateWarning = exports.dlStateWarning = function dlStateWarning(key) {
	    _modal2["default"].warning({
	        title: "提示1",
	        content: "页面刷新，请重新选择要查看的条目。",
	        onOk: function onOk() {
	            setTimeout(function () {
	                var config = _global.Global.getState().routing.path.match(new RegExp('datalistV1/(\\w*)/' + key));
	                _history2["default"].push("datalistV1/" + config[1] + "/list/0/10");
	            }, 500);
	        }
	    });
	};

/***/ },

/***/ 1011:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _css = __webpack_require__(31);

	var _modal = __webpack_require__(30);

	var _modal2 = _interopRequireDefault(_modal);

	var _defineProperty2 = __webpack_require__(7);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(6);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(5);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsCssTransitionGroup = __webpack_require__(255);

	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

	var _redux = __webpack_require__(48);

	var _component = __webpack_require__(11);

	var _component2 = _interopRequireDefault(_component);

	var _Aiform = __webpack_require__(1323);

	var _Aiform2 = _interopRequireDefault(_Aiform);

	var _dataList2 = __webpack_require__(28);

	var _Loading = __webpack_require__(127);

	var _Loading2 = _interopRequireDefault(_Loading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var DataListCon = function (_Component) {
	    (0, _inherits3["default"])(DataListCon, _Component);

	    function DataListCon(props) {
	        (0, _classCallCheck3["default"])(this, DataListCon);

	        //init
	        var _this = (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));

	        Global.mark({
	            dataList: (0, _defineProperty3["default"])({}, _this.props.params.config, {
	                getDataListApi: {
	                    data: {}
	                }
	            })
	        }, 'datalistCon_init');
	        _this.props.actions.requestDataList({ apiName: _this.props.params.config, jsonpArgs: { target: _this } }, _this.props.params.config);
	        return _this;
	    }

	    DataListCon.prototype.componentDidMount = function componentDidMount() {}
	    //this.props.actions.requestLogin();


	    //把路由器当组件使用
	    ;

	    DataListCon.prototype.render = function render() {
	        if (!this.props.state) return _react2["default"].createElement(
	            'div',
	            null,
	            '...'
	        );
	        var dialog = this.props.state.dialog || {};
	        return _react2["default"].createElement(
	            _Loading2["default"],
	            { style: { height: "100%", background: "#fff" }, api: this.props.state.getDataListApi },
	            this.props.children,
	            dialog.show && _react2["default"].createElement(
	                _modal2["default"],
	                { title: dialog.title, maskClosable: true, visible: dialog.show,
	                    onOk: dialog.onOk, onCancel: dialog.onCancel
	                },
	                dialog.content
	            )
	        );
	    };

	    return DataListCon;
	}(_react.Component);

	exports["default"] = (0, _component2["default"])('dataList', { requestDataList: _dataList2.requestDataList }, function (state, actions, props) {
	    return { state: state.dataList[props.params.config] };
	})(DataListCon);
	module.exports = exports['default'];

/***/ },

/***/ 1012:
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

	var _DataListV = __webpack_require__(180);

	var _DataListV2 = _interopRequireDefault(_DataListV);

	var _dataList = __webpack_require__(28);

	var _component = __webpack_require__(11);

	var _component2 = _interopRequireDefault(_component);

	var _global = __webpack_require__(12);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var List = function (_Component) {
	    (0, _inherits3["default"])(List, _Component);

	    function List() {
	        (0, _classCallCheck3["default"])(this, List);
	        return (0, _possibleConstructorReturn3["default"])(this, _Component.apply(this, arguments));
	    }

	    List.prototype.componentDidMount = function componentDidMount() {
	        // Global.dispatch(clearData("dataList","dlDemo"));
	        // this.props.actions.clear("dlDemo");
	    };

	    List.prototype.render = function render() {
	        return _react2["default"].createElement(
	            'div',
	            { style: { height: "100%" } },
	            _react2["default"].createElement(_DataListV2["default"], { id: this.props.params.config })
	        );
	    };

	    return List;
	}(_react.Component);
	// import {clearData} from '../../actions/framework';
	//import styles from '../Contact.less';


	exports["default"] = (0, _component2["default"])('dataList', { clear: _dataList.clear }, function (state, actions, props) {
	    return { state: state.dataList[props.params.config] };
	})(List);
	module.exports = exports['default'];

/***/ },

/***/ 1028:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 * @providesModule ReactCSSTransitionGroup
	 */

	'use strict';

	var React = __webpack_require__(256);

	var assign = __webpack_require__(14);

	var ReactTransitionGroup = __webpack_require__(1032);
	var ReactCSSTransitionGroupChild = __webpack_require__(1029);

	function createTransitionTimeoutPropValidator(transitionType) {
	  var timeoutPropName = 'transition' + transitionType + 'Timeout';
	  var enabledPropName = 'transition' + transitionType;

	  return function (props) {
	    // If the transition is enabled
	    if (props[enabledPropName]) {
	      // If no timeout duration is provided
	      if (props[timeoutPropName] == null) {
	        return new Error(timeoutPropName + ' wasn\'t supplied to ReactCSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.');

	        // If the duration isn't a number
	      } else if (typeof props[timeoutPropName] !== 'number') {
	          return new Error(timeoutPropName + ' must be a number (in milliseconds)');
	        }
	    }
	  };
	}

	var ReactCSSTransitionGroup = React.createClass({
	  displayName: 'ReactCSSTransitionGroup',

	  propTypes: {
	    transitionName: ReactCSSTransitionGroupChild.propTypes.name,

	    transitionAppear: React.PropTypes.bool,
	    transitionEnter: React.PropTypes.bool,
	    transitionLeave: React.PropTypes.bool,
	    transitionAppearTimeout: createTransitionTimeoutPropValidator('Appear'),
	    transitionEnterTimeout: createTransitionTimeoutPropValidator('Enter'),
	    transitionLeaveTimeout: createTransitionTimeoutPropValidator('Leave')
	  },

	  getDefaultProps: function () {
	    return {
	      transitionAppear: false,
	      transitionEnter: true,
	      transitionLeave: true
	    };
	  },

	  _wrapChild: function (child) {
	    // We need to provide this childFactory so that
	    // ReactCSSTransitionGroupChild can receive updates to name, enter, and
	    // leave while it is leaving.
	    return React.createElement(ReactCSSTransitionGroupChild, {
	      name: this.props.transitionName,
	      appear: this.props.transitionAppear,
	      enter: this.props.transitionEnter,
	      leave: this.props.transitionLeave,
	      appearTimeout: this.props.transitionAppearTimeout,
	      enterTimeout: this.props.transitionEnterTimeout,
	      leaveTimeout: this.props.transitionLeaveTimeout
	    }, child);
	  },

	  render: function () {
	    return React.createElement(ReactTransitionGroup, assign({}, this.props, { childFactory: this._wrapChild }));
	  }
	});

	module.exports = ReactCSSTransitionGroup;

/***/ },

/***/ 1029:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 * @providesModule ReactCSSTransitionGroupChild
	 */

	'use strict';

	var React = __webpack_require__(256);
	var ReactDOM = __webpack_require__(257);

	var CSSCore = __webpack_require__(1034);
	var ReactTransitionEvents = __webpack_require__(1031);

	var onlyChild = __webpack_require__(420);

	// We don't remove the element from the DOM until we receive an animationend or
	// transitionend event. If the user screws up and forgets to add an animation
	// their node will be stuck in the DOM forever, so we detect if an animation
	// does not start and if it doesn't, we just call the end listener immediately.
	var TICK = 17;

	var ReactCSSTransitionGroupChild = React.createClass({
	  displayName: 'ReactCSSTransitionGroupChild',

	  propTypes: {
	    name: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.shape({
	      enter: React.PropTypes.string,
	      leave: React.PropTypes.string,
	      active: React.PropTypes.string
	    }), React.PropTypes.shape({
	      enter: React.PropTypes.string,
	      enterActive: React.PropTypes.string,
	      leave: React.PropTypes.string,
	      leaveActive: React.PropTypes.string,
	      appear: React.PropTypes.string,
	      appearActive: React.PropTypes.string
	    })]).isRequired,

	    // Once we require timeouts to be specified, we can remove the
	    // boolean flags (appear etc.) and just accept a number
	    // or a bool for the timeout flags (appearTimeout etc.)
	    appear: React.PropTypes.bool,
	    enter: React.PropTypes.bool,
	    leave: React.PropTypes.bool,
	    appearTimeout: React.PropTypes.number,
	    enterTimeout: React.PropTypes.number,
	    leaveTimeout: React.PropTypes.number
	  },

	  transition: function (animationType, finishCallback, userSpecifiedDelay) {
	    var node = ReactDOM.findDOMNode(this);

	    if (!node) {
	      if (finishCallback) {
	        finishCallback();
	      }
	      return;
	    }

	    var className = this.props.name[animationType] || this.props.name + '-' + animationType;
	    var activeClassName = this.props.name[animationType + 'Active'] || className + '-active';
	    var timeout = null;

	    var endListener = function (e) {
	      if (e && e.target !== node) {
	        return;
	      }

	      clearTimeout(timeout);

	      CSSCore.removeClass(node, className);
	      CSSCore.removeClass(node, activeClassName);

	      ReactTransitionEvents.removeEndEventListener(node, endListener);

	      // Usually this optional callback is used for informing an owner of
	      // a leave animation and telling it to remove the child.
	      if (finishCallback) {
	        finishCallback();
	      }
	    };

	    CSSCore.addClass(node, className);

	    // Need to do this to actually trigger a transition.
	    this.queueClass(activeClassName);

	    // If the user specified a timeout delay.
	    if (userSpecifiedDelay) {
	      // Clean-up the animation after the specified delay
	      timeout = setTimeout(endListener, userSpecifiedDelay);
	      this.transitionTimeouts.push(timeout);
	    } else {
	      // DEPRECATED: this listener will be removed in a future version of react
	      ReactTransitionEvents.addEndEventListener(node, endListener);
	    }
	  },

	  queueClass: function (className) {
	    this.classNameQueue.push(className);

	    if (!this.timeout) {
	      this.timeout = setTimeout(this.flushClassNameQueue, TICK);
	    }
	  },

	  flushClassNameQueue: function () {
	    if (this.isMounted()) {
	      this.classNameQueue.forEach(CSSCore.addClass.bind(CSSCore, ReactDOM.findDOMNode(this)));
	    }
	    this.classNameQueue.length = 0;
	    this.timeout = null;
	  },

	  componentWillMount: function () {
	    this.classNameQueue = [];
	    this.transitionTimeouts = [];
	  },

	  componentWillUnmount: function () {
	    if (this.timeout) {
	      clearTimeout(this.timeout);
	    }
	    this.transitionTimeouts.forEach(function (timeout) {
	      clearTimeout(timeout);
	    });
	  },

	  componentWillAppear: function (done) {
	    if (this.props.appear) {
	      this.transition('appear', done, this.props.appearTimeout);
	    } else {
	      done();
	    }
	  },

	  componentWillEnter: function (done) {
	    if (this.props.enter) {
	      this.transition('enter', done, this.props.enterTimeout);
	    } else {
	      done();
	    }
	  },

	  componentWillLeave: function (done) {
	    if (this.props.leave) {
	      this.transition('leave', done, this.props.leaveTimeout);
	    } else {
	      done();
	    }
	  },

	  render: function () {
	    return onlyChild(this.props.children);
	  }
	});

	module.exports = ReactCSSTransitionGroupChild;

/***/ },

/***/ 1030:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks static-only
	 * @providesModule ReactTransitionChildMapping
	 */

	'use strict';

	var flattenChildren = __webpack_require__(419);

	var ReactTransitionChildMapping = {
	  /**
	   * Given `this.props.children`, return an object mapping key to child. Just
	   * simple syntactic sugar around flattenChildren().
	   *
	   * @param {*} children `this.props.children`
	   * @return {object} Mapping of key to child
	   */
	  getChildMapping: function (children) {
	    if (!children) {
	      return children;
	    }
	    return flattenChildren(children);
	  },

	  /**
	   * When you're adding or removing children some may be added or removed in the
	   * same render pass. We want to show *both* since we want to simultaneously
	   * animate elements in and out. This function takes a previous set of keys
	   * and a new set of keys and merges them with its best guess of the correct
	   * ordering. In the future we may expose some of the utilities in
	   * ReactMultiChild to make this easy, but for now React itself does not
	   * directly have this concept of the union of prevChildren and nextChildren
	   * so we implement it here.
	   *
	   * @param {object} prev prev children as returned from
	   * `ReactTransitionChildMapping.getChildMapping()`.
	   * @param {object} next next children as returned from
	   * `ReactTransitionChildMapping.getChildMapping()`.
	   * @return {object} a key set that contains all keys in `prev` and all keys
	   * in `next` in a reasonable order.
	   */
	  mergeChildMappings: function (prev, next) {
	    prev = prev || {};
	    next = next || {};

	    function getValueForKey(key) {
	      if (next.hasOwnProperty(key)) {
	        return next[key];
	      } else {
	        return prev[key];
	      }
	    }

	    // For each key of `next`, the list of keys to insert before that key in
	    // the combined list
	    var nextKeysPending = {};

	    var pendingKeys = [];
	    for (var prevKey in prev) {
	      if (next.hasOwnProperty(prevKey)) {
	        if (pendingKeys.length) {
	          nextKeysPending[prevKey] = pendingKeys;
	          pendingKeys = [];
	        }
	      } else {
	        pendingKeys.push(prevKey);
	      }
	    }

	    var i;
	    var childMapping = {};
	    for (var nextKey in next) {
	      if (nextKeysPending.hasOwnProperty(nextKey)) {
	        for (i = 0; i < nextKeysPending[nextKey].length; i++) {
	          var pendingNextKey = nextKeysPending[nextKey][i];
	          childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
	        }
	      }
	      childMapping[nextKey] = getValueForKey(nextKey);
	    }

	    // Finally, add the keys which didn't appear before any key in `next`
	    for (i = 0; i < pendingKeys.length; i++) {
	      childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
	    }

	    return childMapping;
	  }
	};

	module.exports = ReactTransitionChildMapping;

/***/ },

/***/ 1031:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactTransitionEvents
	 */

	'use strict';

	var ExecutionEnvironment = __webpack_require__(24);

	/**
	 * EVENT_NAME_MAP is used to determine which event fired when a
	 * transition/animation ends, based on the style property used to
	 * define that event.
	 */
	var EVENT_NAME_MAP = {
	  transitionend: {
	    'transition': 'transitionend',
	    'WebkitTransition': 'webkitTransitionEnd',
	    'MozTransition': 'mozTransitionEnd',
	    'OTransition': 'oTransitionEnd',
	    'msTransition': 'MSTransitionEnd'
	  },

	  animationend: {
	    'animation': 'animationend',
	    'WebkitAnimation': 'webkitAnimationEnd',
	    'MozAnimation': 'mozAnimationEnd',
	    'OAnimation': 'oAnimationEnd',
	    'msAnimation': 'MSAnimationEnd'
	  }
	};

	var endEvents = [];

	function detectEvents() {
	  var testEl = document.createElement('div');
	  var style = testEl.style;

	  // On some platforms, in particular some releases of Android 4.x,
	  // the un-prefixed "animation" and "transition" properties are defined on the
	  // style object but the events that fire will still be prefixed, so we need
	  // to check if the un-prefixed events are useable, and if not remove them
	  // from the map
	  if (!('AnimationEvent' in window)) {
	    delete EVENT_NAME_MAP.animationend.animation;
	  }

	  if (!('TransitionEvent' in window)) {
	    delete EVENT_NAME_MAP.transitionend.transition;
	  }

	  for (var baseEventName in EVENT_NAME_MAP) {
	    var baseEvents = EVENT_NAME_MAP[baseEventName];
	    for (var styleName in baseEvents) {
	      if (styleName in style) {
	        endEvents.push(baseEvents[styleName]);
	        break;
	      }
	    }
	  }
	}

	if (ExecutionEnvironment.canUseDOM) {
	  detectEvents();
	}

	// We use the raw {add|remove}EventListener() call because EventListener
	// does not know how to remove event listeners and we really should
	// clean up. Also, these events are not triggered in older browsers
	// so we should be A-OK here.

	function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
	}

	function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	}

	var ReactTransitionEvents = {
	  addEndEventListener: function (node, eventListener) {
	    if (endEvents.length === 0) {
	      // If CSS transitions are not supported, trigger an "end animation"
	      // event immediately.
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },

	  removeEndEventListener: function (node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  }
	};

	module.exports = ReactTransitionEvents;

/***/ },

/***/ 1032:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactTransitionGroup
	 */

	'use strict';

	var React = __webpack_require__(256);
	var ReactTransitionChildMapping = __webpack_require__(1030);

	var assign = __webpack_require__(14);
	var emptyFunction = __webpack_require__(53);

	var ReactTransitionGroup = React.createClass({
	  displayName: 'ReactTransitionGroup',

	  propTypes: {
	    component: React.PropTypes.any,
	    childFactory: React.PropTypes.func
	  },

	  getDefaultProps: function () {
	    return {
	      component: 'span',
	      childFactory: emptyFunction.thatReturnsArgument
	    };
	  },

	  getInitialState: function () {
	    return {
	      children: ReactTransitionChildMapping.getChildMapping(this.props.children)
	    };
	  },

	  componentWillMount: function () {
	    this.currentlyTransitioningKeys = {};
	    this.keysToEnter = [];
	    this.keysToLeave = [];
	  },

	  componentDidMount: function () {
	    var initialChildMapping = this.state.children;
	    for (var key in initialChildMapping) {
	      if (initialChildMapping[key]) {
	        this.performAppear(key);
	      }
	    }
	  },

	  componentWillReceiveProps: function (nextProps) {
	    var nextChildMapping = ReactTransitionChildMapping.getChildMapping(nextProps.children);
	    var prevChildMapping = this.state.children;

	    this.setState({
	      children: ReactTransitionChildMapping.mergeChildMappings(prevChildMapping, nextChildMapping)
	    });

	    var key;

	    for (key in nextChildMapping) {
	      var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
	      if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) {
	        this.keysToEnter.push(key);
	      }
	    }

	    for (key in prevChildMapping) {
	      var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(key);
	      if (prevChildMapping[key] && !hasNext && !this.currentlyTransitioningKeys[key]) {
	        this.keysToLeave.push(key);
	      }
	    }

	    // If we want to someday check for reordering, we could do it here.
	  },

	  componentDidUpdate: function () {
	    var keysToEnter = this.keysToEnter;
	    this.keysToEnter = [];
	    keysToEnter.forEach(this.performEnter);

	    var keysToLeave = this.keysToLeave;
	    this.keysToLeave = [];
	    keysToLeave.forEach(this.performLeave);
	  },

	  performAppear: function (key) {
	    this.currentlyTransitioningKeys[key] = true;

	    var component = this.refs[key];

	    if (component.componentWillAppear) {
	      component.componentWillAppear(this._handleDoneAppearing.bind(this, key));
	    } else {
	      this._handleDoneAppearing(key);
	    }
	  },

	  _handleDoneAppearing: function (key) {
	    var component = this.refs[key];
	    if (component.componentDidAppear) {
	      component.componentDidAppear();
	    }

	    delete this.currentlyTransitioningKeys[key];

	    var currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children);

	    if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
	      // This was removed before it had fully appeared. Remove it.
	      this.performLeave(key);
	    }
	  },

	  performEnter: function (key) {
	    this.currentlyTransitioningKeys[key] = true;

	    var component = this.refs[key];

	    if (component.componentWillEnter) {
	      component.componentWillEnter(this._handleDoneEntering.bind(this, key));
	    } else {
	      this._handleDoneEntering(key);
	    }
	  },

	  _handleDoneEntering: function (key) {
	    var component = this.refs[key];
	    if (component.componentDidEnter) {
	      component.componentDidEnter();
	    }

	    delete this.currentlyTransitioningKeys[key];

	    var currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children);

	    if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
	      // This was removed before it had fully entered. Remove it.
	      this.performLeave(key);
	    }
	  },

	  performLeave: function (key) {
	    this.currentlyTransitioningKeys[key] = true;

	    var component = this.refs[key];
	    if (component.componentWillLeave) {
	      component.componentWillLeave(this._handleDoneLeaving.bind(this, key));
	    } else {
	      // Note that this is somewhat dangerous b/c it calls setState()
	      // again, effectively mutating the component before all the work
	      // is done.
	      this._handleDoneLeaving(key);
	    }
	  },

	  _handleDoneLeaving: function (key) {
	    var component = this.refs[key];

	    if (component.componentDidLeave) {
	      component.componentDidLeave();
	    }

	    delete this.currentlyTransitioningKeys[key];

	    var currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children);

	    if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
	      // This entered again before it fully left. Add it again.
	      this.performEnter(key);
	    } else {
	      this.setState(function (state) {
	        var newChildren = assign({}, state.children);
	        delete newChildren[key];
	        return { children: newChildren };
	      });
	    }
	  },

	  render: function () {
	    // TODO: we could get rid of the need for the wrapper node
	    // by cloning a single child
	    var childrenToRender = [];
	    for (var key in this.state.children) {
	      var child = this.state.children[key];
	      if (child) {
	        // You may need to apply reactive updates to a child as it is leaving.
	        // The normal React way to do it won't work since the child will have
	        // already been removed. In case you need this behavior you can provide
	        // a childFactory function to wrap every child, even the ones that are
	        // leaving.
	        childrenToRender.push(React.cloneElement(this.props.childFactory(child), { ref: key, key: key }));
	      }
	    }
	    return React.createElement(this.props.component, this.props, childrenToRender);
	  }
	});

	module.exports = ReactTransitionGroup;

/***/ },

/***/ 1034:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule CSSCore
	 * @typechecks
	 */

	'use strict';

	var invariant = __webpack_require__(10);

	/**
	 * The CSSCore module specifies the API (and implements most of the methods)
	 * that should be used when dealing with the display of elements (via their
	 * CSS classes and visibility on screen. It is an API focused on mutating the
	 * display and not reading it as no logical state should be encoded in the
	 * display of elements.
	 */

	var CSSCore = {

	  /**
	   * Adds the class passed in to the element if it doesn't already have it.
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {DOMElement} the element passed in
	   */
	  addClass: function (element, className) {
	    !!/\s/.test(className) ?  true ? invariant(false, 'CSSCore.addClass takes only a single class name. "%s" contains ' + 'multiple classes.', className) : invariant(false) : undefined;

	    if (className) {
	      if (element.classList) {
	        element.classList.add(className);
	      } else if (!CSSCore.hasClass(element, className)) {
	        element.className = element.className + ' ' + className;
	      }
	    }
	    return element;
	  },

	  /**
	   * Removes the class passed in from the element
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {DOMElement} the element passed in
	   */
	  removeClass: function (element, className) {
	    !!/\s/.test(className) ?  true ? invariant(false, 'CSSCore.removeClass takes only a single class name. "%s" contains ' + 'multiple classes.', className) : invariant(false) : undefined;

	    if (className) {
	      if (element.classList) {
	        element.classList.remove(className);
	      } else if (CSSCore.hasClass(element, className)) {
	        element.className = element.className.replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ') // multiple spaces to one
	        .replace(/^\s*|\s*$/g, ''); // trim the ends
	      }
	    }
	    return element;
	  },

	  /**
	   * Helper to add or remove a class from an element based on a condition.
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @param {*} bool condition to whether to add or remove the class
	   * @return {DOMElement} the element passed in
	   */
	  conditionClass: function (element, className, bool) {
	    return (bool ? CSSCore.addClass : CSSCore.removeClass)(element, className);
	  },

	  /**
	   * Tests whether the element has the class specified.
	   *
	   * @param {DOMNode|DOMWindow} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {boolean} true if the element has the class, false if not
	   */
	  hasClass: function (element, className) {
	    !!/\s/.test(className) ?  true ? invariant(false, 'CSS.hasClass takes only a single class name.') : invariant(false) : undefined;
	    if (element.classList) {
	      return !!className && element.classList.contains(className);
	    }
	    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
	  }

	};

	module.exports = CSSCore;

/***/ },

/***/ 1323:
27,

/***/ 1372:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(6);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(5);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _AiForm = __webpack_require__(27);

	var _AiForm2 = _interopRequireDefault(_AiForm);

	var _component = __webpack_require__(11);

	var _component2 = _interopRequireDefault(_component);

	var _global = __webpack_require__(12);

	var _dataList = __webpack_require__(28);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var Add = function (_Component) {
	    (0, _inherits3["default"])(Add, _Component);

	    function Add(props) {
	        (0, _classCallCheck3["default"])(this, Add);
	        return (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));
	    }

	    Add.prototype.componentDidMount = function componentDidMount() {
	        if (this.props.params.id) {
	            this.props.actions.requestDetailMsg(this.props.params.config, this.props.params.id, this.props.dlState.getDataListApi.data.detail.body); //json
	        }
	    };

	    Add.prototype.render = function render() {
	        var _this2 = this;

	        var config = this.props.dlState.getDataListApi.data.add.initData.data;
	        var jsonpArgs = {},
	            detailValues = void 0;

	        if (this.props.params.id) {
	            if (!this.props.dlState.detailMsgDataApi || !this.props.dlState.detailMsgDataApi.data) {
	                return _react2["default"].createElement(
	                    'div',
	                    null,
	                    '\u7F3A\u5C11\u8BE6\u60C5\u4FE1\u606F'
	                );
	            }
	            detailValues = this.props.dlState.detailMsgDataApi.data;
	            config.jsonpArgs = (0, _extends3["default"])({}, config.jsonpArgs, { apiData: detailValues, type: "add" });
	        }
	        return _react2["default"].createElement(
	            'div',
	            null,
	            _react2["default"].createElement(
	                'div',
	                null,
	                this.props.dlState && this.props.actions && function () {
	                    var config = _this2.props.dlState.getDataListApi.data.add.initData.data;
	                    return _react2["default"].createElement(_AiForm2["default"], { id: 'dataListAdd1', config: config, onSubmit: function onSubmit(values) {
	                            var apis = _this2.props.dlState.getDataListApi.data.add.onAddSubmitApi;
	                            if (apis && apis.dataFormate) {
	                                values = apis.dataFormate(values);
	                                delete apis.dataFormate;
	                            }
	                            _this2.props.actions.requestAddData(_this2.props.params.config, apis, values);
	                        } });
	                }()
	            )
	        );
	    };

	    return Add;
	}(_react.Component); /*{this.props.dlState && this.props.dlState.detailMsgDataApi &&  this.props.dlState.detailMsgDataApi.data && <div>
	                     {
	                     this.props.dlState  && this.props.actions &&
	                     (()=>{
	                     
	                     if(this.props.dlState.detailMsgDataApi && this.props.dlState.detailMsgDataApi.data){
	                     let detailValues = this.props.dlState.detailMsgDataApi.data;
	                     
	                     }
	                     return <AddForm id="dataListAdd" config={config} onSubmit={(values)=>{
	                     this.props.actions.requestAddData(this.props.params.dataListId,this.props.dlState.getDataListApi.data.add.onAddSubmitApi,values)
	                     window.history.back(-1);
	                     }}/>
	                     })()
	                     
	                     }
	                     </div>}*/
	//import styles from './Contact.less';


	exports["default"] = (0, _component2["default"])('dataListAdd', { requestAddData: _dataList.requestAddData, requestDetailMsg: _dataList.requestDetailMsg }, function (state, dispatchProps, ownProps) {
	    return { dlState: state.dataList[ownProps.params.config] };
	})(Add);
	module.exports = exports['default'];

/***/ },

/***/ 1373:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = undefined;

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(6);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(5);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var Delete = function (_Component) {
	    (0, _inherits3["default"])(Delete, _Component);

	    function Delete() {
	        (0, _classCallCheck3["default"])(this, Delete);
	        return (0, _possibleConstructorReturn3["default"])(this, _Component.apply(this, arguments));
	    }

	    Delete.prototype.render = function render() {
	        return _react2["default"].createElement(
	            'div',
	            null,
	            'Delete ids: ',
	            this.props.params.ids
	        );
	    };

	    return Delete;
	}(_react.Component); //import styles from './Contact.less';


	exports["default"] = Delete;
	module.exports = exports['default'];

/***/ },

/***/ 1374:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(6);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(5);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _AiForm = __webpack_require__(27);

	var _AiForm2 = _interopRequireDefault(_AiForm);

	var _component = __webpack_require__(11);

	var _component2 = _interopRequireDefault(_component);

	var _dataList = __webpack_require__(28);

	var _Utils = __webpack_require__(885);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var Detail = function (_Component) {
	    (0, _inherits3["default"])(Detail, _Component);

	    function Detail(props) {
	        (0, _classCallCheck3["default"])(this, Detail);
	        return (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));
	    }

	    Detail.prototype.componentDidMount = function componentDidMount() {
	        this.props.actions.requestDetailMsg(this.props.params.config, this.props.params.id, this.props.dlState.getDataListApi.data.detail.body);
	    };

	    Detail.prototype.render = function render() {
	        var _this2 = this;

	        return _react2["default"].createElement(
	            'div',
	            null,
	            this.props.dlState && this.props.dlState.detailMsgDataApi && this.props.dlState.detailMsgDataApi.data && function () {
	                var config = _this2.props.dlState.getDataListApi.data.detail.initData.data;
	                var detailValues = _this2.props.dlState.detailMsgDataApi.data;
	                //if(config.apiName){
	                config.jsonpArgs = (0, _extends3["default"])({}, config.jsonpArgs, { apiData: detailValues });
	                //}
	                return _react2["default"].createElement(_AiForm2["default"], { id: 'dataListDetail', config: config /*onSubmit={(values)=>{
	                                                                                                              this.props.actions.requestUpateData(this.props.params.dataListIdthis.props.dlState.getDataListApi.data.editonUpdateSubmitApivalues)
	                                                                                                              {/!*window.history.back(-1);*!/}
	                                                                                                              }}*/ });
	            }()
	        );
	    };

	    return Detail;
	}(_react.Component); //import styles from './Contact.less';


	exports["default"] = (0, _component2["default"])('dataListDetail', { requestDetailMsg: _dataList.requestDetailMsg, requestUpateData: _dataList.requestUpateData }, function (state, dispatchProps, ownProps) {
	    return { dlState: state.dataList[ownProps.params.config] };
	})(Detail);
	module.exports = exports['default'];

/***/ },

/***/ 1375:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(6);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(5);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _AiForm = __webpack_require__(27);

	var _AiForm2 = _interopRequireDefault(_AiForm);

	var _component = __webpack_require__(11);

	var _component2 = _interopRequireDefault(_component);

	var _dataList = __webpack_require__(28);

	var _global = __webpack_require__(12);

	var _Utils = __webpack_require__(885);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	//import styles from './Contact.less';
	var Edit = function (_Component) {
	    (0, _inherits3["default"])(Edit, _Component);

	    function Edit(props) {
	        (0, _classCallCheck3["default"])(this, Edit);

	        var _this = (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));

	        _this.props.actions.requestDetailMsg(_this.props.params.config, _this.props.params.id, _this.props.dlState.getDataListApi.data.detail.body); //json
	        return _this;
	    }

	    Edit.prototype.componentDidMount = function componentDidMount() {};

	    Edit.prototype.render = function render() {
	        var _this2 = this;

	        return _react2["default"].createElement(
	            'div',
	            null,
	            _react2["default"].createElement(
	                'div',
	                null,
	                this.props.dlState && this.props.dlState.detailMsgDataApi && this.props.dlState.detailMsgDataApi.data && this.props.actions && this.props.actions.requestUpateData && function () {
	                    var config = _this2.props.dlState.getDataListApi.data.edit.initData.data;
	                    var detailValues = _this2.props.dlState.detailMsgDataApi.data;
	                    config.jsonpArgs = (0, _extends3["default"])({}, config.jsonpArgs, { apiData: detailValues });
	                    return _react2["default"].createElement(_AiForm2["default"], { id: 'dataListEdit', config: config, onSubmit: function onSubmit(values) {
	                            var apis = _this2.props.dlState.getDataListApi.data.edit.onUpdateSubmitApi;
	                            if (apis && apis.dataFormate) {
	                                values = apis.dataFormate(values);
	                                delete apis.dataFormate;
	                            }
	                            values.id = _this2.props.params.id;
	                            _this2.props.actions.requestUpateData(_this2.props.params.config, apis, values);
	                        } });
	                }()
	            )
	        );
	    };

	    return Edit;
	}(_react.Component);

	exports["default"] = (0, _component2["default"])('dataList', { requestUpateData: _dataList.requestUpateData, requestDetailMsg: _dataList.requestDetailMsg }, function (state, dispatchProps, ownProps) {
	    return { dlState: state.dataList[ownProps.params.config] };
	})(Edit);
	module.exports = exports['default'];

/***/ },

/***/ 1376:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _DataListCon = __webpack_require__(1011);

	var _DataListCon2 = _interopRequireDefault(_DataListCon);

	var _List = __webpack_require__(1012);

	var _List2 = _interopRequireDefault(_List);

	var _Add = __webpack_require__(1372);

	var _Add2 = _interopRequireDefault(_Add);

	var _Delete = __webpack_require__(1373);

	var _Delete2 = _interopRequireDefault(_Delete);

	var _Edit = __webpack_require__(1375);

	var _Edit2 = _interopRequireDefault(_Edit);

	var _Detail = __webpack_require__(1374);

	var _Detail2 = _interopRequireDefault(_Detail);

	var _Utils = __webpack_require__(885);

	var _Utils2 = _interopRequireDefault(_Utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports["default"] = { DataListCon: _DataListCon2["default"], List: _List2["default"], Add: _Add2["default"], Delete: _Delete2["default"], Edit: _Edit2["default"], Detail: _Detail2["default"], Utils: _Utils2["default"] };
	module.exports = exports['default'];

/***/ }

});