(function(){ var runed=0,temp,timer,time;webpackJsonp([3],{

/***/ "./src/components/Dyyh4.js":
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _css = __webpack_require__("./src/ant_blue_theme/table/style/css.js");

	var _table = __webpack_require__("./node_modules/antFB/lib/table/index.js");

	var _table2 = _interopRequireDefault(_table);

	var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

	var _extends3 = _interopRequireDefault(_extends2);

	var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _index = __webpack_require__("./node_modules/redbox-react/lib/index.js");

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__("./node_modules/react-transform-catch-errors/lib/index.js");

	var _index4 = _interopRequireDefault(_index3);

	var _react2 = __webpack_require__("./node_modules/react/react.js");

	var _react3 = _interopRequireDefault(_react2);

	var _index5 = __webpack_require__("./node_modules/react-transform-hmr/lib/index.js");

	var _index6 = _interopRequireDefault(_index5);

	var _class, _temp;

	var _Footer = __webpack_require__("./src/components/Footer.less");

	var _Footer2 = _interopRequireDefault(_Footer);

	var _component = __webpack_require__("./src/core/component.js");

	var _component2 = _interopRequireDefault(_component);

	var _global = __webpack_require__("./src/core/global.js");

	var _interfaces = __webpack_require__("./src/interfaces.js");

	var _actionType = __webpack_require__("./src/actions/actionType.js");

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _components = {
	    JsonpComp: {
	        displayName: 'JsonpComp'
	    }
	};

	var _DWorkspaceDSSGNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6["default"])({
	    filename: 'D:/workspace/DSSG/src/components/Dyyh4.js',
	    components: _components,
	    locals: [module],
	    imports: [_react3["default"]]
	});

	var _DWorkspaceDSSGNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4["default"])({
	    filename: 'D:/workspace/DSSG/src/components/Dyyh4.js',
	    components: _components,
	    locals: [],
	    imports: [_react3["default"], _index2["default"]]
	});

	function _wrapComponent(id) {
	    return function (Component) {
	        return _DWorkspaceDSSGNode_modulesReactTransformHmrLibIndexJs2(_DWorkspaceDSSGNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	    };
	} /**
	   * Created by liy on 2017/1/9 0009.
	   */
	/**
	 * Created by liy on 2017/1/9 0009.
	 */


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
	    key: 'level'
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

	var rootState = 'test';

	var JsonpComp = _wrapComponent('JsonpComp')((_temp = _class = function (_Component) {
	    (0, _inherits3["default"])(JsonpComp, _Component);

	    function JsonpComp(props) {
	        (0, _classCallCheck3["default"])(this, JsonpComp);
	        return (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));
	    }

	    JsonpComp.prototype.componentDidMount = function componentDidMount() {
	        if (JsonpComp.init) {
	            _global.Global.mark({ wfbdzySjkZyck: {
	                    bottomData: {
	                        data: {
	                            content: null
	                        }
	                    }
	                }
	            });
	            this.requestList(_global.Global.getState().dataList.dyspWj.selectedRows[0]); //
	            JsonpComp.init = false;
	        }
	    };

	    JsonpComp.prototype.requestList = function requestList(id) {
	        _global.Global.requestApi((0, _extends3["default"])({}, _interfaces.wfbdzySjkZyckDyyh, { body: (0, _extends3["default"])({}, _interfaces.wfbdzySjkZyckDyyh.body, { resourceId: id }) }), _actionType.wfbdzySjkZyck.requestListApi, { wfbdzySjkZyck: { bottomData: null } });
	    };

	    JsonpComp.prototype.render = function render() {
	        var state = this.props.wfbdzySjkZyck;
	        if (!state || !state.bottomData) return _react3["default"].createElement(
	            'div',
	            null,
	            '...'
	        );
	        if (state.bottomData.msg) return _react3["default"].createElement(
	            'div',
	            null,
	            state.bottomData.msg
	        );
	        return _react3["default"].createElement(_table2["default"], { pagination: false, columns: dyyhCloumn, dataSource: state.bottomData.data.content || [], bordered: true });
	    };

	    return JsonpComp;
	}(_react2.Component), _class.init = true, _temp));

	exports["default"] = (0, _component2["default"])(rootState, {}, function (state) {
	    return { wfbdzySjkZyck: state.wfbdzySjkZyck };
	})(JsonpComp);
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/atool-build/node_modules/webpack/buildin/module.js")(module)))

/***/ },

/***/ "1484732969000":
/***/ temp=function(module, exports, __webpack_require__) {
runed = true;

	'use strict';

	var _react = __webpack_require__("./node_modules/react/react.js");

	var _react2 = _interopRequireDefault(_react);

	var _AiLabel = __webpack_require__("./src/components/AiLabel.js");

	var _AiLabel2 = _interopRequireDefault(_AiLabel);

	var _AiFormTable = __webpack_require__("./src/components/AiFormTable.js");

	var _AiFormTable2 = _interopRequireDefault(_AiFormTable);

	var _aiFormTable = __webpack_require__("./src/actions/aiFormTable.js");

	var _global = __webpack_require__("./src/core/global.js");

	var _jsonp = __webpack_require__("./src/core/jsonp.js");

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _Dyyh = __webpack_require__("./src/components/Dyyh4.js");

	var _Dyyh2 = _interopRequireDefault(_Dyyh);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("dyspWjSjkSjclclData")(function (args, callback) {
	    var apiData = args.apiData;
	    var ysjBasicInf = apiData ? apiData.metadataDTO : {};
	    var processRecordDTO = apiData ? apiData.processRecordDTO : {};

	    callback({
	        "success": true,
	        "data": [{
	            "title": "元数据基本信息",
	            "column": 2,
	            "showTitle": true,
	            "titleIcon": "file-text",
	            "data": [{ "type": "text", "name": "标题", "field": "resName", "defaultValue": ysjBasicInf.resName ? ysjBasicInf.resName : "" }, { "type": "text", "name": "摘要", "field": "abstracts", "defaultValue": ysjBasicInf.abstracts ? ysjBasicInf.abstracts : "" }, { "type": "text", "name": "关键字", "field": "keyword", "defaultValue": ysjBasicInf.keyword ? ysjBasicInf.keyword : "" }, { "type": "text", "name": "国家主题分类", "field": "subjectcarategory", "defaultValue": ysjBasicInf.subjectcarategory ? ysjBasicInf.subjectcarategory : "" }, { "type": "text", "name": "部门主题分类", "field": "departmentCategory", "defaultValue": ysjBasicInf.departmentType ? ysjBasicInf.departmentType : "" }, { "type": "text", "name": "订阅类型", "field": "resourceType", "defaultValue": "文件" }, { "type": "text", "name": "数据提供方单位", "field": "rporgname", "defaultValue": ysjBasicInf.rporgname ? ysjBasicInf.rporgname : "" }, { "type": "text", "name": "数据提供方地址", "field": "address", "defaultValue": ysjBasicInf.address ? ysjBasicInf.address : "" }]
	        }, {
	            "title": "订阅用户",
	            "showTitle": true,
	            "titleIcon": "user",
	            "data": _react2["default"].createElement(_Dyyh2["default"], { id: 'bottomData4' })
	        }, {
	            "title": "资源申请订阅信息",
	            "column": 2,
	            "showTitle": true,
	            "titleIcon": "file-text",
	            "data": [{ "name": "申请订阅原因", "type": "text", "field": "applyReason", "defaultValue": processRecordDTO.applyReason }, { "name": "申请人", "type": "text", "field": "applyUser", "defaultValue": processRecordDTO.applyUser }, { "name": "申请订阅时间", "type": "text", "field": "applyTime", "defaultValue": processRecordDTO.applyTime }]
	        }, {
	            "title": "资源订阅审批信息",
	            "column": 2,
	            "showTitle": true,
	            "titleIcon": "file-text",
	            "data": [{ "type": "text", "name": "审批结果", "field": "result", "defaultValue": _global.Global.getState().aiForm.getDyspWjEdit.result }, { "name": "审批意见", "type": "text", "field": "reviewDesc", "defaultValue": _global.Global.getState().aiForm.getDyspWjEdit.reviewDesc }]
	        }]
	    });
	});

/***/ },

/***/ "./src/components/Footer.less":
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"footer":"footer___1VVCW"};

/***/ },

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__("./node_modules/webpack-hot-middleware-ie8/client.js?path=http:/127.0.0.1:8000/__webpack_hmr");
	module.exports = __webpack_require__("1484732969000");if(!runed){
            clearInterval(timer);
            timer = setInterval(function(){
                if(temp) {
                    temp(module, exports, __webpack_require__);
                    clearInterval(timer);
                    delete temp;
                    
                }
                time++;
                if(time>500){
                    clearInterval(timer);
                    console.log('more than 500 times')
                }
            },500);
        }


/***/ }

});
})()
//# sourceMappingURL=pageArgs.js.map