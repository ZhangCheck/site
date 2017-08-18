webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(54);

	var _form = __webpack_require__(53);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _dataFormat = __webpack_require__(64);

	var _global = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var FormItem = _form2["default"].Item;

	(0, _jsonp2["default"])("wfbdzyApiBdsjyFbylStep7")(function (args, callback) {

	    var states = _global.Global.getState();
	    var detailMsg = states.dataList.fbzyList && states.dataList.fbzyList.detailMsgDataApi && states.dataList.fbzyList.detailMsgDataApi.data ? states.dataList.fbzyList.detailMsgDataApi.data : {};
	    var stepFiveValue = (0, _dataFormat.getAiFormTableValue)(states, "aFTDStep5")[0];

	    var recordDTO = detailMsg.recordDTO ? detailMsg.recordDTO : {};
	    //提交数据封装
	    var dataSourceId = states.dataList.wfbdzyApiBdsjyXzsjyStep1.selectedRows[0];

	    var tables = states.connectDatasource.connectDataSourceApi.tableIds;
	    var inParameterJson = (0, _dataFormat.getAiFormTableValue)(states, "aFTDStep3");
	    var outParameterJson = (0, _dataFormat.getAiFormTableValue)(states, "aFTDStep4");
	    debugger;
	    var inParameterJsons = [],
	        outParameterJsons = [];
	    inParameterJson.length > 0 && inParameterJson.map(function (item, index) {
	        var table = "",
	            columnName = "";
	        if (item.sname.indexOf(".") < 0) {
	            table = tables[0];
	            columnName = item.sname;
	        } else {
	            table = item.sname.substring(0, item.sname.indexOf("."));
	            columnName = item.sname.split(".")[1];
	        }

	        inParameterJsons.push({
	            table: table,
	            name: columnName,
	            conditionExp: item.conditionExp,
	            mandatory: item.mandatory,
	            type: item.type,
	            value: item.value,
	            hiddenName: item.name
	        });
	    });

	    outParameterJson.length > 0 && outParameterJson.map(function (item, index) {

	        var table = "",
	            columnName = "";
	        if (item.sname.indexOf(".") < 0) {
	            table = tables[0];
	            columnName = item.sname;
	        } else {
	            table = item.sname.substring(0, item.sname.indexOf("."));
	            columnName = item.sname.split(".")[1];
	        }
	        outParameterJsons.push({
	            table: table,
	            name: columnName,
	            showName: item.name,
	            index: index,
	            type: item.type,
	            enable: true,
	            notNull: item.notNull
	        });
	    });

	    var tableReleation = states.connectDatasource.connectDataSourceApi.linkdatas ? states.connectDatasource.connectDataSourceApi.linkdatas : [];
	    var tableBack = [];
	    tableReleation.length > 0 && tableReleation.map(function (items, i) {
	        var obj = {};
	        obj.sourceTable = items.from.table;
	        obj.targetTable = items.to.table;
	        obj.releation = items.from.field + ',' + items.to.field;
	        obj.index = i;
	        obj.operation = '=';
	        obj.joinType = items.linkType == "1" ? "left" : items.linkType == "2" ? "right" : "inner";
	        tableBack.push(obj);
	    });
	    var values = { dataSourceId: dataSourceId, resourceId: detailMsg.id, resType: detailMsg.resType, apiSource: detailMsg.apiType, serviceType: stepFiveValue.serviceType,
	        functionName: stepFiveValue.functionName, dataTableView: "", tables: tables, tableReleation: tableBack, inParameterJson: inParameterJsons, outParameterJson: outParameterJsons };
	    _global.Global.mark({ aiForm: { wfbdzyApiBdsjyFbylStep7: { values: values } } });
	    var webserviceConfig = {
	        "success": true,
	        "data": [{
	            "title": "查看编目申请",
	            "showTitle": true,
	            "column": 2,
	            "labelCol": 1,
	            "childrenContentFormItemHeightLow": true,
	            "wrapperCol": 6,
	            "data": [{ "name": "编目单位", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "createComp", "defaultValue": detailMsg.companyName ? detailMsg.companyName : "" }, { "name": "编目节点", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "createEqu", "defaultValue": detailMsg.equipmentName ? detailMsg.equipmentName : "" }, { "name": "联系人", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "linkman", "defaultValue": detailMsg.linkman ? detailMsg.linkman : "" }, { "name": "联系电话", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "phone", "defaultValue": detailMsg.phone ? detailMsg.phone : "" }, { "name": "资源域", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "doMainName", "defaultValue": detailMsg.doMainName ? detailMsg.doMainName : "" }, { "name": "资源目录", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "catalogName", "defaultValue": detailMsg.catalogName ? detailMsg.catalogName : "" }, { "name": "资源类型", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "resType", "defaultValue": detailMsg.resType == 1 ? "数据库" : detailMsg.resType == 2 ? "文件" : "API" }, { "name": "提交审批时间", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "subAuditTime", "defaultValue": recordDTO.subAuditTime ? recordDTO.subAuditTime : "" }]
	        }, {
	            "title": "接口地址信息",
	            "showTitle": true,
	            "column": 2,
	            "labelCol": 1,
	            "childrenContentFormItemHeightLow": true,
	            "wrapperCol": 6,
	            "data": [{ "name": "接口地址", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "createComp", "defaultValue": stepFiveValue.url ? stepFiveValue.url : "" }, { "name": "服务类型", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "createEqu", "defaultValue": stepFiveValue.serviceType ? stepFiveValue.serviceType : "" }, { "name": "方法", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "linkman", "defaultValue": stepFiveValue.functionName ? stepFiveValue.functionName : "" }]
	        }]
	    };

	    var restConfig = {
	        "success": true,
	        "data": [{
	            "title": "查看编目申请",
	            "showTitle": true,
	            "column": 2,
	            "labelCol": 1,
	            "childrenContentFormItemHeightLow": true,
	            "wrapperCol": 6,
	            "data": [{ "name": "编目单位", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "createComp", "defaultValue": detailMsg.companyName ? detailMsg.companyName : "" }, { "name": "编目节点", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "createEqu", "defaultValue": detailMsg.equipmentName ? detailMsg.equipmentName : "" }, { "name": "联系人", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "linkman", "defaultValue": detailMsg.linkman ? detailMsg.linkman : "" }, { "name": "联系电话", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "phone", "defaultValue": detailMsg.phone ? detailMsg.phone : "" }, { "name": "资源域", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "doMainName", "defaultValue": detailMsg.doMainName ? detailMsg.doMainName : "" }, { "name": "资源目录", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "catalogName", "defaultValue": detailMsg.catalogName ? detailMsg.catalogName : "" }, { "name": "资源类型", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "resType", "defaultValue": detailMsg.resType == 1 ? "数据库" : detailMsg.resType == 2 ? "文件" : "API" }, { "name": "提交审批时间", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "subAuditTime", "defaultValue": recordDTO.subAuditTime ? recordDTO.subAuditTime : "" }]
	        }, {
	            "title": "接口地址信息",
	            "showTitle": true,
	            "column": 2,
	            "labelCol": 1,
	            "childrenContentFormItemHeightLow": true,
	            "wrapperCol": 6,
	            "data": [{ "name": "接口地址", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "createComp", "defaultValue": stepFiveValue.url ? stepFiveValue.url : "" }, { "name": "服务类型", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "createEqu", "defaultValue": stepFiveValue.serviceType ? stepFiveValue.serviceType : "" }]
	        }]
	    };

	    if (stepFiveValue.serviceType == "webservice") {
	        callback(webserviceConfig);
	    } else {
	        callback(restConfig);
	    }
	});

/***/ }
]);