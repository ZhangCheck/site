webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("metadataCx")(function (args, callback) {
	    var states = _global.Global.getState();
	    var target = args.target;
	    var getFieldValue = target.props.form.getFieldValue;
	    var detailValue = states.dataList.metadata.detailMsgDataApi ? states.dataList.metadata.detailMsgDataApi.data : {};
	    var userName = states.framework.loginApi.data.loginUserProfileDTO.loginName;
	    var values = {};
	    values = { id: detailValue.id };
	    var dataName = "";
	    if (detailValue.dataType == "12") {
	        dataName = "文本";
	    } else if (detailValue.dataType == "3") {
	        dataName = "数字";
	    } else if (detailValue.dataType == "91") {
	        dataName = "日期";
	    } else if (detailValue.dataType == "93") {
	        dataName = "时间";
	    } else if (detailValue.dataType == "4") {
	        dataName = "整型";
	    } else if (detailValue.dataType == "2005") {
	        dataName = "字符大型对象";
	    } else if (detailValue.dataType == "2004") {
	        dataName = "二进制大型对象";
	    }
	    callback({
	        "success": true,
	        "data": [{
	            "title": "数据元信息",
	            "column": 2,
	            "showTitle": true,
	            "data": [{ "type": "text", "name": "数据元名称", "field": "name", defaultValue: detailValue.name }, { "type": "text", "name": "数据元英文名称", "field": "englishName", defaultValue: detailValue.englishName }, { "type": "text", "name": "数据元编码", "field": "code", defaultValue: detailValue.code }, { "type": "text", "name": "数据元分类", "field": "classifyName", defaultValue: detailValue.classifyName }, { "type": "text", "name": "数据类型", "field": "dataType", defaultValue: dataName }, { "type": "text", "name": "数据长度", defaultValue: detailValue.dataLength, "field": "dataLength" }, { "type": "text", "name": "是否字典项", "field": "isDictionary", defaultValue: detailValue.isDictionary == "1" ? "否" : "是" }, { "type": "text", "name": "数据字典", "field": "dictsInfo", defaultValue: detailValue.dictionaryName ? detailValue.dictionaryName : "", preRender: function preRender() {
	                    return detailValue.isDictionary == '1' ? "hidden" : "";
	                } }, { "type": "text", "name": "值域", "field": "valueScope", defaultValue: detailValue.valueScope ? detailValue.valueScope : "" }, { "type": "text", "name": "提交单位", "field": "submitCompany", defaultValue: detailValue.submitCompany }]
	        }, {
	            "buttonConfigs": {
	                "onSubmitApi": { apiName: "metadataCxSub", body: (0, _extends3["default"])({}, values) },
	                "getValue": { id: "aFBCD", index: 1 },
	                "buttons": [{ "type": "button", "value": "取消", "ignore": "ignore", props: { "style": { "float": "right" } } }, { "type": "button", "value": "撤销", "ignore": "ignore", field: "submit", props: { type: "primary", "style": { "float": "right" } } }]
	            },
	            "title": "发布撤消信息",
	            "column": 1,
	            "showTitle": true,
	            "data": [{ "name": "撤销原因", "type": "input", props: { type: "textarea", rows: 3 }, "field": "cancelReason" }]
	        }]
	    });
	});

/***/ }
]);