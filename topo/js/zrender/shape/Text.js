define(["require","../tool/area","./Base","../tool/util"],function(require){var area=require("../tool/area"),Base=require("./Base"),Text=function(options){Base.call(this,options)};Text.prototype={type:"text",brush:function(ctx,isHighlight){var style=this.style;isHighlight&&(style=this.getHighlightStyle(style,this.highlightStyle||{}));if("undefined"!=typeof style.text&&style.text!==!1){ctx.save();this.doClip(ctx);this.setContext(ctx,style);this.setTransform(ctx);style.textFont&&(ctx.font=style.textFont);ctx.textAlign=style.textAlign||"start";ctx.textBaseline=style.textBaseline||"middle";var y,text=(style.text+"").split("\n"),lineHeight=area.getTextHeight("国",style.textFont),rect=this.getRect(style),x=style.x;y="top"==style.textBaseline?rect.y:"bottom"==style.textBaseline?rect.y+lineHeight:rect.y+lineHeight/2;for(var i=0,l=text.length;l>i;i++){if(style.maxWidth)switch(style.brushType){case"fill":ctx.fillText(text[i],x,y,style.maxWidth);break;case"stroke":ctx.strokeText(text[i],x,y,style.maxWidth);break;case"both":ctx.fillText(text[i],x,y,style.maxWidth);ctx.strokeText(text[i],x,y,style.maxWidth);break;default:ctx.fillText(text[i],x,y,style.maxWidth)}else switch(style.brushType){case"fill":ctx.fillText(text[i],x,y);break;case"stroke":ctx.strokeText(text[i],x,y);break;case"both":ctx.fillText(text[i],x,y);ctx.strokeText(text[i],x,y);break;default:ctx.fillText(text[i],x,y)}y+=lineHeight}ctx.restore()}},getRect:function(style){if(style.__rect)return style.__rect;var width=area.getTextWidth(style.text,style.textFont),height=area.getTextHeight(style.text,style.textFont),textX=style.x;"end"==style.textAlign||"right"==style.textAlign?textX-=width:"center"==style.textAlign&&(textX-=width/2);var textY;textY="top"==style.textBaseline?style.y:"bottom"==style.textBaseline?style.y-height:style.y-height/2;style.__rect={x:textX,y:textY,width:width,height:height};return style.__rect}};require("../tool/util").inherits(Text,Base);return Text});