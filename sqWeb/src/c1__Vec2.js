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
//# sourceMappingURL=c1__Vec2.js.map