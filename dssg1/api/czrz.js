webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _Utils = __webpack_require__(565);

	var _Utils2 = _interopRequireDefault(_Utils);

	var _global = __webpack_require__(10);

	var _history = __webpack_require__(32);

	var _history2 = _interopRequireDefault(_history);

	var _interfaces = __webpack_require__(35);

	var _dataFormat = __webpack_require__(64);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("czrz")(function (args, callback) {
	    callback({
	        "success": true,
	        "data": {
	            "id": "czrz",
	            "title": "操作日志",
	            /* "buttonConfigs": [
	                 {"buttonName":"delete"},
	                 {
	                     "buttonName": config => <div style={{float: "left"}}>
	                         <div className={"configRightBtnGp"}>
	                             <div><Icon type="search"></Icon><a onClick={() => {
	                                 Modal.confirm({
	                                     title: '告警信息',
	                                     content: '确认清空所有日志？',
	                                     onOk:(()=>{
	                                         Global.requestApi({
	                                             apiName: 'clearSysOperationLog',
	                                             next: action=>{
	                                                 if(action.data){
	                                                     Modal.success({
	                                                         title:'提示',
	                                                         content:'清空所有日志成功'
	                                                     })
	                                                 }else{
	                                                     Modal.warning({
	                                                         title:'提示',
	                                                         content:'清空日志失败'
	                                                     })
	                                                 }
	                                                 //刷新成功，重新跳转页面
	                                                 let lastUrl = Global.getState().routing.path;
	                                                 history.push(lastUrl.substring(1));
	                                             }
	                                         }, ['requestClearLogs','receieveClearLogs','failedClearLogs'], {
	                                             dataList: {
	                                                 czrz: {
	                                                     data:null
	                                                 }
	                                             }
	                                         })
	                                     }),
	                                     onCancel() {
	                                         console.log("reset exit!!!");
	                                     },
	                                 });
	                             }
	                             }>清空</a></div>
	                         </div>
	                     </div>
	                   }],*/
	            "searchConfig": {
	                "data": [{
	                    "column": 6,
	                    "formItemRewiring": true,
	                    "labelCol": 8, // form标头name宽度
	                    "wrapperCol": 16, //form显示框宽度
	                    "data": [{ "type": "select", "col": 5, "name": "模块",
	                        defaultValue: "_all_",
	                        'options': [{ key: '全部', value: '_all_' }, { key: '登录', value: 'LOGIN_MANAGE' }, { key: '资源门户', value: 'RESOURCE_PORTAL' }, { key: '编目管理', value: 'CATALOG_MANAGE' }, { key: '资源管理', value: 'RESOURCE_MANAGE' }, { key: '组网管理', value: 'NETWORK_MANAGE' }, { key: '日志审计', value: 'LOG_AUDIT' }, { key: '系统监控', value: 'SYSTEM_MONITORING' }, { key: '系统管理', value: 'SYSTEM_MANAGE' }], "field": "moduleCode" }, { "name": "时间范围", "col": 10, labelCol: 6, wrapperCol: "", "field": "timeList", "type": "rangePicker", "defaultValue": "" }, { "type": "select", "col": 5, "name": "操作结果",
	                        defaultValue: "_all_",
	                        'options': [{ key: '全部', value: '_all_' }, { key: '成功', value: 'true' }, { key: '失败', value: 'false' }], "field": "operateReult" }, {
	                        "type": "button",
	                        "col": 2,
	                        "value": "查询",
	                        "pageName": "search",
	                        "btnType": "primary",
	                        "htmlType": "submit"
	                    }]
	                }],
	                "body": { apiName: 'findSysOperationLog'
	                    //"body":{apiName:'findSysOperationLog',dataFormate:{"key":"timeList",format:"YYYY-MM-DD HH:mm:ss"}}
	                } },
	            "table": {
	                "primarykey": "id",
	                "clounms": [{
	                    "title": "序号",
	                    "dataIndex": "",
	                    "key": "",
	                    "width": 50,
	                    "render": function render(text, recode, index) {
	                        var state = _global.Global.getState().dataList.czrz;
	                        return _react2["default"].createElement(
	                            'div',
	                            null,
	                            index + 1 + state.currentPage * state.pageSize
	                        );
	                    }
	                }, {
	                    "title": "模块",
	                    "dataIndex": "moduleName",
	                    "key": "moduleName"
	                }, {
	                    "title": "操作",
	                    "dataIndex": "operateName",
	                    "key": "operateName"
	                }, {
	                    "title": "操作人",
	                    "dataIndex": "operateUser",
	                    "key": "operateUser",
	                    render: function render(text, rencord, index) {
	                        if (text) {
	                            return text;
	                        } else {
	                            return "--";
	                        }
	                    }
	                }, {
	                    "title": "操作IP",
	                    "dataIndex": "operateIp",
	                    "key": "operateIp"
	                }, {
	                    "title": "时间",
	                    "dataIndex": "operateTime",
	                    "key": "operateTime"
	                }, {
	                    "title": "结果",
	                    "dataIndex": "result",
	                    "key": "result",
	                    render: function render(text, record, index) {
	                        if (record.result == 'true') {
	                            return '成功';
	                        } else {
	                            return '失败';
	                        }
	                    }
	                }],
	                "body": { apiName: 'findSysOperationLog' }
	            },
	            "list": {
	                "view": null,
	                "listApi": null,
	                "saveApi": null
	            },
	            "add": {},
	            "edit": {},
	            "delete": {
	                "body": { apiName: 'deleteSysOperationLog' }
	            },
	            "detail": {},
	            "check": {
	                "view": null,
	                "checkApi": null
	            }
	        }
	    });
	});

/***/ },

/***/ 565:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.dlStateWarning = exports.selectedToFormArgs = undefined;

	var _css = __webpack_require__(1712);

	var _modal = __webpack_require__(29);

	var _modal2 = _interopRequireDefault(_modal);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _global = __webpack_require__(10);

	var _config = __webpack_require__(286);

	var _history = __webpack_require__(32);

	var _history2 = _interopRequireDefault(_history);

	var _dataList = __webpack_require__(30);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	//HeadComponent组件的配置项headConfig里的initListTab
	exports["default"] = function (tabs, args) {
	    /*item.show 用于其他tab的展示标志位，eg部门分类和主题分类*/
	    return tabs.map(function (item, i) {
	        if (_config.resourceType.indexOf(item.name) != -1 || item.show == "1") {
	            return _react2["default"].createElement(
	                'div',
	                { className: "configLeftBtnGp" },
	                _react2["default"].createElement(
	                    'a',
	                    { href: "#/datalistV1/" + item.urlPart + "/list/0/10", className: args.target.props.params.config == item.urlPart ? "configLeftBtnGpA" : "" },
	                    _react2["default"].createElement(
	                        'span',
	                        null,
	                        item.name
	                    )
	                )
	            );
	        }
	    });
	};

	var selectedToFormArgs = exports.selectedToFormArgs = function selectedToFormArgs(datalistId) {
	    return {};
	};

	var dlStateWarning = exports.dlStateWarning = function dlStateWarning(key) {
	    _modal2["default"].warning({
	        title: "提示1",
	        content: "页面刷新，请重新选择要查看的条目。",
	        onOk: function onOk() {
	            setTimeout(function () {
	                var config = _global.Global.getState().routing.path.match(new RegExp('datalistV1/(\\w*)/' + key));
	                _history2["default"].push("datalistV1/" + config[1] + "/list/0/10");
	            }, 500);
	        }
	    });
	};

/***/ }

});