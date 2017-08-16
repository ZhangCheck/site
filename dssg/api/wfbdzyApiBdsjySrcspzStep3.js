(function(){ var runed=0,temp,timer,time;webpackJsonp([3],[
/* 0 */
/***/ temp = function(module, exports, __webpack_require__) {runed=true;

	'use strict';

	var _css = __webpack_require__(63);

	var _form = __webpack_require__(59);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _AiLabel = __webpack_require__(380);

	var _AiLabel2 = _interopRequireDefault(_AiLabel);

	var _AiFormTable = __webpack_require__(428);

	var _AiFormTable2 = _interopRequireDefault(_AiFormTable);

	var _aiFormTable = __webpack_require__(159);

	var _global = __webpack_require__(15);

	var _dataFormat = __webpack_require__(172);

	var _jsonp = __webpack_require__(234);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _history = __webpack_require__(41);

	var _history2 = _interopRequireDefault(_history);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/* author by 田贵宾
	import './other.html';
	import React from 'react';
	import ReactDOM from 'react-dom'; */
	var FormItem = _form2["default"].Item;
	(0, _jsonp2["default"])("wfbdzyApiBdsjySrcspzStep3")(function (args, callback) {
	    var target = args.target;
	    var states = _global.Global.getState();

	    var detailMsg = states.dataList.wfbdzyApi && states.dataList.wfbdzyApi.detailMsgDataApi && states.dataList.wfbdzyApi.detailMsgDataApi.data ? states.dataList.wfbdzyApi.detailMsgDataApi.data : {};
	    var srcspz = [];
	    var datas = states.aiFormTable.aFTDApi.config.dataSource;
	    for (var i = 0; i < datas.length; i++) {
	        srcspz[i] = datas[i].table + "." + datas[i].name;
	    }
	    var dataSource = detailMsg.inParameterJson ? detailMsg.inParameterJson : [];
	    var dataSourceNew = [];
	    if (dataSource.length > 0) {
	        dataSource.map(function (data) {
	            data.name = data.table + "." + data.name;
	            if (srcspz.indexOf(data.name) != -1) {
	                dataSourceNew[dataSourceNew.length] = data;
	            }
	        });
	        dataSource = dataSourceNew;
	    }

	    var values = states.aiForm.wfbdzyApiBdsjySrcspzStep3.values ? states.aiForm.wfbdzyApiBdsjySrcspzStep3.values : [];
	    if (states.aiForm.wfbdzyApiBdsjySrcspzStep3.values) {
	        dataSource = values;
	    }
	    /**
	     * title：表格标题
	     * dataIndex：表格字段名
	     * key：表格字段标识
	     *render：使用AiLable组件：返回单个标签，
	     * AiLabel组件目前仅使用与可编辑表格中
	     */
	    var columns = [{
	        "title": '是否必选*',
	        "dataIndex": 'mandatory',
	        "key": 'mandatory',
	        "render": { "type": "select", options: [{ key: "必选", value: "1" }, { key: "可选", value: "0" }], props: { style: { width: 200 } } }
	    }, {
	        "title": '参数名称',
	        "dataIndex": 'name',
	        "key": 'name',
	        "render": { "type": "select", options: srcspz, props: { style: { width: 200 } } }
	    }, {
	        "title": '比较符',
	        "dataIndex": 'conditionExp',
	        "key": 'conditionExp',
	        "render": { "type": "select", options: ["like", "="], props: { style: { width: 200 } } }
	    }, {
	        "title": "操作",
	        "dataIndex": "operation",
	        "key": "operation",
	        "render": [{ "type": "delete", "icon": "close-square", props: { style: { fontSize: 19 } } }]
	    }];
	    callback({
	        "success": true,
	        "data": [{
	            "data": _react2["default"].createElement(_AiFormTable2["default"], { config: {
	                    "columns": columns, //表格标头数据
	                    "dataSource": dataSource, //表格数据
	                    "addTemplate": { //表格初始化新增行数据
	                        "mandatory": "1",
	                        "name": srcspz[0],
	                        "conditionExp": "=",
	                        "operation": ""
	                    }
	                }, id: 'aFTDStep3', buttons: 'add', form: target.props.form })

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