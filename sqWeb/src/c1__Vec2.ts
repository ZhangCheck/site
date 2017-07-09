/**
 * Created by Chack on 2015/4/16.
 */
// <reference path="../src/header/glmatrix.d.ts" />
interface Vec2Static {
    fromArray(a:number[]):Vec2;
    toArray(v:Vec2):number[];
    rotateBy(target:Vec2,center:Vec2,rotation:number):Vec2;
}
vec2.fromArray = function(a:number[]):Vec2{
    return vec2.fromValues(a[0],a[1]);
}
vec2.toArray = function(v:Vec2):number[]{
    return [v[0],v[1]];
}
vec2.rotateBy=function(target:Vec2,center:Vec2,rad:number):Vec2{
    var ct = vec2.sub(vec2.create(),target,center);
    var mx:Mat2 = mat2d.create();
    mx = mat2d.rotate(mx,mx,rad);
    ct = vec2.transformMat2d(ct,ct,mx);
    return vec2.add(ct,ct,center);
   /* mx = mat2d.translate(mx,target[0],target[1]);
    mx = mat2d.translate(mx,-ct[0],-ct[1]);
    mx = mat2d.rotate(mx,mx,rad);
    mx = mat2d.translate(mx,ct[0],ct[1]);
    ct = vec2.transformMat2d(ct,ct,mx);*/
    //var out = vec2.add(vec2.create(),ct,center);
    return ct;
}
