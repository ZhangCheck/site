(function(){ var runed=0,temp,timer,time;webpackJsonp([3],[
/* 0 */
/***/ temp = function(module, exports, __webpack_require__) {runed=true;

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _AiLabel = __webpack_require__(380);

	var _AiLabel2 = _interopRequireDefault(_AiLabel);

	var _AiFormTable = __webpack_require__(428);

	var _AiFormTable2 = _interopRequireDefault(_AiFormTable);

	var _aiFormTable = __webpack_require__(159);

	var _global = __webpack_require__(15);

	var _jsonp = __webpack_require__(234);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _dataFormat = __webpack_require__(172);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("dyspSjkSjclclData")(function (args, callback) {
	    var target = args.target;
	    // let tableJson =args.apiData && args.apiData.resSubscribeDTO && args.apiData.resSubscribeDTO.targetTableFieldJson? jsonStrToArray(args.apiData.resSubscribeDTO.targetTableFieldJson) : [];
	    // let options = dataBrush(tableJson,"columnName");
	    var tableJson = (0, _dataFormat.jsonStrToArray)(_global.Global.getState().dataList.getDyspEdit.detailMsgDataApi[0].resSubscribeDTO.targetTableFieldJson);
	    var tableJson1 = [];
	    tableJson.forEach(function (items) {
	        if (items.pk) {
	            return;
	        }
	        tableJson1.push(items);
	    });
	    var options = (0, _dataFormat.dataBrush)(tableJson1, 'columnName');
	    var sjclcl = args.apiData && args.apiData.resSubscribeDTO.dbProcessStrategyJson != null ? JSON.parse(args.apiData.resSubscribeDTO.dbProcessStrategyJson) : [];
	    var sjgl = sjclcl.dataFilteing ? sjclcl.dataFilteing : [];
	    var sjzh = sjclcl.dataConversion ? sjclcl.dataConversion : [];
	    var sjtm = sjclcl.dataDesen ? sjclcl.dataDesen : [];

	    //数据处理策略
	    var sjglCloumn = [{
	        title: "数据集",
	        dataIndex: 'resourceName1',
	        key: 'resourceName1',
	        "render": { "type": "input", props: { style: { width: 200 } } }
	    }, {
	        title: "字段名称",
	        dataIndex: 'columnName1',
	        key: 'columnName1',
	        "render": { "type": "select", props: { style: { width: 150 } }, options: options }
	    }, {
	        title: "中文名称",
	        dataIndex: 'columnEnName1',
	        key: 'columnEnName1',
	        "render": { "type": "input", props: { style: { width: 200 } } }
	    }, {
	        title: "比较符",
	        dataIndex: 'operators1',
	        key: 'operators1',
	        "render": { "type": "select", props: { style: { width: 150 } }, options: [{ key: "=", value: "=" }, { key: "<>", value: "<>" }, { key: ">", value: ">" }, { key: "<", value: "<" }, { key: ">=", value: ">=" }, { key: "<=", value: "<=" }] }
	    }, {
	        title: "比较值",
	        dataIndex: 'value1',
	        key: 'value1',
	        "render": { "type": "input", props: { style: { width: 150 } } }
	    }, {
	        "title": "操作",
	        "dataIndex": "operation",
	        "key": "operation",
	        "render": [{ "type": "delete", "icon": "close-square" }]
	    }];
	    var sjzhCloumn = [{
	        title: "数据集",
	        dataIndex: 'resourceName2',
	        key: 'resourceName2',
	        "render": { "type": "input", props: { style: { width: 200 } } }
	    }, {
	        title: "字段名称",
	        dataIndex: 'columnName2',
	        key: 'columnName2',
	        "render": { "type": "select", props: { style: { width: 150 } }, "options": options }
	    }, {
	        title: "中文名称",
	        dataIndex: 'columnEnName2',
	        key: 'columnEnName2',
	        "render": { "type": "input", props: { style: { width: 200 } } }
	    }, {
	        title: "内容",
	        dataIndex: 'content2',
	        key: 'content2',
	        "render": { "type": "input", props: { style: { width: 200 } } }
	    }, {
	        title: "替换为",
	        dataIndex: 'value2',
	        key: 'value2',
	        "render": { "type": "input", props: { style: { width: 150 } } }
	    }, {
	        "title": "操作",
	        "dataIndex": "operation",
	        "key": "operation",
	        "render": [{ "type": "delete", "icon": "close-square" }]
	    }];
	    var sjtmCloumn = [{
	        title: "数据集",
	        dataIndex: 'resourceName3',
	        key: 'resourceName3',
	        "render": { "type": "input", props: { style: { width: 200 } } }
	    }, {
	        title: "字段名称",
	        dataIndex: 'columnName3',
	        key: 'columnName3',
	        "render": { "type": "select", props: { style: { width: 150 } }, "options": options }
	    }, {
	        title: "中文名称",
	        dataIndex: 'columnEnName3',
	        key: 'columnEnName3',
	        "render": { "type": "input", props: { style: { width: 200 } } }
	    }, {
	        title: "展示规则",
	        dataIndex: 'ruleCode3',
	        key: 'ruleCode3',
	        "render": { "type": "select", props: { style: { width: 200 } }, "options": [{ key: "隐藏后两位", value: "0" }, { key: "隐藏后三位", value: "1" }, { key: "隐藏后五位", value: "2" }] }
	    }, {
	        "title": "操作",
	        "dataIndex": "operation",
	        "key": "operation",
	        "render": [{ "type": "delete", "icon": "close-square" }]
	    }];

	    callback({
	        "success": true,
	        "data": [{
	            "title": "数据过滤",
	            "showTitle": true,
	            "data": _react2["default"].createElement(_AiFormTable2["default"], { config: {
	                    "columns": sjglCloumn, //表格标头数据
	                    "dataSource": sjgl, //表格数据
	                    "addTemplate": { //表格初始化新增行数据
	                        "resourceName1": "",
	                        "columnName1": "",
	                        "columnEnName1": "",
	                        "operatorsCode1": ">",
	                        "value1": ""
	                    }
	                }, id: 'sjgl', title: '\u6570\u636E\u8FC7\u6EE4', buttons: 'add', form: target.props.form })
	        }, {
	            "title": "数据转换",
	            "showTitle": false,
	            "data": _react2["default"].createElement(_AiFormTable2["default"], { config: {
	                    "columns": sjzhCloumn, //表格标头数据
	                    "dataSource": sjzh, //表格数据
	                    "addTemplate": { //表格初始化新增行数据
	                        "resourceName2": "",
	                        "columnName2": "",
	                        "columnEnName2": "",
	                        "content2": "",
	                        "value2": ""
	                    }
	                }, id: 'sjzh', title: '\u6570\u636E\u8F6C\u6362', buttons: 'add', form: target.props.form })
	        }, {
	            "title": "数据脱敏",
	            "showTitle": false,
	            "data": _react2["default"].createElement(_AiFormTable2["default"], { config: {
	                    "columns": sjtmCloumn, //表格标头数据
	                    "dataSource": sjtm, //表格数据
	                    "addTemplate": { //表格初始化新增行数据
	                        "resourceName3": "",
	                        "columnName3": "",
	                        "columnEnName3": "",
	                        "ruleCode3": ""
	                    }
	                }, id: 'sjtm', title: '\u6570\u636E\u8131\u654F', buttons: 'add', form: target.props.form })

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