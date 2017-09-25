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

	(0, _jsonp2["default"])("wfbdzySjkZyxgStep7")(function (args, callback) {
	    var target = args.target;
	    var state = _global.Global.getState();
	    var detailInfo = state.dataList.getResourceForUpdate && state.dataList.getResourceForUpdate.data ? state.dataList.getResourceForUpdate.data : {};
	    var gxmlsjxSource = state.dataList.getResourceForUpdate.data.dbJson;
	    var gxmlsjxDataSource = gxmlsjxSource ? (0, _dataFormat.jsonStrToArray)(gxmlsjxSource) : [];
	    var fbr1 = (0, _dataFormat.getAiFormValue)(state, 'wfbdzySjkZyxgStep5', 0);
	    var fbr = state.aiForm.wfbdzySjkZyxgStep5.values;
	    fbr.resType = 1;
	    fbr.themeTypeName = detailInfo.metadataDTO.subjectcarategory;
	    fbr.departmentTypeName = detailInfo.metadataDTO.departmentcategory;

	    var gxmlxxDataSources = state.dataList.wfbdzySjk.tableBodyDataApi.data.content;
	    //资源有效期
	    var zyyxq = [];
	    var validBeginTime = state.aiForm.wfbdzySjkZyxgStep8.values.validBeginTime;
	    var validEndTime = state.aiForm.wfbdzySjkZyxgStep8.values.validEndTime;
	    zyyxq.push({
	        "zyyxq": "",
	        "validBeginTime": typeof validBeginTime == "string" ? validBeginTime : validBeginTime.format("YYYY-MM-DD HH:mm:ss"),
	        "validEndTime": typeof validEndTime == "string" ? validEndTime : validEndTime.format("YYYY-MM-DD HH:mm:ss")
	    });
	    validBeginTime = typeof validBeginTime == "string" ? new Date(validBeginTime) : validBeginTime;
	    validEndTime = typeof validEndTime == "string" ? new Date(validEndTime) : validEndTime;
	    var gxmlxxDataSource = [];
	    var table_releation = [];
	    var dbJson = [];
	    state.aiFormTable.aFTD.config.dataSource.forEach(function (items) {
	        if (items) {
	            var obj = {};
	            obj.name = items.name;
	            obj.ename = items.ename;
	            obj.code = items.code;
	            obj.length = items.length;
	            obj.level = items.level ? items.level : '';
	            obj.type = items.type;
	            obj.mandatory = items.mandatory;
	            obj.index = items.index;
	            obj.pk = items.pk;
	            dbJson.push(obj);
	        }
	    });
	    gxmlxxDataSources.forEach(function (item, index) {
	        if (state.dataList.getResourceForUpdate.data.resourceItemDTO.resourceId == item.id) {
	            gxmlxxDataSource.push(item);
	            return;
	        }
	    });
	    var pkColumns = [];
	    state.connectDatasource.ConnectDatasourceUpdate.tableIds.forEach(function (items1) {
	        state.connectDatasource.ConnectDatasourceUpdate.getContentByTableTile.data.forEach(function (items) {
	            if (items1 == items.tableName) {
	                var obj = {};
	                var name = [];
	                obj.table = items.tableName;
	                items.tableData.forEach(function (items2) {
	                    if (items2.columnName == 'PK' || items2.columnName == 'pk') {
	                        name.push(items2.columnCode);
	                    }
	                });
	                state.aiFormTable.aFTD.config.dataSource.forEach(function (items3) {
	                    if (items3 && items3.pk == true) {
	                        if (items3.columnName.indexOf('.') != -1) {
	                            name.push(items3.columnName.split('.')[0]);
	                            return;
	                        } else {
	                            name.push(items3.columnName);
	                            return;
	                        }
	                    }
	                });
	                obj.name = name.join(',');
	                pkColumns.push(obj);
	            }
	        });
	    });
	    state.connectDatasource.ConnectDatasourceUpdate && state.connectDatasource.ConnectDatasourceUpdate.linkdatas && state.connectDatasource.ConnectDatasourceUpdate.linkdatas.forEach(function (items, index) {
	        var obj = {};
	        obj.sourceTable = items.from.table;
	        obj.targetTable = items.to.table;
	        obj.releation = items.from.field + ',' + items.to.field;
	        obj.index = index;
	        obj.operation = '=';
	        obj.joinType = items.linkType;
	        table_releation.push(obj);
	    });
	    var aaaa = state.aiFormTable.aFTD.config.dataSource;

	    var resultG = state.aiForm.wfbdzySjkZyxgStep6.values;
	    var ddModelDatas = [];
	    if (resultG.ddModel == 1) {
	        ddModelDatas.push({ "dispatchType": "周期模式", "startTime": _global.Global.getState().aiForm.wfbdzySjkZyxgStep6.values.startTime.format("YYYY-MM-DD HH:mm:ss"), "cycle": resultG.zqIntervalCycle });
	    } else if (resultG.ddModel == 2) {
	        ddModelDatas.push({ "dispatchType": "定期模式", "cycle": "" });
	    } else {
	        ddModelDatas.push({ "dispatchType": "触发器模式" });
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
	    var sourceColumns = [];
	    aaaa.forEach(function (item) {
	        if (item) {
	            if (item.columnName.indexOf('.') != -1) {
	                sourceColumns.push({
	                    "dataItemName": item.name,
	                    "dataItemCode": item.code,
	                    "table": item.dataSource,
	                    "columnName": item.columnName.split('.')[0],
	                    "showName": item.columnName,
	                    "index": item.index,
	                    "type": item.dataType
	                });
	                return;
	            } else {
	                sourceColumns.push({
	                    "dataItemName": item.name,
	                    "dataItemCode": item.code,
	                    "table": item.dataSource,
	                    "columnName": item.columnName,
	                    "showName": item.columnName,
	                    "index": item.index,
	                    "type": item.dataType
	                });
	                return;
	            }
	        }
	    });
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
	    } else if (resultG.ddModel == 2) {
	        dispatchStrategy.dispatchType = 2;
	        dispatchStrategy.beginTime = "";
	        dispatchStrategy.cycle = "";
	        dispatchStrategy.dateTypeMin = "";
	        dispatchStrategy.dateTypeMax = resultG.dqTimeUnit;
	        dispatchStrategy.day = parseInt(resultG.dayTime);
	        dispatchStrategy.hour = parseInt(resultG.hourTime);
	        dispatchStrategy.second = parseInt(resultG.minTime);
	    } else {
	        dispatchStrategy.dispatchType = 3;
	    }
	    var metadataDetail = state.aiForm.wfbdzySjkZyxgStep5.values;
	    var picturePath = metadataDetail.picturePath && metadataDetail.picturePath.length > 0 && metadataDetail.picturePath[0].response ? metadataDetail.picturePath[0].response.filesId[0] : metadataDetail.picturePath && metadataDetail.picturePath.length > 0 ? metadataDetail.picturePath[0].uid : "";
	    var values = {
	        "dataSourceId": state.dataList.wfbdzySjkZyxgStep2.selectedRows[0],
	        "dbPublishDataJson": {
	            "tables": state.connectDatasource.ConnectDatasourceUpdate.tableIds,
	            "table_releation": table_releation,
	            "pkColumns": pkColumns,
	            "sourceColumns": sourceColumns
	        },
	        "dispatchStrategy": dispatchStrategy,
	        "dbJson": dbJson,
	        "metadataDTO": {
	            "restitle": fbr.resName,
	            "abstracts": fbr.abstracts,
	            "rporgname": fbr.rporgname,
	            "address": fbr.address ? fbr.address : "no address",
	            "keyword": fbr.keyword,
	            "reason": fbr.applyReason,
	            "resourceType": 1
	        },
	        "validBeginTime": validBeginTime,
	        "validEndTime": validEndTime,
	        "id": state.dataList.wfbdzySjk.selectedRows[0],
	        "picturePath": picturePath
	    };
	    _global.Global.mark({
	        aiForm: {
	            wfbdzySjkZyxgStep7: {
	                values: values
	            }
	        }
	    });

	    // getAiFormValue(state,'wfbdzySjkZyfbStep5',0)
	    // gxmlxxDataSource.push();
	    var gxmlxxcolumns = [{
	        title: "资源名称",
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
	        title: "资源英文名称",
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
	        title: "国家主题分类",
	        dataIndex: 'themeName',
	        key: 'themeName'
	    }, {
	        title: "部门主题分类",
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
	        key: 'code',
	        render: function render(text, record, index) {
	            return _react2["default"].createElement(
	                'div',
	                { title: text, style: { width: _global.Global.getState().framework.columnWidth, cursor: "pointer", display: "inline-block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } },
	                text
	            );
	        }
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
	        dataIndex: 'level',
	        key: 'level',
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
	    var gxclCloumn_cfq = [{
	        title: "调度模式",
	        dataIndex: 'dispatchType',
	        key: 'dispatchType'
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
	            "title": "元数据基本信息", //栏目标题
	            "column": 1,
	            "showTitle": true,
	            "titleIcon": "file-text",
	            "data": _react2["default"].createElement(_BasicMessage2["default"], { subId: 'wfbdzySjk', showValues: fbr, leftShow: 'false' })
	        }, {
	            "title": "目录信息",
	            "showTitle": true,
	            "titleIcon": "bars",
	            "data": function data() {
	                return _react2["default"].createElement(
	                    'div',
	                    { className: "customizedTable" },
	                    _react2["default"].createElement(_table2["default"], { columns: gxmlxxcolumns, dataSource: gxmlxxDataSource, bordered: true, pagination: false })
	                );
	            }
	        }, {
	            "title": "目录数据项",
	            "showTitle": true,
	            "titleIcon": "bar-chart",
	            "data": function data() {
	                return _react2["default"].createElement(
	                    'div',
	                    { className: "customizedTable" },
	                    _react2["default"].createElement(_table2["default"], { columns: gxmlsjxcolumns, dataSource: gxmlsjxDataSource, bordered: true, pagination: false })
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
	                    _react2["default"].createElement(_table2["default"], { columns: resultG.ddModel == 1 ? gxclCloumn_zq : resultG.ddModel == 2 ? gxclCloumn_dq : gxclCloumn_cfq, dataSource: ddModelDatas, bordered: true, pagination: false })
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
	                    _react2["default"].createElement(
	                        'div',
	                        { className: "tableTitle" },
	                        _react2["default"].createElement(_icon2["default"], { type: 'appstore-o', className: "tableTitIcon" }),
	                        _react2["default"].createElement(
	                            'span',
	                            null,
	                            '\u8D44\u6E90\u6709\u6548\u671F'
	                        )
	                    ),
	                    _react2["default"].createElement(_table2["default"], { pagination: false, columns: zyyxqCloumn, dataSource: zyyxq ? zyyxq : [], bordered: true })
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
	}); /**
	     * Created by liy on 2016/12/19 0019.
	     */

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