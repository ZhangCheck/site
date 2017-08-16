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

	var _css3 = __webpack_require__(1688);

	var _modal = __webpack_require__(49);

	var _modal2 = _interopRequireDefault(_modal);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(234);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(15);

	var _history = __webpack_require__(41);

	var _history2 = _interopRequireDefault(_history);

	var _dataFormat = __webpack_require__(172);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("wdydzySjkDyStep1")(function (args, callback) {
	    var target = args.target;
	    // let getFieldValue = target.props.form.getFieldValue;
	    //let detailData = (args && args.apiData) ? args.apiData : "";
	    var detailData = _global.Global.getState().dataList.wdydzySjkDyStep1.detailMsgDataApi ? _global.Global.getState().dataList.wdydzySjkDyStep1.detailMsgDataApi[0] : {};
	    //各种提示，如”应该从前一步开始的提示“
	    var lastStepState = detailData === null ? false : true;
	    if (!lastStepState) {
	        _modal2["default"].warning({
	            title: '提示',
	            content: '查询数据失败，请重新选择资源进行订阅',
	            onOk: function onOk() {
	                /* */
	                setTimeout(function () {
	                    _global.Global.mark({ aiForm: {
	                            wdydzySjkDyStep1: null
	                        } });
	                    _history2["default"].push('/datalistV1/wdydzySjk/list/0/10');
	                }, 500);
	            }
	        });
	        return;
	    }
	    //更新策略
	    var gxclDdpz = [];

	    gxclDdpz.push(detailData.dispatchStrategyJson ? JSON.parse(detailData.dispatchStrategyJson) : ""); //jsonStrToArray(args.detail.dispatchStrategyJson);
	    var gxmlxxDataSource = [{
	        "resName": detailData.resName,
	        "resEname": detailData.resEname,
	        "resCode": detailData.resCode,
	        "resType": detailData.resType,
	        "themType": detailData.themeTypeName,
	        "departmentType": detailData.departmentTypeName,
	        "resLevel": detailData.resLevel
	    }];
	    var gxmusjxDataSource = (0, _dataFormat.jsonStrToArray)(detailData.dbJson);

	    _global.Global.mark({
	        dataList: {
	            wdydzySjkDyStep1: {
	                allMsg: {
	                    data: detailData
	                }
	            }
	        }
	    });

	    var gxclDataSource = (0, _dataFormat.jsonStrToArray)(detailData.dispatchStrategyJson);
	    var gxmlcolumns = [{
	        "title": "资源名称",
	        "dataIndex": "resName",
	        "key": "resName"
	    }, {
	        "title": "资源英文名称",
	        "dataIndex": "resEname",
	        "key": "resEname"
	    }, {
	        "title": "资源编码",
	        "dataIndex": "resCode",
	        "key": "resCode"
	    }, {
	        "title": "资源类型",
	        "dataIndex": "resType",
	        "key": "resType",
	        render: function render(text, record, index) {
	            return '数据库';
	        }
	    }, {
	        "title": "主题分类",
	        "dataIndex": "themType",
	        "key": "themType"
	    }, {
	        "title": "部门分类",
	        "dataIndex": "departmentType",
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
	                default:
	                    return '无返回值';
	            }
	        }
	    }];
	    var gxmlsjxcolumns = [{
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
	        } }, {
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
	                default:
	                    return '返回值不匹配';
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
	                default:
	                    return '返回值不匹配';
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
	    callback({
	        "success": true,
	        "data": [{
	            "title": "元数据基本信息", //栏目标题
	            "column": 2, //  form显示列数，首先读取每个标签的设置column值，不存在才会读取总的column,如果不存在，默认展示一列
	            "labelCol": 8, // form标头name宽度
	            "wrapperCol": 16, //form显示框宽度
	            "showTitle": true, //是否展示栏目标题
	            "titleIcon": "file-text",
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
	            { "name": "标题", "type": "text", "field": "restitle", "defaultValue": detailData.metadataDTO.restitle }, { "name": "摘要", "type": "text", "field": "abstracts", "defaultValue": detailData.metadataDTO.abstracts }, { "name": "关键字", "type": "text", "field": "keyword", "defaultValue": detailData.metadataDTO.keyword }, { "name": "国家主题分类", "type": "text", "field": "subjectcarategory", "defaultValue": detailData.metadataDTO.subjectcarategory }, { "name": "部门主题分类", "type": "text", "field": "departmentcategory", "defaultValue": detailData.metadataDTO.departmentcategory }, { "name": "资源类型", "type": "text", "field": "resourceType", "defaultValue": '数据库' }, { "name": "数据提供方单位", "type": "text", "field": "rporgname", "defaultValue": detailData.metadataDTO.rporgname }, { "name": "数据提供方地址", "type": "text", "field": "address", "defaultValue": detailData.metadataDTO.address }]
	        }, {
	            "title": "共享目录信息", //栏目标题
	            "column": 1, //  form显示列数，首先读取每个标签的设置column值，不存在才会读取总的column,如果不存在，默认展示一列
	            "labelCol": 8, // form标头name宽度
	            "wrapperCol": 16, //form显示框宽度
	            "showTitle": true, //是否展示栏目标题
	            "titleIcon": "file-text",
	            "data": function data() {
	                return _react2["default"].createElement(_table2["default"], { columns: gxmlcolumns, dataSource: gxmlxxDataSource });
	            }
	        }, {
	            "title": "共享目录数据项", //栏目标题
	            "column": 1, //  form显示列数，首先读取每个标签的设置column值，不存在才会读取总的column,如果不存在，默认展示一列
	            "labelCol": 8, // form标头name宽度
	            "wrapperCol": 16, //form显示框宽度
	            "showTitle": true, //是否展示栏目标题
	            "titleIcon": "file-text",
	            "data": function data() {
	                return _react2["default"].createElement(_table2["default"], { columns: gxmlsjxcolumns, dataSource: gxmusjxDataSource });
	            }
	        }, {
	            "title": "更新周期配置",
	            "column": 1,
	            "labelCol": 1,
	            "wrapperCol": 6,
	            "titleIcon": "file-text",
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
	                    _react2["default"].createElement(_table2["default"], { pagination: false, columns: gxclDdpz[0].dispatchType == '1' ? gxclCloumn_zq : gxclCloumn_dq, dataSource: gxclDdpz ? gxclDdpz : "", bordered: true })
	                );
	            }
	        }, {
	            "title": "资源申请订阅信息", //栏目标题
	            "column": 2, //  form显示列数，首先读取每个标签的设置column值，不存在才会读取总的column,如果不存在，默认展示一列
	            "labelCol": 8, // form标头name宽度
	            "wrapperCol": 16, //form显示框宽度
	            "showTitle": true, //是否展示栏目标题
	            "titleIcon": "file-text",
	            "data": [{ "name": "申请原因", "type": "input", "field": "applyReason", "defaultValue": "" }, { "name": "订阅方式", "type": "select", "field": "subscribeWay", "options": ["映射模式"], 'defaultValue': '映射模式', props: { onSelect: function onSelect() {} } }, { "name": "申请人", "type": "text", "field": "applyUser", "defaultValue": _global.Global.getState().framework.loginApi.data.loginUserProfileDTO.loginName }]
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