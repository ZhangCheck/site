/**
 * @Name:			main.js
 * @Introduction:
 * @Author：		    sunlei
 * @Time:
 */

;(function($){
    $.main = $.main || {};
    $.main = {
        //初始化函数
        inits:function(){
          this.otherFun();
        },

        otherFun:function() {
			$('body').height($(window).height());
			
			//nav 
			$('.bars').click(function(){
				$('#nav').addClass('open');
			});
			$('#nav a').click(function(){
				$('#nav').removeClass('open');
			});
			
			//video
			$('.videoNav, .video').click(function(){
				$('.videowrap').addClass('open');
			});
			$('.videowrap .close').click(function(){
				$('.videowrap').removeClass('open');
			});
			
			//p3 message box
			$('.iconInfo .msgIcon').click(function(){
				$('.msgbox').addClass('open');
			});
			$('.msgbox .close').click(function(){
				$('.msgbox').removeClass('open');
			});
			
			//p5 pop
			$('.p5btn').click(function(){
				$('.p5pop').addClass('open');
			});
			$('.p5pop .close').click(function(){
				$('.p5pop').removeClass('open');
			});
			
			//tab
            var $p4titles = $('.p4Tab li');
            var $p4conts = $('.tabCont .pConts');
            $p4titles.first().addClass("on").siblings().removeClass("on");
            $p4conts.first().show().nextAll().hide();
            $p4titles.each(function(index) {
                $(this).click(function() {
                    $(this).addClass("on").siblings().removeClass("on");
                    $p4conts.eq(index).show().siblings().hide();
                });
            });
           //portrait
			if(window.innerHeight > window.innerWidth){
				
				/* alert(333); */
				//降落伞效果
				$('.parachute-wrap').addClass('por_moved');
			}
			//landscape
			else {
				//降落伞效果
				$('.parachute-wrap').addClass('land_moved');
			}
        },
        
    };
    $.extend($.fn,$.main);

    //DOM载入就绪执行
    $(function(){
        $.main.inits();
    });

})(jQuery);
