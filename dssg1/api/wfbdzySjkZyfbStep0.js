webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("wfbdzySjkZyfbStep0")(function (args, callback) {
	    var states = Global.getState();
	    callback({
	        "success": true,
	        "data": {
	            "title": "",
	            "searchConfig": {

	                "data": [{
	                    "column": 4,
	                    "data": [{ "type": "select", "name": "目录分类", "field": "resClassDirId", dictId: "resClassDirId", dictApi: { apiName: 'getDictsByType', body: { name: "resClassDirId", type: 7 } }, "defaultValue": states.dicts.treeSelect && states.dicts.treeSelect.resClassDirId && states.dicts.treeSelect.resClassDirId.data && states.dicts.treeSelect.resClassDirId.data.resClassDirId && states.dicts.treeSelect.resClassDirId.data.resClassDirId.length > 0 ? states.dicts.treeSelect.resClassDirId.data.resClassDirId[0].value : "", props: { onSelect: function onSelect(value, option) {
	                                Global.requestApi({ apiName: "wfbdzySjkZyfbStep0TableData", body: { resClassDirId: value }, next: function next(action) {
	                                        Global.mark({ dataList: { wfbdzySjkZyfbStep0: { tableBodyDataApi: null } } });
	                                        Global.mark({ dataList: { wfbdzySjkZyfbStep0: { tableBodyDataApi: action } } });
	                                    } }, {}, {});
	                            } } }]
	                }]
	                // "body":{apiName:'wfbdzySjkZyfbStep0Search'}
	            },
	            "table": {
	                "primarykey": "id",
	                "clounms": [{
	                    "title": "目录名称",
	                    "dataIndex": "resName",
	                    "key": "resName",
	                    "width": 160,
	                    render: function render(text, record, index) {
	                        return _react2["default"].createElement(
	                            'div',
	                            { title: text, style: { width: Global.getState().framework.columnWidth, cursor: "pointer", display: "inline-block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } },
	                            text
	                        );
	                    }
	                }, {
	                    "title": "目录分类",
	                    "dataIndex": "resClassDirName",
	                    "key": "resClassDirName",
	                    "width": 160
	                }, {
	                    "title": "目录英文名称",
	                    "dataIndex": "resEname",
	                    "key": "resEname",
	                    "width": 160,
	                    render: function render(text, record, index) {
	                        return _react2["default"].createElement(
	                            'div',
	                            { title: text, style: { width: Global.getState().framework.columnWidth, cursor: "pointer", display: "inline-block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } },
	                            text
	                        );
	                    }
	                }, {
	                    "title": "目录编码",
	                    "dataIndex": "resCode",
	                    "key": "resCode",
	                    "width": 160
	                }, {
	                    "title": "国家主题分类",
	                    "dataIndex": "themeName",
	                    "key": "themeName"
	                }, {
	                    "title": "部门主题分类",
	                    "dataIndex": "departmentName",
	                    "key": "departmentType"
	                }, {
	                    "title": "资源等级",
	                    "dataIndex": "resLevel",
	                    "key": "resLevel",
	                    render: function render(text, record, index) {
	                        switch (record.resLevel) {
	                            case '1':
	                                return '一级';
	                            case '2':
	                                return '二级';
	                            case '3':
	                                return '三级';
	                        }
	                    }
	                }],
	                "body": { apiName: 'wfbdzySjkZyfbStep0TableData', body: {} }
	            },
	            "list": {
	                "view": null,
	                "listApi": null,
	                "saveApi": null
	            },
	            "add": {},
	            "edit": {},
	            "delete": {},
	            "detail": {},
	            "check": {
	                "view": null,
	                "checkApi": null
	            }
	        }
	    });
	});

/***/ }
]);