(function(){ var runed=0,temp,timer,time;webpackJsonp([3],[
/* 0 */
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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("ftpYhglEdit")(function (args, callback) {
	    var states = _global.Global.getState();
	    var target = args.target;
	    var detailValue = states.dataList.ftpYhgl.detailMsgDataApi ? states.dataList.ftpYhgl.detailMsgDataApi.data : {};
	    if (args.type) {

	        detailValue = {};
	    }

	    var title = args.apiData ? "编辑FTP用户" : "新增FTP用户";
	    var visibility = args.apiData ? "hidden" : "";
	    callback({
	        "success": true,
	        "data": [{
	            "title": title,
	            "column": 1,
	            "showTitle": true,
	            "buttonConfigs": {
	                "buttons": [{ "type": "button", "value": "返回", mark: "ftpYhgl", "field": "back", props: { btnType: "primary", "style": { "float": "right" } } }, { "type": "button", "value": "确定", mark: "ftpYhgl", "field": "submit", props: { "style": { "float": "right" }, htmlType: "submit" } }]
	            },
	            "data": [{ "type": "input", "name": "用户名", "field": "name", "defaultValue": detailValue.name ? detailValue.name : "", "validate": [{
	                    "required": true, "message": '不能为空!'
	                }] },
	            //隐藏字段
	            { "name": "密码", "type": "input", "field": "password", inputType: "password", "defaultValue": detailValue.password ? detailValue.password : "", preRender: function preRender() {
	                    return visibility;
	                }, "validate": [{
	                    "required": true, "message": '不能为空!'
	                }] }, { "name": "确认密码", "type": "input", "field": "confirmPassword", inputType: "password", preRender: function preRender() {
	                    return visibility;
	                }, "validate": [{
	                    "required": true, "message": '不能为空!'
	                }, {
	                    validator: function validator(rule, value, callback) {
	                        var form = _global.Global.getState().aiForm.dataListAdd1.form;
	                        if (value && value !== form.getFieldValue('password')) {
	                            callback('密码不匹配！');
	                        } else {
	                            callback();
	                        }
	                    }
	                }] }, { "type": "select", "name": "写权限", "field": "writePermission", "options": [{ "value": "1", "key": "--有写权限--" }, { "value": "0", "key": "--无写权限--" }], "defaultValue": detailValue.writePermission ? detailValue.writePermission : "0" }, { "type": "input", "name": "目录", "field": "homeDirectory", "placeholder": "数字、字母或/", "defaultValue": detailValue.homeDirectory ? detailValue.homeDirectory : "", "validate": [{
	                    "required": true, "message": '不能为空!'
	                }] }, { "type": "input", "field": "id", "defaultValue": detailValue.id ? detailValue.id : "", props: { style: { display: "none" } } }]
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