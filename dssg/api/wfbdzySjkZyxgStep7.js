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

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(234);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _dataFormat = __webpack_require__(172);

	var _global = __webpack_require__(15);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * Created by liy on 2016/12/19 0019.
	 */
	(0, _jsonp2["default"])("wfbdzySjkZyxgStep7")(function (args, callback) {
	    debugger;
	    var target = args.target;
	    // let metadataDetail = (args && args.apiData) ? args.apiData.metadataDetail:{};
	    // let pzgxcl = (args &&args.apiData) ? args.apiData.pzgxcl:[];
	    // let gxmuxx = (args &&args.apiData) ? args.apiData.gxmuxx:[];
	    // let gxmlsjx = (args &&args.apiData) ? args.apiData.gxmlsjx:[];
	    // let zysqdyxx = (args &&args.apiData) ? args.apiData.zysqdyxx:[];
	    var state = _global.Global.getState();
	    // let lastStepState = state.dataList.wfbdzySjkZyfbStep0 && state.dataList.wfbdzySjkZyfbStep1 && state.aiForm.wfbdzySjkZyfbStep4;
	    // if(!lastStepState){
	    //     StepContainer.gotoFirst('wfbdzySjkZyfbSteperDemo');
	    //     return;
	    // }
	    var fbr = state.aiForm.wfbdzySjkZyxgStep5.values;
	    var gxmlxxDataSources = state.dataList.wfbdzySjk.tableBodyDataApi.data.content;
	    var gxmlxxDataSource = [];
	    gxmlxxDataSources.forEach(function (item, index) {
	        if (state.dataList.getResourceForUpdate.data.resourceItemDTO.resourceId == item.id) {
	            gxmlxxDataSource.push(item);
	            return;
	        }
	    });
	    // let gxmlsjxDataSource = state.connectDatasource.connectDataSourceDemo.requestDataItemContent.data.dbJson?jsonStrToArray(state.connectDatasource.connectDataSourceDemo.requestDataItemContent.data.dbJson):[];
	    // let aaaa = Global.getState().aiFormTable.aFTD.config.dataSource;

	    var resultG = state.aiForm.wfbdzySjkZyxgStep6.values;
	    var ddModelDatas = [];
	    if (resultG.ddModel == 1) {
	        ddModelDatas.push({ "dispatchType": "周期模式", "startTime": _global.Global.getState().aiForm.wfbdzySjkZyxgStep6.values.startTime.format("YYYY-MM-DD HH:mm"), "cycle": resultG.zqIntervalCycle });
	    } else {
	        ddModelDatas.push({ "dispatchType": "定期模式", "cycle": "" });
	    }

	    // let sourceColumns = [];
	    // aaaa.forEach((item)=>{
	    //     sourceColumns.push({
	    //         "dataItemName":item.name,
	    //         "dataItemCode":item.code,
	    //         "table":item.dataSource,
	    //         "columnName":item.columnName,
	    //         "showName":item.columnName,
	    //         "index":item.index,
	    //         "type":item.dataType
	    //     })
	    // })
	    var dispatchStrategy = {};
	    if (resultG.ddModel == 1) {
	        var stepValues1 = _global.Global.getState().aiForm.wfbdzySjkZyxgStep6.values;
	        dispatchStrategy.dispatchType = 1;
	        dispatchStrategy.beginTime = stepValues1.startTime.format("YYYY-MM-DD HH:mm:ss");
	        dispatchStrategy.cycle = parseInt(resultG.zqIntervalCycle);
	        dispatchStrategy.dateTypeMin = resultG.zqTimeUnit;
	        dispatchStrategy.dateTypeMax = "";
	        dispatchStrategy.day = "";
	        dispatchStrategy.hour = "";
	        dispatchStrategy.second = "";
	    } else {
	        dispatchStrategy.dispatchType = 2;
	        dispatchStrategy.beginTime = "";
	        dispatchStrategy.cycle = "";
	        dispatchStrategy.dateTypeMin = "";
	        dispatchStrategy.dateTypeMax = resultG.dqTimeUnit;
	        dispatchStrategy.day = parseInt(resultG.dayTime);
	        dispatchStrategy.hour = parseInt(resultG.hourTime);
	        dispatchStrategy.second = parseInt(resultG.minTime);
	    }

	    // let values = {
	    //     "id":state.dataList.wfbdzySjkZyfbStep0.selectedRows[0],
	    //     "dataSourceId":state.dataList.wfbdzySjkZyfbStep1.selectedRows[0],
	    //     "dbPublishDataJson":{
	    //         "table_releation": [],
	    //         "pk": "id",
	    //         "sourceColumns":sourceColumns
	    //     },
	    //     "dispatchStrategy":dispatchStrategy,
	    //     "metadataDTO":{
	    //         "restitle": fbr.resName,
	    //         "abstracts": fbr.abstracts,
	    //         "rporgname": fbr.rporgname,
	    //         "address": fbr.address?fbr.address:"no address",
	    //         "subjectcarategory":themeType,
	    //         "departmentcategory":departmentType,
	    //         "keyword": fbr.keyword,
	    //         "reason": fbr.applyReason,
	    //         "resourceType":1
	    //     }
	    // };
	    // Global.mark({
	    //     'stepContainer':{
	    //         stepValues:values
	    //     }
	    // })

	    //getAiFormValue(state,'wfbdzySjkZyfbStep5',0)
	    // gxmlxxDataSource.push();
	    var gxmlxxcolumns = [{
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
	        render: function render() {
	            return '数据库';
	        }
	    }, {
	        title: "主题分类",
	        dataIndex: 'themeName',
	        key: 'themeName'
	    }, {
	        title: "部门分类",
	        dataIndex: 'departmentName',
	        key: 'departmentName'
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
	            }
	        }
	    }];

	    var gxmlsjxcolumns = [{
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
	        } }, {

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
	            }
	        }
	    }];
	    //更新策略

	    var gxclCloumn_zq = [{
	        title: "调度模式",
	        dataIndex: 'dispatchType',
	        key: 'dispatchType'
	    }, {
	        title: "开始时间",
	        dataIndex: 'startTime',
	        key: 'startTime'
	    }, {
	        title: "间隔周期",
	        dataIndex: 'cycle',
	        key: 'cycle',
	        render: function render(text, record, index) {
	            switch (resultG.zqTimeUnit) {
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
	    var gxclCloumn_dq = [{
	        title: "调度模式",
	        dataIndex: 'dispatchType',
	        key: 'dispatchType'
	    }, {
	        title: "间隔周期",
	        dataIndex: 'cycle',
	        key: 'cycle',
	        render: function render(text, record, index) {
	            var children = [_react2["default"].createElement(
	                'span',
	                { style: { paddingLeft: "20px", paddingRight: "20px" } },
	                resultG.dayTime,
	                '\u5929'
	            ), _react2["default"].createElement(
	                'span',
	                { style: { paddingLeft: "20px", paddingRight: "20px" } },
	                resultG.hourTime,
	                '\u65F6'
	            ), _react2["default"].createElement(
	                'span',
	                { style: { paddingLeft: "20px", paddingRight: "20px" } },
	                resultG.minTime,
	                '\u5206'
	            )];
	            switch (resultG.dqTimeUnit) {
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
	    callback({
	        "success": true,
	        "data": [{
	            "title": "元数据基本信息", //栏目标题
	            "column": 2,
	            "showTitle": true,
	            "titleIcon": "file-text",
	            "data": [{ "type": "text", "name": "标题", "field": "zymc", "defaultValue": fbr.resName ? fbr.resName : "" }, { "type": "text", "name": "摘要", "field": "zy", "defaultValue": fbr.abstracts ? fbr.abstracts : "" }, { "type": "text", "name": "关键字", "field": "keyword", "defaultValue": fbr.keyword ? fbr.keyword : "" }, { "type": "text", "name": "国家主题分类", "field": "themeType", "defaultValue": fbr.themeType }, { "type": "text", "name": "部门主题分类", "field": "departmentType", "defaultValue": fbr.departmentType }, { "type": "text", "name": "资源类型", "field": "dylx", "defaultValue": "数据库" }, { "type": "text", "name": "数据提供方单位", "field": "rporgname", "defaultValue": fbr.rporgname }, { "type": "text", "name": "数据提供方地址", "field": "address", "defaultValue": fbr.address }]
	        }, {
	            "title": "共享目录信息",
	            "showTitle": true,
	            "titleIcon": "bars",
	            "data": function data() {
	                return _react2["default"].createElement(_table2["default"], { columns: gxmlxxcolumns, dataSource: gxmlxxDataSource, bordered: true });
	            }
	        }, {
	            "title": "共享目录数据项",
	            "showTitle": true,
	            "titleIcon": "bar-chart",
	            "data": function data() {
	                return _react2["default"].createElement(_table2["default"], { columns: gxmlsjxcolumns, dataSource: [], bordered: true });
	            }
	        }, {
	            "title": "更新策略",
	            "showTitle": true,
	            "titleIcon": "copy",
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
	                    _react2["default"].createElement(_table2["default"], { columns: resultG.ddModel == 1 ? gxclCloumn_zq : gxclCloumn_dq, dataSource: ddModelDatas, bordered: true })
	                );
	            }
	        }, {
	            "title": "资源申请发布信息", //栏目标题
	            "column": 2,
	            "showTitle": true,
	            "titleIcon": "notification",
	            "data": [{ "name": "发布原因", "type": "text", "field": "fbyy", "defaultValue": fbr.applyReason }, { "name": "申请人", "type": "text", "field": "proposer", "defaultValue": _global.Global.getState().framework.loginApi.data.loginUserProfileDTO.loginName }]
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