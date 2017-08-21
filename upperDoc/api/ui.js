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

	var UI = function (_Component) {
		(0, _inherits3["default"])(UI, _Component);

		function UI(props) {
			(0, _classCallCheck3["default"])(this, UI);
			return (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));
		}

		UI.prototype.render = function render() {
			return _react2["default"].createElement(
				'div',
				{ style: { width: '100%', height: '90%', overFlow: 'hidden' } },
				_react2["default"].createElement('iframe', { style: { width: '100%', height: '100%', border: 'none' }, src: 'https://ant.design/docs/react/introduce-cn' })
			);
		};

		return UI;
	}(_react.Component);

	UI = (0, _component2["default"])('ui')(UI);

	(0, _jsonp2["default"])("ui")(function (arg, callback) {
		callback({
			"success": true,
			"data": _react2["default"].createElement(UI, { id: 'inst' })
		});
	});

/***/ }
]);