webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _dataFormat = __webpack_require__(64);

	var _global = __webpack_require__(10);

	var _StepContainerV = __webpack_require__(287);

	var _StepContainerV2 = _interopRequireDefault(_StepContainerV);

	var _BasicMessage = __webpack_require__(1021);

	var _BasicMessage2 = _interopRequireDefault(_BasicMessage);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _component = __webpack_require__(11);

	var _component2 = _interopRequireDefault(_component);

	var _EmbedPageDemo = __webpack_require__(1166);

	var _EmbedPageDemo2 = _interopRequireDefault(_EmbedPageDemo);

	var _MyTable = __webpack_require__(1144);

	var _MyTable2 = _interopRequireDefault(_MyTable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("wfbdzySjkZyfbStep6")(function (args, callback) {
	    var state = _global.Global.getState();

	    var detailMsg = state.dataList.fbzyList && state.dataList.fbzyList.detailMsgDataApi && state.dataList.fbzyList.detailMsgDataApi.data ? state.dataList.fbzyList.detailMsgDataApi.data : {};

	    var gxmlsjxDataSource = state.connectDatasource.connectDataSourceDemo.requestDataItemContent.data.dbJson ? (0, _dataFormat.jsonStrToArray)(state.connectDatasource.connectDataSourceDemo.requestDataItemContent.data.dbJson) : [];
	    var bbb = _global.Global.getState().aiFormTable.aFTD.config.dataSource;
	    var table_releation = [];

	    var pkColumns = [];
	    state.connectDatasource.connectDataSourceDemo && state.connectDatasource.connectDataSourceDemo.linkdatas && state.connectDatasource.connectDataSourceDemo.linkdatas.forEach(function (items, index) {
	        var obj = {};
	        obj.sourceTable = items.from.table;
	        obj.targetTable = items.to.table;
	        obj.releation = items.from.field + ',' + items.to.field;
	        obj.index = index;
	        obj.operation = '=';
	        obj.joinType = items.linkType;
	        table_releation.push(obj);
	    });
	    var resultG = _global.Global.getState().aiForm.wfbdzySjkZyfbStep5.values;
	    var ddModelDatas = [];
	    if (resultG.ddModel == 1) {
	        ddModelDatas.push({ "dispatchType": "周期模式", "startTime": _global.Global.getState().aiForm.wfbdzySjkZyfbStep5.values.startTime.format("YYYY-MM-DD HH:mm:ss"), "cycle": resultG.zqIntervalCycle });
	    } else if (resultG.ddModel == 2) {
	        ddModelDatas.push({ "dispatchType": "定期模式", "cycle": "" });
	    } else {
	        ddModelDatas.push({ "dispatchType": "触发器模式" });
	    }

	    var sourceColumns = [];
	    bbb.forEach(function (item) {
	        var obj = {};
	        var name = [];
	        if (item && item.pk == true) {
	            if (item.columnName.indexOf('.') != -1) {
	                name.push(item.dataSource + "." + item.columnName.split('.')[0]);
	            } else {
	                name.push(item.dataSource + "." + item.columnName);
	            }
	        }
	        if (name.length > 0) {
	            pkColumns.push({ name: name.join(',') });
	        }
	        if (item) {
	            if (item.columnName.indexOf('.') != -1) {
	                sourceColumns.push({
	                    "dataItemName": item.name,
	                    "dataItemCode": item.code,
	                    "table": item.dataSource,
	                    "columnName": item.columnName.split('.')[0],
	                    "showName": item.columnName,
	                    "index": item.index,
	                    "type": item.dataType
	                });
	                return;
	            } else {
	                sourceColumns.push({
	                    "dataItemName": item.name,
	                    "dataItemCode": item.code,
	                    "table": item.dataSource,
	                    "columnName": item.columnName,
	                    "showName": item.columnName,
	                    "index": item.index,
	                    "type": item.dataType
	                });
	                return;
	            }
	        }
	    });

	    var dbJson = [];
	    bbb.forEach(function (item) {
	        if (item) {
	            dbJson.push({
	                "name": item.name,
	                "ename": item.ename,
	                "code": item.code,
	                "dataCode": item.dataCode,
	                "daCode": item.daCode,
	                "length": item.length,
	                "type": item.type,
	                "columnType": item.dataType ? item.dataType : "",
	                "isData": item.isData,
	                "pk": item.pk
	            });
	            return;
	        }
	    });
	    var dispatchStrategy = {};
	    if (resultG.ddModel == 1) {
	        var stepValues1 = _global.Global.getState().aiForm.wfbdzySjkZyfbStep5.values;
	        dispatchStrategy.dispatchType = 1;
	        dispatchStrategy.beginTime = stepValues1.startTime.format("YYYY-MM-DD HH:mm:ss");
	        dispatchStrategy.cycle = parseInt(resultG.zqIntervalCycle);
	        dispatchStrategy.dateTypeMin = resultG.zqTimeUnit;
	        dispatchStrategy.dateTypeMax = "";
	        dispatchStrategy.day = "";
	        dispatchStrategy.hour = "";
	        dispatchStrategy.second = "";
	    } else if (resultG.ddModel == 2) {
	        dispatchStrategy.dispatchType = 2;
	        dispatchStrategy.beginTime = "";
	        dispatchStrategy.cycle = "";
	        dispatchStrategy.dateTypeMin = "";
	        dispatchStrategy.dateTypeMax = resultG.dqTimeUnit;
	        dispatchStrategy.day = parseInt(resultG.dayTime);
	        dispatchStrategy.hour = parseInt(resultG.hourTime);
	        dispatchStrategy.second = parseInt(resultG.minTime);
	    } else {
	        dispatchStrategy.dispatchType = 3;
	    }
	    var incrementModel = state.aiForm.wfbdzySjkZyfbStep3.values && state.aiForm.wfbdzySjkZyfbStep3.values.ddModel ? state.aiForm.wfbdzySjkZyfbStep3.values.ddModel : 1;
	    var timestampField = "";

	    if ("触发器同步" == incrementModel) {
	        incrementModel = 1;
	        timestampField == "";
	    } else if (incrementModel == 2) {
	        timestampField = state.aiForm.wfbdzySjkZyfbStep3.values.ColumnModel;
	    }
	    var values = {
	        "resType": 1,
	        "resourceId": detailMsg.id,
	        "dbJson": dbJson,
	        "dataSourceId": state.dataList.wfbdzySjkZyfbStep1.selectedRows[0],
	        "dbPublishDataJson": {
	            "timestampField": timestampField,
	            "incrementModel": incrementModel,
	            "tables": state.connectDatasource.connectDataSourceDemo.tableIds,
	            "table_releation": table_releation,
	            "pkColumns": pkColumns,
	            "sourceColumns": sourceColumns
	        },
	        "dispatchStrategyJson": dispatchStrategy

	    };
	    _global.Global.mark({
	        'stepContainer': {
	            stepValues: values
	        }
	    });

	    callback({
	        "success": true,
	        "data": [{
	            "title": "查看编目申请",
	            "column": 2,
	            "showTitle": true,
	            "childrenContentFormItemHeightLow": true,
	            "titleIcon": "dssg-slope-arrow",
	            "data": [{ "name": "编目单位", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "createComp", "defaultValue": detailMsg.companyName ? detailMsg.companyName : "" }, { "name": "编目节点", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "createEqu", "defaultValue": detailMsg.equipmentName ? detailMsg.equipmentName : "" }, { "name": "联系人", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "linkman", "defaultValue": detailMsg.linkman ? detailMsg.linkman : "" }, { "name": "联系电话", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "phone", "defaultValue": detailMsg.phone ? detailMsg.phone : "" }, { "name": "资源域", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "domainName", "defaultValue": detailMsg.doMainName ? detailMsg.doMainName : "" }, { "name": "资源目录", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "catalogName", "defaultValue": detailMsg.catalogName ? detailMsg.catalogName : "" }, { "name": "资源类型", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "resType", "defaultValue": detailMsg.resType == 1 ? "数据库" : detailMsg.resType == 2 ? "文件" : "API" }]
	        }, {
	            "title": "数据预览",
	            "column": 1,
	            "showTitle": true,
	            "titleIcon": "dssg-slope-arrow",
	            "childrenContentNoBorder": true,
	            "childrenContentFormItemHeightLow": true,
	            "data": _react2["default"].createElement(_MyTable2["default"], { id: 'aaa',
	                resourceId: detailMsg.id,
	                dataSourceId: state.dataList.wfbdzySjkZyfbStep1.selectedRows[0],
	                dbPublishDataJson: {
	                    "tables": state.connectDatasource.connectDataSourceDemo.tableIds,
	                    "table_releation": table_releation,
	                    "pkColumns": pkColumns,
	                    "sourceColumns": sourceColumns
	                }

	            })
	        }]
	    });
	}); /**
	     * Created by liy on 2016/12/19 0019.
	     */

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

/***/ },

/***/ 1144:
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

	var _getIterator2 = __webpack_require__(37);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

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

	var _dataFormat = __webpack_require__(64);

	var _Loading = __webpack_require__(78);

	var _Loading2 = _interopRequireDefault(_Loading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var rootState = 'stepContainer'; //import styles from './Footer.less';

	var MyTable = function (_Component) {
	    (0, _inherits3["default"])(MyTable, _Component);

	    function MyTable(props) {
	        (0, _classCallCheck3["default"])(this, MyTable);

	        var _this = (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));

	        var dateItem = _global.Global.getState().dataList && _global.Global.getState().dataList.fbzyList && _global.Global.getState().dataList.fbzyList.detailMsgDataApi && _global.Global.getState().dataList.fbzyList.detailMsgDataApi.data && _global.Global.getState().dataList.fbzyList.detailMsgDataApi.data.dbJson ? (0, _dataFormat.jsonStrToArray)(_global.Global.getState().dataList.fbzyList.detailMsgDataApi.data.dbJson) : [];
	        _global.Global.requestApi({ apiName: 'publishPreviewMoreTable', body: { resourceId: _this.props.resourceId, dataSourceId: _this.props.dataSourceId, dbPublishDataJson: _this.props.dbPublishDataJson } }, (0, _defineProperty3["default"])({}, rootState, {
	            aaa: {
	                myTableData: null
	            }
	        }));

	        return _this;
	    }

	    MyTable.prototype.render = function render() {
	        console.log('render customComponent');
	        var state = this.props.state;
	        if (!state) return _react2["default"].createElement(
	            'div',
	            null,
	            '...'
	        );
	        var dateItem = _global.Global.getState().dataList && _global.Global.getState().dataList.fbzyList && _global.Global.getState().dataList.fbzyList.detailMsgDataApi && _global.Global.getState().dataList.fbzyList.detailMsgDataApi.data && _global.Global.getState().dataList.fbzyList.detailMsgDataApi.data.dbJson ? (0, _dataFormat.jsonStrToArray)(_global.Global.getState().dataList.fbzyList.detailMsgDataApi.data.dbJson) : [];
	        var dataSource = [];
	        var columns = [];
	        if (state.myTableData.data) {
	            if (dateItem.length > 0) {
	                console.log({ "dateItem": dateItem });
	                dateItem.forEach(function (item) {
	                    var target = void 0;
	                    var _iteratorNormalCompletion = true;
	                    var _didIteratorError = false;
	                    var _iteratorError = undefined;

	                    try {
	                        for (var _iterator = (0, _getIterator3["default"])(state.myTableData.data.sourceColumns), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                            var map = _step.value;

	                            if (map.dataItemName == item.name) {
	                                target = map;
	                                break;
	                            }
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

	                    if (target && target.columnName != "" && target.columnName) {
	                        columns.push({
	                            title: target.columnName ? target.columnName : "-",
	                            dataIndex: target.columnName ? target.columnName : "-",
	                            key: target.columnName ? target.columnName : "-"

	                        });
	                    }
	                });
	            }
	            var tables = this.props.dbPublishDataJson.tables;
	            var content = this.props.state.myTableData.data.content;
	            if (content.length > 0 && tables.length > 1) {
	                var sourceColumns = this.props.dbPublishDataJson.sourceColumns;
	                var moreTableColumns = [];
	                var _iteratorNormalCompletion2 = true;
	                var _didIteratorError2 = false;
	                var _iteratorError2 = undefined;

	                try {
	                    for (var _iterator2 = (0, _getIterator3["default"])(sourceColumns), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                        var map = _step2.value;

	                        if (map.columnName != null && map.columnName != "") {
	                            moreTableColumns.push({
	                                title: map.table + "_" + map.columnName,
	                                dataIndex: map.table + "_" + map.columnName,
	                                key: map.table + "_" + map.columnName
	                            });
	                        }
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

	                columns = moreTableColumns;
	            }
	            if (state.myTableData.data.content && state.myTableData.data.content.forEach) {
	                this.props.state.myTableData.data.content.forEach(function (item, i) {
	                    dataSource.push((0, _extends3["default"])({}, item, {
	                        key: 'row_' + i
	                    }));
	                });
	            }
	        }

	        return columns.length > 0 && _react2["default"].createElement(
	            'div',
	            null,
	            _react2["default"].createElement(_table2["default"], { bordered: true, style: { width: '100%' }, dataSource: dataSource, columns: columns })
	        );
	    };

	    return MyTable;
	}(_react.Component);

	exports["default"] = (0, _component2["default"])(rootState)(MyTable); //

	module.exports = exports['default'];

/***/ },

/***/ 1166:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

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

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _component = __webpack_require__(11);

	var _component2 = _interopRequireDefault(_component);

	var _global = __webpack_require__(10);

	var _Loading = __webpack_require__(78);

	var _Loading2 = _interopRequireDefault(_Loading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	//import styles from './Footer.less';
	var rootState = 'customComponent';

	var EmbedPageDemo = function (_Component) {
	  (0, _inherits3["default"])(EmbedPageDemo, _Component);

	  function EmbedPageDemo(props) {
	    (0, _classCallCheck3["default"])(this, EmbedPageDemo);

	    // ----- state init here -----
	    var _this = (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));

	    _global.Global.mark((0, _defineProperty3["default"])({}, rootState, (0, _defineProperty3["default"])({}, _this.props.id, {
	      normalState: 'myState',
	      apiDemoApi: {}
	    })), "CustomComponent_init");
	    // ----- api demo ------
	    _global.Global.requestApi({ apiName: 'apiDemo' }, (0, _defineProperty3["default"])({}, rootState, (0, _defineProperty3["default"])({}, _this.props.id, {
	      apiDemoApi: null
	    })));
	    return _this;
	  }

	  EmbedPageDemo.prototype.render = function render() {
	    console.log('render customComponent');
	    var state = this.props.state;
	    var actions = this.props.actions;
	    return this.props.state ? _react2["default"].createElement(
	      'div',
	      null,
	      _react2["default"].createElement(
	        'h3',
	        null,
	        '\u81EA\u5B9A\u4E49\u7EC4\u4EF6'
	      ),
	      _react2["default"].createElement(
	        'div',
	        null,
	        '\u7EC4\u4EF6id: ',
	        this.props.id
	      ),
	      _react2["default"].createElement(
	        _Loading2["default"],
	        { api: state.apiDemoApi },
	        state.apiDemoApi.data
	      ),
	      _react2["default"].createElement(
	        'div',
	        null,
	        '\u5176\u5B83\u72B6\u6001\uFF1A',
	        state.normalState
	      )
	    ) : _react2["default"].createElement(
	      'div',
	      null,
	      'ssss'
	    );
	  };

	  return EmbedPageDemo;
	}(_react.Component);

	exports["default"] = (0, _component2["default"])(rootState)(EmbedPageDemo);
	module.exports = exports['default'];

/***/ }

});