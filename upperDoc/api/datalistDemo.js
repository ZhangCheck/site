webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _component = __webpack_require__(14);

	var _component2 = _interopRequireDefault(_component);

	var _jsonp = __webpack_require__(268);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("datalistDemo")(function (args, callback) {
	  callback({
	    "success": true,
	    "data": {
	      "title": "这是DataList组件页面！！！！！",
	      "headConfig": [{ "headName": _react2["default"].createElement(
	          'h4',
	          { style: { paddingLeft: 20, paddingTop: 10, paddingBottom: 10 } },
	          '\u5217\u8868\u5934'
	        ) //表头配置
	      }],
	      "buttonConfigs": ["add", "edit", "delete", "detail"],
	      "searchConfig": { //模糊查询表单配置 AiForm
	        "data": [{
	          "column": 3,
	          "data": [{ "type": "input", "name": "电影", "field": "movie" }, { "type": "button", "value": "查询", "pageName": "search", props: { type: "primary" }, "htmlType": "submit" }]
	        }]
	      },
	      "table": { //表格配置
	        "primarykey": "number", //主键，(将传递到详情接口)
	        "clounms": [//表格列配置，详见ant.design
	        {
	          "title": "序号",
	          "dataIndex": "number",
	          "key": "number"
	        }, {
	          "title": "名称",
	          "dataIndex": "name",
	          "key": "name"
	        }, {
	          "title": "英文名称4",
	          "dataIndex": "englishName",
	          "key": "englishName"
	        }, {
	          "title": "编码",
	          "dataIndex": "unicode",
	          "key": "unicode"
	        }, {
	          "title": "备注",
	          "dataIndex": "remarks",
	          "key": "remarks"
	        }, {
	          "title": "操作",
	          "dataIndex": "operation",
	          "key": "operation",
	          "render": ["edit", "delete", "detail"]
	        }],
	        "body": { apiName: 'datalistBodyDemo' //表数据接口配置
	        } },
	      "add": {
	        byDialog: true,
	        initData: {
	          data: { apiName: "datalistEditDemo" //新增-视图接口
	          } },
	        "onAddSubmitApi": { "apiName": "getAddData" //新增-提交接口
	        } },
	      "edit": {
	        byDialog: true,
	        "initData": {
	          data: { apiName: "datalistEditDemo" //编辑视图接口 Datalist在编辑页面，先调用“详情数据接口”读取数据，再调用本行视图接口
	          } },
	        "onUpdateSubmitApi": { "apiName": "saveApi" //编辑-提交接口
	        } },
	      "delete": {
	        "body": { apiName: 'getDeleteData' //删除行接口
	        } },
	      "detail": {
	        byDialog: true,
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
	}); //生成日期：Wed Jun 07 2017 17:16:31 GMT+0800 (中国标准时间)
	//请手动创建页面文件 "src/pageArgs/datalistDemo.js"，并填充当前内容
	//创建文件后，浏览路由地址“#/datalistV1/datalistDemo/list/11/10",可查看到页面实际效果

/***/ }
]);