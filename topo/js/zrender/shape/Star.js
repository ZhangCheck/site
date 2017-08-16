define(["require","../tool/math","./Base","../tool/util"],function(require){var math=require("../tool/math"),sin=math.sin,cos=math.cos,PI=Math.PI,Base=require("./Base"),Star=function(options){Base.call(this,options)};Star.prototype={type:"star",buildPath:function(ctx,style){var n=style.n;if(n&&!(2>n)){var x=style.x,y=style.y,r=style.r,r0=style.r0;null==r0&&(r0=n>4?r*cos(2*PI/n)/cos(PI/n):r/3);var dStep=PI/n,deg=-PI/2,xStart=x+r*cos(deg),yStart=y+r*sin(deg);deg+=dStep;var pointList=style.pointList=[];pointList.push([xStart,yStart]);for(var ri,i=0,end=2*n-1;end>i;i++){ri=i%2===0?r0:r;pointList.push([x+ri*cos(deg),y+ri*sin(deg)]);deg+=dStep}pointList.push([xStart,yStart]);ctx.moveTo(pointList[0][0],pointList[0][1]);for(var i=0;i<pointList.length;i++)ctx.lineTo(pointList[i][0],pointList[i][1]);ctx.closePath()}},getRect:function(style){if(style.__rect)return style.__rect;var lineWidth;lineWidth="stroke"==style.brushType||"fill"==style.brushType?style.lineWidth||1:0;style.__rect={x:Math.round(style.x-style.r-lineWidth/2),y:Math.round(style.y-style.r-lineWidth/2),width:2*style.r+lineWidth,height:2*style.r+lineWidth};return style.__rect}};require("../tool/util").inherits(Star,Base);return Star});