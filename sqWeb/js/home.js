/**
 * Created by Chack on 2015/4/20.
 */
var sq;
(function (sq) {
    var anim3;
    (function (anim3) {
        var Animation3 = (function () {
            function Animation3() {
            }
            return Animation3;
        })();
    })(anim3 || (anim3 = {}));
})(sq || (sq = {}));
/**
 * Created by Chack on 2015/4/16.
 */
var Pen = (function () {
    function Pen() {
    }
    Pen.curve2 = function (percent, points) {
        return Pen.curve(percent, points[0], points[1], points[2], points[3]);
    };
    Pen.B1 = function (t) {
        return (t * t * t);
    };
    Pen.B2 = function (t) {
        return (3 * t * t * (1 - t));
    };
    Pen.B3 = function (t) {
        return (3 * t * (1 - t) * (1 - t));
    };
    Pen.B4 = function (t) {
        return ((1 - t) * (1 - t) * (1 - t));
    };
    /**
     * @param percent position percent
     * @param C1 start point
     * @param C2 control point
     * @param C3 control point
     * @param C4 end point
     * @returns {{x: number, y: number}}
     */
    Pen.curve = function (percent, C1, C2, C3, C4) {
        percent = 1 - percent;
        var pos = [0, 0];
        pos[0] = C1[0] * Pen.B1(percent) + C2[0] * Pen.B2(percent) + C3[0] * Pen.B3(percent) + C4[0] * Pen.B4(percent);
        pos[1] = C1[1] * Pen.B1(percent) + C2[1] * Pen.B2(percent) + C3[1] * Pen.B3(percent) + C4[1] * Pen.B4(percent);
        return pos;
    };
    return Pen;
})();
vec2.fromArray = function (a) {
    return vec2.fromValues(a[0], a[1]);
};
vec2.toArray = function (v) {
    return [v[0], v[1]];
};
vec2.rotateBy = function (target, center, rad) {
    var ct = vec2.sub(vec2.create(), target, center);
    var mx = mat2d.create();
    mx = mat2d.rotate(mx, mx, rad);
    ct = vec2.transformMat2d(ct, ct, mx);
    return vec2.add(ct, ct, center);
    /* mx = mat2d.translate(mx,target[0],target[1]);
     mx = mat2d.translate(mx,-ct[0],-ct[1]);
     mx = mat2d.rotate(mx,mx,rad);
     mx = mat2d.translate(mx,ct[0],ct[1]);
     ct = vec2.transformMat2d(ct,ct,mx);*/
    //var out = vec2.add(vec2.create(),ct,center);
    return ct;
};
/**
 * Created by Chack on 2015/4/15.
 */
/// <reference path="header/jquery.d.ts" />
/// <reference path="header/glmatrix.d.ts" />
///<reference path="header/cksvg.d.ts"/>
///<reference path="c0__Pen.ts"/>
///<reference path="c1__Vec2.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
//first, create stage using jquery
var sq;
(function (sq) {
    var anim1;
    (function (anim1) {
        function sample(percent, center, rad) {
            if (center === void 0) { center = null; }
            if (rad === void 0) { rad = 0; }
            var ps = [[0, winH], [0.1 * winW, 0.4 * winH], [0.9 * winW, 0 * winH + 100], [0.78 * winW, 0.95 * winH - 70]];
            if (e && rad > 0) {
                for (var i = 0; i < ps.length; i++) {
                    var v = vec2.fromArray(ps[i]);
                    v = vec2.rotateBy(v, center, rad);
                    ps[i] = vec2.toArray(v);
                }
            }
            var p = Pen.curve2(percent, ps);
            return vec2.fromArray(p);
        }
        function test(stage, center, rad) {
            var ps = [];
            for (var i = 0; i < winW; i += 10) {
                var p = sample(i / winW, center, rad);
                ps.push(vec2.toArray(p));
            }
            var line = new cksvg.Polyline(ps);
            stage.addChild(line);
        }
        function resize() {
            winW = stage.dom().width();
            winH = stage.dom().height();
            e = sample(0.9);
        }
        function render() {
            if (!stage.dom().parents(".slide").hasClass("active"))
                return;
            for (var i = 0; i < trs.length; i++) {
                var t = trs[i];
                var pos = sample(t.position, e, t.track);
                t.scaleX = t.scaleY = 1 - t.position;
                t.x = pos[0];
                t.y = pos[1];
                t.position += t.speed;
                t.rotation += t.clockWise * t.speedR;
                if (t.position >= 1) {
                    t.position = 0;
                    t.getRandom();
                }
                var skew = mat2d.create();
                skew.b = Math.tan(0.5);
                //skew.c = Math.tan(0.3);
                var mx = t.localMatrix();
                mx = mx ? mx : mat2d.create();
                mx = mat2d.multiply(mx, mx, skew);
                t.localMatrix(mx);
            }
            try {
                stage.render();
            }
            catch (ex) {
            }
        }
        var stage, colors = ["#6dd9a1", "#f2e4f1", "#a7c9f4", "#72df72", "#f5bbd8", "#c2c2e8", "#e6ebf1", "#fdf0f7", "#edf7fe", "#fcf6f8", "#e8fae8", "#f2e5f6", "#549ed6", "#f19ac6", "#f19ac6", "#c5ebfd", "#82c9f8", "#c2c2e8", "#f0f9fe"], trs = [], winW, winH, toI = Math.round, toR = function (v) {
            return v * Math.PI / 180;
        }, ran = Math.random, sin = Math.sin, cos = Math.cos, m = 200, n = 30, il = 40, rr = 26, e;
        var Triangle = (function (_super) {
            __extends(Triangle, _super);
            function Triangle(points, fill, stroke, strokeWidth) {
                _super.call(this, points, fill, stroke, strokeWidth);
            }
            Triangle.prototype.getRandom = function () {
                this.radius = ran() * (m - n) + n;
                var mr = Math.atan2(winH, winW) * 180 / Math.PI;
                this.track = toR(ran() * mr * 4 - 2 * mr);
                this.clockWise = ran() >= 0.5 ? 1 : -1;
                this.speedR = ran() * 2 + 1;
                this.speed = (ran() + 0.5) / 100; //0.005-0.02
                var a = toR(ran() * rr), p3 = [];
                for (var j = 0; j < 3; j++) {
                    var a = toR(120 * (j + 1) + ran() * 90 + 15);
                    p3.push([toI(this.radius * cos(a)), toI(this.radius * sin(a))]);
                }
                this.setPoints(p3);
                //test(stage,e,this.track);
                return this;
            };
            return Triangle;
        })(cksvg.Polygon);
        var App = (function () {
            function App() {
            }
            App.init = function () {
                if (cksvg.supportsSvg()) {
                    stage = new cksvg.Stage($("#stage"));
                    for (var i = 0; i < il; i++) {
                        var triangle = new Triangle([], colors[toI(ran() * (colors.length - 1))]);
                        triangle.getRandom().position = ran();
                        trs.push(triangle);
                        stage.addChild(triangle);
                    }
                    $(window).resize(function () {
                        resize();
                    }).resize();
                    $(document).ready(resize);
                    setInterval(render, 40);
                }
                else {
                    console.log("Your browser doesn't support svg!");
                }
            };
            return App;
        })();
        anim1.App = App;
        ;
    })(anim1 = sq.anim1 || (sq.anim1 = {}));
})(sq || (sq = {}));
sq.anim1.App.init();
//# sourceMappingURL=home.js.map