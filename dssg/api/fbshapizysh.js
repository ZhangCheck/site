(function(){ var runed=0,temp,timer,time;webpackJsonp([3],[
/* 0 */
/***/ temp = function(module, exports, __webpack_require__) {runed=true;

	'use strict';

	var _getIterator2 = __webpack_require__(48);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _css = __webpack_require__(73);

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

	var _global = __webpack_require__(15);

	var _dataFormat = __webpack_require__(172);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("fbshapizysh")(function (args, callback) {
	    var states = _global.Global.getState();
	    var msgDatas = states.dataList.fbshsyzyapi.detailMsgDataApi && states.dataList.fbshsyzyapi.detailMsgDataApi.data ? states.dataList.fbshsyzyapi.detailMsgDataApi.data : {};
	    var metadataDetail = msgDatas.metadataDTO ? msgDatas.metadataDTO : {};
	    var zyfbxx = msgDatas.processRecordDTO ? msgDatas.processRecordDTO : {};
	    var jkdzxx = msgDatas.apiDescription ? msgDatas.apiDescription : {};
	    var requestParams = msgDatas && msgDatas.requestParams ? (0, _dataFormat.jsonStrToArray)(msgDatas.requestParams) : [];
	    var responseStruct = msgDatas && msgDatas.responseStruct ? (0, _dataFormat.jsonStrToArray)(msgDatas.responseStruct) : [];
	    var resLevel = msgDatas && msgDatas.resLevel ? msgDatas.resLevel : "";
	    var showTitle = msgDatas.apiSource && msgDatas.apiSource == "3d" ? false : true;
	    var apiLevel = [];
	    if (resLevel != "") {
	        apiLevel.push({ resLevel: resLevel });
	    }
	    var selectId = _global.Global.getState().dataList.fbshsyzyapi.selectedRows;
	    var values = {};
	    values = (0, _extends3["default"])({}, values, { type: "0", resourceId: selectId[0], resType: "3" });
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
	                default:
	                    return "可选";
	            }
	        }
	    }, {
	        "title": "参数类型",
	        "dataIndex": "type",
	        "key": "type"
	    }];var sccscolumns = [{
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
	                default:
	                    return "必选";
	            }
	        }
	    }, {
	        "title": "参数类型",
	        "dataIndex": "type",
	        "key": "type"
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
	    }, {
	        "title": '',
	        "dataIndex": 'startTime',
	        "key": 'startTime'
	    }, {
	        "title": '',
	        "dataIndex": 'jgzq',
	        "key": 'jgzq'
	    }];
	    var dyyhcolumns = [{
	        title: "订阅用户",
	        dataIndex: 'name',
	        key: 'name'
	    }, {
	        title: "订阅单位",
	        dataIndex: 'company',
	        key: 'company'
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
	        key: 'applayReason'
	    }, {
	        title: "订阅时间",
	        dataIndex: 'applayTime',
	        key: 'applayTime'
	    }, {
	        title: "联系电话",
	        dataIndex: 'telphone',
	        key: 'telphone'
	    }];
	    var config = [];
	    var config0 = {
	        "title": "元数据基本信息", //栏目标题
	        "column": 2, //  form显示列数，首先读取每个标签的设置column值，不存在才会读取总的column,如果不存在，默认展示一列
	        "labelCol": 8, // form标头name宽度
	        "wrapperCol": 16, //form显示框宽度
	        "showTitle": true, //是否展示栏目标题
	        "data": [{ "type": "text", "name": "标题", "field": "restitle", "defaultValue": msgDatas.resName ? msgDatas.resName : "" }, { "type": "text", "name": "摘要", "field": "abstracts", "defaultValue": metadataDetail.abstracts ? metadataDetail.abstracts : "" }, { "type": "text", "name": "关键字", "field": "keyword", "defaultValue": metadataDetail.keyword ? metadataDetail.keyword : "" }, { "type": "text", "name": "国家主题分类", "field": "subjectcarategory", "defaultValue": msgDatas.themeTypeName ? msgDatas.themeTypeName : "" }, { "type": "text", "name": "部门主题分类", "field": "departmentCategory", "defaultValue": msgDatas.departmentTypeName ? msgDatas.departmentTypeName : "" }, { "type": "text", "name": "资源类型", "field": "resourceType", "defaultValue": "API" }, { "type": "text", "name": "数据提供方单位", "field": "rporgname", "defaultValue": metadataDetail.rporgname ? metadataDetail.rporgname : "" }, { "type": "text", "name": "数据提供方地址", "field": "address", "defaultValue": metadataDetail.address ? metadataDetail.address : "" }]
	    };
	    var config1 = [{
	        "title": "输入参数配置", //栏目标题
	        "showTitle": true, //是否展示栏目标题
	        "data": function data() {
	            return _react2["default"].createElement(_table2["default"], { columns: srcscolumns, dataSource: requestParams, pagination: false });
	        }
	    }, {
	        "title": "输出参数配置", //栏目标题
	        "showTitle": true, //是否展示栏目标题
	        "data": function data() {
	            return _react2["default"].createElement(
	                'div',
	                null,
	                _react2["default"].createElement(_table2["default"], { columns: sccscolumns, dataSource: responseStruct, pagination: false })
	            );
	        }
	    }];
	    var config2 = [{
	        "title": "接口地址信息", //栏目标题
	        "column": 2,
	        "showTitle": true, //是否展示栏目标题
	        "data": [{ "name": "接口地址", "type": "text", col: "15", "field": "address", "defaultValue": jkdzxx.address ? jkdzxx.address : "" }, { "name": "服务类型", "type": "text", col: "9", "field": "apiType", "defaultValue": jkdzxx.apiType ? jkdzxx.apiType : "" }, { "name": "方法", "type": "text", col: "15", "field": "methods", "defaultValue": jkdzxx.methods ? jkdzxx.methods : "getdb", preRender: function preRender() {
	                return jkdzxx.apiType == 'rest' ? "hidden" : "";
	            } }]
	    }, {
	        "title": "API共享等级", //栏目标题
	        "showTitle": true, //是否展示栏目标题
	        "data": function data() {
	            return _react2["default"].createElement(
	                'div',
	                null,
	                _react2["default"].createElement(
	                    'div',
	                    null,
	                    'API\u5171\u4EAB\u7B49\u7EA7\u914D\u7F6E'
	                ),
	                _react2["default"].createElement(_table2["default"], { columns: apigxdjcolumns, dataSource: apiLevel, pagination: false })
	            );
	        }
	    }, {
	        "title": "资源申请发布信息", //栏目标题
	        "column": 2,
	        "showTitle": true, //是否展示栏目标题
	        "data": [{ "name": "发布原因", "type": "text", "field": "applyReason", "defaultValue": zyfbxx.applyReason ? zyfbxx.applyReason : "" }, { "name": "申请人", "type": "text", "field": "applyUser", "defaultValue": zyfbxx.applyUser ? zyfbxx.applyUser : "" }],
	        "buttonConfigs": {
	            "buttons": [{ "type": "button", "value": "返回", "field": "back", props: { type: "primary", "style": { "float": "right" } } }]
	        }
	    }, {
	        "title": "资源发布审核信息", //栏目标题
	        "column": 1, //  form显示列数，首先读取每个标签的设置column值，不存在才会读取总的column,如果不存在，默认展示一列
	        "labelCol": 8, // form标头name宽度
	        "wrapperCol": 16, //form显示框宽度
	        "showTitle": true, //是否展示栏目标题
	        "buttonConfigs": {
	            "onSubmitApi": { apiName: "fbshSyzySubmit", body: (0, _extends3["default"])({}, values) },
	            "getValue": { id: "aFBCD", index: showTitle == true ? 6 : 4 },
	            "buttons": [{ "type": "button", "value": "返回", mark: "fbshsyzyapi", "ignore": "ignore", "field": "back", props: { btnType: "primary", "style": { "float": "right" } } }, { "type": "button", "value": "确认", mark: "fbshsyzyapi", "ignore": "ignore", "field": "submit", props: { btnType: "primary", "style": { "float": "right" } } }]
	        },
	        "data": [{ "type": "select", "name": "审批结果", "field": "result", defaultValue: "0", "options": [{ "value": "0", "key": "通过" }, { "value": "-1", "key": "拒绝" }] }, { "type": "input", "inputType": "textarea", "name": "审批意见", "field": "reviewDesc", props: { rows: 4 } }]
	    }];
	    config.push((0, _extends3["default"])({}, config0));
	    if (showTitle) {
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	            for (var _iterator = (0, _getIterator3["default"])(config1), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var c = _step.value;

	                config.push(c);
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
	    var _iteratorNormalCompletion2 = true;
	    var _didIteratorError2 = false;
	    var _iteratorError2 = undefined;

	    try {
	        for (var _iterator2 = (0, _getIterator3["default"])(config2), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	            var _c = _step2.value;

	            config.push(_c);
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

	    callback({
	        "success": true,
	        "data": config
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