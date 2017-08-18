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

	var _component = __webpack_require__(11);

	var _component2 = _interopRequireDefault(_component);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var CustomComponent = function (_Component) {
	    (0, _inherits3["default"])(CustomComponent, _Component);

	    function CustomComponent(props) {
	        (0, _classCallCheck3["default"])(this, CustomComponent);
	        return (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));
	    }

	    CustomComponent.prototype.render = function render() {
	        return _react2["default"].createElement('div', null);
	    };

	    return CustomComponent;
	}(_react.Component);

	CustomComponent = (0, _component2["default"])('dataListEdit', {}, function (state, dispatchProps, ownProps) {
	    return { dlState: state.dataList[ownProps.params.dataListId] };
	})(CustomComponent);

	(0, _jsonp2["default"])("datalistEditDemo")(function (args, callback) {
	    // let target = args.target;
	    var temp = new CustomComponent();
	    var editValue = temp.props.dlState.DetailMsgDataApi.data;
	    callback({
	        "success": true,
	        "data": [{
	            "data": [
	            /**
	             * data数据标准
	             * 标头和显示框宽度（labelCol和wrapperCol），先读每个标签内的，如果没有再读上面总的，
	             * “dictId”为下拉选择字典数据的id，存在就调用字典接口
	             * 可自定义标签，如下（1）号位子
	             * column 为单个标签占有的列数  ，可通过和labelCol、wrapperCol调试样式
	             * 数据中可有属性：一下
	             * field：唯一标识，type：标签类型（input/select/checkbox/switch/radio/timePicker/rangePicker/datePicker/inputNumber等）           必须有
	             * column：标签所占总的列数中的几列，labelCol：标头宽度，wrapperCol：数据框宽度，validate：规则，options：checkbox和select数据          选择有
	             * defaultValue：默认值，defaultValue显示数据， name：标签的名称，                                                                 选择有
	             *      "number":"6",
	                 "name":"人员库",
	                 "englishName":"People",
	                 "unicode":"01",
	                 "remarks":"人员信息"
	             */
	            // {"name":"服务类型","type":"input","column":1,"labelCol":8,"wrapperCol":16,"field":"serviceType","dictId":"serviceType","placeholder":"请选择..."},
	            // {"name":"字典项获取数据","type":"select","field":"boxs","dictId":"21","placeholder":"请选择..."},
	            // //无字典项 不要存在 dictId属性
	            // {"name":"无字典项","type":"select","field":"sex","placeholder":"请选择...","options":["篮球","足球","乒乓球"]},
	            { "name": "序号", "type": "input", "field": "number", "defaultValue": editValue.number ? editValue.number : "" }, { "name": "名称", "type": "input", "field": "name", "defaultValue": editValue.name ? editValue.name : "" }, { "name": "英文名称", "type": "input", "field": "englishName", "defaultValue": editValue.englishName ? editValue.englishName : "" }, { "name": "编码", "type": "input", "field": "unicode", "defaultValue": editValue.unicode ? editValue.unicode : "" }, { "name": "备注", "type": "input", "field": "remarks", "defaultValue": editValue.remarks ? editValue.remarks : "" }]
	        }]
	    });
	});

/***/ }
]);