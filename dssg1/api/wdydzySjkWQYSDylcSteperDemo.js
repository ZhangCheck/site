webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(2270);

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

	var _dataFormat = __webpack_require__(64);

	var _interfaces = __webpack_require__(35);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * Created by liy on 2016/12/16 0019.
	 */
	(0, _jsonp2["default"])("wdydzySjkWQYSDylcSteperDemo")(function (args, callback) {
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
	                "configStepApi": "wdydzySjkDyWQMOStep1",
	                "number": "1",
	                "name": "填写订阅申请",
	                "id": "wdydzySjkDyWQMOStep1",
	                "footer": [function () {}, "next", "cancel"],
	                "validate": function validate() {
	                    var form = _global.Global.getState().aiForm.wdydzySjkDyWQMOStep1.form;
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
	                    var subDataJson = [];
	                    var state = _global.Global.getState();
	                    var resources = state.dataList.wdydzySjk.tableBodyDataApi.data.content;
	                    var resourceId = state.dataList.wdydzySjk.selectedRows[0];
	                    var reason = state.aiForm.aFTD.exchangeModeValues ? _global.Global.getState().aiForm.aFTD.exchangeModeValues.values.applyReason : '12343';
	                    //let dbJson = state.dataList.wdydzySjkDyStep2.data.table.body.dataSource;
	                    var tableName1 = void 0;
	                    var pk = void 0;
	                    var pkColumnNames = [];
	                    resources.forEach(function (item) {
	                        if (item.id == resourceId) {
	                            tableName1 = item.resEname;
	                        }
	                    });
	                    var selectedRows = _global.Global.getState().dataList.wdydzySjkDyStep2.selectedRows;
	                    var targetTableFieldJson = [];
	                    selectedRows.forEach(function (item) {
	                        subDataJson.push(_global.Global.getState().dataList.wdydzySjkDyStep2.getDataListApi.data.table.body.dataSource[item]);
	                    });
	                    subDataJson.forEach(function (items) {
	                        if (items.pk) {
	                            pkColumnNames.push(items.ename);
	                        }
	                    });
	                    pk = {
	                        table: tableName1,
	                        columnName: pkColumnNames.join(','),
	                        pk: true,
	                        dataItemName: 'id',
	                        dataItemCode: 'id',
	                        dataItemType: 12,
	                        length: '36'
	                    };
	                    subDataJson.forEach(function (item, i) {
	                        targetTableFieldJson.push({
	                            'dataItemName': item.name,
	                            'dataItemEname': item.ename,
	                            'dataItemCode': item.code,
	                            'dataItemType': item.type,
	                            'length': item.length,
	                            //'targetTable':tableName1,
	                            'columnName': item.ename,
	                            'showName': item.name,
	                            'index': i,
	                            'type': item.filedType,
	                            'pk': false
	                        });
	                    });
	                    targetTableFieldJson.push(pk);
	                    var stepValues = {
	                        "resourceId": _global.Global.getState().dataList.wdydzySjk.selectedRows[0],
	                        "type": 1,
	                        "targetDataSrcId": _global.Global.getState().dataList.wdydzySjkDyStep3.selectedRows[0],
	                        "targetResourceType": 1,
	                        "model": 1,
	                        "targetTableName": tableName1,
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
	});

/***/ }
]);