webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(2446);

	var _modal = __webpack_require__(29);

	var _modal2 = _interopRequireDefault(_modal);

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

	var _global = __webpack_require__(10);

	var _history = __webpack_require__(32);

	var _history2 = _interopRequireDefault(_history);

	var _interfaces = __webpack_require__(35);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _BasicMessage = __webpack_require__(1021);

	var _BasicMessage2 = _interopRequireDefault(_BasicMessage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * Created by liy on 2016/12/21 0021.
	 */
	var FormItem = _form2["default"].Item;
	(0, _jsonp2["default"])("wfbdzyFileCxdy")(function (args, callback) {

	    var states = _global.Global.getState();
	    var datas = states.dataList.wfbdzyFile.detailMsgDataApi && states.dataList.wfbdzyFile.detailMsgDataApi.data ? states.dataList.wfbdzyFile.detailMsgDataApi.data : {};
	    var metadataDetail = datas ? datas.metadataDTO : {};
	    metadataDetail.resType = "2";
	    var userName = states.framework.loginApi.data.loginUserProfileDTO.loginName;
	    //订阅用户
	    var dyyhCloumn = [{
	        "title": "订阅单位",
	        "dataIndex": "company",
	        "key": "company",
	        render: function render(text, record, index) {
	            return _react2["default"].createElement(
	                'div',
	                { title: text, style: { width: _global.Global.getState().framework.columnWidth, cursor: "pointer", display: "inline-block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } },
	                text
	            );
	        }
	    }, {
	        "title": "订阅设备",
	        "dataIndex": "name",
	        "key": "name"
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
	    var next = function next() {
	        callback({
	            "success": true,
	            "data": [{
	                "title": "元数据基本信息",
	                "column": 1,
	                "showTitle": true,
	                "titleIcon": "metadata-message",
	                /* "data":[
	                    {"type":"text","name":"文件编码" ,"field":"resName" ,"defaultValue":metadataDetail.restitle?metadataDetail.restitle:""},
	                    {"type":"text","name":"文件名称" ,"field":"resName" ,"defaultValue":metadataDetail.restitle?metadataDetail.restitle:""},
	                    {"type":"text","name":"关键字","field":"keyword","defaultValue":metadataDetail.keyword?metadataDetail.keyword:""},
	                    {"type":"text","name":"国家主题分类" ,"field":"themeType" ,"defaultValue":datas.themeTypeName?datas.themeTypeName:""},
	                    {"type":"text","name":"部门主题分类" ,"field":"departmentType" ,"defaultValue":datas.departmentTypeName?datas.departmentTypeName:""},
	                    {"type":"text","name":"资源类型" ,"field":"resourceType" ,"defaultValue":'文件'},
	                    {"type":"text","name":"数据提供方单位" ,"field":"rporgname" ,"defaultValue":metadataDetail.rporgname?metadataDetail.rporgname:""},
	                    {"type":"text","name":"数据提供方地址" ,"field":"address","defaultValue":metadataDetail.address?metadataDetail.address:"" }
	                ] */
	                "data": _react2["default"].createElement(_BasicMessage2["default"], { subId: 'wfbdzyFileCxdy', showValues: metadataDetail, leftShow: 'false' })
	            }, {
	                "title": "订阅设备",
	                "showTitle": true,
	                "titleIcon": "user",
	                "data": function data() {
	                    var rowSelection = {
	                        onSelect: function onSelect(record, selected, selectedRows) {
	                            _global.Global.mark({
	                                dataList: {
	                                    wfbdzyFileCxdyUserId: record.subSendEquipment
	                                }
	                            });
	                        }
	                    };
	                    // let values = {};
	                    // values = {...values};
	                    return _react2["default"].createElement(
	                        'div',
	                        { className: "customizedTable" },
	                        _react2["default"].createElement(_table2["default"], { rowSelection: rowSelection, columns: dyyhCloumn, dataSource: _global.Global.getState().dataList.wfbdzyFileCxdy.data.content, bordered: true, pagination: false })
	                    );
	                }
	            }, {
	                "title": "资源撤销订阅信息",
	                "column": 2,
	                "showTitle": true,
	                "titleIcon": "res-pub-mes",
	                "buttonConfigs": {
	                    //"onSubmitApi":{apiName:"wfbdzyCxdySubmit"},
	                    "getValue": { id: "aFBCD", index: 2 },
	                    "buttons": [{ "type": "button", "value": "取消", props: { "style": { "float": "right" } } }, { "type": "button", "value": "撤销订阅", props: { type: "primary", "style": { "float": "right" }, onClick: function onClick() {
	                                var form = _global.Global.getState().aiForm.aFBCD.form;
	                                var value = form.getFieldValue('revokeReason');
	                                var ids = _global.Global.getState().dataList.wfbdzyFileCxdyUserId;
	                                if (ids) {
	                                    _global.Global.requestApi({ apiName: "wfbdzyCxdySubmit", body: { resourceId: datas.id, subSendEquipment: ids, revokeReason: value }, next: function next() {
	                                            var result = _global.Global.getState().dataList.wfbdzyFileCxdy.wfbdzyFileCxdyResult;
	                                            if (result) {
	                                                _modal2["default"].success({
	                                                    title: '提示',
	                                                    content: '撤销订阅成功'
	                                                });
	                                                _global.Global.mark({
	                                                    dataList: {
	                                                        wfbdzySjkCxdy: null,
	                                                        wfbdzyFileCxdyUserId: null
	                                                    }
	                                                });
	                                                _history2["default"].push('datalist/list/wfbdzyFile/0/10');
	                                            } else {

	                                                _modal2["default"].warning({
	                                                    title: '提示',
	                                                    content: '撤销订阅失败'
	                                                });
	                                            }
	                                        } }, ['requestFileCxdy', 'receieveFileCxdy', 'failedFileCxdy'], { dataList: { wfbdzyFileCxdy: { wfbdzyFileCxdyResult: null } } });
	                                } else {
	                                    _modal2["default"].warning({
	                                        title: '提示',
	                                        content: '请选择撤销的订阅用户'
	                                    });
	                                }
	                            } } }]
	                },
	                "data": [{ "name": "撤销原因", "type": "input", "field": "revokeReason" }, { "name": "申请人", "type": "text", "defaultValue": userName, field: "applyUser" }]
	            }]
	        });
	    };
	    _global.Global.requestApi({
	        apiName: 'wfbdzySjkZyckDyyh',
	        body: {
	            resourceId: _global.Global.getState().dataList.wfbdzyFile.selectedRows[0]
	        },
	        next: next
	    }, ['requestDyyh', 'receieveDyyh', 'failedTableDyyh'], {
	        dataList: {
	            wfbdzyFileCxdy: null
	        }
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