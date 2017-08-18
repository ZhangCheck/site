webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(44);

	var _icon = __webpack_require__(19);

	var _icon2 = _interopRequireDefault(_icon);

	var _css2 = __webpack_require__(61);

	var _table = __webpack_require__(60);

	var _table2 = _interopRequireDefault(_table);

	var _css3 = __webpack_require__(54);

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

	var _dataFormat = __webpack_require__(64);

	var _BasicMessage = __webpack_require__(1021);

	var _BasicMessage2 = _interopRequireDefault(_BasicMessage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * Created by liy on 2016/12/20 0020.
	 */
	var FormItem = _form2["default"].Item;
	(0, _jsonp2["default"])("wfbdzyFileZyxgStep5")(function (args, callback) {
	    var state = _global.Global.getState();

	    var ysjBasicInf = state.aiForm.wfbdzyFileZyxgStep3 ? state.aiForm.wfbdzyFileZyxgStep3.values : {};
	    var themeName = (0, _dataFormat.gettreeSelectName)(state, "themeType", ysjBasicInf.themeType ? ysjBasicInf.themeType : "");
	    var departmentName = (0, _dataFormat.gettreeSelectName)(state, "departmentType", ysjBasicInf.departmentType ? ysjBasicInf.departmentType : "");
	    ysjBasicInf.restitle = ysjBasicInf.resName ? ysjBasicInf.resName : "";
	    ysjBasicInf.subjectcarategory = themeName;
	    ysjBasicInf.resType = "2";
	    ysjBasicInf.departmentcategory = departmentName;
	    var step2 = state.dataList.wfbdzyFileZyxgStep2 ? state.dataList.wfbdzyFileZyxgStep2 : {};
	    var step2SelectRows = step2.selectedRows ? step2.selectedRows : "";
	    var step2Datas = step2.tableBodyDataApi && step2.tableBodyDataApi.data ? step2.tableBodyDataApi.data : "";
	    //资源有效期
	    var zyyxq = [];
	    var validBeginTime = state.aiForm.wfbdzyFileZyxgStep3To4.values.validBeginTime;
	    var validEndTime = state.aiForm.wfbdzyFileZyxgStep3To4.values.validEndTime;
	    zyyxq.push({
	        "zyyxq": "",
	        "validBeginTime": typeof validBeginTime == "string" ? validBeginTime : validBeginTime.format("YYYY-MM-DD HH:mm:ss"),
	        "validEndTime": typeof validEndTime == "string" ? validEndTime : validEndTime.format("YYYY-MM-DD HH:mm:ss")
	    });
	    validBeginTime = typeof validBeginTime == "string" ? new Date(validBeginTime) : validBeginTime;
	    validEndTime = typeof validEndTime == "string" ? new Date(validEndTime) : validEndTime;
	    //共享文件信息
	    var step2SelectDatas = [];
	    step2SelectRows.forEach(function (val) {
	        step2Datas.forEach(function (val2) {
	            if (val == val2.name) {
	                step2SelectDatas.push(val2);
	            }
	        });
	    });
	    //更新策略
	    var step4Values = state.aiForm.wfbdzyFileZyxgStep4 && state.aiForm.wfbdzyFileZyxgStep4.values ? state.aiForm.wfbdzyFileZyxgStep4.values : "";
	    var ddModelDatas = [];
	    if (step4Values.ddModel == 1) {
	        ddModelDatas.push({ "dispatchType": "周期模式", "startTime": step4Values.startTime.format("YYYY-MM-DD HH:mm:ss"), "cycle": step4Values.zqIntervalCycle });
	    } else if (step4Values.ddModel == 2) {
	        ddModelDatas.push({ "dispatchType": "定期模式", "cycle": "" });
	    } else {
	        ddModelDatas.push({ "dispatchType": "触发器模式", "cycle": "" });
	    }
	    //文件共享等级
	    var fileLevel = step4Values.fileLevel;
	    var fileLevelDatas = [];
	    if (fileLevel == 1) {
	        fileLevelDatas.push({ "level": "一级" });
	    } else if (fileLevel == 2) {
	        fileLevelDatas.push({ "level": "二级" });
	    } else {
	        fileLevelDatas.push({ "level": "三级" });
	    }

	    var gxwjxxcolumns = [{
	        "title": "文件名",
	        "dataIndex": "name",
	        "key": "name",
	        render: function render(text, record, index) {
	            return _react2["default"].createElement(
	                'div',
	                { title: text, style: { width: _global.Global.getState().framework.columnWidth, cursor: "pointer", display: "inline-block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } },
	                text
	            );
	        }
	    }, {
	        "title": "文件类型",
	        "dataIndex": "type",
	        "key": "type"
	    }, {
	        "title": "文件大小",
	        "dataIndex": "size",
	        "key": "size"
	    }, {
	        "title": "最后更新时间",
	        "dataIndex": "updateDate",
	        "key": "updateDate"
	    }];
	    var wjgxdjcolumns = [{
	        "title": "文件等级",
	        "dataIndex": "level",
	        "key": "level",
	        "width": "33%"
	    }];
	    //更新策略
	    var gxclCloumn_zq = [{
	        title: "调度模式",
	        dataIndex: 'dispatchType',
	        key: 'dispatchType'
	    }, {
	        title: "开始时间",
	        dataIndex: 'startTime',
	        key: 'startTime'
	    }, {
	        title: "间隔周期",
	        dataIndex: 'cycle',
	        key: 'cycle',
	        render: function render(text, record, index) {
	            switch (step4Values.zqTimeUnit) {
	                case 1:
	                    return _react2["default"].createElement(
	                        'div',
	                        null,
	                        text,
	                        '\u5C0F\u65F6'
	                    );
	                case 2:
	                    return _react2["default"].createElement(
	                        'div',
	                        null,
	                        text,
	                        '\u5206\u949F'
	                    );
	                default:
	                    return _react2["default"].createElement(
	                        'div',
	                        null,
	                        text,
	                        '\u79D2'
	                    );
	            }
	        }
	    }];
	    var gxclCloumn_cfq = [{
	        title: "调度模式",
	        dataIndex: 'dispatchType',
	        key: 'dispatchType'
	    }];

	    var gxclCloumn_dq = [{
	        title: "调度模式",
	        dataIndex: 'dispatchType',
	        key: 'dispatchType'
	    }, {
	        title: "间隔周期",
	        dataIndex: 'cycle',
	        key: 'cycle',
	        render: function render(text, record, index) {
	            var children = [_react2["default"].createElement(
	                'span',
	                { style: { paddingLeft: "20px", paddingRight: "20px" } },
	                step4Values.dayTime,
	                '\u5929'
	            ), _react2["default"].createElement(
	                'span',
	                { style: { paddingLeft: "20px", paddingRight: "20px" } },
	                step4Values.hourTime,
	                '\u65F6'
	            ), _react2["default"].createElement(
	                'span',
	                { style: { paddingLeft: "20px", paddingRight: "20px" } },
	                step4Values.minTime,
	                '\u5206'
	            )];
	            switch (step4Values.dqTimeUnit) {
	                case 1:
	                    return _react2["default"].createElement(
	                        'div',
	                        null,
	                        _react2["default"].createElement(
	                            'span',
	                            { style: { paddingLeft: "20px", paddingRight: "20px" } },
	                            '\u6BCF\u6708'
	                        ),
	                        children
	                    );
	                case 2:
	                    return _react2["default"].createElement(
	                        'div',
	                        null,
	                        _react2["default"].createElement(
	                            'span',
	                            { style: { paddingLeft: "20px", paddingRight: "20px" } },
	                            '\u6BCF\u5468'
	                        ),
	                        children
	                    );
	                default:
	                    return _react2["default"].createElement(
	                        'div',
	                        null,
	                        _react2["default"].createElement(
	                            'span',
	                            { style: { paddingLeft: "20px", paddingRight: "20px" } },
	                            '\u6BCF\u65E5'
	                        ),
	                        children
	                    );
	            }
	        }
	    }];

	    //资源有效期
	    var zyyxqCloumn = [{
	        title: "",
	        dataIndex: 'zyyxq',
	        key: 'zyyxq',
	        render: function render(text, record, index) {
	            return '资源有效期';
	        }
	    }, {
	        title: "资源开始时间",
	        dataIndex: 'validBeginTime',
	        key: 'validBeginTime'
	    }, {
	        title: "资源结束时间",
	        dataIndex: 'validEndTime',
	        key: 'validEndTime'
	    }];
	    callback({
	        "success": true,
	        "data": [{
	            "title": "元数据基本信息",
	            "column": 1,
	            "showTitle": true,
	            "titleIcon": "metadata-message",
	            "data": _react2["default"].createElement(_BasicMessage2["default"], { subId: 'wfbdzyFileZyxgStep5', showValues: ysjBasicInf, leftShow: 'false' })
	        }, {
	            "title": "共享文件信息",
	            "showTitle": true,
	            "titleIcon": "catalog",
	            "data": function data() {
	                return _react2["default"].createElement(
	                    'div',
	                    { className: "customizedTable" },
	                    _react2["default"].createElement(_table2["default"], { columns: gxwjxxcolumns, dataSource: step2SelectDatas, bordered: true, pagination: false })
	                );
	            }
	        }, {
	            "title": "更新策略",
	            "showTitle": true,
	            "titleIcon": "schedule-configuration",
	            "data": function data() {
	                return _react2["default"].createElement(
	                    'div',
	                    { className: "customizedTable" },
	                    _react2["default"].createElement(
	                        'div',
	                        { className: "tableTitle" },
	                        _react2["default"].createElement(_icon2["default"], { type: 'appstore-o', className: "tableTitIcon" }),
	                        _react2["default"].createElement(
	                            'span',
	                            null,
	                            '\u8C03\u5EA6\u914D\u7F6E'
	                        )
	                    ),
	                    _react2["default"].createElement(_table2["default"], { columns: step4Values.ddModel == 1 ? gxclCloumn_zq : step4Values.ddModel == 2 ? gxclCloumn_dq : gxclCloumn_cfq, dataSource: ddModelDatas, bordered: true, pagination: false })
	                );
	            }
	        }, {
	            "title": "资源有效期",
	            "showTitle": true,
	            "titleIcon": "copy",
	            "data": function data() {
	                return _react2["default"].createElement(
	                    'div',
	                    { className: "customizedTable" },
	                    _react2["default"].createElement(
	                        'div',
	                        { className: "tableTitle" },
	                        _react2["default"].createElement(_icon2["default"], { type: 'appstore-o', className: "tableTitIcon" }),
	                        _react2["default"].createElement(
	                            'span',
	                            null,
	                            '\u8D44\u6E90\u6709\u6548\u671F'
	                        )
	                    ),
	                    _react2["default"].createElement(_table2["default"], { pagination: false, columns: zyyxqCloumn, dataSource: zyyxq ? zyyxq : [], bordered: true })
	                );
	            }
	        }, {
	            "title": "文件共享等级",
	            "showTitle": true,
	            "titleIcon": "file-text",
	            "data": function data() {
	                return _react2["default"].createElement(
	                    'div',
	                    { className: "customizedTable" },
	                    _react2["default"].createElement(
	                        'div',
	                        { className: "tableTitle" },
	                        _react2["default"].createElement(_icon2["default"], { type: 'appstore-o', className: "tableTitIcon" }),
	                        _react2["default"].createElement(
	                            'span',
	                            null,
	                            '\u6587\u4EF6\u5171\u4EAB\u7B49\u7EA7\u914D\u7F6E'
	                        )
	                    ),
	                    _react2["default"].createElement(_table2["default"], { columns: wjgxdjcolumns, dataSource: fileLevelDatas, bordered: true, pagination: false })
	                );
	            }
	        }, {
	            "title": "资源申请发布信息",
	            "column": 2,
	            "showTitle": true,
	            "titleIcon": "res-pub-mes",
	            "data": [{ "name": "发布原因", "type": "text", "field": "applyReason", "defaultValue": ysjBasicInf.applyReason }, { "name": "申请人", "type": "text", "field": "proposer", "defaultValue": state.framework.loginApi.data.loginUserProfileDTO && state.framework.loginApi.data.loginUserProfileDTO.loginName ? state.framework.loginApi.data.loginUserProfileDTO.loginName : "" }]
	        }]
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