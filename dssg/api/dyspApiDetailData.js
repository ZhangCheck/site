(function(){ var runed=0,temp,timer,time;webpackJsonp([3],[
/* 0 */
/***/ temp = function(module, exports, __webpack_require__) {runed=true;

	'use strict';

	var _css = __webpack_require__(73);

	var _table = __webpack_require__(69);

	var _table2 = _interopRequireDefault(_table);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(234);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _dataFormat = __webpack_require__(172);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("dyspApiDetailData")(function (args, callback) {
	    var target = args.target;
	    var metadataDetail = args.detail ? args.detail.metadataDTO : {};
	    var srcspz = args.detail ? args.detail.srcspz : [];
	    var sccspz = args.detail ? args.detail.sccspz : [];
	    var jkdzxx = args.detail ? args.detail.jkdzxx : {};
	    var apiGxdj = args.detail ? args.detail.apiGxdj : [];
	    var subscriber = args.detail ? args.detail.subscriber : [];
	    var zyfbxx = args.detail ? args.detail.processRecordDTO : {};

	    var zydyxx = args.detail ? args.detail.resSubscribeDTO : {};

	    //输入参数配置
	    var srcspzCloumn = [{
	        title: "参数",
	        dataIndex: 'name',
	        key: 'name'
	    }, {
	        title: "是否必须",
	        dataIndex: 'isMust',
	        key: 'isMust'
	    }, {
	        title: "参数类型",
	        dataIndex: 'type',
	        key: 'type'
	    }, {
	        title: "参数说明",
	        dataIndex: 'remark',
	        key: 'remark'
	    }];
	    //API共享等级
	    var apiGxdjCloumn = [{
	        title: "API等级",
	        dataIndex: 'level',
	        key: 'level'
	    }, {
	        title: "",
	        dataIndex: 'aaa',
	        key: 'aaa'
	    }, {
	        title: "",
	        dataIndex: 'bbb',
	        key: 'bbb'
	    }];
	    //订阅用户
	    var dyyhCloumn = [{
	        title: "订阅用户",
	        dataIndex: 'subscriber',
	        key: 'subscriber'
	    }, {
	        title: "订阅单位",
	        dataIndex: 'subUnit',
	        key: 'subUnit'
	    }, {
	        title: "用户等级",
	        dataIndex: 'level',
	        key: 'level'
	    }, {
	        title: "申请原因",
	        dataIndex: 'applyCause',
	        key: 'applyCause'
	    }, {
	        title: "订阅时间",
	        dataIndex: 'subscriptionTime',
	        key: 'subscriptionTime'
	    }, {
	        title: "联系电话",
	        dataIndex: 'telPhone',
	        key: 'telPhone'
	    }];

	    callback({
	        "success": true,
	        "data": [{
	            "title": "元数据基本信息",
	            "column": 2,
	            "showTitle": true,
	            "titleIcon": "file-text",
	            "data": [{ "type": "text", "name": "标题", "field": "restitle", "defaultValue": metadataDetail.restitle ? metadataDetail.restitle : "" }, { "type": "text", "name": "摘要", "field": "abstracts", "defaultValue": metadataDetail.abstracts ? metadataDetail.abstracts : "" }, { "type": "text", "name": "关键字", "field": "keyword", "defaultValue": metadataDetail.keyword ? metadataDetail.keyword : "" }, { "type": "text", "name": "国家主题分类", "field": "subjectcarategory", "defaultValue": metadataDetail.subjectcarategory ? metadataDetail.subjectcarategory : "" }, { "type": "text", "name": "部门主题分类", "field": "departmentCategory", "defaultValue": metadataDetail.departmentCategory ? metadataDetail.departmentCategory : "" }, { "type": "text", "name": "资源类型", "field": "resourceType", "defaultValue": metadataDetail.resourceType ? metadataDetail.resourceType : "" }, { "type": "text", "name": "数据提供方单位", "field": "rporgname", "defaultValue": metadataDetail.rporgname ? metadataDetail.rporgname : "" }, { "type": "text", "name": "数据提供方地址", "field": "address", "defaultValue": metadataDetail.address ? metadataDetail.address : "" }]
	        }, {
	            "title": "输入参数配置",
	            "showTitle": true,
	            "titleIcon": "copy",
	            "data": function data() {
	                return _react2["default"].createElement(_table2["default"], { columns: srcspzCloumn, dataSource: srcspz, bordered: true });
	            }
	        }, {
	            "title": "输出参数配置",
	            "showTitle": true,
	            "titleIcon": "copy",
	            "data": function data() {
	                return _react2["default"].createElement(_table2["default"], { columns: srcspzCloumn, dataSource: sccspz, bordered: true });
	            }
	        }, {
	            "title": "接口地址信息",
	            "column": 1,
	            "showTitle": true,
	            "titleIcon": "copy",
	            "data": [{ "type": "text", "name": "接口地址", "field": "url", "defaultValue": jkdzxx.webUrl ? jkdzxx.webUrl : "" }, { "type": "text", "name": "服务类型", "field": "type", "defaultValue": jkdzxx.type ? jkdzxx.type : "" }, { "type": "text", "name": "方法", "field": "methods", "defaultValue": jkdzxx.webMethods ? jkdzxx.webMethods : "" }, { "type": "text", "name": "接口文档", "field": "docx", "defaultValue": jkdzxx.docx ? jkdzxx.docx : "" }]
	        }, {
	            "title": "API共享等级",
	            "showTitle": true,
	            "titleIcon": "copy",
	            "data": function data() {
	                return _react2["default"].createElement(_table2["default"], { columns: apiGxdjCloumn, dataSource: apiGxdj, bordered: true });
	            }
	        }, {
	            "title": "订阅用户",
	            "showTitle": true,
	            "titleIcon": "user",
	            "data": function data() {
	                return _react2["default"].createElement(_table2["default"], { columns: dyyhCloumn, dataSource: subscriber, bordered: true });
	            }
	        }, {
	            "title": "资源发布信息",
	            "column": 2,
	            "showTitle": true,
	            "titleIcon": "notification",
	            "data": [{ "type": "text", "name": "发布原因", "field": "applyReason", "defaultValue": zyfbxx.applyReason ? zyfbxx.applyReason : "" }, { "type": "text", "name": "申请人", "field": "applyUser", "defaultValue": zyfbxx.applyUser ? zyfbxx.applyUser : "" }, { "type": "text", "name": "发布时间", "field": "applyTime", "defaultValue": zyfbxx.applyTime ? zyfbxx.applyTime : "" }, { "type": "text", "name": "审核结果", "field": "result", "defaultValue": zyfbxx.result ? zyfbxx.result : "" }, { "type": "text", "name": "审核意见", "field": "subOpinion", "defaultValue": zyfbxx.subOpinion ? zyfbxx.subOpinion : "" }, { "type": "text", "name": "审核时间", "field": "reviewTime", "defaultValue": zyfbxx.reviewTime ? zyfbxx.reviewTime : "" }]
	        }, {
	            "title": "资源申请订阅信息",
	            "column": 2,
	            "showTitle": true,
	            "titleIcon": "notification",
	            "buttonConfigs": {
	                "buttons": [{ "type": "button", "value": "返回", "field": "back", props: { btnType: "primary", "style": { "float": "right" } } }]
	            },
	            "data": [{ "type": "text", "name": "申请订阅原因", "field": "applyReason", "defaultValue": zydyxx.applyReason ? zydyxx.applyReason : "" }, { "type": "text", "name": "申请人", "field": "applyPerson", "defaultValue": zydyxx.applyPerson ? zydyxx.applyPerson : "" }, { "type": "text", "name": "申请订阅时间", "field": "applyTime", "defaultValue": zydyxx.applyTime ? zydyxx.applyTime : "" }]
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