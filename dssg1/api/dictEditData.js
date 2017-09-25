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

	(0, _jsonp2["default"])("dictEditData")(function (args, callback) {
	    var target = args.target;
	    var state = _global.Global.getState();
	    var values = state.dataList.dictsInfo.detailMsgDataApi && state.dataList.dictsInfo.detailMsgDataApi.data ? state.dataList.dictsInfo.detailMsgDataApi.data : {};
	    var detailValue = [];
	    if (state.dataList.dictsInfo.detailMsgDataApi && state.dataList.dictsInfo.detailMsgDataApi.data) {
	        detailValue = values;
	    }
	    var name = detailValue.name ? detailValue.name : null;
	    callback({
	        "success": true,
	        "data": [{
	            "title": "",
	            "column": 1,
	            "labelCol": 7,
	            "wrapperCol": 15,
	            "data": [{ "type": "input", "name": "字典项", "field": "name", "defaultValue": detailValue.name ? detailValue.name : "",
	                "validate": [{ "required": true, "message": '不能为空 !' }, {
	                    validator: function validator(rule, value, callback) {
	                        if (value.length > 20) {
	                            callback('请限制输入在20以内！');
	                        } else {
	                            if (name && value == name) {
	                                callback();
	                            } else if (value && value != "") {
	                                _global.Global.requestApi({ apiName: "checkCodeOrName", body: { name: value }, next: function next(action) {
	                                        if (action.data == false) {
	                                            callback('名称已使用，请修改！');
	                                        } else {
	                                            callback();
	                                        }
	                                    } }, {}, {});
	                            } else {
	                                callback();
	                            }
	                        }
	                    }
	                }] }, { "type": "input", "name": "备注", props: { type: "textarea", rows: 3 }, "field": "description", "defaultValue": detailValue.description ? detailValue.description : "" }, { "type": "input", "name": "", "field": "level", "defaultValue": detailValue.level ? detailValue.level : 1, props: { style: { display: "none" } } }]
	        }]
	    });
	});

/***/ }
]);