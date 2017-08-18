webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(26);

	var _button = __webpack_require__(23);

	var _button2 = _interopRequireDefault(_button);

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _css2 = __webpack_require__(2292);

	var _modal = __webpack_require__(29);

	var _modal2 = _interopRequireDefault(_modal);

	var _css3 = __webpack_require__(54);

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

	var _actionType = __webpack_require__(22);

	var _history = __webpack_require__(32);

	var _history2 = _interopRequireDefault(_history);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var FormItem = _form2["default"].Item; /**
	                                     * Created by liy on 2016/12/16 0019.
	                                     */


	(0, _jsonp2["default"])("wdydzyWjDylcSteperDemo")(function (args, callback) {
	    var list = _global.Global.getState().dataList.wdydzyWj;
	    if (!list || !list.selectedRows) {
	        _modal2["default"].warning({
	            title: '提示',
	            content: '页面刷新，请重新选择要查看的条目。',
	            onOk: function onOk() {
	                setTimeout(function () {
	                    _history2["default"].push("/datalistV1/wdydzyWj/list/0/10");
	                }, 500);
	            }
	        });
	        return;
	    }
	    callback({
	        "success": true,
	        "data": {
	            "afterSave": "/datalistV1/wdydzyWj/list/0/10",
	            "steps": [{
	                "arg": {
	                    detailMsg: (0, _extends3["default"])({}, _interfaces.wdydzyWjDylcDetailData, { body: (0, _extends3["default"])({}, _interfaces.wdydzyWjDylcDetailData.body, { resType: 2, listType: 2, id: _global.Global.getState().dataList.wdydzyWj.selectedRows[0] }) })
	                },
	                "type": "aiForm",
	                "configStepApi": "wdydzyWjDyStep1",
	                "number": "1",
	                "name": "填写订阅申请",
	                "id": "wdydzyWjDyStep1",
	                "footer": [function () {}, "next", "cancel"]
	            }, {
	                "type": "datalist",
	                "configStepApi": "wdydzyWjDyStep2",
	                "number": "2",
	                "name": "选择目的数据源",
	                "id": "wdydzyWjDyStep2",
	                "footer": [function () {
	                    return _react2["default"].createElement(
	                        _button2["default"],
	                        { onClick: function onClick() {
	                                var selected = _global.Global.getState().dataList.wdydzyWjDyStep2.selectedRows;
	                                if (selected.length == 1) {
	                                    _global.Global.requestApi((0, _extends3["default"])({}, _interfaces.dataSourceByIdTest, {
	                                        body: { id: selected[0] }
	                                    }), _actionType.returnResult.requestDataSourceTest, {
	                                        dataList: {
	                                            wfbdzySjkZyfbSteperDemo: null
	                                        }
	                                    });
	                                }
	                            } },
	                        '\u6D4B\u8BD5\u8FDE\u63A5'
	                    );
	                }, "prev", "next", "cancel"],
	                "validate": function validate() {
	                    var selected = _global.Global.getState().dataList.wdydzyWjDyStep2.selectedRows;
	                    var validate = selected && selected.length == 1;
	                    if (!validate) {
	                        _modal2["default"].warning({
	                            title: '提示',
	                            content: '请选择一条数据源，再点击”下一步“。'
	                        });
	                    }

	                    return validate;
	                }
	            }, {
	                "arg": {
	                    detailMsg: (0, _extends3["default"])({}, _interfaces.wdydzyWjDylcDetailData, { body: (0, _extends3["default"])({}, _interfaces.wdydzyWjDylcDetailData.body, { resType: 2, listType: 2, id: _global.Global.getState().dataList.wdydzyWj.selectedRows[0] }) })
	                },

	                "type": "aiForm",
	                "configStepApi": "wdydzyWjDyStep3",
	                "number": "3",
	                "name": "发布资源预览",
	                "id": "wdydzyWjDyStep3",
	                "validate": function validate() {
	                    var state = _global.Global.getState();
	                    var step1ApplyReason = state.aiForm.wdydzyWjDyStep1 ? state.aiForm.wdydzyWjDyStep1.value : "";
	                    var selectedRowId = state.dataList.wdydzyWj.selectedRows[0];
	                    var step2 = state.dataList.wdydzyWjDyStep2;
	                    var step2SelectRows = step2.selectedRows[0];
	                    var userName = state.framework.loginApi.data.loginUserProfileDTO && state.framework.loginApi.data.loginUserProfileDTO.loginName ? state.framework.loginApi.data.loginUserProfileDTO.loginName : "";
	                    var userId = state.framework.loginApi.data.loginUserProfileDTO && state.framework.loginApi.data.loginUserProfileDTO.id ? state.framework.loginApi.data.loginUserProfileDTO.id : "";
	                    var apiConfig = (0, _extends3["default"])({}, _interfaces.wdydzyWjDySaveSubscribeInfo, {
	                        body: (0, _extends3["default"])({}, _interfaces.wdydzyWjDySaveSubscribeInfo.body, { targetResourceType: "2", resourceId: selectedRowId, applyReason: step1ApplyReason, targetDataSrcId: step2SelectRows, type: 1, applyPerson: userName, applyPersonId: userId
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