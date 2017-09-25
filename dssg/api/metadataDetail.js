(function(){ var runed=0,temp,timer,time;webpackJsonp([3],[
/* 0 */
/***/ temp = function(module, exports, __webpack_require__) {runed=true;

	'use strict';

	var _css = __webpack_require__(73);

	var _table = __webpack_require__(69);

	var _table2 = _interopRequireDefault(_table);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(234);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(15);

	var _dataFormat = __webpack_require__(172);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("metadataDetail")(function (args, callback) {
	    var states = _global.Global.getState();
	    var target = args.target;
	    var getFieldValue = target.props.form.getFieldValue;
	    var detailValue = states.dataList.metadata.detailMsgDataApi ? states.dataList.metadata.detailMsgDataApi.data : {};
	    var dataSource = detailValue.beforeVersionJsonData ? (0, _dataFormat.jsonStrToArray)(detailValue.beforeVersionJsonData) : [];
	    var metadataCloumns = [{
	        "title": "数据元名称",
	        "dataIndex": "metaName",
	        "key": "metaName"
	    }, {
	        "title": "数据元英文名称",
	        "dataIndex": "metaEname",
	        "key": "metaEname"
	    }, {
	        "title": "数据元编码",
	        "dataIndex": "metaCode",
	        "key": "metaCode"
	    }, {
	        "title": "数据元分类",
	        "dataIndex": "metaSortName",
	        "key": "metaSortName"
	    }, {
	        "title": "数据类型",
	        "dataIndex": "metaType",
	        "key": "metaType",
	        "render": function render(text, record, index) {
	            switch (text) {
	                case "12":
	                    return "文本";
	                case "3":
	                    return "日期";
	                case "91":
	                    return "数据";
	                case "93":
	                    return "时间";
	                case "2005":
	                    return "字符大型对象";
	                case "2004":
	                    return "二进制大型对象";
	            }
	        }
	    }, {
	        "title": "数据长度",
	        "dataIndex": "metaLength",
	        "key": "metaLength"
	    }, {
	        "title": "版本号",
	        "dataIndex": "version",
	        "key": "version"
	    }, {
	        "title": "提交单位",
	        "dataIndex": "submitComp",
	        "key": "submitComp"
	    }, {
	        "title": "提交人",
	        "dataIndex": "submitPeople",
	        "key": "submitPeople"
	    }, {
	        "title": "发布时间",
	        "dataIndex": "addTime",
	        "key": "addTime"
	    }];
	    callback({
	        "success": true,
	        "data": [{
	            "title": "编辑数据元",
	            "column": 2,
	            "showTitle": true,
	            "data": [{ "type": "text", "name": "数据元名称", "field": "metaName", defaultValue: detailValue.metaName }, { "type": "text", "name": "数据元英文名称", "field": "metaEname", defaultValue: detailValue.metaEname }, { "type": "text", "name": "数据元编码", "field": "metaCode", defaultValue: detailValue.metaCode }, { "type": "text", "name": "数据元分类", "field": "metaSortName", defaultValue: detailValue.metaSortName }, { "type": "text", "name": "数据类型", "field": "metaType", defaultValue: detailValue.metaType }, { "type": "text", "name": "数据长度", defaultValue: detailValue.metaLength, "field": "metaLength" }, { "type": "text", "name": "是否字典项", "field": "isDicts", defaultValue: detailValue.isDicts ? detailValue.isDicts : "0" }, { "type": "text", "name": "数据字典", "field": "dictsInfo", defaultValue: "1", preRender: function preRender() {
	                    return getFieldValue('isDicts') == '0' ? "hidden" : "";
	                } }, { "type": "text", "name": "值域", "field": "values", defaultValue: detailValue.values ? detailValue.values : "" }, { "type": "text", "name": "提交单位", "field": "submitComp", defaultValue: detailValue.submitComp }]
	        }, {
	            "data": _react2["default"].createElement(_table2["default"], { columns: metadataCloumns, dataSource: dataSource, key: 'metadataAdd', pagination: false })

	        }, {
	            "buttonConfigs": {
	                "buttons": [{ "type": "button", "value": "返回", mark: "metadata", "field": "back", props: { btnType: "primary", "style": { "float": "right" } } }]
	            },
	            "title": "发布撤消信息",
	            "column": 2,
	            "showTitle": true,
	            "data": [{ "type": "text", "name": "发布时间", "field": "metaName", defaultValue: detailValue.metaName }, { "type": "text", "name": "发布人", "field": "metaName", defaultValue: detailValue.metaName }, { "type": "text", "name": "撤销时间", "field": "metaName", defaultValue: detailValue.metaName }, { "type": "text", "name": "撤销人", "field": "metaName", defaultValue: detailValue.metaName }, { "type": "text", "name": "撤销原因", "field": "metaName", defaultValue: detailValue.metaName }]
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