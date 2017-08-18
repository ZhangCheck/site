webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("metadataDetail")(function (args, callback) {
	    //拿到树
	    var states = _global.Global.getState();
	    //定义select框中的选项变量option
	    var options = [];
	    //拿到树中的整个data对象
	    var detailValue = states.dataList.metadata && states.dataList.metadata.detailMsgDataApi && states.dataList.metadata.detailMsgDataApi.data ? states.dataList.metadata.detailMsgDataApi.data : {};
	    //取出data对象中的版本号，并放入到option中
	    options.push(detailValue.versionNumber);
	    //取出data对象中的List
	    var dataSource = detailValue.centerDataElementDTOList ? detailValue.centerDataElementDTOList : [];
	    //如果List不为空的话，遍历List，将其中的版本号依次放到option中
	    dataSource.length > 0 && dataSource.map(function (item, i) {
	        options.push(item.versionNumber);
	    });

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

	    var showValue = void 0;
	    var fields = [{ "type": "text", "name": "数据元名称", "field": "name", defaultValue: detailValue.name }, { "type": "text", "name": "数据元英文名称", "field": "englishName", defaultValue: detailValue.englishName }, { "type": "text", "name": "数据元编码", "field": "code", defaultValue: detailValue.code }, { "type": "text", "name": "数据元分类", "field": "classifyName", defaultValue: detailValue.classifyName }, { "type": "text", "name": "数据类型", "field": "dataType", defaultValue: dataName }, { "type": "text", "name": "数据长度", defaultValue: detailValue.dataLength, "field": "dataLength", preRender: function preRender() {
	            // return detailValue.dataType=="91"?"hidden":"";
	            return ["91", "93", "日期", "时间"].indexOf(detailValue.dataType) < 0 ? "" : "hidden";
	        } }, { "type": "text", "name": "是否字典项", "field": "isDictionary", defaultValue: detailValue.isDictionary == "1" ? "否" : "是" }, { "type": "text", "name": "用户字典", "field": "dictsInfo", defaultValue: detailValue.dictionaryName ? detailValue.dictionaryName : "", preRender: function preRender() {
	            // return detailValue.isDictionary=='1'?"hidden":"";
	            return ["1", "否"].indexOf(detailValue.isDictionary) < 0 ? "" : "hidden";
	        } }, { "type": "text", "name": "值域", "field": "valueScope", defaultValue: detailValue.valueScope ? detailValue.valueScope : "" }, { "type": "text", "name": "提交单位", "field": "submitCompany", defaultValue: detailValue.submitCompany }, { "type": "text", "name": "提交人", "field": "submitUser", defaultValue: detailValue.submitUser }, { "type": "text", "name": "版本日期", "field": "versionDate", defaultValue: detailValue.versionDate }, { "type": "text", "name": "版本号", "field": "versionNumber", defaultValue: detailValue.versionNumber }, { "type": "text", "name": "修改日期", "field": "updateDate", defaultValue: detailValue.updateDate }];

	    callback({
	        "success": true,
	        "data": [{
	            "title": "",
	            "column": 1,
	            "showTitle": false,
	            "data": [{ "name": "版本号", "type": "select", "field": "version", "defaultValue": options[0], "options": options, "validate": [], "placeholder": "请选择...", 'props': { onSelect: function onSelect(value) {
	                        var version = value; // Global.getState().aiForm.aFBCD.form.getFieldValue('version');
	                        // let columns = Global.getState().aiForm.aFBCD.config.data;
	                        var changed = {};
	                        for (var i = 0; i < dataSource.length; i++) {
	                            if (version == dataSource[i].versionNumber) {
	                                (function () {
	                                    var versionData = dataSource[i];
	                                    fields.forEach(function (item, i) {
	                                        if (item.field == "isDictionary") {
	                                            changed[item.field] = versionData[item.field] == "1" ? "否" : "是";
	                                        } else {
	                                            changed[item.field] = versionData[item.field] || '';
	                                        }
	                                        if (item.field == "dataType") {
	                                            if (versionData[item.field] == "12") {
	                                                changed[item.field] = "文本";
	                                            } else if (versionData[item.field] == "3") {
	                                                changed[item.field] = "数字";
	                                            } else if (versionData[item.field] == "91") {
	                                                changed[item.field] = "日期";
	                                            } else if (versionData[item.field] == "93") {
	                                                changed[item.field] = "时间";
	                                            } else if (versionData[item.field] == "4") {
	                                                changed[item.field] = "整型";
	                                            } else if (versionData[item.field] == "2005") {
	                                                changed[item.field] = "字符大型对象";
	                                            } else if (versionData[item.field] == "2004") {
	                                                changed[item.field] = "二进制大型对象";
	                                            }
	                                        }
	                                    });
	                                    // if(changed.isDictionary=='0'){
	                                    //     changed.isDictionary='是';
	                                    // }else {
	                                    //     changed.isDictionary='否';
	                                    // }
	                                })();
	                            }
	                        }
	                        // if(version=='1.0'){
	                        //     changed={
	                        //         name:'newValue2'
	                        //     }
	                        // }else{
	                        //     changed={
	                        //         name:'newValue3'
	                        //
	                        //     }
	                        // }

	                        detailValue = changed;
	                        _global.Global.getState().aiForm.getMetadataDetail.form.setFieldsValue(changed);
	                    } } }]
	        }, {
	            "title": "数据元信息",
	            "column": 2,
	            "showTitle": true,
	            "buttonConfigs": {
	                "buttons": [{ "type": "button", "value": "返回", mark: "metadata", "field": "back", props: { btnType: "primary", "style": { "float": "right" } } }]
	            },
	            "data": fields
	        }]
	    });
	});

/***/ }
]);