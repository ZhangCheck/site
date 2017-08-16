webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(250);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(12);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("interface")(function (arg, callback) {
	    callback({
	        "success": true,
	        "data": _react2["default"].createElement(
	            'div',
	            { style: { padding: 10 } },
	            _react2["default"].createElement(
	                'h3',
	                null,
	                '\u63A5\u53E3\u5904\u7406'
	            ),
	            _react2["default"].createElement(
	                'div',
	                { style: { paddingLeft: 20 } },
	                _react2["default"].createElement(
	                    'h4',
	                    null,
	                    '\u63A5\u53E3\u6570\u636E\u683C\u5F0F\u89C4\u8303'
	                ),
	                _react2["default"].createElement('pre', { dangerouslySetInnerHTML: { __html: '{\n  "success": true,\n  "code": "0",\n  "message": "message",\n  "data": "content"\n}' } }),
	                _react2["default"].createElement(
	                    'h4',
	                    null,
	                    '\u63A5\u53E3\u72B6\u6001\u6811\u683C\u5F0F'
	                ),
	                _react2["default"].createElement('pre', { dangerouslySetInnerHTML: { __html: '{\n  "loading": true,\n  "msg": "\u6570\u636E\u52A0\u8F7D\u4E2D...",\n  "data": "api content",\n  "error": "error message"\n}' } }),
	                _react2["default"].createElement(
	                    'h4',
	                    null,
	                    '\u63A5\u53E3\u4F7F\u7528'
	                ),
	                _react2["default"].createElement(
	                    'ol',
	                    null,
	                    _react2["default"].createElement(
	                        'li',
	                        null,
	                        '\u8C03\u7528\u63A5\u53E3\u524D\uFF0C\u4F7F\u7528Global.mark\u521D\u59CB\u5316\u63A5\u53E3\u6570\u636E\u4E3A\u7A7A\u5BF9\u8C61',
	                        _react2["default"].createElement('pre', { dangerouslySetInnerHTML: { __html: 'Global.mark({\n    demo:{\n        apiDemo:{}\n    }\n},\'init_apiDemo\')' } })
	                    ),
	                    _react2["default"].createElement(
	                        'li',
	                        null,
	                        '\u8C03\u7528 Global.requestApi(apiConfig,treePosMark) \u65B9\u6CD5\uFF0C\u8BF7\u6C42\u63A5\u53E3\u6570\u636E',
	                        _react2["default"].createElement('pre', { dangerouslySetInnerHTML: { __html: 'Global.requestApi({\n    apiName:&#39;apiDemo&#39;,\n    url:&#39;api/apiDemo.json&#39;, //\u524D\u7AEF\u6D4B\u8BD5\u7528\u7684\u9759\u6001\u6570\u636E\u73AF\u5883 (\u9759\u6001json)\n    remoteUrl:Global.server+&#39;someApi&#39; //\u8FDC\u7A0B\u6570\u636E\u73AF\u5883\uFF08\u771F\u63A5\u53E3\uFF09\n},{\n    demo:{\n        apiDemo:null\n    }\n})' } }),
	                        ' '
	                    ),
	                    _react2["default"].createElement(
	                        'li',
	                        null,
	                        '\u5728\u89C6\u56FE\u4E2D\u663E\u793A\u63A5\u53E3\u72B6\u6001\u6216\u6570\u636E\u5185\u5BB9',
	                        _react2["default"].createElement('pre', { dangerouslySetInnerHTML: { __html: '...\nrender() {\n    const apiDemo = Global.getState().apiDemo;\n    return &lt;div&gt;{apiDemo.msg || apiDemo.data || &#39;...&#39;}&lt;/div&gt;\n}'
	                            } })
	                    ),
	                    _react2["default"].createElement(
	                        'li',
	                        null,
	                        '\u4F7F\u7528loading\u7EC4\u4EF6\uFF0C\u5C55\u793A\u63A5\u53E3\u72B6\u6001\u6216\u6570\u636E\u5185\u5BB9',
	                        _react2["default"].createElement('pre', { dangerouslySetInnerHTML: { __html: 'import Loading from &#39;components/Loading&#39;;\n...\nrender() {\n    const apiDemo = Global.getState().apiDemo;\n    return  &lt;Loading api={apiDemo}&gt;\n                {apiDemo.data &amp;&amp; \n                    &lt;div&gt;\n                        {apiDemo.data}\n                    &lt;/div&gt;\n                }\n            &lt;/Loading&gt;\n}'
	                            } })
	                    ),
	                    _react2["default"].createElement(
	                        'li',
	                        null,
	                        '\u4E0A\u4F20\u6570\u636E-body',
	                        _react2["default"].createElement('pre', { dangerouslySetInnerHTML: { __html: 'Global.requestApi({\n    apiName:&#39;apiDemo&#39;,\n    url:&#39;api/apiDemo.json&#39;,\n    remoteUrl:Global.server+&#39;someApi&#39;,\n    body:&#39;\u8FD9\u662F\u4E0A\u4F20\u7684\u6570\u636E\uFF0C\u53EF\u4EE5\u662F\u5B57\u7B26\u4E32\u3001\u6570\u7EC4\u6216\u5BF9\u8C61&#39;\n},{\n    demo:{\n        apiDemo:null\n    }\n})' } })
	                    ),
	                    _react2["default"].createElement(
	                        'li',
	                        null,
	                        '\u901A\u8FC7\'post\',\'put\',\'delete\',\'patch\'\u7B49\u65B9\u5F0F\u4E0A\u4F20\u6570\u636E-method',
	                        _react2["default"].createElement('pre', { dangerouslySetInnerHTML: { __html: 'Global.requestApi({\n    apiName:&#39;apiDemo&#39;,\n    url:&#39;api/apiDemo.json&#39;,\n    remoteUrl:Global.server+&#39;someApi&#39;,\n    body:&#39;\u8FD9\u662F\u4E0A\u4F20\u7684\u6570\u636E\uFF0C\u53EF\u4EE5\u662F\u5B57\u7B26\u4E32\u3001\u6570\u7EC4\u6216\u5BF9\u8C61&#39;,\n    method:&#39;\u8FD9\u662F\u4E0A\u4F20\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u662F&quot;post&quot;,&quot;get&quot;,&quot;delete&quot;,&quot;patch&quot;\n},{\n    demo:{\n        apiDemo:null\n    }\n})' } })
	                    ),
	                    _react2["default"].createElement(
	                        'li',
	                        null,
	                        '\u63A5\u53E3\u56DE\u8C03\u51FD\u6570\uFF08\u53D1\u751F\u5728\u63A5\u53E3\u6570\u636E\u8BF7\u6C42\u6210\u529F\u4E4B\u540E\uFF0C\u5199\u5165\u6811\u4E4B\u524D) - next',
	                        _react2["default"].createElement('pre', { dangerouslySetInnerHTML: { __html: 'Global.requestApi({\n    apiName:&#39;apiDemo&#39;,\n    url:&#39;api/apiDemo.json&#39;,\n    remoteUrl:Global.server+&#39;someApi&#39;,\n    next: action=&gt;{\n        if(action.error){\n            console.log(&quot;\u63A5\u53E3\u9519\u8BEF\u6D88\u606F\uFF1A&quot;,action.error);\n        }else{\n            console.log(&quot;\u63A5\u53E3\u6570\u636E\u5185\u5BB9\uFF1A&quot;,action.data);\n        }\n        console.log(&quot;action\u4E0A\u7684\u6240\u6709\u5185\u5BB9\uFF0C\u5C06\u88AB\u5199\u5165\u5230\u6811\u4E2DapiDemo\u8282\u70B9\u4E0A&quot;);\n    }\n},{\n    demo:{\n        apiDemo:null\n    }\n})' } })
	                    ),
	                    _react2["default"].createElement(
	                        'li',
	                        null,
	                        '\u52A8\u6001\u63A5\u53E3(\u63A5\u53E3\u914D\u7F6E\u9879\u52A8\u6001\u4EA7\u751F)',
	                        _react2["default"].createElement('pre', { dangerouslySetInnerHTML: { __html: 'Global.requestApi(()=&gt;{\n    return {\n        apiName:someVar,\n        remoteUrl:someVar\n    }\n},{\n    demo:{\n        apiDemo:null\n    }\n})' } })
	                    )
	                )
	            )
	        )
	    });
	});

/***/ }
]);