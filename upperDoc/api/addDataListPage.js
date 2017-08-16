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

	var AddDataListPage = function (_Component) {
	    (0, _inherits3["default"])(AddDataListPage, _Component);

	    function AddDataListPage(props) {
	        (0, _classCallCheck3["default"])(this, AddDataListPage);

	        var _this = (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));

	        _this.onClickCreator = _this.onClickCreator.bind(_this);
	        _global.Global.mark({
	            pageLoader: {
	                inst: {
	                    source: ""
	                }

	            }
	        }, 'addAiForm_init');
	        return _this;
	    }

	    AddDataListPage.prototype.onClickCreator = function onClickCreator(values) {
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
	            source = '//\u751F\u6210\u65E5\u671F\uFF1A' + new Date() + '\n//\u8BF7\u624B\u52A8\u521B\u5EFA\u9875\u9762\u6587\u4EF6 "src/pageArgs/' + values.pageName + '.js"\uFF0C\u5E76\u586B\u5145\u5F53\u524D\u5185\u5BB9\n//\u8BF7\u786E\u4FDD\u5206\u6B65\u9875\u9762(src/pageArgs/' + stepperName + '.js)\u4E2D\uFF0C\u914D\u7F6E\u4E86\'type\'\u4E3A\'datalist\',\'configStepApi\'\u4E3A\'' + values.pageName + '\'\u7684\u9875\u9762\n//\u521B\u5EFA\u6587\u4EF6\u540E\uFF0C\u6D4F\u89C8\u8DEF\u7531\u5730\u5740\u201C#/steperV1/' + stepperName + '/1",\u53EF\u67E5\u770B\u5230\u9875\u9762\u5B9E\u9645\u6548\u679C\nimport React, { Component, PropTypes } from \'react\';\nimport connect from \'../core/component\';\nimport callback from \'../core/jsonp\';\nimport {Button} from \'antFB\';\n\ncallback("' + values.pageName + '")((args,callback)=>{\n    callback({\n    "success": true,\n    "data": {\n        "title":"\u8FD9\u662FDataList\u7EC4\u4EF6\u9875\u9762\uFF01\uFF01\uFF01\uFF01\uFF01",\n        "headConfig":[\n            {"headName":<h4 style={{paddingLeft:20,paddingTop:10,paddingBottom:10}}>\u5217\u8868\u5934</h4>} //\u8868\u5934\u914D\u7F6E\n        ],\n        "buttonConfigs":[ "add","edit","delete","detail" ],//\u9876\u90E8\u83DC\u5355\n        "searchConfig":{ //\u6A21\u7CCA\u67E5\u8BE2\u8868\u5355\u914D\u7F6E AiForm\n            "data":[{\n                "column":3,\n                "data":[\n                    {"type":"input","name":"\u7535\u5F71" ,"field":"movie" },\n                    {"type":"button","value":"\u67E5\u8BE2" ,"pageName":"search",props:{type:"primary"}, "htmlType":"submit"}\n                ]\n            }]\n        },\n        "table":{ //\u8868\u683C\u914D\u7F6E\n            "primarykey":"' + values.primarykey + '", //\u4E3B\u952E\uFF0C(\u5C06\u4F20\u9012\u5230\u8BE6\u60C5\u63A5\u53E3)\n            "showHeader":' + (values.showHeader ? 'true' : 'false') + ',\n            "clounms":[  //\u8868\u683C\u5217\u914D\u7F6E\uFF0C\u8BE6\u89C1ant.design\n                {\n                    "title":"\u5E8F\u53F7",\n                    "dataIndex": "number",\n                    "key": "number"\n                },\n                {\n                    "title":"\u540D\u79F0",\n                    "dataIndex": "name",\n                    "key": "name"\n                },\n                {\n                    "title":"\u82F1\u6587\u540D\u79F04",\n                    "dataIndex": "englishName",\n                    "key": "englishName"\n                },\n                {\n                    "title":"\u7F16\u7801",\n                    "dataIndex": "unicode",\n                    "key": "unicode"\n                },\n                {\n                    "title":"\u5907\u6CE8",\n                    "dataIndex": "remarks",\n                    "key": "remarks"\n                },\n                {\n                    "title":"\u64CD\u4F5C",\n                    "dataIndex": "operation",\n                    "key": "operation",\n                    "render":["edit","delete","detail"]\n                }\n            ],\n            "body":' + values.table_data + ' //\u8868\u6570\u636E\u63A5\u53E3\u914D\u7F6E\n        },\n        "add":{\n            "byDialog":true,\n            "initData":{\n                data:' + values.add_view + ' //\u65B0\u589E-\u89C6\u56FE\u63A5\u53E3\n            },\n            "onAddSubmitApi":' + values.add_submit + '//\u65B0\u589E-\u63D0\u4EA4\u63A5\u53E3\n        },\n        "edit":{\n            "byDialog":true,\n            "initData":{\n              data:' + values.edit_view + ' //\u7F16\u8F91\u89C6\u56FE\u63A5\u53E3 Datalist\u5728\u7F16\u8F91\u9875\u9762\uFF0C\u5148\u8C03\u7528\u201C\u8BE6\u60C5\u6570\u636E\u63A5\u53E3\u201D\u8BFB\u53D6\u6570\u636E\uFF0C\u518D\u8C03\u7528\u672C\u884C\u89C6\u56FE\u63A5\u53E3\n            },\n            "onUpdateSubmitApi":' + values.edit_submit + ' //\u7F16\u8F91-\u63D0\u4EA4\u63A5\u53E3\n        },\n        "delete":{\n            "body":' + values.delete_submit + ' //\u5220\u9664\u884C\u63A5\u53E3\n        },\n        "detail":{\n            "byDialog":true,\n            "initData":{\n              data:' + values.detail_view + ' //\u8BE6\u60C5\u89C6\u56FE\u63A5\u53E3 \u6309primarykey\u8BFB\u53D6\u8BE6\u60C5\u4FE1\u606F\n            },\n            "body":' + values.detail_data + ' //\u8BE6\u60C5\u6570\u636E\u63A5\u53E3        \n\t\t},\n        "check":{\n            "view":null,\n            "checkApi":null\n        }\n    }\n})})';
	        } else {
	            source = '//\u751F\u6210\u65E5\u671F\uFF1A' + new Date() + '\n//\u8BF7\u624B\u52A8\u521B\u5EFA\u9875\u9762\u6587\u4EF6 "src/pageArgs/' + values.pageName + '.js"\uFF0C\u5E76\u586B\u5145\u5F53\u524D\u5185\u5BB9\n//\u521B\u5EFA\u6587\u4EF6\u540E\uFF0C\u6D4F\u89C8\u8DEF\u7531\u5730\u5740"#/datalistV1/' + values.pageName + '/list/11/10",\u53EF\u67E5\u770B\u5230\u9875\u9762\u5B9E\u9645\u6548\u679C\nimport React, { Component, PropTypes } from \'react\';\nimport connect from \'../core/component\';\nimport callback from \'../core/jsonp\';\nimport {Button} from \'antFB\';\n\ncallback("' + values.pageName + '")((args,callback)=>{\n    callback({\n    "success": true,\n    "data": {\n        "title":"\u8FD9\u662FDataList\u7EC4\u4EF6\u9875\u9762\uFF01\uFF01\uFF01\uFF01\uFF01",\n        "headConfig":[\n            {"headName":<h4 style={{paddingLeft:20,paddingTop:10,paddingBottom:10}}>\u5217\u8868\u5934</h4>} //\u8868\u5934\u914D\u7F6E\n        ],\n        "buttonConfigs":[ "add","edit","delete","detail" ],//\u9876\u90E8\u83DC\u5355\n        "searchConfig":{ //\u6A21\u7CCA\u67E5\u8BE2\u8868\u5355\u914D\u7F6E AiForm\n            "data":[{\n                "column":3,\n                "data":[\n                    {"type":"input","name":"\u7535\u5F71" ,"field":"movie" },\n                    {"type":"button","value":"\u67E5\u8BE2" ,"pageName":"search",props:{type:"primary"}, "htmlType":"submit"}\n                ]\n            }]\n        },\n        "table":{ //\u8868\u683C\u914D\u7F6E\n            "primarykey":"' + values.primarykey + '", //\u4E3B\u952E\uFF0C(\u5C06\u4F20\u9012\u5230\u8BE6\u60C5\u63A5\u53E3)\n            "showHeader":' + (values.showHeader ? 'true' : 'false') + ',\n            "clounms":[  //\u8868\u683C\u5217\u914D\u7F6E\uFF0C\u8BE6\u89C1ant.design\n                {\n                    "title":"\u5E8F\u53F7",\n                    "dataIndex": "number",\n                    "key": "number"\n                },\n                {\n                    "title":"\u540D\u79F0",\n                    "dataIndex": "name",\n                    "key": "name"\n                },\n                {\n                    "title":"\u82F1\u6587\u540D\u79F04",\n                    "dataIndex": "englishName",\n                    "key": "englishName"\n                },\n                {\n                    "title":"\u7F16\u7801",\n                    "dataIndex": "unicode",\n                    "key": "unicode"\n                },\n                {\n                    "title":"\u5907\u6CE8",\n                    "dataIndex": "remarks",\n                    "key": "remarks"\n                },\n                {\n                    "title":"\u64CD\u4F5C",\n                    "dataIndex": "operation",\n                    "key": "operation",\n                    "render":["edit","delete","detail"]\n                }\n            ],\n            "body":' + values.table_data + ' //\u8868\u6570\u636E\u63A5\u53E3\u914D\u7F6E\n        },\n        "add":{\n            "byDialog":true,\n            "initData":{\n                data:' + values.add_view + ' //\u65B0\u589E-\u89C6\u56FE\u63A5\u53E3\n            },\n            "onAddSubmitApi":' + values.add_submit + '//\u65B0\u589E-\u63D0\u4EA4\u63A5\u53E3\n        },\n        "edit":{\n            "byDialog":true,\n            "initData":{\n              data:' + values.edit_view + ' //\u7F16\u8F91\u89C6\u56FE\u63A5\u53E3 Datalist\u5728\u7F16\u8F91\u9875\u9762\uFF0C\u5148\u8C03\u7528\u201C\u8BE6\u60C5\u6570\u636E\u63A5\u53E3\u201D\u8BFB\u53D6\u6570\u636E\uFF0C\u518D\u8C03\u7528\u672C\u884C\u89C6\u56FE\u63A5\u53E3\n            },\n            "onUpdateSubmitApi":' + values.edit_submit + ' //\u7F16\u8F91-\u63D0\u4EA4\u63A5\u53E3\n        },\n        "delete":{\n            "body":' + values.delete_submit + ' //\u5220\u9664\u884C\u63A5\u53E3\n        },\n        "detail":{\n            "byDialog":true,\n            "initData":{\n              data:' + values.detail_view + ' //\u8BE6\u60C5\u89C6\u56FE\u63A5\u53E3 \u6309primarykey\u8BFB\u53D6\u8BE6\u60C5\u4FE1\u606F\n            },\n            "body":' + values.detail_data + ' //\u8BE6\u60C5\u6570\u636E\u63A5\u53E3        \n\t\t},\n        "check":{\n            "view":null,\n            "checkApi":null\n        }\n    }\n})})';
	        }

	        _global.Global.mark({
	            pageLoader: {
	                inst: {
	                    source: source
	                }
	            },
	            framework: {
	                lastDatalist: values
	            }
	        }, 'addDataListPage_submit');
	    };

	    AddDataListPage.prototype.componentWillUnmount = function componentWillUnmount() {
	        _global.Global.mark({
	            pageLoader: {
	                inst: {
	                    source: ""
	                }
	            }
	        }, 'addDataList_clear');
	    };

	    AddDataListPage.prototype.render = function render() {
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
	                "title": "DataList页面生成器",
	                "column": 2,
	                "labelCol": 1,
	                "wrapperCol": 23,
	                "showTitle": true,
	                "buttonConfigs": {
	                    "buttons": [{ "type": "button", "value": "返回", "field": "back", props: { style: { "float": "right" } } }, { "type": "button", "value": "确定", "field": "submit", props: { style: { "float": "right" }, btnType: "primary", htmlType: "submit" } }]
	                },
	                "data": [{ "type": "input", "name": "页面名称", "field": "pageName", "defaultValue": _global.Global.getHtmlArg('for') == 'stepper' ? "steperDemoStep1" : "datalistDemo", "validate": [{ "required": true, "message": 'Please input !' }] }, { "type": "input", "name": "主键", "field": "primarykey", "defaultValue": "number", "validate": [{ "required": true, "message": 'Please input !' }] }, { "type": "switch", "name": "显示默认列头", "field": "showHeader", "defaultValue": "true", "validate": [{ "required": true, "message": 'Please input !' }] }, { "type": "textarea", "name": "表数据接口", "field": "table_data", "defaultValue": '{apiName:\'datalistBodyDemo\'}', "validate": [{ "required": true, "message": 'Please input !' }] }, { "type": "textarea", "name": "新增页面-视图接口", "field": "add_view", "defaultValue": '{apiName:"datalistEditDemo",dataType:\'jsonp\'}', "validate": [{ "required": true, "message": 'Please input !' }] }, { "type": "textarea", "name": "新增页面-提交接口", "field": "add_submit", "defaultValue": '{"apiName":"saveSuccess",method:"post"}', "validate": [{ "required": true, "message": 'Please input !' }] }, { "type": "textarea", "name": "编辑页面-视图接口", "field": "edit_view", "defaultValue": '{apiName:"datalistEditDemo",dataType:\'jsonp\'}', "validate": [{ "required": true, "message": 'Please input !' }] }, { "type": "textarea", "name": "编辑页面-提交接口", "field": "edit_submit", "defaultValue": '{"apiName":"saveSuccess",method:"post"}', "validate": [{ "required": true, "message": 'Please input !' }] }, { "type": "textarea", "name": "详情页面-视图接口", "field": "detail_view", "defaultValue": '{apiName:"datalistDetailDemo",dataType:\'jsonp\'}', "validate": [{ "required": true, "message": 'Please input !' }] }, { "type": "textarea", "name": "详情页面-数据接口", "field": "detail_data", "defaultValue": '{apiName:\'datalistDetailMsgDemo\'}', "validate": [{ "required": true, "message": 'Please input !' }] }, { "type": "textarea", "name": "删除行接口", "field": "delete_submit", "defaultValue": '{apiName:\'getDeleteData\'}', "validate": [{ "required": true, "message": 'Please input !' }] }, { "type": _react2["default"].createElement(
	                        _reactRouter.Link,
	                        { to: '/page/dataListDoc', target: '_blank' },
	                        '\u67E5\u770BAPI'
	                    ), "name": "API", "field": "api" }]
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

	    return AddDataListPage;
	}(_react.Component);

	AddDataListPage = (0, _component2["default"])('pageLoader')(AddDataListPage);

	(0, _jsonp2["default"])("addDataListPage")(function (arg, callback) {
	    callback({
	        "success": true,
	        "data": _react2["default"].createElement(AddDataListPage, { id: 'inst' })
	    });
	});

/***/ }
]);