webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(44);

	var _icon = __webpack_require__(19);

	var _icon2 = _interopRequireDefault(_icon);

	var _css2 = __webpack_require__(61);

	var _table = __webpack_require__(60);

	var _table2 = _interopRequireDefault(_table);

	var _css3 = __webpack_require__(54);

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

	var _dataFormat = __webpack_require__(64);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var FormItem = _form2["default"].Item;
	(0, _jsonp2["default"])("wdydzyWjDyStep3")(function (args, callback) {
	    var state = _global.Global.getState();
	    var apiData = args.apiData;
	    var ysjBasicInf = apiData ? apiData.metadataDTO : {};
	    var fileDatas = apiData ? JSON.parse(apiData.fileJson) : {};
	    var fileLevel = apiData ? apiData.resLevel : "";
	    var processRecordDTO = apiData ? apiData.processRecordDTO : {};
	    var step1ApplyReason = state.aiForm.wdydzyWjDyStep1 ? state.aiForm.wdydzyWjDyStep1.value : "";
	    var departmentTypeName = apiData ? apiData.departmentTypeName : "";
	    var themeTypeName = apiData ? apiData.themeTypeName : "";
	    //共享文件信息
	    var fileDatasArr = [];
	    if (Array.isArray(fileDatas)) {
	        fileDatasArr = fileDatas;
	    } else {
	        fileDatasArr.push(fileDatas);
	    }
	    var gxwjxxcolumns = [{
	        "title": "文件名",
	        "dataIndex": "name",
	        "key": "name"
	    }, {
	        "title": "文件类型",
	        "dataIndex": "type",
	        "key": "type"
	    }, {
	        "title": "文件大小",
	        "dataIndex": "size",
	        "key": "size"
	    }, {
	        "title": "最后更新时间",
	        "dataIndex": "updateDate",
	        "key": "updateDate"
	    }];
	    //文件共享等级
	    var fileLevelDatas = [];
	    if (fileLevel == 1) {
	        fileLevelDatas.push({ "level": "一级" });
	    } else if (fileLevel == 2) {
	        fileLevelDatas.push({ "level": "二级" });
	    } else {
	        fileLevelDatas.push({ "level": "三级" });
	    }
	    var wjgxdjcolumns = [{
	        "title": "文件等级",
	        "dataIndex": "level",
	        "key": "level",
	        "width": "33%"
	    }];
	    var date = new Date();
	    var year = date.getFullYear();
	    var month = date.getMonth() + 1;
	    var monthTrue = month < 10 ? "0" + month : month;
	    var day = date.getDate();
	    var dayTrue = day < 10 ? "0" + day : day;
	    var hours = date.getHours();
	    var hoursTrue = hours < 10 ? "0" + hours : hours;
	    var minutes = date.getMinutes();
	    var minutesTrue = minutes < 10 ? "0" + minutes : minutes;
	    var seconds = date.getSeconds();
	    var secondsTrue = seconds < 10 ? "0" + seconds : seconds;
	    var dateString = year + "-" + monthTrue + "-" + dayTrue + " " + hoursTrue + ":" + minutesTrue + ":" + secondsTrue;
	    callback({
	        "success": true,
	        "data": [{
	            "title": "元数据基本信息",
	            "column": 2,
	            "titleIcon": "metadata-message",
	            "showTitle": true,
	            "data": [{ "type": "text", "name": "标题", "field": "resName", "defaultValue": ysjBasicInf.restitle ? ysjBasicInf.restitle : "" }, { "type": "text", "name": "摘要", "field": "abstracts", "defaultValue": ysjBasicInf.abstracts ? ysjBasicInf.abstracts : "" }, { "type": "text", "name": "关键字", "field": "keyword", "defaultValue": ysjBasicInf.keyword ? ysjBasicInf.keyword : "" }, { "type": "text", "name": "国家主题分类", "field": "themeTypeName", "defaultValue": themeTypeName }, { "type": "text", "name": "部门主题分类", "field": "departmentTypeName", "defaultValue": departmentTypeName }, { "type": "text", "name": "订阅类型", "field": "resourceType", "defaultValue": "文件" }, { "type": "text", "name": "数据提供方单位", "field": "rporgname", "defaultValue": ysjBasicInf.rporgname ? ysjBasicInf.rporgname : "" }, { "type": "text", "name": "数据提供方地址", "field": "address", "defaultValue": ysjBasicInf.address ? ysjBasicInf.address : "" }]
	        }, {
	            "title": "共享文件信息",
	            "showTitle": true,
	            "titleIcon": "catalog",
	            "data": function data() {
	                return _react2["default"].createElement(
	                    'div',
	                    { className: "customizedTable" },
	                    _react2["default"].createElement(_table2["default"], { columns: gxwjxxcolumns, dataSource: fileDatasArr, bordered: true, pagination: false })
	                );
	            }
	        }, {
	            "title": "文件共享等级",
	            "showTitle": true,
	            "titleIcon": "file-text",
	            "data": function data() {
	                return _react2["default"].createElement(
	                    'div',
	                    { className: "customizedTable" },
	                    _react2["default"].createElement(
	                        'div',
	                        { className: "tableTitle" },
	                        _react2["default"].createElement(_icon2["default"], { type: 'appstore-o', className: "tableTitIcon" }),
	                        _react2["default"].createElement(
	                            'span',
	                            null,
	                            '\u6587\u4EF6\u5171\u4EAB\u7B49\u7EA7\u914D\u7F6E'
	                        )
	                    ),
	                    _react2["default"].createElement(_table2["default"], { columns: wjgxdjcolumns, dataSource: fileLevelDatas, bordered: true, pagination: false })
	                );
	            }
	        }, {
	            "title": "资源申请订阅信息",
	            "column": 2,
	            "showTitle": true,
	            "titleIcon": "res-pub-mes",
	            "data": [{ "name": "申请订阅原因", "type": "text", "field": "applyReason", "defaultValue": step1ApplyReason }, { "name": "申请人", "type": "text", "field": "applyUser", "defaultValue": state.framework.loginApi.data.loginUserProfileDTO && state.framework.loginApi.data.loginUserProfileDTO.loginName ? state.framework.loginApi.data.loginUserProfileDTO.loginName : "" }, { "name": "申请订阅时间", "type": "text", "field": "applyTime", "defaultValue": dateString }]
	        }]
	    });
	});

/***/ }
]);