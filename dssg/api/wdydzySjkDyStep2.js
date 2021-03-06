(function(){ var runed=0,temp,timer,time;webpackJsonp([3],{

/***/ 0:
/***/ temp = function(module, exports, __webpack_require__) {runed=true;

	'use strict';

	var _css = __webpack_require__(1688);

	var _modal = __webpack_require__(49);

	var _modal2 = _interopRequireDefault(_modal);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsonp = __webpack_require__(234);

	var _jsonp2 = _interopRequireDefault(_jsonp);

	var _global = __webpack_require__(15);

	var _history = __webpack_require__(41);

	var _history2 = _interopRequireDefault(_history);

	var _StepContainerV = __webpack_require__(837);

	var _StepContainerV2 = _interopRequireDefault(_StepContainerV);

	var _dataFormat = __webpack_require__(172);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * Created by liy on 2016/12/20 0020.
	 */
	(0, _jsonp2["default"])("wdydzySjkDyStep2")(function (args, callback) {
	    //各种提示，如”应该从前一步开始的提示“
	    var lastStepState = _global.Global.getState().aiForm.wdydzySjkDyStep1 || _global.Global.getState().aiForm.wdydzySjkDyWQMOStep1;
	    if (!lastStepState) {
	        _modal2["default"].warning({
	            title: '提示',
	            content: '上一步或前几步没有完成，请重新选择正确的资源进行订阅',
	            onOk: function onOk() {
	                /* */
	                setTimeout(function () {
	                    _global.Global.mark({ dataList: {
	                            wdydzySjkDyStep2: null
	                        } });
	                    _history2["default"].push('/datalistV1/wdydzySjk/list/0/10');
	                }, 500);
	            }
	        });
	        return;
	    }

	    var dataSource = (0, _dataFormat.jsonStrToArray)(_global.Global.getState().dataList.wdydzySjkDyStep1.allMsg.data.dbJson);
	    // let dataSource = {
	    //     "data":{
	    //         "content":dataSource1
	    //     },
	    //     'totalElements':dataSource1.length,
	    //     'totalPages':5
	    // }
	    callback({
	        "success": true,
	        "data": {
	            "title": "",
	            "searchConfig": {
	                "data": [{
	                    "column": 6,
	                    "data": [{ "type": "input", "col": 7, "name": "数据项名称", "field": "name" }, { "name": "数据项类型", "col": 7, "type": "select", "field": "type", "options": ["文本", "日期", "整型", "数值"] }, { "type": "button", "value": "查询", "pageName": "search", "btnType": "primary", "htmlType": "submit" }, { "type": "button", "value": "重置", "pageName": "resert", "btnType": "primary", "htmlType": "resert" }]
	                }],
	                "body": { apiName: 'wdydzySjkDyStep2Search' }
	            },
	            "table": {
	                "primarykey": "id",
	                "clounms": [{
	                    "title": "数据项名称",
	                    "dataIndex": "name",
	                    "key": "name"
	                }, {
	                    "title": "数据项英文名称",
	                    "dataIndex": "ename",
	                    "key": "ename"
	                }, {
	                    "title": "数据项编码",
	                    "dataIndex": "code",
	                    "key": "code"
	                }, {
	                    "title": "数据项类型",
	                    "dataIndex": "type",
	                    "key": "type",
	                    render: function render(text, record, index) {
	                        switch (record.type) {
	                            case 3:
	                                return 'DECIMAL';
	                            case 12:
	                                return 'VARCHAR';
	                            case 91:
	                                return 'DATE';
	                            case 93:
	                                return 'TIMESTAMP';
	                            case 2004:
	                                return 'BLOB';
	                            case 2005:
	                                return 'CLOB';
	                            default:
	                                return 'VARCHAR';
	                        }
	                    }
	                }, {
	                    "title": "数据项长度",
	                    "dataIndex": "length",
	                    "key": "length"
	                }, {
	                    "title": "是否必选",
	                    "dataIndex": "mandatory",
	                    "key": "mandatory",
	                    render: function render(text, record, index) {
	                        switch (record.mandatory) {
	                            case '-1':
	                                return '否';
	                            case '0':
	                                return '是';
	                            default:
	                                return '无返回值';

	                        }
	                    }

	                }, {
	                    "title": "发布级别",
	                    "dataIndex": "index",
	                    "key": "index",
	                    render: function render(text, record, index) {
	                        switch (record.index) {
	                            case '1':
	                                return '一级';
	                            case '2':
	                                return '二级';
	                            case '3':
	                                return '三级';
	                            default:
	                                return '未知级别';
	                        }
	                    }
	                }],
	                //"body":{apiName:'wdydzySjkDyStep2TableData'}//暂定此接口
	                "body": { dataSource: dataSource } //暂定此接口
	            },
	            "list": {
	                "view": null,
	                "listApi": null,
	                "saveApi": null
	            },
	            "add": {},
	            "edit": {},
	            "delete": {},
	            "detail": {},
	            "check": {
	                "view": null,
	                "checkApi": null
	            }
	        }
	    });
	});

/***/ },

/***/ 2:
/***/ function(module, exports) {

	/**
	 * @module zrender/core/util
	 */


	    // 用于处理merge时无法遍历Date等对象的问题
	    var BUILTIN_OBJECT = {
	        '[object Function]': 1,
	        '[object RegExp]': 1,
	        '[object Date]': 1,
	        '[object Error]': 1,
	        '[object CanvasGradient]': 1,
	        '[object CanvasPattern]': 1,
	        // For node-canvas
	        '[object Image]': 1,
	        '[object Canvas]': 1
	    };

	    var TYPED_ARRAY = {
	        '[object Int8Array]': 1,
	        '[object Uint8Array]': 1,
	        '[object Uint8ClampedArray]': 1,
	        '[object Int16Array]': 1,
	        '[object Uint16Array]': 1,
	        '[object Int32Array]': 1,
	        '[object Uint32Array]': 1,
	        '[object Float32Array]': 1,
	        '[object Float64Array]': 1
	    };

	    var objToString = Object.prototype.toString;

	    var arrayProto = Array.prototype;
	    var nativeForEach = arrayProto.forEach;
	    var nativeFilter = arrayProto.filter;
	    var nativeSlice = arrayProto.slice;
	    var nativeMap = arrayProto.map;
	    var nativeReduce = arrayProto.reduce;

	    /**
	     * Those data types can be cloned:
	     *     Plain object, Array, TypedArray, number, string, null, undefined.
	     * Those data types will be assgined using the orginal data:
	     *     BUILTIN_OBJECT
	     * Instance of user defined class will be cloned to a plain object, without
	     * properties in prototype.
	     * Other data types is not supported (not sure what will happen).
	     *
	     * Caution: do not support clone Date, for performance consideration.
	     * (There might be a large number of date in `series.data`).
	     * So date should not be modified in and out of echarts.
	     *
	     * @param {*} source
	     * @return {*} new
	     */
	    function clone(source) {
	        if (source == null || typeof source != 'object') {
	            return source;
	        }

	        var result = source;
	        var typeStr = objToString.call(source);

	        if (typeStr === '[object Array]') {
	            result = [];
	            for (var i = 0, len = source.length; i < len; i++) {
	                result[i] = clone(source[i]);
	            }
	        }
	        else if (TYPED_ARRAY[typeStr]) {
	            result = source.constructor.from(source);
	        }
	        else if (!BUILTIN_OBJECT[typeStr] && !isDom(source)) {
	            result = {};
	            for (var key in source) {
	                if (source.hasOwnProperty(key)) {
	                    result[key] = clone(source[key]);
	                }
	            }
	        }

	        return result;
	    }

	    /**
	     * @memberOf module:zrender/core/util
	     * @param {*} target
	     * @param {*} source
	     * @param {boolean} [overwrite=false]
	     */
	    function merge(target, source, overwrite) {
	        // We should escapse that source is string
	        // and enter for ... in ...
	        if (!isObject(source) || !isObject(target)) {
	            return overwrite ? clone(source) : target;
	        }

	        for (var key in source) {
	            if (source.hasOwnProperty(key)) {
	                var targetProp = target[key];
	                var sourceProp = source[key];

	                if (isObject(sourceProp)
	                    && isObject(targetProp)
	                    && !isArray(sourceProp)
	                    && !isArray(targetProp)
	                    && !isDom(sourceProp)
	                    && !isDom(targetProp)
	                    && !isBuildInObject(sourceProp)
	                    && !isBuildInObject(targetProp)
	                ) {
	                    // 如果需要递归覆盖，就递归调用merge
	                    merge(targetProp, sourceProp, overwrite);
	                }
	                else if (overwrite || !(key in target)) {
	                    // 否则只处理overwrite为true，或者在目标对象中没有此属性的情况
	                    // NOTE，在 target[key] 不存在的时候也是直接覆盖
	                    target[key] = clone(source[key], true);
	                }
	            }
	        }

	        return target;
	    }

	    /**
	     * @param {Array} targetAndSources The first item is target, and the rests are source.
	     * @param {boolean} [overwrite=false]
	     * @return {*} target
	     */
	    function mergeAll(targetAndSources, overwrite) {
	        var result = targetAndSources[0];
	        for (var i = 1, len = targetAndSources.length; i < len; i++) {
	            result = merge(result, targetAndSources[i], overwrite);
	        }
	        return result;
	    }

	    /**
	     * @param {*} target
	     * @param {*} source
	     * @memberOf module:zrender/core/util
	     */
	    function extend(target, source) {
	        for (var key in source) {
	            if (source.hasOwnProperty(key)) {
	                target[key] = source[key];
	            }
	        }
	        return target;
	    }

	    /**
	     * @param {*} target
	     * @param {*} source
	     * @param {boolen} [overlay=false]
	     * @memberOf module:zrender/core/util
	     */
	    function defaults(target, source, overlay) {
	        for (var key in source) {
	            if (source.hasOwnProperty(key)
	                && (overlay ? source[key] != null : target[key] == null)
	            ) {
	                target[key] = source[key];
	            }
	        }
	        return target;
	    }

	    function createCanvas() {
	        return document.createElement('canvas');
	    }
	    // FIXME
	    var _ctx;
	    function getContext() {
	        if (!_ctx) {
	            // Use util.createCanvas instead of createCanvas
	            // because createCanvas may be overwritten in different environment
	            _ctx = util.createCanvas().getContext('2d');
	        }
	        return _ctx;
	    }

	    /**
	     * 查询数组中元素的index
	     * @memberOf module:zrender/core/util
	     */
	    function indexOf(array, value) {
	        if (array) {
	            if (array.indexOf) {
	                return array.indexOf(value);
	            }
	            for (var i = 0, len = array.length; i < len; i++) {
	                if (array[i] === value) {
	                    return i;
	                }
	            }
	        }
	        return -1;
	    }

	    /**
	     * 构造类继承关系
	     *
	     * @memberOf module:zrender/core/util
	     * @param {Function} clazz 源类
	     * @param {Function} baseClazz 基类
	     */
	    function inherits(clazz, baseClazz) {
	        var clazzPrototype = clazz.prototype;
	        function F() {}
	        F.prototype = baseClazz.prototype;
	        clazz.prototype = new F();

	        for (var prop in clazzPrototype) {
	            clazz.prototype[prop] = clazzPrototype[prop];
	        }
	        clazz.prototype.constructor = clazz;
	        clazz.superClass = baseClazz;
	    }

	    /**
	     * @memberOf module:zrender/core/util
	     * @param {Object|Function} target
	     * @param {Object|Function} sorce
	     * @param {boolean} overlay
	     */
	    function mixin(target, source, overlay) {
	        target = 'prototype' in target ? target.prototype : target;
	        source = 'prototype' in source ? source.prototype : source;

	        defaults(target, source, overlay);
	    }

	    /**
	     * @param {Array|TypedArray} data
	     */
	    function isArrayLike(data) {
	        if (! data) {
	            return;
	        }
	        if (typeof data == 'string') {
	            return false;
	        }
	        return typeof data.length == 'number';
	    }

	    /**
	     * 数组或对象遍历
	     * @memberOf module:zrender/core/util
	     * @param {Object|Array} obj
	     * @param {Function} cb
	     * @param {*} [context]
	     */
	    function each(obj, cb, context) {
	        if (!(obj && cb)) {
	            return;
	        }
	        if (obj.forEach && obj.forEach === nativeForEach) {
	            obj.forEach(cb, context);
	        }
	        else if (obj.length === +obj.length) {
	            for (var i = 0, len = obj.length; i < len; i++) {
	                cb.call(context, obj[i], i, obj);
	            }
	        }
	        else {
	            for (var key in obj) {
	                if (obj.hasOwnProperty(key)) {
	                    cb.call(context, obj[key], key, obj);
	                }
	            }
	        }
	    }

	    /**
	     * 数组映射
	     * @memberOf module:zrender/core/util
	     * @param {Array} obj
	     * @param {Function} cb
	     * @param {*} [context]
	     * @return {Array}
	     */
	    function map(obj, cb, context) {
	        if (!(obj && cb)) {
	            return;
	        }
	        if (obj.map && obj.map === nativeMap) {
	            return obj.map(cb, context);
	        }
	        else {
	            var result = [];
	            for (var i = 0, len = obj.length; i < len; i++) {
	                result.push(cb.call(context, obj[i], i, obj));
	            }
	            return result;
	        }
	    }

	    /**
	     * @memberOf module:zrender/core/util
	     * @param {Array} obj
	     * @param {Function} cb
	     * @param {Object} [memo]
	     * @param {*} [context]
	     * @return {Array}
	     */
	    function reduce(obj, cb, memo, context) {
	        if (!(obj && cb)) {
	            return;
	        }
	        if (obj.reduce && obj.reduce === nativeReduce) {
	            return obj.reduce(cb, memo, context);
	        }
	        else {
	            for (var i = 0, len = obj.length; i < len; i++) {
	                memo = cb.call(context, memo, obj[i], i, obj);
	            }
	            return memo;
	        }
	    }

	    /**
	     * 数组过滤
	     * @memberOf module:zrender/core/util
	     * @param {Array} obj
	     * @param {Function} cb
	     * @param {*} [context]
	     * @return {Array}
	     */
	    function filter(obj, cb, context) {
	        if (!(obj && cb)) {
	            return;
	        }
	        if (obj.filter && obj.filter === nativeFilter) {
	            return obj.filter(cb, context);
	        }
	        else {
	            var result = [];
	            for (var i = 0, len = obj.length; i < len; i++) {
	                if (cb.call(context, obj[i], i, obj)) {
	                    result.push(obj[i]);
	                }
	            }
	            return result;
	        }
	    }

	    /**
	     * 数组项查找
	     * @memberOf module:zrender/core/util
	     * @param {Array} obj
	     * @param {Function} cb
	     * @param {*} [context]
	     * @return {Array}
	     */
	    function find(obj, cb, context) {
	        if (!(obj && cb)) {
	            return;
	        }
	        for (var i = 0, len = obj.length; i < len; i++) {
	            if (cb.call(context, obj[i], i, obj)) {
	                return obj[i];
	            }
	        }
	    }

	    /**
	     * @memberOf module:zrender/core/util
	     * @param {Function} func
	     * @param {*} context
	     * @return {Function}
	     */
	    function bind(func, context) {
	        var args = nativeSlice.call(arguments, 2);
	        return function () {
	            return func.apply(context, args.concat(nativeSlice.call(arguments)));
	        };
	    }

	    /**
	     * @memberOf module:zrender/core/util
	     * @param {Function} func
	     * @return {Function}
	     */
	    function curry(func) {
	        var args = nativeSlice.call(arguments, 1);
	        return function () {
	            return func.apply(this, args.concat(nativeSlice.call(arguments)));
	        };
	    }

	    /**
	     * @memberOf module:zrender/core/util
	     * @param {*} value
	     * @return {boolean}
	     */
	    function isArray(value) {
	        return objToString.call(value) === '[object Array]';
	    }

	    /**
	     * @memberOf module:zrender/core/util
	     * @param {*} value
	     * @return {boolean}
	     */
	    function isFunction(value) {
	        return typeof value === 'function';
	    }

	    /**
	     * @memberOf module:zrender/core/util
	     * @param {*} value
	     * @return {boolean}
	     */
	    function isString(value) {
	        return objToString.call(value) === '[object String]';
	    }

	    /**
	     * @memberOf module:zrender/core/util
	     * @param {*} value
	     * @return {boolean}
	     */
	    function isObject(value) {
	        // Avoid a V8 JIT bug in Chrome 19-20.
	        // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	        var type = typeof value;
	        return type === 'function' || (!!value && type == 'object');
	    }

	    /**
	     * @memberOf module:zrender/core/util
	     * @param {*} value
	     * @return {boolean}
	     */
	    function isBuildInObject(value) {
	        return !!BUILTIN_OBJECT[objToString.call(value)];
	    }

	    /**
	     * @memberOf module:zrender/core/util
	     * @param {*} value
	     * @return {boolean}
	     */
	    function isDom(value) {
	        return typeof value === 'object'
	            && typeof value.nodeType === 'number'
	            && typeof value.ownerDocument === 'object';
	    }

	    /**
	     * Whether is exactly NaN. Notice isNaN('a') returns true.
	     * @param {*} value
	     * @return {boolean}
	     */
	    function eqNaN(value) {
	        return value !== value;
	    }

	    /**
	     * If value1 is not null, then return value1, otherwise judget rest of values.
	     * @memberOf module:zrender/core/util
	     * @return {*} Final value
	     */
	    function retrieve(values) {
	        for (var i = 0, len = arguments.length; i < len; i++) {
	            if (arguments[i] != null) {
	                return arguments[i];
	            }
	        }
	    }

	    /**
	     * @memberOf module:zrender/core/util
	     * @param {Array} arr
	     * @param {number} startIndex
	     * @param {number} endIndex
	     * @return {Array}
	     */
	    function slice() {
	        return Function.call.apply(nativeSlice, arguments);
	    }

	    /**
	     * @memberOf module:zrender/core/util
	     * @param {boolean} condition
	     * @param {string} message
	     */
	    function assert(condition, message) {
	        if (!condition) {
	            throw new Error(message);
	        }
	    }

	    var util = {
	        inherits: inherits,
	        mixin: mixin,
	        clone: clone,
	        merge: merge,
	        mergeAll: mergeAll,
	        extend: extend,
	        defaults: defaults,
	        getContext: getContext,
	        createCanvas: createCanvas,
	        indexOf: indexOf,
	        slice: slice,
	        find: find,
	        isArrayLike: isArrayLike,
	        each: each,
	        map: map,
	        reduce: reduce,
	        filter: filter,
	        bind: bind,
	        curry: curry,
	        isArray: isArray,
	        isString: isString,
	        isObject: isObject,
	        isFunction: isFunction,
	        isBuildInObject: isBuildInObject,
	        isDom: isDom,
	        eqNaN: eqNaN,
	        retrieve: retrieve,
	        assert: assert,
	        noop: function () {}
	    };
	    module.exports = util;



/***/ },

/***/ 34:
/***/ function(module, exports) {

	
	    var ArrayCtor = typeof Float32Array === 'undefined'
	        ? Array
	        : Float32Array;

	    /**
	     * @typedef {Float32Array|Array.<number>} Vector2
	     */
	    /**
	     * 二维向量类
	     * @exports zrender/tool/vector
	     */
	    var vector = {
	        /**
	         * 创建一个向量
	         * @param {number} [x=0]
	         * @param {number} [y=0]
	         * @return {Vector2}
	         */
	        create: function (x, y) {
	            var out = new ArrayCtor(2);
	            if (x == null) {
	                x = 0;
	            }
	            if (y == null) {
	                y = 0;
	            }
	            out[0] = x;
	            out[1] = y;
	            return out;
	        },

	        /**
	         * 复制向量数据
	         * @param {Vector2} out
	         * @param {Vector2} v
	         * @return {Vector2}
	         */
	        copy: function (out, v) {
	            out[0] = v[0];
	            out[1] = v[1];
	            return out;
	        },

	        /**
	         * 克隆一个向量
	         * @param {Vector2} v
	         * @return {Vector2}
	         */
	        clone: function (v) {
	            var out = new ArrayCtor(2);
	            out[0] = v[0];
	            out[1] = v[1];
	            return out;
	        },

	        /**
	         * 设置向量的两个项
	         * @param {Vector2} out
	         * @param {number} a
	         * @param {number} b
	         * @return {Vector2} 结果
	         */
	        set: function (out, a, b) {
	            out[0] = a;
	            out[1] = b;
	            return out;
	        },

	        /**
	         * 向量相加
	         * @param {Vector2} out
	         * @param {Vector2} v1
	         * @param {Vector2} v2
	         */
	        add: function (out, v1, v2) {
	            out[0] = v1[0] + v2[0];
	            out[1] = v1[1] + v2[1];
	            return out;
	        },

	        /**
	         * 向量缩放后相加
	         * @param {Vector2} out
	         * @param {Vector2} v1
	         * @param {Vector2} v2
	         * @param {number} a
	         */
	        scaleAndAdd: function (out, v1, v2, a) {
	            out[0] = v1[0] + v2[0] * a;
	            out[1] = v1[1] + v2[1] * a;
	            return out;
	        },

	        /**
	         * 向量相减
	         * @param {Vector2} out
	         * @param {Vector2} v1
	         * @param {Vector2} v2
	         */
	        sub: function (out, v1, v2) {
	            out[0] = v1[0] - v2[0];
	            out[1] = v1[1] - v2[1];
	            return out;
	        },

	        /**
	         * 向量长度
	         * @param {Vector2} v
	         * @return {number}
	         */
	        len: function (v) {
	            return Math.sqrt(this.lenSquare(v));
	        },

	        /**
	         * 向量长度平方
	         * @param {Vector2} v
	         * @return {number}
	         */
	        lenSquare: function (v) {
	            return v[0] * v[0] + v[1] * v[1];
	        },

	        /**
	         * 向量乘法
	         * @param {Vector2} out
	         * @param {Vector2} v1
	         * @param {Vector2} v2
	         */
	        mul: function (out, v1, v2) {
	            out[0] = v1[0] * v2[0];
	            out[1] = v1[1] * v2[1];
	            return out;
	        },

	        /**
	         * 向量除法
	         * @param {Vector2} out
	         * @param {Vector2} v1
	         * @param {Vector2} v2
	         */
	        div: function (out, v1, v2) {
	            out[0] = v1[0] / v2[0];
	            out[1] = v1[1] / v2[1];
	            return out;
	        },

	        /**
	         * 向量点乘
	         * @param {Vector2} v1
	         * @param {Vector2} v2
	         * @return {number}
	         */
	        dot: function (v1, v2) {
	            return v1[0] * v2[0] + v1[1] * v2[1];
	        },

	        /**
	         * 向量缩放
	         * @param {Vector2} out
	         * @param {Vector2} v
	         * @param {number} s
	         */
	        scale: function (out, v, s) {
	            out[0] = v[0] * s;
	            out[1] = v[1] * s;
	            return out;
	        },

	        /**
	         * 向量归一化
	         * @param {Vector2} out
	         * @param {Vector2} v
	         */
	        normalize: function (out, v) {
	            var d = vector.len(v);
	            if (d === 0) {
	                out[0] = 0;
	                out[1] = 0;
	            }
	            else {
	                out[0] = v[0] / d;
	                out[1] = v[1] / d;
	            }
	            return out;
	        },

	        /**
	         * 计算向量间距离
	         * @param {Vector2} v1
	         * @param {Vector2} v2
	         * @return {number}
	         */
	        distance: function (v1, v2) {
	            return Math.sqrt(
	                (v1[0] - v2[0]) * (v1[0] - v2[0])
	                + (v1[1] - v2[1]) * (v1[1] - v2[1])
	            );
	        },

	        /**
	         * 向量距离平方
	         * @param {Vector2} v1
	         * @param {Vector2} v2
	         * @return {number}
	         */
	        distanceSquare: function (v1, v2) {
	            return (v1[0] - v2[0]) * (v1[0] - v2[0])
	                + (v1[1] - v2[1]) * (v1[1] - v2[1]);
	        },

	        /**
	         * 求负向量
	         * @param {Vector2} out
	         * @param {Vector2} v
	         */
	        negate: function (out, v) {
	            out[0] = -v[0];
	            out[1] = -v[1];
	            return out;
	        },

	        /**
	         * 插值两个点
	         * @param {Vector2} out
	         * @param {Vector2} v1
	         * @param {Vector2} v2
	         * @param {number} t
	         */
	        lerp: function (out, v1, v2, t) {
	            out[0] = v1[0] + t * (v2[0] - v1[0]);
	            out[1] = v1[1] + t * (v2[1] - v1[1]);
	            return out;
	        },

	        /**
	         * 矩阵左乘向量
	         * @param {Vector2} out
	         * @param {Vector2} v
	         * @param {Vector2} m
	         */
	        applyTransform: function (out, v, m) {
	            var x = v[0];
	            var y = v[1];
	            out[0] = m[0] * x + m[2] * y + m[4];
	            out[1] = m[1] * x + m[3] * y + m[5];
	            return out;
	        },
	        /**
	         * 求两个向量最小值
	         * @param  {Vector2} out
	         * @param  {Vector2} v1
	         * @param  {Vector2} v2
	         */
	        min: function (out, v1, v2) {
	            out[0] = Math.min(v1[0], v2[0]);
	            out[1] = Math.min(v1[1], v2[1]);
	            return out;
	        },
	        /**
	         * 求两个向量最大值
	         * @param  {Vector2} out
	         * @param  {Vector2} v1
	         * @param  {Vector2} v2
	         */
	        max: function (out, v1, v2) {
	            out[0] = Math.max(v1[0], v2[0]);
	            out[1] = Math.max(v1[1], v2[1]);
	            return out;
	        }
	    };

	    vector.length = vector.len;
	    vector.lengthSquare = vector.lenSquare;
	    vector.dist = vector.distance;
	    vector.distSquare = vector.distanceSquare;

	    module.exports = vector;



/***/ },

/***/ 36:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _css = __webpack_require__(30);

	var _button = __webpack_require__(28);

	var _button2 = _interopRequireDefault(_button);

	var _css2 = __webpack_require__(377);

	var _col = __webpack_require__(196);

	var _col2 = _interopRequireDefault(_col);

	var _css3 = __webpack_require__(64);

	var _icon = __webpack_require__(20);

	var _icon2 = _interopRequireDefault(_icon);

	var _getIterator2 = __webpack_require__(48);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _css4 = __webpack_require__(961);

	var _row = __webpack_require__(318);

	var _row2 = _interopRequireDefault(_row);

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _typeof2 = __webpack_require__(37);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _defineProperty2 = __webpack_require__(7);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(6);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(5);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _css5 = __webpack_require__(160);

	var _datePicker = __webpack_require__(138);

	var _datePicker2 = _interopRequireDefault(_datePicker);

	var _css6 = __webpack_require__(102);

	var _checkbox = __webpack_require__(91);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	var _css7 = __webpack_require__(93);

	var _radio = __webpack_require__(74);

	var _radio2 = _interopRequireDefault(_radio);

	var _css8 = __webpack_require__(1689);

	var _select = __webpack_require__(103);

	var _select2 = _interopRequireDefault(_select);

	var _css9 = __webpack_require__(63);

	var _form = __webpack_require__(59);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _AiFormItem = __webpack_require__(379);

	var _AiFormItem2 = _interopRequireDefault(_AiFormItem);

	var _moment = __webpack_require__(22);

	var _moment2 = _interopRequireDefault(_moment);

	var _component = __webpack_require__(13);

	var _component2 = _interopRequireDefault(_component);

	var _aiForm3 = __webpack_require__(158);

	var _dataList5 = __webpack_require__(35);

	var _AiForm = __webpack_require__(974);

	var _AiForm2 = _interopRequireDefault(_AiForm);

	var _redux = __webpack_require__(47);

	var _dataFormat = __webpack_require__(172);

	var _global = __webpack_require__(15);

	var _actionType = __webpack_require__(25);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	_moment2["default"].locale('zh-cn');
	var FormItem = _form2["default"].Item;
	var Option = _select2["default"].Option;
	var RadioButton = _radio2["default"].Button;
	var RadioGroup = _radio2["default"].Group;
	var CheckboxGroup = _checkbox2["default"].Group;
	var MonthPicker = _datePicker2["default"].MonthPicker,
	    RangePicker = _datePicker2["default"].RangePicker;

	//form表单提交API接口
	//var submitApi="";

	var AiForm = function (_Component) {
	    (0, _inherits3["default"])(AiForm, _Component);

	    function AiForm(props) {
	        (0, _classCallCheck3["default"])(this, AiForm);

	        //获取表单提交接口
	        //submitApi = props.submitApi;
	        return (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));
	    }

	    AiForm.prototype.componentDidMount = function componentDidMount() {
	        _global.Global.mark({
	            aiForm: (0, _defineProperty3["default"])({}, this.props.id, {
	                form: this.props.form
	            })
	        });

	        if (this.props.perennity && this.props.state && this.props.state.config && this.props.state.config.data) {
	            console.log('aiForm ' + this.props.id + " is perennity");
	        } else {
	            if (this.props.detailMsg) {
	                var detailMsg = this.props.detailMsg;
	                this.props.actions.requestStepDetailMsg(detailMsg, this.props.config, this, this.props.id); //json
	            } else {
	                if ((0, _typeof3["default"])(this.props.config) == 'object' && this.props.config.apiName) {

	                    this.props.actions.requestTestMyForm((0, _extends3["default"])({}, this.props.config, { jsonpArgs: (0, _extends3["default"])({}, this.props.config.jsonpArgs, { target: this }) }), this.props.id);
	                } else {
	                    this.props.actions.readDict(this.props.config);
	                    this.props.actions.requestInitMyForm(this.props.config, this.props.id);
	                }
	            }
	        }
	    };

	    AiForm.prototype.handleSubmit = function handleSubmit(e) {
	        var _this2 = this;

	        e.preventDefault();
	        this.props.form.validateFieldsAndScroll(function (err, values) {
	            if (!err) {
	                console.log('Received values of form: ', values);
	                // 提交表单
	                //this.props.actions.submitAct(this.props.submitApi,values)
	                if (values.button) {
	                    delete values.button;
	                }
	                var key = void 0;

	                for (key in values) {
	                    if (values[key] == "_all_") {
	                        delete values[key];
	                    }
	                }
	                if (_this2.props.onSubmit) {
	                    _this2.props.onSubmit(values);
	                } else {
	                    console.log('valuse=: ', values);
	                }
	            }
	        });
	    };

	    //slect下拉联动


	    AiForm.prototype.handleChange = function handleChange(args, linkage, value) {
	        //"linkage":[{"field":"methods","value":"rest","type":"replace","data":"{"name":"请求方法","type":"select","field":"sex","dictId":"requestMode","placeholder":"请选择..."}"}]},
	        {/* if(linkage[0].val==value){
	            args.map((arg,i)=>{
	            if(arg.field==linkage[0].field){
	            args[i]=linkage[0].data;
	            }
	            })
	            }*/}
	    };

	    AiForm.prototype.getChange = function getChange(arg, event) {
	        //替换值
	        console.log("arg=" + arg.field);
	        console.log("id=" + this.props.id);
	        var field = arg.field;
	        var id = this.props.id;
	        var code = arg.code ? arg.code : "";
	        var value = "";
	        if (arg.type == "input") {
	            console.log("event=" + event.target.value);
	            value = event.target.value;
	        } else {
	            console.log("event=" + event);
	            value = event;
	        }

	        this.props.actions.saveStepForm(id, field, value, code);
	    };

	    AiForm.prototype.customChange = function customChange(arg, event) {
	        //替换值
	        console.log("id=" + event.id);
	        console.log("value=" + event.value);
	        //this.props.actions.saveStepForm(id,field,value);
	    };

	    AiForm.prototype.render = function render() {
	        var _this3 = this;

	        try {
	            var _ret = function () {
	                var state = _this3.props.state;
	                //return <div>{this.props.id}</div>
	                if (state && state.config && state.config.msg) return {
	                        v: _react2["default"].createElement(
	                            'div',
	                            null,
	                            'msg:',
	                            state.config.msg
	                        )
	                    };

	                if (!_this3.props.state || !_this3.props.state.config || !_this3.props.state.config.data || _this3.props.state.config.data.length == 0) return {
	                        v: _react2["default"].createElement(
	                            'div',
	                            null,
	                            '...'
	                        )
	                    };

	                var args = _this3.props.state.config.data;
	                var getFieldDecorator = _this3.props.form.getFieldDecorator;


	                var all = [];
	                //获取下拉框的field条件
	                var dictInterfaces = [];
	                var columnIndex = -1;
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;

	                try {
	                    var _loop = function _loop() {
	                        var formList = _step.value;

	                        columnIndex++;
	                        var children = [];
	                        var dataList = formList.data;
	                        var col = formList.column ? formList.column : 1;
	                        //框架默认页面分为24份
	                        var colSpan = 24 / col;
	                        var offset = 0;
	                        var code = _this3.props.id;
	                        if (formList.showTitle ? formList.showTitle : false) {
	                            all.push(_react2["default"].createElement(
	                                'div',
	                                { key: 'aiTitle' + columnIndex, className: "formListTitle" },
	                                _react2["default"].createElement(_icon2["default"], { className: "titleIcon", type: formList.titleIcon }),
	                                _react2["default"].createElement(
	                                    'span',
	                                    { className: "title" },
	                                    formList.title
	                                )
	                            ));
	                        }

	                        //自定义标签
	                        if (typeof formList.data == "function") {
	                            children.push(_react2["default"].createElement(
	                                _col2["default"],
	                                { key: 'column' + columnIndex, span: colSpan, offset: offset },
	                                formList.data(_this3.props.form)
	                            ));
	                        } else if (Array.isArray(dataList)) {
	                            formList.code = code;
	                            dataList.forEach(function (arg, i) {
	                                var customProps = arg.props ? arg.props : {};
	                                var displayMode = {};
	                                var mode = void 0;
	                                if (arg.preRender) {
	                                    mode = arg.preRender();
	                                    if (mode == 'hidden') {
	                                        displayMode = { style: { visibility: mode } };
	                                    } else if (mode == "none") {
	                                        displayMode = { style: { display: mode } };
	                                    }
	                                }

	                                customProps = (0, _extends3["default"])({}, customProps, { style: (0, _extends3["default"])({}, customProps.style, displayMode) });

	                                if (arg.type == null || arg.type == "") {
	                                    // let fun = arg.value();
	                                    //if(fun.props && fun.props.children && fun.props.children.props)
	                                    //fun.props.children.props = {...fun.props.children.props,onChange:this.customChange.bind(this,fun.props.children.props)}
	                                    if (mode != "hidden") {
	                                        children.push(_react2["default"].createElement(
	                                            _col2["default"],
	                                            (0, _extends3["default"])({ span: colSpan, key: "aiItem" + columnIndex + "_" + i, offset: offset }, displayMode),
	                                            typeof arg.value == 'function' ? arg.value() : arg
	                                        ));
	                                    }
	                                } else {
	                                    arg.code = code;
	                                    if (arg.type == "upload" && arg.props && arg.props.onChange) {
	                                        arg.props = (0, _extends3["default"])({}, arg.props);
	                                    } else {
	                                        arg.props = (0, _extends3["default"])({}, arg.props, { onChange: _this3.getChange.bind(_this3, arg) });
	                                    }
	                                    children.push(_react2["default"].createElement(_AiFormItem2["default"], { key: "aiItem" + columnIndex + "_" + i, arg: arg, form: _this3.props.form, spanPerCol: colSpan, dicts: _this3.props.dicts, state: _this3.props.state, columnIndex: columnIndex, itemIndex: i }));
	                                }
	                            });
	                        } else {
	                            children.push(_react2["default"].createElement(
	                                _col2["default"],
	                                { span: colSpan, offset: offset, key: 'column' + columnIndex },
	                                formList.data
	                            ));
	                        }
	                        var buttons = [];
	                        formList.buttonConfigs && formList.buttonConfigs.buttons && formList.buttonConfigs.buttons.map(function (button, btnIndex) {
	                            var customProps = button.props ? button.props : {};
	                            var displayMode = {};
	                            var mode = void 0;
	                            if (button.preRender) {
	                                mode = button.preRender();
	                                if (mode == 'hidden') {
	                                    displayMode = { style: { visibility: mode } };
	                                } else if (mode == "none") {
	                                    displayMode = { style: { display: mode } };
	                                }
	                            }
	                            customProps = (0, _extends3["default"])({}, customProps, { style: (0, _extends3["default"])({}, customProps.style, displayMode) });

	                            buttons.push(_react2["default"].createElement(
	                                'div',
	                                { key: 'buttonConfigs' + btnIndex },
	                                mode != "hidden" && _react2["default"].createElement(
	                                    _button2["default"],
	                                    (0, _extends3["default"])({ className: "aiFormBtn", onClick: function () {
	                                            if (button.value == '取消' || button.value == "返回") {
	                                                if (button.mark) {
	                                                    var mark = button.mark;
	                                                    _global.Global.mark({ dataList: (0, _defineProperty3["default"])({}, mark, { detailMsgDataApi: null }) });
	                                                    _global.Global.mark({ dataList: (0, _defineProperty3["default"])({}, mark, { selectedRows: null }) });
	                                                    //清除可编辑表，eg：我管理的目录编辑之后，清除aiFormTable数据
	                                                    if (_global.Global.getState().aiFormTable[mark]) {
	                                                        _global.Global.mark({ aiFormTable: (0, _defineProperty3["default"])({}, mark, null) });
	                                                    }
	                                                }
	                                                _global.Global.mark({ aiForm: (0, _defineProperty3["default"])({}, this.props.id, null) });
	                                                window.history.back(-1); //回退到上一步
	                                            } else {
	                                                if (formList.buttonConfigs && formList.buttonConfigs.getValue) {
	                                                    var config = formList.buttonConfigs.onSubmitApi;
	                                                    var params = formList.buttonConfigs.getValue;
	                                                    var value = (0, _dataFormat.getAiFormValue)(_global.Global.getState(), params.id, params.index);
	                                                    if (formList.buttonConfigs.changeValue) {
	                                                        var param = formList.buttonConfigs.changeValue;
	                                                        if (value[param.key] != "") {
	                                                            value[param.key] = value[param.key].format(param.format);
	                                                        }
	                                                    }
	                                                    config.body = (0, _extends3["default"])({}, config.body, value);
	                                                    if (button.mark) {
	                                                        var _mark = button.mark;
	                                                        _global.Global.mark({ dataList: (0, _defineProperty3["default"])({}, _mark, { detailMsgDataApi: null }) });
	                                                        _global.Global.mark({ dataList: (0, _defineProperty3["default"])({}, _mark, { selectedRows: null }) });
	                                                    }
	                                                    this.props.actions.onSubmitAction(config);
	                                                }
	                                            }
	                                        }.bind(_this3) }, customProps),
	                                    button.value ? button.value : "按钮"
	                                )
	                            ));
	                        });
	                        formList.buttonConfigs && formList.buttonConfigs.buttons && children.push(_react2["default"].createElement(
	                            'div',
	                            { key: "buttonConfigs" + columnIndex },
	                            _react2["default"].createElement(
	                                _col2["default"],
	                                { span: 24, key: 'btnsCon' + columnIndex, offset: offset, style: { position: "fixed", zIndex: "998", bottom: "5%", right: "100" } },
	                                buttons
	                            )
	                        ));

	                        //合并
	                        all = all.concat(_react2["default"].createElement(
	                            'div',
	                            { key: "childrenContent" + columnIndex, className: "childrenContent" },
	                            children
	                        ));
	                    };

	                    for (var _iterator = (0, _getIterator3["default"])(args), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        _loop();
	                    }
	                } catch (err) {
	                    _didIteratorError = true;
	                    _iteratorError = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion && _iterator["return"]) {
	                            _iterator["return"]();
	                        }
	                    } finally {
	                        if (_didIteratorError) {
	                            throw _iteratorError;
	                        }
	                    }
	                }

	                return {
	                    v: _react2["default"].createElement(
	                        _row2["default"],
	                        { style: { overflowY: "auto", height: "100%" } },
	                        _react2["default"].createElement(
	                            _form2["default"],
	                            {
	                                onSubmit: _this3.handleSubmit.bind(_this3),
	                                horizontal: true,
	                                className: 'ant-advanced-search-form' },
	                            all
	                        )
	                    )
	                };
	            }();

	            if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3["default"])(_ret)) === "object") return _ret.v;
	        } catch (ex) {
	            console.log("error:", ex.trace);
	            return _react2["default"].createElement(
	                'div',
	                null,
	                '\u9875\u9762\u6E32\u67D3\u9519\u8BEF:',
	                ex.message
	            );
	        }
	    };

	    return AiForm;
	}(_react.Component);

	var Demo = _form2["default"].create()(AiForm);

	exports["default"] = (0, _component2["default"])('aiForm', { requestInitMyForm: _aiForm3.requestInitMyForm, requestTestMyForm: _aiForm3.requestTestMyForm, readDict: _aiForm3.readDict, updateOneRow: _aiForm3.updateOneRow, saveStepForm: _aiForm3.saveStepForm, requestStepDetailMsg: _dataList5.requestStepDetailMsg, onSubmitAction: _aiForm3.onSubmitAction }, function (state) {
	    return { dicts: state.dicts };
	})(Demo);
	module.exports = exports['default'];

/***/ },

/***/ 62:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @module echarts/core/BoundingRect
	 */


	    var vec2 = __webpack_require__(34);
	    var matrix = __webpack_require__(120);

	    var v2ApplyTransform = vec2.applyTransform;
	    var mathMin = Math.min;
	    var mathMax = Math.max;
	    /**
	     * @alias module:echarts/core/BoundingRect
	     */
	    function BoundingRect(x, y, width, height) {

	        if (width < 0) {
	            x = x + width;
	            width = -width;
	        }
	        if (height < 0) {
	            y = y + height;
	            height = -height;
	        }

	        /**
	         * @type {number}
	         */
	        this.x = x;
	        /**
	         * @type {number}
	         */
	        this.y = y;
	        /**
	         * @type {number}
	         */
	        this.width = width;
	        /**
	         * @type {number}
	         */
	        this.height = height;
	    }

	    BoundingRect.prototype = {

	        constructor: BoundingRect,

	        /**
	         * @param {module:echarts/core/BoundingRect} other
	         */
	        union: function (other) {
	            var x = mathMin(other.x, this.x);
	            var y = mathMin(other.y, this.y);

	            this.width = mathMax(
	                    other.x + other.width,
	                    this.x + this.width
	                ) - x;
	            this.height = mathMax(
	                    other.y + other.height,
	                    this.y + this.height
	                ) - y;
	            this.x = x;
	            this.y = y;
	        },

	        /**
	         * @param {Array.<number>} m
	         * @methods
	         */
	        applyTransform: (function () {
	            var lt = [];
	            var rb = [];
	            var lb = [];
	            var rt = [];
	            return function (m) {
	                // In case usage like this
	                // el.getBoundingRect().applyTransform(el.transform)
	                // And element has no transform
	                if (!m) {
	                    return;
	                }
	                lt[0] = lb[0] = this.x;
	                lt[1] = rt[1] = this.y;
	                rb[0] = rt[0] = this.x + this.width;
	                rb[1] = lb[1] = this.y + this.height;

	                v2ApplyTransform(lt, lt, m);
	                v2ApplyTransform(rb, rb, m);
	                v2ApplyTransform(lb, lb, m);
	                v2ApplyTransform(rt, rt, m);

	                this.x = mathMin(lt[0], rb[0], lb[0], rt[0]);
	                this.y = mathMin(lt[1], rb[1], lb[1], rt[1]);
	                var maxX = mathMax(lt[0], rb[0], lb[0], rt[0]);
	                var maxY = mathMax(lt[1], rb[1], lb[1], rt[1]);
	                this.width = maxX - this.x;
	                this.height = maxY - this.y;
	            };
	        })(),

	        /**
	         * Calculate matrix of transforming from self to target rect
	         * @param  {module:zrender/core/BoundingRect} b
	         * @return {Array.<number>}
	         */
	        calculateTransform: function (b) {
	            var a = this;
	            var sx = b.width / a.width;
	            var sy = b.height / a.height;

	            var m = matrix.create();

	            // 矩阵右乘
	            matrix.translate(m, m, [-a.x, -a.y]);
	            matrix.scale(m, m, [sx, sy]);
	            matrix.translate(m, m, [b.x, b.y]);

	            return m;
	        },

	        /**
	         * @param {(module:echarts/core/BoundingRect|Object)} b
	         * @return {boolean}
	         */
	        intersect: function (b) {
	            if (!b) {
	                return false;
	            }

	            if (!(b instanceof BoundingRect)) {
	                // Normalize negative width/height.
	                b = BoundingRect.create(b);
	            }

	            var a = this;
	            var ax0 = a.x;
	            var ax1 = a.x + a.width;
	            var ay0 = a.y;
	            var ay1 = a.y + a.height;

	            var bx0 = b.x;
	            var bx1 = b.x + b.width;
	            var by0 = b.y;
	            var by1 = b.y + b.height;

	            return ! (ax1 < bx0 || bx1 < ax0 || ay1 < by0 || by1 < ay0);
	        },

	        contain: function (x, y) {
	            var rect = this;
	            return x >= rect.x
	                && x <= (rect.x + rect.width)
	                && y >= rect.y
	                && y <= (rect.y + rect.height);
	        },

	        /**
	         * @return {module:echarts/core/BoundingRect}
	         */
	        clone: function () {
	            return new BoundingRect(this.x, this.y, this.width, this.height);
	        },

	        /**
	         * Copy from another rect
	         */
	        copy: function (other) {
	            this.x = other.x;
	            this.y = other.y;
	            this.width = other.width;
	            this.height = other.height;
	        },

	        plain: function () {
	            return {
	                x: this.x,
	                y: this.y,
	                width: this.width,
	                height: this.height
	            };
	        }
	    };

	    /**
	     * @param {Object|module:zrender/core/BoundingRect} rect
	     * @param {number} rect.x
	     * @param {number} rect.y
	     * @param {number} rect.width
	     * @param {number} rect.height
	     * @return {module:zrender/core/BoundingRect}
	     */
	    BoundingRect.create = function (rect) {
	        return new BoundingRect(rect.x, rect.y, rect.width, rect.height);
	    };

	    module.exports = BoundingRect;


/***/ },

/***/ 70:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Path element
	 * @module zrender/graphic/Path
	 */



	    var Displayable = __webpack_require__(414);
	    var zrUtil = __webpack_require__(2);
	    var PathProxy = __webpack_require__(337);
	    var pathContain = __webpack_require__(1039);

	    var Pattern = __webpack_require__(908);
	    var getCanvasPattern = Pattern.prototype.getCanvasPattern;

	    var abs = Math.abs;

	    /**
	     * @alias module:zrender/graphic/Path
	     * @extends module:zrender/graphic/Displayable
	     * @constructor
	     * @param {Object} opts
	     */
	    function Path(opts) {
	        Displayable.call(this, opts);

	        /**
	         * @type {module:zrender/core/PathProxy}
	         * @readOnly
	         */
	        this.path = new PathProxy();
	    }

	    Path.prototype = {

	        constructor: Path,

	        type: 'path',

	        __dirtyPath: true,

	        strokeContainThreshold: 5,

	        brush: function (ctx, prevEl) {
	            var style = this.style;
	            var path = this.path;
	            var hasStroke = style.hasStroke();
	            var hasFill = style.hasFill();
	            var fill = style.fill;
	            var stroke = style.stroke;
	            var hasFillGradient = hasFill && !!(fill.colorStops);
	            var hasStrokeGradient = hasStroke && !!(stroke.colorStops);
	            var hasFillPattern = hasFill && !!(fill.image);
	            var hasStrokePattern = hasStroke && !!(stroke.image);

	            style.bind(ctx, this, prevEl);
	            this.setTransform(ctx);

	            if (this.__dirty) {
	                var rect = this.getBoundingRect();
	                // Update gradient because bounding rect may changed
	                if (hasFillGradient) {
	                    this._fillGradient = style.getGradient(ctx, fill, rect);
	                }
	                if (hasStrokeGradient) {
	                    this._strokeGradient = style.getGradient(ctx, stroke, rect);
	                }
	            }
	            // Use the gradient or pattern
	            if (hasFillGradient) {
	                // PENDING If may have affect the state
	                ctx.fillStyle = this._fillGradient;
	            }
	            else if (hasFillPattern) {
	                ctx.fillStyle = getCanvasPattern.call(fill, ctx);
	            }
	            if (hasStrokeGradient) {
	                ctx.strokeStyle = this._strokeGradient;
	            }
	            else if (hasStrokePattern) {
	                ctx.strokeStyle = getCanvasPattern.call(stroke, ctx);
	            }

	            var lineDash = style.lineDash;
	            var lineDashOffset = style.lineDashOffset;

	            var ctxLineDash = !!ctx.setLineDash;

	            // Update path sx, sy
	            var scale = this.getGlobalScale();
	            path.setScale(scale[0], scale[1]);

	            // Proxy context
	            // Rebuild path in following 2 cases
	            // 1. Path is dirty
	            // 2. Path needs javascript implemented lineDash stroking.
	            //    In this case, lineDash information will not be saved in PathProxy
	            if (this.__dirtyPath || (
	                lineDash && !ctxLineDash && hasStroke
	            )) {
	                path = this.path.beginPath(ctx);

	                // Setting line dash before build path
	                if (lineDash && !ctxLineDash) {
	                    path.setLineDash(lineDash);
	                    path.setLineDashOffset(lineDashOffset);
	                }

	                this.buildPath(path, this.shape, false);

	                // Clear path dirty flag
	                this.__dirtyPath = false;
	            }
	            else {
	                // Replay path building
	                ctx.beginPath();
	                this.path.rebuildPath(ctx);
	            }

	            hasFill && path.fill(ctx);

	            if (lineDash && ctxLineDash) {
	                ctx.setLineDash(lineDash);
	                ctx.lineDashOffset = lineDashOffset;
	            }

	            hasStroke && path.stroke(ctx);

	            if (lineDash && ctxLineDash) {
	                // PENDING
	                // Remove lineDash
	                ctx.setLineDash([]);
	            }


	            this.restoreTransform(ctx);

	            // Draw rect text
	            if (style.text != null) {
	                // var rect = this.getBoundingRect();
	                this.drawRectText(ctx, this.getBoundingRect());
	            }
	        },

	        // When bundling path, some shape may decide if use moveTo to begin a new subpath or closePath
	        // Like in circle
	        buildPath: function (ctx, shapeCfg, inBundle) {},

	        getBoundingRect: function () {
	            var rect = this._rect;
	            var style = this.style;
	            var needsUpdateRect = !rect;
	            if (needsUpdateRect) {
	                var path = this.path;
	                if (this.__dirtyPath) {
	                    path.beginPath();
	                    this.buildPath(path, this.shape, false);
	                }
	                rect = path.getBoundingRect();
	            }
	            this._rect = rect;

	            if (style.hasStroke()) {
	                // Needs update rect with stroke lineWidth when
	                // 1. Element changes scale or lineWidth
	                // 2. Shape is changed
	                var rectWithStroke = this._rectWithStroke || (this._rectWithStroke = rect.clone());
	                if (this.__dirty || needsUpdateRect) {
	                    rectWithStroke.copy(rect);
	                    // FIXME Must after updateTransform
	                    var w = style.lineWidth;
	                    // PENDING, Min line width is needed when line is horizontal or vertical
	                    var lineScale = style.strokeNoScale ? this.getLineScale() : 1;

	                    // Only add extra hover lineWidth when there are no fill
	                    if (!style.hasFill()) {
	                        w = Math.max(w, this.strokeContainThreshold || 4);
	                    }
	                    // Consider line width
	                    // Line scale can't be 0;
	                    if (lineScale > 1e-10) {
	                        rectWithStroke.width += w / lineScale;
	                        rectWithStroke.height += w / lineScale;
	                        rectWithStroke.x -= w / lineScale / 2;
	                        rectWithStroke.y -= w / lineScale / 2;
	                    }
	                }

	                // Return rect with stroke
	                return rectWithStroke;
	            }

	            return rect;
	        },

	        contain: function (x, y) {
	            var localPos = this.transformCoordToLocal(x, y);
	            var rect = this.getBoundingRect();
	            var style = this.style;
	            x = localPos[0];
	            y = localPos[1];

	            if (rect.contain(x, y)) {
	                var pathData = this.path.data;
	                if (style.hasStroke()) {
	                    var lineWidth = style.lineWidth;
	                    var lineScale = style.strokeNoScale ? this.getLineScale() : 1;
	                    // Line scale can't be 0;
	                    if (lineScale > 1e-10) {
	                        // Only add extra hover lineWidth when there are no fill
	                        if (!style.hasFill()) {
	                            lineWidth = Math.max(lineWidth, this.strokeContainThreshold);
	                        }
	                        if (pathContain.containStroke(
	                            pathData, lineWidth / lineScale, x, y
	                        )) {
	                            return true;
	                        }
	                    }
	                }
	                if (style.hasFill()) {
	                    return pathContain.contain(pathData, x, y);
	                }
	            }
	            return false;
	        },

	        /**
	         * @param  {boolean} dirtyPath
	         */
	        dirty: function (dirtyPath) {
	            if (dirtyPath == null) {
	                dirtyPath = true;
	            }
	            // Only mark dirty, not mark clean
	            if (dirtyPath) {
	                this.__dirtyPath = dirtyPath;
	                this._rect = null;
	            }

	            this.__dirty = true;

	            this.__zr && this.__zr.refresh();

	            // Used as a clipping path
	            if (this.__clipTarget) {
	                this.__clipTarget.dirty();
	            }
	        },

	        /**
	         * Alias for animate('shape')
	         * @param {boolean} loop
	         */
	        animateShape: function (loop) {
	            return this.animate('shape', loop);
	        },

	        // Overwrite attrKV
	        attrKV: function (key, value) {
	            // FIXME
	            if (key === 'shape') {
	                this.setShape(value);
	                this.__dirtyPath = true;
	                this._rect = null;
	            }
	            else {
	                Displayable.prototype.attrKV.call(this, key, value);
	            }
	        },

	        /**
	         * @param {Object|string} key
	         * @param {*} value
	         */
	        setShape: function (key, value) {
	            var shape = this.shape;
	            // Path from string may not have shape
	            if (shape) {
	                if (zrUtil.isObject(key)) {
	                    for (var name in key) {
	                        if (key.hasOwnProperty(name)) {
	                            shape[name] = key[name];
	                        }
	                    }
	                }
	                else {
	                    shape[key] = value;
	                }
	                this.dirty(true);
	            }
	            return this;
	        },

	        getLineScale: function () {
	            var m = this.transform;
	            // Get the line scale.
	            // Determinant of `m` means how much the area is enlarged by the
	            // transformation. So its square root can be used as a scale factor
	            // for width.
	            return m && abs(m[0] - 1) > 1e-10 && abs(m[3] - 1) > 1e-10
	                ? Math.sqrt(abs(m[0] * m[3] - m[2] * m[1]))
	                : 1;
	        }
	    };

	    /**
	     * 扩展一个 Path element, 比如星形，圆等。
	     * Extend a path element
	     * @param {Object} props
	     * @param {string} props.type Path type
	     * @param {Function} props.init Initialize
	     * @param {Function} props.buildPath Overwrite buildPath method
	     * @param {Object} [props.style] Extended default style config
	     * @param {Object} [props.shape] Extended default shape config
	     */
	    Path.extend = function (defaults) {
	        var Sub = function (opts) {
	            Path.call(this, opts);

	            if (defaults.style) {
	                // Extend default style
	                this.style.extendFrom(defaults.style, false);
	            }

	            // Extend default shape
	            var defaultShape = defaults.shape;
	            if (defaultShape) {
	                this.shape = this.shape || {};
	                var thisShape = this.shape;
	                for (var name in defaultShape) {
	                    if (
	                        ! thisShape.hasOwnProperty(name)
	                        && defaultShape.hasOwnProperty(name)
	                    ) {
	                        thisShape[name] = defaultShape[name];
	                    }
	                }
	            }

	            defaults.init && defaults.init.call(this, opts);
	        };

	        zrUtil.inherits(Sub, Path);

	        // FIXME 不能 extend position, rotation 等引用对象
	        for (var name in defaults) {
	            // Extending prototype values and methods
	            if (name !== 'style' && name !== 'shape') {
	                Sub.prototype[name] = defaults[name];
	            }
	        }

	        return Sub;
	    };

	    zrUtil.inherits(Path, Displayable);

	    module.exports = Path;


/***/ },

/***/ 77:
/***/ function(module, exports) {

	/**
	 * echarts设备环境识别
	 *
	 * @desc echarts基于Canvas，纯Javascript图表库，提供直观，生动，可交互，可个性化定制的数据统计图表。
	 * @author firede[firede@firede.us]
	 * @desc thanks zepto.
	 */

	    var env = {};
	    if (typeof navigator === 'undefined') {
	        // In node
	        env = {
	            browser: {},
	            os: {},
	            node: true,
	            // Assume canvas is supported
	            canvasSupported: true
	        };
	    }
	    else {
	        env = detect(navigator.userAgent);
	    }

	    module.exports = env;

	    // Zepto.js
	    // (c) 2010-2013 Thomas Fuchs
	    // Zepto.js may be freely distributed under the MIT license.

	    function detect(ua) {
	        var os = {};
	        var browser = {};
	        // var webkit = ua.match(/Web[kK]it[\/]{0,1}([\d.]+)/);
	        // var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
	        // var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
	        // var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
	        // var iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);
	        // var webos = ua.match(/(webOS|hpwOS)[\s\/]([\d.]+)/);
	        // var touchpad = webos && ua.match(/TouchPad/);
	        // var kindle = ua.match(/Kindle\/([\d.]+)/);
	        // var silk = ua.match(/Silk\/([\d._]+)/);
	        // var blackberry = ua.match(/(BlackBerry).*Version\/([\d.]+)/);
	        // var bb10 = ua.match(/(BB10).*Version\/([\d.]+)/);
	        // var rimtabletos = ua.match(/(RIM\sTablet\sOS)\s([\d.]+)/);
	        // var playbook = ua.match(/PlayBook/);
	        // var chrome = ua.match(/Chrome\/([\d.]+)/) || ua.match(/CriOS\/([\d.]+)/);
	        var firefox = ua.match(/Firefox\/([\d.]+)/);
	        // var safari = webkit && ua.match(/Mobile\//) && !chrome;
	        // var webview = ua.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/) && !chrome;
	        var ie = ua.match(/MSIE\s([\d.]+)/)
	            // IE 11 Trident/7.0; rv:11.0
	            || ua.match(/Trident\/.+?rv:(([\d.]+))/);
	        var edge = ua.match(/Edge\/([\d.]+)/); // IE 12 and 12+

	        var weChat = (/micromessenger/i).test(ua);

	        // Todo: clean this up with a better OS/browser seperation:
	        // - discern (more) between multiple browsers on android
	        // - decide if kindle fire in silk mode is android or not
	        // - Firefox on Android doesn't specify the Android version
	        // - possibly devide in os, device and browser hashes

	        // if (browser.webkit = !!webkit) browser.version = webkit[1];

	        // if (android) os.android = true, os.version = android[2];
	        // if (iphone && !ipod) os.ios = os.iphone = true, os.version = iphone[2].replace(/_/g, '.');
	        // if (ipad) os.ios = os.ipad = true, os.version = ipad[2].replace(/_/g, '.');
	        // if (ipod) os.ios = os.ipod = true, os.version = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
	        // if (webos) os.webos = true, os.version = webos[2];
	        // if (touchpad) os.touchpad = true;
	        // if (blackberry) os.blackberry = true, os.version = blackberry[2];
	        // if (bb10) os.bb10 = true, os.version = bb10[2];
	        // if (rimtabletos) os.rimtabletos = true, os.version = rimtabletos[2];
	        // if (playbook) browser.playbook = true;
	        // if (kindle) os.kindle = true, os.version = kindle[1];
	        // if (silk) browser.silk = true, browser.version = silk[1];
	        // if (!silk && os.android && ua.match(/Kindle Fire/)) browser.silk = true;
	        // if (chrome) browser.chrome = true, browser.version = chrome[1];
	        if (firefox) {
	            browser.firefox = true;
	            browser.version = firefox[1];
	        }
	        // if (safari && (ua.match(/Safari/) || !!os.ios)) browser.safari = true;
	        // if (webview) browser.webview = true;

	        if (ie) {
	            browser.ie = true;
	            browser.version = ie[1];
	        }

	        if (edge) {
	            browser.edge = true;
	            browser.version = edge[1];
	        }

	        // It is difficult to detect WeChat in Win Phone precisely, because ua can
	        // not be set on win phone. So we do not consider Win Phone.
	        if (weChat) {
	            browser.weChat = true;
	        }

	        // os.tablet = !!(ipad || playbook || (android && !ua.match(/Mobile/)) ||
	        //     (firefox && ua.match(/Tablet/)) || (ie && !ua.match(/Phone/) && ua.match(/Touch/)));
	        // os.phone  = !!(!os.tablet && !os.ipod && (android || iphone || webos ||
	        //     (chrome && ua.match(/Android/)) || (chrome && ua.match(/CriOS\/([\d.]+)/)) ||
	        //     (firefox && ua.match(/Mobile/)) || (ie && ua.match(/Touch/))));

	        return {
	            browser: browser,
	            os: os,
	            node: false,
	            // 原生canvas支持，改极端点了
	            // canvasSupported : !(browser.ie && parseFloat(browser.version) < 9)
	            canvasSupported : document.createElement('canvas').getContext ? true : false,
	            // @see <http://stackoverflow.com/questions/4817029/whats-the-best-way-to-detect-a-touch-screen-device-using-javascript>
	            // works on most browsers
	            // IE10/11 does not support touch event, and MS Edge supports them but not by
	            // default, so we dont check navigator.maxTouchPoints for them here.
	            touchEventsSupported: 'ontouchstart' in window && !browser.ie && !browser.edge,
	            // <http://caniuse.com/#search=pointer%20event>.
	            pointerEventsSupported: 'onpointerdown' in window
	                // Firefox supports pointer but not by default, only MS browsers are reliable on pointer
	                // events currently. So we dont use that on other browsers unless tested sufficiently.
	                // Although IE 10 supports pointer event, it use old style and is different from the
	                // standard. So we exclude that. (IE 10 is hardly used on touch device)
	                && (browser.edge || (browser.ie && browser.version >= 11))
	        };
	    }


/***/ },

/***/ 118:
/***/ function(module, exports, __webpack_require__) {

	/* components */
	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _Router2 = __webpack_require__(1005);

	var _Router3 = _interopRequireDefault(_Router2);

	exports.Router = _Router3['default'];

	var _Link2 = __webpack_require__(891);

	var _Link3 = _interopRequireDefault(_Link2);

	exports.Link = _Link3['default'];

	var _IndexLink2 = __webpack_require__(999);

	var _IndexLink3 = _interopRequireDefault(_IndexLink2);

	exports.IndexLink = _IndexLink3['default'];

	/* components (configuration) */

	var _IndexRedirect2 = __webpack_require__(1000);

	var _IndexRedirect3 = _interopRequireDefault(_IndexRedirect2);

	exports.IndexRedirect = _IndexRedirect3['default'];

	var _IndexRoute2 = __webpack_require__(1001);

	var _IndexRoute3 = _interopRequireDefault(_IndexRoute2);

	exports.IndexRoute = _IndexRoute3['default'];

	var _Redirect2 = __webpack_require__(892);

	var _Redirect3 = _interopRequireDefault(_Redirect2);

	exports.Redirect = _Redirect3['default'];

	var _Route2 = __webpack_require__(1003);

	var _Route3 = _interopRequireDefault(_Route2);

	exports.Route = _Route3['default'];

	/* mixins */

	var _History2 = __webpack_require__(998);

	var _History3 = _interopRequireDefault(_History2);

	exports.History = _History3['default'];

	var _Lifecycle2 = __webpack_require__(1002);

	var _Lifecycle3 = _interopRequireDefault(_Lifecycle2);

	exports.Lifecycle = _Lifecycle3['default'];

	var _RouteContext2 = __webpack_require__(1004);

	var _RouteContext3 = _interopRequireDefault(_RouteContext2);

	exports.RouteContext = _RouteContext3['default'];

	/* utils */

	var _useRoutes2 = __webpack_require__(516);

	var _useRoutes3 = _interopRequireDefault(_useRoutes2);

	exports.useRoutes = _useRoutes3['default'];

	var _RouteUtils = __webpack_require__(163);

	exports.createRoutes = _RouteUtils.createRoutes;

	var _RoutingContext2 = __webpack_require__(893);

	var _RoutingContext3 = _interopRequireDefault(_RoutingContext2);

	exports.RoutingContext = _RoutingContext3['default'];

	var _PropTypes2 = __webpack_require__(193);

	var _PropTypes3 = _interopRequireDefault(_PropTypes2);

	exports.PropTypes = _PropTypes3['default'];

	var _match2 = __webpack_require__(1011);

	var _match3 = _interopRequireDefault(_match2);

	exports.match = _match3['default'];

	var _Router4 = _interopRequireDefault(_Router2);

	exports['default'] = _Router4['default'];

/***/ },

/***/ 120:
/***/ function(module, exports) {

	
	    var ArrayCtor = typeof Float32Array === 'undefined'
	        ? Array
	        : Float32Array;
	    /**
	     * 3x2矩阵操作类
	     * @exports zrender/tool/matrix
	     */
	    var matrix = {
	        /**
	         * 创建一个单位矩阵
	         * @return {Float32Array|Array.<number>}
	         */
	        create : function() {
	            var out = new ArrayCtor(6);
	            matrix.identity(out);

	            return out;
	        },
	        /**
	         * 设置矩阵为单位矩阵
	         * @param {Float32Array|Array.<number>} out
	         */
	        identity : function(out) {
	            out[0] = 1;
	            out[1] = 0;
	            out[2] = 0;
	            out[3] = 1;
	            out[4] = 0;
	            out[5] = 0;
	            return out;
	        },
	        /**
	         * 复制矩阵
	         * @param {Float32Array|Array.<number>} out
	         * @param {Float32Array|Array.<number>} m
	         */
	        copy: function(out, m) {
	            out[0] = m[0];
	            out[1] = m[1];
	            out[2] = m[2];
	            out[3] = m[3];
	            out[4] = m[4];
	            out[5] = m[5];
	            return out;
	        },
	        /**
	         * 矩阵相乘
	         * @param {Float32Array|Array.<number>} out
	         * @param {Float32Array|Array.<number>} m1
	         * @param {Float32Array|Array.<number>} m2
	         */
	        mul : function (out, m1, m2) {
	            // Consider matrix.mul(m, m2, m);
	            // where out is the same as m2.
	            // So use temp variable to escape error.
	            var out0 = m1[0] * m2[0] + m1[2] * m2[1];
	            var out1 = m1[1] * m2[0] + m1[3] * m2[1];
	            var out2 = m1[0] * m2[2] + m1[2] * m2[3];
	            var out3 = m1[1] * m2[2] + m1[3] * m2[3];
	            var out4 = m1[0] * m2[4] + m1[2] * m2[5] + m1[4];
	            var out5 = m1[1] * m2[4] + m1[3] * m2[5] + m1[5];
	            out[0] = out0;
	            out[1] = out1;
	            out[2] = out2;
	            out[3] = out3;
	            out[4] = out4;
	            out[5] = out5;
	            return out;
	        },
	        /**
	         * 平移变换
	         * @param {Float32Array|Array.<number>} out
	         * @param {Float32Array|Array.<number>} a
	         * @param {Float32Array|Array.<number>} v
	         */
	        translate : function(out, a, v) {
	            out[0] = a[0];
	            out[1] = a[1];
	            out[2] = a[2];
	            out[3] = a[3];
	            out[4] = a[4] + v[0];
	            out[5] = a[5] + v[1];
	            return out;
	        },
	        /**
	         * 旋转变换
	         * @param {Float32Array|Array.<number>} out
	         * @param {Float32Array|Array.<number>} a
	         * @param {number} rad
	         */
	        rotate : function(out, a, rad) {
	            var aa = a[0];
	            var ac = a[2];
	            var atx = a[4];
	            var ab = a[1];
	            var ad = a[3];
	            var aty = a[5];
	            var st = Math.sin(rad);
	            var ct = Math.cos(rad);

	            out[0] = aa * ct + ab * st;
	            out[1] = -aa * st + ab * ct;
	            out[2] = ac * ct + ad * st;
	            out[3] = -ac * st + ct * ad;
	            out[4] = ct * atx + st * aty;
	            out[5] = ct * aty - st * atx;
	            return out;
	        },
	        /**
	         * 缩放变换
	         * @param {Float32Array|Array.<number>} out
	         * @param {Float32Array|Array.<number>} a
	         * @param {Float32Array|Array.<number>} v
	         */
	        scale : function(out, a, v) {
	            var vx = v[0];
	            var vy = v[1];
	            out[0] = a[0] * vx;
	            out[1] = a[1] * vy;
	            out[2] = a[2] * vx;
	            out[3] = a[3] * vy;
	            out[4] = a[4] * vx;
	            out[5] = a[5] * vy;
	            return out;
	        },
	        /**
	         * 求逆矩阵
	         * @param {Float32Array|Array.<number>} out
	         * @param {Float32Array|Array.<number>} a
	         */
	        invert : function(out, a) {

	            var aa = a[0];
	            var ac = a[2];
	            var atx = a[4];
	            var ab = a[1];
	            var ad = a[3];
	            var aty = a[5];

	            var det = aa * ad - ab * ac;
	            if (!det) {
	                return null;
	            }
	            det = 1.0 / det;

	            out[0] = ad * det;
	            out[1] = -ab * det;
	            out[2] = -ac * det;
	            out[3] = aa * det;
	            out[4] = (ac * aty - ad * atx) * det;
	            out[5] = (ab * atx - aa * aty) * det;
	            return out;
	        }
	    };

	    module.exports = matrix;



/***/ },

/***/ 145:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Group是一个容器，可以插入子节点，Group的变换也会被应用到子节点上
	 * @module zrender/graphic/Group
	 * @example
	 *     var Group = require('zrender/lib/container/Group');
	 *     var Circle = require('zrender/lib/graphic/shape/Circle');
	 *     var g = new Group();
	 *     g.position[0] = 100;
	 *     g.position[1] = 100;
	 *     g.add(new Circle({
	 *         style: {
	 *             x: 100,
	 *             y: 100,
	 *             r: 20,
	 *         }
	 *     }));
	 *     zr.add(g);
	 */


	    var zrUtil = __webpack_require__(2);
	    var Element = __webpack_require__(898);
	    var BoundingRect = __webpack_require__(62);

	    /**
	     * @alias module:zrender/graphic/Group
	     * @constructor
	     * @extends module:zrender/mixin/Transformable
	     * @extends module:zrender/mixin/Eventful
	     */
	    var Group = function (opts) {

	        opts = opts || {};

	        Element.call(this, opts);

	        for (var key in opts) {
	            if (opts.hasOwnProperty(key)) {
	                this[key] = opts[key];
	            }
	        }

	        this._children = [];

	        this.__storage = null;

	        this.__dirty = true;
	    };

	    Group.prototype = {

	        constructor: Group,

	        isGroup: true,

	        /**
	         * @type {string}
	         */
	        type: 'group',

	        /**
	         * 所有子孙元素是否响应鼠标事件
	         * @name module:/zrender/container/Group#silent
	         * @type {boolean}
	         * @default false
	         */
	        silent: false,

	        /**
	         * @return {Array.<module:zrender/Element>}
	         */
	        children: function () {
	            return this._children.slice();
	        },

	        /**
	         * 获取指定 index 的儿子节点
	         * @param  {number} idx
	         * @return {module:zrender/Element}
	         */
	        childAt: function (idx) {
	            return this._children[idx];
	        },

	        /**
	         * 获取指定名字的儿子节点
	         * @param  {string} name
	         * @return {module:zrender/Element}
	         */
	        childOfName: function (name) {
	            var children = this._children;
	            for (var i = 0; i < children.length; i++) {
	                if (children[i].name === name) {
	                    return children[i];
	                }
	             }
	        },

	        /**
	         * @return {number}
	         */
	        childCount: function () {
	            return this._children.length;
	        },

	        /**
	         * 添加子节点到最后
	         * @param {module:zrender/Element} child
	         */
	        add: function (child) {
	            if (child && child !== this && child.parent !== this) {

	                this._children.push(child);

	                this._doAdd(child);
	            }

	            return this;
	        },
	        
	        addAt: function(child,idx){
	            var children = this._children;
	            if (idx >= 0) {
	                children.splice(idx, 0, child);
	                this._doAdd(child);
	            }
	            return this;
	        },

	        /**
	         * 添加子节点在 nextSibling 之前
	         * @param {module:zrender/Element} child
	         * @param {module:zrender/Element} nextSibling
	         */
	        addBefore: function (child, nextSibling) {
	            if (child && child !== this && child.parent !== this
	                && nextSibling && nextSibling.parent === this) {

	                var children = this._children;
	                var idx = children.indexOf(nextSibling);

	                if (idx >= 0) {
	                    children.splice(idx, 0, child);
	                    this._doAdd(child);
	                }
	            }

	            return this;
	        },

	        _doAdd: function (child) {
	            if (child.parent) {
	                child.parent.remove(child);
	            }

	            child.parent = this;

	            var storage = this.__storage;
	            var zr = this.__zr;
	            if (storage && storage !== child.__storage) {

	                storage.addToMap(child);

	                if (child instanceof Group) {
	                    child.addChildrenToStorage(storage);
	                }
	            }

	            zr && zr.refresh();
	        },

	        /**
	         * 移除子节点
	         * @param {module:zrender/Element} child
	         */
	        remove: function (child) {
	            var zr = this.__zr;
	            var storage = this.__storage;
	            var children = this._children;

	            var idx = zrUtil.indexOf(children, child);
	            if (idx < 0) {
	                return this;
	            }
	            children.splice(idx, 1);

	            child.parent = null;

	            if (storage) {

	                storage.delFromMap(child.id);

	                if (child instanceof Group) {
	                    child.delChildrenFromStorage(storage);
	                }
	            }

	            zr && zr.refresh();

	            return this;
	        },

	        /**
	         * 移除所有子节点
	         */
	        removeAll: function () {
	            var children = this._children;
	            var storage = this.__storage;
	            var child;
	            var i;
	            for (i = 0; i < children.length; i++) {
	                child = children[i];
	                if (storage) {
	                    storage.delFromMap(child.id);
	                    if (child instanceof Group) {
	                        child.delChildrenFromStorage(storage);
	                    }
	                }
	                child.parent = null;
	            }
	            children.length = 0;

	            return this;
	        },

	        /**
	         * 遍历所有子节点
	         * @param  {Function} cb
	         * @param  {}   context
	         */
	        eachChild: function (cb, context) {
	            var children = this._children;
	            for (var i = 0; i < children.length; i++) {
	                var child = children[i];
	                cb.call(context, child, i);
	            }
	            return this;
	        },

	        /**
	         * 深度优先遍历所有子孙节点
	         * @param  {Function} cb
	         * @param  {}   context
	         */
	        traverse: function (cb, context) {
	            for (var i = 0; i < this._children.length; i++) {
	                var child = this._children[i];
	                cb.call(context, child);

	                if (child.type === 'group') {
	                    child.traverse(cb, context);
	                }
	            }
	            return this;
	        },

	        addChildrenToStorage: function (storage) {
	            for (var i = 0; i < this._children.length; i++) {
	                var child = this._children[i];
	                storage.addToMap(child);
	                if (child instanceof Group) {
	                    child.addChildrenToStorage(storage);
	                }
	            }
	        },

	        delChildrenFromStorage: function (storage) {
	            for (var i = 0; i < this._children.length; i++) {
	                var child = this._children[i];
	                storage.delFromMap(child.id);
	                if (child instanceof Group) {
	                    child.delChildrenFromStorage(storage);
	                }
	            }
	        },

	        dirty: function () {
	            this.__dirty = true;
	            this.__zr && this.__zr.refresh();
	            return this;
	        },

	        /**
	         * @return {module:zrender/core/BoundingRect}
	         */
	        getBoundingRect: function (includeChildren) {
	            // TODO Caching
	            var rect = null;
	            var tmpRect = new BoundingRect(0, 0, 0, 0);
	            var children = includeChildren || this._children;
	            var tmpMat = [];

	            for (var i = 0; i < children.length; i++) {
	                var child = children[i];
	                if (child.ignore || child.invisible) {
	                    continue;
	                }

	                var childRect = child.getBoundingRect();
	                var transform = child.getLocalTransform(tmpMat);
	                // TODO
	                // The boundingRect cacluated by transforming original
	                // rect may be bigger than the actual bundingRect when rotation
	                // is used. (Consider a circle rotated aginst its center, where
	                // the actual boundingRect should be the same as that not be
	                // rotated.) But we can not find better approach to calculate
	                // actual boundingRect yet, considering performance.
	                if (transform) {
	                    tmpRect.copy(childRect);
	                    tmpRect.applyTransform(transform);
	                    rect = rect || tmpRect.clone();
	                    rect.union(tmpRect);
	                }
	                else {
	                    rect = rect || childRect.clone();
	                    rect.union(childRect);
	                }
	            }
	            return rect || tmpRect;
	        }
	    };

	    zrUtil.inherits(Group, Element);

	    module.exports = Group;


/***/ },

/***/ 146:
/***/ function(module, exports) {

	/**
	 * @module zrender/tool/color
	 */


	    var kCSSColorTable = {
	        'transparent': [0,0,0,0], 'aliceblue': [240,248,255,1],
	        'antiquewhite': [250,235,215,1], 'aqua': [0,255,255,1],
	        'aquamarine': [127,255,212,1], 'azure': [240,255,255,1],
	        'beige': [245,245,220,1], 'bisque': [255,228,196,1],
	        'black': [0,0,0,1], 'blanchedalmond': [255,235,205,1],
	        'blue': [0,0,255,1], 'blueviolet': [138,43,226,1],
	        'brown': [165,42,42,1], 'burlywood': [222,184,135,1],
	        'cadetblue': [95,158,160,1], 'chartreuse': [127,255,0,1],
	        'chocolate': [210,105,30,1], 'coral': [255,127,80,1],
	        'cornflowerblue': [100,149,237,1], 'cornsilk': [255,248,220,1],
	        'crimson': [220,20,60,1], 'cyan': [0,255,255,1],
	        'darkblue': [0,0,139,1], 'darkcyan': [0,139,139,1],
	        'darkgoldenrod': [184,134,11,1], 'darkgray': [169,169,169,1],
	        'darkgreen': [0,100,0,1], 'darkgrey': [169,169,169,1],
	        'darkkhaki': [189,183,107,1], 'darkmagenta': [139,0,139,1],
	        'darkolivegreen': [85,107,47,1], 'darkorange': [255,140,0,1],
	        'darkorchid': [153,50,204,1], 'darkred': [139,0,0,1],
	        'darksalmon': [233,150,122,1], 'darkseagreen': [143,188,143,1],
	        'darkslateblue': [72,61,139,1], 'darkslategray': [47,79,79,1],
	        'darkslategrey': [47,79,79,1], 'darkturquoise': [0,206,209,1],
	        'darkviolet': [148,0,211,1], 'deeppink': [255,20,147,1],
	        'deepskyblue': [0,191,255,1], 'dimgray': [105,105,105,1],
	        'dimgrey': [105,105,105,1], 'dodgerblue': [30,144,255,1],
	        'firebrick': [178,34,34,1], 'floralwhite': [255,250,240,1],
	        'forestgreen': [34,139,34,1], 'fuchsia': [255,0,255,1],
	        'gainsboro': [220,220,220,1], 'ghostwhite': [248,248,255,1],
	        'gold': [255,215,0,1], 'goldenrod': [218,165,32,1],
	        'gray': [128,128,128,1], 'green': [0,128,0,1],
	        'greenyellow': [173,255,47,1], 'grey': [128,128,128,1],
	        'honeydew': [240,255,240,1], 'hotpink': [255,105,180,1],
	        'indianred': [205,92,92,1], 'indigo': [75,0,130,1],
	        'ivory': [255,255,240,1], 'khaki': [240,230,140,1],
	        'lavender': [230,230,250,1], 'lavenderblush': [255,240,245,1],
	        'lawngreen': [124,252,0,1], 'lemonchiffon': [255,250,205,1],
	        'lightblue': [173,216,230,1], 'lightcoral': [240,128,128,1],
	        'lightcyan': [224,255,255,1], 'lightgoldenrodyellow': [250,250,210,1],
	        'lightgray': [211,211,211,1], 'lightgreen': [144,238,144,1],
	        'lightgrey': [211,211,211,1], 'lightpink': [255,182,193,1],
	        'lightsalmon': [255,160,122,1], 'lightseagreen': [32,178,170,1],
	        'lightskyblue': [135,206,250,1], 'lightslategray': [119,136,153,1],
	        'lightslategrey': [119,136,153,1], 'lightsteelblue': [176,196,222,1],
	        'lightyellow': [255,255,224,1], 'lime': [0,255,0,1],
	        'limegreen': [50,205,50,1], 'linen': [250,240,230,1],
	        'magenta': [255,0,255,1], 'maroon': [128,0,0,1],
	        'mediumaquamarine': [102,205,170,1], 'mediumblue': [0,0,205,1],
	        'mediumorchid': [186,85,211,1], 'mediumpurple': [147,112,219,1],
	        'mediumseagreen': [60,179,113,1], 'mediumslateblue': [123,104,238,1],
	        'mediumspringgreen': [0,250,154,1], 'mediumturquoise': [72,209,204,1],
	        'mediumvioletred': [199,21,133,1], 'midnightblue': [25,25,112,1],
	        'mintcream': [245,255,250,1], 'mistyrose': [255,228,225,1],
	        'moccasin': [255,228,181,1], 'navajowhite': [255,222,173,1],
	        'navy': [0,0,128,1], 'oldlace': [253,245,230,1],
	        'olive': [128,128,0,1], 'olivedrab': [107,142,35,1],
	        'orange': [255,165,0,1], 'orangered': [255,69,0,1],
	        'orchid': [218,112,214,1], 'palegoldenrod': [238,232,170,1],
	        'palegreen': [152,251,152,1], 'paleturquoise': [175,238,238,1],
	        'palevioletred': [219,112,147,1], 'papayawhip': [255,239,213,1],
	        'peachpuff': [255,218,185,1], 'peru': [205,133,63,1],
	        'pink': [255,192,203,1], 'plum': [221,160,221,1],
	        'powderblue': [176,224,230,1], 'purple': [128,0,128,1],
	        'red': [255,0,0,1], 'rosybrown': [188,143,143,1],
	        'royalblue': [65,105,225,1], 'saddlebrown': [139,69,19,1],
	        'salmon': [250,128,114,1], 'sandybrown': [244,164,96,1],
	        'seagreen': [46,139,87,1], 'seashell': [255,245,238,1],
	        'sienna': [160,82,45,1], 'silver': [192,192,192,1],
	        'skyblue': [135,206,235,1], 'slateblue': [106,90,205,1],
	        'slategray': [112,128,144,1], 'slategrey': [112,128,144,1],
	        'snow': [255,250,250,1], 'springgreen': [0,255,127,1],
	        'steelblue': [70,130,180,1], 'tan': [210,180,140,1],
	        'teal': [0,128,128,1], 'thistle': [216,191,216,1],
	        'tomato': [255,99,71,1], 'turquoise': [64,224,208,1],
	        'violet': [238,130,238,1], 'wheat': [245,222,179,1],
	        'white': [255,255,255,1], 'whitesmoke': [245,245,245,1],
	        'yellow': [255,255,0,1], 'yellowgreen': [154,205,50,1]
	    };

	    function clampCssByte(i) {  // Clamp to integer 0 .. 255.
	        i = Math.round(i);  // Seems to be what Chrome does (vs truncation).
	        return i < 0 ? 0 : i > 255 ? 255 : i;
	    }

	    function clampCssAngle(i) {  // Clamp to integer 0 .. 360.
	        i = Math.round(i);  // Seems to be what Chrome does (vs truncation).
	        return i < 0 ? 0 : i > 360 ? 360 : i;
	    }

	    function clampCssFloat(f) {  // Clamp to float 0.0 .. 1.0.
	        return f < 0 ? 0 : f > 1 ? 1 : f;
	    }

	    function parseCssInt(str) {  // int or percentage.
	        if (str.length && str.charAt(str.length - 1) === '%') {
	            return clampCssByte(parseFloat(str) / 100 * 255);
	        }
	        return clampCssByte(parseInt(str, 10));
	    }

	    function parseCssFloat(str) {  // float or percentage.
	        if (str.length && str.charAt(str.length - 1) === '%') {
	            return clampCssFloat(parseFloat(str) / 100);
	        }
	        return clampCssFloat(parseFloat(str));
	    }

	    function cssHueToRgb(m1, m2, h) {
	        if (h < 0) {
	            h += 1;
	        }
	        else if (h > 1) {
	            h -= 1;
	        }

	        if (h * 6 < 1) {
	            return m1 + (m2 - m1) * h * 6;
	        }
	        if (h * 2 < 1) {
	            return m2;
	        }
	        if (h * 3 < 2) {
	            return m1 + (m2 - m1) * (2/3 - h) * 6;
	        }
	        return m1;
	    }

	    function lerp(a, b, p) {
	        return a + (b - a) * p;
	    }

	    /**
	     * @param {string} colorStr
	     * @return {Array.<number>}
	     * @memberOf module:zrender/util/color
	     */
	    function parse(colorStr) {
	        if (!colorStr) {
	            return;
	        }
	        // colorStr may be not string
	        colorStr = colorStr + '';
	        // Remove all whitespace, not compliant, but should just be more accepting.
	        var str = colorStr.replace(/ /g, '').toLowerCase();

	        // Color keywords (and transparent) lookup.
	        if (str in kCSSColorTable) {
	            return kCSSColorTable[str].slice();  // dup.
	        }

	        // #abc and #abc123 syntax.
	        if (str.charAt(0) === '#') {
	            if (str.length === 4) {
	                var iv = parseInt(str.substr(1), 16);  // TODO(deanm): Stricter parsing.
	                if (!(iv >= 0 && iv <= 0xfff)) {
	                    return;  // Covers NaN.
	                }
	                return [
	                    ((iv & 0xf00) >> 4) | ((iv & 0xf00) >> 8),
	                    (iv & 0xf0) | ((iv & 0xf0) >> 4),
	                    (iv & 0xf) | ((iv & 0xf) << 4),
	                    1
	                ];
	            }
	            else if (str.length === 7) {
	                var iv = parseInt(str.substr(1), 16);  // TODO(deanm): Stricter parsing.
	                if (!(iv >= 0 && iv <= 0xffffff)) {
	                    return;  // Covers NaN.
	                }
	                return [
	                    (iv & 0xff0000) >> 16,
	                    (iv & 0xff00) >> 8,
	                    iv & 0xff,
	                    1
	                ];
	            }

	            return;
	        }
	        var op = str.indexOf('('), ep = str.indexOf(')');
	        if (op !== -1 && ep + 1 === str.length) {
	            var fname = str.substr(0, op);
	            var params = str.substr(op + 1, ep - (op + 1)).split(',');
	            var alpha = 1;  // To allow case fallthrough.
	            switch (fname) {
	                case 'rgba':
	                    if (params.length !== 4) {
	                        return;
	                    }
	                    alpha = parseCssFloat(params.pop()); // jshint ignore:line
	                // Fall through.
	                case 'rgb':
	                    if (params.length !== 3) {
	                        return;
	                    }
	                    return [
	                        parseCssInt(params[0]),
	                        parseCssInt(params[1]),
	                        parseCssInt(params[2]),
	                        alpha
	                    ];
	                case 'hsla':
	                    if (params.length !== 4) {
	                        return;
	                    }
	                    params[3] = parseCssFloat(params[3]);
	                    return hsla2rgba(params);
	                case 'hsl':
	                    if (params.length !== 3) {
	                        return;
	                    }
	                    return hsla2rgba(params);
	                default:
	                    return;
	            }
	        }

	        return;
	    }

	    /**
	     * @param {Array.<number>} hsla
	     * @return {Array.<number>} rgba
	     */
	    function hsla2rgba(hsla) {
	        var h = (((parseFloat(hsla[0]) % 360) + 360) % 360) / 360;  // 0 .. 1
	        // NOTE(deanm): According to the CSS spec s/l should only be
	        // percentages, but we don't bother and let float or percentage.
	        var s = parseCssFloat(hsla[1]);
	        var l = parseCssFloat(hsla[2]);
	        var m2 = l <= 0.5 ? l * (s + 1) : l + s - l * s;
	        var m1 = l * 2 - m2;

	        var rgba = [
	            clampCssByte(cssHueToRgb(m1, m2, h + 1 / 3) * 255),
	            clampCssByte(cssHueToRgb(m1, m2, h) * 255),
	            clampCssByte(cssHueToRgb(m1, m2, h - 1 / 3) * 255)
	        ];

	        if (hsla.length === 4) {
	            rgba[3] = hsla[3];
	        }

	        return rgba;
	    }

	    /**
	     * @param {Array.<number>} rgba
	     * @return {Array.<number>} hsla
	     */
	    function rgba2hsla(rgba) {
	        if (!rgba) {
	            return;
	        }

	        // RGB from 0 to 255
	        var R = rgba[0] / 255;
	        var G = rgba[1] / 255;
	        var B = rgba[2] / 255;

	        var vMin = Math.min(R, G, B); // Min. value of RGB
	        var vMax = Math.max(R, G, B); // Max. value of RGB
	        var delta = vMax - vMin; // Delta RGB value

	        var L = (vMax + vMin) / 2;
	        var H;
	        var S;
	        // HSL results from 0 to 1
	        if (delta === 0) {
	            H = 0;
	            S = 0;
	        }
	        else {
	            if (L < 0.5) {
	                S = delta / (vMax + vMin);
	            }
	            else {
	                S = delta / (2 - vMax - vMin);
	            }

	            var deltaR = (((vMax - R) / 6) + (delta / 2)) / delta;
	            var deltaG = (((vMax - G) / 6) + (delta / 2)) / delta;
	            var deltaB = (((vMax - B) / 6) + (delta / 2)) / delta;

	            if (R === vMax) {
	                H = deltaB - deltaG;
	            }
	            else if (G === vMax) {
	                H = (1 / 3) + deltaR - deltaB;
	            }
	            else if (B === vMax) {
	                H = (2 / 3) + deltaG - deltaR;
	            }

	            if (H < 0) {
	                H += 1;
	            }

	            if (H > 1) {
	                H -= 1;
	            }
	        }

	        var hsla = [H * 360, S, L];

	        if (rgba[3] != null) {
	            hsla.push(rgba[3]);
	        }

	        return hsla;
	    }

	    /**
	     * @param {string} color
	     * @param {number} level
	     * @return {string}
	     * @memberOf module:zrender/util/color
	     */
	    function lift(color, level) {
	        var colorArr = parse(color);
	        if (colorArr) {
	            for (var i = 0; i < 3; i++) {
	                if (level < 0) {
	                    colorArr[i] = colorArr[i] * (1 - level) | 0;
	                }
	                else {
	                    colorArr[i] = ((255 - colorArr[i]) * level + colorArr[i]) | 0;
	                }
	            }
	            return stringify(colorArr, colorArr.length === 4 ? 'rgba' : 'rgb');
	        }
	    }

	    /**
	     * @param {string} color
	     * @return {string}
	     * @memberOf module:zrender/util/color
	     */
	    function toHex(color, level) {
	        var colorArr = parse(color);
	        if (colorArr) {
	            return ((1 << 24) + (colorArr[0] << 16) + (colorArr[1] << 8) + (+colorArr[2])).toString(16).slice(1);
	        }
	    }

	    /**
	     * Map value to color. Faster than mapToColor methods because color is represented by rgba array
	     * @param {number} normalizedValue A float between 0 and 1.
	     * @param {Array.<Array.<number>>} colors List of rgba color array
	     * @param {Array.<number>} [out] Mapped gba color array
	     * @return {Array.<number>}
	     */
	    function fastMapToColor(normalizedValue, colors, out) {
	        if (!(colors && colors.length)
	            || !(normalizedValue >= 0 && normalizedValue <= 1)
	        ) {
	            return;
	        }
	        out = out || [0, 0, 0, 0];
	        var value = normalizedValue * (colors.length - 1);
	        var leftIndex = Math.floor(value);
	        var rightIndex = Math.ceil(value);
	        var leftColor = colors[leftIndex];
	        var rightColor = colors[rightIndex];
	        var dv = value - leftIndex;
	        out[0] = clampCssByte(lerp(leftColor[0], rightColor[0], dv));
	        out[1] = clampCssByte(lerp(leftColor[1], rightColor[1], dv));
	        out[2] = clampCssByte(lerp(leftColor[2], rightColor[2], dv));
	        out[3] = clampCssByte(lerp(leftColor[3], rightColor[3], dv));
	        return out;
	    }
	    /**
	     * @param {number} normalizedValue A float between 0 and 1.
	     * @param {Array.<string>} colors Color list.
	     * @param {boolean=} fullOutput Default false.
	     * @return {(string|Object)} Result color. If fullOutput,
	     *                           return {color: ..., leftIndex: ..., rightIndex: ..., value: ...},
	     * @memberOf module:zrender/util/color
	     */
	    function mapToColor(normalizedValue, colors, fullOutput) {
	        if (!(colors && colors.length)
	            || !(normalizedValue >= 0 && normalizedValue <= 1)
	        ) {
	            return;
	        }

	        var value = normalizedValue * (colors.length - 1);
	        var leftIndex = Math.floor(value);
	        var rightIndex = Math.ceil(value);
	        var leftColor = parse(colors[leftIndex]);
	        var rightColor = parse(colors[rightIndex]);
	        var dv = value - leftIndex;

	        var color = stringify(
	            [
	                clampCssByte(lerp(leftColor[0], rightColor[0], dv)),
	                clampCssByte(lerp(leftColor[1], rightColor[1], dv)),
	                clampCssByte(lerp(leftColor[2], rightColor[2], dv)),
	                clampCssFloat(lerp(leftColor[3], rightColor[3], dv))
	            ],
	            'rgba'
	        );

	        return fullOutput
	            ? {
	                color: color,
	                leftIndex: leftIndex,
	                rightIndex: rightIndex,
	                value: value
	            }
	            : color;
	    }

	    /**
	     * @param {string} color
	     * @param {number=} h 0 ~ 360, ignore when null.
	     * @param {number=} s 0 ~ 1, ignore when null.
	     * @param {number=} l 0 ~ 1, ignore when null.
	     * @return {string} Color string in rgba format.
	     * @memberOf module:zrender/util/color
	     */
	    function modifyHSL(color, h, s, l) {
	        color = parse(color);

	        if (color) {
	            color = rgba2hsla(color);
	            h != null && (color[0] = clampCssAngle(h));
	            s != null && (color[1] = parseCssFloat(s));
	            l != null && (color[2] = parseCssFloat(l));

	            return stringify(hsla2rgba(color), 'rgba');
	        }
	    }

	    /**
	     * @param {string} color
	     * @param {number=} alpha 0 ~ 1
	     * @return {string} Color string in rgba format.
	     * @memberOf module:zrender/util/color
	     */
	    function modifyAlpha(color, alpha) {
	        color = parse(color);

	        if (color && alpha != null) {
	            color[3] = clampCssFloat(alpha);
	            return stringify(color, 'rgba');
	        }
	    }

	    /**
	     * @param {Array.<string>} colors Color list.
	     * @param {string} type 'rgba', 'hsva', ...
	     * @return {string} Result color.
	     */
	    function stringify(arrColor, type) {
	        var colorStr = arrColor[0] + ',' + arrColor[1] + ',' + arrColor[2];
	        if (type === 'rgba' || type === 'hsva' || type === 'hsla') {
	            colorStr += ',' + arrColor[3];
	        }
	        return type + '(' + colorStr + ')';
	    }

	    module.exports = {
	        parse: parse,
	        lift: lift,
	        toHex: toHex,
	        fastMapToColor: fastMapToColor,
	        mapToColor: mapToColor,
	        modifyHSL: modifyHSL,
	        modifyAlpha: modifyAlpha,
	        stringify: stringify
	    };




/***/ },

/***/ 158:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.setDefaultValue = exports.readDict = exports.saveStepForm = exports.updateOneRow = exports.onSubmitAction = exports.submitDemo = exports.requestTestMyForm = exports.requestInitMyForm = undefined;

	var _defineProperty2 = __webpack_require__(7);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _actionType = __webpack_require__(25);

	var Types = _interopRequireWildcard(_actionType);

	var _api = __webpack_require__(40);

	var _global = __webpack_require__(15);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	// home action
	var requestInitMyForm = exports.requestInitMyForm = function requestInitMyForm(config, id) {
	    return {
	        //[API]:{types:Types.initMyForm.initMyFormApi}
	        type: Types.aiForm.init,
	        config: config,
	        id: id
	    };
	};

	var requestTestMyForm = exports.requestTestMyForm = function requestTestMyForm(api, id) {
	    _global.Global.requestApi(api, Types.aiForm.initMyFormApi, {
	        aiForm: (0, _defineProperty3["default"])({}, id, {
	            config: null
	        })

	    });
	    //[API]:{types:Types.aiForm.initMyFormApi,apiConfig:api},
	    //id:id
	};
	var submitDemo = exports.submitDemo = function submitDemo(values, id) {
	    var _ref;

	    return _ref = {}, (0, _defineProperty3["default"])(_ref, _api.API, { types: Types.aiForm.submitFormApi, apiConfig: { apiName: "onsubmitTest" } }), (0, _defineProperty3["default"])(_ref, 'id', id), (0, _defineProperty3["default"])(_ref, 'values', values), _ref;
	};
	var onSubmitAction = exports.onSubmitAction = function onSubmitAction(config) {
	    var _ref2;

	    return _ref2 = {}, (0, _defineProperty3["default"])(_ref2, _api.API, { types: Types.aiForm.submitFormApi, apiConfig: config }), (0, _defineProperty3["default"])(_ref2, 'config', config), _ref2;
	};
	/**
	 * 更新一整行数据
	 * @param row
	 * @param id
	 * @param rowIndex
	 */
	var updateOneRow = exports.updateOneRow = function updateOneRow(row, id, rowIndex) {
	    return {
	        type: Types.aiForm.updateOneRow,
	        rows: row,
	        id: id,
	        rowIndex: rowIndex
	    };
	};
	var saveStepForm = exports.saveStepForm = function saveStepForm(id, field, value, code) {
	    return {
	        type: Types.aiForm.saveStepForm,
	        field: field,
	        id: id,
	        value: value,
	        code: code
	    };
	};
	/**
	 * 提交表单
	 * @param config  接口参数
	 * @param values  表单提交数据
	 */
	//获取字典
	var readDict = exports.readDict = function readDict(config) {
	    //todo: get dicts form config
	    var dicts = [];
	    var customDicts = [];
	    config.data && config.data.length > 0 && config.data.map(function (forms) {
	        forms.data && forms.data.length > 0 && forms.data.filter(function (form) {
	            return form.dictId != null;
	        }).map(function (form, i) {
	            if (form.defaultValue != undefined) {
	                form.value = form.defaultValue;
	            }
	            if (form.dictApi) {
	                var customDict = [];
	                customDict.dictApi = form.dictApi;
	                customDict.dictId = form.dictId;
	                customDicts.push(customDict);
	            } else {
	                dicts.push(form.dictId);
	            }
	        });
	    });
	    //getDicts 获取字典表接口
	    setDefaultValue(config);
	    if (dicts.length == 0 && !customDicts) return null;
	    return { type: Types.aiForm.readDict, dicts: { apiName: "getDicts", body: dicts }, customApi: customDicts };
	};

	var setDefaultValue = exports.setDefaultValue = function setDefaultValue(config) {
	    //todo: get dicts form config
	    config.data && config.data.length > 0 && config.data.map(function (forms) {
	        forms.data && forms.data.length > 0 && forms.data.map(function (form, i) {
	            if (form.defaultValue != undefined) {
	                form.value = form.defaultValue;
	            }
	        });
	    });
	};

/***/ },

/***/ 163:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.isReactChildren = isReactChildren;
	exports.createRouteFromReactElement = createRouteFromReactElement;
	exports.createRoutesFromReactChildren = createRoutesFromReactChildren;
	exports.createRoutes = createRoutes;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _warning = __webpack_require__(50);

	var _warning2 = _interopRequireDefault(_warning);

	function isValidChild(object) {
	  return object == null || _react2['default'].isValidElement(object);
	}

	function isReactChildren(object) {
	  return isValidChild(object) || Array.isArray(object) && object.every(isValidChild);
	}

	function checkPropTypes(componentName, propTypes, props) {
	  componentName = componentName || 'UnknownComponent';

	  for (var propName in propTypes) {
	    if (propTypes.hasOwnProperty(propName)) {
	      var error = propTypes[propName](props, propName, componentName);

	      /* istanbul ignore if: error logging */
	      if (error instanceof Error)  true ? _warning2['default'](false, error.message) : undefined;
	    }
	  }
	}

	function createRoute(defaultProps, props) {
	  return _extends({}, defaultProps, props);
	}

	function createRouteFromReactElement(element) {
	  var type = element.type;
	  var route = createRoute(type.defaultProps, element.props);

	  if (type.propTypes) checkPropTypes(type.displayName || type.name, type.propTypes, route);

	  if (route.children) {
	    var childRoutes = createRoutesFromReactChildren(route.children, route);

	    if (childRoutes.length) route.childRoutes = childRoutes;

	    delete route.children;
	  }

	  return route;
	}

	/**
	 * Creates and returns a routes object from the given ReactChildren. JSX
	 * provides a convenient way to visualize how routes in the hierarchy are
	 * nested.
	 *
	 *   import { Route, createRoutesFromReactChildren } from 'react-router'
	 *   
	 *   const routes = createRoutesFromReactChildren(
	 *     <Route component={App}>
	 *       <Route path="home" component={Dashboard}/>
	 *       <Route path="news" component={NewsFeed}/>
	 *     </Route>
	 *   )
	 *
	 * Note: This method is automatically used when you provide <Route> children
	 * to a <Router> component.
	 */

	function createRoutesFromReactChildren(children, parentRoute) {
	  var routes = [];

	  _react2['default'].Children.forEach(children, function (element) {
	    if (_react2['default'].isValidElement(element)) {
	      // Component classes may have a static create* method.
	      if (element.type.createRouteFromReactElement) {
	        var route = element.type.createRouteFromReactElement(element, parentRoute);

	        if (route) routes.push(route);
	      } else {
	        routes.push(createRouteFromReactElement(element));
	      }
	    }
	  });

	  return routes;
	}

	/**
	 * Creates and returns an array of routes from the given object which
	 * may be a JSX route, a plain object route, or an array of either.
	 */

	function createRoutes(routes) {
	  if (isReactChildren(routes)) {
	    routes = createRoutesFromReactChildren(routes);
	  } else if (routes && !Array.isArray(routes)) {
	    routes = [routes];
	  }

	  return routes;
	}

/***/ },

/***/ 165:
/***/ function(module, exports, __webpack_require__) {

	

	    var textWidthCache = {};
	    var textWidthCacheCounter = 0;
	    var TEXT_CACHE_MAX = 5000;

	    var util = __webpack_require__(2);
	    var BoundingRect = __webpack_require__(62);
	    var retrieve = util.retrieve;

	    function getTextWidth(text, textFont) {
	        var key = text + ':' + textFont;
	        if (textWidthCache[key]) {
	            return textWidthCache[key];
	        }

	        var textLines = (text + '').split('\n');
	        var width = 0;

	        for (var i = 0, l = textLines.length; i < l; i++) {
	            // measureText 可以被覆盖以兼容不支持 Canvas 的环境
	            width = Math.max(textContain.measureText(textLines[i], textFont).width, width);
	        }

	        if (textWidthCacheCounter > TEXT_CACHE_MAX) {
	            textWidthCacheCounter = 0;
	            textWidthCache = {};
	        }
	        textWidthCacheCounter++;
	        textWidthCache[key] = width;

	        return width;
	    }

	    function getTextRect(text, textFont, textAlign, textBaseline) {
	        var textLineLen = ((text || '') + '').split('\n').length;

	        var width = getTextWidth(text, textFont);
	        // FIXME 高度计算比较粗暴
	        var lineHeight = getTextWidth('国', textFont);
	        var height = textLineLen * lineHeight;

	        var rect = new BoundingRect(0, 0, width, height);
	        // Text has a special line height property
	        rect.lineHeight = lineHeight;

	        switch (textBaseline) {
	            case 'bottom':
	            case 'alphabetic':
	                rect.y -= lineHeight;
	                break;
	            case 'middle':
	                rect.y -= lineHeight / 2;
	                break;
	            // case 'hanging':
	            // case 'top':
	        }

	        // FIXME Right to left language
	        switch (textAlign) {
	            case 'end':
	            case 'right':
	                rect.x -= rect.width;
	                break;
	            case 'center':
	                rect.x -= rect.width / 2;
	                break;
	            // case 'start':
	            // case 'left':
	        }

	        return rect;
	    }

	    function adjustTextPositionOnRect(textPosition, rect, textRect, distance) {

	        var x = rect.x;
	        var y = rect.y;

	        var height = rect.height;
	        var width = rect.width;

	        var textHeight = textRect.height;

	        var halfHeight = height / 2 - textHeight / 2;

	        var textAlign = 'left';

	        switch (textPosition) {
	            case 'left':
	                x -= distance;
	                y += halfHeight;
	                textAlign = 'right';
	                break;
	            case 'right':
	                x += distance + width;
	                y += halfHeight;
	                textAlign = 'left';
	                break;
	            case 'top':
	                x += width / 2;
	                y -= distance + textHeight;
	                textAlign = 'center';
	                break;
	            case 'bottom':
	                x += width / 2;
	                y += height + distance;
	                textAlign = 'center';
	                break;
	            case 'inside':
	                x += width / 2;
	                y += halfHeight;
	                textAlign = 'center';
	                break;
	            case 'insideLeft':
	                x += distance;
	                y += halfHeight;
	                textAlign = 'left';
	                break;
	            case 'insideRight':
	                x += width - distance;
	                y += halfHeight;
	                textAlign = 'right';
	                break;
	            case 'insideTop':
	                x += width / 2;
	                y += distance;
	                textAlign = 'center';
	                break;
	            case 'insideBottom':
	                x += width / 2;
	                y += height - textHeight - distance;
	                textAlign = 'center';
	                break;
	            case 'insideTopLeft':
	                x += distance;
	                y += distance;
	                textAlign = 'left';
	                break;
	            case 'insideTopRight':
	                x += width - distance;
	                y += distance;
	                textAlign = 'right';
	                break;
	            case 'insideBottomLeft':
	                x += distance;
	                y += height - textHeight - distance;
	                break;
	            case 'insideBottomRight':
	                x += width - distance;
	                y += height - textHeight - distance;
	                textAlign = 'right';
	                break;
	        }

	        return {
	            x: x,
	            y: y,
	            textAlign: textAlign,
	            textBaseline: 'top'
	        };
	    }

	    /**
	     * Show ellipsis if overflow.
	     *
	     * @param  {string} text
	     * @param  {string} containerWidth
	     * @param  {string} textFont
	     * @param  {number} [ellipsis='...']
	     * @param  {Object} [options]
	     * @param  {number} [options.maxIterations=3]
	     * @param  {number} [options.minChar=0] If truncate result are less
	     *                  then minChar, ellipsis will not show, which is
	     *                  better for user hint in some cases.
	     * @param  {number} [options.placeholder=''] When all truncated, use the placeholder.
	     * @return {string}
	     */
	    function truncateText(text, containerWidth, textFont, ellipsis, options) {
	        if (!containerWidth) {
	            return '';
	        }

	        options = options || {};

	        ellipsis = retrieve(ellipsis, '...');
	        var maxIterations = retrieve(options.maxIterations, 2);
	        var minChar = retrieve(options.minChar, 0);
	        // FIXME
	        // Other languages?
	        var cnCharWidth = getTextWidth('国', textFont);
	        // FIXME
	        // Consider proportional font?
	        var ascCharWidth = getTextWidth('a', textFont);
	        var placeholder = retrieve(options.placeholder, '');

	        // Example 1: minChar: 3, text: 'asdfzxcv', truncate result: 'asdf', but not: 'a...'.
	        // Example 2: minChar: 3, text: '维度', truncate result: '维', but not: '...'.
	        var contentWidth = containerWidth = Math.max(0, containerWidth - 1); // Reserve some gap.
	        for (var i = 0; i < minChar && contentWidth >= ascCharWidth; i++) {
	            contentWidth -= ascCharWidth;
	        }

	        var ellipsisWidth = getTextWidth(ellipsis);
	        if (ellipsisWidth > contentWidth) {
	            ellipsis = '';
	            ellipsisWidth = 0;
	        }

	        contentWidth = containerWidth - ellipsisWidth;

	        var textLines = (text + '').split('\n');

	        for (var i = 0, len = textLines.length; i < len; i++) {
	            var textLine = textLines[i];
	            var lineWidth = getTextWidth(textLine, textFont);

	            if (lineWidth <= containerWidth) {
	                continue;
	            }

	            for (var j = 0;; j++) {
	                if (lineWidth <= contentWidth || j >= maxIterations) {
	                    textLine += ellipsis;
	                    break;
	                }

	                var subLength = j === 0
	                    ? estimateLength(textLine, contentWidth, ascCharWidth, cnCharWidth)
	                    : lineWidth > 0
	                    ? Math.floor(textLine.length * contentWidth / lineWidth)
	                    : 0;

	                textLine = textLine.substr(0, subLength);
	                lineWidth = getTextWidth(textLine, textFont);
	            }

	            if (textLine === '') {
	                textLine = placeholder;
	            }

	            textLines[i] = textLine;
	        }

	        return textLines.join('\n');
	    }

	    function estimateLength(text, contentWidth, ascCharWidth, cnCharWidth) {
	        var width = 0;
	        var i = 0;
	        for (var len = text.length; i < len && width < contentWidth; i++) {
	            var charCode = text.charCodeAt(i);
	            width += (0 <= charCode && charCode <= 127) ? ascCharWidth : cnCharWidth;
	        }
	        return i;
	    }

	    var textContain = {

	        getWidth: getTextWidth,

	        getBoundingRect: getTextRect,

	        adjustTextPositionOnRect: adjustTextPositionOnRect,

	        truncateText: truncateText,

	        measureText: function (text, textFont) {
	            var ctx = util.getContext();
	            ctx.font = textFont || '12px sans-serif';
	            return ctx.measureText(text);
	        }
	    };

	    module.exports = textContain;


/***/ },

/***/ 166:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * 曲线辅助模块
	 * @module zrender/core/curve
	 * @author pissang(https://www.github.com/pissang)
	 */


	    var vec2 = __webpack_require__(34);
	    var v2Create = vec2.create;
	    var v2DistSquare = vec2.distSquare;
	    var mathPow = Math.pow;
	    var mathSqrt = Math.sqrt;

	    var EPSILON = 1e-8;
	    var EPSILON_NUMERIC = 1e-4;

	    var THREE_SQRT = mathSqrt(3);
	    var ONE_THIRD = 1 / 3;

	    // 临时变量
	    var _v0 = v2Create();
	    var _v1 = v2Create();
	    var _v2 = v2Create();
	    // var _v3 = vec2.create();

	    function isAroundZero(val) {
	        return val > -EPSILON && val < EPSILON;
	    }
	    function isNotAroundZero(val) {
	        return val > EPSILON || val < -EPSILON;
	    }
	    /**
	     * 计算三次贝塞尔值
	     * @memberOf module:zrender/core/curve
	     * @param  {number} p0
	     * @param  {number} p1
	     * @param  {number} p2
	     * @param  {number} p3
	     * @param  {number} t
	     * @return {number}
	     */
	    function cubicAt(p0, p1, p2, p3, t) {
	        var onet = 1 - t;
	        return onet * onet * (onet * p0 + 3 * t * p1)
	             + t * t * (t * p3 + 3 * onet * p2);
	    }

	    /**
	     * 计算三次贝塞尔导数值
	     * @memberOf module:zrender/core/curve
	     * @param  {number} p0
	     * @param  {number} p1
	     * @param  {number} p2
	     * @param  {number} p3
	     * @param  {number} t
	     * @return {number}
	     */
	    function cubicDerivativeAt(p0, p1, p2, p3, t) {
	        var onet = 1 - t;
	        return 3 * (
	            ((p1 - p0) * onet + 2 * (p2 - p1) * t) * onet
	            + (p3 - p2) * t * t
	        );
	    }

	    /**
	     * 计算三次贝塞尔方程根，使用盛金公式
	     * @memberOf module:zrender/core/curve
	     * @param  {number} p0
	     * @param  {number} p1
	     * @param  {number} p2
	     * @param  {number} p3
	     * @param  {number} val
	     * @param  {Array.<number>} roots
	     * @return {number} 有效根数目
	     */
	    function cubicRootAt(p0, p1, p2, p3, val, roots) {
	        // Evaluate roots of cubic functions
	        var a = p3 + 3 * (p1 - p2) - p0;
	        var b = 3 * (p2 - p1 * 2 + p0);
	        var c = 3 * (p1  - p0);
	        var d = p0 - val;

	        var A = b * b - 3 * a * c;
	        var B = b * c - 9 * a * d;
	        var C = c * c - 3 * b * d;

	        var n = 0;

	        if (isAroundZero(A) && isAroundZero(B)) {
	            if (isAroundZero(b)) {
	                roots[0] = 0;
	            }
	            else {
	                var t1 = -c / b;  //t1, t2, t3, b is not zero
	                if (t1 >= 0 && t1 <= 1) {
	                    roots[n++] = t1;
	                }
	            }
	        }
	        else {
	            var disc = B * B - 4 * A * C;

	            if (isAroundZero(disc)) {
	                var K = B / A;
	                var t1 = -b / a + K;  // t1, a is not zero
	                var t2 = -K / 2;  // t2, t3
	                if (t1 >= 0 && t1 <= 1) {
	                    roots[n++] = t1;
	                }
	                if (t2 >= 0 && t2 <= 1) {
	                    roots[n++] = t2;
	                }
	            }
	            else if (disc > 0) {
	                var discSqrt = mathSqrt(disc);
	                var Y1 = A * b + 1.5 * a * (-B + discSqrt);
	                var Y2 = A * b + 1.5 * a * (-B - discSqrt);
	                if (Y1 < 0) {
	                    Y1 = -mathPow(-Y1, ONE_THIRD);
	                }
	                else {
	                    Y1 = mathPow(Y1, ONE_THIRD);
	                }
	                if (Y2 < 0) {
	                    Y2 = -mathPow(-Y2, ONE_THIRD);
	                }
	                else {
	                    Y2 = mathPow(Y2, ONE_THIRD);
	                }
	                var t1 = (-b - (Y1 + Y2)) / (3 * a);
	                if (t1 >= 0 && t1 <= 1) {
	                    roots[n++] = t1;
	                }
	            }
	            else {
	                var T = (2 * A * b - 3 * a * B) / (2 * mathSqrt(A * A * A));
	                var theta = Math.acos(T) / 3;
	                var ASqrt = mathSqrt(A);
	                var tmp = Math.cos(theta);

	                var t1 = (-b - 2 * ASqrt * tmp) / (3 * a);
	                var t2 = (-b + ASqrt * (tmp + THREE_SQRT * Math.sin(theta))) / (3 * a);
	                var t3 = (-b + ASqrt * (tmp - THREE_SQRT * Math.sin(theta))) / (3 * a);
	                if (t1 >= 0 && t1 <= 1) {
	                    roots[n++] = t1;
	                }
	                if (t2 >= 0 && t2 <= 1) {
	                    roots[n++] = t2;
	                }
	                if (t3 >= 0 && t3 <= 1) {
	                    roots[n++] = t3;
	                }
	            }
	        }
	        return n;
	    }

	    /**
	     * 计算三次贝塞尔方程极限值的位置
	     * @memberOf module:zrender/core/curve
	     * @param  {number} p0
	     * @param  {number} p1
	     * @param  {number} p2
	     * @param  {number} p3
	     * @param  {Array.<number>} extrema
	     * @return {number} 有效数目
	     */
	    function cubicExtrema(p0, p1, p2, p3, extrema) {
	        var b = 6 * p2 - 12 * p1 + 6 * p0;
	        var a = 9 * p1 + 3 * p3 - 3 * p0 - 9 * p2;
	        var c = 3 * p1 - 3 * p0;

	        var n = 0;
	        if (isAroundZero(a)) {
	            if (isNotAroundZero(b)) {
	                var t1 = -c / b;
	                if (t1 >= 0 && t1 <=1) {
	                    extrema[n++] = t1;
	                }
	            }
	        }
	        else {
	            var disc = b * b - 4 * a * c;
	            if (isAroundZero(disc)) {
	                extrema[0] = -b / (2 * a);
	            }
	            else if (disc > 0) {
	                var discSqrt = mathSqrt(disc);
	                var t1 = (-b + discSqrt) / (2 * a);
	                var t2 = (-b - discSqrt) / (2 * a);
	                if (t1 >= 0 && t1 <= 1) {
	                    extrema[n++] = t1;
	                }
	                if (t2 >= 0 && t2 <= 1) {
	                    extrema[n++] = t2;
	                }
	            }
	        }
	        return n;
	    }

	    /**
	     * 细分三次贝塞尔曲线
	     * @memberOf module:zrender/core/curve
	     * @param  {number} p0
	     * @param  {number} p1
	     * @param  {number} p2
	     * @param  {number} p3
	     * @param  {number} t
	     * @param  {Array.<number>} out
	     */
	    function cubicSubdivide(p0, p1, p2, p3, t, out) {
	        var p01 = (p1 - p0) * t + p0;
	        var p12 = (p2 - p1) * t + p1;
	        var p23 = (p3 - p2) * t + p2;

	        var p012 = (p12 - p01) * t + p01;
	        var p123 = (p23 - p12) * t + p12;

	        var p0123 = (p123 - p012) * t + p012;
	        // Seg0
	        out[0] = p0;
	        out[1] = p01;
	        out[2] = p012;
	        out[3] = p0123;
	        // Seg1
	        out[4] = p0123;
	        out[5] = p123;
	        out[6] = p23;
	        out[7] = p3;
	    }

	    /**
	     * 投射点到三次贝塞尔曲线上，返回投射距离。
	     * 投射点有可能会有一个或者多个，这里只返回其中距离最短的一个。
	     * @param {number} x0
	     * @param {number} y0
	     * @param {number} x1
	     * @param {number} y1
	     * @param {number} x2
	     * @param {number} y2
	     * @param {number} x3
	     * @param {number} y3
	     * @param {number} x
	     * @param {number} y
	     * @param {Array.<number>} [out] 投射点
	     * @return {number}
	     */
	    function cubicProjectPoint(
	        x0, y0, x1, y1, x2, y2, x3, y3,
	        x, y, out
	    ) {
	        // http://pomax.github.io/bezierinfo/#projections
	        var t;
	        var interval = 0.005;
	        var d = Infinity;
	        var prev;
	        var next;
	        var d1;
	        var d2;

	        _v0[0] = x;
	        _v0[1] = y;

	        // 先粗略估计一下可能的最小距离的 t 值
	        // PENDING
	        for (var _t = 0; _t < 1; _t += 0.05) {
	            _v1[0] = cubicAt(x0, x1, x2, x3, _t);
	            _v1[1] = cubicAt(y0, y1, y2, y3, _t);
	            d1 = v2DistSquare(_v0, _v1);
	            if (d1 < d) {
	                t = _t;
	                d = d1;
	            }
	        }
	        d = Infinity;

	        // At most 32 iteration
	        for (var i = 0; i < 32; i++) {
	            if (interval < EPSILON_NUMERIC) {
	                break;
	            }
	            prev = t - interval;
	            next = t + interval;
	            // t - interval
	            _v1[0] = cubicAt(x0, x1, x2, x3, prev);
	            _v1[1] = cubicAt(y0, y1, y2, y3, prev);

	            d1 = v2DistSquare(_v1, _v0);

	            if (prev >= 0 && d1 < d) {
	                t = prev;
	                d = d1;
	            }
	            else {
	                // t + interval
	                _v2[0] = cubicAt(x0, x1, x2, x3, next);
	                _v2[1] = cubicAt(y0, y1, y2, y3, next);
	                d2 = v2DistSquare(_v2, _v0);

	                if (next <= 1 && d2 < d) {
	                    t = next;
	                    d = d2;
	                }
	                else {
	                    interval *= 0.5;
	                }
	            }
	        }
	        // t
	        if (out) {
	            out[0] = cubicAt(x0, x1, x2, x3, t);
	            out[1] = cubicAt(y0, y1, y2, y3, t);
	        }
	        // console.log(interval, i);
	        return mathSqrt(d);
	    }

	    /**
	     * 计算二次方贝塞尔值
	     * @param  {number} p0
	     * @param  {number} p1
	     * @param  {number} p2
	     * @param  {number} t
	     * @return {number}
	     */
	    function quadraticAt(p0, p1, p2, t) {
	        var onet = 1 - t;
	        return onet * (onet * p0 + 2 * t * p1) + t * t * p2;
	    }

	    /**
	     * 计算二次方贝塞尔导数值
	     * @param  {number} p0
	     * @param  {number} p1
	     * @param  {number} p2
	     * @param  {number} t
	     * @return {number}
	     */
	    function quadraticDerivativeAt(p0, p1, p2, t) {
	        return 2 * ((1 - t) * (p1 - p0) + t * (p2 - p1));
	    }

	    /**
	     * 计算二次方贝塞尔方程根
	     * @param  {number} p0
	     * @param  {number} p1
	     * @param  {number} p2
	     * @param  {number} t
	     * @param  {Array.<number>} roots
	     * @return {number} 有效根数目
	     */
	    function quadraticRootAt(p0, p1, p2, val, roots) {
	        var a = p0 - 2 * p1 + p2;
	        var b = 2 * (p1 - p0);
	        var c = p0 - val;

	        var n = 0;
	        if (isAroundZero(a)) {
	            if (isNotAroundZero(b)) {
	                var t1 = -c / b;
	                if (t1 >= 0 && t1 <= 1) {
	                    roots[n++] = t1;
	                }
	            }
	        }
	        else {
	            var disc = b * b - 4 * a * c;
	            if (isAroundZero(disc)) {
	                var t1 = -b / (2 * a);
	                if (t1 >= 0 && t1 <= 1) {
	                    roots[n++] = t1;
	                }
	            }
	            else if (disc > 0) {
	                var discSqrt = mathSqrt(disc);
	                var t1 = (-b + discSqrt) / (2 * a);
	                var t2 = (-b - discSqrt) / (2 * a);
	                if (t1 >= 0 && t1 <= 1) {
	                    roots[n++] = t1;
	                }
	                if (t2 >= 0 && t2 <= 1) {
	                    roots[n++] = t2;
	                }
	            }
	        }
	        return n;
	    }

	    /**
	     * 计算二次贝塞尔方程极限值
	     * @memberOf module:zrender/core/curve
	     * @param  {number} p0
	     * @param  {number} p1
	     * @param  {number} p2
	     * @return {number}
	     */
	    function quadraticExtremum(p0, p1, p2) {
	        var divider = p0 + p2 - 2 * p1;
	        if (divider === 0) {
	            // p1 is center of p0 and p2
	            return 0.5;
	        }
	        else {
	            return (p0 - p1) / divider;
	        }
	    }

	    /**
	     * 细分二次贝塞尔曲线
	     * @memberOf module:zrender/core/curve
	     * @param  {number} p0
	     * @param  {number} p1
	     * @param  {number} p2
	     * @param  {number} t
	     * @param  {Array.<number>} out
	     */
	    function quadraticSubdivide(p0, p1, p2, t, out) {
	        var p01 = (p1 - p0) * t + p0;
	        var p12 = (p2 - p1) * t + p1;
	        var p012 = (p12 - p01) * t + p01;

	        // Seg0
	        out[0] = p0;
	        out[1] = p01;
	        out[2] = p012;

	        // Seg1
	        out[3] = p012;
	        out[4] = p12;
	        out[5] = p2;
	    }

	    /**
	     * 投射点到二次贝塞尔曲线上，返回投射距离。
	     * 投射点有可能会有一个或者多个，这里只返回其中距离最短的一个。
	     * @param {number} x0
	     * @param {number} y0
	     * @param {number} x1
	     * @param {number} y1
	     * @param {number} x2
	     * @param {number} y2
	     * @param {number} x
	     * @param {number} y
	     * @param {Array.<number>} out 投射点
	     * @return {number}
	     */
	    function quadraticProjectPoint(
	        x0, y0, x1, y1, x2, y2,
	        x, y, out
	    ) {
	        // http://pomax.github.io/bezierinfo/#projections
	        var t;
	        var interval = 0.005;
	        var d = Infinity;

	        _v0[0] = x;
	        _v0[1] = y;

	        // 先粗略估计一下可能的最小距离的 t 值
	        // PENDING
	        for (var _t = 0; _t < 1; _t += 0.05) {
	            _v1[0] = quadraticAt(x0, x1, x2, _t);
	            _v1[1] = quadraticAt(y0, y1, y2, _t);
	            var d1 = v2DistSquare(_v0, _v1);
	            if (d1 < d) {
	                t = _t;
	                d = d1;
	            }
	        }
	        d = Infinity;

	        // At most 32 iteration
	        for (var i = 0; i < 32; i++) {
	            if (interval < EPSILON_NUMERIC) {
	                break;
	            }
	            var prev = t - interval;
	            var next = t + interval;
	            // t - interval
	            _v1[0] = quadraticAt(x0, x1, x2, prev);
	            _v1[1] = quadraticAt(y0, y1, y2, prev);

	            var d1 = v2DistSquare(_v1, _v0);

	            if (prev >= 0 && d1 < d) {
	                t = prev;
	                d = d1;
	            }
	            else {
	                // t + interval
	                _v2[0] = quadraticAt(x0, x1, x2, next);
	                _v2[1] = quadraticAt(y0, y1, y2, next);
	                var d2 = v2DistSquare(_v2, _v0);
	                if (next <= 1 && d2 < d) {
	                    t = next;
	                    d = d2;
	                }
	                else {
	                    interval *= 0.5;
	                }
	            }
	        }
	        // t
	        if (out) {
	            out[0] = quadraticAt(x0, x1, x2, t);
	            out[1] = quadraticAt(y0, y1, y2, t);
	        }
	        // console.log(interval, i);
	        return mathSqrt(d);
	    }

	    module.exports = {

	        cubicAt: cubicAt,

	        cubicDerivativeAt: cubicDerivativeAt,

	        cubicRootAt: cubicRootAt,

	        cubicExtrema: cubicExtrema,

	        cubicSubdivide: cubicSubdivide,

	        cubicProjectPoint: cubicProjectPoint,

	        quadraticAt: quadraticAt,

	        quadraticDerivativeAt: quadraticDerivativeAt,

	        quadraticRootAt: quadraticRootAt,

	        quadraticExtremum: quadraticExtremum,

	        quadraticSubdivide: quadraticSubdivide,

	        quadraticProjectPoint: quadraticProjectPoint
	    };


/***/ },

/***/ 193:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.falsy = falsy;

	var _react = __webpack_require__(1);

	var func = _react.PropTypes.func;
	var object = _react.PropTypes.object;
	var arrayOf = _react.PropTypes.arrayOf;
	var oneOfType = _react.PropTypes.oneOfType;
	var element = _react.PropTypes.element;
	var shape = _react.PropTypes.shape;
	var string = _react.PropTypes.string;

	function falsy(props, propName, componentName) {
	  if (props[propName]) return new Error('<' + componentName + '> should not have a "' + propName + '" prop');
	}

	var history = shape({
	  listen: func.isRequired,
	  pushState: func.isRequired,
	  replaceState: func.isRequired,
	  go: func.isRequired
	});

	exports.history = history;
	var location = shape({
	  pathname: string.isRequired,
	  search: string.isRequired,
	  state: object,
	  action: string.isRequired,
	  key: string
	});

	exports.location = location;
	var component = oneOfType([func, string]);
	exports.component = component;
	var components = oneOfType([component, object]);
	exports.components = components;
	var route = oneOfType([object, element]);
	exports.route = route;
	var routes = oneOfType([route, arrayOf(route)]);

	exports.routes = routes;
	exports['default'] = {
	  falsy: falsy,
	  history: history,
	  location: location,
	  component: component,
	  components: components,
	  route: route
	};

/***/ },

/***/ 214:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Text element
	 * @module zrender/graphic/Text
	 *
	 * TODO Wrapping
	 *
	 * Text not support gradient
	 */



	    var Displayable = __webpack_require__(414);
	    var zrUtil = __webpack_require__(2);
	    var textContain = __webpack_require__(165);

	    /**
	     * @alias zrender/graphic/Text
	     * @extends module:zrender/graphic/Displayable
	     * @constructor
	     * @param {Object} opts
	     */
	    var Text = function (opts) {
	        Displayable.call(this, opts);
	    };

	    Text.prototype = {

	        constructor: Text,

	        type: 'text',

	        brush: function (ctx, prevEl) {
	            var style = this.style;
	            var x = style.x || 0;
	            var y = style.y || 0;
	            // Convert to string
	            var text = style.text;

	            // Convert to string
	            text != null && (text += '');

	            // Always bind style
	            style.bind(ctx, this, prevEl);

	            if (text) {

	                this.setTransform(ctx);

	                var textBaseline;
	                var textAlign = style.textAlign;
	                var font = style.textFont || style.font;
	                if (style.textVerticalAlign) {
	                    var rect = textContain.getBoundingRect(
	                        text, font, style.textAlign, 'top'
	                    );
	                    // Ignore textBaseline
	                    textBaseline = 'middle';
	                    switch (style.textVerticalAlign) {
	                        case 'middle':
	                            y -= rect.height / 2 - rect.lineHeight / 2;
	                            break;
	                        case 'bottom':
	                            y -= rect.height - rect.lineHeight / 2;
	                            break;
	                        default:
	                            y += rect.lineHeight / 2;
	                    }
	                }
	                else {
	                    textBaseline = style.textBaseline;
	                }

	                // TODO Invalid font
	                ctx.font = font || '12px sans-serif';
	                ctx.textAlign = textAlign || 'left';
	                // Use canvas default left textAlign. Giving invalid value will cause state not change
	                if (ctx.textAlign !== textAlign) {
	                    ctx.textAlign = 'left';
	                }
	                ctx.textBaseline = textBaseline || 'alphabetic';
	                // Use canvas default alphabetic baseline
	                if (ctx.textBaseline !== textBaseline) {
	                    ctx.textBaseline = 'alphabetic';
	                }

	                var lineHeight = textContain.measureText('国', ctx.font).width;

	                var textLines = text.split('\n');
	                for (var i = 0; i < textLines.length; i++) {
	                    style.hasFill() && ctx.fillText(textLines[i], x, y);
	                    style.hasStroke() && ctx.strokeText(textLines[i], x, y);
	                    y += lineHeight;
	                }

	                this.restoreTransform(ctx);
	            }
	        },

	        getBoundingRect: function () {
	            if (!this._rect) {
	                var style = this.style;
	                var textVerticalAlign = style.textVerticalAlign;
	                var rect = textContain.getBoundingRect(
	                    style.text + '', style.textFont || style.font, style.textAlign,
	                    textVerticalAlign ? 'top' : style.textBaseline
	                );
	                switch (textVerticalAlign) {
	                    case 'middle':
	                        rect.y -= rect.height / 2;
	                        break;
	                    case 'bottom':
	                        rect.y -= rect.height;
	                        break;
	                }
	                rect.x += style.x || 0;
	                rect.y += style.y || 0;
	                this._rect = rect;
	            }
	            return this._rect;
	        }
	    };

	    zrUtil.inherits(Text, Displayable);

	    module.exports = Text;


/***/ },

/***/ 215:
/***/ function(module, exports) {

	/**
	 * 事件扩展
	 * @module zrender/mixin/Eventful
	 * @author Kener (@Kener-林峰, kener.linfeng@gmail.com)
	 *         pissang (https://www.github.com/pissang)
	 */


	    var arrySlice = Array.prototype.slice;

	    /**
	     * 事件分发器
	     * @alias module:zrender/mixin/Eventful
	     * @constructor
	     */
	    var Eventful = function () {
	        this._$handlers = {};
	    };

	    Eventful.prototype = {

	        constructor: Eventful,

	        /**
	         * 单次触发绑定，trigger后销毁
	         *
	         * @param {string} event 事件名
	         * @param {Function} handler 响应函数
	         * @param {Object} context
	         */
	        one: function (event, handler, context) {
	            var _h = this._$handlers;

	            if (!handler || !event) {
	                return this;
	            }

	            if (!_h[event]) {
	                _h[event] = [];
	            }

	            for (var i = 0; i < _h[event].length; i++) {
	                if (_h[event][i].h === handler) {
	                    return this;
	                }
	            }

	            _h[event].push({
	                h: handler,
	                one: true,
	                ctx: context || this
	            });

	            return this;
	        },

	        /**
	         * 绑定事件
	         * @param {string} event 事件名
	         * @param {Function} handler 事件处理函数
	         * @param {Object} [context]
	         */
	        on: function (event, handler, context) {
	            var _h = this._$handlers;

	            if (!handler || !event) {
	                return this;
	            }

	            if (!_h[event]) {
	                _h[event] = [];
	            }

	            for (var i = 0; i < _h[event].length; i++) {
	                if (_h[event][i].h === handler) {
	                    return this;
	                }
	            }

	            _h[event].push({
	                h: handler,
	                one: false,
	                ctx: context || this
	            });

	            return this;
	        },

	        /**
	         * 是否绑定了事件
	         * @param  {string}  event
	         * @return {boolean}
	         */
	        isSilent: function (event) {
	            var _h = this._$handlers;
	            return _h[event] && _h[event].length;
	        },

	        /**
	         * 解绑事件
	         * @param {string} event 事件名
	         * @param {Function} [handler] 事件处理函数
	         */
	        off: function (event, handler) {
	            var _h = this._$handlers;

	            if (!event) {
	                this._$handlers = {};
	                return this;
	            }

	            if (handler) {
	                if (_h[event]) {
	                    var newList = [];
	                    for (var i = 0, l = _h[event].length; i < l; i++) {
	                        if (_h[event][i]['h'] != handler) {
	                            newList.push(_h[event][i]);
	                        }
	                    }
	                    _h[event] = newList;
	                }

	                if (_h[event] && _h[event].length === 0) {
	                    delete _h[event];
	                }
	            }
	            else {
	                delete _h[event];
	            }

	            return this;
	        },

	        /**
	         * 事件分发
	         *
	         * @param {string} type 事件类型
	         */
	        trigger: function (type) {
	            if (this._$handlers[type]) {
	                var args = arguments;
	                var argLen = args.length;

	                if (argLen > 3) {
	                    args = arrySlice.call(args, 1);
	                }

	                var _h = this._$handlers[type];
	                var len = _h.length;
	                for (var i = 0; i < len;) {
	                    // Optimize advise from backbone
	                    switch (argLen) {
	                        case 1:
	                            _h[i]['h'].call(_h[i]['ctx']);
	                            break;
	                        case 2:
	                            _h[i]['h'].call(_h[i]['ctx'], args[1]);
	                            break;
	                        case 3:
	                            _h[i]['h'].call(_h[i]['ctx'], args[1], args[2]);
	                            break;
	                        default:
	                            // have more than 2 given arguments
	                            _h[i]['h'].apply(_h[i]['ctx'], args);
	                            break;
	                    }

	                    if (_h[i]['one']) {
	                        _h.splice(i, 1);
	                        len--;
	                    }
	                    else {
	                        i++;
	                    }
	                }
	            }

	            return this;
	        },

	        /**
	         * 带有context的事件分发, 最后一个参数是事件回调的context
	         * @param {string} type 事件类型
	         */
	        triggerWithContext: function (type) {
	            if (this._$handlers[type]) {
	                var args = arguments;
	                var argLen = args.length;

	                if (argLen > 4) {
	                    args = arrySlice.call(args, 1, args.length - 1);
	                }
	                var ctx = args[args.length - 1];

	                var _h = this._$handlers[type];
	                var len = _h.length;
	                for (var i = 0; i < len;) {
	                    // Optimize advise from backbone
	                    switch (argLen) {
	                        case 1:
	                            _h[i]['h'].call(ctx);
	                            break;
	                        case 2:
	                            _h[i]['h'].call(ctx, args[1]);
	                            break;
	                        case 3:
	                            _h[i]['h'].call(ctx, args[1], args[2]);
	                            break;
	                        default:
	                            // have more than 2 given arguments
	                            _h[i]['h'].apply(ctx, args);
	                            break;
	                    }

	                    if (_h[i]['one']) {
	                        _h.splice(i, 1);
	                        len--;
	                    }
	                    else {
	                        i++;
	                    }
	                }
	            }

	            return this;
	        }
	    };

	    // 对象可以通过 onxxxx 绑定事件
	    /**
	     * @event module:zrender/mixin/Eventful#onclick
	     * @type {Function}
	     * @default null
	     */
	    /**
	     * @event module:zrender/mixin/Eventful#onmouseover
	     * @type {Function}
	     * @default null
	     */
	    /**
	     * @event module:zrender/mixin/Eventful#onmouseout
	     * @type {Function}
	     * @default null
	     */
	    /**
	     * @event module:zrender/mixin/Eventful#onmousemove
	     * @type {Function}
	     * @default null
	     */
	    /**
	     * @event module:zrender/mixin/Eventful#onmousewheel
	     * @type {Function}
	     * @default null
	     */
	    /**
	     * @event module:zrender/mixin/Eventful#onmousedown
	     * @type {Function}
	     * @default null
	     */
	    /**
	     * @event module:zrender/mixin/Eventful#onmouseup
	     * @type {Function}
	     * @default null
	     */
	    /**
	     * @event module:zrender/mixin/Eventful#ondrag
	     * @type {Function}
	     * @default null
	     */
	    /**
	     * @event module:zrender/mixin/Eventful#ondragstart
	     * @type {Function}
	     * @default null
	     */
	    /**
	     * @event module:zrender/mixin/Eventful#ondragend
	     * @type {Function}
	     * @default null
	     */
	    /**
	     * @event module:zrender/mixin/Eventful#ondragenter
	     * @type {Function}
	     * @default null
	     */
	    /**
	     * @event module:zrender/mixin/Eventful#ondragleave
	     * @type {Function}
	     * @default null
	     */
	    /**
	     * @event module:zrender/mixin/Eventful#ondragover
	     * @type {Function}
	     * @default null
	     */
	    /**
	     * @event module:zrender/mixin/Eventful#ondrop
	     * @type {Function}
	     * @default null
	     */

	    module.exports = Eventful;



/***/ },

/***/ 216:
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * ZRender, a high performance 2d drawing library.
	 *
	 * Copyright (c) 2013, Baidu Inc.
	 * All rights reserved.
	 *
	 * LICENSE
	 * https://github.com/ecomfe/zrender/blob/master/LICENSE.txt
	 */
	// Global defines

	    var guid = __webpack_require__(906);
	    var env = __webpack_require__(77);
	    var zrUtil = __webpack_require__(2);

	    var Handler = __webpack_require__(1031);
	    var Storage = __webpack_require__(1034);
	    var Animation = __webpack_require__(246);
	    var HandlerProxy = __webpack_require__(1042);

	    var useVML = !env.canvasSupported;

	    var painterCtors = {
	        canvas: __webpack_require__(1033)
	    };

	    var instances = {};    // ZRender实例map索引

	    var zrender = {};

	    /**
	     * @type {string}
	     */
	    zrender.version = '3.3.0';

	    /**
	     * Initializing a zrender instance
	     * @param {HTMLElement} dom
	     * @param {Object} opts
	     * @param {string} [opts.renderer='canvas'] 'canvas' or 'svg'
	     * @param {number} [opts.devicePixelRatio]
	     * @param {number|string} [opts.width] Can be 'auto' (the same as null/undefined)
	     * @param {number|string} [opts.height] Can be 'auto' (the same as null/undefined)
	     * @return {module:zrender/ZRender}
	     */
	    zrender.init = function(dom, opts) {
	        var zr = new ZRender(guid(), dom, opts);
	        instances[zr.id] = zr;
	        return zr;
	    };

	    /**
	     * Dispose zrender instance
	     * @param {module:zrender/ZRender} zr
	     */
	    zrender.dispose = function (zr) {
	        if (zr) {
	            zr.dispose();
	        }
	        else {
	            for (var key in instances) {
	                if (instances.hasOwnProperty(key)) {
	                    instances[key].dispose();
	                }
	            }
	            instances = {};
	        }

	        return zrender;
	    };

	    /**
	     * Get zrender instance by id
	     * @param {string} id zrender instance id
	     * @return {module:zrender/ZRender}
	     */
	    zrender.getInstance = function (id) {
	        return instances[id];
	    };

	    zrender.registerPainter = function (name, Ctor) {
	        painterCtors[name] = Ctor;
	    };

	    function delInstance(id) {
	        delete instances[id];
	    }

	    /**
	     * @module zrender/ZRender
	     */
	    /**
	     * @constructor
	     * @alias module:zrender/ZRender
	     * @param {string} id
	     * @param {HTMLDomElement} dom
	     * @param {Object} opts
	     * @param {string} [opts.renderer='canvas'] 'canvas' or 'svg'
	     * @param {number} [opts.devicePixelRatio]
	     * @param {number} [opts.width] Can be 'auto' (the same as null/undefined)
	     * @param {number} [opts.height] Can be 'auto' (the same as null/undefined)
	     */
	    var ZRender = function(id, dom, opts) {

	        opts = opts || {};

	        /**
	         * @type {HTMLDomElement}
	         */
	        this.dom = dom;

	        /**
	         * @type {string}
	         */
	        this.id = id;

	        var self = this;
	        var storage = new Storage();

	        var rendererType = opts.renderer;
	        if (useVML) {
	            if (!painterCtors.vml) {
	                throw new Error('You need to require \'zrender/vml/vml\' to support IE8');
	            }
	            rendererType = 'vml';
	        }
	        else if (!rendererType || !painterCtors[rendererType]) {
	            rendererType = 'canvas';
	        }
	        var painter = new painterCtors[rendererType](dom, storage, opts);

	        this.storage = storage;
	        this.painter = painter;

	        var handerProxy = !env.node ? new HandlerProxy(painter.getViewportRoot()) : null;
	        this.handler = new Handler(storage, painter, handerProxy, painter.root);

	        /**
	         * @type {module:zrender/animation/Animation}
	         */
	        this.animation = new Animation({
	            stage: {
	                update: zrUtil.bind(this.flush, this)
	            }
	        });
	        this.animation.start();

	        /**
	         * @type {boolean}
	         * @private
	         */
	        this._needsRefresh;

	        // 修改 storage.delFromMap, 每次删除元素之前删除动画
	        // FIXME 有点ugly
	        var oldDelFromMap = storage.delFromMap;
	        var oldAddToMap = storage.addToMap;

	        storage.delFromMap = function (elId) {
	            var el = storage.get(elId);

	            oldDelFromMap.call(storage, elId);

	            el && el.removeSelfFromZr(self);
	        };

	        storage.addToMap = function (el) {
	            oldAddToMap.call(storage, el);

	            el.addSelfToZr(self);
	        };
	    };

	    ZRender.prototype = {

	        constructor: ZRender,
	        /**
	         * 获取实例唯一标识
	         * @return {string}
	         */
	        getId: function () {
	            return this.id;
	        },

	        /**
	         * 添加元素
	         * @param  {module:zrender/Element} el
	         */
	        add: function (el) {
	            this.storage.addRoot(el);
	            this._needsRefresh = true;
	        },

	        /**
	         * 删除元素
	         * @param  {module:zrender/Element} el
	         */
	        remove: function (el) {
	            this.storage.delRoot(el);
	            this._needsRefresh = true;
	        },

	        /**
	         * Change configuration of layer
	         * @param {string} zLevel
	         * @param {Object} config
	         * @param {string} [config.clearColor=0] Clear color
	         * @param {string} [config.motionBlur=false] If enable motion blur
	         * @param {number} [config.lastFrameAlpha=0.7] Motion blur factor. Larger value cause longer trailer
	        */
	        configLayer: function (zLevel, config) {
	            this.painter.configLayer(zLevel, config);
	            this._needsRefresh = true;
	        },

	        /**
	         * Repaint the canvas immediately
	         */
	        refreshImmediately: function () {
	            // Clear needsRefresh ahead to avoid something wrong happens in refresh
	            // Or it will cause zrender refreshes again and again.
	            this._needsRefresh = false;
	            this.painter.refresh();
	            /**
	             * Avoid trigger zr.refresh in Element#beforeUpdate hook
	             */
	            this._needsRefresh = false;
	        },

	        /**
	         * Mark and repaint the canvas in the next frame of browser
	         */
	        refresh: function() {
	            this._needsRefresh = true;
	        },

	        /**
	         * Perform all refresh
	         */
	        flush: function () {
	            if (this._needsRefresh) {
	                this.refreshImmediately();
	            }
	            if (this._needsRefreshHover) {
	                this.refreshHoverImmediately();
	            }
	        },

	        /**
	         * Add element to hover layer
	         * @param  {module:zrender/Element} el
	         * @param {Object} style
	         */
	        addHover: function (el, style) {
	            if (this.painter.addHover) {
	                this.painter.addHover(el, style);
	                this.refreshHover();
	            }
	        },

	        /**
	         * Add element from hover layer
	         * @param  {module:zrender/Element} el
	         */
	        removeHover: function (el) {
	            if (this.painter.removeHover) {
	                this.painter.removeHover(el);
	                this.refreshHover();
	            }
	        },

	        /**
	         * Clear all hover elements in hover layer
	         * @param  {module:zrender/Element} el
	         */
	        clearHover: function () {
	            if (this.painter.clearHover) {
	                this.painter.clearHover();
	                this.refreshHover();
	            }
	        },

	        /**
	         * Refresh hover in next frame
	         */
	        refreshHover: function () {
	            this._needsRefreshHover = true;
	        },

	        /**
	         * Refresh hover immediately
	         */
	        refreshHoverImmediately: function () {
	            this._needsRefreshHover = false;
	            this.painter.refreshHover && this.painter.refreshHover();
	        },

	        /**
	         * Resize the canvas.
	         * Should be invoked when container size is changed
	         * @param {Object} [opts]
	         * @param {number|string} [opts.width] Can be 'auto' (the same as null/undefined)
	         * @param {number|string} [opts.height] Can be 'auto' (the same as null/undefined)
	         */
	        resize: function(opts) {
	            opts = opts || {};
	            this.painter.resize(opts.width, opts.height);
	            this.handler.resize();
	        },

	        /**
	         * Stop and clear all animation immediately
	         */
	        clearAnimation: function () {
	            this.animation.clear();
	        },

	        /**
	         * Get container width
	         */
	        getWidth: function() {
	            return this.painter.getWidth();
	        },

	        /**
	         * Get container height
	         */
	        getHeight: function() {
	            return this.painter.getHeight();
	        },

	        /**
	         * Export the canvas as Base64 URL
	         * @param {string} type
	         * @param {string} [backgroundColor='#fff']
	         * @return {string} Base64 URL
	         */
	        // toDataURL: function(type, backgroundColor) {
	        //     return this.painter.getRenderedCanvas({
	        //         backgroundColor: backgroundColor
	        //     }).toDataURL(type);
	        // },

	        /**
	         * Converting a path to image.
	         * It has much better performance of drawing image rather than drawing a vector path.
	         * @param {module:zrender/graphic/Path} e
	         * @param {number} width
	         * @param {number} height
	         */
	        pathToImage: function(e, width, height) {
	            var id = guid();
	            return this.painter.pathToImage(id, e, width, height);
	        },

	        /**
	         * Set default cursor
	         * @param {string} [cursorStyle='default'] 例如 crosshair
	         */
	        setCursorStyle: function (cursorStyle) {
	            this.handler.setCursorStyle(cursorStyle);
	        },

	        /**
	         * Bind event
	         *
	         * @param {string} eventName Event name
	         * @param {Function} eventHandler Handler function
	         * @param {Object} [context] Context object
	         */
	        on: function(eventName, eventHandler, context) {
	            this.handler.on(eventName, eventHandler, context);
	        },

	        /**
	         * Unbind event
	         * @param {string} eventName Event name
	         * @param {Function} [eventHandler] Handler function
	         */
	        off: function(eventName, eventHandler) {
	            this.handler.off(eventName, eventHandler);
	        },

	        /**
	         * Trigger event manually
	         *
	         * @param {string} eventName Event name
	         * @param {event=} event Event object
	         */
	        trigger: function (eventName, event) {
	            this.handler.trigger(eventName, event);
	        },


	        /**
	         * Clear all objects and the canvas.
	         */
	        clear: function () {
	            this.storage.delRoot();
	            this.painter.clear();
	        },

	        /**
	         * Dispose self.
	         */
	        dispose: function () {
	            this.animation.stop();

	            this.clear();
	            this.storage.dispose();
	            this.painter.dispose();
	            this.handler.dispose();

	            this.animation =
	            this.storage =
	            this.painter =
	            this.handler = null;

	            delInstance(this.id);
	        }
	    };

	    module.exports = zrender;



/***/ },

/***/ 231:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var apiDemo = exports.apiDemo = ['requestApiDemo', 'receieveApiDemo', 'failedApiDemo'];
	var testApi1 = exports.testApi1 = ['requestTest1', 'receieveTest1', 'failedTest1'];
	var normalAct = exports.normalAct = 'normalAct';
	var jsonpDemo = exports.jsonpDemo = {
	    jsonpDemoApi: ['requestJsonpDemo', 'receieveJsonpDemo', 'failedJsonpDemo']
	};

/***/ },

/***/ 238:
17,

/***/ 239:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(986);

/***/ },

/***/ 246:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * 动画主类, 调度和管理所有动画控制器
	 *
	 * @module zrender/animation/Animation
	 * @author pissang(https://github.com/pissang)
	 */
	// TODO Additive animation
	// http://iosoteric.com/additive-animations-animatewithduration-in-ios-8/
	// https://developer.apple.com/videos/wwdc2014/#236


	    var util = __webpack_require__(2);
	    var Dispatcher = __webpack_require__(247).Dispatcher;

	    var requestAnimationFrame = __webpack_require__(900);

	    var Animator = __webpack_require__(899);
	    /**
	     * @typedef {Object} IZRenderStage
	     * @property {Function} update
	     */

	    /**
	     * @alias module:zrender/animation/Animation
	     * @constructor
	     * @param {Object} [options]
	     * @param {Function} [options.onframe]
	     * @param {IZRenderStage} [options.stage]
	     * @example
	     *     var animation = new Animation();
	     *     var obj = {
	     *         x: 100,
	     *         y: 100
	     *     };
	     *     animation.animate(node.position)
	     *         .when(1000, {
	     *             x: 500,
	     *             y: 500
	     *         })
	     *         .when(2000, {
	     *             x: 100,
	     *             y: 100
	     *         })
	     *         .start('spline');
	     */
	    var Animation = function (options) {

	        options = options || {};

	        this.stage = options.stage || {};

	        this.onframe = options.onframe || function() {};

	        // private properties
	        this._clips = [];

	        this._running = false;

	        this._time;

	        this._pausedTime;

	        this._pauseStart;

	        this._paused = false;

	        Dispatcher.call(this);
	    };

	    Animation.prototype = {

	        constructor: Animation,
	        /**
	         * 添加 clip
	         * @param {module:zrender/animation/Clip} clip
	         */
	        addClip: function (clip) {
	            this._clips.push(clip);
	        },
	        /**
	         * 添加 animator
	         * @param {module:zrender/animation/Animator} animator
	         */
	        addAnimator: function (animator) {
	            animator.animation = this;
	            var clips = animator.getClips();
	            for (var i = 0; i < clips.length; i++) {
	                this.addClip(clips[i]);
	            }
	        },
	        /**
	         * 删除动画片段
	         * @param {module:zrender/animation/Clip} clip
	         */
	        removeClip: function(clip) {
	            var idx = util.indexOf(this._clips, clip);
	            if (idx >= 0) {
	                this._clips.splice(idx, 1);
	            }
	        },

	        /**
	         * 删除动画片段
	         * @param {module:zrender/animation/Animator} animator
	         */
	        removeAnimator: function (animator) {
	            var clips = animator.getClips();
	            for (var i = 0; i < clips.length; i++) {
	                this.removeClip(clips[i]);
	            }
	            animator.animation = null;
	        },

	        _update: function() {

	            var time = new Date().getTime() - this._pausedTime;
	            var delta = time - this._time;
	            var clips = this._clips;
	            var len = clips.length;

	            var deferredEvents = [];
	            var deferredClips = [];
	            for (var i = 0; i < len; i++) {
	                var clip = clips[i];
	                var e = clip.step(time);
	                // Throw out the events need to be called after
	                // stage.update, like destroy
	                if (e) {
	                    deferredEvents.push(e);
	                    deferredClips.push(clip);
	                }
	            }

	            // Remove the finished clip
	            for (var i = 0; i < len;) {
	                if (clips[i]._needsRemove) {
	                    clips[i] = clips[len - 1];
	                    clips.pop();
	                    len--;
	                }
	                else {
	                    i++;
	                }
	            }

	            len = deferredEvents.length;
	            for (var i = 0; i < len; i++) {
	                deferredClips[i].fire(deferredEvents[i]);
	            }

	            this._time = time;

	            this.onframe(delta);

	            this.trigger('frame', delta);

	            if (this.stage.update) {
	                this.stage.update();
	            }
	        },

	        _startLoop: function () {
	            var self = this;

	            this._running = true;

	            function step() {
	                if (self._running) {

	                    requestAnimationFrame(step);

	                    !self._paused && self._update();
	                }
	            }

	            requestAnimationFrame(step);
	        },

	        /**
	         * 开始运行动画
	         */
	        start: function () {

	            this._time = new Date().getTime();
	            this._pausedTime = 0;

	            this._startLoop();
	        },
	        /**
	         * 停止运行动画
	         */
	        stop: function () {
	            this._running = false;
	        },

	        /**
	         * Pause
	         */
	        pause: function () {
	            if (!this._paused) {
	                this._pauseStart = new Date().getTime();
	                this._paused = true;
	            }
	        },

	        /**
	         * Resume
	         */
	        resume: function () {
	            if (this._paused) {
	                this._pausedTime += (new Date().getTime()) - this._pauseStart;
	                this._paused = false;
	            }
	        },

	        /**
	         * 清除所有动画片段
	         */
	        clear: function () {
	            this._clips = [];
	        },
	        /**
	         * 对一个目标创建一个animator对象，可以指定目标中的属性使用动画
	         * @param  {Object} target
	         * @param  {Object} options
	         * @param  {boolean} [options.loop=false] 是否循环播放动画
	         * @param  {Function} [options.getter=null]
	         *         如果指定getter函数，会通过getter函数取属性值
	         * @param  {Function} [options.setter=null]
	         *         如果指定setter函数，会通过setter函数设置属性值
	         * @return {module:zrender/animation/Animation~Animator}
	         */
	        // TODO Gap
	        animate: function (target, options) {
	            options = options || {};

	            var animator = new Animator(
	                target,
	                options.loop,
	                options.getter,
	                options.setter
	            );

	            this.addAnimator(animator);

	            return animator;
	        }
	    };

	    util.mixin(Animation, Dispatcher);

	    module.exports = Animation;



/***/ },

/***/ 247:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * 事件辅助类
	 * @module zrender/core/event
	 * @author Kener (@Kener-林峰, kener.linfeng@gmail.com)
	 */


	    var Eventful = __webpack_require__(215);
	    var env = __webpack_require__(77);

	    var isDomLevel2 = (typeof window !== 'undefined') && !!window.addEventListener;

	    function getBoundingClientRect(el) {
	        // BlackBerry 5, iOS 3 (original iPhone) don't have getBoundingRect
	        return el.getBoundingClientRect ? el.getBoundingClientRect() : {left: 0, top: 0};
	    }

	    // `calculate` is optional, default false
	    function clientToLocal(el, e, out, calculate) {
	        out = out || {};

	        // According to the W3C Working Draft, offsetX and offsetY should be relative
	        // to the padding edge of the target element. The only browser using this convention
	        // is IE. Webkit uses the border edge, Opera uses the content edge, and FireFox does
	        // not support the properties.
	        // (see http://www.jacklmoore.com/notes/mouse-position/)
	        // In zr painter.dom, padding edge equals to border edge.

	        // FIXME
	        // When mousemove event triggered on ec tooltip, target is not zr painter.dom, and
	        // offsetX/Y is relative to e.target, where the calculation of zrX/Y via offsetX/Y
	        // is too complex. So css-transfrom dont support in this case temporarily.
	        if (calculate || !env.canvasSupported) {
	            defaultGetZrXY(el, e, out);
	        }
	        // Caution: In FireFox, layerX/layerY Mouse position relative to the closest positioned
	        // ancestor element, so we should make sure el is positioned (e.g., not position:static).
	        // BTW1, Webkit don't return the same results as FF in non-simple cases (like add
	        // zoom-factor, overflow / opacity layers, transforms ...)
	        // BTW2, (ev.offsetY || ev.pageY - $(ev.target).offset().top) is not correct in preserve-3d.
	        // <https://bugs.jquery.com/ticket/8523#comment:14>
	        // BTW3, In ff, offsetX/offsetY is always 0.
	        else if (env.browser.firefox && e.layerX != null && e.layerX !== e.offsetX) {
	            out.zrX = e.layerX;
	            out.zrY = e.layerY;
	        }
	        // For IE6+, chrome, safari, opera. (When will ff support offsetX?)
	        else if (e.offsetX != null) {
	            out.zrX = e.offsetX;
	            out.zrY = e.offsetY;
	        }
	        // For some other device, e.g., IOS safari.
	        else {
	            defaultGetZrXY(el, e, out);
	        }

	        return out;
	    }

	    function defaultGetZrXY(el, e, out) {
	        // This well-known method below does not support css transform.
	        var box = getBoundingClientRect(el);
	        out.zrX = e.clientX - box.left;
	        out.zrY = e.clientY - box.top;
	    }

	    /**
	     * 如果存在第三方嵌入的一些dom触发的事件，或touch事件，需要转换一下事件坐标.
	     * `calculate` is optional, default false.
	     */
	    function normalizeEvent(el, e, calculate) {

	        e = e || window.event;

	        if (e.zrX != null) {
	            return e;
	        }

	        var eventType = e.type;
	        var isTouch = eventType && eventType.indexOf('touch') >= 0;

	        if (!isTouch) {
	            clientToLocal(el, e, e, calculate);
	            e.zrDelta = (e.wheelDelta) ? e.wheelDelta / 120 : -(e.detail || 0) / 3;
	        }
	        else {
	            var touch = eventType != 'touchend'
	                ? e.targetTouches[0]
	                : e.changedTouches[0];
	            touch && clientToLocal(el, touch, e, calculate);
	        }

	        return e;
	    }

	    function addEventListener(el, name, handler) {
	        if (isDomLevel2) {
	            el.addEventListener(name, handler);
	        }
	        else {
	            el.attachEvent('on' + name, handler);
	        }
	    }

	    function removeEventListener(el, name, handler) {
	        if (isDomLevel2) {
	            el.removeEventListener(name, handler);
	        }
	        else {
	            el.detachEvent('on' + name, handler);
	        }
	    }

	    /**
	     * preventDefault and stopPropagation.
	     * Notice: do not do that in zrender. Upper application
	     * do that if necessary.
	     *
	     * @memberOf module:zrender/core/event
	     * @method
	     * @param {Event} e : event对象
	     */
	    var stop = isDomLevel2
	        ? function (e) {
	            e.preventDefault();
	            e.stopPropagation();
	            e.cancelBubble = true;
	        }
	        : function (e) {
	            e.returnValue = false;
	            e.cancelBubble = true;
	        };

	    module.exports = {
	        clientToLocal: clientToLocal,
	        normalizeEvent: normalizeEvent,
	        addEventListener: addEventListener,
	        removeEventListener: removeEventListener,

	        stop: stop,
	        // 做向上兼容
	        Dispatcher: Eventful
	    };



/***/ },

/***/ 248:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * 矩形
	 * @module zrender/graphic/shape/Rect
	 */


	    var roundRectHelper = __webpack_require__(1045);

	    module.exports = __webpack_require__(70).extend({

	        type: 'rect',

	        shape: {
	            // 左上、右上、右下、左下角的半径依次为r1、r2、r3、r4
	            // r缩写为1         相当于 [1, 1, 1, 1]
	            // r缩写为[1]       相当于 [1, 1, 1, 1]
	            // r缩写为[1, 2]    相当于 [1, 2, 1, 2]
	            // r缩写为[1, 2, 3] 相当于 [1, 2, 3, 2]
	            r: 0,

	            x: 0,
	            y: 0,
	            width: 0,
	            height: 0
	        },

	        buildPath: function (ctx, shape) {
	            var x = shape.x;
	            var y = shape.y;
	            var width = shape.width;
	            var height = shape.height;
	            if (!shape.r) {
	                ctx.rect(x, y, width, height);
	            }
	            else {
	                roundRectHelper.buildPath(ctx, shape);
	            }
	            ctx.closePath();
	            return;
	        }
	    });



/***/ },

/***/ 249:
/***/ function(module, exports, __webpack_require__) {

	
	    __webpack_require__(1055);
	    __webpack_require__(216).registerPainter('vml', __webpack_require__(1054));


/***/ },

/***/ 295:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.compilePattern = compilePattern;
	exports.matchPattern = matchPattern;
	exports.getParamNames = getParamNames;
	exports.getParams = getParams;
	exports.formatPattern = formatPattern;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(75);

	var _invariant2 = _interopRequireDefault(_invariant);

	function escapeRegExp(string) {
	  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	}

	function escapeSource(string) {
	  return escapeRegExp(string).replace(/\/+/g, '/+');
	}

	function _compilePattern(pattern) {
	  var regexpSource = '';
	  var paramNames = [];
	  var tokens = [];

	  var match = undefined,
	      lastIndex = 0,
	      matcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|\*\*|\*|\(|\)/g;
	  while (match = matcher.exec(pattern)) {
	    if (match.index !== lastIndex) {
	      tokens.push(pattern.slice(lastIndex, match.index));
	      regexpSource += escapeSource(pattern.slice(lastIndex, match.index));
	    }

	    if (match[1]) {
	      regexpSource += '([^/?#]+)';
	      paramNames.push(match[1]);
	    } else if (match[0] === '**') {
	      regexpSource += '([\\s\\S]*)';
	      paramNames.push('splat');
	    } else if (match[0] === '*') {
	      regexpSource += '([\\s\\S]*?)';
	      paramNames.push('splat');
	    } else if (match[0] === '(') {
	      regexpSource += '(?:';
	    } else if (match[0] === ')') {
	      regexpSource += ')?';
	    }

	    tokens.push(match[0]);

	    lastIndex = matcher.lastIndex;
	  }

	  if (lastIndex !== pattern.length) {
	    tokens.push(pattern.slice(lastIndex, pattern.length));
	    regexpSource += escapeSource(pattern.slice(lastIndex, pattern.length));
	  }

	  return {
	    pattern: pattern,
	    regexpSource: regexpSource,
	    paramNames: paramNames,
	    tokens: tokens
	  };
	}

	var CompiledPatternsCache = {};

	function compilePattern(pattern) {
	  if (!(pattern in CompiledPatternsCache)) CompiledPatternsCache[pattern] = _compilePattern(pattern);

	  return CompiledPatternsCache[pattern];
	}

	/**
	 * Attempts to match a pattern on the given pathname. Patterns may use
	 * the following special characters:
	 *
	 * - :paramName     Matches a URL segment up to the next /, ?, or #. The
	 *                  captured string is considered a "param"
	 * - ()             Wraps a segment of the URL that is optional
	 * - *              Consumes (non-greedy) all characters up to the next
	 *                  character in the pattern, or to the end of the URL if
	 *                  there is none
	 * - **             Consumes (greedy) all characters up to the next character
	 *                  in the pattern, or to the end of the URL if there is none
	 *
	 * The return value is an object with the following properties:
	 *
	 * - remainingPathname
	 * - paramNames
	 * - paramValues
	 */

	function matchPattern(pattern, pathname) {
	  // Make leading slashes consistent between pattern and pathname.
	  if (pattern.charAt(0) !== '/') {
	    pattern = '/' + pattern;
	  }
	  if (pathname.charAt(0) !== '/') {
	    pathname = '/' + pathname;
	  }

	  var _compilePattern2 = compilePattern(pattern);

	  var regexpSource = _compilePattern2.regexpSource;
	  var paramNames = _compilePattern2.paramNames;
	  var tokens = _compilePattern2.tokens;

	  regexpSource += '/*'; // Capture path separators

	  // Special-case patterns like '*' for catch-all routes.
	  var captureRemaining = tokens[tokens.length - 1] !== '*';

	  if (captureRemaining) {
	    // This will match newlines in the remaining path.
	    regexpSource += '([\\s\\S]*?)';
	  }

	  var match = pathname.match(new RegExp('^' + regexpSource + '$', 'i'));

	  var remainingPathname = undefined,
	      paramValues = undefined;
	  if (match != null) {
	    if (captureRemaining) {
	      remainingPathname = match.pop();
	      var matchedPath = match[0].substr(0, match[0].length - remainingPathname.length);

	      // If we didn't match the entire pathname, then make sure that the match
	      // we did get ends at a path separator (potentially the one we added
	      // above at the beginning of the path, if the actual match was empty).
	      if (remainingPathname && matchedPath.charAt(matchedPath.length - 1) !== '/') {
	        return {
	          remainingPathname: null,
	          paramNames: paramNames,
	          paramValues: null
	        };
	      }
	    } else {
	      // If this matched at all, then the match was the entire pathname.
	      remainingPathname = '';
	    }

	    paramValues = match.slice(1).map(function (v) {
	      return v != null ? decodeURIComponent(v) : v;
	    });
	  } else {
	    remainingPathname = paramValues = null;
	  }

	  return {
	    remainingPathname: remainingPathname,
	    paramNames: paramNames,
	    paramValues: paramValues
	  };
	}

	function getParamNames(pattern) {
	  return compilePattern(pattern).paramNames;
	}

	function getParams(pattern, pathname) {
	  var _matchPattern = matchPattern(pattern, pathname);

	  var paramNames = _matchPattern.paramNames;
	  var paramValues = _matchPattern.paramValues;

	  if (paramValues != null) {
	    return paramNames.reduce(function (memo, paramName, index) {
	      memo[paramName] = paramValues[index];
	      return memo;
	    }, {});
	  }

	  return null;
	}

	/**
	 * Returns a version of the given pattern with params interpolated. Throws
	 * if there is a dynamic segment of the pattern for which there is no param.
	 */

	function formatPattern(pattern, params) {
	  params = params || {};

	  var _compilePattern3 = compilePattern(pattern);

	  var tokens = _compilePattern3.tokens;

	  var parenCount = 0,
	      pathname = '',
	      splatIndex = 0;

	  var token = undefined,
	      paramName = undefined,
	      paramValue = undefined;
	  for (var i = 0, len = tokens.length; i < len; ++i) {
	    token = tokens[i];

	    if (token === '*' || token === '**') {
	      paramValue = Array.isArray(params.splat) ? params.splat[splatIndex++] : params.splat;

	      !(paramValue != null || parenCount > 0) ?  true ? _invariant2['default'](false, 'Missing splat #%s for path "%s"', splatIndex, pattern) : _invariant2['default'](false) : undefined;

	      if (paramValue != null) pathname += encodeURI(paramValue);
	    } else if (token === '(') {
	      parenCount += 1;
	    } else if (token === ')') {
	      parenCount -= 1;
	    } else if (token.charAt(0) === ':') {
	      paramName = token.substring(1);
	      paramValue = params[paramName];

	      !(paramValue != null || parenCount > 0) ?  true ? _invariant2['default'](false, 'Missing "%s" parameter for path "%s"', paramName, pattern) : _invariant2['default'](false) : undefined;

	      if (paramValue != null) pathname += encodeURIComponent(paramValue);
	    } else {
	      pathname += token;
	    }
	  }

	  return pathname.replace(/\/+/g, '/');
	}

/***/ },

/***/ 337:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * Path 代理，可以在`buildPath`中用于替代`ctx`, 会保存每个path操作的命令到pathCommands属性中
	 * 可以用于 isInsidePath 判断以及获取boundingRect
	 *
	 * @module zrender/core/PathProxy
	 * @author Yi Shen (http://www.github.com/pissang)
	 */

	 // TODO getTotalLength, getPointAtLength


	    var curve = __webpack_require__(166);
	    var vec2 = __webpack_require__(34);
	    var bbox = __webpack_require__(687);
	    var BoundingRect = __webpack_require__(62);
	    var dpr = __webpack_require__(413).devicePixelRatio;

	    var CMD = {
	        M: 1,
	        L: 2,
	        C: 3,
	        Q: 4,
	        A: 5,
	        Z: 6,
	        // Rect
	        R: 7
	    };

	    var min = [];
	    var max = [];
	    var min2 = [];
	    var max2 = [];
	    var mathMin = Math.min;
	    var mathMax = Math.max;
	    var mathCos = Math.cos;
	    var mathSin = Math.sin;
	    var mathSqrt = Math.sqrt;
	    var mathAbs = Math.abs;

	    var hasTypedArray = typeof Float32Array != 'undefined';

	    /**
	     * @alias module:zrender/core/PathProxy
	     * @constructor
	     */
	    var PathProxy = function () {

	        /**
	         * Path data. Stored as flat array
	         * @type {Array.<Object>}
	         */
	        this.data = [];

	        this._len = 0;

	        this._ctx = null;

	        this._xi = 0;
	        this._yi = 0;

	        this._x0 = 0;
	        this._y0 = 0;

	        // Unit x, Unit y. Provide for avoiding drawing that too short line segment
	        this._ux = 0;
	        this._uy = 0;
	    };

	    /**
	     * 快速计算Path包围盒（并不是最小包围盒）
	     * @return {Object}
	     */
	    PathProxy.prototype = {

	        constructor: PathProxy,

	        _lineDash: null,

	        _dashOffset: 0,

	        _dashIdx: 0,

	        _dashSum: 0,

	        /**
	         * @readOnly
	         */
	        setScale: function (sx, sy) {
	            this._ux = mathAbs(1 / dpr / sx) || 0;
	            this._uy = mathAbs(1 / dpr / sy) || 0;
	        },

	        getContext: function () {
	            return this._ctx;
	        },

	        /**
	         * @param  {CanvasRenderingContext2D} ctx
	         * @return {module:zrender/core/PathProxy}
	         */
	        beginPath: function (ctx) {

	            this._ctx = ctx;

	            ctx && ctx.beginPath();

	            ctx && (this.dpr = ctx.dpr);

	            // Reset
	            this._len = 0;

	            if (this._lineDash) {
	                this._lineDash = null;

	                this._dashOffset = 0;
	            }

	            return this;
	        },

	        /**
	         * @param  {number} x
	         * @param  {number} y
	         * @return {module:zrender/core/PathProxy}
	         */
	        moveTo: function (x, y) {
	            this.addData(CMD.M, x, y);
	            this._ctx && this._ctx.moveTo(x, y);

	            // x0, y0, xi, yi 是记录在 _dashedXXXXTo 方法中使用
	            // xi, yi 记录当前点, x0, y0 在 closePath 的时候回到起始点。
	            // 有可能在 beginPath 之后直接调用 lineTo，这时候 x0, y0 需要
	            // 在 lineTo 方法中记录，这里先不考虑这种情况，dashed line 也只在 IE10- 中不支持
	            this._x0 = x;
	            this._y0 = y;

	            this._xi = x;
	            this._yi = y;

	            return this;
	        },

	        /**
	         * @param  {number} x
	         * @param  {number} y
	         * @return {module:zrender/core/PathProxy}
	         */
	        lineTo: function (x, y) {
	            var exceedUnit = mathAbs(x - this._xi) > this._ux
	                || mathAbs(y - this._yi) > this._uy
	                // Force draw the first segment
	                || this._len < 5;

	            this.addData(CMD.L, x, y);

	            if (this._ctx && exceedUnit) {
	                this._needsDash() ? this._dashedLineTo(x, y)
	                    : this._ctx.lineTo(x, y);
	            }
	            if (exceedUnit) {
	                this._xi = x;
	                this._yi = y;
	            }

	            return this;
	        },

	        /**
	         * @param  {number} x1
	         * @param  {number} y1
	         * @param  {number} x2
	         * @param  {number} y2
	         * @param  {number} x3
	         * @param  {number} y3
	         * @return {module:zrender/core/PathProxy}
	         */
	        bezierCurveTo: function (x1, y1, x2, y2, x3, y3) {
	            this.addData(CMD.C, x1, y1, x2, y2, x3, y3);
	            if (this._ctx) {
	                this._needsDash() ? this._dashedBezierTo(x1, y1, x2, y2, x3, y3)
	                    : this._ctx.bezierCurveTo(x1, y1, x2, y2, x3, y3);
	            }
	            this._xi = x3;
	            this._yi = y3;
	            return this;
	        },

	        /**
	         * @param  {number} x1
	         * @param  {number} y1
	         * @param  {number} x2
	         * @param  {number} y2
	         * @return {module:zrender/core/PathProxy}
	         */
	        quadraticCurveTo: function (x1, y1, x2, y2) {
	            this.addData(CMD.Q, x1, y1, x2, y2);
	            if (this._ctx) {
	                this._needsDash() ? this._dashedQuadraticTo(x1, y1, x2, y2)
	                    : this._ctx.quadraticCurveTo(x1, y1, x2, y2);
	            }
	            this._xi = x2;
	            this._yi = y2;
	            return this;
	        },

	        /**
	         * @param  {number} cx
	         * @param  {number} cy
	         * @param  {number} r
	         * @param  {number} startAngle
	         * @param  {number} endAngle
	         * @param  {boolean} anticlockwise
	         * @return {module:zrender/core/PathProxy}
	         */
	        arc: function (cx, cy, r, startAngle, endAngle, anticlockwise) {
	            this.addData(
	                CMD.A, cx, cy, r, r, startAngle, endAngle - startAngle, 0, anticlockwise ? 0 : 1
	            );
	            this._ctx && this._ctx.arc(cx, cy, r, startAngle, endAngle, anticlockwise);

	            this._xi = mathCos(endAngle) * r + cx;
	            this._yi = mathSin(endAngle) * r + cx;
	            return this;
	        },

	        // TODO
	        arcTo: function (x1, y1, x2, y2, radius) {
	            if (this._ctx) {
	                this._ctx.arcTo(x1, y1, x2, y2, radius);
	            }
	            return this;
	        },

	        // TODO
	        rect: function (x, y, w, h) {
	            this._ctx && this._ctx.rect(x, y, w, h);
	            this.addData(CMD.R, x, y, w, h);
	            return this;
	        },

	        /**
	         * @return {module:zrender/core/PathProxy}
	         */
	        closePath: function () {
	            this.addData(CMD.Z);

	            var ctx = this._ctx;
	            var x0 = this._x0;
	            var y0 = this._y0;
	            if (ctx) {
	                this._needsDash() && this._dashedLineTo(x0, y0);
	                ctx.closePath();
	            }

	            this._xi = x0;
	            this._yi = y0;
	            return this;
	        },

	        /**
	         * Context 从外部传入，因为有可能是 rebuildPath 完之后再 fill。
	         * stroke 同样
	         * @param {CanvasRenderingContext2D} ctx
	         * @return {module:zrender/core/PathProxy}
	         */
	        fill: function (ctx) {
	            ctx && ctx.fill();
	            this.toStatic();
	        },

	        /**
	         * @param {CanvasRenderingContext2D} ctx
	         * @return {module:zrender/core/PathProxy}
	         */
	        stroke: function (ctx) {
	            ctx && ctx.stroke();
	            this.toStatic();
	        },

	        /**
	         * 必须在其它绘制命令前调用
	         * Must be invoked before all other path drawing methods
	         * @return {module:zrender/core/PathProxy}
	         */
	        setLineDash: function (lineDash) {
	            if (lineDash instanceof Array) {
	                this._lineDash = lineDash;

	                this._dashIdx = 0;

	                var lineDashSum = 0;
	                for (var i = 0; i < lineDash.length; i++) {
	                    lineDashSum += lineDash[i];
	                }
	                this._dashSum = lineDashSum;
	            }
	            return this;
	        },

	        /**
	         * 必须在其它绘制命令前调用
	         * Must be invoked before all other path drawing methods
	         * @return {module:zrender/core/PathProxy}
	         */
	        setLineDashOffset: function (offset) {
	            this._dashOffset = offset;
	            return this;
	        },

	        /**
	         *
	         * @return {boolean}
	         */
	        len: function () {
	            return this._len;
	        },

	        /**
	         * 直接设置 Path 数据
	         */
	        setData: function (data) {

	            var len = data.length;

	            if (! (this.data && this.data.length == len) && hasTypedArray) {
	                this.data = new Float32Array(len);
	            }

	            for (var i = 0; i < len; i++) {
	                this.data[i] = data[i];
	            }

	            this._len = len;
	        },

	        /**
	         * 添加子路径
	         * @param {module:zrender/core/PathProxy|Array.<module:zrender/core/PathProxy>} path
	         */
	        appendPath: function (path) {
	            if (!(path instanceof Array)) {
	                path = [path];
	            }
	            var len = path.length;
	            var appendSize = 0;
	            var offset = this._len;
	            for (var i = 0; i < len; i++) {
	                appendSize += path[i].len();
	            }
	            if (hasTypedArray && (this.data instanceof Float32Array)) {
	                this.data = new Float32Array(offset + appendSize);
	            }
	            for (var i = 0; i < len; i++) {
	                var appendPathData = path[i].data;
	                for (var k = 0; k < appendPathData.length; k++) {
	                    this.data[offset++] = appendPathData[k];
	                }
	            }
	            this._len = offset;
	        },

	        /**
	         * 填充 Path 数据。
	         * 尽量复用而不申明新的数组。大部分图形重绘的指令数据长度都是不变的。
	         */
	        addData: function (cmd) {
	            var data = this.data;
	            if (this._len + arguments.length > data.length) {
	                // 因为之前的数组已经转换成静态的 Float32Array
	                // 所以不够用时需要扩展一个新的动态数组
	                this._expandData();
	                data = this.data;
	            }
	            for (var i = 0; i < arguments.length; i++) {
	                data[this._len++] = arguments[i];
	            }

	            this._prevCmd = cmd;
	        },

	        _expandData: function () {
	            // Only if data is Float32Array
	            if (!(this.data instanceof Array)) {
	                var newData = [];
	                for (var i = 0; i < this._len; i++) {
	                    newData[i] = this.data[i];
	                }
	                this.data = newData;
	            }
	        },

	        /**
	         * If needs js implemented dashed line
	         * @return {boolean}
	         * @private
	         */
	        _needsDash: function () {
	            return this._lineDash;
	        },

	        _dashedLineTo: function (x1, y1) {
	            var dashSum = this._dashSum;
	            var offset = this._dashOffset;
	            var lineDash = this._lineDash;
	            var ctx = this._ctx;

	            var x0 = this._xi;
	            var y0 = this._yi;
	            var dx = x1 - x0;
	            var dy = y1 - y0;
	            var dist = mathSqrt(dx * dx + dy * dy);
	            var x = x0;
	            var y = y0;
	            var dash;
	            var nDash = lineDash.length;
	            var idx;
	            dx /= dist;
	            dy /= dist;

	            if (offset < 0) {
	                // Convert to positive offset
	                offset = dashSum + offset;
	            }
	            offset %= dashSum;
	            x -= offset * dx;
	            y -= offset * dy;

	            while ((dx > 0 && x <= x1) || (dx < 0 && x >= x1)
	            || (dx == 0 && ((dy > 0 && y <= y1) || (dy < 0 && y >= y1)))) {
	                idx = this._dashIdx;
	                dash = lineDash[idx];
	                x += dx * dash;
	                y += dy * dash;
	                this._dashIdx = (idx + 1) % nDash;
	                // Skip positive offset
	                if ((dx > 0 && x < x0) || (dx < 0 && x > x0) || (dy > 0 && y < y0) || (dy < 0 && y > y0)) {
	                    continue;
	                }
	                ctx[idx % 2 ? 'moveTo' : 'lineTo'](
	                    dx >= 0 ? mathMin(x, x1) : mathMax(x, x1),
	                    dy >= 0 ? mathMin(y, y1) : mathMax(y, y1)
	                );
	            }
	            // Offset for next lineTo
	            dx = x - x1;
	            dy = y - y1;
	            this._dashOffset = -mathSqrt(dx * dx + dy * dy);
	        },

	        // Not accurate dashed line to
	        _dashedBezierTo: function (x1, y1, x2, y2, x3, y3) {
	            var dashSum = this._dashSum;
	            var offset = this._dashOffset;
	            var lineDash = this._lineDash;
	            var ctx = this._ctx;

	            var x0 = this._xi;
	            var y0 = this._yi;
	            var t;
	            var dx;
	            var dy;
	            var cubicAt = curve.cubicAt;
	            var bezierLen = 0;
	            var idx = this._dashIdx;
	            var nDash = lineDash.length;

	            var x;
	            var y;

	            var tmpLen = 0;

	            if (offset < 0) {
	                // Convert to positive offset
	                offset = dashSum + offset;
	            }
	            offset %= dashSum;
	            // Bezier approx length
	            for (t = 0; t < 1; t += 0.1) {
	                dx = cubicAt(x0, x1, x2, x3, t + 0.1)
	                    - cubicAt(x0, x1, x2, x3, t);
	                dy = cubicAt(y0, y1, y2, y3, t + 0.1)
	                    - cubicAt(y0, y1, y2, y3, t);
	                bezierLen += mathSqrt(dx * dx + dy * dy);
	            }

	            // Find idx after add offset
	            for (; idx < nDash; idx++) {
	                tmpLen += lineDash[idx];
	                if (tmpLen > offset) {
	                    break;
	                }
	            }
	            t = (tmpLen - offset) / bezierLen;

	            while (t <= 1) {

	                x = cubicAt(x0, x1, x2, x3, t);
	                y = cubicAt(y0, y1, y2, y3, t);

	                // Use line to approximate dashed bezier
	                // Bad result if dash is long
	                idx % 2 ? ctx.moveTo(x, y)
	                    : ctx.lineTo(x, y);

	                t += lineDash[idx] / bezierLen;

	                idx = (idx + 1) % nDash;
	            }

	            // Finish the last segment and calculate the new offset
	            (idx % 2 !== 0) && ctx.lineTo(x3, y3);
	            dx = x3 - x;
	            dy = y3 - y;
	            this._dashOffset = -mathSqrt(dx * dx + dy * dy);
	        },

	        _dashedQuadraticTo: function (x1, y1, x2, y2) {
	            // Convert quadratic to cubic using degree elevation
	            var x3 = x2;
	            var y3 = y2;
	            x2 = (x2 + 2 * x1) / 3;
	            y2 = (y2 + 2 * y1) / 3;
	            x1 = (this._xi + 2 * x1) / 3;
	            y1 = (this._yi + 2 * y1) / 3;

	            this._dashedBezierTo(x1, y1, x2, y2, x3, y3);
	        },

	        /**
	         * 转成静态的 Float32Array 减少堆内存占用
	         * Convert dynamic array to static Float32Array
	         */
	        toStatic: function () {
	            var data = this.data;
	            if (data instanceof Array) {
	                data.length = this._len;
	                if (hasTypedArray) {
	                    this.data = new Float32Array(data);
	                }
	            }
	        },

	        /**
	         * @return {module:zrender/core/BoundingRect}
	         */
	        getBoundingRect: function () {
	            min[0] = min[1] = min2[0] = min2[1] = Number.MAX_VALUE;
	            max[0] = max[1] = max2[0] = max2[1] = -Number.MAX_VALUE;

	            var data = this.data;
	            var xi = 0;
	            var yi = 0;
	            var x0 = 0;
	            var y0 = 0;

	            for (var i = 0; i < data.length;) {
	                var cmd = data[i++];

	                if (i == 1) {
	                    // 如果第一个命令是 L, C, Q
	                    // 则 previous point 同绘制命令的第一个 point
	                    //
	                    // 第一个命令为 Arc 的情况下会在后面特殊处理
	                    xi = data[i];
	                    yi = data[i + 1];

	                    x0 = xi;
	                    y0 = yi;
	                }

	                switch (cmd) {
	                    case CMD.M:
	                        // moveTo 命令重新创建一个新的 subpath, 并且更新新的起点
	                        // 在 closePath 的时候使用
	                        x0 = data[i++];
	                        y0 = data[i++];
	                        xi = x0;
	                        yi = y0;
	                        min2[0] = x0;
	                        min2[1] = y0;
	                        max2[0] = x0;
	                        max2[1] = y0;
	                        break;
	                    case CMD.L:
	                        bbox.fromLine(xi, yi, data[i], data[i + 1], min2, max2);
	                        xi = data[i++];
	                        yi = data[i++];
	                        break;
	                    case CMD.C:
	                        bbox.fromCubic(
	                            xi, yi, data[i++], data[i++], data[i++], data[i++], data[i], data[i + 1],
	                            min2, max2
	                        );
	                        xi = data[i++];
	                        yi = data[i++];
	                        break;
	                    case CMD.Q:
	                        bbox.fromQuadratic(
	                            xi, yi, data[i++], data[i++], data[i], data[i + 1],
	                            min2, max2
	                        );
	                        xi = data[i++];
	                        yi = data[i++];
	                        break;
	                    case CMD.A:
	                        // TODO Arc 判断的开销比较大
	                        var cx = data[i++];
	                        var cy = data[i++];
	                        var rx = data[i++];
	                        var ry = data[i++];
	                        var startAngle = data[i++];
	                        var endAngle = data[i++] + startAngle;
	                        // TODO Arc 旋转
	                        var psi = data[i++];
	                        var anticlockwise = 1 - data[i++];

	                        if (i == 1) {
	                            // 直接使用 arc 命令
	                            // 第一个命令起点还未定义
	                            x0 = mathCos(startAngle) * rx + cx;
	                            y0 = mathSin(startAngle) * ry + cy;
	                        }

	                        bbox.fromArc(
	                            cx, cy, rx, ry, startAngle, endAngle,
	                            anticlockwise, min2, max2
	                        );

	                        xi = mathCos(endAngle) * rx + cx;
	                        yi = mathSin(endAngle) * ry + cy;
	                        break;
	                    case CMD.R:
	                        x0 = xi = data[i++];
	                        y0 = yi = data[i++];
	                        var width = data[i++];
	                        var height = data[i++];
	                        // Use fromLine
	                        bbox.fromLine(x0, y0, x0 + width, y0 + height, min2, max2);
	                        break;
	                    case CMD.Z:
	                        xi = x0;
	                        yi = y0;
	                        break;
	                }

	                // Union
	                vec2.min(min, min, min2);
	                vec2.max(max, max, max2);
	            }

	            // No data
	            if (i === 0) {
	                min[0] = min[1] = max[0] = max[1] = 0;
	            }

	            return new BoundingRect(
	                min[0], min[1], max[0] - min[0], max[1] - min[1]
	            );
	        },

	        /**
	         * Rebuild path from current data
	         * Rebuild path will not consider javascript implemented line dash.
	         * @param {CanvasRenderingContext} ctx
	         */
	        rebuildPath: function (ctx) {
	            var d = this.data;
	            var x0, y0;
	            var xi, yi;
	            var x, y;
	            var ux = this._ux;
	            var uy = this._uy;
	            var len = this._len;
	            for (var i = 0; i < len;) {
	                var cmd = d[i++];

	                if (i == 1) {
	                    // 如果第一个命令是 L, C, Q
	                    // 则 previous point 同绘制命令的第一个 point
	                    //
	                    // 第一个命令为 Arc 的情况下会在后面特殊处理
	                    xi = d[i];
	                    yi = d[i + 1];

	                    x0 = xi;
	                    y0 = yi;
	                }
	                switch (cmd) {
	                    case CMD.M:
	                        x0 = xi = d[i++];
	                        y0 = yi = d[i++];
	                        ctx.moveTo(xi, yi);
	                        break;
	                    case CMD.L:
	                        x = d[i++];
	                        y = d[i++];
	                        // Not draw too small seg between
	                        if (mathAbs(x - xi) > ux || mathAbs(y - yi) > uy || i === len - 1) {
	                            ctx.lineTo(x, y);
	                            xi = x;
	                            yi = y;
	                        }
	                        break;
	                    case CMD.C:
	                        ctx.bezierCurveTo(
	                            d[i++], d[i++], d[i++], d[i++], d[i++], d[i++]
	                        );
	                        xi = d[i - 2];
	                        yi = d[i - 1];
	                        break;
	                    case CMD.Q:
	                        ctx.quadraticCurveTo(d[i++], d[i++], d[i++], d[i++]);
	                        xi = d[i - 2];
	                        yi = d[i - 1];
	                        break;
	                    case CMD.A:
	                        var cx = d[i++];
	                        var cy = d[i++];
	                        var rx = d[i++];
	                        var ry = d[i++];
	                        var theta = d[i++];
	                        var dTheta = d[i++];
	                        var psi = d[i++];
	                        var fs = d[i++];
	                        var r = (rx > ry) ? rx : ry;
	                        var scaleX = (rx > ry) ? 1 : rx / ry;
	                        var scaleY = (rx > ry) ? ry / rx : 1;
	                        var isEllipse = Math.abs(rx - ry) > 1e-3;
	                        var endAngle = theta + dTheta;
	                        if (isEllipse) {
	                            ctx.translate(cx, cy);
	                            ctx.rotate(psi);
	                            ctx.scale(scaleX, scaleY);
	                            ctx.arc(0, 0, r, theta, endAngle, 1 - fs);
	                            ctx.scale(1 / scaleX, 1 / scaleY);
	                            ctx.rotate(-psi);
	                            ctx.translate(-cx, -cy);
	                        }
	                        else {
	                            ctx.arc(cx, cy, r, theta, endAngle, 1 - fs);
	                        }

	                        if (i == 1) {
	                            // 直接使用 arc 命令
	                            // 第一个命令起点还未定义
	                            x0 = mathCos(theta) * rx + cx;
	                            y0 = mathSin(theta) * ry + cy;
	                        }
	                        xi = mathCos(endAngle) * rx + cx;
	                        yi = mathSin(endAngle) * ry + cy;
	                        break;
	                    case CMD.R:
	                        x0 = xi = d[i];
	                        y0 = yi = d[i + 1];
	                        ctx.rect(d[i++], d[i++], d[i++], d[i++]);
	                        break;
	                    case CMD.Z:
	                        ctx.closePath();
	                        xi = x0;
	                        yi = y0;
	                }
	            }
	        }
	    };

	    PathProxy.CMD = CMD;

	    module.exports = PathProxy;


/***/ },

/***/ 381:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getIterator2 = __webpack_require__(48);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _css = __webpack_require__(73);

	var _table = __webpack_require__(69);

	var _table2 = _interopRequireDefault(_table);

	var _css2 = __webpack_require__(1688);

	var _modal = __webpack_require__(49);

	var _modal2 = _interopRequireDefault(_modal);

	var _css3 = __webpack_require__(30);

	var _button = __webpack_require__(28);

	var _button2 = _interopRequireDefault(_button);

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(6);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(5);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _css4 = __webpack_require__(93);

	var _radio = __webpack_require__(74);

	var _radio2 = _interopRequireDefault(_radio);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _component = __webpack_require__(13);

	var _component2 = _interopRequireDefault(_component);

	var _connectDataSource = __webpack_require__(427);

	var _AiForm = __webpack_require__(36);

	var _AiForm2 = _interopRequireDefault(_AiForm);

	var _zrender = __webpack_require__(216);

	var _zrender2 = _interopRequireDefault(_zrender);

	__webpack_require__(249);

	__webpack_require__(246);

	var _Group = __webpack_require__(145);

	var _Group2 = _interopRequireDefault(_Group);

	var _Rect = __webpack_require__(248);

	var _Rect2 = _interopRequireDefault(_Rect);

	var _Text = __webpack_require__(214);

	var _Text2 = _interopRequireDefault(_Text);

	var _Arrow = __webpack_require__(429);

	var _Arrow2 = _interopRequireDefault(_Arrow);

	var _global = __webpack_require__(15);

	var _history = __webpack_require__(41);

	var _history2 = _interopRequireDefault(_history);

	var _dataList = __webpack_require__(35);

	var _interfaces = __webpack_require__(33);

	var _interfaces2 = _interopRequireDefault(_interfaces);

	var _StepContainerV = __webpack_require__(837);

	var _StepContainerV2 = _interopRequireDefault(_StepContainerV);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * Created by liy on 2016/12/6 0006.
	 */
	var RadioGroup = _radio2["default"].Group;
	//import ZPolygon from 'zrender/lib/graphic/shape/Polygon';

	//import ZLine from 'zrender/lib/graphic/shape/Line';

	var directions = [null, "left", "right", "both"];

	var ConnectDatasource = function (_Component) {
	    (0, _inherits3["default"])(ConnectDatasource, _Component);

	    function ConnectDatasource(props) {
	        (0, _classCallCheck3["default"])(this, ConnectDatasource);

	        var _this = (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));

	        _this.lineMap = {};
	        var state = _global.Global.getState();
	        var lastStepState = state.dataList.wfbdzySjkZyfbStep0 && state.dataList.wfbdzySjkZyfbStep1;
	        if (!lastStepState) {
	            _StepContainerV2["default"].gotoFirst('wfbdzySjkZyfbSteperDemo');
	            return (0, _possibleConstructorReturn3["default"])(_this);
	        }
	        //Global.mark({datalist:{mmmsddd:'1'}})
	        return _this;
	    }

	    ConnectDatasource.prototype.componentDidMount = function componentDidMount() {
	        console.log("page ready");

	        // ----- component init here -----
	        var i = _interfaces2["default"][this.props.getTablesInfo.apiName];
	        var itemInterface = _interfaces2["default"][this.props.configs.apiName];
	        this.props.actions.requestTables(this.props.id, (0, _extends3["default"])({}, i, {
	            body: (0, _extends3["default"])({}, i.body, {
	                id: this.props.glState.dataList[this.props.dataFormTableId].selectedRows[0],
	                page: 0,
	                size: 10
	            })
	        }));
	        this.props.actions.requestDataDir((0, _extends3["default"])({}, itemInterface, {
	            body: (0, _extends3["default"])({}, itemInterface.body, { id: this.props.glState.dataList[this.props.dataFromId].selectedRows[0] })
	        }), this.props.id);
	        this.onResize = this.onResize.bind(this);
	        window.addEventListener('resize', this.onResize);
	    };

	    ConnectDatasource.prototype.onResize = function onResize(e) {
	        this.props.actions.mark(this.props.id, { resize: true });
	        setTimeout(this.props.actions.mark.bind(this, this.props.id, { resize: false }), 1000);
	    };

	    ConnectDatasource.prototype.componentWillUnmount = function componentWillUnmount() {
	        console.log("willUnmount:", this.zr);
	        if (this.zr) this.zr.dispose();
	        window.removeEventListener('resize', this.onResize);
	    };

	    ConnectDatasource.prototype.render = function render() {
	        var _this2 = this;

	        var state = this.props.state;
	        var actions = this.props.actions;
	        var id = this.props.id;
	        var cloumns = [{
	            "title": "数据表名称",
	            "dataIndex": "name"
	        }];
	        var tableTiles = [];
	        if (state && actions && state.requestTables && state.requestTables.data && state.requestTables.data.content) {
	            state.requestTables.data.content.forEach(function (tableTile, key) {
	                tableTiles.push({
	                    key: key,
	                    tableName: tableTile.name
	                });
	            });
	        }
	        var rowSelection = {

	            type: this.props.mode == 'api' ? 'radio' : 'checkbox',
	            onChange: function onChange(selectedRowKeys, selectedRows) {
	                console.log(selectedRowKeys, selectedRows);
	                var tableName = [];
	                selectedRows.forEach(function (item, index) {
	                    tableName.push(item.name);
	                });
	                actions.addTable(id, tableName);
	            }
	        };
	        //多张联合表内容数组
	        // const data = [];
	        var columns = [];
	        var radioStyle = {
	            display: 'block',
	            height: '30px',
	            lineHeight: '30px'
	        };
	        // if(state&&state.tableIds&&state.getContentByTableTile&&state.getContentByTableTile.data){
	        //     state.tableIds.forEach((tableId)=>{
	        //         state.getContentByTableTile.data.forEach((item)=>{
	        //             data.push(
	        //                 //dataItemName: item.dataItemName,
	        //                 //dataItemType: item.dataItemType,
	        //                 //dataLength:item.dataLength,
	        //                 //isChecked:item.isChecked,
	        //                 item.dataName
	        //                 //dataType:item.dataType,
	        //                 //dataSource:item.dataSource
	        //             );
	        //         });
	        //     })
	        // }

	        console.log("render connect");
	        //多张联合表列数组

	        return _react2["default"].createElement(
	            'div',
	            null,
	            state && actions && state.requestTables && state.requestTables.data && state.requestTables.data.content && !state.tableIds && _react2["default"].createElement(
	                'div',
	                { style: { textAlign: 'center', paddingTop: 30 } },
	                _react2["default"].createElement(
	                    _button2["default"],
	                    { type: 'primary', onClick: actions.showDataSourceDlg.bind(this, id, true) },
	                    '\u6DFB\u52A0\u6570\u636E\u8868'
	                )
	            ),
	            state && state.msg && _react2["default"].createElement(
	                _modal2["default"],
	                { title: '\u63D0\u793A', visible: true,
	                    onOk: function () {
	                        actions.mark(id, { msg: null });
	                    }.bind(this),
	                    onCancel: function onCancel() {
	                        actions.mark(id, { msg: null });
	                    }
	                },
	                state.msg
	            ),
	            state && state.showDataSourceDlg && _react2["default"].createElement(
	                _modal2["default"],
	                { title: '\u9009\u62E9\u6570\u636E\u6E90', visible: state.showDataSourceDlg,
	                    onOk: function () {
	                        var result = state.tableIds && state.tableIds.length > 0;
	                        if (result) {
	                            actions.showDataSourceDlg(id, false);
	                            var config = _this2.props.dataSourceApiName;
	                            //config.body = {...config.body,body:{dataSourceId:this.props.glState.dataList[this.props.dataFromId].selectedRows[0]}};
	                            actions.getContentByTableTile(_global.Global.getState().connectDatasource.connectDataSourceDemo.tableIds, _this2.props.glState.dataList[_this2.props.dataFormTableId].selectedRows[0], config, id);
	                        } else {
	                            actions.showDataSourceDlg(id, false);
	                            return;
	                        }
	                    }.bind(this),
	                    onCancel: function onCancel() {
	                        //actions.addTable(id, []);
	                        actions.showDataSourceDlg(id, false);
	                        return;
	                    }
	                },
	                state && actions && state.requestTables && state.requestTables.data && state.requestTables.data.content && _react2["default"].createElement(_table2["default"], { rowSelection: rowSelection, columns: cloumns,
	                    dataSource: _global.Global.getState().dataList.connectDataSourceDemo && _global.Global.getState().dataList.connectDataSourceDemo.tableBodyDataApi.data && _global.Global.getState().dataList.connectDataSourceDemo.tableBodyDataApi.data.content ? _global.Global.getState().dataList.connectDataSourceDemo.tableBodyDataApi.data.content : state.requestTables.data.content,
	                    pagination: {
	                        total: state.requestTables.data.totalElements,
	                        size: state.requestTables.data.totalElements / 10,
	                        pageSize: 10,
	                        onChange: function (current) {
	                            var page1 = current - 1;
	                            _this2.props.actions.requestTableBodyData(_this2.props.id, {
	                                apiName: 'getAddTableData',
	                                body: { id: _global.Global.getState().dataList[_this2.props.dataFormTableId].selectedRows[0] },
	                                page: page1,
	                                size: 10
	                            }, page1);
	                        }.bind(this)
	                    }
	                })
	            ),
	            state && (state.selectFrom && state.selectTo || state.showConnectDlg) && _react2["default"].createElement(
	                _modal2["default"],
	                { title: '\u8FDE\u63A5\u7C7B\u578B', visible: true,
	                    onOk: function () {
	                        actions.showConnectDlg(id, false);
	                        actions.linkData(id);
	                        actions.setLinkType(id, false, state.linkType);
	                        actions.setSelectField(id, null, null);
	                    }.bind(this),
	                    onCancel: function onCancel() {
	                        actions.setSelectField(id, null, null);
	                        actions.showConnectDlg(id, false);
	                    }
	                },
	                _react2["default"].createElement(
	                    RadioGroup,
	                    { onChange: function onChange(e) {
	                            actions.setLinkType(id, true, e.target.value);
	                        }, value: state.linkType != undefined ? state.linkType : 1 },
	                    _react2["default"].createElement(
	                        _radio2["default"],
	                        { style: radioStyle, value: '1' },
	                        '\u5DE6\u8FDE\u63A5'
	                    ),
	                    _react2["default"].createElement(
	                        _radio2["default"],
	                        { style: radioStyle, value: '2' },
	                        '\u53F3\u8FDE\u63A5'
	                    ),
	                    _react2["default"].createElement(
	                        _radio2["default"],
	                        { style: radioStyle, value: '3' },
	                        '\u5185\u8FDE\u63A5'
	                    )
	                )
	            ),
	            state && state.linkdatas && function () {
	                var index = 0;
	                for (var linkId in _this2.lineMap) {
	                    var _line = _this2.lineMap[linkId];
	                    _this2.stage.remove(_line);
	                }
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;

	                try {
	                    for (var _iterator = (0, _getIterator3["default"])(state.linkdatas), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var link = _step.value;

	                        var leftZField = void 0,
	                            rightZField = void 0;
	                        if (link.from.zField.parent.position[0] < link.to.zField.parent.position[0]) {
	                            leftZField = link.from.zField;
	                            rightZField = link.to.zField;
	                        } else {
	                            leftZField = link.to.zField;
	                            rightZField = link.from.zField;
	                        }
	                        if (!_this2.lineMap[link.id]) {
	                            var line = new _Arrow2["default"]({
	                                style: {
	                                    stroke: "#CDCDCD"
	                                },
	                                shape: {
	                                    x1: leftZField.position[0] + leftZField.parent.position[0] + 195,
	                                    y1: leftZField.position[1] + leftZField.parent.position[1] + 7,
	                                    x2: rightZField.position[0] + rightZField.parent.position[0] - 15,
	                                    y2: rightZField.position[1] + rightZField.parent.position[1] + 7,
	                                    direction: directions[link.linkType]
	                                }
	                            });

	                            line.on('mouseover', function (index, e) {
	                                if (_this2.stage.moving) return;
	                                var line = e.target;
	                                line.style.stroke = '#00b3b2';
	                                line.dirty(true);
	                                _this2.editBtns.ignore = false;
	                                _this2.editBtns.position = [-_this2.stage.position[0] + e.offsetX, -_this2.stage.position[1] + e.offsetY + 10];
	                                _this2.editBtns.dirty(true);
	                                _this2.overLink = index;
	                                _this2.overLine = line;
	                            }.bind(_this2, index));

	                            line.on('mouseout', function (index, e) {
	                                var line = e.target;
	                                line.style.stroke = '#CDCDCD';
	                                line.dirty(true);
	                                if (_this2.editTimer) {
	                                    clearTimeout(_this2.editTimer);
	                                }
	                                _this2.editTimer = setTimeout(function () {
	                                    _this2.editBtns.ignore = true;
	                                }, 3000);
	                            }.bind(_this2, index));
	                            _this2.lineMap[link.id] = line;
	                            _this2.stage.addBefore(line, _this2.stage.children()[1]);
	                        } else {
	                            var _line2 = _this2.lineMap[link.id];
	                            _line2.setShape({
	                                x1: leftZField.position[0] + leftZField.parent.position[0] + 195,
	                                y1: leftZField.position[1] + leftZField.parent.position[1] + 7,
	                                x2: rightZField.position[0] + rightZField.parent.position[0] - 15,
	                                y2: rightZField.position[1] + rightZField.parent.position[1] + 7,
	                                direction: directions[link.linkType]
	                            });
	                            _line2.dirty(true);
	                            _this2.stage.addBefore(_line2, _this2.stage.children()[1]);
	                        }
	                        index++;
	                    }
	                } catch (err) {
	                    _didIteratorError = true;
	                    _iteratorError = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion && _iterator["return"]) {
	                            _iterator["return"]();
	                        }
	                    } finally {
	                        if (_didIteratorError) {
	                            throw _iteratorError;
	                        }
	                    }
	                }
	            }.bind(this)(),
	            state && state.tableIds && !state.showDataSourceDlg && state.getContentByTableTile && state.getContentByTableTile.data && _react2["default"].createElement(
	                'div',
	                { id: 'cavas', style: { width: "100%", height: 300 }, ref: function (dom) {
	                        _this2.canvas = dom;
	                        if (_this2.zr || !dom) return; //this.zr.dispose();

	                        var ox = void 0,
	                            oy = void 0,
	                            dx = void 0,
	                            dy = void 0,
	                            mx = void 0,
	                            my = void 0,
	                            ux = void 0,
	                            uy = void 0,
	                            vx = void 0,
	                            vy = void 0,
	                            moveTarget = void 0;
	                        var onMouseDown = function onMouseDown(e) {
	                            moveTarget = e.target.parent;
	                            dx = e.offsetX;
	                            dy = e.offsetY;
	                            ox = moveTarget.position[0];
	                            oy = moveTarget.position[1];
	                            _this2.stage.moving = true;
	                        };
	                        var onMouseMove = function onMouseMove(e) {
	                            if (dx != null) {
	                                mx = e.offsetX;
	                                my = e.offsetY;
	                                vx = mx - dx;
	                                vy = my - dy;
	                                moveTarget.position[0] = ox + vx;
	                                moveTarget.position[1] = oy + vy;
	                                moveTarget.dirty(true);
	                                if (moveTarget.type == "table") {
	                                    //actions.updateLine(id);
	                                    var _iteratorNormalCompletion2 = true;
	                                    var _didIteratorError2 = false;
	                                    var _iteratorError2 = undefined;

	                                    try {
	                                        for (var _iterator2 = (0, _getIterator3["default"])(_this2.props.state.linkdatas), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                                            var link = _step2.value;

	                                            if (_this2.lineMap[link.id]) {
	                                                var leftZField = void 0,
	                                                    rightZField = void 0;
	                                                if (link.from.zField.parent.position[0] < link.to.zField.parent.position[0]) {
	                                                    leftZField = link.from.zField;
	                                                    rightZField = link.to.zField;
	                                                } else {
	                                                    leftZField = link.to.zField;
	                                                    rightZField = link.from.zField;
	                                                }
	                                                var line = _this2.lineMap[link.id];

	                                                line.setShape({
	                                                    x1: leftZField.position[0] + leftZField.parent.position[0] + 195,
	                                                    y1: leftZField.position[1] + leftZField.parent.position[1] + 7,
	                                                    x2: rightZField.position[0] + rightZField.parent.position[0] - 15,
	                                                    y2: rightZField.position[1] + rightZField.parent.position[1] + 7
	                                                });
	                                                line.dirty(true);
	                                            }
	                                        }
	                                    } catch (err) {
	                                        _didIteratorError2 = true;
	                                        _iteratorError2 = err;
	                                    } finally {
	                                        try {
	                                            if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
	                                                _iterator2["return"]();
	                                            }
	                                        } finally {
	                                            if (_didIteratorError2) {
	                                                throw _iteratorError2;
	                                            }
	                                        }
	                                    }
	                                }
	                            }
	                        };
	                        var onMouseUp = function onMouseUp() {
	                            dx = dy = null;
	                            _this2.stage.moving = false;
	                        };
	                        var onMouseOut = function onMouseOut(e) {
	                            /* if(e.target == this.zr){
	                             dx = dy = null;
	                             } */
	                        };

	                        var zr = _this2.zr = _zrender2["default"].init(dom);
	                        var stage = _this2.stage = new _Group2["default"]({
	                            position: [10, 10]
	                        });
	                        var bg = new _Rect2["default"]({
	                            position: [-100000, -100000],
	                            shape: {
	                                r: 4,
	                                x: 0,
	                                y: 0,
	                                width: 200000,
	                                height: 200000
	                            },
	                            style: {
	                                fill: "#fff",
	                                stroke: '#D2D2D2',
	                                lineWidth: 1
	                            }
	                        });
	                        bg.on('mousedown', onMouseDown);
	                        //bg.on('mousemove',onMouseMove);
	                        stage.add(bg);

	                        var editBtns = _this2.editBtns = new _Group2["default"]({
	                            ignore: true
	                        });

	                        editBtns.on('mouseover', function () {
	                            if (this.editTimer) {
	                                clearTimeout(this.editTimer);
	                            }
	                            this.overLine.style.stroke = '#00b3b2';
	                            this.overLine.dirty(true);
	                        }.bind(_this2));
	                        editBtns.on('mouseout', function (e) {
	                            var rect = this.editBtns.getBoundingRect();
	                            var x = -this.stage.position[0] + e.offsetX - this.editBtns.position[0];
	                            var y = -this.stage.position[1] + e.offsetY - this.editBtns.position[1];
	                            if (!rect.contain(x, y)) {
	                                this.editBtns.ignore = true;
	                                this.overLine.style.stroke = '#CDCDCD';
	                                this.overLine.dirty(true);
	                                this.editBtns.dirty(true);
	                            }
	                        }.bind(_this2));

	                        var editBg = new _Rect2["default"]({
	                            position: [-50, 0],
	                            shape: {
	                                r: 4,
	                                x: 0,
	                                y: 0,
	                                width: 100,
	                                height: 26
	                            },
	                            style: {
	                                fill: "#ffffff",
	                                stroke: null,
	                                lineWidth: 0
	                            },
	                            name: 'editBg'
	                        });
	                        editBtns.add(editBg);

	                        var editBtn = new _Rect2["default"]({
	                            position: [-45, 0],
	                            shape: {
	                                r: 4,
	                                x: 0,
	                                y: 0,
	                                width: 40,
	                                height: 26
	                            },
	                            style: {
	                                fill: "#fff",
	                                stroke: '#D2D2D2',
	                                lineWidth: 1,
	                                text: '编辑'
	                            }
	                        });
	                        editBtn.on('click', function () {
	                            actions.mark(id, {
	                                currentLink: _this2.overLink,
	                                linkType: _this2.props.state.linkdatas[_this2.overLink].linkType,
	                                showConnectDlg: true
	                            });
	                            _this2.editBtns.hide();
	                        }.bind(_this2));
	                        editBtns.add(editBtn);

	                        var delBtn = new _Rect2["default"]({
	                            position: [5, 0],
	                            shape: {
	                                r: 4,
	                                x: 0,
	                                y: 0,
	                                width: 40,
	                                height: 26
	                            },
	                            style: {
	                                fill: "#fff",
	                                stroke: '#D2D2D2',
	                                lineWidth: 1,
	                                text: '删除'
	                            }
	                        });
	                        delBtn.on('click', function () {
	                            actions.mark(id, { currentLink: _this2.overLink });
	                            _this2.editBtns.hide();
	                            actions.delLink(id);
	                        }.bind(_this2));
	                        editBtns.add(delBtn);

	                        state.tableIds.forEach(function (tableId, i) {
	                            var item = state.getContentByTableTile.data;
	                            var tableIdd = tableId;
	                            var group = new _Group2["default"]({
	                                draggable: true,
	                                type: 'table'
	                            });

	                            var rect = new _Rect2["default"]({
	                                position: [0, 25],
	                                shape: {
	                                    r: 2,
	                                    x: 0,
	                                    y: 0,
	                                    width: 200,
	                                    height: 235
	                                },
	                                style: {
	                                    fill: "#fff",
	                                    stroke: '#D2D2D2',
	                                    lineWidth: 1
	                                }
	                            });
	                            group.add(rect);

	                            var text = new _Text2["default"]({
	                                position: [100, 0],
	                                style: {
	                                    x: 0,
	                                    y: 0,
	                                    text: tableId,
	                                    width: 200,
	                                    height: 50,
	                                    fill: '#666666',
	                                    textFont: '18px Microsoft Yahei',
	                                    textBaseline: 'top',
	                                    textAlign: 'center'
	                                }
	                            });

	                            group.add(text);
	                            item.forEach(function (items, j) {
	                                if (tableId == items.tableName) {
	                                    items.tableData.forEach(function (field, i) {
	                                        {/*if (field.columnName == 'pk' || field.columnName == 'PK') {*/}
	                                        {/*return;*/}
	                                        {/*}*/}
	                                        text = new _Text2["default"]({
	                                            position: [10, 30 + 20 * i],
	                                            style: {
	                                                x: 0,
	                                                y: 0,
	                                                text: field.columnCode + "   " + field.type,
	                                                width: 180,
	                                                height: 20,
	                                                fill: field.columnName == 'PK' ? '#ffffff' : '#666666',
	                                                textFont: '14px Microsoft Yahei',
	                                                textBaseline: 'top',
	                                                textAlign: 'left'
	                                            },
	                                            onmousedown: function onmousedown() {
	                                                this.dirty(true);
	                                                actions.setSelectField(id, tableId, field.columnCode, this);
	                                            }
	                                        });
	                                        group.add(text);
	                                    });
	                                }
	                            });
	                            var realHeight = item.length * 20;
	                            if (realHeight > 235) {
	                                rect.setShape({ height: realHeight + 30 });
	                            }

	                            rect.on('mousedown', onMouseDown);
	                            //rect.on('mousemove',onMouseMove);
	                            group.position = [i * 240, 0];
	                            stage.add(group);
	                        });

	                        zr.on('mouseup', onMouseUp);
	                        zr.on('mousemove', onMouseMove);
	                        zr.on('mouseout', onMouseOut);
	                        stage.position[0] = zr.painter._width / 2 - 1 * state.tableIds.length * 220 / 2;
	                        stage.add(editBtns);
	                        zr.add(stage);
	                    }.bind(this) },
	                state && state.resize && function () {
	                    _this2.zr.resize({ width: _this2.canvas.offsetWidth, height: _this2.canvas.offsetHeight });
	                }()
	            ),

	            /**
	             *
	             * <AiFormTable config={{apiName:'aiFormTableDemo',body:{},jsonpArgs:{id:"aFTD",options:["jim","jack","boy"]}}} id="aFTD" />
	             */

	            /* data&&state && state.tableIds && state.requestDataItemContent && state.requestDataItemContent.data && !state.showDataSourceDlg &&
	             <AiForm config={{apiName:'viewTableDemoConfig',jsonpArgs:{"options":data,"dataSource":state.requestDataItemContent.data,"tables":state.requestTables.data,"tableIds":state.tableIds}} }id="viewTableDemo"/>  */

	            state && state.tableIds && state.requestDataItemContent && state.requestDataItemContent.data && !state.showDataSourceDlg && state.getContentByTableTile && state.getContentByTableTile.data && _react2["default"].createElement(_AiForm2["default"], { config: {
	                    apiName: this.props.allConfigs.apiName,
	                    jsonpArgs: {
	                        "options": state.getContentByTableTile.data,
	                        "dataSource": state.requestDataItemContent.data,
	                        "tables": state.requestTables.data,
	                        "tableIds": state.tableIds
	                    }
	                }, id: 'viewTableDemo1' })
	        );
	    };

	    return ConnectDatasource;
	}(_react.Component);

	exports["default"] = (0, _component2["default"])('connectDatasource', {
	    requestTableBodyData: _dataList.requestTableBodyData,
	    getContentByTableTile: _connectDataSource.getContentByTableTile,
	    showDataSourceDlg: _connectDataSource.showDataSourceDlg,
	    setSelectField: _connectDataSource.setSelectField,
	    linkData: _connectDataSource.linkData,
	    setLinkType: _connectDataSource.setLinkType,
	    requestTables: _connectDataSource.requestTables,
	    addTable: _connectDataSource.addTable,
	    requestDataDir: _connectDataSource.requestDataDir,
	    showConnectDlg: _connectDataSource.showConnectDlg,
	    updateLine: _connectDataSource.updateLine,
	    mark: _connectDataSource.mark,
	    delLink: _connectDataSource.delLink
	}, function (state, dispatchProps, ownProps) {
	    return { glState: state };
	})(ConnectDatasource);
	module.exports = exports['default'];

/***/ },

/***/ 413:
/***/ function(module, exports) {

	
	    var dpr = 1;
	    // If in browser environment
	    if (typeof window !== 'undefined') {
	        dpr = Math.max(window.devicePixelRatio || 1, 1);
	    }
	    /**
	     * config默认配置项
	     * @exports zrender/config
	     * @author Kener (@Kener-林峰, kener.linfeng@gmail.com)
	     */
	    var config = {
	        /**
	         * debug日志选项：catchBrushException为true下有效
	         * 0 : 不生成debug数据，发布用
	         * 1 : 异常抛出，调试用
	         * 2 : 控制台输出，调试用
	         */
	        debugMode: 0,

	        // retina 屏幕优化
	        devicePixelRatio: dpr
	    };
	    module.exports = config;




/***/ },

/***/ 414:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * 可绘制的图形基类
	 * Base class of all displayable graphic objects
	 * @module zrender/graphic/Displayable
	 */



	    var zrUtil = __webpack_require__(2);

	    var Style = __webpack_require__(909);

	    var Element = __webpack_require__(898);
	    var RectText = __webpack_require__(911);
	    // var Stateful = require('./mixin/Stateful');

	    /**
	     * @alias module:zrender/graphic/Displayable
	     * @extends module:zrender/Element
	     * @extends module:zrender/graphic/mixin/RectText
	     */
	    function Displayable(opts) {

	        opts = opts || {};

	        Element.call(this, opts);

	        // Extend properties
	        for (var name in opts) {
	            if (
	                opts.hasOwnProperty(name) &&
	                name !== 'style'
	            ) {
	                this[name] = opts[name];
	            }
	        }

	        /**
	         * @type {module:zrender/graphic/Style}
	         */
	        this.style = new Style(opts.style);

	        this._rect = null;
	        // Shapes for cascade clipping.
	        this.__clipPaths = [];

	        // FIXME Stateful must be mixined after style is setted
	        // Stateful.call(this, opts);
	    }

	    Displayable.prototype = {

	        constructor: Displayable,

	        type: 'displayable',

	        /**
	         * Displayable 是否为脏，Painter 中会根据该标记判断是否需要是否需要重新绘制
	         * Dirty flag. From which painter will determine if this displayable object needs brush
	         * @name module:zrender/graphic/Displayable#__dirty
	         * @type {boolean}
	         */
	        __dirty: true,

	        /**
	         * 图形是否可见，为true时不绘制图形，但是仍能触发鼠标事件
	         * If ignore drawing of the displayable object. Mouse event will still be triggered
	         * @name module:/zrender/graphic/Displayable#invisible
	         * @type {boolean}
	         * @default false
	         */
	        invisible: false,

	        /**
	         * @name module:/zrender/graphic/Displayable#z
	         * @type {number}
	         * @default 0
	         */
	        z: 0,

	        /**
	         * @name module:/zrender/graphic/Displayable#z
	         * @type {number}
	         * @default 0
	         */
	        z2: 0,

	        /**
	         * z层level，决定绘画在哪层canvas中
	         * @name module:/zrender/graphic/Displayable#zlevel
	         * @type {number}
	         * @default 0
	         */
	        zlevel: 0,

	        /**
	         * 是否可拖拽
	         * @name module:/zrender/graphic/Displayable#draggable
	         * @type {boolean}
	         * @default false
	         */
	        draggable: false,

	        /**
	         * 是否正在拖拽
	         * @name module:/zrender/graphic/Displayable#draggable
	         * @type {boolean}
	         * @default false
	         */
	        dragging: false,

	        /**
	         * 是否相应鼠标事件
	         * @name module:/zrender/graphic/Displayable#silent
	         * @type {boolean}
	         * @default false
	         */
	        silent: false,

	        /**
	         * If enable culling
	         * @type {boolean}
	         * @default false
	         */
	        culling: false,

	        /**
	         * Mouse cursor when hovered
	         * @name module:/zrender/graphic/Displayable#cursor
	         * @type {string}
	         */
	        cursor: 'pointer',

	        /**
	         * If hover area is bounding rect
	         * @name module:/zrender/graphic/Displayable#rectHover
	         * @type {string}
	         */
	        rectHover: false,

	        /**
	         * Render the element progressively when the value >= 0,
	         * usefull for large data.
	         * @type {number}
	         */
	        progressive: -1,

	        beforeBrush: function (ctx) {},

	        afterBrush: function (ctx) {},

	        /**
	         * 图形绘制方法
	         * @param {Canvas2DRenderingContext} ctx
	         */
	        // Interface
	        brush: function (ctx, prevEl) {},

	        /**
	         * 获取最小包围盒
	         * @return {module:zrender/core/BoundingRect}
	         */
	        // Interface
	        getBoundingRect: function () {},

	        /**
	         * 判断坐标 x, y 是否在图形上
	         * If displayable element contain coord x, y
	         * @param  {number} x
	         * @param  {number} y
	         * @return {boolean}
	         */
	        contain: function (x, y) {
	            return this.rectContain(x, y);
	        },

	        /**
	         * @param  {Function} cb
	         * @param  {}   context
	         */
	        traverse: function (cb, context) {
	            cb.call(context, this);
	        },

	        /**
	         * 判断坐标 x, y 是否在图形的包围盒上
	         * If bounding rect of element contain coord x, y
	         * @param  {number} x
	         * @param  {number} y
	         * @return {boolean}
	         */
	        rectContain: function (x, y) {
	            var coord = this.transformCoordToLocal(x, y);
	            var rect = this.getBoundingRect();
	            return rect.contain(coord[0], coord[1]);
	        },

	        /**
	         * 标记图形元素为脏，并且在下一帧重绘
	         * Mark displayable element dirty and refresh next frame
	         */
	        dirty: function () {
	            this.__dirty = true;

	            this._rect = null;

	            this.__zr && this.__zr.refresh();
	        },

	        /**
	         * 图形是否会触发事件
	         * If displayable object binded any event
	         * @return {boolean}
	         */
	        // TODO, 通过 bind 绑定的事件
	        // isSilent: function () {
	        //     return !(
	        //         this.hoverable || this.draggable
	        //         || this.onmousemove || this.onmouseover || this.onmouseout
	        //         || this.onmousedown || this.onmouseup || this.onclick
	        //         || this.ondragenter || this.ondragover || this.ondragleave
	        //         || this.ondrop
	        //     );
	        // },
	        /**
	         * Alias for animate('style')
	         * @param {boolean} loop
	         */
	        animateStyle: function (loop) {
	            return this.animate('style', loop);
	        },

	        attrKV: function (key, value) {
	            if (key !== 'style') {
	                Element.prototype.attrKV.call(this, key, value);
	            }
	            else {
	                this.style.set(value);
	            }
	        },

	        /**
	         * @param {Object|string} key
	         * @param {*} value
	         */
	        setStyle: function (key, value) {
	            this.style.set(key, value);
	            this.dirty(false);
	            return this;
	        },

	        /**
	         * Use given style object
	         * @param  {Object} obj
	         */
	        useStyle: function (obj) {
	            this.style = new Style(obj);
	            this.dirty(false);
	            return this;
	        }
	    };

	    zrUtil.inherits(Displayable, Element);

	    zrUtil.mixin(Displayable, RectText);
	    // zrUtil.mixin(Displayable, Stateful);

	    module.exports = Displayable;


/***/ },

/***/ 415:
/***/ function(module, exports) {

	

	    /**
	     * @param {Array.<Object>} colorStops
	     */
	    var Gradient = function (colorStops) {

	        this.colorStops = colorStops || [];
	    };

	    Gradient.prototype = {

	        constructor: Gradient,

	        addColorStop: function (offset, color) {
	            this.colorStops.push({

	                offset: offset,

	                color: color
	            });
	        }
	    };

	    module.exports = Gradient;


/***/ },

/***/ 427:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.requestDataDir = exports.getContentByTableTile = exports.delLink = exports.linkData = exports.setLinkType = exports.updateLine = exports.setCurrentLink = exports.setSelectField = exports.showConnectDlg = exports.showDataSourceDlg = exports.addTable = exports.mark = exports.setZrenderState = exports.requestTables = undefined;

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _defineProperty2 = __webpack_require__(7);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _actionType = __webpack_require__(25);

	var Types = _interopRequireWildcard(_actionType);

	var _api = __webpack_require__(40);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * Created by liy on 2016/12/6 0006.
	 */
	var requestTables = exports.requestTables = function requestTables(id, conifg) {
	    var _ref;

	    return _ref = {}, (0, _defineProperty3["default"])(_ref, _api.API, { types: Types.connectDataSource.requestTables, apiConfig: conifg }), (0, _defineProperty3["default"])(_ref, 'id', id), _ref;
	};
	var setZrenderState = exports.setZrenderState = function setZrenderState(id, state) {
	    return {
	        type: Types.connectDataSource.setZrenderState,
	        id: id,
	        zrender: state
	    };
	};
	var mark = exports.mark = function mark(id, _mark) {
	    return (0, _extends3["default"])({
	        type: Types.connectDataSource.mark,
	        id: id
	    }, _mark);
	};

	var addTable = exports.addTable = function addTable(id, tableIds) {
	    return {
	        type: Types.connectDataSource.addTable,
	        id: id,
	        tableIds: tableIds
	    };
	};
	var showDataSourceDlg = exports.showDataSourceDlg = function showDataSourceDlg(id, _showDataSourceDlg) {
	    return {
	        type: Types.connectDataSource.showDataSourceDlg,
	        id: id,
	        showDataSourceDlg: _showDataSourceDlg
	    };
	};
	var showConnectDlg = exports.showConnectDlg = function showConnectDlg(id, _showConnectDlg) {
	    return {
	        type: Types.connectDataSource.showConnectDlg,
	        id: id,
	        showConnectDlg: _showConnectDlg
	    };
	};
	var setSelectField = exports.setSelectField = function setSelectField(id, table, field, zField) {
	    return {
	        type: Types.connectDataSource.setSelectField,
	        id: id,
	        table: table,
	        field: field,
	        zField: zField
	    };
	};
	var setCurrentLink = exports.setCurrentLink = function setCurrentLink(id, index) {
	    return {
	        type: Types.connectDataSource.setCurrentLink,
	        id: id,
	        currentLink: index
	    };
	};
	var updateLine = exports.updateLine = function updateLine(id) {
	    return {
	        type: Types.connectDataSource.updateLine,
	        id: id
	    };
	};
	var setLinkType = exports.setLinkType = function setLinkType(id, isTemp, linkType) {
	    return {
	        type: Types.connectDataSource.setLinkType,
	        id: id,
	        isTemp: isTemp,
	        linkType: linkType

	    };
	};
	var linkData = exports.linkData = function linkData(id, from, to) {
	    return {
	        type: Types.connectDataSource.linkData,
	        from: from,
	        to: to,
	        id: id

	    };
	};
	var delLink = exports.delLink = function delLink(id) {
	    return {
	        type: Types.connectDataSource.delLink,
	        id: id

	    };
	};
	//通过表名来从接口中获取整个表内容的信息
	var getContentByTableTile = exports.getContentByTableTile = function getContentByTableTile(tableTitle, dataSoureId, config, id) {
	    var _ref2;

	    return _ref2 = {}, (0, _defineProperty3["default"])(_ref2, _api.API, { types: Types.connectDataSource.getContentByTableTile, apiConfig: (0, _extends3["default"])({}, config, { body: (0, _extends3["default"])({}, config.body, { datasourceId: dataSoureId, tableName: tableTitle }) }) }), (0, _defineProperty3["default"])(_ref2, 'tableTitle', tableTitle), (0, _defineProperty3["default"])(_ref2, 'dataSource', dataSoureId), (0, _defineProperty3["default"])(_ref2, 'id', id), _ref2;
	};

	//获取数据目录行为
	var requestDataDir = exports.requestDataDir = function requestDataDir(config, id) {
	    var _ref3;

	    return _ref3 = {}, (0, _defineProperty3["default"])(_ref3, _api.API, { types: Types.connectDataSource.requestDataDirApi, apiConfig: config }), (0, _defineProperty3["default"])(_ref3, 'id', id), _ref3;
	};

/***/ },

/***/ 429:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _Path = __webpack_require__(70);

	var _Path2 = _interopRequireDefault(_Path);

	var _vector = __webpack_require__(34);

	var _vector2 = _interopRequireDefault(_vector);

	var _matrix = __webpack_require__(120);

	var _matrix2 = _interopRequireDefault(_matrix);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var createArrow = function createArrow(vec1, vec2, ctx) {
	    var vec = _vector2["default"].sub([], vec2, vec1);
	    var Q = Math.atan2(vec[1], vec[0]);
	    var vec3 = _vector2["default"].create(-5, 5);
	    var vec4 = _vector2["default"].create(-5, -5);
	    var mtx = _matrix2["default"].create();
	    mtx = _matrix2["default"].rotate({}, mtx, -1 * Q);
	    vec3 = _vector2["default"].applyTransform(vec3, vec3, mtx);
	    vec4 = _vector2["default"].applyTransform(vec4, vec4, mtx);
	    var O = _vector2["default"].create(0, 0);
	    mtx = _matrix2["default"].create();
	    mtx = _matrix2["default"].translate(mtx, mtx, vec2);
	    vec3 = _vector2["default"].applyTransform(vec3, vec3, mtx);
	    vec4 = _vector2["default"].applyTransform(vec4, vec4, mtx);

	    ctx.moveTo(vec2[0], vec2[1]);
	    ctx.lineTo(vec3[0], vec3[1]);
	    ctx.moveTo(vec2[0], vec2[1]);
	    ctx.lineTo(vec4[0], vec4[1]);
	};

	var Arrow = _Path2["default"].extend({
	    type: 'arrow',

	    shape: {
	        x1: 0,
	        y1: 0,
	        x2: 0,
	        y2: 0,
	        percent: 1,
	        direction: 'right'
	    },

	    style: {
	        stroke: '#000',
	        fill: null
	    },

	    buildPath: function buildPath(ctx, shape) {
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

	        var vec1 = _vector2["default"].create(x2, y2),
	            vec2 = _vector2["default"].create(x1, y1);

	        if (shape.direction == "right") {
	            createArrow(vec1, vec2, ctx);
	        } else if (shape.direction == "left") {
	            createArrow(vec2, vec1, ctx);
	        } else if (shape.direction == "both") {
	            createArrow(vec1, vec2, ctx);
	            createArrow(vec2, vec1, ctx);
	        } else {
	            //throw new Error('arrow direction invalide');
	        }
	    },

	    /**
	     * Get point at percent
	     * @param  {number} percent
	     * @return {Array.<number>}
	     */
	    pointAt: function pointAt(p) {
	        var shape = this.shape;
	        return [shape.x1 * (1 - p) + shape.x2 * p, shape.y1 * (1 - p) + shape.y2 * p];
	    }
	});

	exports["default"] = Arrow;
	module.exports = exports['default'];

/***/ },

/***/ 433:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"stepNumberLight":"stepNumberLight___3zxHN","stepNameLight":"stepNameLight___23Rh5"};

/***/ },

/***/ 515:
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.loopAsync = loopAsync;
	exports.mapAsync = mapAsync;

	function loopAsync(turns, work, callback) {
	  var currentTurn = 0,
	      isDone = false;

	  function done() {
	    isDone = true;
	    callback.apply(this, arguments);
	  }

	  function next() {
	    if (isDone) return;

	    if (currentTurn < turns) {
	      work.call(this, currentTurn++, next, done);
	    } else {
	      done.apply(this, arguments);
	    }
	  }

	  next();
	}

	function mapAsync(array, work, callback) {
	  var length = array.length;
	  var values = [];

	  if (length === 0) return callback(null, values);

	  var isDone = false,
	      doneCount = 0;

	  function done(index, error, value) {
	    if (isDone) return;

	    if (error) {
	      isDone = true;
	      callback(error);
	    } else {
	      values[index] = value;

	      isDone = ++doneCount === length;

	      if (isDone) callback(null, values);
	    }
	  }

	  array.forEach(function (item, index) {
	    work(item, index, function (error, value) {
	      done(index, error, value);
	    });
	  });
	}

/***/ },

/***/ 516:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _warning = __webpack_require__(50);

	var _warning2 = _interopRequireDefault(_warning);

	var _historyLibActions = __webpack_require__(137);

	var _historyLibUseQueries = __webpack_require__(1018);

	var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);

	var _computeChangedRoutes2 = __webpack_require__(1007);

	var _computeChangedRoutes3 = _interopRequireDefault(_computeChangedRoutes2);

	var _TransitionUtils = __webpack_require__(1006);

	var _isActive2 = __webpack_require__(1010);

	var _isActive3 = _interopRequireDefault(_isActive2);

	var _getComponents = __webpack_require__(1008);

	var _getComponents2 = _interopRequireDefault(_getComponents);

	var _matchRoutes = __webpack_require__(1012);

	var _matchRoutes2 = _interopRequireDefault(_matchRoutes);

	function hasAnyProperties(object) {
	  for (var p in object) {
	    if (object.hasOwnProperty(p)) return true;
	  }return false;
	}

	/**
	 * Returns a new createHistory function that may be used to create
	 * history objects that know about routing.
	 *
	 * Enhances history objects with the following methods:
	 *
	 * - listen((error, nextState) => {})
	 * - listenBeforeLeavingRoute(route, (nextLocation) => {})
	 * - match(location, (error, redirectLocation, nextState) => {})
	 * - isActive(pathname, query, indexOnly=false)
	 */
	function useRoutes(createHistory) {
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var routes = options.routes;

	    var historyOptions = _objectWithoutProperties(options, ['routes']);

	    var history = _historyLibUseQueries2['default'](createHistory)(historyOptions);
	    var state = {};

	    function isActive(pathname, query) {
	      var indexOnly = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

	      return _isActive3['default'](pathname, query, indexOnly, state.location, state.routes, state.params);
	    }

	    function createLocationFromRedirectInfo(_ref) {
	      var pathname = _ref.pathname;
	      var query = _ref.query;
	      var state = _ref.state;

	      return history.createLocation(history.createPath(pathname, query), state, _historyLibActions.REPLACE);
	    }

	    var partialNextState = undefined;

	    function match(location, callback) {
	      if (partialNextState && partialNextState.location === location) {
	        // Continue from where we left off.
	        finishMatch(partialNextState, callback);
	      } else {
	        _matchRoutes2['default'](routes, location, function (error, nextState) {
	          if (error) {
	            callback(error);
	          } else if (nextState) {
	            finishMatch(_extends({}, nextState, { location: location }), callback);
	          } else {
	            callback();
	          }
	        });
	      }
	    }

	    function finishMatch(nextState, callback) {
	      var _computeChangedRoutes = _computeChangedRoutes3['default'](state, nextState);

	      var leaveRoutes = _computeChangedRoutes.leaveRoutes;
	      var enterRoutes = _computeChangedRoutes.enterRoutes;

	      _TransitionUtils.runLeaveHooks(leaveRoutes);

	      _TransitionUtils.runEnterHooks(enterRoutes, nextState, function (error, redirectInfo) {
	        if (error) {
	          callback(error);
	        } else if (redirectInfo) {
	          callback(null, createLocationFromRedirectInfo(redirectInfo));
	        } else {
	          // TODO: Fetch components after state is updated.
	          _getComponents2['default'](nextState, function (error, components) {
	            if (error) {
	              callback(error);
	            } else {
	              // TODO: Make match a pure function and have some other API
	              // for "match and update state".
	              callback(null, null, state = _extends({}, nextState, { components: components }));
	            }
	          });
	        }
	      });
	    }

	    var RouteGuid = 1;

	    function getRouteID(route) {
	      return route.__id__ || (route.__id__ = RouteGuid++);
	    }

	    var RouteHooks = {};

	    function getRouteHooksForRoutes(routes) {
	      return routes.reduce(function (hooks, route) {
	        hooks.push.apply(hooks, RouteHooks[getRouteID(route)]);
	        return hooks;
	      }, []);
	    }

	    function transitionHook(location, callback) {
	      _matchRoutes2['default'](routes, location, function (error, nextState) {
	        if (nextState == null) {
	          // TODO: We didn't actually match anything, but hang
	          // onto error/nextState so we don't have to matchRoutes
	          // again in the listen callback.
	          callback();
	          return;
	        }

	        // Cache some state here so we don't have to
	        // matchRoutes() again in the listen callback.
	        partialNextState = _extends({}, nextState, { location: location });

	        var hooks = getRouteHooksForRoutes(_computeChangedRoutes3['default'](state, partialNextState).leaveRoutes);

	        var result = undefined;
	        for (var i = 0, len = hooks.length; result == null && i < len; ++i) {
	          // Passing the location arg here indicates to
	          // the user that this is a transition hook.
	          result = hooks[i](location);
	        }

	        callback(result);
	      });
	    }

	    function beforeUnloadHook() {
	      // Synchronously check to see if any route hooks want
	      // to prevent the current window/tab from closing.
	      if (state.routes) {
	        var hooks = getRouteHooksForRoutes(state.routes);

	        var message = undefined;
	        for (var i = 0, len = hooks.length; typeof message !== 'string' && i < len; ++i) {
	          // Passing no args indicates to the user that this is a
	          // beforeunload hook. We don't know the next location.
	          message = hooks[i]();
	        }

	        return message;
	      }
	    }

	    var unlistenBefore = undefined,
	        unlistenBeforeUnload = undefined;

	    /**
	     * Registers the given hook function to run before leaving the given route.
	     *
	     * During a normal transition, the hook function receives the next location
	     * as its only argument and must return either a) a prompt message to show
	     * the user, to make sure they want to leave the page or b) false, to prevent
	     * the transition.
	     *
	     * During the beforeunload event (in browsers) the hook receives no arguments.
	     * In this case it must return a prompt message to prevent the transition.
	     *
	     * Returns a function that may be used to unbind the listener.
	     */
	    function listenBeforeLeavingRoute(route, hook) {
	      // TODO: Warn if they register for a route that isn't currently
	      // active. They're probably doing something wrong, like re-creating
	      // route objects on every location change.
	      var routeID = getRouteID(route);
	      var hooks = RouteHooks[routeID];

	      if (hooks == null) {
	        var thereWereNoRouteHooks = !hasAnyProperties(RouteHooks);

	        hooks = RouteHooks[routeID] = [hook];

	        if (thereWereNoRouteHooks) {
	          // setup transition & beforeunload hooks
	          unlistenBefore = history.listenBefore(transitionHook);

	          if (history.listenBeforeUnload) unlistenBeforeUnload = history.listenBeforeUnload(beforeUnloadHook);
	        }
	      } else if (hooks.indexOf(hook) === -1) {
	        hooks.push(hook);
	      }

	      return function () {
	        var hooks = RouteHooks[routeID];

	        if (hooks != null) {
	          var newHooks = hooks.filter(function (item) {
	            return item !== hook;
	          });

	          if (newHooks.length === 0) {
	            delete RouteHooks[routeID];

	            if (!hasAnyProperties(RouteHooks)) {
	              // teardown transition & beforeunload hooks
	              if (unlistenBefore) {
	                unlistenBefore();
	                unlistenBefore = null;
	              }

	              if (unlistenBeforeUnload) {
	                unlistenBeforeUnload();
	                unlistenBeforeUnload = null;
	              }
	            }
	          } else {
	            RouteHooks[routeID] = newHooks;
	          }
	        }
	      };
	    }

	    /**
	     * This is the API for stateful environments. As the location
	     * changes, we update state and call the listener. We can also
	     * gracefully handle errors and redirects.
	     */
	    function listen(listener) {
	      // TODO: Only use a single history listener. Otherwise we'll
	      // end up with multiple concurrent calls to match.
	      return history.listen(function (location) {
	        if (state.location === location) {
	          listener(null, state);
	        } else {
	          match(location, function (error, redirectLocation, nextState) {
	            if (error) {
	              listener(error);
	            } else if (redirectLocation) {
	              history.transitionTo(redirectLocation);
	            } else if (nextState) {
	              listener(null, nextState);
	            } else {
	               true ? _warning2['default'](false, 'Location "%s" did not match any routes', location.pathname + location.search + location.hash) : undefined;
	            }
	          });
	        }
	      });
	    }

	    return _extends({}, history, {
	      isActive: isActive,
	      match: match,
	      listenBeforeLeavingRoute: listenBeforeLeavingRoute,
	      listen: listen
	    });
	  };
	}

	exports['default'] = useRoutes;
	module.exports = exports['default'];

/***/ },

/***/ 687:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @author Yi Shen(https://github.com/pissang)
	 */


	    var vec2 = __webpack_require__(34);
	    var curve = __webpack_require__(166);

	    var bbox = {};
	    var mathMin = Math.min;
	    var mathMax = Math.max;
	    var mathSin = Math.sin;
	    var mathCos = Math.cos;

	    var start = vec2.create();
	    var end = vec2.create();
	    var extremity = vec2.create();

	    var PI2 = Math.PI * 2;
	    /**
	     * 从顶点数组中计算出最小包围盒，写入`min`和`max`中
	     * @module zrender/core/bbox
	     * @param {Array<Object>} points 顶点数组
	     * @param {number} min
	     * @param {number} max
	     */
	    bbox.fromPoints = function(points, min, max) {
	        if (points.length === 0) {
	            return;
	        }
	        var p = points[0];
	        var left = p[0];
	        var right = p[0];
	        var top = p[1];
	        var bottom = p[1];
	        var i;

	        for (i = 1; i < points.length; i++) {
	            p = points[i];
	            left = mathMin(left, p[0]);
	            right = mathMax(right, p[0]);
	            top = mathMin(top, p[1]);
	            bottom = mathMax(bottom, p[1]);
	        }

	        min[0] = left;
	        min[1] = top;
	        max[0] = right;
	        max[1] = bottom;
	    };

	    /**
	     * @memberOf module:zrender/core/bbox
	     * @param {number} x0
	     * @param {number} y0
	     * @param {number} x1
	     * @param {number} y1
	     * @param {Array.<number>} min
	     * @param {Array.<number>} max
	     */
	    bbox.fromLine = function (x0, y0, x1, y1, min, max) {
	        min[0] = mathMin(x0, x1);
	        min[1] = mathMin(y0, y1);
	        max[0] = mathMax(x0, x1);
	        max[1] = mathMax(y0, y1);
	    };

	    var xDim = [];
	    var yDim = [];
	    /**
	     * 从三阶贝塞尔曲线(p0, p1, p2, p3)中计算出最小包围盒，写入`min`和`max`中
	     * @memberOf module:zrender/core/bbox
	     * @param {number} x0
	     * @param {number} y0
	     * @param {number} x1
	     * @param {number} y1
	     * @param {number} x2
	     * @param {number} y2
	     * @param {number} x3
	     * @param {number} y3
	     * @param {Array.<number>} min
	     * @param {Array.<number>} max
	     */
	    bbox.fromCubic = function(
	        x0, y0, x1, y1, x2, y2, x3, y3, min, max
	    ) {
	        var cubicExtrema = curve.cubicExtrema;
	        var cubicAt = curve.cubicAt;
	        var i;
	        var n = cubicExtrema(x0, x1, x2, x3, xDim);
	        min[0] = Infinity;
	        min[1] = Infinity;
	        max[0] = -Infinity;
	        max[1] = -Infinity;

	        for (i = 0; i < n; i++) {
	            var x = cubicAt(x0, x1, x2, x3, xDim[i]);
	            min[0] = mathMin(x, min[0]);
	            max[0] = mathMax(x, max[0]);
	        }
	        n = cubicExtrema(y0, y1, y2, y3, yDim);
	        for (i = 0; i < n; i++) {
	            var y = cubicAt(y0, y1, y2, y3, yDim[i]);
	            min[1] = mathMin(y, min[1]);
	            max[1] = mathMax(y, max[1]);
	        }

	        min[0] = mathMin(x0, min[0]);
	        max[0] = mathMax(x0, max[0]);
	        min[0] = mathMin(x3, min[0]);
	        max[0] = mathMax(x3, max[0]);

	        min[1] = mathMin(y0, min[1]);
	        max[1] = mathMax(y0, max[1]);
	        min[1] = mathMin(y3, min[1]);
	        max[1] = mathMax(y3, max[1]);
	    };

	    /**
	     * 从二阶贝塞尔曲线(p0, p1, p2)中计算出最小包围盒，写入`min`和`max`中
	     * @memberOf module:zrender/core/bbox
	     * @param {number} x0
	     * @param {number} y0
	     * @param {number} x1
	     * @param {number} y1
	     * @param {number} x2
	     * @param {number} y2
	     * @param {Array.<number>} min
	     * @param {Array.<number>} max
	     */
	    bbox.fromQuadratic = function(x0, y0, x1, y1, x2, y2, min, max) {
	        var quadraticExtremum = curve.quadraticExtremum;
	        var quadraticAt = curve.quadraticAt;
	        // Find extremities, where derivative in x dim or y dim is zero
	        var tx =
	            mathMax(
	                mathMin(quadraticExtremum(x0, x1, x2), 1), 0
	            );
	        var ty =
	            mathMax(
	                mathMin(quadraticExtremum(y0, y1, y2), 1), 0
	            );

	        var x = quadraticAt(x0, x1, x2, tx);
	        var y = quadraticAt(y0, y1, y2, ty);

	        min[0] = mathMin(x0, x2, x);
	        min[1] = mathMin(y0, y2, y);
	        max[0] = mathMax(x0, x2, x);
	        max[1] = mathMax(y0, y2, y);
	    };

	    /**
	     * 从圆弧中计算出最小包围盒，写入`min`和`max`中
	     * @method
	     * @memberOf module:zrender/core/bbox
	     * @param {number} x
	     * @param {number} y
	     * @param {number} rx
	     * @param {number} ry
	     * @param {number} startAngle
	     * @param {number} endAngle
	     * @param {number} anticlockwise
	     * @param {Array.<number>} min
	     * @param {Array.<number>} max
	     */
	    bbox.fromArc = function (
	        x, y, rx, ry, startAngle, endAngle, anticlockwise, min, max
	    ) {
	        var vec2Min = vec2.min;
	        var vec2Max = vec2.max;

	        var diff = Math.abs(startAngle - endAngle);


	        if (diff % PI2 < 1e-4 && diff > 1e-4) {
	            // Is a circle
	            min[0] = x - rx;
	            min[1] = y - ry;
	            max[0] = x + rx;
	            max[1] = y + ry;
	            return;
	        }

	        start[0] = mathCos(startAngle) * rx + x;
	        start[1] = mathSin(startAngle) * ry + y;

	        end[0] = mathCos(endAngle) * rx + x;
	        end[1] = mathSin(endAngle) * ry + y;

	        vec2Min(min, start, end);
	        vec2Max(max, start, end);

	        // Thresh to [0, Math.PI * 2]
	        startAngle = startAngle % (PI2);
	        if (startAngle < 0) {
	            startAngle = startAngle + PI2;
	        }
	        endAngle = endAngle % (PI2);
	        if (endAngle < 0) {
	            endAngle = endAngle + PI2;
	        }

	        if (startAngle > endAngle && !anticlockwise) {
	            endAngle += PI2;
	        }
	        else if (startAngle < endAngle && anticlockwise) {
	            startAngle += PI2;
	        }
	        if (anticlockwise) {
	            var tmp = endAngle;
	            endAngle = startAngle;
	            startAngle = tmp;
	        }

	        // var number = 0;
	        // var step = (anticlockwise ? -Math.PI : Math.PI) / 2;
	        for (var angle = 0; angle < endAngle; angle += Math.PI / 2) {
	            if (angle > startAngle) {
	                extremity[0] = mathCos(angle) * rx + x;
	                extremity[1] = mathSin(angle) * ry + y;

	                vec2Min(min, extremity, min);
	                vec2Max(max, extremity, max);
	            }
	        }
	    };

	    module.exports = bbox;



/***/ },

/***/ 688:
/***/ function(module, exports, __webpack_require__) {

	
	        var config = __webpack_require__(413);

	        /**
	         * @exports zrender/tool/log
	         * @author Kener (@Kener-林峰, kener.linfeng@gmail.com)
	         */
	        module.exports = function() {
	            if (config.debugMode === 0) {
	                return;
	            }
	            else if (config.debugMode == 1) {
	                for (var k in arguments) {
	                    throw new Error(arguments[k]);
	                }
	            }
	            else if (config.debugMode > 1) {
	                for (var k in arguments) {
	                    console.log(arguments[k]);
	                }
	            }
	        };

	        /* for debug
	        return function(mes) {
	            document.getElementById('wrong-message').innerHTML =
	                mes + ' ' + (new Date() - 0)
	                + '<br/>'
	                + document.getElementById('wrong-message').innerHTML;
	        };
	        */
	    


/***/ },

/***/ 689:
/***/ function(module, exports) {

	// https://github.com/mziccard/node-timsort

	    var DEFAULT_MIN_MERGE = 32;

	    var DEFAULT_MIN_GALLOPING = 7;

	    var DEFAULT_TMP_STORAGE_LENGTH = 256;

	    function minRunLength(n) {
	        var r = 0;

	        while (n >= DEFAULT_MIN_MERGE) {
	            r |= n & 1;
	            n >>= 1;
	        }

	        return n + r;
	    }

	    function makeAscendingRun(array, lo, hi, compare) {
	        var runHi = lo + 1;

	        if (runHi === hi) {
	            return 1;
	        }

	        if (compare(array[runHi++], array[lo]) < 0) {
	            while (runHi < hi && compare(array[runHi], array[runHi - 1]) < 0) {
	                runHi++;
	            }

	            reverseRun(array, lo, runHi);
	        }
	        else {
	            while (runHi < hi && compare(array[runHi], array[runHi - 1]) >= 0) {
	                runHi++;
	            }
	        }

	        return runHi - lo;
	    }

	    function reverseRun(array, lo, hi) {
	        hi--;

	        while (lo < hi) {
	            var t = array[lo];
	            array[lo++] = array[hi];
	            array[hi--] = t;
	        }
	    }

	    function binaryInsertionSort(array, lo, hi, start, compare) {
	        if (start === lo) {
	            start++;
	        }

	        for (; start < hi; start++) {
	            var pivot = array[start];

	            var left = lo;
	            var right = start;
	            var mid;

	            while (left < right) {
	                mid = left + right >>> 1;

	                if (compare(pivot, array[mid]) < 0) {
	                    right = mid;
	                }
	                else {
	                    left = mid + 1;
	                }
	            }

	            var n = start - left;

	            switch (n) {
	                case 3:
	                    array[left + 3] = array[left + 2];

	                case 2:
	                    array[left + 2] = array[left + 1];

	                case 1:
	                    array[left + 1] = array[left];
	                    break;
	                default:
	                    while (n > 0) {
	                        array[left + n] = array[left + n - 1];
	                        n--;
	                    }
	            }

	            array[left] = pivot;
	        }
	    }

	    function gallopLeft(value, array, start, length, hint, compare) {
	        var lastOffset = 0;
	        var maxOffset = 0;
	        var offset = 1;

	        if (compare(value, array[start + hint]) > 0) {
	            maxOffset = length - hint;

	            while (offset < maxOffset && compare(value, array[start + hint + offset]) > 0) {
	                lastOffset = offset;
	                offset = (offset << 1) + 1;

	                if (offset <= 0) {
	                    offset = maxOffset;
	                }
	            }

	            if (offset > maxOffset) {
	                offset = maxOffset;
	            }

	            lastOffset += hint;
	            offset += hint;
	        }
	        else {
	            maxOffset = hint + 1;
	            while (offset < maxOffset && compare(value, array[start + hint - offset]) <= 0) {
	                lastOffset = offset;
	                offset = (offset << 1) + 1;

	                if (offset <= 0) {
	                    offset = maxOffset;
	                }
	            }
	            if (offset > maxOffset) {
	                offset = maxOffset;
	            }

	            var tmp = lastOffset;
	            lastOffset = hint - offset;
	            offset = hint - tmp;
	        }

	        lastOffset++;
	        while (lastOffset < offset) {
	            var m = lastOffset + (offset - lastOffset >>> 1);

	            if (compare(value, array[start + m]) > 0) {
	                lastOffset = m + 1;
	            }
	            else {
	                offset = m;
	            }
	        }
	        return offset;
	    }

	    function gallopRight(value, array, start, length, hint, compare) {
	        var lastOffset = 0;
	        var maxOffset = 0;
	        var offset = 1;

	        if (compare(value, array[start + hint]) < 0) {
	            maxOffset = hint + 1;

	            while (offset < maxOffset && compare(value, array[start + hint - offset]) < 0) {
	                lastOffset = offset;
	                offset = (offset << 1) + 1;

	                if (offset <= 0) {
	                    offset = maxOffset;
	                }
	            }

	            if (offset > maxOffset) {
	                offset = maxOffset;
	            }

	            var tmp = lastOffset;
	            lastOffset = hint - offset;
	            offset = hint - tmp;
	        }
	        else {
	            maxOffset = length - hint;

	            while (offset < maxOffset && compare(value, array[start + hint + offset]) >= 0) {
	                lastOffset = offset;
	                offset = (offset << 1) + 1;

	                if (offset <= 0) {
	                    offset = maxOffset;
	                }
	            }

	            if (offset > maxOffset) {
	                offset = maxOffset;
	            }

	            lastOffset += hint;
	            offset += hint;
	        }

	        lastOffset++;

	        while (lastOffset < offset) {
	            var m = lastOffset + (offset - lastOffset >>> 1);

	            if (compare(value, array[start + m]) < 0) {
	                offset = m;
	            }
	            else {
	                lastOffset = m + 1;
	            }
	        }

	        return offset;
	    }

	    function TimSort(array, compare) {
	        var minGallop = DEFAULT_MIN_GALLOPING;
	        var length = 0;
	        var tmpStorageLength = DEFAULT_TMP_STORAGE_LENGTH;
	        var stackLength = 0;
	        var runStart;
	        var runLength;
	        var stackSize = 0;

	        length = array.length;

	        if (length < 2 * DEFAULT_TMP_STORAGE_LENGTH) {
	            tmpStorageLength = length >>> 1;
	        }

	        var tmp = [];

	        stackLength = length < 120 ? 5 : length < 1542 ? 10 : length < 119151 ? 19 : 40;

	        runStart = [];
	        runLength = [];

	        function pushRun(_runStart, _runLength) {
	            runStart[stackSize] = _runStart;
	            runLength[stackSize] = _runLength;
	            stackSize += 1;
	        }

	        function mergeRuns() {
	            while (stackSize > 1) {
	                var n = stackSize - 2;

	                if (n >= 1 && runLength[n - 1] <= runLength[n] + runLength[n + 1] || n >= 2 && runLength[n - 2] <= runLength[n] + runLength[n - 1]) {
	                    if (runLength[n - 1] < runLength[n + 1]) {
	                        n--;
	                    }
	                }
	                else if (runLength[n] > runLength[n + 1]) {
	                    break;
	                }
	                mergeAt(n);
	            }
	        }

	        function forceMergeRuns() {
	            while (stackSize > 1) {
	                var n = stackSize - 2;

	                if (n > 0 && runLength[n - 1] < runLength[n + 1]) {
	                    n--;
	                }

	                mergeAt(n);
	            }
	        }

	        function mergeAt(i) {
	            var start1 = runStart[i];
	            var length1 = runLength[i];
	            var start2 = runStart[i + 1];
	            var length2 = runLength[i + 1];

	            runLength[i] = length1 + length2;

	            if (i === stackSize - 3) {
	                runStart[i + 1] = runStart[i + 2];
	                runLength[i + 1] = runLength[i + 2];
	            }

	            stackSize--;

	            var k = gallopRight(array[start2], array, start1, length1, 0, compare);
	            start1 += k;
	            length1 -= k;

	            if (length1 === 0) {
	                return;
	            }

	            length2 = gallopLeft(array[start1 + length1 - 1], array, start2, length2, length2 - 1, compare);

	            if (length2 === 0) {
	                return;
	            }

	            if (length1 <= length2) {
	                mergeLow(start1, length1, start2, length2);
	            }
	            else {
	                mergeHigh(start1, length1, start2, length2);
	            }
	        }

	        function mergeLow(start1, length1, start2, length2) {
	            var i = 0;

	            for (i = 0; i < length1; i++) {
	                tmp[i] = array[start1 + i];
	            }

	            var cursor1 = 0;
	            var cursor2 = start2;
	            var dest = start1;

	            array[dest++] = array[cursor2++];

	            if (--length2 === 0) {
	                for (i = 0; i < length1; i++) {
	                    array[dest + i] = tmp[cursor1 + i];
	                }
	                return;
	            }

	            if (length1 === 1) {
	                for (i = 0; i < length2; i++) {
	                    array[dest + i] = array[cursor2 + i];
	                }
	                array[dest + length2] = tmp[cursor1];
	                return;
	            }

	            var _minGallop = minGallop;
	            var count1, count2, exit;

	            while (1) {
	                count1 = 0;
	                count2 = 0;
	                exit = false;

	                do {
	                    if (compare(array[cursor2], tmp[cursor1]) < 0) {
	                        array[dest++] = array[cursor2++];
	                        count2++;
	                        count1 = 0;

	                        if (--length2 === 0) {
	                            exit = true;
	                            break;
	                        }
	                    }
	                    else {
	                        array[dest++] = tmp[cursor1++];
	                        count1++;
	                        count2 = 0;
	                        if (--length1 === 1) {
	                            exit = true;
	                            break;
	                        }
	                    }
	                } while ((count1 | count2) < _minGallop);

	                if (exit) {
	                    break;
	                }

	                do {
	                    count1 = gallopRight(array[cursor2], tmp, cursor1, length1, 0, compare);

	                    if (count1 !== 0) {
	                        for (i = 0; i < count1; i++) {
	                            array[dest + i] = tmp[cursor1 + i];
	                        }

	                        dest += count1;
	                        cursor1 += count1;
	                        length1 -= count1;
	                        if (length1 <= 1) {
	                            exit = true;
	                            break;
	                        }
	                    }

	                    array[dest++] = array[cursor2++];

	                    if (--length2 === 0) {
	                        exit = true;
	                        break;
	                    }

	                    count2 = gallopLeft(tmp[cursor1], array, cursor2, length2, 0, compare);

	                    if (count2 !== 0) {
	                        for (i = 0; i < count2; i++) {
	                            array[dest + i] = array[cursor2 + i];
	                        }

	                        dest += count2;
	                        cursor2 += count2;
	                        length2 -= count2;

	                        if (length2 === 0) {
	                            exit = true;
	                            break;
	                        }
	                    }
	                    array[dest++] = tmp[cursor1++];

	                    if (--length1 === 1) {
	                        exit = true;
	                        break;
	                    }

	                    _minGallop--;
	                } while (count1 >= DEFAULT_MIN_GALLOPING || count2 >= DEFAULT_MIN_GALLOPING);

	                if (exit) {
	                    break;
	                }

	                if (_minGallop < 0) {
	                    _minGallop = 0;
	                }

	                _minGallop += 2;
	            }

	            minGallop = _minGallop;

	            minGallop < 1 && (minGallop = 1);

	            if (length1 === 1) {
	                for (i = 0; i < length2; i++) {
	                    array[dest + i] = array[cursor2 + i];
	                }
	                array[dest + length2] = tmp[cursor1];
	            }
	            else if (length1 === 0) {
	                throw new Error();
	                // throw new Error('mergeLow preconditions were not respected');
	            }
	            else {
	                for (i = 0; i < length1; i++) {
	                    array[dest + i] = tmp[cursor1 + i];
	                }
	            }
	        }

	        function mergeHigh (start1, length1, start2, length2) {
	            var i = 0;

	            for (i = 0; i < length2; i++) {
	                tmp[i] = array[start2 + i];
	            }

	            var cursor1 = start1 + length1 - 1;
	            var cursor2 = length2 - 1;
	            var dest = start2 + length2 - 1;
	            var customCursor = 0;
	            var customDest = 0;

	            array[dest--] = array[cursor1--];

	            if (--length1 === 0) {
	                customCursor = dest - (length2 - 1);

	                for (i = 0; i < length2; i++) {
	                    array[customCursor + i] = tmp[i];
	                }

	                return;
	            }

	            if (length2 === 1) {
	                dest -= length1;
	                cursor1 -= length1;
	                customDest = dest + 1;
	                customCursor = cursor1 + 1;

	                for (i = length1 - 1; i >= 0; i--) {
	                    array[customDest + i] = array[customCursor + i];
	                }

	                array[dest] = tmp[cursor2];
	                return;
	            }

	            var _minGallop = minGallop;

	            while (true) {
	                var count1 = 0;
	                var count2 = 0;
	                var exit = false;

	                do {
	                    if (compare(tmp[cursor2], array[cursor1]) < 0) {
	                        array[dest--] = array[cursor1--];
	                        count1++;
	                        count2 = 0;
	                        if (--length1 === 0) {
	                            exit = true;
	                            break;
	                        }
	                    }
	                    else {
	                        array[dest--] = tmp[cursor2--];
	                        count2++;
	                        count1 = 0;
	                        if (--length2 === 1) {
	                            exit = true;
	                            break;
	                        }
	                    }
	                } while ((count1 | count2) < _minGallop);

	                if (exit) {
	                    break;
	                }

	                do {
	                    count1 = length1 - gallopRight(tmp[cursor2], array, start1, length1, length1 - 1, compare);

	                    if (count1 !== 0) {
	                        dest -= count1;
	                        cursor1 -= count1;
	                        length1 -= count1;
	                        customDest = dest + 1;
	                        customCursor = cursor1 + 1;

	                        for (i = count1 - 1; i >= 0; i--) {
	                            array[customDest + i] = array[customCursor + i];
	                        }

	                        if (length1 === 0) {
	                            exit = true;
	                            break;
	                        }
	                    }

	                    array[dest--] = tmp[cursor2--];

	                    if (--length2 === 1) {
	                        exit = true;
	                        break;
	                    }

	                    count2 = length2 - gallopLeft(array[cursor1], tmp, 0, length2, length2 - 1, compare);

	                    if (count2 !== 0) {
	                        dest -= count2;
	                        cursor2 -= count2;
	                        length2 -= count2;
	                        customDest = dest + 1;
	                        customCursor = cursor2 + 1;

	                        for (i = 0; i < count2; i++) {
	                            array[customDest + i] = tmp[customCursor + i];
	                        }

	                        if (length2 <= 1) {
	                            exit = true;
	                            break;
	                        }
	                    }

	                    array[dest--] = array[cursor1--];

	                    if (--length1 === 0) {
	                        exit = true;
	                        break;
	                    }

	                    _minGallop--;
	                } while (count1 >= DEFAULT_MIN_GALLOPING || count2 >= DEFAULT_MIN_GALLOPING);

	                if (exit) {
	                    break;
	                }

	                if (_minGallop < 0) {
	                    _minGallop = 0;
	                }

	                _minGallop += 2;
	            }

	            minGallop = _minGallop;

	            if (minGallop < 1) {
	                minGallop = 1;
	            }

	            if (length2 === 1) {
	                dest -= length1;
	                cursor1 -= length1;
	                customDest = dest + 1;
	                customCursor = cursor1 + 1;

	                for (i = length1 - 1; i >= 0; i--) {
	                    array[customDest + i] = array[customCursor + i];
	                }

	                array[dest] = tmp[cursor2];
	            }
	            else if (length2 === 0) {
	                throw new Error();
	                // throw new Error('mergeHigh preconditions were not respected');
	            }
	            else {
	                customCursor = dest - (length2 - 1);
	                for (i = 0; i < length2; i++) {
	                    array[customCursor + i] = tmp[i];
	                }
	            }
	        }

	        this.mergeRuns = mergeRuns;
	        this.forceMergeRuns = forceMergeRuns;
	        this.pushRun = pushRun;
	    }

	    function sort(array, compare, lo, hi) {
	        if (!lo) {
	            lo = 0;
	        }
	        if (!hi) {
	            hi = array.length;
	        }

	        var remaining = hi - lo;

	        if (remaining < 2) {
	            return;
	        }

	        var runLength = 0;

	        if (remaining < DEFAULT_MIN_MERGE) {
	            runLength = makeAscendingRun(array, lo, hi, compare);
	            binaryInsertionSort(array, lo, hi, lo + runLength, compare);
	            return;
	        }

	        var ts = new TimSort(array, compare);

	        var minRun = minRunLength(remaining);

	        do {
	            runLength = makeAscendingRun(array, lo, hi, compare);
	            if (runLength < minRun) {
	                var force = remaining;
	                if (force > minRun) {
	                    force = minRun;
	                }

	                binaryInsertionSort(array, lo, lo + force, lo + runLength, compare);
	                runLength = force;
	            }

	            ts.pushRun(lo, runLength);
	            ts.mergeRuns();

	            remaining -= runLength;
	            lo += runLength;
	        } while (remaining !== 0);

	        ts.forceMergeRuns();
	    }

	    module.exports = sort;


/***/ },

/***/ 690:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Image element
	 * @module zrender/graphic/Image
	 */



	    var Displayable = __webpack_require__(414);
	    var BoundingRect = __webpack_require__(62);
	    var zrUtil = __webpack_require__(2);

	    var LRU = __webpack_require__(1041);
	    var globalImageCache = new LRU(50);
	    /**
	     * @alias zrender/graphic/Image
	     * @extends module:zrender/graphic/Displayable
	     * @constructor
	     * @param {Object} opts
	     */
	    function ZImage(opts) {
	        Displayable.call(this, opts);
	    }

	    ZImage.prototype = {

	        constructor: ZImage,

	        type: 'image',

	        brush: function (ctx, prevEl) {
	            var style = this.style;
	            var src = style.image;
	            var image;

	            // Must bind each time
	            style.bind(ctx, this, prevEl);
	            // style.image is a url string
	            if (typeof src === 'string') {
	                image = this._image;
	            }
	            // style.image is an HTMLImageElement or HTMLCanvasElement or Canvas
	            else {
	                image = src;
	            }
	            // FIXME Case create many images with src
	            if (!image && src) {
	                // Try get from global image cache
	                var cachedImgObj = globalImageCache.get(src);
	                if (!cachedImgObj) {
	                    // Create a new image
	                    image = new Image();
	                    image.onload = function () {
	                        image.onload = null;
	                        for (var i = 0; i < cachedImgObj.pending.length; i++) {
	                            cachedImgObj.pending[i].dirty();
	                        }
	                    };
	                    cachedImgObj = {
	                        image: image,
	                        pending: [this]
	                    };
	                    image.src = src;
	                    globalImageCache.put(src, cachedImgObj);
	                    this._image = image;
	                    return;
	                }
	                else {
	                    image = cachedImgObj.image;
	                    this._image = image;
	                    // Image is not complete finish, add to pending list
	                    if (!image.width || !image.height) {
	                        cachedImgObj.pending.push(this);
	                        return;
	                    }
	                }
	            }

	            if (image) {
	                // 图片已经加载完成
	                // if (image.nodeName.toUpperCase() == 'IMG') {
	                //     if (!image.complete) {
	                //         return;
	                //     }
	                // }
	                // Else is canvas

	                var width = style.width || image.width;
	                var height = style.height || image.height;
	                var x = style.x || 0;
	                var y = style.y || 0;
	                // 图片加载失败
	                if (!image.width || !image.height) {
	                    return;
	                }

	                // 设置transform
	                this.setTransform(ctx);


	                if (style.sWidth && style.sHeight) {
	                    var sx = style.sx || 0;
	                    var sy = style.sy || 0;
	                    ctx.drawImage(
	                        image,
	                        sx, sy, style.sWidth, style.sHeight,
	                        x, y, width, height
	                    );
	                }
	                else if (style.sx && style.sy) {
	                    var sx = style.sx;
	                    var sy = style.sy;
	                    var sWidth = width - sx;
	                    var sHeight = height - sy;
	                    ctx.drawImage(
	                        image,
	                        sx, sy, sWidth, sHeight,
	                        x, y, width, height
	                    );
	                }
	                else {
	                    ctx.drawImage(image, x, y, width, height);
	                }

	                // 如果没设置宽和高的话自动根据图片宽高设置
	                if (style.width == null) {
	                    style.width = width;
	                }
	                if (style.height == null) {
	                    style.height = height;
	                }

	                this.restoreTransform(ctx);

	                // Draw rect text
	                if (style.text != null) {
	                    this.drawRectText(ctx, this.getBoundingRect());
	                }

	            }
	        },

	        getBoundingRect: function () {
	            var style = this.style;
	            if (! this._rect) {
	                this._rect = new BoundingRect(
	                    style.x || 0, style.y || 0, style.width || 0, style.height || 0
	                );
	            }
	            return this._rect;
	        }
	    };

	    zrUtil.inherits(ZImage, Displayable);

	    module.exports = ZImage;


/***/ },

/***/ 836:
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

	var _component = __webpack_require__(13);

	var _component2 = _interopRequireDefault(_component);

	var _ButtonComponetV = __webpack_require__(1307);

	var _ButtonComponetV2 = _interopRequireDefault(_ButtonComponetV);

	var _HeadComponent = __webpack_require__(965);

	var _HeadComponent2 = _interopRequireDefault(_HeadComponent);

	var _AiForm = __webpack_require__(36);

	var _AiForm2 = _interopRequireDefault(_AiForm);

	var _dataList3 = __webpack_require__(35);

	var _TableComponentV = __webpack_require__(1324);

	var _TableComponentV2 = _interopRequireDefault(_TableComponentV);

	var _DataList = __webpack_require__(238);

	var _DataList2 = _interopRequireDefault(_DataList);

	var _interfaces = __webpack_require__(33);

	var _interfaces2 = _interopRequireDefault(_interfaces);

	var _global = __webpack_require__(15);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var DataList = function (_Component) {
	    (0, _inherits3["default"])(DataList, _Component);

	    function DataList(props) {
	        (0, _classCallCheck3["default"])(this, DataList);

	        var _this = (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));

	        if (_this.props.perennity && _this.props.state && _this.props.state.getDataListApi) {
	            console.log("datalist", _this.props.id, "don't need update");
	        } else if (_this.props.configs && _this.props.configs.apiName) {
	            _this.props.actions.requestDataList(_this.props.configs, _this.props.id);
	        } else {}
	        if (!_this.props.perennity) {
	            _global.Global.mark({
	                dataList: (0, _defineProperty3["default"])({}, _this.props.id, {
	                    selectedRows: null
	                })
	            });
	        }
	        return _this;
	    }

	    DataList.prototype.componentDidMount = function componentDidMount() {
	        //--- init comp ---

	    };

	    DataList.prototype.componentWillUnmount = function componentWillUnmount() {};

	    DataList.prototype.onChange = function onChange() {
	        if (this.props.onChange) this.props.onChange();
	        if (this.props.state.getDataListApi.data.onChange) this.props.state.getDataListApi.data.onChange();
	    };

	    DataList.prototype.render = function render() {
	        var _this2 = this;

	        var state = this.props.state;
	        var isDataListApi = this.props.actions && state && state.getDataListApi && state.getDataListApi.data;
	        return state ? _react2["default"].createElement(
	            'div',
	            { className: 'moduleStyle' },
	            _react2["default"].createElement(
	                'div',
	                { style: { height: "100%" } },
	                _react2["default"].createElement(
	                    'div',
	                    { ref: function ref(dom) {
	                            _this2.headers = dom;
	                        } },
	                    _react2["default"].createElement(
	                        'div',
	                        { className: 'topComponents' },
	                        _react2["default"].createElement(
	                            'div',
	                            { className: 'headComponents' },
	                            this.props.state && this.props.state.getDataListApi && this.props.state.getDataListApi.data && this.props.state.getDataListApi.data.headConfig && _react2["default"].createElement(_HeadComponent2["default"], { perennity: this.props.perennity, id: this.props.id, dlActions: this.props.actions, state: this.props.state, buttonConfigs: this.props.state.getDataListApi.data.headConfig })
	                        ),
	                        _react2["default"].createElement(
	                            'div',
	                            { className: 'buttonComponents' },
	                            this.props.state && this.props.actions && this.props.state.getDataListApi && this.props.state.getDataListApi.data && this.props.state.getDataListApi.data.buttonConfigs && _react2["default"].createElement(_ButtonComponetV2["default"], { perennity: this.props.perennity, id: this.props.id, dlActions: this.props.actions, state: this.props.state, buttonConfigs: this.props.state.getDataListApi.data.buttonConfigs })
	                        )
	                    ),
	                    _react2["default"].createElement(
	                        'div',
	                        { className: 'searchForm' },
	                        this.props.state && this.props.state.getDataListApi && this.props.state.getDataListApi.data && this.props.state.getDataListApi.data.searchConfig && this.props.actions &&
	                        //this.props.actions.requestTableBodyData({...i,body:{...i.body,...j,page:1,size:5}},this.props.id);
	                        _react2["default"].createElement(_AiForm2["default"], { perennity: this.props.perennity, id: this.props.id, config: this.props.state.getDataListApi.data.searchConfig, onSubmit: function onSubmit(values) {
	                                _global.Global.mark({
	                                    dataList: (0, _defineProperty3["default"])({}, _this2.props.id, {
	                                        tableBodyDataApi: null,
	                                        currentPage: 0
	                                    })
	                                });
	                                _this2.props.actions.requestTableBodyData(_this2.props.id, null, 0, 15);
	                            } })
	                    )
	                ),
	                _react2["default"].createElement(
	                    'div',
	                    { className: 'tableComponents', style: { top: this.headers ? this.headers.offsetHeight : "64px" } },
	                    this.props.actions && this.props.state && this.props.state.getDataListApi && this.props.state.getDataListApi.data && this.props.state.getDataListApi.data.table && _react2["default"].createElement(_TableComponentV2["default"], { onChange: this.onChange.bind(this), perennity: this.props.perennity, id: this.props.id, configs: this.props.state.getDataListApi, dlActions: this.props.actions, dlState: this.props.state })
	                )
	            )
	        ) : _react2["default"].createElement(
	            'div',
	            null,
	            '....'
	        );
	    };

	    return DataList;
	}(_react.Component);
	/*import HeadComponent from '../components/HeadComponent';*/


	exports["default"] = (0, _component2["default"])('dataList', { requestAddData: _dataList3.requestAddData, requestDeleteData: _dataList3.requestDeleteData, requestDetailMsg: _dataList3.requestDetailMsg, requestSearchData: _dataList3.requestSearchData, requestUpateData: _dataList3.requestUpateData, requestDataList: _dataList3.requestDataList, requestTableBodyData: _dataList3.requestTableBodyData, setSelectedRowsToState: _dataList3.setSelectedRowsToState, requestDirection: _dataList3.requestDirection, showDataSource: _dataList3.showDataSource, getEquipmentInfo: _dataList3.getEquipmentInfo }, function (state) {
	    return { dicts: state.dicts };
	})(DataList);
	module.exports = exports['default'];

/***/ },

/***/ 837:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _css = __webpack_require__(30);

	var _button = __webpack_require__(28);

	var _button2 = _interopRequireDefault(_button);

	var _defineProperty2 = __webpack_require__(7);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _extends4 = __webpack_require__(3);

	var _extends5 = _interopRequireDefault(_extends4);

	var _css2 = __webpack_require__(1688);

	var _modal = __webpack_require__(49);

	var _modal2 = _interopRequireDefault(_modal);

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(6);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(5);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsCssTransitionGroup = __webpack_require__(239);

	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

	var _redux = __webpack_require__(47);

	var _component = __webpack_require__(13);

	var _component2 = _interopRequireDefault(_component);

	var _history = __webpack_require__(41);

	var _history2 = _interopRequireDefault(_history);

	var _DataListV = __webpack_require__(836);

	var _DataListV2 = _interopRequireDefault(_DataListV);

	var _AiForm = __webpack_require__(36);

	var _AiForm2 = _interopRequireDefault(_AiForm);

	var _ConnectDatasource = __webpack_require__(381);

	var _ConnectDatasource2 = _interopRequireDefault(_ConnectDatasource);

	var _StepContainer = __webpack_require__(958);

	var _StepContainer2 = __webpack_require__(433);

	var _StepContainer3 = _interopRequireDefault(_StepContainer2);

	var _global = __webpack_require__(15);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var mapState = function mapState(state) {
	    return {};
	}; //import styles from './App.less';

	var mapAction = function mapAction(dispatch) {
	    return { actions: (0, _redux.bindActionCreators)({}, dispatch) };
	};

	var StepCon1 = function (_Component) {
	    (0, _inherits3["default"])(StepCon1, _Component);

	    StepCon1.gotoFirst = function gotoFirst(stepId) {
	        _modal2["default"].warning({
	            title: '提示',
	            content: '上一步或前几步没有完成，请返回第一步重新开始。',
	            onOk: function onOk() {
	                setTimeout(function () {
	                    StepCon1.clearAll(stepId);
	                    _history2["default"].push(_global.Global.getState().routing.path.replace(/\/\d+/, '/1'));
	                }, 500);
	            }
	        });
	    };
	    //步骤流程编辑，刷新页面跳转到列表展示页面


	    StepCon1["goto"] = function goto(stepId, url) {
	        _modal2["default"].warning({
	            title: '提示',
	            content: '页面刷新，请重新选择要查看的条目。',
	            onOk: function onOk() {
	                setTimeout(function () {
	                    StepCon1.clearAll(stepId);
	                    _history2["default"].push(url);
	                }, 500);
	            }
	        });
	    };

	    StepCon1.clearAll = function clearAll(stepId) {
	        var includeStepContainer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	        if (_global.Global.getState().stepContainer[stepId]) {
	            var clearObj = {};
	            var stepConfig = _global.Global.getState().stepContainer[stepId];
	            if (!stepConfig || !stepConfig.stepApi || !stepConfig.stepApi.data || !stepConfig.stepApi.data.steps) return;
	            _global.Global.getState().stepContainer[stepId].stepApi.data.steps.forEach(function (item, index) {
	                switch (item.type) {
	                    case 'datalist':
	                        var dataLists = clearObj.dataList || {};
	                        clearObj = (0, _extends5["default"])({}, clearObj, { dataList: (0, _extends5["default"])({}, dataLists, (0, _defineProperty3["default"])({}, item.id, null)) });
	                        break;
	                    case 'aiForm':
	                        var aiForms = clearObj.aiForm || {};
	                        clearObj = (0, _extends5["default"])({}, clearObj, { aiForm: (0, _extends5["default"])({}, aiForms, (0, _defineProperty3["default"])({}, item.id, null)) });
	                        break;
	                }
	            });
	            if (includeStepContainer) {
	                clearObj = (0, _extends5["default"])({}, clearObj, { stepContainer: (0, _defineProperty3["default"])({}, stepId, null) });
	            }
	            if (clearObj.dataList || clearObj.aiForm || clearObj.stepContainer) {
	                _global.Global.mark(clearObj);
	            }
	        }
	    };

	    function StepCon1(props) {
	        (0, _classCallCheck3["default"])(this, StepCon1);

	        var _this = (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));

	        _global.Global.mark({
	            stepContainer: (0, _defineProperty3["default"])({}, _this.props.params.config, {
	                saveApi: {
	                    loading: false,
	                    msg: null,
	                    data: null
	                }
	            })
	        });
	        return _this;
	    }

	    StepCon1.prototype.componentDidMount = function componentDidMount() {
	        var config = this.props.params.config;
	        this.props.actions.stepChange(config, { apiName: config, jsonpArgs: { glState: this.props.glState } }, this.props.params.step);
	    };

	    StepCon1.prototype.render = function render() {
	        var _this2 = this;

	        var state = this.props.stepContainer;
	        if (!state) return _react2["default"].createElement(
	            'div',
	            null,
	            '...'
	        );
	        state = this.props.stepContainer[this.props.params.config];
	        var actions = this.props.actions;
	        var disable = this.props.params.step == 1 ? { "disabled": "disabled" } : null;
	        var config = null;

	        var content = state && state.stepApi && (config = state.stepApi.data) ? _react2["default"].createElement(
	            'div',
	            { className: 'container' },
	            _react2["default"].createElement(
	                'div',
	                null,
	                _react2["default"].createElement(
	                    'div',
	                    { className: "stepBar", style: { width: state.stepApi.data.steps.length * 117, margin: "0 auto" } },
	                    state.stepApi.data.steps.map(function (item, i) {
	                        return _react2["default"].createElement(
	                            'div',
	                            { key: Math.random(), className: "stepOne" },
	                            _react2["default"].createElement(
	                                'div',
	                                { className: "stepNumLine" },
	                                _react2["default"].createElement('div', { className: i == 0 ? "line2" : i + 1 == _this2.props.params.step ? "line3" : i + 1 < _this2.props.params.step ? "line4" : i == _this2.props.params.step ? "line7" : "line" }),
	                                _react2["default"].createElement(
	                                    'div',
	                                    { className: i + 1 == _this2.props.params.step ? _StepContainer3["default"].stepNumberLight : i + 1 < _this2.props.params.step ? "stepNumber2" : "stepNumber" },
	                                    item.number
	                                ),
	                                _react2["default"].createElement('div', { className: i + 1 == state.stepApi.data.steps.length ? "line2" : i + 1 == _this2.props.params.step ? "line5" : i + 1 > _this2.props.params.step ? "line" : i == _this2.props.params.step - 2 ? "line6" : "line4" })
	                            ),
	                            _react2["default"].createElement(
	                                'div',
	                                { className: 'stepName ' + (_this2.props.params.step == i + 1 ? _StepContainer3["default"].stepNameLight : "") },
	                                item.name
	                            )
	                        );
	                    })
	                )
	            ),
	            _react2["default"].createElement(
	                'div',
	                { className: 'stepContainerContent ' + (state.stepApi.data.steps[this.props.params.step - 1].style ? "boxShadow" : "") },
	                function () {
	                    var step = _this2.props.params.step;
	                    var stepData = state.stepApi.data;
	                    var dataStepsType = stepData.steps[step - 1];
	                    var stepConfig = stepData.steps[step - 1].configStepApi;
	                    var dataListId = _this2.props.params.dataListId;
	                    /*if(!this.props.glState.dataList[dataListId].selectedRows || this.props.glState.dataList[dataListId].selectedRows.length!=1){
	                        Modal.warning({
	                            title: '警告',
	                            content: '请选择一条要操作的列'
	                        });
	                        window.history.back(-1);
	                        return;
	                    }*/
	                    var arg = stepData.steps[step - 1].arg;
	                    switch (dataStepsType.type) {
	                        case "datalist":

	                            return _react2["default"].createElement(_DataListV2["default"], (0, _extends5["default"])({ perennity: true,
	                                id: dataStepsType.id,
	                                configs: { apiName: stepConfig, body: {}, jsonpArgs: { id: dataStepsType.id } }
	                            }, arg));
	                        case "aiForm":
	                            var _config = { apiName: stepConfig, body: {} };

	                            return _react2["default"].createElement(_AiForm2["default"], (0, _extends5["default"])({ perennity: true,
	                                config: _config,
	                                id: dataStepsType.id
	                            }, arg));
	                        default:
	                            if (typeof dataStepsType.type == 'function') {
	                                return dataStepsType.type();
	                            } else {
	                                return dataStepsType.type;
	                            }

	                    }
	                }.bind(this)()
	            ),
	            _react2["default"].createElement(
	                'div',
	                { style: { position: "fixed", right: "0px", bottom: "40px" } },
	                function () {
	                    var step = _this2.props.params.step;
	                    var config = state.stepApi.data.steps[step - 1];
	                    if (!config.footer) {
	                        config.footer = ['prev', 'next', 'cancel'];
	                    }
	                    return config.footer.map(function (btn, i) {
	                        switch (btn) {
	                            case 'prev':
	                                return _react2["default"].createElement(
	                                    _button2["default"],
	                                    (0, _extends5["default"])({ key: Math.random(), type: 'default' }, disable, { onClick: function onClick() {
	                                            var step = parseInt(_this2.props.params.step) > 1 ? parseInt(_this2.props.params.step) - 1 : 1;
	                                            _history2["default"].push("steperV1/" + _this2.props.params.config + "/" + step);
	                                        }
	                                    }),
	                                    '\u4E0A\u4E00\u6B65'
	                                );
	                            case 'next':
	                                var next = _react2["default"].createElement(
	                                    _button2["default"],
	                                    { key: Math.random(), type: 'primary', loading: state.saveApi.loading, onClick: function onClick() {
	                                            var step = parseInt(_this2.props.params.step) + 1;
	                                            var validated = true;
	                                            if (config.validate) {
	                                                validated = config.validate();
	                                            }
	                                            if (!validated) return;

	                                            if (step < state.stepApi.data.steps.length + 1) {
	                                                _history2["default"].push("steperV1/" + _this2.props.params.config + "/" + step);
	                                            } else {
	                                                if (validated && validated.apiName) {
	                                                    _global.Global.requestApi(validated, ['saveStepDemo', 'receiveSaveStepDemo', 'failedSaveStepDemo'], {
	                                                        stepContainer: (0, _defineProperty3["default"])({}, _this2.props.params.config, {
	                                                            saveApi: null
	                                                        })
	                                                    }, false, { config: _this2.props.params.config });
	                                                } else {
	                                                    _modal2["default"].warning({
	                                                        title: '警告',
	                                                        content: '页面配置错误，最后一步返回应该为一个接口配置'
	                                                    });
	                                                }
	                                            }
	                                        }
	                                    },
	                                    _this2.props.params.step == state.stepApi.data.steps.length ? !state.saveApi.msg ? "完成" : "重试" : "下一步"
	                                );

	                                return next;
	                            case 'cancel':

	                                return _react2["default"].createElement(
	                                    _button2["default"],
	                                    { key: Math.random(), type: 'default', onClick: function () {
	                                            var returnList = state.stepApi.data.afterSave;
	                                            _history2["default"].push(returnList);
	                                            StepCon1.clearAll(_this2.props.params.config, true);
	                                            if (state.stepApi.data.onCancle) {
	                                                state.stepApi.data.onCancle();
	                                            }
	                                        }.bind(_this2)
	                                    },
	                                    '\u53D6\u6D88'
	                                );

	                            default:
	                                if (typeof btn == 'function') {
	                                    return btn();
	                                } else {
	                                    return btn;
	                                }
	                        }
	                    });
	                }()
	            )
	        ) : _react2["default"].createElement(
	            'div',
	            null,
	            '...'
	        );
	        if (state && state.stepApi && state.stepApi.data && state.stepApi.data.isModal) {
	            return _react2["default"].createElement(
	                'div',
	                { className: "modalMask" },
	                _react2["default"].createElement(
	                    'div',
	                    { className: "modalContent" },
	                    content
	                )
	            );
	        }
	        return content;
	    };

	    return StepCon1;
	}(_react.Component);

	exports["default"] = (0, _component2["default"])("stepContainer", { stepChange: _StepContainer.stepChange, saveAllDatas: _StepContainer.saveAllDatas }, function (state, dispatchProps, ownProps) {
	    return { glState: state, stepContainer: state.stepContainer };
	})(StepCon1);
	module.exports = exports['default'];

/***/ },

/***/ 891:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _React$PropTypes = _react2['default'].PropTypes;
	var bool = _React$PropTypes.bool;
	var object = _React$PropTypes.object;
	var string = _React$PropTypes.string;
	var func = _React$PropTypes.func;

	function isLeftClickEvent(event) {
	  return event.button === 0;
	}

	function isModifiedEvent(event) {
	  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
	}

	function isEmptyObject(object) {
	  for (var p in object) {
	    if (object.hasOwnProperty(p)) return false;
	  }return true;
	}

	/**
	 * A <Link> is used to create an <a> element that links to a route.
	 * When that route is active, the link gets the value of its
	 * `activeClassName` prop
	 *
	 * For example, assuming you have the following route:
	 *
	 *   <Route path="/posts/:postID" component={Post} />
	 *
	 * You could use the following component to link to that route:
	 *
	 *   <Link to={`/posts/${post.id}`} />
	 *
	 * Links may pass along location state and/or query string parameters
	 * in the state/query props, respectively.
	 *
	 *   <Link ... query={{ show: true }} state={{ the: 'state' }} />
	 */

	var Link = (function (_Component) {
	  _inherits(Link, _Component);

	  function Link() {
	    _classCallCheck(this, Link);

	    _Component.apply(this, arguments);
	  }

	  Link.prototype.handleClick = function handleClick(event) {
	    var allowTransition = true;

	    if (this.props.onClick) this.props.onClick(event);

	    if (isModifiedEvent(event) || !isLeftClickEvent(event)) return;

	    if (event.defaultPrevented === true) allowTransition = false;

	    // If target prop is set (e.g. to "_blank") let browser handle link.
	    /* istanbul ignore if: untestable with Karma */
	    if (this.props.target) {
	      if (!allowTransition) event.preventDefault();

	      return;
	    }

	    event.preventDefault();

	    if (allowTransition) {
	      var _props = this.props;
	      var state = _props.state;
	      var to = _props.to;
	      var query = _props.query;
	      var hash = _props.hash;

	      if (hash) to += hash;

	      this.context.history.pushState(state, to, query);
	    }
	  };

	  Link.prototype.render = function render() {
	    var _this = this;

	    var _props2 = this.props;
	    var to = _props2.to;
	    var query = _props2.query;
	    var hash = _props2.hash;
	    var state = _props2.state;
	    var activeClassName = _props2.activeClassName;
	    var activeStyle = _props2.activeStyle;
	    var onlyActiveOnIndex = _props2.onlyActiveOnIndex;

	    var props = _objectWithoutProperties(_props2, ['to', 'query', 'hash', 'state', 'activeClassName', 'activeStyle', 'onlyActiveOnIndex']);

	    // Manually override onClick.
	    props.onClick = function (e) {
	      return _this.handleClick(e);
	    };

	    // Ignore if rendered outside the context of history, simplifies unit testing.
	    var history = this.context.history;

	    if (history) {
	      props.href = history.createHref(to, query);

	      if (hash) props.href += hash;

	      if (activeClassName || activeStyle != null && !isEmptyObject(activeStyle)) {
	        if (history.isActive(to, query, onlyActiveOnIndex)) {
	          if (activeClassName) props.className += props.className === '' ? activeClassName : ' ' + activeClassName;

	          if (activeStyle) props.style = _extends({}, props.style, activeStyle);
	        }
	      }
	    }

	    return _react2['default'].createElement('a', props);
	  };

	  return Link;
	})(_react.Component);

	Link.contextTypes = {
	  history: object
	};

	Link.propTypes = {
	  to: string.isRequired,
	  query: object,
	  hash: string,
	  state: object,
	  activeStyle: object,
	  activeClassName: string,
	  onlyActiveOnIndex: bool.isRequired,
	  onClick: func
	};

	Link.defaultProps = {
	  onlyActiveOnIndex: false,
	  className: '',
	  style: {}
	};

	exports['default'] = Link;
	module.exports = exports['default'];

/***/ },

/***/ 892:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _invariant = __webpack_require__(75);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _RouteUtils = __webpack_require__(163);

	var _PatternUtils = __webpack_require__(295);

	var _PropTypes = __webpack_require__(193);

	var _React$PropTypes = _react2['default'].PropTypes;
	var string = _React$PropTypes.string;
	var object = _React$PropTypes.object;

	/**
	 * A <Redirect> is used to declare another URL path a client should
	 * be sent to when they request a given URL.
	 *
	 * Redirects are placed alongside routes in the route configuration
	 * and are traversed in the same manner.
	 */

	var Redirect = (function (_Component) {
	  _inherits(Redirect, _Component);

	  function Redirect() {
	    _classCallCheck(this, Redirect);

	    _Component.apply(this, arguments);
	  }

	  /* istanbul ignore next: sanity check */

	  Redirect.prototype.render = function render() {
	     true ?  true ? _invariant2['default'](false, '<Redirect> elements are for router configuration only and should not be rendered') : _invariant2['default'](false) : undefined;
	  };

	  return Redirect;
	})(_react.Component);

	Redirect.createRouteFromReactElement = function (element) {
	  var route = _RouteUtils.createRouteFromReactElement(element);

	  if (route.from) route.path = route.from;

	  route.onEnter = function (nextState, replaceState) {
	    var location = nextState.location;
	    var params = nextState.params;

	    var pathname = undefined;
	    if (route.to.charAt(0) === '/') {
	      pathname = _PatternUtils.formatPattern(route.to, params);
	    } else if (!route.to) {
	      pathname = location.pathname;
	    } else {
	      var routeIndex = nextState.routes.indexOf(route);
	      var parentPattern = Redirect.getRoutePattern(nextState.routes, routeIndex - 1);
	      var pattern = parentPattern.replace(/\/*$/, '/') + route.to;
	      pathname = _PatternUtils.formatPattern(pattern, params);
	    }

	    replaceState(route.state || location.state, pathname, route.query || location.query);
	  };

	  return route;
	};

	Redirect.getRoutePattern = function (routes, routeIndex) {
	  var parentPattern = '';

	  for (var i = routeIndex; i >= 0; i--) {
	    var route = routes[i];
	    var pattern = route.path || '';
	    parentPattern = pattern.replace(/\/*$/, '/') + parentPattern;

	    if (pattern.indexOf('/') === 0) break;
	  }

	  return '/' + parentPattern;
	};

	Redirect.propTypes = {
	  path: string,
	  from: string, // Alias for path
	  to: string.isRequired,
	  query: object,
	  state: object,
	  onEnter: _PropTypes.falsy,
	  children: _PropTypes.falsy
	};

	exports['default'] = Redirect;
	module.exports = exports['default'];

/***/ },

/***/ 893:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _invariant = __webpack_require__(75);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _RouteUtils = __webpack_require__(163);

	var _getRouteParams = __webpack_require__(1009);

	var _getRouteParams2 = _interopRequireDefault(_getRouteParams);

	var _React$PropTypes = _react2['default'].PropTypes;
	var array = _React$PropTypes.array;
	var func = _React$PropTypes.func;
	var object = _React$PropTypes.object;

	/**
	 * A <RoutingContext> renders the component tree for a given router state
	 * and sets the history object and the current location in context.
	 */

	var RoutingContext = (function (_Component) {
	  _inherits(RoutingContext, _Component);

	  function RoutingContext() {
	    _classCallCheck(this, RoutingContext);

	    _Component.apply(this, arguments);
	  }

	  RoutingContext.prototype.getChildContext = function getChildContext() {
	    var _props = this.props;
	    var history = _props.history;
	    var location = _props.location;

	    return { history: history, location: location };
	  };

	  RoutingContext.prototype.createElement = function createElement(component, props) {
	    return component == null ? null : this.props.createElement(component, props);
	  };

	  RoutingContext.prototype.render = function render() {
	    var _this = this;

	    var _props2 = this.props;
	    var history = _props2.history;
	    var location = _props2.location;
	    var routes = _props2.routes;
	    var params = _props2.params;
	    var components = _props2.components;

	    var element = null;

	    if (components) {
	      element = components.reduceRight(function (element, components, index) {
	        if (components == null) return element; // Don't create new children; use the grandchildren.

	        var route = routes[index];
	        var routeParams = _getRouteParams2['default'](route, params);
	        var props = {
	          history: history,
	          location: location,
	          params: params,
	          route: route,
	          routeParams: routeParams,
	          routes: routes
	        };

	        if (_RouteUtils.isReactChildren(element)) {
	          props.children = element;
	        } else if (element) {
	          for (var prop in element) {
	            if (element.hasOwnProperty(prop)) props[prop] = element[prop];
	          }
	        }

	        if (typeof components === 'object') {
	          var elements = {};

	          for (var key in components) {
	            if (components.hasOwnProperty(key)) {
	              // Pass through the key as a prop to createElement to allow
	              // custom createElement functions to know which named component
	              // they're rendering, for e.g. matching up to fetched data.
	              elements[key] = _this.createElement(components[key], _extends({
	                key: key }, props));
	            }
	          }

	          return elements;
	        }

	        return _this.createElement(components, props);
	      }, element);
	    }

	    !(element === null || element === false || _react2['default'].isValidElement(element)) ?  true ? _invariant2['default'](false, 'The root route must render a single element') : _invariant2['default'](false) : undefined;

	    return element;
	  };

	  return RoutingContext;
	})(_react.Component);

	RoutingContext.propTypes = {
	  history: object.isRequired,
	  createElement: func.isRequired,
	  location: object.isRequired,
	  routes: array.isRequired,
	  params: object.isRequired,
	  components: array.isRequired
	};

	RoutingContext.defaultProps = {
	  createElement: _react2['default'].createElement
	};

	RoutingContext.childContextTypes = {
	  history: object.isRequired,
	  location: object.isRequired
	};

	exports['default'] = RoutingContext;
	module.exports = exports['default'];

/***/ },

/***/ 898:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @module zrender/Element
	 */


	    var guid = __webpack_require__(906);
	    var Eventful = __webpack_require__(215);
	    var Transformable = __webpack_require__(918);
	    var Animatable = __webpack_require__(1050);
	    var zrUtil = __webpack_require__(2);

	    /**
	     * @alias module:zrender/Element
	     * @constructor
	     * @extends {module:zrender/mixin/Animatable}
	     * @extends {module:zrender/mixin/Transformable}
	     * @extends {module:zrender/mixin/Eventful}
	     */
	    var Element = function (opts) {

	        Transformable.call(this, opts);
	        Eventful.call(this, opts);
	        Animatable.call(this, opts);

	        /**
	         * 画布元素ID
	         * @type {string}
	         */
	        this.id = opts.id || guid();
	    };

	    Element.prototype = {

	        /**
	         * 元素类型
	         * Element type
	         * @type {string}
	         */
	        type: 'element',

	        /**
	         * 元素名字
	         * Element name
	         * @type {string}
	         */
	        name: '',

	        /**
	         * ZRender 实例对象，会在 element 添加到 zrender 实例中后自动赋值
	         * ZRender instance will be assigned when element is associated with zrender
	         * @name module:/zrender/Element#__zr
	         * @type {module:zrender/ZRender}
	         */
	        __zr: null,

	        /**
	         * 图形是否忽略，为true时忽略图形的绘制以及事件触发
	         * If ignore drawing and events of the element object
	         * @name module:/zrender/Element#ignore
	         * @type {boolean}
	         * @default false
	         */
	        ignore: false,

	        /**
	         * 用于裁剪的路径(shape)，所有 Group 内的路径在绘制时都会被这个路径裁剪
	         * 该路径会继承被裁减对象的变换
	         * @type {module:zrender/graphic/Path}
	         * @see http://www.w3.org/TR/2dcontext/#clipping-region
	         * @readOnly
	         */
	        clipPath: null,

	        /**
	         * Drift element
	         * @param  {number} dx dx on the global space
	         * @param  {number} dy dy on the global space
	         */
	        drift: function (dx, dy) {
	            switch (this.draggable) {
	                case 'horizontal':
	                    dy = 0;
	                    break;
	                case 'vertical':
	                    dx = 0;
	                    break;
	            }

	            var m = this.transform;
	            if (!m) {
	                m = this.transform = [1, 0, 0, 1, 0, 0];
	            }
	            m[4] += dx;
	            m[5] += dy;

	            this.decomposeTransform();
	            this.dirty(false);
	        },

	        /**
	         * Hook before update
	         */
	        beforeUpdate: function () {},
	        /**
	         * Hook after update
	         */
	        afterUpdate: function () {},
	        /**
	         * Update each frame
	         */
	        update: function () {
	            this.updateTransform();
	        },

	        /**
	         * @param  {Function} cb
	         * @param  {}   context
	         */
	        traverse: function (cb, context) {},

	        /**
	         * @protected
	         */
	        attrKV: function (key, value) {
	            if (key === 'position' || key === 'scale' || key === 'origin') {
	                // Copy the array
	                if (value) {
	                    var target = this[key];
	                    if (!target) {
	                        target = this[key] = [];
	                    }
	                    target[0] = value[0];
	                    target[1] = value[1];
	                }
	            }
	            else {
	                this[key] = value;
	            }
	        },

	        /**
	         * Hide the element
	         */
	        hide: function () {
	            this.ignore = true;
	            this.__zr && this.__zr.refresh();
	        },

	        /**
	         * Show the element
	         */
	        show: function () {
	            this.ignore = false;
	            this.__zr && this.__zr.refresh();
	        },

	        /**
	         * @param {string|Object} key
	         * @param {*} value
	         */
	        attr: function (key, value) {
	            if (typeof key === 'string') {
	                this.attrKV(key, value);
	            }
	            else if (zrUtil.isObject(key)) {
	                for (var name in key) {
	                    if (key.hasOwnProperty(name)) {
	                        this.attrKV(name, key[name]);
	                    }
	                }
	            }

	            this.dirty(false);

	            return this;
	        },

	        /**
	         * @param {module:zrender/graphic/Path} clipPath
	         */
	        setClipPath: function (clipPath) {
	            var zr = this.__zr;
	            if (zr) {
	                clipPath.addSelfToZr(zr);
	            }

	            // Remove previous clip path
	            if (this.clipPath && this.clipPath !== clipPath) {
	                this.removeClipPath();
	            }

	            this.clipPath = clipPath;
	            clipPath.__zr = zr;
	            clipPath.__clipTarget = this;

	            this.dirty(false);
	        },

	        /**
	         */
	        removeClipPath: function () {
	            var clipPath = this.clipPath;
	            if (clipPath) {
	                if (clipPath.__zr) {
	                    clipPath.removeSelfFromZr(clipPath.__zr);
	                }

	                clipPath.__zr = null;
	                clipPath.__clipTarget = null;
	                this.clipPath = null;

	                this.dirty(false);
	            }
	        },

	        /**
	         * Add self from zrender instance.
	         * Not recursively because it will be invoked when element added to storage.
	         * @param {module:zrender/ZRender} zr
	         */
	        addSelfToZr: function (zr) {
	            this.__zr = zr;
	            // 添加动画
	            var animators = this.animators;
	            if (animators) {
	                for (var i = 0; i < animators.length; i++) {
	                    zr.animation.addAnimator(animators[i]);
	                }
	            }

	            if (this.clipPath) {
	                this.clipPath.addSelfToZr(zr);
	            }
	        },

	        /**
	         * Remove self from zrender instance.
	         * Not recursively because it will be invoked when element added to storage.
	         * @param {module:zrender/ZRender} zr
	         */
	        removeSelfFromZr: function (zr) {
	            this.__zr = null;
	            // 移除动画
	            var animators = this.animators;
	            if (animators) {
	                for (var i = 0; i < animators.length; i++) {
	                    zr.animation.removeAnimator(animators[i]);
	                }
	            }

	            if (this.clipPath) {
	                this.clipPath.removeSelfFromZr(zr);
	            }
	        }
	    };

	    zrUtil.mixin(Element, Animatable);
	    zrUtil.mixin(Element, Transformable);
	    zrUtil.mixin(Element, Eventful);

	    module.exports = Element;


/***/ },

/***/ 899:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @module echarts/animation/Animator
	 */


	    var Clip = __webpack_require__(1035);
	    var color = __webpack_require__(146);
	    var util = __webpack_require__(2);
	    var isArrayLike = util.isArrayLike;

	    var arraySlice = Array.prototype.slice;

	    function defaultGetter(target, key) {
	        return target[key];
	    }

	    function defaultSetter(target, key, value) {
	        target[key] = value;
	    }

	    /**
	     * @param  {number} p0
	     * @param  {number} p1
	     * @param  {number} percent
	     * @return {number}
	     */
	    function interpolateNumber(p0, p1, percent) {
	        return (p1 - p0) * percent + p0;
	    }

	    /**
	     * @param  {string} p0
	     * @param  {string} p1
	     * @param  {number} percent
	     * @return {string}
	     */
	    function interpolateString(p0, p1, percent) {
	        return percent > 0.5 ? p1 : p0;
	    }

	    /**
	     * @param  {Array} p0
	     * @param  {Array} p1
	     * @param  {number} percent
	     * @param  {Array} out
	     * @param  {number} arrDim
	     */
	    function interpolateArray(p0, p1, percent, out, arrDim) {
	        var len = p0.length;
	        if (arrDim == 1) {
	            for (var i = 0; i < len; i++) {
	                out[i] = interpolateNumber(p0[i], p1[i], percent);
	            }
	        }
	        else {
	            var len2 = p0[0].length;
	            for (var i = 0; i < len; i++) {
	                for (var j = 0; j < len2; j++) {
	                    out[i][j] = interpolateNumber(
	                        p0[i][j], p1[i][j], percent
	                    );
	                }
	            }
	        }
	    }

	    // arr0 is source array, arr1 is target array.
	    // Do some preprocess to avoid error happened when interpolating from arr0 to arr1
	    function fillArr(arr0, arr1, arrDim) {
	        var arr0Len = arr0.length;
	        var arr1Len = arr1.length;
	        if (arr0Len !== arr1Len) {
	            // FIXME Not work for TypedArray
	            var isPreviousLarger = arr0Len > arr1Len;
	            if (isPreviousLarger) {
	                // Cut the previous
	                arr0.length = arr1Len;
	            }
	            else {
	                // Fill the previous
	                for (var i = arr0Len; i < arr1Len; i++) {
	                    arr0.push(
	                        arrDim === 1 ? arr1[i] : arraySlice.call(arr1[i])
	                    );
	                }
	            }
	        }
	        // Handling NaN value
	        var len2 = arr0[0] && arr0[0].length;
	        for (var i = 0; i < arr0.length; i++) {
	            if (arrDim === 1) {
	                if (isNaN(arr0[i])) {
	                    arr0[i] = arr1[i];
	                }
	            }
	            else {
	                for (var j = 0; j < len2; j++) {
	                    if (isNaN(arr0[i][j])) {
	                        arr0[i][j] = arr1[i][j];
	                    }
	                }
	            }
	        }
	    }

	    /**
	     * @param  {Array} arr0
	     * @param  {Array} arr1
	     * @param  {number} arrDim
	     * @return {boolean}
	     */
	    function isArraySame(arr0, arr1, arrDim) {
	        if (arr0 === arr1) {
	            return true;
	        }
	        var len = arr0.length;
	        if (len !== arr1.length) {
	            return false;
	        }
	        if (arrDim === 1) {
	            for (var i = 0; i < len; i++) {
	                if (arr0[i] !== arr1[i]) {
	                    return false;
	                }
	            }
	        }
	        else {
	            var len2 = arr0[0].length;
	            for (var i = 0; i < len; i++) {
	                for (var j = 0; j < len2; j++) {
	                    if (arr0[i][j] !== arr1[i][j]) {
	                        return false;
	                    }
	                }
	            }
	        }
	        return true;
	    }

	    /**
	     * Catmull Rom interpolate array
	     * @param  {Array} p0
	     * @param  {Array} p1
	     * @param  {Array} p2
	     * @param  {Array} p3
	     * @param  {number} t
	     * @param  {number} t2
	     * @param  {number} t3
	     * @param  {Array} out
	     * @param  {number} arrDim
	     */
	    function catmullRomInterpolateArray(
	        p0, p1, p2, p3, t, t2, t3, out, arrDim
	    ) {
	        var len = p0.length;
	        if (arrDim == 1) {
	            for (var i = 0; i < len; i++) {
	                out[i] = catmullRomInterpolate(
	                    p0[i], p1[i], p2[i], p3[i], t, t2, t3
	                );
	            }
	        }
	        else {
	            var len2 = p0[0].length;
	            for (var i = 0; i < len; i++) {
	                for (var j = 0; j < len2; j++) {
	                    out[i][j] = catmullRomInterpolate(
	                        p0[i][j], p1[i][j], p2[i][j], p3[i][j],
	                        t, t2, t3
	                    );
	                }
	            }
	        }
	    }

	    /**
	     * Catmull Rom interpolate number
	     * @param  {number} p0
	     * @param  {number} p1
	     * @param  {number} p2
	     * @param  {number} p3
	     * @param  {number} t
	     * @param  {number} t2
	     * @param  {number} t3
	     * @return {number}
	     */
	    function catmullRomInterpolate(p0, p1, p2, p3, t, t2, t3) {
	        var v0 = (p2 - p0) * 0.5;
	        var v1 = (p3 - p1) * 0.5;
	        return (2 * (p1 - p2) + v0 + v1) * t3
	                + (-3 * (p1 - p2) - 2 * v0 - v1) * t2
	                + v0 * t + p1;
	    }

	    function cloneValue(value) {
	        if (isArrayLike(value)) {
	            var len = value.length;
	            if (isArrayLike(value[0])) {
	                var ret = [];
	                for (var i = 0; i < len; i++) {
	                    ret.push(arraySlice.call(value[i]));
	                }
	                return ret;
	            }

	            return arraySlice.call(value);
	        }

	        return value;
	    }

	    function rgba2String(rgba) {
	        rgba[0] = Math.floor(rgba[0]);
	        rgba[1] = Math.floor(rgba[1]);
	        rgba[2] = Math.floor(rgba[2]);

	        return 'rgba(' + rgba.join(',') + ')';
	    }

	    function createTrackClip (animator, easing, oneTrackDone, keyframes, propName) {
	        var getter = animator._getter;
	        var setter = animator._setter;
	        var useSpline = easing === 'spline';

	        var trackLen = keyframes.length;
	        if (!trackLen) {
	            return;
	        }
	        // Guess data type
	        var firstVal = keyframes[0].value;
	        var isValueArray = isArrayLike(firstVal);
	        var isValueColor = false;
	        var isValueString = false;

	        // For vertices morphing
	        var arrDim = (
	                isValueArray
	                && isArrayLike(firstVal[0])
	            )
	            ? 2 : 1;
	        var trackMaxTime;
	        // Sort keyframe as ascending
	        keyframes.sort(function(a, b) {
	            return a.time - b.time;
	        });

	        trackMaxTime = keyframes[trackLen - 1].time;
	        // Percents of each keyframe
	        var kfPercents = [];
	        // Value of each keyframe
	        var kfValues = [];
	        var prevValue = keyframes[0].value;
	        var isAllValueEqual = true;
	        for (var i = 0; i < trackLen; i++) {
	            kfPercents.push(keyframes[i].time / trackMaxTime);
	            // Assume value is a color when it is a string
	            var value = keyframes[i].value;

	            // Check if value is equal, deep check if value is array
	            if (!((isValueArray && isArraySame(value, prevValue, arrDim))
	                || (!isValueArray && value === prevValue))) {
	                isAllValueEqual = false;
	            }
	            prevValue = value;

	            // Try converting a string to a color array
	            if (typeof value == 'string') {
	                var colorArray = color.parse(value);
	                if (colorArray) {
	                    value = colorArray;
	                    isValueColor = true;
	                }
	                else {
	                    isValueString = true;
	                }
	            }
	            kfValues.push(value);
	        }
	        if (isAllValueEqual) {
	            return;
	        }

	        var lastValue = kfValues[trackLen - 1];
	        // Polyfill array and NaN value
	        for (var i = 0; i < trackLen - 1; i++) {
	            if (isValueArray) {
	                fillArr(kfValues[i], lastValue, arrDim);
	            }
	            else {
	                if (isNaN(kfValues[i]) && !isNaN(lastValue) && !isValueString && !isValueColor) {
	                    kfValues[i] = lastValue;
	                }
	            }
	        }
	        isValueArray && fillArr(getter(animator._target, propName), lastValue, arrDim);

	        // Cache the key of last frame to speed up when
	        // animation playback is sequency
	        var lastFrame = 0;
	        var lastFramePercent = 0;
	        var start;
	        var w;
	        var p0;
	        var p1;
	        var p2;
	        var p3;

	        if (isValueColor) {
	            var rgba = [0, 0, 0, 0];
	        }

	        var onframe = function (target, percent) {
	            // Find the range keyframes
	            // kf1-----kf2---------current--------kf3
	            // find kf2 and kf3 and do interpolation
	            var frame;
	            // In the easing function like elasticOut, percent may less than 0
	            if (percent < 0) {
	                frame = 0;
	            }
	            else if (percent < lastFramePercent) {
	                // Start from next key
	                // PENDING start from lastFrame ?
	                start = Math.min(lastFrame + 1, trackLen - 1);
	                for (frame = start; frame >= 0; frame--) {
	                    if (kfPercents[frame] <= percent) {
	                        break;
	                    }
	                }
	                // PENDING really need to do this ?
	                frame = Math.min(frame, trackLen - 2);
	            }
	            else {
	                for (frame = lastFrame; frame < trackLen; frame++) {
	                    if (kfPercents[frame] > percent) {
	                        break;
	                    }
	                }
	                frame = Math.min(frame - 1, trackLen - 2);
	            }
	            lastFrame = frame;
	            lastFramePercent = percent;

	            var range = (kfPercents[frame + 1] - kfPercents[frame]);
	            if (range === 0) {
	                return;
	            }
	            else {
	                w = (percent - kfPercents[frame]) / range;
	            }
	            if (useSpline) {
	                p1 = kfValues[frame];
	                p0 = kfValues[frame === 0 ? frame : frame - 1];
	                p2 = kfValues[frame > trackLen - 2 ? trackLen - 1 : frame + 1];
	                p3 = kfValues[frame > trackLen - 3 ? trackLen - 1 : frame + 2];
	                if (isValueArray) {
	                    catmullRomInterpolateArray(
	                        p0, p1, p2, p3, w, w * w, w * w * w,
	                        getter(target, propName),
	                        arrDim
	                    );
	                }
	                else {
	                    var value;
	                    if (isValueColor) {
	                        value = catmullRomInterpolateArray(
	                            p0, p1, p2, p3, w, w * w, w * w * w,
	                            rgba, 1
	                        );
	                        value = rgba2String(rgba);
	                    }
	                    else if (isValueString) {
	                        // String is step(0.5)
	                        return interpolateString(p1, p2, w);
	                    }
	                    else {
	                        value = catmullRomInterpolate(
	                            p0, p1, p2, p3, w, w * w, w * w * w
	                        );
	                    }
	                    setter(
	                        target,
	                        propName,
	                        value
	                    );
	                }
	            }
	            else {
	                if (isValueArray) {
	                    interpolateArray(
	                        kfValues[frame], kfValues[frame + 1], w,
	                        getter(target, propName),
	                        arrDim
	                    );
	                }
	                else {
	                    var value;
	                    if (isValueColor) {
	                        interpolateArray(
	                            kfValues[frame], kfValues[frame + 1], w,
	                            rgba, 1
	                        );
	                        value = rgba2String(rgba);
	                    }
	                    else if (isValueString) {
	                        // String is step(0.5)
	                        return interpolateString(kfValues[frame], kfValues[frame + 1], w);
	                    }
	                    else {
	                        value = interpolateNumber(kfValues[frame], kfValues[frame + 1], w);
	                    }
	                    setter(
	                        target,
	                        propName,
	                        value
	                    );
	                }
	            }
	        };

	        var clip = new Clip({
	            target: animator._target,
	            life: trackMaxTime,
	            loop: animator._loop,
	            delay: animator._delay,
	            onframe: onframe,
	            ondestroy: oneTrackDone
	        });

	        if (easing && easing !== 'spline') {
	            clip.easing = easing;
	        }

	        return clip;
	    }

	    /**
	     * @alias module:zrender/animation/Animator
	     * @constructor
	     * @param {Object} target
	     * @param {boolean} loop
	     * @param {Function} getter
	     * @param {Function} setter
	     */
	    var Animator = function(target, loop, getter, setter) {
	        this._tracks = {};
	        this._target = target;

	        this._loop = loop || false;

	        this._getter = getter || defaultGetter;
	        this._setter = setter || defaultSetter;

	        this._clipCount = 0;

	        this._delay = 0;

	        this._doneList = [];

	        this._onframeList = [];

	        this._clipList = [];
	    };

	    Animator.prototype = {
	        /**
	         * 设置动画关键帧
	         * @param  {number} time 关键帧时间，单位是ms
	         * @param  {Object} props 关键帧的属性值，key-value表示
	         * @return {module:zrender/animation/Animator}
	         */
	        when: function(time /* ms */, props) {
	            var tracks = this._tracks;
	            for (var propName in props) {
	                if (!props.hasOwnProperty(propName)) {
	                    continue;
	                }

	                if (!tracks[propName]) {
	                    tracks[propName] = [];
	                    // Invalid value
	                    var value = this._getter(this._target, propName);
	                    if (value == null) {
	                        // zrLog('Invalid property ' + propName);
	                        continue;
	                    }
	                    // If time is 0
	                    //  Then props is given initialize value
	                    // Else
	                    //  Initialize value from current prop value
	                    if (time !== 0) {
	                        tracks[propName].push({
	                            time: 0,
	                            value: cloneValue(value)
	                        });
	                    }
	                }
	                tracks[propName].push({
	                    time: time,
	                    value: props[propName]
	                });
	            }
	            return this;
	        },
	        /**
	         * 添加动画每一帧的回调函数
	         * @param  {Function} callback
	         * @return {module:zrender/animation/Animator}
	         */
	        during: function (callback) {
	            this._onframeList.push(callback);
	            return this;
	        },

	        _doneCallback: function () {
	            // Clear all tracks
	            this._tracks = {};
	            // Clear all clips
	            this._clipList.length = 0;

	            var doneList = this._doneList;
	            var len = doneList.length;
	            for (var i = 0; i < len; i++) {
	                doneList[i].call(this);
	            }
	        },
	        /**
	         * 开始执行动画
	         * @param  {string|Function} easing
	         *         动画缓动函数，详见{@link module:zrender/animation/easing}
	         * @return {module:zrender/animation/Animator}
	         */
	        start: function (easing) {

	            var self = this;
	            var clipCount = 0;

	            var oneTrackDone = function() {
	                clipCount--;
	                if (!clipCount) {
	                    self._doneCallback();
	                }
	            };

	            var lastClip;
	            for (var propName in this._tracks) {
	                if (!this._tracks.hasOwnProperty(propName)) {
	                    continue;
	                }
	                var clip = createTrackClip(
	                    this, easing, oneTrackDone,
	                    this._tracks[propName], propName
	                );
	                if (clip) {
	                    this._clipList.push(clip);
	                    clipCount++;

	                    // If start after added to animation
	                    if (this.animation) {
	                        this.animation.addClip(clip);
	                    }

	                    lastClip = clip;
	                }
	            }

	            // Add during callback on the last clip
	            if (lastClip) {
	                var oldOnFrame = lastClip.onframe;
	                lastClip.onframe = function (target, percent) {
	                    oldOnFrame(target, percent);

	                    for (var i = 0; i < self._onframeList.length; i++) {
	                        self._onframeList[i](target, percent);
	                    }
	                };
	            }

	            if (!clipCount) {
	                this._doneCallback();
	            }
	            return this;
	        },
	        /**
	         * 停止动画
	         * @param {boolean} forwardToLast If move to last frame before stop
	         */
	        stop: function (forwardToLast) {
	            var clipList = this._clipList;
	            var animation = this.animation;
	            for (var i = 0; i < clipList.length; i++) {
	                var clip = clipList[i];
	                if (forwardToLast) {
	                    // Move to last frame before stop
	                    clip.onframe(this._target, 1);
	                }
	                animation && animation.removeClip(clip);
	            }
	            clipList.length = 0;
	        },
	        /**
	         * 设置动画延迟开始的时间
	         * @param  {number} time 单位ms
	         * @return {module:zrender/animation/Animator}
	         */
	        delay: function (time) {
	            this._delay = time;
	            return this;
	        },
	        /**
	         * 添加动画结束的回调
	         * @param  {Function} cb
	         * @return {module:zrender/animation/Animator}
	         */
	        done: function(cb) {
	            if (cb) {
	                this._doneList.push(cb);
	            }
	            return this;
	        },

	        /**
	         * @return {Array.<module:zrender/animation/Clip>}
	         */
	        getClips: function () {
	            return this._clipList;
	        }
	    };

	    module.exports = Animator;


/***/ },

/***/ 900:
/***/ function(module, exports) {

	

	    module.exports = (typeof window !== 'undefined' &&
	                                    (window.requestAnimationFrame
	                                    || window.msRequestAnimationFrame
	                                    || window.mozRequestAnimationFrame
	                                    || window.webkitRequestAnimationFrame))
	                                || function (func) {
	                                    setTimeout(func, 16);
	                                };



/***/ },

/***/ 901:
/***/ function(module, exports) {

	
	    module.exports = {
	        /**
	         * 线段包含判断
	         * @param  {number}  x0
	         * @param  {number}  y0
	         * @param  {number}  x1
	         * @param  {number}  y1
	         * @param  {number}  lineWidth
	         * @param  {number}  x
	         * @param  {number}  y
	         * @return {boolean}
	         */
	        containStroke: function (x0, y0, x1, y1, lineWidth, x, y) {
	            if (lineWidth === 0) {
	                return false;
	            }
	            var _l = lineWidth;
	            var _a = 0;
	            var _b = x0;
	            // Quick reject
	            if (
	                (y > y0 + _l && y > y1 + _l)
	                || (y < y0 - _l && y < y1 - _l)
	                || (x > x0 + _l && x > x1 + _l)
	                || (x < x0 - _l && x < x1 - _l)
	            ) {
	                return false;
	            }

	            if (x0 !== x1) {
	                _a = (y0 - y1) / (x0 - x1);
	                _b = (x0 * y1 - x1 * y0) / (x0 - x1) ;
	            }
	            else {
	                return Math.abs(x - x0) <= _l / 2;
	            }
	            var tmp = _a * x - y + _b;
	            var _s = tmp * tmp / (_a * _a + 1);
	            return _s <= _l / 2 * _l / 2;
	        }
	    };


/***/ },

/***/ 903:
/***/ function(module, exports, __webpack_require__) {

	

	    var curve = __webpack_require__(166);

	    module.exports = {
	        /**
	         * 二次贝塞尔曲线描边包含判断
	         * @param  {number}  x0
	         * @param  {number}  y0
	         * @param  {number}  x1
	         * @param  {number}  y1
	         * @param  {number}  x2
	         * @param  {number}  y2
	         * @param  {number}  lineWidth
	         * @param  {number}  x
	         * @param  {number}  y
	         * @return {boolean}
	         */
	        containStroke: function (x0, y0, x1, y1, x2, y2, lineWidth, x, y) {
	            if (lineWidth === 0) {
	                return false;
	            }
	            var _l = lineWidth;
	            // Quick reject
	            if (
	                (y > y0 + _l && y > y1 + _l && y > y2 + _l)
	                || (y < y0 - _l && y < y1 - _l && y < y2 - _l)
	                || (x > x0 + _l && x > x1 + _l && x > x2 + _l)
	                || (x < x0 - _l && x < x1 - _l && x < x2 - _l)
	            ) {
	                return false;
	            }
	            var d = curve.quadraticProjectPoint(
	                x0, y0, x1, y1, x2, y2,
	                x, y, null
	            );
	            return d <= _l / 2;
	        }
	    };


/***/ },

/***/ 904:
/***/ function(module, exports) {

	

	    var PI2 = Math.PI * 2;
	    module.exports = {
	        normalizeRadian: function(angle) {
	            angle %= PI2;
	            if (angle < 0) {
	                angle += PI2;
	            }
	            return angle;
	        }
	    };


/***/ },

/***/ 905:
/***/ function(module, exports) {

	
	    module.exports = function windingLine(x0, y0, x1, y1, x, y) {
	        if ((y > y0 && y > y1) || (y < y0 && y < y1)) {
	            return 0;
	        }
	        // Ignore horizontal line
	        if (y1 === y0) {
	            return 0;
	        }
	        var dir = y1 < y0 ? 1 : -1;
	        var t = (y - y0) / (y1 - y0);

	        // Avoid winding error when intersection point is the connect point of two line of polygon
	        if (t === 1 || t === 0) {
	            dir = y1 < y0 ? 0.5 : -0.5;
	        }

	        var x_ = t * (x1 - x0) + x0;

	        return x_ > x ? dir : 0;
	    };


/***/ },

/***/ 906:
/***/ function(module, exports) {

	/**
	 * zrender: 生成唯一id
	 *
	 * @author errorrik (errorrik@gmail.com)
	 */


	    var idStart = 0x0907;

	    module.exports = function () {
	        return idStart++;
	    };



/***/ },

/***/ 908:
/***/ function(module, exports) {

	

	    var Pattern = function (image, repeat) {
	        this.image = image;
	        this.repeat = repeat;

	        // Can be cloned
	        this.type = 'pattern';
	    };

	    Pattern.prototype.getCanvasPattern = function (ctx) {

	        return this._canvasPattern
	            || (this._canvasPattern = ctx.createPattern(this.image, this.repeat));
	    };

	    module.exports = Pattern;


/***/ },

/***/ 909:
/***/ function(module, exports) {

	/**
	 * @module zrender/graphic/Style
	 */


	    var STYLE_COMMON_PROPS = [
	        ['shadowBlur', 0], ['shadowOffsetX', 0], ['shadowOffsetY', 0], ['shadowColor', '#000'],
	        ['lineCap', 'butt'], ['lineJoin', 'miter'], ['miterLimit', 10]
	    ];

	    // var SHADOW_PROPS = STYLE_COMMON_PROPS.slice(0, 4);
	    // var LINE_PROPS = STYLE_COMMON_PROPS.slice(4);

	    var Style = function (opts) {
	        this.extendFrom(opts);
	    };

	    function createLinearGradient(ctx, obj, rect) {
	        // var size =
	        var x = obj.x;
	        var x2 = obj.x2;
	        var y = obj.y;
	        var y2 = obj.y2;

	        if (!obj.global) {
	            x = x * rect.width + rect.x;
	            x2 = x2 * rect.width + rect.x;
	            y = y * rect.height + rect.y;
	            y2 = y2 * rect.height + rect.y;
	        }

	        var canvasGradient = ctx.createLinearGradient(x, y, x2, y2);

	        return canvasGradient;
	    }

	    function createRadialGradient(ctx, obj, rect) {
	        var width = rect.width;
	        var height = rect.height;
	        var min = Math.min(width, height);

	        var x = obj.x;
	        var y = obj.y;
	        var r = obj.r;
	        if (!obj.global) {
	            x = x * width + rect.x;
	            y = y * height + rect.y;
	            r = r * min;
	        }

	        var canvasGradient = ctx.createRadialGradient(x, y, 0, x, y, r);

	        return canvasGradient;
	    }


	    Style.prototype = {

	        constructor: Style,

	        /**
	         * @type {string}
	         */
	        fill: '#000000',

	        /**
	         * @type {string}
	         */
	        stroke: null,

	        /**
	         * @type {number}
	         */
	        opacity: 1,

	        /**
	         * @type {Array.<number>}
	         */
	        lineDash: null,

	        /**
	         * @type {number}
	         */
	        lineDashOffset: 0,

	        /**
	         * @type {number}
	         */
	        shadowBlur: 0,

	        /**
	         * @type {number}
	         */
	        shadowOffsetX: 0,

	        /**
	         * @type {number}
	         */
	        shadowOffsetY: 0,

	        /**
	         * @type {number}
	         */
	        lineWidth: 1,

	        /**
	         * If stroke ignore scale
	         * @type {Boolean}
	         */
	        strokeNoScale: false,

	        // Bounding rect text configuration
	        // Not affected by element transform
	        /**
	         * @type {string}
	         */
	        text: null,

	        /**
	         * @type {string}
	         */
	        textFill: '#000',

	        /**
	         * @type {string}
	         */
	        textStroke: null,

	        /**
	         * 'inside', 'left', 'right', 'top', 'bottom'
	         * [x, y]
	         * @type {string|Array.<number>}
	         * @default 'inside'
	         */
	        textPosition: 'inside',

	        /**
	         * [x, y]
	         * @type {Array.<number>}
	         */
	        textOffset: null,

	        /**
	         * @type {string}
	         */
	        textBaseline: null,

	        /**
	         * @type {string}
	         */
	        textAlign: null,

	        /**
	         * @type {string}
	         */
	        textVerticalAlign: null,

	        /**
	         * Only useful in Path and Image element
	         * @type {number}
	         */
	        textDistance: 5,

	        /**
	         * Only useful in Path and Image element
	         * @type {number}
	         */
	        textShadowBlur: 0,

	        /**
	         * Only useful in Path and Image element
	         * @type {number}
	         */
	        textShadowOffsetX: 0,

	        /**
	         * Only useful in Path and Image element
	         * @type {number}
	         */
	        textShadowOffsetY: 0,

	        /**
	         * If transform text
	         * Only useful in Path and Image element
	         * @type {boolean}
	         */
	        textTransform: false,

	        /**
	         * Text rotate around position of Path or Image
	         * Only useful in Path and Image element and textTransform is false.
	         */
	        textRotation: 0,

	        /**
	         * @type {string}
	         * https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation
	         */
	        blend: null,

	        /**
	         * @param {CanvasRenderingContext2D} ctx
	         */
	        bind: function (ctx, el, prevEl) {
	            var style = this;
	            var prevStyle = prevEl && prevEl.style;
	            var firstDraw = !prevStyle;

	            for (var i = 0; i < STYLE_COMMON_PROPS.length; i++) {
	                var prop = STYLE_COMMON_PROPS[i];
	                var styleName = prop[0];

	                if (firstDraw || style[styleName] !== prevStyle[styleName]) {
	                    // FIXME Invalid property value will cause style leak from previous element.
	                    ctx[styleName] = style[styleName] || prop[1];
	                }
	            }

	            if ((firstDraw || style.fill !== prevStyle.fill)) {
	                ctx.fillStyle = style.fill;
	            }
	            if ((firstDraw || style.stroke !== prevStyle.stroke)) {
	                ctx.strokeStyle = style.stroke;
	            }
	            if ((firstDraw || style.opacity !== prevStyle.opacity)) {
	                ctx.globalAlpha = style.opacity == null ? 1 : style.opacity;
	            }

	            if ((firstDraw || style.blend !== prevStyle.blend)) {
	                ctx.globalCompositeOperation = style.blend || 'source-over';
	            }
	            if (this.hasStroke()) {
	                var lineWidth = style.lineWidth;
	                ctx.lineWidth = lineWidth / (
	                    (this.strokeNoScale && el && el.getLineScale) ? el.getLineScale() : 1
	                );
	            }
	        },

	        hasFill: function () {
	            var fill = this.fill;
	            return fill != null && fill !== 'none';
	        },

	        hasStroke: function () {
	            var stroke = this.stroke;
	            return stroke != null && stroke !== 'none' && this.lineWidth > 0;
	        },

	        /**
	         * Extend from other style
	         * @param {zrender/graphic/Style} otherStyle
	         * @param {boolean} overwrite
	         */
	        extendFrom: function (otherStyle, overwrite) {
	            if (otherStyle) {
	                var target = this;
	                for (var name in otherStyle) {
	                    if (otherStyle.hasOwnProperty(name)
	                        && (overwrite || ! target.hasOwnProperty(name))
	                    ) {
	                        target[name] = otherStyle[name];
	                    }
	                }
	            }
	        },

	        /**
	         * Batch setting style with a given object
	         * @param {Object|string} obj
	         * @param {*} [obj]
	         */
	        set: function (obj, value) {
	            if (typeof obj === 'string') {
	                this[obj] = value;
	            }
	            else {
	                this.extendFrom(obj, true);
	            }
	        },

	        /**
	         * Clone
	         * @return {zrender/graphic/Style} [description]
	         */
	        clone: function () {
	            var newStyle = new this.constructor();
	            newStyle.extendFrom(this, true);
	            return newStyle;
	        },

	        getGradient: function (ctx, obj, rect) {
	            var method = obj.type === 'radial' ? createRadialGradient : createLinearGradient;
	            var canvasGradient = method(ctx, obj, rect);
	            var colorStops = obj.colorStops;
	            for (var i = 0; i < colorStops.length; i++) {
	                canvasGradient.addColorStop(
	                    colorStops[i].offset, colorStops[i].color
	                );
	            }
	            return canvasGradient;
	        }
	    };

	    var styleProto = Style.prototype;
	    for (var i = 0; i < STYLE_COMMON_PROPS.length; i++) {
	        var prop = STYLE_COMMON_PROPS[i];
	        if (!(prop[0] in styleProto)) {
	            styleProto[prop[0]] = prop[1];
	        }
	    }

	    // Provide for others
	    Style.getGradient = styleProto.getGradient;

	    module.exports = Style;


/***/ },

/***/ 911:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Mixin for drawing text in a element bounding rect
	 * @module zrender/mixin/RectText
	 */



	    var textContain = __webpack_require__(165);
	    var BoundingRect = __webpack_require__(62);

	    var tmpRect = new BoundingRect();

	    var RectText = function () {};

	    function parsePercent(value, maxValue) {
	        if (typeof value === 'string') {
	            if (value.lastIndexOf('%') >= 0) {
	                return parseFloat(value) / 100 * maxValue;
	            }
	            return parseFloat(value);
	        }
	        return value;
	    }

	    RectText.prototype = {

	        constructor: RectText,

	        /**
	         * Draw text in a rect with specified position.
	         * @param  {CanvasRenderingContext} ctx
	         * @param  {Object} rect Displayable rect
	         * @return {Object} textRect Alternative precalculated text bounding rect
	         */
	        drawRectText: function (ctx, rect, textRect) {
	            var style = this.style;
	            var text = style.text;
	            // Convert to string
	            text != null && (text += '');
	            if (!text) {
	                return;
	            }

	            // FIXME
	            ctx.save();

	            var x;
	            var y;
	            var textPosition = style.textPosition;
	            var textOffset = style.textOffset;
	            var distance = style.textDistance;
	            var align = style.textAlign;
	            var font = style.textFont || style.font;
	            var baseline = style.textBaseline;
	            var verticalAlign = style.textVerticalAlign;

	            textRect = textRect || textContain.getBoundingRect(text, font, align, baseline);

	            // Transform rect to view space
	            var transform = this.transform;
	            if (!style.textTransform) {
	                if (transform) {
	                    tmpRect.copy(rect);
	                    tmpRect.applyTransform(transform);
	                    rect = tmpRect;
	                }
	            }
	            else {
	                this.setTransform(ctx);
	            }

	            // Text position represented by coord
	            if (textPosition instanceof Array) {
	                // Percent
	                x = rect.x + parsePercent(textPosition[0], rect.width);
	                y = rect.y + parsePercent(textPosition[1], rect.height);
	                align = align || 'left';
	                baseline = baseline || 'top';

	                if (verticalAlign) {
	                    switch (verticalAlign) {
	                        case 'middle':
	                            y -= textRect.height / 2 - textRect.lineHeight / 2;
	                            break;
	                        case 'bottom':
	                            y -= textRect.height - textRect.lineHeight / 2;
	                            break;
	                        default:
	                            y += textRect.lineHeight / 2;
	                    }
	                    // Force bseline to be middle
	                    baseline = 'middle';
	                }
	            }
	            else {
	                var res = textContain.adjustTextPositionOnRect(
	                    textPosition, rect, textRect, distance
	                );
	                x = res.x;
	                y = res.y;
	                // Default align and baseline when has textPosition
	                align = align || res.textAlign;
	                baseline = baseline || res.textBaseline;
	            }

	            if (textOffset) {
	                x += textOffset[0];
	                y += textOffset[1];
	            }

	            // Use canvas default left textAlign. Giving invalid value will cause state not change
	            ctx.textAlign = align || 'left';
	            // Use canvas default alphabetic baseline
	            ctx.textBaseline = baseline || 'alphabetic';

	            var textFill = style.textFill;
	            var textStroke = style.textStroke;
	            textFill && (ctx.fillStyle = textFill);
	            textStroke && (ctx.strokeStyle = textStroke);

	            // TODO Invalid font
	            ctx.font = font || '12px sans-serif';

	            // Text shadow
	            // Always set shadowBlur and shadowOffset to avoid leak from displayable
	            ctx.shadowBlur = style.textShadowBlur;
	            ctx.shadowColor = style.textShadowColor || 'transparent';
	            ctx.shadowOffsetX = style.textShadowOffsetX;
	            ctx.shadowOffsetY = style.textShadowOffsetY;

	            var textLines = text.split('\n');

	            if (style.textRotation) {
	                transform && ctx.translate(transform[4], transform[5]);
	                ctx.rotate(style.textRotation);
	                transform && ctx.translate(-transform[4], -transform[5]);
	            }

	            for (var i = 0; i < textLines.length; i++) {
	                textFill && ctx.fillText(textLines[i], x, y);
	                textStroke && ctx.strokeText(textLines[i], x, y);
	                y += textRect.lineHeight;
	            }

	            ctx.restore();
	        }
	    };

	    module.exports = RectText;


/***/ },

/***/ 918:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * 提供变换扩展
	 * @module zrender/mixin/Transformable
	 * @author pissang (https://www.github.com/pissang)
	 */


	    var matrix = __webpack_require__(120);
	    var vector = __webpack_require__(34);
	    var mIdentity = matrix.identity;

	    var EPSILON = 5e-5;

	    function isNotAroundZero(val) {
	        return val > EPSILON || val < -EPSILON;
	    }

	    /**
	     * @alias module:zrender/mixin/Transformable
	     * @constructor
	     */
	    var Transformable = function (opts) {
	        opts = opts || {};
	        // If there are no given position, rotation, scale
	        if (!opts.position) {
	            /**
	             * 平移
	             * @type {Array.<number>}
	             * @default [0, 0]
	             */
	            this.position = [0, 0];
	        }
	        if (opts.rotation == null) {
	            /**
	             * 旋转
	             * @type {Array.<number>}
	             * @default 0
	             */
	            this.rotation = 0;
	        }
	        if (!opts.scale) {
	            /**
	             * 缩放
	             * @type {Array.<number>}
	             * @default [1, 1]
	             */
	            this.scale = [1, 1];
	        }
	        /**
	         * 旋转和缩放的原点
	         * @type {Array.<number>}
	         * @default null
	         */
	        this.origin = this.origin || null;
	    };

	    var transformableProto = Transformable.prototype;
	    transformableProto.transform = null;

	    /**
	     * 判断是否需要有坐标变换
	     * 如果有坐标变换, 则从position, rotation, scale以及父节点的transform计算出自身的transform矩阵
	     */
	    transformableProto.needLocalTransform = function () {
	        return isNotAroundZero(this.rotation)
	            || isNotAroundZero(this.position[0])
	            || isNotAroundZero(this.position[1])
	            || isNotAroundZero(this.scale[0] - 1)
	            || isNotAroundZero(this.scale[1] - 1);
	    };

	    transformableProto.updateTransform = function () {
	        var parent = this.parent;
	        var parentHasTransform = parent && parent.transform;
	        var needLocalTransform = this.needLocalTransform();

	        var m = this.transform;
	        if (!(needLocalTransform || parentHasTransform)) {
	            m && mIdentity(m);
	            return;
	        }

	        m = m || matrix.create();

	        if (needLocalTransform) {
	            this.getLocalTransform(m);
	        }
	        else {
	            mIdentity(m);
	        }

	        // 应用父节点变换
	        if (parentHasTransform) {
	            if (needLocalTransform) {
	                matrix.mul(m, parent.transform, m);
	            }
	            else {
	                matrix.copy(m, parent.transform);
	            }
	        }
	        // 保存这个变换矩阵
	        this.transform = m;

	        this.invTransform = this.invTransform || matrix.create();
	        matrix.invert(this.invTransform, m);
	    };

	    transformableProto.getLocalTransform = function (m) {
	        m = m || [];
	        mIdentity(m);

	        var origin = this.origin;

	        var scale = this.scale;
	        var rotation = this.rotation;
	        var position = this.position;
	        if (origin) {
	            // Translate to origin
	            m[4] -= origin[0];
	            m[5] -= origin[1];
	        }
	        matrix.scale(m, m, scale);
	        if (rotation) {
	            matrix.rotate(m, m, rotation);
	        }
	        if (origin) {
	            // Translate back from origin
	            m[4] += origin[0];
	            m[5] += origin[1];
	        }

	        m[4] += position[0];
	        m[5] += position[1];

	        return m;
	    };
	    /**
	     * 将自己的transform应用到context上
	     * @param {Context2D} ctx
	     */
	    transformableProto.setTransform = function (ctx) {
	        var m = this.transform;
	        var dpr = ctx.dpr || 1;
	        if (m) {
	            ctx.setTransform(dpr * m[0], dpr * m[1], dpr * m[2], dpr * m[3], dpr * m[4], dpr * m[5]);
	        }
	        else {
	            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
	        }
	    };

	    transformableProto.restoreTransform = function (ctx) {
	        var m = this.transform;
	        var dpr = ctx.dpr || 1;
	        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
	    }

	    var tmpTransform = [];

	    /**
	     * 分解`transform`矩阵到`position`, `rotation`, `scale`
	     */
	    transformableProto.decomposeTransform = function () {
	        if (!this.transform) {
	            return;
	        }
	        var parent = this.parent;
	        var m = this.transform;
	        if (parent && parent.transform) {
	            // Get local transform and decompose them to position, scale, rotation
	            matrix.mul(tmpTransform, parent.invTransform, m);
	            m = tmpTransform;
	        }
	        var sx = m[0] * m[0] + m[1] * m[1];
	        var sy = m[2] * m[2] + m[3] * m[3];
	        var position = this.position;
	        var scale = this.scale;
	        if (isNotAroundZero(sx - 1)) {
	            sx = Math.sqrt(sx);
	        }
	        if (isNotAroundZero(sy - 1)) {
	            sy = Math.sqrt(sy);
	        }
	        if (m[0] < 0) {
	            sx = -sx;
	        }
	        if (m[3] < 0) {
	            sy = -sy;
	        }
	        position[0] = m[4];
	        position[1] = m[5];
	        scale[0] = sx;
	        scale[1] = sy;
	        this.rotation = Math.atan2(-m[1] / sy, m[0] / sx);
	    };

	    /**
	     * Get global scale
	     * @return {Array.<number>}
	     */
	    transformableProto.getGlobalScale = function () {
	        var m = this.transform;
	        if (!m) {
	            return [1, 1];
	        }
	        var sx = Math.sqrt(m[0] * m[0] + m[1] * m[1]);
	        var sy = Math.sqrt(m[2] * m[2] + m[3] * m[3]);
	        if (m[0] < 0) {
	            sx = -sx;
	        }
	        if (m[3] < 0) {
	            sy = -sy;
	        }
	        return [sx, sy];
	    };
	    /**
	     * 变换坐标位置到 shape 的局部坐标空间
	     * @method
	     * @param {number} x
	     * @param {number} y
	     * @return {Array.<number>}
	     */
	    transformableProto.transformCoordToLocal = function (x, y) {
	        var v2 = [x, y];
	        var invTransform = this.invTransform;
	        if (invTransform) {
	            vector.applyTransform(v2, v2, invTransform);
	        }
	        return v2;
	    };

	    /**
	     * 变换局部坐标位置到全局坐标空间
	     * @method
	     * @param {number} x
	     * @param {number} y
	     * @return {Array.<number>}
	     */
	    transformableProto.transformCoordToGlobal = function (x, y) {
	        var v2 = [x, y];
	        var transform = this.transform;
	        if (transform) {
	            vector.applyTransform(v2, v2, transform);
	        }
	        return v2;
	    };

	    module.exports = Transformable;



/***/ },

/***/ 919:
/***/ function(module, exports, __webpack_require__) {

	

	if (!__webpack_require__(77).canvasSupported) {
	    var urn = 'urn:schemas-microsoft-com:vml';

	    var createNode;
	    var win = window;
	    var doc = win.document;

	    var vmlInited = false;

	    try {
	        !doc.namespaces.zrvml && doc.namespaces.add('zrvml', urn);
	        createNode = function (tagName) {
	            return doc.createElement('<zrvml:' + tagName + ' class="zrvml">');
	        };
	    }
	    catch (e) {
	        createNode = function (tagName) {
	            return doc.createElement('<' + tagName + ' xmlns="' + urn + '" class="zrvml">');
	        };
	    }

	    // From raphael
	    var initVML = function () {
	        if (vmlInited) {
	            return;
	        }
	        vmlInited = true;

	        var styleSheets = doc.styleSheets;
	        if (styleSheets.length < 31) {
	            doc.createStyleSheet().addRule('.zrvml', 'behavior:url(#default#VML)');
	        }
	        else {
	            // http://msdn.microsoft.com/en-us/library/ms531194%28VS.85%29.aspx
	            styleSheets[0].addRule('.zrvml', 'behavior:url(#default#VML)');
	        }
	    };

	    // Not useing return to avoid error when converting to CommonJS module
	    module.exports = {
	        doc: doc,
	        initVML: initVML,
	        createNode: createNode
	    };
	}


/***/ },

/***/ 958:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.saveAllDatas = exports.stepChange = undefined;

	var _defineProperty2 = __webpack_require__(7);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _actionType = __webpack_require__(25);

	var Types = _interopRequireWildcard(_actionType);

	var _api = __webpack_require__(40);

	var _redux = __webpack_require__(47);

	var _global = __webpack_require__(15);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var stepChange = exports.stepChange = function stepChange(id, config, step) {
	    var _ref;

	    return _ref = {}, (0, _defineProperty3["default"])(_ref, _api.API, { types: Types.stepContainer.requestStepConfig, apiConfig: config }), (0, _defineProperty3["default"])(_ref, 'id', id), (0, _defineProperty3["default"])(_ref, 'step', step), _ref;
	};
	var saveAllDatas = exports.saveAllDatas = function saveAllDatas(id, config) {
	    var _ref2;

	    return _ref2 = {}, (0, _defineProperty3["default"])(_ref2, _api.API, { types: Types.stepContainer.requestSaveAllDatas, apiConfig: config }), (0, _defineProperty3["default"])(_ref2, 'id', id), _ref2;
	};

/***/ },

/***/ 961:
377,

/***/ 965:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(6);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(5);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _css = __webpack_require__(1688);

	var _modal = __webpack_require__(49);

	var _modal2 = _interopRequireDefault(_modal);

	var _css2 = __webpack_require__(30);

	var _button = __webpack_require__(28);

	var _button2 = _interopRequireDefault(_button);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _moment = __webpack_require__(22);

	var _moment2 = _interopRequireDefault(_moment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	_moment2["default"].locale('zh-cn');
	var ButtonGroup = _button2["default"].Group;
	var confirm = _modal2["default"].confirm;

	var HeadComponent = function (_Component) {
	    (0, _inherits3["default"])(HeadComponent, _Component);

	    function HeadComponent(props) {
	        (0, _classCallCheck3["default"])(this, HeadComponent);
	        return (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));
	    }

	    HeadComponent.prototype.render = function render() {
	        var buttonConfigs = this.props.buttonConfigs;
	        var buttonGroup = buttonConfigs.map(function (buttonList, i) {
	            var btn = typeof buttonList.headName == 'function' ? buttonList.headName() : buttonList.headName;
	            //if(!btn.key) btn.key='list_head_btn_'+i;
	            return btn;
	        });
	        return _react2["default"].createElement(
	            'div',
	            null,
	            _react2["default"].createElement(
	                ButtonGroup,
	                null,
	                buttonGroup
	            )
	        );
	    };

	    return HeadComponent;
	}(_react.Component);

	exports["default"] = HeadComponent;
	module.exports = exports['default'];

/***/ },

/***/ 967:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(6);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(5);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _css = __webpack_require__(1688);

	var _modal = __webpack_require__(49);

	var _modal2 = _interopRequireDefault(_modal);

	var _css2 = __webpack_require__(44);

	var _input = __webpack_require__(85);

	var _input2 = _interopRequireDefault(_input);

	var _css3 = __webpack_require__(255);

	var _switch = __webpack_require__(244);

	var _switch2 = _interopRequireDefault(_switch);

	var _css4 = __webpack_require__(233);

	var _inputNumber = __webpack_require__(197);

	var _inputNumber2 = _interopRequireDefault(_inputNumber);

	var _css5 = __webpack_require__(254);

	var _slider = __webpack_require__(243);

	var _slider2 = _interopRequireDefault(_slider);

	var _css6 = __webpack_require__(160);

	var _datePicker = __webpack_require__(138);

	var _datePicker2 = _interopRequireDefault(_datePicker);

	var _css7 = __webpack_require__(171);

	var _timePicker = __webpack_require__(245);

	var _timePicker2 = _interopRequireDefault(_timePicker);

	var _extends2 = __webpack_require__(3);

	var _extends3 = _interopRequireDefault(_extends2);

	var _css8 = __webpack_require__(30);

	var _button = __webpack_require__(28);

	var _button2 = _interopRequireDefault(_button);

	var _css9 = __webpack_require__(93);

	var _radio = __webpack_require__(74);

	var _radio2 = _interopRequireDefault(_radio);

	var _css10 = __webpack_require__(1689);

	var _select = __webpack_require__(103);

	var _select2 = _interopRequireDefault(_select);

	var _css11 = __webpack_require__(63);

	var _form = __webpack_require__(59);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _moment = __webpack_require__(22);

	var _moment2 = _interopRequireDefault(_moment);

	var _component = __webpack_require__(13);

	var _component2 = _interopRequireDefault(_component);

	var _customComponent = __webpack_require__(1293);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	_moment2["default"].locale('zh-cn');
	var FormItem = _form2["default"].Item;
	var Option = _select2["default"].Option;
	var RadioButton = _radio2["default"].Button;
	var RadioGroup = _radio2["default"].Group;

	var Demo = _form2["default"].create()(_react2["default"].createClass({
	    displayName: 'Demo',
	    getInitialState: function getInitialState() {
	        return { visible: false };
	    },
	    handleSubmit: function handleSubmit() {
	        console.log(this.props.form.getFieldsValue());
	        var values = this.props.form.getFieldsValue();
	        this.hideModal();
	        // this.props.onOk(values);
	        // this.props.buttonActions.requestDeleteData();
	        if (this.props.pageName == '新增') {
	            this.props.buttonActions.requestAddData();
	        } else if (this.props.pageName == '编辑') {
	            this.props.buttonActions.requestUpateData();
	        }
	    },
	    showModal: function showModal() {
	        this.setState({ visible: true });
	    },
	    hideModal: function hideModal() {
	        this.setState({ visible: false });
	    },
	    normFile: function normFile(e) {
	        if (Array.isArray(e)) {
	            return e;
	        }
	        return e && e.fileList;
	    },
	    render: function render() {
	        if (!this.props.args || this.props.args.length == 0) return _react2["default"].createElement(
	            'div',
	            null,
	            '\u6682\u65E0\u6570\u636E'
	        );
	        var args = this.props.args;
	        var name = this.props.pageName;
	        var getFieldDecorator = this.props.form.getFieldDecorator;

	        return _react2["default"].createElement(
	            'div',
	            null,
	            _react2["default"].createElement(
	                _button2["default"],
	                { type: 'primary', onClick: this.showModal, icon: 'cloud' },
	                name
	            ),
	            _react2["default"].createElement(
	                _modal2["default"],
	                { title: name + "页面", visible: this.state.visible, onOk: this.handleSubmit, onCancel: this.hideModal, maskClosable: false },
	                _react2["default"].createElement(
	                    _form2["default"],
	                    { onSubmit: this.onSubmit },
	                    args.map(function (arg, i) {
	                        //const labelCol = arg.labelCol;
	                        //const wrapperCol = arg.wrapperCol;
	                        return _react2["default"].createElement(
	                            FormItem,
	                            {
	                                label: arg.name,
	                                labelCol: { span: 4 },
	                                wrapperCol: { span: 20 }
	                            },
	                            function () {
	                                switch (arg.type) {
	                                    case 'timePicker':
	                                        return _react2["default"].createElement(_timePicker2["default"], (0, _extends3["default"])({ defaultValue: (0, _moment2["default"])(arg.defaultValue, 'HH:mm:ss') }, getFieldDecorator(arg.field, { initialValue: (0, _moment2["default"])(arg.defaultValue, 'HH:MM') })));
	                                    case 'datePicker':
	                                        return _react2["default"].createElement(_datePicker2["default"], (0, _extends3["default"])({ defaultValue: (0, _moment2["default"])(new Date(), 'YYYY-MM-DD') }, getFieldDecorator(arg.field, { initialValue: (0, _moment2["default"])(new Date(), 'YYYY-MM-DD') })));
	                                    case 'slider':
	                                        return _react2["default"].createElement(_slider2["default"], (0, _extends3["default"])({ min: arg.min, max: arg.max }, getFieldDecorator(arg.field, { initialValue: arg.defaultValue })));
	                                    case 'inputNumber':
	                                        return _react2["default"].createElement(_inputNumber2["default"], (0, _extends3["default"])({ defaultValue: arg.defaultValue }, getFieldDecorator(arg.field, { initialValue: arg.defaultValue })));
	                                    case 'switch':
	                                        return _react2["default"].createElement(_switch2["default"], (0, _extends3["default"])({ defaultValue: arg.defaultValue }, getFieldDecorator(arg.field, { initialValue: arg.defaultValue, valuePropName: 'checked' })));
	                                    case 'checkbox':
	                                        return _react2["default"].createElement(CheckboxGroup, (0, _extends3["default"])({ defaultValue: arg.defaultValue, options: arg.options }, getFieldDecorator(arg.field, { initialValue: arg.defaultValue })));
	                                    case 'select':
	                                        return _react2["default"].createElement(
	                                            _select2["default"],
	                                            (0, _extends3["default"])({ defaultValue: arg.defaultValue }, getFieldDecorator(arg.field, { rules: arg.validate, initialValue: arg.defaultValue })),
	                                            arg.options.map(function (v) {
	                                                return _react2["default"].createElement(
	                                                    Option,
	                                                    { value: v },
	                                                    v
	                                                );
	                                            })
	                                        );
	                                    case 'radio':
	                                        return _react2["default"].createElement(
	                                            RadioGroup,
	                                            (0, _extends3["default"])({ defaultValue: arg.defaultValue }, getFieldDecorator(arg.field, { initialValue: arg.defaultValue })),
	                                            arg.options.map(function (v) {
	                                                return _react2["default"].createElement(
	                                                    _radio2["default"],
	                                                    { key: v.value, value: v.value },
	                                                    v.label
	                                                );
	                                            })
	                                        );
	                                    default:
	                                        return _react2["default"].createElement(_input2["default"], (0, _extends3["default"])({ defaultValue: arg.defaultValue, placeholder: arg.placeholder ? arg.placeholder : "请输入..." }, getFieldDecorator(arg.field, { initialValue: arg.defaultValue })));
	                                }
	                            }()
	                        );
	                    })
	                )
	            )
	        );
	    }
	}));

	var MyForm = function (_Component) {
	    (0, _inherits3["default"])(MyForm, _Component);

	    function MyForm(props) {
	        (0, _classCallCheck3["default"])(this, MyForm);
	        return (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));
	    }

	    MyForm.prototype.render = function render() {
	        var args = this.props.args;
	        var pageName = this.props.pageName;
	        return _react2["default"].createElement(Demo, { args: args, pageName: pageName, addSubmit: this.props.addSubmit, buttonActions: this.props.buttonActions });
	    };

	    return MyForm;
	}(_react.Component);

	exports["default"] = (0, _component2["default"])('aiForm', { normalApi: _customComponent.normalApi })(MyForm);
	module.exports = exports['default'];

/***/ },

/***/ 974:
17,

/***/ 986:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 * @providesModule ReactCSSTransitionGroup
	 */

	'use strict';

	var React = __webpack_require__(240);

	var assign = __webpack_require__(12);

	var ReactTransitionGroup = __webpack_require__(990);
	var ReactCSSTransitionGroupChild = __webpack_require__(987);

	function createTransitionTimeoutPropValidator(transitionType) {
	  var timeoutPropName = 'transition' + transitionType + 'Timeout';
	  var enabledPropName = 'transition' + transitionType;

	  return function (props) {
	    // If the transition is enabled
	    if (props[enabledPropName]) {
	      // If no timeout duration is provided
	      if (props[timeoutPropName] == null) {
	        return new Error(timeoutPropName + ' wasn\'t supplied to ReactCSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.');

	        // If the duration isn't a number
	      } else if (typeof props[timeoutPropName] !== 'number') {
	          return new Error(timeoutPropName + ' must be a number (in milliseconds)');
	        }
	    }
	  };
	}

	var ReactCSSTransitionGroup = React.createClass({
	  displayName: 'ReactCSSTransitionGroup',

	  propTypes: {
	    transitionName: ReactCSSTransitionGroupChild.propTypes.name,

	    transitionAppear: React.PropTypes.bool,
	    transitionEnter: React.PropTypes.bool,
	    transitionLeave: React.PropTypes.bool,
	    transitionAppearTimeout: createTransitionTimeoutPropValidator('Appear'),
	    transitionEnterTimeout: createTransitionTimeoutPropValidator('Enter'),
	    transitionLeaveTimeout: createTransitionTimeoutPropValidator('Leave')
	  },

	  getDefaultProps: function () {
	    return {
	      transitionAppear: false,
	      transitionEnter: true,
	      transitionLeave: true
	    };
	  },

	  _wrapChild: function (child) {
	    // We need to provide this childFactory so that
	    // ReactCSSTransitionGroupChild can receive updates to name, enter, and
	    // leave while it is leaving.
	    return React.createElement(ReactCSSTransitionGroupChild, {
	      name: this.props.transitionName,
	      appear: this.props.transitionAppear,
	      enter: this.props.transitionEnter,
	      leave: this.props.transitionLeave,
	      appearTimeout: this.props.transitionAppearTimeout,
	      enterTimeout: this.props.transitionEnterTimeout,
	      leaveTimeout: this.props.transitionLeaveTimeout
	    }, child);
	  },

	  render: function () {
	    return React.createElement(ReactTransitionGroup, assign({}, this.props, { childFactory: this._wrapChild }));
	  }
	});

	module.exports = ReactCSSTransitionGroup;

/***/ },

/***/ 987:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 * @providesModule ReactCSSTransitionGroupChild
	 */

	'use strict';

	var React = __webpack_require__(240);
	var ReactDOM = __webpack_require__(241);

	var CSSCore = __webpack_require__(992);
	var ReactTransitionEvents = __webpack_require__(989);

	var onlyChild = __webpack_require__(405);

	// We don't remove the element from the DOM until we receive an animationend or
	// transitionend event. If the user screws up and forgets to add an animation
	// their node will be stuck in the DOM forever, so we detect if an animation
	// does not start and if it doesn't, we just call the end listener immediately.
	var TICK = 17;

	var ReactCSSTransitionGroupChild = React.createClass({
	  displayName: 'ReactCSSTransitionGroupChild',

	  propTypes: {
	    name: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.shape({
	      enter: React.PropTypes.string,
	      leave: React.PropTypes.string,
	      active: React.PropTypes.string
	    }), React.PropTypes.shape({
	      enter: React.PropTypes.string,
	      enterActive: React.PropTypes.string,
	      leave: React.PropTypes.string,
	      leaveActive: React.PropTypes.string,
	      appear: React.PropTypes.string,
	      appearActive: React.PropTypes.string
	    })]).isRequired,

	    // Once we require timeouts to be specified, we can remove the
	    // boolean flags (appear etc.) and just accept a number
	    // or a bool for the timeout flags (appearTimeout etc.)
	    appear: React.PropTypes.bool,
	    enter: React.PropTypes.bool,
	    leave: React.PropTypes.bool,
	    appearTimeout: React.PropTypes.number,
	    enterTimeout: React.PropTypes.number,
	    leaveTimeout: React.PropTypes.number
	  },

	  transition: function (animationType, finishCallback, userSpecifiedDelay) {
	    var node = ReactDOM.findDOMNode(this);

	    if (!node) {
	      if (finishCallback) {
	        finishCallback();
	      }
	      return;
	    }

	    var className = this.props.name[animationType] || this.props.name + '-' + animationType;
	    var activeClassName = this.props.name[animationType + 'Active'] || className + '-active';
	    var timeout = null;

	    var endListener = function (e) {
	      if (e && e.target !== node) {
	        return;
	      }

	      clearTimeout(timeout);

	      CSSCore.removeClass(node, className);
	      CSSCore.removeClass(node, activeClassName);

	      ReactTransitionEvents.removeEndEventListener(node, endListener);

	      // Usually this optional callback is used for informing an owner of
	      // a leave animation and telling it to remove the child.
	      if (finishCallback) {
	        finishCallback();
	      }
	    };

	    CSSCore.addClass(node, className);

	    // Need to do this to actually trigger a transition.
	    this.queueClass(activeClassName);

	    // If the user specified a timeout delay.
	    if (userSpecifiedDelay) {
	      // Clean-up the animation after the specified delay
	      timeout = setTimeout(endListener, userSpecifiedDelay);
	      this.transitionTimeouts.push(timeout);
	    } else {
	      // DEPRECATED: this listener will be removed in a future version of react
	      ReactTransitionEvents.addEndEventListener(node, endListener);
	    }
	  },

	  queueClass: function (className) {
	    this.classNameQueue.push(className);

	    if (!this.timeout) {
	      this.timeout = setTimeout(this.flushClassNameQueue, TICK);
	    }
	  },

	  flushClassNameQueue: function () {
	    if (this.isMounted()) {
	      this.classNameQueue.forEach(CSSCore.addClass.bind(CSSCore, ReactDOM.findDOMNode(this)));
	    }
	    this.classNameQueue.length = 0;
	    this.timeout = null;
	  },

	  componentWillMount: function () {
	    this.classNameQueue = [];
	    this.transitionTimeouts = [];
	  },

	  componentWillUnmount: function () {
	    if (this.timeout) {
	      clearTimeout(this.timeout);
	    }
	    this.transitionTimeouts.forEach(function (timeout) {
	      clearTimeout(timeout);
	    });
	  },

	  componentWillAppear: function (done) {
	    if (this.props.appear) {
	      this.transition('appear', done, this.props.appearTimeout);
	    } else {
	      done();
	    }
	  },

	  componentWillEnter: function (done) {
	    if (this.props.enter) {
	      this.transition('enter', done, this.props.enterTimeout);
	    } else {
	      done();
	    }
	  },

	  componentWillLeave: function (done) {
	    if (this.props.leave) {
	      this.transition('leave', done, this.props.leaveTimeout);
	    } else {
	      done();
	    }
	  },

	  render: function () {
	    return onlyChild(this.props.children);
	  }
	});

	module.exports = ReactCSSTransitionGroupChild;

/***/ },

/***/ 988:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks static-only
	 * @providesModule ReactTransitionChildMapping
	 */

	'use strict';

	var flattenChildren = __webpack_require__(404);

	var ReactTransitionChildMapping = {
	  /**
	   * Given `this.props.children`, return an object mapping key to child. Just
	   * simple syntactic sugar around flattenChildren().
	   *
	   * @param {*} children `this.props.children`
	   * @return {object} Mapping of key to child
	   */
	  getChildMapping: function (children) {
	    if (!children) {
	      return children;
	    }
	    return flattenChildren(children);
	  },

	  /**
	   * When you're adding or removing children some may be added or removed in the
	   * same render pass. We want to show *both* since we want to simultaneously
	   * animate elements in and out. This function takes a previous set of keys
	   * and a new set of keys and merges them with its best guess of the correct
	   * ordering. In the future we may expose some of the utilities in
	   * ReactMultiChild to make this easy, but for now React itself does not
	   * directly have this concept of the union of prevChildren and nextChildren
	   * so we implement it here.
	   *
	   * @param {object} prev prev children as returned from
	   * `ReactTransitionChildMapping.getChildMapping()`.
	   * @param {object} next next children as returned from
	   * `ReactTransitionChildMapping.getChildMapping()`.
	   * @return {object} a key set that contains all keys in `prev` and all keys
	   * in `next` in a reasonable order.
	   */
	  mergeChildMappings: function (prev, next) {
	    prev = prev || {};
	    next = next || {};

	    function getValueForKey(key) {
	      if (next.hasOwnProperty(key)) {
	        return next[key];
	      } else {
	        return prev[key];
	      }
	    }

	    // For each key of `next`, the list of keys to insert before that key in
	    // the combined list
	    var nextKeysPending = {};

	    var pendingKeys = [];
	    for (var prevKey in prev) {
	      if (next.hasOwnProperty(prevKey)) {
	        if (pendingKeys.length) {
	          nextKeysPending[prevKey] = pendingKeys;
	          pendingKeys = [];
	        }
	      } else {
	        pendingKeys.push(prevKey);
	      }
	    }

	    var i;
	    var childMapping = {};
	    for (var nextKey in next) {
	      if (nextKeysPending.hasOwnProperty(nextKey)) {
	        for (i = 0; i < nextKeysPending[nextKey].length; i++) {
	          var pendingNextKey = nextKeysPending[nextKey][i];
	          childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
	        }
	      }
	      childMapping[nextKey] = getValueForKey(nextKey);
	    }

	    // Finally, add the keys which didn't appear before any key in `next`
	    for (i = 0; i < pendingKeys.length; i++) {
	      childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
	    }

	    return childMapping;
	  }
	};

	module.exports = ReactTransitionChildMapping;

/***/ },

/***/ 989:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactTransitionEvents
	 */

	'use strict';

	var ExecutionEnvironment = __webpack_require__(23);

	/**
	 * EVENT_NAME_MAP is used to determine which event fired when a
	 * transition/animation ends, based on the style property used to
	 * define that event.
	 */
	var EVENT_NAME_MAP = {
	  transitionend: {
	    'transition': 'transitionend',
	    'WebkitTransition': 'webkitTransitionEnd',
	    'MozTransition': 'mozTransitionEnd',
	    'OTransition': 'oTransitionEnd',
	    'msTransition': 'MSTransitionEnd'
	  },

	  animationend: {
	    'animation': 'animationend',
	    'WebkitAnimation': 'webkitAnimationEnd',
	    'MozAnimation': 'mozAnimationEnd',
	    'OAnimation': 'oAnimationEnd',
	    'msAnimation': 'MSAnimationEnd'
	  }
	};

	var endEvents = [];

	function detectEvents() {
	  var testEl = document.createElement('div');
	  var style = testEl.style;

	  // On some platforms, in particular some releases of Android 4.x,
	  // the un-prefixed "animation" and "transition" properties are defined on the
	  // style object but the events that fire will still be prefixed, so we need
	  // to check if the un-prefixed events are useable, and if not remove them
	  // from the map
	  if (!('AnimationEvent' in window)) {
	    delete EVENT_NAME_MAP.animationend.animation;
	  }

	  if (!('TransitionEvent' in window)) {
	    delete EVENT_NAME_MAP.transitionend.transition;
	  }

	  for (var baseEventName in EVENT_NAME_MAP) {
	    var baseEvents = EVENT_NAME_MAP[baseEventName];
	    for (var styleName in baseEvents) {
	      if (styleName in style) {
	        endEvents.push(baseEvents[styleName]);
	        break;
	      }
	    }
	  }
	}

	if (ExecutionEnvironment.canUseDOM) {
	  detectEvents();
	}

	// We use the raw {add|remove}EventListener() call because EventListener
	// does not know how to remove event listeners and we really should
	// clean up. Also, these events are not triggered in older browsers
	// so we should be A-OK here.

	function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
	}

	function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	}

	var ReactTransitionEvents = {
	  addEndEventListener: function (node, eventListener) {
	    if (endEvents.length === 0) {
	      // If CSS transitions are not supported, trigger an "end animation"
	      // event immediately.
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },

	  removeEndEventListener: function (node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  }
	};

	module.exports = ReactTransitionEvents;

/***/ },

/***/ 990:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactTransitionGroup
	 */

	'use strict';

	var React = __webpack_require__(240);
	var ReactTransitionChildMapping = __webpack_require__(988);

	var assign = __webpack_require__(12);
	var emptyFunction = __webpack_require__(45);

	var ReactTransitionGroup = React.createClass({
	  displayName: 'ReactTransitionGroup',

	  propTypes: {
	    component: React.PropTypes.any,
	    childFactory: React.PropTypes.func
	  },

	  getDefaultProps: function () {
	    return {
	      component: 'span',
	      childFactory: emptyFunction.thatReturnsArgument
	    };
	  },

	  getInitialState: function () {
	    return {
	      children: ReactTransitionChildMapping.getChildMapping(this.props.children)
	    };
	  },

	  componentWillMount: function () {
	    this.currentlyTransitioningKeys = {};
	    this.keysToEnter = [];
	    this.keysToLeave = [];
	  },

	  componentDidMount: function () {
	    var initialChildMapping = this.state.children;
	    for (var key in initialChildMapping) {
	      if (initialChildMapping[key]) {
	        this.performAppear(key);
	      }
	    }
	  },

	  componentWillReceiveProps: function (nextProps) {
	    var nextChildMapping = ReactTransitionChildMapping.getChildMapping(nextProps.children);
	    var prevChildMapping = this.state.children;

	    this.setState({
	      children: ReactTransitionChildMapping.mergeChildMappings(prevChildMapping, nextChildMapping)
	    });

	    var key;

	    for (key in nextChildMapping) {
	      var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
	      if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) {
	        this.keysToEnter.push(key);
	      }
	    }

	    for (key in prevChildMapping) {
	      var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(key);
	      if (prevChildMapping[key] && !hasNext && !this.currentlyTransitioningKeys[key]) {
	        this.keysToLeave.push(key);
	      }
	    }

	    // If we want to someday check for reordering, we could do it here.
	  },

	  componentDidUpdate: function () {
	    var keysToEnter = this.keysToEnter;
	    this.keysToEnter = [];
	    keysToEnter.forEach(this.performEnter);

	    var keysToLeave = this.keysToLeave;
	    this.keysToLeave = [];
	    keysToLeave.forEach(this.performLeave);
	  },

	  performAppear: function (key) {
	    this.currentlyTransitioningKeys[key] = true;

	    var component = this.refs[key];

	    if (component.componentWillAppear) {
	      component.componentWillAppear(this._handleDoneAppearing.bind(this, key));
	    } else {
	      this._handleDoneAppearing(key);
	    }
	  },

	  _handleDoneAppearing: function (key) {
	    var component = this.refs[key];
	    if (component.componentDidAppear) {
	      component.componentDidAppear();
	    }

	    delete this.currentlyTransitioningKeys[key];

	    var currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children);

	    if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
	      // This was removed before it had fully appeared. Remove it.
	      this.performLeave(key);
	    }
	  },

	  performEnter: function (key) {
	    this.currentlyTransitioningKeys[key] = true;

	    var component = this.refs[key];

	    if (component.componentWillEnter) {
	      component.componentWillEnter(this._handleDoneEntering.bind(this, key));
	    } else {
	      this._handleDoneEntering(key);
	    }
	  },

	  _handleDoneEntering: function (key) {
	    var component = this.refs[key];
	    if (component.componentDidEnter) {
	      component.componentDidEnter();
	    }

	    delete this.currentlyTransitioningKeys[key];

	    var currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children);

	    if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
	      // This was removed before it had fully entered. Remove it.
	      this.performLeave(key);
	    }
	  },

	  performLeave: function (key) {
	    this.currentlyTransitioningKeys[key] = true;

	    var component = this.refs[key];
	    if (component.componentWillLeave) {
	      component.componentWillLeave(this._handleDoneLeaving.bind(this, key));
	    } else {
	      // Note that this is somewhat dangerous b/c it calls setState()
	      // again, effectively mutating the component before all the work
	      // is done.
	      this._handleDoneLeaving(key);
	    }
	  },

	  _handleDoneLeaving: function (key) {
	    var component = this.refs[key];

	    if (component.componentDidLeave) {
	      component.componentDidLeave();
	    }

	    delete this.currentlyTransitioningKeys[key];

	    var currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children);

	    if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
	      // This entered again before it fully left. Add it again.
	      this.performEnter(key);
	    } else {
	      this.setState(function (state) {
	        var newChildren = assign({}, state.children);
	        delete newChildren[key];
	        return { children: newChildren };
	      });
	    }
	  },

	  render: function () {
	    // TODO: we could get rid of the need for the wrapper node
	    // by cloning a single child
	    var childrenToRender = [];
	    for (var key in this.state.children) {
	      var child = this.state.children[key];
	      if (child) {
	        // You may need to apply reactive updates to a child as it is leaving.
	        // The normal React way to do it won't work since the child will have
	        // already been removed. In case you need this behavior you can provide
	        // a childFactory function to wrap every child, even the ones that are
	        // leaving.
	        childrenToRender.push(React.cloneElement(this.props.childFactory(child), { ref: key, key: key }));
	      }
	    }
	    return React.createElement(this.props.component, this.props, childrenToRender);
	  }
	});

	module.exports = ReactTransitionGroup;

/***/ },

/***/ 992:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule CSSCore
	 * @typechecks
	 */

	'use strict';

	var invariant = __webpack_require__(10);

	/**
	 * The CSSCore module specifies the API (and implements most of the methods)
	 * that should be used when dealing with the display of elements (via their
	 * CSS classes and visibility on screen. It is an API focused on mutating the
	 * display and not reading it as no logical state should be encoded in the
	 * display of elements.
	 */

	var CSSCore = {

	  /**
	   * Adds the class passed in to the element if it doesn't already have it.
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {DOMElement} the element passed in
	   */
	  addClass: function (element, className) {
	    !!/\s/.test(className) ?  true ? invariant(false, 'CSSCore.addClass takes only a single class name. "%s" contains ' + 'multiple classes.', className) : invariant(false) : undefined;

	    if (className) {
	      if (element.classList) {
	        element.classList.add(className);
	      } else if (!CSSCore.hasClass(element, className)) {
	        element.className = element.className + ' ' + className;
	      }
	    }
	    return element;
	  },

	  /**
	   * Removes the class passed in from the element
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {DOMElement} the element passed in
	   */
	  removeClass: function (element, className) {
	    !!/\s/.test(className) ?  true ? invariant(false, 'CSSCore.removeClass takes only a single class name. "%s" contains ' + 'multiple classes.', className) : invariant(false) : undefined;

	    if (className) {
	      if (element.classList) {
	        element.classList.remove(className);
	      } else if (CSSCore.hasClass(element, className)) {
	        element.className = element.className.replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ') // multiple spaces to one
	        .replace(/^\s*|\s*$/g, ''); // trim the ends
	      }
	    }
	    return element;
	  },

	  /**
	   * Helper to add or remove a class from an element based on a condition.
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @param {*} bool condition to whether to add or remove the class
	   * @return {DOMElement} the element passed in
	   */
	  conditionClass: function (element, className, bool) {
	    return (bool ? CSSCore.addClass : CSSCore.removeClass)(element, className);
	  },

	  /**
	   * Tests whether the element has the class specified.
	   *
	   * @param {DOMNode|DOMWindow} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {boolean} true if the element has the class, false if not
	   */
	  hasClass: function (element, className) {
	    !!/\s/.test(className) ?  true ? invariant(false, 'CSS.hasClass takes only a single class name.') : invariant(false) : undefined;
	    if (element.classList) {
	      return !!className && element.classList.contains(className);
	    }
	    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
	  }

	};

	module.exports = CSSCore;

/***/ },

/***/ 998:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _PropTypes = __webpack_require__(193);

	/**
	 * A mixin that adds the "history" instance variable to components.
	 */
	var History = {

	  contextTypes: {
	    history: _PropTypes.history
	  },

	  componentWillMount: function componentWillMount() {
	    this.history = this.context.history;
	  }

	};

	exports['default'] = History;
	module.exports = exports['default'];

/***/ },

/***/ 999:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Link = __webpack_require__(891);

	var _Link2 = _interopRequireDefault(_Link);

	/**
	 * An <IndexLink> is used to link to an <IndexRoute>.
	 */

	var IndexLink = (function (_Component) {
	  _inherits(IndexLink, _Component);

	  function IndexLink() {
	    _classCallCheck(this, IndexLink);

	    _Component.apply(this, arguments);
	  }

	  IndexLink.prototype.render = function render() {
	    return _react2['default'].createElement(_Link2['default'], _extends({}, this.props, { onlyActiveOnIndex: true }));
	  };

	  return IndexLink;
	})(_react.Component);

	exports['default'] = IndexLink;
	module.exports = exports['default'];

/***/ },

/***/ 1000:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _warning = __webpack_require__(50);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(75);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Redirect = __webpack_require__(892);

	var _Redirect2 = _interopRequireDefault(_Redirect);

	var _PropTypes = __webpack_require__(193);

	var _React$PropTypes = _react2['default'].PropTypes;
	var string = _React$PropTypes.string;
	var object = _React$PropTypes.object;

	/**
	 * An <IndexRedirect> is used to redirect from an indexRoute.
	 */

	var IndexRedirect = (function (_Component) {
	  _inherits(IndexRedirect, _Component);

	  function IndexRedirect() {
	    _classCallCheck(this, IndexRedirect);

	    _Component.apply(this, arguments);
	  }

	  /* istanbul ignore next: sanity check */

	  IndexRedirect.prototype.render = function render() {
	     true ?  true ? _invariant2['default'](false, '<IndexRedirect> elements are for router configuration only and should not be rendered') : _invariant2['default'](false) : undefined;
	  };

	  return IndexRedirect;
	})(_react.Component);

	IndexRedirect.propTypes = {
	  to: string.isRequired,
	  query: object,
	  state: object,
	  onEnter: _PropTypes.falsy,
	  children: _PropTypes.falsy
	};

	IndexRedirect.createRouteFromReactElement = function (element, parentRoute) {
	  /* istanbul ignore else: sanity check */
	  if (parentRoute) {
	    parentRoute.indexRoute = _Redirect2['default'].createRouteFromReactElement(element);
	  } else {
	     true ? _warning2['default'](false, 'An <IndexRedirect> does not make sense at the root of your route config') : undefined;
	  }
	};

	exports['default'] = IndexRedirect;
	module.exports = exports['default'];

/***/ },

/***/ 1001:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _warning = __webpack_require__(50);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(75);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _RouteUtils = __webpack_require__(163);

	var _PropTypes = __webpack_require__(193);

	var func = _react2['default'].PropTypes.func;

	/**
	 * An <IndexRoute> is used to specify its parent's <Route indexRoute> in
	 * a JSX route config.
	 */

	var IndexRoute = (function (_Component) {
	  _inherits(IndexRoute, _Component);

	  function IndexRoute() {
	    _classCallCheck(this, IndexRoute);

	    _Component.apply(this, arguments);
	  }

	  /* istanbul ignore next: sanity check */

	  IndexRoute.prototype.render = function render() {
	     true ?  true ? _invariant2['default'](false, '<IndexRoute> elements are for router configuration only and should not be rendered') : _invariant2['default'](false) : undefined;
	  };

	  return IndexRoute;
	})(_react.Component);

	IndexRoute.propTypes = {
	  path: _PropTypes.falsy,
	  component: _PropTypes.component,
	  components: _PropTypes.components,
	  getComponent: func,
	  getComponents: func
	};

	IndexRoute.createRouteFromReactElement = function (element, parentRoute) {
	  /* istanbul ignore else: sanity check */
	  if (parentRoute) {
	    parentRoute.indexRoute = _RouteUtils.createRouteFromReactElement(element);
	  } else {
	     true ? _warning2['default'](false, 'An <IndexRoute> does not make sense at the root of your route config') : undefined;
	  }
	};

	exports['default'] = IndexRoute;
	module.exports = exports['default'];

/***/ },

/***/ 1002:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(75);

	var _invariant2 = _interopRequireDefault(_invariant);

	var object = _react2['default'].PropTypes.object;

	/**
	 * The Lifecycle mixin adds the routerWillLeave lifecycle method to a
	 * component that may be used to cancel a transition or prompt the user
	 * for confirmation.
	 *
	 * On standard transitions, routerWillLeave receives a single argument: the
	 * location we're transitioning to. To cancel the transition, return false.
	 * To prompt the user for confirmation, return a prompt message (string).
	 *
	 * During the beforeunload event (assuming you're using the useBeforeUnload
	 * history enhancer), routerWillLeave does not receive a location object
	 * because it isn't possible for us to know the location we're transitioning
	 * to. In this case routerWillLeave must return a prompt message to prevent
	 * the user from closing the window/tab.
	 */
	var Lifecycle = {

	  contextTypes: {
	    history: object.isRequired,
	    // Nested children receive the route as context, either
	    // set by the route component using the RouteContext mixin
	    // or by some other ancestor.
	    route: object
	  },

	  propTypes: {
	    // Route components receive the route object as a prop.
	    route: object
	  },

	  componentDidMount: function componentDidMount() {
	    !this.routerWillLeave ?  true ? _invariant2['default'](false, 'The Lifecycle mixin requires you to define a routerWillLeave method') : _invariant2['default'](false) : undefined;

	    var route = this.props.route || this.context.route;

	    !route ?  true ? _invariant2['default'](false, 'The Lifecycle mixin must be used on either a) a <Route component> or ' + 'b) a descendant of a <Route component> that uses the RouteContext mixin') : _invariant2['default'](false) : undefined;

	    this._unlistenBeforeLeavingRoute = this.context.history.listenBeforeLeavingRoute(route, this.routerWillLeave);
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    if (this._unlistenBeforeLeavingRoute) this._unlistenBeforeLeavingRoute();
	  }

	};

	exports['default'] = Lifecycle;
	module.exports = exports['default'];

/***/ },

/***/ 1003:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _invariant = __webpack_require__(75);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _RouteUtils = __webpack_require__(163);

	var _PropTypes = __webpack_require__(193);

	var _React$PropTypes = _react2['default'].PropTypes;
	var string = _React$PropTypes.string;
	var func = _React$PropTypes.func;

	/**
	 * A <Route> is used to declare which components are rendered to the
	 * page when the URL matches a given pattern.
	 *
	 * Routes are arranged in a nested tree structure. When a new URL is
	 * requested, the tree is searched depth-first to find a route whose
	 * path matches the URL.  When one is found, all routes in the tree
	 * that lead to it are considered "active" and their components are
	 * rendered into the DOM, nested in the same order as in the tree.
	 */

	var Route = (function (_Component) {
	  _inherits(Route, _Component);

	  function Route() {
	    _classCallCheck(this, Route);

	    _Component.apply(this, arguments);
	  }

	  /* istanbul ignore next: sanity check */

	  Route.prototype.render = function render() {
	     true ?  true ? _invariant2['default'](false, '<Route> elements are for router configuration only and should not be rendered') : _invariant2['default'](false) : undefined;
	  };

	  return Route;
	})(_react.Component);

	Route.createRouteFromReactElement = _RouteUtils.createRouteFromReactElement;

	Route.propTypes = {
	  path: string,
	  component: _PropTypes.component,
	  components: _PropTypes.components,
	  getComponent: func,
	  getComponents: func
	};

	exports['default'] = Route;
	module.exports = exports['default'];

/***/ },

/***/ 1004:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var object = _react2['default'].PropTypes.object;

	/**
	 * The RouteContext mixin provides a convenient way for route
	 * components to set the route in context. This is needed for
	 * routes that render elements that want to use the Lifecycle
	 * mixin to prevent transitions.
	 */
	var RouteContext = {

	  propTypes: {
	    route: object.isRequired
	  },

	  childContextTypes: {
	    route: object.isRequired
	  },

	  getChildContext: function getChildContext() {
	    return {
	      route: this.props.route
	    };
	  }

	};

	exports['default'] = RouteContext;
	module.exports = exports['default'];

/***/ },

/***/ 1005:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _warning = __webpack_require__(50);

	var _warning2 = _interopRequireDefault(_warning);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _historyLibCreateHashHistory = __webpack_require__(408);

	var _historyLibCreateHashHistory2 = _interopRequireDefault(_historyLibCreateHashHistory);

	var _RouteUtils = __webpack_require__(163);

	var _RoutingContext = __webpack_require__(893);

	var _RoutingContext2 = _interopRequireDefault(_RoutingContext);

	var _useRoutes = __webpack_require__(516);

	var _useRoutes2 = _interopRequireDefault(_useRoutes);

	var _PropTypes = __webpack_require__(193);

	var _React$PropTypes = _react2['default'].PropTypes;
	var func = _React$PropTypes.func;
	var object = _React$PropTypes.object;

	/**
	 * A <Router> is a high-level API for automatically setting up
	 * a router that renders a <RoutingContext> with all the props
	 * it needs each time the URL changes.
	 */

	var Router = (function (_Component) {
	  _inherits(Router, _Component);

	  function Router(props, context) {
	    _classCallCheck(this, Router);

	    _Component.call(this, props, context);

	    this.state = {
	      location: null,
	      routes: null,
	      params: null,
	      components: null
	    };
	  }

	  Router.prototype.handleError = function handleError(error) {
	    if (this.props.onError) {
	      this.props.onError.call(this, error);
	    } else {
	      // Throw errors by default so we don't silently swallow them!
	      throw error; // This error probably occurred in getChildRoutes or getComponents.
	    }
	  };

	  Router.prototype.componentWillMount = function componentWillMount() {
	    var _this = this;

	    var _props = this.props;
	    var history = _props.history;
	    var children = _props.children;
	    var routes = _props.routes;
	    var parseQueryString = _props.parseQueryString;
	    var stringifyQuery = _props.stringifyQuery;

	    var createHistory = history ? function () {
	      return history;
	    } : _historyLibCreateHashHistory2['default'];

	    this.history = _useRoutes2['default'](createHistory)({
	      routes: _RouteUtils.createRoutes(routes || children),
	      parseQueryString: parseQueryString,
	      stringifyQuery: stringifyQuery
	    });

	    this._unlisten = this.history.listen(function (error, state) {
	      if (error) {
	        _this.handleError(error);
	      } else {
	        _this.setState(state, _this.props.onUpdate);
	      }
	    });
	  };

	  /* istanbul ignore next: sanity check */

	  Router.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	     true ? _warning2['default'](nextProps.history === this.props.history, 'You cannot change <Router history>; it will be ignored') : undefined;

	     true ? _warning2['default']((nextProps.routes || nextProps.children) === (this.props.routes || this.props.children), 'You cannot change <Router routes>; it will be ignored') : undefined;
	  };

	  Router.prototype.componentWillUnmount = function componentWillUnmount() {
	    if (this._unlisten) this._unlisten();
	  };

	  Router.prototype.render = function render() {
	    var _state = this.state;
	    var location = _state.location;
	    var routes = _state.routes;
	    var params = _state.params;
	    var components = _state.components;
	    var _props2 = this.props;
	    var RoutingContext = _props2.RoutingContext;
	    var createElement = _props2.createElement;

	    var props = _objectWithoutProperties(_props2, ['RoutingContext', 'createElement']);

	    if (location == null) return null; // Async match

	    // Only forward non-Router-specific props to routing context, as those are
	    // the only ones that might be custom routing context props.
	    Object.keys(Router.propTypes).forEach(function (propType) {
	      return delete props[propType];
	    });

	    return _react2['default'].createElement(RoutingContext, _extends({}, props, {
	      history: this.history,
	      createElement: createElement,
	      location: location,
	      routes: routes,
	      params: params,
	      components: components
	    }));
	  };

	  return Router;
	})(_react.Component);

	Router.propTypes = {
	  history: object,
	  children: _PropTypes.routes,
	  routes: _PropTypes.routes, // alias for children
	  RoutingContext: func.isRequired,
	  createElement: func,
	  onError: func,
	  onUpdate: func,
	  parseQueryString: func,
	  stringifyQuery: func
	};

	Router.defaultProps = {
	  RoutingContext: _RoutingContext2['default']
	};

	exports['default'] = Router;
	module.exports = exports['default'];

/***/ },

/***/ 1006:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.runEnterHooks = runEnterHooks;
	exports.runLeaveHooks = runLeaveHooks;

	var _AsyncUtils = __webpack_require__(515);

	function createEnterHook(hook, route) {
	  return function (a, b, callback) {
	    hook.apply(route, arguments);

	    if (hook.length < 3) {
	      // Assume hook executes synchronously and
	      // automatically call the callback.
	      callback();
	    }
	  };
	}

	function getEnterHooks(routes) {
	  return routes.reduce(function (hooks, route) {
	    if (route.onEnter) hooks.push(createEnterHook(route.onEnter, route));

	    return hooks;
	  }, []);
	}

	/**
	 * Runs all onEnter hooks in the given array of routes in order
	 * with onEnter(nextState, replaceState, callback) and calls
	 * callback(error, redirectInfo) when finished. The first hook
	 * to use replaceState short-circuits the loop.
	 *
	 * If a hook needs to run asynchronously, it may use the callback
	 * function. However, doing so will cause the transition to pause,
	 * which could lead to a non-responsive UI if the hook is slow.
	 */

	function runEnterHooks(routes, nextState, callback) {
	  var hooks = getEnterHooks(routes);

	  if (!hooks.length) {
	    callback();
	    return;
	  }

	  var redirectInfo = undefined;
	  function replaceState(state, pathname, query) {
	    redirectInfo = { pathname: pathname, query: query, state: state };
	  }

	  _AsyncUtils.loopAsync(hooks.length, function (index, next, done) {
	    hooks[index](nextState, replaceState, function (error) {
	      if (error || redirectInfo) {
	        done(error, redirectInfo); // No need to continue.
	      } else {
	          next();
	        }
	    });
	  }, callback);
	}

	/**
	 * Runs all onLeave hooks in the given array of routes in order.
	 */

	function runLeaveHooks(routes) {
	  for (var i = 0, len = routes.length; i < len; ++i) {
	    if (routes[i].onLeave) routes[i].onLeave.call(routes[i]);
	  }
	}

/***/ },

/***/ 1007:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _PatternUtils = __webpack_require__(295);

	function routeParamsChanged(route, prevState, nextState) {
	  if (!route.path) return false;

	  var paramNames = _PatternUtils.getParamNames(route.path);

	  return paramNames.some(function (paramName) {
	    return prevState.params[paramName] !== nextState.params[paramName];
	  });
	}

	/**
	 * Returns an object of { leaveRoutes, enterRoutes } determined by
	 * the change from prevState to nextState. We leave routes if either
	 * 1) they are not in the next state or 2) they are in the next state
	 * but their params have changed (i.e. /users/123 => /users/456).
	 *
	 * leaveRoutes are ordered starting at the leaf route of the tree
	 * we're leaving up to the common parent route. enterRoutes are ordered
	 * from the top of the tree we're entering down to the leaf route.
	 */
	function computeChangedRoutes(prevState, nextState) {
	  var prevRoutes = prevState && prevState.routes;
	  var nextRoutes = nextState.routes;

	  var leaveRoutes = undefined,
	      enterRoutes = undefined;
	  if (prevRoutes) {
	    leaveRoutes = prevRoutes.filter(function (route) {
	      return nextRoutes.indexOf(route) === -1 || routeParamsChanged(route, prevState, nextState);
	    });

	    // onLeave hooks start at the leaf route.
	    leaveRoutes.reverse();

	    enterRoutes = nextRoutes.filter(function (route) {
	      return prevRoutes.indexOf(route) === -1 || leaveRoutes.indexOf(route) !== -1;
	    });
	  } else {
	    leaveRoutes = [];
	    enterRoutes = nextRoutes;
	  }

	  return {
	    leaveRoutes: leaveRoutes,
	    enterRoutes: enterRoutes
	  };
	}

	exports['default'] = computeChangedRoutes;
	module.exports = exports['default'];

/***/ },

/***/ 1008:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _AsyncUtils = __webpack_require__(515);

	function getComponentsForRoute(location, route, callback) {
	  if (route.component || route.components) {
	    callback(null, route.component || route.components);
	  } else if (route.getComponent) {
	    route.getComponent(location, callback);
	  } else if (route.getComponents) {
	    route.getComponents(location, callback);
	  } else {
	    callback();
	  }
	}

	/**
	 * Asynchronously fetches all components needed for the given router
	 * state and calls callback(error, components) when finished.
	 *
	 * Note: This operation may finish synchronously if no routes have an
	 * asynchronous getComponents method.
	 */
	function getComponents(nextState, callback) {
	  _AsyncUtils.mapAsync(nextState.routes, function (route, index, callback) {
	    getComponentsForRoute(nextState.location, route, callback);
	  }, callback);
	}

	exports['default'] = getComponents;
	module.exports = exports['default'];

/***/ },

/***/ 1009:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _PatternUtils = __webpack_require__(295);

	/**
	 * Extracts an object of params the given route cares about from
	 * the given params object.
	 */
	function getRouteParams(route, params) {
	  var routeParams = {};

	  if (!route.path) return routeParams;

	  var paramNames = _PatternUtils.getParamNames(route.path);

	  for (var p in params) {
	    if (params.hasOwnProperty(p) && paramNames.indexOf(p) !== -1) routeParams[p] = params[p];
	  }return routeParams;
	}

	exports['default'] = getRouteParams;
	module.exports = exports['default'];

/***/ },

/***/ 1010:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _PatternUtils = __webpack_require__(295);

	function deepEqual(a, b) {
	  if (a == b) return true;

	  if (a == null || b == null) return false;

	  if (Array.isArray(a)) {
	    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
	      return deepEqual(item, b[index]);
	    });
	  }

	  if (typeof a === 'object') {
	    for (var p in a) {
	      if (!a.hasOwnProperty(p)) {
	        continue;
	      }

	      if (a[p] === undefined) {
	        if (b[p] !== undefined) {
	          return false;
	        }
	      } else if (!b.hasOwnProperty(p)) {
	        return false;
	      } else if (!deepEqual(a[p], b[p])) {
	        return false;
	      }
	    }

	    return true;
	  }

	  return String(a) === String(b);
	}

	function paramsAreActive(paramNames, paramValues, activeParams) {
	  // FIXME: This doesn't work on repeated params in activeParams.
	  return paramNames.every(function (paramName, index) {
	    return String(paramValues[index]) === String(activeParams[paramName]);
	  });
	}

	function getMatchingRouteIndex(pathname, activeRoutes, activeParams) {
	  var remainingPathname = pathname,
	      paramNames = [],
	      paramValues = [];

	  for (var i = 0, len = activeRoutes.length; i < len; ++i) {
	    var route = activeRoutes[i];
	    var pattern = route.path || '';

	    if (pattern.charAt(0) === '/') {
	      remainingPathname = pathname;
	      paramNames = [];
	      paramValues = [];
	    }

	    if (remainingPathname !== null) {
	      var matched = _PatternUtils.matchPattern(pattern, remainingPathname);
	      remainingPathname = matched.remainingPathname;
	      paramNames = [].concat(paramNames, matched.paramNames);
	      paramValues = [].concat(paramValues, matched.paramValues);
	    }

	    if (remainingPathname === '' && route.path && paramsAreActive(paramNames, paramValues, activeParams)) return i;
	  }

	  return null;
	}

	/**
	 * Returns true if the given pathname matches the active routes
	 * and params.
	 */
	function routeIsActive(pathname, routes, params, indexOnly) {
	  var i = getMatchingRouteIndex(pathname, routes, params);

	  if (i === null) {
	    // No match.
	    return false;
	  } else if (!indexOnly) {
	    // Any match is good enough.
	    return true;
	  }

	  // If any remaining routes past the match index have paths, then we can't
	  // be on the index route.
	  return routes.slice(i + 1).every(function (route) {
	    return !route.path;
	  });
	}

	/**
	 * Returns true if all key/value pairs in the given query are
	 * currently active.
	 */
	function queryIsActive(query, activeQuery) {
	  if (activeQuery == null) return query == null;

	  if (query == null) return true;

	  return deepEqual(query, activeQuery);
	}

	/**
	 * Returns true if a <Link> to the given pathname/query combination is
	 * currently active.
	 */
	function isActive(pathname, query, indexOnly, location, routes, params) {
	  if (location == null) return false;

	  if (!routeIsActive(pathname, routes, params, indexOnly)) return false;

	  return queryIsActive(query, location.query);
	}

	exports['default'] = isActive;
	module.exports = exports['default'];

/***/ },

/***/ 1011:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(75);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _historyLibCreateMemoryHistory = __webpack_require__(1016);

	var _historyLibCreateMemoryHistory2 = _interopRequireDefault(_historyLibCreateMemoryHistory);

	var _historyLibUseBasename = __webpack_require__(1017);

	var _historyLibUseBasename2 = _interopRequireDefault(_historyLibUseBasename);

	var _RouteUtils = __webpack_require__(163);

	var _useRoutes = __webpack_require__(516);

	var _useRoutes2 = _interopRequireDefault(_useRoutes);

	var createHistory = _useRoutes2['default'](_historyLibUseBasename2['default'](_historyLibCreateMemoryHistory2['default']));

	/**
	 * A high-level API to be used for server-side rendering.
	 *
	 * This function matches a location to a set of routes and calls
	 * callback(error, redirectLocation, renderProps) when finished.
	 *
	 * Note: You probably don't want to use this in a browser. Use
	 * the history.listen API instead.
	 */
	function match(_ref, callback) {
	  var routes = _ref.routes;
	  var location = _ref.location;
	  var parseQueryString = _ref.parseQueryString;
	  var stringifyQuery = _ref.stringifyQuery;
	  var basename = _ref.basename;

	  !location ?  true ? _invariant2['default'](false, 'match needs a location') : _invariant2['default'](false) : undefined;

	  var history = createHistory({
	    routes: _RouteUtils.createRoutes(routes),
	    parseQueryString: parseQueryString,
	    stringifyQuery: stringifyQuery,
	    basename: basename
	  });

	  // Allow match({ location: '/the/path', ... })
	  if (typeof location === 'string') location = history.createLocation(location);

	  history.match(location, function (error, redirectLocation, nextState) {
	    callback(error, redirectLocation, nextState && _extends({}, nextState, { history: history }));
	  });
	}

	exports['default'] = match;
	module.exports = exports['default'];

/***/ },

/***/ 1012:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(50);

	var _warning2 = _interopRequireDefault(_warning);

	var _AsyncUtils = __webpack_require__(515);

	var _PatternUtils = __webpack_require__(295);

	var _RouteUtils = __webpack_require__(163);

	function getChildRoutes(route, location, callback) {
	  if (route.childRoutes) {
	    callback(null, route.childRoutes);
	  } else if (route.getChildRoutes) {
	    route.getChildRoutes(location, function (error, childRoutes) {
	      callback(error, !error && _RouteUtils.createRoutes(childRoutes));
	    });
	  } else {
	    callback();
	  }
	}

	function getIndexRoute(route, location, callback) {
	  if (route.indexRoute) {
	    callback(null, route.indexRoute);
	  } else if (route.getIndexRoute) {
	    route.getIndexRoute(location, function (error, indexRoute) {
	      callback(error, !error && _RouteUtils.createRoutes(indexRoute)[0]);
	    });
	  } else if (route.childRoutes) {
	    (function () {
	      var pathless = route.childRoutes.filter(function (obj) {
	        return !obj.hasOwnProperty('path');
	      });

	      _AsyncUtils.loopAsync(pathless.length, function (index, next, done) {
	        getIndexRoute(pathless[index], location, function (error, indexRoute) {
	          if (error || indexRoute) {
	            var routes = [pathless[index]].concat(Array.isArray(indexRoute) ? indexRoute : [indexRoute]);
	            done(error, routes);
	          } else {
	            next();
	          }
	        });
	      }, function (err, routes) {
	        callback(null, routes);
	      });
	    })();
	  } else {
	    callback();
	  }
	}

	function assignParams(params, paramNames, paramValues) {
	  return paramNames.reduce(function (params, paramName, index) {
	    var paramValue = paramValues && paramValues[index];

	    if (Array.isArray(params[paramName])) {
	      params[paramName].push(paramValue);
	    } else if (paramName in params) {
	      params[paramName] = [params[paramName], paramValue];
	    } else {
	      params[paramName] = paramValue;
	    }

	    return params;
	  }, params);
	}

	function createParams(paramNames, paramValues) {
	  return assignParams({}, paramNames, paramValues);
	}

	function matchRouteDeep(route, location, remainingPathname, paramNames, paramValues, callback) {
	  var pattern = route.path || '';

	  if (pattern.charAt(0) === '/') {
	    remainingPathname = location.pathname;
	    paramNames = [];
	    paramValues = [];
	  }

	  if (remainingPathname !== null) {
	    var matched = _PatternUtils.matchPattern(pattern, remainingPathname);
	    remainingPathname = matched.remainingPathname;
	    paramNames = [].concat(paramNames, matched.paramNames);
	    paramValues = [].concat(paramValues, matched.paramValues);

	    if (remainingPathname === '' && route.path) {
	      var _ret2 = (function () {
	        var match = {
	          routes: [route],
	          params: createParams(paramNames, paramValues)
	        };

	        getIndexRoute(route, location, function (error, indexRoute) {
	          if (error) {
	            callback(error);
	          } else {
	            if (Array.isArray(indexRoute)) {
	              var _match$routes;

	               true ? _warning2['default'](indexRoute.every(function (route) {
	                return !route.path;
	              }), 'Index routes should not have paths') : undefined;
	              (_match$routes = match.routes).push.apply(_match$routes, indexRoute);
	            } else if (indexRoute) {
	               true ? _warning2['default'](!indexRoute.path, 'Index routes should not have paths') : undefined;
	              match.routes.push(indexRoute);
	            }

	            callback(null, match);
	          }
	        });
	        return {
	          v: undefined
	        };
	      })();

	      if (typeof _ret2 === 'object') return _ret2.v;
	    }
	  }

	  if (remainingPathname != null || route.childRoutes) {
	    // Either a) this route matched at least some of the path or b)
	    // we don't have to load this route's children asynchronously. In
	    // either case continue checking for matches in the subtree.
	    getChildRoutes(route, location, function (error, childRoutes) {
	      if (error) {
	        callback(error);
	      } else if (childRoutes) {
	        // Check the child routes to see if any of them match.
	        matchRoutes(childRoutes, location, function (error, match) {
	          if (error) {
	            callback(error);
	          } else if (match) {
	            // A child route matched! Augment the match and pass it up the stack.
	            match.routes.unshift(route);
	            callback(null, match);
	          } else {
	            callback();
	          }
	        }, remainingPathname, paramNames, paramValues);
	      } else {
	        callback();
	      }
	    });
	  } else {
	    callback();
	  }
	}

	/**
	 * Asynchronously matches the given location to a set of routes and calls
	 * callback(error, state) when finished. The state object will have the
	 * following properties:
	 *
	 * - routes       An array of routes that matched, in hierarchical order
	 * - params       An object of URL parameters
	 *
	 * Note: This operation may finish synchronously if no routes have an
	 * asynchronous getChildRoutes method.
	 */
	function matchRoutes(routes, location, callback) {
	  var remainingPathname = arguments.length <= 3 || arguments[3] === undefined ? location.pathname : arguments[3];
	  var paramNames = arguments.length <= 4 || arguments[4] === undefined ? [] : arguments[4];
	  var paramValues = arguments.length <= 5 || arguments[5] === undefined ? [] : arguments[5];
	  return (function () {
	    _AsyncUtils.loopAsync(routes.length, function (index, next, done) {
	      matchRouteDeep(routes[index], location, remainingPathname, paramNames, paramValues, function (error, match) {
	        if (error || match) {
	          done(error, match);
	        } else {
	          next();
	        }
	      });
	    }, callback);
	  })();
	}

	exports['default'] = matchRoutes;
	module.exports = exports['default'];

/***/ },

/***/ 1014:
/***/ function(module, exports) {

	'use strict';
	module.exports = function (str) {
		return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
			return '%' + c.charCodeAt(0).toString(16).toUpperCase();
		});
	};


/***/ },

/***/ 1016:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(50);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(75);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _Actions = __webpack_require__(137);

	var _createHistory = __webpack_require__(409);

	var _createHistory2 = _interopRequireDefault(_createHistory);

	var _parsePath = __webpack_require__(119);

	var _parsePath2 = _interopRequireDefault(_parsePath);

	function createStateStorage(entries) {
	  return entries.filter(function (entry) {
	    return entry.state;
	  }).reduce(function (memo, entry) {
	    memo[entry.key] = entry.state;
	    return memo;
	  }, {});
	}

	function createMemoryHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  if (Array.isArray(options)) {
	    options = { entries: options };
	  } else if (typeof options === 'string') {
	    options = { entries: [options] };
	  }

	  var history = _createHistory2['default'](_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    finishTransition: finishTransition,
	    saveState: saveState,
	    go: go
	  }));

	  var _options = options;
	  var entries = _options.entries;
	  var current = _options.current;

	  if (typeof entries === 'string') {
	    entries = [entries];
	  } else if (!Array.isArray(entries)) {
	    entries = ['/'];
	  }

	  entries = entries.map(function (entry) {
	    var key = history.createKey();

	    if (typeof entry === 'string') return { pathname: entry, key: key };

	    if (typeof entry === 'object' && entry) return _extends({}, entry, { key: key });

	     true ?  true ? _invariant2['default'](false, 'Unable to create history entry from %s', entry) : _invariant2['default'](false) : undefined;
	  });

	  if (current == null) {
	    current = entries.length - 1;
	  } else {
	    !(current >= 0 && current < entries.length) ?  true ? _invariant2['default'](false, 'Current index must be >= 0 and < %s, was %s', entries.length, current) : _invariant2['default'](false) : undefined;
	  }

	  var storage = createStateStorage(entries);

	  function saveState(key, state) {
	    storage[key] = state;
	  }

	  function readState(key) {
	    return storage[key];
	  }

	  function getCurrentLocation() {
	    var entry = entries[current];
	    var key = entry.key;
	    var basename = entry.basename;
	    var pathname = entry.pathname;
	    var search = entry.search;

	    var path = (basename || '') + pathname + (search || '');

	    var state = undefined;
	    if (key) {
	      state = readState(key);
	    } else {
	      state = null;
	      key = history.createKey();
	      entry.key = key;
	    }

	    var location = _parsePath2['default'](path);

	    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
	  }

	  function canGo(n) {
	    var index = current + n;
	    return index >= 0 && index < entries.length;
	  }

	  function go(n) {
	    if (n) {
	      if (!canGo(n)) {
	         true ? _warning2['default'](false, 'Cannot go(%s) there is not enough history', n) : undefined;
	        return;
	      }

	      current += n;

	      var currentLocation = getCurrentLocation();

	      // change action to POP
	      history.transitionTo(_extends({}, currentLocation, { action: _Actions.POP }));
	    }
	  }

	  function finishTransition(location) {
	    switch (location.action) {
	      case _Actions.PUSH:
	        current += 1;

	        // if we are not on the top of stack
	        // remove rest and push new
	        if (current < entries.length) entries.splice(current);

	        entries.push(location);
	        saveState(location.key, location.state);
	        break;
	      case _Actions.REPLACE:
	        entries[current] = location;
	        saveState(location.key, location.state);
	        break;
	    }
	  }

	  return history;
	}

	exports['default'] = createMemoryHistory;
	module.exports = exports['default'];

/***/ },

/***/ 1017:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _ExecutionEnvironment = __webpack_require__(242);

	var _runTransitionHook = __webpack_require__(298);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _extractPath = __webpack_require__(410);

	var _extractPath2 = _interopRequireDefault(_extractPath);

	var _parsePath = __webpack_require__(119);

	var _parsePath2 = _interopRequireDefault(_parsePath);

	var _deprecate = __webpack_require__(297);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	function useBasename(createHistory) {
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var basename = options.basename;

	    var historyOptions = _objectWithoutProperties(options, ['basename']);

	    var history = createHistory(historyOptions);

	    // Automatically use the value of <base href> in HTML
	    // documents as basename if it's not explicitly given.
	    if (basename == null && _ExecutionEnvironment.canUseDOM) {
	      var base = document.getElementsByTagName('base')[0];

	      if (base) basename = _extractPath2['default'](base.href);
	    }

	    function addBasename(location) {
	      if (basename && location.basename == null) {
	        if (location.pathname.indexOf(basename) === 0) {
	          location.pathname = location.pathname.substring(basename.length);
	          location.basename = basename;

	          if (location.pathname === '') location.pathname = '/';
	        } else {
	          location.basename = '';
	        }
	      }

	      return location;
	    }

	    function prependBasename(location) {
	      if (!basename) return location;

	      if (typeof location === 'string') location = _parsePath2['default'](location);

	      var pname = location.pathname;
	      var normalizedBasename = basename.slice(-1) === '/' ? basename : basename + '/';
	      var normalizedPathname = pname.charAt(0) === '/' ? pname.slice(1) : pname;
	      var pathname = normalizedBasename + normalizedPathname;

	      return _extends({}, location, {
	        pathname: pathname
	      });
	    }

	    // Override all read methods with basename-aware versions.
	    function listenBefore(hook) {
	      return history.listenBefore(function (location, callback) {
	        _runTransitionHook2['default'](hook, addBasename(location), callback);
	      });
	    }

	    function listen(listener) {
	      return history.listen(function (location) {
	        listener(addBasename(location));
	      });
	    }

	    // Override all write methods with basename-aware versions.
	    function push(location) {
	      history.push(prependBasename(location));
	    }

	    function replace(location) {
	      history.replace(prependBasename(location));
	    }

	    function createPath(location) {
	      return history.createPath(prependBasename(location));
	    }

	    function createHref(location) {
	      return history.createHref(prependBasename(location));
	    }

	    function createLocation() {
	      return addBasename(history.createLocation.apply(history, arguments));
	    }

	    // deprecated
	    function pushState(state, path) {
	      if (typeof path === 'string') path = _parsePath2['default'](path);

	      push(_extends({ state: state }, path));
	    }

	    // deprecated
	    function replaceState(state, path) {
	      if (typeof path === 'string') path = _parsePath2['default'](path);

	      replace(_extends({ state: state }, path));
	    }

	    return _extends({}, history, {
	      listenBefore: listenBefore,
	      listen: listen,
	      push: push,
	      replace: replace,
	      createPath: createPath,
	      createHref: createHref,
	      createLocation: createLocation,

	      pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
	      replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
	    });
	  };
	}

	exports['default'] = useBasename;
	module.exports = exports['default'];

/***/ },

/***/ 1018:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _warning = __webpack_require__(50);

	var _warning2 = _interopRequireDefault(_warning);

	var _queryString = __webpack_require__(1029);

	var _runTransitionHook = __webpack_require__(298);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _parsePath = __webpack_require__(119);

	var _parsePath2 = _interopRequireDefault(_parsePath);

	var _deprecate = __webpack_require__(297);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	var SEARCH_BASE_KEY = '$searchBase';

	function defaultStringifyQuery(query) {
	  return _queryString.stringify(query).replace(/%20/g, '+');
	}

	var defaultParseQueryString = _queryString.parse;

	function isNestedObject(object) {
	  for (var p in object) {
	    if (object.hasOwnProperty(p) && typeof object[p] === 'object' && !Array.isArray(object[p]) && object[p] !== null) return true;
	  }return false;
	}

	/**
	 * Returns a new createHistory function that may be used to create
	 * history objects that know how to handle URL queries.
	 */
	function useQueries(createHistory) {
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var stringifyQuery = options.stringifyQuery;
	    var parseQueryString = options.parseQueryString;

	    var historyOptions = _objectWithoutProperties(options, ['stringifyQuery', 'parseQueryString']);

	    var history = createHistory(historyOptions);

	    if (typeof stringifyQuery !== 'function') stringifyQuery = defaultStringifyQuery;

	    if (typeof parseQueryString !== 'function') parseQueryString = defaultParseQueryString;

	    function addQuery(location) {
	      if (location.query == null) {
	        var search = location.search;

	        location.query = parseQueryString(search.substring(1));
	        location[SEARCH_BASE_KEY] = { search: search, searchBase: '' };
	      }

	      // TODO: Instead of all the book-keeping here, this should just strip the
	      // stringified query from the search.

	      return location;
	    }

	    function appendQuery(location, query) {
	      var _extends2;

	      var queryString = undefined;
	      if (!query || (queryString = stringifyQuery(query)) === '') return location;

	       true ? _warning2['default'](stringifyQuery !== defaultStringifyQuery || !isNestedObject(query), 'useQueries does not stringify nested query objects by default; ' + 'use a custom stringifyQuery function') : undefined;

	      if (typeof location === 'string') location = _parsePath2['default'](location);

	      var searchBaseSpec = location[SEARCH_BASE_KEY];
	      var searchBase = undefined;
	      if (searchBaseSpec && location.search === searchBaseSpec.search) {
	        searchBase = searchBaseSpec.searchBase;
	      } else {
	        searchBase = location.search || '';
	      }

	      var search = searchBase + (searchBase ? '&' : '?') + queryString;

	      return _extends({}, location, (_extends2 = {
	        search: search
	      }, _extends2[SEARCH_BASE_KEY] = { search: search, searchBase: searchBase }, _extends2));
	    }

	    // Override all read methods with query-aware versions.
	    function listenBefore(hook) {
	      return history.listenBefore(function (location, callback) {
	        _runTransitionHook2['default'](hook, addQuery(location), callback);
	      });
	    }

	    function listen(listener) {
	      return history.listen(function (location) {
	        listener(addQuery(location));
	      });
	    }

	    // Override all write methods with query-aware versions.
	    function push(location) {
	      history.push(appendQuery(location, location.query));
	    }

	    function replace(location) {
	      history.replace(appendQuery(location, location.query));
	    }

	    function createPath(location, query) {
	      //warning(
	      //  !query,
	      //  'the query argument to createPath is deprecated; use a location descriptor instead'
	      //)
	      return history.createPath(appendQuery(location, query || location.query));
	    }

	    function createHref(location, query) {
	      //warning(
	      //  !query,
	      //  'the query argument to createHref is deprecated; use a location descriptor instead'
	      //)
	      return history.createHref(appendQuery(location, query || location.query));
	    }

	    function createLocation() {
	      return addQuery(history.createLocation.apply(history, arguments));
	    }

	    // deprecated
	    function pushState(state, path, query) {
	      if (typeof path === 'string') path = _parsePath2['default'](path);

	      push(_extends({ state: state }, path, { query: query }));
	    }

	    // deprecated
	    function replaceState(state, path, query) {
	      if (typeof path === 'string') path = _parsePath2['default'](path);

	      replace(_extends({ state: state }, path, { query: query }));
	    }

	    return _extends({}, history, {
	      listenBefore: listenBefore,
	      listen: listen,
	      push: push,
	      replace: replace,
	      createPath: createPath,
	      createHref: createHref,
	      createLocation: createLocation,

	      pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
	      replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
	    });
	  };
	}

	exports['default'] = useQueries;
	module.exports = exports['default'];

/***/ },

/***/ 1029:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strictUriEncode = __webpack_require__(1014);

	exports.extract = function (str) {
		return str.split('?')[1] || '';
	};

	exports.parse = function (str) {
		if (typeof str !== 'string') {
			return {};
		}

		str = str.trim().replace(/^(\?|#|&)/, '');

		if (!str) {
			return {};
		}

		return str.split('&').reduce(function (ret, param) {
			var parts = param.replace(/\+/g, ' ').split('=');
			// Firefox (pre 40) decodes `%3D` to `=`
			// https://github.com/sindresorhus/query-string/pull/37
			var key = parts.shift();
			var val = parts.length > 0 ? parts.join('=') : undefined;

			key = decodeURIComponent(key);

			// missing `=` should be `null`:
			// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
			val = val === undefined ? null : decodeURIComponent(val);

			if (!ret.hasOwnProperty(key)) {
				ret[key] = val;
			} else if (Array.isArray(ret[key])) {
				ret[key].push(val);
			} else {
				ret[key] = [ret[key], val];
			}

			return ret;
		}, {});
	};

	exports.stringify = function (obj) {
		return obj ? Object.keys(obj).sort().map(function (key) {
			var val = obj[key];

			if (val === undefined) {
				return '';
			}

			if (val === null) {
				return key;
			}

			if (Array.isArray(val)) {
				return val.slice().sort().map(function (val2) {
					return strictUriEncode(key) + '=' + strictUriEncode(val2);
				}).join('&');
			}

			return strictUriEncode(key) + '=' + strictUriEncode(val);
		}).filter(function (x) {
			return x.length > 0;
		}).join('&') : '';
	};


/***/ },

/***/ 1031:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * Handler
	 * @module zrender/Handler
	 * @author Kener (@Kener-林峰, kener.linfeng@gmail.com)
	 *         errorrik (errorrik@gmail.com)
	 *         pissang (shenyi.914@gmail.com)
	 */


	    var util = __webpack_require__(2);
	    var Draggable = __webpack_require__(1051);

	    var Eventful = __webpack_require__(215);

	    function makeEventPacket(eveType, target, event) {
	        return {
	            type: eveType,
	            event: event,
	            target: target,
	            cancelBubble: false,
	            offsetX: event.zrX,
	            offsetY: event.zrY,
	            gestureEvent: event.gestureEvent,
	            pinchX: event.pinchX,
	            pinchY: event.pinchY,
	            pinchScale: event.pinchScale,
	            wheelDelta: event.zrDelta,
	            zrByTouch: event.zrByTouch
	        };
	    }

	    function EmptyProxy () {}
	    EmptyProxy.prototype.dispose = function () {};

	    var handlerNames = [
	        'click', 'dblclick', 'mousewheel', 'mouseout',
	        'mouseup', 'mousedown', 'mousemove', 'contextmenu'
	    ];
	    /**
	     * @alias module:zrender/Handler
	     * @constructor
	     * @extends module:zrender/mixin/Eventful
	     * @param {module:zrender/Storage} storage Storage instance.
	     * @param {module:zrender/Painter} painter Painter instance.
	     * @param {module:zrender/dom/HandlerProxy} proxy HandlerProxy instance.
	     * @param {HTMLElement} painterRoot painter.root (not painter.getViewportRoot()).
	     */
	    var Handler = function(storage, painter, proxy, painterRoot) {
	        Eventful.call(this);

	        this.storage = storage;

	        this.painter = painter;

	        this.painterRoot = painterRoot;

	        proxy = proxy || new EmptyProxy();

	        /**
	         * Proxy of event. can be Dom, WebGLSurface, etc.
	         */
	        this.proxy = proxy;

	        // Attach handler
	        proxy.handler = this;

	        /**
	         * @private
	         * @type {boolean}
	         */
	        this._hovered;

	        /**
	         * @private
	         * @type {Date}
	         */
	        this._lastTouchMoment;

	        /**
	         * @private
	         * @type {number}
	         */
	        this._lastX;

	        /**
	         * @private
	         * @type {number}
	         */
	        this._lastY;


	        Draggable.call(this);

	        util.each(handlerNames, function (name) {
	            proxy.on && proxy.on(name, this[name], this);
	        }, this);
	    };

	    Handler.prototype = {

	        constructor: Handler,

	        mousemove: function (event) {
	            var x = event.zrX;
	            var y = event.zrY;

	            var hovered = this.findHover(x, y, null);
	            var lastHovered = this._hovered;
	            var proxy = this.proxy;

	            this._hovered = hovered;

	            proxy.setCursor && proxy.setCursor(hovered ? hovered.cursor : 'default');

	            // Mouse out on previous hovered element
	            if (lastHovered && hovered !== lastHovered && lastHovered.__zr) {
	                this.dispatchToElement(lastHovered, 'mouseout', event);
	            }

	            // Mouse moving on one element
	            this.dispatchToElement(hovered, 'mousemove', event);

	            // Mouse over on a new element
	            if (hovered && hovered !== lastHovered) {
	                this.dispatchToElement(hovered, 'mouseover', event);
	            }
	        },

	        mouseout: function (event) {
	            this.dispatchToElement(this._hovered, 'mouseout', event);

	            // There might be some doms created by upper layer application
	            // at the same level of painter.getViewportRoot() (e.g., tooltip
	            // dom created by echarts), where 'globalout' event should not
	            // be triggered when mouse enters these doms. (But 'mouseout'
	            // should be triggered at the original hovered element as usual).
	            var element = event.toElement || event.relatedTarget;
	            var innerDom;
	            do {
	                element = element && element.parentNode;
	            }
	            while (element && element.nodeType != 9 && !(
	                innerDom = element === this.painterRoot
	            ));

	            !innerDom && this.trigger('globalout', {event: event});
	        },

	        /**
	         * Resize
	         */
	        resize: function (event) {
	            this._hovered = null;
	        },

	        /**
	         * Dispatch event
	         * @param {string} eventName
	         * @param {event=} eventArgs
	         */
	        dispatch: function (eventName, eventArgs) {
	            var handler = this[eventName];
	            handler && handler.call(this, eventArgs);
	        },

	        /**
	         * Dispose
	         */
	        dispose: function () {

	            this.proxy.dispose();

	            this.storage =
	            this.proxy =
	            this.painter = null;
	        },

	        /**
	         * 设置默认的cursor style
	         * @param {string} [cursorStyle='default'] 例如 crosshair
	         */
	        setCursorStyle: function (cursorStyle) {
	            var proxy = this.proxy;
	            proxy.setCursor && proxy.setCursor(cursorStyle);
	        },

	        /**
	         * 事件分发代理
	         *
	         * @private
	         * @param {Object} targetEl 目标图形元素
	         * @param {string} eventName 事件名称
	         * @param {Object} event 事件对象
	         */
	        dispatchToElement: function (targetEl, eventName, event) {
	            var eventHandler = 'on' + eventName;
	            var eventPacket = makeEventPacket(eventName, targetEl, event);

	            var el = targetEl;

	            while (el) {
	                el[eventHandler]
	                    && (eventPacket.cancelBubble = el[eventHandler].call(el, eventPacket));

	                el.trigger(eventName, eventPacket);

	                el = el.parent;

	                if (eventPacket.cancelBubble) {
	                    break;
	                }
	            }

	            if (!eventPacket.cancelBubble) {
	                // 冒泡到顶级 zrender 对象
	                this.trigger(eventName, eventPacket);
	                // 分发事件到用户自定义层
	                // 用户有可能在全局 click 事件中 dispose，所以需要判断下 painter 是否存在
	                this.painter && this.painter.eachOtherLayer(function (layer) {
	                    if (typeof(layer[eventHandler]) == 'function') {
	                        layer[eventHandler].call(layer, eventPacket);
	                    }
	                    if (layer.trigger) {
	                        layer.trigger(eventName, eventPacket);
	                    }
	                });
	            }
	        },

	        /**
	         * @private
	         * @param {number} x
	         * @param {number} y
	         * @param {module:zrender/graphic/Displayable} exclude
	         * @method
	         */
	        findHover: function(x, y, exclude) {
	            var list = this.storage.getDisplayList();
	            for (var i = list.length - 1; i >= 0 ; i--) {
	                if (!list[i].silent
	                 && list[i] !== exclude
	                 // getDisplayList may include ignored item in VML mode
	                 && !list[i].ignore
	                 && isHover(list[i], x, y)) {
	                    return list[i];
	                }
	            }
	        }
	    };

	    // Common handlers
	    util.each(['click', 'mousedown', 'mouseup', 'mousewheel', 'dblclick', 'contextmenu'], function (name) {
	        Handler.prototype[name] = function (event) {
	            // Find hover again to avoid click event is dispatched manually. Or click is triggered without mouseover
	            var hovered = this.findHover(event.zrX, event.zrY, null);

	            if (name === 'mousedown') {
	                this._downel = hovered;
	                // In case click triggered before mouseup
	                this._upel = hovered;
	            }
	            else if (name === 'mosueup') {
	                this._upel = hovered;
	            }
	            else if (name === 'click') {
	                if (this._downel !== this._upel) {
	                    return;
	                }
	            }

	            this.dispatchToElement(hovered, name, event);
	        };
	    });

	    function isHover(displayable, x, y) {
	        if (displayable[displayable.rectHover ? 'rectContain' : 'contain'](x, y)) {
	            var el = displayable;
	            while (el) {
	                // If ancestor is silent or clipped by ancestor
	                if (el.silent || (el.clipPath && !el.clipPath.contain(x, y)))  {
	                    return false;
	                }
	                el = el.parent;
	            }
	            return true;
	        }

	        return false;
	    }

	    util.mixin(Handler, Eventful);
	    util.mixin(Handler, Draggable);

	    module.exports = Handler;


/***/ },

/***/ 1032:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @module zrender/Layer
	 * @author pissang(https://www.github.com/pissang)
	 */


	    var util = __webpack_require__(2);
	    var config = __webpack_require__(413);
	    var Style = __webpack_require__(909);
	    var Pattern = __webpack_require__(908);

	    function returnFalse() {
	        return false;
	    }

	    /**
	     * 创建dom
	     *
	     * @inner
	     * @param {string} id dom id 待用
	     * @param {string} type dom type，such as canvas, div etc.
	     * @param {Painter} painter painter instance
	     * @param {number} number
	     */
	    function createDom(id, type, painter, dpr) {
	        var newDom = document.createElement(type);
	        var width = painter.getWidth();
	        var height = painter.getHeight();

	        var newDomStyle = newDom.style;
	        // 没append呢，请原谅我这样写，清晰~
	        newDomStyle.position = 'absolute';
	        newDomStyle.left = 0;
	        newDomStyle.top = 0;
	        newDomStyle.width = width + 'px';
	        newDomStyle.height = height + 'px';
	        newDom.width = width * dpr;
	        newDom.height = height * dpr;

	        // id不作为索引用，避免可能造成的重名，定义为私有属性
	        newDom.setAttribute('data-zr-dom-id', id);
	        return newDom;
	    }

	    /**
	     * @alias module:zrender/Layer
	     * @constructor
	     * @extends module:zrender/mixin/Transformable
	     * @param {string} id
	     * @param {module:zrender/Painter} painter
	     * @param {number} [dpr]
	     */
	    var Layer = function(id, painter, dpr) {
	        var dom;
	        dpr = dpr || config.devicePixelRatio;
	        if (typeof id === 'string') {
	            dom = createDom(id, 'canvas', painter, dpr);
	        }
	        // Not using isDom because in node it will return false
	        else if (util.isObject(id)) {
	            dom = id;
	            id = dom.id;
	        }
	        this.id = id;
	        this.dom = dom;

	        var domStyle = dom.style;
	        if (domStyle) { // Not in node
	            dom.onselectstart = returnFalse; // 避免页面选中的尴尬
	            domStyle['-webkit-user-select'] = 'none';
	            domStyle['user-select'] = 'none';
	            domStyle['-webkit-touch-callout'] = 'none';
	            domStyle['-webkit-tap-highlight-color'] = 'rgba(0,0,0,0)';
	            domStyle['padding'] = 0;
	            domStyle['margin'] = 0;
	            domStyle['border-width'] = 0;
	        }

	        this.domBack = null;
	        this.ctxBack = null;

	        this.painter = painter;

	        this.config = null;

	        // Configs
	        /**
	         * 每次清空画布的颜色
	         * @type {string}
	         * @default 0
	         */
	        this.clearColor = 0;
	        /**
	         * 是否开启动态模糊
	         * @type {boolean}
	         * @default false
	         */
	        this.motionBlur = false;
	        /**
	         * 在开启动态模糊的时候使用，与上一帧混合的alpha值，值越大尾迹越明显
	         * @type {number}
	         * @default 0.7
	         */
	        this.lastFrameAlpha = 0.7;

	        /**
	         * Layer dpr
	         * @type {number}
	         */
	        this.dpr = dpr;
	    };

	    Layer.prototype = {

	        constructor: Layer,

	        elCount: 0,

	        __dirty: true,

	        initContext: function () {
	            this.ctx = this.dom.getContext('2d');

	            this.ctx.dpr = this.dpr;
	        },

	        createBackBuffer: function () {
	            var dpr = this.dpr;

	            this.domBack = createDom('back-' + this.id, 'canvas', this.painter, dpr);
	            this.ctxBack = this.domBack.getContext('2d');

	            if (dpr != 1) {
	                this.ctxBack.scale(dpr, dpr);
	            }
	        },

	        /**
	         * @param  {number} width
	         * @param  {number} height
	         */
	        resize: function (width, height) {
	            var dpr = this.dpr;

	            var dom = this.dom;
	            var domStyle = dom.style;
	            var domBack = this.domBack;

	            domStyle.width = width + 'px';
	            domStyle.height = height + 'px';

	            dom.width = width * dpr;
	            dom.height = height * dpr;

	            if (domBack) {
	                domBack.width = width * dpr;
	                domBack.height = height * dpr;

	                if (dpr != 1) {
	                    this.ctxBack.scale(dpr, dpr);
	                }
	            }
	        },

	        /**
	         * 清空该层画布
	         * @param {boolean} clearAll Clear all with out motion blur
	         */
	        clear: function (clearAll) {
	            var dom = this.dom;
	            var ctx = this.ctx;
	            var width = dom.width;
	            var height = dom.height;

	            var clearColor = this.clearColor;
	            var haveMotionBLur = this.motionBlur && !clearAll;
	            var lastFrameAlpha = this.lastFrameAlpha;

	            var dpr = this.dpr;

	            if (haveMotionBLur) {
	                if (!this.domBack) {
	                    this.createBackBuffer();
	                }

	                this.ctxBack.globalCompositeOperation = 'copy';
	                this.ctxBack.drawImage(
	                    dom, 0, 0,
	                    width / dpr,
	                    height / dpr
	                );
	            }

	            ctx.clearRect(0, 0, width, height);
	            if (clearColor) {
	                var clearColorGradientOrPattern;
	                // Gradient
	                if (clearColor.colorStops) {
	                    // Cache canvas gradient
	                    clearColorGradientOrPattern = clearColor.__canvasGradient || Style.getGradient(ctx, clearColor, {
	                        x: 0,
	                        y: 0,
	                        width: width,
	                        height: height
	                    });

	                    clearColor.__canvasGradient = clearColorGradientOrPattern;
	                }
	                // Pattern
	                else if (clearColor.image) {
	                    clearColorGradientOrPattern = Pattern.prototype.getCanvasPattern.call(clearColor, ctx);
	                }
	                ctx.save();
	                ctx.fillStyle = clearColorGradientOrPattern || clearColor;
	                ctx.fillRect(0, 0, width, height);
	                ctx.restore();
	            }

	            if (haveMotionBLur) {
	                var domBack = this.domBack;
	                ctx.save();
	                ctx.globalAlpha = lastFrameAlpha;
	                ctx.drawImage(domBack, 0, 0, width, height);
	                ctx.restore();
	            }
	        }
	    };

	    module.exports = Layer;


/***/ },

/***/ 1033:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * Default canvas painter
	 * @module zrender/Painter
	 * @author Kener (@Kener-林峰, kener.linfeng@gmail.com)
	 *         errorrik (errorrik@gmail.com)
	 *         pissang (https://www.github.com/pissang)
	 */
	 

	    var config = __webpack_require__(413);
	    var util = __webpack_require__(2);
	    var log = __webpack_require__(688);
	    var BoundingRect = __webpack_require__(62);
	    var timsort = __webpack_require__(689);

	    var Layer = __webpack_require__(1032);

	    var requestAnimationFrame = __webpack_require__(900);

	    // PENDIGN
	    // Layer exceeds MAX_PROGRESSIVE_LAYER_NUMBER may have some problem when flush directly second time.
	    //
	    // Maximum progressive layer. When exceeding this number. All elements will be drawed in the last layer.
	    var MAX_PROGRESSIVE_LAYER_NUMBER = 5;

	    function parseInt10(val) {
	        return parseInt(val, 10);
	    }

	    function isLayerValid(layer) {
	        if (!layer) {
	            return false;
	        }

	        if (layer.isBuildin) {
	            return true;
	        }

	        if (typeof(layer.resize) !== 'function'
	            || typeof(layer.refresh) !== 'function'
	        ) {
	            return false;
	        }

	        return true;
	    }

	    function preProcessLayer(layer) {
	        layer.__unusedCount++;
	    }

	    function postProcessLayer(layer) {
	        if (layer.__unusedCount == 1) {
	            layer.clear();
	        }
	    }

	    var tmpRect = new BoundingRect(0, 0, 0, 0);
	    var viewRect = new BoundingRect(0, 0, 0, 0);
	    function isDisplayableCulled(el, width, height) {
	        tmpRect.copy(el.getBoundingRect());
	        if (el.transform) {
	            tmpRect.applyTransform(el.transform);
	        }
	        viewRect.width = width;
	        viewRect.height = height;
	        return !tmpRect.intersect(viewRect);
	    }

	    function isClipPathChanged(clipPaths, prevClipPaths) {
	        if (clipPaths == prevClipPaths) { // Can both be null or undefined
	            return false;
	        }

	        if (!clipPaths || !prevClipPaths || (clipPaths.length !== prevClipPaths.length)) {
	            return true;
	        }
	        for (var i = 0; i < clipPaths.length; i++) {
	            if (clipPaths[i] !== prevClipPaths[i]) {
	                return true;
	            }
	        }
	    }

	    function doClip(clipPaths, ctx) {
	        for (var i = 0; i < clipPaths.length; i++) {
	            var clipPath = clipPaths[i];
	            var path = clipPath.path;

	            clipPath.setTransform(ctx);
	            path.beginPath(ctx);
	            clipPath.buildPath(path, clipPath.shape);
	            ctx.clip();
	            // Transform back
	            clipPath.restoreTransform(ctx);
	        }
	    }

	    function createRoot(width, height) {
	        var domRoot = document.createElement('div');

	        // domRoot.onselectstart = returnFalse; // 避免页面选中的尴尬
	        domRoot.style.cssText = [
	            'position:relative',
	            'overflow:hidden',
	            'width:' + width + 'px',
	            'height:' + height + 'px',
	            'padding:0',
	            'margin:0',
	            'border-width:0'
	        ].join(';') + ';';

	        return domRoot;
	    }

	    /**
	     * @alias module:zrender/Painter
	     * @constructor
	     * @param {HTMLElement} root 绘图容器
	     * @param {module:zrender/Storage} storage
	     * @param {Ojbect} opts
	     */
	    var Painter = function (root, storage, opts) {
	        // In node environment using node-canvas
	        var singleCanvas = !root.nodeName // In node ?
	            || root.nodeName.toUpperCase() === 'CANVAS';

	        this._opts = opts = util.extend({}, opts || {});

	        /**
	         * @type {number}
	         */
	        this.dpr = opts.devicePixelRatio || config.devicePixelRatio;
	        /**
	         * @type {boolean}
	         * @private
	         */
	        this._singleCanvas = singleCanvas;
	        /**
	         * 绘图容器
	         * @type {HTMLElement}
	         */
	        this.root = root;

	        var rootStyle = root.style;

	        if (rootStyle) {
	            rootStyle['-webkit-tap-highlight-color'] = 'transparent';
	            rootStyle['-webkit-user-select'] =
	            rootStyle['user-select'] =
	            rootStyle['-webkit-touch-callout'] = 'none';

	            root.innerHTML = '';
	        }

	        /**
	         * @type {module:zrender/Storage}
	         */
	        this.storage = storage;

	        /**
	         * @type {Array.<number>}
	         * @private
	         */
	        var zlevelList = this._zlevelList = [];

	        /**
	         * @type {Object.<string, module:zrender/Layer>}
	         * @private
	         */
	        var layers = this._layers = {};

	        /**
	         * @type {Object.<string, Object>}
	         * @type {private}
	         */
	        this._layerConfig = {};

	        if (!singleCanvas) {
	            this._width = this._getSize(0);
	            this._height = this._getSize(1);

	            var domRoot = this._domRoot = createRoot(
	                this._width, this._height
	            );
	            root.appendChild(domRoot);
	        }
	        else {
	            // Use canvas width and height directly
	            var width = root.width;
	            var height = root.height;
	            this._width = width;
	            this._height = height;

	            // Create layer if only one given canvas
	            // Device pixel ratio is fixed to 1 because given canvas has its specified width and height
	            var mainLayer = new Layer(root, this, 1);
	            mainLayer.initContext();
	            // FIXME Use canvas width and height
	            // mainLayer.resize(width, height);
	            layers[0] = mainLayer;
	            zlevelList.push(0);

	            this._domRoot = root;
	        }

	        this.pathToImage = this._createPathToImage();

	        // Layers for progressive rendering
	        this._progressiveLayers = [];

	        /**
	         * @type {module:zrender/Layer}
	         * @private
	         */
	        this._hoverlayer;

	        this._hoverElements = [];
	    };

	    Painter.prototype = {

	        constructor: Painter,

	        /**
	         * If painter use a single canvas
	         * @return {boolean}
	         */
	        isSingleCanvas: function () {
	            return this._singleCanvas;
	        },
	        /**
	         * @return {HTMLDivElement}
	         */
	        getViewportRoot: function () {
	            return this._domRoot;
	        },

	        /**
	         * 刷新
	         * @param {boolean} [paintAll=false] 强制绘制所有displayable
	         */
	        refresh: function (paintAll) {

	            var list = this.storage.getDisplayList(true);

	            var zlevelList = this._zlevelList;

	            this._paintList(list, paintAll);

	            // Paint custum layers
	            for (var i = 0; i < zlevelList.length; i++) {
	                var z = zlevelList[i];
	                var layer = this._layers[z];
	                if (!layer.isBuildin && layer.refresh) {
	                    layer.refresh();
	                }
	            }

	            this.refreshHover();

	            if (this._progressiveLayers.length) {
	                this._startProgessive();
	            }

	            return this;
	        },

	        addHover: function (el, hoverStyle) {
	            if (el.__hoverMir) {
	                return;
	            }
	            var elMirror = new el.constructor({
	                style: el.style,
	                shape: el.shape
	            });
	            elMirror.__from = el;
	            el.__hoverMir = elMirror;
	            elMirror.setStyle(hoverStyle);
	            this._hoverElements.push(elMirror);
	        },

	        removeHover: function (el) {
	            var elMirror = el.__hoverMir;
	            var hoverElements = this._hoverElements;
	            var idx = util.indexOf(hoverElements, elMirror);
	            if (idx >= 0) {
	                hoverElements.splice(idx, 1);
	            }
	            el.__hoverMir = null;
	        },

	        clearHover: function (el) {
	            var hoverElements = this._hoverElements;
	            for (var i = 0; i < hoverElements.length; i++) {
	                var from = hoverElements[i].__from;
	                if (from) {
	                    from.__hoverMir = null;
	                }
	            }
	            hoverElements.length = 0;
	        },

	        refreshHover: function () {
	            var hoverElements = this._hoverElements;
	            var len = hoverElements.length;
	            var hoverLayer = this._hoverlayer;
	            hoverLayer && hoverLayer.clear();

	            if (!len) {
	                return;
	            }
	            timsort(hoverElements, this.storage.displayableSortFunc);

	            // Use a extream large zlevel
	            // FIXME?
	            if (!hoverLayer) {
	                hoverLayer = this._hoverlayer = this.getLayer(1e5);
	            }

	            var scope = {};
	            hoverLayer.ctx.save();
	            for (var i = 0; i < len;) {
	                var el = hoverElements[i];
	                var originalEl = el.__from;
	                // Original el is removed
	                // PENDING
	                if (!(originalEl && originalEl.__zr)) {
	                    hoverElements.splice(i, 1);
	                    originalEl.__hoverMir = null;
	                    len--;
	                    continue;
	                }
	                i++;

	                // Use transform
	                // FIXME style and shape ?
	                if (!originalEl.invisible) {
	                    el.transform = originalEl.transform;
	                    el.invTransform = originalEl.invTransform;
	                    el.__clipPaths = originalEl.__clipPaths;
	                    // el.
	                    this._doPaintEl(el, hoverLayer, true, scope);
	                }
	            }
	            hoverLayer.ctx.restore();
	        },

	        _startProgessive: function () {
	            var self = this;

	            if (!self._furtherProgressive) {
	                return;
	            }

	            // Use a token to stop progress steps triggered by
	            // previous zr.refresh calling.
	            var token = self._progressiveToken = +new Date();

	            self._progress++;
	            requestAnimationFrame(step);

	            function step() {
	                // In case refreshed or disposed
	                if (token === self._progressiveToken && self.storage) {

	                    self._doPaintList(self.storage.getDisplayList());

	                    if (self._furtherProgressive) {
	                        self._progress++;
	                        requestAnimationFrame(step);
	                    }
	                    else {
	                        self._progressiveToken = -1;
	                    }
	                }
	            }
	        },

	        _clearProgressive: function () {
	            this._progressiveToken = -1;
	            this._progress = 0;
	            util.each(this._progressiveLayers, function (layer) {
	                layer.__dirty && layer.clear();
	            });
	        },

	        _paintList: function (list, paintAll) {

	            if (paintAll == null) {
	                paintAll = false;
	            }

	            this._updateLayerStatus(list);

	            this._clearProgressive();

	            this.eachBuildinLayer(preProcessLayer);

	            this._doPaintList(list, paintAll);

	            this.eachBuildinLayer(postProcessLayer);
	        },

	        _doPaintList: function (list, paintAll) {
	            var currentLayer;
	            var currentZLevel;
	            var ctx;

	            // var invTransform = [];
	            var scope;

	            var progressiveLayerIdx = 0;
	            var currentProgressiveLayer;

	            var width = this._width;
	            var height = this._height;
	            var layerProgress;
	            var frame = this._progress;
	            function flushProgressiveLayer(layer) {
	                var dpr = ctx.dpr || 1;
	                ctx.save();
	                ctx.globalAlpha = 1;
	                ctx.shadowBlur = 0;
	                // Avoid layer don't clear in next progressive frame
	                currentLayer.__dirty = true;
	                ctx.setTransform(1, 0, 0, 1, 0, 0);
	                ctx.drawImage(layer.dom, 0, 0, width * dpr, height * dpr);
	                ctx.restore();
	            }

	            for (var i = 0, l = list.length; i < l; i++) {
	                var el = list[i];
	                var elZLevel = this._singleCanvas ? 0 : el.zlevel;

	                var elFrame = el.__frame;

	                // Flush at current context
	                // PENDING
	                if (elFrame < 0 && currentProgressiveLayer) {
	                    flushProgressiveLayer(currentProgressiveLayer);
	                    currentProgressiveLayer = null;
	                }

	                // Change draw layer
	                if (currentZLevel !== elZLevel) {
	                    if (ctx) {
	                        ctx.restore();
	                    }

	                    // Reset scope
	                    scope = {};

	                    // Only 0 zlevel if only has one canvas
	                    currentZLevel = elZLevel;
	                    currentLayer = this.getLayer(currentZLevel);

	                    if (!currentLayer.isBuildin) {
	                        log(
	                            'ZLevel ' + currentZLevel
	                            + ' has been used by unkown layer ' + currentLayer.id
	                        );
	                    }

	                    ctx = currentLayer.ctx;
	                    ctx.save();

	                    // Reset the count
	                    currentLayer.__unusedCount = 0;

	                    if (currentLayer.__dirty || paintAll) {
	                        currentLayer.clear();
	                    }
	                }

	                if (!(currentLayer.__dirty || paintAll)) {
	                    continue;
	                }

	                if (elFrame >= 0) {
	                    // Progressive layer changed
	                    if (!currentProgressiveLayer) {
	                        currentProgressiveLayer = this._progressiveLayers[
	                            Math.min(progressiveLayerIdx++, MAX_PROGRESSIVE_LAYER_NUMBER - 1)
	                        ];

	                        currentProgressiveLayer.ctx.save();
	                        currentProgressiveLayer.renderScope = {};

	                        if (currentProgressiveLayer
	                            && (currentProgressiveLayer.__progress > currentProgressiveLayer.__maxProgress)
	                        ) {
	                            // flushProgressiveLayer(currentProgressiveLayer);
	                            // Quick jump all progressive elements
	                            // All progressive element are not dirty, jump over and flush directly
	                            i = currentProgressiveLayer.__nextIdxNotProg - 1;
	                            // currentProgressiveLayer = null;
	                            continue;
	                        }

	                        layerProgress = currentProgressiveLayer.__progress;

	                        if (!currentProgressiveLayer.__dirty) {
	                            // Keep rendering
	                            frame = layerProgress;
	                        }

	                        currentProgressiveLayer.__progress = frame + 1;
	                    }

	                    if (elFrame === frame) {
	                        this._doPaintEl(el, currentProgressiveLayer, true, currentProgressiveLayer.renderScope);
	                    }
	                }
	                else {
	                    this._doPaintEl(el, currentLayer, paintAll, scope);
	                }

	                el.__dirty = false;
	            }

	            if (currentProgressiveLayer) {
	                flushProgressiveLayer(currentProgressiveLayer);
	            }

	            // Restore the lastLayer ctx
	            ctx && ctx.restore();
	            // If still has clipping state
	            // if (scope.prevElClipPaths) {
	            //     ctx.restore();
	            // }

	            this._furtherProgressive = false;
	            util.each(this._progressiveLayers, function (layer) {
	                if (layer.__maxProgress >= layer.__progress) {
	                    this._furtherProgressive = true;
	                }
	            }, this);
	        },

	        _doPaintEl: function (el, currentLayer, forcePaint, scope) {
	            var ctx = currentLayer.ctx;
	            var m = el.transform;
	            if (
	                (currentLayer.__dirty || forcePaint)
	                // Ignore invisible element
	                && !el.invisible
	                // Ignore transparent element
	                && el.style.opacity !== 0
	                // Ignore scale 0 element, in some environment like node-canvas
	                // Draw a scale 0 element can cause all following draw wrong
	                // And setTransform with scale 0 will cause set back transform failed.
	                && !(m && !m[0] && !m[3])
	                // Ignore culled element
	                && !(el.culling && isDisplayableCulled(el, this._width, this._height))
	            ) {

	                var clipPaths = el.__clipPaths;

	                // Optimize when clipping on group with several elements
	                if (scope.prevClipLayer !== currentLayer
	                    || isClipPathChanged(clipPaths, scope.prevElClipPaths)
	                ) {
	                    // If has previous clipping state, restore from it
	                    if (scope.prevElClipPaths) {
	                        scope.prevClipLayer.ctx.restore();
	                        scope.prevClipLayer = scope.prevElClipPaths = null;

	                        // Reset prevEl since context has been restored
	                        scope.prevEl = null;
	                    }
	                    // New clipping state
	                    if (clipPaths) {
	                        ctx.save();
	                        doClip(clipPaths, ctx);
	                        scope.prevClipLayer = currentLayer;
	                        scope.prevElClipPaths = clipPaths;
	                    }
	                }
	                el.beforeBrush && el.beforeBrush(ctx);

	                el.brush(ctx, scope.prevEl || null);
	                scope.prevEl = el;

	                el.afterBrush && el.afterBrush(ctx);
	            }
	        },

	        /**
	         * 获取 zlevel 所在层，如果不存在则会创建一个新的层
	         * @param {number} zlevel
	         * @return {module:zrender/Layer}
	         */
	        getLayer: function (zlevel) {
	            if (this._singleCanvas) {
	                return this._layers[0];
	            }

	            var layer = this._layers[zlevel];
	            if (!layer) {
	                // Create a new layer
	                layer = new Layer('zr_' + zlevel, this, this.dpr);
	                layer.isBuildin = true;

	                if (this._layerConfig[zlevel]) {
	                    util.merge(layer, this._layerConfig[zlevel], true);
	                }

	                this.insertLayer(zlevel, layer);

	                // Context is created after dom inserted to document
	                // Or excanvas will get 0px clientWidth and clientHeight
	                layer.initContext();
	            }

	            return layer;
	        },

	        insertLayer: function (zlevel, layer) {

	            var layersMap = this._layers;
	            var zlevelList = this._zlevelList;
	            var len = zlevelList.length;
	            var prevLayer = null;
	            var i = -1;
	            var domRoot = this._domRoot;

	            if (layersMap[zlevel]) {
	                log('ZLevel ' + zlevel + ' has been used already');
	                return;
	            }
	            // Check if is a valid layer
	            if (!isLayerValid(layer)) {
	                log('Layer of zlevel ' + zlevel + ' is not valid');
	                return;
	            }

	            if (len > 0 && zlevel > zlevelList[0]) {
	                for (i = 0; i < len - 1; i++) {
	                    if (
	                        zlevelList[i] < zlevel
	                        && zlevelList[i + 1] > zlevel
	                    ) {
	                        break;
	                    }
	                }
	                prevLayer = layersMap[zlevelList[i]];
	            }
	            zlevelList.splice(i + 1, 0, zlevel);

	            if (prevLayer) {
	                var prevDom = prevLayer.dom;
	                if (prevDom.nextSibling) {
	                    domRoot.insertBefore(
	                        layer.dom,
	                        prevDom.nextSibling
	                    );
	                }
	                else {
	                    domRoot.appendChild(layer.dom);
	                }
	            }
	            else {
	                if (domRoot.firstChild) {
	                    domRoot.insertBefore(layer.dom, domRoot.firstChild);
	                }
	                else {
	                    domRoot.appendChild(layer.dom);
	                }
	            }

	            layersMap[zlevel] = layer;
	        },

	        // Iterate each layer
	        eachLayer: function (cb, context) {
	            var zlevelList = this._zlevelList;
	            var z;
	            var i;
	            for (i = 0; i < zlevelList.length; i++) {
	                z = zlevelList[i];
	                cb.call(context, this._layers[z], z);
	            }
	        },

	        // Iterate each buildin layer
	        eachBuildinLayer: function (cb, context) {
	            var zlevelList = this._zlevelList;
	            var layer;
	            var z;
	            var i;
	            for (i = 0; i < zlevelList.length; i++) {
	                z = zlevelList[i];
	                layer = this._layers[z];
	                if (layer.isBuildin) {
	                    cb.call(context, layer, z);
	                }
	            }
	        },

	        // Iterate each other layer except buildin layer
	        eachOtherLayer: function (cb, context) {
	            var zlevelList = this._zlevelList;
	            var layer;
	            var z;
	            var i;
	            for (i = 0; i < zlevelList.length; i++) {
	                z = zlevelList[i];
	                layer = this._layers[z];
	                if (! layer.isBuildin) {
	                    cb.call(context, layer, z);
	                }
	            }
	        },

	        /**
	         * 获取所有已创建的层
	         * @param {Array.<module:zrender/Layer>} [prevLayer]
	         */
	        getLayers: function () {
	            return this._layers;
	        },

	        _updateLayerStatus: function (list) {

	            var layers = this._layers;
	            var progressiveLayers = this._progressiveLayers;

	            var elCountsLastFrame = {};
	            var progressiveElCountsLastFrame = {};

	            this.eachBuildinLayer(function (layer, z) {
	                elCountsLastFrame[z] = layer.elCount;
	                layer.elCount = 0;
	                layer.__dirty = false;
	            });

	            util.each(progressiveLayers, function (layer, idx) {
	                progressiveElCountsLastFrame[idx] = layer.elCount;
	                layer.elCount = 0;
	                layer.__dirty = false;
	            });

	            var progressiveLayerCount = 0;
	            var currentProgressiveLayer;
	            var lastProgressiveKey;
	            var frameCount = 0;
	            for (var i = 0, l = list.length; i < l; i++) {
	                var el = list[i];
	                var zlevel = this._singleCanvas ? 0 : el.zlevel;
	                var layer = layers[zlevel];
	                var elProgress = el.progressive;
	                if (layer) {
	                    layer.elCount++;
	                    layer.__dirty = layer.__dirty || el.__dirty;
	                }

	                /////// Update progressive
	                if (elProgress >= 0) {
	                    // Fix wrong progressive sequence problem.
	                    if (lastProgressiveKey !== elProgress) {
	                        lastProgressiveKey = elProgress;
	                        frameCount++;
	                    }
	                    var elFrame = el.__frame = frameCount - 1;
	                    if (!currentProgressiveLayer) {
	                        var idx = Math.min(progressiveLayerCount, MAX_PROGRESSIVE_LAYER_NUMBER - 1);
	                        currentProgressiveLayer = progressiveLayers[idx];
	                        if (!currentProgressiveLayer) {
	                            currentProgressiveLayer = progressiveLayers[idx] = new Layer(
	                                'progressive', this, this.dpr
	                            );
	                            currentProgressiveLayer.initContext();
	                        }
	                        currentProgressiveLayer.__maxProgress = 0;
	                    }
	                    currentProgressiveLayer.__dirty = currentProgressiveLayer.__dirty || el.__dirty;
	                    currentProgressiveLayer.elCount++;

	                    currentProgressiveLayer.__maxProgress = Math.max(
	                        currentProgressiveLayer.__maxProgress, elFrame
	                    );

	                    if (currentProgressiveLayer.__maxProgress >= currentProgressiveLayer.__progress) {
	                        // Should keep rendering this  layer because progressive rendering is not finished yet
	                        layer.__dirty = true;
	                    }
	                }
	                else {
	                    el.__frame = -1;

	                    if (currentProgressiveLayer) {
	                        currentProgressiveLayer.__nextIdxNotProg = i;
	                        progressiveLayerCount++;
	                        currentProgressiveLayer = null;
	                    }
	                }
	            }

	            if (currentProgressiveLayer) {
	                progressiveLayerCount++;
	                currentProgressiveLayer.__nextIdxNotProg = i;
	            }

	            // 层中的元素数量有发生变化
	            this.eachBuildinLayer(function (layer, z) {
	                if (elCountsLastFrame[z] !== layer.elCount) {
	                    layer.__dirty = true;
	                }
	            });

	            progressiveLayers.length = Math.min(progressiveLayerCount, MAX_PROGRESSIVE_LAYER_NUMBER);
	            util.each(progressiveLayers, function (layer, idx) {
	                if (progressiveElCountsLastFrame[idx] !== layer.elCount) {
	                    el.__dirty = true;
	                }
	                if (layer.__dirty) {
	                    layer.__progress = 0;
	                }
	            });
	        },

	        /**
	         * 清除hover层外所有内容
	         */
	        clear: function () {
	            this.eachBuildinLayer(this._clearLayer);
	            return this;
	        },

	        _clearLayer: function (layer) {
	            layer.clear();
	        },

	        /**
	         * 修改指定zlevel的绘制参数
	         *
	         * @param {string} zlevel
	         * @param {Object} config 配置对象
	         * @param {string} [config.clearColor=0] 每次清空画布的颜色
	         * @param {string} [config.motionBlur=false] 是否开启动态模糊
	         * @param {number} [config.lastFrameAlpha=0.7]
	         *                 在开启动态模糊的时候使用，与上一帧混合的alpha值，值越大尾迹越明显
	         */
	        configLayer: function (zlevel, config) {
	            if (config) {
	                var layerConfig = this._layerConfig;
	                if (!layerConfig[zlevel]) {
	                    layerConfig[zlevel] = config;
	                }
	                else {
	                    util.merge(layerConfig[zlevel], config, true);
	                }

	                var layer = this._layers[zlevel];

	                if (layer) {
	                    util.merge(layer, layerConfig[zlevel], true);
	                }
	            }
	        },

	        /**
	         * 删除指定层
	         * @param {number} zlevel 层所在的zlevel
	         */
	        delLayer: function (zlevel) {
	            var layers = this._layers;
	            var zlevelList = this._zlevelList;
	            var layer = layers[zlevel];
	            if (!layer) {
	                return;
	            }
	            layer.dom.parentNode.removeChild(layer.dom);
	            delete layers[zlevel];

	            zlevelList.splice(util.indexOf(zlevelList, zlevel), 1);
	        },

	        /**
	         * 区域大小变化后重绘
	         */
	        resize: function (width, height) {
	            var domRoot = this._domRoot;
	            // FIXME Why ?
	            domRoot.style.display = 'none';

	            // Save input w/h
	            var opts = this._opts;
	            width != null && (opts.width = width);
	            height != null && (opts.height = height);

	            width = this._getSize(0);
	            height = this._getSize(1);

	            domRoot.style.display = '';

	            // 优化没有实际改变的resize
	            if (this._width != width || height != this._height) {
	                domRoot.style.width = width + 'px';
	                domRoot.style.height = height + 'px';

	                for (var id in this._layers) {
	                    if (this._layers.hasOwnProperty(id)) {
	                        this._layers[id].resize(width, height);
	                    }
	                }
	                util.each(this._progressiveLayers, function (layer) {
	                    layer.resize(width, height);
	                });

	                this.refresh(true);
	            }

	            this._width = width;
	            this._height = height;

	            return this;
	        },

	        /**
	         * 清除单独的一个层
	         * @param {number} zlevel
	         */
	        clearLayer: function (zlevel) {
	            var layer = this._layers[zlevel];
	            if (layer) {
	                layer.clear();
	            }
	        },

	        /**
	         * 释放
	         */
	        dispose: function () {
	            this.root.innerHTML = '';

	            this.root =
	            this.storage =

	            this._domRoot =
	            this._layers = null;
	        },

	        /**
	         * Get canvas which has all thing rendered
	         * @param {Object} opts
	         * @param {string} [opts.backgroundColor]
	         */
	        getRenderedCanvas: function (opts) {
	            opts = opts || {};
	            if (this._singleCanvas) {
	                return this._layers[0].dom;
	            }

	            var imageLayer = new Layer('image', this, opts.pixelRatio || this.dpr);
	            imageLayer.initContext();

	            imageLayer.clearColor = opts.backgroundColor;
	            imageLayer.clear();

	            var displayList = this.storage.getDisplayList(true);

	            var scope = {};
	            for (var i = 0; i < displayList.length; i++) {
	                var el = displayList[i];
	                this._doPaintEl(el, imageLayer, true, scope);
	            }

	            return imageLayer.dom;
	        },
	        /**
	         * 获取绘图区域宽度
	         */
	        getWidth: function () {
	            return this._width;
	        },

	        /**
	         * 获取绘图区域高度
	         */
	        getHeight: function () {
	            return this._height;
	        },

	        _getSize: function (whIdx) {
	            var opts = this._opts;
	            var wh = ['width', 'height'][whIdx];
	            var cwh = ['clientWidth', 'clientHeight'][whIdx];
	            var plt = ['paddingLeft', 'paddingTop'][whIdx];
	            var prb = ['paddingRight', 'paddingBottom'][whIdx];

	            if (opts[wh] != null && opts[wh] !== 'auto') {
	                return parseFloat(opts[wh]);
	            }

	            var root = this.root;
	            var stl = document.defaultView.getComputedStyle(root);

	            return (
	                (root[cwh] || parseInt10(stl[wh]) || parseInt10(root.style[wh]))
	                - (parseInt10(stl[plt]) || 0)
	                - (parseInt10(stl[prb]) || 0)
	            ) | 0;
	        },

	        _pathToImage: function (id, path, width, height, dpr) {
	            var canvas = document.createElement('canvas');
	            var ctx = canvas.getContext('2d');

	            canvas.width = width * dpr;
	            canvas.height = height * dpr;

	            ctx.clearRect(0, 0, width * dpr, height * dpr);

	            var pathTransform = {
	                position: path.position,
	                rotation: path.rotation,
	                scale: path.scale
	            };
	            path.position = [0, 0, 0];
	            path.rotation = 0;
	            path.scale = [1, 1];
	            if (path) {
	                path.brush(ctx);
	            }

	            var ImageShape = __webpack_require__(690);
	            var imgShape = new ImageShape({
	                id: id,
	                style: {
	                    x: 0,
	                    y: 0,
	                    image: canvas
	                }
	            });

	            if (pathTransform.position != null) {
	                imgShape.position = path.position = pathTransform.position;
	            }

	            if (pathTransform.rotation != null) {
	                imgShape.rotation = path.rotation = pathTransform.rotation;
	            }

	            if (pathTransform.scale != null) {
	                imgShape.scale = path.scale = pathTransform.scale;
	            }

	            return imgShape;
	        },

	        _createPathToImage: function () {
	            var me = this;

	            return function (id, e, width, height) {
	                return me._pathToImage(
	                    id, e, width, height, me.dpr
	                );
	            };
	        }
	    };

	    module.exports = Painter;



/***/ },

/***/ 1034:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * Storage内容仓库模块
	 * @module zrender/Storage
	 * @author Kener (@Kener-林峰, kener.linfeng@gmail.com)
	 * @author errorrik (errorrik@gmail.com)
	 * @author pissang (https://github.com/pissang/)
	 */


	    var util = __webpack_require__(2);
	    var env = __webpack_require__(77);

	    var Group = __webpack_require__(145);

	    // Use timsort because in most case elements are partially sorted
	    // https://jsfiddle.net/pissang/jr4x7mdm/8/
	    var timsort = __webpack_require__(689);

	    function shapeCompareFunc(a, b) {
	        if (a.zlevel === b.zlevel) {
	            if (a.z === b.z) {
	                // if (a.z2 === b.z2) {
	                //     // FIXME Slow has renderidx compare
	                //     // http://stackoverflow.com/questions/20883421/sorting-in-javascript-should-every-compare-function-have-a-return-0-statement
	                //     // https://github.com/v8/v8/blob/47cce544a31ed5577ffe2963f67acb4144ee0232/src/js/array.js#L1012
	                //     return a.__renderidx - b.__renderidx;
	                // }
	                return a.z2 - b.z2;
	            }
	            return a.z - b.z;
	        }
	        return a.zlevel - b.zlevel;
	    }
	    /**
	     * 内容仓库 (M)
	     * @alias module:zrender/Storage
	     * @constructor
	     */
	    var Storage = function () {
	        // 所有常规形状，id索引的map
	        this._elements = {};

	        this._roots = [];

	        this._displayList = [];

	        this._displayListLen = 0;
	    };

	    Storage.prototype = {

	        constructor: Storage,

	        /**
	         * @param  {Function} cb
	         *
	         */
	        traverse: function (cb, context) {
	            for (var i = 0; i < this._roots.length; i++) {
	                this._roots[i].traverse(cb, context);
	            }
	        },

	        /**
	         * 返回所有图形的绘制队列
	         * @param {boolean} [update=false] 是否在返回前更新该数组
	         * @param {boolean} [includeIgnore=false] 是否包含 ignore 的数组, 在 update 为 true 的时候有效
	         *
	         * 详见{@link module:zrender/graphic/Displayable.prototype.updateDisplayList}
	         * @return {Array.<module:zrender/graphic/Displayable>}
	         */
	        getDisplayList: function (update, includeIgnore) {
	            includeIgnore = includeIgnore || false;
	            if (update) {
	                this.updateDisplayList(includeIgnore);
	            }
	            return this._displayList;
	        },

	        /**
	         * 更新图形的绘制队列。
	         * 每次绘制前都会调用，该方法会先深度优先遍历整个树，更新所有Group和Shape的变换并且把所有可见的Shape保存到数组中，
	         * 最后根据绘制的优先级（zlevel > z > 插入顺序）排序得到绘制队列
	         * @param {boolean} [includeIgnore=false] 是否包含 ignore 的数组
	         */
	        updateDisplayList: function (includeIgnore) {
	            this._displayListLen = 0;
	            var roots = this._roots;
	            var displayList = this._displayList;
	            for (var i = 0, len = roots.length; i < len; i++) {
	                this._updateAndAddDisplayable(roots[i], null, includeIgnore);
	            }
	            displayList.length = this._displayListLen;

	            // for (var i = 0, len = displayList.length; i < len; i++) {
	            //     displayList[i].__renderidx = i;
	            // }

	            // displayList.sort(shapeCompareFunc);
	            env.canvasSupported && timsort(displayList, shapeCompareFunc);
	        },

	        _updateAndAddDisplayable: function (el, clipPaths, includeIgnore) {

	            if (el.ignore && !includeIgnore) {
	                return;
	            }

	            el.beforeUpdate();

	            if (el.__dirty) {

	                el.update();

	            }

	            el.afterUpdate();

	            var userSetClipPath = el.clipPath;
	            if (userSetClipPath) {

	                // FIXME 效率影响
	                if (clipPaths) {
	                    clipPaths = clipPaths.slice();
	                }
	                else {
	                    clipPaths = [];
	                }

	                var currentClipPath = userSetClipPath;
	                var parentClipPath = el;
	                // Recursively add clip path
	                while (currentClipPath) {
	                    // clipPath 的变换是基于使用这个 clipPath 的元素
	                    currentClipPath.parent = parentClipPath;
	                    currentClipPath.updateTransform();

	                    clipPaths.push(currentClipPath);

	                    parentClipPath = currentClipPath;
	                    currentClipPath = currentClipPath.clipPath;
	                }
	            }

	            if (el.isGroup) {
	                var children = el._children;

	                for (var i = 0; i < children.length; i++) {
	                    var child = children[i];

	                    // Force to mark as dirty if group is dirty
	                    // FIXME __dirtyPath ?
	                    if (el.__dirty) {
	                        child.__dirty = true;
	                    }

	                    this._updateAndAddDisplayable(child, clipPaths, includeIgnore);
	                }

	                // Mark group clean here
	                el.__dirty = false;

	            }
	            else {
	                el.__clipPaths = clipPaths;

	                this._displayList[this._displayListLen++] = el;
	            }
	        },

	        /**
	         * 添加图形(Shape)或者组(Group)到根节点
	         * @param {module:zrender/Element} el
	         */
	        addRoot: function (el) {
	            // Element has been added
	            if (this._elements[el.id]) {
	                return;
	            }

	            if (el instanceof Group) {
	                el.addChildrenToStorage(this);
	            }

	            this.addToMap(el);
	            this._roots.push(el);
	        },

	        /**
	         * 删除指定的图形(Shape)或者组(Group)
	         * @param {string|Array.<string>} [elId] 如果为空清空整个Storage
	         */
	        delRoot: function (elId) {
	            if (elId == null) {
	                // 不指定elId清空
	                for (var i = 0; i < this._roots.length; i++) {
	                    var root = this._roots[i];
	                    if (root instanceof Group) {
	                        root.delChildrenFromStorage(this);
	                    }
	                }

	                this._elements = {};
	                this._roots = [];
	                this._displayList = [];
	                this._displayListLen = 0;

	                return;
	            }

	            if (elId instanceof Array) {
	                for (var i = 0, l = elId.length; i < l; i++) {
	                    this.delRoot(elId[i]);
	                }
	                return;
	            }

	            var el;
	            if (typeof(elId) == 'string') {
	                el = this._elements[elId];
	            }
	            else {
	                el = elId;
	            }

	            var idx = util.indexOf(this._roots, el);
	            if (idx >= 0) {
	                this.delFromMap(el.id);
	                this._roots.splice(idx, 1);
	                if (el instanceof Group) {
	                    el.delChildrenFromStorage(this);
	                }
	            }
	        },

	        addToMap: function (el) {
	            if (el instanceof Group) {
	                el.__storage = this;
	            }
	            el.dirty(false);

	            this._elements[el.id] = el;

	            return this;
	        },

	        get: function (elId) {
	            return this._elements[elId];
	        },

	        delFromMap: function (elId) {
	            var elements = this._elements;
	            var el = elements[elId];
	            if (el) {
	                delete elements[elId];
	                if (el instanceof Group) {
	                    el.__storage = null;
	                }
	            }

	            return this;
	        },

	        /**
	         * 清空并且释放Storage
	         */
	        dispose: function () {
	            this._elements =
	            this._renderList =
	            this._roots = null;
	        },

	        displayableSortFunc: shapeCompareFunc
	    };

	    module.exports = Storage;



/***/ },

/***/ 1035:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * 动画主控制器
	 * @config target 动画对象，可以是数组，如果是数组的话会批量分发onframe等事件
	 * @config life(1000) 动画时长
	 * @config delay(0) 动画延迟时间
	 * @config loop(true)
	 * @config gap(0) 循环的间隔时间
	 * @config onframe
	 * @config easing(optional)
	 * @config ondestroy(optional)
	 * @config onrestart(optional)
	 *
	 * TODO pause
	 */


	    var easingFuncs = __webpack_require__(1036);

	    function Clip(options) {

	        this._target = options.target;

	        // 生命周期
	        this._life = options.life || 1000;
	        // 延时
	        this._delay = options.delay || 0;
	        // 开始时间
	        // this._startTime = new Date().getTime() + this._delay;// 单位毫秒
	        this._initialized = false;

	        // 是否循环
	        this.loop = options.loop == null ? false : options.loop;

	        this.gap = options.gap || 0;

	        this.easing = options.easing || 'Linear';

	        this.onframe = options.onframe;
	        this.ondestroy = options.ondestroy;
	        this.onrestart = options.onrestart;
	    }

	    Clip.prototype = {

	        constructor: Clip,

	        step: function (globalTime) {
	            // Set startTime on first step, or _startTime may has milleseconds different between clips
	            // PENDING
	            if (!this._initialized) {
	                this._startTime = globalTime + this._delay;
	                this._initialized = true;
	            }

	            var percent = (globalTime - this._startTime) / this._life;

	            // 还没开始
	            if (percent < 0) {
	                return;
	            }

	            percent = Math.min(percent, 1);

	            var easing = this.easing;
	            var easingFunc = typeof easing == 'string' ? easingFuncs[easing] : easing;
	            var schedule = typeof easingFunc === 'function'
	                ? easingFunc(percent)
	                : percent;

	            this.fire('frame', schedule);

	            // 结束
	            if (percent == 1) {
	                if (this.loop) {
	                    this.restart (globalTime);
	                    // 重新开始周期
	                    // 抛出而不是直接调用事件直到 stage.update 后再统一调用这些事件
	                    return 'restart';
	                }

	                // 动画完成将这个控制器标识为待删除
	                // 在Animation.update中进行批量删除
	                this._needsRemove = true;
	                return 'destroy';
	            }

	            return null;
	        },

	        restart: function (globalTime) {
	            var remainder = (globalTime - this._startTime) % this._life;
	            this._startTime = globalTime - remainder + this.gap;

	            this._needsRemove = false;
	        },

	        fire: function(eventType, arg) {
	            eventType = 'on' + eventType;
	            if (this[eventType]) {
	                this[eventType](this._target, arg);
	            }
	        }
	    };

	    module.exports = Clip;



/***/ },

/***/ 1036:
/***/ function(module, exports) {

	/**
	 * 缓动代码来自 https://github.com/sole/tween.js/blob/master/src/Tween.js
	 * @see http://sole.github.io/tween.js/examples/03_graphs.html
	 * @exports zrender/animation/easing
	 */

	    var easing = {
	        /**
	        * @param {number} k
	        * @return {number}
	        */
	        linear: function (k) {
	            return k;
	        },

	        /**
	        * @param {number} k
	        * @return {number}
	        */
	        quadraticIn: function (k) {
	            return k * k;
	        },
	        /**
	        * @param {number} k
	        * @return {number}
	        */
	        quadraticOut: function (k) {
	            return k * (2 - k);
	        },
	        /**
	        * @param {number} k
	        * @return {number}
	        */
	        quadraticInOut: function (k) {
	            if ((k *= 2) < 1) {
	                return 0.5 * k * k;
	            }
	            return -0.5 * (--k * (k - 2) - 1);
	        },

	        // 三次方的缓动（t^3）
	        /**
	        * @param {number} k
	        * @return {number}
	        */
	        cubicIn: function (k) {
	            return k * k * k;
	        },
	        /**
	        * @param {number} k
	        * @return {number}
	        */
	        cubicOut: function (k) {
	            return --k * k * k + 1;
	        },
	        /**
	        * @param {number} k
	        * @return {number}
	        */
	        cubicInOut: function (k) {
	            if ((k *= 2) < 1) {
	                return 0.5 * k * k * k;
	            }
	            return 0.5 * ((k -= 2) * k * k + 2);
	        },

	        // 四次方的缓动（t^4）
	        /**
	        * @param {number} k
	        * @return {number}
	        */
	        quarticIn: function (k) {
	            return k * k * k * k;
	        },
	        /**
	        * @param {number} k
	        * @return {number}
	        */
	        quarticOut: function (k) {
	            return 1 - (--k * k * k * k);
	        },
	        /**
	        * @param {number} k
	        * @return {number}
	        */
	        quarticInOut: function (k) {
	            if ((k *= 2) < 1) {
	                return 0.5 * k * k * k * k;
	            }
	            return -0.5 * ((k -= 2) * k * k * k - 2);
	        },

	        // 五次方的缓动（t^5）
	        /**
	        * @param {number} k
	        * @return {number}
	        */
	        quinticIn: function (k) {
	            return k * k * k * k * k;
	        },
	        /**
	        * @param {number} k
	        * @return {number}
	        */
	        quinticOut: function (k) {
	            return --k * k * k * k * k + 1;
	        },
	        /**
	        * @param {number} k
	        * @return {number}
	        */
	        quinticInOut: function (k) {
	            if ((k *= 2) < 1) {
	                return 0.5 * k * k * k * k * k;
	            }
	            return 0.5 * ((k -= 2) * k * k * k * k + 2);
	        },

	        // 正弦曲线的缓动（sin(t)）
	        /**
	        * @param {number} k
	        * @return {number}
	        */
	        sinusoidalIn: function (k) {
	            return 1 - Math.cos(k * Math.PI / 2);
	        },
	        /**
	        * @param {number} k
	        * @return {number}
	        */
	        sinusoidalOut: function (k) {
	            return Math.sin(k * Math.PI / 2);
	        },
	        /**
	        * @param {number} k
	        * @return {number}
	        */
	        sinusoidalInOut: function (k) {
	            return 0.5 * (1 - Math.cos(Math.PI * k));
	        },

	        // 指数曲线的缓动（2^t）
	        /**
	        * @param {number} k
	        * @return {number}
	        */
	        exponentialIn: function (k) {
	            return k === 0 ? 0 : Math.pow(1024, k - 1);
	        },
	        /**
	        * @param {number} k
	        * @return {number}
	        */
	        exponentialOut: function (k) {
	            return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
	        },
	        /**
	        * @param {number} k
	        * @return {number}
	        */
	        exponentialInOut: function (k) {
	            if (k === 0) {
	                return 0;
	            }
	            if (k === 1) {
	                return 1;
	            }
	            if ((k *= 2) < 1) {
	                return 0.5 * Math.pow(1024, k - 1);
	            }
	            return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
	        },

	        // 圆形曲线的缓动（sqrt(1-t^2)）
	        /**
	        * @param {number} k
	        * @return {number}
	        */
	        circularIn: function (k) {
	            return 1 - Math.sqrt(1 - k * k);
	        },
	        /**
	        * @param {number} k
	        * @return {number}
	        */
	        circularOut: function (k) {
	            return Math.sqrt(1 - (--k * k));
	        },
	        /**
	        * @param {number} k
	        * @return {number}
	        */
	        circularInOut: function (k) {
	            if ((k *= 2) < 1) {
	                return -0.5 * (Math.sqrt(1 - k * k) - 1);
	            }
	            return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
	        },

	        // 创建类似于弹簧在停止前来回振荡的动画
	        /**
	        * @param {number} k
	        * @return {number}
	        */
	        elasticIn: function (k) {
	            var s;
	            var a = 0.1;
	            var p = 0.4;
	            if (k === 0) {
	                return 0;
	            }
	            if (k === 1) {
	                return 1;
	            }
	            if (!a || a < 1) {
	                a = 1; s = p / 4;
	            }
	            else {
	                s = p * Math.asin(1 / a) / (2 * Math.PI);
	            }
	            return -(a * Math.pow(2, 10 * (k -= 1)) *
	                        Math.sin((k - s) * (2 * Math.PI) / p));
	        },
	        /**
	        * @param {number} k
	        * @return {number}
	        */
	        elasticOut: function (k) {
	            var s;
	            var a = 0.1;
	            var p = 0.4;
	            if (k === 0) {
	                return 0;
	            }
	            if (k === 1) {
	                return 1;
	            }
	            if (!a || a < 1) {
	                a = 1; s = p / 4;
	            }
	            else {
	                s = p * Math.asin(1 / a) / (2 * Math.PI);
	            }
	            return (a * Math.pow(2, -10 * k) *
	                    Math.sin((k - s) * (2 * Math.PI) / p) + 1);
	        },
	        /**
	        * @param {number} k
	        * @return {number}
	        */
	        elasticInOut: function (k) {
	            var s;
	            var a = 0.1;
	            var p = 0.4;
	            if (k === 0) {
	                return 0;
	            }
	            if (k === 1) {
	                return 1;
	            }
	            if (!a || a < 1) {
	                a = 1; s = p / 4;
	            }
	            else {
	                s = p * Math.asin(1 / a) / (2 * Math.PI);
	            }
	            if ((k *= 2) < 1) {
	                return -0.5 * (a * Math.pow(2, 10 * (k -= 1))
	                    * Math.sin((k - s) * (2 * Math.PI) / p));
	            }
	            return a * Math.pow(2, -10 * (k -= 1))
	                    * Math.sin((k - s) * (2 * Math.PI) / p) * 0.5 + 1;

	        },

	        // 在某一动画开始沿指示的路径进行动画处理前稍稍收回该动画的移动
	        /**
	        * @param {number} k
	        * @return {number}
	        */
	        backIn: function (k) {
	            var s = 1.70158;
	            return k * k * ((s + 1) * k - s);
	        },
	        /**
	        * @param {number} k
	        * @return {number}
	        */
	        backOut: function (k) {
	            var s = 1.70158;
	            return --k * k * ((s + 1) * k + s) + 1;
	        },
	        /**
	        * @param {number} k
	        * @return {number}
	        */
	        backInOut: function (k) {
	            var s = 1.70158 * 1.525;
	            if ((k *= 2) < 1) {
	                return 0.5 * (k * k * ((s + 1) * k - s));
	            }
	            return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
	        },

	        // 创建弹跳效果
	        /**
	        * @param {number} k
	        * @return {number}
	        */
	        bounceIn: function (k) {
	            return 1 - easing.bounceOut(1 - k);
	        },
	        /**
	        * @param {number} k
	        * @return {number}
	        */
	        bounceOut: function (k) {
	            if (k < (1 / 2.75)) {
	                return 7.5625 * k * k;
	            }
	            else if (k < (2 / 2.75)) {
	                return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75;
	            }
	            else if (k < (2.5 / 2.75)) {
	                return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375;
	            }
	            else {
	                return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375;
	            }
	        },
	        /**
	        * @param {number} k
	        * @return {number}
	        */
	        bounceInOut: function (k) {
	            if (k < 0.5) {
	                return easing.bounceIn(k * 2) * 0.5;
	            }
	            return easing.bounceOut(k * 2 - 1) * 0.5 + 0.5;
	        }
	    };

	    module.exports = easing;




/***/ },

/***/ 1037:
/***/ function(module, exports, __webpack_require__) {

	

	    var normalizeRadian = __webpack_require__(904).normalizeRadian;
	    var PI2 = Math.PI * 2;

	    module.exports = {
	        /**
	         * 圆弧描边包含判断
	         * @param  {number}  cx
	         * @param  {number}  cy
	         * @param  {number}  r
	         * @param  {number}  startAngle
	         * @param  {number}  endAngle
	         * @param  {boolean}  anticlockwise
	         * @param  {number} lineWidth
	         * @param  {number}  x
	         * @param  {number}  y
	         * @return {Boolean}
	         */
	        containStroke: function (
	            cx, cy, r, startAngle, endAngle, anticlockwise,
	            lineWidth, x, y
	        ) {

	            if (lineWidth === 0) {
	                return false;
	            }
	            var _l = lineWidth;

	            x -= cx;
	            y -= cy;
	            var d = Math.sqrt(x * x + y * y);

	            if ((d - _l > r) || (d + _l < r)) {
	                return false;
	            }
	            if (Math.abs(startAngle - endAngle) % PI2 < 1e-4) {
	                // Is a circle
	                return true;
	            }
	            if (anticlockwise) {
	                var tmp = startAngle;
	                startAngle = normalizeRadian(endAngle);
	                endAngle = normalizeRadian(tmp);
	            } else {
	                startAngle = normalizeRadian(startAngle);
	                endAngle = normalizeRadian(endAngle);
	            }
	            if (startAngle > endAngle) {
	                endAngle += PI2;
	            }

	            var angle = Math.atan2(y, x);
	            if (angle < 0) {
	                angle += PI2;
	            }
	            return (angle >= startAngle && angle <= endAngle)
	                || (angle + PI2 >= startAngle && angle + PI2 <= endAngle);
	        }
	    };


/***/ },

/***/ 1038:
/***/ function(module, exports, __webpack_require__) {

	

	    var curve = __webpack_require__(166);

	    module.exports = {
	        /**
	         * 三次贝塞尔曲线描边包含判断
	         * @param  {number}  x0
	         * @param  {number}  y0
	         * @param  {number}  x1
	         * @param  {number}  y1
	         * @param  {number}  x2
	         * @param  {number}  y2
	         * @param  {number}  x3
	         * @param  {number}  y3
	         * @param  {number}  lineWidth
	         * @param  {number}  x
	         * @param  {number}  y
	         * @return {boolean}
	         */
	        containStroke: function(x0, y0, x1, y1, x2, y2, x3, y3, lineWidth, x, y) {
	            if (lineWidth === 0) {
	                return false;
	            }
	            var _l = lineWidth;
	            // Quick reject
	            if (
	                (y > y0 + _l && y > y1 + _l && y > y2 + _l && y > y3 + _l)
	                || (y < y0 - _l && y < y1 - _l && y < y2 - _l && y < y3 - _l)
	                || (x > x0 + _l && x > x1 + _l && x > x2 + _l && x > x3 + _l)
	                || (x < x0 - _l && x < x1 - _l && x < x2 - _l && x < x3 - _l)
	            ) {
	                return false;
	            }
	            var d = curve.cubicProjectPoint(
	                x0, y0, x1, y1, x2, y2, x3, y3,
	                x, y, null
	            );
	            return d <= _l / 2;
	        }
	    };


/***/ },

/***/ 1039:
/***/ function(module, exports, __webpack_require__) {

	'use strict';


	    var CMD = __webpack_require__(337).CMD;
	    var line = __webpack_require__(901);
	    var cubic = __webpack_require__(1038);
	    var quadratic = __webpack_require__(903);
	    var arc = __webpack_require__(1037);
	    var normalizeRadian = __webpack_require__(904).normalizeRadian;
	    var curve = __webpack_require__(166);

	    var windingLine = __webpack_require__(905);

	    var containStroke = line.containStroke;

	    var PI2 = Math.PI * 2;

	    var EPSILON = 1e-4;

	    function isAroundEqual(a, b) {
	        return Math.abs(a - b) < EPSILON;
	    }

	    // 临时数组
	    var roots = [-1, -1, -1];
	    var extrema = [-1, -1];

	    function swapExtrema() {
	        var tmp = extrema[0];
	        extrema[0] = extrema[1];
	        extrema[1] = tmp;
	    }

	    function windingCubic(x0, y0, x1, y1, x2, y2, x3, y3, x, y) {
	        // Quick reject
	        if (
	            (y > y0 && y > y1 && y > y2 && y > y3)
	            || (y < y0 && y < y1 && y < y2 && y < y3)
	        ) {
	            return 0;
	        }
	        var nRoots = curve.cubicRootAt(y0, y1, y2, y3, y, roots);
	        if (nRoots === 0) {
	            return 0;
	        }
	        else {
	            var w = 0;
	            var nExtrema = -1;
	            var y0_, y1_;
	            for (var i = 0; i < nRoots; i++) {
	                var t = roots[i];

	                // Avoid winding error when intersection point is the connect point of two line of polygon
	                var unit = (t === 0 || t === 1) ? 0.5 : 1;

	                var x_ = curve.cubicAt(x0, x1, x2, x3, t);
	                if (x_ < x) { // Quick reject
	                    continue;
	                }
	                if (nExtrema < 0) {
	                    nExtrema = curve.cubicExtrema(y0, y1, y2, y3, extrema);
	                    if (extrema[1] < extrema[0] && nExtrema > 1) {
	                        swapExtrema();
	                    }
	                    y0_ = curve.cubicAt(y0, y1, y2, y3, extrema[0]);
	                    if (nExtrema > 1) {
	                        y1_ = curve.cubicAt(y0, y1, y2, y3, extrema[1]);
	                    }
	                }
	                if (nExtrema == 2) {
	                    // 分成三段单调函数
	                    if (t < extrema[0]) {
	                        w += y0_ < y0 ? unit : -unit;
	                    }
	                    else if (t < extrema[1]) {
	                        w += y1_ < y0_ ? unit : -unit;
	                    }
	                    else {
	                        w += y3 < y1_ ? unit : -unit;
	                    }
	                }
	                else {
	                    // 分成两段单调函数
	                    if (t < extrema[0]) {
	                        w += y0_ < y0 ? unit : -unit;
	                    }
	                    else {
	                        w += y3 < y0_ ? unit : -unit;
	                    }
	                }
	            }
	            return w;
	        }
	    }

	    function windingQuadratic(x0, y0, x1, y1, x2, y2, x, y) {
	        // Quick reject
	        if (
	            (y > y0 && y > y1 && y > y2)
	            || (y < y0 && y < y1 && y < y2)
	        ) {
	            return 0;
	        }
	        var nRoots = curve.quadraticRootAt(y0, y1, y2, y, roots);
	        if (nRoots === 0) {
	            return 0;
	        }
	        else {
	            var t = curve.quadraticExtremum(y0, y1, y2);
	            if (t >= 0 && t <= 1) {
	                var w = 0;
	                var y_ = curve.quadraticAt(y0, y1, y2, t);
	                for (var i = 0; i < nRoots; i++) {
	                    // Remove one endpoint.
	                    var unit = (roots[i] === 0 || roots[i] === 1) ? 0.5 : 1;

	                    var x_ = curve.quadraticAt(x0, x1, x2, roots[i]);
	                    if (x_ < x) {   // Quick reject
	                        continue;
	                    }
	                    if (roots[i] < t) {
	                        w += y_ < y0 ? unit : -unit;
	                    }
	                    else {
	                        w += y2 < y_ ? unit : -unit;
	                    }
	                }
	                return w;
	            }
	            else {
	                // Remove one endpoint.
	                var unit = (roots[0] === 0 || roots[0] === 1) ? 0.5 : 1;

	                var x_ = curve.quadraticAt(x0, x1, x2, roots[0]);
	                if (x_ < x) {   // Quick reject
	                    return 0;
	                }
	                return y2 < y0 ? unit : -unit;
	            }
	        }
	    }

	    // TODO
	    // Arc 旋转
	    function windingArc(
	        cx, cy, r, startAngle, endAngle, anticlockwise, x, y
	    ) {
	        y -= cy;
	        if (y > r || y < -r) {
	            return 0;
	        }
	        var tmp = Math.sqrt(r * r - y * y);
	        roots[0] = -tmp;
	        roots[1] = tmp;

	        var diff = Math.abs(startAngle - endAngle);
	        if (diff < 1e-4) {
	            return 0;
	        }
	        if (diff % PI2 < 1e-4) {
	            // Is a circle
	            startAngle = 0;
	            endAngle = PI2;
	            var dir = anticlockwise ? 1 : -1;
	            if (x >= roots[0] + cx && x <= roots[1] + cx) {
	                return dir;
	            } else {
	                return 0;
	            }
	        }

	        if (anticlockwise) {
	            var tmp = startAngle;
	            startAngle = normalizeRadian(endAngle);
	            endAngle = normalizeRadian(tmp);
	        }
	        else {
	            startAngle = normalizeRadian(startAngle);
	            endAngle = normalizeRadian(endAngle);
	        }
	        if (startAngle > endAngle) {
	            endAngle += PI2;
	        }

	        var w = 0;
	        for (var i = 0; i < 2; i++) {
	            var x_ = roots[i];
	            if (x_ + cx > x) {
	                var angle = Math.atan2(y, x_);
	                var dir = anticlockwise ? 1 : -1;
	                if (angle < 0) {
	                    angle = PI2 + angle;
	                }
	                if (
	                    (angle >= startAngle && angle <= endAngle)
	                    || (angle + PI2 >= startAngle && angle + PI2 <= endAngle)
	                ) {
	                    if (angle > Math.PI / 2 && angle < Math.PI * 1.5) {
	                        dir = -dir;
	                    }
	                    w += dir;
	                }
	            }
	        }
	        return w;
	    }

	    function containPath(data, lineWidth, isStroke, x, y) {
	        var w = 0;
	        var xi = 0;
	        var yi = 0;
	        var x0 = 0;
	        var y0 = 0;

	        for (var i = 0; i < data.length;) {
	            var cmd = data[i++];
	            // Begin a new subpath
	            if (cmd === CMD.M && i > 1) {
	                // Close previous subpath
	                if (!isStroke) {
	                    w += windingLine(xi, yi, x0, y0, x, y);
	                }
	                // 如果被任何一个 subpath 包含
	                // if (w !== 0) {
	                //     return true;
	                // }
	            }

	            if (i == 1) {
	                // 如果第一个命令是 L, C, Q
	                // 则 previous point 同绘制命令的第一个 point
	                //
	                // 第一个命令为 Arc 的情况下会在后面特殊处理
	                xi = data[i];
	                yi = data[i + 1];

	                x0 = xi;
	                y0 = yi;
	            }

	            switch (cmd) {
	                case CMD.M:
	                    // moveTo 命令重新创建一个新的 subpath, 并且更新新的起点
	                    // 在 closePath 的时候使用
	                    x0 = data[i++];
	                    y0 = data[i++];
	                    xi = x0;
	                    yi = y0;
	                    break;
	                case CMD.L:
	                    if (isStroke) {
	                        if (containStroke(xi, yi, data[i], data[i + 1], lineWidth, x, y)) {
	                            return true;
	                        }
	                    }
	                    else {
	                        // NOTE 在第一个命令为 L, C, Q 的时候会计算出 NaN
	                        w += windingLine(xi, yi, data[i], data[i + 1], x, y) || 0;
	                    }
	                    xi = data[i++];
	                    yi = data[i++];
	                    break;
	                case CMD.C:
	                    if (isStroke) {
	                        if (cubic.containStroke(xi, yi,
	                            data[i++], data[i++], data[i++], data[i++], data[i], data[i + 1],
	                            lineWidth, x, y
	                        )) {
	                            return true;
	                        }
	                    }
	                    else {
	                        w += windingCubic(
	                            xi, yi,
	                            data[i++], data[i++], data[i++], data[i++], data[i], data[i + 1],
	                            x, y
	                        ) || 0;
	                    }
	                    xi = data[i++];
	                    yi = data[i++];
	                    break;
	                case CMD.Q:
	                    if (isStroke) {
	                        if (quadratic.containStroke(xi, yi,
	                            data[i++], data[i++], data[i], data[i + 1],
	                            lineWidth, x, y
	                        )) {
	                            return true;
	                        }
	                    }
	                    else {
	                        w += windingQuadratic(
	                            xi, yi,
	                            data[i++], data[i++], data[i], data[i + 1],
	                            x, y
	                        ) || 0;
	                    }
	                    xi = data[i++];
	                    yi = data[i++];
	                    break;
	                case CMD.A:
	                    // TODO Arc 判断的开销比较大
	                    var cx = data[i++];
	                    var cy = data[i++];
	                    var rx = data[i++];
	                    var ry = data[i++];
	                    var theta = data[i++];
	                    var dTheta = data[i++];
	                    // TODO Arc 旋转
	                    var psi = data[i++];
	                    var anticlockwise = 1 - data[i++];
	                    var x1 = Math.cos(theta) * rx + cx;
	                    var y1 = Math.sin(theta) * ry + cy;
	                    // 不是直接使用 arc 命令
	                    if (i > 1) {
	                        w += windingLine(xi, yi, x1, y1, x, y);
	                    }
	                    else {
	                        // 第一个命令起点还未定义
	                        x0 = x1;
	                        y0 = y1;
	                    }
	                    // zr 使用scale来模拟椭圆, 这里也对x做一定的缩放
	                    var _x = (x - cx) * ry / rx + cx;
	                    if (isStroke) {
	                        if (arc.containStroke(
	                            cx, cy, ry, theta, theta + dTheta, anticlockwise,
	                            lineWidth, _x, y
	                        )) {
	                            return true;
	                        }
	                    }
	                    else {
	                        w += windingArc(
	                            cx, cy, ry, theta, theta + dTheta, anticlockwise,
	                            _x, y
	                        );
	                    }
	                    xi = Math.cos(theta + dTheta) * rx + cx;
	                    yi = Math.sin(theta + dTheta) * ry + cy;
	                    break;
	                case CMD.R:
	                    x0 = xi = data[i++];
	                    y0 = yi = data[i++];
	                    var width = data[i++];
	                    var height = data[i++];
	                    var x1 = x0 + width;
	                    var y1 = y0 + height;
	                    if (isStroke) {
	                        if (containStroke(x0, y0, x1, y0, lineWidth, x, y)
	                          || containStroke(x1, y0, x1, y1, lineWidth, x, y)
	                          || containStroke(x1, y1, x0, y1, lineWidth, x, y)
	                          || containStroke(x0, y1, x0, y0, lineWidth, x, y)
	                        ) {
	                            return true;
	                        }
	                    }
	                    else {
	                        // FIXME Clockwise ?
	                        w += windingLine(x1, y0, x1, y1, x, y);
	                        w += windingLine(x0, y1, x0, y0, x, y);
	                    }
	                    break;
	                case CMD.Z:
	                    if (isStroke) {
	                        if (containStroke(
	                            xi, yi, x0, y0, lineWidth, x, y
	                        )) {
	                            return true;
	                        }
	                    }
	                    else {
	                        // Close a subpath
	                        w += windingLine(xi, yi, x0, y0, x, y);
	                        // 如果被任何一个 subpath 包含
	                        // FIXME subpaths may overlap
	                        // if (w !== 0) {
	                        //     return true;
	                        // }
	                    }
	                    xi = x0;
	                    yi = y0;
	                    break;
	            }
	        }
	        if (!isStroke && !isAroundEqual(yi, y0)) {
	            w += windingLine(xi, yi, x0, y0, x, y) || 0;
	        }
	        return w !== 0;
	    }

	    module.exports = {
	        contain: function (pathData, x, y) {
	            return containPath(pathData, 0, false, x, y);
	        },

	        containStroke: function (pathData, lineWidth, x, y) {
	            return containPath(pathData, lineWidth, true, x, y);
	        }
	    };


/***/ },

/***/ 1040:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * Only implements needed gestures for mobile.
	 */


	    var eventUtil = __webpack_require__(247);

	    var GestureMgr = function () {

	        /**
	         * @private
	         * @type {Array.<Object>}
	         */
	        this._track = [];
	    };

	    GestureMgr.prototype = {

	        constructor: GestureMgr,

	        recognize: function (event, target, root) {
	            this._doTrack(event, target, root);
	            return this._recognize(event);
	        },

	        clear: function () {
	            this._track.length = 0;
	            return this;
	        },

	        _doTrack: function (event, target, root) {
	            var touches = event.touches;

	            if (!touches) {
	                return;
	            }

	            var trackItem = {
	                points: [],
	                touches: [],
	                target: target,
	                event: event
	            };

	            for (var i = 0, len = touches.length; i < len; i++) {
	                var touch = touches[i];
	                var pos = eventUtil.clientToLocal(root, touch, {});
	                trackItem.points.push([pos.zrX, pos.zrY]);
	                trackItem.touches.push(touch);
	            }

	            this._track.push(trackItem);
	        },

	        _recognize: function (event) {
	            for (var eventName in recognizers) {
	                if (recognizers.hasOwnProperty(eventName)) {
	                    var gestureInfo = recognizers[eventName](this._track, event);
	                    if (gestureInfo) {
	                        return gestureInfo;
	                    }
	                }
	            }
	        }
	    };

	    function dist(pointPair) {
	        var dx = pointPair[1][0] - pointPair[0][0];
	        var dy = pointPair[1][1] - pointPair[0][1];

	        return Math.sqrt(dx * dx + dy * dy);
	    }

	    function center(pointPair) {
	        return [
	            (pointPair[0][0] + pointPair[1][0]) / 2,
	            (pointPair[0][1] + pointPair[1][1]) / 2
	        ];
	    }

	    var recognizers = {

	        pinch: function (track, event) {
	            var trackLen = track.length;

	            if (!trackLen) {
	                return;
	            }

	            var pinchEnd = (track[trackLen - 1] || {}).points;
	            var pinchPre = (track[trackLen - 2] || {}).points || pinchEnd;

	            if (pinchPre
	                && pinchPre.length > 1
	                && pinchEnd
	                && pinchEnd.length > 1
	            ) {
	                var pinchScale = dist(pinchEnd) / dist(pinchPre);
	                !isFinite(pinchScale) && (pinchScale = 1);

	                event.pinchScale = pinchScale;

	                var pinchCenter = center(pinchEnd);
	                event.pinchX = pinchCenter[0];
	                event.pinchY = pinchCenter[1];

	                return {
	                    type: 'pinch',
	                    target: track[0].target,
	                    event: event
	                };
	            }
	        }

	        // Only pinch currently.
	    };

	    module.exports = GestureMgr;



/***/ },

/***/ 1041:
/***/ function(module, exports) {

	// Simple LRU cache use doubly linked list
	// @module zrender/core/LRU


	    /**
	     * Simple double linked list. Compared with array, it has O(1) remove operation.
	     * @constructor
	     */
	    var LinkedList = function() {

	        /**
	         * @type {module:zrender/core/LRU~Entry}
	         */
	        this.head = null;

	        /**
	         * @type {module:zrender/core/LRU~Entry}
	         */
	        this.tail = null;

	        this._len = 0;
	    };

	    var linkedListProto = LinkedList.prototype;
	    /**
	     * Insert a new value at the tail
	     * @param  {} val
	     * @return {module:zrender/core/LRU~Entry}
	     */
	    linkedListProto.insert = function(val) {
	        var entry = new Entry(val);
	        this.insertEntry(entry);
	        return entry;
	    };

	    /**
	     * Insert an entry at the tail
	     * @param  {module:zrender/core/LRU~Entry} entry
	     */
	    linkedListProto.insertEntry = function(entry) {
	        if (!this.head) {
	            this.head = this.tail = entry;
	        }
	        else {
	            this.tail.next = entry;
	            entry.prev = this.tail;
	            this.tail = entry;
	        }
	        this._len++;
	    };

	    /**
	     * Remove entry.
	     * @param  {module:zrender/core/LRU~Entry} entry
	     */
	    linkedListProto.remove = function(entry) {
	        var prev = entry.prev;
	        var next = entry.next;
	        if (prev) {
	            prev.next = next;
	        }
	        else {
	            // Is head
	            this.head = next;
	        }
	        if (next) {
	            next.prev = prev;
	        }
	        else {
	            // Is tail
	            this.tail = prev;
	        }
	        entry.next = entry.prev = null;
	        this._len--;
	    };

	    /**
	     * @return {number}
	     */
	    linkedListProto.len = function() {
	        return this._len;
	    };

	    /**
	     * @constructor
	     * @param {} val
	     */
	    var Entry = function(val) {
	        /**
	         * @type {}
	         */
	        this.value = val;

	        /**
	         * @type {module:zrender/core/LRU~Entry}
	         */
	        this.next;

	        /**
	         * @type {module:zrender/core/LRU~Entry}
	         */
	        this.prev;
	    };

	    /**
	     * LRU Cache
	     * @constructor
	     * @alias module:zrender/core/LRU
	     */
	    var LRU = function(maxSize) {

	        this._list = new LinkedList();

	        this._map = {};

	        this._maxSize = maxSize || 10;
	    };

	    var LRUProto = LRU.prototype;

	    /**
	     * @param  {string} key
	     * @param  {} value
	     */
	    LRUProto.put = function(key, value) {
	        var list = this._list;
	        var map = this._map;
	        if (map[key] == null) {
	            var len = list.len();
	            if (len >= this._maxSize && len > 0) {
	                // Remove the least recently used
	                var leastUsedEntry = list.head;
	                list.remove(leastUsedEntry);
	                delete map[leastUsedEntry.key];
	            }

	            var entry = list.insert(value);
	            entry.key = key;
	            map[key] = entry;
	        }
	    };

	    /**
	     * @param  {string} key
	     * @return {}
	     */
	    LRUProto.get = function(key) {
	        var entry = this._map[key];
	        var list = this._list;
	        if (entry != null) {
	            // Put the latest used entry in the tail
	            if (entry !== list.tail) {
	                list.remove(entry);
	                list.insertEntry(entry);
	            }

	            return entry.value;
	        }
	    };

	    /**
	     * Clear the cache
	     */
	    LRUProto.clear = function() {
	        this._list.clear();
	        this._map = {};
	    };

	    module.exports = LRU;


/***/ },

/***/ 1042:
/***/ function(module, exports, __webpack_require__) {

	

	    var eventTool = __webpack_require__(247);
	    var zrUtil = __webpack_require__(2);
	    var Eventful = __webpack_require__(215);
	    var env = __webpack_require__(77);
	    var GestureMgr = __webpack_require__(1040);

	    var addEventListener = eventTool.addEventListener;
	    var removeEventListener = eventTool.removeEventListener;
	    var normalizeEvent = eventTool.normalizeEvent;

	    var TOUCH_CLICK_DELAY = 300;

	    var mouseHandlerNames = [
	        'click', 'dblclick', 'mousewheel', 'mouseout',
	        'mouseup', 'mousedown', 'mousemove', 'contextmenu'
	    ];

	    var touchHandlerNames = [
	        'touchstart', 'touchend', 'touchmove'
	    ];

	    var pointerEventNames = {
	        pointerdown: 1, pointerup: 1, pointermove: 1, pointerout: 1
	    };

	    var pointerHandlerNames = zrUtil.map(mouseHandlerNames, function (name) {
	        var nm = name.replace('mouse', 'pointer');
	        return pointerEventNames[nm] ? nm : name;
	    });

	    function eventNameFix(name) {
	        return (name === 'mousewheel' && env.browser.firefox) ? 'DOMMouseScroll' : name;
	    }

	    function processGesture(proxy, event, stage) {
	        var gestureMgr = proxy._gestureMgr;

	        stage === 'start' && gestureMgr.clear();

	        var gestureInfo = gestureMgr.recognize(
	            event,
	            proxy.handler.findHover(event.zrX, event.zrY, null),
	            proxy.dom
	        );

	        stage === 'end' && gestureMgr.clear();

	        // Do not do any preventDefault here. Upper application do that if necessary.
	        if (gestureInfo) {
	            var type = gestureInfo.type;
	            event.gestureEvent = type;

	            proxy.handler.dispatchToElement(gestureInfo.target, type, gestureInfo.event);
	        }
	    }

	    // function onMSGestureChange(proxy, event) {
	    //     if (event.translationX || event.translationY) {
	    //         // mousemove is carried by MSGesture to reduce the sensitivity.
	    //         proxy.handler.dispatchToElement(event.target, 'mousemove', event);
	    //     }
	    //     if (event.scale !== 1) {
	    //         event.pinchX = event.offsetX;
	    //         event.pinchY = event.offsetY;
	    //         event.pinchScale = event.scale;
	    //         proxy.handler.dispatchToElement(event.target, 'pinch', event);
	    //     }
	    // }

	    /**
	     * Prevent mouse event from being dispatched after Touch Events action
	     * @see <https://github.com/deltakosh/handjs/blob/master/src/hand.base.js>
	     * 1. Mobile browsers dispatch mouse events 300ms after touchend.
	     * 2. Chrome for Android dispatch mousedown for long-touch about 650ms
	     * Result: Blocking Mouse Events for 700ms.
	     */
	    function setTouchTimer(instance) {
	        instance._touching = true;
	        clearTimeout(instance._touchTimer);
	        instance._touchTimer = setTimeout(function () {
	            instance._touching = false;
	        }, 700);
	    }


	    var domHandlers = {
	        /**
	         * Mouse move handler
	         * @inner
	         * @param {Event} event
	         */
	        mousemove: function (event) {
	            event = normalizeEvent(this.dom, event);

	            this.trigger('mousemove', event);
	        },

	        /**
	         * Mouse out handler
	         * @inner
	         * @param {Event} event
	         */
	        mouseout: function (event) {
	            event = normalizeEvent(this.dom, event);

	            var element = event.toElement || event.relatedTarget;
	            if (element != this.dom) {
	                while (element && element.nodeType != 9) {
	                    // 忽略包含在root中的dom引起的mouseOut
	                    if (element === this.dom) {
	                        return;
	                    }

	                    element = element.parentNode;
	                }
	            }

	            this.trigger('mouseout', event);
	        },

	        /**
	         * Touch开始响应函数
	         * @inner
	         * @param {Event} event
	         */
	        touchstart: function (event) {
	            // Default mouse behaviour should not be disabled here.
	            // For example, page may needs to be slided.
	            event = normalizeEvent(this.dom, event);

	            // Mark touch, which is useful in distinguish touch and
	            // mouse event in upper applicatoin.
	            event.zrByTouch = true;

	            this._lastTouchMoment = new Date();

	            processGesture(this, event, 'start');

	            // In touch device, trigger `mousemove`(`mouseover`) should
	            // be triggered, and must before `mousedown` triggered.
	            domHandlers.mousemove.call(this, event);

	            domHandlers.mousedown.call(this, event);

	            setTouchTimer(this);
	        },

	        /**
	         * Touch移动响应函数
	         * @inner
	         * @param {Event} event
	         */
	        touchmove: function (event) {

	            event = normalizeEvent(this.dom, event);

	            // Mark touch, which is useful in distinguish touch and
	            // mouse event in upper applicatoin.
	            event.zrByTouch = true;

	            processGesture(this, event, 'change');

	            // Mouse move should always be triggered no matter whether
	            // there is gestrue event, because mouse move and pinch may
	            // be used at the same time.
	            domHandlers.mousemove.call(this, event);

	            setTouchTimer(this);
	        },

	        /**
	         * Touch结束响应函数
	         * @inner
	         * @param {Event} event
	         */
	        touchend: function (event) {

	            event = normalizeEvent(this.dom, event);

	            // Mark touch, which is useful in distinguish touch and
	            // mouse event in upper applicatoin.
	            event.zrByTouch = true;

	            processGesture(this, event, 'end');

	            domHandlers.mouseup.call(this, event);

	            // Do not trigger `mouseout` here, in spite of `mousemove`(`mouseover`) is
	            // triggered in `touchstart`. This seems to be illogical, but by this mechanism,
	            // we can conveniently implement "hover style" in both PC and touch device just
	            // by listening to `mouseover` to add "hover style" and listening to `mouseout`
	            // to remove "hover style" on an element, without any additional code for
	            // compatibility. (`mouseout` will not be triggered in `touchend`, so "hover
	            // style" will remain for user view)

	            // click event should always be triggered no matter whether
	            // there is gestrue event. System click can not be prevented.
	            if (+new Date() - this._lastTouchMoment < TOUCH_CLICK_DELAY) {
	                domHandlers.click.call(this, event);
	            }

	            setTouchTimer(this);
	        },

	        pointerdown: function (event) {
	            domHandlers.mousedown.call(this, event);

	            // if (useMSGuesture(this, event)) {
	            //     this._msGesture.addPointer(event.pointerId);
	            // }
	        },

	        pointermove: function (event) {
	            // FIXME
	            // pointermove is so sensitive that it always triggered when
	            // tap(click) on touch screen, which affect some judgement in
	            // upper application. So, we dont support mousemove on MS touch
	            // device yet.
	            if (!isPointerFromTouch(event)) {
	                domHandlers.mousemove.call(this, event);
	            }
	        },

	        pointerup: function (event) {
	            domHandlers.mouseup.call(this, event);
	        },

	        pointerout: function (event) {
	            // pointerout will be triggered when tap on touch screen
	            // (IE11+/Edge on MS Surface) after click event triggered,
	            // which is inconsistent with the mousout behavior we defined
	            // in touchend. So we unify them.
	            // (check domHandlers.touchend for detailed explanation)
	            if (!isPointerFromTouch(event)) {
	                domHandlers.mouseout.call(this, event);
	            }
	        }
	    };

	    function isPointerFromTouch(event) {
	        var pointerType = event.pointerType;
	        return pointerType === 'pen' || pointerType === 'touch';
	    }

	    // function useMSGuesture(handlerProxy, event) {
	    //     return isPointerFromTouch(event) && !!handlerProxy._msGesture;
	    // }

	    // Common handlers
	    zrUtil.each(['click', 'mousedown', 'mouseup', 'mousewheel', 'dblclick', 'contextmenu'], function (name) {
	        domHandlers[name] = function (event) {
	            event = normalizeEvent(this.dom, event);
	            this.trigger(name, event);
	        };
	    });

	    /**
	     * 为控制类实例初始化dom 事件处理函数
	     *
	     * @inner
	     * @param {module:zrender/Handler} instance 控制类实例
	     */
	    function initDomHandler(instance) {
	        zrUtil.each(touchHandlerNames, function (name) {
	            instance._handlers[name] = zrUtil.bind(domHandlers[name], instance);
	        });

	        zrUtil.each(pointerHandlerNames, function (name) {
	            instance._handlers[name] = zrUtil.bind(domHandlers[name], instance);
	        });

	        zrUtil.each(mouseHandlerNames, function (name) {
	            instance._handlers[name] = makeMouseHandler(domHandlers[name], instance);
	        });

	        function makeMouseHandler(fn, instance) {
	            return function () {
	                if (instance._touching) {
	                    return;
	                }
	                return fn.apply(instance, arguments);
	            };
	        }
	    }


	    function HandlerDomProxy(dom) {
	        Eventful.call(this);

	        this.dom = dom;

	        /**
	         * @private
	         * @type {boolean}
	         */
	        this._touching = false;

	        /**
	         * @private
	         * @type {number}
	         */
	        this._touchTimer;

	        /**
	         * @private
	         * @type {module:zrender/core/GestureMgr}
	         */
	        this._gestureMgr = new GestureMgr();

	        this._handlers = {};

	        initDomHandler(this);

	        if (env.pointerEventsSupported) { // Only IE11+/Edge
	            // 1. On devices that both enable touch and mouse (e.g., MS Surface and lenovo X240),
	            // IE11+/Edge do not trigger touch event, but trigger pointer event and mouse event
	            // at the same time.
	            // 2. On MS Surface, it probablely only trigger mousedown but no mouseup when tap on
	            // screen, which do not occurs in pointer event.
	            // So we use pointer event to both detect touch gesture and mouse behavior.
	            mountHandlers(pointerHandlerNames, this);

	            // FIXME
	            // Note: MS Gesture require CSS touch-action set. But touch-action is not reliable,
	            // which does not prevent defuault behavior occasionally (which may cause view port
	            // zoomed in but use can not zoom it back). And event.preventDefault() does not work.
	            // So we have to not to use MSGesture and not to support touchmove and pinch on MS
	            // touch screen. And we only support click behavior on MS touch screen now.

	            // MS Gesture Event is only supported on IE11+/Edge and on Windows 8+.
	            // We dont support touch on IE on win7.
	            // See <https://msdn.microsoft.com/en-us/library/dn433243(v=vs.85).aspx>
	            // if (typeof MSGesture === 'function') {
	            //     (this._msGesture = new MSGesture()).target = dom; // jshint ignore:line
	            //     dom.addEventListener('MSGestureChange', onMSGestureChange);
	            // }
	        }
	        else {
	            if (env.touchEventsSupported) {
	                mountHandlers(touchHandlerNames, this);
	                // Handler of 'mouseout' event is needed in touch mode, which will be mounted below.
	                // addEventListener(root, 'mouseout', this._mouseoutHandler);
	            }

	            // 1. Considering some devices that both enable touch and mouse event (like on MS Surface
	            // and lenovo X240, @see #2350), we make mouse event be always listened, otherwise
	            // mouse event can not be handle in those devices.
	            // 2. On MS Surface, Chrome will trigger both touch event and mouse event. How to prevent
	            // mouseevent after touch event triggered, see `setTouchTimer`.
	            mountHandlers(mouseHandlerNames, this);
	        }

	        function mountHandlers(handlerNames, instance) {
	            zrUtil.each(handlerNames, function (name) {
	                addEventListener(dom, eventNameFix(name), instance._handlers[name]);
	            }, instance);
	        }
	    }

	    var handlerDomProxyProto = HandlerDomProxy.prototype;
	    handlerDomProxyProto.dispose = function () {
	        var handlerNames = mouseHandlerNames.concat(touchHandlerNames);

	        for (var i = 0; i < handlerNames.length; i++) {
	            var name = handlerNames[i];
	            removeEventListener(this.dom, eventNameFix(name), this._handlers[name]);
	        }
	    };

	    handlerDomProxyProto.setCursor = function (cursorStyle) {
	        this.dom.style.cursor = cursorStyle || 'default';
	    };

	    zrUtil.mixin(HandlerDomProxy, Eventful);

	    module.exports = HandlerDomProxy;


/***/ },

/***/ 1045:
/***/ function(module, exports) {

	

	    module.exports = {
	        buildPath: function (ctx, shape) {
	            var x = shape.x;
	            var y = shape.y;
	            var width = shape.width;
	            var height = shape.height;
	            var r = shape.r;
	            var r1;
	            var r2;
	            var r3;
	            var r4;

	            // Convert width and height to positive for better borderRadius
	            if (width < 0) {
	                x = x + width;
	                width = -width;
	            }
	            if (height < 0) {
	                y = y + height;
	                height = -height;
	            }

	            if (typeof r === 'number') {
	                r1 = r2 = r3 = r4 = r;
	            }
	            else if (r instanceof Array) {
	                if (r.length === 1) {
	                    r1 = r2 = r3 = r4 = r[0];
	                }
	                else if (r.length === 2) {
	                    r1 = r3 = r[0];
	                    r2 = r4 = r[1];
	                }
	                else if (r.length === 3) {
	                    r1 = r[0];
	                    r2 = r4 = r[1];
	                    r3 = r[2];
	                }
	                else {
	                    r1 = r[0];
	                    r2 = r[1];
	                    r3 = r[2];
	                    r4 = r[3];
	                }
	            }
	            else {
	                r1 = r2 = r3 = r4 = 0;
	            }

	            var total;
	            if (r1 + r2 > width) {
	                total = r1 + r2;
	                r1 *= width / total;
	                r2 *= width / total;
	            }
	            if (r3 + r4 > width) {
	                total = r3 + r4;
	                r3 *= width / total;
	                r4 *= width / total;
	            }
	            if (r2 + r3 > height) {
	                total = r2 + r3;
	                r2 *= height / total;
	                r3 *= height / total;
	            }
	            if (r1 + r4 > height) {
	                total = r1 + r4;
	                r1 *= height / total;
	                r4 *= height / total;
	            }
	            ctx.moveTo(x + r1, y);
	            ctx.lineTo(x + width - r2, y);
	            r2 !== 0 && ctx.quadraticCurveTo(
	                x + width, y, x + width, y + r2
	            );
	            ctx.lineTo(x + width, y + height - r3);
	            r3 !== 0 && ctx.quadraticCurveTo(
	                x + width, y + height, x + width - r3, y + height
	            );
	            ctx.lineTo(x + r4, y + height);
	            r4 !== 0 && ctx.quadraticCurveTo(
	                x, y + height, x, y + height - r4
	            );
	            ctx.lineTo(x, y + r1);
	            r1 !== 0 && ctx.quadraticCurveTo(x, y, x + r1, y);
	        }
	    };


/***/ },

/***/ 1050:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @module zrender/mixin/Animatable
	 */


	    var Animator = __webpack_require__(899);
	    var util = __webpack_require__(2);
	    var isString = util.isString;
	    var isFunction = util.isFunction;
	    var isObject = util.isObject;
	    var log = __webpack_require__(688);

	    /**
	     * @alias modue:zrender/mixin/Animatable
	     * @constructor
	     */
	    var Animatable = function () {

	        /**
	         * @type {Array.<module:zrender/animation/Animator>}
	         * @readOnly
	         */
	        this.animators = [];
	    };

	    Animatable.prototype = {

	        constructor: Animatable,

	        /**
	         * 动画
	         *
	         * @param {string} path 需要添加动画的属性获取路径，可以通过a.b.c来获取深层的属性
	         * @param {boolean} [loop] 动画是否循环
	         * @return {module:zrender/animation/Animator}
	         * @example:
	         *     el.animate('style', false)
	         *         .when(1000, {x: 10} )
	         *         .done(function(){ // Animation done })
	         *         .start()
	         */
	        animate: function (path, loop) {
	            var target;
	            var animatingShape = false;
	            var el = this;
	            var zr = this.__zr;
	            if (path) {
	                var pathSplitted = path.split('.');
	                var prop = el;
	                // If animating shape
	                animatingShape = pathSplitted[0] === 'shape';
	                for (var i = 0, l = pathSplitted.length; i < l; i++) {
	                    if (!prop) {
	                        continue;
	                    }
	                    prop = prop[pathSplitted[i]];
	                }
	                if (prop) {
	                    target = prop;
	                }
	            }
	            else {
	                target = el;
	            }

	            if (!target) {
	                log(
	                    'Property "'
	                    + path
	                    + '" is not existed in element '
	                    + el.id
	                );
	                return;
	            }

	            var animators = el.animators;

	            var animator = new Animator(target, loop);

	            animator.during(function (target) {
	                el.dirty(animatingShape);
	            })
	            .done(function () {
	                // FIXME Animator will not be removed if use `Animator#stop` to stop animation
	                animators.splice(util.indexOf(animators, animator), 1);
	            });

	            animators.push(animator);

	            // If animate after added to the zrender
	            if (zr) {
	                zr.animation.addAnimator(animator);
	            }

	            return animator;
	        },

	        /**
	         * 停止动画
	         * @param {boolean} forwardToLast If move to last frame before stop
	         */
	        stopAnimation: function (forwardToLast) {
	            var animators = this.animators;
	            var len = animators.length;
	            for (var i = 0; i < len; i++) {
	                animators[i].stop(forwardToLast);
	            }
	            animators.length = 0;

	            return this;
	        },

	        /**
	         * @param {Object} target
	         * @param {number} [time=500] Time in ms
	         * @param {string} [easing='linear']
	         * @param {number} [delay=0]
	         * @param {Function} [callback]
	         *
	         * @example
	         *  // Animate position
	         *  el.animateTo({
	         *      position: [10, 10]
	         *  }, function () { // done })
	         *
	         *  // Animate shape, style and position in 100ms, delayed 100ms, with cubicOut easing
	         *  el.animateTo({
	         *      shape: {
	         *          width: 500
	         *      },
	         *      style: {
	         *          fill: 'red'
	         *      }
	         *      position: [10, 10]
	         *  }, 100, 100, 'cubicOut', function () { // done })
	         */
	         // TODO Return animation key
	        animateTo: function (target, time, delay, easing, callback) {
	            // animateTo(target, time, easing, callback);
	            if (isString(delay)) {
	                callback = easing;
	                easing = delay;
	                delay = 0;
	            }
	            // animateTo(target, time, delay, callback);
	            else if (isFunction(easing)) {
	                callback = easing;
	                easing = 'linear';
	                delay = 0;
	            }
	            // animateTo(target, time, callback);
	            else if (isFunction(delay)) {
	                callback = delay;
	                delay = 0;
	            }
	            // animateTo(target, callback)
	            else if (isFunction(time)) {
	                callback = time;
	                time = 500;
	            }
	            // animateTo(target)
	            else if (!time) {
	                time = 500;
	            }
	            // Stop all previous animations
	            this.stopAnimation();
	            this._animateToShallow('', this, target, time, delay, easing, callback);

	            // Animators may be removed immediately after start
	            // if there is nothing to animate
	            var animators = this.animators.slice();
	            var count = animators.length;
	            function done() {
	                count--;
	                if (!count) {
	                    callback && callback();
	                }
	            }

	            // No animators. This should be checked before animators[i].start(),
	            // because 'done' may be executed immediately if no need to animate.
	            if (!count) {
	                callback && callback();
	            }
	            // Start after all animators created
	            // Incase any animator is done immediately when all animation properties are not changed
	            for (var i = 0; i < animators.length; i++) {
	                animators[i]
	                    .done(done)
	                    .start(easing);
	            }
	        },

	        /**
	         * @private
	         * @param {string} path=''
	         * @param {Object} source=this
	         * @param {Object} target
	         * @param {number} [time=500]
	         * @param {number} [delay=0]
	         *
	         * @example
	         *  // Animate position
	         *  el._animateToShallow({
	         *      position: [10, 10]
	         *  })
	         *
	         *  // Animate shape, style and position in 100ms, delayed 100ms
	         *  el._animateToShallow({
	         *      shape: {
	         *          width: 500
	         *      },
	         *      style: {
	         *          fill: 'red'
	         *      }
	         *      position: [10, 10]
	         *  }, 100, 100)
	         */
	        _animateToShallow: function (path, source, target, time, delay) {
	            var objShallow = {};
	            var propertyCount = 0;
	            for (var name in target) {
	                if (!target.hasOwnProperty(name)) {
	                    continue;
	                }

	                if (source[name] != null) {
	                    if (isObject(target[name]) && !util.isArrayLike(target[name])) {
	                        this._animateToShallow(
	                            path ? path + '.' + name : name,
	                            source[name],
	                            target[name],
	                            time,
	                            delay
	                        );
	                    }
	                    else {
	                        objShallow[name] = target[name];
	                        propertyCount++;
	                    }
	                }
	                else if (target[name] != null) {
	                    // Attr directly if not has property
	                    // FIXME, if some property not needed for element ?
	                    if (!path) {
	                        this.attr(name, target[name]);
	                    }
	                    else {  // Shape or style
	                        var props = {};
	                        props[path] = {};
	                        props[path][name] = target[name];
	                        this.attr(props);
	                    }
	                }
	            }

	            if (propertyCount > 0) {
	                this.animate(path, false)
	                    .when(time == null ? 500 : time, objShallow)
	                    .delay(delay || 0);
	            }

	            return this;
	        }
	    };

	    module.exports = Animatable;


/***/ },

/***/ 1051:
/***/ function(module, exports) {

	// TODO Draggable for group
	// FIXME Draggable on element which has parent rotation or scale

	    function Draggable() {

	        this.on('mousedown', this._dragStart, this);
	        this.on('mousemove', this._drag, this);
	        this.on('mouseup', this._dragEnd, this);
	        this.on('globalout', this._dragEnd, this);
	        // this._dropTarget = null;
	        // this._draggingTarget = null;

	        // this._x = 0;
	        // this._y = 0;
	    }

	    Draggable.prototype = {

	        constructor: Draggable,

	        _dragStart: function (e) {
	            var draggingTarget = e.target;
	            if (draggingTarget && draggingTarget.draggable) {
	                this._draggingTarget = draggingTarget;
	                draggingTarget.dragging = true;
	                this._x = e.offsetX;
	                this._y = e.offsetY;

	                this.dispatchToElement(draggingTarget, 'dragstart', e.event);
	            }
	        },

	        _drag: function (e) {
	            var draggingTarget = this._draggingTarget;
	            if (draggingTarget) {

	                var x = e.offsetX;
	                var y = e.offsetY;

	                var dx = x - this._x;
	                var dy = y - this._y;
	                this._x = x;
	                this._y = y;

	                draggingTarget.drift(dx, dy, e);
	                this.dispatchToElement(draggingTarget, 'drag', e.event);

	                var dropTarget = this.findHover(x, y, draggingTarget);
	                var lastDropTarget = this._dropTarget;
	                this._dropTarget = dropTarget;

	                if (draggingTarget !== dropTarget) {
	                    if (lastDropTarget && dropTarget !== lastDropTarget) {
	                        this.dispatchToElement(lastDropTarget, 'dragleave', e.event);
	                    }
	                    if (dropTarget && dropTarget !== lastDropTarget) {
	                        this.dispatchToElement(dropTarget, 'dragenter', e.event);
	                    }
	                }
	            }
	        },

	        _dragEnd: function (e) {
	            var draggingTarget = this._draggingTarget;

	            if (draggingTarget) {
	                draggingTarget.dragging = false;
	            }

	            this.dispatchToElement(draggingTarget, 'dragend', e.event);

	            if (this._dropTarget) {
	                this.dispatchToElement(this._dropTarget, 'drop', e.event);
	            }

	            this._draggingTarget = null;
	            this._dropTarget = null;
	        }

	    };

	    module.exports = Draggable;


/***/ },

/***/ 1054:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * VML Painter.
	 *
	 * @module zrender/vml/Painter
	 */



	    var zrLog = __webpack_require__(688);
	    var vmlCore = __webpack_require__(919);

	    function parseInt10(val) {
	        return parseInt(val, 10);
	    }

	    /**
	     * @alias module:zrender/vml/Painter
	     */
	    function VMLPainter(root, storage) {

	        vmlCore.initVML();

	        this.root = root;

	        this.storage = storage;

	        var vmlViewport = document.createElement('div');

	        var vmlRoot = document.createElement('div');

	        vmlViewport.style.cssText = 'display:inline-block;overflow:hidden;position:relative;width:300px;height:150px;';

	        vmlRoot.style.cssText = 'position:absolute;left:0;top:0;';

	        root.appendChild(vmlViewport);

	        this._vmlRoot = vmlRoot;
	        this._vmlViewport = vmlViewport;

	        this.resize();

	        // Modify storage
	        var oldDelFromMap = storage.delFromMap;
	        var oldAddToMap = storage.addToMap;
	        storage.delFromMap = function (elId) {
	            var el = storage.get(elId);

	            oldDelFromMap.call(storage, elId);

	            if (el) {
	                el.onRemove && el.onRemove(vmlRoot);
	            }
	        };

	        storage.addToMap = function (el) {
	            // Displayable already has a vml node
	            el.onAdd && el.onAdd(vmlRoot);

	            oldAddToMap.call(storage, el);
	        };

	        this._firstPaint = true;
	    }

	    VMLPainter.prototype = {

	        constructor: VMLPainter,

	        /**
	         * @return {HTMLDivElement}
	         */
	        getViewportRoot: function () {
	            return this._vmlViewport;
	        },

	        /**
	         * 刷新
	         */
	        refresh: function () {

	            var list = this.storage.getDisplayList(true, true);

	            this._paintList(list);
	        },

	        _paintList: function (list) {
	            var vmlRoot = this._vmlRoot;
	            for (var i = 0; i < list.length; i++) {
	                var el = list[i];
	                if (el.invisible || el.ignore) {
	                    if (!el.__alreadyNotVisible) {
	                        el.onRemove(vmlRoot);
	                    }
	                    // Set as already invisible
	                    el.__alreadyNotVisible = true;
	                }
	                else {
	                    if (el.__alreadyNotVisible) {
	                        el.onAdd(vmlRoot);
	                    }
	                    el.__alreadyNotVisible = false;
	                    if (el.__dirty) {
	                        el.beforeBrush && el.beforeBrush();
	                        (el.brushVML || el.brush).call(el, vmlRoot);
	                        el.afterBrush && el.afterBrush();
	                    }
	                }
	                el.__dirty = false;
	            }

	            if (this._firstPaint) {
	                // Detached from document at first time
	                // to avoid page refreshing too many times

	                // FIXME 如果每次都先 removeChild 可能会导致一些填充和描边的效果改变
	                this._vmlViewport.appendChild(vmlRoot);
	                this._firstPaint = false;
	            }
	        },

	        resize: function (width, height) {
	            var width = width == null ? this._getWidth() : width;
	            var height = height == null ? this._getHeight() : height;

	            if (this._width != width || this._height != height) {
	                this._width = width;
	                this._height = height;

	                var vmlViewportStyle = this._vmlViewport.style;
	                vmlViewportStyle.width = width + 'px';
	                vmlViewportStyle.height = height + 'px';
	            }
	        },

	        dispose: function () {
	            this.root.innerHTML = '';

	            this._vmlRoot =
	            this._vmlViewport =
	            this.storage = null;
	        },

	        getWidth: function () {
	            return this._width;
	        },

	        getHeight: function () {
	            return this._height;
	        },

	        clear: function () {
	            if (this._vmlViewport) {
	                this.root.removeChild(this._vmlViewport);
	            }
	        },

	        _getWidth: function () {
	            var root = this.root;
	            var stl = root.currentStyle;

	            return ((root.clientWidth || parseInt10(stl.width))
	                    - parseInt10(stl.paddingLeft)
	                    - parseInt10(stl.paddingRight)) | 0;
	        },

	        _getHeight: function () {
	            var root = this.root;
	            var stl = root.currentStyle;

	            return ((root.clientHeight || parseInt10(stl.height))
	                    - parseInt10(stl.paddingTop)
	                    - parseInt10(stl.paddingBottom)) | 0;
	        }
	    };

	    // Not supported methods
	    function createMethodNotSupport(method) {
	        return function () {
	            zrLog('In IE8.0 VML mode painter not support method "' + method + '"');
	        };
	    }

	    var notSupportedMethods = [
	        'getLayer', 'insertLayer', 'eachLayer', 'eachBuildinLayer', 'eachOtherLayer', 'getLayers',
	        'modLayer', 'delLayer', 'clearLayer', 'toDataURL', 'pathToImage'
	    ];

	    for (var i = 0; i < notSupportedMethods.length; i++) {
	        var name = notSupportedMethods[i];
	        VMLPainter.prototype[name] = createMethodNotSupport(name);
	    }

	    module.exports = VMLPainter;


/***/ },

/***/ 1055:
/***/ function(module, exports, __webpack_require__) {

	// http://www.w3.org/TR/NOTE-VML
	// TODO Use proxy like svg instead of overwrite brush methods


	if (!__webpack_require__(77).canvasSupported) {
	    var vec2 = __webpack_require__(34);
	    var BoundingRect = __webpack_require__(62);
	    var CMD = __webpack_require__(337).CMD;
	    var colorTool = __webpack_require__(146);
	    var textContain = __webpack_require__(165);
	    var RectText = __webpack_require__(911);
	    var Displayable = __webpack_require__(414);
	    var ZImage = __webpack_require__(690);
	    var Text = __webpack_require__(214);
	    var Path = __webpack_require__(70);

	    var Gradient = __webpack_require__(415);

	    var vmlCore = __webpack_require__(919);

	    var round = Math.round;
	    var sqrt = Math.sqrt;
	    var abs = Math.abs;
	    var cos = Math.cos;
	    var sin = Math.sin;
	    var mathMax = Math.max;

	    var applyTransform = vec2.applyTransform;

	    var comma = ',';
	    var imageTransformPrefix = 'progid:DXImageTransform.Microsoft';

	    var Z = 21600;
	    var Z2 = Z / 2;

	    var ZLEVEL_BASE = 100000;
	    var Z_BASE = 1000;

	    var initRootElStyle = function (el) {
	        el.style.cssText = 'position:absolute;left:0;top:0;width:1px;height:1px;';
	        el.coordsize = Z + ','  + Z;
	        el.coordorigin = '0,0';
	    };

	    var encodeHtmlAttribute = function (s) {
	        return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
	    };

	    var rgb2Str = function (r, g, b) {
	        return 'rgb(' + [r, g, b].join(',') + ')';
	    };

	    var append = function (parent, child) {
	        if (child && parent && child.parentNode !== parent) {
	            parent.appendChild(child);
	        }
	    };

	    var remove = function (parent, child) {
	        if (child && parent && child.parentNode === parent) {
	            parent.removeChild(child);
	        }
	    };

	    var getZIndex = function (zlevel, z, z2) {
	        // z 的取值范围为 [0, 1000]
	        return (parseFloat(zlevel) || 0) * ZLEVEL_BASE + (parseFloat(z) || 0) * Z_BASE + z2;
	    };

	    var parsePercent = function (value, maxValue) {
	        if (typeof value === 'string') {
	            if (value.lastIndexOf('%') >= 0) {
	                return parseFloat(value) / 100 * maxValue;
	            }
	            return parseFloat(value);
	        }
	        return value;
	    };

	    /***************************************************
	     * PATH
	     **************************************************/

	    var setColorAndOpacity = function (el, color, opacity) {
	        var colorArr = colorTool.parse(color);
	        opacity = +opacity;
	        if (isNaN(opacity)) {
	            opacity = 1;
	        }
	        if (colorArr) {
	            el.color = rgb2Str(colorArr[0], colorArr[1], colorArr[2]);
	            el.opacity = opacity * colorArr[3];
	        }
	    };

	    var getColorAndAlpha = function (color) {
	        var colorArr = colorTool.parse(color);
	        return [
	            rgb2Str(colorArr[0], colorArr[1], colorArr[2]),
	            colorArr[3]
	        ];
	    };

	    var updateFillNode = function (el, style, zrEl) {
	        // TODO pattern
	        var fill = style.fill;
	        if (fill != null) {
	            // Modified from excanvas
	            if (fill instanceof Gradient) {
	                var gradientType;
	                var angle = 0;
	                var focus = [0, 0];
	                // additional offset
	                var shift = 0;
	                // scale factor for offset
	                var expansion = 1;
	                var rect = zrEl.getBoundingRect();
	                var rectWidth = rect.width;
	                var rectHeight = rect.height;
	                if (fill.type === 'linear') {
	                    gradientType = 'gradient';
	                    var transform = zrEl.transform;
	                    var p0 = [fill.x * rectWidth, fill.y * rectHeight];
	                    var p1 = [fill.x2 * rectWidth, fill.y2 * rectHeight];
	                    if (transform) {
	                        applyTransform(p0, p0, transform);
	                        applyTransform(p1, p1, transform);
	                    }
	                    var dx = p1[0] - p0[0];
	                    var dy = p1[1] - p0[1];
	                    angle = Math.atan2(dx, dy) * 180 / Math.PI;
	                    // The angle should be a non-negative number.
	                    if (angle < 0) {
	                        angle += 360;
	                    }

	                    // Very small angles produce an unexpected result because they are
	                    // converted to a scientific notation string.
	                    if (angle < 1e-6) {
	                        angle = 0;
	                    }
	                }
	                else {
	                    gradientType = 'gradientradial';
	                    var p0 = [fill.x * rectWidth, fill.y * rectHeight];
	                    var transform = zrEl.transform;
	                    var scale = zrEl.scale;
	                    var width = rectWidth;
	                    var height = rectHeight;
	                    focus = [
	                        // Percent in bounding rect
	                        (p0[0] - rect.x) / width,
	                        (p0[1] - rect.y) / height
	                    ];
	                    if (transform) {
	                        applyTransform(p0, p0, transform);
	                    }

	                    width /= scale[0] * Z;
	                    height /= scale[1] * Z;
	                    var dimension = mathMax(width, height);
	                    shift = 2 * 0 / dimension;
	                    expansion = 2 * fill.r / dimension - shift;
	                }

	                // We need to sort the color stops in ascending order by offset,
	                // otherwise IE won't interpret it correctly.
	                var stops = fill.colorStops.slice();
	                stops.sort(function(cs1, cs2) {
	                    return cs1.offset - cs2.offset;
	                });

	                var length = stops.length;
	                // Color and alpha list of first and last stop
	                var colorAndAlphaList = [];
	                var colors = [];
	                for (var i = 0; i < length; i++) {
	                    var stop = stops[i];
	                    var colorAndAlpha = getColorAndAlpha(stop.color);
	                    colors.push(stop.offset * expansion + shift + ' ' + colorAndAlpha[0]);
	                    if (i === 0 || i === length - 1) {
	                        colorAndAlphaList.push(colorAndAlpha);
	                    }
	                }

	                if (length >= 2) {
	                    var color1 = colorAndAlphaList[0][0];
	                    var color2 = colorAndAlphaList[1][0];
	                    var opacity1 = colorAndAlphaList[0][1] * style.opacity;
	                    var opacity2 = colorAndAlphaList[1][1] * style.opacity;

	                    el.type = gradientType;
	                    el.method = 'none';
	                    el.focus = '100%';
	                    el.angle = angle;
	                    el.color = color1;
	                    el.color2 = color2;
	                    el.colors = colors.join(',');
	                    // When colors attribute is used, the meanings of opacity and o:opacity2
	                    // are reversed.
	                    el.opacity = opacity2;
	                    // FIXME g_o_:opacity ?
	                    el.opacity2 = opacity1;
	                }
	                if (gradientType === 'radial') {
	                    el.focusposition = focus.join(',');
	                }
	            }
	            else {
	                // FIXME Change from Gradient fill to color fill
	                setColorAndOpacity(el, fill, style.opacity);
	            }
	        }
	    };

	    var updateStrokeNode = function (el, style) {
	        // if (style.lineJoin != null) {
	        //     el.joinstyle = style.lineJoin;
	        // }
	        // if (style.miterLimit != null) {
	        //     el.miterlimit = style.miterLimit * Z;
	        // }
	        // if (style.lineCap != null) {
	        //     el.endcap = style.lineCap;
	        // }
	        if (style.lineDash != null) {
	            el.dashstyle = style.lineDash.join(' ');
	        }
	        if (style.stroke != null && !(style.stroke instanceof Gradient)) {
	            setColorAndOpacity(el, style.stroke, style.opacity);
	        }
	    };

	    var updateFillAndStroke = function (vmlEl, type, style, zrEl) {
	        var isFill = type == 'fill';
	        var el = vmlEl.getElementsByTagName(type)[0];
	        // Stroke must have lineWidth
	        if (style[type] != null && style[type] !== 'none' && (isFill || (!isFill && style.lineWidth))) {
	            vmlEl[isFill ? 'filled' : 'stroked'] = 'true';
	            // FIXME Remove before updating, or set `colors` will throw error
	            if (style[type] instanceof Gradient) {
	                remove(vmlEl, el);
	            }
	            if (!el) {
	                el = vmlCore.createNode(type);
	            }

	            isFill ? updateFillNode(el, style, zrEl) : updateStrokeNode(el, style);
	            append(vmlEl, el);
	        }
	        else {
	            vmlEl[isFill ? 'filled' : 'stroked'] = 'false';
	            remove(vmlEl, el);
	        }
	    };

	    var points = [[], [], []];
	    var pathDataToString = function (data, m) {
	        var M = CMD.M;
	        var C = CMD.C;
	        var L = CMD.L;
	        var A = CMD.A;
	        var Q = CMD.Q;

	        var str = [];
	        var nPoint;
	        var cmdStr;
	        var cmd;
	        var i;
	        var xi;
	        var yi;
	        for (i = 0; i < data.length;) {
	            cmd = data[i++];
	            cmdStr = '';
	            nPoint = 0;
	            switch (cmd) {
	                case M:
	                    cmdStr = ' m ';
	                    nPoint = 1;
	                    xi = data[i++];
	                    yi = data[i++];
	                    points[0][0] = xi;
	                    points[0][1] = yi;
	                    break;
	                case L:
	                    cmdStr = ' l ';
	                    nPoint = 1;
	                    xi = data[i++];
	                    yi = data[i++];
	                    points[0][0] = xi;
	                    points[0][1] = yi;
	                    break;
	                case Q:
	                case C:
	                    cmdStr = ' c ';
	                    nPoint = 3;
	                    var x1 = data[i++];
	                    var y1 = data[i++];
	                    var x2 = data[i++];
	                    var y2 = data[i++];
	                    var x3;
	                    var y3;
	                    if (cmd === Q) {
	                        // Convert quadratic to cubic using degree elevation
	                        x3 = x2;
	                        y3 = y2;
	                        x2 = (x2 + 2 * x1) / 3;
	                        y2 = (y2 + 2 * y1) / 3;
	                        x1 = (xi + 2 * x1) / 3;
	                        y1 = (yi + 2 * y1) / 3;
	                    }
	                    else {
	                        x3 = data[i++];
	                        y3 = data[i++];
	                    }
	                    points[0][0] = x1;
	                    points[0][1] = y1;
	                    points[1][0] = x2;
	                    points[1][1] = y2;
	                    points[2][0] = x3;
	                    points[2][1] = y3;

	                    xi = x3;
	                    yi = y3;
	                    break;
	                case A:
	                    var x = 0;
	                    var y = 0;
	                    var sx = 1;
	                    var sy = 1;
	                    var angle = 0;
	                    if (m) {
	                        // Extract SRT from matrix
	                        x = m[4];
	                        y = m[5];
	                        sx = sqrt(m[0] * m[0] + m[1] * m[1]);
	                        sy = sqrt(m[2] * m[2] + m[3] * m[3]);
	                        angle = Math.atan2(-m[1] / sy, m[0] / sx);
	                    }

	                    var cx = data[i++];
	                    var cy = data[i++];
	                    var rx = data[i++];
	                    var ry = data[i++];
	                    var startAngle = data[i++] + angle;
	                    var endAngle = data[i++] + startAngle + angle;
	                    // FIXME
	                    // var psi = data[i++];
	                    i++;
	                    var clockwise = data[i++];

	                    var x0 = cx + cos(startAngle) * rx;
	                    var y0 = cy + sin(startAngle) * ry;

	                    var x1 = cx + cos(endAngle) * rx;
	                    var y1 = cy + sin(endAngle) * ry;

	                    var type = clockwise ? ' wa ' : ' at ';
	                    if (Math.abs(x0 - x1) < 1e-4) {
	                        // IE won't render arches drawn counter clockwise if x0 == x1.
	                        if (Math.abs(endAngle - startAngle) > 1e-2) {
	                            // Offset x0 by 1/80 of a pixel. Use something
	                            // that can be represented in binary
	                            if (clockwise) {
	                                x0 += 270 / Z;
	                            }
	                        }
	                        else {
	                            // Avoid case draw full circle
	                            if (Math.abs(y0 - cy) < 1e-4) {
	                                if ((clockwise && x0 < cx) || (!clockwise && x0 > cx)) {
	                                    y1 -= 270 / Z;
	                                }
	                                else {
	                                    y1 += 270 / Z;
	                                }
	                            }
	                            else if ((clockwise && y0 < cy) || (!clockwise && y0 > cy)) {
	                                x1 += 270 / Z;
	                            }
	                            else {
	                                x1 -= 270 / Z;
	                            }
	                        }
	                    }
	                    str.push(
	                        type,
	                        round(((cx - rx) * sx + x) * Z - Z2), comma,
	                        round(((cy - ry) * sy + y) * Z - Z2), comma,
	                        round(((cx + rx) * sx + x) * Z - Z2), comma,
	                        round(((cy + ry) * sy + y) * Z - Z2), comma,
	                        round((x0 * sx + x) * Z - Z2), comma,
	                        round((y0 * sy + y) * Z - Z2), comma,
	                        round((x1 * sx + x) * Z - Z2), comma,
	                        round((y1 * sy + y) * Z - Z2)
	                    );

	                    xi = x1;
	                    yi = y1;
	                    break;
	                case CMD.R:
	                    var p0 = points[0];
	                    var p1 = points[1];
	                    // x0, y0
	                    p0[0] = data[i++];
	                    p0[1] = data[i++];
	                    // x1, y1
	                    p1[0] = p0[0] + data[i++];
	                    p1[1] = p0[1] + data[i++];

	                    if (m) {
	                        applyTransform(p0, p0, m);
	                        applyTransform(p1, p1, m);
	                    }

	                    p0[0] = round(p0[0] * Z - Z2);
	                    p1[0] = round(p1[0] * Z - Z2);
	                    p0[1] = round(p0[1] * Z - Z2);
	                    p1[1] = round(p1[1] * Z - Z2);
	                    str.push(
	                        // x0, y0
	                        ' m ', p0[0], comma, p0[1],
	                        // x1, y0
	                        ' l ', p1[0], comma, p0[1],
	                        // x1, y1
	                        ' l ', p1[0], comma, p1[1],
	                        // x0, y1
	                        ' l ', p0[0], comma, p1[1]
	                    );
	                    break;
	                case CMD.Z:
	                    // FIXME Update xi, yi
	                    str.push(' x ');
	            }

	            if (nPoint > 0) {
	                str.push(cmdStr);
	                for (var k = 0; k < nPoint; k++) {
	                    var p = points[k];

	                    m && applyTransform(p, p, m);
	                    // 不 round 会非常慢
	                    str.push(
	                        round(p[0] * Z - Z2), comma, round(p[1] * Z - Z2),
	                        k < nPoint - 1 ? comma : ''
	                    );
	                }
	            }
	        }

	        return str.join('');
	    };

	    // Rewrite the original path method
	    Path.prototype.brushVML = function (vmlRoot) {
	        var style = this.style;

	        var vmlEl = this._vmlEl;
	        if (!vmlEl) {
	            vmlEl = vmlCore.createNode('shape');
	            initRootElStyle(vmlEl);

	            this._vmlEl = vmlEl;
	        }

	        updateFillAndStroke(vmlEl, 'fill', style, this);
	        updateFillAndStroke(vmlEl, 'stroke', style, this);

	        var m = this.transform;
	        var needTransform = m != null;
	        var strokeEl = vmlEl.getElementsByTagName('stroke')[0];
	        if (strokeEl) {
	            var lineWidth = style.lineWidth;
	            // Get the line scale.
	            // Determinant of this.m_ means how much the area is enlarged by the
	            // transformation. So its square root can be used as a scale factor
	            // for width.
	            if (needTransform && !style.strokeNoScale) {
	                var det = m[0] * m[3] - m[1] * m[2];
	                lineWidth *= sqrt(abs(det));
	            }
	            strokeEl.weight = lineWidth + 'px';
	        }

	        var path = this.path;
	        if (this.__dirtyPath) {
	            path.beginPath();
	            this.buildPath(path, this.shape);
	            path.toStatic();
	            this.__dirtyPath = false;
	        }

	        vmlEl.path = pathDataToString(path.data, this.transform);

	        vmlEl.style.zIndex = getZIndex(this.zlevel, this.z, this.z2);

	        // Append to root
	        append(vmlRoot, vmlEl);

	        // Text
	        if (style.text != null) {
	            this.drawRectText(vmlRoot, this.getBoundingRect());
	        }
	        else {
	            this.removeRectText(vmlRoot);
	        }
	    };

	    Path.prototype.onRemove = function (vmlRoot) {
	        remove(vmlRoot, this._vmlEl);
	        this.removeRectText(vmlRoot);
	    };

	    Path.prototype.onAdd = function (vmlRoot) {
	        append(vmlRoot, this._vmlEl);
	        this.appendRectText(vmlRoot);
	    };

	    /***************************************************
	     * IMAGE
	     **************************************************/
	    var isImage = function (img) {
	        // FIXME img instanceof Image 如果 img 是一个字符串的时候，IE8 下会报错
	        return (typeof img === 'object') && img.tagName && img.tagName.toUpperCase() === 'IMG';
	        // return img instanceof Image;
	    };

	    // Rewrite the original path method
	    ZImage.prototype.brushVML = function (vmlRoot) {
	        var style = this.style;
	        var image = style.image;

	        // Image original width, height
	        var ow;
	        var oh;

	        if (isImage(image)) {
	            var src = image.src;
	            if (src === this._imageSrc) {
	                ow = this._imageWidth;
	                oh = this._imageHeight;
	            }
	            else {
	                var imageRuntimeStyle = image.runtimeStyle;
	                var oldRuntimeWidth = imageRuntimeStyle.width;
	                var oldRuntimeHeight = imageRuntimeStyle.height;
	                imageRuntimeStyle.width = 'auto';
	                imageRuntimeStyle.height = 'auto';

	                // get the original size
	                ow = image.width;
	                oh = image.height;

	                // and remove overides
	                imageRuntimeStyle.width = oldRuntimeWidth;
	                imageRuntimeStyle.height = oldRuntimeHeight;

	                // Caching image original width, height and src
	                this._imageSrc = src;
	                this._imageWidth = ow;
	                this._imageHeight = oh;
	            }
	            image = src;
	        }
	        else {
	            if (image === this._imageSrc) {
	                ow = this._imageWidth;
	                oh = this._imageHeight;
	            }
	        }
	        if (!image) {
	            return;
	        }

	        var x = style.x || 0;
	        var y = style.y || 0;

	        var dw = style.width;
	        var dh = style.height;

	        var sw = style.sWidth;
	        var sh = style.sHeight;
	        var sx = style.sx || 0;
	        var sy = style.sy || 0;

	        var hasCrop = sw && sh;

	        var vmlEl = this._vmlEl;
	        if (!vmlEl) {
	            // FIXME 使用 group 在 left, top 都不是 0 的时候就无法显示了。
	            // vmlEl = vmlCore.createNode('group');
	            vmlEl = vmlCore.doc.createElement('div');
	            initRootElStyle(vmlEl);

	            this._vmlEl = vmlEl;
	        }

	        var vmlElStyle = vmlEl.style;
	        var hasRotation = false;
	        var m;
	        var scaleX = 1;
	        var scaleY = 1;
	        if (this.transform) {
	            m = this.transform;
	            scaleX = sqrt(m[0] * m[0] + m[1] * m[1]);
	            scaleY = sqrt(m[2] * m[2] + m[3] * m[3]);

	            hasRotation = m[1] || m[2];
	        }
	        if (hasRotation) {
	            // If filters are necessary (rotation exists), create them
	            // filters are bog-slow, so only create them if abbsolutely necessary
	            // The following check doesn't account for skews (which don't exist
	            // in the canvas spec (yet) anyway.
	            // From excanvas
	            var p0 = [x, y];
	            var p1 = [x + dw, y];
	            var p2 = [x, y + dh];
	            var p3 = [x + dw, y + dh];
	            applyTransform(p0, p0, m);
	            applyTransform(p1, p1, m);
	            applyTransform(p2, p2, m);
	            applyTransform(p3, p3, m);

	            var maxX = mathMax(p0[0], p1[0], p2[0], p3[0]);
	            var maxY = mathMax(p0[1], p1[1], p2[1], p3[1]);

	            var transformFilter = [];
	            transformFilter.push('M11=', m[0] / scaleX, comma,
	                        'M12=', m[2] / scaleY, comma,
	                        'M21=', m[1] / scaleX, comma,
	                        'M22=', m[3] / scaleY, comma,
	                        'Dx=', round(x * scaleX + m[4]), comma,
	                        'Dy=', round(y * scaleY + m[5]));

	            vmlElStyle.padding = '0 ' + round(maxX) + 'px ' + round(maxY) + 'px 0';
	            // FIXME DXImageTransform 在 IE11 的兼容模式下不起作用
	            vmlElStyle.filter = imageTransformPrefix + '.Matrix('
	                + transformFilter.join('') + ', SizingMethod=clip)';

	        }
	        else {
	            if (m) {
	                x = x * scaleX + m[4];
	                y = y * scaleY + m[5];
	            }
	            vmlElStyle.filter = '';
	            vmlElStyle.left = round(x) + 'px';
	            vmlElStyle.top = round(y) + 'px';
	        }

	        var imageEl = this._imageEl;
	        var cropEl = this._cropEl;

	        if (!imageEl) {
	            imageEl = vmlCore.doc.createElement('div');
	            this._imageEl = imageEl;
	        }
	        var imageELStyle = imageEl.style;
	        if (hasCrop) {
	            // Needs know image original width and height
	            if (! (ow && oh)) {
	                var tmpImage = new Image();
	                var self = this;
	                tmpImage.onload = function () {
	                    tmpImage.onload = null;
	                    ow = tmpImage.width;
	                    oh = tmpImage.height;
	                    // Adjust image width and height to fit the ratio destinationSize / sourceSize
	                    imageELStyle.width = round(scaleX * ow * dw / sw) + 'px';
	                    imageELStyle.height = round(scaleY * oh * dh / sh) + 'px';

	                    // Caching image original width, height and src
	                    self._imageWidth = ow;
	                    self._imageHeight = oh;
	                    self._imageSrc = image;
	                };
	                tmpImage.src = image;
	            }
	            else {
	                imageELStyle.width = round(scaleX * ow * dw / sw) + 'px';
	                imageELStyle.height = round(scaleY * oh * dh / sh) + 'px';
	            }

	            if (! cropEl) {
	                cropEl = vmlCore.doc.createElement('div');
	                cropEl.style.overflow = 'hidden';
	                this._cropEl = cropEl;
	            }
	            var cropElStyle = cropEl.style;
	            cropElStyle.width = round((dw + sx * dw / sw) * scaleX);
	            cropElStyle.height = round((dh + sy * dh / sh) * scaleY);
	            cropElStyle.filter = imageTransformPrefix + '.Matrix(Dx='
	                    + (-sx * dw / sw * scaleX) + ',Dy=' + (-sy * dh / sh * scaleY) + ')';

	            if (! cropEl.parentNode) {
	                vmlEl.appendChild(cropEl);
	            }
	            if (imageEl.parentNode != cropEl) {
	                cropEl.appendChild(imageEl);
	            }
	        }
	        else {
	            imageELStyle.width = round(scaleX * dw) + 'px';
	            imageELStyle.height = round(scaleY * dh) + 'px';

	            vmlEl.appendChild(imageEl);

	            if (cropEl && cropEl.parentNode) {
	                vmlEl.removeChild(cropEl);
	                this._cropEl = null;
	            }
	        }

	        var filterStr = '';
	        var alpha = style.opacity;
	        if (alpha < 1) {
	            filterStr += '.Alpha(opacity=' + round(alpha * 100) + ') ';
	        }
	        filterStr += imageTransformPrefix + '.AlphaImageLoader(src=' + image + ', SizingMethod=scale)';

	        imageELStyle.filter = filterStr;

	        vmlEl.style.zIndex = getZIndex(this.zlevel, this.z, this.z2);

	        // Append to root
	        append(vmlRoot, vmlEl);

	        // Text
	        if (style.text != null) {
	            this.drawRectText(vmlRoot, this.getBoundingRect());
	        }
	    };

	    ZImage.prototype.onRemove = function (vmlRoot) {
	        remove(vmlRoot, this._vmlEl);

	        this._vmlEl = null;
	        this._cropEl = null;
	        this._imageEl = null;

	        this.removeRectText(vmlRoot);
	    };

	    ZImage.prototype.onAdd = function (vmlRoot) {
	        append(vmlRoot, this._vmlEl);
	        this.appendRectText(vmlRoot);
	    };


	    /***************************************************
	     * TEXT
	     **************************************************/

	    var DEFAULT_STYLE_NORMAL = 'normal';

	    var fontStyleCache = {};
	    var fontStyleCacheCount = 0;
	    var MAX_FONT_CACHE_SIZE = 100;
	    var fontEl = document.createElement('div');

	    var getFontStyle = function (fontString) {
	        var fontStyle = fontStyleCache[fontString];
	        if (!fontStyle) {
	            // Clear cache
	            if (fontStyleCacheCount > MAX_FONT_CACHE_SIZE) {
	                fontStyleCacheCount = 0;
	                fontStyleCache = {};
	            }

	            var style = fontEl.style;
	            var fontFamily;
	            try {
	                style.font = fontString;
	                fontFamily = style.fontFamily.split(',')[0];
	            }
	            catch (e) {
	            }

	            fontStyle = {
	                style: style.fontStyle || DEFAULT_STYLE_NORMAL,
	                variant: style.fontVariant || DEFAULT_STYLE_NORMAL,
	                weight: style.fontWeight || DEFAULT_STYLE_NORMAL,
	                size: parseFloat(style.fontSize || 12) | 0,
	                family: fontFamily || 'Microsoft YaHei'
	            };

	            fontStyleCache[fontString] = fontStyle;
	            fontStyleCacheCount++;
	        }
	        return fontStyle;
	    };

	    var textMeasureEl;
	    // Overwrite measure text method
	    textContain.measureText = function (text, textFont) {
	        var doc = vmlCore.doc;
	        if (!textMeasureEl) {
	            textMeasureEl = doc.createElement('div');
	            textMeasureEl.style.cssText = 'position:absolute;top:-20000px;left:0;'
	                + 'padding:0;margin:0;border:none;white-space:pre;';
	            vmlCore.doc.body.appendChild(textMeasureEl);
	        }

	        try {
	            textMeasureEl.style.font = textFont;
	        } catch (ex) {
	            // Ignore failures to set to invalid font.
	        }
	        textMeasureEl.innerHTML = '';
	        // Don't use innerHTML or innerText because they allow markup/whitespace.
	        textMeasureEl.appendChild(doc.createTextNode(text));
	        return {
	            width: textMeasureEl.offsetWidth
	        };
	    };

	    var tmpRect = new BoundingRect();

	    var drawRectText = function (vmlRoot, rect, textRect, fromTextEl) {

	        var style = this.style;
	        var text = style.text;
	        // Convert to string
	        text != null && (text += '');
	        if (!text) {
	            return;
	        }

	        var x;
	        var y;
	        var align = style.textAlign;
	        var fontStyle = getFontStyle(style.textFont);
	        // FIXME encodeHtmlAttribute ?
	        var font = fontStyle.style + ' ' + fontStyle.variant + ' ' + fontStyle.weight + ' '
	            + fontStyle.size + 'px "' + fontStyle.family + '"';

	        var baseline = style.textBaseline;
	        var verticalAlign = style.textVerticalAlign;

	        textRect = textRect || textContain.getBoundingRect(text, font, align, baseline);

	        // Transform rect to view space
	        var m = this.transform;
	        // Ignore transform for text in other element
	        if (m && !fromTextEl) {
	            tmpRect.copy(rect);
	            tmpRect.applyTransform(m);
	            rect = tmpRect;
	        }

	        if (!fromTextEl) {
	            var textPosition = style.textPosition;
	            var distance = style.textDistance;
	            // Text position represented by coord
	            if (textPosition instanceof Array) {
	                x = rect.x + parsePercent(textPosition[0], rect.width);
	                y = rect.y + parsePercent(textPosition[1], rect.height);

	                align = align || 'left';
	                baseline = baseline || 'top';
	            }
	            else {
	                var res = textContain.adjustTextPositionOnRect(
	                    textPosition, rect, textRect, distance
	                );
	                x = res.x;
	                y = res.y;

	                // Default align and baseline when has textPosition
	                align = align || res.textAlign;
	                baseline = baseline || res.textBaseline;
	            }
	        }
	        else {
	            x = rect.x;
	            y = rect.y;
	        }
	        if (verticalAlign) {
	            switch (verticalAlign) {
	                case 'middle':
	                    y -= textRect.height / 2;
	                    break;
	                case 'bottom':
	                    y -= textRect.height;
	                    break;
	                // 'top'
	            }
	            // Ignore baseline
	            baseline = 'top';
	        }

	        var fontSize = fontStyle.size;
	        // 1.75 is an arbitrary number, as there is no info about the text baseline
	        switch (baseline) {
	            case 'hanging':
	            case 'top':
	                y += fontSize / 1.75;
	                break;
	            case 'middle':
	                break;
	            default:
	            // case null:
	            // case 'alphabetic':
	            // case 'ideographic':
	            // case 'bottom':
	                y -= fontSize / 2.25;
	                break;
	        }
	        switch (align) {
	            case 'left':
	                break;
	            case 'center':
	                x -= textRect.width / 2;
	                break;
	            case 'right':
	                x -= textRect.width;
	                break;
	            // case 'end':
	                // align = elementStyle.direction == 'ltr' ? 'right' : 'left';
	                // break;
	            // case 'start':
	                // align = elementStyle.direction == 'rtl' ? 'right' : 'left';
	                // break;
	            // default:
	            //     align = 'left';
	        }

	        var createNode = vmlCore.createNode;

	        var textVmlEl = this._textVmlEl;
	        var pathEl;
	        var textPathEl;
	        var skewEl;
	        if (!textVmlEl) {
	            textVmlEl = createNode('line');
	            pathEl = createNode('path');
	            textPathEl = createNode('textpath');
	            skewEl = createNode('skew');

	            // FIXME Why here is not cammel case
	            // Align 'center' seems wrong
	            textPathEl.style['v-text-align'] = 'left';

	            initRootElStyle(textVmlEl);

	            pathEl.textpathok = true;
	            textPathEl.on = true;

	            textVmlEl.from = '0 0';
	            textVmlEl.to = '1000 0.05';

	            append(textVmlEl, skewEl);
	            append(textVmlEl, pathEl);
	            append(textVmlEl, textPathEl);

	            this._textVmlEl = textVmlEl;
	        }
	        else {
	            // 这里是在前面 appendChild 保证顺序的前提下
	            skewEl = textVmlEl.firstChild;
	            pathEl = skewEl.nextSibling;
	            textPathEl = pathEl.nextSibling;
	        }

	        var coords = [x, y];
	        var textVmlElStyle = textVmlEl.style;
	        // Ignore transform for text in other element
	        if (m && fromTextEl) {
	            applyTransform(coords, coords, m);

	            skewEl.on = true;

	            skewEl.matrix = m[0].toFixed(3) + comma + m[2].toFixed(3) + comma +
	            m[1].toFixed(3) + comma + m[3].toFixed(3) + ',0,0';

	            // Text position
	            skewEl.offset = (round(coords[0]) || 0) + ',' + (round(coords[1]) || 0);
	            // Left top point as origin
	            skewEl.origin = '0 0';

	            textVmlElStyle.left = '0px';
	            textVmlElStyle.top = '0px';
	        }
	        else {
	            skewEl.on = false;
	            textVmlElStyle.left = round(x) + 'px';
	            textVmlElStyle.top = round(y) + 'px';
	        }

	        textPathEl.string = encodeHtmlAttribute(text);
	        // TODO
	        try {
	            textPathEl.style.font = font;
	        }
	        // Error font format
	        catch (e) {}

	        updateFillAndStroke(textVmlEl, 'fill', {
	            fill: fromTextEl ? style.fill : style.textFill,
	            opacity: style.opacity
	        }, this);
	        updateFillAndStroke(textVmlEl, 'stroke', {
	            stroke: fromTextEl ? style.stroke : style.textStroke,
	            opacity: style.opacity,
	            lineDash: style.lineDash
	        }, this);

	        textVmlEl.style.zIndex = getZIndex(this.zlevel, this.z, this.z2);

	        // Attached to root
	        append(vmlRoot, textVmlEl);
	    };

	    var removeRectText = function (vmlRoot) {
	        remove(vmlRoot, this._textVmlEl);
	        this._textVmlEl = null;
	    };

	    var appendRectText = function (vmlRoot) {
	        append(vmlRoot, this._textVmlEl);
	    };

	    var list = [RectText, Displayable, ZImage, Path, Text];

	    // In case Displayable has been mixed in RectText
	    for (var i = 0; i < list.length; i++) {
	        var proto = list[i].prototype;
	        proto.drawRectText = drawRectText;
	        proto.removeRectText = removeRectText;
	        proto.appendRectText = appendRectText;
	    }

	    Text.prototype.brushVML = function (vmlRoot) {
	        var style = this.style;
	        if (style.text != null) {
	            this.drawRectText(vmlRoot, {
	                x: style.x || 0, y: style.y || 0,
	                width: 0, height: 0
	            }, this.getBoundingRect(), true);
	        }
	        else {
	            this.removeRectText(vmlRoot);
	        }
	    };

	    Text.prototype.onRemove = function (vmlRoot) {
	        this.removeRectText(vmlRoot);
	    };

	    Text.prototype.onAdd = function (vmlRoot) {
	        this.appendRectText(vmlRoot);
	    };
	}


/***/ },

/***/ 1293:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.normalApi = undefined;

	var _defineProperty2 = __webpack_require__(7);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _demoType = __webpack_require__(231);

	var Types = _interopRequireWildcard(_demoType);

	var _api = __webpack_require__(40);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	// 常用
	var normalApi = exports.normalApi = function normalApi(id) {
	    var _ref;

	    return _ref = {}, (0, _defineProperty3["default"])(_ref, _api.API, { types: Types.testApi, apiConfig: { apiName: 'login' } }), (0, _defineProperty3["default"])(_ref, 'id', id), _ref;
	};

/***/ },

/***/ 1307:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _css = __webpack_require__(64);

	var _icon = __webpack_require__(20);

	var _icon2 = _interopRequireDefault(_icon);

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(6);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(5);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _css2 = __webpack_require__(1688);

	var _modal = __webpack_require__(49);

	var _modal2 = _interopRequireDefault(_modal);

	var _css3 = __webpack_require__(30);

	var _button = __webpack_require__(28);

	var _button2 = _interopRequireDefault(_button);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _moment = __webpack_require__(22);

	var _moment2 = _interopRequireDefault(_moment);

	var _component = __webpack_require__(13);

	var _component2 = _interopRequireDefault(_component);

	var _global = __webpack_require__(15);

	var _redux = __webpack_require__(47);

	var _ModelForm = __webpack_require__(967);

	var _ModelForm2 = _interopRequireDefault(_ModelForm);

	var _DataList = __webpack_require__(238);

	var _DataList2 = _interopRequireDefault(_DataList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	_moment2["default"].locale('zh-cn');

	var ButtonGroup = _button2["default"].Group;
	var confirm = _modal2["default"].confirm;

	var AiButton = function (_Component) {
	    (0, _inherits3["default"])(AiButton, _Component);

	    function AiButton(props) {
	        (0, _classCallCheck3["default"])(this, AiButton);
	        return (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));
	    }

	    AiButton.prototype.render = function render() {
	        var _this2 = this;

	        var forms = [{ "name": "性别", "type": "select", "field": "select-multiple", "options": ["aaa", "bbb"], "defaultValue": "aaa", "validate": [{ required: true, message: '请输入内容!', type: 'array' }] }, { "name": "姓名", "type": "input", "field": "input", "placeholder": "请输入信息", "defaultValue": "aaa", "validate": [{ required: true, message: '请输入内容!', type: 'array' }] }];
	        var buttonConfigs = this.props.buttonConfigs;
	        var buttonGroup = [];
	        buttonGroup.push(buttonConfigs.map(function (buttonList, i) {
	            switch (buttonList.buttonName) {
	                case 'add':
	                    // return <ModelForm args={forms} pageName = "新增" buttonActions={this.props.dlActions}/>
	                    /*if(buttonList.type && buttonList.type == "add"){
	                      }*/
	                    var states = _global.Global.getState();
	                    return _react2["default"].createElement(
	                        _button2["default"],
	                        { key: 'listAdd', className: "dataListBtn", type: 'primary', onClick: function () {
	                                if (buttonList.type && buttonList.type == "add") {
	                                    if (this.props.state.selectedRows && this.props.state.selectedRows.length == 1) {
	                                        window.location.href = '#/datalistV1/' + this.props.id + '/add/' + this.props.state.selectedRows;
	                                    } else if (this.props.state.selectedRows && this.props.state.selectedRows.length > 1) {
	                                        _modal2["default"].warning({
	                                            content: "请选择一条以内数据进行操作！"
	                                        });
	                                        return false;
	                                    } else {
	                                        window.location.href = '#/datalistV1/' + this.props.id + '/add';
	                                    }
	                                } else {
	                                    window.location.href = '#/datalistV1/' + this.props.id + '/add';
	                                }
	                            }.bind(_this2) },
	                        _react2["default"].createElement(_icon2["default"], { type: 'add' }),
	                        _react2["default"].createElement(
	                            'a',
	                            null,
	                            buttonList.showName ? buttonList.showName : "新增"
	                        )
	                    );
	                case 'search':
	                    return _react2["default"].createElement(
	                        _button2["default"],
	                        { key: 'listSearch', type: 'primary', className: "dataListBtn", onClick: function onClick() {
	                                return _this2.props.dlActions.requestSearchData(_this2.props.id);
	                            } },
	                        _react2["default"].createElement(_icon2["default"], { type: 'eye' }),
	                        _react2["default"].createElement(
	                            'a',
	                            { href: 'javascript:void(0)' },
	                            '\u67E5\u8BE2'
	                        )
	                    );
	                case 'edit':
	                    return _react2["default"].createElement(
	                        _button2["default"],
	                        { key: 'listEdit', type: 'primary', className: "dataListBtn", onClick: function () {
	                                if (this.props.state.selectedRows == null || this.props.state.selectedRows.length != 1) {
	                                    _modal2["default"].warning({
	                                        content: '请选择一条数据！'
	                                    });
	                                    return;
	                                }
	                                window.location.href = '#/datalistV1/' + this.props.id + '/edit/' + this.props.state.selectedRows;
	                            }.bind(_this2) },
	                        _react2["default"].createElement(_icon2["default"], { type: 'revise' }),
	                        _react2["default"].createElement(
	                            'a',
	                            { href: 'javascript:void(0)' },
	                            '\u7F16\u8F91'
	                        )
	                    );
	                case 'delete':
	                    return _react2["default"].createElement(
	                        _button2["default"],
	                        { key: 'listDelete', type: 'primary', className: "dataListBtn", onClick: function () {
	                                if (this.props.state.selectedRows == null || this.props.state.selectedRows.length == 0) {

	                                    _modal2["default"].warning({
	                                        content: '请选择数据！'
	                                    });

	                                    return false;
	                                }
	                                if (buttonList.onClick) {
	                                    var isContinue = buttonList.onClick();
	                                    if (!isContinue) return false;
	                                }
	                                _modal2["default"].confirm({
	                                    title: '告警信息',
	                                    content: '确认删除？',
	                                    onOk: function () {
	                                        console.log('delete success!');
	                                        this.props.dlActions.requestDeleteData(this.props.state.selectedRows, this.props.id, this.props.state.getDataListApi.data["delete"].body);
	                                    }.bind(this),
	                                    onCancel: function onCancel() {
	                                        console.log("delete exit!!!");
	                                    }
	                                });
	                            }.bind(_this2) },
	                        _react2["default"].createElement(_icon2["default"], { type: 'delete-green' }),
	                        _react2["default"].createElement(
	                            'a',
	                            { href: 'javascript:void(0)' },
	                            '\u5220\u9664'
	                        )
	                    );
	                case 'detail':
	                // return <ModelForm args={forms} />
	                case 'direction':
	                    return _react2["default"].createElement(
	                        _button2["default"],
	                        { key: Math.random(), className: "dataListBtn", onClick: function () {
	                                //selectedRows:选中id；tableBodyDataApi：树的全部值
	                                this.props.dlActions.requestDirection(buttonList.act, this.props.id);
	                            }.bind(_this2) },
	                        buttonList.icon ? _react2["default"].createElement(_icon2["default"], { type: buttonList.icon }) : "",
	                        _react2["default"].createElement(
	                            'a',
	                            { href: 'javascript:void(0)' },
	                            buttonList.value ? buttonList.value : ""
	                        )
	                    );
	                default:
	                    return buttonList.buttonName();
	            }
	        }));
	        return _react2["default"].createElement(
	            'div',
	            { style: { paddingTop: "25", paddingBottom: "5" } },
	            _react2["default"].createElement(
	                ButtonGroup,
	                null,
	                buttonGroup
	            )
	        );
	    };

	    return AiButton;
	}(_react.Component);

	exports["default"] = AiButton;
	module.exports = exports['default'];

/***/ },

/***/ 1324:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _css = __webpack_require__(30);

	var _button = __webpack_require__(28);

	var _button2 = _interopRequireDefault(_button);

	var _css2 = __webpack_require__(64);

	var _icon = __webpack_require__(20);

	var _icon2 = _interopRequireDefault(_icon);

	var _css3 = __webpack_require__(73);

	var _table = __webpack_require__(69);

	var _table2 = _interopRequireDefault(_table);

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

	var _css4 = __webpack_require__(1688);

	var _modal = __webpack_require__(49);

	var _modal2 = _interopRequireDefault(_modal);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _moment = __webpack_require__(22);

	var _moment2 = _interopRequireDefault(_moment);

	var _component = __webpack_require__(13);

	var _component2 = _interopRequireDefault(_component);

	var _dataList4 = __webpack_require__(35);

	var _interfaces = __webpack_require__(33);

	var _interfaces2 = _interopRequireDefault(_interfaces);

	var _AiForm = __webpack_require__(36);

	var _AiForm2 = _interopRequireDefault(_AiForm);

	var _DataList = __webpack_require__(238);

	var _DataList2 = _interopRequireDefault(_DataList);

	var _global = __webpack_require__(15);

	var _history = __webpack_require__(41);

	var _history2 = _interopRequireDefault(_history);

	var _reactRouter = __webpack_require__(118);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var confirm = _modal2["default"].confirm;
	_moment2["default"].locale('zh-cn');

	var TableComponent = function (_Component) {
	    (0, _inherits3["default"])(TableComponent, _Component);

	    TableComponent.prototype.onRowClick = function onRowClick(record, index) {};

	    TableComponent.prototype.onDragStart = function onDragStart(record, index) {};

	    function TableComponent(props) {
	        (0, _classCallCheck3["default"])(this, TableComponent);

	        var _this = (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));

	        _this.pageSize = 15;
	        _this.onResize = _this.onResize.bind(_this);
	        // if(this.props.configs.data)
	        _global.Global.mark({
	            dataList: (0, _defineProperty3["default"])({}, _this.props.id, {
	                currentPage: 0
	            })
	        });
	        if (_this.props.perennity && _this.props.dlState && _this.props.dlState.tableBodyDataApi) {
	            console.log("don't need reload table data");
	        } else {

	            _this.loadTable(0);
	        }

	        return _this;
	    }

	    TableComponent.prototype.loadTable = function loadTable(page) {
	        if (this.props.configs.data.table.body.apiName) {
	            var id = this.props.id;
	            var config = (0, _extends3["default"])({}, this.props.configs.data.table.body);
	            if (_global.Global.getState().aiForm && _global.Global.getState().aiForm[id] && _global.Global.getState().aiForm[id].form) {
	                var body = _global.Global.getState().aiForm[id].form.getFieldsValue();
	                delete body.button;
	                this.props.configs.data.table.body.body = (0, _extends3["default"])({}, this.props.configs.data.table.body.body, body);
	                config = (0, _extends3["default"])({}, config, { body: (0, _extends3["default"])({}, this.props.configs.data.table.body.body) });
	            }

	            this.props.actions.requestTableBodyData(id, config, page, this.pageSize);
	        }
	    };

	    TableComponent.prototype.onResize = function onResize() {
	        if (this.dataBody) {
	            this.bodyHeight = this.dataBody ? this.dataBody.offsetHeight - 70 : 300;
	            this.pageSize = Math.floor((this.bodyHeight - 38) / (this.props.rowHeight || 27)) || 1;
	            this.loadTable(0);
	        }
	    };

	    TableComponent.prototype.componentDidMount = function componentDidMount() {
	        window.addEventListener('resize', this.onResize);
	    };

	    TableComponent.prototype.componentWillUnmount = function componentWillUnmount() {
	        window.removeEventListener('resize', this.onResize);
	    };

	    TableComponent.prototype.render = function render() {
	        var _this4 = this;

	        var state = this.props.dlState;

	        var actions = this.props.dlActions;
	        var equipmentCloumn = [{
	            "title": "设备名称",
	            "dataIndex": "name",
	            "key": "name"
	        }, {
	            "title": "设备编码",
	            "dataIndex": "code",
	            "key": "code"
	        }, {
	            "title": "联系人",
	            "dataIndex": "contacts",
	            "key": "contacts"
	        }, {
	            "title": "联系电话",
	            "dataIndex": "telphone",
	            "key": "telphone"
	        }, {
	            "title": "入网时间",
	            "dataIndex": "time",
	            "key": "time"
	        }];

	        //设置目录和设备之间的授权
	        function setEmpower(record) {
	            var _this2 = this;

	            var config = { "apiName": "getEquipmentInfo", body: { "resId": record.id }, next: function next(action) {
	                    if (action.data) {
	                        actions.showDataSource(_this2.props.id, true);
	                    }
	                } };
	            //获取设备信息
	            actions.getEquipmentInfo(this.props.id, config);
	            //Global.requestApi(config,["req","res","failed"],{datalist:{[this.props.id]:{equipmentInfo:null}}});

	        }
	        function handleOk() {

	            actions.showDataSource(state.id, false);
	        }
	        function handleCancel() {
	            actions.showDataSource(state.id, false);
	        }
	        function showConfirm(record) {
	            var _this3 = this;

	            confirm({
	                title: '告警信息',
	                content: '确认删除？',
	                onOk: function () {
	                    console.log('delete success!');
	                    var arrs = [];
	                    arrs.push(record[_this3.props.configs.data.table.primarykey]);
	                    actions.requestDeleteData(arrs, _this3.props.id, _this3.props.configs.data["delete"].body);
	                }.bind(this),
	                onCancel: function onCancel() {
	                    console.log("delete exit!!!");
	                }
	            });
	        }
	        var aiFormData = {
	            "data": [{
	                "column": 2,
	                "data": [{ "type": "input", "name": "设备名称", "field": "name" }, { "type": "button", "value": "查询", "pageName": "search", "btnType": "primary", "htmlType": "submit" }]
	            }, {
	                "data": function data() {
	                    return _react2["default"].createElement(_table2["default"], { defaultExpandAllRows: true, pagination: false, rowSelection: {
	                            selectedRowKeys: _this4.props.dlState && _this4.props.dlState.selectedRows ? _this4.props.dlState.selectedRows : [],
	                            onChange: function (selectedRowKeys, selectedRows) {
	                                console.log('selectedRowKeys: ' + selectedRowKeys, 'selectedRows: ', selectedRows);
	                                _this4.props.actions.setSelectedRowsToState(Array.isArray(selectedRowKeys) ? selectedRowKeys : selectedRowKeys, _this4.props.id);
	                            }.bind(_this4)
	                        }, onDragStart: _this4.onDragStart, onRowClick: _this4.onRowClick, columns: equipmentCloumn, dataSource: _this4.props.dlState.equipmentInfo.data, bordered: true });
	                }
	            }]
	        };

	        var tableConfigs = this.props.configs ? this.props.configs : null;
	        if (tableConfigs && tableConfigs.data) {
	            var arrs = tableConfigs.data.table.clounms;
	            arrs.forEach(function (column, i) {

	                if (column.render && column.render instanceof Array) {
	                    var arrs1 = column.render;
	                    var primarykey = tableConfigs.data.table.primarykey;
	                    column.render = function (text, record, index) {
	                        var btns = [];
	                        arrs1.forEach(function (item, j) {
	                            switch (item) {

	                                case 'edit':
	                                    btns.push(_react2["default"].createElement(
	                                        _button2["default"],
	                                        { type: 'primary', className: "dataListBtn", onClick: function () {
	                                                var primarykey = tableConfigs.data.table.primarykey;
	                                                _history2["default"].push('datalistV1/' + this.props.id + '/edit/' + record[primarykey]);
	                                            }.bind(_this4) },
	                                        _react2["default"].createElement(_icon2["default"], { type: 'revise' })
	                                    ));
	                                    break;
	                                case 'delete':
	                                    btns.push(_react2["default"].createElement(
	                                        _button2["default"],
	                                        { type: 'primary', className: "dataListBtn", onClick: showConfirm.bind(_this4, record) },
	                                        _react2["default"].createElement(_icon2["default"], { type: 'delete-green' })
	                                    ));
	                                    break;
	                                case 'detail':
	                                    btns.push(_react2["default"].createElement(
	                                        _button2["default"],
	                                        { type: 'primary', className: "dataListBtn", onClick: function () {
	                                                //this.props.dlActions.requestDetailMsg(this.props.id,this.props.configs.data.detail.body);
	                                                var primarykey = tableConfigs.data.table.primarykey;
	                                                var id = record[primarykey];
	                                                var dataListId = this.props.id;
	                                                _global.Global.mark({ dataList: (0, _defineProperty3["default"])({}, dataListId, { selectedRows: [id] }) });
	                                                //history.push(`datalistV1/${this.props.id}/detail/${record[primarykey]}`);
	                                                var detailInfo = this.props.configs.data.detail.body.apiName;
	                                                var detailData = this.props.configs.data.detail.initData.data.apiName;
	                                                _history2["default"].push('/aiForm/' + dataListId + '/' + detailData + '/' + detailInfo);
	                                                //history.push('datalistV1/fbshsyzysjk/list/0/10');
	                                                {
	                                                    console.log("detail page success!!!");
	                                                }
	                                            }.bind(_this4) },
	                                        _react2["default"].createElement(_icon2["default"], { type: 'resource-look' })
	                                    ));
	                                    break;
	                                case 'empower':
	                                    //授权，只用于"我管理的目录"授权
	                                    btns.push(_react2["default"].createElement(
	                                        _button2["default"],
	                                        { type: 'primary', onClick: setEmpower.bind(_this4, record), className: "dataListBtn" },
	                                        _react2["default"].createElement(_icon2["default"], { type: 'key' })
	                                    ));
	                                    break;
	                                default:
	                                    btns.push(item());
	                                    break;
	                            }
	                        });
	                        return btns;
	                    };
	                }
	            });
	        }
	        var dataSource = void 0;

	        if (this.props.dlState.tableBodyDataApi && this.props.dlState.tableBodyDataApi.data && tableConfigs.data && tableConfigs.data.table) {
	            dataSource = this.props.dlState.tableBodyDataApi.data.content ? this.props.dlState.tableBodyDataApi.data.content : this.props.dlState.tableBodyDataApi.data ? this.props.dlState.tableBodyDataApi.data : [];
	        } else if (this.props.configs.data.table.body.dataSource) {
	            dataSource = this.props.configs.data.table.body.dataSource;
	        }
	        if (!Array.isArray(dataSource)) console.log("Datasource data format error: not array!");
	        return _react2["default"].createElement(
	            'div',
	            { ref: function ref(dom) {
	                    setTimeout(function () {
	                        if (!_this4.init) {
	                            _this4.init = true;
	                            _this4.dataBody = dom;
	                            _this4.onResize();
	                        }
	                    }, 500);
	                }, className: "dataBody" },
	            dataSource && _react2["default"].createElement(_table2["default"], { rowKey: tableConfigs.data.table.primarykey,
	                fixed: { height: this.bodyHeight },
	                rowSelection: {
	                    selectedRowKeys: this.props.dlState && this.props.dlState.selectedRows ? this.props.dlState.selectedRows : [],
	                    onChange: function (selectedRowKeys, selectedRows) {
	                        console.log('selectedRowKeys: ' + selectedRowKeys, 'selectedRows: ', selectedRows);
	                        _this4.props.actions.setSelectedRowsToState(Array.isArray(selectedRowKeys) ? selectedRowKeys : selectedRowKeys, _this4.props.id);
	                        if (_this4.props.onChange) _this4.props.onChange(selectedRowKeys, selectedRows);
	                    }.bind(this)
	                },
	                columns: tableConfigs.data.table.clounms,
	                dataSource: dataSource,
	                pagination: tableConfigs.data.table.pagination ? false : {
	                    total: this.props.dlState.tableBodyDataApi ? this.props.dlState.tableBodyDataApi.data.totalElements : dataSource.length,
	                    size: this.props.dlState.tableBodyDataApi ? this.props.dlState.tableBodyDataApi.data.totalPages : dataSource.length / 15,
	                    defaultCurrent: state.currentPage + 1,
	                    pageSize: this.pageSize,
	                    onChange: function (current) {
	                        _this4.loadTable(current - 1);
	                        _global.Global.mark({
	                            dataList: (0, _defineProperty3["default"])({}, _this4.props.id, {
	                                currentPage: current - 1
	                            })
	                        });
	                    }.bind(this)
	                },
	                bordered: true }),
	            state && state.showDataSource && state.equipmentInfo.data && function () {
	                return _react2["default"].createElement(
	                    _modal2["default"],
	                    { title: '\u9009\u62E9\u76EE\u5F55', visible: state.showDataSource,
	                        onOk: handleOk, onCancel: handleCancel,
	                        okText: '\u786E\u8BA4', cancelText: '\u53D6\u6D88', width: 800
	                    },
	                    _react2["default"].createElement(_AiForm2["default"], { config: aiFormData })
	                );
	            }()
	        );
	    };

	    return TableComponent;
	}(_react.Component);

	exports["default"] = (0, _component2["default"])('tableComponent', { setSelectedRowsToState: _dataList4.setSelectedRowsToState, requestTableBodyData: _dataList4.requestTableBodyData })(TableComponent);
	module.exports = exports['default'];

/***/ }

});if(!runed){
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