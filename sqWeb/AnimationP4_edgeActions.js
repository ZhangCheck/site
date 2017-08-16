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
         var winW = $(window).width(), winH = $(window).height();
         var slide = $(".EDGE-811303426").parents(".slide");
         $(window).resize(function(){
            var oldW = winW;
            winW = $(window).width();
            winH = $(window).height();
            $(".EDGE-811303426>div").each(function(index,item){
               var x = parseFloat($(item).css("left").replace("px",""));
               x = x*winW/oldW;
               $(item).css("left",x);
            });
         }).resize();

         $(".EDGE-811303426>div").each(function(index,item){
            var info = {
               px:(parseFloat($(item).css("left").replace("%","").replace("px",""))+$(item).width()/2)/winW,
               vx:Math.random()*9+1,mx:0
            };
            $(item).data("info",info);
         });

         function render(){
            if (slide.length>0 && !slide.hasClass("active"))
               return;
            $(".EDGE-811303426>div").each(function(index,item){
               var info = $(item).data("info");

               var tx = info.y;
               var x = parseFloat($(item).css("top").replace("px",""));
               x += info.vx;
               var left = info.px*winW + info.mx;


               if(x>winH){
                  info.mx =  Math.random()*80-80;
                  x = -$(item).height();
               }

               $(item).css({left:left+"px",top:x+"px"});//
            });
         }
         setInterval(render,40);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-811303426");