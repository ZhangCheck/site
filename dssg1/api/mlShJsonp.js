webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(61);

	var _table = __webpack_require__(60);

	var _table2 = _interopRequireDefault(_table);

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _AiFormTable = __webpack_require__(310);

	var _AiFormTable2 = _interopRequireDefault(_AiFormTable);

	var _dataFormat = __webpack_require__(64);

	var _global = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("mlShJsonp")(function (args, callback) {
	    var states = _global.Global.getState();
	    var values = states.dataList.wgldmlSh.detailMsgDataApi && states.dataList.wgldmlSh.detailMsgDataApi.data ? states.dataList.wgldmlSh.detailMsgDataApi.data : {};
	    var target = args.target;
	    var detailValue = (0, _dataFormat.getTableData)(values);
	    var metadataValue = values.dbJson != null && values.dbJson != "" ? (0, _dataFormat.jsonStrToArray)(values.dbJson) : [];
	    var themeName = (0, _dataFormat.gettreeSelectName)(states, "themeType", detailValue[0].themeType);
	    var departmentName = (0, _dataFormat.gettreeSelectName)(states, "departmentType", detailValue[0].departmentType);
	    var zyfbxx = values ? values.processRecordDTO : {};

	    var cloumnDetail = [{
	        title: "目录名称",
	        dataIndex: 'resName',
	        key: 'resName'
	    }, {
	        title: "目录英文名称",
	        dataIndex: 'resEname',
	        key: 'resEname'
	    }, {
	        title: "目录编码",
	        dataIndex: 'resCode',
	        key: 'resCode'
	    }, {
	        title: "目录分类",
	        dataIndex: 'resCode',
	        key: 'resCode'
	    }, {
	        title: "资源类型",
	        dataIndex: 'resType',
	        key: 'resType',
	        render: function render(text, record, index) {
	            switch (text) {
	                case "1":
	                    return "一级";
	                case "2":
	                    return "二级";
	                case "3":
	                    return "三级";
	            }
	        }
	    }, {
	        title: "国家主题分类",
	        dataIndex: 'themeName',
	        key: 'themeName',
	        render: function render() {
	            return themeName;
	        }
	    }, {
	        title: "部门主题分类",
	        dataIndex: 'departmentName',
	        key: 'departmentName',
	        render: function render() {
	            return departmentName;
	        }
	    }, {
	        title: "资源等级",
	        dataIndex: 'resLevel',
	        key: 'resLevel',
	        render: function render(text, _render, index) {
	            switch (text) {
	                case "1":
	                    return "一级";
	                case "2":
	                    return "二级";
	                default:
	                    return "三级";
	            }
	        }
	    }];
	    var metadataCloumns = [{
	        title: "数据项名称",
	        dataIndex: 'name',
	        key: 'name'
	    }, {
	        title: "数据项英文名称",
	        dataIndex: 'ename',
	        key: 'ename'
	    }, {
	        title: "数据项编码",
	        dataIndex: 'code',
	        key: 'code'
	    }, {
	        title: "数据项类型",
	        dataIndex: 'type',
	        key: 'type',
	        render: function render(text, _render2, index) {
	            switch (text) {
	                case "12":
	                    return "VARCHAR";
	                case "3":
	                    return "DECIMAL";
	                case "91":
	                    return "DATE";
	                case "93":
	                    return "TIMESTAMP";
	                case "2005":
	                    return "CLOB";
	                case "2004":
	                    return "BLOB";
	                default:
	                    return "VARCHAR";
	            }
	        }
	    }, {
	        title: "数据项长度",
	        dataIndex: 'length',
	        key: 'length'
	    }, {
	        title: "是否必选",
	        dataIndex: 'mandatory',
	        key: 'mandatory',
	        render: function render(text, _render3, index) {
	            switch (text) {
	                case "0":
	                    return "是";
	                default:
	                    return "否";
	            }
	        }
	    }, {
	        title: "发布级别",
	        dataIndex: 'level',
	        key: 'level',
	        render: function render(text, _render4, index) {
	            switch (text) {
	                case "1":
	                    return "一级";
	                case "2":
	                    return "二级";
	                default:
	                    return "三级";
	            }
	        }
	    }, {
	        title: "数据元标识",
	        dataIndex: 'index',
	        key: 'index',
	        render: function render(text, _render5, index) {
	            switch (text) {
	                case "1":
	                    return "一级";
	                case "2":
	                    return "二级";
	                default:
	                    return "XXXX";
	            }
	        }
	    }];
	    var selectId = _global.Global.getState().dataList.wgldmlSh.selectedRows;
	    var value = {};
	    value = (0, _extends3["default"])({}, value, { type: "0", resourceId: selectId[0] });
	    callback({
	        "success": true,
	        "data": [{
	            "title": "共享目录信息",
	            "showTitle": true,
	            "data": function data() {
	                return _react2["default"].createElement(_table2["default"], { columns: cloumnDetail, dataSource: detailValue, bordered: true, pagination: false });
	            }
	        }, {
	            "title": "共享目录数据项",
	            "showTitle": true,
	            "buttonConfigs": {
	                "buttons": [{ "type": "button", "value": "返回", mark: "wgldml", "field": "back", props: { btnType: "primary", "style": { "float": "right" } } }]
	            },
	            "data": function data() {
	                return _react2["default"].createElement(_table2["default"], { columns: metadataCloumns, dataSource: metadataValue, bordered: true, pagination: false });
	            }
	        }, {
	            "title": "申请发布信息",
	            "column": 3,
	            "showTitle": true,
	            "titleIcon": "notification",
	            "data": [{ "type": "text", "name": "发布单位", "field": "applyReason1", "defaultValue": "" }, { "type": "text", "name": "发布人", "field": "applyUser", "defaultValue": "" }, { "type": "text", "name": "发布时间", "field": "applyTime", "defaultValue": "" }]
	        }, {
	            "title": "目录审核信息",
	            "column": 1, //  form显示列数，首先读取每个标签的设置column值，不存在才会读取总的column,如果不存在，默认展示一列
	            "labelCol": 8, // form标头name宽度
	            "wrapperCol": 16, //form显示框宽度
	            "showTitle": true, //是否展示栏目标题
	            "buttonConfigs": {
	                "onSubmitApi": { apiName: "fbshSyzySubmit", body: (0, _extends3["default"])({}, value) },
	                "getValue": { id: "aFBCD", index: 3 },
	                "buttons": [{ "type": "button", "value": "返回", mark: "wgldmlSh", "ignore": "ignore", "field": "back", props: { btnType: "primary", "style": { "float": "right" } } }, { "type": "button", "value": "确认", mark: "wgldmlSh", "ignore": "ignore", "field": "submit", props: { btnType: "primary", "style": { "float": "right" } } }]
	            },
	            "data": [{ "type": "select", "name": "审批结果", "field": "result", defaultValue: "0", "options": [{ "value": "0", "key": "通过" }, { "value": "-1", "key": "拒绝" }] }, { "type": "input", "inputType": "textarea", "name": "审批意见", "field": "reviewDesc", props: { rows: 4 } }]
	        }]
	    });
	});

/***/ }
]);