webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(268);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(12);

	var _CustomComponent = __webpack_require__(976);

	var _CustomComponent2 = _interopRequireDefault(_CustomComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("component")(function (arg, callback) {
	    callback({
	        "success": true,
	        "data": _react2["default"].createElement(
	            'div',
	            { className: 'p' },
	            _react2["default"].createElement(
	                'h3',
	                null,
	                '\u81EA\u5B9A\u4E49\u7EC4\u4EF6'
	            ),
	            _react2["default"].createElement(
	                'div',
	                { className: 'p' },
	                _react2["default"].createElement(
	                    'div',
	                    null,
	                    '\u7EC4\u4EF6\u5B58\u50A8\u5728src/compoents\u4E0B,\u4EE5\u4E0B\u662FCustomCompoent\u4F8B\u5B50\uFF1A'
	                ),
	                _react2["default"].createElement(
	                    'h4',
	                    null,
	                    '\u7EC4\u4EF6\u5B9E\u4F8B\u6548\u679C'
	                ),
	                _react2["default"].createElement(
	                    'div',
	                    { className: 'p' },
	                    _react2["default"].createElement(_CustomComponent2["default"], { id: 'comp1' }),
	                    _react2["default"].createElement(_CustomComponent2["default"], { id: 'comp2' })
	                ),
	                _react2["default"].createElement(
	                    'h4',
	                    null,
	                    '\u521B\u5EFA\u7EC4\u4EF6'
	                ),
	                _react2["default"].createElement(
	                    'div',
	                    { className: 'p' },
	                    _react2["default"].createElement(
	                        'div',
	                        null,
	                        '\u4E00\uFF0C\u5B9A\u4E49\u7EC4\u4EF6\u5728\u6811\u4E2D\u7684\u6839'
	                    ),
	                    _react2["default"].createElement('pre', { dangerouslySetInnerHTML: { __html: '//reducers/index.js\n...\ncustomComponent:markReducer("customComponent"),//\u5728\u6811\u4E2D\u5B9A\u4E49\u540D\u4E3A\u201CcustomComponent\u201D\u7684\u6839\u8282\u70B9\uFF0C\u7528\u4EE5\u5B58\u50A8CustomComponent\u7EC4\u4EF6\u7684\u6240\u6709\u72B6\u6001\n...\n' } }),
	                    _react2["default"].createElement(
	                        'div',
	                        null,
	                        '\u4E8C\uFF0C\u65B0\u5EFA\u6837\u5F0F\u6587\u4EF6components/CustomComponent.less'
	                    ),
	                    _react2["default"].createElement('pre', { dangerouslySetInnerHTML: { __html: '//components/CustomComponent.less\n.text{\n    color:red\n}' } }),
	                    _react2["default"].createElement(
	                        'div',
	                        null,
	                        '\u4E09\uFF0C\u65B0\u5EFA\u7EC4\u4EF6\u6587\u4EF6components/CustomComponent.js'
	                    ),
	                    _react2["default"].createElement('pre', { dangerouslySetInnerHTML: { __html: '//components/CustomComponent.js\nimport styles from &#39;./CustomComponent.less&#39;; //\u5BFC\u5165\u8BE5\u7EC4\u4EF6\u7684\u6837\u5F0F\nimport React, { Component, PropTypes } from &#39;react&#39;; //\u5BFC\u5165react\u57FA\u7C7B\nimport connect from &#39;../core/component&#39;;//\u5BFC\u5165 \u7EC4\u4EF6-\u6811-\u8FDE\u63A5\u5668\nimport Global from &#39;../core/global&#39;;//\u5BFC\u5165\u901A\u7528\u65B9\u6CD5\n\nclass Demo extends Component{  //\u5B9A\u4E49\u7EC4\u4EF6\u7C7B\n    constructor(props){ //\u6784\u9020\u51FD\u6570\n        super(props);\n        Global.mark({   //\u521D\u59CB\u5316\u6811\u4E2D\u6839\n            customComponent:{\n                [this.props.id]:{\n                    node1:&quot;OldValue&quot;,\n                    clicked:0\n                }\n            }\n        },"CustomComponent_init")\n    }\n    onClick(){          //click\u4E8B\u4EF6\u5904\u7406\n        Global.mark({\n            customComponent:{\n                [this.props.id]:{\n                    node1:&quot;NewValue&quot;,\n                    clicked:this.props.state.clicked+1\n                }\n            }\n        },"CustomComponent_click")\n    }\n    render(){            //\u6E32\u67D3\u9875\u9762\n        let state = this.props.state;//or Global.getState().customComponent[this.props.id];\n        if(!state) return &lt;div&gt;...&lt;/div&gt;\n        return  &lt;div style={{marginTop:10}}&gt;\n                    &lt;span className={styles.text}&gt;{this.props.id}:{state.node1}-{state.clicked}&lt;/span&gt; \n                    &lt;Button type=&#39;primary&#39; onClick={this.onClick.bind(this)}&gt;\u70B9\u6211&lt;/Button&gt;\n                &lt;/div&gt;\n    }\n}\n' } })
	                ),
	                _react2["default"].createElement(
	                    'h4',
	                    null,
	                    '\u4F7F\u7528\u7EC4\u4EF6'
	                ),
	                _react2["default"].createElement(
	                    'div',
	                    { className: 'p' },
	                    _react2["default"].createElement(
	                        'div',
	                        null,
	                        '\u9875\u9762\u4E2D\u4F7F\u7528\u7EC4\u4EF6:',
	                        _react2["default"].createElement('pre', { dangerouslySetInnerHTML: { __html: '//somePage.js\n...\nimport CustomComponent from &#39;../components/CustomComponent&#39;; //\u5BFC\u5165\u7EC4\u4EF6\n...\nrender(){\n    return  &lt;div&gt; \n                &lt;CustomComponent id=&#39;comp1&#39;/&gt; //\u521B\u5EFA\u7EC4\u4EF6\u5B9E\u4F8B\n                &lt;CustomComponent id=&#39;comp2&#39;/&gt; //\u521B\u5EFA\u7EC4\u4EF6\u5B9E\u4F8B\n            &lt;/div&gt;\n}\n' } }),
	                        _react2["default"].createElement(
	                            'div',
	                            null,
	                            '\u7EC4\u4EF6\u5728\u6811\u4E2D\u6309id\u653E\u7F6E:',
	                            _react2["default"].createElement('pre', { dangerouslySetInnerHTML: { __html: '//\u6811\n{\n    customComponent:{\n        comp1:{\n            node1:"OldValue",\n            clicked:0\n        },\n        comp2:{\n            node1:"OldValue",\n            clicked:0\n        }\n    }\n}' } })
	                        ),
	                        _react2["default"].createElement(
	                            'div',
	                            null,
	                            '\u70B9\u51FBcomp1\u7684"\u70B9\u6211"\u540E\uFF0C\u6811\u53D8\u4E3A',
	                            _react2["default"].createElement('pre', { dangerouslySetInnerHTML: { __html: '//\u70B9\u51FBcomp1\u540E\u7684\u6811\n{\n    customComponent:{\n        comp1:{\n            node1:"NewValue",\n            clicked:1\n        },\n        comp2:{\n            node1:"OldValue",\n            clicked:0\n        }\n    }\n}' } })
	                        )
	                    )
	                )
	            )
	        )
	    });
	});

/***/ },

/***/ 976:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _css = __webpack_require__(40);

	var _button = __webpack_require__(31);

	var _button2 = _interopRequireDefault(_button);

	var _defineProperty2 = __webpack_require__(7);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(6);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(5);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _CustomComponent = __webpack_require__(1518);

	var _CustomComponent2 = _interopRequireDefault(_CustomComponent);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _component = __webpack_require__(14);

	var _component2 = _interopRequireDefault(_component);

	var _global = __webpack_require__(12);

	var _global2 = _interopRequireDefault(_global);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var Demo = function (_Component) {
	    (0, _inherits3["default"])(Demo, _Component);

	    function Demo(props) {
	        (0, _classCallCheck3["default"])(this, Demo);

	        var _this = (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));

	        _global2["default"].mark({
	            customComponent: (0, _defineProperty3["default"])({}, _this.props.id, {
	                node1: "OldValue",
	                clicked: 0
	            })
	        }, "CustomComponent_init");
	        return _this;
	    }

	    Demo.prototype.onClick = function onClick() {
	        _global2["default"].mark({
	            customComponent: (0, _defineProperty3["default"])({}, this.props.id, {
	                node1: "NewValue",
	                clicked: this.props.state.clicked + 1
	            })
	        }, "CustomComponent_click");
	    };

	    Demo.prototype.render = function render() {
	        var state = this.props.state; //or Global.getState().customComponent[this.props.id];
	        if (!state) return _react2["default"].createElement(
	            'div',
	            null,
	            '...'
	        );
	        return _react2["default"].createElement(
	            'div',
	            { style: { marginTop: 10 } },
	            _react2["default"].createElement(
	                'span',
	                { className: _CustomComponent2["default"].text },
	                this.props.id,
	                ':',
	                state.node1,
	                '-',
	                state.clicked
	            ),
	            _react2["default"].createElement(
	                _button2["default"],
	                { type: 'primary', onClick: this.onClick.bind(this) },
	                '\u70B9\u6211'
	            )
	        );
	    };

	    return Demo;
	}(_react.Component);

	exports["default"] = (0, _component2["default"])("customComponent", null)(Demo);
	module.exports = exports['default'];

/***/ },

/***/ 1518:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"text":"text___eLxz6"};

/***/ }

});