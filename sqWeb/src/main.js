/**
 * Created by Chack on 2015/4/15.
 */
// <reference path="../src/header/jquery.d.ts" />
// <reference path="../src/header/glmatrix.d.ts" />
///<reference path="../../js/cksvg.d.ts"/>
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
    function sample(percent, center, rad) {
        if (center === void 0) { center = null; }
        if (rad === void 0) { rad = 0; }
        var ps = [[0, 0.8 * winH], [0.1 * winW, 0.6 * winH], [0.9 * winW, 0 * winH], [0.8 * winW, 0.8 * winH]];
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
    /*function test(stage:cksvg.Stage,center:Vec2,rad:number):void{
        var ps:number[][] = [];
        for(var i=0;i<winW;i+=10){
            var p:Vec2 = sample(i/winW,center,rad);
            ps.push(vec2.toArray(p));
        }
        var line = new cksvg.Polyline(ps);
        stage.addChild(line);
    }
*/
    function resize() {
        winW = stage.dom().width();
        winH = stage.dom().height();
        e = sample(0.9);
    }
    function render() {
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
            skew.b = Math.tan(0.2);
            var mx = t.localMatrix();
            mx = mx ? mx : mat2d.create();
            mx = mat2d.multiply(mx, mx, skew);
            t.localMatrix(mx);
        }
        stage.render();
    }
    var stage = new cksvg.Stage($("#stage")), colors = ["#6dd9a1", "#f2e4f1", "#a7c9f4", "#72df72", "#f5bbd8", "#c2c2e8", "#e6ebf1", "#fdf0f7", "#edf7fe", "#fcf6f8", "#e8fae8", "#f2e5f6", "#549ed6", "#f19ac6", "#f19ac6", "#c5ebfd", "#82c9f8", "#c2c2e8", "#f0f9fe"], trs = [], winW, winH, toI = Math.round, toR = function (v) {
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
            for (var i = 0; i < il; i++) {
                var triangle = new Triangle([], colors[toI(ran() * (colors.length - 1))]);
                triangle.getRandom().position = ran();
                trs.push(triangle);
                stage.addChild(triangle);
            }
            $(window).resize(function () {
                resize();
            }).resize();
            setInterval(render, 40);
        };
        return App;
    })();
    sq.App = App;
    ;
})(sq || (sq = {}));
sq.App.init();
//# sourceMappingURL=main.js.map