webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(2501);

	var _modal = __webpack_require__(29);

	var _modal2 = _interopRequireDefault(_modal);

	var _getIterator2 = __webpack_require__(37);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _AiFormTable = __webpack_require__(310);

	var _AiFormTable2 = _interopRequireDefault(_AiFormTable);

	var _aiFormTable = __webpack_require__(150);

	var _global = __webpack_require__(10);

	var _history = __webpack_require__(32);

	var _history2 = _interopRequireDefault(_history);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _StepContainerV = __webpack_require__(287);

	var _StepContainerV2 = _interopRequireDefault(_StepContainerV);

	var _dataFormat = __webpack_require__(64);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("wfbdzySjkZyxgStep3")(function (args, callback) {

	    var state = _global.Global.getState();
	    //各种提示，如”应该从前一步开始的提示“
	    // let lastStepState = state.dataList.wfbdzySjkZyfbStep0 && state.dataList.wfbdzySjkZyfbStep1;
	    // if(!lastStepState){
	    //     StepContainer.gotoFirst('wfbdzySjkZyxgSteperDemo');
	    //     return;
	    // }
	    var target = args.target;
	    //let allData = args.dataSource;
	    var allData = state.dataList.getResourceForUpdate.data;
	    var states = _global.Global.getState();
	    var dataSource = allData.dbJson ? (0, _dataFormat.jsonStrToArray)(allData.dbJson) : [];
	    var sourceColumns1 = state.dataList.getResourceForUpdate && state.dataList.getResourceForUpdate.data && state.dataList.getResourceForUpdate.data.resourceItemDTO && state.dataList.getResourceForUpdate.data.resourceItemDTO ? JSON.parse(state.dataList.getResourceForUpdate.data.resourceItemDTO.dbPublishDataJson) : {};
	    var sourceColumns = sourceColumns1.sourceColumns ? sourceColumns1.sourceColumns : [];
	    var allOptions = allData && allData.resourceItemDTO && allData.resourceItemDTO.dbPublishDataJson ? allData.resourceItemDTO.dbPublishDataJson : [];
	    var optionFields = states.connectDatasource && states.connectDatasource.ConnectDatasourceUpdate.getContentByTableTile && states.connectDatasource.ConnectDatasourceUpdate.getContentByTableTile ? states.connectDatasource.ConnectDatasourceUpdate.getContentByTableTile.data : [];
	    dataSource.forEach(function (item) {
	        sourceColumns.forEach(function (item1) {
	            if (item.name == item1.dataItemName) {
	                item.columnName = item1.columnName;
	                item.dataType = item1.type;
	                item.dataSource = item1.table;
	            }
	        });
	    });
	    _global.Global.mark({
	        connectDatasource: {
	            connectDataSourceDemo: {
	                tableFileds: args.options
	            }
	        }
	    });
	    var options = [];
	    optionFields.forEach(function (items) {
	        items.tableData.forEach(function (item) {
	            if (item.columnName != 'PK') {
	                options.push({
	                    key: item.columnCode,
	                    value: item.columnCode + '.' + item.tableName
	                });
	            }
	        });
	    });

	    var columns = [{
	        "title": '数据项名称',
	        "dataIndex": 'name',
	        "key": "name"
	    }, {
	        "title": '数据项类型',
	        "dataIndex": 'type',
	        "key": "type",
	        render: function render(text, record, index) {
	            switch (record.type) {
	                case '12':
	                    return '文本';
	                case '3':
	                    return '数字';
	                case '91':
	                    return '日期';
	                case '93':
	                    return '时间';
	                case '4':
	                    return '整型';

	                case '2005':
	                    return '字符大型对象';
	                case '2004':
	                    return '二进制大型对象';
	                default:
	                    return '返回类型不匹配';
	            }
	        }
	    }, {
	        "title": '数据长度',
	        "dataIndex": 'length',
	        "key": "length",
	        render: function render(text, record, index) {
	            if (record.type == 91 || record.type == 93) {
	                return "--";
	            } else {
	                return record.length;
	            }
	        }
	    }, {
	        "title": '数据项等级',
	        "dataIndex": '，level',
	        "key": "level",
	        render: function render(text, record, index) {
	            switch (record.level) {
	                case '1':
	                    return '一级';
	                case '2':
	                    return '二级';
	                case '3':
	                    return '三级';
	            }
	        }
	    }, {

	        "title": '是否必选',
	        "dataIndex": 'mandatory',
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
	        "title": '字段名称',
	        "dataIndex": 'columnName',
	        "key": 'columnName',
	        "render": { "type": "select", options: options, props: { style: { width: 200 },
	                onChange: function onChange(value, text, record, index, that) {
	                    console.log('changed:', index, text, record);
	                    var rows = (0, _extends3["default"])({}, record);
	                    var _iteratorNormalCompletion = true;
	                    var _didIteratorError = false;
	                    var _iteratorError = undefined;

	                    try {
	                        for (var _iterator = (0, _getIterator3["default"])(optionFields), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                            var items = _step.value;
	                            var _iteratorNormalCompletion2 = true;
	                            var _didIteratorError2 = false;
	                            var _iteratorError2 = undefined;

	                            try {
	                                for (var _iterator2 = (0, _getIterator3["default"])(items.tableData), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                                    var item = _step2.value;

	                                    if (value == item.columnCode + '.' + item.tableName) {
	                                        if (record.type != item.valueType) {
	                                            var step2Table = state.dataList.wfbdzySjkZyxgStep2.tableBodyDataApi.data.content;
	                                            var step2SelectId = state.dataList.wfbdzySjkZyxgStep2.selectedRows[0];
	                                            var action = 0,
	                                                dataInfo = {};
	                                            var _iteratorNormalCompletion3 = true;
	                                            var _didIteratorError3 = false;
	                                            var _iteratorError3 = undefined;

	                                            try {
	                                                for (var _iterator3 = (0, _getIterator3["default"])(step2Table), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                                                    var data = _step3.value;

	                                                    if (data.id == step2SelectId) {
	                                                        if (data.dbType == "Oracle" && item.valueType == "3" && record.type == "4") {
	                                                            action = 1;
	                                                        }
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

	                                            if (action == 0) {
	                                                _modal2["default"].warning({
	                                                    title: "提示",
	                                                    content: "字段类型不匹配，请重新选择！"
	                                                });
	                                                rows.columnName = "";
	                                                rows["columnName_field_" + index] = "";
	                                                rows.key = Math.random();
	                                                rows.dataType = "";
	                                                rows.dataSource = "";
	                                                that.props.actions.updateRow(rows, "aFTD", index);
	                                                break;
	                                            }
	                                        } else if (parseInt(record.length) < parseInt(item.precision)) {
	                                            _modal2["default"].confirm({
	                                                title: '提示',
	                                                content: '字段长度大于数据项长度，数据长度可能超出限制，是否继续？',
	                                                onOk: function onOk() {},
	                                                onCancel: function onCancel() {
	                                                    rows.columnName = "";
	                                                    rows["columnName_field_" + index] = "";
	                                                    rows.key = Math.random();
	                                                    rows.dataType = "";
	                                                    rows.dataSource = "";
	                                                    that.props.actions.updateRow(rows, "aFTD", index);
	                                                }
	                                            });
	                                            /* Modal.warning({
	                                             title:"提示",
	                                             content:"字段长度大于数据项长度，请重新选择！"
	                                             });*/
	                                        }

	                                        console.log('tableFieldName=' + value);
	                                        rows.dataType = item.type;
	                                        rows.dataSource = item.tableName;
	                                        that.props.actions.updateRow(rows, "aFTD", index);
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

	                    if (value.length > 20) {
	                        return value.substring(0, 21) + '....';
	                    }
	                }, "validate": [{ "required": true }]
	            }
	        }
	    }, {
	        "title": '字段类型',
	        "dataIndex": 'dataType',
	        "key": "dataType"
	    }, {
	        "title": '数据来源',
	        "dataIndex": 'dataSource',
	        "key": "dataSource"
	    }, {
	        "title": "操作",
	        "dataIndex": "operation",
	        "key": "operation",
	        "render": [{ "type": "up", "icon": "arrow-up", props: { style: { fontSize: 19 } } }, { "type": "down", "icon": "arrow-down", props: { style: { fontSize: 19 } } }, { "type": "costom", "icon": "delete-green", props: {
	                style: { fontSize: 19 },
	                onClick: function onClick(text, record, index, that) {
	                    console.log('changed:', index, text, record);
	                    var rows = (0, _extends3["default"])({}, record);
	                    rows.columnName = "";
	                    rows["columnName_field_" + (record.index ? record.index : index)] = "";
	                    rows.key = Math.random();
	                    rows.dataType = "";
	                    rows.dataSource = "";
	                    that.props.actions.updateRow(rows, "aFTD", index);
	                } } }]
	    }];
	    callback({
	        "success": true,
	        "data": [{
	            "data": _react2["default"].createElement(_AiFormTable2["default"], { config: {
	                    "columns": columns,
	                    "dataSource": dataSource
	                }, id: 'aFTD', form: target.props.form })

	        }]
	    });
	});

/***/ }
]);