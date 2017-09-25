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

	var _component = __webpack_require__(11);

	var _component2 = _interopRequireDefault(_component);

	var _BasicMessage = __webpack_require__(1021);

	var _BasicMessage2 = _interopRequireDefault(_BasicMessage);

	var _BasicMessage3 = __webpack_require__(1125);

	var _BasicMessage4 = _interopRequireDefault(_BasicMessage3);

	var _DefaultSelectTableRows = __webpack_require__(1886);

	var _DefaultSelectTableRows2 = _interopRequireDefault(_DefaultSelectTableRows);

	var _UserRating = __webpack_require__(1152);

	var _UserRating2 = _interopRequireDefault(_UserRating);

	var _Dyyh = __webpack_require__(1135);

	var _Dyyh2 = _interopRequireDefault(_Dyyh);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var FormItem = _form2["default"].Item; /**
	                                     * Created by liy on 2016/12/20 0020.
	                                     */

	(0, _jsonp2["default"])("wfbdzyFileZyck")(function (args, callback) {
	    var state = _global.Global.getState();
	    var values = state.dataList.wfbdzyFile.detailMsgDataApi && state.dataList.wfbdzyFile.detailMsgDataApi.data ? state.dataList.wfbdzyFile.detailMsgDataApi.data : {};
	    var ysjBasicInf = values.metadataDTO ? values.metadataDTO : {};
	    ysjBasicInf.resType = values.resType ? values.resType : "";
	    var dispatchStrategy = values ? JSON.parse(values.dispatchStrategyJson) : {};
	    var fileLevel = values ? values.resLevel : "";
	    var processRecordDTO = values ? values.processRecordDTO : {};
	    var fileDatas = values && values.fileJson ? JSON.parse(values.fileJson) : {};
	    var departmentTypeName = values ? values.departmentTypeName : "";
	    var themeTypeName = values ? values.themeTypeName : "";
	    //共享文件信息   
	    var fileDatasArr = [];
	    if (Array.isArray(fileDatas)) {
	        fileDatasArr = fileDatas;
	    } else {
	        fileDatasArr.push(fileDatas);
	    }
	    var gxwjxxcolumns = [{
	        "title": "序号",
	        "dataIndex": "",
	        "key": "",
	        "width": 50,
	        render: function render(text, record, index) {
	            return index + 1;
	        }
	    }, {
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
	    //资源有效期
	    var zyyxq = [];
	    zyyxq.push({
	        "zyyxq": "",
	        "validBeginTime": _global.Global.getState().dataList.wfbdzyFile.detailMsgDataApi.data.validBeginTime,
	        "validEndTime": _global.Global.getState().dataList.wfbdzyFile.detailMsgDataApi.data.validEndTime
	    });
	    //更新策略 
	    var ddModelDatas = [];
	    if (dispatchStrategy.dispatchType == 1) {
	        ddModelDatas.push({ "dispatchType": "周期模式", "beginTime": dispatchStrategy.beginTime, "cycle": dispatchStrategy.cycle });
	    } else if (dispatchStrategy.dispatchType == 2) {
	        ddModelDatas.push({ "dispatchType": "定期模式", "cycle": "" });
	    } else {
	        ddModelDatas.push({ "dispatchType": "触发器模式" });
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
	    //DefaultSelectTableRows 的数据 
	    var selectedTableFileJson = [{
	        "updateDate": "2017-01-13 13:53:00",
	        "size": "1024",
	        "name": "test1.txt",
	        "id": "aa",
	        "type": "txt"
	    }, {
	        "updateDate": "2017-01-13 13:53:00",
	        "size": "1024",
	        "name": "test1.txt",
	        "id": "bb",
	        "type": "txt"
	    }];
	    //DefaultSelectTableRows 的列 
	    var selectedTableColumns = [{
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
	    callback({
	        "success": true,
	        "data": [{
	            "title": "元数据基本信息",
	            "column": 1,
	            "showTitle": false,
	            "childrenContentNoBorder": true,
	            "childrenContentFormItemHeightLow": true,
	            "titleIcon": "metadata-message",
	            "data": _react2["default"].createElement(_BasicMessage2["default"], { subId: 'wfbdzyFileZyckBasicMessage', showValues: ysjBasicInf, leftShow: true })
	        }, {
	            "title": "元数据基本信息2",
	            "column": 1,
	            "showTitle": false,
	            "childrenContentNoBorder": true,
	            "childrenContentFormItemHeightLow": true,
	            "titleIcon": "metadata-message",
	            "data": _react2["default"].createElement(_BasicMessage4["default"], { subId: 'wfbdzyFileZyckBasicMessage2', showValues: ysjBasicInf })
	        }, {
	            "title": "共享文件信息",
	            "showTitle": true,
	            "childrenContentNoBorder": true,
	            "titleIcon": "dssg-slope-arrow",
	            "data": function data() {
	                return _react2["default"].createElement(
	                    'div',
	                    { className: "customizedTable2" },
	                    _react2["default"].createElement(_table2["default"], { columns: gxwjxxcolumns, dataSource: fileDatasArr, bordered: true, pagination: false })
	                );
	            }
	        }, {
	            "title": "更新策略",
	            "showTitle": true,
	            "childrenContentNoBorder": true,
	            "titleIcon": "dssg-slope-arrow",
	            "data": function data() {
	                return _react2["default"].createElement(
	                    'div',
	                    { className: "customizedTable2" },
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
	            "childrenContentNoBorder": true,
	            "titleIcon": "dssg-slope-arrow",
	            "data": function data() {
	                return _react2["default"].createElement(
	                    'div',
	                    { className: "customizedTable2" },
	                    _react2["default"].createElement(_table2["default"], { pagination: false, columns: zyyxqCloumn, dataSource: zyyxq ? zyyxq : [], bordered: true })
	                );
	            }
	        }, {
	            "title": "文件共享等级",
	            "showTitle": true,
	            "childrenContentNoBorder": true,
	            "titleIcon": "dssg-slope-arrow",
	            "data": function data() {
	                return _react2["default"].createElement(
	                    'div',
	                    { className: "customizedTable2" },
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
	        },
	        /**（光普用过此组件，具体情景可以问他）
	          *1、primaryKey：每条table数据的唯一标识字段。
	          *2、id：组件实例的id。
	          *3、selectedTableColumns：table列。
	          *4、selectedTableData：table的数据
	        */
	        {
	            "title": "默认选中Table的所有行的组件",
	            "showTitle": true,
	            "childrenContentNoBorder": true,
	            "titleIcon": "dssg-slope-arrow",
	            "data": _react2["default"].createElement(_DefaultSelectTableRows2["default"], { primaryKey: 'id', id: 'wfbdzyFileZyckSelectedTable', selectedTableColumns: selectedTableColumns, selectedTableData: selectedTableFileJson })
	        },
	        /**（金彪用过此组件，具体情景可以问他）
	        *1、id：组件实例的id。
	        *2、apiName：是用户评价的数据的接口。
	        *3、size：你想每页展示的行数。
	        *4、resId：作为接口的参数，也是路由中的id（上一个页面点击“审核”按钮，将此行数据的id放到路由中，然后在jsonp页面，可以通过getHtmlArg("id")方法获取）
	        */
	        {
	            "title": "用户评论的组件",
	            "showTitle": false,
	            "childrenContentNoBorder": true,
	            "titleIcon": "dssg-slope-arrow",
	            "data": _react2["default"].createElement(_UserRating2["default"], { id: 'zyckUserRating', apiName: 'userRatingApiName', size: '5', resId: 'sss' }) //此处的resId 是路由里面的id字段   
	        }, {
	            "title": "订阅设备",
	            "showTitle": true,
	            "childrenContentNoBorder": true,
	            "titleIcon": "dssg-slope-arrow",
	            "data": _react2["default"].createElement(_Dyyh2["default"], { id: 'bottomData2', zyckId1: 'wfbdzyFileZyck', zyckId: 'wfbdzyFile', bottomRequest: 'false' })
	        }, {
	            "title": "资源发布信息",
	            "column": 2,
	            "showTitle": true,
	            "childrenContentFormItemHeightLow": true,
	            "titleIcon": "dssg-slope-arrow",
	            "labelCol": 8,
	            "wrapperCol": 16,
	            "buttonConfigs": {
	                "buttons": [{ "type": "button", mark: "wfbdzyFile", "value": "返回", "field": "back", props: { type: "primary", "style": { "float": "right" } } }]
	            },
	            "data": [{ "name": "发布原因", "type": "text", "field": "reason", "defaultValue": processRecordDTO.applyReason }, { "name": "申请人", "type": "text", "field": "applyUser", "defaultValue": processRecordDTO.applyUser }, { "name": "申请时间", "type": "text", "field": "applyTime", "defaultValue": processRecordDTO.applyTime }, { "name": "审核结果", "type": "text", "field": "result", "defaultValue": processRecordDTO.result == null ? " " : processRecordDTO.result == "0" ? "通过" : "拒绝" }, { "name": "审核意见", "type": "text", "field": "reviewDesc", "defaultValue": processRecordDTO.reviewDesc }, { "name": "审核时间", "type": "textarea", "field": "reviewTime", "defaultValue": "潇洒下手" }]
	        }]
	    });
	});

/***/ },

/***/ 194:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"mainCon2":"mainCon2___3hNlK","menuDefaultState":"menuDefaultState___1ruB6","mainDefaultState":"mainDefaultState___naVRA","openMenu":"openMenu___2yk0V","openMenuAn":"openMenuAn___ayq1N","openMain":"openMain___3EJzH","openMainAn":"openMainAn___11SBe","closeMenu":"closeMenu___2pw9M","closeMenuAn":"closeMenuAn___2_6uI","closeMain":"closeMain___1MtTG","closeMainAn":"closeMainAn___1zgHr","loginDlg":"loginDlg___2VvSd","loginTab":"loginTab___1QZXV","loginForm":"loginForm___1hQK_","loginButton":"loginButton___5c9Up","loginSpan":"loginSpan___1Y-_L","forgotMi":"forgotMi___1gsO1","userLogin":"userLogin___2XA_6","userLoginSpan":"userLoginSpan___EiJzu","forgetS":"forgetS___UGko_","loginHeader":"loginHeader___21clT","loginLogo":"loginLogo___18JnC","loginFooter":"loginFooter___4Ck3h","Dssg":"Dssg___2nDpY","DssgRight":"DssgRight___2W4jY","revisePassword":"revisePassword___2UOdB","reviseRel":"reviseRel___3b9TH","reviseContent":"reviseContent___qwr6u","revisePasForm":"revisePasForm___8MxuT","revisePasTit":"revisePasTit___NlSTa","reviseItemAll":"reviseItemAll___2TpQV","itemFont":"itemFont___3m971","revisePasInput":"revisePasInput___q3XQ5","reviseTip":"reviseTip___1jbpS","reviseTip2":"reviseTip2___3ztOQ","mainConRightConWidth":"mainConRightConWidth___3PIEv","mainConRightConWidth2":"mainConRightConWidth2___2-_tb","mainConMenuWidth":"mainConMenuWidth___pMVsn","mainConMenuIn":"mainConMenuIn___2c2FA","menuTitle":"menuTitle___3e0F1","footer":"footer___3YKjL","header":"header___1O2A5","headerContent1":"headerContent1___3jeOG","headerContent2":"headerContent2___2dl0_","headUnit":"headUnit___13xqw","navigatorUl":"navigatorUl___1dvhh","navigateSearchArea":"navigateSearchArea___1L1DY","popOverContent":"popOverContent___3nBWw","title":"title___3Wv84","titleLeft":"titleLeft___1dblQ","titleRight":"titleRight___21Eg0","pictureAbstractsContent":"pictureAbstractsContent___2mUw-","leftPicture":"leftPicture___2OxoO","rightAbstracts":"rightAbstracts___1qRDU","leftRatingContent":"leftRatingContent___HWiQg","rightAiFormContent":"rightAiFormContent___mr7T4","mainContent":"mainContent___3UKHC","everyUserRating":"everyUserRating___2GqMl","userRatingTitle":"userRatingTitle___3CUhS","ratingContent":"ratingContent___J80Xz","userRatingAll":"userRatingAll___2vHuQ","allRatingTitleContent":"allRatingTitleContent___3_ktI","leave":"leave___2pDd7","enter":"enter____ZoMb"};

/***/ },

/***/ 1012:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"footer":"footer___1VVCW"};

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

/***/ },

/***/ 1125:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _css = __webpack_require__(282);

	var _rate = __webpack_require__(280);

	var _rate2 = _interopRequireDefault(_rate);

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

	var _global = __webpack_require__(10);

	var _AiForm = __webpack_require__(27);

	var _AiForm2 = _interopRequireDefault(_AiForm);

	var _basicMessage = __webpack_require__(1018);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var getHtmlArg = function getHtmlArg(name, defaultValue) {
		var match = window.location.href.match(new RegExp(name + '=([^&#]*)'));
		return match ? decodeURIComponent(match[1]) : defaultValue;
	};
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

	var BasicMessage2 = function (_Component) {
		(0, _inherits3["default"])(BasicMessage2, _Component);

		function BasicMessage2(props) {
			(0, _classCallCheck3["default"])(this, BasicMessage2);
			return (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));
		}

		BasicMessage2.prototype.componentDidMount = function componentDidMount() {}
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

		BasicMessage2.prototype.render = function render() {

			var showValues = this.props.showValues ? this.props.showValues : {};
			var config = {
				data: [{
					"title": "",
					"column": 2,
					"showTitle": false,
					"data": [{ "name": "资源编码", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "resCode", "defaultValue": showValues.resCode ? showValues.resCode : "" }, { "name": "资源英文名称", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "resEname", "defaultValue": showValues.resEname ? showValues.resEname : "" }, { "name": "资源类型", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "resType", "defaultValue": showValues.resType == 1 ? "数据库" : showValues.resType == 2 ? "文件" : "API" }, { "name": "资源等级", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "resLevel", "defaultValue": showValues.resLevel == 1 ? "部分共享" : "完全共享" }, { "name": "主题分类", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "themeTypeName", "defaultValue": showValues.themeTypeName ? showValues.themeTypeName : showValues.themeName }, { "name": "行业分类", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "industryTypeName", "defaultValue": showValues.industryTypeName ? showValues.industryTypeName : "" }, { "name": "发布目录", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "catalogName", "defaultValue": showValues.catalogName ? showValues.catalogName : "" }, { "name": "更新周期", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "updateCycle", "defaultValue": showValues.updateCycle ? showValues.updateCycle : "" }, { "name": "发布时间", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "publishTime", "defaultValue": showValues.publishTime ? showValues.publishTime.substring(0, 19) : "" }, { "name": "最后更新时间", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "updateTime", "defaultValue": showValues.updateTime ? showValues.updateTime.substring(0, 19) : "" }]
				}]
			};
			return _react2["default"].createElement(
				'div',
				{ className: "basicMessageContentMain" },
				_react2["default"].createElement(
					'div',
					{ className: '' + _App2["default"].title },
					_react2["default"].createElement(
						'div',
						{ className: '' + _App2["default"].titleLeft },
						showValues.restitle ? showValues.restitle : showValues.resName
					),
					_react2["default"].createElement(
						'div',
						{ className: '' + _App2["default"].titleRight },
						_react2["default"].createElement(
							'div',
							null,
							'\u8BA2\u9605\u91CF\uFF1A',
							showValues.subscibeTotal ? showValues.subscibeTotal : "0"
						),
						_react2["default"].createElement(
							'div',
							null,
							'\u4E0B\u8F7D\u91CF\uFF1A',
							showValues.downloadNum ? showValues.downloadNum : "0"
						)
					)
				),
				_react2["default"].createElement(
					'div',
					null,
					_react2["default"].createElement(
						'div',
						{ className: _App2["default"].pictureAbstractsContent + ' clearfix' },
						_react2["default"].createElement(
							'div',
							{ className: '' + _App2["default"].leftPicture },
							_react2["default"].createElement('img', { alt: showValues.resName, src: showValues.filePath ? server + showValues.filePath : "images/columnOneDefaultImg.png" })
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
						{ style: { position: 'relative' } },
						_react2["default"].createElement(
							'div',
							{ className: '' + _App2["default"].leftRatingContent },
							_react2["default"].createElement(
								'div',
								null,
								_react2["default"].createElement(_rate2["default"], { disabled: true, value: showValues.assessmentNum ? showValues.assessmentNum : "0" })
							),
							_react2["default"].createElement(
								'div',
								{ style: { marginTop: 5, fontSize: '14px' } },
								'\u7EFC\u5408\u8BC4\u5206\uFF1A',
								showValues.assessmentNum ? showValues.assessmentNum : "0"
							)
						),
						_react2["default"].createElement(
							'div',
							{ className: '' + _App2["default"].rightAiFormContent },
							showValues && _react2["default"].createElement(_AiForm2["default"], { version: '2', key: this.props.seed, config: config, id: this.props.subId })
						)
					)
				)
			);
		};

		return BasicMessage2;
	}(_react.Component);

	exports["default"] = (0, _component2["default"])("basicMessage2", {})(BasicMessage2);
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(87)))

/***/ },

/***/ 1135:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _css = __webpack_require__(61);

	var _table = __webpack_require__(60);

	var _table2 = _interopRequireDefault(_table);

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _defineProperty2 = __webpack_require__(7);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(6);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(5);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class, _temp;

	var _Footer = __webpack_require__(1012);

	var _Footer2 = _interopRequireDefault(_Footer);

	var _AiForm = __webpack_require__(455);

	var _AiForm2 = _interopRequireDefault(_AiForm);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _component = __webpack_require__(11);

	var _component2 = _interopRequireDefault(_component);

	var _global = __webpack_require__(10);

	var _interfaces = __webpack_require__(35);

	var _actionType = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var dyyhCloumn = [{
	    title: "订阅单位",
	    dataIndex: 'company',
	    key: 'company'
	}, {
	    title: "订阅设备",
	    dataIndex: 'name',
	    key: 'name'
	}, {
	    title: "用户等级",
	    dataIndex: 'level',
	    key: 'level',
	    render: function render(text, record, index) {
	        switch (record.level) {
	            case '1':
	                return '一级';
	            case '2':
	                return '二级';
	            case '3':
	                return '三级';
	        }
	    }
	}, {
	    title: "申请原因",
	    dataIndex: 'applayReason',
	    key: 'applayReason'
	}, {
	    title: "订阅时间",
	    dataIndex: 'applayTime',
	    key: 'applayTime'
	}, {
	    title: "联系电话",
	    dataIndex: 'telphone',
	    key: 'telphone'
	}];
	var rootState = 'test';

	var JsonpComp = (_temp = _class = function (_Component) {
	    (0, _inherits3["default"])(JsonpComp, _Component);

	    function JsonpComp(props) {
	        (0, _classCallCheck3["default"])(this, JsonpComp);

	        var _this = (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));

	        JsonpComp.init = true;

	        return _this;
	    }

	    JsonpComp.prototype.componentDidMount = function componentDidMount() {
	        if (JsonpComp.init) {
	            var _zyck;

	            _global.Global.mark({
	                zyck: (_zyck = {}, (0, _defineProperty3["default"])(_zyck, this.props.zyckId1, {
	                    selected: null,
	                    bottomData1: null,
	                    bottomData: {
	                        data: {
	                            content: null
	                        }
	                    }
	                }), (0, _defineProperty3["default"])(_zyck, 'zyckId', this.props.zyckId), (0, _defineProperty3["default"])(_zyck, 'zyckId1', this.props.zyckId1), (0, _defineProperty3["default"])(_zyck, 'bottomRequest', this.props.bottomRequest), _zyck)
	            });
	            this.requestList(_global.Global.getState().dataList[this.props.zyckId].selectedRows[0]); //
	            JsonpComp.init = false;
	        }
	    };

	    /*  componentWillUnmount(){//会出错
	           Global.mark({
	               zyck: {
	                   [this.props.zyckId1]: null,
	                 /!*  zyckId: null,
	                   zyckId1: null,
	                   bottomRequest: null*!/
	               }
	           })
	           JsonpComp.init = true;
	       }*/

	    JsonpComp.prototype.requestList = function requestList(id) {
	        var zyck1 = this.props.zyckId1;
	        _global.Global.requestApi((0, _extends3["default"])({}, _interfaces.wfbdzySjkZyckDyyh, { body: (0, _extends3["default"])({}, _interfaces.wfbdzySjkZyckDyyh.body, { resourceId: id }) }), _actionType.wfbdzySjkZyck.requestListApi, {
	            zyck: (0, _defineProperty3["default"])({}, this.props.zyckId1, {
	                bottomData: null
	            })
	        });
	    };

	    JsonpComp.prototype.requestBottom = function requestBottom(selectedRow) {
	        if (this.props.bottomRequest && this.props.bottomRequest == "false") return;

	        var zyck = this.props.zyckId1;
	        if (!selectedRow) {
	            console.log('Dyyh选择行为空');
	            return;
	        }

	        _global.Global.requestApi((0, _extends3["default"])({}, _interfaces.getSubscribeInfo, { body: (0, _extends3["default"])({}, _interfaces.getSubscribeInfo.body, {
	                resourceId: _global.Global.getState().dataList[this.props.zyckId].selectedRows[0],
	                subSendEquipment: selectedRow.subSendEquipment
	            })
	        }), _actionType.wfbdzySjkZyck.requestBottomApi, {
	            zyck: (0, _defineProperty3["default"])({}, this.props.zyckId1, {
	                bottomData1: null
	            })
	        });
	    };

	    JsonpComp.prototype.render = function render() {
	        var _this2 = this;

	        var state = this.props.zyck[this.props.zyckId1];
	        var rowSelection = {
	            type: 'radio',
	            // selectedRowKeys:Array.isArray(state.selected?state.selected:[0])?state.selected:[0],
	            onChange: function (selectedRowKeys, selectedRows) {
	                _global.Global.mark({
	                    zyck: (0, _defineProperty3["default"])({}, _this2.props.zyckId1, {
	                        selected: selectedRowKeys
	                    })
	                });
	                _this2.requestBottom(selectedRows[0]);
	            }.bind(this)
	        };
	        if (!state || !state.bottomData) return _react2["default"].createElement(
	            'div',
	            null,
	            '...'
	        );

	        if (state.bottomData.msg) return _react2["default"].createElement(
	            'div',
	            null,
	            state.bottomData.msg
	        );
	        return _react2["default"].createElement(
	            'div',
	            { className: "customizedTable2" },
	            _react2["default"].createElement(_table2["default"], { rowSelection: rowSelection, pagination: false, columns: dyyhCloumn, dataSource: state.bottomData.data.content || [], bordered: true })
	        );
	    };

	    return JsonpComp;
	}(_react.Component), _class.init = true, _temp);
	exports["default"] = (0, _component2["default"])(rootState, {}, function (state) {
	    return { zyck: state.zyck };
	})(JsonpComp);
	module.exports = exports['default'];

/***/ },

/***/ 1152:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _css = __webpack_require__(461);

	var _pagination = __webpack_require__(458);

	var _pagination2 = _interopRequireDefault(_pagination);

	var _css2 = __webpack_require__(282);

	var _rate = __webpack_require__(280);

	var _rate2 = _interopRequireDefault(_rate);

	var _css3 = __webpack_require__(44);

	var _icon = __webpack_require__(19);

	var _icon2 = _interopRequireDefault(_icon);

	var _defineProperty2 = __webpack_require__(7);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

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

	var _global = __webpack_require__(10);

	var _interfaces = __webpack_require__(35);

	var interfaces = _interopRequireWildcard(_interfaces);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var UserRating = function (_Component) {
		(0, _inherits3["default"])(UserRating, _Component);

		function UserRating(props) {
			(0, _classCallCheck3["default"])(this, UserRating);

			var _this = (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));

			var ratingApi = interfaces[_this.props.apiName];
			ratingApi = (0, _extends3["default"])({}, ratingApi, { remoteUrl: ratingApi.remoteUrl + "?page=0&size=" + _this.props.size, body: { resourceid: _this.props.resId } });
			console.log("ratingApi:", ratingApi);
			_global.Global.requestApi(ratingApi, { userRating: (0, _defineProperty3["default"])({}, _this.props.id, null) });
			return _this;
		}

		UserRating.prototype.componentDidMount = function componentDidMount() {};

		UserRating.prototype.onChange = function onChange(page) {
			var ratingApi2 = interfaces[this.props.apiName];
			ratingApi2 = (0, _extends3["default"])({}, ratingApi2, { remoteUrl: ratingApi2.remoteUrl + "?page=" + (page - 1) + "&size=" + this.props.size, body: { id: this.props.resId } });
			console.log("ratingApi2:", ratingApi2);
			_global.Global.requestApi(ratingApi2, { userRating: (0, _defineProperty3["default"])({}, this.props.id, null) });
		};

		UserRating.prototype.remoteUrlChange = function remoteUrlChange() {};

		UserRating.prototype.render = function render() {
			var userRatingState = _global.Global.getState().userRating ? _global.Global.getState().userRating : {};
			var userRatingData = userRatingState[this.props.id] && userRatingState[this.props.id].data ? userRatingState[this.props.id].data : {};
			var userRatingContentData = userRatingData ? userRatingData.content : [];
			return userRatingData && _react2["default"].createElement(
				'div',
				{ className: '' + _App2["default"].userRatingAll },
				_react2["default"].createElement(
					'div',
					{ className: '' + _App2["default"].allRatingTitleContent },
					_react2["default"].createElement(_icon2["default"], { type: 'dssg-slope-arrow' }),
					_react2["default"].createElement(
						'span',
						null,
						'\u8BC4\u4EF7\u603B\u6570'
					),
					_react2["default"].createElement(
						'span',
						null,
						'(',
						userRatingData.totalElements ? userRatingData.totalElements : "",
						')'
					)
				),
				_react2["default"].createElement(
					'div',
					{ className: '' + _App2["default"].mainContent },
					_react2["default"].createElement(
						'div',
						null,
						userRatingContentData && userRatingContentData.length > 0 ? userRatingContentData.map(function (item, i) {
							return _react2["default"].createElement(
								'div',
								{ className: '' + _App2["default"].everyUserRating },
								_react2["default"].createElement(
									'div',
									{ className: _App2["default"].userRatingTitle + ' clearfix' },
									_react2["default"].createElement(
										'div',
										null,
										_react2["default"].createElement('img', { style: { marginTop: 5 }, src: 'images/user.png' })
									),
									_react2["default"].createElement(
										'div',
										null,
										item.assessmentPersonName
									),
									_react2["default"].createElement(
										'div',
										null,
										_react2["default"].createElement(_rate2["default"], { disabled: true, defaultValue: item.assessmentScore, value: item.assessmentScore })
									),
									_react2["default"].createElement(
										'div',
										null,
										item.submitTime
									)
								),
								_react2["default"].createElement(
									'div',
									{ className: '' + _App2["default"].ratingContent },
									item.assessmentContent
								)
							);
						}) : _react2["default"].createElement(
							'div',
							{ style: { textAlign: 'center' } },
							'\u6682\u65E0\u8BC4\u8BBA'
						)
					),
					_react2["default"].createElement(
						'div',
						{ style: { overflow: 'hidden' } },
						_react2["default"].createElement(
							'div',
							{ style: { "float": 'right' } },
							userRatingData && userRatingContentData && userRatingContentData.length > 0 && _react2["default"].createElement(_pagination2["default"], {
								defaultCurrent: 1,
								defaultPageSize: this.props.size,
								total: userRatingData.totalElements,
								onChange: this.onChange.bind(this)

							})
						)
					)
				)
			);
		};

		return UserRating;
	}(_react.Component);
	/* import ratingStyle  from './UserRating.less' */

	exports["default"] = (0, _component2["default"])("userRating", {}, function (state, props) {
		return {
			framework: state.framework
		};
	}, true)(UserRating);
	module.exports = exports['default'];

/***/ },

/***/ 1886:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _css = __webpack_require__(61);

	var _table = __webpack_require__(60);

	var _table2 = _interopRequireDefault(_table);

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

	__webpack_require__(35);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var DefaultSelectTableRows = function (_Component) {
		(0, _inherits3["default"])(DefaultSelectTableRows, _Component);

		function DefaultSelectTableRows(props) {
			(0, _classCallCheck3["default"])(this, DefaultSelectTableRows);

			var _this = (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));

			var keys = [];
			var tableData = _this.props.selectedTableData;
			tableData.forEach(function (item, i) {
				keys.push(item[_this.props.primaryKey]);
			});
			_global.Global.mark({
				defaultSelectTableRows: (0, _defineProperty3["default"])({}, _this.props.id, {
					keys: keys
				})
			});
			return _this;
		}

		DefaultSelectTableRows.prototype.render = function render() {
			var _this2 = this;

			var selectedTableColumns = this.props.selectedTableColumns ? this.props.selectedTableColumns : [];
			var selectedTableData = this.props.selectedTableData ? this.props.selectedTableData : [];
			var primaryKey = this.props.primaryKey ? this.props.primaryKey : "";
			var rowSelection = {
				selectedRowKeys: _global.Global.getState().defaultSelectTableRows[this.props.id].keys,
				onChange: function onChange(selectedRowKeys, selectedRows) {
					_global.Global.mark({
						defaultSelectTableRows: (0, _defineProperty3["default"])({}, _this2.props.id, {
							keys: selectedRowKeys
						})
					});
				}
			};
			return _react2["default"].createElement(
				'div',
				null,
				_react2["default"].createElement(_table2["default"], { rowKey: primaryKey, rowSelection: rowSelection, columns: selectedTableColumns, dataSource: selectedTableData, bordered: true, pagination: false })
			);
		};

		return DefaultSelectTableRows;
	}(_react.Component);

	exports["default"] = (0, _component2["default"])("defaultSelectTableRows", {}, function (state) {
		return {
			framework: state.framework
		};
	})(DefaultSelectTableRows);
	module.exports = exports['default'];

/***/ }

});