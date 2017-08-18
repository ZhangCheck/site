webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(6);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(5);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _css = __webpack_require__(31);

	var _modal = __webpack_require__(29);

	var _modal2 = _interopRequireDefault(_modal);

	var _css2 = __webpack_require__(199);

	var _tree = __webpack_require__(196);

	var _tree2 = _interopRequireDefault(_tree);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(14);

	var _reactDom2 = _interopRequireDefault(_reactDom);

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

	var _Topo = __webpack_require__(1150);

	var _Topo2 = _interopRequireDefault(_Topo);

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

	var Dwgl = function (_Component) {
	    (0, _inherits3["default"])(Dwgl, _Component);

	    function Dwgl(props) {
	        (0, _classCallCheck3["default"])(this, Dwgl);

	        var _this = (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));

	        _global.Global.mark({
	            dwgl: {
	                dwgl_inst: {
	                    sbxlhModal: false,
	                    sbrzModal: false,
	                    currentDataList: 'dwglConfigs'
	                }
	            }
	        }, 'Dwgl_constructor');
	        _global.Global.requestApi({ apiName: 'findCenterCompanyMapInfo', body: { name: null }, next: function next(action) {} }, { dwgl: { dwgl_inst: { dwglTreeData: null } } });
	        return _this;
	    }
	    //第一次渲染过后调用


	    Dwgl.prototype.componentDidMount = function componentDidMount() {
	        window.addEventListener('resize', this.sbglResize.bind(this));
	    };

	    Dwgl.prototype.sbglResize = function sbglResize() {
	        if (this.equipmentDet) {
	            var equipmentDetHeight = this.equipmentDet ? this.equipmentDet.offsetHeight - 61 : 300;
	            _global.Global.mark({
	                dwgl: {
	                    dwgl_inst: {
	                        equipmentDetHeight: equipmentDetHeight
	                    }
	                }
	            });
	        };
	    };

	    Dwgl.prototype.onSelectNode = function onSelectNode(selectedKeys, e) {
	        _global.Global.mark({
	            framework: {
	                dwglTreeData: {
	                    selected: selectedKeys
	                }
	            }
	        });
	        var selected = selectedKeys == 'subAll' ? null : selectedKeys[0];
	        if (null != selected || "undefined" != selected) {
	            this.rederLayer("dwglConfigs");
	            _global.Global.dispatch((0, _dataList.requestTableBodyData)("dwglConfigs", { apiName: "findCenterCompanyByPageInfo", body: { pid: selected } }));
	        }
	    };

	    Dwgl.prototype.rederLayer = function rederLayer(targetKey) {
	        _global.Global.mark({
	            dwgl: {
	                dwgl_inst: {
	                    currentDataList: targetKey
	                }
	            }
	        }, 'Dwgl_onSelectNode');
	    };

	    Dwgl.prototype.render = function render() {
	        var _this2 = this;

	        var frameworkState = _global.Global.getState().framework;
	        var sbglState = _global.Global.getState().dwgl.dwgl_inst;
	        var zyyglTreeDatas = sbglState.dwglTreeData && sbglState.dwglTreeData.data ? sbglState.dwglTreeData.data : [];
	        var selected = sbglState.dwglTreeData ? sbglState.dwglTreeData.selected : [];
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
	                                    fourthNodeDatas.push(_react2["default"].createElement(TreeNode, { title: itemFourth.label, key: itemFourth.key }));
	                                });
	                                thirdNodeDatas.push(_react2["default"].createElement(
	                                    TreeNode,
	                                    { title: itemThird.label, key: itemThird.key },
	                                    fourthNodeDatas
	                                ));
	                            } else {
	                                thirdNodeDatas.push(_react2["default"].createElement(TreeNode, { title: itemThird.label, key: itemThird.key }));
	                            }
	                        });
	                        secondNodeDatas.push(_react2["default"].createElement(
	                            TreeNode,
	                            { title: itemSecond.label, key: itemSecond.key },
	                            thirdNodeDatas
	                        ));
	                    } else {
	                        secondNodeDatas.push(_react2["default"].createElement(TreeNode, { title: itemSecond.label, key: itemSecond.key }));
	                    }
	                });
	                nodeDatas.push(_react2["default"].createElement(
	                    TreeNode,
	                    { title: item.label, key: item.key },
	                    secondNodeDatas
	                ));
	            } else {
	                nodeDatas.push(_react2["default"].createElement(TreeNode, { title: item.label, key: item.key }));
	            }
	        });
	        var state = this.props.state;
	        return _react2["default"].createElement(
	            'div',
	            { className: '${sbglStyles.equipmentNetworkShow}' },
	            _react2["default"].createElement(
	                'div',
	                { style: { width: 220, height: '100%' } },
	                _react2["default"].createElement('div', { className: '${sbglStyles.unitEquipmentDetCloumns}' }),
	                _react2["default"].createElement(
	                    'div',
	                    { className: "treeNodeAll", style: { height: _global.Global.getState().dwgl.dwgl_inst.equipmentDetHeight + 60 } },
	                    _react2["default"].createElement(
	                        _tree2["default"],
	                        { onSelect: this.onSelectNode.bind(this), defaultExpandAll: true,
	                            defaultSelectedKeys: ["0"] },
	                        _react2["default"].createElement(
	                            TreeNode,
	                            { isnode: true, key: '0', title: '\u5168\u90E8\u5355\u4F4D' },
	                            nodeDatas
	                        )
	                    )
	                )
	            ),
	            _react2["default"].createElement(
	                'div',
	                { className: "equipmentDetTable", ref: function ref(dom) {
	                        _this2.equipmentDet = dom;
	                        if (!_this2.init) {
	                            _this2.init = true;
	                            _this2.sbglResize();
	                        }
	                    } },
	                _react2["default"].createElement('div', { className: '' + _Sbgl2["default"].unitEquipmentDetCloumns }),
	                function () {
	                    return _react2["default"].createElement(
	                        'div',
	                        { id: 'zyyglSbConfigs_div', style: { height: _global.Global.getState().dwgl.dwgl_inst.equipmentDetHeight } },
	                        _react2["default"].createElement(_DataListV2["default"], { byDialog: true, key: _global.Global.getState().dwgl.dwgl_inst.currentDataList, configs: { apiName: _global.Global.getState().dwgl.dwgl_inst.currentDataList }, id: _global.Global.getState().dwgl.dwgl_inst.currentDataList })
	                    );
	                }()
	            )
	        );
	    };

	    return Dwgl;
	}(_react.Component);

	Dwgl = (0, _component2["default"])('dwgl', {}, function (state) {
	    return {
	        framework: state.framework,
	        dataList: state.dataList

	    };
	})(Dwgl);

	(0, _jsonp2["default"])("Dwgl")(function (arg, callback) {
	    callback({
	        "success": true,
	        "data": _react2["default"].createElement(Dwgl, { id: 'dwgl_inst' })
	    });
	});

/***/ },

/***/ 1030:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _defineProperties = __webpack_require__(1214);

	var _defineProperties2 = _interopRequireDefault(_defineProperties);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function Vector2(x, y) {

		this.x = x || 0;
		this.y = y || 0;
	}

	(0, _defineProperties2["default"])(Vector2.prototype, {

		"width": {

			get: function get() {

				return this.x;
			},

			set: function set(value) {

				this.x = value;
			}

		},

		"height": {

			get: function get() {

				return this.y;
			},

			set: function set(value) {

				this.y = value;
			}

		}

	});

	(0, _extends3["default"])(Vector2.prototype, {

		isVector2: true,

		set: function set(x, y) {

			this.x = x;
			this.y = y;

			return this;
		},

		setScalar: function setScalar(scalar) {

			this.x = scalar;
			this.y = scalar;

			return this;
		},

		setX: function setX(x) {

			this.x = x;

			return this;
		},

		setY: function setY(y) {

			this.y = y;

			return this;
		},

		setComponent: function setComponent(index, value) {

			switch (index) {

				case 0:
					this.x = value;break;
				case 1:
					this.y = value;break;
				default:
					throw new Error('index is out of range: ' + index);

			}

			return this;
		},
		project: function project(v) {
			var a = this.angle() - v.angle();
			return this.clone().rotateAround({ x: 0, y: 0 }, -a).setLength(Math.cos(a) * this.length());
		},
		getComponent: function getComponent(index) {

			switch (index) {

				case 0:
					return this.x;
				case 1:
					return this.y;
				default:
					throw new Error('index is out of range: ' + index);

			}
		},

		clone: function clone() {

			return new this.constructor(this.x, this.y);
		},

		copy: function copy(v) {

			this.x = v.x;
			this.y = v.y;

			return this;
		},

		add: function add(v, w) {

			if (w !== undefined) {

				console.warn('THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead.');
				return this.addVectors(v, w);
			}

			this.x += v.x;
			this.y += v.y;

			return this;
		},

		addScalar: function addScalar(s) {

			this.x += s;
			this.y += s;

			return this;
		},

		addVectors: function addVectors(a, b) {

			this.x = a.x + b.x;
			this.y = a.y + b.y;

			return this;
		},

		addScaledVector: function addScaledVector(v, s) {

			this.x += v.x * s;
			this.y += v.y * s;

			return this;
		},

		sub: function sub(v, w) {

			if (w !== undefined) {

				console.warn('THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.');
				return this.subVectors(v, w);
			}

			this.x -= v.x;
			this.y -= v.y;

			return this;
		},

		subScalar: function subScalar(s) {

			this.x -= s;
			this.y -= s;

			return this;
		},

		subVectors: function subVectors(a, b) {

			this.x = a.x - b.x;
			this.y = a.y - b.y;

			return this;
		},

		multiply: function multiply(v) {

			this.x *= v.x;
			this.y *= v.y;

			return this;
		},

		multiplyScalar: function multiplyScalar(scalar) {

			if (isFinite(scalar)) {

				this.x *= scalar;
				this.y *= scalar;
			} else {

				this.x = 0;
				this.y = 0;
			}

			return this;
		},

		divide: function divide(v) {

			this.x /= v.x;
			this.y /= v.y;

			return this;
		},

		divideScalar: function divideScalar(scalar) {

			return this.multiplyScalar(1 / scalar);
		},

		min: function min(v) {

			this.x = Math.min(this.x, v.x);
			this.y = Math.min(this.y, v.y);

			return this;
		},

		max: function max(v) {

			this.x = Math.max(this.x, v.x);
			this.y = Math.max(this.y, v.y);

			return this;
		},

		clamp: function clamp(min, max) {

			// This function assumes min < max, if this assumption isn't true it will not operate correctly

			this.x = Math.max(min.x, Math.min(max.x, this.x));
			this.y = Math.max(min.y, Math.min(max.y, this.y));

			return this;
		},

		clampScalar: function () {

			var min = new Vector2();
			var max = new Vector2();

			return function clampScalar(minVal, maxVal) {

				min.set(minVal, minVal);
				max.set(maxVal, maxVal);

				return this.clamp(min, max);
			};
		}(),

		clampLength: function clampLength(min, max) {

			var length = this.length();

			return this.multiplyScalar(Math.max(min, Math.min(max, length)) / length);
		},

		floor: function floor() {

			this.x = Math.floor(this.x);
			this.y = Math.floor(this.y);

			return this;
		},

		ceil: function ceil() {

			this.x = Math.ceil(this.x);
			this.y = Math.ceil(this.y);

			return this;
		},

		round: function round() {

			this.x = Math.round(this.x);
			this.y = Math.round(this.y);

			return this;
		},

		roundToZero: function roundToZero() {

			this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x);
			this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y);

			return this;
		},

		negate: function negate() {

			this.x = -this.x;
			this.y = -this.y;

			return this;
		},

		dot: function dot(v) {

			return this.x * v.x + this.y * v.y;
		},

		lengthSq: function lengthSq() {

			return this.x * this.x + this.y * this.y;
		},

		length: function length() {

			return Math.sqrt(this.x * this.x + this.y * this.y);
		},

		lengthManhattan: function lengthManhattan() {

			return Math.abs(this.x) + Math.abs(this.y);
		},

		normalize: function normalize() {

			return this.divideScalar(this.length());
		},

		angle: function angle() {

			// computes the angle in radians with respect to the positive x-axis

			var angle = Math.atan2(this.y, this.x);

			if (angle < 0) angle += 2 * Math.PI;

			return angle;
		},

		distanceTo: function distanceTo(v) {

			return Math.sqrt(this.distanceToSquared(v));
		},

		distanceToSquared: function distanceToSquared(v) {

			var dx = this.x - v.x,
			    dy = this.y - v.y;
			return dx * dx + dy * dy;
		},

		distanceToManhattan: function distanceToManhattan(v) {

			return Math.abs(this.x - v.x) + Math.abs(this.y - v.y);
		},

		setLength: function setLength(length) {

			return this.multiplyScalar(length / this.length());
		},

		lerp: function lerp(v, alpha) {

			this.x += (v.x - this.x) * alpha;
			this.y += (v.y - this.y) * alpha;

			return this;
		},

		lerpVectors: function lerpVectors(v1, v2, alpha) {

			return this.subVectors(v2, v1).multiplyScalar(alpha).add(v1);
		},

		equals: function equals(v) {

			return v.x === this.x && v.y === this.y;
		},

		fromArray: function fromArray(array, offset) {

			if (offset === undefined) offset = 0;

			this.x = array[offset];
			this.y = array[offset + 1];

			return this;
		},

		toArray: function toArray(array, offset) {

			if (array === undefined) array = [];
			if (offset === undefined) offset = 0;

			array[offset] = this.x;
			array[offset + 1] = this.y;

			return array;
		},

		fromBufferAttribute: function fromBufferAttribute(attribute, index, offset) {

			if (offset !== undefined) {

				console.warn('THREE.Vector2: offset has been removed from .fromBufferAttribute().');
			}

			this.x = attribute.getX(index);
			this.y = attribute.getY(index);

			return this;
		},

		rotateAround: function rotateAround(center, angle) {

			var c = Math.cos(angle),
			    s = Math.sin(angle);

			var x = this.x - center.x;
			var y = this.y - center.y;

			this.x = x * c - y * s + center.x;
			this.y = x * s + y * c + center.y;

			return this;
		}

	});

	exports["default"] = Vector2;
	module.exports = exports['default'];

/***/ },

/***/ 1086:
/***/ function(module, exports, __webpack_require__) {

	

	    var smoothSpline = __webpack_require__(1490);
	    var smoothBezier = __webpack_require__(1489);

	    module.exports = {
	        buildPath: function (ctx, shape, closePath) {
	            var points = shape.points;
	            var smooth = shape.smooth;
	            if (points && points.length >= 2) {
	                if (smooth && smooth !== 'spline') {
	                    var controlPoints = smoothBezier(
	                        points, smooth, closePath, shape.smoothConstraint
	                    );

	                    ctx.moveTo(points[0][0], points[0][1]);
	                    var len = points.length;
	                    for (var i = 0; i < (closePath ? len : len - 1); i++) {
	                        var cp1 = controlPoints[i * 2];
	                        var cp2 = controlPoints[i * 2 + 1];
	                        var p = points[(i + 1) % len];
	                        ctx.bezierCurveTo(
	                            cp1[0], cp1[1], cp2[0], cp2[1], p[0], p[1]
	                        );
	                    }
	                }
	                else {
	                    if (smooth === 'spline') {
	                        points = smoothSpline(points, closePath);
	                    }

	                    ctx.moveTo(points[0][0], points[0][1]);
	                    for (var i = 1, l = points.length; i < l; i++) {
	                        ctx.lineTo(points[i][0], points[i][1]);
	                    }
	                }

	                closePath && ctx.closePath();
	            }
	        }
	    };


/***/ },

/***/ 1150:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

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

	var _component = __webpack_require__(11);

	var _component2 = _interopRequireDefault(_component);

	var _global = __webpack_require__(10);

	var _zrender = __webpack_require__(190);

	var _zrender2 = _interopRequireDefault(_zrender);

	__webpack_require__(278);

	__webpack_require__(186);

	var _Line = __webpack_require__(1493);

	var _Line2 = _interopRequireDefault(_Line);

	var _BezierCurve = __webpack_require__(1491);

	var _BezierCurve2 = _interopRequireDefault(_BezierCurve);

	var _Polyline = __webpack_require__(1495);

	var _Polyline2 = _interopRequireDefault(_Polyline);

	var _Polygon = __webpack_require__(1494);

	var _Polygon2 = _interopRequireDefault(_Polygon);

	var _Group = __webpack_require__(144);

	var _Group2 = _interopRequireDefault(_Group);

	var _Rect = __webpack_require__(277);

	var _Rect2 = _interopRequireDefault(_Rect);

	var _Circle = __webpack_require__(1492);

	var _Circle2 = _interopRequireDefault(_Circle);

	var _Ring = __webpack_require__(1496);

	var _Ring2 = _interopRequireDefault(_Ring);

	var _Text = __webpack_require__(464);

	var _Text2 = _interopRequireDefault(_Text);

	var _Vector = __webpack_require__(1030);

	var _Vector2 = _interopRequireDefault(_Vector);

	var _Line3 = __webpack_require__(1191);

	var _Line4 = _interopRequireDefault(_Line3);

	var _Ocl = __webpack_require__(1192);

	var _Ocl2 = _interopRequireDefault(_Ocl);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	//import styles from './Footer.less';
	var rootState = 'topo';
	var render = void 0;

	var Topo = function (_Component) {
		(0, _inherits3["default"])(Topo, _Component);

		function Topo(props) {
			(0, _classCallCheck3["default"])(this, Topo);

			// ----- state init here -----
			var _this = (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));

			_global.Global.mark((0, _defineProperty3["default"])({}, rootState, (0, _defineProperty3["default"])({}, _this.props.id, {
				selected: null
			})), 'topo_init');
			// ----- api ------

			_global.Global.requestApi(_this.props.apiConfig, (0, _defineProperty3["default"])({}, rootState, (0, _defineProperty3["default"])({}, _this.props.id, null)), true);
			return _this;
		}

		Topo.prototype.render = function render() {
			var _this2 = this;

			var state = this.props.state;
			if (!state) return _react2["default"].createElement(
				'div',
				null,
				'...'
			);
			return _react2["default"].createElement(
				'div',
				{ style: { height: "100%" } },
				state.msg && _react2["default"].createElement(
					'div',
					null,
					state.msg
				),
				state.data && _react2["default"].createElement('div', { id: 'canvas', style: { width: "100%", height: "100%" }, ref: function ref(dom) {
						_this2.canvas = dom;
						if (_this2.zr || !dom) return; //this.zr.dispose();
						var
						// ----- config ------------
						nw = 50,
						    nh = 30,

						// ----- config end --------

						sw = nw * 2,
						    sh = nh * 2,
						    config = 1 ? state.data : function () {
							for (var i = state.data.length; i < 300; i++) {
								state.data.push({ name: 'node' + i });
							}
							return state.data;
						}(),
						    zr = _this2.zr = _zrender2["default"].init(dom),
						    stage = _this2.stage = new _Group2["default"]({
							position: [0, 0]
						}),
						    gridGroup = new _Group2["default"](),
						    lineGroup = new _Group2["default"](),
						    nodeGroup = new _Group2["default"](),
						    nodesCache = window.nodesCache = {},
						    linesCache = window.linesCache = {},
						    zLineCache = window.zLineCache = {},
						    zLineCacheHome = window.zLineCacheHome = {},
						    isMoving = false,
						    ox = void 0,
						    oy = void 0,
						    dx = void 0,
						    dy = void 0,
						    mx = void 0,
						    my = void 0,
						    ux = void 0,
						    uy = void 0,
						    vx = void 0,
						    vy = void 0,
						    moveTarget = void 0,
						    onMouseDown = function onMouseDown(e) {
							/* if(e.target.type=="node"){
	      	
	      }else if(e.tar */
							moveTarget = e.target.parent;
							dx = e.offsetX;
							dy = e.offsetY;
							ox = moveTarget.position[0];
							oy = moveTarget.position[1];
							_this2.stage.moving = true;
						},
						    onMouseMove = function onMouseMove(e) {
							if (dx != null) {
								mx = e.offsetX;
								my = e.offsetY;
								vx = mx - dx;
								vy = my - dy;
								if (!isMoving) {
									var vecChange = new _Vector2["default"](vx, vy);
									if (vecChange.length() > 4) isMoving = true;
								}
								if (!isMoving) return;
								moveTarget.position[0] = ox + vx;
								moveTarget.position[1] = oy + vy;
								if (moveTarget.type == 'node') {
									console.log("=======================");
									var node = moveTarget;
									for (var n in linesCache) {
										var line = linesCache[n],
										    i = line.name.indexOf(node.config.name),
										    linePage = zLineCache[line.name],
										    lineHome = zLineCacheHome[line.name];
										if (line.name.match(new RegExp(node.config.name + '-'))) {
											line.set({ x: node.position[0], y: node.position[1] });
											if (linePage) {
												var vec = new _Vector2["default"](line.length / 4, 0).rotateAround({ x: 0, y: 0 }, line.vec.angle() - Math.PI / 2).add(line.getCenter()),
												    shape = linePage.line.shape;
												shape.x1 = line.p1.x;
												shape.y1 = line.p1.y;
												shape.cpx1 = vec.x;
												shape.cpy1 = vec.y;
												linePage.line.dirty();
											}
											if (lineHome) {
												lineHome.line.shape.x1 = line.p1.x;
												lineHome.line.shape.y1 = line.p1.y;
												lineHome.line.dirty();
											}
										} else if (line.name.match(new RegExp(node.config.name + "$"))) {
											line.set(null, { x: node.position[0], y: node.position[1] });
											if (linePage) {
												var _vec = new _Vector2["default"](line.length / 4, 0).rotateAround({ x: 0, y: 0 }, line.vec.angle() - Math.PI / 2).add(line.getCenter()),
												    _shape = linePage.line.shape;
												_shape.x2 = line.p2.x;
												_shape.y2 = line.p2.y;
												_shape.cpx1 = _vec.x;
												_shape.cpy1 = _vec.y;
												linePage.line.dirty();
											}
											if (lineHome) {
												lineHome.line.shape.x2 = line.p2.x;
												lineHome.line.shape.y2 = line.p2.y;
												lineHome.line.dirty();
											}
										}
									}
								}
								moveTarget.dirty(true);

								/* let vt = new Vector2(moveTarget.position[0],moveTarget.position[1]);
	       let vcp = new Vector2(cp.x,cp.y);
	       vt.sub(vcp).setLength(vt.length()-48);
	       
	       vt.setLength(vt.length()-5); */
								/* moveTarget.line.shape.x2 = cp.x+vt.x;
	       moveTarget.line.shape.y2 = cp.y+vt.y;
	       moveTarget.line.dirty(true); */
							}
						},
						    onMouseUp = function onMouseUp() {
							dx = dy = null;
							_this2.stage.moving = false;
							//moveTarget = null;
						},
						    bg = new _Rect2["default"]({
							position: [-100000, -100000],
							shape: {
								r: 4,
								x: 0,
								y: 0,
								width: 200000,
								height: 200000
							},
							style: {
								fill: "#ffffff",
								stroke: '#D2D2D2',
								lineWidth: 1
							}
						}).on('mousedown', onMouseDown),
						    stageW = dom.offsetWidth,
						    stageH = dom.offsetHeight,
						    cp = { x: stageW / 2, y: stageH / 2 },
						    count = state.data.length,
						    winCount = Math.floor(stageW * stageH / (sw * sh)),
						    gridCount = Math.max(count * 2, winCount),
						    r = Math.ceil(stageW / sw) / Math.ceil(stageH / sh),
						    wl = Math.ceil(Math.sqrt(gridCount * r)),
						    hl = Math.ceil(wl / r),
						    cxi = Math.round(wl / 2) - 1,
						    cyi = Math.round(hl / 2) - 1,
						    grid = function () {
							var cx = (cxi - 0.5) * sw,
							    cy = (cyi - 0.5) * sh,
							    ci = cyi * wl + cxi,
							    _log = console.log('count', count, 'winCount', winCount, 'girdCount', gridCount, 'w', stageW, 'h', stageH, 'hl', hl, 'wl', wl, 'cxi', cxi, 'cyi', cyi, 'cx', cx, 'xy', cy, 'ci', ci),
							    debug = 0 && function () {
								var span = 5;
								for (var i = 0; i < wl * hl; i++) {
									var rowId = Math.floor(i / wl),
									    colId = i % wl,
									    centerX = colId * sw + 0.5 * sw,
									    centerY = rowId * sh + 0.5 * sh,

									//_log = console.log('rowId',rowId,'colId',colId,rowId==cyi&&colId==cxi),
									gridBg = new _Rect2["default"]({
										position: [centerX, centerY],
										shape: {
											r: 0,
											x: -sw / 2 + span,
											y: -sh / 2 + span,
											width: sw - span * 2,
											height: sh - span * 2
										},
										style: {
											fill: rowId == cyi && colId == cxi ? "#ff4000" : "#313140"
										}
									}),
									    gridText = new _Text2["default"]({
										position: [centerX, centerY],
										style: {
											x: 0,
											y: -10,
											text: colId + "," + rowId,
											width: sw,
											height: sh,
											fill: rowId == cyi && colId == cxi ? "#fff" : '#d93600',
											textFont: '18px Microsoft Yahei',
											textBaseline: 'top',
											textAlign: 'center'
										}
									});
									gridGroup.add(gridBg);
									gridGroup.add(gridText);
								}
							}(),
							    map = function () {
								var map = [],
								    l1 = void 0,
								    t1 = void 0,
								    r1 = void 0,
								    b1 = void 0,
								    j = void 0,
								    l = cxi,
								    t = cyi,
								    r = cxi,
								    b = cyi;
								while (l > 0 || t > 0 || r < wl - 2 || b < hl - 2) {
									l--;
									t--;
									r++;
									b++;
									t1 = Math.max(t, 0);
									b1 = Math.min(hl - 1, b);
									l1 = Math.max(l >= 0 ? l + 1 : l, 0);
									r1 = Math.min(r >= 0 ? r - 1 : r, wl - 1);
									if (l >= 0) {
										for (var _j = t1; _j <= b1; _j++) {
											map.push({ x: l, y: _j });
										}
									}
									if (r < wl) {
										for (j = t1; j <= b1; j++) {
											map.push({ x: r, y: j });
										}
									}
									if (t >= 0) {
										for (j = l1; j <= r1; j++) {
											map.push({ x: j, y: t });
										}
									}
									if (b < hl) {
										for (j = l1; j <= r1; j++) {
											map.push({ x: j, y: b });
										}
									}
								}
								return map;
							}();

							window.map = map;
							return map;
						}(),
						    crossTest = function () {
							var line1 = new _Line4["default"]({ x: 100, y: 100 }, { x: 200, y: 100 }),
							    line2 = new _Line4["default"]({ x: 150, y: 100 }, { x: 250, y: 100 });
							//alert(line1.isCross(line2));
						}(),
						    seats = grid,
						    nodes = [],
						    curNode = null,
						    focusColor = "#ff9a81",
						    normalColor = "#f6704e",
						    createNode = config.forEach(function (item, i) {
							var ins = function () {
								var ins = [];
								for (var j = 0; j < config.length; j++) {
									if (i == j) continue;
									var other = state.data[j];
									if (other.out && other.out.indexOf(item.name) != -1) {
										ins.push(other.name);
									}
								}
								item["in"] = ins;
							}(),
							    _glConfig = window.config = config,
							    pos = function () {
								var r = 0,
								    seed = 3;
								for (var j = 0; j < seed; j++) {
									r += Math.random() * seats.length;
								}
								return Math.floor(Math.abs(r / seed - seats.length / 2));
							}(),
							    seat = item.pos ? { x: item.pos[0], y: item.pos[1] } : seats.splice(pos, 1)[0],
							    vecO = new _Vector2["default"](cxi * sw + sw / 2, cyi * sh + sh / 2),
							    vec = new _Vector2["default"](seat.x * sw + sw / 2, seat.y * sh + sh / 2),
							    isMine = item.isMine,
							    node = isMine ? new _Group2["default"]({
								position: [vecO.x, vecO.y]
							}) : new _Group2["default"]({
								position: [vec.x, vec.y]
							}),
							    _event = node.on('mousedown', onMouseDown).on('click', function (e) {
								if (isMoving) {
									isMoving = false;
									return;
								}
								var node = e.target.parent;
								if (curNode == node) {
									curNode = null;
									normalLines();
									drawLines();
									node.remove(node.bg0);
									return;
								}
								if (curNode) {
									curNode.remove(curNode.bg0);
								}
								curNode = node;
								node.addAt(node.bg0, 0);
								lineGroup.removeAll();
								var p1 = { x: node.position[0], y: node.position[1] },
								    from = node.config.name;
								lines = [];
								for (var name in nodesCache) {
									var nodeX = nodesCache[name];
									if (nodeX.isMine || nodeX == node) continue;
									nodeX.bg.style.fill = nodeX.text.fill = focusColor;
									nodeX.bg.dirty();
									nodeX.text.dirty();
								}

								node.config.out.forEach(function (outName, i) {
									var configX = config.filter(function (item) {
										return item.name == outName;
									})[0];
									if (configX) {
										var to = configX.name,
										    _nodeX = nodesCache[to],
										    lineName = from + '-' + to,
										    line = linesCache[lineName] = linesCache[lineName] || new _Line4["default"](p1, { x: _nodeX.position[0], y: _nodeX.position[1] }, lineName);
										line.type = 0;
										lines.push(line);
										_nodeX.bg.style.fill = _nodeX.text.style.fill = normalColor;
										_nodeX.bg.dirty();
										_nodeX.text.dirty();
									}
								});
								node.config["in"].forEach(function (inName) {
									var configX = config.filter(function (item) {
										return item.name == inName;
									})[0];
									if (configX) {
										var to = configX && configX.name,
										    _nodeX2 = nodesCache[to],
										    lineName = to + '-' + from,
										    line = linesCache[lineName] = linesCache[lineName] || new _Line4["default"]({ x: _nodeX2.position[0], y: _nodeX2.position[1] }, p1, lineName);
										line.type = 1;
										lines.push(line);
										_nodeX2.bg.style.fill = _nodeX2.text.style.fill = normalColor;
										_nodeX2.bg.dirty();
										_nodeX2.text.dirty();
									}
								});
								drawLines();
							}),
							    _bg = item.isMine && node.add(bg),
							    selectedBg = node.bg0 = new _Circle2["default"]({
								position: [0, 0],
								shape: {
									cx: 0,
									cy: 0,
									r: 10
								},
								style: {
									fill: "#d90000"
								}
							}),
							    nodeBg = node.bg = isMine ? new _Rect2["default"]({
								position: [0, 0],
								shape: {
									r: 4,
									x: -10,
									y: -10,
									width: 20,
									height: 20
								},
								style: {
									fill: "#ff4000"
								}
							}) : new _Circle2["default"]({
								position: [0, 0],
								shape: {
									cx: 0,
									cy: 0,
									r: 5
								},
								style: {
									fill: normalColor
								}
							}),
							    nodeText = node.text = new _Text2["default"]({
								position: [0, 0],
								style: {
									x: 0,
									y: 10,
									text: item.name,
									width: nw,
									height: nh,
									fill: normalColor,
									textFont: '18px Microsoft Yahei',
									textBaseline: 'top',
									textAlign: 'center'
								}
							}, sw - 5, stage);

							node.config = item;
							node.type = "node";
							node.add(nodeBg);
							node.add(nodeText);
							nodesCache[item.name] = node;
							nodeGroup.add(node);
							nodes.push(node);
						}),
						    lines = [],
						    normalLines = function normalLines() {
							/* lines = [];
	      nodes.forEach((node,i)=>{
	      	node.bg.fill = node.text.fill = normalColor;
	      	node.bg.dirty();
	      	node.text.dirty();
	      	let p1 = {x:node.position[0],y:node.position[1]};
	      	for(var j=i+1;j<nodes.length;j++){
	      		let configX = nodes[j],
	      			
	      			from = node.config.name;
	      		node.config.out.forEach((outName,i)=>{
	      			let 
	      				configX = config.filter(item=>item.name==outName)[0],
	      				to = configX.name,
	      				nodeX = nodesCache[to],
	      				lineName = `${from}-${to}`,
	      				line = linesCache[lineName] || new Line(p1,{x:nodeX.position[0],y:nodeX.position[1]},lineName,{type:0});
	      			lines.push(line);	
	      		});
	      		node.config.in.forEach(inName=>{
	      			let configX = config.filter(item=>item.name==inName)[0],
	      				to = configX.name,
	      				nodeX = nodesCache[to],
	      				lineName = `${from}-${to}`,
	      				line = linesCache[`${from}-${to}`] || new Line({x:nodeX.position[0],y:nodeX.position[1]},p1,lineName,{type:1});
	      			lines.push(line);
	      		}) 
	      	}
	      });*/

							lines = [];
							nodes.forEach(function (node1, i) {
								var from = node1.config.name;

								var _loop = function _loop() {
									var node2 = nodes[j],
									    to = node2.config.name,
									    lineName = from + '-' + to,
									    lineName1 = to + '-' + from,
									    line = void 0,
									    add = true;
									if (node2 == node1) return 'continue';
									if (linesCache[lineName]) {
										line = linesCache[lineName];
									} else if (linesCache[lineName1]) {
										line = linesCache[lineName1];
									} else {
										line = linesCache[lineName] = new _Line4["default"]({ x: node1.position[0], y: node1.position[1] }, { x: node2.position[0], y: node2.position[1] }, lineName);
									}
									if (lines.indexOf(line) != -1) return 'continue';
									lines.forEach(function (lineX, l) {
										if (lineX.name == lineName || lineX.name == lineName1) return;
										if (line.isCross(lineX)) {
											if (line.length > lineX.length) {
												add = false;
											} else {
												//add = true;
												lines.splice(l, 1);
											}
										}
									});
									if (add) {
										var center = line.getCenter();
										lines.push(line);
									}
								};

								for (var j = 0; j < nodes.length; j++) {
									var _ret = _loop();

									if (_ret === 'continue') continue;
								}
							});
						},
						    drawLines = function drawLines() {
							lineGroup.removeAll();

							lines.forEach(function (line, i) {
								var lineCenter = line.getCenter(),
								    vec = new _Vector2["default"](line.length / 4, 0).rotateAround({ x: 0, y: 0 }, line.vec.angle() - Math.PI / 2).add(line.getCenter()),
								    zLine = void 0;

								if (!curNode) {
									zLine = zLineCacheHome[line.name];
									if (!zLine) {
										zLine = new _Group2["default"]();

										var beLine = new _Line2["default"]({
											position: [0, 0],
											shape: {
												x1: line.p1.x,
												y1: line.p1.y,
												x2: line.p2.x,
												y2: line.p2.y,
												percent: 1
											},
											style: {
												stroke: line.type == 0 ? '#fba894' : '#FFBF35',
												fill: null
											}
										});

										zLine.add(beLine);
										zLine.line = beLine;
										zLineCacheHome[line.name] = zLine;
									}
								} else {
									zLine = zLineCache[line.name];
									if (!zLine) {
										zLine = new _Group2["default"]();

										var bzCurve = new _BezierCurve2["default"]({
											position: [0, 0],
											shape: {
												x1: line.p1.x,
												y1: line.p1.y,
												x2: line.p2.x,
												y2: line.p2.y,
												cpx1: vec.x,
												cpy1: vec.y
											},
											style: {
												stroke: line.type == 0 ? '#fba894' : '#FFBF35',
												fill: null
											}
										}),
										    aw = 20,
										    ah = 20,
										    arraw = new _Polygon2["default"]({
											position: [0, 0],
											shape: {
												points: [[-aw, -ah / 2], [0, 0], [-aw, ah / 2], [-aw * 0.6, 0]],

												smooth: false,

												smoothConstraint: null
											},

											style: {
												stroke: null,

												fill: line.type == 0 ? '#fba894' : '#FFBF35'
											}
										});
										arraw.t = 0;
										zLine.add(bzCurve);
										zLine.line = bzCurve;
										zLine.arraw = arraw;
										zLineCache[line.name] = zLine;
									}
									zLine.arraw.t = 0;
									zLine.add(zLine.arraw);
								}
								lineGroup.add(zLine);
							});
						},
						    render = setInterval(function () {
							if (!curNode) return;
							for (var p in zLineCache) {
								var gp = zLineCache[p];
								if (gp.parent) {
									var _line = gp.line,
									    arraw = gp.arraw,
									    t = arraw.t += 0.01;
									if (t >= 1) t = arraw.t = 0.01;
									arraw.position = _line.pointAt(t);
									var tangent = _line.tangentAt(t);
									var tangentVec = new _Vector2["default"](tangent[0], tangent[1]);
									arraw.rotation = 2 * Math.PI - tangentVec.angle();
									arraw.dirty();
								}
							}
						}, 30);

						stage.position[1] = -1 * (hl * sh - stageH) / 2 - 15;

						stage.add(bg);
						stage.add(gridGroup);
						stage.add(lineGroup);
						stage.add(nodeGroup);
						zr.add(stage);

						normalLines();
						drawLines();
						if (zr) zr.on('mouseup', onMouseUp);
						zr.on('mousemove', onMouseMove);
					} })
			);
		};

		return Topo;
	}(_react.Component);

	exports["default"] = (0, _component2["default"])(rootState, {})(Topo);
	module.exports = exports['default'];

/***/ },

/***/ 1191:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports["default"] = undefined;

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _Vector = __webpack_require__(1030);

	var _Vector2 = _interopRequireDefault(_Vector);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * Calculate the cross product of the two points.
	 * 
	 * @param {Object} point1 point object with x and y coordinates
	 * @param {Object} point2 point object with x and y coordinates
	 * 
	 * @return the cross product result as a float
	 */
	function crossProduct(point1, point2) {
		return point1.x * point2.y - point1.y * point2.x;
	}

	/**
	 * Subtract the second point from the first.
	 * 
	 * @param {Object} point1 point object with x and y coordinates
	 * @param {Object} point2 point object with x and y coordinates
	 * 
	 * @return the subtraction result as a point object
	 */
	/**
	* See if the points are equal.
	*
	* @param {Object} point1 point object with x and y coordinates
	* @param {Object} point2 point object with x and y coordinates
	*
	* @return if the points are equal
	*/
	function equalPoints(point1, point2) {
		return point1.x == point2.x && point1.y == point2.y;
	}

	/**
	 * See if all arguments are equal.
	 *
	 * @param {...} args arguments that will be compared by '=='.
	 *
	 * @return if all arguments are equal
	 */
	function allEqual(args) {
		var firstValue = arguments[0],
		    i;
		for (i = 1; i < arguments.length; i += 1) {
			if (arguments[i] != firstValue) {
				return false;
			}
		}
		return true;
	}

	function subtractPoints(point1, point2) {
		var result = {};
		result.x = point1.x - point2.x;
		result.y = point1.y - point2.y;

		return result;
	}

	var Line = function () {
		function Line(p1, p2, name, props) {
			(0, _classCallCheck3["default"])(this, Line);

			this.set(p1, p2);
			this.name = name;
			this.props = props;
		}

		Line.prototype.set = function set(p1, p2) {
			if (p1) {
				this.p1 = p1;
			}
			if (p2) {
				this.p2 = p2;
			}
			var vec1 = new _Vector2["default"](this.p1.x, this.p1.y),
			    vec2 = new _Vector2["default"](this.p2.x, this.p2.y);
			this.vec = vec2.sub(vec1);
			this.length = this.vec.length();
		};

		Line.prototype.equalPoint = function equalPoint(p1, p2) {
			return p1.x == p2.x && p1.y == p2.y;
		};

		Line.prototype.isCross = function isCross(line) {
			var p = this.p1,
			    p2 = this.p2,
			    q = line.p1,
			    q2 = line.p2;
			var vec1 = this.vec;
			var vec2 = line.vec;
			if (equalPoints(this.p1, line.p1) || equalPoints(this.p1, line.p2) || equalPoints(this.p2, line.p1) || equalPoints(this.p2, line.p2)) {
				return false;
			}
			if (Math.abs(vec1.angle() - vec2.angle()) > 0 && (p.x == q.x && p.y == q.y || p.x == q2.x && p.y == q2.y || p2.x == q.x && p2.y == q.y || p2.x == q2.x && p2.y == q2.y)) {
				return false;
			}
			var r = subtractPoints(p2, p);
			var s = subtractPoints(q2, q);

			var uNumerator = crossProduct(subtractPoints(q, p), r);
			var denominator = crossProduct(r, s);

			if (uNumerator == 0 && denominator == 0) {
				// They are coLlinear

				// Do they touch? (Are any of the points equal?)
				if (equalPoints(p, q) || equalPoints(p, q2) || equalPoints(p2, q) || equalPoints(p2, q2)) {
					return true;
				}
				// Do they overlap? (Are all the point differences in either direction the same sign)
				return !allEqual(q.x - p.x < 0, q.x - p2.x < 0, q2.x - p.x < 0, q2.x - p2.x < 0) || !allEqual(q.y - p.y < 0, q.y - p2.y < 0, q2.y - p.y < 0, q2.y - p2.y < 0);
			}

			if (denominator == 0) {
				// lines are paralell
				return false;
			}

			var u = uNumerator / denominator;
			var t = crossProduct(subtractPoints(q, p), s) / denominator;

			return t >= 0 && t <= 1 && u >= 0 && u <= 1;

			/* let a=this.p1,b=this.p2,c=line.p1,d=line.p2;
	  let vec1 = this.vec;
	  let vec2 = line.vec;
	  if(Math.abs(vec1.angle()-vec2.angle())>0 && ((a.x==c.x && a.y==c.y) || (a.x==d.x  && a.y==d.y) ||(b.x==c.x&&b.y==c.y)||(b.x==d.x&&b.y==d.y))){
	  	return false;
	  }
	   // ������abc �����2�� 
	   var area_abc = (a.x - c.x) * (b.y - c.y) - (a.y - c.y) * (b.x - c.x); 
	    
	   // ������abd �����2�� 
	   var area_abd = (a.x - d.x) * (b.y - d.y) - (a.y - d.y) * (b.x - d.x); 
	    
	   // ���������ͬ���������߶�ͬ��,���ཻ (�Ե����߶��ϵ����,�����������ཻ����); 
	   if ( area_abc*area_abd>=0 ) { 
	   return false; 
	   } 
	    
	   // ������cda �����2�� 
	   var area_cda = (c.x - a.x) * (d.y - a.y) - (c.y - a.y) * (d.x - a.x); 
	   // ������cdb �����2�� 
	   // ע��: ������һ��С�Ż�.����Ҫ���ù�ʽ�������,����ͨ����֪����������Ӽ��ó�. 
	   var area_cdb = area_cda + area_abc - area_abd ; 
	   if ( area_cda * area_cdb >= 0 ) { 
	   return false; 
	   } 
	    
	   return true; */
			//���㽻������ 
			/* var t = area_cda / ( area_abd- area_abc ); 
	  var dx= t*(b.x - a.x), 
	  dy= t*(b.y - a.y); 
	  return { x: a.x + dx , y: a.y + dy };  */
		};

		Line.prototype.getCenter = function getCenter() {
			return this.vec.clone().setLength(this.length / 2).add(new _Vector2["default"](this.p1.x, this.p1.y));
		};

		return Line;
	}();

	exports["default"] = Line;
	module.exports = exports['default'];

/***/ },

/***/ 1192:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
				value: true
	});

	exports["default"] = function (width, height, angle) {
				return {
							x: width * Math.sin(angle),
							y: -height * Math.cos(angle)
				};
	};

	module.exports = exports['default'];

/***/ },

/***/ 1214:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(1216), __esModule: true };

/***/ },

/***/ 1216:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1217);
	var $Object = __webpack_require__(34).Object;
	module.exports = function defineProperties(T, D){
	  return $Object.defineProperties(T, D);
	};

/***/ },

/***/ 1217:
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(62);
	// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	$export($export.S + $export.F * !__webpack_require__(71), 'Object', {defineProperties: __webpack_require__(467)});

/***/ },

/***/ 1489:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * 贝塞尔平滑曲线
	 * @module zrender/shape/util/smoothBezier
	 * @author pissang (https://www.github.com/pissang)
	 *         Kener (@Kener-林峰, kener.linfeng@gmail.com)
	 *         errorrik (errorrik@gmail.com)
	 */


	    var vec2 = __webpack_require__(73);
	    var v2Min = vec2.min;
	    var v2Max = vec2.max;
	    var v2Scale = vec2.scale;
	    var v2Distance = vec2.distance;
	    var v2Add = vec2.add;

	    /**
	     * 贝塞尔平滑曲线
	     * @alias module:zrender/shape/util/smoothBezier
	     * @param {Array} points 线段顶点数组
	     * @param {number} smooth 平滑等级, 0-1
	     * @param {boolean} isLoop
	     * @param {Array} constraint 将计算出来的控制点约束在一个包围盒内
	     *                           比如 [[0, 0], [100, 100]], 这个包围盒会与
	     *                           整个折线的包围盒做一个并集用来约束控制点。
	     * @param {Array} 计算出来的控制点数组
	     */
	    module.exports = function (points, smooth, isLoop, constraint) {
	        var cps = [];

	        var v = [];
	        var v1 = [];
	        var v2 = [];
	        var prevPoint;
	        var nextPoint;

	        var min, max;
	        if (constraint) {
	            min = [Infinity, Infinity];
	            max = [-Infinity, -Infinity];
	            for (var i = 0, len = points.length; i < len; i++) {
	                v2Min(min, min, points[i]);
	                v2Max(max, max, points[i]);
	            }
	            // 与指定的包围盒做并集
	            v2Min(min, min, constraint[0]);
	            v2Max(max, max, constraint[1]);
	        }

	        for (var i = 0, len = points.length; i < len; i++) {
	            var point = points[i];

	            if (isLoop) {
	                prevPoint = points[i ? i - 1 : len - 1];
	                nextPoint = points[(i + 1) % len];
	            }
	            else {
	                if (i === 0 || i === len - 1) {
	                    cps.push(vec2.clone(points[i]));
	                    continue;
	                }
	                else {
	                    prevPoint = points[i - 1];
	                    nextPoint = points[i + 1];
	                }
	            }

	            vec2.sub(v, nextPoint, prevPoint);

	            // use degree to scale the handle length
	            v2Scale(v, v, smooth);

	            var d0 = v2Distance(point, prevPoint);
	            var d1 = v2Distance(point, nextPoint);
	            var sum = d0 + d1;
	            if (sum !== 0) {
	                d0 /= sum;
	                d1 /= sum;
	            }

	            v2Scale(v1, v, -d0);
	            v2Scale(v2, v, d1);
	            var cp0 = v2Add([], point, v1);
	            var cp1 = v2Add([], point, v2);
	            if (constraint) {
	                v2Max(cp0, cp0, min);
	                v2Min(cp0, cp0, max);
	                v2Max(cp1, cp1, min);
	                v2Min(cp1, cp1, max);
	            }
	            cps.push(cp0);
	            cps.push(cp1);
	        }

	        if (isLoop) {
	            cps.push(cps.shift());
	        }

	        return cps;
	    };



/***/ },

/***/ 1490:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Catmull-Rom spline 插值折线
	 * @module zrender/shape/util/smoothSpline
	 * @author pissang (https://www.github.com/pissang)
	 *         Kener (@Kener-林峰, kener.linfeng@gmail.com)
	 *         errorrik (errorrik@gmail.com)
	 */

	    var vec2 = __webpack_require__(73);

	    /**
	     * @inner
	     */
	    function interpolate(p0, p1, p2, p3, t, t2, t3) {
	        var v0 = (p2 - p0) * 0.5;
	        var v1 = (p3 - p1) * 0.5;
	        return (2 * (p1 - p2) + v0 + v1) * t3
	                + (-3 * (p1 - p2) - 2 * v0 - v1) * t2
	                + v0 * t + p1;
	    }

	    /**
	     * @alias module:zrender/shape/util/smoothSpline
	     * @param {Array} points 线段顶点数组
	     * @param {boolean} isLoop
	     * @return {Array}
	     */
	    module.exports = function (points, isLoop) {
	        var len = points.length;
	        var ret = [];

	        var distance = 0;
	        for (var i = 1; i < len; i++) {
	            distance += vec2.distance(points[i - 1], points[i]);
	        }

	        var segs = distance / 2;
	        segs = segs < len ? len : segs;
	        for (var i = 0; i < segs; i++) {
	            var pos = i / (segs - 1) * (isLoop ? len : len - 1);
	            var idx = Math.floor(pos);

	            var w = pos - idx;

	            var p0;
	            var p1 = points[idx % len];
	            var p2;
	            var p3;
	            if (!isLoop) {
	                p0 = points[idx === 0 ? idx : idx - 1];
	                p2 = points[idx > len - 2 ? len - 1 : idx + 1];
	                p3 = points[idx > len - 3 ? len - 1 : idx + 2];
	            }
	            else {
	                p0 = points[(idx - 1 + len) % len];
	                p2 = points[(idx + 1) % len];
	                p3 = points[(idx + 2) % len];
	            }

	            var w2 = w * w;
	            var w3 = w * w2;

	            ret.push([
	                interpolate(p0[0], p1[0], p2[0], p3[0], w, w2, w3),
	                interpolate(p0[1], p1[1], p2[1], p3[1], w, w2, w3)
	            ]);
	        }
	        return ret;
	    };



/***/ },

/***/ 1491:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * 贝塞尔曲线
	 * @module zrender/shape/BezierCurve
	 */


	    var curveTool = __webpack_require__(124);
	    var vec2 = __webpack_require__(73);
	    var quadraticSubdivide = curveTool.quadraticSubdivide;
	    var cubicSubdivide = curveTool.cubicSubdivide;
	    var quadraticAt = curveTool.quadraticAt;
	    var cubicAt = curveTool.cubicAt;
	    var quadraticDerivativeAt = curveTool.quadraticDerivativeAt;
	    var cubicDerivativeAt = curveTool.cubicDerivativeAt;

	    var out = [];

	    function someVectorAt(shape, t, isTangent) {
	        var cpx2 = shape.cpx2;
	        var cpy2 = shape.cpy2;
	        if (cpx2 === null || cpy2 === null) {
	            return [
	                (isTangent ? cubicDerivativeAt : cubicAt)(shape.x1, shape.cpx1, shape.cpx2, shape.x2, t),
	                (isTangent ? cubicDerivativeAt : cubicAt)(shape.y1, shape.cpy1, shape.cpy2, shape.y2, t)
	            ];
	        }
	        else {
	            return [
	                (isTangent ? quadraticDerivativeAt : quadraticAt)(shape.x1, shape.cpx1, shape.x2, t),
	                (isTangent ? quadraticDerivativeAt : quadraticAt)(shape.y1, shape.cpy1, shape.y2, t)
	            ];
	        }
	    }
	    module.exports = __webpack_require__(120).extend({

	        type: 'bezier-curve',

	        shape: {
	            x1: 0,
	            y1: 0,
	            x2: 0,
	            y2: 0,
	            cpx1: 0,
	            cpy1: 0,
	            // cpx2: 0,
	            // cpy2: 0

	            // Curve show percent, for animating
	            percent: 1
	        },

	        style: {
	            stroke: '#000',
	            fill: null
	        },

	        buildPath: function (ctx, shape) {
	            var x1 = shape.x1;
	            var y1 = shape.y1;
	            var x2 = shape.x2;
	            var y2 = shape.y2;
	            var cpx1 = shape.cpx1;
	            var cpy1 = shape.cpy1;
	            var cpx2 = shape.cpx2;
	            var cpy2 = shape.cpy2;
	            var percent = shape.percent;
	            if (percent === 0) {
	                return;
	            }

	            ctx.moveTo(x1, y1);

	            if (cpx2 == null || cpy2 == null) {
	                if (percent < 1) {
	                    quadraticSubdivide(
	                        x1, cpx1, x2, percent, out
	                    );
	                    cpx1 = out[1];
	                    x2 = out[2];
	                    quadraticSubdivide(
	                        y1, cpy1, y2, percent, out
	                    );
	                    cpy1 = out[1];
	                    y2 = out[2];
	                }

	                ctx.quadraticCurveTo(
	                    cpx1, cpy1,
	                    x2, y2
	                );
	            }
	            else {
	                if (percent < 1) {
	                    cubicSubdivide(
	                        x1, cpx1, cpx2, x2, percent, out
	                    );
	                    cpx1 = out[1];
	                    cpx2 = out[2];
	                    x2 = out[3];
	                    cubicSubdivide(
	                        y1, cpy1, cpy2, y2, percent, out
	                    );
	                    cpy1 = out[1];
	                    cpy2 = out[2];
	                    y2 = out[3];
	                }
	                ctx.bezierCurveTo(
	                    cpx1, cpy1,
	                    cpx2, cpy2,
	                    x2, y2
	                );
	            }
	        },

	        /**
	         * Get point at percent
	         * @param  {number} t
	         * @return {Array.<number>}
	         */
	        pointAt: function (t) {
	            return someVectorAt(this.shape, t, false);
	        },

	        /**
	         * Get tangent at percent
	         * @param  {number} t
	         * @return {Array.<number>}
	         */
	        tangentAt: function (t) {
	            var p = someVectorAt(this.shape, t, true);
	            return vec2.normalize(p, p);
	        }
	    });



/***/ },

/***/ 1492:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * 圆形
	 * @module zrender/shape/Circle
	 */



	    module.exports = __webpack_require__(120).extend({

	        type: 'circle',

	        shape: {
	            cx: 0,
	            cy: 0,
	            r: 0
	        },


	        buildPath : function (ctx, shape, inBundle) {
	            // Better stroking in ShapeBundle
	            // Always do it may have performence issue ( fill may be 2x more cost)
	            if (inBundle) {
	                ctx.moveTo(shape.cx + shape.r, shape.cy);
	            }
	            // Better stroking in ShapeBundle
	            // ctx.moveTo(shape.cx + shape.r, shape.cy);
	            ctx.arc(shape.cx, shape.cy, shape.r, 0, Math.PI * 2, true);
	        }
	    });



/***/ },

/***/ 1493:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * 直线
	 * @module zrender/graphic/shape/Line
	 */

	    module.exports = __webpack_require__(120).extend({

	        type: 'line',

	        shape: {
	            // Start point
	            x1: 0,
	            y1: 0,
	            // End point
	            x2: 0,
	            y2: 0,

	            percent: 1
	        },

	        style: {
	            stroke: '#000',
	            fill: null
	        },

	        buildPath: function (ctx, shape) {
	            var x1 = shape.x1;
	            var y1 = shape.y1;
	            var x2 = shape.x2;
	            var y2 = shape.y2;
	            var percent = shape.percent;

	            if (percent === 0) {
	                return;
	            }

	            ctx.moveTo(x1, y1);

	            if (percent < 1) {
	                x2 = x1 * (1 - percent) + x2 * percent;
	                y2 = y1 * (1 - percent) + y2 * percent;
	            }
	            ctx.lineTo(x2, y2);
	        },

	        /**
	         * Get point at percent
	         * @param  {number} percent
	         * @return {Array.<number>}
	         */
	        pointAt: function (p) {
	            var shape = this.shape;
	            return [
	                shape.x1 * (1 - p) + shape.x2 * p,
	                shape.y1 * (1 - p) + shape.y2 * p
	            ];
	        }
	    });



/***/ },

/***/ 1494:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * 多边形
	 * @module zrender/shape/Polygon
	 */


	    var polyHelper = __webpack_require__(1086);

	    module.exports = __webpack_require__(120).extend({
	        
	        type: 'polygon',

	        shape: {
	            points: null,

	            smooth: false,

	            smoothConstraint: null
	        },

	        buildPath: function (ctx, shape) {
	            polyHelper.buildPath(ctx, shape, true);
	        }
	    });


/***/ },

/***/ 1495:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @module zrender/graphic/shape/Polyline
	 */


	    var polyHelper = __webpack_require__(1086);

	    module.exports = __webpack_require__(120).extend({
	        
	        type: 'polyline',

	        shape: {
	            points: null,

	            smooth: false,

	            smoothConstraint: null
	        },

	        style: {
	            stroke: '#000',

	            fill: null
	        },

	        buildPath: function (ctx, shape) {
	            polyHelper.buildPath(ctx, shape, false);
	        }
	    });


/***/ },

/***/ 1496:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * 圆环
	 * @module zrender/graphic/shape/Ring
	 */


	    module.exports = __webpack_require__(120).extend({

	        type: 'ring',

	        shape: {
	            cx: 0,
	            cy: 0,
	            r: 0,
	            r0: 0
	        },

	        buildPath: function (ctx, shape) {
	            var x = shape.cx;
	            var y = shape.cy;
	            var PI2 = Math.PI * 2;
	            ctx.moveTo(x + shape.r, y);
	            ctx.arc(x, y, shape.r, 0, PI2, false);
	            ctx.moveTo(x + shape.r0, y);
	            ctx.arc(x, y, shape.r0, 0, PI2, true);
	        }
	    });



/***/ }

});