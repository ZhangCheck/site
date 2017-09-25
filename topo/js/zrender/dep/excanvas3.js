define(["require"],function(require){document.createElement("canvas").getContext?G_vmlCanvasManager=void 0:!function(){function getContext(){return this.context_||(this.context_=new CanvasRenderingContext2D_(this))}function bind(f,obj,var_args){var a=slice.call(arguments,2);return function(){return f.apply(obj,a.concat(slice.call(arguments)))}}function encodeHtmlAttribute(s){return String(s).replace(/&/g,"&amp;").replace(/"/g,"&quot;")}function addNamespace(doc,prefix,urn){doc.namespaces[prefix]||doc.namespaces.add(prefix,urn,"#default#VML")}function addNamespacesAndStylesheet(doc){addNamespace(doc,"g_vml_","urn:schemas-microsoft-com:vml");addNamespace(doc,"g_o_","urn:schemas-microsoft-com:office:office");if(!doc.styleSheets.ex_canvas_){var ss=doc.createStyleSheet();ss.owningElement.id="ex_canvas_";ss.cssText="canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}"}}function onPropertyChange(e){var el=e.srcElement;switch(e.propertyName){case"width":el.getContext().clearRect();el.style.width=el.attributes.width.nodeValue+"px";el.firstChild.style.width=el.clientWidth+"px";break;case"height":el.getContext().clearRect();el.style.height=el.attributes.height.nodeValue+"px";el.firstChild.style.height=el.clientHeight+"px"}}function onResize(e){var el=e.srcElement;if(el.firstChild){el.firstChild.style.width=el.clientWidth+"px";el.firstChild.style.height=el.clientHeight+"px"}}function createMatrixIdentity(){return[[1,0,0],[0,1,0],[0,0,1]]}function matrixMultiply(m1,m2){for(var result=createMatrixIdentity(),x=0;3>x;x++)for(var y=0;3>y;y++){for(var sum=0,z=0;3>z;z++)sum+=m1[x][z]*m2[z][y];result[x][y]=sum}return result}function getCoords(ctx,aX,aY){var m=ctx.m_;return{x:Z*(aX*m[0][0]+aY*m[1][0]+m[2][0])-Z2,y:Z*(aX*m[0][1]+aY*m[1][1]+m[2][1])-Z2}}function getSkewedCoords(ctx,aX,aY){var m=ctx.m_;return{x:Z*(aX*m[0][0]+aY*m[1][0])-Z2,y:Z*(aX*m[0][1]+aY*m[1][1])-Z2}}function copyState(o1,o2){o2.fillStyle=o1.fillStyle;o2.lineCap=o1.lineCap;o2.lineJoin=o1.lineJoin;o2.lineWidth=o1.lineWidth;o2.miterLimit=o1.miterLimit;o2.shadowBlur=o1.shadowBlur;o2.shadowColor=o1.shadowColor;o2.shadowOffsetX=o1.shadowOffsetX;o2.shadowOffsetY=o1.shadowOffsetY;o2.strokeStyle=o1.strokeStyle;o2.globalAlpha=o1.globalAlpha;o2.font=o1.font;o2.textAlign=o1.textAlign;o2.textBaseline=o1.textBaseline;o2.scaleX_=o1.scaleX_;o2.scaleY_=o1.scaleY_;o2.x_=o1.x_;o2.y_=o1.y_;o2.lineScale_=o1.lineScale_}function getRgbHslContent(styleString){var start=styleString.indexOf("(",3),end=styleString.indexOf(")",start+1),parts=styleString.substring(start+1,end).split(",");(4!=parts.length||"a"!=styleString.charAt(3))&&(parts[3]=1);return parts}function percent(s){return parseFloat(s)/100}function clamp(v,min,max){return Math.min(max,Math.max(min,v))}function hslToRgb(parts){var r,g,b,h,s,l;h=parseFloat(parts[0])/360%360;0>h&&h++;s=clamp(percent(parts[1]),0,1);l=clamp(percent(parts[2]),0,1);if(0==s)r=g=b=l;else{var q=.5>l?l*(1+s):l+s-l*s,p=2*l-q;r=hueToRgb(p,q,h+1/3);g=hueToRgb(p,q,h);b=hueToRgb(p,q,h-1/3)}return"#"+decToHex[Math.floor(255*r)]+decToHex[Math.floor(255*g)]+decToHex[Math.floor(255*b)]}function hueToRgb(m1,m2,h){0>h&&h++;h>1&&h--;return 1>6*h?m1+6*(m2-m1)*h:1>2*h?m2:2>3*h?m1+(m2-m1)*(2/3-h)*6:m1}function processStyle(styleString){if(styleString in processStyleCache)return processStyleCache[styleString];var str,alpha=1;styleString=String(styleString);if("#"==styleString.charAt(0))str=styleString;else if(/^rgb/.test(styleString)){for(var n,parts=getRgbHslContent(styleString),str="#",i=0;3>i;i++){n=-1!=parts[i].indexOf("%")?Math.floor(255*percent(parts[i])):+parts[i];str+=decToHex[clamp(n,0,255)]}alpha=+parts[3]}else if(/^hsl/.test(styleString)){var parts=getRgbHslContent(styleString);str=hslToRgb(parts);alpha=parts[3]}else str=colorData[styleString]||styleString;return processStyleCache[styleString]={color:str,alpha:alpha}}function processFontStyle(styleString){if(fontStyleCache[styleString])return fontStyleCache[styleString];var fontFamily,el=document.createElement("div"),style=el.style;try{style.font=styleString;fontFamily=style.fontFamily.split(",")[0]}catch(ex){}return fontStyleCache[styleString]={style:style.fontStyle||DEFAULT_STYLE.style,variant:style.fontVariant||DEFAULT_STYLE.variant,weight:style.fontWeight||DEFAULT_STYLE.weight,size:style.fontSize||DEFAULT_STYLE.size,family:fontFamily||DEFAULT_STYLE.family}}function getComputedStyle(style,element){var computedStyle={};for(var p in style)computedStyle[p]=style[p];var canvasFontSize=parseFloat(element.currentStyle.fontSize),fontSize=parseFloat(style.size);"number"==typeof style.size?computedStyle.size=style.size:-1!=style.size.indexOf("px")?computedStyle.size=fontSize:-1!=style.size.indexOf("em")?computedStyle.size=canvasFontSize*fontSize:-1!=style.size.indexOf("%")?computedStyle.size=canvasFontSize/100*fontSize:-1!=style.size.indexOf("pt")?computedStyle.size=fontSize/.75:computedStyle.size=canvasFontSize;return computedStyle}function buildStyle(style){return style.style+" "+style.variant+" "+style.weight+" "+style.size+"px '"+style.family+"'"}function processLineCap(lineCap){return lineCapMap[lineCap]||"square"}function CanvasRenderingContext2D_(canvasElement){this.m_=createMatrixIdentity();this.mStack_=[];this.aStack_=[];this.currentPath_=[];this.strokeStyle="#000";this.fillStyle="#000";this.lineWidth=1;this.lineJoin="miter";this.lineCap="butt";this.miterLimit=1*Z;this.globalAlpha=1;this.font="12px 微软雅黑";this.textAlign="left";this.textBaseline="alphabetic";this.canvas=canvasElement;var cssText="width:"+canvasElement.clientWidth+"px;height:"+canvasElement.clientHeight+"px;overflow:hidden;position:absolute",el=canvasElement.ownerDocument.createElement("div");el.style.cssText=cssText;canvasElement.appendChild(el);var overlayEl=el.cloneNode(!1);overlayEl.style.backgroundColor="#fff";overlayEl.style.filter="alpha(opacity=0)";canvasElement.appendChild(overlayEl);this.element_=el;this.scaleX_=1;this.scaleY_=1;this.x_=0;this.y_=0;this.lineScale_=1;this.html_=""}function bezierCurveTo(self,cp1,cp2,p){self.currentPath_.push({type:"bezierCurveTo",cp1x:cp1.x,cp1y:cp1.y,cp2x:cp2.x,cp2y:cp2.y,x:p.x,y:p.y});self.currentX_=p.x;self.currentY_=p.y}function appendStroke(ctx,lineStr){var a=processStyle(ctx.strokeStyle),color=a.color,opacity=a.alpha*ctx.globalAlpha,lineWidth=ctx.lineScale_*ctx.lineWidth;1>lineWidth&&(opacity*=lineWidth);lineStr.push("<g_vml_:stroke",' opacity="',opacity,'"',' joinstyle="',ctx.lineJoin,'"',' miterlimit="',ctx.miterLimit,'"',' endcap="',processLineCap(ctx.lineCap),'"',' weight="',lineWidth,'px"',' color="',color,'" />')}function appendFill(ctx,lineStr,min,max){var fillStyle=ctx.fillStyle,arcScaleX=ctx.scaleX_,arcScaleY=ctx.scaleY_,width=max.x-min.x,height=max.y-min.y;if(fillStyle instanceof CanvasGradient_){var angle=0,focus={x:0,y:0},shift=0,expansion=1;if("gradient"==fillStyle.type_){var x0=fillStyle.x0_/arcScaleX,y0=fillStyle.y0_/arcScaleY,x1=fillStyle.x1_/arcScaleX,y1=fillStyle.y1_/arcScaleY,p0=getCoords(ctx,x0,y0),p1=getCoords(ctx,x1,y1),dx=p1.x-p0.x,dy=p1.y-p0.y;angle=180*Math.atan2(dx,dy)/Math.PI;0>angle&&(angle+=360);1e-6>angle&&(angle=0)}else{var p0=getCoords(ctx,fillStyle.x0_,fillStyle.y0_);focus={x:(p0.x-min.x)/width,y:(p0.y-min.y)/height};width/=arcScaleX*Z;height/=arcScaleY*Z;var dimension=m.max(width,height);shift=2*fillStyle.r0_/dimension;expansion=2*fillStyle.r1_/dimension-shift}var stops=fillStyle.colors_;stops.sort(function(cs1,cs2){return cs1.offset-cs2.offset});for(var length=stops.length,color1=stops[0].color,color2=stops[length-1].color,opacity1=stops[0].alpha*ctx.globalAlpha,opacity2=stops[length-1].alpha*ctx.globalAlpha,colors=[],i=0;length>i;i++){var stop=stops[i];colors.push(stop.offset*expansion+shift+" "+stop.color)}lineStr.push('<g_vml_:fill type="',fillStyle.type_,'"',' method="none" focus="100%"',' color="',color1,'"',' color2="',color2,'"',' colors="',colors.join(","),'"',' opacity="',opacity2,'"',' g_o_:opacity2="',opacity1,'"',' angle="',angle,'"',' focusposition="',focus.x,",",focus.y,'" />')}else if(fillStyle instanceof CanvasPattern_){if(width&&height){var deltaLeft=-min.x,deltaTop=-min.y;lineStr.push("<g_vml_:fill",' position="',deltaLeft/width*arcScaleX*arcScaleX,",",deltaTop/height*arcScaleY*arcScaleY,'"',' type="tile"',' src="',fillStyle.src_,'" />')}}else{var a=processStyle(ctx.fillStyle),color=a.color,opacity=a.alpha*ctx.globalAlpha;lineStr.push('<g_vml_:fill color="',color,'" opacity="',opacity,'" />')}}function matrixIsFinite(m){return isFinite(m[0][0])&&isFinite(m[0][1])&&isFinite(m[1][0])&&isFinite(m[1][1])&&isFinite(m[2][0])&&isFinite(m[2][1])}function setM(ctx,m,updateLineScale){if(matrixIsFinite(m)){ctx.m_=m;ctx.scaleX_=Math.sqrt(m[0][0]*m[0][0]+m[0][1]*m[0][1]);ctx.scaleY_=Math.sqrt(m[1][0]*m[1][0]+m[1][1]*m[1][1]);ctx.x_=m[2][0];ctx.y_=m[2][1];if(updateLineScale){var det=m[0][0]*m[1][1]-m[0][1]*m[1][0];ctx.lineScale_=sqrt(abs(det))}}}function CanvasGradient_(aType){this.type_=aType;this.x0_=0;this.y0_=0;this.r0_=0;this.x1_=0;this.y1_=0;this.r1_=0;this.colors_=[]}function CanvasPattern_(image,repetition){assertImageIsValid(image);switch(repetition){case"repeat":case null:case"":this.repetition_="repeat";break;case"repeat-x":case"repeat-y":case"no-repeat":this.repetition_=repetition;break;default:throwException("SYNTAX_ERR")}this.src_=image.src;this.width_=image.width;this.height_=image.height}function throwException(s){throw new DOMException_(s)}function assertImageIsValid(img){img&&1==img.nodeType&&"IMG"==img.tagName||throwException("TYPE_MISMATCH_ERR");"complete"!=img.readyState&&throwException("INVALID_STATE_ERR")}function DOMException_(s){this.code=this[s];this.message=s+": DOM Exception "+this.code}var m=Math,mr=m.round,ms=m.sin,mc=m.cos,abs=m.abs,sqrt=m.sqrt,Z=10,Z2=Z/2,slice=(+navigator.userAgent.match(/MSIE ([\d.]+)?/)[1],Array.prototype.slice);addNamespacesAndStylesheet(document);var G_vmlCanvasManager_={init:function(opt_doc){var doc=opt_doc||document;doc.createElement("canvas");doc.attachEvent("onreadystatechange",bind(this.init_,this,doc))},init_:function(doc){for(var els=doc.getElementsByTagName("canvas"),i=0;i<els.length;i++)this.initElement(els[i])},initElement:function(el){if(!el.getContext){el.getContext=getContext;addNamespacesAndStylesheet(el.ownerDocument);el.innerHTML="";el.attachEvent("onpropertychange",onPropertyChange);el.attachEvent("onresize",onResize);var attrs=el.attributes;attrs.width&&attrs.width.specified?el.style.width=attrs.width.nodeValue+"px":el.width=el.clientWidth;attrs.height&&attrs.height.specified?el.style.height=attrs.height.nodeValue+"px":el.height=el.clientHeight}return el}};G_vmlCanvasManager_.init();for(var decToHex=[],i=0;16>i;i++)for(var j=0;16>j;j++)decToHex[16*i+j]=i.toString(16)+j.toString(16);var colorData={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",bisque:"#FFE4C4",black:"#000000",blanchedalmond:"#FFEBCD",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#00FFFF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgreen:"#006400",darkgrey:"#A9A9A9",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",grey:"#808080",greenyellow:"#ADFF2F",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgreen:"#90EE90",lightgrey:"#D3D3D3",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#FF00FF",mediumaquamarine:"#66CDAA",mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",oldlace:"#FDF5E6",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",whitesmoke:"#F5F5F5",yellowgreen:"#9ACD32"},processStyleCache={},DEFAULT_STYLE={style:"normal",variant:"normal",weight:"normal",size:12,family:"微软雅黑"},fontStyleCache={},lineCapMap={butt:"flat",round:"round"},contextPrototype=CanvasRenderingContext2D_.prototype;contextPrototype.clearRect=function(){if(this.textMeasureEl_){this.textMeasureEl_.removeNode(!0);this.textMeasureEl_=null}this.element_.innerHTML=""};contextPrototype.flush=function(){this.element_.insertAdjacentHTML("beforeEnd",this.html_);this.html_=""};contextPrototype.beginPath=function(){this.currentPath_=[]};contextPrototype.moveTo=function(aX,aY){var p=getSkewedCoords(this,aX,aY);p.type="moveTo";this.currentPath_.push(p);this.currentX_=p.x;this.currentY_=p.y};contextPrototype.lineTo=function(aX,aY){var p=getSkewedCoords(this,aX,aY);p.type="lineTo";this.currentPath_.push(p);this.currentX_=p.x;this.currentY_=p.y};contextPrototype.bezierCurveTo=function(aCP1x,aCP1y,aCP2x,aCP2y,aX,aY){var p=getSkewedCoords(this,aX,aY),cp1=getSkewedCoords(this,aCP1x,aCP1y),cp2=getSkewedCoords(this,aCP2x,aCP2y);bezierCurveTo(this,cp1,cp2,p)};contextPrototype.quadraticCurveTo=function(aCPx,aCPy,aX,aY){var cp=getSkewedCoords(this,aCPx,aCPy),p=getSkewedCoords(this,aX,aY),cp1={x:this.currentX_+2/3*(cp.x-this.currentX_),y:this.currentY_+2/3*(cp.y-this.currentY_)},cp2={x:cp1.x+(p.x-this.currentX_)/3,y:cp1.y+(p.y-this.currentY_)/3};bezierCurveTo(this,cp1,cp2,p)};contextPrototype.arc=function(aX,aY,aRadius,aStartAngle,aEndAngle,aClockwise){aRadius*=Z;var arcType=aClockwise?"at":"wa",xStart=aX+mc(aStartAngle)*aRadius-Z2,yStart=aY+ms(aStartAngle)*aRadius-Z2,xEnd=aX+mc(aEndAngle)*aRadius-Z2,yEnd=aY+ms(aEndAngle)*aRadius-Z2;xStart!=xEnd||aClockwise||(xStart+=.125);var p=getSkewedCoords(this,aX,aY),pStart=getSkewedCoords(this,xStart,yStart),pEnd=getSkewedCoords(this,xEnd,yEnd);this.currentPath_.push({type:arcType,x:p.x,y:p.y,radius:aRadius,xStart:pStart.x,yStart:pStart.y,xEnd:pEnd.x,yEnd:pEnd.y})};contextPrototype.rect=function(aX,aY,aWidth,aHeight){this.moveTo(aX,aY);this.lineTo(aX+aWidth,aY);this.lineTo(aX+aWidth,aY+aHeight);this.lineTo(aX,aY+aHeight);this.closePath()};contextPrototype.strokeRect=function(aX,aY,aWidth,aHeight){var oldPath=this.currentPath_;this.beginPath();this.moveTo(aX,aY);this.lineTo(aX+aWidth,aY);this.lineTo(aX+aWidth,aY+aHeight);this.lineTo(aX,aY+aHeight);this.closePath();this.stroke();this.currentPath_=oldPath};contextPrototype.fillRect=function(aX,aY,aWidth,aHeight){var oldPath=this.currentPath_;this.beginPath();this.moveTo(aX,aY);this.lineTo(aX+aWidth,aY);this.lineTo(aX+aWidth,aY+aHeight);this.lineTo(aX,aY+aHeight);this.closePath();this.fill();this.currentPath_=oldPath};contextPrototype.createLinearGradient=function(aX0,aY0,aX1,aY1){var gradient=new CanvasGradient_("gradient");gradient.x0_=aX0;gradient.y0_=aY0;gradient.x1_=aX1;gradient.y1_=aY1;return gradient};contextPrototype.createRadialGradient=function(aX0,aY0,aR0,aX1,aY1,aR1){var gradient=new CanvasGradient_("gradientradial");gradient.x0_=aX0;gradient.y0_=aY0;gradient.r0_=aR0;gradient.x1_=aX1;gradient.y1_=aY1;gradient.r1_=aR1;return gradient};contextPrototype.drawImage=function(image,var_args){var dx,dy,dw,dh,sx,sy,sw,sh,oldRuntimeWidth=image.runtimeStyle.width,oldRuntimeHeight=image.runtimeStyle.height;image.runtimeStyle.width="auto";image.runtimeStyle.height="auto";var w=image.width,h=image.height,m_=this.m_;image.runtimeStyle.width=oldRuntimeWidth;image.runtimeStyle.height=oldRuntimeHeight;if(3==arguments.length){dx=arguments[1];dy=arguments[2];sx=sy=0;sw=dw=w;sh=dh=h}else if(5==arguments.length){dx=arguments[1];dy=arguments[2];dw=arguments[3];dh=arguments[4];sx=sy=0;sw=w;sh=h}else{if(9!=arguments.length)throw Error("Invalid number of arguments");sx=arguments[1];sy=arguments[2];sw=arguments[3];sh=arguments[4];dx=arguments[5];dy=arguments[6];dw=arguments[7];dh=arguments[8]}var vmlStr=[],W=10,H=10,skewed=m_[1]||m_[2],cropped=sx||sy,scaleX=this.scaleX_,scaleY=this.scaleY_,x=this.x_+dx*scaleX,y=this.y_+dy*scaleY;if(skewed&&cropped)if(skewed){vmlStr.push(" <g_vml_:group",' coordsize="',Z*W,",",Z*H,'"',' coordorigin="0,0"',' style="width:',W,"px;height:",H,"px;position:absolute;");var d=getCoords(this,dx,dy),filter=[];filter.push("M11=",this.m_[0][0]/scaleX,",","M12=",this.m_[1][0]/scaleY,",","M21=",this.m_[0][1]/scaleX,",","M22=",this.m_[1][1]/scaleY,",","Dx=",mr(d.x/Z),",","Dy=",mr(d.y/Z),"");var max=d,c2=getCoords(this,dx+dw,dy),c3=getCoords(this,dx,dy+dh),c4=getCoords(this,dx+dw,dy+dh);max.x=m.max(max.x,c2.x,c3.x,c4.x);max.y=m.max(max.y,c2.y,c3.y,c4.y);vmlStr.push("padding:0 ",mr(max.x/Z),"px ",mr(max.y/Z),"px 0;filter:progid:DXImageTransform.Microsoft.Matrix(",filter.join(""),", SizingMethod='clip');>");cropped&&vmlStr.push('<div style="overflow: hidden; width:',Math.ceil((dw+sx*dw/sw)*scaleX),"px;"," height:",Math.ceil((dh+sy*dh/sh)*scaleY),"px;"," filter:progid:DxImageTransform.Microsoft.Matrix(Dx=",-sx*dw/sw*scaleX,",Dy=",-sy*dh/sh*scaleY,');">');vmlStr.push('<img src="',image.src,'"','style="position:absolute;');vmlStr.push("width:",scaleX*dw/sw*w,"px;height:",scaleY*dh/sh*h,"px;");this.globalAlpha<1&&vmlStr.push("filter:alpha(opacity=",mr(100*this.globalAlpha)+")");vmlStr.push('" />');cropped&&vmlStr.push("</div>");vmlStr.push("</g_vml_:group>")}else{vmlStr.push('<div style="overflow: hidden; width:',Math.ceil((dw+sx*dw/sw)*scaleX),"px;"," height:",Math.ceil((dh+sy*dh/sh)*scaleY),"px;","position:absolute;left:",x,"px;","top:",y,"px;"," filter:progid:DxImageTransform.Microsoft.Matrix(Dx=",-sx*dw/sw*scaleX,",Dy=",-sy*dh/sh*scaleY,');">');vmlStr.push('<img src="',image.src,'"','style="position:absolute;');vmlStr.push("width:",scaleX*dw/sw*w,"px;height:",scaleY*dh/sh*h,"px;");this.globalAlpha<1&&vmlStr.push("filter:alpha(opacity=",mr(100*this.globalAlpha)+")");vmlStr.push('" /></div>')}else{vmlStr.push('<img src="',image.src,'"','style="position:absolute;left:',x,"px;top:",y,"px;");vmlStr.push("width:",scaleX*dw/sw*w,"px;height:",scaleY*dh/sh*h,"px;");this.globalAlpha<1&&vmlStr.push("filter:alpha(opacity=",mr(100*this.globalAlpha)+")");vmlStr.push('" />')}this.html_+=vmlStr.join("")};contextPrototype.stroke=function(aFill){var lineStr=[],W=10,H=10,x_=this.x_,y_=this.y_;lineStr.push("<g_vml_:shape",' filled="',!!aFill,'"',' style="position:absolute;width:',W,"px;height:",H,"px;","left:",x_,"px;top:",y_,'px;"',' coordorigin="0,0"',' coordsize="',Z*W,",",Z*H,'"',' stroked="',!aFill,'"',' path="');for(var min={x:null,y:null},max={x:null,y:null},i=0;i<this.currentPath_.length;i++){var c,p=this.currentPath_[i];switch(p.type){case"moveTo":c=p;lineStr.push(" m ",mr(p.x),",",mr(p.y));break;case"lineTo":lineStr.push(" l ",mr(p.x),",",mr(p.y));break;case"close":lineStr.push(" x ");p=null;break;case"bezierCurveTo":lineStr.push(" c ",mr(p.cp1x),",",mr(p.cp1y),",",mr(p.cp2x),",",mr(p.cp2y),",",mr(p.x),",",mr(p.y));break;case"at":case"wa":lineStr.push(" ",p.type," ",mr(p.x-this.scaleX_*p.radius),",",mr(p.y-this.scaleY_*p.radius)," ",mr(p.x+this.scaleX_*p.radius),",",mr(p.y+this.scaleY_*p.radius)," ",mr(p.xStart),",",mr(p.yStart)," ",mr(p.xEnd),",",mr(p.yEnd))}if(p){(null==min.x||p.x<min.x)&&(min.x=p.x);(null==max.x||p.x>max.x)&&(max.x=p.x);(null==min.y||p.y<min.y)&&(min.y=p.y);(null==max.y||p.y>max.y)&&(max.y=p.y)}}lineStr.push(' ">');aFill?appendFill(this,lineStr,min,max):appendStroke(this,lineStr);lineStr.push("</g_vml_:shape>");this.html_+=lineStr.join("")};contextPrototype.fill=function(){this.stroke(!0)};contextPrototype.closePath=function(){this.currentPath_.push({type:"close"})};contextPrototype.save=function(){var o={};copyState(this,o);this.aStack_.push(o);this.mStack_.push(this.m_);this.m_=matrixMultiply(createMatrixIdentity(),this.m_)};contextPrototype.restore=function(){if(this.aStack_.length){copyState(this.aStack_.pop(),this);this.m_=this.mStack_.pop()}};contextPrototype.translate=function(aX,aY){var m1=[[1,0,0],[0,1,0],[aX,aY,1]];setM(this,matrixMultiply(m1,this.m_),!1)};contextPrototype.rotate=function(aRot){var c=mc(aRot),s=ms(aRot),m1=[[c,s,0],[-s,c,0],[0,0,1]];setM(this,matrixMultiply(m1,this.m_),!1)};contextPrototype.scale=function(aX,aY){var m1=[[aX,0,0],[0,aY,0],[0,0,1]];setM(this,matrixMultiply(m1,this.m_),!0)};contextPrototype.transform=function(m11,m12,m21,m22,dx,dy){var m1=[[m11,m12,0],[m21,m22,0],[dx,dy,1]];setM(this,matrixMultiply(m1,this.m_),!0)};contextPrototype.setTransform=function(m11,m12,m21,m22,dx,dy){var m=[[m11,m12,0],[m21,m22,0],[dx,dy,1]];setM(this,m,!0)};contextPrototype.drawText_=function(text,x,y,maxWidth,stroke){var m=this.m_,delta=1e3,left=0,right=delta,offset={x:0,y:0},lineStr=[],fontStyle=getComputedStyle(processFontStyle(this.font),this.element_),fontStyleString=buildStyle(fontStyle),elementStyle=this.element_.currentStyle,textAlign=this.textAlign.toLowerCase();switch(textAlign){case"left":case"center":case"right":break;case"end":textAlign="ltr"==elementStyle.direction?"right":"left";break;case"start":textAlign="rtl"==elementStyle.direction?"right":"left";break;default:textAlign="left"}switch(this.textBaseline){case"hanging":case"top":offset.y=fontStyle.size/1.75;break;case"middle":break;default:case null:case"alphabetic":case"ideographic":case"bottom":offset.y=-fontStyle.size/2.25}switch(textAlign){case"right":left=delta;right=.05;break;case"center":left=right=delta/2}var d=getCoords(this,x+offset.x,y+offset.y);lineStr.push('<g_vml_:line from="',-left,' 0" to="',right,' 0.05" ',' coordsize="100 100" coordorigin="0 0"',' filled="',!stroke,'" stroked="',!!stroke,'" style="position:absolute;width:1px;height:1px;">');stroke?appendStroke(this,lineStr):appendFill(this,lineStr,{x:-left,y:0},{x:right,y:fontStyle.size});var skewM=m[0][0].toFixed(3)+","+m[1][0].toFixed(3)+","+m[0][1].toFixed(3)+","+m[1][1].toFixed(3)+",0,0",skewOffset=mr(d.x/Z)+","+mr(d.y/Z);lineStr.push('<g_vml_:skew on="t" matrix="',skewM,'" ',' offset="',skewOffset,'" origin="',left,' 0" />','<g_vml_:path textpathok="true" />','<g_vml_:textpath on="true" string="',encodeHtmlAttribute(text),'" style="v-text-align:',textAlign,";font:",encodeHtmlAttribute(fontStyleString),'" /></g_vml_:line>');this.html_+=lineStr.join("")};contextPrototype.fillText=function(text,x,y,maxWidth){this.drawText_(text,x,y,maxWidth,!1)};contextPrototype.strokeText=function(text,x,y,maxWidth){this.drawText_(text,x,y,maxWidth,!0)};contextPrototype.measureText=function(text){if(!this.textMeasureEl_){var s='<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>';this.element_.insertAdjacentHTML("beforeEnd",s);this.textMeasureEl_=this.element_.lastChild}var doc=this.element_.ownerDocument;this.textMeasureEl_.innerHTML="";this.textMeasureEl_.style.font=this.font;this.textMeasureEl_.appendChild(doc.createTextNode(text));return{width:this.textMeasureEl_.offsetWidth}};contextPrototype.clip=function(){};contextPrototype.arcTo=function(){};contextPrototype.createPattern=function(image,repetition){return new CanvasPattern_(image,repetition)};CanvasGradient_.prototype.addColorStop=function(aOffset,aColor){aColor=processStyle(aColor);this.colors_.push({offset:aOffset,color:aColor.color,alpha:aColor.alpha})};var p=DOMException_.prototype=new Error;p.INDEX_SIZE_ERR=1;p.DOMSTRING_SIZE_ERR=2;p.HIERARCHY_REQUEST_ERR=3;p.WRONG_DOCUMENT_ERR=4;p.INVALID_CHARACTER_ERR=5;p.NO_DATA_ALLOWED_ERR=6;p.NO_MODIFICATION_ALLOWED_ERR=7;p.NOT_FOUND_ERR=8;p.NOT_SUPPORTED_ERR=9;p.INUSE_ATTRIBUTE_ERR=10;p.INVALID_STATE_ERR=11;p.SYNTAX_ERR=12;p.INVALID_MODIFICATION_ERR=13;p.NAMESPACE_ERR=14;p.INVALID_ACCESS_ERR=15;p.VALIDATION_ERR=16;p.TYPE_MISMATCH_ERR=17;G_vmlCanvasManager=G_vmlCanvasManager_;CanvasRenderingContext2D=CanvasRenderingContext2D_;CanvasGradient=CanvasGradient_;CanvasPattern=CanvasPattern_;DOMException=DOMException_}();return G_vmlCanvasManager});