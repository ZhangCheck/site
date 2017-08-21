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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var Router = function (_Component) {
					(0, _inherits3["default"])(Router, _Component);

					function Router(props) {
									(0, _classCallCheck3["default"])(this, Router);
									return (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));
					}

					Router.prototype.render = function render() {
									var dataSource = [{
													key: 'config.afterSave',
													name: 'config.afterSave',
													age: 'string|function',
													address: '分步处理提交完成后跳转的路由名，或完成后的回调函数'
									}, {
													key: 'config.steps',
													name: 'config.steps',
													age: 'array',
													address: '分步配置数据，每一项为一个分步页面'
									}, {
													key: 'config.steps[x].type',
													name: 'config.steps[x].type',
													age: 'string|function|dom',
													address: '当前分步页面的类型，可选值"aiForm","dataList", 为function或dom时为自定义分步'
									}, {
													key: 'config.steps[x].configStepApi',
													name: 'config.steps[x].configStepApi',
													age: 'object',
													address: '接口当前分步的配置文件，当config.steps[x].type为"aiForm"，接口返回aiForm组件的配置文件，为"dataList"时;返回dataList组件配置文件'
									}, {
													key: 'config.steps[x].number',
													name: 'config.steps[x].number',
													age: 'string',
													address: '当前分页序号(?)'
									}, {
													key: 'config.steps[x].id',
													name: 'config.steps[x].id',
													age: "string",
													address: '当前分页id，当config.steps[x].type为"aiForm"或"dataList"时，这个id也是aiForm组件或dataList组件的id'
									}, {
													key: 'footer',
													name: 'footer',
													age: "array",
													address: '底部操作栏配置'
									}, {
													key: 'footer[x]',
													name: 'footer[x]',
													age: "string|function|dom",
													address: '\u7C7B\u578B\u4E3Astring\u65F6\uFF0C\u53EF\u9009\u503C\u6709"next","cancel"\n\u7C7B\u578B\u4E3Afunction|dom\u65F6\u4E3A\u81EA\u5B9A\u4E49\u5185\u5BB9'
									}, {
													key: 'validate',
													name: 'validate',
													age: "function",
													address: '\u5F53\u524D\u5206\u6B65\u5B8C\u6210\u65F6\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u8FD4\u56DE\u503C\u4E3Atrue\u8FDB\u5165\u4E0B\u4E00\u6B65\uFF0C\u8FD4\u56DEflase\u65F6\u505C\u5728\u5F53\u524D\u9875\u9762\n\u6700\u540E\u4E00\u6B65\u65F6\uFF0C\u8FD4\u56DE\u63A5\u53E3\u914D\u7F6E\u5BF9\u8C61\u65F6\u63D0\u4EA4\u6240\u6709\u6570\u636E\uFF0C\u8FD4\u56DEfalse\u65F6\u505C\u5728\u6700\u540E\u4E00\u6B65'
									}];

									var columns = [{
													title: '参数名',
													dataIndex: 'name',
													key: 'name',
													width: 200,
													className: 'tbLeft'
									}, {
													title: '类型',
													dataIndex: 'age',
													key: 'age',
													width: 100,
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
																	'\u8DEF\u7531'
													),
													_react2["default"].createElement(
																	'div',
																	{ className: 'p' },
																	_react2["default"].createElement(
																					'div',
																					null,
																					'\u9879\u76EE\u4E2D\u9875\u9762\u5BFC\u822A\u7531\u8DEF\u7531\u7BA1\u7406\u5668(react-router)\u7BA1\u7406'
																	),
																	_react2["default"].createElement(
																					'h4',
																					null,
																					'\u8DEF\u7531\u914D\u7F6E\u6587\u4EF6'
																	),
																	_react2["default"].createElement('pre', { style: { background: '#fff' }, dangerouslySetInnerHTML: { __html: '//entries/index.dev.js\n&lt;Router history={ history }&gt;\n                &lt;Route path=&quot;/&quot; component={ App }&gt; //\u6240\u6709\u9875\u9762\u7684\u7956\u5B97\u7EA7\u5BB9\u5668\uFF0C\u6839\u636E\u9700\u8981\u7ED8\u5236\u767B\u5F55\u3001\u83DC\u5355\u3001\u5934\u5C3E\u6846\u67B6\u7B49\u5168\u5C40\u7EC4\u4EF6\n                    &lt;IndexRoute component={ Main }/&gt;         //\u9ED8\u8BA4\u8FDB\u5165\u9996\u9875\n                    &lt;Route path=&quot;main&quot; component={ Main }/&gt; //\u9996\u9875\u7531Main\u7C7B\u7ED8\u5236\u5904\u7406\n\n                    &lt;Route path=&quot;datalistV1/:config&quot; components={DataList1.DataListCon}&gt; //DataList\u8DEF\u7531\u6839\u5BB9\u5668\uFF0C\u52A0\u8F7DdataList\u603B\u914D\u7F6E\uFF0C\u8FD9\u6837\u5B50\u9875\u9762\u90FD\u53EF\u4EE5\u4F7F\u7528\u6811\u4E2D\u7684dataList\u6570\u636E\n                        &lt;Route path=&quot;list/:start/:page&quot; components={DataList1.List} /&gt;   //DataList\u5217\u8868\u9875\n                        &lt;Route path=&quot;edit/:id&quot;     components={DataList1.Edit} /&gt;        //DataList\u7F16\u8F91\u9875\n                        &lt;Route path=&quot;delete/:ids&quot;  components={DataList1.Delete} /&gt;      //DataList\u5220\u9664\u9875\uFF08\u5DF2\u505C\u7528)\n                        &lt;Route path=&quot;add/:id&quot;  components={DataList1.Add} /&gt;             //DataList\u65B0\u589E\u9875\uFF08\u5E26\u53C2\u6570\uFF0C\u4F20\u9012\u5F53\u524D\u884C\u4E3B\u952E)\n                        &lt;Route path=&quot;add&quot;  components={DataList1.Add} /&gt;                 //DataList\u65B0\u589E\u9875(\u4E0D\u5E26\u53C2\u6570)\n                        &lt;Route path=&quot;detail/:id&quot;   components={DataList1.Detail} /&gt;      //DataList\u8BE6\u60C5\u9875\n                    &lt;/Route&gt;\n\n                    \n                    &lt;Route path=&quot;datalist&quot; components={DataList.DataListCon}&gt;            //\u65E7\u7248DataList\u8DEF\u7531\uFF08\u5DF2\u505C\u7528)\n                        &lt;Route path=&quot;list/:config/:start/:page&quot; components={DataList.List} /&gt;\n                        &lt;Route path=&quot;edit/:dataListId/:id&quot;     components={DataList.Edit} /&gt;\n                        &lt;Route path=&quot;delete/:dataListId/:ids&quot;  components={DataList.Delete} /&gt;\n                        &lt;Route path=&quot;add/:dataListId/:id&quot;  components={DataList.Add} /&gt;\n                        &lt;Route path=&quot;detail/:dataListId/:id&quot;   components={DataList.Detail} /&gt;\n                    &lt;/Route&gt;\n                    \n                    &lt;Route path=&quot;steper/:config/:dataListId/:step&quot; component={ StepContainer }/&gt; //\u5206\u6B65\u8DEF\u7531\n                    &lt;Route path=&quot;steperV1/:config/:step&quot; onEnter={()=&gt;{\n                            window.lastStep = Global.getState().routing.path.match(/steperV1/(w*)//)[1];\n                        }} onLeave={()=&gt;{\n                            if(!Global.getState().routing.path.match(/steperV1/(w*)//)){\n                                StepContainerV1.clearAll(window.lastStep,true);\n                                window.lastStep=undefined;\n                            }\n                        }} component={ StepContainerV1 }/&gt;\n\n                    &lt;Route path=&quot;page/:page&quot; component={PageLoader} onLeave={()=&gt;{     //\u5B50\u9875\u9762\u8DEF\u7531\uFF0C\u53EF\u4EE5\u52A0\u8F7D\u4EFB\u4F55\u5B50\u9875\u9762\n                        Global.mark({\n                            pageLoader:null\n                        },&#x27;route_clear_pageLoader&#x27;)\n                    }}/&gt;    \n\n                    \n                    &lt;Route path=&quot;aiForm/:aiFormId/:config/:contentConfig&quot; onEnter={()=&gt;{ //DataList\u4F7F\u7528\u7684\u8868\u5355\u8DEF\u7531\uFF0C\u5176\u5B83\u8868\u5355\u8BF7\u4F7F\u7528page\u8DEF\u7531\n                            window.lastAiFormPath = Global.getState().routing.path;\n                        }} onLeave={()=&gt;{\n                            var names = window.lastAiFormPath.match(//aiForm/(w*)//)\n                            if(names){\n                                Global.mark({\n                                    aiForm:{\n                                        aFBCD:null\n                                    },\n                                    dataList:{\n                                        [names[1]]:{\n                                            detailMsgDataApi:null\n                                        }\n                                    }\n                                },&#x27;route_clear_datalist&#x27;)\n                            }\n                            window.lastAiFormPath=undefined;\n                        }} component={ AiFormCommonDemo }/&gt;\n                    \n                &lt;/Route&gt;\n            &lt;/Router&gt;\n' } })
													)
									);
					};

					return Router;
	}(_react.Component);

	Router = (0, _component2["default"])('Router')(Router);

	(0, _jsonp2["default"])("router")(function (arg, callback) {
					callback({
									"success": true,
									"data": _react2["default"].createElement(Router, { id: 'inst' })
					});
	});

/***/ }
]);