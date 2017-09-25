/**
 * Created by Chack on 2015/4/16.
 */
class Pen{
    private static B1 = function(t):number { return (t*t*t); }
    private static B2 = function(t):number{ return (3*t*t*(1-t)); }
    private static B3 = function(t):number { return (3*t*(1-t)*(1-t)); }
    private static B4 = function(t):number { return ((1-t)*(1-t)*(1-t)); }

    static curve2(percent:number,points:number[][]):number[]{
        return Pen.curve(percent,points[0],points[1],points[2],points[3]);
    }
    /**
     * @param percent position percent
     * @param C1 start point
     * @param C2 control point
     * @param C3 control point
     * @param C4 end point
     * @returns {{x: number, y: number}}
     */
    static curve = function(percent:number,C1:number[],C2:number[],C3:number[],C4:number[]):number[] {
        percent = 1-percent;
        var pos = [0,0];
        pos[0] = C1[0] * Pen.B1(percent) + C2[0] * Pen.B2(percent) +C3[0] * Pen.B3(percent) + C4[0] * Pen.B4(percent);
        pos[1] = C1[1] * Pen.B1(percent) + C2[1] * Pen.B2(percent) + C3[1] * Pen.B3(percent) + C4[1] * Pen.B4(percent);
        return pos;
    }
}
