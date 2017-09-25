define(["require","./Base","../tool/util"],function(require){var Base=require("./Base"),Ring=function(options){Base.call(this,options)};Ring.prototype={type:"ring",buildPath:function(ctx,style){ctx.arc(style.x,style.y,style.r,0,2*Math.PI,!1);ctx.moveTo(style.x+style.r0,style.y);ctx.arc(style.x,style.y,style.r0,0,2*Math.PI,!0)},getRect:function(style){if(style.__rect)return style.__rect;var lineWidth;lineWidth="stroke"==style.brushType||"fill"==style.brushType?style.lineWidth||1:0;style.__rect={x:Math.round(style.x-style.r-lineWidth/2),y:Math.round(style.y-style.r-lineWidth/2),width:2*style.r+lineWidth,height:2*style.r+lineWidth};return style.__rect}};require("../tool/util").inherits(Ring,Base);return Ring});