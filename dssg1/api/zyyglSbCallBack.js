webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(3022);

	var _modal = __webpack_require__(29);

	var _modal2 = _interopRequireDefault(_modal);

	var _css2 = __webpack_require__(54);

	var _form = __webpack_require__(53);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(10);

	var _interfaces = __webpack_require__(35);

	var _actionType = __webpack_require__(22);

	var _ZyyglSbAdd = __webpack_require__(1153);

	var _ZyyglSbAdd2 = _interopRequireDefault(_ZyyglSbAdd);

	var _dataList = __webpack_require__(30);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var FormItem = _form2["default"].Item; /**
	                                     * Created by liy on 2016/12/17 0017.
	                                     */

	(0, _jsonp2["default"])("zyyglSbCallBack")(function (args, callback) {
	    var target = args.target;
	    callback({
	        "success": true,
	        "data": [{
	            "data": _react2["default"].createElement(_ZyyglSbAdd2["default"], { id: 'zyysggl_inst' }),
	            "buttonConfigs": {
	                "buttons": [{ "type": "button", "value": "取消", mark: "zyysbgl", props: { "style": { "float": "right" } } }, { "type": "button", "value": "确定", mark: "zyysbgl", props: { type: "primary", "style": { "float": "right" }, onClick: function onClick() {
	                            var state = _global.Global.getState();
	                            var listArray = state.zyyglSbAdd.zyysggl_inst.list;
	                            var validate = listArray.length > 0;
	                            if (validate) {
	                                _modal2["default"].confirm({
	                                    title: '告警信息',
	                                    content: '是否确定邀请？',
	                                    onOk: function onOk() {
	                                        var listForm = [];
	                                        for (var i = 0; i < listArray.length; i++) {
	                                            listForm.push(listArray[i].id);
	                                        }
	                                        _global.Global.requestApi({ apiName: "newEquipmentDomainInfo", body: { newListId: listForm, domainId: _global.Global.getState().framework.zyyglTreeData.selected }, next: function next(action) {

	                                                if (action.code == "0") {
	                                                    _modal2["default"].success({
	                                                        title: "提示",
	                                                        content: "邀请成功！",
	                                                        onOk: function onOk() {
	                                                            _global.Global.mark({
	                                                                dataList: {
	                                                                    zyyglSbConfigs: {
	                                                                        dialogs: null
	                                                                    }
	                                                                }
	                                                            });
	                                                            _global.Global.dispatch((0, _dataList.requestTableBodyData)("zyyglSbConfigs", { apiName: "findDomainEquipmentByListTableInfo", body: { id: _global.Global.getState().framework.zyyglTreeData.selected[0] } }));
	                                                            _global.Global.requestApi({ apiName: 'findDomainResByTreeInfo', body: { name: null } }, { zyygl: { zyygl_inst: { zyyglTreeData: null } } });
	                                                        }

	                                                    });
	                                                    listForm = [];
	                                                } else {
	                                                    _modal2["default"].warning({
	                                                        title: "提示",
	                                                        content: "编辑失败！"
	                                                    });
	                                                }
	                                            } });
	                                    },
	                                    onCancel: function onCancel() {
	                                        console.log("reset exit!!!");
	                                    }
	                                });
	                            } else {
	                                _modal2["default"].warning({
	                                    title: "提示",
	                                    content: "请选择需要邀请的设备！"
	                                });
	                            }
	                        } } }]
	            }
	        }]

	    });
	});

/***/ },

/***/ 1153:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _css = __webpack_require__(44);

	var _icon = __webpack_require__(19);

	var _icon2 = _interopRequireDefault(_icon);

	var _defineProperty2 = __webpack_require__(7);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(6);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(5);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _css2 = __webpack_require__(3022);

	var _modal = __webpack_require__(29);

	var _modal2 = _interopRequireDefault(_modal);

	var _css3 = __webpack_require__(199);

	var _tree = __webpack_require__(196);

	var _tree2 = _interopRequireDefault(_tree);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _component = __webpack_require__(11);

	var _component2 = _interopRequireDefault(_component);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(10);

	var _DataList = __webpack_require__(104);

	var _DataList2 = _interopRequireDefault(_DataList);

	var _Sbgl = __webpack_require__(491);

	var _Sbgl2 = _interopRequireDefault(_Sbgl);

	var _AiForm = __webpack_require__(27);

	var _AiForm2 = _interopRequireDefault(_AiForm);

	var _interfaces = __webpack_require__(35);

	var _dataFormat = __webpack_require__(64);

	var _history = __webpack_require__(32);

	var _history2 = _interopRequireDefault(_history);

	var _DataListV = __webpack_require__(121);

	var _DataListV2 = _interopRequireDefault(_DataListV);

	var _dataList = __webpack_require__(30);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var TreeNode = _tree2["default"].TreeNode;
	var modalWarning = function modalWarning(content) {
	    _modal2["default"].warning({
	        title: '提示',
	        content: content,
	        onOk: function onOk() {}
	    });
	};

	var ZyyglSbAdd = function (_Component) {
	    (0, _inherits3["default"])(ZyyglSbAdd, _Component);

	    function ZyyglSbAdd(props) {
	        (0, _classCallCheck3["default"])(this, ZyyglSbAdd);

	        var _this = (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));

	        _global.Global.requestApi({ apiName: "findDomainResByEquipmentTreeInfo", body: { name: null }, next: function next(action) {
	                if (action.code == 0) {
	                    console.log("树形结构数据加载成功");
	                }
	            } }, { zyyglSbAdd: { zyysggl_inst: { zyyglTreeData: null } } });

	        _global.Global.requestApi({ apiName: "findDomainEquipmentByDomainIdInfo", body: { domainId: _global.Global.getState().framework.zyyglTreeData.selected[0] }, next: function next(action) {
	                var listDb = [];
	                if (action.code == 0) {
	                    if (null != action.data) {
	                        for (var i = 0; i < action.data.length; i++) {
	                            var treeDb = { id: action.data[i].equipmentId, name: action.data[i].equipmentName };
	                            listDb.push(treeDb);
	                        }
	                    }
	                }
	                console.log(listDb.length);
	                _global.Global.mark({
	                    zyyglSbAdd: (0, _defineProperty3["default"])({}, _this.props.id, {
	                        list: listDb.length < 1 ? [] : listDb
	                    })
	                }, 'ZyyglSbConfig_init');
	            } }, {}, {});

	        return _this;
	    }
	    //判断list中是否存在重复


	    ZyyglSbAdd.prototype.array_contain = function array_contain(array, obj) {
	        for (var i = 0; i < array.length; i++) {
	            if (array[i].id == obj.id) {
	                return true;
	            }
	        }
	        return false;
	    };

	    ZyyglSbAdd.prototype.onSelectNode = function onSelectNode(selectedKeys, e) {
	        console.log("e:", e);
	        var treeDb = { id: e.node.props.eventKey, name: e.node.props.title };
	        var list = this.props.state.list;
	        if (e.node.props.iseq) {
	            if (this.array_contain(list, treeDb)) {
	                _modal2["default"].warning({
	                    title: '提示',
	                    content: e.node.props.title + "已添加,请不要重复添加设备",
	                    onOk: function onOk() {
	                        return;
	                    }
	                });
	            } else {
	                list.push(treeDb);
	                _global.Global.mark({
	                    zyyglSbAdd: (0, _defineProperty3["default"])({}, this.props.id, {
	                        list: list
	                    })
	                }, 'ZyyglSbAdd_onSelectNode');
	            }
	        }
	    };

	    ZyyglSbAdd.prototype.onClickItem = function onClickItem(item, event) {
	        var list = this.props.state.list;
	        if (list.indexOf(item) == -1) {
	            return;
	        }
	        list.splice(list.indexOf(item), 1);
	        _global.Global.mark({
	            zyyglSbAdd: (0, _defineProperty3["default"])({}, this.props.id, {
	                list: list
	            })
	        }, 'onClickItem');
	    };

	    ZyyglSbAdd.prototype.render = function render() {
	        var _this2 = this;

	        var sbglState = _global.Global.getState().zyyglSbAdd.zyysggl_inst;
	        var zyyglTreeDatas = sbglState.zyyglTreeData && sbglState.zyyglTreeData.data ? sbglState.zyyglTreeData.data : [];
	        var selected = sbglState.zyyglTreeData ? sbglState.zyyglTreeData.selected : [];
	        var nodeDatas = [];
	        zyyglTreeDatas && zyyglTreeDatas.length > 0 && zyyglTreeDatas.forEach(function (item, i) {
	            var secondNodeDatas = [];
	            if (item.children && item.children.length > 0) {
	                item.children.forEach(function (itemSecond, i) {
	                    var thirdNodeDatas = [];
	                    if (itemSecond.children && itemSecond.children.length > 0) {
	                        itemSecond.children.forEach(function (itemThird, i) {
	                            var fourthNodeDatas = [];
	                            if (itemThird.children && itemThird.children.length > 0) {
	                                itemThird.children.forEach(function (itemFourth, i) {
	                                    fourthNodeDatas.push(_react2["default"].createElement(TreeNode, { iseq: itemFourth.eq, title: itemFourth.name, key: itemFourth.id }));
	                                });
	                                thirdNodeDatas.push(_react2["default"].createElement(
	                                    TreeNode,
	                                    { iseq: itemThird.eq, title: itemThird.name, key: itemThird.id },
	                                    fourthNodeDatas
	                                ));
	                            } else {
	                                thirdNodeDatas.push(_react2["default"].createElement(TreeNode, { iseq: itemThird.eq, title: itemThird.name, key: itemThird.id }));
	                            }
	                        });
	                        secondNodeDatas.push(_react2["default"].createElement(
	                            TreeNode,
	                            { iseq: itemSecond.eq, title: itemSecond.name, key: itemSecond.id },
	                            thirdNodeDatas
	                        ));
	                    } else {
	                        secondNodeDatas.push(_react2["default"].createElement(TreeNode, { iseq: itemSecond.eq, title: itemSecond.name, key: itemSecond.id }));
	                    }
	                });
	                nodeDatas.push(_react2["default"].createElement(
	                    TreeNode,
	                    { iseq: item.eq, title: item.name, key: item.id },
	                    secondNodeDatas
	                ));
	            } else {
	                nodeDatas.push(_react2["default"].createElement(TreeNode, { iseq: item.eq, title: item.name, key: item.id }));
	            }
	        });

	        var state = this.props.state;
	        if (!state) return _react2["default"].createElement(
	            'div',
	            null,
	            '...'
	        );
	        return zyyglTreeDatas && zyyglTreeDatas.length > 0 ? _react2["default"].createElement(
	            'div',
	            { className: '${sbglStyles.equipmentNetworkShow}', style: { height: 350 } },
	            _react2["default"].createElement(
	                'div',
	                { style: { width: 220, height: 600, border: 0 } },
	                _react2["default"].createElement(
	                    'div',
	                    { className: "treeNodeAll" },
	                    zyyglTreeDatas.length > 0 ? _react2["default"].createElement(
	                        _tree2["default"],
	                        { onSelect: this.onSelectNode.bind(this), defaultExpandAll: true,
	                            defaultSelectedKeys: ["subAll"] },
	                        nodeDatas
	                    ) : _react2["default"].createElement(
	                        'div',
	                        null,
	                        '\u6682\u65E0\u6570\u636E'
	                    )
	                )
	            ),
	            _react2["default"].createElement(
	                'div',
	                { className: "equipmentDetTable" },
	                function () {
	                    return _react2["default"].createElement(
	                        'div',
	                        { id: 'equipment_div' },
	                        _this2.props.state.list && _this2.props.state.list.map(function (item, i) {
	                            return _react2["default"].createElement(
	                                'div',
	                                { onClick: _this2.onClickItem.bind(_this2, item), style: { height: 20, width: 300, border: '2 solid #ccccc' } },
	                                item.name,
	                                _react2["default"].createElement(_icon2["default"], { type: 'minus-circle-o' })
	                            );
	                        })
	                    );
	                }()
	            )
	        ) : _react2["default"].createElement(
	            'div',
	            { style: { textAlign: 'center' } },
	            '\u6570\u636E\u4E3A\u7A7A'
	        );
	    };

	    return ZyyglSbAdd;
	}(_react.Component);

	exports["default"] = (0, _component2["default"])("zyyglSbAdd", {})(ZyyglSbAdd);
	module.exports = exports['default'];

/***/ }

});