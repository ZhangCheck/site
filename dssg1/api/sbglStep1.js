webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(91);

	var _checkbox = __webpack_require__(90);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	var _css2 = __webpack_require__(54);

	var _form = __webpack_require__(53);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _AiFormTable = __webpack_require__(310);

	var _AiFormTable2 = _interopRequireDefault(_AiFormTable);

	var _AiLabel = __webpack_require__(311);

	var _AiLabel2 = _interopRequireDefault(_AiLabel);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(10);

	var _history = __webpack_require__(32);

	var _history2 = _interopRequireDefault(_history);

	var _interfaces = __webpack_require__(35);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var FormItem = _form2["default"].Item;
	/**
	 * 管理节点设备初始化
	 * 第二步，注册协议
	 */
	(0, _jsonp2["default"])("sbglStep1")(function (args, callback) {
	                    var state = _global.Global.getState();
	                    callback({
	                                        "success": true,
	                                        "data": [{
	                                                            "title": "注册协议",
	                                                            "column": 1,
	                                                            "showTitle": true,
	                                                            "data": [{ "value": function value(connfig) {
	                                                                                                    return _react2["default"].createElement(
	                                                                                                                        'div',
	                                                                                                                        { className: 'regAgreementContent' },
	                                                                                                                        _react2["default"].createElement(
	                                                                                                                                            'div',
	                                                                                                                                            null,
	                                                                                                                                            '\u4E00\u3001  \u4F7F\u7528\u6761\u6B3E \u5728\u60A8\u4F7F\u7528DSSG\u6570\u636E\u5F00\u653E\u5171\u4EAB\u5E73\u53F0\uFF08\u4EE5\u4E0B\u7B80\u79F0\u672C\u5E73\u53F0\uFF09\u524D\uFF0C\u8BF7\u8BA4\u771F\u9605\u8BFB\u672C\u534F\u8BAE\u3002\u5982\u4F7F\u7528\u672C\u5E73\u53F0\uFF0C\u60A8\u5FC5\u987B\u5B8C\u5168\u63A5\u53D7\u672C\u534F\u8BAE\u4E2D\u6240\u5305\u542B\u7684\u6761\u6B3E\u3001\u6761\u4EF6\u548C\u5E73\u53F0\u901A\u544A\u3002'
	                                                                                                                        ),
	                                                                                                                        '\u672C\u5E73\u53F0\u6709\u6743\u4E0D\u7ECF\u63D0\u524D\u901A\u77E5\u968F\u65F6\u4FEE\u6539\u672C\u534F\u8BAE\u3002\u672C\u534F\u8BAE\u4E00\u7ECF\u53D8\u52A8\uFF0C\u5C06\u5728\u76F8\u5173\u9875\u9762\u63D0\u793A\u4FEE\u6539\u5185\u5BB9\uFF1B\u7528\u6237\u5982\u679C\u4E0D\u540C\u610F\u672C\u534F\u8BAE\u7684\u4FEE\u6539\uFF0C\u53EF\u4EE5\u653E\u5F03\u4F7F\u7528\u6216\u8005\u8BBF\u95EE\u672C\u5E73\u53F0\u6216\u53D6\u6D88\u5DF2\u7ECF\u83B7\u5F97\u7684\u670D\u52A1\uFF1B\u5982\u679C\u7528\u6237\u9009\u62E9\u5728\u672C\u534F\u8BAE\u4FEE\u6539\u540E\u7EE7\u7EED\u4F7F\u7528\u672C\u5E73\u53F0\uFF0C\u5219\u89C6\u4E3A\u7528\u6237\u5DF2\u7ECF\u63A5\u53D7\u672C\u534F\u8BAE\u7684\u4FEE\u6539\u3002',
	                                                                                                                        _react2["default"].createElement(
	                                                                                                                                            'div',
	                                                                                                                                            null,
	                                                                                                                                            '\u4E8C\u3001  \u7528\u6237\u63A5\u53D7\u6761\u6B3E \u7528\u6237\u5728\u8BBF\u95EE\u6216\u4F7F\u7528\u672C\u5E73\u53F0\u8FC7\u7A0B\u4E2D\uFF0C\u5FC5\u987B\u9075\u5FAA\u4EE5\u4E0B\u539F\u5219\uFF1A \uFF08\u4E00\uFF09\u9075\u5B88\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD\u6709\u5173\u4E92\u8054\u7F51\u7BA1\u7406\u7684\u76F8\u5173\u6CD5\u5F8B\u3001\u6CD5\u89C4\u548C\u89C4\u7AE0\uFF1B \uFF08\u4E8C\uFF09\u9075\u5B88\u6240\u6709\u4E0E\u7F51\u7EDC\u670D\u52A1\u6709\u5173\u7684\u7F51\u7EDC\u534F\u8BAE\u3001\u89C4\u5B9A\u548C\u7A0B\u5E8F\uFF1B \uFF08\u4E09\uFF09\u7981\u6B62\u5BF9\u5E73\u53F0\u8FDB\u884C\u6280\u672F\u6027\u7834\u574F\uFF0C\u4E0D\u5F97\u5E72\u6270\u6216\u59A8\u5BB3\u672C\u7F51\u7AD9\u63D0\u4F9B\u6B63\u5E38\u7684\u4E92\u8054\u7F51\u670D\u52A1\uFF1B \uFF08\u56DB\uFF09\u4E0D\u5F97\u5229\u7528\u672C\u5E73\u53F0\u8FDB\u884C\u4EFB\u4F55\u53EF\u80FD\u5BF9\u4E92\u8054\u7F51\u7684\u6B63\u5E38\u8FD0\u8F6C\u9020\u6210\u4E0D\u5229\u5F71\u54CD\u7684\u884C\u4E3A\uFF1B \uFF08\u4E94\uFF09\u4E0D\u5F97\u4E3A\u4EFB\u4F55\u975E\u6CD5\u76EE\u7684\u800C\u4F7F\u7528\u3001\u5229\u7528\u672C\u5E73\u53F0\uFF1B \uFF08\u516D\uFF09\u4E0D\u5F97\u5229\u7528\u672C\u5E73\u53F0\u6563\u5E03\u5E7F\u544A\u4EE5\u53CA\u5176\u5B83\u5546\u4E1A\u5316\u7684\u5BA3\u4F20\uFF1B \uFF08\u4E03\uFF09\u4E0D\u5F97\u5229\u7528\u672C\u5E73\u53F0\u53D1\u5E03\u6216\u4F20\u8F93\u4EFB\u4F55\u9A9A\u6270\u6027\u7684\u3001\u4E2D\u4F24\u4ED6\u4EBA\u7684\u3001\u8FB1\u9A82\u6027\u7684\u3001\u6050\u5413\u6027\u7684\u3001\u5EB8\u4FD7\u6DEB\u79FD\u7684\u6216\u5176\u4ED6\u4EFB\u4F55\u975E\u6CD5\u7684\u3001\u53EF\u80FD\u4EA7\u751F\u4E0D\u826F\u540E\u679C\u7684\u4FE1\u606F\u8D44\u6599\uFF0C\u4E0D\u5F97\u53D1\u5E03\u4EFB\u4F55\u5305\u542B\u79CD\u65CF\u3001\u6027\u522B\u3001\u5B97\u6559\u6709\u6B67\u89C6\u6027\u548C\u653B\u51FB\u6027\u7684\u4FE1\u606F\u5185\u5BB9\uFF1B \uFF08\u516B\uFF09\u7528\u6237\u53D1\u73B0\u4EFB\u4F55\u975E\u6CD5\u4F7F\u7528\u7528\u6237\u5E10\u53F7\u6216\u5B89\u5168\u6F0F\u6D1E\u7684\u60C5\u51B5\uFF0C\u5E94\u5F53\u7ACB\u5373\u544A\u77E5\u672C\u5E73\u53F0\u8FD0\u8425\u7BA1\u7406\u65B9\u3002'
	                                                                                                                        ),
	                                                                                                                        _react2["default"].createElement(
	                                                                                                                                            'div',
	                                                                                                                                            null,
	                                                                                                                                            '\u4E09\u3001  \u5E73\u53F0\u670D\u52A1\u5185\u5BB9 \u672C\u5E73\u53F0\u4E3B\u8981\u63D0\u4F9B\u6570\u636E\u5F00\u653E\u5171\u4EAB\u7B49\u529F\u80FD\u3002\u5E73\u53F0\u6570\u636E\u6D89\u53CA\u4E86\u8868\u683C\u3001\u6587\u672C\u3001\u56FE\u7247\u3001\u7B49\u5404\u7C7B\u5B9E\u65F6\u4E0E\u975E\u5B9E\u65F6\u7684\u6570\u636E\u3002'
	                                                                                                                        ),
	                                                                                                                        _react2["default"].createElement(
	                                                                                                                                            'div',
	                                                                                                                                            null,
	                                                                                                                                            '\u56DB\u3001  \u7528\u6237\u7684\u6743\u5229\u4E0E\u4E49\u52A1 \uFF08\u4E00\uFF09\u7528\u6237\u7684\u6743\u5229\u4E0E\u4E49\u52A1 \u7528\u6237\u5E94\u5728\u5E94\u7528\u672C\u5E73\u53F0\u6570\u636E\u8D44\u6E90\u6240\u4EA7\u751F\u7684\u6210\u679C\u4E2D\u6CE8\u660E\u6570\u636E\u8D44\u6E90\u6765\u6E90\u4E3A\u3010\u5355\u4F4D\u540D\u79F0\u3011\u3002 \uFF08\u4E8C\uFF09\u3010\u5355\u4F4D\u540D\u79F0\u3011\u7684\u6743\u5229\u4E0E\u4E49\u52A1 \u672C\u5E73\u53F0\u5305\u542B\u7684\u6240\u6709\u5185\u5BB9\uFF08\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\uFF1A\u6587\u672C\u3001\u56FE\u5F62\u3001\u56FE\u7247\u3001\u5730\u56FE\u3001LOGO\u6807\u8BC6\uFF0C\u7248\u9762\u8BBE\u8BA1\uFF0C\u4E13\u680F\u76EE\u5F55\u4E0E\u540D\u79F0\u3001\u5185\u5BB9\u5206\u7C7B\uFF09\u7684\u6240\u6709\u6743\u5F52\u3010\u5355\u4F4D\u540D\u79F0\u3011\u6240\u6709\u3002'
	                                                                                                                        ),
	                                                                                                                        _react2["default"].createElement(
	                                                                                                                                            'div',
	                                                                                                                                            null,
	                                                                                                                                            '\u4E94\u3001  \u514D\u8D23\u58F0\u660E \uFF08\u4E00\uFF09\u672C\u5E73\u53F0\u6240\u6709\u6570\u636E\u8D44\u6E90\u5747\u4E3A\u5355\u4F4D\u5728\u5F00\u653E\u5171\u4EAB\u4E1A\u52A1\u4E2D\u63D0\u4F9B\uFF0C\u672C\u5E73\u53F0\u6570\u636E\u8D44\u6E90\u63D0\u4F9B\u8005\u5BF9\u6240\u63D0\u4F9B\u6570\u636E\u7684\u5B8C\u6574\u6027\u3001\u51C6\u786E\u6027\u3001\u53CA\u65F6\u6027\u4E0D\u4F5C\u4EFB\u4F55\u627F\u8BFA\u6216\u62C5\u4FDD\uFF1B \uFF08\u4E8C\uFF09\u7528\u6237\u56E0\u4F7F\u7528\u672C\u5E73\u53F0\u6240\u63D0\u4F9B\u6570\u636E\u800C\u9020\u6210\u7684\u4EFB\u4F55\u635F\u5931\uFF0C\u7531\u7528\u6237\u81EA\u884C\u627F\u62C5\uFF1B \uFF08\u4E09\uFF09\u672C\u5E73\u53F0\u4FDD\u7559\u7531\u4E8E\u6CD5\u5F8B\u3001\u6CD5\u89C4\u3001\u89C4\u7AE0\u6216\u653F\u7B56\u8C03\u6574\u7B49\u539F\u56E0\u800C\u4FEE\u8BA2\u3001\u4E2D\u6B62\u3001\u7EC8\u6B62\u90E8\u5206\u6216\u5168\u90E8\u5E73\u53F0\u670D\u52A1\u7684\u6743\u5229\u3002'
	                                                                                                                        ),
	                                                                                                                        _react2["default"].createElement(
	                                                                                                                                            'div',
	                                                                                                                                            null,
	                                                                                                                                            '\u516D\u3001  \u9690\u79C1\u4FDD\u62A4\u58F0\u660E \u672C\u5E73\u53F0\u5C0A\u91CD\u5E76\u4FDD\u62A4\u6240\u6709\u5E73\u53F0\u7528\u6237\u7684\u4E2A\u4EBA\u9690\u79C1\u6743\uFF0C\u672A\u7ECF\u7528\u6237\u8BB8\u53EF\u6216\u6839\u636E\u76F8\u5173\u6CD5\u5F8B\u3001\u6CD5\u89C4\u7684\u5F3A\u5236\u6027\u89C4\u5B9A\uFF0C\u672C\u5E73\u53F0\u4E0D\u4E3B\u52A8\u5C06\u7528\u6237\u4E2A\u4EBA\u4FE1\u606F\u6CC4\u9732\u7ED9\u4EFB\u4F55\u7B2C\u4E09\u65B9\u3002'
	                                                                                                                        )
	                                                                                                    );
	                                                                                }
	                                                            }, { "value": function value(config) {
	                                                                                                    return _react2["default"].createElement(
	                                                                                                                        'div',
	                                                                                                                        { className: 'checkboxAgreement' },
	                                                                                                                        _react2["default"].createElement(
	                                                                                                                                            FormItem,
	                                                                                                                                            null,
	                                                                                                                                            _global.Global.getState().aiForm.sbglStep1.form.getFieldDecorator("tyxy", {
	                                                                                                                                                                initialValue: false
	                                                                                                                                            })(_react2["default"].createElement(
	                                                                                                                                                                _checkbox2["default"],
	                                                                                                                                                                null,
	                                                                                                                                                                '\u6211\u540C\u610F\u4E0A\u8FF0\u6761\u6B3E'
	                                                                                                                                            ))
	                                                                                                                        )
	                                                                                                    );
	                                                                                }
	                                                            }]
	                                        }]
	                    });
	});

/***/ }
]);