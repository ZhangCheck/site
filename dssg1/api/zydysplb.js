webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(10);

	var _DataList = __webpack_require__(104);

	var _DataList2 = _interopRequireDefault(_DataList);

	var _tableLayout = __webpack_require__(1131);

	var _history = __webpack_require__(32);

	var _history2 = _interopRequireDefault(_history);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * 资源订阅审批列表
	 */
	(0, _jsonp2["default"])("zydysplb")(function (args, callback) {
	    _global.Global.getState();
	    callback({
	        "success": true,
	        id: "zydysplb",
	        "data": {
	            "title": "资源订阅审批",
	            "headConfig": [],
	            "headStateTypeConfig": [{
	                field: 'state',
	                value: "0",
	                name: "全部"
	            }, {
	                field: 'state',
	                value: "1",
	                name: "待审核"
	            }, {
	                field: 'state',
	                value: "2",
	                name: "已审核"
	            }, {
	                field: 'state',
	                value: "3",
	                name: "已拒绝"
	            }],

	            "searchConfig": {
	                "data": [{
	                    "column": 3,
	                    "formItemRewiring": true,
	                    "data": [{ "type": "input", "col": 5, "name": "资源名称/编码", "field": "resNameOrCode" }, {
	                        "type": "select",
	                        "col": 5,
	                        "name": "发布目录",
	                        "field": "catalogId",
	                        options: { value: "_all_", key: "全部" },
	                        "defaultValue": "_all_",
	                        dictId: "catalogId",
	                        dictApi: { apiName: 'findDomainResCataLogInfo', body: { name: "catalogId", type: 1 } }
	                    }, {
	                        "type": "select",
	                        "col": 5,
	                        "name": "申请时间",
	                        "field": "cycleType",
	                        options: [{ value: "_all_", key: "全部" }, { value: "1", key: "最近一周" }, { value: "2", key: "最近一月" }, {
	                            value: "3", key: "最近三月" }, { value: "4", key: "最近一年" }],
	                        "defaultValue": "_all_"
	                    }, {
	                        "type": "button",
	                        "col": 4,
	                        "value": "查询",
	                        "pageName": "search",
	                        "btnType": "primary",
	                        "htmlType": "submit"
	                    }]
	                }]
	            },
	            "table": { //表格配置
	                "primarykey": "id", //主键，(将传递到详情接口)
	                "showHeader": false,
	                "tdNotPadding": true,
	                "checkbox": "1",
	                "clounms": [//表格列配置，详见ant.design
	                {
	                    "title": "",
	                    "dataIndex": "resType",
	                    "key": "resType",
	                    "width": 100,
	                    "render": function render(text, record, index) {
	                        var dom = (0, _tableLayout.column1Render)('resType', 'resPictureUrl')(text, record, index);
	                        return _react2["default"].cloneElement(dom, {
	                            onClick: function onClick() {
	                                var adress = "";
	                                if ("1" == record.resType) {
	                                    adress = "#/detail?type=1";
	                                } else if ("2" == record.resType) {
	                                    adress = "#/detail?type=2";
	                                } else if ("3" == record.resType) {
	                                    adress = "#/detail?type=3";
	                                }
	                                window.open(_global.Global.portalPath + adress + "&id=" + record.resourceId);
	                            }
	                        });
	                    }

	                }, {
	                    "title": "",
	                    "dataIndex": "resName",
	                    "key": "resName",
	                    "render": function render(text, record, index) {
	                        var dom = (0, _tableLayout.column2Render)('resName', 'abstracts', 'applyTime', 'subjectCarategoryName', 'industryCategoryName')(text, record, index);
	                        return _react2["default"].cloneElement(dom, {
	                            onClick: function onClick() {
	                                var adress = "";
	                                if ("1" == record.resType) {
	                                    adress = "#/detail?type=1";
	                                } else if ("2" == record.resType) {
	                                    adress = "#/detail?type=2";
	                                } else if ("3" == record.resType) {
	                                    adress = "#/detail?type=3";
	                                }
	                                console.log("Global.portalPath:", _global.Global.portalPath);
	                                window.open(_global.Global.portalPath + adress + "&id=" + record.resourceId);
	                            }
	                        });
	                    }
	                }, {
	                    "title": "",
	                    "dataIndex": "applyName",
	                    "key": "applyName",
	                    "render": (0, _tableLayout.columnNormalRender)('申请单位', 'applyName')
	                }, {
	                    "title": "",
	                    "dataIndex": "state",
	                    "key": "state",
	                    "render": (0, _tableLayout.columnNormalRender)('资源状态', 'state', function (text, record, index) {
	                        var a = void 0;
	                        if (record.state == "1") {
	                            a = "待审核";
	                        } else if (record.state == "2") {
	                            a = "已审核";
	                        } else if (record.state == "3") {
	                            a = "已拒绝";
	                        }
	                        return _react2["default"].createElement(
	                            'div',
	                            { style: { color: '#666' } },
	                            _react2["default"].createElement(
	                                'div',
	                                null,
	                                a
	                            ),
	                            _react2["default"].createElement(
	                                'div',
	                                { style: { cursor: 'pointer', color: '#0000FF' }, onClick: function onClick() {
	                                        _global.Global.requestApi({ apiName: 'subscriptionApprovalProcessView', body: { id: record.id }, next: function next(action) {
	                                                _global.Global.mark({ dataList: { zydysplb: { detailMsgDataApi: action } } });
	                                            } });

	                                        if (record.state == "1") {
	                                            _global.Global.history.push('steperV1/zyspxqSteperDemo/2');
	                                            /*window.open("#/steperV1/zyspxqSteperDemo/2?id="+record.resourceId)*/
	                                            /*<a href={"#/steperV1/zyspxqSteperDemo/2"} >查看申请</a>*/
	                                        } else if (record.state == "2") {
	                                            _global.Global.history.push('steperV1/zyspxqSteperDemo/3');
	                                            /*window.open("#/steperV1/zyspxqSteperDemo/3?id="+record.resourceId)*/
	                                            /*<a href={"#/steperV1/zyspxqSteperDemo/3"} >查看申请</a>*/
	                                        } else if (record.state == "3") {
	                                            _global.Global.history.push('steperV1/zyspxqSteperDemo/3');
	                                        }
	                                    } },
	                                '\u67E5\u770B\u7533\u8BF7'
	                            )
	                        );
	                    })
	                }, {
	                    "title": "",
	                    "dataIndex": "operation",
	                    "key": "operation",
	                    "render": (0, _tableLayout.columnNormalRender)('', 'unicode', function (text, record, index) {
	                        if ("1" == record.state) {
	                            return _react2["default"].createElement(
	                                'div',
	                                { className: '' + _DataList2["default"].actionBtnsGroup },
	                                _react2["default"].createElement(
	                                    'div',
	                                    { className: '' + _DataList2["default"].availableBtn, onClick: function onClick() {
	                                            //todo:根据record里面的某个值，条件性地添加样式类："availableBtn"

	                                            //塞入编目数据
	                                            _global.Global.requestApi({ apiName: "findResourceByID", body: { id: record.resourceId }, next: function next(action) {
	                                                    _global.Global.mark({ dataList: { zydysplb: { detailMsgDataApi: action } } });
	                                                    _global.Global.mark({ dataList: { zydysplb: { selectedRowKeys: [record.id] } } });
	                                                    if (record.resType == "1") {
	                                                        _history2["default"].push("/steperV1/dyspSjkSteperDemo/1");
	                                                    }
	                                                    if (record.resType == "2") {
	                                                        _history2["default"].push("/steperV1/dyspWjSteperDemo/1");
	                                                    }
	                                                    if (record.resType == "3") {
	                                                        _history2["default"].push("/steperV1/dyspApiSteperDemo/1");
	                                                    }
	                                                } }, {}, {});

	                                            //塞入编目数据
	                                            _global.Global.requestApi({ apiName: "getSubscribeById", body: { id: record.id }, next: function next(action) {
	                                                    _global.Global.mark({ dataList: { zydysplb: { detailMsgDataApi: { detailSubscribeDataApi: action } } } });
	                                                } }, {}, {});
	                                        } },
	                                    '\u5BA1\u6279'
	                                )
	                            );
	                        } else if ("2" == record.state) {
	                            return _react2["default"].createElement(
	                                'div',
	                                { className: '' + _DataList2["default"].actionBtnsGroup },
	                                _react2["default"].createElement(
	                                    'div',
	                                    { className: '' + _DataList2["default"].unAvailableBtn },
	                                    '\u5BA1\u6279'
	                                )
	                            );
	                        } else if ("3" == record.state) {
	                            return _react2["default"].createElement(
	                                'div',
	                                { className: '' + _DataList2["default"].actionBtnsGroup },
	                                _react2["default"].createElement(
	                                    'div',
	                                    { className: '' + _DataList2["default"].unAvailableBtn },
	                                    '\u5BA1\u6279'
	                                )
	                            );
	                        }
	                    })
	                }],
	                "body": { apiName: 'findSubResourceList' //表数据接口配置
	                } }

	        }
	    });
	});

/***/ },

/***/ 1131:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.column1Render = column1Render;
	exports.column2Render = column2Render;
	exports.columnNormalRender = columnNormalRender;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _global = __webpack_require__(10);

	var _history = __webpack_require__(32);

	var _history2 = _interopRequireDefault(_history);

	var _dataFormat = __webpack_require__(64);

	var _DataList = __webpack_require__(104);

	var _DataList2 = _interopRequireDefault(_DataList);

	var _component = __webpack_require__(11);

	var _component2 = _interopRequireDefault(_component);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var server = 'dssg';
	var portalUrl = "dssg-portal";
	var getHtmlArg = function getHtmlArg(name, defaultValue) {
	  var match = window.location.href.match(new RegExp(name + '=([^&#]*)'));
	  return match ? decodeURIComponent(match[1]) : defaultValue;
	};

	if (process) {
	  if (false) server = 'http://192.168.0.254:8080/dssg/';
	}

	try {
	  var serverUrl = getHtmlArg('server', server);
	  if (serverUrl.indexOf("api") >= 0 && serverUrl.indexOf("dssg") < 0) {
	    /* let index = server.indexOf("api");
	     server = server.substring(0,index)+"dssg/";*/
	    server = serverUrl.replace("api", "dssg");
	    portalUrl = serverUrl.replace("api", "dssg-portal");
	  } else if (serverUrl.indexOf("dssg") >= 0) {
	    var index = serverUrl.indexOf("dssg");
	    server = serverUrl.substring(0, index);
	    var root = window.location.href.match(/(.*)\/dssg\//)[1];
	    portalUrl = root + "/dssg-portal/";
	  }
	} catch (ex) {}
	if (_global.Global.fbMode == 16) {
	  server = '';
	}
	var data = 1;
	var doc = 2;
	var api = 3;
	function column1Render() {
	  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'type';
	  var thumb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'thmub';
	  var title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
	  var resourceId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'resourceId';

	  return function (text, record, index) {
	    return _react2["default"].createElement(
	      'div',
	      { className: '' + _DataList2["default"].columnOne
	      },
	      _react2["default"].createElement(
	        'div',
	        { className: '' + _DataList2["default"].columnOneDataType },
	        record[type] && _react2["default"].createElement(
	          'div',
	          { style: { backgroundColor: record[type] == data ? "#5fccff" : record[type] == doc ? "#58dddb" : record[type] == api ? "#9da9f3" : '', borderColor: record[type] == data ? "#45b2fd" : record[type] == doc ? "#39cadb" : "#9198f6" } },
	          record[type] == data ? "DATA" : record[type] == doc ? "DOC" : record[type] == api ? "API" : ''
	        )
	      ),
	      _react2["default"].createElement(
	        'div',
	        { className: '' + _DataList2["default"].columnOneImg },
	        _react2["default"].createElement('img', { alt: record[title], src: record[thumb] ? server + record[thumb] : record.subjectPictureUrl ? server + record.subjectPictureUrl : "/images/timg.png" /*"/images/timg.png"*/ })
	      )
	    );
	  };
	}

	function column2Render() {
	  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'name';
	  var discription = arguments[1];
	  var time = arguments[2];
	  var theme = arguments[3];
	  var industry = arguments[4];
	  var resourceId = arguments[5];

	  return function (text, record, index) {
	    var recordDiscription = record[discription] ? record[discription] : "";
	    var newTime = record[time] ? record[time] : "";
	    if (newTime.length > 19) {
	      newTime = newTime.substr(0, 19);
	    }
	    /* if((record[discription].length*14)/(Global.getState().framework.pDom)>2){			
	    	recordDiscription=record[discription].substr(0,(Global.getState().framework.pDom/14)*2)+"..."
	    } */
	    if (recordDiscription.length > 70) {
	      recordDiscription = recordDiscription.substr(0, 70) + "...";
	    }
	    return _react2["default"].createElement(
	      'div',
	      { className: '' + _DataList2["default"].columnSecond },
	      _react2["default"].createElement(
	        'div',
	        { className: '' + _DataList2["default"].columnSecondTitle },
	        _react2["default"].createElement(
	          'div',
	          { title: record[name] },
	          record[name]
	        ),
	        _react2["default"].createElement(
	          'div',
	          null,
	          newTime
	        )
	      ),
	      _react2["default"].createElement(
	        'div',
	        { className: _DataList2["default"].columnSecondContent + ' clearfix' },
	        _react2["default"].createElement(
	          'p',
	          { title: record[discription] || '内容简介无' },
	          recordDiscription || '内容简介无'
	        ),
	        _react2["default"].createElement(
	          'div',
	          null,
	          _react2["default"].createElement(
	            'span',
	            null,
	            '\u4E3B\u9898\u5206\u7C7B\uFF1A'
	          ),
	          _react2["default"].createElement(
	            'span',
	            null,
	            record[theme] || '未知'
	          )
	        ),
	        _react2["default"].createElement(
	          'div',
	          null,
	          _react2["default"].createElement(
	            'span',
	            null,
	            '\u884C\u4E1A\u5206\u7C7B\uFF1A'
	          ),
	          _react2["default"].createElement(
	            'span',
	            null,
	            record[industry] || '未知'
	          )
	        )
	      )
	    );
	  };
	}

	function columnNormalRender(cloumnName, field, render) {
	  return function (text, record, index) {
	    return _react2["default"].createElement(
	      'div',
	      { className: '' + _DataList2["default"].columnNormal },
	      _react2["default"].createElement(
	        'div',
	        { title: cloumnName, className: '' + _DataList2["default"].columnNormalHeader },
	        cloumnName
	      ),
	      _react2["default"].createElement(
	        'div',
	        { className: '' + _DataList2["default"].columnNormalContent },
	        typeof render == 'function' ? render(text, record, index) : record[field]
	      )
	    );
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(87)))

/***/ }

});