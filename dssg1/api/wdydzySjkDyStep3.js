webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(2246);

	var _modal = __webpack_require__(29);

	var _modal2 = _interopRequireDefault(_modal);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(10);

	var _history = __webpack_require__(32);

	var _history2 = _interopRequireDefault(_history);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("wdydzySjkDyStep3")(function (args, callback) {
	    var state = _global.Global.getState();
	    // //各种提示，如”应该从前一步开始的提示“
	    var lastStepState = state.dataList.wdydzySjkDyStep2 && state.dataList.wdydzySjkDyStep1 || _global.Global.getState().aiForm.wdydzySjkDyWQMOStep1;
	    if (!lastStepState) {
	        _modal2["default"].warning({
	            title: '提示',
	            content: '页面刷新，请重新选择资源进行订阅',
	            onOk: function onOk() {
	                /* */
	                setTimeout(function () {
	                    _global.Global.mark({ aiForm: {
	                            wdydzySjkDyStep3: null
	                        } });
	                    _history2["default"].push('/datalistV1/wdydzySjk/list/0/10');
	                }, 500);
	            }
	        });
	        return;
	    }

	    callback({
	        "success": true,
	        "data": {
	            "table": {
	                "primarykey": "id",
	                "clounms": [{
	                    "title": "数据源名称",
	                    "dataIndex": "name",
	                    "key": "name"
	                }, {
	                    "title": "ip地址",
	                    "dataIndex": "ip",
	                    "key": "ip"
	                }, {
	                    "title": "端口",
	                    "dataIndex": "port",
	                    "key": "port"
	                }, {
	                    "title": "数据源类型",
	                    "dataIndex": "dbType",
	                    "key": "dbType"
	                }],
	                "body": { apiName: 'wdydzySjkDyStep3Data' }
	            }
	        }
	    });
	});

/***/ }
]);