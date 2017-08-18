webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(2501);

	var _modal = __webpack_require__(29);

	var _modal2 = _interopRequireDefault(_modal);

	var _css2 = __webpack_require__(61);

	var _table = __webpack_require__(60);

	var _table2 = _interopRequireDefault(_table);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _AiFormTable = __webpack_require__(310);

	var _AiFormTable2 = _interopRequireDefault(_AiFormTable);

	var _AiLabel = __webpack_require__(311);

	var _AiLabel2 = _interopRequireDefault(_AiLabel);

	var _global = __webpack_require__(10);

	var _history = __webpack_require__(32);

	var _history2 = _interopRequireDefault(_history);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * Created by liy on 2016/12/20 0020.
	 */
	(0, _jsonp2["default"])("wfbdzySjkCxdy")(function (args, callback) {
	    var metadataDetail = args.detail ? args.detail.metadataDTO : {};
	    //let subscriber = args.detail && args.detail.subscriber ? args.detail.subscriber:[];

	    var dataSource = [{
	        "subSendEquipment": "bdc396151ddd0cb87346737a4ff430gm",
	        "name": "法院",
	        "company": "高院",
	        "level": "3",
	        "telphone": null,
	        "applayReason": null,
	        "applayTime": null
	    }, {
	        "subSendEquipment": "bdc396151ddd0cb87346737a4ff430gm1",
	        "name": "法院",
	        "company": "高院",
	        "level": "3",
	        "telphone": null,
	        "applayReason": null,
	        "applayTime": null
	    }, {
	        "subSendEquipment": "bdc396151ddd0cb87346737a4ff430gm2",
	        "name": "法院",
	        "company": "高院",
	        "level": "3",
	        "telphone": null,
	        "applayReason": null,
	        "applayTime": null
	    }, {
	        "subSendEquipment": "bdc396151ddd0cb87346737a4ff430gm3",
	        "name": "法院",
	        "company": "高院",
	        "level": "3",
	        "telphone": null,
	        "applayReason": null,
	        "applayTime": null
	    }];
	    //订阅用户
	    var dyyhCloumn = [{
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
	        dataIndex: 'telPhone',
	        key: 'telPhone'
	    }];
	    var next = function next() {
	        callback({
	            "success": true,
	            "data": [{
	                "title": "元数据基本信息",
	                "column": 2,
	                "showTitle": true,
	                "titleIcon": "file-text",
	                "data": [{
	                    "type": "text",
	                    "name": "标题",
	                    "field": "restitle",
	                    "defaultValue": metadataDetail.restitle ? metadataDetail.restitle : ""
	                }, {
	                    "type": "text",
	                    "name": "摘要",
	                    "field": "abstracts",
	                    "defaultValue": metadataDetail.abstracts ? metadataDetail.abstracts : ""
	                }, {
	                    "type": "text",
	                    "name": "关键字",
	                    "field": "keyword",
	                    "defaultValue": metadataDetail.keyword ? metadataDetail.keyword : ""
	                }, {
	                    "type": "text",
	                    "name": "国家主题分类",
	                    "field": "subjectcarategory",
	                    "defaultValue": metadataDetail.subjectcarategory ? metadataDetail.subjectcarategory : ""
	                }, {
	                    "type": "text",
	                    "name": "部门主题分类",
	                    "field": "departmentcategory",
	                    "defaultValue": metadataDetail.departmentcategory ? metadataDetail.departmentcategory : ""
	                }, { "type": "text", "name": "资源类型", "field": "resourceType", "defaultValue": '数据库' }, {
	                    "type": "text",
	                    "name": "数据提供方单位",
	                    "field": "rporgname",
	                    "defaultValue": metadataDetail.rporgname ? metadataDetail.rporgname : ""
	                }, {
	                    "type": "text",
	                    "name": "数据提供方地址",
	                    "field": "address",
	                    "defaultValue": metadataDetail.address ? metadataDetail.address : ""
	                }]
	            }, {
	                "title": "订阅设备",
	                "showTitle": true,
	                "titleIcon": "user",
	                "data": function data() {
	                    var rowSelection = {
	                        onChange: function onChange(selectedRowKeys, selectedRows) {
	                            console.log('selectedRowKeys: ' + selectedRowKeys, 'selectedRows: ', selectedRows);
	                            var userId = [];
	                            selectedRows.forEach(function (item) {
	                                userId.push(item.subSendEquipment);
	                            });
	                            var userIds = userId.join(",");
	                            if (userId.length == 0) {
	                                _global.Global.mark({
	                                    dataList: {
	                                        wfbdzySjkCxdyUserId: null
	                                    }
	                                });
	                            } else {
	                                _global.Global.mark({
	                                    dataList: {
	                                        wfbdzySjkCxdyUserId: userIds
	                                    }
	                                });
	                            }
	                        },

	                        onSelect: function onSelect(record, selected, selectedRows) {
	                            console.log(record, selected, selectedRows);
	                            // Global.mark({
	                            //     dataList:{
	                            //         wfbdzySjkCxdyUserId:record.subSendEquipment
	                            //     }
	                            // })
	                        }
	                    };
	                    // let values = {};
	                    // values = {...values};Global.getState().dataList.wfbdzySjkCxdy.data.content
	                    return _react2["default"].createElement(
	                        'div',
	                        { className: "customizedTable" },
	                        _react2["default"].createElement(_table2["default"], { rowSelection: rowSelection, columns: dyyhCloumn,
	                            dataSource: _global.Global.getState().dataList.wfbdzySjkCxdy.data.content,
	                            bordered: true })
	                    );
	                }
	            }, {
	                "title": "资源撤销订阅信息",
	                "column": 2,
	                "showTitle": true,
	                "titleIcon": "rollback",
	                "buttonConfigs": {
	                    //"onSubmitApi":{apiName:"wfbdzyCxdySubmit"},
	                    //"getValue": {id: "aFBCD", index: 2},
	                    "buttons": [{ "type": "button", "value": "取消", props: { "style": { "float": "right" } } }, {
	                        "type": "button", "value": "确定", props: {
	                            type: "primary", "style": { "float": "right" }, onClick: function onClick() {
	                                var form = args.target.props.form;
	                                var value = form.getFieldValue('revokeReason');
	                                var ids = _global.Global.getState().dataList.wfbdzySjkCxdyUserId;
	                                if (ids) {
	                                    _global.Global.requestApi({
	                                        apiName: "wfbdzyCxdySubmit",
	                                        body: {
	                                            resourceId: args.detail.id,
	                                            subSendEquipment: _global.Global.getState().dataList.wfbdzySjkCxdyUserId,
	                                            revokeReason: value
	                                        },
	                                        next: function next(action) {
	                                            //let result = Global.getState().dataList.wfbdzySjkCxdy.wfbdzySjkCxdyResult;
	                                            if (action) {
	                                                _modal2["default"].success({
	                                                    title: '提示',
	                                                    content: '撤销订阅成功'
	                                                });

	                                                _global.Global.mark({
	                                                    dataList: {
	                                                        wfbdzySjkCxdyUserId: null
	                                                    }
	                                                });
	                                                _history2["default"].push('datalistV1/wfbdzySjk/list/0/10');
	                                                //window.history.back(-1);
	                                                _global.Global.mark({
	                                                    dataList: {
	                                                        wfbdzySjkCxdy: null
	                                                    }
	                                                });
	                                            } else {
	                                                _modal2["default"].warning({
	                                                    title: '提示',
	                                                    content: '撤销订阅失败'
	                                                });
	                                            }
	                                        }
	                                    }, {}, {});
	                                } else {
	                                    _modal2["default"].warning({
	                                        title: '提示',
	                                        content: '请选择撤销的用户'
	                                    });
	                                }
	                            }
	                        }
	                    }]
	                },
	                "data": [{ "name": "撤销原因", "type": "input", "field": "revokeReason" }, {
	                    "name": "申请人",
	                    "type": "text",
	                    "field": "applyUser",
	                    "defaultValue": _global.Global.getState().framework.loginApi.data.loginUserProfileDTO.loginName
	                }]
	            }]
	        });
	    };
	    _global.Global.requestApi({
	        apiName: 'wfbdzySjkZyckDyyh',
	        body: {
	            resourceId: _global.Global.getState().dataList.wfbdzySjk.selectedRows[0]
	        },
	        next: next
	    }, ['requestDyyh', 'receieveDyyh', 'failedTableDyyh'], {
	        dataList: {
	            wfbdzySjkCxdy: null
	        }
	    });
	});

/***/ }
]);