webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(559);

	var _upload = __webpack_require__(528);

	var _upload2 = _interopRequireDefault(_upload);

	var _css2 = __webpack_require__(26);

	var _button = __webpack_require__(23);

	var _button2 = _interopRequireDefault(_button);

	var _css3 = __webpack_require__(2150);

	var _modal = __webpack_require__(29);

	var _modal2 = _interopRequireDefault(_modal);

	var _css4 = __webpack_require__(54);

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

	var _interfaces = __webpack_require__(35);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var FormItem = _form2["default"].Item;
	(0, _jsonp2["default"])("sbglSubStep2")(function (args, callback) {
		_global.Global.mark({ sbglsub: {
				sbglsub_inst: {} } }, 'init_sbglSubstep2');
		/* Global.requestApi({apiName:'findCerRarInfo',next:action=>{
	    }},{
	      sbglsub:{
	      sbglsub_inst:{
	          defaultFiles:null
	      }}});*/
		var modalWarning = function modalWarning(content) {
			_modal2["default"].warning({
				title: '提示',
				content: content,
				onOk: function onOk() {}
			});
		};
		var defaultState = _global.Global.getState().sbglsub.sbglsub_inst;
		var props = {
			name: 'file',
			action: _interfaces.server + 'syselocalquipment/getCenterEquimentCerInfo',
			// defaultFileList:defaultState.defaultFiles&&defaultState.defaultFiles.data?(defaultState.defaultFiles.data.length<1?[]:defaultState.defaultFiles.data):[],
			multiple: false,
			headers: {
				authorization: 'authorization-text'
			},
			beforeUpload: function beforeUpload(file) {
				if (_global.Global.getState().sbglsub.sbglsub_inst.file) {
					_modal2["default"].warning({
						title: '提示',
						content: '请不要重复上传证书,如需重新认证，请删除后再次上传',
						onOk: function onOk() {}
					});
					return false;
				}
				var isRAR = /\.rar$/.test(file.name);
				if (!isRAR) {
					modalWarning("您只能上传rar压缩文件！");
				}
				var isLt20K = file.size / 1024 < 20;
				if (!isLt20K) {
					modalWarning("文件大小必须小于20KB！");
				}
				return isRAR && isLt20K;
			},
			onChange: function onChange(info) {
				_global.Global.mark({ aiForm: { sbglSubStep2: { filename: info.file.name } } });
				if (info.file.status === 'done') {
					_global.Global.mark({
						sbglsub: {
							sbglsub_inst: {
								file: true
							}
						}
					}, 'onUploadSucess');
					var uploadStatus = info.file.response.data.status;
					if (uploadStatus == 'success') {
						_modal2["default"].warning({
							title: '提示',
							content: info.file.name + "文件上传成功！",
							onOk: function onOk() {
								var fileDatas = info.file.response.data.res;
								_global.Global.mark({ aiForm: { fileDatas: fileDatas } });
								var oldConfig = _global.Global.getState().aiForm.sbglSubStep2.config.data;

								oldConfig[1] = {
									"title": "浏览证书信息",
									"column": 2,
									"showTitle": true,
									"data": [{
										"name": "设备名称",
										"type": "text",
										"field": "equipmentName",
										"defaultValue": fileDatas.equipmentName
									}, {
										"name": "单位名称",
										"type": "text",
										"field": "companyName",
										"defaultValue": fileDatas.companyName
									}, {
										"name": "联系人",
										"type": "text",
										"field": "contacts",
										"defaultValue": fileDatas.contacts
									}, {
										"name": "联系电话",
										"type": "text",
										"field": "contactsTel",
										"defaultValue": fileDatas.contactsTel
									}, {
										"name": "邮箱",
										"type": "text",
										"field": "email",
										"defaultValue": fileDatas.email
									}, {
										"name": "单位地址",
										"type": "text",
										"field": "address",
										"defaultValue": fileDatas.address
									}, {
										"type": "input",
										props: { style: { display: "none" } },
										"field": "id",
										"defaultValue": fileDatas.id ? fileDatas.id : ""
									}]
								};
								_global.Global.mark({ aiForm: { sbglSubStep2: { config: { data: oldConfig } } } });
							}
						});
					} else {
						var message = "";
						if (uploadStatus == 'filereadfail') {
							message = "证书中业务文件读取失败...";
						} else if (uploadStatus == 'compression') {
							message = "证书文件解压失败..";
						} else if (uploadStatus == 'error') {
							message = "证书文件解析失败..";
						} else if (uploadStatus == 'uploadfail') {
							message = "证书文件上传失败...";
						} else if (uploadStatus == 'cernamefail') {
							message = "证书文件名称不合法，请核对";
						} else if (uploadStatus == 'authfail') {
							message = "证书认证解析过程中出现异常，请联系管理员。";
						} else if (uploadStatus == "notmanage") {
							message = "系统验证不通过,请上传管理节点证书";
						}
						_modal2["default"].warning({
							title: '提示',
							content: message
						});
					}
				} else if (info.file.status === 'error') {
					modalWarning(info.file.name + "文件上传失败！");
				} else if (info.file.status === 'removed') {
					_global.Global.mark({
						sbglsub: {
							sbglsub_inst: {
								file: false
							}
						}
					}, 'onDeleteSucess');
					_global.Global.requestApi({ apiName: 'removeFileData', body: { filename: info.file.name }, next: function next(action) {
							var sbglSubstepInfoRemove = _global.Global.getState().aiForm.sbglSubStep2.config.data;
							sbglSubstepInfoRemove[1] = {};
							_global.Global.mark({
								aiForm: {
									sbglSubStep2: {
										config: {
											data: sbglSubstepInfoRemove
										}
									}
								}
							});
							modalWarning(info.file.name + "文件删除成功！");
						} }, { framework: { removeFileData: null } });
				}
			}
		};
		callback({
			"success": true,
			"data": [{
				"title": "认证管理节点证书",
				"column": 2,
				"showTitle": true,
				"data": [{ "value": function value(config) {
						return _react2["default"].createElement(
							'div',
							null,
							_react2["default"].createElement(
								'div',
								{ className: 'uploadMain clearfix' },
								_react2["default"].createElement(
									'div',
									{ className: 'uploadTitle' },
									'\u5BFC\u5165\u8BC1\u4E66\uFF1A'
								),
								_react2["default"].createElement(
									'div',
									{ className: 'uploadContent' },
									_react2["default"].createElement(
										_upload2["default"],
										props,
										_react2["default"].createElement(
											_button2["default"],
											{ type: 'primary' },
											'\u4E0A\u4F20'
										)
									)
								)
							)
						);
					}
				}]
			}]
		});
	});

/***/ }
]);