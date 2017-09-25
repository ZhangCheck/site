webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _css = __webpack_require__(558);

	var _tooltip = __webpack_require__(1108);

	var _tooltip2 = _interopRequireDefault(_tooltip);

	var _css2 = __webpack_require__(2107);

	var _modal = __webpack_require__(29);

	var _modal2 = _interopRequireDefault(_modal);

	var _css3 = __webpack_require__(44);

	var _icon = __webpack_require__(19);

	var _icon2 = _interopRequireDefault(_icon);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _global = __webpack_require__(10);

	var _dataFormat = __webpack_require__(64);

	var _jsonp = __webpack_require__(127);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _AiForm = __webpack_require__(27);

	var _AiForm2 = _interopRequireDefault(_AiForm);

	var _dataList = __webpack_require__(30);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	(0, _jsonp2["default"])("plgl")(function (args, callback) {
	    var plglConfig = {
	        data: [{
	            "showTitle": false,
	            "data": [{
	                "name": "是否通过",
	                "type": "select",
	                "field": "state",
	                "options": [{ "value": "1", "key": "通过" }, { "value": "2", "key": "拒绝" }],
	                "defaultValue": "1",
	                "props": { style: { width: 150 } }
	            }]
	        }]
	    };
	    callback({
	        "success": true,
	        "data": {
	            "title": "评论管理",
	            "id": "plgl",
	            "buttonConfigs": [{
	                "buttonName": function buttonName(config) {
	                    return _react2["default"].createElement(
	                        'div',
	                        { style: { "float": "left" } },
	                        _react2["default"].createElement(
	                            'div',
	                            { className: "configRightBtnGp" },
	                            _react2["default"].createElement(
	                                'div',
	                                null,
	                                _react2["default"].createElement(_icon2["default"], { type: 'play-circle-o' }),
	                                _react2["default"].createElement(
	                                    'a',
	                                    { onClick: function onClick() {
	                                            var state = _global.Global.getState();
	                                            var plIds = state.dataList.plgl.selectedRows;
	                                            if (plIds && plIds.length >= 1) {
	                                                var dataSource = state.dataList.plgl.tableBodyDataApi.data.content;
	                                                var flag = true;
	                                                for (var i = 0; i < dataSource.length; i++) {
	                                                    for (var j = 0; j < plIds.length; j++) {
	                                                        if (dataSource[i].id == plIds[j]) {
	                                                            if (dataSource[i].stateName == '通过' || dataSource[i].stateName == '拒绝') {
	                                                                _modal2["default"].warning({
	                                                                    title: '提示',
	                                                                    content: '您选择的记录中存在已审核的数据！'
	                                                                });
	                                                                return flag;
	                                                            }
	                                                        }
	                                                    }
	                                                }
	                                                if (flag) {
	                                                    var close = function close() {
	                                                        _global.Global.mark({
	                                                            dataList: {
	                                                                plgl: {
	                                                                    dialog: null,
	                                                                    selectedRows: null
	                                                                }
	                                                            }
	                                                        });
	                                                    };

	                                                    _global.Global.mark({
	                                                        dataList: {
	                                                            plgl: {
	                                                                dialog: {
	                                                                    show: true,
	                                                                    width: "40%",
	                                                                    title: "审核",
	                                                                    content: _react2["default"].createElement(
	                                                                        'div',
	                                                                        null,
	                                                                        _react2["default"].createElement(_AiForm2["default"], { version: '2', id: 'plglshForm', config: plglConfig }),
	                                                                        _react2["default"].createElement(
	                                                                            'div',
	                                                                            { style: { color: 'red', textAlign: 'center' } },
	                                                                            '\uFF08\u5BA1\u6838\u901A\u8FC7\u540E\u5C55\u793A\u5728\u95E8\u6237\u7F51\u7AD9\uFF09'
	                                                                        )
	                                                                    ),
	                                                                    onOk: function onOk() {
	                                                                        var ztdm = _global.Global.getState().aiForm.plglshForm.form.getFieldsValue().state;
	                                                                        _global.Global.requestApi({
	                                                                            apiName: 'plglsh',
	                                                                            body: {
	                                                                                ids: plIds,
	                                                                                state: ztdm
	                                                                            },
	                                                                            next: function next(action) {
	                                                                                var currPage = _global.Global.getState().dataList.plgl.currentPage;
	                                                                                var currSize = _global.Global.getState().dataList.plgl.currentSize;
	                                                                                _global.Global.dispatch((0, _dataList.requestTableBodyData)("plgl", null, currPage, currSize));
	                                                                                close();
	                                                                            }
	                                                                        }, ["requestResZt", "receiveResZt", "failedResZt"], {});
	                                                                    },
	                                                                    onCancel: close
	                                                                }
	                                                            }
	                                                        }
	                                                    });
	                                                }
	                                            } else {
	                                                _modal2["default"].warning({
	                                                    title: '提示',
	                                                    content: '请选择一条记录进行操作！'
	                                                });
	                                            }
	                                        } },
	                                    '\u5BA1\u6838'
	                                )
	                            )
	                        )
	                    );
	                }
	            }, { "buttonName": "delete" }],
	            "searchConfig": {
	                "data": [{
	                    "column": 3,
	                    "data": [{ "type": "input", "name": "资源名称", "field": "resourceName" }, {
	                        "type": "select",
	                        "name": "状态",
	                        "field": "state",
	                        "defaultValue": "-1",
	                        options: [{ value: "-1", key: "全部" }, { value: "0", key: "待审核" }, { value: "1", key: "通过" }, { value: "2", key: "拒绝" }]
	                    }, {
	                        "type": "button",
	                        "value": "查询",
	                        "pageName": "search",
	                        "btnType": "primary",
	                        "htmlType": "submit"
	                    }]
	                }],
	                "body": { apiName: 'plglTableData', body: { page: 0, size: 10 } }
	            },
	            "table": {
	                "primarykey": "id",
	                "clounms": [{
	                    "title": "提交时间",
	                    "dataIndex": "submitTime",
	                    "key": "submitTime",
	                    "width": 200,
	                    render: function render(text, record) {
	                        if (record.submitTime) {
	                            return record.submitTime.slice(0, record.submitTime.indexOf("."));
	                        } else {
	                            return record.submitTime;
	                        }
	                    }
	                }, {
	                    "title": "评论内容",
	                    "dataIndex": "assessmentContent",
	                    "key": "assessmentContent",
	                    "width": 400,
	                    render: function render(text, record) {
	                        var msg = "";
	                        if (record.assessmentContent.length > 25) {
	                            msg = record.assessmentContent.substr(0, 25) + "…";
	                        } else {
	                            msg = record.assessmentContent;
	                        }
	                        return _react2["default"].createElement(
	                            _tooltip2["default"],
	                            { title: record.assessmentContent },
	                            _react2["default"].createElement(
	                                'span',
	                                null,
	                                msg
	                            )
	                        );
	                    }
	                }, {
	                    "title": "评价人",
	                    "dataIndex": "assessmentPersonName",
	                    "key": "assessmentPersonName",
	                    "width": 150
	                }, {
	                    "title": "资源名称",
	                    "dataIndex": "resourceName",
	                    "key": "resourceName",
	                    "width": 300,
	                    render: function render(text, record) {
	                        var msg = "";
	                        if (record.resourceName.length > 20) {
	                            msg = record.resourceName.substr(0, 20) + "…";
	                        } else {
	                            msg = record.resourceName;
	                        }
	                        return _react2["default"].createElement(
	                            _tooltip2["default"],
	                            { title: record.resourceName },
	                            _react2["default"].createElement(
	                                'span',
	                                null,
	                                msg
	                            )
	                        );
	                    }
	                }, {
	                    "title": "状态",
	                    "dataIndex": "stateName",
	                    "key": "stateName",
	                    "width": "150"
	                }],
	                "body": { apiName: 'plglTableData', body: { page: 0, size: 10 } }
	            },
	            "list": {
	                "view": null,
	                "listApi": null,
	                "saveApi": null
	            },
	            "delete": {
	                "body": { apiName: 'deletePl' }
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