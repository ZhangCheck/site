(function(){ var runed=0,temp,timer,time;webpackJsonp([3],[
/* 0 */
/***/ temp = function(module, exports, __webpack_require__) {runed=true;

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(234);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/* import './other.html';
	 import React from 'react';
	 import ReactDOM from 'react-dom'; */
	(0, _jsonp2["default"])("ftpMlgl")(function (args, callback) {
	    callback({
	        "success": true,
	        "data": {
	            "id": "ftpMlgl",
	            "title": "FTP目录管理",
	            "buttonConfigs": [{ "buttonName": "add" }, { "buttonName": "edit" }, { "buttonName": "delete" }],
	            "table": {
	                "primarykey": "id",
	                "clounms": [{
	                    "title": "内交换用户名",
	                    "dataIndex": "innerUserName",
	                    "key": "innerUserName"
	                }, {
	                    "title": "外交换用户名",
	                    "dataIndex": "outerUserName",
	                    "key": "outerUserName"
	                }, {
	                    "title": "内交换路径",
	                    "dataIndex": "innerAddress",
	                    "key": "innerAddress"
	                }, {
	                    "title": "外交换路径",
	                    "dataIndex": "outerAddress",
	                    "key": "outerAddress"
	                }, {
	                    "title": "传输方向",
	                    "dataIndex": "userFlag",
	                    "key": "userFlag",
	                    render: function render(text, record, index) {
	                        switch (text) {
	                            case "1":
	                                return "内->外";
	                            case "0":
	                                return "外->内";
	                        }
	                    }
	                }],
	                "body": { apiName: 'ftpMlglData', body: { page: 0, size: 10 } }
	            },
	            "list": {
	                "view": null,
	                "listApi": null,

	                "saveApi": null
	            },
	            "add": {
	                "initData": {
	                    data: { apiName: "getFtpMlglEdit" }
	                },
	                "onAddSubmitApi": { "apiName": "ftpMlglAddData" }
	            },
	            "edit": {
	                "initData": {
	                    data: { apiName: "getFtpMlglEdit" }
	                },
	                "onUpdateSubmitApi": { "apiName": "ftpMlglEditData" }
	            },
	            "delete": {
	                "body": { apiName: 'deleteSysUser' }
	            },
	            "detail": {
	                "initData": {
	                    data: { apiName: "sjyglDetailDemo" }
	                },
	                "body": { apiName: 'ftpMlglDetailData' }
	            },
	            "check": {
	                "view": null,
	                "checkApi": null
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