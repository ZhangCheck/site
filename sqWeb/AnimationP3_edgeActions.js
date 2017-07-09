/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         var winW = $(window).width(),winH=$(window).height();
         var slide = $(".EDGE-769030140").parents(".slide");
         $(window).resize(function(){
            var oldW = winW,oldH=winH;
            winW = $(window).width();
            winH = $(window).height();
            $(".EDGE-769030140>div").each(function(index,item){
               var x = parseFloat($(item).css("left").replace("px",""));
               x = x*winW/oldW;
               var y = parseFloat($(item).css("top").replace("px",""));
               y = y*winH/oldH;
               $(item).css({left:x,top:y});
            });
         }).resize();

         $(".EDGE-769030140>div").each(function(index,item){
            var info = {
               px:(parseFloat($(item).css("left").replace("%","").replace("px",""))+$(item).width()/2)/winW,
               py:(parseFloat($(item).css("top").replace("%","").replace("px",""))+$(item).height()/2)/winH,
               a:0.5,x:$(item).width(),y:$(item).height(),
               vx:0,vy:0,va:0,mx:0,my:0,
               sx:0.002,sy:0.002,sa:0.002//(Math.random()*0.2+0.2)/100,sy:(Math.random()*0.2+0.2)/100,sa:(Math.random()*0.2+0.2)/100
            };
            var scale = Math.random()*0.5+0.7;
            $(item).data("info",info).css({
               opacity:Math.random()<0.5?1:0,
               width:$(item).width()*scale,
               height:$(item).height()*scale
               //left:info.x*winW+Math.random()*120-60,top:info.y+Math.random()*100-50
               });
         });

         function render(){
            if (slide.length>0 && !slide.hasClass("active"))
               return;
            $(".EDGE-769030140>div").each(function(index,item){
               var info = $(item).data("info");

               var tx = info.x;
               var x = parseFloat($(item).css("width").replace("px",""));
               var dx = tx - x;
               var ax = dx * info.sx;
               info.vx += ax;
               x += info.vx;
               var left = info.px*winW + info.mx - x/2;


               var top = info.py*winH +info.my - x/2;

               var ta = info.a;
               var a = parseFloat($(item).css("opacity"));
               var da = ta - a;
               var aa = da * info.sa;
               info.va += aa;
               a += info.va;
               if(a<=0.0001){
                  info.mx =  Math.random()*80-80;
                  info.my =  Math.random()*80-80;
               }

               $(item).css({width:x,height:x,left:left,top:top,opacity:a});//
            });
         }
         setInterval(render,40);
      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-769030140");