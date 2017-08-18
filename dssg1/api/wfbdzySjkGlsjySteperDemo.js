webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(26);

	var _button = __webpack_require__(23);

	var _button2 = _interopRequireDefault(_button);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _ConnectDatasource = __webpack_require__(217);

	var _ConnectDatasource2 = _interopRequireDefault(_ConnectDatasource);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("wfbdzySjkGlsjySteperDemo")(function (args, callback) {
	    callback({
	        "success": true,
	        "data": {
	            "saveDataApi": {
	                "apiName": "wfbdzySjkGlsjySaveAllData"
	            },
	            "steps": [{
	                "type": "datalist",
	                "configStepApi": "wfbdzySjkGlsjyStep1",
	                "number": "1",
	                "name": "选择数据源",
	                "id": "wfbdzySjkGlsjyStep1",
	                "footer": [function () {
	                    return _react2["default"].createElement(
	                        _button2["default"],
	                        null,
	                        '\u6D4B\u8BD5\u8FDE\u63A5'
	                    );
	                }, "next", "cancel"]
	            }, {
	                "type": _react2["default"].createElement(_ConnectDatasource2["default"], { id: 'connectDataSourceDemo', configs: { apiName: "getDataItemContent" } }),
	                "configStepApi": "wfbdzySjkGlsjyStep2",
	                "number": "2",
	                "name": "关联数据表",
	                "id": "wfbdzySjkGlsjyStep2"
	            }, {
	                "type": "datalist",
	                "configStepApi": "wfbdzySjkGlsjyStep3",
	                "number": "3",
	                "name": "数据预览",
	                "id": "wfbdzySjkGlsjyStep3"
	            }]
	        }
	    });
	}); /**
	     * Created by liy on 2016/12/16 0019.
	     */

/***/ }
]);