webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _getIterator2 = __webpack_require__(37);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	//生成日期：Tue Jun 20 2017 15:07:27 GMT+0800 (中国标准时间)
	//请手动创建页面文件 "src/pageArgs/catalogAdd.js"，并填充当前内容
	//创建文件后，浏览路由地址“#/datalistV1/catalogAdd/list/11/10",点击新增，可查看到页面实际效果
	(0, _jsonp2["default"])("catalogAdd")(function (args, callback) {
		//从树中读取详情数据
		var state = Global.getState(),
		    detailMsgDataApi = state.dataList.mlgl.detailMsgDataApi,
		    defaultValue = detailMsgDataApi && detailMsgDataApi.data || {};
		var doMainId = state.mainConMenu.selected[0];
		var equipmentTree = void 0;
		var auditorEquipment = void 0;
		var auditorEquipmentId = void 0;
		var auditorCompanyId = void 0;
		var auditorCompany = void 0;
		var currentSelectEquipment = void 0;
		var inputType = false;

		var updateInput = function updateInput(action, value) {
			if (action != null) {
				equipmentTree = action.data;
				currentSelectEquipment = getTreeSelectDefaultValue(equipmentTree);
				if (defaultValue.auditorUserName && defaultValue.auditorEquipmentId == currentSelectEquipment.equimentId) {
					currentSelectEquipment.contacts = defaultValue.auditorUserName;
					currentSelectEquipment.telphone = defaultValue.telphone;
				}
				auditorEquipment = currentSelectEquipment.equipmentIdentify;
				auditorEquipmentId = currentSelectEquipment.equimentId;
				auditorCompany = currentSelectEquipment.cname;
				auditorCompanyId = currentSelectEquipment.companyId;
			} else {
				currentSelectEquipment = getTreeSelectValue(equipmentTree, value);
				auditorEquipment = currentSelectEquipment.equipmentIdentify;
				auditorEquipmentId = currentSelectEquipment.equimentId;
				auditorCompany = currentSelectEquipment.cname;
				auditorCompanyId = currentSelectEquipment.companyId;
			}

			Global.getState().aiForm.catalogAdd.form.setFieldsValue({
				auditorUserName: currentSelectEquipment.contacts,
				telphone: currentSelectEquipment.telphone,
				auditorEquipmentId: auditorEquipmentId,
				auditorCompany: auditorCompany,
				auditorCompanyId: auditorCompanyId,
				auditorEquipment: auditorEquipment
			});
		};
		//初始化目录审核节点数据后初始化联系人和联系电话
		function getTreeSelectDefaultValue(equipmentTree) {
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {

				for (var _iterator = (0, _getIterator3["default"])(equipmentTree), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var dataList = _step.value;

					if (dataList.selected == true) {
						return dataList;
					}
					var value = dataList.children;
					if (value.length > 0) {
						var res = getTreeSelectDefaultValue(value);
						if (res) return res;
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

			return null;
		}
		//选择目录审核节点数据后联动联系人和联系电话
		function getTreeSelectValue(equipmentTree, value) {
			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = (0, _getIterator3["default"])(equipmentTree), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var dataList = _step2.value;

					if (dataList.equimentId == value && dataList.isNode) {
						return dataList;
					}
					var childrens = dataList.children;
					if (childrens.length > 0) {
						var res = getTreeSelectValue(childrens, value);
						if (res) return res;
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

			return null;
		}
		if (defaultValue.id) {
			inputType = true;
		}
		callback({
			"success": true,
			"data": [{

				"column": 2, //列数（布局）
				"showTitle": false, //是否显示栏目抬头   
				//"childrenContentNoBorder":true,
				//"childrenContentFormItemHeightLow":true,
				"titleIcon": "file-text", //栏目抬头前的图标 
				"data": [//表单项

				{ "name": "目录名称", "type": "input", "field": "name", "defaultValue": defaultValue.name ? defaultValue.name : "", "validate": [{ "required": true, "message": '请填写目录名称 !' }, {
						validator: function validator(rule, value, callback) {
							if (defaultValue.name && defaultValue.name == value) {
								callback();
							} else {
								if (value && value != "") {
									if (value.length > 50) {
										callback('请限制输入在50以内！');
									} else {
										if (name && value == name) {
											callback();
										} else if (!/^[\w\u4E00-\u9FA5\uFF00-\uFFFF]+$/.test(value)) {
											callback('支持中英文、数字、下划线');
										} else {
											Global.requestApi({ apiName: "checkCatalogName", body: { name: value, type: 1, resDomainId: doMainId }, next: function next(action) {
													if (action.data == false) {
														callback('名称已使用，请修改！');
													} else {
														callback();
													}
												} }, {}, {});
										}
									}
								} else {
									callback();
								}
							}
						}
					}] }, { "name": "目录审核节点", "type": "treeSelect", "field": "auditorEquipmentId",
					props: {
						onChange: function onChange(treeSelect, value) {
							updateInput(null, value);
						}
					},

					dictId: "auditorEquipment",
					dictApi: { apiName: 'findDomainResByDomainIdEquipmentTreeInfo', body: { domainId: doMainId }, next: function next(action) {
							//todo: update input
							updateInput(action);
						} },

					"defaultValue": defaultValue.auditorEquipmentId ? defaultValue.auditorEquipmentId : "",
					"validate": [{
						"required": true, "message": '不能为空!'
					}]
				}, { "name": "目录编码", props: { disabled: inputType }, "type": "input", "field": "code", "defaultValue": defaultValue.code ? defaultValue.code : "", "validate": [{ "required": true, "message": '请填写目录编码 !' }, {
						validator: function validator(rule, value, callback) {
							if (defaultValue.code && defaultValue.code == value) {
								callback();
							} else {
								if (value && value != "") {
									if (value.length > 50) {
										callback('请限制输入在50以内！');
									} else {
										if (name && value == name) {
											callback();
										} else if (!/^[\w\u4E00-\u9FA5\uFF00-\uFFFF]+$/.test(value)) {
											callback('支持中英文、数字、下划线');
										} else {
											Global.requestApi({ apiName: "checkCatalogName", body: { code: value, type: 1, resDomainId: doMainId }, next: function next(action) {
													if (action.data == false) {
														callback('编码已使用，请修改！');
													} else {
														callback();
													}
												} }, {}, {});
										}
									}
								} else {
									callback();
								}
							}
						}
					}] }, { "name": "目录审核员", "type": "input", "field": "auditorUserName", "required": true, "defaultValue": defaultValue.auditorUserName ? defaultValue.auditorUserName : "", "validate": [{
						"required": true, "message": '不能为空!' }] }, { "name": "联系电话", "type": "input", "field": "telphone", "defaultValue": defaultValue.telphone ? defaultValue.telphone : "", "validate": [{
						validator: function validator(rule, value, callback) {
							if (value != "" && !(/^[1][0-9]{10}$/.test(value) || /^([0][0-9]{9,11})$/.test(value) || /^(^[0]\d{2,3}[-]\d{7,8})$/.test(value))) {
								callback('格式：0xxx+7-8位号码或正常手机号');
							} else {
								callback();
							}
						}
					}] }, { "name": "", "type": "input", props: { style: { display: "none" } }, "field": "id", "defaultValue": defaultValue.id ? defaultValue.id : "" }, { "name": "", "type": "input", props: { style: { display: "none" } }, "field": "resDomainId", "defaultValue": doMainId }, { "name": "", "type": "input", props: { style: { display: "none" } }, "field": "auditorEquipmentId", "defaultValue": auditorEquipmentId }, { "name": "", "type": "input", props: { style: { display: "none" } }, "field": "auditorEquipment", "defaultValue": auditorEquipment }, { "name": "", "type": "input", props: { style: { display: "none" } }, "field": "auditorCompany", "defaultValue": auditorCompany }, { "name": "", "type": "input", props: { style: { display: "none" } }, "field": "auditorCompanyId", "defaultValue": auditorCompanyId }],
				"buttonConfigs": { //底部按钮
					"buttons": [{ "type": "button", "value": "取消", mark: "sjygl", props: { "style": { "float": "right" } } }, { "type": "button", "value": "确定", mark: "sjygl", props: { "style": { "float": "right" }, htmlType: "submit", type: "primary" } }]
				}
			}]
		});
	});

/***/ }
]);