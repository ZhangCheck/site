webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _css = __webpack_require__(26);

	var _button = __webpack_require__(23);

	var _button2 = _interopRequireDefault(_button);

	var _css2 = __webpack_require__(44);

	var _icon = __webpack_require__(19);

	var _icon2 = _interopRequireDefault(_icon);

	var _defineProperty2 = __webpack_require__(7);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(10);

	var _history = __webpack_require__(32);

	var _history2 = _interopRequireDefault(_history);

	var _dataFormat = __webpack_require__(64);

	var _AiForm = __webpack_require__(27);

	var _AiForm2 = _interopRequireDefault(_AiForm);

	var _Utils = __webpack_require__(565);

	var _Utils2 = _interopRequireDefault(_Utils);

	var _interfaces = __webpack_require__(35);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("sbglSubConfigs")(function (args, callback) {
		callback({
			"success": true,
			"data": {
				"id": "sbglSubConfigs",
				"table": {
					"primarykey": "id",
					"clounms": [{
						title: '序号',
						dataIndex: 'xh',
						key: 'xh',
						render: function render(text, record, index) {
							return index + 1;
						}
					}, {
						title: '单位名称',
						dataIndex: 'company',
						key: 'company',
						render: function render(text, record, index) {
							return _react2["default"].createElement(
								'div',
								{ title: text, style: { width: _global.Global.getState().framework.columnWidth, cursor: "pointer", display: "inline-block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } },
								text
							);
						}

					}, {
						title: '设备名称',
						dataIndex: 'name',
						key: 'name'
						/* render:(textrecordindex)=>{
	     	return <div title={text} style={{width:Global.getState().framework.columnWidthcursor:"pointer"display:"inline-block"overflow: "hidden"textOverflow:"ellipsis"whiteSpace:"nowrap"}}>{text}</div>
	     } */
					}, {
						title: '设备序列号',
						dataIndex: 'identifyication',
						key: 'identifyication',
						render: function render(text, record, index) {
							return _react2["default"].createElement(
								'div',
								{ style: (0, _defineProperty3["default"])({ width: _global.Global.getState().framework.columnWidth, cursor: "pointer", display: "inline-block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", color: "#0033FF" }, 'cursor', "pointer"), onClick: function () {
										_global.Global.mark({ sbglsub: { sbglsub_inst: { sbxlhModal: true } } });
										_global.Global.requestApi({ apiName: 'findSysEquipmentByIdInfo', body: { id: record.id } }, { sbglsub: { sbglsub_inst: { sbxlhModalDatas: null } } });
									}.bind(undefined) },
								text
							);
						}
					}, {
						title: '设备地址',
						dataIndex: 'publicIp',
						key: 'publicIp'
					}, {
						title: '设备角色',
						dataIndex: 'centerFlag',
						key: 'centerFlag',
						render: function render(text, record, index) {
							if (record.centerFlag == "1") {
								return "管理节点";
							} else {
								return "接入节点";
							}
						}
					}, {
						title: '联系人',
						dataIndex: 'contacts',
						key: 'contacts'
					}, {
						title: '联系电话',
						dataIndex: 'telphone',
						key: 'telphone'
					}, {
						title: '状态',
						dataIndex: 'status',
						key: 'status',
						render: function render(text, record, index) {
							if (record.authentic == "1") {
								if (record.status == "0") {
									return "在线";
								} else if (record.status == "-1") {
									return "退网";
								} else {
									return "掉线";
								}
							} else {
								return "未认证";
							}
						}
					}, {
						title: '操作',
						dataIndex: 'action',
						key: 'action',
						/* render:(text,record,index)=>{
	     	if(record.type=="1"){
	     		return (
	     			<div>
	     				<Button type="primary" className={"dataListBtn"} onClick={function(){
	     					  Global.mark({sbglsub:{sbglsub_inst:{xgsbxxModal:true}}});
	     					  //设备修改还没联调
	     					 // Global.requestApi({apiName:'sbIpMes',body:{xgsbxxSelected:record.id}},{framework:{xgsbxxModalDatas:null}});
	     				}}>
	     					<Icon type="edit"></Icon>
	     				</Button>
	     				 //下载接口也还没联调
	     				<Button type="primary" className={"dataListBtn"}><Icon type="download"></Icon></Button>
	     			</div>
	     		)
	     	}else{
	     		return "--"
	     	}
	     } */
						render: function render(text, record, index) {
							if (record.type == "1") {
								//由于edit接口还没联调，所以getOprationButtons的第一个数组参数的"edit"先拿掉，本来应该是["edit",...]
								return _global.Global.getState().dataList.sbglSubConfigs.getOprationButtons([function () {
									var url = _interfaces.server + "syselocalquipment/downCerFile?publicip=" + record.publicIp;
									return _react2["default"].createElement(
										'a',
										{ href: url },
										_react2["default"].createElement(
											_button2["default"],
											{ title: '\u4E0B\u8F7D', type: 'primary', className: "dataListBtn" },
											_react2["default"].createElement(_icon2["default"], { type: 'download' })
										)
									);
								}], text, record, index);
							} else {
								return "--";
							}
						}
					}], "body": { apiName: 'sbglSubTableData', body: { companyId: null } }
				},
				"edit": {
					"initData": {
						data: { apiName: "sbglSubEditDemo", title: "修改设备信息", width: 990 //增加title和width两个属性
						} },
					"dialog": {
						footer: _react2["default"].createElement(
							'div',
							null,
							'here'
						)
					},
					"onUpdateSubmitApi": function onUpdateSubmitApi(values) {
						return { apiName: "sbglSubTableData", body: (0, _extends3["default"])({}, values, { a: 'aa' }) };
					} //接口还没给

				}
			}
		});
	});

/***/ },

/***/ 565:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.dlStateWarning = exports.selectedToFormArgs = undefined;

	var _css = __webpack_require__(2115);

	var _modal = __webpack_require__(29);

	var _modal2 = _interopRequireDefault(_modal);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _global = __webpack_require__(10);

	var _config = __webpack_require__(286);

	var _history = __webpack_require__(32);

	var _history2 = _interopRequireDefault(_history);

	var _dataList = __webpack_require__(30);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	//HeadComponent组件的配置项headConfig里的initListTab
	exports["default"] = function (tabs, args) {
	    /*item.show 用于其他tab的展示标志位，eg部门分类和主题分类*/
	    return tabs.map(function (item, i) {
	        if (_config.resourceType.indexOf(item.name) != -1 || item.show == "1") {
	            return _react2["default"].createElement(
	                'div',
	                { className: "configLeftBtnGp" },
	                _react2["default"].createElement(
	                    'a',
	                    { href: "#/datalistV1/" + item.urlPart + "/list/0/10", className: args.target.props.params.config == item.urlPart ? "configLeftBtnGpA" : "" },
	                    _react2["default"].createElement(
	                        'span',
	                        null,
	                        item.name
	                    )
	                )
	            );
	        }
	    });
	};

	var selectedToFormArgs = exports.selectedToFormArgs = function selectedToFormArgs(datalistId) {
	    return {};
	};

	var dlStateWarning = exports.dlStateWarning = function dlStateWarning(key) {
	    _modal2["default"].warning({
	        title: "提示1",
	        content: "页面刷新，请重新选择要查看的条目。",
	        onOk: function onOk() {
	            setTimeout(function () {
	                var config = _global.Global.getState().routing.path.match(new RegExp('datalistV1/(\\w*)/' + key));
	                _history2["default"].push("datalistV1/" + config[1] + "/list/0/10");
	            }, 500);
	        }
	    });
	};

/***/ }

});