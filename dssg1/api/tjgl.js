webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(558);

	var _tooltip = __webpack_require__(1108);

	var _tooltip2 = _interopRequireDefault(_tooltip);

	var _css2 = __webpack_require__(2211);

	var _modal = __webpack_require__(29);

	var _modal2 = _interopRequireDefault(_modal);

	var _css3 = __webpack_require__(44);

	var _icon = __webpack_require__(19);

	var _icon2 = _interopRequireDefault(_icon);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _component = __webpack_require__(11);

	var _component2 = _interopRequireDefault(_component);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _dataFormat = __webpack_require__(64);

	var _global = __webpack_require__(10);

	var _AiForm = __webpack_require__(27);

	var _AiForm2 = _interopRequireDefault(_AiForm);

	var _dataList = __webpack_require__(30);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("tjgl")(function (args, callback) {
	    var dialogConfig = {
	        data: [{
	            "showTitle": false,
	            "data": [{ "name": "是否推荐", "type": "select", "field": "tuijian", "options": [{ "value": "1", "key": "是" }, { "value": "0", "key": "否" }], "defaultValue": "1", "placeholder": "请选择..." }]
	        }]
	    };

	    callback({
	        "success": true,
	        "data": {
	            "id": "tjgl",
	            "title": "这是DataList组件页面！！！！！",
	            "buttonConfigs": [{
	                "buttonName": function buttonName(config) {
	                    return _react2["default"].createElement(
	                        'div',
	                        { className: "configRightBtnGp" },
	                        _react2["default"].createElement(
	                            'div',
	                            null,
	                            _react2["default"].createElement(_icon2["default"], { type: 'menu-unfold' }),
	                            _react2["default"].createElement(
	                                'a',
	                                { onClick: function onClick() {
	                                        {
	                                            if (_global.Global.getState().dataList.tjgl.selectedRows && _global.Global.getState().dataList.tjgl.selectedRows.length > 0) {

	                                                _global.Global.mark({
	                                                    dataList: {
	                                                        tjgl: {
	                                                            dialog: {
	                                                                show: true,
	                                                                width: "40%",
	                                                                content: _react2["default"].createElement(_AiForm2["default"], { id: 'recommend', version: '2', config: dialogConfig }),
	                                                                title: '推荐设置',
	                                                                onOk: function onOk() {
	                                                                    var selectedId = _global.Global.getState().dataList.tjgl.selectedRows;
	                                                                    var sftj = _global.Global.getState().aiForm.recommend.form.getFieldsValue();
	                                                                    _global.Global.requestApi({
	                                                                        "apiName": "testRecommend",
	                                                                        "body": { resourceId: selectedId, hot: sftj.tuijian }
	                                                                    }, ["requestResZt", "receiveResZt", "failedResZt"], {});
	                                                                    var cConfig = {};
	                                                                    cConfig.body = _global.Global.getState().aiForm.tjgl.form.getFieldsValue();
	                                                                    cConfig.apiName = "tjglListBody";
	                                                                    var cPage = _global.Global.getState().dataList.tjgl.currentPage;
	                                                                    var cSize = _global.Global.getState().dataList.tjgl.currentSize;
	                                                                    _global.Global.dispatch((0, _dataList.requestTableBodyData)('tjgl', cConfig, cPage, cSize));
	                                                                    _global.Global.mark({
	                                                                        dataList: {
	                                                                            tjgl: {
	                                                                                dialog: null,
	                                                                                selectedRows: null
	                                                                            }
	                                                                        }
	                                                                    });
	                                                                },
	                                                                onCancel: function onCancel() {
	                                                                    _global.Global.mark({
	                                                                        dataList: {
	                                                                            tjgl: {
	                                                                                dialog: null,
	                                                                                selectedRows: null
	                                                                            }
	                                                                        }
	                                                                    });
	                                                                }

	                                                            }

	                                                        }
	                                                    }
	                                                });
	                                            } else {
	                                                _modal2["default"].warning({
	                                                    content: '请选择一条数据！'
	                                                });
	                                                return;
	                                            }
	                                        }
	                                    } },
	                                '\u63A8\u8350\u8BBE\u7F6E'
	                            )
	                        )
	                    );
	                }
	            }],
	            "searchConfig": {
	                "data": [{
	                    "column": 6,
	                    "formItemRewiring": true,
	                    "data": [{ "type": "input", "name": "资源名称", "col": 5, "field": "resName" }, { "type": "select", "name": "资源类型", "col": 5, "field": "resType", defaultValue: "_all_", "options": [{ value: "_all_", key: "全部" }, { value: "1", key: "数据库" }, { value: "2", key: "文件" }, { value: "3", key: "API" }] }, { "type": "treeSelect", "col": 6, "name": "主题分类", "field": "themeType", options: { value: "_all_", key: "全部" }, defaultValue: "_all_", dictId: "themeType", dictApi: { apiName: 'getDictsByType', body: { name: "themeType", type: 1 } } }, { "type": "select", "name": "热门推荐", "col": 5, "field": "hot", defaultValue: "_all_", "options": [{ value: "_all_", key: "全部" }, { value: "1", key: "是" }, { value: "0", key: "否" }] }, { "type": "button", "col": 2, "value": "查询", "pageName": "search", props: { type: "primary" }, "htmlType": "submit" }]
	                }],
	                "body": { apiName: 'tjglListBody', body: { page: 0, size: 10 } }
	            },
	            "table": {
	                "primarykey": "id",
	                "clounms": [{
	                    "title": "序号",
	                    "dataIndex": "index",
	                    "key": "index",
	                    "width": 50,
	                    "render": function render(text, recode, index) {
	                        var state = _global.Global.getState().dataList.tjgl;
	                        return _react2["default"].createElement(
	                            'div',
	                            null,
	                            index + 1 + state.currentPage * state.pageSize
	                        );
	                    }
	                }, {
	                    "title": "资源名称",
	                    "dataIndex": "resName",
	                    "key": "resName",
	                    "width": 100,
	                    render: function render(text, record) {
	                        var msg = "";
	                        if (record.resName.length > 10) {
	                            msg = record.resName.substr(0, 10) + "…";
	                        } else {
	                            msg = record.resName;
	                        }
	                        return _react2["default"].createElement(
	                            _tooltip2["default"],
	                            { title: record.resName },
	                            _react2["default"].createElement(
	                                'span',
	                                null,
	                                msg
	                            )
	                        );
	                    }
	                }, {
	                    "title": "资源编码",
	                    "dataIndex": "resCode",
	                    "key": "resCode",
	                    "width": 100,
	                    render: function render(text, record) {
	                        var msg = "";
	                        if (record.resCode.length > 10) {
	                            msg = record.resCode.substr(0, 10) + "…";
	                        } else {
	                            msg = record.resCode;
	                        }
	                        return _react2["default"].createElement(
	                            _tooltip2["default"],
	                            { title: record.resCode },
	                            _react2["default"].createElement(
	                                'span',
	                                null,
	                                msg
	                            )
	                        );
	                    }
	                }, {
	                    "title": "主题分类",
	                    "dataIndex": "themeName",
	                    "key": "themeName",
	                    "width": 100,
	                    render: function render(text, record) {
	                        var msg = "";
	                        if (record.themeName) {
	                            if (record.themeName.length > 10) {
	                                msg = record.themeName.substr(0, 10) + "…";
	                            } else {
	                                msg = record.themeName;
	                            }
	                        }
	                        return _react2["default"].createElement(
	                            _tooltip2["default"],
	                            { title: record.themeName },
	                            _react2["default"].createElement(
	                                'span',
	                                null,
	                                msg
	                            )
	                        );
	                    }
	                }, {
	                    "title": "行业分类",
	                    "dataIndex": "industryTypeName",
	                    "key": "industryTypeName",
	                    "width": 100,
	                    render: function render(text, record) {
	                        var msg = "";
	                        if (record.industryTypeName) {
	                            if (record.industryTypeName.length > 10) {
	                                msg = record.industryTypeName.substr(0, 10) + "…";
	                            } else {
	                                msg = record.industryTypeName;
	                            }
	                        }
	                        return _react2["default"].createElement(
	                            _tooltip2["default"],
	                            { title: record.industryTypeName },
	                            _react2["default"].createElement(
	                                'span',
	                                null,
	                                msg
	                            )
	                        );
	                    }
	                }, {
	                    "title": "资源类型",
	                    "dataIndex": "resType",
	                    "key": "resType",
	                    "width": 100,
	                    render: function render(text, record, index) {
	                        switch (text) {
	                            case "1":
	                                return "数据库";
	                            case "2":
	                                return "文件";
	                            case "3":
	                                return "API";
	                        }
	                    }
	                }, {
	                    "title": "发布单位",
	                    "dataIndex": "publishDept",
	                    "key": "publishDept",
	                    "width": 100,
	                    render: function render(text, record) {
	                        var msg = "";
	                        if (record.publishDept) {
	                            if (record.publishDept.length > 10) {
	                                msg = record.publishDept.substr(0, 10) + "…";
	                            } else {
	                                msg = record.publishDept;
	                            }
	                        }
	                        return _react2["default"].createElement(
	                            _tooltip2["default"],
	                            { title: record.publishDept },
	                            _react2["default"].createElement(
	                                'span',
	                                null,
	                                msg
	                            )
	                        );
	                    }
	                }, {
	                    "title": "热门推荐",
	                    "dataIndex": "hot",
	                    "key": "hot",
	                    "width": 100,
	                    render: function render(text, record, index) {
	                        switch (text) {
	                            case "0":
	                                return "否";
	                            case "1":
	                                return "是";
	                        }
	                    }
	                }],
	                "body": { apiName: 'tjglListBody' }
	            },
	            "list": {
	                "view": null,
	                "listApi": null,
	                "saveApi": null
	            },
	            "check": {
	                "view": null,
	                "checkApi": null
	            }
	        }
	    });
	});

/***/ },

/***/ 1108:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = undefined;

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _defineProperty2 = __webpack_require__(7);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(6);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(5);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _rcTooltip = __webpack_require__(483);

	var _rcTooltip2 = _interopRequireDefault(_rcTooltip);

	var _placements = __webpack_require__(1109);

	var _placements2 = _interopRequireDefault(_placements);

	var _classnames = __webpack_require__(8);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var Tooltip = function (_React$Component) {
	    (0, _inherits3["default"])(Tooltip, _React$Component);

	    function Tooltip(props) {
	        (0, _classCallCheck3["default"])(this, Tooltip);

	        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

	        _this.onVisibleChange = function (visible) {
	            _this.setState({ visible: visible });
	            _this.props.onVisibleChange(visible);
	        };
	        // 动态设置动画点
	        _this.onPopupAlign = function (domNode, align) {
	            var placements = _this.getPlacements();
	            // 当前返回的位置
	            var placement = Object.keys(placements).filter(function (key) {
	                return placements[key].points[0] === align.points[0] && placements[key].points[1] === align.points[1];
	            })[0];
	            if (!placement) {
	                return;
	            }
	            // 根据当前坐标设置动画点
	            var rect = domNode.getBoundingClientRect();
	            var transformOrigin = {
	                top: '50%',
	                left: '50%'
	            };
	            if (placement.indexOf('top') >= 0 || placement.indexOf('Bottom') >= 0) {
	                transformOrigin.top = rect.height - align.offset[1] + 'px';
	            } else if (placement.indexOf('Top') >= 0 || placement.indexOf('bottom') >= 0) {
	                transformOrigin.top = -align.offset[1] + 'px';
	            }
	            if (placement.indexOf('left') >= 0 || placement.indexOf('Right') >= 0) {
	                transformOrigin.left = rect.width - align.offset[0] + 'px';
	            } else if (placement.indexOf('right') >= 0 || placement.indexOf('Left') >= 0) {
	                transformOrigin.left = -align.offset[0] + 'px';
	            }
	            domNode.style.transformOrigin = transformOrigin.left + ' ' + transformOrigin.top;
	        };
	        _this.state = {
	            visible: false
	        };
	        return _this;
	    }

	    Tooltip.prototype.getPopupDomNode = function getPopupDomNode() {
	        return this.refs.tooltip.getPopupDomNode();
	    };

	    Tooltip.prototype.getPlacements = function getPlacements() {
	        var _props = this.props;
	        var builtinPlacements = _props.builtinPlacements;
	        var arrowPointAtCenter = _props.arrowPointAtCenter;

	        return builtinPlacements || (0, _placements2["default"])({
	            arrowPointAtCenter: arrowPointAtCenter,
	            verticalArrowShift: 8
	        });
	    };

	    Tooltip.prototype.render = function render() {
	        var _classNames;

	        var _props2 = this.props;
	        var prefixCls = _props2.prefixCls;
	        var title = _props2.title;
	        var overlay = _props2.overlay;
	        var children = _props2.children;
	        // Hide tooltip when there is no title

	        var visible = this.state.visible;
	        if (!title && !overlay) {
	            visible = false;
	        }
	        if ('visible' in this.props) {
	            visible = this.props.visible;
	        }
	        var childrenProps = children ? children.props : {};
	        var childrenCls = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, childrenProps.className, !!childrenProps.className), (0, _defineProperty3["default"])(_classNames, this.props.openClassName || prefixCls + '-open', true), _classNames));
	        return _react2["default"].createElement(
	            _rcTooltip2["default"],
	            (0, _extends3["default"])({ overlay: title, visible: visible, onPopupAlign: this.onPopupAlign, ref: 'tooltip' }, this.props, { builtinPlacements: this.getPlacements(), onVisibleChange: this.onVisibleChange }),
	            visible ? (0, _react.cloneElement)(children, { className: childrenCls }) : children
	        );
	    };

	    return Tooltip;
	}(_react2["default"].Component);

	exports["default"] = Tooltip;

	Tooltip.defaultProps = {
	    prefixCls: 'ant-tooltip',
	    placement: 'top',
	    transitionName: 'zoom-big-fast',
	    mouseEnterDelay: 0.1,
	    mouseLeaveDelay: 0.1,
	    onVisibleChange: function onVisibleChange() {},

	    arrowPointAtCenter: false
	};
	module.exports = exports['default'];

/***/ },

/***/ 1109:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = getPlacements;

	var _placements = __webpack_require__(484);

	var autoAdjustOverflow = {
	    adjustX: 1,
	    adjustY: 1
	};
	var targetOffset = [0, 0];
	function getPlacements() {
	    var config = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    if (!config.arrowPointAtCenter) {
	        return _placements.placements;
	    }
	    var _config$arrowWidth = config.arrowWidth;
	    var arrowWidth = _config$arrowWidth === undefined ? 5 : _config$arrowWidth;
	    var _config$horizontalArr = config.horizontalArrowShift;
	    var horizontalArrowShift = _config$horizontalArr === undefined ? 16 : _config$horizontalArr;
	    var _config$verticalArrow = config.verticalArrowShift;
	    var verticalArrowShift = _config$verticalArrow === undefined ? 12 : _config$verticalArrow;

	    return {
	        left: {
	            points: ['cr', 'cl'],
	            overflow: autoAdjustOverflow,
	            offset: [-4, 0],
	            targetOffset: targetOffset
	        },
	        right: {
	            points: ['cl', 'cr'],
	            overflow: autoAdjustOverflow,
	            offset: [4, 0],
	            targetOffset: targetOffset
	        },
	        top: {
	            points: ['bc', 'tc'],
	            overflow: autoAdjustOverflow,
	            offset: [0, -4],
	            targetOffset: targetOffset
	        },
	        bottom: {
	            points: ['tc', 'bc'],
	            overflow: autoAdjustOverflow,
	            offset: [0, 4],
	            targetOffset: targetOffset
	        },
	        topLeft: {
	            points: ['bl', 'tc'],
	            overflow: autoAdjustOverflow,
	            offset: [-(horizontalArrowShift + arrowWidth), -4],
	            targetOffset: targetOffset
	        },
	        leftTop: {
	            points: ['tr', 'cl'],
	            overflow: autoAdjustOverflow,
	            offset: [-4, -(verticalArrowShift + arrowWidth)],
	            targetOffset: targetOffset
	        },
	        topRight: {
	            points: ['br', 'tc'],
	            overflow: autoAdjustOverflow,
	            offset: [horizontalArrowShift + arrowWidth, -4],
	            targetOffset: targetOffset
	        },
	        rightTop: {
	            points: ['tl', 'cr'],
	            overflow: autoAdjustOverflow,
	            offset: [4, -(verticalArrowShift + arrowWidth)],
	            targetOffset: targetOffset
	        },
	        bottomRight: {
	            points: ['tr', 'bc'],
	            overflow: autoAdjustOverflow,
	            offset: [horizontalArrowShift + arrowWidth, 4],
	            targetOffset: targetOffset
	        },
	        rightBottom: {
	            points: ['bl', 'cr'],
	            overflow: autoAdjustOverflow,
	            offset: [4, verticalArrowShift + arrowWidth],
	            targetOffset: targetOffset
	        },
	        bottomLeft: {
	            points: ['tl', 'bc'],
	            overflow: autoAdjustOverflow,
	            offset: [-(horizontalArrowShift + arrowWidth), 4],
	            targetOffset: targetOffset
	        },
	        leftBottom: {
	            points: ['br', 'cl'],
	            overflow: autoAdjustOverflow,
	            offset: [-4, verticalArrowShift + arrowWidth],
	            targetOffset: targetOffset
	        }
	    };
	}
	module.exports = exports['default'];

/***/ }

});