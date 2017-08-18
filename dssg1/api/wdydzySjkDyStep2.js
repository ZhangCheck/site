webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(2246);

	var _modal = __webpack_require__(29);

	var _modal2 = _interopRequireDefault(_modal);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(10);

	var _history = __webpack_require__(32);

	var _history2 = _interopRequireDefault(_history);

	var _StepContainerV = __webpack_require__(287);

	var _StepContainerV2 = _interopRequireDefault(_StepContainerV);

	var _dataFormat = __webpack_require__(64);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * Created by liy on 2016/12/20 0020.
	 */
	(0, _jsonp2["default"])("wdydzySjkDyStep2")(function (args, callback) {
	    //各种提示，如”应该从前一步开始的提示“
	    var lastStepState = _global.Global.getState().aiForm.wdydzySjkDyStep1 || _global.Global.getState().aiForm.wdydzySjkDyWQMOStep1;
	    if (!lastStepState) {
	        _modal2["default"].warning({
	            title: '提示',
	            content: '上一步或前几步没有完成，请重新选择正确的资源进行订阅',
	            onOk: function onOk() {
	                /* */
	                setTimeout(function () {
	                    _global.Global.mark({ dataList: {
	                            wdydzySjkDyStep2: null
	                        } });
	                    _history2["default"].push('/datalistV1/wdydzySjk/list/0/10');
	                }, 500);
	            }
	        });
	        return;
	    }

	    var dataSource = (0, _dataFormat.jsonStrToArray)(_global.Global.getState().dataList.wdydzySjkDyStep1.allMsg.data.dbJson);
	    // let dataSource = {
	    //     "data":{
	    //         "content":dataSource1
	    //     },
	    //     'totalElements':dataSource1.length,
	    //     'totalPages':5
	    // }
	    callback({
	        "success": true,
	        "data": {
	            "title": "",
	            "searchConfig": {
	                "data": [{
	                    "column": 6,
	                    "data": [{ "type": "input", "col": 7, "name": "数据项名称", "field": "name" }, { "name": "数据项类型", "col": 7, "type": "select", "field": "type", "options": ["文本", "日期", "整型", "数值"] }, { "type": "button", "value": "查询", "pageName": "search", "btnType": "primary", "htmlType": "submit" }, { "type": "button", "value": "重置", "pageName": "resert", "btnType": "primary", "htmlType": "resert" }]
	                }],
	                "body": { apiName: 'wdydzySjkDyStep2Search' }
	            },
	            "table": {
	                "primarykey": "id",
	                "clounms": [{
	                    "title": "数据项名称",
	                    "dataIndex": "name",
	                    "key": "name"
	                }, {
	                    "title": "数据项英文名称",
	                    "dataIndex": "ename",
	                    "key": "ename"
	                }, {
	                    "title": "数据项编码",
	                    "dataIndex": "code",
	                    "key": "code"
	                }, {
	                    "title": "数据项类型",
	                    "dataIndex": "type",
	                    "key": "type",
	                    render: function render(text, record, index) {
	                        switch (record.type) {
	                            case 3:
	                                return 'DECIMAL';
	                            case 12:
	                                return 'VARCHAR';
	                            case 91:
	                                return 'DATE';
	                            case 93:
	                                return 'TIMESTAMP';
	                            case 2004:
	                                return 'BLOB';
	                            case 2005:
	                                return 'CLOB';
	                            default:
	                                return 'VARCHAR';
	                        }
	                    }
	                }, {
	                    "title": "数据项长度",
	                    "dataIndex": "length",
	                    "key": "length"
	                }, {
	                    "title": "是否必选",
	                    "dataIndex": "mandatory",
	                    "key": "mandatory",
	                    render: function render(text, record, index) {
	                        switch (record.mandatory) {
	                            case '-1':
	                                return '否';
	                            case '0':
	                                return '是';
	                            default:
	                                return '无返回值';

	                        }
	                    }

	                }, {
	                    "title": "发布级别",
	                    "dataIndex": "index",
	                    "key": "index",
	                    render: function render(text, record, index) {
	                        switch (record.index) {
	                            case '1':
	                                return '一级';
	                            case '2':
	                                return '二级';
	                            case '3':
	                                return '三级';
	                            default:
	                                return '未知级别';
	                        }
	                    }
	                }],
	                //"body":{apiName:'wdydzySjkDyStep2TableData'}//暂定此接口
	                "body": { dataSource: dataSource //暂定此接口
	                } },
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