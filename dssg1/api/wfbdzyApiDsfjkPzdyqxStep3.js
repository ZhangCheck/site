webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _AiLabel = __webpack_require__(311);

	var _AiLabel2 = _interopRequireDefault(_AiLabel);

	var _AiFormTable = __webpack_require__(310);

	var _AiFormTable2 = _interopRequireDefault(_AiFormTable);

	var _aiFormTable = __webpack_require__(150);

	var _global = __webpack_require__(10);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _dataFormat = __webpack_require__(64);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("wfbdzyApiDsfjkPzdyqxStep3")(function (args, callback) {
	    var states = _global.Global.getState();
	    var detailMsg = states.aiForm.wfbdzyApiDsfjkTxysjStep1 && states.aiForm.wfbdzyApiDsfjkTxysjStep1.detailMsgDataApi && states.aiForm.wfbdzyApiDsfjkTxysjStep1.detailMsgDataApi.data ? states.aiForm.wfbdzyApiDsfjkTxysjStep1.detailMsgDataApi.data : {};

	    var target = args.target;
	    var jkdzxx = states.aiForm.wfbdzyApiDsfjkTxurlStep2.values;
	    _global.Global.requestApi({ "apiName": "getPublishURL", body: { url: jkdzxx.apiUrl, realmName: jkdzxx.realmName ? jkdzxx.realmName : "", serviceType: jkdzxx.serviceType, idThird: true }, next: function next(action) {
	            _global.Global.mark({ aiForm: { wfbdzyApiDsfjkTxurlStep2: { url: null } } });
	            _global.Global.mark({ aiForm: { wfbdzyApiDsfjkTxurlStep2: { url: action } } });
	        } }, ["requestWsdl4jParse", "receiveWsdl4jParse", "failedWsdl4jParse"], {});
	    var columns = [{
	        "title": 'API等级',
	        "dataIndex": 'resLevel',
	        "key": 'resLevel',
	        "render": { "type": "select", field: "resLevel", options: [{ key: "一级", value: "1" }, { key: "二级", value: "2" }, { key: "三级", value: "3" }], props: { style: { width: 200 } } }
	    }];
	    callback({
	        "success": true,
	        "data": [{
	            "data": _react2["default"].createElement(_AiFormTable2["default"], { config: {
	                    "columns": columns, //表格标头数据
	                    "dataSource": [{
	                        "resLevel": detailMsg.resLevel ? detailMsg.resLevel : "1"
	                    }] //表格数据
	                }, id: 'dsfStep3', form: target.props.form })

	        }]
	    });
	}); /* author by 田贵宾
	    import './other.html';
	    import React from 'react';
	    import ReactDOM from 'react-dom'; */

/***/ }
]);