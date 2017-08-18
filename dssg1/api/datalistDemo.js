webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _component = __webpack_require__(11);

	var _component2 = _interopRequireDefault(_component);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	//生成日期：Wed Jun 07 2017 17:16:31 GMT+0800 (中国标准时间)
	//请手动创建页面文件 "src/pageArgs/datalistDemo.js"，并填充当前内容
	//创建文件后，浏览路由地址“#/datalistV1/datalistDemo/list/11/10",可查看到页面实际效果
	(0, _jsonp2["default"])("datalistDemo")(function (args, callback) {
	  callback({
	    "success": true,
	    "data": {
	      "title": "这是DataList组件页面！！！！！",
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
	      "buttonConfigs": ["add", "edit", "delete", "detail"],
	      "searchConfig": { //模糊查询表单配置 AiForm
	        "data": [{
	          "column": 5,
	          "formItemRewiring": true,
	          "data": [{ "type": "input", "col": 5, "name": "资源名称/编码", "field": "resName" }, {
	            "type": "treeSelect",
	            "col": 5,
	            "name": "国家主题分类",
	            "field": "themeType",
	            options: { value: "_all_", key: "全部" },
	            dictId: "themeType",
	            dictApi: { apiName: 'getDictsByType', body: { name: "themeType", type: 1 } }
	          }, { "type": "input", "col": 5, "name": "电影", "field": "movie" }, {
	            "type": "select", "col": 5, "name": "状态", "field": "state",
	            "options": [{ value: "_all_", key: "全部" }, { value: 1, key: "待审核" }, { value: 2, key: "发布" }, {
	              value: 3,
	              key: "发布拒绝"
	            }, { value: 6, key: "待撤销" }, { value: 7, key: "已撤销" }, { value: 9, key: "已过期" }]
	          }, {
	            "type": "button",
	            "col": 4,
	            "value": "查询",
	            "pageName": "search",
	            props: { type: "primary" },
	            "htmlType": "submit"
	          }]
	        }]
	      },
	      "table": { //表格配置
	        "primarykey": "number", //主键，(将传递到详情接口)
	        "clounms": [//表格列配置，详见ant.design
	        {
	          "title": "序号",
	          "dataIndex": "",
	          "key": "",
	          "width": 50,
	          render: function render(text, record, index) {
	            var glState = _global.Global.getState().dataList.datalistDemo;
	            return _react2["default"].createElement(
	              'div',
	              null,
	              index + 1 + glState.currentPage * glState.pageSize
	            );
	          }
	        }, {
	          "title": "名称",
	          "dataIndex": "name",
	          "key": "name",
	          render: function render(text, record, index) {
	            return _react2["default"].createElement(
	              'div',
	              { title: text, style: {
	                  width: _global.Global.getState().framework.columnWidth,
	                  cursor: "pointer",
	                  display: "inline-block",
	                  overflow: "hidden",
	                  textOverflow: "ellipsis",
	                  whiteSpace: "nowrap",
	                  lineHeight: '20px',
	                  height: '18px'
	                } },
	              _react2["default"].createElement(
	                'a',
	                { href: "#/page/zybmckBlank?showMenu=false&id=" + record.id, target: '_blank' },
	                text
	              )
	            );
	          }
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
	        "onAddSubmitApi": { "apiName": "saveSuccess", method: 'post' //新增-提交接口
	        } },
	      "edit": {
	        byDialog: true,
	        validate: function validate(cb) {
	          _global.Global.requestApi({
	            apiName: 'saveSuccess', next: function next(action) {
	              if (action.code == '0') {
	                cb();
	              } else {
	                console.log('datalistdemo ajax error');
	              }
	            }
	          });
	        },
	        "initData": {
	          data: { apiName: "datalistEditDemo" //编辑视图接口 Datalist在编辑页面，先调用“详情数据接口”读取数据，再调用本行视图接口
	          } },
	        "onUpdateSubmitApi": { "apiName": "saveSuccess", method: 'post' //编辑-提交接口
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
	});

/***/ }
]);