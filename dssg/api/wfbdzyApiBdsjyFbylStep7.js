(function(){ var runed=0,temp,timer,time;webpackJsonp([3],[
/* 0 */
/***/ temp = function(module, exports, __webpack_require__) {runed=true;

	'use strict';

	var _css = __webpack_require__(73);

	var _table = __webpack_require__(69);

	var _table2 = _interopRequireDefault(_table);

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getIterator2 = __webpack_require__(48);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(234);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _dataFormat = __webpack_require__(172);

	var _global = __webpack_require__(15);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("wfbdzyApiBdsjyFbylStep7")(function (args, callback) {
	    var states = _global.Global.getState();
	    var metadataDetail = (0, _dataFormat.getAiFormValue)(states, "wfbdzyApiBdsjyTxysjStep5", 0);
	    var detailMsg = states.dataList.wfbdzyApi && states.dataList.wfbdzyApi.detailMsgDataApi && states.dataList.wfbdzyApi.detailMsgDataApi.data ? states.dataList.wfbdzyApi.detailMsgDataApi.data : {};
	    var pzdyqx = (0, _dataFormat.aiFormTableValue)(states.aiForm.wfbdzyApiBdsjyPzdyqxStep6.values);
	    var srcspz = states.aiForm.wfbdzyApiBdsjySrcspzStep3.values;
	    var jkdzxx = states.aiForm.wfbdzyApiBdsjySccspzStep4.values;
	    var url = states.aiForm.url ? states.aiForm.url.data : "";
	    var themeName = (0, _dataFormat.gettreeSelectName)(states, "themeType", metadataDetail.themeType);
	    var departmentName = (0, _dataFormat.gettreeSelectName)(states, "departmentType", metadataDetail.departmentType);
	    metadataDetail.themeName = themeName;
	    metadataDetail.departmentName = departmentName;
	    var srcscolumns = [{
	        "title": "参数",
	        "dataIndex": "name",
	        "key": "name"
	    }, {
	        "title": "是否必须",
	        "dataIndex": "mandatory",
	        "key": "mandatory",
	        render: function render(text, _render, index) {
	            switch (text) {
	                case "1":
	                    return "必选";
	                case "0":
	                    return "可选";
	            }
	        }
	    }, {
	        "title": "参数类型",
	        "dataIndex": "type",
	        "key": "type"
	    }, {
	        "title": "数据来源",
	        "dataIndex": "table",
	        "key": "table"
	    }];
	    var sccscolumns = [{
	        "title": "参数",
	        "dataIndex": "name",
	        "key": "name"
	    }, {
	        "title": "是否必须",
	        "dataIndex": "enable",
	        "key": "enable",
	        render: function render(text, _render2, index) {
	            switch (text) {
	                case true:
	                    return "必选";
	                case false:
	                    return "可选";
	            }
	        }
	    }, {
	        "title": "参数类型",
	        "dataIndex": "type",
	        "key": "type"
	    }, {
	        "title": "数据来源",
	        "dataIndex": "table",
	        "key": "table"
	    }];
	    var apigxdjcolumns = [{
	        "title": 'API等级',
	        "dataIndex": 'resLevel',
	        "key": 'resLevel',
	        "render": function render(text, _render3, index) {
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
	    var userName = states.framework.loginApi.data.loginUserProfileDTO.loginName;
	    var dataSourceId = states.dataList.wfbdzyApiBdsjyXzsjyStep1.selectedRows[0];
	    var formatDate = states.aiFormTable.aFTDApi.config.dataSource;
	    formatDate.map(function (data, i) {
	        data.enable = true;
	    });
	    var outParameterJson = jkdzxx.sccspz && jkdzxx.sccspz.length > 0 ? jkdzxx.sccspz : formatDate;

	    if (outParameterJson.length > 0) {
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	            for (var _iterator = (0, _getIterator3["default"])(outParameterJson), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var p = _step.value;

	                delete p.length;
	                //delete p.dataType;
	                var key = void 0;
	                for (key in p) {
	                    delete p.key;
	                    if (key.indexOf("_field") > 0) {
	                        delete p[key];
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
	    }
	    if (detailMsg.id) {
	        metadataDetail.resId = detailMsg.id;
	    }
	    if (jkdzxx.sccspz) {
	        delete jkdzxx.sccspz;
	    }
	    var tables = states.connectDatasource.connectDataSourceApi.tableIds;
	    var tableReleation = states.connectDatasource.connectDataSourceApi.linkdatas ? states.connectDatasource.connectDataSourceApi.linkdatas : [];
	    var tableBack = [];
	    tableReleation.length > 0 && tableReleation.map(function (items, i) {
	        var obj = {};
	        obj.sourceTable = items.from.table;
	        obj.targetTable = items.to.table;
	        obj.releation = items.from.field + ',' + items.to.field;
	        obj.index = i;
	        obj.operation = '=';
	        obj.joinType = items.linkType == "1" ? "left" : items.linkType == "2" ? "right" : "inner";
	        tableBack.push(obj);
	    });
	    var other = { dataSourceId: dataSourceId, dataTableView: "", tableReleation: tableBack };
	    var values = (0, _extends3["default"])({}, metadataDetail, { tables: tables }, jkdzxx, pzdyqx[0], { inParameterJson: srcspz, outParameterJson: outParameterJson }, other);
	    _global.Global.mark({ aiForm: { wfbdzyApiBdsjyFbylStep7: { values: values } } });

	    callback({
	        "success": true,
	        "data": [{
	            "title": "元数据基本信息", //栏目标题
	            "column": 2, //  form显示列数，首先读取每个标签的设置column值，不存在才会读取总的column,如果不存在，默认展示一列
	            "labelCol": 8, // form标头name宽度
	            "wrapperCol": 16, //form显示框宽度
	            "showTitle": true, //是否展示栏目标题
	            "titleIcon": "metadata-message",
	            "data": [{ "type": "text", "name": "标题", "field": "resName", "defaultValue": metadataDetail.resName ? metadataDetail.resName : "" }, { "type": "text", "name": "摘要", "field": "abstracts", "defaultValue": metadataDetail.abstracts ? metadataDetail.abstracts : "" }, { "type": "text", "name": "关键字", "field": "keyword", "defaultValue": metadataDetail.keyword ? metadataDetail.keyword : "" }, { "type": "text", "name": "国家主题分类", "field": "subjectcarategory", "defaultValue": themeName }, { "type": "text", "name": "部门主题分类", "field": "departmentCategory", "defaultValue": departmentName }, { "type": "text", "name": "资源类型", "field": "resType", "defaultValue": "API" }, { "type": "text", "name": "数据提供方单位", "field": "rporgname", "defaultValue": metadataDetail.rporgname ? metadataDetail.rporgname : "" }, { "type": "text", "name": "数据提供方地址", "field": "address", "defaultValue": metadataDetail.address ? metadataDetail.address : "" }]
	        }, {
	            "title": "输入参数配置",
	            "showTitle": true,
	            "titleIcon": "revise",
	            "data": function data() {
	                return _react2["default"].createElement(_table2["default"], { columns: srcscolumns, dataSource: srcspz, pagination: false });
	            }
	        }, {
	            "title": "输出参数配置",
	            "showTitle": true,
	            "titleIcon": "revise",
	            "data": function data() {
	                return _react2["default"].createElement(
	                    'div',
	                    null,
	                    _react2["default"].createElement(_table2["default"], { columns: sccscolumns, dataSource: outParameterJson, pagination: false })
	                );
	            }
	        }, {
	            "title": "接口地址信息", //栏目标题
	            "column": 1, //  form显示列数，首先读取每个标签的设置column值，不存在才会读取总的column,如果不存在，默认展示一列
	            "labelCol": 8, // form标头name宽度
	            "wrapperCol": 16, //form显示框宽度
	            "showTitle": true, //是否展示栏目标题
	            "titleIcon": "revise",
	            "data": [{ "name": "接口地址", "type": "text", "field": "URL", "defaultValue": url }, { "name": "服务类型", "type": "text", "field": "serviceType", "defaultValue": jkdzxx.serviceType ? jkdzxx.serviceType : "" }, { "name": "方法", "type": "text", "field": "functionName", "defaultValue": "getdb", preRender: function preRender() {
	                    return jkdzxx.serviceType == 'rest' ? "hidden" : "";
	                } }]
	        }, {
	            "title": "API共享等级", //栏目标题
	            "showTitle": true, //是否展示栏目标题
	            "titleIcon": "schedule-configuration",
	            "data": function data() {
	                return _react2["default"].createElement(
	                    'div',
	                    null,
	                    _react2["default"].createElement(
	                        'div',
	                        null,
	                        'API\u5171\u4EAB\u7B49\u7EA7\u914D\u7F6E'
	                    ),
	                    _react2["default"].createElement(_table2["default"], { columns: apigxdjcolumns, dataSource: pzdyqx, pagination: false })
	                );
	            }
	        }, {
	            "title": "资源申请发布信息", //栏目标题
	            "column": 2, //  form显示列数，首先读取每个标签的设置column值，不存在才会读取总的column,如果不存在，默认展示一列
	            "labelCol": 8, // form标头name宽度
	            "wrapperCol": 16, //form显示框宽度
	            "showTitle": true, //是否展示栏目标题
	            "titleIcon": "schedule-configuration",
	            "data": [{ "name": "发布原因", "type": "text", "field": "applyReason", "defaultValue": metadataDetail.applyReason ? metadataDetail.applyReason : "" }, { "name": "申请人", "type": "text", "field": "applyuser", "defaultValue": userName }]
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