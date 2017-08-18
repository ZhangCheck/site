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

	(0, _jsonp2["default"])("dyspApiStep5")(function (args, callback) {
	    var states = _global.Global.getState();

	    var resSubscribeDetail = states.dataList.zydysplb && states.dataList.zydysplb.detailMsgDataApi && states.dataList.zydysplb.detailMsgDataApi.detailSubscribeDataApi && states.dataList.zydysplb.detailMsgDataApi.detailSubscribeDataApi.data ? states.dataList.zydysplb.detailMsgDataApi.detailSubscribeDataApi.data : {};

	    var detailMsg = states.dataList.zydysplb && states.dataList.zydysplb.detailMsgDataApi && states.dataList.zydysplb.detailMsgDataApi.data ? states.dataList.zydysplb.detailMsgDataApi.data : {};
	    //api资源来源
	    var apiSource = detailMsg.apiType;
	    callback({
	        "success": true,
	        "data": [{
	            "title": "服务控制策略",
	            "column": 2,
	            "showTitle": false,
	            "data": [{ "name": "请求时段", "type": "text", "field": "requestTime", "defaultValue": resSubscribeDetail.requestTime ? resSubscribeDetail.requestTime : "" }, { "name": "每日最大请求次数", "type": "input", "field": "requestNumber", "validate": [{
	                    "required": true, "message": '不能为空!'
	                }, {
	                    validator: function validator(rule, value, callback) {
	                        if (!/^[1-9][0-9]*$/.test(value)) {
	                            callback('请填写数字！');
	                        } else {
	                            callback();
	                        }
	                    }
	                }]
	            }, { "name": "结果最大返回条数", "type": "input", "field": "resultNumber",
	                "validate": [{
	                    "required": true, "message": '不能为空!'
	                }, {
	                    validator: function validator(rule, value, callback) {
	                        if (!/^[1-9][0-9]*$/.test(value)) {
	                            callback('请填写数字！');
	                        } else {
	                            callback();
	                        }
	                    }
	                }],
	                preRender: function preRender() {
	                    return apiSource == '3d' ? "hidden" : "";
	                }
	            }]
	        }]
	    });
	});

/***/ }
]);