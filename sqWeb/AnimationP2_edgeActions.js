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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 310, function(sym, e) {
         var winW = $(window).width(),winH = $(window).height();
         var slide = $(".EDGE-649668219").parents(".slide");
         $(window).resize(function(){
            var oldW = winW,oldH = winH;
            winW = $(window).width();
            winH = $(window).height();
            $(".EDGE-649668219>div").each(function(index,item){
               var x = parseFloat($(item).css("left").replace("px","")),y = parseFloat($(item).css("top").replace("px",""));
               x = x*winW/oldW;
               y = y*winH/oldH;
               $(item).css({left:x,top:y});
            });
         }).resize();

         $(".EDGE-649668219>div").each(function(index,item){
            var info = {
               x:parseFloat($(item).css("left").replace("%","").replace("px",""))/winW,
               y:parseFloat($(item).css("top").replace("%","").replace("px",""))/winH,
               vx:0,vy:0,
               sx:(Math.random()*0.2+0.2)/100,sy:(Math.random()*0.2+0.2)/100
            };
            $(item).data("info",info).css({left:info.x*winW+Math.random()*120-60, top:info.y*winH+Math.random()*100-50});
         });

         function render(){
            if (slide.length>0 && !slide.hasClass("active"))
               return;
            $(".EDGE-649668219>div").each(function(index,item){
               var info = $(item).data("info");

               var tx = info.x*winW;
               var x = parseFloat($(item).css("left").replace("px",""));
               var dx = tx - x;
               var ax = dx * info.sx;
               info.vx += ax;
               x += info.vx;


               var ty = info.y*winH;
               var y = parseFloat($(item).css("top").replace("px",""));
               var dy = ty - y;
               var ay = dy * info.sy;
               info.vy += ay;
               y += info.vy;

               $(item).css({left:x,top:y});
            });
         }
         setInterval(render,40);
      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
   })("Symbol_1");
   //Edge symbol end:'Symbol_1'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-649668219");