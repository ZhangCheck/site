webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(26);

	var _button = __webpack_require__(23);

	var _button2 = _interopRequireDefault(_button);

	var _css2 = __webpack_require__(48);

	var _input = __webpack_require__(74);

	var _input2 = _interopRequireDefault(_input);

	var _css3 = __webpack_require__(31);

	var _modal = __webpack_require__(29);

	var _modal2 = _interopRequireDefault(_modal);

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(6);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(5);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _css4 = __webpack_require__(54);

	var _form = __webpack_require__(53);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(10);

	var _component = __webpack_require__(11);

	var _component2 = _interopRequireDefault(_component);

	var _AiFormTable = __webpack_require__(310);

	var _AiFormTable2 = _interopRequireDefault(_AiFormTable);

	var _dataFormat = __webpack_require__(64);

	var _MainKeyIcon = __webpack_require__(1142);

	var _MainKeyIcon2 = _interopRequireDefault(_MainKeyIcon);

	var _history = __webpack_require__(32);

	var _history2 = _interopRequireDefault(_history);

	var _jsCookie = __webpack_require__(137);

	var _jsCookie2 = _interopRequireDefault(_jsCookie);

	var _App = __webpack_require__(194);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var FormItem = _form2["default"].Item;

	var Demo2 = function (_Component) {
	    (0, _inherits3["default"])(Demo2, _Component);

	    function Demo2(props) {
	        (0, _classCallCheck3["default"])(this, Demo2);
	        return (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));
	    }

	    Demo2.prototype.handleSubmit = function handleSubmit(e) {
	        e.preventDefault();
	        var values = this.props.form.getFieldsValue();
	        if (values.oldPassword == undefined || values.oldPassword == null || values.newPassword == undefined || values.newPassword == null || values.againNewPassword == undefined || values.againNewPassword == null) {
	            _global.Global.mark({ framework: { modifyPasswordTip: "密码不能为空" } });
	        } else if (values.newPassword != values.againNewPassword) {
	            _global.Global.mark({ framework: { modifyPasswordTip: "新密码两次输入不一致" } });
	        } else {
	            _global.Global.requestApi({ apiName: "updatePassword", body: { newPassword: values.newPassword }, next: function next(action) {
	                    if (action.data == true) {
	                        _modal2["default"].warning({
	                            title: '提示',
	                            content: "修改密码成功！",
	                            onOk: function onOk() {
	                                _global.Global.mark({
	                                    framework: {
	                                        visibleHidden: false,
	                                        loginRandom: Math.random(),
	                                        loginApi: null,
	                                        loginOutApi: null,
	                                        mesTip: null,
	                                        baseCode: null,
	                                        rememberPassword: false
	                                    }
	                                });
	                                _jsCookie2["default"].remove('dssgUserInfo', { path: '/' });
	                                _history2["default"].push("/");
	                            }
	                        });
	                    }
	                } }, { framework: { updatePassword: null } });
	        }
	    };

	    Demo2.prototype.checkOldPassword = function checkOldPassword(e) {
	        var values = this.props.form.getFieldsValue();
	        if (values.oldPassword != undefined || values.oldPassword != null) {
	            _global.Global.requestApi({ apiName: "checkOriginalPwd", body: { originalPassword: values.oldPassword }, next: function next(action) {
	                    if (action.data == false) {
	                        _global.Global.mark({ framework: { modifyPasswordTip: "旧密码输入不正确" } });
	                    } else {
	                        _global.Global.mark({ framework: { modifyPasswordTip: null } });
	                    }
	                } }, { framework: { checkOldPassword: null } });
	        }
	    };

	    Demo2.prototype.render = function render() {
	        var getFieldDecorator = this.props.form.getFieldDecorator;

	        return this.props.framework.visibleHidden && _react2["default"].createElement(
	            'div',
	            { className: _App2["default"].revisePassword },
	            _react2["default"].createElement(
	                'div',
	                { className: _App2["default"].reviseRel },
	                _react2["default"].createElement(
	                    'div',
	                    { className: _App2["default"].reviseContent },
	                    _react2["default"].createElement(
	                        _form2["default"],
	                        { horizontal: true, className: _App2["default"].revisePasForm, onSubmit: this.handleSubmit.bind(this) },
	                        _react2["default"].createElement(
	                            'div',
	                            { className: _App2["default"].revisePasTit },
	                            '\u4FEE\u6539\u5BC6\u7801'
	                        ),
	                        _react2["default"].createElement(
	                            'div',
	                            { className: _App2["default"].reviseTip },
	                            this.props.framework.modifyPasswordTip
	                        ),
	                        _react2["default"].createElement(
	                            'div',
	                            { className: _App2["default"].reviseItemAll },
	                            _react2["default"].createElement(
	                                FormItem,
	                                null,
	                                _react2["default"].createElement(
	                                    'span',
	                                    { className: _App2["default"].itemFont },
	                                    '\u65E7\u5BC6\u7801\uFF1A'
	                                ),
	                                getFieldDecorator('oldPassword')(_react2["default"].createElement(_input2["default"], { id: 'oldPwdInput', placeholder: '\u8BF7\u8F93\u5165\u65E7\u5BC6\u7801', className: _App2["default"].revisePasInput,
	                                    style: { width: "70%" },
	                                    onBlur: this.checkOldPassword.bind(this) }))
	                            ),
	                            _react2["default"].createElement(
	                                FormItem,
	                                { style: { position: "relative" } },
	                                _react2["default"].createElement(
	                                    'span',
	                                    { className: _App2["default"].itemFont },
	                                    '\u65B0\u5BC6\u7801\uFF1A'
	                                ),
	                                getFieldDecorator('newPassword')(_react2["default"].createElement(_input2["default"], { type: 'password', placeholder: '\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801', className: _App2["default"].revisePasInput,
	                                    style: { width: "70%" } }))
	                            ),
	                            _react2["default"].createElement(
	                                FormItem,
	                                null,
	                                _react2["default"].createElement(
	                                    'span',
	                                    { className: _App2["default"].itemFont },
	                                    '\u518D\u6B21\u8F93\u5165\u5BC6\u7801\uFF1A'
	                                ),
	                                getFieldDecorator('againNewPassword')(_react2["default"].createElement(_input2["default"], { type: 'password', placeholder: '\u8BF7\u518D\u6B21\u8F93\u5165\u65B0\u5BC6\u7801', className: _App2["default"].revisePasInput,
	                                    style: { width: "70%" } }))
	                            ),
	                            _react2["default"].createElement(
	                                _button2["default"],
	                                { style: { padding: "2px 15px 5px 0" }, className: _App2["default"].loginButton, htmlType: 'submit' },
	                                '\u786E\u8BA4'
	                            )
	                        )
	                    )
	                )
	            )
	        );
	    };

	    return Demo2;
	}(_react.Component);

	Demo2 = _form2["default"].create()(Demo2);
	Demo2 = (0, _component2["default"])('Demo2', {}, function (state) {
	    return {
	        framework: state.framework
	    };
	})(Demo2);

	(0, _jsonp2["default"])("Demo2")(function (arg, callback) {
	    callback({
	        "success": true,
	        "data": _react2["default"].createElement(Demo2, { id: 'Demo2_inst' })
	    });
	});

/***/ },

/***/ 194:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"mainCon2":"mainCon2___3hNlK","menuDefaultState":"menuDefaultState___1ruB6","mainDefaultState":"mainDefaultState___naVRA","openMenu":"openMenu___2yk0V","openMenuAn":"openMenuAn___ayq1N","openMain":"openMain___3EJzH","openMainAn":"openMainAn___11SBe","closeMenu":"closeMenu___2pw9M","closeMenuAn":"closeMenuAn___2_6uI","closeMain":"closeMain___1MtTG","closeMainAn":"closeMainAn___1zgHr","loginDlg":"loginDlg___2VvSd","loginTab":"loginTab___1QZXV","loginForm":"loginForm___1hQK_","loginButton":"loginButton___5c9Up","loginSpan":"loginSpan___1Y-_L","forgotMi":"forgotMi___1gsO1","userLogin":"userLogin___2XA_6","userLoginSpan":"userLoginSpan___EiJzu","forgetS":"forgetS___UGko_","loginHeader":"loginHeader___21clT","loginLogo":"loginLogo___18JnC","loginFooter":"loginFooter___4Ck3h","Dssg":"Dssg___2nDpY","DssgRight":"DssgRight___2W4jY","revisePassword":"revisePassword___2UOdB","reviseRel":"reviseRel___3b9TH","reviseContent":"reviseContent___qwr6u","revisePasForm":"revisePasForm___8MxuT","revisePasTit":"revisePasTit___NlSTa","reviseItemAll":"reviseItemAll___2TpQV","itemFont":"itemFont___3m971","revisePasInput":"revisePasInput___q3XQ5","reviseTip":"reviseTip___1jbpS","reviseTip2":"reviseTip2___3ztOQ","mainConRightConWidth":"mainConRightConWidth___3PIEv","mainConRightConWidth2":"mainConRightConWidth2___2-_tb","mainConMenuWidth":"mainConMenuWidth___pMVsn","mainConMenuIn":"mainConMenuIn___2c2FA","menuTitle":"menuTitle___3e0F1","footer":"footer___3YKjL","header":"header___1O2A5","headerContent1":"headerContent1___3jeOG","headerContent2":"headerContent2___2dl0_","headUnit":"headUnit___13xqw","navigatorUl":"navigatorUl___1dvhh","navigateSearchArea":"navigateSearchArea___1L1DY","popOverContent":"popOverContent___3nBWw","title":"title___3Wv84","titleLeft":"titleLeft___1dblQ","titleRight":"titleRight___21Eg0","pictureAbstractsContent":"pictureAbstractsContent___2mUw-","leftPicture":"leftPicture___2OxoO","rightAbstracts":"rightAbstracts___1qRDU","leftRatingContent":"leftRatingContent___HWiQg","rightAiFormContent":"rightAiFormContent___mr7T4","mainContent":"mainContent___3UKHC","everyUserRating":"everyUserRating___2GqMl","userRatingTitle":"userRatingTitle___3CUhS","ratingContent":"ratingContent___J80Xz","userRatingAll":"userRatingAll___2vHuQ","allRatingTitleContent":"allRatingTitleContent___3_ktI","leave":"leave___2pDd7","enter":"enter____ZoMb"};

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