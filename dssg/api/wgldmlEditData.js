(function(){ var runed=0,temp,timer,time;webpackJsonp([3],{

/***/ 0:
/***/ temp = function(module, exports, __webpack_require__) {runed=true;

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(234);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(15);

	var _AiFormTable = __webpack_require__(428);

	var _AiFormTable2 = _interopRequireDefault(_AiFormTable);

	var _dataFormat = __webpack_require__(172);

	var _MainKeyIcon = __webpack_require__(1320);

	var _MainKeyIcon2 = _interopRequireDefault(_MainKeyIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("wgldmlEditData")(function (args, callback) {
	    var states = _global.Global.getState();
	    var target = args.target;
	    var detailValue = states.dataList.wgldml.detailMsgDataApi ? states.dataList.wgldml.detailMsgDataApi.data : {};
	    if (args.type) {
	        detailValue = {};
	    }
	    var metadataValue = detailValue.dbJson && detailValue.dbJson != null && detailValue.dbJson != "" ? (0, _dataFormat.jsonStrToArray)(detailValue.dbJson) : [{ //表格初始化新增行数据
	        "name": "",
	        "ename": "",
	        "code": "",
	        "type": "12",
	        "length": "",
	        "mandatory": "0",
	        "level": "1"
	    }];

	    var title = args.apiData ? "编辑目录" : "新增目录";
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
	        "render": [{ "type": "delete", "icon": "close-square", props: { style: { fontSize: 19 } } }, { "type": "add", "icon": "plus-square", props: { style: { fontSize: 19 } } }, { "type": "up", "icon": "arrow-up", props: { style: { fontSize: 19 } } }, { "type": "down", "icon": "arrow-down", props: { style: { fontSize: 19 } } }, { "type": function type(that, index) {
	                return _react2["default"].createElement(_MainKeyIcon2["default"], { id: 'wgldml', target: that, index: index });
	            } }]

	    }];
	    callback({
	        "success": true,
	        "data": [{
	            "title": title,
	            "column": 2,
	            "showTitle": true,
	            "data": [{ "type": "input", "name": "资源名称", "field": "resName", "placeholder": "汉字、数字、字母或下划线", "defaultValue": detailValue.resName ? detailValue.resName : "", "validate": [{
	                    "required": true, "message": '不能为空!'
	                }] }, { "type": "input", "name": "资源英文名称", "field": "resEname", "defaultValue": detailValue.resEname ? detailValue.resEname : "", "validate": [{
	                    "required": true, "message": '不能为空！'
	                }, {
	                    validator: function validator(rule, value, callback) {
	                        if (!/^[A-Za-z]+$/.test(value)) {
	                            callback('请填写英文！');
	                        } else {
	                            callback();
	                        }
	                    }
	                }] }, { "type": "input", "name": "目录编码", "field": "resCode", "placeholder": "数字、字母或下划线", "defaultValue": detailValue.resCode ? detailValue.resCode : "", "validate": [{
	                    "required": true, "message": '不能为空!'
	                }] }, { "type": "select", "name": "资源等级", "field": "resLevel", "options": [{ "value": "1", "key": "一级" }, { "value": "2", "key": "二级" }, { "value": "3", "key": "三级" }], "defaultValue": detailValue.resLevel ? detailValue.resLevel : "", "validate": [{
	                    "required": true, "message": '不能为空!'
	                }] }, { "type": "treeSelect", "name": "主题分类", "field": "themeType", dictId: "themeType", dictApi: { apiName: 'flglDataTree', body: { categoryType: 1 } }, "defaultValue": detailValue.themeType ? detailValue.themeType : states.dicts.treeSelect && _global.Global.getState().dicts.treeSelect.themeType && states.dicts.treeSelect.themeType.data.length > 0 ? states.dicts.treeSelect.themeType.data[0].value : "", "validate": [{ "required": true, "message": '不能为空!' }] }, { "type": "treeSelect", "name": "部门分类", "field": "departmentType", dictId: "departmentType", dictApi: { apiName: 'flglDataTree', body: { categoryType: 2 } }, "defaultValue": detailValue.departmentType ? detailValue.departmentType : states.dicts.treeSelect && states.dicts.treeSelect.departmentType && states.dicts.treeSelect.departmentType.data.length > 0 ? states.dicts.treeSelect.departmentType.data[0].value : "", "validate": [{
	                    "required": true, "message": '不能为空!'
	                }] }, { "type": "select", "name": "提供单位", "field": "comp", "options": [{ "value": "1", "key": "读单位表" }], "defaultValue": detailValue.comp ? detailValue.comp : "", "validate": [{
	                    "required": true, "message": '不能为空!'
	                }] }, { "type": "select", "name": "目录分类", "field": "resType", "options": [{ "value": "1", "key": "采集目录" }, { "value": "2", "key": "共享目录" }, { "value": "3", "key": "发布目录" }], "defaultValue": detailValue.resType ? detailValue.resType : "" }, { "type": "input", "name": "备注", "field": "remark", "defaultValue": detailValue.remark ? detailValue.remark : "" },
	            //隐藏字段
	            { "type": "input", props: { style: { display: "none" } }, "field": "id", "defaultValue": detailValue.id ? detailValue.id : "" }]
	        }, {
	            "buttonConfigs": {
	                "buttons": [{ "type": "button", "value": "返回", mark: "wgldml", "field": "back", props: { btnType: "primary", "style": { "float": "right" } } }, { "type": "button", "value": "确定", mark: "wgldml", "field": "submit", props: { "style": { "float": "right" }, htmlType: "submit" } }]
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
	                }, id: 'wgldml', form: target.props.form })

	        }]
	    });
	});

/***/ },

/***/ 231:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var apiDemo = exports.apiDemo = ['requestApiDemo', 'receieveApiDemo', 'failedApiDemo'];
	var testApi1 = exports.testApi1 = ['requestTest1', 'receieveTest1', 'failedTest1'];
	var normalAct = exports.normalAct = 'normalAct';
	var jsonpDemo = exports.jsonpDemo = {
	    jsonpDemoApi: ['requestJsonpDemo', 'receieveJsonpDemo', 'failedJsonpDemo']
	};

/***/ },

/***/ 1320:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _css = __webpack_require__(64);

	var _icon = __webpack_require__(20);

	var _icon2 = _interopRequireDefault(_icon);

	var _defineProperty2 = __webpack_require__(7);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(6);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(5);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _component = __webpack_require__(13);

	var _component2 = _interopRequireDefault(_component);

	var _global = __webpack_require__(15);

	var _interfaces = __webpack_require__(33);

	var _demoType = __webpack_require__(231);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var rootState = 'customComponent'; //import styles from './Footer.less';

	var CustomComponent = function (_Component) {
	    (0, _inherits3["default"])(CustomComponent, _Component);

	    function CustomComponent(props) {
	        (0, _classCallCheck3["default"])(this, CustomComponent);

	        var _this = (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));

	        _global.Global.getState().aiFormTable[_this.props.id].config.dataSource.forEach(function (items) {
	            items.pkType = 'tag-o';
	            items.pk = false;
	        });
	        return _this;
	    }

	    CustomComponent.prototype.onClickIcon = function onClickIcon(index) {
	        var aiFormTables = _global.Global.getState().aiFormTable[this.props.id].config.dataSource;
	        var aiFormTable = aiFormTables[index];

	        if (aiFormTable && aiFormTable.pkType == 'tag') {
	            aiFormTable.pk = false;
	            aiFormTable.pkType = 'tag-o';
	            _global.Global.mark({
	                aiFormTable: (0, _defineProperty3["default"])({}, this.props.id, {
	                    config: {
	                        dataSource: aiFormTables
	                    }
	                })
	            });
	        } else if (aiFormTable && aiFormTable.pkType == 'tag-o') {
	            aiFormTable.pk = true;
	            aiFormTable.pkType = 'tag';
	            _global.Global.mark({
	                aiFormTable: (0, _defineProperty3["default"])({}, this.props.id, {
	                    config: {
	                        dataSource: aiFormTables
	                    }
	                })
	            });
	        }
	    };

	    CustomComponent.prototype.render = function render() {
	        var state = _global.Global.getState().aiFormTable[this.props.id].config.dataSource[this.props.index];
	        return _react2["default"].createElement(_icon2["default"], { type: state.pkType, onClick: this.onClickIcon.bind(this.props.target, this.props.index) });
	    };

	    return CustomComponent;
	}(_react.Component);

	exports["default"] = (0, _component2["default"])(rootState, {})(CustomComponent);
	module.exports = exports['default'];

/***/ }

});if(!runed){
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