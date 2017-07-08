(function(){ var runed=0,temp,timer,time;webpackJsonp([3],[
/* 0 */
/***/ temp = function(module, exports, __webpack_require__) {runed=true;

	'use strict';

	var _css = __webpack_require__(1759);

	var _modal = __webpack_require__(49);

	var _modal2 = _interopRequireDefault(_modal);

	var _css2 = __webpack_require__(73);

	var _table = __webpack_require__(69);

	var _table2 = _interopRequireDefault(_table);

	var _css3 = __webpack_require__(63);

	var _form = __webpack_require__(59);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _AiFormTable = __webpack_require__(428);

	var _AiFormTable2 = _interopRequireDefault(_AiFormTable);

	var _AiLabel = __webpack_require__(380);

	var _AiLabel2 = _interopRequireDefault(_AiLabel);

	var _global = __webpack_require__(15);

	var _history = __webpack_require__(41);

	var _history2 = _interopRequireDefault(_history);

	var _interfaces = __webpack_require__(33);

	var _jsonp = __webpack_require__(234);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var FormItem = _form2["default"].Item; /**
	                                     * Created by liy on 2016/12/21 0021.
	                                     */

	(0, _jsonp2["default"])("wfbdzyFileCxdy")(function (args, callback) {

	    var states = _global.Global.getState();
	    var datas = states.dataList.wfbdzyFile.detailMsgDataApi && states.dataList.wfbdzyFile.detailMsgDataApi.data ? states.dataList.wfbdzyFile.detailMsgDataApi.data : {};
	    var metadataDetail = datas ? datas.metadataDTO : {};
	    var userName = states.framework.loginApi.data.loginUserProfileDTO.loginName;
	    //订阅用户
	    var dyyhCloumn = [{
	        title: "订阅用户",
	        dataIndex: 'name',
	        key: 'name'
	    }, {
	        title: "订阅单位",
	        dataIndex: 'company',
	        key: 'company'
	    }, {
	        title: "用户等级",
	        dataIndex: 'level',
	        key: 'level',
	        render: function render(text, record, index) {
	            switch (record.level) {
	                case '1':
	                    return '一级';
	                case '2':
	                    return '二级';
	                case '3':
	                    return '三级';
	            }
	        }
	    }, {
	        title: "申请原因",
	        dataIndex: 'applayReason',
	        key: 'applayReason'
	    }, {
	        title: "订阅时间",
	        dataIndex: 'applayTime',
	        key: 'applayTime'
	    }, {
	        title: "联系电话",
	        dataIndex: 'telphone',
	        key: 'telphone'
	    }];
	    var next = function next() {
	        callback({
	            "success": true,
	            "data": [{
	                "title": "元数据基本信息",
	                "column": 2,
	                "showTitle": true,
	                "titleIcon": "metadata-message",
	                "data": [{ "type": "text", "name": "文件编码", "field": "resName", "defaultValue": metadataDetail.restitle ? metadataDetail.restitle : "" }, { "type": "text", "name": "文件名称", "field": "resName", "defaultValue": metadataDetail.restitle ? metadataDetail.restitle : "" }, { "type": "text", "name": "关键字", "field": "keyword", "defaultValue": metadataDetail.keyword ? metadataDetail.keyword : "" }, { "type": "text", "name": "国家主题分类", "field": "themeType", "defaultValue": datas.themeTypeName ? datas.themeTypeName : "" }, { "type": "text", "name": "部门主题分类", "field": "departmentType", "defaultValue": datas.departmentTypeName ? datas.departmentTypeName : "" }, { "type": "text", "name": "资源类型", "field": "resourceType", "defaultValue": '文件' }, { "type": "text", "name": "数据提供方单位", "field": "rporgname", "defaultValue": metadataDetail.rporgname ? metadataDetail.rporgname : "" }, { "type": "text", "name": "数据提供方地址", "field": "address", "defaultValue": metadataDetail.address ? metadataDetail.address : "" }]
	            }, {
	                "title": "订阅用户",
	                "showTitle": true,
	                "titleIcon": "user",
	                "data": function data() {
	                    var rowSelection = {
	                        onSelect: function onSelect(record, selected, selectedRows) {
	                            _global.Global.mark({
	                                dataList: {
	                                    wfbdzyFileCxdyUserId: record.subSendEquipment
	                                }
	                            });
	                        }
	                    };
	                    // let values = {};
	                    // values = {...values};
	                    return _react2["default"].createElement(_table2["default"], { rowSelection: rowSelection, columns: dyyhCloumn, dataSource: _global.Global.getState().dataList.wfbdzyFileCxdy.data.content, bordered: true });
	                }
	            }, {
	                "title": "资源撤销订阅信息",
	                "column": 2,
	                "showTitle": true,
	                "titleIcon": "res-pub-mes",
	                "buttonConfigs": {
	                    //"onSubmitApi":{apiName:"wfbdzyCxdySubmit"},
	                    "getValue": { id: "aFBCD", index: 2 },
	                    "buttons": [{ "type": "button", "value": "取消", props: { "style": { "float": "right" } } }, { "type": "button", "value": "撤销订阅", props: { type: "primary", "style": { "float": "right" }, onClick: function onClick() {
	                                var form = _global.Global.getState().aiForm.aFBCD.form;
	                                var value = form.getFieldValue('revokeReason');
	                                var ids = _global.Global.getState().dataList.wfbdzyFileCxdyUserId;
	                                if (ids) {
	                                    _global.Global.requestApi({ apiName: "wfbdzyCxdySubmit", body: { resourceId: datas.id, subSendEquipment: ids, revokeReason: value }, next: function next() {
	                                            var result = _global.Global.getState().dataList.wfbdzyFileCxdy.wfbdzyFileCxdyResult;
	                                            if (result) {
	                                                _modal2["default"].success({
	                                                    title: '提示',
	                                                    content: '撤销订阅成功'
	                                                });
	                                                _global.Global.mark({
	                                                    dataList: {
	                                                        wfbdzySjkCxdy: null,
	                                                        wfbdzyFileCxdyUserId: null
	                                                    }
	                                                });
	                                                _history2["default"].push('datalist/list/wfbdzyFile/0/10');
	                                            } else {

	                                                _modal2["default"].warning({
	                                                    title: '提示',
	                                                    content: '撤销订阅失败'
	                                                });
	                                            }
	                                        } }, ['requestFileCxdy', 'receieveFileCxdy', 'failedFileCxdy'], { dataList: { wfbdzyFileCxdy: { wfbdzyFileCxdyResult: null } } });
	                                } else {
	                                    _modal2["default"].warning({
	                                        title: '提示',
	                                        content: '请选择撤销的订阅用户'
	                                    });
	                                }
	                            } } }]
	                },
	                "data": [{ "name": "撤销原因", "type": "input", "field": "revokeReason" }, { "name": "申请人", "type": "text", "defaultValue": userName, field: "applyUser" }]
	            }]
	        });
	    };
	    _global.Global.requestApi({
	        apiName: 'wfbdzySjkZyckDyyh',
	        body: {
	            resourceId: _global.Global.getState().dataList.wfbdzyFile.selectedRows[0]
	        },
	        next: next
	    }, ['requestDyyh', 'receieveDyyh', 'failedTableDyyh'], {
	        dataList: {
	            wfbdzyFileCxdy: null
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