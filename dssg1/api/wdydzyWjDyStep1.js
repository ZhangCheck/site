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

	var _component = __webpack_require__(11);

	var _component2 = _interopRequireDefault(_component);

	var _global = __webpack_require__(10);

	var _history = __webpack_require__(32);

	var _history2 = _interopRequireDefault(_history);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var FormItem = _form2["default"].Item;
	(0, _jsonp2["default"])("wdydzyWjDyStep1")(function (args, callback) {
	    var state = _global.Global.getState();
	    var apiData = args.apiData;
	    var ysjBasicInf = apiData ? apiData.metadataDTO : {};
	    var fileDatas = apiData && apiData.fileJson ? JSON.parse(apiData.fileJson) : {};
	    var fileLevel = apiData ? apiData.resLevel : "";
	    var dispatchStrategy = apiData ? JSON.parse(apiData.dispatchStrategyJson) : {};
	    var processRecordDTO = apiData ? apiData.processRecordDTO : {};
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
	    //更新策略
	    var ddModelDatas = [];
	    if (dispatchStrategy.dispatchType == 1) {
	        ddModelDatas.push({ "dispatchType": "周期模式", "beginTime": dispatchStrategy.beginTime, "cycle": dispatchStrategy.cycle });
	    } else if (dispatchStrategy.dispatchType == 2) {
	        ddModelDatas.push({ "dispatchType": "定期模式", "cycle": "" });
	    } else {
	        ddModelDatas.push({ "dispatchType": "触发器模式", "cycle": "" });
	    }
	    var gxclCloumn_zq = [{
	        title: "调度模式",
	        dataIndex: 'dispatchType',
	        key: 'dispatchType'
	    }, {
	        title: "开始时间",
	        dataIndex: 'beginTime',
	        key: 'beginTime'
	    }, {
	        title: "间隔周期",
	        dataIndex: 'cycle',
	        key: 'cycle',
	        render: function render(text, record, index) {
	            switch (dispatchStrategy.dateTypeMin) {
	                case 1:
	                    return _react2["default"].createElement(
	                        'div',
	                        null,
	                        text,
	                        '\u5C0F\u65F6'
	                    );
	                case 2:
	                    return _react2["default"].createElement(
	                        'div',
	                        null,
	                        text,
	                        '\u5206\u949F'
	                    );
	                default:
	                    return _react2["default"].createElement(
	                        'div',
	                        null,
	                        text,
	                        '\u79D2'
	                    );
	            }
	        }
	    }];

	    var gxclCloumn_cfq = [{
	        title: "调度模式",
	        dataIndex: 'dispatchType',
	        key: 'dispatchType'
	    }];

	    var gxclCloumn_dq = [{
	        title: "调度模式",
	        dataIndex: 'dispatchType',
	        key: 'dispatchType'
	    }, {
	        title: "间隔周期",
	        dataIndex: 'cycle',
	        key: 'cycle',
	        render: function render(text, record, index) {
	            var children = [_react2["default"].createElement(
	                'span',
	                { style: { paddingLeft: "20px", paddingRight: "20px" } },
	                dispatchStrategy.day,
	                '\u5929'
	            ), _react2["default"].createElement(
	                'span',
	                { style: { paddingLeft: "20px", paddingRight: "20px" } },
	                dispatchStrategy.hour,
	                '\u65F6'
	            ), _react2["default"].createElement(
	                'span',
	                { style: { paddingLeft: "20px", paddingRight: "20px" } },
	                dispatchStrategy.second,
	                '\u5206'
	            )];
	            switch (dispatchStrategy.dateTypeMax) {
	                case 1:
	                    return _react2["default"].createElement(
	                        'div',
	                        null,
	                        _react2["default"].createElement(
	                            'span',
	                            { style: { paddingLeft: "20px", paddingRight: "20px" } },
	                            '\u6BCF\u6708'
	                        ),
	                        children
	                    );
	                case 2:
	                    return _react2["default"].createElement(
	                        'div',
	                        null,
	                        _react2["default"].createElement(
	                            'span',
	                            { style: { paddingLeft: "20px", paddingRight: "20px" } },
	                            '\u6BCF\u5468'
	                        ),
	                        children
	                    );
	                default:
	                    return _react2["default"].createElement(
	                        'div',
	                        null,
	                        _react2["default"].createElement(
	                            'span',
	                            { style: { paddingLeft: "20px", paddingRight: "20px" } },
	                            '\u6BCF\u65E5'
	                        ),
	                        children
	                    );
	            }
	        }
	    }];
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
	            "title": "更新策略",
	            "showTitle": true,
	            "titleIcon": "schedule-configuration",
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
	                            '\u8C03\u5EA6\u914D\u7F6E'
	                        )
	                    ),
	                    _react2["default"].createElement(_table2["default"], { columns: dispatchStrategy.dispatchType == 1 ? gxclCloumn_zq : dispatchStrategy.dispatchType == 2 ? gxclCloumn_dq : gxclCloumn_cfq, dataSource: ddModelDatas, bordered: true, pagination: false })
	                );
	            }
	        }, {
	            "title": "资源申请订阅信息",
	            "column": 2,
	            "showTitle": true,
	            "titleIcon": "res-pub-mes",
	            "data": [{ "name": "申请原因", "type": "input", "field": "applyReason" }, { "name": "申请人", "type": "text", "field": "applyUser", "defaultValue": state.framework.loginApi.data.loginUserProfileDTO && state.framework.loginApi.data.loginUserProfileDTO.loginName ? state.framework.loginApi.data.loginUserProfileDTO.loginName : "" }]
	        }]
	    });
	});

/***/ }
]);