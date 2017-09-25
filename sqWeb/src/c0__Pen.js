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
//# sourceMappingURL=c0__Pen.js.map