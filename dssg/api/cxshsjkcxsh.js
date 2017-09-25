(function(){ var runed=0,temp,timer,time;webpackJsonp([3],[
/* 0 */
/***/ temp = function(module, exports, __webpack_require__) {runed=true;

	'use strict';

	var _css = __webpack_require__(64);

	var _icon = __webpack_require__(20);

	var _icon2 = _interopRequireDefault(_icon);

	var _css2 = __webpack_require__(73);

	var _table = __webpack_require__(69);

	var _table2 = _interopRequireDefault(_table);

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _AiFormTable = __webpack_require__(428);

	var _AiFormTable2 = _interopRequireDefault(_AiFormTable);

	var _AiLabel = __webpack_require__(380);

	var _AiLabel2 = _interopRequireDefault(_AiLabel);

	var _jsonp = __webpack_require__(234);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _dataFormat = __webpack_require__(172);

	var _global = __webpack_require__(15);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("cxshsjkcxsh")(function (args, callback) {
	    var states = _global.Global.getState();
	    var metadataDetail = args.detail ? args.detail.metadataDTO : {};
	    //更新策略

	    var gxcl = (0, _dataFormat.jsonStrToArray)(args.detail.dispatchStrategyJson);
	    // let gxmuxx = getTableData(args.detail);

	    var gxmuxx = [{
	        "resName": args.detail ? args.detail.resName : "",
	        "resEname": args.detail ? args.detail.resEname : "",
	        "resCode": args.detail ? args.detail.resCode : "",
	        "resType": args.detail ? args.detail.resType : "",
	        "themeType": args.detail ? args.detail.themeTypeName : "",
	        "departmentType": args.detail ? args.detail.departmentTypeName : "",
	        "resLevel": args.detail ? args.detail.resLevel : ""
	    }];
	    var gxmlsjx = (0, _dataFormat.jsonStrToArray)(args.detail.dbJson);
	    var zydyxx = args.detail && args.detail.processRecordRevocationDTO != null ? args.detail.processRecordRevocationDTO : {};
	    var gxclDdpz = [];
	    gxclDdpz.push(args.detail ? JSON.parse(args.detail.dispatchStrategyJson) : ""); //jsonStrToArray(args.detail.dispatchStrategyJson);

	    var gxmlxxCloumn = [{
	        title: "资源名称",
	        dataIndex: 'resName',
	        key: 'resName'
	    }, {
	        title: "资源英文名称",
	        dataIndex: 'resEname',
	        key: 'resEname'
	    }, {
	        title: "资源编码",
	        dataIndex: 'resCode',
	        key: 'resCode'
	    }, {
	        title: "资源类型",
	        dataIndex: 'resType',
	        key: 'resType',
	        render: function render(text, record, index) {
	            return '数据库';
	        }
	    }, {
	        title: "主题分类",
	        dataIndex: 'themeType',
	        key: 'themeType'
	    }, {
	        title: "部门分类",
	        dataIndex: 'departmentType',
	        key: 'departmentType'
	    }, {
	        title: "资源等级",
	        dataIndex: 'resLevel',
	        key: 'resLevel',
	        render: function render(text, record, index) {
	            switch (record.resLevel) {
	                case '1':
	                    return '一级';
	                case '2':
	                    return '二级';
	                case '3':
	                    return '三级';
	                default:
	                    return '无返回值';
	            }
	        }
	    }];

	    //共享目录数据项
	    var gxmlsjxCloumn = [{
	        title: "数据项名称",
	        dataIndex: 'name',
	        key: 'name'
	    }, {
	        title: "数据项英文名称",
	        dataIndex: 'ename',
	        key: 'ename'
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
	        key: 'length'
	    }, {
	        title: "是否必选",
	        dataIndex: 'mandatory',
	        key: 'mandatory',
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
	        title: "发布级别",
	        dataIndex: 'index',
	        key: 'index',
	        render: function render(text, record, index) {
	            switch (record.index) {
	                case '1':
	                    return '一级';
	                case '2':
	                    return '二级';
	                case '3':
	                    return '三级';
	                default:
	                    return '无返回值';
	            }
	        } }];
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
	    var values = {};
	    values = (0, _extends3["default"])({}, values, { type: "-1", resourceId: args.detail.id, resType: args.detail.resType, result: "0" });
	    callback({
	        "success": true,
	        "data": [{
	            "title": "元数据基本信息", //栏目标题
	            "column": 2, //  form显示列数，首先读取每个标签的设置column值，不存在才会读取总的column,如果不存在，默认展示一列
	            "labelCol": 8, // form标头name宽度
	            "wrapperCol": 16, //form显示框宽度
	            "titleIcon": "file-text",
	            "showTitle": true, //是否展示栏目标题
	            "data": [
	            /**
	             * data数据标准
	             * 标头和显示框宽度（labelCol和wrapperCol），先读每个标签内的，如果没有再读上面总的，
	             * “dictId”为下拉选择字典数据的id，存在就调用字典接口
	             * 可自定义标签，如下（1）号位子
	             * column 为单个标签占有的列数  ，可通过和labelCol、wrapperCol调试样式
	             * 数据中可有属性：一下
	             * field：唯一标识，type：标签类型（input/select/checkbox/switch/radio/timePicker/rangePicker/datePicker/inputNumber等）           必须有
	             * column：标签所占总的列数中的几列，labelCol：标头宽度，wrapperCol：数据框宽度，validate：规则，options：checkbox和select数据          选择有
	             * defaultValue：默认值，defaultValue显示数据， name：标签的名称，                                                                 选择有
	             */
	            { "type": "text", "name": "标题", "field": "restitle", "defaultValue": metadataDetail.restitle ? metadataDetail.restitle : "" }, { "type": "text", "name": "摘要", "field": "abstracts", "defaultValue": metadataDetail.abstracts ? metadataDetail.abstracts : "" }, { "type": "text", "name": "关键字", "field": "keyword", "defaultValue": metadataDetail.keyword ? metadataDetail.keyword : "" }, { "type": "text", "name": "国家主题分类", "field": "subjectcarategory", "defaultValue": metadataDetail.subjectcarategory ? metadataDetail.subjectcarategory : "" }, { "type": "text", "name": "部门主题分类", "field": "departmentcategory", "defaultValue": metadataDetail.departmentcategory ? metadataDetail.departmentcategory : "" }, { "type": "text", "name": "资源类型", "field": "resourceType", "defaultValue": "数据库" }, { "type": "text", "name": "数据提供方单位", "field": "rporgname", "defaultValue": metadataDetail.rporgname ? metadataDetail.rporgname : "" }, { "type": "text", "name": "数据提供方地址", "field": "address", "defaultValue": metadataDetail.address ? metadataDetail.address : "" }]
	        }, {
	            "title": "共享目录信息", //栏目标题
	            "titleIcon": "bars",
	            "showTitle": true, //是否展示栏目标题
	            "data": function data() {
	                return _react2["default"].createElement(_table2["default"], { columns: gxmlxxCloumn, dataSource: gxmuxx, bordered: true });
	            }
	        }, {
	            "title": "共享目录数据项", //栏目标题
	            "titleIcon": "bar-chart",
	            "showTitle": true, //是否展示栏目标题
	            "data": function data() {
	                return _react2["default"].createElement(_table2["default"], { columns: gxmlsjxCloumn, dataSource: gxmlsjx, bordered: true });
	            }
	        }, {
	            "title": "更新策略", //栏目标题
	            "titleIcon": "copy",
	            "showTitle": true, //是否展示栏目标题
	            "data": function data() {
	                return _react2["default"].createElement(
	                    'div',
	                    null,
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
	                    _react2["default"].createElement(_table2["default"], { columns: gxclDdpz[0].dispatchType == '1' ? gxclCloumn_zq : gxclCloumn_dq, dataSource: gxcl, bordered: true })
	                );
	            }
	        }, {
	            "title": "资源申请撤销信息", //栏目标题
	            "column": 2, //  form显示列数，首先读取每个标签的设置column值，不存在才会读取总的column,如果不存在，默认展示一列
	            "labelCol": 8, // form标头name宽度
	            "wrapperCol": 16, //form显示框宽度
	            "titleIcon": "copy",
	            "showTitle": true, //是否展示栏目标题
	            "data": [{ "name": "撤销原因", "type": "text", "field": "revokeReason", "defaultValue": zydyxx.applyReason ? zydyxx.applyReason : "" }, { "name": "申请人", "type": "text", "field": "applyUser", "defaultValue": zydyxx.applyUser ? zydyxx.applyUser : "" }, { "name": "申请时间", "type": "text", "field": "applyTime", "defaultValue": zydyxx.applyTime ? zydyxx.applyTime : "" }, { "name": "生效时间", "type": "text", "field": "sxsj", "defaultValue": zydyxx.effectiveData ? zydyxx.effectiveData : "" }]
	        }, {
	            "title": "资源撤销审核信息", //栏目标题
	            "column": 1, //  form显示列数，首先读取每个标签的设置column值，不存在才会读取总的column,如果不存在，默认展示一列
	            "labelCol": 8, // form标头name宽度
	            "wrapperCol": 16, //form显示框宽度
	            "titleIcon": "copy",
	            "showTitle": true, //是否展示栏目标题
	            "buttonConfigs": {
	                "onSubmitApi": { apiName: "cxshSyzySubmit", body: (0, _extends3["default"])({}, values) },
	                "getValue": { id: "aFBCD", index: 5 },
	                "buttons": [{ "type": "button", "value": "取消", "ignore": "ignore", props: { "style": { "float": "right" } } }, { "type": "button", "value": "确定", "ignore": "ignore", "field": "submit", props: { type: "primary", "style": { "float": "right" } } }]
	            },
	            "data": [{ "type": "select", "name": "审批结果", "field": "result", "options": [{ "value": "0", "key": "通过" }, { "value": "-1", "key": "拒绝" }] }, { "type": "input", "inputType": "textarea", "name": "审批意见", "field": "reviewDesc", props: { rows: 4 } }]
	        }]
	    });
	});

/***/ }
]);if(!runed){
            clearInterval(timer);
            timer = setInterval(function(){
                if(temp) {
                    temp(module, exports, __webpack_require__);
                    clearInterval(timer);
                    temp=null;
                    
                }
                time++;
                if(time>500){
                    clearInterval(timer);
                    console.log('more than 500 times')
                }
            },500);
        }})()