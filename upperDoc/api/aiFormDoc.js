webpackJsonp([3],[
/* 0 */
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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var AiFormDoc = function (_Component) {
		(0, _inherits3["default"])(AiFormDoc, _Component);

		function AiFormDoc(props) {
			(0, _classCallCheck3["default"])(this, AiFormDoc);

			var _this = (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));

			_global.Global.mark({
				aiFormDoc: (0, _defineProperty3["default"])({}, props.id, {
					showRouter: false
				})
			}, 'aiFormDoc_init');
			return _this;
		}

		AiFormDoc.prototype.onClickFormRouter = function onClickFormRouter() {
			_global.Global.mark({
				aiFormDoc: (0, _defineProperty3["default"])({}, this.props.id, {
					showRouter: !this.props.state.showRouter
				})
			}, 'aiFormDoc_onClickFormRouter');
		};

		AiFormDoc.prototype.render = function render() {
			var state = this.props.state;
			if (!state) return _react2["default"].createElement(
				'div',
				null,
				'...'
			);
			var config = {
				"success": true,
				"data": [{
					"title": "我是栏目一",
					"column": 3,
					"labelCol": 8,
					"wrapperCol": 16,
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
			};
			var dataSource = [{
				key: 'perennity',
				name: 'perennity',
				age: 'bool',
				address: '是否持久化，为false时，当aiForm从页面上删除时，自动清理树中的数据内容'
			}, {
				key: 'fluid',
				name: 'fluid',
				age: 'bool',
				address: '默认值为false,是否流式布局，否则撑满整个画面'
			}, {
				key: 'onSubmit',
				name: 'onSubmit',
				age: 'function',
				address: '当点击确定按钮时的回调'
			}, {
				key: 'onCancel',
				name: 'onCancel',
				age: 'function',
				address: '当点击取消或返回按钮时的回调，如果不指定onCancel，默认onCancel的行为是返回上一个页面'
			}, {
				key: 'fluid',
				name: 'fluid',
				age: 'bool',
				address: '默认值为false,是否流式布局，否则撑满整个画面'
			}, {
				key: 'detailMsg',
				name: 'detailMsg',
				age: 'object',
				address: '详情接口配置，(不推荐使用)，如果要读取详情信息，请在AiForm的使用页面（即父页面）完成'
			}, {
				key: 'id',
				name: 'id',
				age: 'string',
				address: '组件实例名标识，用于在树中区别不同的aiForm实例'
			}, {
				key: 'config',
				name: 'config',
				age: 'array',
				address: '存放多个栏目，每个AiForm允许有多个栏目，每个栏目是一个单独的区块，可以有自己的标题和布局方式'
			}, {
				key: 'config[x].title',
				name: 'config[x].title',
				age: "string",
				address: '栏目标题'
			}, {
				key: 'config[x].showTitle',
				name: 'config[x].showTitle',
				age: "bool",
				address: '是否显示栏目标题'
			}, {
				key: 'config[x].column',
				name: 'config[x].column',
				age: "number",
				address: '该栏目下表单项的列数'
			}, {
				key: 'config[x].labelCol',
				name: 'config[x].labelCol',
				age: "number",
				address: '表单项键宽(label),表单项总宽度分为24分，键宽+值宽<=24'
			}, {
				key: 'config[x].wrapperCol',
				name: 'config[x].wrapperCol',
				age: "number",
				address: '表单项值宽(label),表单项总宽度分为24分，键宽+值宽<=24'
			}, {
				key: 'config[x].buttonConfigs',
				name: 'config[x].buttonConfigs',
				age: "array|function",
				address: '底部(footer)配置,为array时创建多个按钮，为function时为自定义footer'
			}, {
				key: 'config[x].data',
				name: 'config[x].data',
				age: "array",
				address: '表单项数组'
			}, {
				key: 'config[x].data[x].name',
				name: 'config[x].data[x].name',
				age: "string",
				address: '表单项键(label)'
			}, {
				key: 'config[x].data[x].type',
				name: 'config[x].data[x].type',
				age: "string|function|dom",
				address: '表单类型,可选值有"select","treeSelect","input","checkbox","radio","upload","input","text","switch","timePicker","rangePicker","datePicker";为function或dom时为自定义类型'
			}, {
				key: 'config[x].data[x].field',
				name: 'config[x].data[x].field',
				age: "string",
				address: '提交给后端的字段名'
			}, {
				key: 'config[x].data[x].dictId',
				name: 'config[x].data[x].dictId',
				age: "string",
				address: '字典键名，项目中所有字典项，按键名动态保存在树中，对应节点dicts.键名，这些节点因浏览不同的Form而动态地按需增长'
			}, {
				key: 'config[x].data[x].dictApi',
				name: 'config[x].data[x].dictApi',
				age: "object",
				address: '动态字典接口配置'
			}, {
				key: 'config[x].data[x].defaultValue',
				name: 'config[x].data[x].defaultValue',
				age: "*",
				address: '表单项默认值'
			}, {
				key: 'config[x].data[x].options',
				name: 'config[x].data[x].options',
				age: "array",
				address: '表单项选项，对select有效'
			}, {
				key: 'config[x].data[x].props',
				name: 'config[x].data[x].props',
				age: "object",
				address: '表单项其它属性设置，各组件参数项参见ant.design'
			}, {
				key: 'config[x].data[x].validate',
				name: 'config[x].data[x].validate',
				age: "array",
				address: '表单项校验规则，参见ant.design'
			}, {
				key: 'config[x].data[x].placeholder',
				name: 'config[x].data[x].placeholder',
				age: "string",
				address: '表单项输入前的提示文字'
			}, {
				key: 'config[x].data[x].preRender',
				name: 'config[x].data[x].preRender',
				age: "function",
				address: "预处理函数，(返回'hidden','none',{},或''),如果函数返回'hidden'，则此表单项消失，如果返回'none'此表单项隐藏，如果返回对象，则此对象用作表单项的prop,如果为其它值无效果变化"
			}, {
				key: 'AiForm接口',
				name: '',
				age: "",
				address: '(组件接口调用（通用）："Global.getState().someComponent.someInstance.someApi()")'
			}, {
				key: 'requestSubmitApi',
				name: 'requestSubmitApi',
				age: "参数同Global.requestApi()",
				address: '调用该接口提交表单，AiForm组件会自动更新提交状态，提交按钮在提交时显示loading且不可点击,在成功时显示已提交，失败时显示请重试'
			}];

			var columns = [{
				title: '参数名',
				dataIndex: 'name',
				key: 'name',
				width: '20%',
				className: 'tbLeft'
			}, {
				title: '类型/默认值',
				dataIndex: 'age',
				key: 'age',
				className: 'tbLeft'
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
					'AiForm\u7EC4\u4EF6'
				),
				_react2["default"].createElement(
					'div',
					{ className: 'p' },
					_react2["default"].createElement(
						'div',
						null,
						'AiForm\u7EC4\u4EF6\u7528\u4EE5\u5C55\u793A\u8868\u5355\u5185\u5BB9\uFF08\u6216\u7C7B\u4F3C\u8868\u5355\u952E\u503C\u5BF9\u5E03\u5C40\u7684\u8BE6\u60C5\u5185\u5BB9\uFF09\uFF0CAiForm\u7EC4\u4EF6\u53EF\u4EE5\u4E14\u81F3\u5C11\u542B\u6709\u4E00\u4E2A\u680F\u76EE\uFF0C\u6BCF\u4E2A\u680F\u76EE\uFF0C\u53EF\u4EE5\u6709\u81EA\u5DF1\u7684\u680F\u76EE\u6807\u9898\uFF0C\u5E03\u5C40\u65B9\u5F0F\u548C\u5185\u5BB9\uFF0C\u5404\u680F\u76EE\u5C5E\u4E8E\u540C\u4E00\u8868\u5355\uFF0C\u56FA\u591A\u680F\u76EE\u53EA\u4E00\u4E2A\u63D0\u4EA4\u6309\u94AE\u3002AiForm\u4E5F\u53EF\u76F4\u63A5\u7528\u4E8E\u5C55\u793A\u8BE6\u60C5\u5185\u5BB9\u3002'
					),
					_react2["default"].createElement(
						'h4',
						null,
						'\u7EC4\u4EF6\u5B9E\u4F8B'
					),
					_react2["default"].createElement(_AiForm2["default"], { fluid: true, config: config })
				),
				_react2["default"].createElement(
					'div',
					{ className: 'p' },
					_react2["default"].createElement(
						'h4',
						null,
						'\u4E00\uFF0C\u76F4\u63A5\u4F7F\u7528\u8868\u5355\u7EC4\u4EF6'
					),
					_react2["default"].createElement('pre', { dangerouslySetInnerHTML: { __html: '//aiFormDoc.js \u6548\u679C\u89C1\u672C\u9875\u9876\u90E8\n...\nimport AiForm from \'../components/AiForm\';\n...\n\trender(){\n\t\tlet config = {\n\t\t\t&quot;success&quot;: true,\n\t\t\t&quot;data&quot;:[{\n\t\t\t\t\t\t&quot;title&quot;:&quot;\u6211\u662F\u680F\u76EE\u4E00&quot;,\n\t\t\t\t\t\t&quot;column&quot;:3, \n\t\t\t\t\t\t&quot;labelCol&quot;:8,\n\t\t\t\t\t\t&quot;wrapperCol&quot;:16,\n\t\t\t\t\t\t&quot;showTitle&quot;:true,\n\t\t\t\t\t\t&quot;buttonConfigs&quot;:{\n\t\t\t\t\t\t\t&quot;buttons&quot;:[\n\t\t\t\t\t\t\t\t{&quot;type&quot;:&quot;button&quot;,&quot;value&quot;:&quot;\u8FD4\u56DE&quot;,&quot;field&quot;:&quot;back&quot;,\n\t\t\t\t\t\t\t\tprops:{style:{float:&quot;right&quot;}}},\n\t\t\t\t\t\t\t\t{&quot;type&quot;:&quot;button&quot;,&quot;value&quot;:&quot;\u786E\u5B9A&quot;,&quot;field&quot;:&quot;submit&quot;,\n\t\t\t\t\t\t\t\tprops:{style:{float:&quot;right&quot;},btnType:&quot;primary&quot;,htmlType:&quot;submit&quot;}},\n\t\t\t\t\t\t\t]\n\t\t\t\t\t\t},\n\t\t\t\t\t\t&quot;data&quot;:[\n\t\t\t\t\t\t\t{&quot;name&quot;:&quot;\u670D\u52A1\u7C7B\u578B&quot;,&quot;type&quot;:&quot;select&quot;,&quot;column&quot;:1,&quot;labelCol&quot;:8,&quot;wrapperCol&quot;:16,\n\t\t\t\t\t\t\t&quot;field&quot;:&quot;serviceType&quot;,&quot;dictId&quot;:&quot;serviceType&quot;,&quot;defaultValue&quot;:&quot;1&quot;,value:&quot;2&quot;,\n\t\t\t\t\t\t\t&quot;placeholder&quot;:&quot;\u8BF7\u9009\u62E9...&quot;},\n\t\t\t\t\t\t\t{&quot;name&quot;:&quot;\u5B57\u5178\u9879\u83B7\u53D6\u4E0B\u62C9\u6570\u636E&quot;,&quot;type&quot;:&quot;select&quot;,&quot;field&quot;:&quot;boxs&quot;,&quot;dictId&quot;:&quot;21&quot;,&quot;validate&quot;: [{\n\t\t\t\t\t\t\t\t&quot;required&quot;: true, &quot;message&quot;: &#39;Please input your E-mail!&#39;\n\t\t\t\t\t\t\t}],&quot;placeholder&quot;:&quot;\u8BF7\u9009\u62E9...&quot;},\n\t\t\t\t\t\t\t{&quot;name&quot;:&quot;\u63A5\u53E3\u83B7\u53D6\u4E0B\u62C9\u6570\u636E&quot;,&quot;type&quot;:&quot;select&quot;,\n\t\t\t\t\t\t\t&quot;field&quot;:&quot;name&quot;,&quot;validate&quot;: [{\n\t\t\t\t\t\t\t\t&quot;required&quot;: true, &quot;message&quot;: &#39;Please input your E-mail!&#39;\n\t\t\t\t\t\t\t}],&quot;dictId&quot;:&quot;resName&quot;,&quot;dictApi&quot;:{apiName:&quot;getResName&quot;},\n\t\t\t\t\t\t\t&quot;placeholder&quot;:&quot;\u8BF7\u9009\u62E9...&quot;},\n\t\t\t\t\t\t\t{&quot;name&quot;:&quot;\u65E0\u5B57\u5178\u9879&quot;,&quot;type&quot;:&quot;select&quot;,&quot;field&quot;:&quot;sex&quot;,\n\t\t\t\t\t\t\t&quot;placeholder&quot;:&quot;\u8BF7\u9009\u62E9...&quot;,&quot;defaultValue&quot;:&quot;\u7BEE\u7403&quot;,\n\t\t\t\t\t\t\t&quot;options&quot;:[&quot;\u7BEE\u7403&quot;,&quot;\u8DB3\u7403&quot;,&quot;\u4E52\u4E53\u7403&quot;]},\n\t\t\t\t\t\t\t{&quot;type&quot;:&quot;treeSelect&quot;,&quot;name&quot;:&quot;treeSelect1&quot; ,&quot;field&quot;:&quot;themeType&quot;,dictId:&quot;themeType&quot;,dictApi:{apiName:&#39;flglData&#39;},\n\t\t\t\t\t\t\t&quot;defaultValue&quot;:&quot;\u5E38\u9A7B\u4EBA\u53E3&quot;,&quot;validate&quot;: [{\n\t\t\t\t\t\t\t\t&quot;required&quot;: true, &quot;message&quot;: &#39;\u4E0D\u80FD\u4E3A\u7A7A!&#39;\n\t\t\t\t\t\t\t}]},\n\t\t\t\t\t\t\t{&quot;name&quot;:&quot;\u90AE\u7BB1&quot;,&quot;type&quot;:&quot;input&quot;,&quot;field&quot;:&quot;email&quot;,\n\t\t\t\t\t\t\t&quot;defaultValue&quot;:&quot;tiangb@fable.cn&quot;,\n\t\t\t\t\t\t\t\t&quot;validate&quot;: [{\n\t\t\t\t\t\t\t\t\t&quot;type&quot;: &#39;email&#39;, &quot;message&quot;: &#39;The input is not valid E-mail!&#39;\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\t&quot;required&quot;: true, &quot;message&quot;: &#39;Please input your E-mail!&#39;\n\t\t\t\t\t\t\t\t\t}]},\n\t\t\t\t\t\t\t{&quot;name&quot;:&quot;checkbox&quot;,&quot;type&quot;:&quot;checkbox&quot;,\n\t\t\t\t\t\t\t&quot;field&quot;:&quot;sports&quot;,&quot;options&quot;:[&quot;\u7BEE\u7403&quot;,&quot;\u8DB3\u7403&quot;,&quot;\u4E52\u4E53\u7403&quot;],\n\t\t\t\t\t\t\t&quot;defaultValue&quot;:[&quot;\u7BEE\u7403&quot;,&quot;\u4E52\u4E53\u7403&quot;]},\n\t\t\t\t\t\t\t{&quot;name&quot;:&quot;switch&quot;,&quot;type&quot;:&quot;switch&quot;,&quot;field&quot;:&quot;switch&quot;},\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t{&quot;name&quot;:&quot;radio&quot;,&quot;type&quot;:&quot;radio&quot;,&quot;field&quot;:&quot;radio&quot;,&quot;options&quot;:[&quot;\u7BEE\u7403&quot;,&quot;\u8DB3\u7403&quot;,&quot;\u4E52\u4E53\u7403&quot;],&quot;defaultValue&quot;:&quot;\u8DB3\u7403&quot;},\n\t\t\t\t\t\t\t{&quot;name&quot;:&quot;radio1&quot;,&quot;type&quot;:&quot;radio1&quot;,&quot;field&quot;:&quot;radio1&quot;,\n\t\t\t\t\t\t\t&quot;options&quot;:[{&quot;value&quot;:&quot;baskeball&quot;,&quot;key&quot;:&quot;\u7BEE\u7403\u738B\u5B50&quot;},\n\t\t\t\t\t\t\t{&quot;value&quot;:&quot;football&quot;,&quot;key&quot;:&quot;\u8DB3\u7403&quot;},\n\t\t\t\t\t\t\t{&quot;value&quot;:&quot;football&quot;,&quot;key&quot;:&quot;\u8DB3\u7403&quot;}],\n\t\t\t\t\t\t\t&quot;defaultValue&quot;:&quot;football&quot;},\n\t\t\t\t\t\t\t{&quot;name&quot;:&quot;TimePicker&quot;,&quot;type&quot;:&quot;timePicker&quot;,\n\t\t\t\t\t\t\t&quot;field&quot;:&quot;timePicker&quot;,&quot;defaultValue&quot;:&quot;12:40&quot;,\n\t\t\t\t\t\t\t&quot;help&quot;:&quot;\u8BF7\u586B\u5199\u4FE1\u606F&quot;},\n\t\t\t\t\t\t\t{&quot;name&quot;:&quot;rangePicker&quot;,&quot;type&quot;:&quot;rangePicker&quot;,\n\t\t\t\t\t\t\t&quot;field&quot;:&quot;rangePicker&quot;},\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t{&quot;type&quot;:&quot;treeSelect&quot;,&quot;name&quot;:&quot;\u4E3B\u9898\u5206\u7C7B&quot;,\n\t\t\t\t\t\t\tprops:{onSelect:()=&gt;{\n\t\t\t\t\t\t\t\talert(123123);\n\t\t\t\t\t\t\t}} ,&quot;field&quot;:&quot;themeType&quot;,dictId:&quot;themeType&quot;,dictApi:{apiName:&#39;flglDataTree&#39;,\n\t\t\t\t\t\t\tbody:{categoryType:1}}},\n\t\t\t\t\t\t\t{&quot;type&quot;:&quot;treeSelect&quot;,&quot;name&quot;:&quot;\u90E8\u95E8\u5206\u7C7B&quot; ,&quot;field&quot;:&quot;departmentType&quot;,dictId:&quot;departmentType&quot;,\n\t\t\t\t\t\t\tdictApi:{apiName:&#39;flglDataTree&#39;,body:{categoryType:2}}},\n\t\t\t\t\t\t\t{&quot;name&quot;:&quot;\u63A5\u53E3\u6587\u6863\u4E0A\u4F20&quot;,&quot;type&quot;:&quot;upload&quot;,\n\t\t\t\t\t\t\t&quot;field&quot;:&quot;apiDoc1&quot;,props:{multiple:true,action: Global.server+&#39;fileUpload/uploadFile&#39;,}},\n\t\t\t\t\t\t\t{&quot;type&quot;:&quot;input&quot;,&quot;name&quot;:&quot;\u65B9\u6CD5&quot; ,&quot;field&quot;:&quot;methods&quot;,&quot;validate&quot;: [{&quot;required&quot;: true, &quot;message&quot;: &#39;Please input !&#39;}]},\n\t\t\t\t\t\t\t{&quot;name&quot;:&quot;\u8BF7\u6C42\u65B9\u6CD5&quot;,&quot;type&quot;:&quot;select&quot;,\n\t\t\t\t\t\t\t&quot;field&quot;:&quot;requestMode&quot;,&quot;dictId&quot;:&quot;requestMode&quot;,\n\t\t\t\t\t\t\t&quot;placeholder&quot;:&quot;\u8BF7\u9009\u62E9...&quot;},\n\t\t\t\t\t\t ]\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t}\n\t\t...\n\t\t\t\t\t&lt;div className=&#39;p&#39;&gt;\n\t\t\t\t\t\t&lt;div&gt;AiForm\u7EC4\u4EF6\u7528\u4EE5\u5C55\u793A\u8868\u5355\u5185\u5BB9\uFF08\u6216\u7C7B\u4F3C\u8868\u5355\u952E\u503C\u5BF9\u5E03\u5C40\u7684\u8BE6\u60C5\u5185\u5BB9\uFF09&lt;/div&gt;\n\t\t\t\t\t\t&lt;h4&gt;\u7EC4\u4EF6\u5B9E\u4F8B&lt;/h4&gt;\n\t\t\t\t\t\t&lt;AiForm fluid={true} config={config}/&gt;\n\t\t\t\t\t&lt;/div&gt;\n\t\t...\n\t}\n' } }),
					_react2["default"].createElement(
						'h4',
						null,
						'\u4E8C\uFF0C\u901A\u8FC7PageLoader\u4F7F\u7528\u8868\u5355\u7EC4\u4EF6'
					),
					_react2["default"].createElement(
						_reactRouter.Link,
						{ to: 'page/aiFormPageDemo', style: { color: '#000', paddingLeft: 20 } },
						'\u70B9\u51FB\u67E5\u770B\u5B9E\u4F8B\u6548\u679C'
					),
					_react2["default"].createElement('div', { style: { marginTop: 20 } }),
					_react2["default"].createElement('pre', { dangerouslySetInnerHTML: { __html: '//pageArgs/aiFormPageDemo.js\nimport React,{Component} from &#x27;react&#x27;;\nimport {Table,Button,Form,Input,Icon,DatePicker,InputNumber} from &#x27;antFB&#x27;;\nimport callback from &#x27;../core/jsonp&#x27;;\nimport {Global} from &#x27;../core/global&#x27;;\nimport AiForm from &#x27;../components/AiForm&#x27;;\nimport connect from &#x27;../core/component&#x27;;\nimport { Link } from &#x27;react-router&#x27;;\n\nclass AiFormPageDemo extends Component{\n  constructor(props){\n    super(props);\n    Global.mark({\n      aiForm:{\n        [props.id]:{\n\n        }\n      }\n    },&#x27;AiFormPageDemo_init&#x27;);\n  }\n\n  render(){\n    let state = this.props.state;\n    if(!state) return &lt;div&gt;...&lt;/div&gt;\n    let config = {\n      &quot;success&quot;: true,\n      &quot;data&quot;:[{\n        &quot;title&quot;:&quot;\u6211\u662F\u680F\u76EE\u4E00&quot;,\n        &quot;column&quot;:3,\n        &quot;labelCol&quot;:undefined,\n        &quot;wrapperCol&quot;:16,\n        &quot;showTitle&quot;:true,\n        &quot;buttonConfigs&quot;:{\n          &quot;buttons&quot;:[\n            {&quot;type&quot;:&quot;button&quot;,&quot;value&quot;:&quot;\u8FD4\u56DE&quot;,&quot;field&quot;:&quot;back&quot;,props:{style:{float:&quot;right&quot;}}},\n            {&quot;type&quot;:&quot;button&quot;,&quot;value&quot;:&quot;\u786E\u5B9A&quot;,&quot;field&quot;:&quot;submit&quot;,props:{style:{float:&quot;right&quot;},btnType:&quot;primary&quot;,htmlType:&quot;submit&quot;}},\n          ]\n        },\n        &quot;data&quot;:[\n          {&quot;name&quot;:&quot;\u670D\u52A1\u7C7B\u578B&quot;,&quot;type&quot;:&quot;select&quot;,&quot;column&quot;:1,&quot;labelCol&quot;:8,&quot;wrapperCol&quot;:16,&quot;field&quot;:&quot;serviceType&quot;,&quot;dictId&quot;:&quot;serviceType&quot;,&quot;defaultValue&quot;:&quot;1&quot;,value:&quot;2&quot;,&quot;placeholder&quot;:&quot;\u8BF7\u9009\u62E9...&quot;},\n          {&quot;name&quot;:&quot;\u5B57\u5178\u9879\u83B7\u53D6\u4E0B\u62C9\u6570\u636E&quot;,&quot;type&quot;:&quot;select&quot;,&quot;field&quot;:&quot;boxs&quot;,&quot;dictId&quot;:&quot;21&quot;,&quot;validate&quot;: [{\n            &quot;required&quot;: true, &quot;message&quot;: &#x27;Please input your E-mail!&#x27;\n          }],&quot;placeholder&quot;:&quot;\u8BF7\u9009\u62E9...&quot;},\n          {&quot;name&quot;:&quot;\u63A5\u53E3\u83B7\u53D6\u4E0B\u62C9\u6570\u636E&quot;,&quot;type&quot;:&quot;select&quot;,&quot;field&quot;:&quot;name&quot;,&quot;validate&quot;: [{\n            &quot;required&quot;: true, &quot;message&quot;: &#x27;Please input your E-mail!&#x27;\n          }],&quot;dictId&quot;:&quot;resName&quot;,&quot;dictApi&quot;:{apiName:&quot;getResName&quot;},&quot;placeholder&quot;:&quot;\u8BF7\u9009\u62E9...&quot;},\n          {&quot;name&quot;:&quot;\u65E0\u5B57\u5178\u9879&quot;,&quot;type&quot;:&quot;select&quot;,&quot;field&quot;:&quot;sex&quot;,&quot;placeholder&quot;:&quot;\u8BF7\u9009\u62E9...&quot;,&quot;defaultValue&quot;:&quot;\u7BEE\u7403&quot;,&quot;options&quot;:[&quot;\u7BEE\u7403&quot;,&quot;\u8DB3\u7403&quot;,&quot;\u4E52\u4E53\u7403&quot;]},\n          {&quot;type&quot;:&quot;treeSelect&quot;,&quot;name&quot;:&quot;treeSelect1&quot; ,&quot;field&quot;:&quot;themeType&quot;,dictId:&quot;themeType&quot;,dictApi:{apiName:&#x27;flglData&#x27;},&quot;defaultValue&quot;:&quot;\u5E38\u9A7B\u4EBA\u53E3&quot;,&quot;validate&quot;: [{\n            &quot;required&quot;: true, &quot;message&quot;: &#x27;\u4E0D\u80FD\u4E3A\u7A7A!&#x27;\n          }]},\n          {&quot;name&quot;:&quot;\u90AE\u7BB1&quot;,&quot;type&quot;:&quot;input&quot;,&quot;field&quot;:&quot;email&quot;,&quot;defaultValue&quot;:&quot;tiangb@fable.cn&quot;,\n            &quot;validate&quot;: [{\n              &quot;type&quot;: &#x27;email&#x27;, &quot;message&quot;: &#x27;The input is not valid E-mail!&#x27;\n            },\n              {\n                &quot;required&quot;: true, &quot;message&quot;: &#x27;Please input your E-mail!&#x27;\n              }]},\n          {&quot;name&quot;:&quot;checkbox&quot;,&quot;type&quot;:&quot;checkbox&quot;,&quot;field&quot;:&quot;sports&quot;,&quot;options&quot;:[&quot;\u7BEE\u7403&quot;,&quot;\u8DB3\u7403&quot;,&quot;\u4E52\u4E53\u7403&quot;],&quot;defaultValue&quot;:[&quot;\u7BEE\u7403&quot;,&quot;\u4E52\u4E53\u7403&quot;]},\n          {&quot;name&quot;:&quot;switch&quot;,&quot;type&quot;:&quot;switch&quot;,&quot;field&quot;:&quot;switch&quot;},\n          {&quot;name&quot;:&quot;radio&quot;,&quot;type&quot;:&quot;radio&quot;,&quot;field&quot;:&quot;radio&quot;,&quot;options&quot;:[&quot;\u7BEE\u7403&quot;,&quot;\u8DB3\u7403&quot;,&quot;\u4E52\u4E53\u7403&quot;],&quot;defaultValue&quot;:&quot;\u8DB3\u7403&quot;},\n          {&quot;name&quot;:&quot;radio1&quot;,&quot;type&quot;:&quot;radio1&quot;,&quot;field&quot;:&quot;radio1&quot;,&quot;options&quot;:[{&quot;value&quot;:&quot;baskeball&quot;,&quot;key&quot;:&quot;\u7BEE\u7403\u738B\u5B50&quot;},{&quot;value&quot;:&quot;football&quot;,&quot;key&quot;:&quot;\u8DB3\u7403&quot;},{&quot;value&quot;:&quot;football&quot;,&quot;key&quot;:&quot;\u8DB3\u7403&quot;}],&quot;defaultValue&quot;:&quot;football&quot;},\n          {&quot;name&quot;:&quot;TimePicker&quot;,&quot;type&quot;:&quot;timePicker&quot;,&quot;field&quot;:&quot;timePicker&quot;,&quot;defaultValue&quot;:&quot;12:40&quot;,&quot;help&quot;:&quot;\u8BF7\u586B\u5199\u4FE1\u606F&quot;},\n          {&quot;name&quot;:&quot;rangePicker&quot;,&quot;type&quot;:&quot;rangePicker&quot;,&quot;field&quot;:&quot;rangePicker&quot;},\n\n          {&quot;type&quot;:&quot;treeSelect&quot;,&quot;name&quot;:&quot;\u4E3B\u9898\u5206\u7C7B&quot;,props:{onSelect:()=&gt;{\n            alert(123123);\n          }} ,&quot;field&quot;:&quot;themeType&quot;,dictId:&quot;themeType&quot;,dictApi:{apiName:&#x27;flglDataTree&#x27;,body:{categoryType:1}}},\n          {&quot;type&quot;:&quot;treeSelect&quot;,&quot;name&quot;:&quot;\u90E8\u95E8\u5206\u7C7B&quot; ,&quot;field&quot;:&quot;departmentType&quot;,dictId:&quot;departmentType&quot;,dictApi:{apiName:&#x27;flglDataTree&#x27;,body:{categoryType:2}}},\n          {&quot;name&quot;:&quot;\u63A5\u53E3\u6587\u6863\u4E0A\u4F20&quot;,&quot;type&quot;:&quot;upload&quot;,&quot;field&quot;:&quot;apiDoc1&quot;,props:{multiple:true,action: Global.server+&#x27;fileUpload/uploadFile&#x27;,}},\n          {&quot;type&quot;:&quot;input&quot;,&quot;name&quot;:&quot;\u65B9\u6CD5&quot; ,&quot;field&quot;:&quot;methods&quot;,&quot;validate&quot;: [{&quot;required&quot;: true, &quot;message&quot;: &#x27;Please input !&#x27;}]},\n          {&quot;name&quot;:&quot;\u8BF7\u6C42\u65B9\u6CD5&quot;,&quot;type&quot;:&quot;select&quot;,&quot;field&quot;:&quot;requestMode&quot;,&quot;dictId&quot;:&quot;requestMode&quot;,&quot;placeholder&quot;:&quot;\u8BF7\u9009\u62E9...&quot;},\n        ]\n      }\n      ]\n    }\n\n    return &lt;div style={{width:&#x27;100%&#x27;,height:&#x27;100%&#x27;}}&gt;\n\t\t\t&lt;AiForm fluid={false} config={config}/&gt;\n\t\t&lt;/div&gt;\n  }\n}\nAiFormPageDemo = connect(&quot;aiForm&quot;)(AiFormPageDemo)\n\ncallback(&quot;aiFormPageDemo&quot;)((arg,callback)=&gt;{\n  callback({\n    &quot;success&quot;: true,\n    &quot;data&quot;:&lt;AiFormPageDemo id=&quot;inst1&quot;/&gt;\n  })\n})\n' } }),
					_react2["default"].createElement(
						'h4',
						null,
						'\u4E09\uFF0C\u901A\u8FC7\u8868\u5355\u8DEF\u7531\u4F7F\u7528\u8868\u5355\u7EC4\u4EF6\uFF08\u4E0D\u63A8\u8350\uFF09'
					),
					_react2["default"].createElement(
						'div',
						{ onClick: this.onClickFormRouter.bind(this), className: 'p' },
						'\u70B9\u51FB\u67E5\u770B\u4E0D\u63A8\u8350\u5185\u5BB9'
					),
					state.showRouter && _react2["default"].createElement(
						'div',
						null,
						'\u65B0\u5EFA\u8868\u5355\u8DEF\u7531\u9875\u9762\u914D\u7F6E\u6587\u4EF6\uFF1ApageArgs/aiFormBaseDemo.js,\u7F16\u8BD1\u540E\uFF0C\u901A\u8FC7\u7F51\u5740"...#/aiForm/aiFormBaseDemo",\u67E5\u770B\u5230\u8868\u5355\u9875\u9762\uFF1B',
						_react2["default"].createElement('pre', { dangerouslySetInnerHTML: { __html: '//pageArgs/aiFormBaseDemo.js\nimport React from &#39;react&#39;;\nimport {Button,Form,Input,Icon,DatePicker,InputNumber} from &#39;antFB&#39;;\nimport callback from &#39;../core/jsonp&#39;;\nimport {Global} from &#39;../core/global&#39;;\n\nconst FormItem = Form.Item;\n\ncallback(&quot;aiFormBaseDemo&quot;)((args,callback)=&gt;{\n\tlet target = args.target;\n\tlet getFieldDecorator = target.props.form.getFieldDecorator;\n\tlet server = &quot;http://192.168.80.11:8081/api/&quot;;\n\tcallback({\n\t\t&quot;success&quot;: true,\n\t\t&quot;data&quot;:[{\n\t\t\t\t\t&quot;title&quot;:&quot;\u6211\u662F\u680F\u76EE\u4E00&quot;,\n\t\t\t\t\t&quot;column&quot;:3, \n\t\t\t\t\t&quot;labelCol&quot;:8,\n\t\t\t\t\t&quot;wrapperCol&quot;:16,\n\t\t\t\t\t&quot;showTitle&quot;:true,\n\t\t\t\t\t&quot;buttonConfigs&quot;:{\n\t\t\t\t\t\t&quot;buttons&quot;:[\n\t\t\t\t\t\t\t{&quot;type&quot;:&quot;button&quot;,&quot;value&quot;:&quot;\u8FD4\u56DE&quot;,&quot;field&quot;:&quot;back&quot;,props:{style:{float:&quot;right&quot;}}},\n\t\t\t\t\t\t\t{&quot;type&quot;:&quot;button&quot;,&quot;value&quot;:&quot;\u786E\u5B9A&quot;,&quot;field&quot;:&quot;submit&quot;,props:{style:{float:&quot;right&quot;,backgroundColor:&quot;red&quot;},btnType:&quot;primary&quot;,htmlType:&quot;submit&quot;}},\n\t\t\t\t\t\t]\n\t\t\t\t\t},\n\t\t\t\t\t&quot;data&quot;:[\n\t\t\t\t\t\t{&quot;name&quot;:&quot;\u670D\u52A1\u7C7B\u578B&quot;,&quot;type&quot;:&quot;select&quot;,&quot;column&quot;:1,&quot;labelCol&quot;:8,&quot;wrapperCol&quot;:16,&quot;field&quot;:&quot;serviceType&quot;,&quot;dictId&quot;:&quot;serviceType&quot;,&quot;defaultValue&quot;:&quot;1&quot;,value:&quot;2&quot;,&quot;placeholder&quot;:&quot;\u8BF7\u9009\u62E9...&quot;},\n\t\t\t\t\t\t{&quot;name&quot;:&quot;\u5B57\u5178\u9879\u83B7\u53D6\u4E0B\u62C9\u6570\u636E&quot;,&quot;type&quot;:&quot;select&quot;,&quot;field&quot;:&quot;boxs&quot;,&quot;dictId&quot;:&quot;21&quot;,&quot;validate&quot;: [{\n\t\t\t\t\t\t\t&quot;required&quot;: true, &quot;message&quot;: &#39;Please input your E-mail!&#39;\n\t\t\t\t\t\t}],&quot;placeholder&quot;:&quot;\u8BF7\u9009\u62E9...&quot;},\n\t\t\t\t\t\t{&quot;name&quot;:&quot;\u63A5\u53E3\u83B7\u53D6\u4E0B\u62C9\u6570\u636E&quot;,&quot;type&quot;:&quot;select&quot;,&quot;field&quot;:&quot;name&quot;,&quot;validate&quot;: [{\n\t\t\t\t\t\t\t&quot;required&quot;: true, &quot;message&quot;: &#39;Please input your E-mail!&#39;\n\t\t\t\t\t\t}],&quot;dictId&quot;:&quot;resName&quot;,&quot;dictApi&quot;:{apiName:&quot;getResName&quot;},&quot;placeholder&quot;:&quot;\u8BF7\u9009\u62E9...&quot;},\n\t\t\t\t\t\t{&quot;name&quot;:&quot;\u65E0\u5B57\u5178\u9879&quot;,&quot;type&quot;:&quot;select&quot;,&quot;field&quot;:&quot;sex&quot;,&quot;placeholder&quot;:&quot;\u8BF7\u9009\u62E9...&quot;,&quot;defaultValue&quot;:&quot;\u7BEE\u7403&quot;,&quot;options&quot;:[&quot;\u7BEE\u7403&quot;,&quot;\u8DB3\u7403&quot;,&quot;\u4E52\u4E53\u7403&quot;]},\n\t\t\t\t\t\t{&quot;type&quot;:&quot;treeSelect&quot;,&quot;name&quot;:&quot;treeSelect1&quot; ,&quot;field&quot;:&quot;themeType&quot;,dictId:&quot;themeType&quot;,dictApi:{apiName:&#39;flglData&#39;},&quot;defaultValue&quot;:&quot;\u5E38\u9A7B\u4EBA\u53E3&quot;,&quot;validate&quot;: [{\n\t\t\t\t\t\t\t&quot;required&quot;: true, &quot;message&quot;: &#39;\u4E0D\u80FD\u4E3A\u7A7A!&#39;\n\t\t\t\t\t\t}]},\n\t\t\t\t\t\t{&quot;name&quot;:&quot;\u90AE\u7BB1&quot;,&quot;type&quot;:&quot;input&quot;,&quot;field&quot;:&quot;email&quot;,&quot;defaultValue&quot;:&quot;tiangb@fable.cn&quot;,\n\t\t\t\t\t\t\t&quot;validate&quot;: [{\n\t\t\t\t\t\t\t\t&quot;type&quot;: &#39;email&#39;, &quot;message&quot;: &#39;The input is not valid E-mail!&#39;\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t&quot;required&quot;: true, &quot;message&quot;: &#39;Please input your E-mail!&#39;\n\t\t\t\t\t\t\t\t}]},\n\t\t\t\t\t\t{&quot;name&quot;:&quot;checkbox&quot;,&quot;type&quot;:&quot;checkbox&quot;,&quot;field&quot;:&quot;sports&quot;,&quot;options&quot;:[&quot;\u7BEE\u7403&quot;,&quot;\u8DB3\u7403&quot;,&quot;\u4E52\u4E53\u7403&quot;],&quot;defaultValue&quot;:[&quot;\u7BEE\u7403&quot;,&quot;\u4E52\u4E53\u7403&quot;]},\n\t\t\t\t\t\t{&quot;name&quot;:&quot;switch&quot;,&quot;type&quot;:&quot;switch&quot;,&quot;field&quot;:&quot;switch&quot;},\n\t\t\t\t\t\t{&quot;name&quot;:&quot;radio&quot;,&quot;type&quot;:&quot;radio&quot;,&quot;field&quot;:&quot;radio&quot;,&quot;options&quot;:[&quot;\u7BEE\u7403&quot;,&quot;\u8DB3\u7403&quot;,&quot;\u4E52\u4E53\u7403&quot;],&quot;defaultValue&quot;:&quot;\u8DB3\u7403&quot;},\n\t\t\t\t\t\t{&quot;name&quot;:&quot;radio1&quot;,&quot;type&quot;:&quot;radio1&quot;,&quot;field&quot;:&quot;radio1&quot;,&quot;options&quot;:[{&quot;value&quot;:&quot;baskeball&quot;,&quot;key&quot;:&quot;\u7BEE\u7403\u738B\u5B50&quot;},{&quot;value&quot;:&quot;football&quot;,&quot;key&quot;:&quot;\u8DB3\u7403&quot;},{&quot;value&quot;:&quot;football&quot;,&quot;key&quot;:&quot;\u8DB3\u7403&quot;}],&quot;defaultValue&quot;:&quot;football&quot;},\n\t\t\t\t\t\t{&quot;name&quot;:&quot;TimePicker&quot;,&quot;type&quot;:&quot;timePicker&quot;,&quot;field&quot;:&quot;timePicker&quot;,&quot;defaultValue&quot;:&quot;12:40&quot;,&quot;help&quot;:&quot;\u8BF7\u586B\u5199\u4FE1\u606F&quot;},\n\t\t\t\t\t\t{&quot;name&quot;:&quot;rangePicker&quot;,&quot;type&quot;:&quot;rangePicker&quot;,&quot;field&quot;:&quot;rangePicker&quot;},\n\t\t\t\t\t\t{&quot;value&quot;: config=&gt;&lt;FormItem\n\t\t\t\t\t\t\tlabel=&#39;\u59D3\u540D&#39;\n\t\t\t\t\t\t\tlabelCol={{ span: 8}}\n\t\t\t\t\t\t\twrapperCol={{ span: 14 }}\n\t\t\t\t\t\t\thasFeedback\n\t\t\t\t\t\t\thelp=&quot;\u6211\u662F\u63D0\u793A\u4FE1\u606F&quot;\n\t\t\t\t\t\t&gt;\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\tgetFieldDecorator(&quot;ccc&quot;, {\n\t\t\t\t\t\t\t\t\tinitialValue:&quot;\u4F60\u597D\uFF0C\u6211\u662F\u81EA\u5B9A\u4E49\u6807\u7B7E&quot;\n\t\t\t\t\t\t\t\t})(\n\t\t\t\t\t\t\t\t\t&lt;Input   name=&quot;username&quot;/&gt;\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t&lt;/FormItem&gt;\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{&quot;type&quot;:&quot;treeSelect&quot;,&quot;name&quot;:&quot;\u4E3B\u9898\u5206\u7C7B&quot;,props:{onSelect:()=&gt;{\n\t\t\t\t\t\t\talert(123123);\n\t\t\t\t\t\t}} ,&quot;field&quot;:&quot;themeType&quot;,dictId:&quot;themeType&quot;,dictApi:{apiName:&#39;flglDataTree&#39;,body:{categoryType:1}}},\n\t\t\t\t\t\t{&quot;type&quot;:&quot;treeSelect&quot;,&quot;name&quot;:&quot;\u90E8\u95E8\u5206\u7C7B&quot; ,&quot;field&quot;:&quot;departmentType&quot;,\n\t\t\t\t\t\tdictId:&quot;departmentType&quot;,dictApi:{apiName:&#39;flglDataTree&#39;,body:{categoryType:2}}},\n\t\t\t\t\t\t{&quot;name&quot;:&quot;\u63A5\u53E3\u6587\u6863\u4E0A\u4F20&quot;,&quot;type&quot;:&quot;upload&quot;,&quot;field&quot;:&quot;apiDoc1&quot;,\n\t\t\t\t\t\tprops:{multiple:true,action: server+&#39;fileUpload/uploadFile&#39;,}},\n\t\t\t\t\t\t{&quot;type&quot;:&quot;input&quot;,&quot;name&quot;:&quot;\u65B9\u6CD5&quot; ,&quot;field&quot;:&quot;methods&quot;,&quot;validate&quot;: [{&quot;required&quot;: true, &quot;message&quot;: &#39;Please input !&#39;}]},\n\t\t\t\t\t\t{&quot;name&quot;:&quot;\u8BF7\u6C42\u65B9\u6CD5&quot;,&quot;type&quot;:&quot;select&quot;,&quot;field&quot;:&quot;requestMode&quot;,&quot;dictId&quot;:&quot;requestMode&quot;,&quot;placeholder&quot;:&quot;\u8BF7\u9009\u62E9...&quot;},\n\t\t\t\t\t ]\n\t\t\t\t}\n\t\t\t]\n\t})\n})' } }),
						'\u8868\u5355\u8DEF\u7531\u7684\u9ED8\u8BA4\u914D\u7F6E',
						_react2["default"].createElement('pre', { dangerouslySetInnerHTML: { __html: '//entries/index.dev.js\n\t\t\t\t\t\t...\n\t\t\t\t\t\t&lt;Route path=&quot;aiForm/:config&quot; component={ AiFormContainer }/&gt; //\u6CA1\u6709\u52A8\u6001\u8BE6\u60C5\u5185\u5BB9\u7684\u8868\u5355\n\t\t\t\t\t\t&lt;Route path=&quot;aiForm/:config/:contentConfig&quot; component={ AiFormContainer }/&gt;\t//\u5177\u6709\u52A8\u6001\u8BE6\u60C5\u5185\u5BB9\u7684\u8868\u5355\n\t\t\t\t\t\t&lt;Route path=&quot;aiForm/:aiFormId/:config/:contentConfig&quot; onEnter={()=&gt;{//dataList\u4E13\u7528\u8868\u5355\uFF08\u4E0D\u63A8\u8350\uFF09\n\t\t\t\t\t\t\t\twindow.lastAiFormPath = Global.getState().routing.path;\n\t\t\t\t\t\t\t}} onLeave={()=&gt;{\n\t\t\t\t\t\t\t\tvar names = window.lastAiFormPath.match(//aiForm/(w*)//)\n\t\t\t\t\t\t\t\tif(names){\n\t\t\t\t\t\t\t\t\tGlobal.mark({\n\t\t\t\t\t\t\t\t\t\taiForm:{\n\t\t\t\t\t\t\t\t\t\t\taFBCD:null\n\t\t\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t\t\tdataList:{\n\t\t\t\t\t\t\t\t\t\t\t[names[1]]:{\n\t\t\t\t\t\t\t\t\t\t\t\tdetailMsgDataApi:null\n\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t},&#39;route_clear_datalist&#39;)\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\twindow.lastAiFormPath=undefined;\n\t\t\t\t\t\t\t}} component={ AiFormCommonDemo }/&gt;\n\t\t\t\t\t\t...\n\t' } })
					)
				),
				_react2["default"].createElement(
					'h3',
					null,
					'AiForm\u7EC4\u4EF6\u53C2\u6570'
				),
				_react2["default"].createElement(
					'div',
					{ className: 'p' },
					_react2["default"].createElement(_table2["default"], { pagination: false, columns: columns, dataSource: dataSource })
				)
			);
		};

		return AiFormDoc;
	}(_react.Component);

	AiFormDoc = (0, _component2["default"])('aiFormDoc')(AiFormDoc);

	(0, _jsonp2["default"])("aiFormDoc")(function (arg, callback) {
		callback({
			"success": true,
			"data": _react2["default"].createElement(AiFormDoc, { id: 'inst' })
		});
	});

/***/ }
]);