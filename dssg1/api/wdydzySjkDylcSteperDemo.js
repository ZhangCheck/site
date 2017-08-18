webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(2292);

	var _modal = __webpack_require__(29);

	var _modal2 = _interopRequireDefault(_modal);

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _ConnectDatasource = __webpack_require__(217);

	var _ConnectDatasource2 = _interopRequireDefault(_ConnectDatasource);

	var _global = __webpack_require__(10);

	var _history = __webpack_require__(32);

	var _history2 = _interopRequireDefault(_history);

	var _dataFormat = __webpack_require__(64);

	var _interfaces = __webpack_require__(35);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("wdydzySjkDylcSteperDemo")(function (args, callback) {
	    //let target = args.target;
	    callback({
	        "success": true,
	        "data": {
	            "afterSave": "datalistV1/wdydzySjk/list/0/10",
	            "steps": [{
	                "arg": {
	                    detailMsg: (0, _extends3["default"])({}, _interfaces.wdydzySjkDylcDetailData, { body: (0, _extends3["default"])({}, _interfaces.wdydzySjkDylcDetailData.body, { listType: 2, resType: 1, id: _global.Global.getState().dataList.wdydzySjk && _global.Global.getState().dataList.wdydzySjk.selectedRows ? _global.Global.getState().dataList.wdydzySjk.selectedRows : 'null' }) })
	                },
	                "type": "aiForm",
	                "configStepApi": "wdydzySjkDyStep1",
	                "number": "1",
	                "name": "填写订阅申请",
	                "id": "wdydzySjkDyStep1",
	                "footer": [function () {}, "next", "cancel"],
	                "validate": function validate() {
	                    var form = _global.Global.getState().aiForm.wdydzySjkDyStep1.form;
	                    var value = form.getFieldValue('subscribeWay');
	                    _global.Global.mark({
	                        aiForm: {
	                            aFTD: {
	                                exchangeModeValues: {
	                                    mode: value,
	                                    values: form.getFieldsValue()

	                                }
	                            }
	                        } });
	                    return true;
	                }
	            }, {
	                "type": "datalist",
	                "configStepApi": "wdydzySjkDyStep2",
	                "number": "2",
	                "name": "选择数据项",
	                "id": "wdydzySjkDyStep2",
	                "validate": function validate() {
	                    var form = _global.Global.getState().aiForm.wdydzySjkDyStep1.form;
	                    var selected = _global.Global.getState().dataList.wdydzySjkDyStep2.selectedRows;
	                    // let form = Global.getState().aiForm.wdydzySjkDyStep2.form;
	                    // Global.mark({
	                    //     aiFormTable:{
	                    //         aFTD:{
	                    //             values:form.getFieldsValue()
	                    //         }
	                    //     }
	                    // });
	                    var validate = selected && selected.length > 0;
	                    if (!validate) {
	                        _modal2["default"].warning({
	                            title: '提示',
	                            content: '请选择一个条目，然后点击”下一步“。'
	                        });
	                    }
	                    return validate;
	                }
	            }, {
	                "type": "datalist",
	                "configStepApi": "wdydzySjkDyStep3",
	                "number": "3",
	                "name": "选择目的数据源",
	                "id": "wdydzySjkDyStep3",
	                "validate": function validate() {
	                    var selected = _global.Global.getState().dataList.wdydzySjkDyStep3.selectedRows;
	                    var validate = selected && selected.length > 0;
	                    if (!validate) {
	                        _modal2["default"].warning({
	                            title: '提示',
	                            content: '请选择一个条目，然后点击”下一步“。'
	                        });
	                    }
	                    return validate;
	                }
	            }, {
	                "type": "datalist",
	                "configStepApi": "wdydzySjkDyStep4",
	                "number": "4",
	                "name": "选择目的数据表",
	                "id": "wdydzySjkDyStep4",
	                "validate": function validate() {
	                    var selected = _global.Global.getState().dataList.wdydzySjkDyStep4.selectedRows;
	                    var validate = selected && selected.length == 1;
	                    if (!validate) {
	                        _modal2["default"].warning({
	                            title: '提示',
	                            content: '请选择一个条目，然后点击”下一步“。'
	                        });
	                    }
	                    return validate;
	                }

	            }, {
	                "arg": {},
	                "type": "aiForm",
	                "configStepApi": "wdydzySjkDyStep5",
	                "number": "5",
	                "name": "映射字段",
	                "id": "wdydzySjkDyStep5",
	                "validate": function validate() {
	                    var allData = _global.Global.getState().aiForm.wdydzySjkDyStep5.apiData.data;
	                    var reason = _global.Global.getState().aiForm.aFTD.exchangeModeValues ? _global.Global.getState().aiForm.aFTD.exchangeModeValues.values.applyReason : '12343';
	                    var subDataJson = [];
	                    var state = _global.Global.getState();
	                    subDataJson.forEach(function (item) {
	                        item.destFiled = "";
	                        item.filedType = "";
	                    });

	                    var pk = {};
	                    allData.forEach(function (item) {
	                        if (item.columnName == 'PK') {
	                            pk.table = state.dataList.wdydzySjkDyStep4.tableBodyDataApi.data.content[_global.Global.getState().dataList.wdydzySjkDyStep4.selectedRows[0]].name;
	                            pk.columnName = item.columnCode;
	                            pk.pk = true;
	                            pk.dataItemName = 'pk';
	                            pk.dataItemCode = 'pk';
	                            pk.dataItemType = '12';
	                            pk.length = '36';
	                            return;
	                        }
	                    });
	                    var tableContents = state.aiFormTable.aFTD.config.dataSource;
	                    var flag = false;
	                    tableContents.forEach(function (items) {
	                        if (items.destFiled == pk.columnName) {
	                            flag = true;
	                            return;
	                        }
	                    });
	                    if (!flag) {
	                        _modal2["default"].warning({
	                            title: '提示',
	                            content: '目标表主键必需映射'
	                        });
	                        return;
	                    }
	                    var selectedRows = state.dataList.wdydzySjkDyStep2.selectedRows;
	                    var targetTableFieldJson = [];
	                    selectedRows.forEach(function (item) {
	                        subDataJson.push(state.dataList.wdydzySjkDyStep2.getDataListApi.data.table.body.dataSource[item]);
	                    });
	                    var pkColumnNames = [];
	                    subDataJson.forEach(function (item) {
	                        tableContents.forEach(function (item1) {
	                            if (item.ename == item1.ename && item.pk == true) {
	                                pkColumnNames.push(item1.destFiled);
	                            }
	                        });
	                    });
	                    pk.table = state.dataList.wdydzySjkDyStep4.tableBodyDataApi.data.content[_global.Global.getState().dataList.wdydzySjkDyStep4.selectedRows[0]].name;
	                    pk.columnName = pkColumnNames.join(',');
	                    pk.pk = true;
	                    pk.dataItemName = 'pk';
	                    pk.dataItemCode = 'pk';
	                    pk.dataItemType = '12';
	                    pk.length = '36';
	                    subDataJson.forEach(function (item, i) {
	                        tableContents.forEach(function (item1) {
	                            if (item.ename == item1.ename) {
	                                targetTableFieldJson.push({
	                                    'dataItemName': item.name,
	                                    'dataItemCode': item.code,
	                                    'dataItemType': item.type,
	                                    'length': item.length,
	                                    'targetTable': state.dataList.wdydzySjkDyStep4.tableBodyDataApi.data.content[state.dataList.wdydzySjkDyStep4.selectedRows[0]].name,
	                                    'columnName': item1.destFiled,
	                                    'showName': item1.destFiled,
	                                    'index': i,
	                                    'type': item.filedType,
	                                    'pk': false
	                                });
	                            }
	                        });
	                    });
	                    targetTableFieldJson.push(pk);
	                    var stepValues = {
	                        "resourceId": state.dataList.wdydzySjk.selectedRows[0],
	                        "type": 1,
	                        "targetDataSrcId": state.dataList.wdydzySjkDyStep3.selectedRows[0],
	                        "targetResourceType": 1,
	                        "model": 2,
	                        "targetTableName": state.dataList.wdydzySjkDyStep4.tableBodyDataApi.data.content[state.dataList.wdydzySjkDyStep4.selectedRows[0]].name,
	                        "subDataJson": subDataJson,
	                        "targetTableFieldJson": targetTableFieldJson,
	                        "applyReason": reason

	                    };
	                    var apiConfig = (0, _extends3["default"])({}, _interfaces.wdydzySaveAllData, { body: (0, _extends3["default"])({}, _interfaces.wdydzySaveAllData.body, stepValues) });
	                    return apiConfig;
	                }
	            }]
	        }
	    });
	}); /**
	     * Created by liy on 2016/12/16 0019.
	     */

/***/ }
]);