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

	var AddDataListPage_Add = function (_Component) {
	  (0, _inherits3["default"])(AddDataListPage_Add, _Component);

	  function AddDataListPage_Add(props) {
	    (0, _classCallCheck3["default"])(this, AddDataListPage_Add);

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

	  AddDataListPage_Add.prototype.onClickCreator = function onClickCreator(values) {
	    var className = values.pageName.charAt(0).toUpperCase() + values.pageName.substr(1);
	    var lastDatalist = _global.Global.getState().framework.lastDatalist;
	    if (!lastDatalist) {
	      _message2["default"].warning('不连接操作，使用默认DataList页面名称-"datalistDemo"');
	    }
	    var dataListName = lastDatalist && lastDatalist.pageName || 'datalistDemo';

	    var source = '//\u751F\u6210\u65E5\u671F\uFF1A' + new Date() + '\n//\u8BF7\u624B\u52A8\u521B\u5EFA\u9875\u9762\u6587\u4EF6 "src/pageArgs/' + values.pageName + '.js"\uFF0C\u5E76\u586B\u5145\u5F53\u524D\u5185\u5BB9\n//\u521B\u5EFA\u6587\u4EF6\u540E\uFF0C\u6D4F\u89C8\u8DEF\u7531\u5730\u5740\u201C#/datalistV1/' + dataListName + '/list/11/10",\u70B9\u51FB\u65B0\u589E\uFF0C\u53EF\u67E5\u770B\u5230\u9875\u9762\u5B9E\u9645\u6548\u679C\nimport React from \'react\';\nimport callback from \'../core/jsonp\';\n\ncallback("' + values.pageName + '")((args,callback)=>{\n    //\u4ECE\u6811\u4E2D\u8BFB\u53D6\u8BE6\u60C5\u6570\u636E\n    let state  = Global.getState(),\n        detailMsgDataApi = state.dataList.' + dataListName + '.detailMsgDataApi,\n\t      defaultValue = (detailMsgDataApi && detailMsgDataApi.data ) || {};\n\t  //\u89C6\u56FE\u914D\u7F6E(AiForm)\n    callback({\n        "success": true,\n        "data":[{\n                    "title":"DataList\u7F16\u8F91\u9875\u9762", //\u680F\u76EE\u62AC\u5934\n                    "column":2,                 //\u5217\u6570\uFF08\u5E03\u5C40\uFF09\n                    "showTitle":true,\t\t    //\u662F\u5426\u663E\u793A\u680F\u76EE\u62AC\u5934\n                    "titleIcon":"file-text",    //\u680F\u76EE\u62AC\u5934\u524D\u7684\u56FE\u6807\n                    "data":[                    //\u8868\u5355\u9879\n                        {"name":"\u5E8F\u53F7","type":"input","field":"number","defaultValue":defaultValue.number?defaultValue.number:"test"},\n                        {"name":"\u540D\u79F0","type":"input","field":"name","defaultValue":defaultValue.name?defaultValue.name:""},\n                        {"name":"\u82F1\u6587\u540D\u79F0","type":"input","field":"englishName","defaultValue":defaultValue.englishName?defaultValue.englishName:""},\n                        {"name":"\u7F16\u7801","type":"input","field":"unicode","defaultValue":defaultValue.unicode?defaultValue.unicode:""},\n                        {"name":"\u5907\u6CE8","type":"input","field":"remarks","defaultValue":defaultValue.remarks?defaultValue.remarks:""},\n                     ],\n                     "buttonConfigs":{           //\u5E95\u90E8\u6309\u94AE\n                        "buttons":[\n                            {"type":"button","value":"\u53D6\u6D88",mark:"sjygl",props:{"style":{float:"right"}}},\n                            {"type":"button","value":"\u786E\u5B9A",mark:"sjygl",props:{"style":{float:"right"},htmlType:"submit"}},\n                            {"type":"button","value":"\u6D4B\u8BD5\u8FDE\u63A5",props:{type:"primary","style":{float:"right"},htmlType:"button",onClick: (() => {\n                                   \n                            })},\n\n                            }\n                        ]\n                    }\n                }\n            ]\n    })\n})';

	    _global.Global.mark({
	      pageLoader: {
	        inst: {
	          source: source
	        }
	      }
	    }, 'addPage_submit');
	  };

	  AddDataListPage_Add.prototype.componentWillUnmount = function componentWillUnmount() {
	    _global.Global.mark({
	      pageLoader: {
	        inst: {
	          source: ""
	        }
	      }
	    }, 'addPage_submit');
	  };

	  AddDataListPage_Add.prototype.render = function render() {
	    var state = this.props.state;
	    if (!state) return _react2["default"].createElement(
	      'div',
	      null,
	      '...'
	    );
	    var config = state.config;
	    var lastDatalist = _global.Global.getState().framework.lastDatalist;
	    var pageName = lastDatalist && lastDatalist.add_view.match(/apiName:"(\w*)"/)[1] || 'datalistAddDemo';

	    var creator = {
	      "success": true,
	      "data": [{
	        "title": "DataList新增页面生成器",
	        "column": 1,
	        "labelCol": 1,
	        "wrapperCol": 23,
	        "showTitle": true,
	        "buttonConfigs": {
	          "buttons": [{ "type": "button", "value": "返回", "field": "back", props: { style: { "float": "right" } } }, { "type": "button", "value": "确定", "field": "submit", props: { style: { "float": "right" }, btnType: "primary", htmlType: "submit" } }]
	        },
	        "data": [{ "type": "input", "name": "页面名称", "field": "pageName", "defaultValue": pageName, "validate": [{ "required": true, "message": 'Please input !' }] }, { "type": "text", "name": "备注", "field": "aa", "defaultValue": "多数情况，新增和编辑共用一个界面", "validate": [{ "required": true, "message": 'Please input !' }] }, { "type": _react2["default"].createElement(
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

	  return AddDataListPage_Add;
	}(_react.Component);

	AddDataListPage_Add = (0, _component2["default"])('pageLoader')(AddDataListPage_Add);

	(0, _jsonp2["default"])("addDataListPage_Add")(function (arg, callback) {
	  callback({
	    "success": true,
	    "data": _react2["default"].createElement(AddDataListPage_Add, { id: 'inst' })
	  });
	});

/***/ }
]);