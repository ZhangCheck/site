define(["require","zrender/tool/util","zrender/tool/curve","zrender/shape/Polygon"],function(require){function pointList(zr,oldShape,newShape,duration,easing){var oldPointList,newPointList=newShape.style.pointList,newPointListLen=newPointList.length;if(!oldShape){oldPointList=[];if("vertical"!=newShape._orient)for(var y=newPointList[0][1],i=0;newPointListLen>i;i++)oldPointList[i]=[newPointList[i][0],y];else for(var x=newPointList[0][0],i=0;newPointListLen>i;i++)oldPointList[i]=[x,newPointList[i][1]];if("half-smooth-polygon"==newShape.type){oldPointList[newPointListLen-1]=zrUtil.clone(newPointList[newPointListLen-1]);oldPointList[newPointListLen-2]=zrUtil.clone(newPointList[newPointListLen-2])}oldShape={style:{pointList:oldPointList}}}oldPointList=oldShape.style.pointList;var oldPointListLen=oldPointList.length;oldPointListLen==newPointListLen?newShape.style.pointList=oldPointList:newPointListLen>oldPointListLen?newShape.style.pointList=oldPointList.concat(newPointList.slice(oldPointListLen)):newShape.style.pointList=oldPointList.slice(0,newPointListLen);zr.addShape(newShape);newShape.__animating=!0;zr.animate(newShape.id,"style").when(duration,{pointList:newPointList}).during(function(){newShape.updateControlPoints&&newShape.updateControlPoints(newShape.style)}).done(function(){newShape.__animating=!1}).start(easing)}function cloneStyle(target,source){for(var len=arguments.length,i=2;len>i;i++){var prop=arguments[i];target.style[prop]=source.style[prop]}}function rectangle(zr,oldShape,newShape,duration,easing){var newShapeStyle=newShape.style;oldShape||(oldShape={position:newShape.position,style:{x:newShapeStyle.x,y:"vertical"==newShape._orient?newShapeStyle.y+newShapeStyle.height:newShapeStyle.y,width:"vertical"==newShape._orient?newShapeStyle.width:0,height:"vertical"!=newShape._orient?newShapeStyle.height:0}});var newX=newShapeStyle.x,newY=newShapeStyle.y,newWidth=newShapeStyle.width,newHeight=newShapeStyle.height,newPosition=[newShape.position[0],newShape.position[1]];cloneStyle(newShape,oldShape,"x","y","width","height");newShape.position=oldShape.position;zr.addShape(newShape);(newPosition[0]!=oldShape.position[0]||newPosition[1]!=oldShape.position[1])&&zr.animate(newShape.id,"").when(duration,{position:newPosition}).start(easing);newShape.__animating=!0;zr.animate(newShape.id,"style").when(duration,{x:newX,y:newY,width:newWidth,height:newHeight}).done(function(){newShape.__animating=!1}).start(easing)}function candle(zr,oldShape,newShape,duration,easing){if(!oldShape){var y=newShape.style.y;oldShape={style:{y:[y[0],y[0],y[0],y[0]]}}}var newY=newShape.style.y;newShape.style.y=oldShape.style.y;zr.addShape(newShape);newShape.__animating=!0;zr.animate(newShape.id,"style").when(duration,{y:newY}).done(function(){newShape.__animating=!1}).start(easing)}function ring(zr,oldShape,newShape,duration,easing){var x=newShape.style.x,y=newShape.style.y,r0=newShape.style.r0,r=newShape.style.r;newShape.__animating=!0;if("r"!=newShape._animationAdd){newShape.style.r0=0;newShape.style.r=0;newShape.rotation=[2*Math.PI,x,y];zr.addShape(newShape);zr.animate(newShape.id,"style").when(duration,{r0:r0,r:r}).done(function(){newShape.__animating=!1}).start(easing);zr.animate(newShape.id,"").when(duration,{rotation:[0,x,y]}).start(easing)}else{newShape.style.r0=newShape.style.r;zr.addShape(newShape);zr.animate(newShape.id,"style").when(duration,{r0:r0}).done(function(){newShape.__animating=!1}).start(easing)}}function sector(zr,oldShape,newShape,duration,easing){oldShape||(oldShape="r"!=newShape._animationAdd?{style:{startAngle:newShape.style.startAngle,endAngle:newShape.style.startAngle}}:{style:{r0:newShape.style.r}});var startAngle=newShape.style.startAngle,endAngle=newShape.style.endAngle;cloneStyle(newShape,oldShape,"startAngle","endAngle");zr.addShape(newShape);newShape.__animating=!0;zr.animate(newShape.id,"style").when(duration,{startAngle:startAngle,endAngle:endAngle}).done(function(){newShape.__animating=!1}).start(easing)}function text(zr,oldShape,newShape,duration,easing){oldShape||(oldShape={style:{x:"left"==newShape.style.textAlign?newShape.style.x+100:newShape.style.x-100,y:newShape.style.y}});var x=newShape.style.x,y=newShape.style.y;cloneStyle(newShape,oldShape,"x","y");zr.addShape(newShape);newShape.__animating=!0;zr.animate(newShape.id,"style").when(duration,{x:x,y:y}).done(function(){newShape.__animating=!1}).start(easing)}function polygon(zr,oldShape,newShape,duration,easing){var rect=require("zrender/shape/Polygon").prototype.getRect(newShape.style),x=rect.x+rect.width/2,y=rect.y+rect.height/2;newShape.scale=[.1,.1,x,y];zr.addShape(newShape);newShape.__animating=!0;zr.animate(newShape.id,"").when(duration,{scale:[1,1,x,y]}).done(function(){newShape.__animating=!1}).start(easing)}function ribbon(zr,oldShape,newShape,duration,easing){oldShape||(oldShape={style:{source0:0,source1:newShape.style.source1>0?360:-360,target0:0,target1:newShape.style.target1>0?360:-360}});var source0=newShape.style.source0,source1=newShape.style.source1,target0=newShape.style.target0,target1=newShape.style.target1;oldShape.style&&cloneStyle(newShape,oldShape,"source0","source1","target0","target1");zr.addShape(newShape);newShape.__animating=!0;zr.animate(newShape.id,"style").when(duration,{source0:source0,source1:source1,target0:target0,target1:target1}).done(function(){newShape.__animating=!1}).start(easing)}function gaugePointer(zr,oldShape,newShape,duration,easing){oldShape||(oldShape={style:{angle:newShape.style.startAngle}});var angle=newShape.style.angle;newShape.style.angle=oldShape.style.angle;zr.addShape(newShape);newShape.__animating=!0;zr.animate(newShape.id,"style").when(duration,{angle:angle}).done(function(){newShape.__animating=!1}).start(easing)}function icon(zr,oldShape,newShape,duration,easing,delay){newShape.style._x=newShape.style.x;newShape.style._y=newShape.style.y;newShape.style._width=newShape.style.width;newShape.style._height=newShape.style.height;if(oldShape)rectangle(zr,oldShape,newShape,duration,easing);else{var x=newShape._x||0,y=newShape._y||0;newShape.scale=[.01,.01,x,y];zr.addShape(newShape);newShape.__animating=!0;zr.animate(newShape.id,"").delay(delay).when(duration,{scale:[1,1,x,y]}).done(function(){newShape.__animating=!1}).start(easing||"QuinticOut")}}function line(zr,oldShape,newShape,duration,easing){oldShape||(oldShape={style:{xStart:newShape.style.xStart,yStart:newShape.style.yStart,xEnd:newShape.style.xStart,yEnd:newShape.style.yStart}});var xStart=newShape.style.xStart,xEnd=newShape.style.xEnd,yStart=newShape.style.yStart,yEnd=newShape.style.yEnd;cloneStyle(newShape,oldShape,"xStart","xEnd","yStart","yEnd");zr.addShape(newShape);newShape.__animating=!0;zr.animate(newShape.id,"style").when(duration,{xStart:xStart,xEnd:xEnd,yStart:yStart,yEnd:yEnd}).done(function(){newShape.__animating=!1}).start(easing)}function markline(zr,oldShape,newShape,duration,easing){easing=easing||"QuinticOut";newShape.__animating=!0;zr.addShape(newShape);var newShapeStyle=newShape.style,animationDone=function(){newShape.__animating=!1},x0=newShapeStyle.xStart,y0=newShapeStyle.yStart,x2=newShapeStyle.xEnd,y2=newShapeStyle.yEnd;if(newShapeStyle.curveness>0){newShape.updatePoints(newShapeStyle);var obj={p:0},x1=newShapeStyle.cpX1,y1=newShapeStyle.cpY1,newXArr=[],newYArr=[],subdivide=curveTool.quadraticSubdivide;zr.animation.animate(obj).when(duration,{p:1}).during(function(){subdivide(x0,x1,x2,obj.p,newXArr);subdivide(y0,y1,y2,obj.p,newYArr);newShapeStyle.cpX1=newXArr[1];newShapeStyle.cpY1=newYArr[1];newShapeStyle.xEnd=newXArr[2];newShapeStyle.yEnd=newYArr[2];zr.modShape(newShape)}).done(animationDone).start(easing)}else zr.animate(newShape.id,"style").when(0,{xEnd:x0,yEnd:y0}).when(duration,{xEnd:x2,yEnd:y2}).done(animationDone).start(easing)}var zrUtil=require("zrender/tool/util"),curveTool=require("zrender/tool/curve");return{pointList:pointList,rectangle:rectangle,candle:candle,ring:ring,sector:sector,text:text,polygon:polygon,ribbon:ribbon,gaugePointer:gaugePointer,icon:icon,line:line,markline:markline}});