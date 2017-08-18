webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _getIterator2 = __webpack_require__(37);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _AiLabel = __webpack_require__(311);

	var _AiLabel2 = _interopRequireDefault(_AiLabel);

	var _AiFormTable = __webpack_require__(310);

	var _AiFormTable2 = _interopRequireDefault(_AiFormTable);

	var _aiFormTable = __webpack_require__(150);

	var _global = __webpack_require__(10);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _dataFormat = __webpack_require__(64);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("dyspSjkStep3")(function (args, callback) {
	    var target = args.target;
	    var states = _global.Global.getState();

	    var detailMsg = states.dataList.zydysplb && states.dataList.zydysplb.detailMsgDataApi && states.dataList.zydysplb.detailMsgDataApi.data ? states.dataList.zydysplb.detailMsgDataApi.data : {};

	    var subscribeDetailMsg = states.dataList.zydysplb && states.dataList.zydysplb.detailMsgDataApi && states.dataList.zydysplb.detailMsgDataApi.detailSubscribeDataApi && states.dataList.zydysplb.detailMsgDataApi.detailSubscribeDataApi.data ? states.dataList.zydysplb.detailMsgDataApi.detailSubscribeDataApi.data : {};

	    var dbPublishDataJson = subscribeDetailMsg.dbPublishDataJson;
	    var dbJson = (0, _dataFormat.jsonStrToArray)(detailMsg.dbJson);
	    var tableJson = states.aiForm.dyspSjkStep2 && states.aiForm.dyspSjkStep2.selectedDbJson ? states.aiForm.dyspSjkStep2.selectedDbJson : [];
	    var options = [];
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	        for (var _iterator = (0, _getIterator3["default"])(tableJson), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var d = _step.value;

	            var value = "";
	            var parse = JSON.parse(dbPublishDataJson);
	            var sourceColumn = parse.sourceColumns;
	            var _iteratorNormalCompletion5 = true;
	            var _didIteratorError5 = false;
	            var _iteratorError5 = undefined;

	            try {
	                for (var _iterator5 = (0, _getIterator3["default"])(sourceColumn), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	                    var t = _step5.value;

	                    if (t.dataItemName == d.name && d.type == "12") {
	                        value = t.columnName;
	                        options.push({ key: d.name, value: t.columnName });
	                    }
	                }
	            } catch (err) {
	                _didIteratorError5 = true;
	                _iteratorError5 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion5 && _iterator5["return"]) {
	                        _iterator5["return"]();
	                    }
	                } finally {
	                    if (_didIteratorError5) {
	                        throw _iteratorError5;
	                    }
	                }
	            }
	        }

	        // let options = dataBrush(tableJson,'name');


	        // let sjclcl = args.apiData && args.apiData.resSubscribeDTO.dbProcessStrategyJson!=null ? JSON.parse(args.apiData.resSubscribeDTO.dbProcessStrategyJson) :[];
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

	    var sjgl = []; //sjclcl.dataFilteing?sjclcl.dataFilteing:[];
	    var sjzh = []; //sjclcl.dataConversion?sjclcl.dataConversion:[];
	    var sjtm = []; //sjclcl.dataDesen?sjclcl.dataDesen:[];

	    //数据处理策略
	    var mgcglCloumn = [{
	        title: "资源名称",
	        dataIndex: 'resourceName1',
	        key: 'resourceName1'
	    }, {
	        title: "数据项名称",
	        dataIndex: 'columnName1',
	        key: 'columnName1',
	        "render": { "type": "select", "labelCol": 0, "wrapperCol": 24, props: { style: { width: 150 }, onChange: function onChange(value, text, record, index, that) {
	                    console.log('changed:', index, text, record);
	                    var state = _global.Global.getState();
	                    var rows = (0, _extends3["default"])({}, record);
	                    var columnType = "";
	                    var length = "";
	                    for (var key in options) {
	                        var _iteratorNormalCompletion2 = true;
	                        var _didIteratorError2 = false;
	                        var _iteratorError2 = undefined;

	                        try {
	                            for (var _iterator2 = (0, _getIterator3["default"])(dbJson), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                                var item = _step2.value;

	                                if (item.name == options[key].key && value == options[key].value) {
	                                    columnType = item.columnType;
	                                    length = item.length;
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
	                    };
	                    rows.columnType1 = columnType;
	                    rows["columnType1_field_" + index] = columnType;
	                    rows.columnlength1 = length;
	                    rows["columnlength1_field_" + index] = length;
	                    rows.key = Math.random();
	                    that.props.actions.updateRow(rows, "mgcgl", index);

	                    if (value.length > 20) {
	                        return value.substring(0, 21) + '....';
	                    }
	                } }, "options": options
	        }
	    }, {
	        title: "数据项类型",
	        dataIndex: 'columnType1',
	        key: 'columnType1'
	    }, {
	        title: "数据项长度",
	        dataIndex: 'columnlength1',
	        key: 'columnlength1'
	    }, {
	        title: "关键字过滤",
	        dataIndex: 'keys1',
	        key: 'keys1',
	        "render": { "type": "input", "labelCol": 0, "wrapperCol": 24, props: { style: { width: 150 } } }
	    }, {
	        "title": "操作",
	        "dataIndex": "operation",
	        "key": "operation",
	        "render": [{ "type": "delete", "icon": "close-square" }]
	    }];
	    var sjglCloumn = [{
	        title: "资源名称",
	        dataIndex: 'resourceName2',
	        key: 'resourceName2',
	        "render": { "type": "input", "labelCol": 0, "wrapperCol": 24, props: { style: { width: 150 } } }
	    }, {
	        title: "数据项名称",
	        dataIndex: 'columnName2',
	        key: 'columnName2',
	        "render": { "type": "select", "labelCol": 0, "wrapperCol": 24, props: { style: { width: 150 }, onChange: function onChange(value, text, record, index, that) {
	                    console.log('changed:', index, text, record);
	                    var state = _global.Global.getState();
	                    var rows = (0, _extends3["default"])({}, record);
	                    var columnType = "";
	                    var length = "";
	                    for (var key in options) {
	                        var _iteratorNormalCompletion3 = true;
	                        var _didIteratorError3 = false;
	                        var _iteratorError3 = undefined;

	                        try {
	                            for (var _iterator3 = (0, _getIterator3["default"])(dbJson), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                                var item = _step3.value;

	                                if (item.name == options[key].key && value == options[key].value) {
	                                    columnType = item.columnType;
	                                    length = item.length;
	                                    break;
	                                }
	                            }
	                        } catch (err) {
	                            _didIteratorError3 = true;
	                            _iteratorError3 = err;
	                        } finally {
	                            try {
	                                if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
	                                    _iterator3["return"]();
	                                }
	                            } finally {
	                                if (_didIteratorError3) {
	                                    throw _iteratorError3;
	                                }
	                            }
	                        }
	                    };
	                    rows.columnType2 = columnType;
	                    rows["columnType2_field_" + index] = columnType;
	                    rows.columnlength2 = length;
	                    rows["columnlength2_field_" + index] = length;
	                    rows.key = Math.random();
	                    that.props.actions.updateRow(rows, "sjgl", index);

	                    if (value.length > 20) {
	                        return value.substring(0, 21) + '....';
	                    }
	                } }, "options": options }
	    }, {
	        title: "数据项类型",
	        dataIndex: 'columnType2',
	        key: 'columnType2',
	        "render": { "type": "input", "labelCol": 0, "wrapperCol": 24, props: { style: { width: 150 } } }
	    }, {
	        title: "数据项长度",
	        dataIndex: 'columnlength2',
	        key: 'columnlength2',
	        "render": { "type": "input", "labelCol": 0, "wrapperCol": 24, props: { style: { width: 150 } } }
	    }, {
	        title: "比较符",
	        dataIndex: 'operators2',
	        key: 'operators2',
	        "render": { "type": "select", props: { style: { width: 150 } }, options: [{ key: "=", value: "=" }, { key: "<>", value: "<>" }, { key: ">", value: ">" }, { key: "<", value: "<" }, { key: ">=", value: ">=" }, { key: "<=", value: "<=" }] }
	    }, {
	        title: "比较值",
	        dataIndex: 'value2',
	        key: 'value2',
	        "render": { "type": "input", "labelCol": 0, "wrapperCol": 24, props: { style: { width: 150 } } }
	    }, {
	        "title": "操作",
	        "dataIndex": "operation",
	        "key": "operation",
	        "render": [{ "type": "delete", "icon": "close-square" }]
	    }];

	    var sjtmCloumn = [{
	        title: "资源名称",
	        dataIndex: 'resourceName3',
	        key: 'resourceName3',
	        "render": { "type": "input", "labelCol": 0, "wrapperCol": 24, props: { style: { width: 150 } } }
	    }, {
	        title: "数据项名称",
	        dataIndex: 'columnName3',
	        key: 'columnName3',
	        "render": { "type": "select", "labelCol": 0, "wrapperCol": 24, props: { style: { width: 150 }, onChange: function onChange(value, text, record, index, that) {
	                    console.log('changed:', index, text, record);
	                    var state = _global.Global.getState();
	                    var rows = (0, _extends3["default"])({}, record);
	                    var columnType = "";
	                    var length = "";
	                    for (var key in options) {
	                        var _iteratorNormalCompletion4 = true;
	                        var _didIteratorError4 = false;
	                        var _iteratorError4 = undefined;

	                        try {
	                            for (var _iterator4 = (0, _getIterator3["default"])(dbJson), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	                                var item = _step4.value;

	                                if (item.name == options[key].key && value == options[key].value) {
	                                    columnType = item.columnType;
	                                    length = item.length;
	                                    break;
	                                }
	                            }
	                        } catch (err) {
	                            _didIteratorError4 = true;
	                            _iteratorError4 = err;
	                        } finally {
	                            try {
	                                if (!_iteratorNormalCompletion4 && _iterator4["return"]) {
	                                    _iterator4["return"]();
	                                }
	                            } finally {
	                                if (_didIteratorError4) {
	                                    throw _iteratorError4;
	                                }
	                            }
	                        }
	                    };
	                    rows.columnType3 = columnType;
	                    rows["columnType3_field_" + index] = columnType;
	                    rows.columnlength3 = length;
	                    rows["columnlength3_field_" + index] = length;
	                    rows.key = Math.random();
	                    that.props.actions.updateRow(rows, "sjtm", index);

	                    if (value.length > 20) {
	                        return value.substring(0, 21) + '....';
	                    }
	                } }, "options": options }
	    }, {
	        title: "数据项类型",
	        dataIndex: 'columnType3',
	        key: 'columnType3',
	        "render": { "type": "input", "labelCol": 0, "wrapperCol": 24, props: { style: { width: 150 } } }
	    }, {
	        title: "数据项长度",
	        dataIndex: 'columnlength3',
	        key: 'columnlength3',
	        "render": { "type": "input", "labelCol": 0, "wrapperCol": 24, props: { style: { width: 150 } } }
	    }, {
	        title: "展示规则",
	        dataIndex: 'ruleCode3',
	        key: 'ruleCode3',
	        "render": { "type": "select", "labelCol": 0, "wrapperCol": 24, props: { style: { width: 150 } }, "options": [{ key: "隐藏后两位", value: "0" }, { key: "隐藏后三位", value: "1" }, { key: "隐藏后五位", value: "2" }] }
	    }, {
	        "title": "操作",
	        "dataIndex": "operation",
	        "key": "operation",
	        "render": [{ "type": "delete", "icon": "close-square" }]
	    }];

	    callback({
	        "success": true,
	        "data": [{
	            "title": "敏感词过滤",
	            "showTitle": false,
	            "data": _react2["default"].createElement(_AiFormTable2["default"], { config: {
	                    "columns": mgcglCloumn, //表格标头数据
	                    "dataSource": sjgl, //表格数据
	                    "addTemplate": { //表格初始化新增行数据
	                        "resourceName1": detailMsg.resName,
	                        "columnName1": "",
	                        "columnType1": "",
	                        "columnlength1": "",
	                        "keys1": ""
	                    }
	                }, id: 'mgcgl', title: '\u654F\u611F\u8BCD\u8FC7\u6EE4', buttons: 'add', form: target.props.form })
	        }, {
	            "title": "数据过滤",
	            "showTitle": false,
	            "data": _react2["default"].createElement(_AiFormTable2["default"], { config: {
	                    "columns": sjglCloumn, //表格标头数据
	                    "dataSource": sjzh, //表格数据
	                    "addTemplate": { //表格初始化新增行数据
	                        "resourceName2": detailMsg.resName,
	                        "columnName2": "",
	                        "columnType2": "",
	                        "columnlength2": "",
	                        "operators2": "",
	                        "value2": ""
	                    }
	                }, id: 'sjgl', title: '\u6570\u636E\u8FC7\u6EE4', buttons: 'add', form: target.props.form })
	        }, {
	            "title": "数据脱敏",
	            "showTitle": false,
	            "data": _react2["default"].createElement(_AiFormTable2["default"], { config: {
	                    "columns": sjtmCloumn, //表格标头数据
	                    "dataSource": sjtm, //表格数据
	                    "addTemplate": { //表格初始化新增行数据
	                        "resourceName3": detailMsg.resName,
	                        "columnName3": "",
	                        "columnType3": "",
	                        "columnlength3": "",
	                        "ruleCode3": ""

	                    }
	                }, id: 'sjtm', title: '\u6570\u636E\u8131\u654F', buttons: 'add', form: target.props.form })
	        }]
	    });
	});

/***/ }
]);