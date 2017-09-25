webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _getIterator2 = __webpack_require__(37);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _css = __webpack_require__(61);

	var _table = __webpack_require__(60);

	var _table2 = _interopRequireDefault(_table);

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

	var _BasicMessage = __webpack_require__(1021);

	var _BasicMessage2 = _interopRequireDefault(_BasicMessage);

	var _dataFormat = __webpack_require__(64);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var FormItem = _form2["default"].Item;

	(0, _jsonp2["default"])("fbshapizyck")(function (args, callback) {
	    var states = _global.Global.getState();
	    var values = states.dataList.fbshsyzyapi.detailMsgDataApi && states.dataList.fbshsyzyapi.detailMsgDataApi.data ? states.dataList.fbshsyzyapi.detailMsgDataApi.data : {};
	    var metadataDetail = values.metadataDTO ? values.metadataDTO : {};
	    metadataDetail.resType = values.resType;
	    var zyfbxx = values.processRecordDTO ? values.processRecordDTO : {};
	    var jkdzxx = values.apiDescription ? values.apiDescription : {};

	    var resLevel = values && values.resLevel ? values.resLevel : "";
	    var showTitle = values.apiSource && values.apiSource == "3d" ? false : true;
	    var requestParams = void 0;
	    var responseStruct = void 0;
	    if (showTitle) {
	        requestParams = values && values.requestParams ? (0, _dataFormat.jsonStrToArray)(values.requestParams) : [];
	        responseStruct = values && values.responseStruct ? (0, _dataFormat.jsonStrToArray)(values.responseStruct) : [];
	    }
	    var apiLevel = [];
	    if (resLevel != "") {
	        apiLevel.push({ resLevel: resLevel });
	    }
	    var apiUrlInfo = [];
	    if (showTitle) {
	        apiUrlInfo = [{ "name": "接口地址", "type": "text", labelCol: 6, "field": "address", "defaultValue": jkdzxx.address ? jkdzxx.address : "" }, { "name": "服务类型", "type": "text", labelCol: 6, "field": "apiType", "defaultValue": jkdzxx.apiType ? jkdzxx.apiType : "" }, { "name": "方法", "type": "text", labelCol: 6, "field": "methods", "defaultValue": jkdzxx.methods ? jkdzxx.methods : "getdb", preRender: function preRender() {
	                return jkdzxx.apiType == 'rest' ? "hidden" : "";
	            } }];
	    } else {
	        apiUrlInfo = [{ "name": "接口地址", "type": "text", labelCol: 6, "field": "address", "defaultValue": jkdzxx.address ? jkdzxx.address : "" }, { "name": "域名", "type": "text", labelCol: 6, "field": "realmName", "defaultValue": jkdzxx.realmName ? jkdzxx.realmName : "" }, { "name": "服务类型", "type": "text", labelCol: 6, "field": "apiType", "defaultValue": jkdzxx.apiType ? jkdzxx.apiType : "" }, { "name": "方法", "type": "text", labelCol: 6, "field": "methods", "defaultValue": jkdzxx.methods ? jkdzxx.methods : "getdb", preRender: function preRender() {
	                return jkdzxx.apiType == 'rest' ? "hidden" : "";
	            } }];
	    }
	    var zyyxqColumns = [{
	        "title": '',
	        "dataIndex": 'resRender',
	        "key": 'resRender'
	    }, {
	        "title": '开始时间',
	        "dataIndex": 'validBeginTime',
	        "key": 'validBeginTime'
	    }, {
	        "title": '结束时间',
	        "dataIndex": 'validEndTime',
	        "key": 'validEndTime'
	    }];
	    var pzzyyxq = [];
	    pzzyyxq.push({ resRender: "资源有效期", validBeginTime: values.validBeginTime, validEndTime: values.validEndTime });
	    var srcscolumns = [{
	        "title": "参数",
	        "dataIndex": "name",
	        "key": "name"
	    }, {
	        "title": "是否必须",
	        "dataIndex": "mandatory",
	        "key": "mandatory",
	        render: function render(text, _render, index) {
	            switch (text) {
	                case "1":
	                    return "必选";
	                case "0":
	                    return "可选";
	                default:
	                    return "可选";
	            }
	        }
	    }, {
	        "title": "参数类型",
	        "dataIndex": "type",
	        "key": "type"
	    }];
	    var sccscolumns = [{
	        "title": "参数名称",
	        "dataIndex": "name",
	        "key": "name"
	    }, {
	        "title": "参数类型",
	        "dataIndex": "type",
	        "key": "type",
	        render: function render(text, _render2, index) {
	            return text.substring(0, text.indexOf("("));
	        }
	    }, {
	        "title": "参数长度",
	        "dataIndex": "table",
	        "key": "table",
	        render: function render(text, _render3, index) {
	            var type = _render3.type;
	            return type.substring(type.indexOf("(") + 1, type.indexOf(")"));
	        }
	    }];
	    var apigxdjcolumns = [{
	        "title": 'API等级',
	        "dataIndex": 'resLevel',
	        "key": 'resLevel',
	        "render": function render(text, _render4, index) {
	            switch (text) {
	                case "1":
	                    return "一级";
	                case "2":
	                    return "二级";
	                case "3":
	                    return "三级";
	            }
	        }
	    }, {
	        "title": '',
	        "dataIndex": 'startTime',
	        "key": 'startTime'
	    }, {
	        "title": '',
	        "dataIndex": 'jgzq',
	        "key": 'jgzq'
	    }];

	    var config = [];
	    var config0 = {
	        "title": "元数据基本信息", //栏目标题
	        "column": 1, //  form显示列数，首先读取每个标签的设置column值，不存在才会读取总的column,如果不存在，默认展示一列
	        "titleIcon": "metadata-message",
	        "showTitle": true, //是否展示栏目标题
	        "data": _react2["default"].createElement(_BasicMessage2["default"], { subId: 'fbshapizysh', showValues: metadataDetail, leftShow: 'false' })
	    };
	    var config1 = [{
	        "title": "输入参数配置", //栏目标题
	        "showTitle": true, //是否展示栏目标题
	        "titleIcon": "schedule-configuration",
	        "data": function data() {
	            return _react2["default"].createElement(
	                'div',
	                { className: "customizedTable" },
	                _react2["default"].createElement(_table2["default"], { columns: srcscolumns, dataSource: requestParams, pagination: false })
	            );
	        }
	    }, {
	        "title": "输出参数配置", //栏目标题
	        "showTitle": true, //是否展示栏目标题
	        "titleIcon": "schedule-configuration",
	        "data": function data() {
	            return _react2["default"].createElement(
	                'div',
	                { className: "customizedTable" },
	                _react2["default"].createElement(_table2["default"], { columns: sccscolumns, dataSource: responseStruct, pagination: false })
	            );
	        }
	    }];
	    var config2 = [{
	        "title": "接口地址信息", //栏目标题
	        "column": 1,
	        "showTitle": true, //是否展示栏目标题
	        "titleIcon": "file-text",
	        "data": apiUrlInfo
	    }, {
	        "title": "资源有效期", //栏目标题
	        "showTitle": true, //是否展示栏目标题
	        "titleIcon": "schedule-configuration",
	        "data": function data() {
	            return _react2["default"].createElement(
	                'div',
	                { className: "customizedTable" },
	                _react2["default"].createElement(
	                    'div',
	                    null,
	                    '\u8D44\u6E90\u5171\u4EAB\u6709\u6548\u671F'
	                ),
	                _react2["default"].createElement(_table2["default"], { columns: zyyxqColumns, dataSource: pzzyyxq, pagination: false })
	            );
	        }
	    }, {
	        "title": "API共享等级", //栏目标题
	        "showTitle": true, //是否展示栏目标题
	        "titleIcon": "file-text",
	        "data": function data() {
	            return _react2["default"].createElement(
	                'div',
	                { className: "customizedTable" },
	                _react2["default"].createElement(
	                    'div',
	                    null,
	                    'API\u5171\u4EAB\u7B49\u7EA7\u914D\u7F6E'
	                ),
	                _react2["default"].createElement(_table2["default"], { columns: apigxdjcolumns, dataSource: apiLevel, pagination: false })
	            );
	        }
	    }, {
	        "title": "资源申请发布信息", //栏目标题
	        "column": 2,
	        "showTitle": true, //是否展示栏目标题
	        "titleIcon": "res-pub-mes",
	        "data": [{ "name": "发布原因", "type": "text", mark: "fbshsyzyapi", "field": "applyReason", "defaultValue": zyfbxx.applyReason ? zyfbxx.applyReason : "" }, { "name": "申请人", "type": "text", mark: "fbshsyzyapi", "field": "applyUser", "defaultValue": zyfbxx.applyUser ? zyfbxx.applyUser : "" }],
	        "buttonConfigs": {
	            "buttons": [{ "type": "button", "value": "返回", "field": "back", props: { type: "primary", "style": { "float": "right" } } }]
	        }
	    }];
	    config.push((0, _extends3["default"])({}, config0));
	    if (showTitle) {
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	            for (var _iterator = (0, _getIterator3["default"])(config1), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var c = _step.value;

	                config.push(c);
	            }
	        } catch (err) {
	            _didIteratorError = true;
	            _iteratorError = err;
	        } finally {
	            try {
	                if (!_iteratorNormalCompletion && _iterator["return"]) {
	                    _iterator["return"]();
	                }
	            } finally {
	                if (_didIteratorError) {
	                    throw _iteratorError;
	                }
	            }
	        }
	    }
	    var _iteratorNormalCompletion2 = true;
	    var _didIteratorError2 = false;
	    var _iteratorError2 = undefined;

	    try {
	        for (var _iterator2 = (0, _getIterator3["default"])(config2), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	            var _c = _step2.value;

	            config.push(_c);
	        }
	    } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
	                _iterator2["return"]();
	            }
	        } finally {
	            if (_didIteratorError2) {
	                throw _iteratorError2;
	            }
	        }
	    }

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