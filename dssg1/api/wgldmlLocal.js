webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _getIterator2 = __webpack_require__(37);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _css = __webpack_require__(2752);

	var _modal = __webpack_require__(29);

	var _modal2 = _interopRequireDefault(_modal);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _global = __webpack_require__(10);

	var _dataFormat = __webpack_require__(64);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/* import './other.html';
	 import React from 'react';
	 import ReactDOM from 'react-dom'; */
	(0, _jsonp2["default"])("wgldmlLocalList")(function (args, callback) {
	    callback({
	        "success": true,
	        "data": {
	            "id": "wgldmlLocal",
	            "title": "我管理的目录",
	            "searchConfig": {
	                "data": [{
	                    "column": 6,
	                    "data": [{ "type": "input", "col": 7, "name": "目录名称/编码", "field": "resName" }, { "type": "treeSelect", "col": 8, "name": "国家主题分类", "field": "themeType", options: { value: "_all_", key: "全部" }, dictId: "themeType", dictApi: { apiName: 'getDictsByType', body: { name: "themeType", type: 1 }, nameSuffix: "_gjztfl" } }, { "type": "select", "col": 5, "name": "目录分类", "field": "resClassDirId", options: { value: "_all_", key: "全部" }, dictId: { name: "resClassDirId", type: 7 } }, { "type": "button", "col": 1, "value": "查询", field: "button", "pageName": "search", "btnType": "primary", "htmlType": "submit" }]
	                }],
	                "body": { apiName: 'wgldmlLocalData' }
	            },
	            "table": {
	                "primarykey": "id",
	                "checkbox": "1",
	                "clounms": [{
	                    "title": "目录名称",
	                    "dataIndex": "resName",
	                    "key": "resName",
	                    render: function render(text, record, index) {
	                        return _react2["default"].createElement(
	                            "div",
	                            { title: text, style: { width: _global.Global.getState().framework.columnWidth, cursor: "pointer", display: "inline-block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } },
	                            text
	                        );
	                    }
	                }, {
	                    "title": "目录分类",
	                    "dataIndex": "resClassdirName",
	                    "key": "resClassdirName"
	                }, {
	                    "title": "目录英文名称",
	                    "dataIndex": "resEname",
	                    "key": "resEname",
	                    render: function render(text, record, index) {
	                        return _react2["default"].createElement(
	                            "div",
	                            { title: text, style: { width: _global.Global.getState().framework.columnWidth, cursor: "pointer", display: "inline-block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } },
	                            text
	                        );
	                    }
	                }, {
	                    "title": "目录编码",
	                    "dataIndex": "resCode",
	                    "key": "resCode"
	                }, {
	                    "title": "国家主题分类",
	                    "dataIndex": "themeName",
	                    "key": "themeName"
	                }, {
	                    "title": "部门主题分类",
	                    "dataIndex": "departmentName",
	                    "key": "departmentName"
	                }, {
	                    "title": "资源等级",
	                    "dataIndex": "resLevel",
	                    "key": "resLevel",
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
	                    "title": "操作",
	                    "dataIndex": "operation",
	                    "key": "operation",
	                    "render": ["detail", "edit"]
	                }],
	                "body": { apiName: 'wgldmlLocalData' }
	            },
	            "list": {
	                "view": null,
	                "listApi": null,
	                "saveApi": null
	            },
	            "add": {
	                "initData": {
	                    data: { apiName: "getWgldmlLocalEdit" }
	                },
	                "onAddSubmitApi": { "apiName": "wgldmlAddLocalData", dataFormate: function dataFormate(values) {
	                        return (0, _dataFormat.dataHandle)(values, _global.Global);
	                    } }
	            },
	            "edit": {
	                "initData": {
	                    data: { apiName: "getWgldmlLocalEdit" }
	                },
	                "onUpdateSubmitApi": { "apiName": "wgldmlEditLocalData", dataFormate: function dataFormate(values) {
	                        var backValues = (0, _dataFormat.dataHandle)(values, _global.Global, "wgldmlLocal");
	                        var dbJson = backValues.dbJson != null && backValues.dbJson != "" ? (0, _dataFormat.jsonStrToArray)(backValues.dbJson) : [];
	                        if (dbJson.length == 0) {
	                            _modal2["default"].warning({
	                                title: "提示",
	                                content: "请添加数据项！"
	                            });
	                            return false;
	                        } else {
	                            var action = 0,
	                                pkData = [],
	                                meName = [],
	                                meEName = [],
	                                meCode = [];
	                            for (var i = 0; i < dbJson.length; i++) {
	                                var data = dbJson[i];
	                                if (data.pk == true) {
	                                    action = 1;
	                                    pkData.push((0, _extends3["default"])({}, data));
	                                }
	                                if (data.name == "" || data.code == "" || data.ename == "") {
	                                    action = 3;
	                                    break;
	                                }
	                                if (meEName.indexOf(data.ename) < 0) {
	                                    if (/^[r]{1}[e]{1}[s]{1}[_]{1}[a-zA-Z]{1}[a-zA-Z_0-9]{0,25}$/.test(data.ename)) {
	                                        meEName.push(data.ename);
	                                    } else {
	                                        action = 4;
	                                        break;
	                                    }
	                                } else {
	                                    action = 2;
	                                    break;
	                                }
	                                if (meName.indexOf(data.name) < 0) {
	                                    meName.push(data.name);
	                                } else {
	                                    action = 2;
	                                    break;
	                                }
	                                if (meCode.indexOf(data.code) < 0) {
	                                    meCode.push(data.code);
	                                } else {
	                                    action = 2;
	                                    break;
	                                }
	                            }
	                            if (action == 4) {
	                                _modal2["default"].warning({
	                                    title: "提示",
	                                    content: "数据项英文名称规则为26以内的首位字母的数字、字母、下划线组成！"
	                                });
	                                return false;
	                            } else if (action == 3) {
	                                _modal2["default"].warning({
	                                    title: "提示",
	                                    content: "数据项名称或编码不能为空！"
	                                });
	                                return false;
	                            } else if (action == 2) {
	                                _modal2["default"].warning({
	                                    title: "提示",
	                                    content: "数据项名称或编码重复，请修改！"
	                                });
	                                return false;
	                            } else if (action == 0) {
	                                _modal2["default"].warning({
	                                    title: "提示",
	                                    content: "请标注主键！"
	                                });
	                                return false;
	                            } else {
	                                var _iteratorNormalCompletion = true;
	                                var _didIteratorError = false;
	                                var _iteratorError = undefined;

	                                try {
	                                    for (var _iterator = (0, _getIterator3["default"])(pkData), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                                        var _data = _step.value;

	                                        if (_data.level != "3") {
	                                            action = 0;
	                                            break;
	                                        }
	                                    }
	                                } catch (err) {
	                                    _didIteratorError = true;
	                                    _iteratorError = err;
	                                } finally {
	                                    try {
	                                        if (!_iteratorNormalCompletion && _iterator["return"]) {
	                                            _iterator["return"]();
	                                        }
	                                    } finally {
	                                        if (_didIteratorError) {
	                                            throw _iteratorError;
	                                        }
	                                    }
	                                }

	                                if (action == 1) {
	                                    return backValues;
	                                } else {
	                                    _modal2["default"].warning({
	                                        title: "提示",
	                                        content: "主键列等级必为三级！"
	                                    });
	                                    return false;
	                                }
	                            }
	                        }
	                    }
	                }
	            },
	            "delete": {
	                "body": { apiName: 'wgldmlDeleteLocalInfo' }
	            },
	            "detail": {
	                "initData": {
	                    data: { apiName: "getWgldmlLocalDetail" }
	                },
	                "body": { apiName: 'wgldmlLocalDetail' }
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