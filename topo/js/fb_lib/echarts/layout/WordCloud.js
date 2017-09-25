define(["require","../layout/WordCloudRectZero","zrender/tool/util"],function(require){function CloudLayout(option){this._init(option)}var ZeroArray=require("../layout/WordCloudRectZero"),zrUtil=require("zrender/tool/util");CloudLayout.prototype={start:function(){function startStep(){that.totalArea=maxArea;wordletype.autoSizeCal.enable&&that._autoCalTextSize(data,maxArea,maxWit,maxHit,wordletype.autoSizeCal.minSize);dfop.timer&&clearInterval(dfop.timer);dfop.timer=setInterval(step,0);step()}function step(){for(var d,start=+new Date,n=data.length;+new Date-start<dfop.timeInterval&&++i<n&&dfop.timer;){d=data[i];d.x=size[0]>>1;d.y=size[1]>>1;that._cloudSprite(d,data,i);if(d.hasText&&that._place(board,d,maxBounds)){tags.push(d);d.x-=size[0]>>1;d.y-=size[1]>>1}}if(i>=n){that.stop();that._fixTagPosition(tags);dfop.endcallback(tags)}}var board=null,maxWit=0,maxHit=0,maxArea=0,i=-1,tags=[],maxBounds=null,data=this.wordsdata,dfop=this.defaultOption,wordletype=dfop.wordletype,size=dfop.size,that=this,zeroArrayObj=new ZeroArray({type:wordletype.type,width:size[0],height:size[1]});zeroArrayObj.calculate(function(options){board=options.initarr;maxWit=options.maxWit;maxHit=options.maxHit;maxArea=options.area;maxBounds=options.imgboard;startStep()},this);return this},_fixTagPosition:function(tags){for(var center=this.defaultOption.center,i=0,len=tags.length;len>i;i++){tags[i].x+=center[0];tags[i].y+=center[1]}},stop:function(){if(this.defaultOption.timer){clearInterval(this.defaultOption.timer);this.defaultOption.timer=null}return this},end:function(v){v&&(this.defaultOption.endcallback=v);return this},_init:function(option){this.defaultOption={};this._initProperty(option);this._initMethod(option);this._initCanvas();this._initData(option.data)},_initData:function(datas){var that=this,thatop=that.defaultOption;this.wordsdata=datas.map(function(d,i){d.text=thatop.text.call(that,d,i);d.font=thatop.font.call(that,d,i);d.style=thatop.fontStyle.call(that,d,i);d.weight=thatop.fontWeight.call(that,d,i);d.rotate=thatop.rotate.call(that,d,i);d.size=~~thatop.fontSize.call(that,d,i);d.padding=thatop.padding.call(that,d,i);return d}).sort(function(a,b){return b.value-a.value})},_initMethod:function(option){function cloudText(d){return d.name}function cloudFont(){return"sans-serif"}function cloudFontNormal(){return"normal"}function cloudFontSize(d){return d.value}function cloudRotate(){return 0}function newCloudRotate(rotate){return function(){return rotate[Math.round(Math.random()*(rotate.length-1))]}}function cloudPadding(){return 0}function archimedeanSpiral(size){var e=size[0]/size[1];return function(t){return[e*(t*=.1)*Math.cos(t),t*Math.sin(t)]}}function rectangularSpiral(size){var dy=4,dx=dy*size[0]/size[1],x=0,y=0;return function(t){var sign=0>t?-1:1;switch(Math.sqrt(1+4*sign*t)-sign&3){case 0:x+=dx;break;case 1:y+=dy;break;case 2:x-=dx;break;default:y-=dy}return[x,y]}}function functor(v){return"function"==typeof v?v:function(){return v}}var dfop=this.defaultOption;dfop.text=option.text?functor(option.text):cloudText;dfop.font=option.font?functor(option.font):cloudFont;dfop.fontSize=option.fontSize?functor(option.fontSize):cloudFontSize;dfop.fontStyle=option.fontStyle?functor(option.fontStyle):cloudFontNormal;dfop.fontWeight=option.fontWeight?functor(option.fontWeight):cloudFontNormal;dfop.rotate=option.rotate?newCloudRotate(option.rotate):cloudRotate;dfop.padding=option.padding?functor(option.padding):cloudPadding;dfop.center=option.center;dfop.spiral=archimedeanSpiral;dfop.endcallback=function(){};dfop.rectangularSpiral=rectangularSpiral;dfop.archimedeanSpiral=archimedeanSpiral},_initProperty:function(option){var dfop=this.defaultOption;dfop.size=option.size||[256,256];dfop.wordletype=option.wordletype;dfop.words=option.words||[];dfop.timeInterval=1/0;dfop.timer=null;dfop.spirals={archimedean:dfop.archimedeanSpiral,rectangular:dfop.rectangularSpiral};zrUtil.merge(dfop,{size:[256,256],wordletype:{type:"RECT",areaPresent:.058,autoSizeCal:{enable:!0,minSize:12}}})},_initCanvas:function(){var canvas,cloudRadians=Math.PI/180,cw=64,ch=2048,ratio=1;if("undefined"!=typeof document){canvas=document.createElement("canvas");canvas.width=1;canvas.height=1;ratio=Math.sqrt(canvas.getContext("2d").getImageData(0,0,1,1).data.length>>2);canvas.width=(cw<<5)/ratio;canvas.height=ch/ratio}else canvas=new Canvas(cw<<5,ch);var c=canvas.getContext("2d");c.fillStyle=c.strokeStyle="red";c.textAlign="center";this.defaultOption.c=c;this.defaultOption.cw=cw;this.defaultOption.ch=ch;this.defaultOption.ratio=ratio;this.defaultOption.cloudRadians=cloudRadians},_cloudSprite:function(d,data,di){if(!d.sprite){var cw=this.defaultOption.cw,ch=this.defaultOption.ch,c=this.defaultOption.c,ratio=this.defaultOption.ratio,cloudRadians=this.defaultOption.cloudRadians;c.clearRect(0,0,(cw<<5)/ratio,ch/ratio);var x=0,y=0,maxh=0,n=data.length;--di;for(;++di<n;){d=data[di];c.save();c.font=d.style+" "+d.weight+" "+~~((d.size+1)/ratio)+"px "+d.font;var w=c.measureText(d.text+"m").width*ratio,h=d.size<<1;if(d.rotate){var sr=Math.sin(d.rotate*cloudRadians),cr=Math.cos(d.rotate*cloudRadians),wcr=w*cr,wsr=w*sr,hcr=h*cr,hsr=h*sr;w=Math.max(Math.abs(wcr+hsr),Math.abs(wcr-hsr))+31>>5<<5;h=~~Math.max(Math.abs(wsr+hcr),Math.abs(wsr-hcr))}else w=w+31>>5<<5;h>maxh&&(maxh=h);if(x+w>=cw<<5){x=0;y+=maxh;maxh=0}if(y+h>=ch)break;c.translate((x+(w>>1))/ratio,(y+(h>>1))/ratio);d.rotate&&c.rotate(d.rotate*cloudRadians);c.fillText(d.text,0,0);if(d.padding){c.lineWidth=2*d.padding;c.strokeText(d.text,0,0)}c.restore();d.width=w;d.height=h;d.xoff=x;d.yoff=y;d.x1=w>>1;d.y1=h>>1;d.x0=-d.x1;d.y0=-d.y1;d.hasText=!0;x+=w}for(var pixels=c.getImageData(0,0,(cw<<5)/ratio,ch/ratio).data,sprite=[];--di>=0;){d=data[di];if(d.hasText){for(var w=d.width,w32=w>>5,h=d.y1-d.y0,i=0;h*w32>i;i++)sprite[i]=0;x=d.xoff;if(null==x)return;y=d.yoff;for(var seen=0,seenRow=-1,j=0;h>j;j++){for(var i=0;w>i;i++){var k=w32*j+(i>>5),m=pixels[(y+j)*(cw<<5)+(x+i)<<2]?1<<31-i%32:0;sprite[k]|=m;seen|=m}if(seen)seenRow=j;else{d.y0++;h--;j--;y++}}d.y1=d.y0+seenRow;d.sprite=sprite.slice(0,(d.y1-d.y0)*w32)}}}},_place:function(board,tag,maxBounds){function cloudCollide(tag,board,sw){sw>>=5;for(var last,sprite=tag.sprite,w=tag.width>>5,lx=tag.x-(w<<4),sx=127&lx,msx=32-sx,h=tag.y1-tag.y0,x=(tag.y+tag.y0)*sw+(lx>>5),j=0;h>j;j++){last=0;for(var i=0;w>=i;i++)if((last<<msx|(w>i?(last=sprite[j*w+i])>>>sx:0))&board[x+i])return!0;x+=sw}return!1}function collideRects(a,maxBounds){return maxBounds.row[a.y]&&maxBounds.cloumn[a.x]&&a.x>=maxBounds.row[a.y].start&&a.x<=maxBounds.row[a.y].end&&a.y>=maxBounds.cloumn[a.x].start&&a.y<=maxBounds.cloumn[a.x].end}for(var dxdy,dx,dy,size=this.defaultOption.size,startX=([{x:0,y:0},{x:size[0],y:size[1]}],tag.x),startY=tag.y,maxDelta=Math.sqrt(size[0]*size[0]+size[1]*size[1]),s=this.defaultOption.spiral(size),dt=Math.random()<.5?1:-1,t=-dt;dxdy=s(t+=dt);){dx=~~dxdy[0];dy=~~dxdy[1];if(Math.min(dx,dy)>maxDelta)break;tag.x=startX+dx;tag.y=startY+dy;if(!(tag.x+tag.x0<0||tag.y+tag.y0<0||tag.x+tag.x1>size[0]||tag.y+tag.y1>size[1])&&!cloudCollide(tag,board,size[0])&&collideRects(tag,maxBounds)){for(var last,sprite=tag.sprite,w=tag.width>>5,sw=size[0]>>5,lx=tag.x-(w<<4),sx=127&lx,msx=32-sx,h=tag.y1-tag.y0,x=(tag.y+tag.y0)*sw+(lx>>5),j=0;h>j;j++){last=0;for(var i=0;w>=i;i++)board[x+i]|=last<<msx|(w>i?(last=sprite[j*w+i])>>>sx:0);x+=sw}delete tag.sprite;return!0}}return!1},_autoCalTextSize:function(data,shapeArea,maxwidth,maxheight,minSize){function measureTextWitHitByarea(d){c.clearRect(0,0,(cw<<5)/ratio,ch/ratio);c.save();c.font=d.style+" "+d.weight+" "+~~((d.size+1)/ratio)+"px "+d.font;var w=c.measureText(d.text+"m").width*ratio,h=d.size<<1;w=w+31>>5<<5;c.restore();d.aw=w;d.ah=h;var k,rw,rh;if(d.rotate){var sr=Math.sin(d.rotate*cloudRadians),cr=Math.cos(d.rotate*cloudRadians),wcr=w*cr,wsr=w*sr,hcr=h*cr,hsr=h*sr;rw=Math.max(Math.abs(wcr+hsr),Math.abs(wcr-hsr))+31>>5<<5;rh=~~Math.max(Math.abs(wsr+hcr),Math.abs(wsr-hcr))}if(d.size<=minTextSize||d.rotate&&w*h<=d.area&&maxwidth>=rw&&maxheight>=rh||w*h<=d.area&&maxwidth>=w&&maxheight>=h)d.area=w*h;else{k=d.rotate&&rw>maxwidth&&rh>maxheight?Math.min(maxwidth/rw,maxheight/rh):w>maxwidth||h>maxheight?Math.min(maxwidth/w,maxheight/h):Math.sqrt(d.area/(d.aw*d.ah));d.size=~~(k*d.size);if(!(d.size<minSize))return measureTextWitHitByarea(d);d.size=minSize}}function sum(dts,callback){for(var j=dts.length,ressum=0;j--;)ressum+=callback(dts[j]);return ressum}for(var d,dpre,sizesum=sum(data,function(k){return k.size}),i=data.length,maxareapre=.25,minTextSize=minSize,cw=this.defaultOption.cw,ch=this.defaultOption.ch,c=this.defaultOption.c,ratio=this.defaultOption.ratio,cloudRadians=this.defaultOption.cloudRadians;i--;){d=data[i];dpre=d.size/sizesum;maxareapre?d.areapre=maxareapre>dpre?dpre:maxareapre:d.areapre=dpre;d.area=shapeArea*d.areapre;d.totalarea=shapeArea;measureTextWitHitByarea(d)}}};return CloudLayout});