webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _getIterator2 = __webpack_require__(37);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _css = __webpack_require__(2270);

	var _modal = __webpack_require__(29);

	var _modal2 = _interopRequireDefault(_modal);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _AiLabel = __webpack_require__(311);

	var _AiLabel2 = _interopRequireDefault(_AiLabel);

	var _AiFormTable = __webpack_require__(310);

	var _AiFormTable2 = _interopRequireDefault(_AiFormTable);

	var _aiFormTable = __webpack_require__(150);

	var _global = __webpack_require__(10);

	var _history = __webpack_require__(32);

	var _history2 = _interopRequireDefault(_history);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _dataFormat = __webpack_require__(64);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * args为页面传送的参数
	 */
	/* author by 田贵宾
	import './other.html';
	import React from 'react';
	import ReactDOM from 'react-dom'; */
	(0, _jsonp2["default"])("wdydzySjkDyStep5")(function (args, callback) {
	    var target = args.target;
	    var state = _global.Global.getState();
	    //各种提示，如”应该从前一步开始的提示“
	    var lastStepState = state.dataList.wdydzySjkDyStep4 && state.dataList.wdydzySjkDyStep3 && state.dataList.wdydzySjkDyStep2 && state.dataList.wdydzySjkDyStep1;
	    if (!lastStepState) {
	        _modal2["default"].warning({
	            title: '提示',
	            content: '页面刷新，请重新选择资源进行订阅',
	            onOk: function onOk() {
	                /* */
	                setTimeout(function () {
	                    _global.Global.mark({ aiForm: {
	                            wdydzySjkDyStep5: null
	                        } });
	                    _history2["default"].push('/datalistV1/wdydzySjk/list/0/10');
	                }, 500);
	            }
	        });
	        return;
	    }
	    var next = function next(action) {
	        var allData = action.data;
	        var subDataJson = [];
	        var filedName = [];
	        var filedName1 = [];
	        if (allData) {
	            allData.forEach(function (item) {
	                if (item.columnName != 'PK') {
	                    filedName.push({
	                        key: item.columnCode,
	                        value: item.columnCode
	                    });
	                }
	            });
	            allData.forEach(function (item) {
	                if (item.columnName != 'PK') {
	                    filedName1.push({
	                        key: item.columnCode,
	                        value: item.type
	                    });
	                }
	            });
	        } else {
	            console.log('warning: allData is null');
	        }
	        var selectedRows = _global.Global.getState().dataList.wdydzySjkDyStep2.selectedRows;
	        selectedRows.forEach(function (item) {
	            subDataJson.push(_global.Global.getState().dataList.wdydzySjkDyStep2.getDataListApi.data.table.body.dataSource[item]);
	        });
	        subDataJson.forEach(function (item) {
	            item.destFiled = "";
	            item.filedType = "";
	        });
	        /**
	         * title：表格标题
	         * dataIndex：表格字段名
	         * key：表格字段标识
	         *render：使用AiLable组件：返回单个标签，
	         * AiLabel组件目前仅使用与可编辑表格中
	         */
	        var columns = [{
	            "title": '数据项',
	            "dataIndex": 'name',
	            "key": 'name'
	        }, {
	            "title": '数据项类型',
	            "dataIndex": 'type',
	            "key": 'type'
	        }, {
	            "title": '长度',
	            "dataIndex": 'length',
	            "key": 'length'
	        }, {
	            "title": '目的字段',
	            "dataIndex": 'destFiled',
	            "key": 'destFiled',
	            "render": { "type": "select", options: filedName, props: { style: { width: 200 },
	                    onChange: function onChange(value, text, record, index, that) {
	                        console.log('changed:', index, text, record);
	                        var rows = (0, _extends3["default"])({}, record);
	                        var _iteratorNormalCompletion = true;
	                        var _didIteratorError = false;
	                        var _iteratorError = undefined;

	                        try {
	                            for (var _iterator = (0, _getIterator3["default"])(filedName), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                                var item = _step.value;

	                                var flag = false;
	                                if (value === item.key) {
	                                    var _iteratorNormalCompletion2 = true;
	                                    var _didIteratorError2 = false;
	                                    var _iteratorError2 = undefined;

	                                    try {
	                                        for (var _iterator2 = (0, _getIterator3["default"])(filedName1), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                                            var item1 = _step2.value;

	                                            if (item1.key == value) {
	                                                rows.filedType = item1.value;
	                                                that.props.actions.updateRow(rows, "aFTD", index);
	                                                flag = true;
	                                                break;
	                                            }
	                                        }
	                                    } catch (err) {
	                                        _didIteratorError2 = true;
	                                        _iteratorError2 = err;
	                                    } finally {
	                                        try {
	                                            if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
	                                                _iterator2["return"]();
	                                            }
	                                        } finally {
	                                            if (_didIteratorError2) {
	                                                throw _iteratorError2;
	                                            }
	                                        }
	                                    }
	                                }
	                                if (flag) break;
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
	                    }
	                } }
	        }, {
	            "title": '类型',
	            "dataIndex": 'filedType',
	            "key": 'filedType'
	        }];
	        callback({
	            "success": true,
	            "data": [{
	                "data": _react2["default"].createElement(_AiFormTable2["default"], { config: {
	                        "columns": columns, //表格标头数据
	                        "dataSource": subDataJson //表格数据
	                    }, id: 'aFTD', form: target.props.form })

	            }]
	        });
	    };
	    var id = _global.Global.getState().dataList.wdydzySjkDyStep4.selectedRows[0];
	    var tables = _global.Global.getState().dataList.wdydzySjkDyStep4.tableBodyDataApi.data.content;
	    var table = tables[id];
	    var tableName = table.name;
	    _global.Global.requestApi({
	        apiName: 'getWdydzySjkField',
	        body: {
	            datasourceId: _global.Global.getState().dataList.wdydzySjkDyStep3.selectedRows[0],
	            tableName: tableName
	        },
	        next: next
	    }, ['requestTableField', 'receieveTableField', 'failedTableField'], {
	        aiForm: {
	            wdydzySjkDyStep5: {
	                apiData: null
	            }
	        }
	    });
	});

/***/ }
]);