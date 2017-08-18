webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(10);

	var _Utils = __webpack_require__(565);

	var _Utils2 = _interopRequireDefault(_Utils);

	var _DataList = __webpack_require__(104);

	var _DataList2 = _interopRequireDefault(_DataList);

	var _tableLayout = __webpack_require__(1131);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	//生成日期：Thu Jun 08 2017 10:01:50 GMT+0800 (中国标准时间)
	//请手动创建页面文件 "src/pageArgs/datalistDemoLayout3.js"，并填充当前内容
	//创建文件后，浏览路由地址“#/datalistV1/datalistDemoLayout3/list/11/10",可查看到页面实际效果
	(0, _jsonp2["default"])("datalistDemoLayout3")(function (args, callback) {
	  callback({
	    "success": true,
	    "data": {
	      "title": "这是DataList组件页面！！！！！",
	      "headConfig": [

	        /*   {
	         "headName": initListTab([
	         {
	         urlPart: "wfbdzySjk"
	         name: "数据库"
	         }
	         {
	         urlPart: "wfbdzyFile"
	         name: "文件"
	         }
	         {
	         urlPart: "wfbdzyApi"
	         name: "API"
	         }
	         ]args)
	         }   */
	      ],
	      "headStateTypeConfig": [{
	        field: 'stateType',
	        value: "0",
	        name: "全部"
	      }, {
	        field: 'stateType',
	        value: "1",
	        name: "待发布"
	      }, {
	        field: 'stateType',
	        value: "2",
	        name: "待审核"
	      }, {
	        field: 'stateType',
	        value: "3",
	        name: "已审核"
	      }, {
	        field: 'stateType',
	        value: "4",
	        name: "已拒绝"
	      }, {
	        field: 'stateType',
	        value: "5",
	        name: "已撤销"
	      }],

	      "buttonConfigs": [//顶部按钮配置
	      { "buttonName": "add" }, { "buttonName": "delete" }],

	      "searchConfig": { //模糊查询表单配置 AiForm
	        "data": [{
	          "column": 3,
	          "data": [{ "type": "input", "col": 6, "name": "电影", "field": "movie" }, {
	            "type": "button",
	            "col": 1,
	            "value": "查询",
	            "pageName": "search",
	            props: { type: "primary" },
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
	          "dataIndex": "type",
	          "key": "type",
	          "width": 100,
	          "render": (0, _tableLayout.column1Render)('type', 'thumb', 'name', 'id')
	        }, {
	          "title": (0, _tableLayout.column2Render)('name', 'remarks', 'time'),
	          "dataIndex": "name",
	          "key": "name",

	          "render": (0, _tableLayout.column2Render)('name', 'remarks', 'time', 'theme', 'industry', 'id')
	        }, {
	          "title": "",
	          "dataIndex": "englishName",
	          "key": "englishName",
	          "render": (0, _tableLayout.columnNormalRender)('申请单位', 'englishName')
	        }, {
	          "title": "",
	          "dataIndex": "unicode",
	          "key": "unicode",
	          "render": (0, _tableLayout.columnNormalRender)('资源状态', 'unicode', function (text, record, index) {
	            var a = void 0;
	            if (text == "01") {
	              a = "待审核";
	            } else if (text == "02") {
	              a = "已审核";
	            } else {
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
	                { style: { cursor: 'pointer' }, onClick: function onClick() {
	                    alert(record.id); //点击此处，访问查看的接口
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
	            return _react2["default"].createElement(
	              'div',
	              { className: '' + _DataList2["default"].actionBtnsGroup },
	              _react2["default"].createElement(
	                'div',
	                { className: '' + _DataList2["default"].availableBtn, onClick: function onClick() {
	                    //todo:根据record里面的某个值，条件性地添加样式类："availableBtn"
	                    _global.Global.getState().dataList.datalistDemoLayout3.setDialog({
	                      show: true,
	                      title: 'here',
	                      content: "aaa", //可以是aiForm或dataList
	                      footer: null
	                    });
	                  } },
	                '\u5BA1\u6279'
	              ),
	              _react2["default"].createElement(
	                'div',
	                null,
	                '\u5220\u9664'
	              )
	            );
	          })
	        }],
	        "body": { apiName: 'datalistBodyDemoLayout3' //表数据接口配置
	        } },
	      "add": {
	        initData: {
	          data: { apiName: "datalistEditDemo" //新增-视图接口
	          } },
	        "onAddSubmitApi": { "apiName": "getAddData" //新增-提交接口
	        } },
	      "edit": {
	        "initData": {
	          data: { apiName: "datalistEditDemo" //编辑视图接口 Datalist在编辑页面，先调用“详情数据接口”读取数据，再调用本行视图接口
	          } },
	        "onUpdateSubmitApi": { "apiName": "saveApi" //编辑-提交接口
	        } },
	      "delete": {
	        "body": { apiName: 'getDeleteData' //删除行接口
	        } },
	      "detail": {
	        "initData": {
	          data: { apiName: "datalistDetailDemo" //详情视图接口 按primarykey读取详情信息
	          } },
	        "body": { apiName: 'datalistDetailMsgDemo' //详情数据接口
	        } },
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

	var _css = __webpack_require__(1718);

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