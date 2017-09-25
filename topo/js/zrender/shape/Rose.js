define(["require","./Base","../tool/math","../tool/util"],function(require){var Base=require("./Base"),Rose=function(options){this.brushTypeOnly="stroke";Base.call(this,options)};Rose.prototype={type:"rose",buildPath:function(ctx,style){var _x,_y,_r,_R=style.r,_k=style.k,_n=style.n||1,_offsetX=style.x,_offsetY=style.y,_math=require("../tool/math");ctx.moveTo(_offsetX,_offsetY);for(var i=0,_len=_R.length;_len>i;i++){_r=_R[i];for(var j=0;360*_n>=j;j++){_x=_r*_math.sin(_k/_n*j%360,!0)*_math.cos(j,!0)+_offsetX;_y=_r*_math.sin(_k/_n*j%360,!0)*_math.sin(j,!0)+_offsetY;ctx.lineTo(_x,_y)}}},getRect:function(style){if(style.__rect)return style.__rect;for(var _R=style.r,_offsetX=style.x,_offsetY=style.y,_max=0,i=0,_len=_R.length;_len>i;i++)_R[i]>_max&&(_max=_R[i]);style.maxr=_max;var lineWidth;lineWidth="stroke"==style.brushType||"fill"==style.brushType?style.lineWidth||1:0;style.__rect={x:-_max-lineWidth+_offsetX,y:-_max-lineWidth+_offsetY,width:2*_max+3*lineWidth,height:2*_max+3*lineWidth};return style.__rect}};require("../tool/util").inherits(Rose,Base);return Rose});