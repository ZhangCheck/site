webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _getIterator2 = __webpack_require__(37);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _css = __webpack_require__(54);

	var _form = __webpack_require__(53);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _AiLabel = __webpack_require__(311);

	var _AiLabel2 = _interopRequireDefault(_AiLabel);

	var _AiFormTable = __webpack_require__(310);

	var _AiFormTable2 = _interopRequireDefault(_AiFormTable);

	var _aiFormTable = __webpack_require__(150);

	var _global = __webpack_require__(10);

	var _dataFormat = __webpack_require__(64);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _history = __webpack_require__(32);

	var _history2 = _interopRequireDefault(_history);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var FormItem = _form2["default"].Item;
	(0, _jsonp2["default"])("dyspApiStep4")(function (args, callback) {
	    var target = args.target;
	    var states = _global.Global.getState();

	    var detailMsg = states.dataList.zydysplb && states.dataList.zydysplb.detailMsgDataApi && states.dataList.zydysplb.detailMsgDataApi.data ? states.dataList.zydysplb.detailMsgDataApi.data : {};

	    var options = [];
	    var responseStruct = (0, _dataFormat.jsonStrToArray)(detailMsg.apiJson)[0].responseStruct;
	    responseStruct.length > 0 && responseStruct.map(function (item) {
	        options.push(item.name);
	    });

	    var resourceName1 = detailMsg.resName;
	    /**
	     * title：表格标题
	     * dataIndex：表格字段名
	     * key：表格字段标识
	     *render：使用AiLable组件：返回单个标签，
	     * AiLabel组件目前仅使用与可编辑表格中
	     */
	    var typesList = [{ key: "文本", value: "12" }, { key: "日期", value: "91" }, { key: "数字", value: "3" }, { key: "时间", value: "93" }, { key: "整型", value: "4" }];
	    var columns = [{
	        "title": '资源名称',
	        "dataIndex": 'resourceName1',
	        "key": 'resourceName1',
	        "render": { "type": "text", props: { style: { width: 200 } } }
	    }, {
	        "title": '参数名称',
	        "dataIndex": 'name1',
	        "key": 'name1',
	        "render": { "type": "select", options: options, props: { style: { width: 200 },
	                onChange: function onChange(value, text, record, index, that) {
	                    console.log('changed:', index, text, record);
	                    var state = _global.Global.getState();
	                    var rows = (0, _extends3["default"])({}, record);
	                    var type = "";
	                    var _iteratorNormalCompletion = true;
	                    var _didIteratorError = false;
	                    var _iteratorError = undefined;

	                    try {
	                        for (var _iterator = (0, _getIterator3["default"])(responseStruct), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                            var item = _step.value;

	                            if (item.name == value) {
	                                type = item.type;
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

	                    ;
	                    var dataName = "";

	                    if (type == "12") {
	                        dataName = "文本";
	                    } else if (type == "3") {
	                        dataName = "数字";
	                    } else if (type == "91") {
	                        dataName = "日期";
	                    } else if (type == "93") {
	                        dataName = "时间";
	                    } else if (type == "4") {
	                        dataName = "整型";
	                    } else if (type == "2005") {
	                        dataName = "字符大型对象";
	                    } else if (type == "2004") {
	                        dataName = "二进制大型对象";
	                    }

	                    rows.type1 = type;
	                    rows["type1_field_" + index] = dataName;
	                    rows.key = Math.random();
	                    that.props.actions.updateRow(rows, "dyspApiStep41", index);

	                    if (value.length > 20) {
	                        return value.substring(0, 21) + '....';
	                    }
	                }, "validate": [{ "required": true }]
	            }
	        }
	    }, {
	        "title": '参数类型',
	        "dataIndex": 'type1',
	        "key": 'type1',
	        "render": { "type": "text", props: { style: { width: 200 } } }
	    }, {
	        "title": '关键字过滤',
	        "dataIndex": 'keyword',
	        "key": 'keyword',
	        "render": { "type": "input", props: { style: { width: 200 } } }
	    }];

	    //数据过滤
	    var dataFiltering = [{
	        "title": '资源名称',
	        "dataIndex": 'resourceName2',
	        "key": 'resourceName2',
	        "render": { "type": "text", props: { style: { width: 200 } } }
	    }, {
	        "title": '参数名称',
	        "dataIndex": 'name2',
	        "key": 'name2',
	        "render": { "type": "select", options: options, props: { style: { width: 200 },
	                onChange: function onChange(value, text, record, index, that) {
	                    console.log('changed:', index, text, record);
	                    var state = _global.Global.getState();
	                    var rows = (0, _extends3["default"])({}, record);
	                    var type = "";
	                    var _iteratorNormalCompletion2 = true;
	                    var _didIteratorError2 = false;
	                    var _iteratorError2 = undefined;

	                    try {
	                        for (var _iterator2 = (0, _getIterator3["default"])(responseStruct), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                            var item = _step2.value;

	                            if (item.name == value) {
	                                type = item.type;
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

	                    ;

	                    var dataName = "";

	                    if (type == "12") {
	                        dataName = "文本";
	                    } else if (type == "3") {
	                        dataName = "数字";
	                    } else if (type == "91") {
	                        dataName = "日期";
	                    } else if (type == "93") {
	                        dataName = "时间";
	                    } else if (type == "4") {
	                        dataName = "整型";
	                    } else if (type == "2005") {
	                        dataName = "字符大型对象";
	                    } else if (type == "2004") {
	                        dataName = "二进制大型对象";
	                    }
	                    rows.type2 = type;
	                    rows["type2_field_" + index] = dataName;
	                    rows.key = Math.random();
	                    that.props.actions.updateRow(rows, "dyspApiStep42", index);

	                    if (value.length > 20) {
	                        return value.substring(0, 21) + '....';
	                    }
	                }, "validate": [{ "required": true }]
	            }
	        }
	    }, {
	        "title": '参数类型',
	        "dataIndex": 'type2',
	        "key": 'type2',
	        "render": { "type": "text", props: { style: { width: 200 } } }
	    }, {
	        "title": '比较符',
	        "dataIndex": 'conditionExp',
	        "key": 'conditionExp',
	        "render": { "type": "select", options: ["like", "=", ">", ">=", "<", "<=", "!="], props: { style: { width: 200 } } }
	    }, {
	        "title": '比较值',
	        "dataIndex": 'compareValue',
	        "key": 'compareValue',
	        "render": { "type": "input", props: { style: { width: 200 } } }
	    }];

	    //数据脱敏
	    var dataMasking = [{
	        "title": '资源名称',
	        "dataIndex": 'resourceName3',
	        "key": 'resourceName3',
	        "render": { "type": "text", props: { style: { width: 200 } } }
	    }, {
	        "title": '参数名称',
	        "dataIndex": 'name3',
	        "key": 'name3',
	        "render": { "type": "select", options: options, props: { style: { width: 200 },
	                onChange: function onChange(value, text, record, index, that) {
	                    console.log('changed:', index, text, record);
	                    var state = _global.Global.getState();
	                    var rows = (0, _extends3["default"])({}, record);
	                    var type = "";
	                    var _iteratorNormalCompletion3 = true;
	                    var _didIteratorError3 = false;
	                    var _iteratorError3 = undefined;

	                    try {
	                        for (var _iterator3 = (0, _getIterator3["default"])(responseStruct), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                            var item = _step3.value;

	                            if (item.name == value) {
	                                type = item.type;
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

	                    ;

	                    var dataName = "";

	                    if (type == "12") {
	                        dataName = "文本";
	                    } else if (type == "3") {
	                        dataName = "数字";
	                    } else if (type == "91") {
	                        dataName = "日期";
	                    } else if (type == "93") {
	                        dataName = "时间";
	                    } else if (type == "4") {
	                        dataName = "整型";
	                    } else if (type == "2005") {
	                        dataName = "字符大型对象";
	                    } else if (type == "2004") {
	                        dataName = "二进制大型对象";
	                    }
	                    rows.type3 = type;
	                    rows["type3_field_" + index] = dataName;
	                    rows.key = Math.random();
	                    that.props.actions.updateRow(rows, "dyspApiStep43", index);

	                    if (value.length > 20) {
	                        return value.substring(0, 21) + '....';
	                    }
	                }, "validate": [{ "required": true }]
	            }
	        }
	    }, {
	        "title": '参数类型',
	        "dataIndex": 'type3',
	        "key": 'type3',
	        "render": { "type": "text", props: { style: { width: 200 } } }
	    }, {
	        "title": '展示规则',
	        "dataIndex": 'displayRule',
	        "key": 'displayRule',
	        "render": { "type": "select", props: { style: { width: 200 } }, "options": [{ key: "隐藏后两位", value: "0" }, { key: "隐藏后三位", value: "1" }, { key: "隐藏后五位", value: "2" }] }
	    }];

	    callback({
	        "success": true,
	        "data": [{
	            title: "敏感词过滤",
	            showTitle: true,
	            "data": _react2["default"].createElement(_AiFormTable2["default"], { config: {
	                    "columns": columns, //表格标头数据
	                    "dataSource": [], //表格数据
	                    "addTemplate": { //表格初始化新增行数据
	                        "resourceName1": resourceName1,
	                        "type1": "",
	                        "name1": "",
	                        "keyValue": ""
	                    }
	                }, id: 'dyspApiStep41', buttons: 'add', form: target.props.form })

	        }, {
	            title: "数据过滤",
	            showTitle: true,
	            "data": _react2["default"].createElement(_AiFormTable2["default"], { config: {
	                    "columns": dataFiltering, //表格标头数据
	                    "dataSource": [], //表格数据
	                    "addTemplate": { //表格初始化新增行数据
	                        "type2": "",
	                        "name2": "",
	                        "conditionExp": "like",
	                        "compareValue": "",
	                        "resourceName2": resourceName1
	                    }
	                }, id: 'dyspApiStep42', buttons: 'add', form: target.props.form })
	        }, {
	            title: "数据脱敏",
	            showTitle: true,
	            "data": _react2["default"].createElement(_AiFormTable2["default"], { config: {
	                    "columns": dataMasking, //表格标头数据
	                    "dataSource": [], //表格数据
	                    "addTemplate": { //表格初始化新增行数据
	                        "type3": "",
	                        "name3": "",
	                        "displayRule": "",
	                        "resourceName3": resourceName1
	                    }
	                }, id: 'dyspApiStep43', buttons: 'add', form: target.props.form })
	        }]
	    });
	});

/***/ }
]);