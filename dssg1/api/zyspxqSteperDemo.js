webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(54);

	var _form = __webpack_require__(53);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _ConnectDatasource = __webpack_require__(217);

	var _ConnectDatasource2 = _interopRequireDefault(_ConnectDatasource);

	var _global = __webpack_require__(10);

	var _interfaces = __webpack_require__(35);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var FormItem = _form2["default"].Item; /**
	                                     * 资源订阅审批详情分步
	                                     */


	(0, _jsonp2["default"])("zyspxqSteperDemo")(function (args, callback) {

	    var glState = _global.Global.getState();
	    var zydysplb = glState.dataList && glState.dataList.zydysplb && glState.dataList.zydysplb.detailMsgDataApi && glState.dataList.zydysplb.detailMsgDataApi.data.length > 0 ? glState.dataList.zydysplb.detailMsgDataApi.data[0] : {};
	    var spjg = zydysplb.state;
	    if (spjg == "3") {
	        spjg = "审核拒绝";
	    } else if (spjg == "2") {
	        spjg = "完成订阅";
	    } else {
	        spjg = "";
	    }

	    callback({
	        "success": true,
	        "data": {
	            "showFooter": false,
	            "steps": [{
	                "type": "aiForm",
	                "configStepApi": "zyspxqStepe1",
	                "number": "1",
	                "name": "申请订阅",
	                "id": "zyspxqStepe1",
	                "footerHidden": true
	            }, {
	                "type": "aiForm",
	                "configStepApi": "zyspxqStepe1",
	                "number": "2",
	                "name": "订阅审批",
	                "id": "zyspxqStepe1",
	                "footerHidden": true
	            }, {
	                "type": "aiForm",
	                "configStepApi": "zyspxqStepe1",
	                "number": "3",
	                "name": spjg ? spjg : "完成订阅",
	                "id": "zyspxqStepe1",
	                "footerHidden": true
	            }]
	        }
	    });
	});

/***/ }
]);