(function(){ var runed=0,temp,timer,time;webpackJsonp([3],[
/* 0 */
/***/ temp = function(module, exports, __webpack_require__) {runed=true;

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(234);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("metadataAdd")(function (args, callback) {
	    var target = args.target;
	    var getFieldValue = target.props.form.getFieldValue;
	    callback({
	        "success": true,
	        "data": [{
	            "title": "新增数据元",
	            "column": 2,
	            "buttonConfigs": {
	                "buttons": [{ "type": "button", "value": "返回", mark: "metadata", "field": "back", props: { btnType: "primary", "style": { "float": "right" } } }, { "type": "button", "value": "发布", mark: "metadata", "field": "submit", props: { "style": { "float": "right" }, htmlType: "submit" } }]
	            },
	            "showTitle": true,
	            "data": [{ "type": "input", "name": "数据元名称", "field": "metaName", "placeholder": "汉字、数字、字母或下划线", "validate": [{
	                    "required": true, "message": '不能为空!'
	                }] }, { "type": "input", "name": "数据元英文名称", "field": "metaEname", "validate": [{
	                    "required": true, "message": '不能为空！'
	                }, {
	                    validator: function validator(rule, value, callback) {
	                        if (!/^[A-Za-z]+$/.test(value)) {
	                            callback('请填写英文！');
	                        } else {
	                            callback();
	                        }
	                    }
	                }] }, { "type": "input", "name": "数据元编码", "field": "metaCode", "placeholder": "数字、字母或下划线", "validate": [{
	                    "required": true, "message": '不能为空!'
	                }] }, { "type": "select", "name": "数据元分类", "field": "metaSortName", "options": [{ "value": "1", "key": "一级" }, { "value": "2", "key": "二级" }, { "value": "3", "key": "三级" }], "validate": [{
	                    "required": true, "message": '不能为空!'
	                }] }, { "type": "select", "name": "数据类型", "field": "metaType", options: [{ value: "12", key: "文本" }, { value: "3", key: "数字" }, { value: "91", key: "日期" }, { value: "93", key: "时间" }, { value: "2005", key: "字符大型对象" }, { value: "2004", key: "二进制大型对象" }] }, { "type": "input", "name": "数据长度", "field": "metaLength" }, { "type": "select", "name": "是否字典项", "field": "isDicts", "options": [{ "value": "1", "key": "是" }, { "value": "0", "key": "否" }], defaultValue: "0" }, { "type": "select", "name": "数据字典", "field": "dictsInfo", "options": [{ "value": "1", "key": "性别" }, { "value": "2", "key": "行政区域" }], defaultValue: "1", preRender: function preRender() {
	                    return getFieldValue('isDicts') == '0' ? "hidden" : "";
	                } }, { "type": "input", "name": "值域", "field": "values" }, { "type": "input", "name": "提交单位", "field": "submitComp" }]
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