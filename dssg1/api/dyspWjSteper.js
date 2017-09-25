webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _css = __webpack_require__(1862);

	var _modal = __webpack_require__(29);

	var _modal2 = _interopRequireDefault(_modal);

	var _css2 = __webpack_require__(54);

	var _form = __webpack_require__(53);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _ConnectDatasource = __webpack_require__(217);

	var _ConnectDatasource2 = _interopRequireDefault(_ConnectDatasource);

	var _global = __webpack_require__(10);

	var _interfaces = __webpack_require__(35);

	var _history = __webpack_require__(32);

	var _history2 = _interopRequireDefault(_history);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * Created by liy on 2016/12/16 0019.
	 */
	var FormItem = _form2["default"].Item;

	(0, _jsonp2["default"])("dyspWjSteper")(function (args, callback) {
	    var list = _global.Global.getState().dataList.dyspWj;
	    if (!list || !list.selectedRows) {
	        _modal2["default"].warning({
	            title: '提示',
	            content: '页面刷新，请重新选择要查看的条目。',
	            onOk: function onOk() {
	                /* */
	                setTimeout(function () {
	                    _history2["default"].push("datalistV1/dyspWj/list/0/10");
	                }, 100);
	            }
	        });
	        return;
	    }
	    var subEupment = "";
	    var selectedRowId = _global.Global.getState().dataList.dyspWj.selectedRows[0];
	    var tableDatas = _global.Global.getState().dataList.dyspWj.tableBodyDataApi.data.content;
	    tableDatas.forEach(function (item) {
	        if (selectedRowId == item.id) {
	            subEupment = item.sub_SEND_EQUIPMENT;
	        }
	    });
	    callback({
	        "success": true,
	        "data": {
	            "afterSave": "datalistV1/dyspWj/list/0/10",
	            "steps": [{
	                "type": "aiForm",
	                "configStepApi": "dyspWjDyspStep1",
	                "arg": {
	                    detailMsg: (0, _extends3["default"])({}, _interfaces.dyspWjDetail, { body: (0, _extends3["default"])({}, _interfaces.dyspWjDetail.body, { id: _global.Global.getState().dataList.dyspWj ? _global.Global.getState().dataList.dyspWj.selectedRows : null }) })
	                },
	                "number": "1",
	                "name": "查看订阅申请",
	                "id": "dyspWjDyspStep1",
	                "footer": ['next', 'cancel'],
	                "validate": function validate() {
	                    var form = _global.Global.getState().aiForm.dyspWjDyspStep1.form;
	                    _global.Global.mark({
	                        aiForm: {
	                            dyspWjDyspStep1: {
	                                result: form.getFieldValue("result"),
	                                reviewDesc: form.getFieldValue("reviewDesc"),
	                                resourceId: form.getFieldValue("id")
	                            }
	                        }

	                    });
	                    return true;
	                }

	            }, {
	                "type": "aiForm",
	                "configStepApi": "dyspWjDyspStep2",
	                "arg": {
	                    detailMsg: (0, _extends3["default"])({}, _interfaces.dyspWjDetail, { body: (0, _extends3["default"])({}, _interfaces.dyspWjDetail.body, { id: _global.Global.getState().dataList.dyspWj ? _global.Global.getState().dataList.dyspWj.selectedRows : null }) })
	                },
	                "number": "2",
	                "name": "审核预览",
	                "id": "dyspWjDyspStep2",
	                "validate": function validate() {
	                    var subSendEquipment = _global.Global.getState().dataList.dyspWjDyspStep2.detailMsgDataApi[0].resSubscribeDTO.subSendEquipment;
	                    var apiConfig = (0, _extends3["default"])({}, _interfaces.dyspSaveAllData, {
	                        body: (0, _extends3["default"])({}, _interfaces.dyspSaveAllData.body, {
	                            resourceId: _global.Global.getState().aiForm.dyspWjDyspStep1.resourceId,
	                            approvalOpinion: _global.Global.getState().aiForm.dyspWjDyspStep1.reviewDesc,
	                            result: _global.Global.getState().aiForm.dyspWjDyspStep1.result,
	                            subSendEquipment: subSendEquipment, dbProcessStrategyJson: {}
	                        })
	                    });
	                    return apiConfig;
	                }
	            }]
	        }
	    });
	});

/***/ }
]);