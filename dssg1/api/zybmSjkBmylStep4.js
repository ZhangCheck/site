webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(61);

	var _table = __webpack_require__(60);

	var _table2 = _interopRequireDefault(_table);

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(10);

	var _BasicMessage = __webpack_require__(1021);

	var _BasicMessage2 = _interopRequireDefault(_BasicMessage);

	var _dataFormat = __webpack_require__(64);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("zybmSjkBmylStep4")(function (args, callback) {
	    var states = _global.Global.getState();
	    var target = args.target;
	    var detailMsg = states.aiForm.zybmSjkTxbmsqStep1 && states.aiForm.zybmSjkTxbmsqStep1.detailMsgDataApi && states.aiForm.zybmSjkTxbmsqStep1.detailMsgDataApi.data ? states.aiForm.zybmSjkTxbmsqStep1.detailMsgDataApi.data : {};
	    var sjkValuesStep1 = states.aiForm.zybmSjkTxbmsqStep1.values;
	    if (detailMsg.id) {
	        sjkValuesStep1.id = detailMsg.id;
	    }
	    var sjkValuesStep2 = states.aiForm.zybmSjkTxyshStep2.values;
	    var metadataDetail = (0, _extends3["default"])({}, sjkValuesStep2, { resType: sjkValuesStep1.resType });
	    metadataDetail.filePath = metadataDetail.attachmentId && metadataDetail.attachmentId.length > 0 && metadataDetail.attachmentId[0].response ? metadataDetail.attachmentId[0].response.filesObj[0].filePath : metadataDetail.attachmentId && metadataDetail.attachmentId.length > 0 && metadataDetail.attachmentId[0].filePath ? metadataDetail.attachmentId[0].filePath : null;
	    sjkValuesStep2.attachmentId = metadataDetail.attachmentId && metadataDetail.attachmentId.length > 0 && metadataDetail.attachmentId[0].response ? metadataDetail.attachmentId[0].response.filesId[0] : metadataDetail.attachmentId && metadataDetail.attachmentId.length > 0 && metadataDetail.attachmentId[0].uid ? metadataDetail.attachmentId[0].uid : "";
	    var themeName = (0, _dataFormat.gettreeSelectName)(states, "themeType", sjkValuesStep2.themeType);
	    var industryTypeName = (0, _dataFormat.gettreeSelectName)(states, "industryType", sjkValuesStep2.industryType);
	    metadataDetail.themeName = themeName;
	    var catalogId = states.mainConMenu.selected && states.mainConMenu.selected.length > 0 ? states.mainConMenu.selected[0] : "";
	    metadataDetail.industryTypeName = industryTypeName;
	    metadataDetail.catalogName = (0, _dataFormat.getLeftTreeName)(states, catalogId, "name");
	    var values = (0, _extends3["default"])({}, sjkValuesStep1, sjkValuesStep2, { catalogId: catalogId, themeName: themeName, industryTypeName: industryTypeName });
	    var config = [{
	        "title": "元数据基本信息",
	        "column": 1,
	        "showTitle": false,
	        "childrenContentNoBorder": true,
	        "childrenContentFormItemHeightLow": true,
	        "titleIcon": "file-text",
	        "data": _react2["default"].createElement(_BasicMessage2["default"], { showValues: metadataDetail, subId: 'zybmgl', leftShow: 'true' })
	    }];
	    if (sjkValuesStep1.resType == "1") {
	        var sjkValuesStep3 = (0, _dataFormat.getAiFormTableValue)(states, "zybmglStep3");
	        sjkValuesStep3.length > 0 && sjkValuesStep3.map(function (valueData, index) {
	            if (valueData.ename.substring(0, 4) == "res_") {
	                valueData.ename = valueData.ename.substring(4);
	            }
	        });
	        config[1] = {
	            "title": "数据项信息",
	            "showTitle": true,
	            "childrenContentFormItemHeightLow": true,
	            "data": function data() {
	                return _react2["default"].createElement(
	                    'div',
	                    { className: "customizedTable2" },
	                    _react2["default"].createElement(_table2["default"], { columns: zybmglCloumns, bordered: true, dataSource: sjkValuesStep3, key: 'zybmglAdd', pagination: false })
	                );
	            }

	        };
	        var sjkValuesStep33 = (0, _dataFormat.getAiFormTableValue)(states, "zybmglStep3");
	        sjkValuesStep33.length > 0 && sjkValuesStep33.map(function (valueData, index) {
	            if (valueData.ename.substring(0, 4) != "res_") {
	                valueData.ename = "res_" + valueData.ename;
	            }
	        });
	        values = (0, _extends3["default"])({}, values, { dbJson: sjkValuesStep33 });
	    } else if (sjkValuesStep1.resType == "3") {
	        var columns = [{
	            "title": '参数名称',
	            "dataIndex": 'name'
	        }, {
	            "title": '参数类型',
	            dataIndex: 'type',
	            key: 'type',
	            "render": function render() {
	                return "系统参数";
	            }
	        }, {
	            "title": '是否必填',
	            "dataIndex": 'mandatory',
	            "key": 'mandatory',
	            render: function render(text, record, index) {
	                switch (record.mandatory) {
	                    case '1':
	                        return '否';
	                    case '0':
	                        return '是';
	                    default:
	                        return '无返回值';

	                }
	            }
	        }, {
	            "title": '说明',
	            "dataIndex": 'desc',
	            "key": 'desc'
	        }];
	        var columns1 = [{
	            "title": '参数名称',
	            "dataIndex": 'name'
	        }, {
	            "title": '参数类型',
	            dataIndex: 'type',
	            key: 'type',
	            render: function render(text, record, index) {
	                switch (record.type) {
	                    case '12':
	                        return '文本';
	                    case '3':
	                        return '数字';
	                    case '91':
	                        return '日期';
	                    case '93':
	                        return '时间';
	                    case '4':
	                        return '整型';
	                    case '2005':
	                        return '字符大型对象';
	                    case '2004':
	                        return '二进制大型对象';
	                    default:
	                        return '返回类型不匹配';
	                }
	            }
	        }, {
	            "title": '是否可为空',
	            "dataIndex": 'notNull',
	            "key": 'notNull',
	            render: function render(text, record, index) {
	                switch (record.notNull) {
	                    case '1':
	                        return '否';
	                    case '0':
	                        return '是';
	                    default:
	                        return '无返回值';

	                }
	            }
	        }, {
	            "title": '说明',
	            "dataIndex": 'desc',
	            "key": 'desc'
	        }];
	        var aFTDStep3 = (0, _dataFormat.getAiFormTableValue)(states, "aFTDStep3");
	        var aFTDStep4 = (0, _dataFormat.getAiFormTableValue)(states, "aFTDStep4");
	        config[1] = {
	            "title": "请求参数",
	            "showTitle": true,
	            "childrenContentFormItemHeightLow": true,
	            "data": function data() {
	                return _react2["default"].createElement(
	                    'div',
	                    { className: "customizedTable2" },
	                    _react2["default"].createElement(_table2["default"], { columns: columns, dataSource: aFTDStep3, key: 'zybmglReq', bordered: true, pagination: false })
	                );
	            }

	        };
	        config[2] = {
	            "title": "返回参数",
	            "childrenContentFormItemHeightLow": true,
	            "showTitle": true,
	            "data": function data() {
	                return _react2["default"].createElement(
	                    'div',
	                    { className: "customizedTable2" },
	                    _react2["default"].createElement(_table2["default"], { columns: columns1, dataSource: aFTDStep4, key: 'zybmglRes', bordered: true, pagination: false })
	                );
	            }

	        };

	        values = (0, _extends3["default"])({}, values, { inParameterJson: (0, _dataFormat.getAiFormTableValue)(states, "aFTDStep3"),
	            outParameterJson: (0, _dataFormat.getAiFormTableValue)(states, "aFTDStep4") });
	    }
	    _global.Global.mark({ aiForm: { zybmSjkBmylStep4: { values: values } } });
	    var zybmglCloumns = [{
	        "title": "数据项名称",
	        "dataIndex": "name",
	        "key": "name",
	        render: function render(text, record, index) {
	            var text1 = record.pk ? "(PK)" : "";
	            return _react2["default"].createElement(
	                'div',
	                { title: text, style: { width: _global.Global.getState().framework.columnWidth, cursor: "pointer", display: "inline-block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } },
	                text + text1
	            );
	        }
	    }, {
	        "title": "数据项英文名称",
	        "dataIndex": "ename",
	        "key": "ename",
	        render: function render(text, record, index) {
	            return _react2["default"].createElement(
	                'div',
	                { title: text, style: { width: _global.Global.getState().framework.columnWidth, cursor: "pointer", display: "inline-block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } },
	                text
	            );
	        }
	    }, {
	        "title": "数据项编码",
	        "dataIndex": "code",
	        "key": "code",
	        render: function render(text, record, index) {
	            return _react2["default"].createElement(
	                'div',
	                { title: text, style: { width: _global.Global.getState().framework.columnWidth, cursor: "pointer", display: "inline-block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } },
	                text
	            );
	        }
	    }, {
	        "title": "数据项类型",
	        "dataIndex": "type",
	        "key": "type",
	        "render": function render(text, record, index) {
	            switch (text) {
	                case "12":
	                    return "文本";
	                case "3":
	                    return "数字";
	                case "91":
	                    return "日期";
	                case "93":
	                    return "时间";
	                case "4":
	                    return "整型";
	                case "2005":
	                    return "字符大型对象";
	                case "2004":
	                    return "二进制大型对象";
	            }
	        }
	    }, {
	        "title": "数据项长度",
	        "dataIndex": "length",
	        "key": "length",
	        render: function render(text, record, index) {
	            if (record.type == "91" || record.type == "93") {
	                return "--";
	            } else {
	                return text;
	            }
	        }
	    }, {
	        "title": "数据元标识",
	        "dataIndex": "dataCode",
	        "key": "dataCode",
	        render: function render(text, record, index) {
	            if (text == "" || text == "_custom_" || text == "_chose_") {
	                return "--";
	            } else {
	                return text;
	            }
	        }
	    }];
	    callback({
	        "success": true,
	        "data": config
	    });
	});

/***/ },

/***/ 194:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"mainCon2":"mainCon2___3hNlK","menuDefaultState":"menuDefaultState___1ruB6","mainDefaultState":"mainDefaultState___naVRA","openMenu":"openMenu___2yk0V","openMenuAn":"openMenuAn___ayq1N","openMain":"openMain___3EJzH","openMainAn":"openMainAn___11SBe","closeMenu":"closeMenu___2pw9M","closeMenuAn":"closeMenuAn___2_6uI","closeMain":"closeMain___1MtTG","closeMainAn":"closeMainAn___1zgHr","loginDlg":"loginDlg___2VvSd","loginTab":"loginTab___1QZXV","loginForm":"loginForm___1hQK_","loginButton":"loginButton___5c9Up","loginSpan":"loginSpan___1Y-_L","forgotMi":"forgotMi___1gsO1","userLogin":"userLogin___2XA_6","userLoginSpan":"userLoginSpan___EiJzu","forgetS":"forgetS___UGko_","loginHeader":"loginHeader___21clT","loginLogo":"loginLogo___18JnC","loginFooter":"loginFooter___4Ck3h","Dssg":"Dssg___2nDpY","DssgRight":"DssgRight___2W4jY","revisePassword":"revisePassword___2UOdB","reviseRel":"reviseRel___3b9TH","reviseContent":"reviseContent___qwr6u","revisePasForm":"revisePasForm___8MxuT","revisePasTit":"revisePasTit___NlSTa","reviseItemAll":"reviseItemAll___2TpQV","itemFont":"itemFont___3m971","revisePasInput":"revisePasInput___q3XQ5","reviseTip":"reviseTip___1jbpS","reviseTip2":"reviseTip2___3ztOQ","mainConRightConWidth":"mainConRightConWidth___3PIEv","mainConRightConWidth2":"mainConRightConWidth2___2-_tb","mainConMenuWidth":"mainConMenuWidth___pMVsn","mainConMenuIn":"mainConMenuIn___2c2FA","menuTitle":"menuTitle___3e0F1","footer":"footer___3YKjL","header":"header___1O2A5","headerContent1":"headerContent1___3jeOG","headerContent2":"headerContent2___2dl0_","headUnit":"headUnit___13xqw","navigatorUl":"navigatorUl___1dvhh","navigateSearchArea":"navigateSearchArea___1L1DY","popOverContent":"popOverContent___3nBWw","title":"title___3Wv84","titleLeft":"titleLeft___1dblQ","titleRight":"titleRight___21Eg0","pictureAbstractsContent":"pictureAbstractsContent___2mUw-","leftPicture":"leftPicture___2OxoO","rightAbstracts":"rightAbstracts___1qRDU","leftRatingContent":"leftRatingContent___HWiQg","rightAiFormContent":"rightAiFormContent___mr7T4","mainContent":"mainContent___3UKHC","everyUserRating":"everyUserRating___2GqMl","userRatingTitle":"userRatingTitle___3CUhS","ratingContent":"ratingContent___J80Xz","userRatingAll":"userRatingAll___2vHuQ","allRatingTitleContent":"allRatingTitleContent___3_ktI","leave":"leave___2pDd7","enter":"enter____ZoMb"};

/***/ },

/***/ 1018:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.basicMessageShow = undefined;

	var _actionType = __webpack_require__(22);

	var Types = _interopRequireWildcard(_actionType);

	var _api = __webpack_require__(39);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

	// 常用
	var basicMessageShow = exports.basicMessageShow = function basicMessageShow(id) {
	    return {
	        type: Types.basicMessageByRoute.basicMessageShow,
	        id: id
	    };
	};

/***/ },

/***/ 1021:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _defineProperty2 = __webpack_require__(7);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(6);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(5);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _App = __webpack_require__(194);

	var _App2 = _interopRequireDefault(_App);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _component = __webpack_require__(11);

	var _component2 = _interopRequireDefault(_component);

	var _AiForm = __webpack_require__(27);

	var _AiForm2 = _interopRequireDefault(_AiForm);

	var _basicMessage = __webpack_require__(1018);

	var _global = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var getHtmlArg = function getHtmlArg(name, defaultValue) {
		var match = window.location.href.match(new RegExp(name + '=([^&#]*)'));
		return match ? decodeURIComponent(match[1]) : defaultValue;
	};
	/* import basicMesStyle from "./BasicMessage.less"; */

	var server = 'dssg';
	if (process) {
		if (false) server = 'http://192.168.0.254:8080/dssg/';
	}
	try {
		var serverUrl = getHtmlArg('server', server);
		if (serverUrl.indexOf("api") >= 0 && serverUrl.indexOf("dssg") < 0) {
			/* let index = server.indexOf("api");
	   server = server.substring(0,index)+"dssg/";*/
			server = serverUrl.replace("api", "dssg");
		} else if (serverUrl.indexOf("dssg") >= 0) {
			var index = serverUrl.indexOf("dssg");
			server = serverUrl.substring(0, index);
		}
	} catch (ex) {}

	var BasicMessage = function (_Component) {
		(0, _inherits3["default"])(BasicMessage, _Component);

		function BasicMessage(props) {
			(0, _classCallCheck3["default"])(this, BasicMessage);

			var _this = (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));

			if (!props.showValues.filePath) {
				_global.Global.requestApi({ apiName: "getPicturePath", body: { id: props.showValues.themeType }, next: function next(action) {
						_global.Global.mark({ aiForm: (0, _defineProperty3["default"])({}, props.subId, { filePath: action.data }) });
					} });
			}
			return _this;
		}

		BasicMessage.prototype.componentDidMount = function componentDidMount() {}
		/* this.basicMessageWidth();
	  window.addEventListener('resize',this.basicMessageWidth.bind(this));   */

		/* basicMessageWidth(){
	  let a=document.documentElement.clientWidth;
	  let b=(this.props.leftShow=="true")?(a-220-20-20-1-1-60-20-42-102):(a-220-20-20-1-1-60-42);
	  Global.mark({
	  framework:{
	  basicMessageWidth:b
	  },
	  },"basicMessageWidth_change_event")
	  } */
		;

		BasicMessage.prototype.render = function render() {

			var showValues = this.props.showValues ? this.props.showValues : {};
			var leftShow = this.props.leftShow ? this.props.leftShow : false;
			var config = {
				data: [{
					"title": "",
					"column": 2,
					"showTitle": false,
					"data": [{ "name": "资源编码", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "resCode", "defaultValue": showValues.resCode ? showValues.resCode : "" }, { "name": "资源英文名称", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "resEname", "defaultValue": showValues.resEname ? showValues.resEname : "" }, { "name": "资源类型", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "resType", "defaultValue": showValues.resType == 1 ? "数据库" : showValues.resType == 2 ? "文件" : "API" }, { "name": "资源等级", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "resLevel", "defaultValue": showValues.resLevel == 1 ? "部分共享" : "完全共享" }, { "name": "主题分类", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "themeTypeName", "defaultValue": showValues.themeTypeName ? showValues.themeTypeName : showValues.themeName }, { "name": "行业分类", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "industryTypeName", "defaultValue": showValues.industryTypeName ? showValues.industryTypeName : "" }, { "name": "发布目录", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "catalogName", "defaultValue": showValues.catalogName ? showValues.catalogName : "" }, { "name": "更新周期", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "updateCycle", "defaultValue": showValues.updateCycle ? showValues.updateCycle : "" }]
				}]
			};
			return _react2["default"].createElement(
				'div',
				{ className: "basicMessageContentMain" },
				_react2["default"].createElement(
					'div',
					{ className: '' + _App2["default"].title },
					showValues.restitle ? showValues.restitle : showValues.resName
				),
				_react2["default"].createElement(
					'div',
					null,
					_react2["default"].createElement(
						'div',
						{ className: _App2["default"].pictureAbstractsContent + ' clearfix' },
						leftShow && _react2["default"].createElement(
							'div',
							{ className: '' + _App2["default"].leftPicture },
							_react2["default"].createElement('img', { alt: showValues.resName, src: showValues.filePath ? server + showValues.filePath : _global.Global.getState().aiForm[this.props.subId] && _global.Global.getState().aiForm[this.props.subId].filePath ? server + _global.Global.getState().aiForm[this.props.subId].filePath : "images/columnOneDefaultImg.png" })
						),
						_react2["default"].createElement(
							'div',
							{ className: '' + _App2["default"].rightAbstracts },
							_react2["default"].createElement(
								'div',
								{ title: showValues.abstracts },
								showValues.abstracts
							)
						)
					),
					_react2["default"].createElement(
						'div',
						null,
						showValues && _react2["default"].createElement(_AiForm2["default"], { version: '2', config: config, id: this.props.subId })
					)
				)
			);
		};

		return BasicMessage;
	}(_react.Component);

	exports["default"] = (0, _component2["default"])("basicMessage", { basicMessageShow: _basicMessage.basicMessageShow })(BasicMessage);
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(87)))

/***/ }

});