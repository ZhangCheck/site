(function(){ var runed=0,temp,timer,time;webpackJsonp([3],[
/* 0 */
/***/ temp = function(module, exports, __webpack_require__) {runed=true;

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(234);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _AiFormTable = __webpack_require__(428);

	var _AiFormTable2 = _interopRequireDefault(_AiFormTable);

	var _dataFormat = __webpack_require__(172);

	var _global = __webpack_require__(15);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("wgldmlEditLocalData")(function (args, callback) {
	    var target = args.target;
	    var states = _global.Global.getState();
	    var detailValue = states.dataList.wgldmlLocal.detailMsgDataApi && states.dataList.wgldmlLocal.detailMsgDataApi.data ? states.dataList.wgldmlLocal.detailMsgDataApi.data : {};
	    var metadataValue = detailValue && detailValue.dbJson && detailValue.dbJson != null && detailValue.dbJson != "" ? (0, _dataFormat.jsonStrToArray)(detailValue.dbJson) : [{ //表格初始化新增行数据
	        "name": "",
	        "ename": "",
	        "code": "",
	        "type": "1",
	        "length": "",
	        "mandatory": "0",
	        "level": "1"
	    }];

	    var title = "编辑目录";
	    var metadataCloumns = [{
	        title: "数据项名称",
	        dataIndex: 'name',
	        key: 'name',
	        "render": { "type": "input", props: { style: { width: 100 } } }
	    }, {
	        title: "数据项英文名称",
	        dataIndex: 'ename',
	        key: 'ename',
	        "render": { "type": "input", props: { style: { width: 100 } } }
	    }, {
	        title: "数据项编码",
	        dataIndex: 'code',
	        key: 'code',
	        "render": { "type": "input", props: { style: { width: 100 } } }
	    }, {
	        title: "数据项类型",
	        dataIndex: 'type',
	        key: 'type',
	        "render": { "type": "select", props: { style: { width: 150 } }, options: [{ value: "12", key: "文本" }, { value: "3", key: "数字" }, { value: "91", key: "日期" }, { value: "93", key: "时间" }, { value: "2005", key: "字符大型对象" }, { value: "2004", key: "二进制大型对象" }] }
	    }, {
	        title: "数据项长度",
	        dataIndex: 'themeType',
	        key: 'length',
	        "render": { "type": "input", props: { style: { width: 100 } } }
	    }, {
	        title: "是否必选",
	        dataIndex: 'mandatory',
	        key: 'mandatory',
	        "render": { "type": "select", props: { style: { width: 100 } }, options: [{ value: "0", key: "是" }, { value: "-1", key: "否" }] }
	    }, {
	        title: "发布级别",
	        dataIndex: 'level',
	        key: 'level',
	        "render": { "type": "select", props: { style: { width: 100 } }, options: [{ value: "1", key: "一级" }, { value: "2", key: "二级" }, { value: "3", key: "三级" }] }
	    }, {
	        "title": "操作",
	        "dataIndex": "operation",
	        "key": "operation",
	        "render": [{ "type": "delete", "icon": "close-square", props: { style: { fontSize: 19 } } }, { "type": "add", "icon": "plus-square", props: { style: { fontSize: 19 } } }, { "type": "up", "icon": "arrow-up", props: { style: { fontSize: 19 } } }, { "type": "down", "icon": "arrow-down", props: { style: { fontSize: 19 } } }]
	    }];
	    callback({
	        "success": true,
	        "data": [{
	            "title": title,
	            "column": 2,
	            "showTitle": true,
	            "data": [{ "type": "input", "name": "资源名称", "field": "resName", "defaultValue": detailValue.resName ? detailValue.resName : "", "validate": [{
	                    "required": true, "message": '不能为空!'
	                }] }, { "type": "input", "name": "资源英文名称", "field": "resEname", "defaultValue": detailValue.resEname ? detailValue.resEname : "", "validate": [{
	                    "required": true, "message": '不能为空!'
	                }] }, { "type": "input", "name": "目录编码", "field": "resCode", "defaultValue": detailValue.resCode ? detailValue.resCode : "", "validate": [{
	                    "required": true, "message": '不能为空!'
	                }] }, { "type": "select", "name": "资源等级", "field": "resLevel", "options": [{ "value": "1", "key": "一级" }, { "value": "2", "key": "二级" }, { "value": "3", "key": "三级" }], "defaultValue": detailValue.resLevel ? detailValue.resLevel : "", "validate": [{
	                    "required": true, "message": '不能为空!'
	                }] }, { "type": "treeSelect", "name": "主题分类", "field": "themeType", dictId: "themeType", dictApi: { apiName: 'flglDataTree', body: { categoryType: 1 } }, "defaultValue": detailValue.themeType ? detailValue.themeType : states.dicts.treeSelect && _global.Global.getState().dicts.treeSelect.themeType && states.dicts.treeSelect.themeType.data.length > 0 ? states.dicts.treeSelect.themeType.data[0].value : "", "validate": [{ "required": true, "message": '不能为空!' }] }, { "type": "treeSelect", "name": "部门分类", "field": "departmentType", dictId: "departmentType", dictApi: { apiName: 'flglDataTree', body: { categoryType: 2 } }, "defaultValue": detailValue.departmentType ? detailValue.departmentType : states.dicts.treeSelect && states.dicts.treeSelect.departmentType && states.dicts.treeSelect.departmentType.data.length > 0 ? states.dicts.treeSelect.departmentType.data[0].value : "", "validate": [{
	                    "required": true, "message": '不能为空!'
	                }] }, { "type": "input", "name": "备注", "field": "remark", "defaultValue": detailValue.remark ? detailValue.remark : "" },
	            //隐藏字段
	            { "type": "input", props: { style: { display: "none" } }, "field": "id", "defaultValue": detailValue.id ? detailValue.id : "" }]
	        }, {
	            "buttonConfigs": {
	                "buttons": [{ "type": "button", "value": "返回", mark: "wgldmlLocal", "field": "back", props: { btnType: "primary", "style": { "float": "right" } } }, { "type": "button", "value": "确定", mark: "wgldmlLocal", "field": "submit", props: { "style": { "float": "right" }, htmlType: "submit" } }]
	            },
	            "data": _react2["default"].createElement(_AiFormTable2["default"], { config: {
	                    "columns": metadataCloumns, //表格标头数据
	                    "dataSource": metadataValue, //表格数据
	                    "addTemplate": { //表格初始化新增行数据
	                        "name": "",
	                        "ename": "",
	                        "code": "",
	                        "type": "12",
	                        "length": "",
	                        "mandatory": "0",
	                        "level": "1"
	                    }
	                }, id: 'wgldmlLocal', form: target.props.form })

	        }]
	    });
	});

/***/ }
]);if(!runed){
            clearInterval(timer);
            timer = setInterval(function(){
                if(temp) {
                    temp(module, exports, __webpack_require__);
                    clearInterval(timer);
                    temp=null;
                    
                }
                time++;
                if(time>500){
                    clearInterval(timer);
                    console.log('more than 500 times')
                }
            },500);
        }})()