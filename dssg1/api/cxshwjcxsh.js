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

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _AiFormTable = __webpack_require__(310);

	var _AiFormTable2 = _interopRequireDefault(_AiFormTable);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(10);

	var _component = __webpack_require__(11);

	var _component2 = _interopRequireDefault(_component);

	var _BasicMessage = __webpack_require__(1021);

	var _BasicMessage2 = _interopRequireDefault(_BasicMessage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("cxshwjcxsh")(function (args, callback) {
	    var states = _global.Global.getState();
	    var datas = states.dataList.cxshwjsyzy.detailMsgDataApi && states.dataList.cxshwjsyzy.detailMsgDataApi.data ? states.dataList.cxshwjsyzy.detailMsgDataApi.data : {};
	    var ysjBasicInf = datas ? datas.metadataDTO : {};
	    ysjBasicInf.resType = datas.resType ? datas.resType : "";
	    var dispatchStrategy = datas ? JSON.parse(datas.dispatchStrategyJson) : {};
	    var fileLevel = datas ? datas.resLevel : "";
	    var processRecordDTO = datas.processRecordDTO ? datas.processRecordDTO : {};
	    var fileDatas = datas ? JSON.parse(datas.fileJson) : {};
	    var selectId = states.dataList.cxshwjsyzy.selectedRows[0] ? states.dataList.cxshwjsyzy.selectedRows[0] : "";
	    var values = {};
	    values = (0, _extends3["default"])({}, values, { resourceId: selectId, resType: 2, type: -1 });
	    var resourceTimes = [];
	    resourceTimes.push({
	        "dispatchType": '资源有效期',
	        "startTime": _global.Global.getState().dataList.cxshwjsyzy.detailMsgDataApi.data.validBeginTime,
	        "endTime": _global.Global.getState().dataList.cxshwjsyzy.detailMsgDataApi.data.validEndTime
	    });
	    //共享文件信息
	    var fileDatasArr = [];
	    if (Array.isArray(fileDatas)) {
	        fileDatasArr = fileDatas;
	    } else {
	        fileDatasArr.push(fileDatas);
	    }
	    var gxwjxxcolumns = [{
	        "title": "文件名",
	        "dataIndex": "name",
	        "key": "name"
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
	    //文件共享等级
	    var fileLevelDatas = [];
	    if (fileLevel == 1) {
	        fileLevelDatas.push({ "level": "一级" });
	    } else if (fileLevel == 2) {
	        fileLevelDatas.push({ "level": "二级" });
	    } else {
	        fileLevelDatas.push({ "level": "三级" });
	    }
	    var wjgxdjcolumns = [{
	        "title": "文件等级",
	        "dataIndex": "level",
	        "key": "level",
	        "width": "33%"
	    }];

	    //更新策略
	    var ddModelDatas = [];
	    if (dispatchStrategy.dispatchType == 1) {
	        ddModelDatas.push({ "dispatchType": "周期模式", "beginTime": dispatchStrategy.beginTime, "cycle": dispatchStrategy.cycle });
	    } else if (dispatchStrategy.dispatchType == 2) {
	        ddModelDatas.push({ "dispatchType": "定期模式", "cycle": "" });
	    } else {
	        ddModelDatas.push({ "dispatchType": "触发器模式", "cycle": "" });
	    }
	    var gxclCloumn_zq = [{
	        title: "调度模式",
	        dataIndex: 'dispatchType',
	        key: 'dispatchType'
	    }, {
	        title: "开始时间",
	        dataIndex: 'beginTime',
	        key: 'beginTime'
	    }, {
	        title: "间隔周期",
	        dataIndex: 'cycle',
	        key: 'cycle',
	        render: function render(text, record, index) {
	            switch (dispatchStrategy.dateTypeMin) {
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
	                dispatchStrategy.day,
	                '\u5929'
	            ), _react2["default"].createElement(
	                'span',
	                { style: { paddingLeft: "20px", paddingRight: "20px" } },
	                dispatchStrategy.hour,
	                '\u65F6'
	            ), _react2["default"].createElement(
	                'span',
	                { style: { paddingLeft: "20px", paddingRight: "20px" } },
	                dispatchStrategy.second,
	                '\u5206'
	            )];
	            switch (dispatchStrategy.dateTypeMax) {
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
	    var zyyxq = [{
	        title: "",
	        dataIndex: 'dispatchType',
	        key: 'dispatchType',
	        render: function render(text, record, index) {
	            return '资源有效期';
	        }
	    }, {
	        title: "开始时间",
	        dataIndex: 'startTime',
	        key: 'startTime'
	    }, {
	        title: "结束时间",
	        dataIndex: 'endTime',
	        key: 'endTime'
	    }];
	    callback({
	        "success": true,
	        "data": [{
	            "title": "元数据基本信息",
	            "column": 1,
	            "showTitle": true,
	            "titleIcon": "metadata-message",
	            /* "data":[
	                {"type":"text","name":"标题" ,"field":"resName" ,"defaultValue":ysjBasicInf.restitle?ysjBasicInf.restitle:""},
	                {"type":"text","name":"摘要","field":"abstracts","defaultValue":ysjBasicInf.abstracts?ysjBasicInf.abstracts:""},
	                {"type":"text","name":"关键字","field":"keyword","defaultValue":ysjBasicInf.keyword?ysjBasicInf.keyword:""},
	                {"type":"text","name":"国家主题分类" ,"field":"themeTypeName" ,"defaultValue":datas?datas.themeTypeName:""},
	                {"type":"text","name":"部门主题分类" ,"field":"departmentTypeName" ,"defaultValue":datas?datas.departmentTypeName:""},
	                {"type":"text","name":"订阅类型" ,"field":"resourceType" ,"defaultValue":"文件"},
	                {"type":"text","name":"数据提供方单位" ,"field":"rporgname" ,"defaultValue":ysjBasicInf.rporgname?ysjBasicInf.rporgname:""},
	                {"type":"text","name":"数据提供方地址" ,"field":"address","defaultValue":ysjBasicInf.address?ysjBasicInf.address:""}
	            ] */
	            "data": _react2["default"].createElement(_BasicMessage2["default"], { showValues: ysjBasicInf, subId: 'cxshWjCxsh', leftShow: 'false' })
	        }, {
	            "title": "共享文件信息",
	            "showTitle": true,
	            "titleIcon": "catalog",
	            "data": function data() {
	                return _react2["default"].createElement(
	                    'div',
	                    { className: "customizedTable" },
	                    _react2["default"].createElement(_table2["default"], { columns: gxwjxxcolumns, dataSource: fileDatasArr, bordered: true, pagination: false })
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
	                    _react2["default"].createElement(_table2["default"], { columns: dispatchStrategy.dispatchType == 1 ? gxclCloumn_zq : dispatchStrategy.dispatchType == 2 ? gxclCloumn_dq : gxclCloumn_cfq, dataSource: ddModelDatas, bordered: true, pagination: false })
	                );
	            }
	        }, {
	            "title": "资源有效期",
	            "showTitle": true,
	            "titleIcon": "copy",
	            "data": function data() {
	                return _react2["default"].createElement(
	                    'div',
	                    null,
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
	                    _react2["default"].createElement(
	                        'div',
	                        { className: "customizedTable" },
	                        _react2["default"].createElement(_table2["default"], { columns: zyyxq, dataSource: resourceTimes, bordered: true, pagination: false })
	                    )
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
	            "title": "资源申请撤销信息", //栏目标题
	            "column": 2, //  form显示列数，首先读取每个标签的设置column值，不存在才会读取总的column,如果不存在，默认展示一列
	            "labelCol": 8, // form标头name宽度
	            "wrapperCol": 16, //form显示框宽度
	            "titleIcon": "res-pub-mes",
	            "showTitle": true, //是否展示栏目标题
	            "data": [{ "name": "撤销原因", "type": "text", "field": "revokeReason", "defaultValue": processRecordDTO.applyReason ? processRecordDTO.applyReason : "" }, { "name": "申请人", "type": "text", "field": "applyUser", "defaultValue": processRecordDTO.applyUser ? processRecordDTO.applyUser : "" }, { "name": "申请时间", "type": "text", "field": "applyTime", "defaultValue": processRecordDTO.applyTime ? processRecordDTO.applyTime : "" }, { "name": "生效时间", "type": "text", "field": "sxsj", "defaultValue": processRecordDTO.effectiveData ? processRecordDTO.effectiveData : "" }]
	        }, {
	            "title": "资源撤销审核信息", //栏目标题
	            "column": 2, //  form显示列数，首先读取每个标签的设置column值，不存在才会读取总的column,如果不存在，默认展示一列
	            "labelCol": 8, // form标头name宽度
	            "wrapperCol": 16, //form显示框宽度
	            "titleIcon": "res-pub-mes",
	            "showTitle": true, //是否展示栏目标题
	            "buttonConfigs": {
	                "onSubmitApi": { apiName: "cxshWjCxshSave", body: (0, _extends3["default"])({}, values) },
	                "getValue": { id: "aFBCD", index: 6 },
	                "buttons": [{ "type": "button", "value": "返回", "field": "back", props: { btnType: "primary", "style": { "float": "right" } } }, { "type": "button", "value": "确定", "field": "submit", props: { btnType: "primary", "style": { "float": "right" } } }]
	            },

	            "data": [{ "name": "撤销原因", "type": "input", "field": "reviewDesc", "defaultValue": "" }, { "name": "审批结果", "type": "select", "field": "result", "defaultValue": "0", "options": [{ value: "0", key: "通过" }, { value: "-1", key: "拒绝" }] }, { "name": "申请人", ignore: "ignore", "type": "text", "field": "sqr", "defaultValue": processRecordDTO.applyUser }]
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