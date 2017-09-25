webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(10);

	var _AiFormTable = __webpack_require__(310);

	var _AiFormTable2 = _interopRequireDefault(_AiFormTable);

	var _dataFormat = __webpack_require__(64);

	var _MainKeyIcon = __webpack_require__(1142);

	var _MainKeyIcon2 = _interopRequireDefault(_MainKeyIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("mlflglEditData")(function (args, callback) {
		var target = args.target;
		var state = _global.Global.getState();
		var detailValue = state.dataList.mlflgl.detailMsgDataApi && state.dataList.mlflgl.detailMsgDataApi.data ? state.dataList.mlflgl.detailMsgDataApi.data[0] : {};
		var values = {},
		    dirCode = void 0,
		    dirName = void 0;
		var inputType = false;
		if (detailValue.id) {
			dirCode = detailValue.dirCode;
			dirName = detailValue.dirName;
			values = { id: detailValue.id };
			inputType = true;
		} else {
			detailValue = {};
		}

		callback({
			"success": true,
			"data": [{
				"title": "编辑目录分类",
				"column": 1,
				"showTitle": true,
				"buttonConfigs": {
					"onSubmitApi": { apiName: "mlflglEditInfo", body: (0, _extends3["default"])({}, values) },
					"getValue": { id: "aFBCD", index: 0 },
					"buttons": [{ "type": "button", "value": "返回", mark: "mlflgl", "field": "back", props: { btnType: "primary", "style": { "float": "right" } } }, { "type": "button", "value": "确定", mark: "mlflgl", "field": "submit", props: { "style": { "float": "right" }, htmlType: "submit" } }]
				},
				"data": [{ "type": "input", "name": "目录分类名称", "field": "dirName", "defaultValue": detailValue.dirName ? detailValue.dirName : "", "validate": [{ "required": true, "message": '不能为空 !' }, {
						validator: function validator(rule, value, callback) {
							if (value && value != "") {
								if (dirName && value == dirName) {
									callback();
								} else if (value.length > 50) {
									callback("长度限制在50以内！");
								} else {
									_global.Global.requestApi({ apiName: "checkDirNameAndDirCode", body: { type: "1", dirNameOrCode: value }, next: function next(action) {
											if (action.data == false) {
												callback("目录分类名称已存在！");
											} else {
												callback();
											}
										} });
								}
							} else {
								callback();
							}
						}
					}] }, { "type": "input", "name": "目录分类编码", "field": "dirCode", props: { disabled: inputType }, "defaultValue": detailValue.dirCode ? detailValue.dirCode : "", "validate": [{ "required": true, "message": '不能为空 !' }, {
						validator: function validator(rule, value, callback) {
							if (value && value != "") {
								if (!/^[\w-]+$/.test(value)) {
									callback('支持英文,数字,下划线，短横线！');
								} else {
									if (dirCode && value == dirCode) {
										callback();
									} else if (value.length > 20) {
										callback("长度限制在20以内！");
									} else {
										_global.Global.requestApi({ apiName: "checkDirNameAndDirCode", body: { type: "2", dirNameOrCode: value }, next: function next(action) {
												if (action.data == false) {
													callback("目录分类编码已存在！");
												} else {
													callback();
												}
											} });
									}
								}
							} else {
								callback();
							}
						}
					}] }, { "type": "input", "name": "描述", "field": "dirDesc", "defaultValue": detailValue.dirDesc ? detailValue.dirDesc : "" }]
			}]
		});
	});

/***/ },

/***/ 1142:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _css = __webpack_require__(44);

	var _icon = __webpack_require__(19);

	var _icon2 = _interopRequireDefault(_icon);

	var _defineProperty2 = __webpack_require__(7);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

	var _global = __webpack_require__(10);

	var _interfaces = __webpack_require__(35);

	var _demoType = __webpack_require__(146);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var rootState = 'aiFormTable'; //import styles from './Footer.less';

	var MainKeyIcon = function (_Component) {
	    (0, _inherits3["default"])(MainKeyIcon, _Component);

	    function MainKeyIcon(props) {
	        (0, _classCallCheck3["default"])(this, MainKeyIcon);
	        return (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));
	        /*Global.getState().aiFormTable[this.props.id].config.dataSource.forEach((items)=>{
	            //items.pkType = "tag-o";
	            //items.pk = false
	        })*/
	    }

	    MainKeyIcon.prototype.onClickIcon = function onClickIcon(index) {

	        var aiFormTables = _global.Global.getState().aiFormTable[this.props.id].config.dataSource;
	        var aiFormTable = aiFormTables[index];

	        if (aiFormTable && aiFormTable.pk == true) {
	            aiFormTable.pk = false;
	            //aiFormTable.pkType='tag-o';
	            _global.Global.mark({
	                aiFormTable: (0, _defineProperty3["default"])({}, this.props.id, {
	                    config: {
	                        dataSource: aiFormTables
	                    }
	                })
	            });
	        } else if (aiFormTable && (!aiFormTable.pk || aiFormTable.pk == false)) {
	            aiFormTable.pk = true;
	            // aiFormTable.pkType='tag';
	            //主键的level必为3级
	            aiFormTable.level = "3";
	            aiFormTable["level_field_" + index] = "3";
	            aiFormTable.key = Math.random();
	            _global.Global.mark({
	                aiFormTable: (0, _defineProperty3["default"])({}, this.props.id, {
	                    config: {
	                        dataSource: aiFormTables
	                    }
	                })
	            });
	        }
	    };

	    MainKeyIcon.prototype.render = function render() {
	        var state = this.props.state.config.dataSource[this.props.index];
	        return _react2["default"].createElement(_icon2["default"], { type: 'dssg-key', title: "主键", style: { fontSize: 16, color: state.pk == true ? "#f59505" : "#75c7ff" }, onClick: this.onClickIcon.bind(this.props.target, this.props.index) });
	    };

	    return MainKeyIcon;
	}(_react.Component);

	exports["default"] = (0, _component2["default"])(rootState, {}, function (state, props) {
	    return {};
	})(MainKeyIcon);
	module.exports = exports['default'];

/***/ }

});