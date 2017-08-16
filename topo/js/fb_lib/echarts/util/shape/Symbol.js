define(["require","zrender/shape/Base","zrender/shape/Polygon","zrender/tool/util","./normalIsCover"],function(require){function Symbol(options){Base.call(this,options)}var Base=require("zrender/shape/Base"),PolygonShape=require("zrender/shape/Polygon"),polygonInstance=new PolygonShape({}),zrUtil=require("zrender/tool/util");Symbol.prototype={type:"symbol",buildPath:function(ctx,style){var pointList=style.pointList,len=pointList.length;if(0!==len)for(var sub,subLen,percent,x,y,subSize=1e4,subSetLength=Math.ceil(len/subSize),isArray=pointList[0]instanceof Array,size=style.size?style.size:2,curSize=size,halfSize=size/2,PI2=2*Math.PI,j=0;subSetLength>j;j++){ctx.beginPath();sub=j*subSize;subLen=sub+subSize;subLen=subLen>len?len:subLen;for(var i=sub;subLen>i;i++){if(style.random){percent=style["randomMap"+i%20]/100;curSize=size*percent*percent;halfSize=curSize/2}if(isArray){x=pointList[i][0];y=pointList[i][1]}else{x=pointList[i].x;y=pointList[i].y}if(3>curSize)ctx.rect(x-halfSize,y-halfSize,curSize,curSize);else switch(style.iconType){case"circle":ctx.moveTo(x,y);ctx.arc(x,y,halfSize,0,PI2,!0);break;case"diamond":ctx.moveTo(x,y-halfSize);ctx.lineTo(x+halfSize/3,y-halfSize/3);ctx.lineTo(x+halfSize,y);ctx.lineTo(x+halfSize/3,y+halfSize/3);ctx.lineTo(x,y+halfSize);ctx.lineTo(x-halfSize/3,y+halfSize/3);ctx.lineTo(x-halfSize,y);ctx.lineTo(x-halfSize/3,y-halfSize/3);ctx.lineTo(x,y-halfSize);break;default:ctx.rect(x-halfSize,y-halfSize,curSize,curSize)}}ctx.closePath();if(subSetLength-1>j)switch(style.brushType){case"both":ctx.fill();style.lineWidth>0&&ctx.stroke();break;case"stroke":style.lineWidth>0&&ctx.stroke();break;default:ctx.fill()}}},getRect:function(style){return style.__rect||polygonInstance.getRect(style)},isCover:require("./normalIsCover")};zrUtil.inherits(Symbol,Base);return Symbol});