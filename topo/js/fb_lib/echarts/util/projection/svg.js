define(["require","zrender/shape/Path"],function(require){function toFloat(str){return parseFloat(str||0)}function getBbox(root){for(var svgNode=root.firstChild;"svg"!=svgNode.nodeName.toLowerCase()||1!=svgNode.nodeType;)svgNode=svgNode.nextSibling;var x=toFloat(svgNode.getAttribute("x")),y=toFloat(svgNode.getAttribute("y")),width=toFloat(svgNode.getAttribute("width")),height=toFloat(svgNode.getAttribute("height"));return{left:x,top:y,width:width,height:height}}function geoJson2Path(root,transform){function _getShape(root){var tagName=root.tagName;if(shapeBuilders[tagName]){var obj=shapeBuilders[tagName](root,scale);if(obj){obj.scale=scale;obj.properties={name:root.getAttribute("name")||""};obj.id=root.id;extendCommonAttributes(obj,root);elList.push(obj)}}for(var shapes=root.childNodes,i=0,len=shapes.length;len>i;i++)_getShape(shapes[i])}var scale=[transform.scale.x,transform.scale.y],elList=[];_getShape(root);return elList}function pos2geo(obj,p){var point=p instanceof Array?[1*p[0],1*p[1]]:[1*p.x,1*p.y];return[point[0]/obj.scale.x,point[1]/obj.scale.y]}function geo2pos(obj,p){var point=p instanceof Array?[1*p[0],1*p[1]]:[1*p.x,1*p.y];return[point[0]*obj.scale.x,point[1]*obj.scale.y]}function trim(str){return str.replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function extendCommonAttributes(obj,xmlNode){var color=xmlNode.getAttribute("fill"),strokeColor=xmlNode.getAttribute("stroke"),lineWidth=xmlNode.getAttribute("stroke-width"),opacity=xmlNode.getAttribute("opacity");if(color&&"none"!=color){obj.color=color;if(strokeColor){obj.brushType="both";obj.strokeColor=strokeColor}else obj.brushType="fill"}else if(strokeColor&&"none"!=strokeColor){obj.strokeColor=strokeColor;obj.brushType="stroke"}lineWidth&&"none"!=lineWidth&&(obj.lineWidth=parseFloat(lineWidth));opacity&&"none"!=opacity&&(obj.opacity=parseFloat(opacity))}function parsePoints(str){for(var list=trim(str).replace(/,/g," ").split(/\s+/),points=[],i=0;i<list.length;){var x=parseFloat(list[i++]),y=parseFloat(list[i++]);points.push([x,y])}return points}var PathShape=require("zrender/shape/Path"),shapeBuilders={path:function(xmlNode,scale){var path=xmlNode.getAttribute("d"),rect=PathShape.prototype.getRect({path:path});return{shapeType:"path",path:path,cp:[(rect.x+rect.width/2)*scale[0],(rect.y+rect.height/2)*scale[1]]}},rect:function(xmlNode,scale){var x=toFloat(xmlNode.getAttribute("x")),y=toFloat(xmlNode.getAttribute("y")),width=toFloat(xmlNode.getAttribute("width")),height=toFloat(xmlNode.getAttribute("height"));return{shapeType:"rectangle",x:x,y:y,width:width,height:height,cp:[(x+width/2)*scale[0],(y+height/2)*scale[1]]}},line:function(xmlNode,scale){var x1=toFloat(xmlNode.getAttribute("x1")),y1=toFloat(xmlNode.getAttribute("y1")),x2=toFloat(xmlNode.getAttribute("x2")),y2=toFloat(xmlNode.getAttribute("y2"));return{shapeType:"line",xStart:x1,yStart:y1,xEnd:x2,yEnd:y2,cp:[.5*(x1+x2)*scale[0],.5*(y1+y2)*scale[1]]}},circle:function(xmlNode,scale){var cx=toFloat(xmlNode.getAttribute("cx")),cy=toFloat(xmlNode.getAttribute("cy")),r=toFloat(xmlNode.getAttribute("r"));return{shapeType:"circle",x:cx,y:cy,r:r,cp:[cx*scale[0],cy*scale[1]]}},ellipse:function(xmlNode,scale){var cx=parseFloat(xmlNode.getAttribute("cx")||0),cy=parseFloat(xmlNode.getAttribute("cy")||0),rx=parseFloat(xmlNode.getAttribute("rx")||0),ry=parseFloat(xmlNode.getAttribute("ry")||0);return{shapeType:"ellipse",x:cx,y:cy,a:rx,b:ry,cp:[cx*scale[0],cy*scale[1]]}},polygon:function(xmlNode,scale){var points=xmlNode.getAttribute("points"),min=[1/0,1/0],max=[-(1/0),-(1/0)];if(points){points=parsePoints(points);for(var i=0;i<points.length;i++){var p=points[i];min[0]=Math.min(p[0],min[0]);min[1]=Math.min(p[1],min[1]);max[0]=Math.max(p[0],max[0]);max[1]=Math.max(p[1],max[1])}return{shapeType:"polygon",pointList:points,cp:[(min[0]+max[0])/2*scale[0],(min[1]+max[1])/2*scale[0]]}}},polyline:function(xmlNode,scale){var obj=shapeBuilders.polygon(xmlNode,scale);return obj}};return{getBbox:getBbox,geoJson2Path:geoJson2Path,pos2geo:pos2geo,geo2pos:geo2pos}});