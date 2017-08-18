webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _AiFormTable = __webpack_require__(310);

	var _AiFormTable2 = _interopRequireDefault(_AiFormTable);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(10);

	var _history = __webpack_require__(32);

	var _history2 = _interopRequireDefault(_history);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("wfbdzyApiDsfjkPzdyqxStep2To3")(function (args, callback) {
	    var target = args.target;
	    var states = _global.Global.getState();

	    var detailMsg = states.aiForm.wfbdzyApiDsfjkTxysjStep1 && states.aiForm.wfbdzyApiDsfjkTxysjStep1.detailMsgDataApi && states.aiForm.wfbdzyApiDsfjkTxysjStep1.detailMsgDataApi.data ? states.aiForm.wfbdzyApiDsfjkTxysjStep1.detailMsgDataApi.data : {};
	    var columns = [{
	        "title": '',
	        "dataIndex": 'resRender',
	        "key": 'resRender',
	        "render": function render() {
	            return _react2["default"].createElement(
	                'div',
	                { style: { width: 200, marginLeft: "20%" } },
	                "资源有效期"
	            );
	        }
	    }, {
	        "title": '开始时间',
	        "dataIndex": 'validBeginTime',
	        "key": 'validBeginTime',
	        "render": { "type": "datePicker", field: "validBeginTime", props: { style: { width: 200, left: "50%", marginTop: "4%" } } }
	    }, {
	        "title": '结束时间',
	        "dataIndex": 'validEndTime',
	        "key": 'validEndTime',
	        "render": { "type": "datePicker", field: "validEndTime", props: { style: { width: 200, left: "50%", marginTop: "4%" }, disabledDate: function disabledDate(current) {
	                    return current && current.valueOf() < Date.now() - 86400; //减去一天
	                } } }
	    }];
	    var config = {
	        "success": true,
	        "data": [{
	            "title": "资源有效期",
	            "column": 1,
	            "showTitle": true,
	            "titleIcon": "copy",
	            "data": _react2["default"].createElement(_AiFormTable2["default"], { config: {
	                    "columns": columns, //表格标头数据
	                    "dataSource": [{
	                        "resRender": "资源有效期",
	                        "validBeginTime": detailMsg.validBeginTime ? detailMsg.validBeginTime : "",
	                        "validEndTime": detailMsg.validEndTime ? detailMsg.validEndTime : ""
	                    }] //表格数据
	                }, id: 'dsfStep2To3', form: target.props.form })

	        }]
	    };
	    callback(config);
	});

/***/ }
]);