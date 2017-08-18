webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("dwglEditLocalData")(function (args, callback) {
	    var target = args.target;
	    var detailValue = [];
	    var values = Global.getState().dataList.dwglLocal.detailMsgDataApi && Global.getState().dataList.dwglLocal.detailMsgDataApi.data ? Global.getState().dataList.dwglLocal.detailMsgDataApi.data : {};
	    if (args.type == "add") {
	        detailValue.pid = values.id;
	        detailValue.level = parseInt(values.level) + 1;
	    } else {
	        detailValue = values;
	    }
	    if (detailValue.id) {
	        inputType = "text";
	        name = detailValue.name;
	        code = detailValue.code;
	    }
	    var title = detailValue.id ? "编辑单位" : "新增单位";
	    callback({
	        "success": true,
	        "data": [{
	            "title": title,
	            "column": 1,
	            "showTitle": true,
	            "buttonConfigs": {
	                "buttons": [{ "type": "button", "value": "返回", mark: "dwglLocal", "field": "back", props: { btnType: "primary", "style": { "float": "right" } } }, { "type": "button", "value": "确定", mark: "dwglLocal", "field": "submit", props: { "style": { "float": "right" }, htmlType: "submit" } }]
	            },
	            "data": [{ "type": "input", "name": "单位名称", "field": "name", "defaultValue": detailValue.name ? detailValue.name : "",
	                "validate": [{ "required": true, "message": '不能为空 !' }, {
	                    validator: function validator(rule, value, callback) {
	                        if (value && value != "") {
	                            if (value.length > 50) {
	                                callback('请限制输入在50以内！');
	                            } else {
	                                if (name && value == name) {
	                                    callback();
	                                } else {
	                                    Global.requestApi({
	                                        apiName: "checkComCodeAndName",
	                                        body: { type: "1", nameOrCode: value },
	                                        next: function next(action) {
	                                            if (action.data == false) {
	                                                callback('名称已使用，请修改！');
	                                            } else {
	                                                callback();
	                                            }
	                                        }
	                                    }, {}, {});
	                                }
	                            }
	                        } else {
	                            callback();
	                        }
	                    }
	                }] }, { "type": inputType, "name": "单位编码", "field": "code", "defaultValue": detailValue.code ? detailValue.code : "",
	                "validate": [{ "required": true, "message": '不能为空 !' }, {
	                    validator: function validator(rule, value, callback) {
	                        if (value && value != "") {
	                            if (value.length > 50) {
	                                callback('请限制输入在50以内！');
	                            } else {
	                                if (code && value == code) {
	                                    callback();
	                                } else {
	                                    Global.requestApi({
	                                        apiName: "checkComCodeAndName",
	                                        body: { type: "2", nameOrCode: value },
	                                        next: function next(action) {
	                                            if (action.data == false) {
	                                                callback('编号已使用，请修改！');
	                                            } else {
	                                                callback();
	                                            }
	                                        }
	                                    }, {}, {});
	                                }
	                            }
	                        } else {
	                            callback();
	                        }
	                    }
	                }] }, { "type": "input", "name": "备注", "field": "description", "defaultValue": detailValue.description ? detailValue.description : "" }, { "type": "input", "name": "", "field": "id", "defaultValue": detailValue.id ? detailValue.id : "", props: { style: { display: "none" } } }, { "type": "input", "name": "", "field": "pid", "defaultValue": detailValue.pid ? detailValue.pid : "0", props: { style: { display: "none" } } }, { "type": "input", "name": "", "field": "level", "defaultValue": detailValue.level ? detailValue.level : "1", props: { style: { display: "none" } } }, { "type": "input", "name": "", "field": "idex", "defaultValue": detailValue.idex ? detailValue.idex : "0", props: { style: { display: "none" } } }]
	        }]
	    });
	});

/***/ }
]);