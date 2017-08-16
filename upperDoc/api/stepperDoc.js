webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(71);

	var _table = __webpack_require__(68);

	var _table2 = _interopRequireDefault(_table);

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

	var StepperDoc = function (_Component) {
	    (0, _inherits3["default"])(StepperDoc, _Component);

	    function StepperDoc(props) {
	        (0, _classCallCheck3["default"])(this, StepperDoc);
	        return (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));
	    }

	    StepperDoc.prototype.render = function render() {
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
	                'Stepper\u7EC4\u4EF6'
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
	                _react2["default"].createElement(
	                    _reactRouter.Link,
	                    { to: 'steperV1/steperConfigDemo/1' },
	                    '\u70B9\u51FB\u67E5\u770B\u5B9E\u4F8B'
	                ),
	                _react2["default"].createElement(
	                    'div',
	                    null,
	                    '\u5B9E\u4F8B\u603B\u914D\u7F6E'
	                ),
	                _react2["default"].createElement('pre', { dangerouslySetInnerHTML: { __html: '//pageArgs/steperConfigDemo.js\nimport React from &#x27;react&#x27;;\nimport {Button,Form,Input,Icon,DatePicker,InputNumber,Modal} from &#x27;antFB&#x27;;\nimport callback from &#x27;../core/jsonp&#x27;;\nimport ConnectDatasource from &#x27;../components/ConnectDatasource&#x27;;\nimport {Global} from &#x27;../core/global&#x27;;\nimport {saveSuccess} from &#x27;../interfaces&#x27;;\n\nconst FormItem = Form.Item;\n\ncallback(&quot;steperConfigDemo&quot;)((args,callback)=&gt;{\n    callback(\n        {\n            &quot;success&quot;: true,\n            &quot;data&quot;: {\n                &quot;afterSave&quot;:&quot;issue&quot;,\n                &quot;steps&quot;:[\n                    {\n                        &quot;type&quot;:&quot;datalist&quot;,\n                        &quot;configStepApi&quot;:&quot;steperDemoStep1&quot;,\n                        &quot;number&quot;:&quot;1&quot;,\n                        &quot;name&quot;:&quot;datalist\u9875\u9762&quot;,\n                        &quot;id&quot;:&quot;steperDemoStep1&quot;,\n                        &quot;footer&quot;:[()=&gt;{\n                            return &lt;Button&gt;\u6D4B\u8BD5\u8FDE\u63A5&lt;/Button&gt;;\n                        },&quot;next&quot;,&quot;cancel&quot;],\n                        &quot;validate&quot;:()=&gt;{\n                            let selected = Global.getState().dataList.steperDemoStep1.selectedRows\n                            let validate = selected&amp;&amp;selected.length&gt;0;\n                            if(!validate){\n                                Modal.warning({\n                                    title: &#x27;\u63D0\u793A&#x27;,\n                                    content: &#x27;\u8BF7\u9009\u62E9\u4E00\u4E2A\u6761\u76EE\uFF0C\u7136\u540E\u70B9\u51FB\u201D\u4E0B\u4E00\u6B65\u201C\u3002&#x27;,\n                                });\n                            }\n                            return validate;\n                        }\n                    },\n                    {\n                        &quot;type&quot;:&quot;aiForm&quot;,\n                        &quot;configStepApi&quot;:&quot;steperDemoStep2&quot;,\n                        &quot;number&quot;:&quot;3&quot;,\n                        &quot;name&quot;:&quot;aiForm\u9875\u9762&quot;,\n                        &quot;id&quot;:&quot;steperDemoStep2&quot;\n                    },\n                    {\n                        &quot;type&quot;:&lt;div style={{paddingLeft:30}}&gt;\u81EA\u5B9A\u4E49\u5185\u5BB9\uFF0C\u53EF\u4EE5\u653E\u4EFB\u4F55\u4E1C\u897F\uFF01\uFF01&lt;/div&gt;,\n                        &quot;configStepApi&quot;:&quot;steperDemoStep3&quot;,\n                        &quot;number&quot;:&quot;2&quot;,\n                        &quot;name&quot;:&quot;\u81EA\u5B9A\u4E49\u9875\u9762&quot;,\n                        &quot;id&quot;:&quot;steperDemoStep3&quot;,\n                        &quot;validate&quot;:()=&gt;{\n                            let apiConfig = {...saveSuccess,body:{...saveSuccess.body,data:&quot;anyThing&quot;}}\n                            return apiConfig;\n                        }\n                    }\n                    \n\n\n                ]\n            }\n        }\n    );\n})\n' } }),
	                _react2["default"].createElement(
	                    'div',
	                    null,
	                    '\u5B9E\u4F8B\u6B65\u9AA41(AiForm)'
	                ),
	                _react2["default"].createElement('pre', { dangerouslySetInnerHTML: { __html: '//pageArgs/steperDemoStep1.js\nimport React, { Component, PropTypes } from &#x27;react&#x27;;\nimport connect from &#x27;../core/component&#x27;;\nimport callback from &#x27;../core/jsonp&#x27;;\nimport {Button} from &#x27;antFB&#x27;;\n\ncallback(&quot;steperDemoStep1&quot;)((args,callback)=&gt;{\n    callback({\n    &quot;success&quot;: true,\n    &quot;data&quot;: {\n        &quot;id&quot;:&quot;dlDemo&quot;,\n        &quot;title&quot;:&quot;\u8FD9\u662FDataList\u7EC4\u4EF6\u9875\u9762\uFF01\uFF01\uFF01\uFF01\uFF01&quot;,\n        &quot;headConfig&quot;:[\n            {&quot;headName&quot;:&lt;h4 style={{paddingLeft:20,paddingTop:10,paddingBottom:10}}&gt;\u5217\u8868\u5934&lt;/h4&gt;}\n        ],\n\n        &quot;buttonConfigs&quot;:[\n            {&quot;buttonName&quot;:&quot;add&quot;},\n            {&quot;buttonName&quot;:&quot;search&quot;},\n            {&quot;buttonName&quot;:&quot;delete&quot;},\n            {&quot;buttonName&quot;:&quot;edit&quot;}\n        ],\n        &quot;searchConfig&quot;:{\n            &quot;data&quot;:[{\n                &quot;column&quot;:3,\n                &quot;data&quot;:[\n                    /**\n                     * props:{type:primary}\n                     */\n                    {&quot;type&quot;:&quot;input&quot;,&quot;name&quot;:&quot;\u7535\u5F71&quot; ,&quot;field&quot;:&quot;movie&quot; },\n                    {&quot;type&quot;:&quot;button&quot;,&quot;value&quot;:&quot;\u67E5\u8BE2&quot; ,&quot;pageName&quot;:&quot;search&quot;,props:{type:&quot;primary&quot;}, &quot;htmlType&quot;:&quot;submit&quot;}\n                ]\n            }],\n            &quot;body&quot;:{apiName:&#x27;getSearchData&#x27;}\n        },\n        &quot;table&quot;:{\n            &quot;primarykey&quot;:&quot;number&quot;,\n            &quot;clounms&quot;:[\n                {\n                    &quot;title&quot;:&quot;\u5E8F\u53F7&quot;,\n                    &quot;dataIndex&quot;: &quot;number&quot;,\n                    &quot;key&quot;: &quot;number&quot;\n                },\n                {\n                    &quot;title&quot;:&quot;\u540D\u79F0&quot;,\n                    &quot;dataIndex&quot;: &quot;name&quot;,\n                    &quot;key&quot;: &quot;name&quot;\n                },\n                {\n                    &quot;title&quot;:&quot;\u82F1\u6587\u540D\u79F04&quot;,\n                    &quot;dataIndex&quot;: &quot;englishName&quot;,\n                    &quot;key&quot;: &quot;englishName&quot;\n                },\n                {\n                    &quot;title&quot;:&quot;\u7F16\u7801&quot;,\n                    &quot;dataIndex&quot;: &quot;unicode&quot;,\n                    &quot;key&quot;: &quot;unicode&quot;\n                },\n                {\n                    &quot;title&quot;:&quot;\u5907\u6CE8&quot;,\n                    &quot;dataIndex&quot;: &quot;remarks&quot;,\n                    &quot;key&quot;: &quot;remarks&quot;\n                },\n                {\n                    &quot;title&quot;:&quot;\u64CD\u4F5C&quot;,\n                    &quot;dataIndex&quot;: &quot;operation&quot;,\n                    &quot;key&quot;: &quot;operation&quot;,\n                    &quot;render&quot;:[&quot;edit&quot;,&quot;delete&quot;,&quot;detail&quot;,config=&gt;&lt;Button&gt;test&lt;/Button&gt;]\n                }\n            ],\n            &quot;body&quot;:{apiName:&#x27;datalistBodyDemo&#x27;}\n        },\n        &quot;list&quot;:{\n            &quot;view&quot;:null,\n            &quot;listApi&quot;:null,\n            &quot;saveApi&quot;:null\n        },\n        &quot;add&quot;:{\n            &quot;data&quot;:[{\n                &quot;column&quot;:3,\n                &quot;data&quot;:[\n                    {&quot;type&quot;:&quot;input&quot;,&quot;name&quot;:&quot;\u7535\u5F71&quot; ,&quot;field&quot;:&quot;movie&quot; },\n                    {&quot;type&quot;:&quot;button&quot;,&quot;value&quot;:&quot;\u53D6\u6D88&quot;,&quot;pageName&quot;:&quot;add&quot; ,&quot;btnType&quot;:&quot;primary&quot;, &quot;htmlType&quot;:&quot;button&quot; },\n                    {&quot;type&quot;:&quot;button&quot;,&quot;value&quot;:&quot;\u786E\u5B9A&quot; ,&quot;pageName&quot;:&quot;add&quot; ,&quot;btnType&quot;:&quot;primary&quot;, &quot;htmlType&quot;:&quot;submit&quot; }\n                ]\n            }],\n            &quot;submitApi&quot;:{apiName:&quot;apiName&quot;},\n            &quot;onAddSubmitApi&quot;:{&quot;apiName&quot;:&quot;getAddData&quot;}\n        },\n        &quot;edit&quot;:{\n            // &quot;data&quot;:[{\n            //     &quot;column&quot;:3,\n            //     &quot;data&quot;:[\n            //         {&quot;type&quot;:&quot;input&quot;,&quot;name&quot;:&quot;\u7535\u5F71&quot; ,&quot;field&quot;:&quot;movie&quot; },\n            //         {&quot;type&quot;:&quot;button&quot;,&quot;value&quot;:&quot;\u53D6\u6D88&quot;,&quot;pageName&quot;:&quot;edit&quot; ,&quot;btnType&quot;:&quot;primary&quot;, &quot;htmlType&quot;:&quot;button&quot; },\n            //         {&quot;type&quot;:&quot;button&quot;,&quot;value&quot;:&quot;\u786E\u5B9A&quot; ,&quot;pageName&quot;:&quot;edit&quot; ,&quot;btnType&quot;:&quot;primary&quot;, &quot;htmlType&quot;:&quot;submit&quot; }\n            //     ]\n            // }],\n            &quot;initData&quot;:{\n              data:{apiName:&quot;datalistEditDemo&quot;}\n            },\n            &quot;onUpdateSubmitApi&quot;:{&quot;apiName&quot;:&quot;getUpdateData&quot;}\n        },\n        &quot;delete&quot;:{\n            &quot;body&quot;:{apiName:&#x27;getDeleteData&#x27;}\n        },\n        &quot;detail&quot;:{\n            &quot;data&quot;:[{\n                &quot;column&quot;:3,\n                &quot;data&quot;:[\n                    {&quot;type&quot;:&quot;input&quot;,&quot;name&quot;:&quot;\u7535\u5F71&quot; ,&quot;field&quot;:&quot;movie&quot; },\n                    {&quot;type&quot;:&quot;button&quot;,&quot;value&quot;:&quot;\u53D6\u6D88&quot;,&quot;pageName&quot;:&quot;detail&quot; ,&quot;btnType&quot;:&quot;primary&quot;, &quot;htmlType&quot;:&quot;button&quot; },\n                    {&quot;type&quot;:&quot;button&quot;,&quot;value&quot;:&quot;\u786E\u5B9A&quot; ,&quot;pageName&quot;:&quot;detail&quot; ,&quot;btnType&quot;:&quot;primary&quot;, &quot;htmlType&quot;:&quot;submit&quot; }\n                ]\n            }],\n            &quot;body&quot;:{apiName:&#x27;getDetailMsgData&#x27;}\n        },\n        &quot;check&quot;:{\n            &quot;view&quot;:null,\n            &quot;checkApi&quot;:null\n        }\n    }\n})})\n' } }),
	                _react2["default"].createElement(
	                    'div',
	                    null,
	                    '\u5B9E\u4F8B\u6B65\u9AA42 \uFF08DataList)'
	                ),
	                _react2["default"].createElement('pre', { dangerouslySetInnerHTML: { __html: '//pageArgs/steperDemoStep2.js\nimport React from &#x27;react&#x27;;\nimport {Button,Form,Input,Icon,DatePicker,InputNumber,Modal} from &#x27;antFB&#x27;;\nimport callback from &#x27;../core/jsonp&#x27;;\nimport {Global} from &#x27;../core/global&#x27;;\nimport history from &#x27;../core/history&#x27;;\n\nconst FormItem = Form.Item;\n\ncallback(&quot;steperDemoStep2&quot;)((args,callback)=&gt;{\n    let target = args.target;\n    let getFieldDecorator = target.props.form.getFieldDecorator;\n    \n    let state =  Global.getState();\n    \n    //\u5404\u79CD\u63D0\u793A\uFF0C\u5982\u201D\u5E94\u8BE5\u4ECE\u524D\u4E00\u6B65\u5F00\u59CB\u7684\u63D0\u793A\u201C\n    let lastStepState = state.dataList.steperDemoStep1;\n    if(!lastStepState){\n        Modal.warning({\n            title: &#x27;\u63D0\u793A&#x27;,\n            content: &#x27;\u4E0A\u4E00\u6B65\u6216\u524D\u51E0\u6B65\u6CA1\u6709\u5B8C\u6210\uFF0C\u8BF7\u8FD4\u56DE\u7B2C\u4E00\u6B65\u91CD\u65B0\u5F00\u59CB\u3002&#x27;,\n            onOk:()=&gt;{\n                /* */\n                setTimeout(()=&gt;{\n                    Global.mark({aiForm:{\n                        steperDemoStep2:null\n                    }}) \n                    history.push(state.routing.path.replace(//d+/,&#x27;/1&#x27;));\n                },500)\n                \n            }\n        });\n        return;\n    }\n    \n    callback({\n        &quot;success&quot;: true,\n        &quot;data&quot;:[\n                \n                {\n                    &quot;title&quot;:&quot;\u6211\u662F\u680F\u76EE\u4E00&quot;,     //\u680F\u76EE\u6807\u9898\n                    &quot;column&quot;:3,   //  form\u663E\u793A\u5217\u6570\uFF0C\u9996\u5148\u8BFB\u53D6\u6BCF\u4E2A\u6807\u7B7E\u7684\u8BBE\u7F6Ecolumn\u503C\uFF0C\u4E0D\u5B58\u5728\u624D\u4F1A\u8BFB\u53D6\u603B\u7684column,\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u9ED8\u8BA4\u5C55\u793A\u4E00\u5217\n                    &quot;labelCol&quot;:8,  // form\u6807\u5934name\u5BBD\u5EA6\n                    &quot;wrapperCol&quot;:16,  //form\u663E\u793A\u6846\u5BBD\u5EA6\n                    &quot;showTitle&quot;:true, //\u662F\u5426\u5C55\u793A\u680F\u76EE\u6807\u9898\n                    &quot;buttonConfigs&quot;:{\n                        &quot;buttons&quot;:[\n                           \n                        ]\n                    },\n                    &quot;data&quot;:[\n                    /**\n                     * data\u6570\u636E\u6807\u51C6\n                     * \u6807\u5934\u548C\u663E\u793A\u6846\u5BBD\u5EA6\uFF08labelCol\u548CwrapperCol\uFF09\uFF0C\u5148\u8BFB\u6BCF\u4E2A\u6807\u7B7E\u5185\u7684\uFF0C\u5982\u679C\u6CA1\u6709\u518D\u8BFB\u4E0A\u9762\u603B\u7684\uFF0C\n                     * \u201CdictId\u201D\u4E3A\u4E0B\u62C9\u9009\u62E9\u5B57\u5178\u6570\u636E\u7684id\uFF0C\u5B58\u5728\u5C31\u8C03\u7528\u5B57\u5178\u63A5\u53E3\n                     * \u53EF\u81EA\u5B9A\u4E49\u6807\u7B7E\uFF0C\u5982\u4E0B\uFF081\uFF09\u53F7\u4F4D\u5B50\n                     * column \u4E3A\u5355\u4E2A\u6807\u7B7E\u5360\u6709\u7684\u5217\u6570  \uFF0C\u53EF\u901A\u8FC7\u548ClabelCol\u3001wrapperCol\u8C03\u8BD5\u6837\u5F0F\n                     * \u6570\u636E\u4E2D\u53EF\u6709\u5C5E\u6027\uFF1A\u4E00\u4E0B\n                     * field\uFF1A\u552F\u4E00\u6807\u8BC6\uFF0Ctype\uFF1A\u6807\u7B7E\u7C7B\u578B\uFF08input/select/checkbox/switch/radio/timePicker/rangePicker/datePicker/inputNumber\u7B49\uFF09           \u5FC5\u987B\u6709\n                     * column\uFF1A\u6807\u7B7E\u6240\u5360\u603B\u7684\u5217\u6570\u4E2D\u7684\u51E0\u5217\uFF0ClabelCol\uFF1A\u6807\u5934\u5BBD\u5EA6\uFF0CwrapperCol\uFF1A\u6570\u636E\u6846\u5BBD\u5EA6\uFF0Cvalidate\uFF1A\u89C4\u5219\uFF0Coptions\uFF1Acheckbox\u548Cselect\u6570\u636E          \u9009\u62E9\u6709\n                     * defaultValue\uFF1A\u9ED8\u8BA4\u503C\uFF0CdefaultValue\u663E\u793A\u6570\u636E\uFF0C name\uFF1A\u6807\u7B7E\u7684\u540D\u79F0\uFF0C                                                                 \u9009\u62E9\u6709\n                     */\n                     /**\n                         * (1)\uFF1A\u81EA\u5B9A\u4E49\u6807\u7B7E\n                         *  \u683C\u5F0F\u6309\u7167\uFF1A{\u201Cvalue\u201D:config=&gt;.....}\n                         */\n                        {&quot;value&quot;: ()=&gt;&lt;div&gt;{lastStepState.tableBodyDataApi.data.content[lastStepState.selectedRows[0]-1].name}&lt;/div&gt; },\n                        {&quot;name&quot;:&quot;\u670D\u52A1\u7C7B\u578B&quot;,&quot;type&quot;:&quot;select&quot;,&quot;column&quot;:1,&quot;labelCol&quot;:8,&quot;wrapperCol&quot;:16,&quot;field&quot;:&quot;serviceType&quot;,&quot;dictId&quot;:&quot;serviceType&quot;,&quot;defaultValue&quot;:&quot;rest&quot;,&quot;placeholder&quot;:&quot;\u8BF7\u9009\u62E9...&quot;},\n                        {&quot;name&quot;:&quot;\u5B57\u5178\u9879\u83B7\u53D6\u4E0B\u62C9\u6570\u636E&quot;,&quot;type&quot;:&quot;select&quot;,&quot;field&quot;:&quot;boxs&quot;,&quot;dictId&quot;:&quot;21&quot;,&quot;validate&quot;: [{\n                            &quot;required&quot;: true, &quot;message&quot;: &#x27;Please input your E-mail!&#x27;\n                        }],&quot;placeholder&quot;:&quot;\u8BF7\u9009\u62E9...&quot;},\n                        {&quot;name&quot;:&quot;\u63A5\u53E3\u83B7\u53D6\u4E0B\u62C9\u6570\u636E&quot;,&quot;type&quot;:&quot;select&quot;,&quot;field&quot;:&quot;name&quot;,&quot;validate&quot;: [{\n                            &quot;required&quot;: true, &quot;message&quot;: &#x27;Please input your E-mail!&#x27;\n                        }],&quot;dictId&quot;:&quot;resName&quot;,&quot;dictApi&quot;:{apiName:&quot;getResName&quot;},&quot;placeholder&quot;:&quot;\u8BF7\u9009\u62E9...&quot;},\n                        //\u65E0\u5B57\u5178\u9879 \u4E0D\u8981\u5B58\u5728 dictId\u5C5E\u6027\n                        {&quot;name&quot;:&quot;\u65E0\u5B57\u5178\u9879&quot;,&quot;type&quot;:&quot;select&quot;,&quot;field&quot;:&quot;sex&quot;,&quot;placeholder&quot;:&quot;\u8BF7\u9009\u62E9...&quot;,&quot;defaultValue&quot;:&quot;\u7BEE\u7403&quot;,&quot;options&quot;:[&quot;\u7BEE\u7403&quot;,&quot;\u8DB3\u7403&quot;,&quot;\u4E52\u4E53\u7403&quot;]},\n                        {&quot;type&quot;:&quot;treeSelect&quot;,&quot;name&quot;:&quot;treeSelect1&quot; ,&quot;field&quot;:&quot;themeType&quot;,dictId:&quot;themeType&quot;,dictApi:{apiName:&#x27;flglData&#x27;},&quot;defaultValue&quot;:&quot;\u5E38\u9A7B\u4EBA\u53E3&quot;,&quot;validate&quot;: [{\n                            &quot;required&quot;: true, &quot;message&quot;: &#x27;\u4E0D\u80FD\u4E3A\u7A7A!&#x27;\n                        }]},\n                        {&quot;name&quot;:&quot;\u90AE\u7BB1&quot;,&quot;type&quot;:&quot;input&quot;,&quot;field&quot;:&quot;email&quot;,&quot;defaultValue&quot;:&quot;tiangb@fable.cn&quot;,\n                            &quot;validate&quot;: [{\n                                &quot;type&quot;: &#x27;email&#x27;, &quot;message&quot;: &#x27;The input is not valid E-mail!&#x27;\n                            },\n                                {\n                                    &quot;required&quot;: true, &quot;message&quot;: &#x27;Please input your E-mail!&#x27;\n                                }]},\n                        {&quot;name&quot;:&quot;checkbox&quot;,&quot;type&quot;:&quot;checkbox&quot;,&quot;field&quot;:&quot;sports&quot;,&quot;options&quot;:[&quot;\u7BEE\u7403&quot;,&quot;\u8DB3\u7403&quot;,&quot;\u4E52\u4E53\u7403&quot;],&quot;defaultValue&quot;:[&quot;\u7BEE\u7403&quot;,&quot;\u4E52\u4E53\u7403&quot;]},\n                        {&quot;name&quot;:&quot;switch&quot;,&quot;type&quot;:&quot;switch&quot;,&quot;field&quot;:&quot;switch&quot;},\n                        {&quot;name&quot;:&quot;radio&quot;,&quot;type&quot;:&quot;radio&quot;,&quot;field&quot;:&quot;radio&quot;,&quot;options&quot;:[&quot;\u7BEE\u7403&quot;,&quot;\u8DB3\u7403&quot;,&quot;\u4E52\u4E53\u7403&quot;],&quot;defaultValue&quot;:&quot;\u8DB3\u7403&quot;},\n                        {&quot;name&quot;:&quot;radio&quot;,&quot;type&quot;:&quot;radio1&quot;,&quot;field&quot;:&quot;radio1&quot;,&quot;options&quot;:[{&quot;value&quot;:&quot;baskeball&quot;,&quot;key&quot;:&quot;\u7BEE\u7403\u738B\u5B50&quot;},{&quot;value&quot;:&quot;football&quot;,&quot;key&quot;:&quot;\u8DB3\u7403&quot;},{&quot;value&quot;:&quot;football&quot;,&quot;key&quot;:&quot;\u8DB3\u7403&quot;}],&quot;defaultValue&quot;:&quot;football&quot;},\n                        {&quot;name&quot;:&quot;TimePicker&quot;,&quot;type&quot;:&quot;timePicker&quot;,&quot;field&quot;:&quot;timePicker&quot;,&quot;defaultValue&quot;:&quot;12:40&quot;,&quot;help&quot;:&quot;\u8BF7\u586B\u5199\u4FE1\u606F&quot;},\n                        {&quot;name&quot;:&quot;rangePicker&quot;,&quot;type&quot;:&quot;rangePicker&quot;,&quot;field&quot;:&quot;rangePicker&quot;},\n                        /**\n                         * (1)\uFF1A\u81EA\u5B9A\u4E49\u6807\u7B7E\n                         *  \u683C\u5F0F\u6309\u7167\uFF1A{\u201Cvalue\u201D:config=&gt;.....}\n                         */\n                        {&quot;value&quot;: config=&gt;&lt;FormItem\n                            label=&#x27;\u59D3\u540D&#x27;\n                            labelCol={{ span: 8}}\n                            wrapperCol={{ span: 14 }}\n                            hasFeedback\n                            help=&quot;\u6211\u662F\u63D0\u793A\u4FE1\u606F&quot;\n                        &gt;\n                            {\n                                getFieldDecorator(&quot;ccc&quot;, {\n                                    initialValue:&quot;\u4F60\u597D\uFF0C\u6211\u662F\u81EA\u5B9A\u4E49\u6807\u7B7E&quot;\n                                })(\n                                    &lt;Input   name=&quot;username&quot;/&gt;\n                                    //&lt;Input onChange={(v)=&gt;{target.props.actions.setState(&#x27;ccc&#x27;,v)}}  name=&quot;username&quot;/&gt;\n                                )\n                            }\n                        &lt;/FormItem&gt;\n                        },\n                        {&quot;type&quot;:&quot;input&quot;,&quot;name&quot;:&quot;\u65B9\u6CD5&quot; ,&quot;field&quot;:&quot;methods&quot;,&quot;validate&quot;: [{&quot;required&quot;: true, &quot;message&quot;: &#x27;Please input !&#x27;}]},\n                        {&quot;name&quot;:&quot;\u8BF7\u6C42\u65B9\u6CD5&quot;,&quot;type&quot;:&quot;select&quot;,&quot;field&quot;:&quot;requestMode&quot;,&quot;dictId&quot;:&quot;requestMode&quot;,&quot;placeholder&quot;:&quot;\u8BF7\u9009\u62E9...&quot;},\n                     ]\n                }\n            ]\n    })\n})\n' } }),
	                _react2["default"].createElement(
	                    'div',
	                    null,
	                    ' \u5B9E\u4F8B\u6B65\u9AA43 \u7531\u4E8E\u662F\u81EA\u5B9A\u4E49\u5185\u5BB9\uFF0C\u5728steperConfigDemo.js\u4E2D\u5B9A\u4E49'
	                )
	            ),
	            _react2["default"].createElement(
	                'h3',
	                null,
	                'Stepper\u7EC4\u4EF6\u53C2\u6570'
	            ),
	            _react2["default"].createElement(
	                'div',
	                { className: 'p' },
	                _react2["default"].createElement(_table2["default"], { pagination: false, columns: columns, dataSource: dataSource })
	            )
	        );
	    };

	    return StepperDoc;
	}(_react.Component);

	StepperDoc = (0, _component2["default"])('StepperDoc')(StepperDoc);

	(0, _jsonp2["default"])("stepperDoc")(function (arg, callback) {
	    callback({
	        "success": true,
	        "data": _react2["default"].createElement(StepperDoc, { id: 'inst' })
	    });
	});

/***/ }
]);