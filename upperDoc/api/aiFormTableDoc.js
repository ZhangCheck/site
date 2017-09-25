webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(95);

	var _table = __webpack_require__(93);

	var _table2 = _interopRequireDefault(_table);

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

	var AiFormTableDoc = function (_Component) {
	  (0, _inherits3["default"])(AiFormTableDoc, _Component);

	  function AiFormTableDoc(props) {
	    (0, _classCallCheck3["default"])(this, AiFormTableDoc);
	    return (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));
	  }

	  AiFormTableDoc.prototype.render = function render() {
	    var dataSource = [{
	      key: 'config',
	      name: 'config',
	      age: 'object',
	      address: 'aiFormTable总配置'
	    }, {
	      key: 'config.columns',
	      name: 'config.columns',
	      age: 'array',
	      address: '表格标头数据, 详情查看antDesign'
	    }, {
	      key: 'config.dataSource',
	      name: 'config.dataSource',
	      age: 'array',
	      address: '表格数据, 详情查看antDesign'
	    }, {
	      key: 'config.addTemplate',
	      name: 'config.addTemplate',
	      age: 'object',
	      address: '表格新增行时行数据模板'
	    }, {
	      key: 'form',
	      name: 'form',
	      age: 'object',
	      address: '父层AiForm的form,未来将废止此参数，改到内容自动获取form'
	    }, {
	      key: 'buttons',
	      name: 'buttons',
	      age: 'string',
	      address: '未来将废止此参数，改到config内部去'
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
	        'AiFormTable\u7EC4\u4EF6'
	      ),
	      _react2["default"].createElement(
	        'div',
	        { className: 'p' },
	        _react2["default"].createElement(
	          'div',
	          null,
	          'AiFormTable\u7EC4\u4EF6\u662FAiFormItem\u7684\u4E00\u4E2A\u7279\u4F8B\uFF0C\u5B83\u4F7F\u7528DataList\u4E00\u6837\u7684\u5E03\u5C40\u65B9\u5F0F\u6765\u7ED8\u5236\u591A\u884C\u8868\u5355\u9879\u3002',
	          _react2["default"].createElement(
	            _reactRouter.Link,
	            { to: '/aiFormTableDemo' },
	            '\u67E5\u770B\u5B9E\u4F8B'
	          )
	        )
	      ),
	      _react2["default"].createElement(
	        'h3',
	        null,
	        'AiFormTable\u7EC4\u4EF6\u53C2\u6570'
	      ),
	      _react2["default"].createElement(
	        'div',
	        { className: 'p' },
	        _react2["default"].createElement(_table2["default"], { pagination: false, columns: columns, dataSource: dataSource })
	      )
	    );
	  };

	  return AiFormTableDoc;
	}(_react.Component);

	AiFormTableDoc = (0, _component2["default"])('aiFormDoc')(AiFormTableDoc);

	(0, _jsonp2["default"])("aiFormTableDoc")(function (arg, callback) {
	  callback({
	    "success": true,
	    "data": _react2["default"].createElement(AiFormTableDoc, { id: 'inst' })
	  });
	});

/***/ }
]);