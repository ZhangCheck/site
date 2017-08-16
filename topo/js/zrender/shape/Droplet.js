define(["require","./Base","./util/PathProxy","../tool/area","../tool/util"],function(require){"use strict";var Base=require("./Base"),PathProxy=require("./util/PathProxy"),area=require("../tool/area"),Droplet=function(options){Base.call(this,options);this._pathProxy=new PathProxy};Droplet.prototype={type:"droplet",buildPath:function(ctx,style){var path=this._pathProxy||new PathProxy;path.begin(ctx);path.moveTo(style.x,style.y+style.a);path.bezierCurveTo(style.x+style.a,style.y+style.a,style.x+3*style.a/2,style.y-style.a/3,style.x,style.y-style.b);path.bezierCurveTo(style.x-3*style.a/2,style.y-style.a/3,style.x-style.a,style.y+style.a,style.x,style.y+style.a);path.closePath()},getRect:function(style){if(style.__rect)return style.__rect;this._pathProxy.isEmpty()||this.buildPath(null,style);return this._pathProxy.fastBoundingRect()},isCover:function(x,y){var originPos=this.transformCoordToLocal(x,y);x=originPos[0];y=originPos[1];return this.isCoverRect(x,y)?area.isInsidePath(this._pathProxy.pathCommands,this.style.lineWidth,this.style.brushType,x,y):void 0}};require("../tool/util").inherits(Droplet,Base);return Droplet});