webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _css = __webpack_require__(61);

	var _table = __webpack_require__(60);

	var _table2 = _interopRequireDefault(_table);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _interfaces = __webpack_require__(35);

	var _global = __webpack_require__(10);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("wdydzysjkcxdy")(function (args, callback) {
	    var dyyhcolumns = [{
	        "title": "订阅单位",
	        "dataIndex": "company",
	        "key": "company",
	        render: function render(text, record, index) {
	            return _react2["default"].createElement(
	                'div',
	                { title: text, style: { width: _global.Global.getState().framework.columnWidth, cursor: "pointer", display: "inline-block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } },
	                text
	            );
	        }
	    }, {
	        "title": "订阅设备",
	        "dataIndex": "name",
	        "key": "name"
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
	    /* let next = action=>{*/
	    var detailData = _global.Global.getState().dataList.wdydzySjk.detailMsgDataApi.data;
	    var sysEquipmentSubscribeDTO = detailData.sysEquipmentSubscribeDTO ? detailData.sysEquipmentSubscribeDTO : {};
	    var dyyhData = [sysEquipmentSubscribeDTO];
	    var values = { resourceId: detailData.id,
	        subSendEquipment: detailData.resSubscribeDTO ? detailData.resSubscribeDTO.subSendEquipment : null };
	    callback({
	        "success": true,
	        "data": [{
	            "title": "元数据基本信息", //栏目标题
	            "column": 2, //  form显示列数，首先读取每个标签的设置column值，不存在才会读取总的column,如果不存在，默认展示一列
	            "labelCol": 8, // form标头name宽度
	            "wrapperCol": 16, //form显示框宽度
	            "showTitle": true, //是否展示栏目标题
	            "titleIcon": "solution",
	            "data": [{ "name": "标题", "type": "text", "field": "restitle", "defaultValue": detailData.metadataDTO.restitle ? detailData.metadataDTO.restitle : "title不存在" }, { "name": "摘要", "type": "text", "field": "abstracts", "defaultValue": detailData.metadataDTO.abstracts ? detailData.metadataDTO.abstracts : "摘要内容是未知的" }, { "name": "关键字", "type": "text", "field": "keyword", "defaultValue": detailData.metadataDTO ? detailData.metadataDTO.keyword : "关键字内容是未知的" }, { "name": "国家主题分类", "type": "text", "field": "subjectcarategory", "defaultValue": detailData.metadataDTO ? detailData.metadataDTO.subjectcarategory : "国家主题分类内容是未知的" }, { "name": "部门主题分类", "type": "text", "field": "departmentCategory", "defaultValue": detailData.metadataDTO ? detailData.metadataDTO.departmentcategory : "部门主题分类内容是未知的" }, { "name": "资源类型", "type": "text", "field": "resourceType", "defaultValue": '数据库' }, { "name": "数据提供方单位", "type": "text", "field": "rporgname", "defaultValue": detailData.metadataDTO ? detailData.metadataDTO.rporgname : "数据提供方单位内容是未知的" }, { "name": "数据提供方地址", "type": "text", "field": "address", "defaultValue": detailData.metadataDTO ? detailData.metadataDTO.address : "数据提供方地址内容是未知的" }]
	        }, {
	            "title": "订阅设备", //栏目标题
	            "column": 1, //  form显示列数，首先读取每个标签的设置column值，不存在才会读取总的column,如果不存在，默认展示一列
	            "labelCol": 8, // form标头name宽度
	            "wrapperCol": 16, //form显示框宽度
	            "showTitle": true, //是否展示栏目标题
	            "titleIcon": "solution",
	            "data": function data() {
	                return _react2["default"].createElement(
	                    'div',
	                    { className: "customizedTable" },
	                    _react2["default"].createElement(_table2["default"], { columns: dyyhcolumns, dataSource: dyyhData, pagination: false })
	                );
	            }
	        }, {

	            "title": "资源取消订阅信息", //栏目标题
	            "column": 2, //  form显示列数，首先读取每个标签的设置column值，不存在才会读取总的column,如果不存在，默认展示一列
	            "labelCol": 8, // form标头name宽度
	            "wrapperCol": 16, //form显示框宽度
	            "showTitle": true, //是否展示栏目标题
	            "titleIcon": "solution",
	            "buttonConfigs": {
	                "onSubmitApi": {
	                    apiName: "wdydzyCxdySubmit",
	                    body: (0, _extends3["default"])({}, values)
	                },
	                "getValue": { id: "aFBCD", index: 2 },
	                "buttons": [{ "type": "button", "value": "取消", props: { "style": { "float": "right" } } }, { "type": "button", "value": "确定", "field": "submit", props: { type: "primary", "style": { "float": "right" } } }]
	            },
	            "data": [{ "name": "取消原因", "type": "input", "field": "revokeReason" }, { "name": "申请人", "type": "text", "field": "applyPerson", "defaultValue": _global.Global.getState().framework.loginApi.data.loginUserProfileDTO.loginName }]
	        }]
	    });
	    /* }
	        //next();
	        Global.requestApi({...wdydzySjkDyyhSearch,body:{resourceId:Global.getState().dataList.wdydzySjk.selectedRows[0]},next:next},
	            ['requestDyyhData','recieveDyyhData','faildDyyhData'],
	            {
	            dataList:{
	                wdydzySjk:{
	                    dyyh:null
	                }
	            }
	        })*/
	});

/***/ }
]);