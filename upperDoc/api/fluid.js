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

	(0, _jsonp2["default"])("fluid")(function (arg, callback) {
	    callback({
	        "success": true,
	        "data": _react2["default"].createElement(
	            'div',
	            { style: { padding: 10 } },
	            _react2["default"].createElement(
	                'h3',
	                null,
	                '\u9879\u76EE\u8FD0\u884C\u6D41\u7A0B'
	            ),
	            _react2["default"].createElement(
	                'ol',
	                { style: { padding: 20 } },
	                _react2["default"].createElement(
	                    'li',
	                    null,
	                    '\u9879\u76EE\u542F\u52A8\u524D\uFF0CpageArgs\u4E0B\u7684\u6587\u4EF6(\u5B50\u9875\u9762)\u5DF2\u7ECF\u88AB\u7F16\u8BD1\u5230api/\u4E0B\u3002'
	                ),
	                _react2["default"].createElement(
	                    'li',
	                    null,
	                    '\u9879\u76EE\u542F\u52A8\u540E\uFF0C\u9996\u5148\u8FD0\u884C/index.js\u6587\u4EF6\uFF0C\u5BF9\u5E94entities/index.dev.js\u6587\u4EF6'
	                ),
	                _react2["default"].createElement(
	                    'li',
	                    null,
	                    '"index.dev.js"\u5F15\u5165\u7684\u8DEF\u7531\u5668\uFF0C\u5206\u6790\u7F51\u5740\uFF0C\u5E76\u9010\u5C42\u8FD0\u884C\u76F8\u5E94\u7684\u5BB9\u5668(containers\\*.js)\u6E32\u67D3\u5404\u5C42\u9875\u9762.'
	                ),
	                _react2["default"].createElement(
	                    'li',
	                    null,
	                    '\u8DEF\u7531\u5904\u7406\u6D41\u7A0B\uFF1A',
	                    _react2["default"].createElement('pre', { dangerouslySetInnerHTML: { __html: '&lt;Router history={ history }&gt;\n                &lt;Route path=&quot;/&quot; component={ App }&gt;\n                    &lt;IndexRoute component={ Main }/&gt;\n                    &lt;Route path=&quot;main&quot; component={ Main }/&gt;\n                    &lt;Route path=&quot;resourceManager&quot; components={ResourceManager} /&gt;\n                    &lt;Route path=&quot;managerPage&quot; components={ManagerPage} /&gt;\n                    &lt;Route path=&quot;sysDictsManager&quot; component={ SysDictsManager }/&gt;\n                    &lt;Route path=&quot;resourceCheckPage&quot; components={ResourceCheckList} /&gt;\n                    &lt;Route path=&quot;test&quot; components={Test} /&gt;\n                    &lt;Route path=&quot;datalistV1/:config&quot; components={DataList1.DataListCon}&gt;\n                        &lt;Route path=&quot;list/:start/:page&quot; components={DataList1.List} /&gt;\n                        &lt;Route path=&quot;edit/:id&quot;     components={DataList1.Edit} /&gt;\n                        &lt;Route path=&quot;delete/:ids&quot;  components={DataList1.Delete} /&gt;\n                        &lt;Route path=&quot;add/:id&quot;  components={DataList1.Add} /&gt;\n                        &lt;Route path=&quot;add&quot;  components={DataList1.Add} /&gt;\n                        &lt;Route path=&quot;detail/:id&quot;   components={DataList1.Detail} /&gt;\n                    &lt;/Route&gt;\n                    ...\n' } }),
	                    _react2["default"].createElement(
	                        'div',
	                        null,
	                        _react2["default"].createElement(
	                            'ol',
	                            null,
	                            _react2["default"].createElement(
	                                'li',
	                                null,
	                                '\u8DEF\u7531\u6BCF\u5404\u5C42\u90FD\u662F\u4E00\u4E2A\u5BB9\u5668,\u5404\u5C42\u8F93\u51FA\u5404\u81EA\u7684div,\u6309\u8DEF\u7531\u5C42\u7EA7\u76F8\u4E92\u5D4C\u5957'
	                            ),
	                            _react2["default"].createElement(
	                                'li',
	                                null,
	                                '\u8DEF\u7531\u5148\u8C03\u7528App(containers/App.js)\u6E32\u67D3\u6700\u5916\u5C42\u5E03\u5C40\uFF0CApp\u4E2D\u8D1F\u8D23\u5904\u7406\u5168\u5C40\u903B\u8F91\uFF0C\u5982\u5224\u65AD\u7528\u6237\u662F\u5426\u767B\u5F55,\u6CA1\u767B\u5F55\u5219\u6E32\u67D3\u767B\u5F55\u9875\u9762\uFF0C\u767B\u5F55\u4E86\u5219\u6E32\u67D3\u6B63\u5E38\u9875\u9762\uFF0CApp\u8FD8\u4F1A\u5904\u7406\u83DC\u5355\u7B49\u6240\u6709\u9875\u9762\u5171\u4EAB\u7684\u529F\u80FD\uFF1B'
	                            ),
	                            _react2["default"].createElement(
	                                'li',
	                                null,
	                                '\u8DEF\u7531\u5982\u679C\u5339\u914D\u7F51\u5740"#/main",\u521A\u8C03\u7528Main\u7C7B(/containers/Main.js)\u6E32\u67D3\u9996\u9875.'
	                            ),
	                            _react2["default"].createElement(
	                                'li',
	                                null,
	                                '\u8DEF\u7531\u5982\u679C\u5339\u914D\u7F51\u5740"#/dataList",\u5219\u8C03\u7528DataListCon\u7C7B(containers/dataListV1/DataListCon.js)\u6E32\u67D3\u6570\u636E\u8868\u7956\u7EA7\u5BB9\u5668\u5185\u5BB9'
	                            ),
	                            _react2["default"].createElement(
	                                'li',
	                                null,
	                                '\u8DEF\u7531\u5982\u679C\u5339\u914D\u7F51\u5740"#/dataList/list",\u5219\u8C03\u7528DataList.List\u7C7B(containers/dataListV1/List.js)\u6E32\u67D3\u6570\u636E\u8868\u5217\u8868\u9875\u5185\u5BB9'
	                            )
	                        )
	                    )
	                )
	            )
	        )
	    });
	});

/***/ }
]);