define(["require","./Base","./util/PathProxy","../tool/util"],function(require){var Base=require("./Base"),PathProxy=require("./util/PathProxy"),PathSegment=PathProxy.PathSegment,vMag=function(v){return Math.sqrt(v[0]*v[0]+v[1]*v[1])},vRatio=function(u,v){return(u[0]*v[0]+u[1]*v[1])/(vMag(u)*vMag(v))},vAngle=function(u,v){return(u[0]*v[1]<u[1]*v[0]?-1:1)*Math.acos(vRatio(u,v))},Path=function(options){Base.call(this,options)};Path.prototype={type:"path",buildPathArray:function(data,x,y){if(!data)return[];x=x||0;y=y||0;var cs=data,cc=["m","M","l","L","v","V","h","H","z","Z","c","C","q","Q","t","T","s","S","a","A"];cs=cs.replace(/-/g," -");cs=cs.replace(/  /g," ");cs=cs.replace(/ /g,",");cs=cs.replace(/,,/g,",");var n;for(n=0;n<cc.length;n++)cs=cs.replace(new RegExp(cc[n],"g"),"|"+cc[n]);var arr=cs.split("|"),ca=[],cpx=0,cpy=0;for(n=1;n<arr.length;n++){var str=arr[n],c=str.charAt(0);str=str.slice(1);str=str.replace(new RegExp("e,-","g"),"e-");var p=str.split(",");p.length>0&&""===p[0]&&p.shift();for(var i=0;i<p.length;i++)p[i]=parseFloat(p[i]);for(;p.length>0&&!isNaN(p[0]);){var ctlPtx,ctlPty,prevCmd,rx,ry,psi,fa,fs,cmd=null,points=[],x1=cpx,y1=cpy;switch(c){case"l":cpx+=p.shift();cpy+=p.shift();cmd="L";points.push(cpx,cpy);break;case"L":cpx=p.shift();cpy=p.shift();points.push(cpx,cpy);break;case"m":cpx+=p.shift();cpy+=p.shift();cmd="M";points.push(cpx,cpy);c="l";break;case"M":cpx=p.shift();cpy=p.shift();cmd="M";points.push(cpx,cpy);c="L";break;case"h":cpx+=p.shift();cmd="L";points.push(cpx,cpy);break;case"H":cpx=p.shift();cmd="L";points.push(cpx,cpy);break;case"v":cpy+=p.shift();cmd="L";points.push(cpx,cpy);break;case"V":cpy=p.shift();cmd="L";points.push(cpx,cpy);break;case"C":points.push(p.shift(),p.shift(),p.shift(),p.shift());cpx=p.shift();cpy=p.shift();points.push(cpx,cpy);break;case"c":points.push(cpx+p.shift(),cpy+p.shift(),cpx+p.shift(),cpy+p.shift());cpx+=p.shift();cpy+=p.shift();cmd="C";points.push(cpx,cpy);break;case"S":ctlPtx=cpx;ctlPty=cpy;prevCmd=ca[ca.length-1];if("C"===prevCmd.command){ctlPtx=cpx+(cpx-prevCmd.points[2]);ctlPty=cpy+(cpy-prevCmd.points[3])}points.push(ctlPtx,ctlPty,p.shift(),p.shift());cpx=p.shift();cpy=p.shift();cmd="C";points.push(cpx,cpy);break;case"s":ctlPtx=cpx,ctlPty=cpy;prevCmd=ca[ca.length-1];if("C"===prevCmd.command){ctlPtx=cpx+(cpx-prevCmd.points[2]);ctlPty=cpy+(cpy-prevCmd.points[3])}points.push(ctlPtx,ctlPty,cpx+p.shift(),cpy+p.shift());cpx+=p.shift();cpy+=p.shift();cmd="C";points.push(cpx,cpy);break;case"Q":points.push(p.shift(),p.shift());cpx=p.shift();cpy=p.shift();points.push(cpx,cpy);break;case"q":points.push(cpx+p.shift(),cpy+p.shift());cpx+=p.shift();cpy+=p.shift();cmd="Q";points.push(cpx,cpy);break;case"T":ctlPtx=cpx,ctlPty=cpy;prevCmd=ca[ca.length-1];if("Q"===prevCmd.command){ctlPtx=cpx+(cpx-prevCmd.points[0]);ctlPty=cpy+(cpy-prevCmd.points[1])}cpx=p.shift();cpy=p.shift();cmd="Q";points.push(ctlPtx,ctlPty,cpx,cpy);break;case"t":ctlPtx=cpx,ctlPty=cpy;prevCmd=ca[ca.length-1];if("Q"===prevCmd.command){ctlPtx=cpx+(cpx-prevCmd.points[0]);ctlPty=cpy+(cpy-prevCmd.points[1])}cpx+=p.shift();cpy+=p.shift();cmd="Q";points.push(ctlPtx,ctlPty,cpx,cpy);break;case"A":rx=p.shift();ry=p.shift();psi=p.shift();fa=p.shift();fs=p.shift();x1=cpx,y1=cpy;cpx=p.shift(),cpy=p.shift();cmd="A";points=this._convertPoint(x1,y1,cpx,cpy,fa,fs,rx,ry,psi);break;case"a":rx=p.shift();ry=p.shift();psi=p.shift();fa=p.shift();fs=p.shift();x1=cpx,y1=cpy;cpx+=p.shift();cpy+=p.shift();cmd="A";points=this._convertPoint(x1,y1,cpx,cpy,fa,fs,rx,ry,psi)}for(var j=0,l=points.length;l>j;j+=2){points[j]+=x;points[j+1]+=y}ca.push(new PathSegment(cmd||c,points))}("z"===c||"Z"===c)&&ca.push(new PathSegment("z",[]))}return ca},_convertPoint:function(x1,y1,x2,y2,fa,fs,rx,ry,psiDeg){var psi=psiDeg*(Math.PI/180),xp=Math.cos(psi)*(x1-x2)/2+Math.sin(psi)*(y1-y2)/2,yp=-1*Math.sin(psi)*(x1-x2)/2+Math.cos(psi)*(y1-y2)/2,lambda=xp*xp/(rx*rx)+yp*yp/(ry*ry);if(lambda>1){rx*=Math.sqrt(lambda);ry*=Math.sqrt(lambda)}var f=Math.sqrt((rx*rx*(ry*ry)-rx*rx*(yp*yp)-ry*ry*(xp*xp))/(rx*rx*(yp*yp)+ry*ry*(xp*xp)));fa===fs&&(f*=-1);isNaN(f)&&(f=0);var cxp=f*rx*yp/ry,cyp=f*-ry*xp/rx,cx=(x1+x2)/2+Math.cos(psi)*cxp-Math.sin(psi)*cyp,cy=(y1+y2)/2+Math.sin(psi)*cxp+Math.cos(psi)*cyp,theta=vAngle([1,0],[(xp-cxp)/rx,(yp-cyp)/ry]),u=[(xp-cxp)/rx,(yp-cyp)/ry],v=[(-1*xp-cxp)/rx,(-1*yp-cyp)/ry],dTheta=vAngle(u,v);vRatio(u,v)<=-1&&(dTheta=Math.PI);vRatio(u,v)>=1&&(dTheta=0);0===fs&&dTheta>0&&(dTheta-=2*Math.PI);1===fs&&0>dTheta&&(dTheta+=2*Math.PI);return[cx,cy,rx,ry,theta,dTheta,psi,fs]},buildPath:function(ctx,style){var path=style.path,x=style.x||0,y=style.y||0;style.pathArray=style.pathArray||this.buildPathArray(path,x,y);for(var pathArray=style.pathArray,pointList=style.pointList=[],singlePointList=[],i=0,l=pathArray.length;l>i;i++){if("M"==pathArray[i].command.toUpperCase()){singlePointList.length>0&&pointList.push(singlePointList);singlePointList=[]}for(var p=pathArray[i].points,j=0,k=p.length;k>j;j+=2)singlePointList.push([p[j],p[j+1]])}singlePointList.length>0&&pointList.push(singlePointList);for(var i=0,l=pathArray.length;l>i;i++){var c=pathArray[i].command,p=pathArray[i].points;switch(c){case"L":ctx.lineTo(p[0],p[1]);break;case"M":ctx.moveTo(p[0],p[1]);break;case"C":ctx.bezierCurveTo(p[0],p[1],p[2],p[3],p[4],p[5]);break;case"Q":ctx.quadraticCurveTo(p[0],p[1],p[2],p[3]);break;case"A":var cx=p[0],cy=p[1],rx=p[2],ry=p[3],theta=p[4],dTheta=p[5],psi=p[6],fs=p[7],r=rx>ry?rx:ry,scaleX=rx>ry?1:rx/ry,scaleY=rx>ry?ry/rx:1;ctx.translate(cx,cy);ctx.rotate(psi);ctx.scale(scaleX,scaleY);ctx.arc(0,0,r,theta,theta+dTheta,1-fs);ctx.scale(1/scaleX,1/scaleY);ctx.rotate(-psi);ctx.translate(-cx,-cy);break;case"z":ctx.closePath()}}},getRect:function(style){if(style.__rect)return style.__rect;var lineWidth;lineWidth="stroke"==style.brushType||"fill"==style.brushType?style.lineWidth||1:0;for(var minX=Number.MAX_VALUE,maxX=Number.MIN_VALUE,minY=Number.MAX_VALUE,maxY=Number.MIN_VALUE,x=style.x||0,y=style.y||0,pathArray=style.pathArray||this.buildPathArray(style.path),i=0;i<pathArray.length;i++)for(var p=pathArray[i].points,j=0;j<p.length;j++)if(j%2===0){p[j]+x<minX&&(minX=p[j]);p[j]+x>maxX&&(maxX=p[j])}else{p[j]+y<minY&&(minY=p[j]);p[j]+y>maxY&&(maxY=p[j])}var rect;rect=minX===Number.MAX_VALUE||maxX===Number.MIN_VALUE||minY===Number.MAX_VALUE||maxY===Number.MIN_VALUE?{x:0,y:0,width:0,height:0}:{x:Math.round(minX-lineWidth/2),y:Math.round(minY-lineWidth/2),width:maxX-minX+lineWidth,height:maxY-minY+lineWidth};style.__rect=rect;return rect}};require("../tool/util").inherits(Path,Base);return Path});