webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(44);

	var _icon = __webpack_require__(19);

	var _icon2 = _interopRequireDefault(_icon);

	var _css2 = __webpack_require__(61);

	var _table = __webpack_require__(60);

	var _table2 = _interopRequireDefault(_table);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _dataFormat = __webpack_require__(64);

	var _global = __webpack_require__(10);

	var _BasicMessage = __webpack_require__(1021);

	var _BasicMessage2 = _interopRequireDefault(_BasicMessage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("dyspDetailData")(function (args, callback) {
	    var state = _global.Global.getState();
	    var detailMsg = state.dataList.dysp && state.dataList.dysp.detailMsgDataApi && state.dataList.dysp.detailMsgDataApi.data ? state.dataList.dysp.detailMsgDataApi.data : {};
	    var metadataDetail = detailMsg.metadataDTO ? detailMsg.metadataDTO : {};
	    metadataDetail.resType = detailMsg.resType;
	    metadataDetail.pictureUrl = detailMsg.pictureUrl;
	    var gxmuxx = [{
	        "resName": detailMsg.resName ? detailMsg.resName : "",
	        "resEname": detailMsg.resEname ? detailMsg.resEname : "",
	        "resCode": detailMsg.resCode ? detailMsg.resCode : "",
	        "resType": detailMsg.resTypeName ? detailMsg.resTypeName : "",
	        "themeType": detailMsg.themeTypeName ? detailMsg.themeTypeName : "",
	        "departmentType": detailMsg.departmentTypeName ? detailMsg.departmentTypeName : "",
	        "resLevel": detailMsg.resLevel ? detailMsg.resLevel : "",
	        "resClassDirName": detailMsg.resClassDirName ? detailMsg.resClassDirName : ""
	    }];
	    var gxmlsjx = (0, _dataFormat.jsonStrToArray)(detailMsg.dbJson);
	    //更新策略
	    var gxcl = (0, _dataFormat.jsonStrToArray)(detailMsg.dispatchStrategyJson);
	    var gxclDdpz = [];
	    gxclDdpz.push(detailMsg ? JSON.parse(detailMsg.dispatchStrategyJson) : ""); //jsonStrToArray(detailMsg.dispatchStrategyJson);
	    var zyyxq = [];
	    zyyxq.push({
	        "zyyxq": "",
	        "validBeginTime": detailMsg.validBeginTime,
	        "validEndTime": detailMsg.validEndTime
	    });
	    var subscriber = [];
	    if (detailMsg.sysEquipmentSubscribeDTO) {
	        subscriber.push(detailMsg.sysEquipmentSubscribeDTO);
	    }

	    var subContent = detailMsg && detailMsg.resSubscribeDTO.subDataJson ? (0, _dataFormat.jsonStrToArray)(detailMsg.resSubscribeDTO.subDataJson) : [];

	    var sjclcl = detailMsg && detailMsg.resSubscribeDTO.dbProcessStrategyJson && (0, _dataFormat.jsonStrToArray)(detailMsg.resSubscribeDTO.dbProcessStrategyJson).length > 0 ? (0, _dataFormat.jsonStrToArray)(detailMsg.resSubscribeDTO.dbProcessStrategyJson)[0] : [];
	    var sjgl = sjclcl.dataFilteing ? sjclcl.dataFilteing : [];
	    var sjzh = sjclcl.dataConversion ? sjclcl.dataConversion : [];
	    var sjtm = sjclcl.dataDesen ? sjclcl.dataDesen : [];

	    var zyfbxx = detailMsg.processRecordDTO ? detailMsg.processRecordDTO : {};

	    var zydyxx = detailMsg.resSubscribeDTO ? detailMsg.resSubscribeDTO : {};
	    //共享目录信息
	    var gxmlxxCloumn = [{
	        title: "目录名称",
	        dataIndex: 'resName',
	        key: 'resName',
	        render: function render(text, record, index) {
	            return _react2["default"].createElement(
	                'div',
	                { title: text, style: { width: _global.Global.getState().framework.columnWidth, cursor: "pointer", display: "inline-block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } },
	                text
	            );
	        }
	    }, {
	        title: "目录英文名称",
	        dataIndex: 'resEname',
	        key: 'resEname',
	        render: function render(text, record, index) {
	            return _react2["default"].createElement(
	                'div',
	                { title: text, style: { width: _global.Global.getState().framework.columnWidth, cursor: "pointer", display: "inline-block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } },
	                text
	            );
	        }
	    }, {
	        title: "目录编码",
	        dataIndex: 'resCode',
	        key: 'resCode'
	    }, {
	        title: "目录分类",
	        dataIndex: 'resClassDirName',
	        key: 'resClassDirName'
	    }, {
	        title: "资源类型",
	        dataIndex: 'resType',
	        key: 'resType',
	        render: function render(text, record, index) {
	            return '数据库';
	        }
	    }, {
	        title: "国家主题分类",
	        dataIndex: 'themeType',
	        key: 'themeType'
	    }, {
	        title: "部门主题分类",
	        dataIndex: 'departmentType',
	        key: 'departmentType'
	    }, {
	        title: "资源等级",
	        dataIndex: 'resLevel',
	        key: 'resLevel',
	        render: function render(text, _render, index) {
	            switch (text) {
	                case "1":
	                    return "一级";
	                case "2":
	                    return "二级";
	                case "3":
	                    return "三级";
	            }
	        }
	    }];
	    //共享目录数据项
	    var gxmlsjxCloumn = [{
	        title: "数据项名称",
	        dataIndex: 'name',
	        key: 'name',
	        render: function render(text, record, index) {
	            return _react2["default"].createElement(
	                'div',
	                { title: text, style: { width: _global.Global.getState().framework.columnWidth, cursor: "pointer", display: "inline-block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } },
	                text
	            );
	        }
	    }, {
	        title: "数据项英文名称",
	        dataIndex: 'ename',
	        key: 'ename',
	        render: function render(text, record, index) {
	            return _react2["default"].createElement(
	                'div',
	                { title: text, style: { width: _global.Global.getState().framework.columnWidth, cursor: "pointer", display: "inline-block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } },
	                text
	            );
	        }
	    }, {
	        title: "数据项编码",
	        dataIndex: 'code',
	        key: 'code'
	    }, {
	        title: "数据项类型",
	        dataIndex: 'type',
	        key: 'type',
	        render: function render(text, record, index) {
	            switch (record.type) {
	                case '12':
	                    return '文本';
	                case '3':
	                    return '数字';
	                case '91':
	                    return '日期';
	                case '4':
	                    return '整型';
	                case '93':
	                    return '时间';
	                case '2005':
	                    return '字符大型对象';
	                case '2004':
	                    return '二进制大型对象';
	                default:
	                    return '返回类型不匹配';
	            }
	        }
	    }, {
	        title: "数据项长度",
	        dataIndex: 'length',
	        key: 'length',
	        render: function render(text, record, index) {
	            if (record.type == 91 || record.type == 93) {
	                return "--";
	            } else {
	                return record.length;
	            }
	        }
	    }, {
	        title: "是否必选",
	        dataIndex: 'mandatory',
	        key: 'mandatory',
	        render: function render(text, _render2, index) {
	            switch (text) {
	                case "0":
	                    return "是";
	                case "-1":
	                    return "否";
	            }
	        }
	    }, {
	        title: "发布级别",
	        dataIndex: 'level',
	        key: 'level',
	        render: function render(text, _render3, index) {
	            switch (text) {
	                case "1":
	                    return "一级";
	                case "2":
	                    return "二级";
	                case "3":
	                    return "三级";
	            }
	        }
	    }];
	    //更新策略
	    var gxclCloumn_dq = [{
	        title: "调度模式",
	        dataIndex: 'dispatchType',
	        key: 'dispatchType',
	        render: function render(text, record, index) {
	            switch (record.dispatchType) {
	                case 1:
	                    return '周期模式';
	                case 2:
	                    return '定期模式';
	                case 3:
	                    return '触发器模式';
	            }
	        }
	    }, {
	        title: "间隔周期",
	        dataIndex: 'cycle',
	        key: 'cycle',
	        render: function render(text, record, index) {
	            var children = [_react2["default"].createElement(
	                'span',
	                { style: { paddingLeft: "20px", paddingRight: "20px" } },
	                gxclDdpz[0].day,
	                '\u5929'
	            ), _react2["default"].createElement(
	                'span',
	                { style: { paddingLeft: "20px", paddingRight: "20px" } },
	                gxclDdpz[0].hour,
	                '\u65F6'
	            ), _react2["default"].createElement(
	                'span',
	                { style: { paddingLeft: "20px", paddingRight: "20px" } },
	                gxclDdpz[0].second,
	                '\u5206'
	            )];
	            switch (gxclDdpz[0].dateTypeMax) {
	                case 1:
	                    return _react2["default"].createElement(
	                        'div',
	                        null,
	                        _react2["default"].createElement(
	                            'span',
	                            { style: { paddingLeft: "20px", paddingRight: "20px" } },
	                            '\u6BCF\u6708'
	                        ),
	                        children
	                    );
	                case 2:
	                    return _react2["default"].createElement(
	                        'div',
	                        null,
	                        _react2["default"].createElement(
	                            'span',
	                            { style: { paddingLeft: "20px", paddingRight: "20px" } },
	                            '\u6BCF\u5468'
	                        ),
	                        children
	                    );
	                default:
	                    return _react2["default"].createElement(
	                        'div',
	                        null,
	                        _react2["default"].createElement(
	                            'span',
	                            { style: { paddingLeft: "20px", paddingRight: "20px" } },
	                            '\u6BCF\u65E5'
	                        ),
	                        children
	                    );
	            }
	        }

	    }];

	    var gxclCloumn_cfq = [{
	        title: "调度模式",
	        dataIndex: 'dispatchType',
	        key: 'dispatchType',
	        render: function render(text, record, index) {
	            switch (record.dispatchType) {
	                case 1:
	                    return '周期模式';
	                case 2:
	                    return '定期模式';
	                case 3:
	                    return '触发器模式';
	            }
	        }
	    }];
	    var gxclCloumn_zq = [{
	        title: "调度模式",
	        dataIndex: 'dispatchType',
	        key: 'dispatchType',
	        render: function render(text, record, index) {
	            switch (record.dispatchType) {
	                case 1:
	                    return '周期模式';
	                case 2:
	                    return '定期模式';
	                case 3:
	                    return '触发器模式';
	            }
	        }
	    }, {
	        title: "开始时间",
	        dataIndex: 'beginTime',
	        key: 'beginTime'
	    }, {
	        title: "间隔周期",
	        dataIndex: 'cycle',
	        key: 'cycle',
	        render: function render(text, record, index) {
	            switch (gxclDdpz[0].dateTypeMin) {
	                case 1:
	                    return _react2["default"].createElement(
	                        'div',
	                        null,
	                        text,
	                        '\u5C0F\u65F6'
	                    );
	                case 2:
	                    return _react2["default"].createElement(
	                        'div',
	                        null,
	                        text,
	                        '\u5206\u949F'
	                    );
	                default:
	                    return _react2["default"].createElement(
	                        'div',
	                        null,
	                        text,
	                        '\u79D2'
	                    );
	            }
	        }

	    }];
	    //订阅用户
	    var dyyhCloumn = [{
	        "title": "订阅单位",
	        "dataIndex": "company",
	        "key": "company",
	        render: function render(text, record, index) {
	            return _react2["default"].createElement(
	                'div',
	                { title: text, style: { width: _global.Global.getState().framework.columnWidth, cursor: "pointer", display: "inline-block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } },
	                text
	            );
	        }
	    }, {
	        "title": "订阅设备",
	        "dataIndex": "name",
	        "key": "name"
	    }, {
	        title: "用户等级",
	        dataIndex: 'level',
	        key: 'level',
	        render: function render(text, _render4, index) {
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
	        title: "申请原因",
	        dataIndex: 'applayReason',
	        key: 'applayReason',
	        render: function render(text, record, index) {
	            return _react2["default"].createElement(
	                'div',
	                { title: text, style: { width: _global.Global.getState().framework.columnWidth, cursor: "pointer", display: "inline-block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } },
	                text
	            );
	        }
	    }, {
	        title: "订阅时间",
	        dataIndex: 'applayTime',
	        key: 'applayTime'
	    }, {
	        title: "联系电话",
	        dataIndex: 'telphone',
	        key: 'telphone'
	    }];
	    //数据处理策略
	    var sjglCloumn = [{
	        title: "数据集",
	        dataIndex: 'resourceName',
	        key: 'resourceName'
	    }, {
	        title: "字段名称",
	        dataIndex: 'columnName',
	        key: 'columnName',
	        render: function render(text, record, index) {
	            return _react2["default"].createElement(
	                'div',
	                { title: text, style: { width: _global.Global.getState().framework.columnWidth, cursor: "pointer", display: "inline-block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } },
	                text
	            );
	        }
	    }, {
	        title: "中文名称",
	        dataIndex: 'columnEnName',
	        key: 'columnEnName',
	        render: function render(text, record, index) {
	            return _react2["default"].createElement(
	                'div',
	                { title: text, style: { width: _global.Global.getState().framework.columnWidth, cursor: "pointer", display: "inline-block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } },
	                text
	            );
	        }
	    }, {
	        title: "比较符",
	        dataIndex: 'operators',
	        key: 'operators'
	    }, {
	        title: "比较值",
	        dataIndex: 'value',
	        key: 'value'
	    }];
	    var sjzhCloumn = [{
	        title: "数据集",
	        dataIndex: 'resourceName',
	        key: 'resourceName'
	    }, {
	        title: "字段名称",
	        dataIndex: 'columnName',
	        key: 'columnName',
	        render: function render(text, record, index) {
	            return _react2["default"].createElement(
	                'div',
	                { title: text, style: { width: _global.Global.getState().framework.columnWidth, cursor: "pointer", display: "inline-block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } },
	                text
	            );
	        }
	    }, {
	        title: "中文名称",
	        dataIndex: 'columnEnName',
	        key: 'columnEnName',
	        render: function render(text, record, index) {
	            return _react2["default"].createElement(
	                'div',
	                { title: text, style: { width: _global.Global.getState().framework.columnWidth, cursor: "pointer", display: "inline-block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } },
	                text
	            );
	        }
	    }, {
	        title: "内容",
	        dataIndex: 'content',
	        key: 'content'
	    }, {
	        title: "替换为",
	        dataIndex: 'value',
	        key: 'value'
	    }];

	    var sjtmCloumn = [{
	        title: "数据集",
	        dataIndex: 'resourceName',
	        key: 'resourceName'
	    }, {
	        title: "字段名称",
	        dataIndex: 'columnName',
	        key: 'columnName',
	        render: function render(text, record, index) {
	            return _react2["default"].createElement(
	                'div',
	                { title: text, style: { width: _global.Global.getState().framework.columnWidth, cursor: "pointer", display: "inline-block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } },
	                text
	            );
	        }
	    }, {
	        title: "中文名称",
	        dataIndex: 'columnEnName',
	        key: 'columnEnName',
	        render: function render(text, record, index) {
	            return _react2["default"].createElement(
	                'div',
	                { title: text, style: { width: _global.Global.getState().framework.columnWidth, cursor: "pointer", display: "inline-block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } },
	                text
	            );
	        }
	    }, {
	        title: "展示规则",
	        dataIndex: 'ruleCode',
	        key: 'ruleCode',
	        render: function render(text, _render5, index) {
	            switch (text) {
	                case "0":
	                    return "隐藏后两位";
	                case "1":
	                    return "隐藏后三位";
	                case "2":
	                    return "隐藏后五位";
	            }
	        }
	    }];

	    //资源有效期
	    var zyyxqCloumn = [{
	        title: "",
	        dataIndex: 'zyyxq',
	        key: 'zyyxq',
	        render: function render(text, record, index) {
	            return '资源有效期';
	        }
	    }, {
	        title: "资源开始时间",
	        dataIndex: 'validBeginTime',
	        key: 'validBeginTime'
	    }, {
	        title: "资源结束时间",
	        dataIndex: 'validEndTime',
	        key: 'validEndTime'
	    }];

	    callback({
	        "success": true,
	        "data": [{
	            "title": "元数据基本信息",
	            "column": 1,
	            "showTitle": true,
	            "titleIcon": "file-text",
	            "data": _react2["default"].createElement(_BasicMessage2["default"], { subId: 'dysp', showValues: metadataDetail, leftShow: 'true' })
	        }, {
	            "title": "共享目录信息",
	            "showTitle": true,
	            "titleIcon": "file-text",
	            "data": function data() {
	                return _react2["default"].createElement(
	                    'div',
	                    { className: "customizedTable" },
	                    _react2["default"].createElement(_table2["default"], { columns: gxmlxxCloumn, dataSource: gxmuxx, bordered: true, pagination: false })
	                );
	            }
	        }, {
	            "title": "共享目录数据项",
	            "showTitle": true,
	            "titleIcon": "file-text",
	            "data": function data() {
	                return _react2["default"].createElement(
	                    'div',
	                    { className: "customizedTable" },
	                    _react2["default"].createElement(_table2["default"], { columns: gxmlsjxCloumn, dataSource: gxmlsjx, bordered: true, pagination: false })
	                );
	            }
	        }, {
	            "title": "更新策略",
	            "showTitle": true,
	            "titleIcon": "copy",
	            "data": function data() {
	                return _react2["default"].createElement(
	                    'div',
	                    { className: "customizedTable" },
	                    _react2["default"].createElement(
	                        'div',
	                        { className: "tableTitle" },
	                        _react2["default"].createElement(_icon2["default"], { type: 'appstore-o', className: "tableTitIcon" }),
	                        _react2["default"].createElement(
	                            'span',
	                            null,
	                            '\u8C03\u5EA6\u914D\u7F6E'
	                        )
	                    ),
	                    _react2["default"].createElement(_table2["default"], { columns: gxclDdpz[0].dispatchType == '1' ? gxclCloumn_zq : gxclDdpz[0].dispatchType == '2' ? gxclCloumn_dq : gxclCloumn_cfq, dataSource: gxcl, bordered: true, pagination: false })
	                );
	            }
	        }, {
	            "title": "资源有效期",
	            "showTitle": true,
	            "titleIcon": "copy",
	            "data": function data() {
	                return _react2["default"].createElement(
	                    'div',
	                    { className: "customizedTable" },
	                    _react2["default"].createElement(_table2["default"], { pagination: false, columns: zyyxqCloumn, dataSource: zyyxq ? zyyxq : [], bordered: true })
	                );
	            }
	        }, {
	            "title": "订阅设备",
	            "showTitle": true,
	            "titleIcon": "user",
	            "data": function data() {
	                return _react2["default"].createElement(
	                    'div',
	                    { className: "customizedTable" },
	                    _react2["default"].createElement(_table2["default"], { columns: dyyhCloumn, dataSource: subscriber, bordered: true, pagination: false })
	                );
	            }
	        }, {
	            "title": "订阅内容",
	            "showTitle": true,
	            "titleIcon": "save",
	            "data": function data() {
	                return _react2["default"].createElement(
	                    'div',
	                    { className: "customizedTable" },
	                    _react2["default"].createElement(_table2["default"], { columns: gxmlsjxCloumn, dataSource: subContent, bordered: true, pagination: false })
	                );
	            }
	        }, {
	            "title": "数据过滤",
	            "showTitle": true,
	            "titleIcon": "solution",
	            "data": function data() {
	                return _react2["default"].createElement(
	                    'div',
	                    { className: "customizedTable" },
	                    _react2["default"].createElement(_table2["default"], { columns: sjglCloumn, dataSource: sjgl, bordered: true, pagination: false })
	                );
	            }
	        }, {
	            "title": "数据转换",
	            "showTitle": true,
	            "titleIcon": "solution",
	            "data": function data() {
	                return _react2["default"].createElement(
	                    'div',
	                    { className: "customizedTable" },
	                    _react2["default"].createElement(_table2["default"], { columns: sjzhCloumn, dataSource: sjzh, bordered: true, pagination: false })
	                );
	            }
	        }, {
	            "title": "数据脱敏",
	            "showTitle": true,
	            "titleIcon": "solution",
	            "data": function data() {
	                return _react2["default"].createElement(
	                    'div',
	                    { className: "customizedTable" },
	                    _react2["default"].createElement(_table2["default"], { columns: sjtmCloumn, dataSource: sjtm, bordered: true, pagination: false })
	                );
	            }
	        }, {
	            "title": "资源发布信息",
	            "column": 2,
	            "showTitle": true,
	            "titleIcon": "res-pub-mes",
	            "data": [{ "type": "text", "name": "发布原因", "field": "applyReason", "defaultValue": zyfbxx.applyReason ? zyfbxx.applyReason : "" }, { "type": "text", "name": "申请人", "field": "applyUser", "defaultValue": zyfbxx.applyUser ? zyfbxx.applyUser : "" }, { "type": "text", "name": "发布时间", "field": "applyTime", "defaultValue": zyfbxx.applyTime ? zyfbxx.applyTime : "" }, { "type": "text", "name": "审核结果", "field": "result", "defaultValue": zyfbxx.result ? zyfbxx.result == 0 ? "通过" : "拒绝" : "" }, { "type": "text", "name": "审核意见", "field": "approvalOpinion", "defaultValue": zyfbxx.reviewDesc ? zyfbxx.reviewDesc : "" }, { "type": "text", "name": "审核时间", "field": "revokeTime", "defaultValue": zyfbxx.reviewTime ? zyfbxx.reviewTime : "" }]
	        }, {
	            "title": "资源订阅信息",
	            "column": 2,
	            "showTitle": true,
	            "titleIcon": "notification",
	            "buttonConfigs": {
	                "buttons": [{ "type": "button", "value": "返回", "field": "back", props: { btnType: "primary", "style": { "float": "right" } } }]
	            },

	            "data": [{ "type": "text", "name": "申请订阅原因", "field": "applyReason", "defaultValue": zydyxx.applyReason ? zydyxx.applyReason : "" }, { "type": "text", "name": "申请设备", "field": "applyPerson", "defaultValue": zydyxx.applyPerson ? zydyxx.applyPerson : "" }, { "type": "text", "name": "申请订阅时间", "field": "applyTime", "defaultValue": zydyxx.applyTime ? zydyxx.applyTime : "" }, { "type": "text", "name": "审批结果", "field": "result", "defaultValue": zydyxx.state ? zydyxx.state == 1 ? '通过' : zydyxx.state == 2 ? '拒绝' : '' : '' }, { "type": "text", "name": "审批意见", "field": "approvalOpinion", "defaultValue": zydyxx.approvalOpinion ? zydyxx.approvalOpinion : "" }, { "type": "text", "name": "审批时间", "field": "revokeTime", "defaultValue": zydyxx.approvalTime ? zydyxx.approvalTime : "" }]
	        }]
	    });
	});

/***/ },

/***/ 194:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"mainCon2":"mainCon2___3hNlK","menuDefaultState":"menuDefaultState___1ruB6","mainDefaultState":"mainDefaultState___naVRA","openMenu":"openMenu___2yk0V","openMenuAn":"openMenuAn___ayq1N","openMain":"openMain___3EJzH","openMainAn":"openMainAn___11SBe","closeMenu":"closeMenu___2pw9M","closeMenuAn":"closeMenuAn___2_6uI","closeMain":"closeMain___1MtTG","closeMainAn":"closeMainAn___1zgHr","loginDlg":"loginDlg___2VvSd","loginTab":"loginTab___1QZXV","loginForm":"loginForm___1hQK_","loginButton":"loginButton___5c9Up","loginSpan":"loginSpan___1Y-_L","forgotMi":"forgotMi___1gsO1","userLogin":"userLogin___2XA_6","userLoginSpan":"userLoginSpan___EiJzu","forgetS":"forgetS___UGko_","loginHeader":"loginHeader___21clT","loginLogo":"loginLogo___18JnC","loginFooter":"loginFooter___4Ck3h","Dssg":"Dssg___2nDpY","DssgRight":"DssgRight___2W4jY","revisePassword":"revisePassword___2UOdB","reviseRel":"reviseRel___3b9TH","reviseContent":"reviseContent___qwr6u","revisePasForm":"revisePasForm___8MxuT","revisePasTit":"revisePasTit___NlSTa","reviseItemAll":"reviseItemAll___2TpQV","itemFont":"itemFont___3m971","revisePasInput":"revisePasInput___q3XQ5","reviseTip":"reviseTip___1jbpS","reviseTip2":"reviseTip2___3ztOQ","mainConRightConWidth":"mainConRightConWidth___3PIEv","mainConRightConWidth2":"mainConRightConWidth2___2-_tb","mainConMenuWidth":"mainConMenuWidth___pMVsn","mainConMenuIn":"mainConMenuIn___2c2FA","menuTitle":"menuTitle___3e0F1","footer":"footer___3YKjL","header":"header___1O2A5","headerContent1":"headerContent1___3jeOG","headerContent2":"headerContent2___2dl0_","headUnit":"headUnit___13xqw","navigatorUl":"navigatorUl___1dvhh","navigateSearchArea":"navigateSearchArea___1L1DY","popOverContent":"popOverContent___3nBWw","title":"title___3Wv84","titleLeft":"titleLeft___1dblQ","titleRight":"titleRight___21Eg0","pictureAbstractsContent":"pictureAbstractsContent___2mUw-","leftPicture":"leftPicture___2OxoO","rightAbstracts":"rightAbstracts___1qRDU","leftRatingContent":"leftRatingContent___HWiQg","rightAiFormContent":"rightAiFormContent___mr7T4","mainContent":"mainContent___3UKHC","everyUserRating":"everyUserRating___2GqMl","userRatingTitle":"userRatingTitle___3CUhS","ratingContent":"ratingContent___J80Xz","userRatingAll":"userRatingAll___2vHuQ","allRatingTitleContent":"allRatingTitleContent___3_ktI","leave":"leave___2pDd7","enter":"enter____ZoMb"};

/***/ },

/***/ 1018:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.basicMessageShow = undefined;

	var _actionType = __webpack_require__(22);

	var Types = _interopRequireWildcard(_actionType);

	var _api = __webpack_require__(39);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

	// 常用
	var basicMessageShow = exports.basicMessageShow = function basicMessageShow(id) {
	    return {
	        type: Types.basicMessageByRoute.basicMessageShow,
	        id: id
	    };
	};

/***/ },

/***/ 1021:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _defineProperty2 = __webpack_require__(7);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(6);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(5);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _App = __webpack_require__(194);

	var _App2 = _interopRequireDefault(_App);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _component = __webpack_require__(11);

	var _component2 = _interopRequireDefault(_component);

	var _AiForm = __webpack_require__(27);

	var _AiForm2 = _interopRequireDefault(_AiForm);

	var _basicMessage = __webpack_require__(1018);

	var _global = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var getHtmlArg = function getHtmlArg(name, defaultValue) {
		var match = window.location.href.match(new RegExp(name + '=([^&#]*)'));
		return match ? decodeURIComponent(match[1]) : defaultValue;
	};
	/* import basicMesStyle from "./BasicMessage.less"; */

	var server = 'dssg';
	if (process) {
		if (false) server = 'http://192.168.0.254:8080/dssg/';
	}
	try {
		var serverUrl = getHtmlArg('server', server);
		if (serverUrl.indexOf("api") >= 0 && serverUrl.indexOf("dssg") < 0) {
			/* let index = server.indexOf("api");
	   server = server.substring(0,index)+"dssg/";*/
			server = serverUrl.replace("api", "dssg");
		} else if (serverUrl.indexOf("dssg") >= 0) {
			var index = serverUrl.indexOf("dssg");
			server = serverUrl.substring(0, index);
		}
	} catch (ex) {}

	var BasicMessage = function (_Component) {
		(0, _inherits3["default"])(BasicMessage, _Component);

		function BasicMessage(props) {
			(0, _classCallCheck3["default"])(this, BasicMessage);

			var _this = (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));

			if (!props.showValues.filePath) {
				_global.Global.requestApi({ apiName: "getPicturePath", body: { id: props.showValues.themeType }, next: function next(action) {
						_global.Global.mark({ aiForm: (0, _defineProperty3["default"])({}, props.subId, { filePath: action.data }) });
					} });
			}
			return _this;
		}

		BasicMessage.prototype.componentDidMount = function componentDidMount() {}
		/* this.basicMessageWidth();
	  window.addEventListener('resize',this.basicMessageWidth.bind(this));   */

		/* basicMessageWidth(){
	  let a=document.documentElement.clientWidth;
	  let b=(this.props.leftShow=="true")?(a-220-20-20-1-1-60-20-42-102):(a-220-20-20-1-1-60-42);
	  Global.mark({
	  framework:{
	  basicMessageWidth:b
	  },
	  },"basicMessageWidth_change_event")
	  } */
		;

		BasicMessage.prototype.render = function render() {

			var showValues = this.props.showValues ? this.props.showValues : {};
			var leftShow = this.props.leftShow ? this.props.leftShow : false;
			var config = {
				data: [{
					"title": "",
					"column": 2,
					"showTitle": false,
					"data": [{ "name": "资源编码", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "resCode", "defaultValue": showValues.resCode ? showValues.resCode : "" }, { "name": "资源英文名称", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "resEname", "defaultValue": showValues.resEname ? showValues.resEname : "" }, { "name": "资源类型", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "resType", "defaultValue": showValues.resType == 1 ? "数据库" : showValues.resType == 2 ? "文件" : "API" }, { "name": "资源等级", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "resLevel", "defaultValue": showValues.resLevel == 1 ? "部分共享" : "完全共享" }, { "name": "主题分类", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "themeTypeName", "defaultValue": showValues.themeTypeName ? showValues.themeTypeName : showValues.themeName }, { "name": "行业分类", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "industryTypeName", "defaultValue": showValues.industryTypeName ? showValues.industryTypeName : "" }, { "name": "发布目录", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "catalogName", "defaultValue": showValues.catalogName ? showValues.catalogName : "" }, { "name": "更新周期", "labelCol": 8, "wrapperCol": 16, "type": "text", "field": "updateCycle", "defaultValue": showValues.updateCycle ? showValues.updateCycle : "" }]
				}]
			};
			return _react2["default"].createElement(
				'div',
				{ className: "basicMessageContentMain" },
				_react2["default"].createElement(
					'div',
					{ className: '' + _App2["default"].title },
					showValues.restitle ? showValues.restitle : showValues.resName
				),
				_react2["default"].createElement(
					'div',
					null,
					_react2["default"].createElement(
						'div',
						{ className: _App2["default"].pictureAbstractsContent + ' clearfix' },
						leftShow && _react2["default"].createElement(
							'div',
							{ className: '' + _App2["default"].leftPicture },
							_react2["default"].createElement('img', { alt: showValues.resName, src: showValues.filePath ? server + showValues.filePath : _global.Global.getState().aiForm[this.props.subId] && _global.Global.getState().aiForm[this.props.subId].filePath ? server + _global.Global.getState().aiForm[this.props.subId].filePath : "images/columnOneDefaultImg.png" })
						),
						_react2["default"].createElement(
							'div',
							{ className: '' + _App2["default"].rightAbstracts },
							_react2["default"].createElement(
								'div',
								{ title: showValues.abstracts },
								showValues.abstracts
							)
						)
					),
					_react2["default"].createElement(
						'div',
						null,
						showValues && _react2["default"].createElement(_AiForm2["default"], { version: '2', config: config, id: this.props.subId })
					)
				)
			);
		};

		return BasicMessage;
	}(_react.Component);

	exports["default"] = (0, _component2["default"])("basicMessage", { basicMessageShow: _basicMessage.basicMessageShow })(BasicMessage);
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(87)))

/***/ }

});