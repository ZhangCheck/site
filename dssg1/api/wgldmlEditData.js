webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(2752);

	var _modal = __webpack_require__(29);

	var _modal2 = _interopRequireDefault(_modal);

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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("wgldmlEditData")(function (args, callback) {
	    var states = _global.Global.getState();
	    var target = args.target;
	    var resClassDirId = states.dicts.treeSelect && states.dicts.treeSelect.resClassDirId && states.dicts.treeSelect.resClassDirId.data && states.dicts.treeSelect.resClassDirId.data.resClassDirId && states.dicts.treeSelect.resClassDirId.data.resClassDirId.length > 0 ? states.dicts.treeSelect.resClassDirId.data.resClassDirId[0].value : [];
	    var detailValue = states.dataList.wgldml.detailMsgDataApi ? states.dataList.wgldml.detailMsgDataApi.data : {};
	    if (args.type) {
	        detailValue = {};
	    }
	    var metadataValue = detailValue.dbJson && detailValue.dbJson != null && detailValue.dbJson != "" ? (0, _dataFormat.jsonStrToArray)(detailValue.dbJson) : [];
	    metadataValue.length > 0 && metadataValue.map(function (valueData, index) {
	        if (valueData.ename.substring(0, 4) == "res_") {
	            valueData.ename = valueData.ename.substring(4);
	        }
	    });
	    var title = args.apiData ? "编辑目录" : "新增目录";
	    var metadataCloumns = [{
	        title: "数据项名称",
	        dataIndex: 'name',
	        key: 'name',
	        "render": { "type": "input", props: { style: { width: "100px", left: "40%", marginTop: "18%" } } }
	    }, {
	        title: "数据项英文名称",
	        dataIndex: 'ename',
	        key: 'ename',
	        "render": { "type": "input", props: { style: { width: "100px", left: "40%", marginTop: "18%" } } }
	    }, {
	        title: "数据项编码",
	        dataIndex: 'code',
	        key: 'code',
	        "render": { "type": "input", props: { style: { width: "100px", left: "40%", marginTop: "18%" } } }
	    }, {
	        title: "数据项类型",
	        dataIndex: 'type',
	        key: 'type',
	        render: function render(text, _render, index) {
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
	    }, {
	        title: "数据项长度",
	        dataIndex: 'length',
	        key: 'length',
	        render: function render(text, _render2, index) {
	            if (_render2.length && _render2.length != "") {
	                return text;
	            } else {
	                return "--";
	            }
	        }
	    }, {
	        title: "是否必选",
	        dataIndex: 'mandatory',
	        key: 'mandatory',
	        "render": { "type": "select", props: { style: { width: "100px", left: "40%", marginTop: "18%" } }, options: [{ value: "0", key: "是" }, { value: "-1", key: "否" }] }
	    }, {
	        title: "数据项等级",
	        dataIndex: 'level',
	        key: 'level',
	        "render": { "type": "select", props: { style: { width: "100px", left: "40%", marginTop: "18%" } }, options: [{ value: "1", key: "一级" }, { value: "2", key: "二级" }, { value: "3", key: "三级" }] }
	    }, {
	        title: "数据元标示符",
	        dataIndex: 'dataCode',
	        key: 'dataCode',
	        render: function render(text, _render3, index) {
	            return _react2["default"].createElement(
	                'a',
	                { href: 'javascript:void(0)', onClick: function onClick() {
	                        var dataName = "";
	                        if (_render3.type == "12") {
	                            dataName = "文本";
	                        } else if (_render3.type == "3") {
	                            dataName = "数字";
	                        } else if (_render3.type == "91") {
	                            dataName = "日期";
	                        } else if (_render3.type == "93") {
	                            dataName = "时间";
	                        } else if (_render3.type == "4") {
	                            dataName = "整型";
	                        } else if (_render3.type == "2005") {
	                            dataName = "字符大型对象";
	                        } else if (_render3.type == "2004") {
	                            dataName = "二进制大型对象";
	                        }
	                        _modal2["default"].info({
	                            title: "数据元信息：",
	                            iconType: "metadata-message",
	                            okText: "确定",
	                            content: _react2["default"].createElement(
	                                'div',
	                                null,
	                                _react2["default"].createElement(
	                                    'div',
	                                    { style: { "float": "left", width: "50%" } },
	                                    _react2["default"].createElement(
	                                        'div',
	                                        { title: _render3.dataName, style: { width: "11em", cursor: "pointer", display: "inline-block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } },
	                                        "数据元名称：" + _render3.dataName
	                                    ),
	                                    '  ',
	                                    _react2["default"].createElement('br', null),
	                                    _react2["default"].createElement(
	                                        'div',
	                                        { title: _render3.dataName, style: { width: "11em", cursor: "pointer", display: "inline-block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } },
	                                        "数据元编码：" + _render3.dataCode
	                                    ),
	                                    ' ',
	                                    _react2["default"].createElement('br', null),
	                                    "数据类型：" + dataName,
	                                    '  ',
	                                    _react2["default"].createElement('br', null),
	                                    "是否字典项：",
	                                    _render3.isDictionary == '1' ? '否' : '是',
	                                    '  ',
	                                    _react2["default"].createElement('br', null),
	                                    _react2["default"].createElement(
	                                        'div',
	                                        { title: _render3.dataName, style: { width: "11em", cursor: "pointer", display: "inline-block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } },
	                                        "值域：" + _render3.valueScope
	                                    ),
	                                    '  ',
	                                    _react2["default"].createElement('br', null)
	                                ),
	                                _react2["default"].createElement(
	                                    'div',
	                                    { style: { "float": "right", width: "50%" } },
	                                    _react2["default"].createElement(
	                                        'div',
	                                        { title: _render3.dataName, style: { width: "11em", cursor: "pointer", display: "inline-block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } },
	                                        "数据元英文名称：" + _render3.dataEname,
	                                        ' '
	                                    ),
	                                    _react2["default"].createElement('br', null),
	                                    "分类：" + _render3.classifyName,
	                                    ' ',
	                                    _react2["default"].createElement('br', null),
	                                    _react2["default"].createElement(
	                                        'span',
	                                        { style: { display: _render3.length ? '' : 'none' } },
	                                        "数据长度：" + _render3.length,
	                                        _react2["default"].createElement('br', null)
	                                    ),
	                                    _react2["default"].createElement(
	                                        'span',
	                                        { style: { display: _render3.isDictionary == '1' ? 'none' : '' } },
	                                        "系统字典：" + _render3.dictionaryName,
	                                        ' ',
	                                        _react2["default"].createElement('br', null)
	                                    ),
	                                    _react2["default"].createElement(
	                                        'div',
	                                        { title: _render3.dataName, style: { width: "11em", cursor: "pointer", display: "inline-block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } },
	                                        "提交单位：" + _render3.submitCompany
	                                    ),
	                                    '  ',
	                                    _react2["default"].createElement('br', null)
	                                )
	                            )
	                        });
	                    } },
	                text
	            );
	        }
	    }, {
	        "title": "操作",
	        "dataIndex": "operation",
	        "key": "operation",
	        "render": [{ "type": "up", "icon": "arrow-up", props: { style: { fontSize: 16, color: "#21b597" } } }, { "type": "down", "icon": "arrow-down", props: { style: { fontSize: 16, color: "#21b597" } } }, { "type": "delete", "icon": "close-square", props: { style: { fontSize: 16, color: "#21b597" } } }, { "type": function type(that, index) {
	                return _react2["default"].createElement(_MainKeyIcon2["default"], { id: 'wgldml', target: that, index: index });
	            } }]
	    }];

	    callback({
	        "success": true,
	        "data": [{
	            "title": title,
	            "column": 2,
	            //"showTitle":true,
	            "data": [{ "type": "input", "name": "资源名称", "field": "resName", "placeholder": "汉字、数字、字母或下划线", "defaultValue": detailValue.resName ? detailValue.resName : "", "validate": [{
	                    "required": true, "message": '不能为空!'
	                }, {
	                    validator: function validator(rule, value, callback) {
	                        if (value && value != "") {
	                            if (value.length > 255) {
	                                callback("长度不要超过256！");
	                            } else {
	                                callback();
	                            }
	                        } else {
	                            callback();
	                        }
	                    }
	                }] }, { "type": "input", "name": "资源英文名称", "field": "resEname", "defaultValue": detailValue.resEname ? detailValue.resEname : "", "validate": [{
	                    "required": true, "message": '不能为空！'
	                }, {
	                    validator: function validator(rule, value, callback) {
	                        if (!/^[A-Za-z][\w]+$/.test(value)) {
	                            callback('只能由数字、字母、下划线组成,并以字母开头!');
	                        } else if (value.length > 30) {
	                            callback('请限制输入在30以内！');
	                        } else {
	                            callback();
	                        }
	                    }
	                }] }, { "type": "input", "name": "目录编码", "field": "resCode", "placeholder": "数字、字母或下划线", "defaultValue": detailValue.resCode ? detailValue.resCode : "", "validate": [{
	                    "required": true, "message": '不能为空!'
	                }, {
	                    validator: function validator(rule, value, callback) {
	                        if (value && value != "" && !/^[\w-]+$/.test(value)) {
	                            callback('支持英文,数字,下划线，短横线！');
	                        } else {
	                            callback();
	                        }
	                    }
	                }] }, { "type": "select", "name": "资源等级", "field": "resLevel", "options": [{ "value": "1", "key": "一级" }, { "value": "2", "key": "二级" }, { "value": "3", "key": "三级" }], "defaultValue": detailValue.resLevel ? detailValue.resLevel : "1", "validate": [{
	                    "required": true, "message": '不能为空!'
	                }] }, { "type": "treeSelect", "name": "国家主题分类", "field": "themeType", dictId: "themeType", dictApi: { apiName: 'getCenterDicts', body: { name: "themeType", type: 1 } }, "defaultValue": detailValue.themeType ? detailValue.themeType : states.dicts.treeSelect && states.dicts.treeSelect.themeType && states.dicts.treeSelect.themeType.data && states.dicts.treeSelect.themeType.data.themeType.length > 0 ? states.dicts.treeSelect.themeType.data.themeType[0].value : "", "validate": [{ "required": true, "message": '不能为空!' }] }, { "type": "treeSelect", "name": "部门主题分类", "field": "departmentType", dictId: "departmentType", dictApi: { apiName: 'getCenterDicts', body: { name: "departmentType", type: 2 } }, "defaultValue": detailValue.departmentType ? detailValue.departmentType : states.dicts.treeSelect && states.dicts.treeSelect.departmentType && states.dicts.treeSelect.departmentType.data && states.dicts.treeSelect.departmentType.data.departmentType.length > 0 ? states.dicts.treeSelect.departmentType.data.departmentType[0].value : "", "validate": [{
	                    "required": true, "message": '不能为空!'
	                }] }, { "type": "treeSelect", "name": "提供单位", "field": "companyId", dictId: "companyId", dictApi: { apiName: 'dwglSelect' }, "defaultValue": detailValue.companyId ? detailValue.companyId : states.dicts.treeSelect && states.dicts.treeSelect.companyId && states.dicts.treeSelect.companyId.data && states.dicts.treeSelect.companyId.data.length > 0 ? states.dicts.treeSelect.companyId.data[0].value : "", "validate": [{
	                    "required": true, "message": '不能为空!'
	                }] }, { "type": "select", "name": "目录分类", "field": "resClassDirId", dictId: "resClassDirId", dictApi: { apiName: 'getCenterDirByType', body: { name: "resClassDirId", type: 7 } }, "defaultValue": detailValue.resClassDirId ? detailValue.resClassDirId : resClassDirId, "validate": [{
	                    "required": true, "message": '不能为空!'
	                }] }, { "type": "input", "name": "备注", "field": "remark", "defaultValue": detailValue.remark ? detailValue.remark : "" },
	            //隐藏字段
	            { "type": "input", props: { style: { display: "none" } }, "field": "id", "defaultValue": detailValue.id ? detailValue.id : "" }]
	        }, {
	            "buttonConfigs": {
	                "buttons": [{ "type": "button", "value": "返回", mark: "wgldml", "field": "back", props: { btnType: "primary", "style": { "float": "right" } } }, { "type": "button", "value": "确定", mark: "wgldml", "field": "submit", props: { "style": { "float": "right" }, htmlType: "submit" } }]
	            },
	            "data": _react2["default"].createElement(_AiFormTable2["default"], { config: {
	                    "columns": metadataCloumns, //表格标头数据
	                    "dataSource": metadataValue, //表格数据
	                    "addTemplate": { //表格初始化新增行数据
	                        "name": "",
	                        "ename": "",
	                        "code": "",
	                        "type": "",
	                        "length": "",
	                        "mandatory": "",
	                        "dataCode": "",
	                        "level": ""
	                    }
	                }, id: 'wgldml', buttons: 'addModal', dataListId: 'metadataModal', form: target.props.form })

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