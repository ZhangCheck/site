webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _dataFormat = __webpack_require__(64);

	var _global = __webpack_require__(10);

	var _history = __webpack_require__(32);

	var _history2 = _interopRequireDefault(_history);

	var _StepContainerV = __webpack_require__(287);

	var _StepContainerV2 = _interopRequireDefault(_StepContainerV);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("jsglPzcd")(function (args, callback) {
	    var value = ['dbb548a725294751ae0cafe36e8c0afe'];
	    var next = function next(action) {
	        callback({
	            "success": true,
	            "data": [{
	                "title": "",
	                "column": 1,
	                "labelCol": 8,
	                "wrapperCol": 16,
	                "showTitle": false,
	                "buttonConfigs": {},
	                "data": [{
	                    "title": "输出参数配置",
	                    "showTitle": true,
	                    "data": _global.Global.requestApi({

	                        apiName: 'findSysMenusAllList',
	                        body: {
	                            id: _global.Global.getState().dataList.jsgl.selectedRows[0]
	                        },
	                        next: function next(action) {
	                            _react2["default"].createElement(TreeSelected, { treeData: action.treeData.data });
	                        }
	                    }, ['requestfindSysMenusAllList', 'receievefindSysMenusAllList', 'failedfindSysMenusAllList'], { aiForm: {
	                            jsgl: {
	                                jsglPzcd: {
	                                    treeData: null
	                                }
	                            }
	                        } })
	                }, { "name": "角色名", "type": "input", "field": "roleName", "defaultValue": 'aaaaa' }, { "value": function value(config) {
	                        return _global.Global.requestApi({
	                            apiName: 'findSysMenusAllList',
	                            body: {
	                                id: _global.Global.getState().dataList.jsgl.selectedRows[0]
	                            },
	                            next: function next(action) {
	                                return _react2["default"].createElement(TreeSelected, { treeData: action.data });
	                            }
	                        }, ['requestfindSysMenusAllList', 'receievefindSysMenusAllList', 'failedfindSysMenusAllList'], { aiForm: {
	                                jsgl: {
	                                    jsglPzcd: {
	                                        treeData: null
	                                    }
	                                }
	                            } });
	                    }
	                }, { "type": "input", "field": "roleid", "defaultValue": '' }]
	            }]
	        });
	    };

	    _global.Global.requestApi({
	        apiName: 'findSysRolesByIdInfo',
	        body: {
	            id: _global.Global.getState().dataList.jsgl.selectedRows[0]
	        },
	        next: next
	    }, ['requestfindSysRolesByIdInfo', 'receievefindSysRolesByIdInfo', 'failedfindSysRolesByIdInfo'], {
	        aiForm: {
	            jsglPzcd: {
	                defaultTreeData: null
	            }
	        }
	    });
	});

/***/ }
]);