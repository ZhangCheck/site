define(["require"],function(require){function ZeroArray(option){this.defaultOption={type:"RECT"};this._init(option)}ZeroArray.prototype={RECT:"_calculateRect",_init:function(option){this._initOption(option);this._initCanvas()},_initOption:function(option){for(k in option)this.defaultOption[k]=option[k]},_initCanvas:function(){var canvas=document.createElement("canvas");canvas.width=1;canvas.height=1;var ratio=Math.sqrt(canvas.getContext("2d").getImageData(0,0,1,1).data.length>>2);canvas.width=this.defaultOption.width;canvas.height=this.defaultOption.height;if(canvas.getContext)var ctx=canvas.getContext("2d");this.canvas=canvas;this.ctx=ctx;this.ratio=ratio},calculate:function(callback,callbackObj){var calType=this.defaultOption.type,calmethod=this[calType];this[calmethod].call(this,callback,callbackObj)},_calculateReturn:function(result,callback,callbackObj){callback.call(callbackObj,result)},_calculateRect:function(callback,callbackObj){var result={},width=this.defaultOption.width>>5<<5,height=this.defaultOption.height;result.initarr=this._rectZeroArray(width*height);result.area=width*height;result.maxHit=height;result.maxWit=width;result.imgboard=this._rectBoard(width,height);this._calculateReturn(result,callback,callbackObj)},_rectBoard:function(width,height){for(var row=[],i=0;height>i;i++)row.push({y:i,start:0,end:width});for(var cloumn=[],i=0;width>i;i++)cloumn.push({x:i,start:0,end:height});return{row:row,cloumn:cloumn}},_rectZeroArray:function(num){for(var a=[],n=num,i=-1;++i<n;)a[i]=0;return a}};return ZeroArray});