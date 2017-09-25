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

	var _css3 = __webpack_require__(1778);

	var _modal = __webpack_require__(49);

	var _modal2 = _interopRequireDefault(_modal);

	var _css4 = __webpack_require__(63);

	var _form = __webpack_require__(59);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _AiFormTable = __webpack_require__(428);

	var _AiFormTable2 = _interopRequireDefault(_AiFormTable);

	var _AiLabel = __webpack_require__(380);

	var _AiLabel2 = _interopRequireDefault(_AiLabel);

	var _jsonp = __webpack_require__(234);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(15);

	var _history = __webpack_require__(41);

	var _history2 = _interopRequireDefault(_history);

	var _dataFormat = __webpack_require__(172);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var FormItem = _form2["default"].Item; /**
	                                     * Created by liy on 2016/12/20 0020.
	                                     */

	(0, _jsonp2["default"])("wfbdzyFileZyxgStep5")(function (args, callback) {
	    var state = _global.Global.getState();

	    var ysjBasicInf = state.aiForm.wfbdzyFileZyxgStep3 ? state.aiForm.wfbdzyFileZyxgStep3.values : {};
	    var step2 = state.dataList.wfbdzyFileZyxgStep2 ? state.dataList.wfbdzyFileZyxgStep2 : {};
	    var step2SelectRows = step2.selectedRows ? step2.selectedRows : "";
	    var step2Datas = step2.tableBodyDataApi && step2.tableBodyDataApi.data ? step2.tableBodyDataApi.data : "";
	    var themeName = (0, _dataFormat.gettreeSelectName)(state, "themeType", ysjBasicInf.themeType ? ysjBasicInf.themeType : "");
	    var departmentName = (0, _dataFormat.gettreeSelectName)(state, "departmentType", ysjBasicInf.departmentType ? ysjBasicInf.departmentType : "");
	    var lastStepState = state.dataList.wfbdzyFileZyxgStep1;
	    if (!lastStepState) {
	        _modal2["default"].warning({
	            title: '提示',
	            content: '上一步或前几步没有完成，请返回第一步重新开始。',
	            onOk: function onOk() {
	                /* */
	                setTimeout(function () {
	                    _global.Global.mark({ aiForm: {
	                            wfbdzyFileZyxgStep5: null
	                        } });
	                    _history2["default"].push(state.routing.path.replace(/\/\d+/, '/1'));
	                }, 500);
	            }
	        });
	        return;
	    }
	    //共享文件信息
	    var step2SelectDatas = [];
	    step2SelectRows.forEach(function (val) {
	        step2Datas.forEach(function (val2) {
	            if (val == val2.id) {
	                step2SelectDatas.push(val2);
	            }
	        });
	    });
	    //更新策略
	    var step4Values = state.aiForm.wfbdzyFileZyxgStep4 && state.aiForm.wfbdzyFileZyxgStep4.values ? state.aiForm.wfbdzyFileZyxgStep4.values : "";
	    var ddModelDatas = [];
	    if (step4Values.ddModel == 1) {
	        ddModelDatas.push({ "dispatchType": "周期模式", "startTime": step4Values.startTime.format("YYYY-MM-DD HH:mm:ss"), "cycle": step4Values.zqIntervalCycle });
	    } else {
	        ddModelDatas.push({ "dispatchType": "定期模式", "cycle": "" });
	    }
	    //文件共享等级
	    var fileLevel = step4Values.fileLevel;
	    var fileLevelDatas = [];
	    if (fileLevel == 1) {
	        fileLevelDatas.push({ "level": "一级" });
	    } else if (fileLevel == 2) {
	        fileLevelDatas.push({ "level": "二级" });
	    } else {
	        fileLevelDatas.push({ "level": "三级" });
	    }

	    var gxwjxxcolumns = [{
	        "title": "文件名",
	        "dataIndex": "name",
	        "key": "name"
	    }, {
	        "title": "文件类型",
	        "dataIndex": "type",
	        "key": "type"
	    }, {
	        "title": "文件大小",
	        "dataIndex": "size",
	        "key": "size"
	    }, {
	        "title": "最后更新时间",
	        "dataIndex": "updateDate",
	        "key": "updateDate"
	    }];
	    var wjgxdjcolumns = [{
	        "title": "文件等级",
	        "dataIndex": "level",
	        "key": "level",
	        "width": "33%"
	    }, {
	        "title": "",
	        "dataIndex": "",
	        "key": "",
	        "width": "33%"
	    }, {
	        "title": "",
	        "dataIndex": "",
	        "key": "",
	        "width": "33%"
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
	            switch (step4Values.zqTimeUnit) {
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
	                step4Values.dayTime,
	                '\u5929'
	            ), _react2["default"].createElement(
	                'span',
	                { style: { paddingLeft: "20px", paddingRight: "20px" } },
	                step4Values.hourTime,
	                '\u65F6'
	            ), _react2["default"].createElement(
	                'span',
	                { style: { paddingLeft: "20px", paddingRight: "20px" } },
	                step4Values.minTime,
	                '\u5206'
	            )];
	            switch (step4Values.dqTimeUnit) {
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
	            "title": "元数据基本信息",
	            "column": 2,
	            "showTitle": true,
	            "titleIcon": "metadata-message",
	            "data": [{ "type": "text", "name": "文件编码", "field": "wjbm", "defaultValue": ysjBasicInf.wjbm ? ysjBasicInf.wjbm : "" }, { "type": "text", "name": "文件名称", "field": "resName", "defaultValue": ysjBasicInf.resName ? ysjBasicInf.resName : "" }, { "type": "text", "name": "摘要", "field": "abstracts", "defaultValue": ysjBasicInf.abstracts ? ysjBasicInf.abstracts : "" }, { "type": "text", "name": "关键字", "field": "keyword", "defaultValue": ysjBasicInf.keyword ? ysjBasicInf.keyword : "" }, { "type": "text", "name": "国家主题分类", "field": "themeType", "defaultValue": themeName }, { "type": "text", "name": "部门主题分类", "field": "departmentType", "defaultValue": departmentName }, { "type": "text", "name": "订阅类型", "field": "dylx", "defaultValue": "文件" }, { "type": "text", "name": "数据提供方单位", "field": "rporgname", "defaultValue": ysjBasicInf.rporgname ? ysjBasicInf.rporgname : "" }, { "type": "text", "name": "数据提供方地址", "field": "address", "defaultValue": ysjBasicInf.address ? ysjBasicInf.address : "" }]
	        }, {
	            "title": "共享文件信息",
	            "showTitle": true,
	            "titleIcon": "catalog",
	            "data": function data() {
	                return _react2["default"].createElement(_table2["default"], { columns: gxwjxxcolumns, dataSource: step2SelectDatas, bordered: true });
	            }
	        }, {
	            "title": "更新策略",
	            "showTitle": true,
	            "titleIcon": "schedule-configuration",
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
	                    _react2["default"].createElement(_table2["default"], { columns: step4Values.ddModel == 1 ? gxclCloumn_zq : gxclCloumn_dq, dataSource: ddModelDatas, bordered: true })
	                );
	            }
	        }, {
	            "title": "文件共享等级",
	            "showTitle": true,
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
	                            '\u6587\u4EF6\u5171\u4EAB\u7B49\u7EA7\u914D\u7F6E'
	                        )
	                    ),
	                    _react2["default"].createElement(_table2["default"], { columns: wjgxdjcolumns, dataSource: fileLevelDatas, bordered: true })
	                );
	            }
	        }, {
	            "title": "资源申请发布信息",
	            "column": 2,
	            "showTitle": true,
	            "titleIcon": "res-pub-mes",
	            "data": [{ "name": "发布原因", "type": "text", "field": "applyReason", "defaultValue": ysjBasicInf.applyReason }, { "name": "申请人", "type": "text", "field": "proposer", "defaultValue": state.framework.loginApi.data.loginUserProfileDTO && state.framework.loginApi.data.loginUserProfileDTO.loginName ? state.framework.loginApi.data.loginUserProfileDTO.loginName : "" }]
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