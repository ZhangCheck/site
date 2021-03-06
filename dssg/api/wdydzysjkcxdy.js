(function(){ var runed=0,temp,timer,time;webpackJsonp([3],[
/* 0 */
/***/ temp = function(module, exports, __webpack_require__) {runed=true;

	'use strict';

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _css = __webpack_require__(73);

	var _table = __webpack_require__(69);

	var _table2 = _interopRequireDefault(_table);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _interfaces = __webpack_require__(33);

	var _global = __webpack_require__(15);

	var _jsonp = __webpack_require__(234);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("wdydzysjkcxdy")(function (args, callback) {

	    var dyyhcolumns = [{
	        "title": "订阅用户",
	        "dataIndex": "name",
	        "key": "name"
	    }, {
	        "title": "订阅单位",
	        "dataIndex": "company",
	        "key": "company"
	    }, {
	        "title": "用户等级",
	        "dataIndex": "level",
	        "key": "level",
	        render: function render(text, record, index) {
	            switch (record.level) {
	                case '1':
	                    return '一级';
	                case '2':
	                    return '二级';
	                case '3':
	                    return '三级';
	                default:
	                    return '无返回值';
	            }
	        }

	    }, {
	        "title": "申请原因",
	        "dataIndex": "applayReason",
	        "key": "applayReason"
	    }, {
	        "title": "订阅时间",
	        "dataIndex": "applayTime",
	        "key": "applayTime"
	    }, {
	        "title": "联系电话",
	        "dataIndex": "telphone",
	        "key": "telphone"
	    }];
	    var next = function next() {
	        var detailData = _global.Global.getState().dataList.wdydzySjk.detailMsgDataApi.data;
	        callback({
	            "success": true,
	            "data": [{
	                "title": "元数据基本信息", //栏目标题
	                "column": 2, //  form显示列数，首先读取每个标签的设置column值，不存在才会读取总的column,如果不存在，默认展示一列
	                "labelCol": 8, // form标头name宽度
	                "wrapperCol": 16, //form显示框宽度
	                "showTitle": true, //是否展示栏目标题
	                "titleIcon": "solution",
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
	                { "name": "标题", "type": "text", "field": "restitle", "defaultValue": detailData.metadataDTO.restitle ? detailData.metadataDTO.restitle : "title不存在" }, { "name": "摘要", "type": "text", "field": "abstracts", "defaultValue": detailData.metadataDTO.abstracts ? detailData.metadataDTO.abstracts : "摘要内容是未知的" }, { "name": "关键字", "type": "text", "field": "keyword", "defaultValue": detailData.metadataDTO ? detailData.metadataDTO.keyword : "关键字内容是未知的" }, { "name": "国家主题分类", "type": "text", "field": "subjectcarategory", "defaultValue": detailData.metadataDTO ? detailData.metadataDTO.subjectcarategory : "国家主题分类内容是未知的" }, { "name": "部门主题分类", "type": "text", "field": "departmentCategory", "defaultValue": detailData.metadataDTO ? detailData.metadataDTO.departmentcategory : "部门主题分类内容是未知的" }, { "name": "资源类型", "type": "text", "field": "resourceType", "defaultValue": '数据库' }, { "name": "数据提供方单位", "type": "text", "field": "rporgname", "defaultValue": detailData.metadataDTO ? detailData.metadataDTO.rporgname : "数据提供方单位内容是未知的" }, { "name": "数据提供方地址", "type": "text", "field": "address", "defaultValue": detailData.metadataDTO ? detailData.metadataDTO.address : "数据提供方地址内容是未知的" }]
	            }, {
	                "title": "订阅用户", //栏目标题
	                "column": 1, //  form显示列数，首先读取每个标签的设置column值，不存在才会读取总的column,如果不存在，默认展示一列
	                "labelCol": 8, // form标头name宽度
	                "wrapperCol": 16, //form显示框宽度
	                "showTitle": true, //是否展示栏目标题
	                "titleIcon": "solution",
	                "data": function data() {
	                    return _react2["default"].createElement(_table2["default"], { columns: dyyhcolumns, dataSource: _global.Global.getState().dataList.wdydzySjk.dyyh.data.content });
	                }
	            }, {

	                "title": "资源取消订阅信息", //栏目标题
	                "column": 2, //  form显示列数，首先读取每个标签的设置column值，不存在才会读取总的column,如果不存在，默认展示一列
	                "labelCol": 8, // form标头name宽度
	                "wrapperCol": 16, //form显示框宽度
	                "showTitle": true, //是否展示栏目标题
	                "titleIcon": "solution",
	                "buttonConfigs": {
	                    "onSubmitApi": { apiName: "wdydzyCxdySubmit", body: { resourceId: _global.Global.getState().dataList.wdydzySjk.selectedRows[0], revokeReason: _global.Global.getState().aiForm.wdydzySjk.form.getFieldValue('applyReson'), subSendEquipment: detailData.resSubscribeDTO ? detailData.resSubscribeDTO.subSendEquipment : 'null' } },
	                    "getValue": { id: "aFBCD", index: 2 },
	                    "buttons": [{ "type": "button", "value": "取消", props: { "style": { "float": "right" } } }, { "type": "button", "value": "确定", "field": "submit", props: { type: "primary", "style": { "float": "right" } } }]
	                },
	                "data": [{ "name": "取消原因", "type": "input", "field": "applyReason" }, { "name": "申请人", "type": "text", "field": "applyPerson", "defaultValue": _global.Global.getState().framework.loginApi.data.loginUserProfileDTO.loginName }]
	            }]
	        });
	    };
	    _global.Global.requestApi((0, _extends3["default"])({}, _interfaces.wdydzySjkDyyhSearch, { body: { resourceId: _global.Global.getState().dataList.wdydzySjk.selectedRows[0] }, next: next }), ['requestDyyhData', 'recieveDyyhData', 'faildDyyhData'], {
	        dataList: {
	            wdydzySjk: {
	                dyyh: null
	            }
	        }
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