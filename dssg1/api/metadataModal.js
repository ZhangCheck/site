webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _global = __webpack_require__(10);

	var _dataFormat = __webpack_require__(64);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _history = __webpack_require__(32);

	var _history2 = _interopRequireDefault(_history);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/* import './other.html';
	 import React from 'react';
	 import ReactDOM from 'react-dom'; */
	(0, _jsonp2["default"])("metadataModal")(function (args, callback) {
	    var centreOrLocalApi = _global.Global.getState().framework.loginApi.data.loginUserProfileDTO.centerDssgEnable;
	    callback({
	        "success": true,
	        "data": {
	            "id": "metadataModal",
	            "title": "数据元管理",
	            "searchConfig": {
	                "data": [{
	                    "column": 6,
	                    "formItemRewiring": true,
	                    "data": [{ "type": "input", labelCol: 7, wrapperCol: 13, "col": 19, "name": "名称/编码/单位", "field": "nameOrCodeOrENameOrCompany" }, { "type": "button", "col": 2, "value": "查询", field: "button", "pageName": "search", "btnType": "primary", "htmlType": "submit" }]
	                }],
	                "body": function body() {
	                    return { apiName: centreOrLocalApi ? "metadataCenterDataByType" : "metadataDataByType", body: { classiyId: _global.Global.getState().dicts.selected ? _global.Global.getState().dicts.selected : "" } };
	                }
	            },
	            "table": {
	                "primarykey": "code",
	                "selectRowType": "checkbox",
	                "clounms": [{
	                    "title": "序号",
	                    "dataIndex": "",
	                    "key": "",
	                    "width": 50,
	                    "render": function render(text, recode, index) {
	                        var state = _global.Global.getState().dataList.metadataModal;
	                        return _react2["default"].createElement(
	                            'div',
	                            null,
	                            index + 1 + state.currentPage * state.pageSize
	                        );
	                    }
	                }, {
	                    "title": "数据元名称",
	                    "dataIndex": "name",
	                    "key": "name",
	                    render: function render(text, record, index) {
	                        return _react2["default"].createElement(
	                            'div',
	                            { title: text, style: { width: _global.Global.getState().framework.columnWidth, cursor: "pointer", display: "inline-block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } },
	                            text
	                        );
	                    }
	                }, {
	                    "title": "数据元英文名称",
	                    "dataIndex": "englishName",
	                    "key": "englishName",
	                    render: function render(text, record, index) {
	                        return _react2["default"].createElement(
	                            'div',
	                            { title: text, style: { width: _global.Global.getState().framework.columnWidth, cursor: "pointer", display: "inline-block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } },
	                            text
	                        );
	                    }
	                }, {
	                    "title": "数据元编码",
	                    "dataIndex": "code",
	                    "key": "code"
	                }, {
	                    "title": "数据类型",
	                    "dataIndex": "dataType",
	                    "key": "dataType",
	                    "render": function render(text, record, index) {
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
	                        }
	                    }
	                }, {
	                    "title": "数据长度",
	                    "dataIndex": "dataLength",
	                    "key": "dataLength",
	                    render: function render(text, record, index) {
	                        if (record.dataType == 91 || record.dataType == 93) {
	                            return "--";
	                        } else {
	                            return record.dataLength;
	                        }
	                    }
	                }, {
	                    "title": "提交单位",
	                    "dataIndex": "submitCompany",
	                    "key": "submitCompany",
	                    render: function render(text, record, index) {
	                        return _react2["default"].createElement(
	                            'div',
	                            { title: text, style: { width: _global.Global.getState().framework.columnWidth, cursor: "pointer", display: "inline-block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } },
	                            text
	                        );
	                    }
	                }],
	                "body": { apiName: "metadataDataByType", body: { classiyId: _global.Global.getState().dicts.selected ? _global.Global.getState().dicts.selected : "" } }
	            },
	            "list": {
	                "view": null,
	                "listApi": null,
	                "saveApi": null
	            },
	            "add": {
	                "initData": {
	                    data: { apiName: "getMetadataAdd" }
	                },
	                "onAddSubmitApi": { "apiName": "metadataAddData" }
	            },
	            "edit": {
	                "initData": {
	                    data: { apiName: "getMetadataEdit" }
	                },
	                "onUpdateSubmitApi": { "apiName": "metadataEditData" }
	            },
	            "delete": {
	                "body": { apiName: 'metadataDelete' }
	            },
	            "detail": {
	                "initData": {
	                    data: { apiName: "getMetadataDetail" }
	                },
	                "body": { apiName: 'metadataDetail' }
	            },
	            "check": {
	                "view": null,
	                "checkApi": null
	            }
	        }
	    });
	});

/***/ }
]);