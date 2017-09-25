define(["require","./config","./tool/env","./tool/event","./tool/util","./tool/vector","./tool/matrix","./mixin/Eventful"],function(require){"use strict";function bind2Arg(handler,context){return function(arg1,arg2){return handler.call(context,arg1,arg2)}}function bind3Arg(handler,context){return function(arg1,arg2,arg3){return handler.call(context,arg1,arg2,arg3)}}function initDomHandler(instance){for(var len=domHandlerNames.length;len--;){var name=domHandlerNames[len];instance["_"+name+"Handler"]=bind2Arg(domHandlers[name],instance)}}function findHover(shape,x,y){if(this._draggingTarget&&this._draggingTarget.id==shape.id||shape.isSilent())return!1;var event=this._event;if(shape.isCover(x,y)){shape.hoverable&&this.storage.addHover(shape);for(var p=shape.parent;p;){if(p.clipShape&&!p.clipShape.isCover(this._mouseX,this._mouseY))return!1;p=p.parent}if(this._lastHover!=shape){if(this._lastHover&&this.storage.get(this._lastHover.id)){this._processOutShape(event);this._processDragLeave(event)}this._lastHover=shape;this._processDragEnter(event)}this._processOverShape(event);this._processDragOver(event);this._hasfound=1;return!0}return!1}var config=require("./config"),env=require("./tool/env"),eventTool=require("./tool/event"),util=require("./tool/util"),vec2=require("./tool/vector"),mat2d=require("./tool/matrix"),EVENT=config.EVENT,Eventful=require("./mixin/Eventful"),domHandlerNames=["resize","click","dblclick","mousewheel","mousemove","mouseout","mouseup","mousedown","touchstart","touchend","touchmove"],isZRenderElement=function(event){if(window.G_vmlCanvasManager)return!0;event=event||window.event;var target=event.toElement||event.relatedTarget||event.srcElement||event.target;return target&&target.className.match(config.elementClassName)},domHandlers={resize:function(event){event=event||window.event;this._lastHover=null;this._isMouseDown=0;this.dispatch(EVENT.RESIZE,event)},click:function(event,manually){if(isZRenderElement(event)||manually){event=this._zrenderEventFixed(event);var _lastHover=this._lastHover;(_lastHover&&_lastHover.clickable||!_lastHover)&&this._clickThreshold<5&&this._dispatchAgency(_lastHover,EVENT.CLICK,event);this._mousemoveHandler(event)}},dblclick:function(event,manually){if(isZRenderElement(event)||manually){event=event||window.event;event=this._zrenderEventFixed(event);var _lastHover=this._lastHover;(_lastHover&&_lastHover.clickable||!_lastHover)&&this._clickThreshold<5&&this._dispatchAgency(_lastHover,EVENT.DBLCLICK,event);this._mousemoveHandler(event)}},mousewheel:function(event,manually){if(isZRenderElement(event)||manually){event=this._zrenderEventFixed(event);var delta=event.wheelDelta||-event.detail,scale=delta>0?1.1:1/1.1,needsRefresh=!1,mouseX=this._mouseX,mouseY=this._mouseY;this.painter.eachBuildinLayer(function(layer){var pos=layer.position;if(layer.zoomable){layer.__zoom=layer.__zoom||1;var newZoom=layer.__zoom;newZoom*=scale;newZoom=Math.max(Math.min(layer.maxZoom,newZoom),layer.minZoom);scale=newZoom/layer.__zoom;layer.__zoom=newZoom;pos[0]-=(mouseX-pos[0])*(scale-1);pos[1]-=(mouseY-pos[1])*(scale-1);layer.scale[0]*=scale;layer.scale[1]*=scale;layer.dirty=!0;needsRefresh=!0;eventTool.stop(event)}});needsRefresh&&this.painter.refresh();this._dispatchAgency(this._lastHover,EVENT.MOUSEWHEEL,event);this._mousemoveHandler(event)}},mousemove:function(event,manually){if((isZRenderElement(event)||manually)&&!this.painter.isLoading()){event=this._zrenderEventFixed(event);this._lastX=this._mouseX;this._lastY=this._mouseY;this._mouseX=eventTool.getX(event);this._mouseY=eventTool.getY(event);var dx=this._mouseX-this._lastX,dy=this._mouseY-this._lastY;this._processDragStart(event);this._hasfound=0;this._event=event;this._iterateAndFindHover();if(!this._hasfound){if(!this._draggingTarget||this._lastHover&&this._lastHover!=this._draggingTarget){this._processOutShape(event);this._processDragLeave(event)}this._lastHover=null;this.storage.delHover();this.painter.clearHover()}var cursor="default";if(this._draggingTarget){this.storage.drift(this._draggingTarget.id,dx,dy);this._draggingTarget.modSelf();this.storage.addHover(this._draggingTarget);this._clickThreshold++}else if(this._isMouseDown){var needsRefresh=!1;this.painter.eachBuildinLayer(function(layer){if(layer.panable){cursor="move";layer.position[0]+=dx;layer.position[1]+=dy;needsRefresh=!0;layer.dirty=!0}});needsRefresh&&this.painter.refresh()}this._draggingTarget||this._hasfound&&this._lastHover.draggable?cursor="move":this._hasfound&&this._lastHover.clickable&&(cursor="pointer");this.root.style.cursor=cursor;this._dispatchAgency(this._lastHover,EVENT.MOUSEMOVE,event);(this._draggingTarget||this._hasfound||this.storage.hasHoverShape())&&this.painter.refreshHover()}},mouseout:function(event,manually){if(isZRenderElement(event)||manually){event=this._zrenderEventFixed(event);var element=event.toElement||event.relatedTarget;if(element!=this.root)for(;element&&9!=element.nodeType;){if(element==this.root){this._mousemoveHandler(event);return}element=element.parentNode}event.zrenderX=this._lastX;event.zrenderY=this._lastY;this.root.style.cursor="default";this._isMouseDown=0;this._processOutShape(event);this._processDrop(event);this._processDragEnd(event);this.painter.isLoading()||this.painter.refreshHover();this.dispatch(EVENT.GLOBALOUT,event)}},mousedown:function(event,manually){if(isZRenderElement(event)||manually){this._clickThreshold=0;if(2!=this._lastDownButton){this._lastMouseDownMoment=new Date;event=this._zrenderEventFixed(event);this._isMouseDown=1;this._mouseDownTarget=this._lastHover;this._dispatchAgency(this._lastHover,EVENT.MOUSEDOWN,event);this._lastDownButton=event.button}else{this._lastDownButton=event.button;this._mouseDownTarget=null}}},mouseup:function(event,manually){if(isZRenderElement(event)||manually){event=this._zrenderEventFixed(event);this.root.style.cursor="default";this._isMouseDown=0;this._mouseDownTarget=null;this._dispatchAgency(this._lastHover,EVENT.MOUSEUP,event);this._processDrop(event);this._processDragEnd(event)}},touchstart:function(event,manually){if(isZRenderElement(event)||manually){event=this._zrenderEventFixed(event,!0);this._lastTouchMoment=new Date;this._mobileFindFixed(event);this._mousedownHandler(event)}},touchmove:function(event,manually){if(isZRenderElement(event)||manually){event=this._zrenderEventFixed(event,!0);this._mousemoveHandler(event);this._isDragging&&eventTool.stop(event)}},touchend:function(event,manually){if(isZRenderElement(event)||manually){event=this._zrenderEventFixed(event,!0);this._mouseupHandler(event);var now=new Date;if(now-this._lastTouchMoment<EVENT.touchClickDelay){this._mobileFindFixed(event);this._clickHandler(event);if(now-this._lastClickMoment<EVENT.touchClickDelay/2){this._dblclickHandler(event);this._lastHover&&this._lastHover.clickable&&eventTool.stop(event)}this._lastClickMoment=now}this.painter.clearHover()}}},Handler=function(root,storage,painter){Eventful.call(this);this.root=root;this.storage=storage;this.painter=painter;this._lastX=this._lastY=this._mouseX=this._mouseY=0;this._findHover=bind3Arg(findHover,this);this._domHover=painter.getDomHover();initDomHandler(this);if(window.addEventListener){window.addEventListener("resize",this._resizeHandler);if(env.os.tablet||env.os.phone){root.addEventListener("touchstart",this._touchstartHandler);root.addEventListener("touchmove",this._touchmoveHandler);root.addEventListener("touchend",this._touchendHandler)}else{root.addEventListener("click",this._clickHandler);root.addEventListener("dblclick",this._dblclickHandler);root.addEventListener("mousewheel",this._mousewheelHandler);root.addEventListener("mousemove",this._mousemoveHandler);root.addEventListener("mousedown",this._mousedownHandler);root.addEventListener("mouseup",this._mouseupHandler)}root.addEventListener("DOMMouseScroll",this._mousewheelHandler);root.addEventListener("mouseout",this._mouseoutHandler)}else{window.attachEvent("onresize",this._resizeHandler);root.attachEvent("onclick",this._clickHandler);root.ondblclick=this._dblclickHandler;root.attachEvent("onmousewheel",this._mousewheelHandler);root.attachEvent("onmousemove",this._mousemoveHandler);root.attachEvent("onmouseout",this._mouseoutHandler);root.attachEvent("onmousedown",this._mousedownHandler);root.attachEvent("onmouseup",this._mouseupHandler)}};Handler.prototype.on=function(eventName,handler,context){this.bind(eventName,handler,context);return this};Handler.prototype.un=function(eventName,handler){this.unbind(eventName,handler);return this};Handler.prototype.trigger=function(eventName,eventArgs){switch(eventName){case EVENT.RESIZE:case EVENT.CLICK:case EVENT.DBLCLICK:case EVENT.MOUSEWHEEL:case EVENT.MOUSEMOVE:case EVENT.MOUSEDOWN:case EVENT.MOUSEUP:case EVENT.MOUSEOUT:this["_"+eventName+"Handler"](eventArgs,!0)}};Handler.prototype.dispose=function(){var root=this.root;if(window.removeEventListener){window.removeEventListener("resize",this._resizeHandler);if(env.os.tablet||env.os.phone){root.removeEventListener("touchstart",this._touchstartHandler);root.removeEventListener("touchmove",this._touchmoveHandler);root.removeEventListener("touchend",this._touchendHandler)}else{root.removeEventListener("click",this._clickHandler);root.removeEventListener("dblclick",this._dblclickHandler);root.removeEventListener("mousewheel",this._mousewheelHandler);root.removeEventListener("mousemove",this._mousemoveHandler);root.removeEventListener("mousedown",this._mousedownHandler);root.removeEventListener("mouseup",this._mouseupHandler)}root.removeEventListener("DOMMouseScroll",this._mousewheelHandler);root.removeEventListener("mouseout",this._mouseoutHandler)}else{window.detachEvent("onresize",this._resizeHandler);root.detachEvent("onclick",this._clickHandler);root.detachEvent("dblclick",this._dblclickHandler);root.detachEvent("onmousewheel",this._mousewheelHandler);root.detachEvent("onmousemove",this._mousemoveHandler);root.detachEvent("onmouseout",this._mouseoutHandler);root.detachEvent("onmousedown",this._mousedownHandler);root.detachEvent("onmouseup",this._mouseupHandler)}this.root=this._domHover=this.storage=this.painter=null;this.un()};Handler.prototype._processDragStart=function(event){var _lastHover=this._lastHover;if(this._isMouseDown&&_lastHover&&_lastHover.draggable&&!this._draggingTarget&&this._mouseDownTarget==_lastHover){if(_lastHover.dragEnableTime&&new Date-this._lastMouseDownMoment<_lastHover.dragEnableTime)return;var _draggingTarget=_lastHover;this._draggingTarget=_draggingTarget;this._isDragging=1;_draggingTarget.invisible=!0;this.storage.mod(_draggingTarget.id);this._dispatchAgency(_draggingTarget,EVENT.DRAGSTART,event);this.painter.refresh()}};Handler.prototype._processDragEnter=function(event){this._draggingTarget&&this._dispatchAgency(this._lastHover,EVENT.DRAGENTER,event,this._draggingTarget)};Handler.prototype._processDragOver=function(event){this._draggingTarget&&this._dispatchAgency(this._lastHover,EVENT.DRAGOVER,event,this._draggingTarget)};Handler.prototype._processDragLeave=function(event){this._draggingTarget&&this._dispatchAgency(this._lastHover,EVENT.DRAGLEAVE,event,this._draggingTarget)};Handler.prototype._processDrop=function(event){if(this._draggingTarget){this._draggingTarget.invisible=!1;this.storage.mod(this._draggingTarget.id);this.painter.refresh();this._dispatchAgency(this._lastHover,EVENT.DROP,event,this._draggingTarget)}};Handler.prototype._processDragEnd=function(event){if(this._draggingTarget){this._dispatchAgency(this._draggingTarget,EVENT.DRAGEND,event);this._lastHover=null}this._isDragging=0;this._draggingTarget=null};Handler.prototype._processOverShape=function(event){this._dispatchAgency(this._lastHover,EVENT.MOUSEOVER,event)};Handler.prototype._processOutShape=function(event){this._dispatchAgency(this._lastHover,EVENT.MOUSEOUT,event)};Handler.prototype._dispatchAgency=function(targetShape,eventName,event,draggedShape){var eventHandler="on"+eventName,eventPacket={type:eventName,event:event,target:targetShape,cancelBubble:!1},el=targetShape;draggedShape&&(eventPacket.dragged=draggedShape);for(;el;){el[eventHandler]&&(eventPacket.cancelBubble=el[eventHandler](eventPacket));el.dispatch(eventName,eventPacket);el=el.parent;if(eventPacket.cancelBubble)break}if(targetShape)eventPacket.cancelBubble||this.dispatch(eventName,eventPacket);else if(!draggedShape){var eveObj={type:eventName,event:event};this.dispatch(eventName,eveObj);this.painter.eachOtherLayer(function(layer){"function"==typeof layer[eventHandler]&&layer[eventHandler](eveObj);layer.dispatch&&layer.dispatch(eventName,eveObj)})}};Handler.prototype._iterateAndFindHover=function(){var invTransform=mat2d.create();return function(){for(var currentZLevel,currentLayer,list=this.storage.getShapeList(),tmp=[0,0],i=list.length-1;i>=0;i--){var shape=list[i];if(currentZLevel!==shape.zlevel){currentLayer=this.painter.getLayer(shape.zlevel,currentLayer);tmp[0]=this._mouseX;tmp[1]=this._mouseY;if(currentLayer.needTransform){mat2d.invert(invTransform,currentLayer.transform);vec2.applyTransform(tmp,tmp,invTransform)}}if(this._findHover(shape,tmp[0],tmp[1]))break}}}();var MOBILE_TOUCH_OFFSETS=[{x:10},{x:-20},{x:10,y:10},{y:-20}];Handler.prototype._mobileFindFixed=function(event){this._lastHover=null;this._mouseX=event.zrenderX;this._mouseY=event.zrenderY;this._event=event;this._iterateAndFindHover();for(var i=0;!this._lastHover&&i<MOBILE_TOUCH_OFFSETS.length;i++){var offset=MOBILE_TOUCH_OFFSETS[i];offset.x&&(this._mouseX+=offset.x);offset.y&&(this._mouseY+=offset.y);this._iterateAndFindHover()}if(this._lastHover){event.zrenderX=this._mouseX;event.zrenderY=this._mouseY}};Handler.prototype._zrenderEventFixed=function(event,isTouch){if(event.zrenderFixed)return event;if(isTouch){var touch="touchend"!=event.type?event.targetTouches[0]:event.changedTouches[0];if(touch){var rBounding=this.painter._domRoot.getBoundingClientRect();event.zrenderX=touch.clientX-rBounding.left;event.zrenderY=touch.clientY-rBounding.top}}else{event=event||window.event;var target=event.toElement||event.relatedTarget||event.srcElement||event.target;if(target&&target!=this._domHover){event.zrenderX=("undefined"!=typeof event.offsetX?event.offsetX:event.layerX)+target.offsetLeft;event.zrenderY=("undefined"!=typeof event.offsetY?event.offsetY:event.layerY)+target.offsetTop}}event.zrenderFixed=1;return event};util.merge(Handler.prototype,Eventful.prototype,!0);return Handler});