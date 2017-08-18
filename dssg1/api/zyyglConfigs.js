webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _defineProperty2 = __webpack_require__(7);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _css = __webpack_require__(2992);

	var _modal = __webpack_require__(29);

	var _modal2 = _interopRequireDefault(_modal);

	var _css2 = __webpack_require__(44);

	var _icon = __webpack_require__(19);

	var _icon2 = _interopRequireDefault(_icon);

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

	(0, _jsonp2["default"])("zyyglConfigs")(function (args, callback) {
		callback({
			"success": true,
			"data": {
				"id": "zyyglConfigs",
				"buttonConfigs": [{ "buttonName": "add" }, { "buttonName": function buttonName(config) {
						return _react2["default"].createElement(
							'div',
							{ style: { "float": "left" } },
							_react2["default"].createElement(
								'div',
								{ className: "configRightBtnGp" },
								_react2["default"].createElement(
									'div',
									null,
									_react2["default"].createElement(_icon2["default"], { type: 'dssg-delete' }),
									_react2["default"].createElement(
										'a',
										{ onClick: function onClick() {
												var result = (0, _dataFormat.checkSelectId)(_global.Global, "zyyglConfigs");
												if (!result) {
													_modal2["default"].warning({
														content: '请选择一条数据！'
													});
													return result;
												}
												var ids = _global.Global.getState().dataList.zyyglConfigs.selectedRows[0];

												_global.Global.requestApi({ apiName: 'findThisDomainIsCurrentInfo', body: { domainId: ids }, next: function next(action) {
														if (action.data) {
															_modal2["default"].confirm({
																title: '告警信息',
																content: '是否确认删除？',
																onOk: function onOk() {
																	_global.Global.requestApi({ apiName: 'deleteDomainResource', body: { domainId: ids }, next: function next(action) {
																			if (action.code && action.code == 0) {
																				console.log("资源域删除成功..");
																			} else {
																				_modal2["default"].warning({
																					content: '资源域删除失败...'
																				});
																			}
																		} }, ["requestResState", "receiveResState", "failedResState"], {});
																},
																onCancel: function onCancel() {
																	console.log("reset exit!!!");
																}
															});
														} else {
															_modal2["default"].warning({
																content: '您不是当前域的创建者，无法删除'
															});
														}
													} });
											} },
										'\u5220\u9664'
									)
								)
							)
						);
					}
				}, { "buttonName": "edit" }, { "buttonName": function buttonName(config) {
						return _react2["default"].createElement(
							'div',
							{ style: { "float": "left" } },
							_react2["default"].createElement(
								'div',
								{ className: "configRightBtnGp" },
								_react2["default"].createElement(
									'div',
									null,
									_react2["default"].createElement(_icon2["default"], { type: 'poweroff' }),
									_react2["default"].createElement(
										'a',
										{ onClick: function onClick() {
												var result = (0, _dataFormat.checkSelectId)(_global.Global, "zyyglConfigs");
												if (!result) {
													_modal2["default"].warning({
														content: '请选择一条数据！'
													});
													return result;
												}
												var ids = _global.Global.getState().dataList.zyyglConfigs.selectedRows[0];
												_global.Global.requestApi({ apiName: 'findEquipmentIsDomainInnerInfo', body: { domainId: ids }, next: function next(action) {
														if (action.data && action.data == true) {
															_global.Global.requestApi({ apiName: 'findThisDomainIsCurrentInfo', body: { domainId: ids }, next: function next(action) {
																	if (action.data) {
																		_modal2["default"].confirm({
																			title: '告警信息',
																			content: '你是当前域创建者，确认退出则表示解散该域？',
																			onOk: function onOk() {
																				_global.Global.requestApi({ apiName: 'quitResourceDomainInfo', body: { domainId: ids }, next: function next(action) {} }, ["requestResState", "receiveResState", "failedResState"], {});
																			},
																			onCancel: function onCancel() {
																				console.log("reset exit!!!");
																			}
																		});
																	} else {
																		_modal2["default"].confirm({
																			title: '告警信息',
																			content: '你确定退出当前域吗？',
																			onOk: function onOk() {
																				_global.Global.requestApi({ apiName: 'quitResourceDomainInfo', body: { domainId: ids }, next: function next(action) {} }, ["requestResState", "receiveResState", "failedResState"], {});
																			},
																			onCancel: function onCancel() {
																				console.log("reset exit!!!");
																			}
																		});
																	}
																} });
														} else {
															_modal2["default"].warning({
																content: '设备不在该资源域中无需退出'
															});
															return false;
														}
													} });
											} },
										'\u9000\u51FA'
									)
								)
							)
						);
					}
				}],
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
						title: '资源域名称',
						dataIndex: 'name',
						key: 'name',
						render: function render(text, record, index) {
							return _react2["default"].createElement(
								'div',
								{ style: (0, _defineProperty3["default"])({ width: _global.Global.getState().framework.columnWidth, cursor: "pointer", display: "inline-block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", color: "#0033FF" }, 'cursor', "pointer"), onClick: function onClick() {
										_global.Global.mark({ zyygl: { zyygl_inst: { zyyglModal: true } } });
										_global.Global.requestApi({ apiName: 'findDomainInnerDetailByIdInfo', body: { id: record.id } }, { zyygl: { zyygl_inst: { zyyModalDatas: null } } });
									} },
								text
							);
						}
					}, {
						title: '管理节点',
						dataIndex: 'equipmentName',
						key: 'equipmentName'

					}, {
						title: '域管理员',
						dataIndex: 'contacts',
						key: 'contacts'
					}, {
						title: '联系电话',
						dataIndex: 'telphone',
						key: 'telphone'
					}, {
						title: '管理单位',
						dataIndex: 'company',
						key: 'company'
					}],
					"body": { apiName: 'zyyglTableData', body: { companyId: null } }
				},
				"add": {
					byDialog: true,
					"initData": {
						data: { apiName: "zyyglAdd" }
					},
					"onAddSubmitApi": { "apiName": "saveDomainResource", next: function next() {
							_global.Global.requestApi({ apiName: 'findDomainResByTreeInfo', body: { name: null } }, { zyygl: { zyygl_inst: { zyyglTreeData: null } } });
						} }
				},
				"edit": {
					byDialog: true,
					"validate": function validate(_next) {
						var result = (0, _dataFormat.checkSelectId)(_global.Global, "zyyglConfigs");
						if (!result) {
							_modal2["default"].warning({
								content: '请选择一条数据！'
							});
							return result;
						}
						var ids = _global.Global.getState().dataList.zyyglConfigs.selectedRows[0];
						_global.Global.requestApi({ "apiName": "findThisDomainIsCurrentInfo", body: { domainId: ids }, next: function next(action) {
								if (action.data) {
									_next();
								} else {
									_modal2["default"].warning({
										content: '您不是当前域的创建者，无法进行编辑'
									});
								}
							} }, ["request", "receiv", "failed"], {});
					},
					"initData": {
						data: { apiName: "zyyglEdit" }
					},
					"onUpdateSubmitApi": { "apiName": "updateDomainResource" }
				},
				"detail": {
					"body": { apiName: 'findDomainResourceByIdInfo' }
				},
				"delete": {
					"body": { apiName: 'deleteZyyglInfo' }
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

	var _css = __webpack_require__(2992);

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