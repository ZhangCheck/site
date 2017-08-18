webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(2798);

	var _modal = __webpack_require__(29);

	var _modal2 = _interopRequireDefault(_modal);

	var _defineProperty2 = __webpack_require__(7);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(10);

	var _AiFormTable = __webpack_require__(310);

	var _AiFormTable2 = _interopRequireDefault(_AiFormTable);

	var _dataFormat = __webpack_require__(64);

	var _MainKeyIcon = __webpack_require__(1142);

	var _MainKeyIcon2 = _interopRequireDefault(_MainKeyIcon);

	var _WgldmlModal = __webpack_require__(465);

	var _WgldmlModal2 = _interopRequireDefault(_WgldmlModal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("zybmSjkBjsjxStep3")(function (args, callback) {
	    var target = args.target;

	    var states = _global.Global.getState();
	    var detailValue = states.aiForm.zybmSjkTxbmsqStep1 && states.aiForm.zybmSjkTxbmsqStep1.detailMsgDataApi && states.aiForm.zybmSjkTxbmsqStep1.detailMsgDataApi.data ? states.aiForm.zybmSjkTxbmsqStep1.detailMsgDataApi.data : {};
	    var metadataValue = detailValue.dbJson && detailValue.dbJson != null && detailValue.dbJson != "" ? (0, _dataFormat.jsonStrToArray)(detailValue.dbJson) : [{ //表格初始化新增行数据
	        "name": "",
	        "ename": "",
	        "code": "",
	        "type": "12",
	        "length": "",
	        "dataCode": "",
	        "isData": false,
	        "pk": false
	    }];
	    metadataValue.length > 0 && metadataValue.map(function (valueData, index) {
	        if (valueData.ename.substring(0, 4) == "res_") {
	            valueData.ename = valueData.ename.substring(4);
	        }
	    });
	    var typeOption = [{ key: "文本", value: "12" }, { key: "日期", value: "91" }, { key: "数字", value: "3" }, { key: "时间", value: "93" }, { key: "整型", value: "4" }];

	    var metadataCloumns = [{
	        title: "数据项名称",
	        dataIndex: 'name',
	        key: 'name',
	        "render": { "type": "input", "labelCol": 0, "wrapperCol": 24, props: { style: { width: "100%" }
	            } }
	    }, {
	        title: "数据项英文名称",
	        dataIndex: 'ename',
	        key: 'ename',
	        "render": { "type": "input", "labelCol": 0, "wrapperCol": 24, props: {
	                style: { width: "100%" }
	            } }

	    }, {
	        title: "数据项编码",
	        dataIndex: 'code',
	        key: 'code',
	        "render": { "type": "input", "labelCol": 0, "wrapperCol": 24, props: { style: { width: "100%" }
	            } }
	    }, {
	        title: "数据项类型",
	        dataIndex: 'type',
	        key: 'type',
	        "render": function render(text, record, index) {
	            if (record.dataCode == "" || record.dataCode == "_custom_") {
	                return {
	                    "type": "select",
	                    options: typeOption,
	                    "labelCol": 0,
	                    "wrapperCol": 24,
	                    props: { style: { width: "100%" },
	                        onChange: function onChange(value, text, record, index, that) {
	                            var rows = (0, _extends3["default"])({}, record);
	                            if (value == "91" || value == "93") {
	                                rows.length = "--";
	                                rows["length_field_" + index] = "--";
	                            } else {
	                                rows.length = "";
	                                rows["length_field_" + index] = "";
	                            }
	                            rows.key = Math.random();
	                            that.props.actions.updateRow(rows, "zybmglStep3", index);
	                        } }

	                };
	            } else {
	                switch (text) {
	                    case "12":
	                        return "文本";
	                    case "91":
	                        return "日期";
	                    case "3":
	                        return "数字";
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
	        }
	    }, {
	        title: "数据项长度",
	        dataIndex: 'length',
	        key: 'length',
	        "render": function render(text, record, index) {
	            if ((record.dataCode == "" || record.dataCode == "_custom_") && record.type != "91" && record.type != "93") {
	                return { "type": "input", "labelCol": 0, "wrapperCol": 24, props: { style: { width: "100%" }
	                    } };
	            } else {
	                return record.length ? text : "--";
	            }
	        }
	    }, {
	        title: "数据元标示符",
	        dataIndex: 'dataCode',
	        key: 'dataCode',
	        "render": { "type": "select", options: [{ key: "选择数据元", value: "_chose_" }, { key: "默认填写", value: "_custom_" }], "labelCol": 0, "wrapperCol": 24, props: { style: { width: "100%" },
	                onChange: function onChange(value, text, record, index, that) {
	                    if (value == "_chose_") {
	                        var _states = _global.Global.getState();
	                        var id = "zybmglStep3";
	                        var dataListId = "metadataModal";
	                        var aiFormTableData = _states.aiFormTable && _states.aiFormTable[id] && _states.aiFormTable[id].config && _states.aiFormTable[id].config.dataSource ? _states.aiFormTable[id].config.dataSource : [];
	                        if (aiFormTableData.length > 0) {
	                            var codes = [];
	                            aiFormTableData.map(function (data, i) {
	                                codes.push(data.dataCode);
	                            });
	                            //Global.mark({dataList:{[dataListId]:{metaSelected:codes}}});
	                        }
	                        var dictParams = {
	                            show: true,
	                            title: "选择数据元",
	                            onCancel: function onCancel() {
	                                var rows = (0, _extends3["default"])({}, record);
	                                if (rows.isData) {
	                                    rows.dataCode = rows.daCode;
	                                    rows["dataCode_field_" + index] = rows.daCode;
	                                } else {
	                                    rows.dataCode = "";
	                                    rows["dataCode_field_" + index] = "";
	                                }

	                                rows.key = Math.random();
	                                that.props.actions.updateRow(rows, "zybmglStep3", index);
	                                _global.Global.mark({ aiFormTable: (0, _defineProperty3["default"])({}, id, { dialog: null }) });
	                                _global.Global.mark({ dataList: (0, _defineProperty3["default"])({}, dataListId, { selectedRows: null }) });
	                            },
	                            onOk: function onOk() {
	                                var state = _global.Global.getState();
	                                var selectIds = state.dataList[dataListId].selectedRows;
	                                if (!selectIds || selectIds.length > 1) {
	                                    _modal2["default"].warning({
	                                        title: "提示",
	                                        content: "请选择一条数据元！"
	                                    });
	                                } else {
	                                    _global.Global.mark({ aiFormTable: (0, _defineProperty3["default"])({}, id, { dialog: { loading: true } }) });
	                                    var detailInfo = {};
	                                    var tableData = state.dataList[dataListId].tableBodyDataApi.data;
	                                    var dataSource = [];
	                                    dataSource = tableData.content ? tableData.content : tableData ? tableData : [];
	                                    dataSource.length > 0 && dataSource.map(function (data, k) {
	                                        selectIds.map(function (selectId, j) {
	                                            var codes = [];
	                                            //let i = Global.getState().aiFormTable[id].config.dataSource.length;
	                                            if (data.code == selectId) {
	                                                detailInfo = (0, _extends3["default"])({}, data);
	                                                var aiFormTable = (0, _extends3["default"])({}, record);
	                                                if (aiFormTable.name == "") {
	                                                    aiFormTable.name = detailInfo.name;
	                                                }
	                                                if (aiFormTable.ename == "") {
	                                                    aiFormTable.ename = detailInfo.englishName;
	                                                }
	                                                if (aiFormTable.code == "") {
	                                                    aiFormTable.code = detailInfo.code;
	                                                }
	                                                aiFormTable.dataCode = detailInfo.code;
	                                                aiFormTable.daCode = detailInfo.code;
	                                                aiFormTable.length = detailInfo.dataLength;
	                                                aiFormTable.type = detailInfo.dataType;
	                                                aiFormTable.isData = true;
	                                                aiFormTable.pk = false;

	                                                for (var p in aiFormTable) {
	                                                    aiFormTable[p + '_field'] = p + "_field" + "_" + index;
	                                                    aiFormTable[aiFormTable[p + '_field']] = aiFormTable[p];
	                                                    aiFormTable.key = Math.random().toString();
	                                                }

	                                                that.props.actions.updateRow(aiFormTable, id, index);
	                                            }
	                                        });
	                                    });
	                                    _global.Global.mark({ aiFormTable: (0, _defineProperty3["default"])({}, id, {
	                                            dialog: null
	                                        })
	                                    });
	                                    _global.Global.mark({ dataList: (0, _defineProperty3["default"])({}, dataListId, { selectedRows: null }) });
	                                }
	                            },
	                            content: _react2["default"].createElement(_WgldmlModal2["default"], null)
	                        };
	                        _global.Global.mark({ aiFormTable: (0, _defineProperty3["default"])({}, id, { dialog: null }) });
	                        _global.Global.mark({ aiFormTable: (0, _defineProperty3["default"])({}, id, { dialog: dictParams }) });
	                    } else {
	                        var rows = (0, _extends3["default"])({}, record);
	                        rows.isData = false;
	                        rows["isData_field_" + index] = false;

	                        rows.key = Math.random();
	                        that.props.actions.updateRow(rows, "zybmglStep3", index);
	                    }
	                } } }
	    }, {
	        "title": "操作",
	        "dataIndex": "operation",
	        "key": "operation",
	        "render": [{ "type": "up", props: { style: { fontSize: 16, color: "#75c7ff" } } }, { "type": "down", props: { style: { fontSize: 16, color: "#75c7ff" } } }, { "type": "add", props: { style: { fontSize: 16, color: "#75c7ff" } } }, { "type": "delete", props: { style: { fontSize: 16, color: "#75c7ff" } } }, { "type": function type(that, index) {
	                return _react2["default"].createElement(_MainKeyIcon2["default"], { id: 'zybmglStep3', target: that, index: index });
	            } }]
	    }];

	    callback({
	        "success": true,
	        "data": [{
	            "data": _react2["default"].createElement(_AiFormTable2["default"], { config: {
	                    "columns": metadataCloumns, //表格标头数据
	                    "dataSource": metadataValue, //表格数据
	                    "addTemplate": { //表格初始化新增行数据
	                        "name": "",
	                        "ename": "",
	                        "code": "",
	                        "type": "12",
	                        "length": "",
	                        "dataCode": "",
	                        "isData": false,
	                        "pk": false
	                    }
	                }, id: 'zybmglStep3', dataListId: 'metadataModal', form: target.props.form })

	        }]
	    });
	});

/***/ },

/***/ 1142:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _css = __webpack_require__(44);

	var _icon = __webpack_require__(19);

	var _icon2 = _interopRequireDefault(_icon);

	var _defineProperty2 = __webpack_require__(7);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(6);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(5);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _component = __webpack_require__(11);

	var _component2 = _interopRequireDefault(_component);

	var _global = __webpack_require__(10);

	var _interfaces = __webpack_require__(35);

	var _demoType = __webpack_require__(146);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var rootState = 'aiFormTable'; //import styles from './Footer.less';

	var MainKeyIcon = function (_Component) {
	    (0, _inherits3["default"])(MainKeyIcon, _Component);

	    function MainKeyIcon(props) {
	        (0, _classCallCheck3["default"])(this, MainKeyIcon);
	        return (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));
	        /*Global.getState().aiFormTable[this.props.id].config.dataSource.forEach((items)=>{
	            //items.pkType = "tag-o";
	            //items.pk = false
	        })*/
	    }

	    MainKeyIcon.prototype.onClickIcon = function onClickIcon(index) {

	        var aiFormTables = _global.Global.getState().aiFormTable[this.props.id].config.dataSource;
	        var aiFormTable = aiFormTables[index];

	        if (aiFormTable && aiFormTable.pk == true) {
	            aiFormTable.pk = false;
	            //aiFormTable.pkType='tag-o';
	            _global.Global.mark({
	                aiFormTable: (0, _defineProperty3["default"])({}, this.props.id, {
	                    config: {
	                        dataSource: aiFormTables
	                    }
	                })
	            });
	        } else if (aiFormTable && (!aiFormTable.pk || aiFormTable.pk == false)) {
	            aiFormTable.pk = true;
	            // aiFormTable.pkType='tag';
	            //主键的level必为3级
	            aiFormTable.level = "3";
	            aiFormTable["level_field_" + index] = "3";
	            aiFormTable.key = Math.random();
	            _global.Global.mark({
	                aiFormTable: (0, _defineProperty3["default"])({}, this.props.id, {
	                    config: {
	                        dataSource: aiFormTables
	                    }
	                })
	            });
	        }
	    };

	    MainKeyIcon.prototype.render = function render() {
	        var state = this.props.state.config.dataSource[this.props.index];
	        return _react2["default"].createElement(_icon2["default"], { type: 'dssg-key', title: "主键", style: { fontSize: 16, color: state.pk == true ? "#f59505" : "#75c7ff" }, onClick: this.onClickIcon.bind(this.props.target, this.props.index) });
	    };

	    return MainKeyIcon;
	}(_react.Component);

	exports["default"] = (0, _component2["default"])(rootState, {}, function (state, props) {
	    return {};
	})(MainKeyIcon);
	module.exports = exports['default'];

/***/ }

});