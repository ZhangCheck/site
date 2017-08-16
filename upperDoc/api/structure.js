webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(49);

	var _form = __webpack_require__(47);

	var _form2 = _interopRequireDefault(_form);

	var _css2 = __webpack_require__(394);

	var _tree = __webpack_require__(336);

	var _tree2 = _interopRequireDefault(_tree);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(250);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(12);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var TreeNode = _tree2["default"].TreeNode;
	var FormItem = _form2["default"].Item;
	var data = [{
	    key: 'project',
	    discription: "项目根目录",
	    children: [{ key: "dist", discription: "发布后的文件，最终在服务器上运行的文件." }, { key: "node_modules", discription: "前端依赖包." }, { key: "node_modules_fix", discription: "前端依赖包的修正包." }, { key: "src", discription: "前端源码.", children: [{ key: "_test_", discription: "单元测试文件" }, { key: "actions", discription: "行为定义文件（不建议使用）" }, { key: "ant_blue_theme", discription: "全局样式定义文件" }, { key: "components", discription: "项目组件", children: [{ key: "DataList.js", discription: "旧版本Datalist组件（已停用)" }, { key: "DataListV1.js", discription: "数据表组件" }, { key: "TableComponentV1.js", discription: "数据表-表格渲染组件" }, { key: "HeaderComponent.js", discription: "数据表-表头渲染组件" }, { key: "ButtonComponentV1.js", discription: "数据表-头部按钮渲染组件" }, { key: "AiForm.js", discription: "表单组件" }] }, { key: "containers", discription: "项目页面入口" }, { key: "core", discription: "核心关键文件" }, { key: "entities", discription: "项目主入口", children: [{ key: "index.dev.js", discription: "项目入口js" }, { key: "index.js", discription: "自动生成的发布入口js（无需修改）" }, { key: "index.html", discription: "入口html" }, { key: "commonBase.js", discription: "分离到通用js中的类" }, { key: "pageArgs.js", discription: "当前编辑的页面代码（动态文件，无需修改）" }] }, { key: "lang", discription: "js语言扩充" }, { key: "math", discription: "数据计算工具" }, { key: "pageArgs", discription: "异步子页面定义文件" }, { key: "public", discription: "网站静态文件" }, { key: "reducers", discription: "状态处理文件（不建议使用）" }, { key: "sagas", discription: "状态监听文件（不建议使用）" }, { key: "config.js", discription: "项目配置文件" }, { key: "interface.js", discription: "接口配置文件" }, { key: "routerNameMap.js", discription: "路由名称映射文件" }] }, { key: "zbuild", discription: "项目编译工具." }, { key: "package.json", discription: "项目配置." }, { key: "pom.xml", discription: "自动打包配置文件（暂未使用)." }]
	}];
	var loop = function loop(data) {
	    return data.map(function (item) {
	        if (item.children) {
	            return _react2["default"].createElement(
	                TreeNode,
	                { key: item.key, title: item.key + ": " + item.discription, disableCheckbox: item.key === '0-0-0' },
	                loop(item.children)
	            );
	        }
	        return _react2["default"].createElement(TreeNode, { key: item.key, title: item.key + ": " + item.discription });
	    });
	};

	(0, _jsonp2["default"])("structure")(function (arg, callback) {
	    callback({
	        "success": true,
	        "data": _react2["default"].createElement(
	            'div',
	            { style: { padding: 10 } },
	            _react2["default"].createElement(
	                'h3',
	                null,
	                '\u9879\u76EE\u6587\u4EF6'
	            ),
	            _react2["default"].createElement(
	                'div',
	                null,
	                _react2["default"].createElement(
	                    'div',
	                    { style: { "float": 'left', height: 920 } },
	                    _react2["default"].createElement('img', { src: 'images/structure.jpg' })
	                ),
	                _react2["default"].createElement(
	                    'div',
	                    null,
	                    _react2["default"].createElement(
	                        _tree2["default"],
	                        { defaultExpandAll: true },
	                        loop(data)
	                    )
	                )
	            )
	        )
	    });
	});

/***/ }
]);