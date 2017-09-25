(function(){ var runed=0,temp,timer,time;webpackJsonp([3],[
/* 0 */
/***/ temp = function(module, exports, __webpack_require__) {runed=true;

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _aiFormTable = __webpack_require__(159);

	var _framework = __webpack_require__(232);

	var _jsonp = __webpack_require__(234);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _AiFormTable = __webpack_require__(428);

	var _AiFormTable2 = _interopRequireDefault(_AiFormTable);

	var _global = __webpack_require__(15);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * args为页面传送的参数
	 */
	(0, _jsonp2["default"])("wjpzgxcl")(function (args, callback) {
	    var target = args.target;

	    //初始化展示数据
	    var dataSource = [{
	        ddms: "周期模式",
	        startTime: "",
	        jgzq: ""
	    }];
	    /**
	     * title：表格标题
	     * dataIndex：表格字段名
	     * key：表格字段标识
	     *render：使用AiLable组件：返回单个标签，
	     * AiLabel组件目前仅使用与可编辑表格中
	     */
	    var columns = [{
	        "title": "调度模式",
	        "dataIndex": "ddms",
	        "key": "ddms",
	        /**
	         * field的值和dataIndex值相同，便于编辑时值的替换
	         * @param text
	         * @param record  单行的值
	         * @param index   row的位置
	         * AiLabel组件：
	         * type：标签类型，defaultValue：默认值，width标签宽度,id:为一次组件数据调用的编号（页面传），
	         * record：一组的数据，index：标号，field:标签编号（和dataIndex相同），options下拉选择数据，可页面传输
	         */
	        "render": { "type": "select", props: { style: { width: 200 }, onChange: function onChange(value, text, record, index, that) {} }, "options": ["定期模式", "周期模式"] }
	    }, {
	        "title": "开始时间",
	        "dataIndex": "startTime",
	        "key": "name", //<AiLabel args={{"type":"input","defaultValue":record.name,"width":200,"id":formTableId,"record":record,"index":index,"field":"name"}}/>
	        "render": { "type": "timePicker", props: { style: { width: 200 } } }

	    }, {
	        "title": "间隔周期",
	        "dataIndex": "jgzq",
	        "key": "jgzq", //<AiLabel args={{"type":"input","defaultValue":record.name,"width":200,"id":formTableId,"record":record,"index":index,"field":"telPhone"}}/>
	        "render": { "type": "input", props: { style: { width: 200 } } }

	    }];

	    callback({
	        "success": true,
	        "data": [{
	            "title": "更新周期配置", //栏目标题
	            "column": 1, //  form显示列数，首先读取每个标签的设置column值，不存在才会读取总的column,如果不存在，默认展示一列
	            "labelCol": 8, // form标头name宽度
	            "wrapperCol": 16, //form显示框宽度
	            "showTitle": true, //是否展示栏目标题
	            "data": _react2["default"].createElement(_AiFormTable2["default"], { config: {
	                    "columns": columns, //表格标头数据
	                    "dataSource": dataSource, //表格数据
	                    "addTemplate": { //表格初始化新增行数据
	                        typeChoose: "必选",
	                        name: "",
	                        telPhone: "111",
	                        change: "=",
	                        operation: ""
	                    }
	                }, id: 'aFTD', form: target.props.form })

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