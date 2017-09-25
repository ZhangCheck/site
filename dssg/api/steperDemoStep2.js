(function(){ var runed=0,temp,timer,time;webpackJsonp([3],[
/* 0 */
/***/ temp = function(module, exports, __webpack_require__) {runed=true;

	'use strict';

	var _css = __webpack_require__(44);

	var _input = __webpack_require__(85);

	var _input2 = _interopRequireDefault(_input);

	var _css2 = __webpack_require__(1631);

	var _modal = __webpack_require__(49);

	var _modal2 = _interopRequireDefault(_modal);

	var _css3 = __webpack_require__(63);

	var _form = __webpack_require__(59);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(234);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(15);

	var _history = __webpack_require__(41);

	var _history2 = _interopRequireDefault(_history);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var FormItem = _form2["default"].Item;


	(0, _jsonp2["default"])("steperDemoStep2")(function (args, callback) {
	    var target = args.target;
	    var getFieldDecorator = target.props.form.getFieldDecorator;

	    var state = _global.Global.getState();

	    //各种提示，如”应该从前一步开始的提示“
	    var lastStepState = state.dataList.steperDemoStep1;
	    if (!lastStepState) {
	        _modal2["default"].warning({
	            title: '提示',
	            content: '上一步或前几步没有完成，请返回第一步重新开始。',
	            onOk: function onOk() {
	                /* */
	                setTimeout(function () {
	                    _global.Global.mark({ aiForm: {
	                            steperDemoStep2: null
	                        } });
	                    _history2["default"].push(state.routing.path.replace(/\/\d+/, '/1'));
	                }, 500);
	            }
	        });
	        return;
	    }

	    callback({
	        "success": true,
	        "data": [{
	            "title": "我是栏目一", //栏目标题
	            "column": 3, //  form显示列数，首先读取每个标签的设置column值，不存在才会读取总的column,如果不存在，默认展示一列
	            "labelCol": 8, // form标头name宽度
	            "wrapperCol": 16, //form显示框宽度
	            "showTitle": true, //是否展示栏目标题
	            "buttonConfigs": {
	                "buttons": []
	            },
	            "data": [
	            /**
	             * data数据标准
	             * 标头和显示框宽度（labelCol和wrapperCol），先读每个标签内的，如果没有再读上面总的，
	             * “dictId”为下拉选择字典数据的id，存在就调用字典接口
	             * 可自定义标签，如下（1）号位子
	             * column 为单个标签占有的列数  ，可通过和labelCol、wrapperCol调试样式
	             * 数据中可有属性：一下
	             * field：唯一标识，type：标签类型（input/select/checkbox/switch/radio/timePicker/rangePicker/datePicker/inputNumber等）           必须有
	             * column：标签所占总的列数中的几列，labelCol：标头宽度，wrapperCol：数据框宽度，validate：规则，options：checkbox和select数据          选择有
	             * defaultValue：默认值，defaultValue显示数据， name：标签的名称，                                                                 选择有
	             */
	            /**
	                * (1)：自定义标签
	                *  格式按照：{“value”:config=>.....}
	                */
	            { "value": function value() {
	                    return _react2["default"].createElement(
	                        'div',
	                        null,
	                        lastStepState.tableBodyDataApi.data.content[lastStepState.selectedRows[0] - 1].name
	                    );
	                } }, { "name": "服务类型", "type": "select", "column": 1, "labelCol": 8, "wrapperCol": 16, "field": "serviceType", "dictId": "serviceType", "defaultValue": "rest", "placeholder": "请选择..." }, { "name": "字典项获取下拉数据", "type": "select", "field": "boxs", "dictId": "21", "validate": [{
	                    "required": true, "message": 'Please input your E-mail!'
	                }], "placeholder": "请选择..." }, { "name": "接口获取下拉数据", "type": "select", "field": "name", "validate": [{
	                    "required": true, "message": 'Please input your E-mail!'
	                }], "dictId": "resName", "dictApi": { apiName: "getResName" }, "placeholder": "请选择..." },
	            //无字典项 不要存在 dictId属性
	            { "name": "无字典项", "type": "select", "field": "sex", "placeholder": "请选择...", "defaultValue": "篮球", "options": ["篮球", "足球", "乒乓球"] }, { "type": "treeSelect", "name": "treeSelect1", "field": "themeType", dictId: "themeType", dictApi: { apiName: 'flglData' }, "defaultValue": "常驻人口", "validate": [{
	                    "required": true, "message": '不能为空!'
	                }] }, { "name": "邮箱", "type": "input", "field": "email", "defaultValue": "tiangb@fable.cn",
	                "validate": [{
	                    "type": 'email', "message": 'The input is not valid E-mail!'
	                }, {
	                    "required": true, "message": 'Please input your E-mail!'
	                }] }, { "name": "checkbox", "type": "checkbox", "field": "sports", "options": ["篮球", "足球", "乒乓球"], "defaultValue": ["篮球", "乒乓球"] }, { "name": "switch", "type": "switch", "field": "switch" }, { "name": "radio", "type": "radio", "field": "radio", "options": ["篮球", "足球", "乒乓球"], "defaultValue": "足球" }, { "name": "radio", "type": "radio1", "field": "radio1", "options": [{ "value": "baskeball", "key": "篮球王子" }, { "value": "football", "key": "足球" }, { "value": "football", "key": "足球" }], "defaultValue": "football" }, { "name": "TimePicker", "type": "timePicker", "field": "timePicker", "defaultValue": "12:40", "help": "请填写信息" }, { "name": "rangePicker", "type": "rangePicker", "field": "rangePicker" },
	            /**
	             * (1)：自定义标签
	             *  格式按照：{“value”:config=>.....}
	             */
	            { "value": function value(config) {
	                    return _react2["default"].createElement(
	                        FormItem,
	                        {
	                            label: '\u59D3\u540D',
	                            labelCol: { span: 8 },
	                            wrapperCol: { span: 14 },
	                            hasFeedback: true,
	                            help: '\u6211\u662F\u63D0\u793A\u4FE1\u606F'
	                        },
	                        getFieldDecorator("ccc", {
	                            initialValue: "你好，我是自定义标签"
	                        })(_react2["default"].createElement(_input2["default"], { name: 'username' })
	                        //<Input onChange={(v)=>{target.props.actions.setState('ccc',v)}}  name="username"/>
	                        )
	                    );
	                }
	            }, { "type": "input", "name": "方法", "field": "methods", "validate": [{ "required": true, "message": 'Please input !' }] }, { "name": "请求方法", "type": "select", "field": "requestMode", "dictId": "requestMode", "placeholder": "请选择..." }]
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