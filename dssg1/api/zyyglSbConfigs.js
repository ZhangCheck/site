webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(3022);

	var _modal = __webpack_require__(29);

	var _modal2 = _interopRequireDefault(_modal);

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

	(0, _jsonp2["default"])("zyyglSbConfigs")(function (args, callback) {
		callback({
			"success": true,
			"data": {
				"id": "zyyglSbConfigs",
				"buttonConfigs": [{ "buttonName": "add", "showName": "维护设备" }],
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
						title: '设备名称',
						dataIndex: 'equipmentName',
						key: 'equipmentName',
						render: function render(text, record, index) {
							return _react2["default"].createElement(
								'div',
								{ style: (0, _defineProperty3["default"])({ width: _global.Global.getState().framework.columnWidth, cursor: "pointer", display: "inline-block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", color: "#0033FF" }, 'cursor', "pointer"), onClick: function onClick() {
										_global.Global.mark({ zyygl: { zyygl_inst: { sbxxModal: true } } });
										_global.Global.requestApi({ apiName: 'findDomainEquipmentInnerDetailByIdInfo', body: { id: record.resDomainId, equipmentId: record.equipmentId } }, { zyygl: { zyygl_inst: { sgxxModalDatas: null } } });
									} },
								text
							);
						}
					}, {
						title: '设备地址',
						dataIndex: 'equipentIp',
						key: 'equipentIp'

					}, {
						title: '设备角色(域内)',
						dataIndex: 'equipmentRole',
						key: 'equipmentRole',
						render: function render(text, record, index) {
							if (record.equipmentRole == "0") {
								return "接入节点";
							} else if (record.equipmentRole == "1") {
								return "管理节点";
							} else {
								return "未知";
							}
						}
					}, {
						title: '所属单位',
						dataIndex: 'company',
						key: 'company'
					}, {
						title: '状态',
						dataIndex: 'equipmentStatus',
						key: 'equipmentStatus',
						render: function render(text, record, index) {
							if (record.equipmentStatus == "0") {
								return "已退出";
							} else if (record.equipmentStatus == "1") {
								return "已加入";
							} else {
								return "未知";
							}
						}
					}],
					"body": { apiName: 'findDomainEquipmentByListTableInfo', body: { id: _global.Global.getState().framework.zyyglTreeData.selected[0] } }
				},
				"add": {
					byDialog: true,
					"validate": function validate(_next) {
						_global.Global.requestApi({ "apiName": "findThisDomainIsCurrentInfo", body: { domainId: _global.Global.getState().framework.zyyglTreeData.selected[0] }, next: function next(action) {
								if (action.data) {
									_next();
								} else {
									_modal2["default"].warning({
										content: '您不是当前域的创建者，无法维护设备'
									});
								}
							} }, ["request", "receiv", "failed"], {});
					},
					"initData": {
						data: { apiName: "zyyglSbCallBack" }
					},
					"onAddSubmitApi": { "apiName": "saveDomainResource" }
				},
				"edit": {
					byDialog: true,
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

	var _css = __webpack_require__(3022);

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