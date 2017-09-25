webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(61);

	var _table = __webpack_require__(60);

	var _table2 = _interopRequireDefault(_table);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _AiFormTable = __webpack_require__(310);

	var _AiFormTable2 = _interopRequireDefault(_AiFormTable);

	var _dataFormat = __webpack_require__(64);

	var _global = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("wgldmlDetailData")(function (args, callback) {
	    var states = _global.Global.getState();
	    var values = states.dataList.wgldml.detailMsgDataApi && states.dataList.wgldml.detailMsgDataApi.data ? states.dataList.wgldml.detailMsgDataApi.data : {};
	    var target = args.target;
	    var detailValue = (0, _dataFormat.getTableData)(values);
	    var metadataValue = values.dbJson != null && values.dbJson != "" ? (0, _dataFormat.jsonStrToArray)(values.dbJson) : [];
	    var themeName = (0, _dataFormat.gettreeSelectName)(states, "themeType", detailValue[0].themeType);
	    var departmentName = (0, _dataFormat.gettreeSelectName)(states, "departmentType", detailValue[0].departmentType);
	    var resClassDirName = (0, _dataFormat.gettreeSelectName)(states, "resClassDirId", values.resClassDirId);

	    var cloumnDetail = [{
	        title: "资源名称",
	        dataIndex: 'resName',
	        key: 'resName',
	        render: function render(text, record, index) {
	            return _react2["default"].createElement(
	                'div',
	                { title: text, style: { width: _global.Global.getState().framework.columnWidth, cursor: "pointer", display: "inline-block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } },
	                text
	            );
	        }
	    }, {
	        title: "资源英文名称",
	        dataIndex: 'resEname',
	        key: 'resEname'
	    }, {
	        title: "资源编码",
	        dataIndex: 'resCode',
	        key: 'resCode'
	    }, {
	        title: "目录分类",
	        dataIndex: 'resClassDirName',
	        key: 'resClassDirName',
	        render: function render() {
	            return resClassDirName;
	        }
	    }, {
	        title: "资源类型",
	        dataIndex: 'resType',
	        key: 'resType',
	        render: function render(text, _render, index) {
	            switch (text) {
	                case "1":
	                    return "数据库";
	                default:
	                    return "未知";
	            }
	        }
	    }, {
	        title: "国家主题分类",
	        dataIndex: 'themeName',
	        key: 'themeName',
	        render: function render(text, _render2, index) {
	            if (themeName && themeName != "") {
	                return themeName;
	            } else {
	                return text;
	            }
	        }
	    }, {
	        title: "部门主题分类",
	        dataIndex: 'departmentName',
	        key: 'departmentName',
	        render: function render(text, _render3, index) {
	            if (departmentName && departmentName != "") {
	                return departmentName;
	            } else {
	                return text;
	            }
	        }
	    }, {
	        title: "资源等级",
	        dataIndex: 'resLevel',
	        key: 'resLevel',
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
	        render: function render(text, _render5, index) {
	            switch (text) {
	                case "12":
	                    return "文本";
	                case "3":
	                    return "数字";
	                case "91":
	                    return "日期";
	                case "93":
	                    return "时间";
	                case "4":
	                    return "整型";
	                case "2005":
	                    return "字符大型对象";
	                case "2004":
	                    return "二进制大型对象";
	                default:
	                    return "文本";
	            }
	        }
	    }, {
	        title: "数据项长度",
	        dataIndex: 'length',
	        key: 'length',
	        render: function render(text, _render6, index) {
	            if (_render6.length && _render6.length != "") {
	                return text;
	            } else {
	                return "--";
	            }
	        }
	    }, {
	        title: "是否必选",
	        dataIndex: 'mandatory',
	        key: 'mandatory',
	        render: function render(text, _render7, index) {
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
	        render: function render(text, _render8, index) {
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
	        title: "数据元标识符",
	        dataIndex: 'dataCode',
	        key: 'dataCode'
	    }];
	    callback({
	        "success": true,
	        "data": [{
	            "title": "共享目录信息",
	            "showTitle": true,
	            "data": function data() {
	                return _react2["default"].createElement(
	                    'div',
	                    { className: "customizedTable" },
	                    _react2["default"].createElement(_table2["default"], { columns: cloumnDetail, dataSource: detailValue, bordered: true, pagination: false })
	                );
	            }
	        }, {
	            "title": "共享目录数据项",
	            "showTitle": true,
	            "buttonConfigs": {
	                "buttons": [{ "type": "button", "value": "返回", mark: "wgldml", "field": "back", props: { btnType: "primary", "style": { "float": "right" } } }]
	            },
	            "data": function data() {
	                return _react2["default"].createElement(
	                    'div',
	                    { className: "customizedTable" },
	                    _react2["default"].createElement(_table2["default"], { columns: metadataCloumns, dataSource: metadataValue, bordered: true, pagination: false })
	                );
	            }
	        }]
	    });
	});

/***/ }
]);