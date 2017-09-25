(function(){ var runed=0,temp,timer,time;webpackJsonp([3],[
/* 0 */
/***/ temp = function(module, exports, __webpack_require__) {runed=true;

	'use strict';

	var _getIterator2 = __webpack_require__(48);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _css = __webpack_require__(73);

	var _table = __webpack_require__(69);

	var _table2 = _interopRequireDefault(_table);

	var _css2 = __webpack_require__(63);

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

	var _dataFormat = __webpack_require__(172);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var FormItem = _form2["default"].Item;

	(0, _jsonp2["default"])("fbshapizyck")(function (args, callback) {
	    var states = _global.Global.getState();
	    var values = states.dataList.fbshsyzyapi.detailMsgDataApi && states.dataList.fbshsyzyapi.detailMsgDataApi.data ? states.dataList.fbshsyzyapi.detailMsgDataApi.data : {};
	    var metadataDetail = values.metadataDTO ? values.metadataDTO : {};
	    var zyfbxx = values.processRecordDTO ? values.processRecordDTO : {};
	    var jkdzxx = values.apiDescription ? values.apiDescription : {};

	    var resLevel = values && values.resLevel ? values.resLevel : "";
	    var showTitle = values.apiSource && values.apiSource == "3d" ? false : true;
	    var requestParams = void 0;
	    var responseStruct = void 0;
	    if (showTitle) {
	        requestParams = values && values.requestParams ? (0, _dataFormat.jsonStrToArray)(values.requestParams) : [];
	        responseStruct = values && values.responseStruct ? (0, _dataFormat.jsonStrToArray)(values.responseStruct) : [];
	    }
	    var apiLevel = [];
	    if (resLevel != "") {
	        apiLevel.push({ resLevel: resLevel });
	    }

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

	    var config = [];
	    var config0 = {
	        "title": "元数据基本信息", //栏目标题
	        "column": 2, //  form显示列数，首先读取每个标签的设置column值，不存在才会读取总的column,如果不存在，默认展示一列
	        "labelCol": 8, // form标头name宽度
	        "wrapperCol": 16, //form显示框宽度
	        "showTitle": true, //是否展示栏目标题
	        "data": [{ "type": "text", "name": "标题", "field": "restitle", "defaultValue": values.resName ? values.resName : "" }, { "type": "text", "name": "摘要", "field": "abstracts", "defaultValue": metadataDetail.abstracts ? metadataDetail.abstracts : "" }, { "type": "text", "name": "关键字", "field": "keyword", "defaultValue": metadataDetail.keyword ? metadataDetail.keyword : "" }, { "type": "text", "name": "国家主题分类", "field": "subjectcarategory", "defaultValue": values.themeTypeName ? values.themeTypeName : "" }, { "type": "text", "name": "部门主题分类", "field": "departmentCategory", "defaultValue": values.departmentTypeName ? values.departmentTypeName : "" }, { "type": "text", "name": "资源类型", "field": "resourceType", "defaultValue": "API" }, { "type": "text", "name": "数据提供方单位", "field": "rporgname", "defaultValue": metadataDetail.rporgname ? metadataDetail.rporgname : "" }, { "type": "text", "name": "数据提供方地址", "field": "address", "defaultValue": metadataDetail.address ? metadataDetail.address : "" }]
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
	        "data": [{ "name": "发布原因", "type": "text", mark: "fbshsyzyapi", "field": "applyReason", "defaultValue": zyfbxx.applyReason ? zyfbxx.applyReason : "" }, { "name": "申请人", "type": "text", mark: "fbshsyzyapi", "field": "applyUser", "defaultValue": zyfbxx.applyUser ? zyfbxx.applyUser : "" }],
	        "buttonConfigs": {
	            "buttons": [{ "type": "button", "value": "返回", "field": "back", props: { type: "primary", "style": { "float": "right" } } }]
	        }
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