webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _getIterator2 = __webpack_require__(37);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _dataFormat = __webpack_require__(64);

	var _global = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("dyspWjStep3")(function (args, callback) {
	    var states = _global.Global.getState();

	    var detailMsg = states.dataList.zydysplb && states.dataList.zydysplb.detailMsgDataApi && states.dataList.zydysplb.detailMsgDataApi.data ? states.dataList.zydysplb.detailMsgDataApi.data : {};

	    var subscribeId = states.dataList.zydysplb.selectedRowKeys[0];
	    var resourceId = detailMsg.id;
	    var resSubscribeDetail = states.dataList.zydysplb.detailMsgDataApi.detailSubscribeDataApi.data ? states.dataList.zydysplb.detailMsgDataApi.detailSubscribeDataApi.data : {};
	    var fileJson = (0, _dataFormat.jsonStrToArray)(resSubscribeDetail.subDataJson ? resSubscribeDetail.subDataJson : []);
	    var checkJson = states.defaultSelectTableRows.dyspWjStep2SelectedTable.keys;
	    var tableJson = [];
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	        for (var _iterator = (0, _getIterator3["default"])(fileJson), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var json = _step.value;
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;

	            try {
	                for (var _iterator2 = (0, _getIterator3["default"])(checkJson), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var id = _step2.value;

	                    if (json.id == id) {
	                        tableJson.push(json);
	                    }
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
	                        _iterator2["return"]();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }
	        }
	    } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion && _iterator["return"]) {
	                _iterator["return"]();
	            }
	        } finally {
	            if (_didIteratorError) {
	                throw _iteratorError;
	            }
	        }
	    }

	    ;
	    var values = { resourceId: resourceId, subscribeId: subscribeId, resType: detailMsg.resType, approvalDataJson: tableJson };

	    _global.Global.mark({ aiForm: { dyspWjStep3: { values: values } } });
	    callback({
	        "success": true,
	        "data": [{
	            "title": "审批意见",
	            "column": 2,
	            "showTitle": false,
	            "data": [{ "name": "审批结果", "type": "select", "field": "approvalResult", options: [{ key: "同意订阅", value: "0" }, { key: "拒绝订阅", value: "-1" }], "defaultValue": "0" }, { "name": "审批意见", "type": "input", "field": "approvalOpinion" }]
	        }]
	    });
	});

/***/ }
]);