/**
 * @Name:			main.js
 * @Introduction:
 * @Author：		    sunlei
 * @Time:
 */
var EIOC = 'easeInOutCirc';
;(function($){
    $.main = $.main || {};
    $.main = {
        //初始化函数
        inits:function(){
          this.otherFun();
          this.indexFun();
          this.fullScreenVideo();
        },
        runPage:null,
        menuReady:false,
        toRight:function (targets,time,end){
            $(targets).each(function(index,element){
                $(element).css({"margin-left":-$(element).width(),opacity:0})
                $(element).delay(time*index).animate({"margin-left":0,opacity:1},time);
            })
            setTimeout(end,time*targets.length);
        },
        //四个角
        corners:function () {
        //四个角效果
        $('.ltLogo').animate({top:0,left:0,opacity:1},1200,EIOC);
        $('.rtLogo').animate({top:0,right:0,opacity:1},1200,EIOC);
        $('.btmApply').animate({bottom:0,left:0,opacity:1},1200,EIOC);


        $('#fullScreenBtn .img-responsive').animate({opacity:1},600,EIOC,function(){
            $('.navBar-wrap').add('.navBar-normal').css({right:"-400px",display:"block"});

            $('.navBar-wrap').animate({right:0},1200,EIOC,function(){
                if($('.navBar-area:hover').length==0){
                    $('.navBar-wrap').delay(1000).animate({right:"-400px"},400,EIOC);
                    $('.navBar-normal').delay(1000).animate({right:"0px"},600,EIOC,function(){
                        $.main.menuReady = true;
                    });
                    //$('#fullScreenBtn .img-responsive').click();
                }else{
                    $.main.menuReady = true;
                    //$('#fullScreenBtn .img-responsive').click();
                }
            });

        })
    },
        otherFun:function() {
            //引导页动画控制
            setTimeout(function() {
                $('.guideWrap .guideRt').animate({right:'-60%'},4000,'easeOutCubic',function() {
                    window.location.href = "index.html";
                });
                $('.guideWrap .guideLt').animate({left:'-70%'},4000,'easeOutCubic');
                $('.guideBody').addClass('guideBody-bg');
            },3000);

            $('.guideLt , .guideRt, .guideBody').height($(window).height());
            $(window).resize(function() {
                $('.guideLt , .guideRt, .guideBody').height($(window).height());
            });


            //降落伞效果
            if($('.parachute-wrap').length>0){
                $('.parachute-wrap').css({left:"-38%",bottom:"-38%"}).animate({bottom:'18%',left:'3%',opacity:1},1600,'easeOutCubic',
                    $.main.corners );
            }else{
                $('.v2Right').css({opacity:0}).load(function () {
                        $(this).animate({opacity: 1}, 1000);
                    });
                $('.img-responsive').load(function () {
                    $(this).css({opacity:0}).animate({opacity: 1}, 500);
                });
                $.main.toRight([".v2PreTitle:eq(0)",".v2PreTitle:eq(1)",".v2Subtitle",".img-responsive"],300, $.main.corners);
            }


            //菜单移上去效果

            $('.navBar-area').hover(
                function (e) {
                    e.stopPropagation();
                    if(!$.main.menuReady) return;

                    $('.navBar-wrap').animate({right:"0px"},600,EIOC);
                    $('.navBar-normal').animate({right:"-400px"},400,EIOC);
                },
                function () {
                    if(!$.main.menuReady) return;
                    $('.navBar-wrap').animate({right:"-400px"},400,EIOC);
                    $('.navBar-normal').animate({right:"0px"},600,EIOC);
                }
            );

            //tab
            var $p4titles = $('.page4Rt .p4Tab li');
            var $p4conts = $('.page4Rt .tabCont .pConts');
            $p4titles.first().addClass("on").siblings().removeClass("on");
            $p4conts.first().show().nextAll().hide();
            $p4titles.each(function(index) {
                $(this).click(function() {
                    $(this).addClass("on").siblings().removeClass("on");
                    $p4conts.eq(index).show().siblings().hide();
                });
            });

            //page5 left panel
            $('.cc1').click(function(){
                $('.spot, .spots span').removeClass('active');
                $('.spot1').addClass('active');
                $('.cc1, .cc2').addClass('hide');
                $(this).addClass('active');
            });

            $('.cc2').click(function(){
                $('.spot, .spots span').removeClass('active');
                $('.spot2').addClass('active');
                $('.cc1, .cc2').addClass('hide');
                $(this).addClass('active');
            });

            $('.cc3').click(function(){
                $('.spot, .spots span').removeClass('active');
                $('.spot3').addClass('active');
                $('.cc1, .cc2').addClass('hide');
                $(this).addClass('active');
            });

            $('.cc4').click(function(){
                $('.spot, .spots span').removeClass('active');
                $('.spot4').addClass('active');
                $('.cc1, .cc2').addClass('hide');
                $(this).addClass('active');
            });

            $('.cc5').click(function(){
                $('.spot, .spots span').removeClass('active');
                $('.spot5').addClass('active');
                $('.cc1, .cc2').addClass('hide');
                $(this).addClass('active');
            });

            $('.spot em').click(function(){
                $('.cc1, .cc2').removeClass('hide');
                $('.spot, .spots span').removeClass('active');
            });

        },

        //主页效果
        indexFun:function() {
            $(".joinCon").hover(function(){

                console.log("good");
                $(".btmApply").stop().animate({left:-130},500,EIOC);
                $('.D2Code').css({opacity:0}).stop().show().animate({opacity:1},500,EIOC);
            },function(){
                console.log("good out");
                $(".btmApply").stop().animate({left:0},500,EIOC);
                $('.D2Code').stop().animate({opacity:0},500,EIOC,function(){$(this).hide()});
            })
            $(".videoWin .vp-close").click(function(){
                $(".videoWin").animate({opacity:0},600,EIOC,function(){$('.videoWin').hide()});
                $('#fullScreenBtn .img-responsive').stop().css({bottom:35}).delay(300).animate({opacity:1},600,EIOC,function(){
                            //$(this).css({bottom:-100});
                        });
                var player = videojs("videoPlayer");
                player.pause();        
            });
            $('#fullScreenBtn .img-responsive').click(function(){
                $(this).animate({opacity:0},500,EIOC);    
                $(".videoWin").show().css({opacity:0}).animate({opacity:1},600,EIOC);
            })

            //todo:临时废止某个菜单项
            $('.pageIcon3').click(function(e){
                   e.stopPropagation();
            })

            runPage = new FullPage({
                id: 'pageContain',
                slideTime: 800,
                effect: {
                    transform: {
                        translate: 'Y'
                    },
                    opacity: [0, 1]
                },
                mode: ' touch, nav:navBar',
                easing: 'ease',
                callback: function(index){
                    var $videoNav = $('#navBar li.pageIcon6');
                    $('.navBar-normal').find("img").removeClass("active").eq(index).addClass("active");
                    $('.videoWin').animate({opacity:0},500,EIOC,function(){$(this).hide()});
                    $('#fullScreenBtn .img-responsive').animate({opacity:0},500,EIOC,function(){
                        $(this).css({bottom:-100});
                    });
                    
                    if(index==0){
                        //$videoNav.show();
                        $('.parachute-wrap').css({left:"-38%",bottom:"-38%"}).animate({bottom:'18%',left:'3%',opacity:1},1600,'easeOutCubic');
                        $('#fullScreenBtn .img-responsive').stop().css({bottom:35}).delay(300).animate({opacity:1},600,EIOC,function(){
                            //$(this).css({bottom:-100});
                        });
                        $(window).resize();
                    }else if(index==1){
                        //page2效果
                        $videoNav.hide();
                        //var overNav;
                        $(".p2RightCon").hover(function(){
                            $('.v2Right').show().stop().animate({opacity:0},300);
                            $('.v2RightOver').show().css({opacity:0}).stop().animate({opacity:1},300);
                        },function(e){
                            if(e.clientX<$('.v2RightOver').position().left){
                                $('.v2Right').show().stop().animate({opacity:1},300);
                                $('.v2RightOver').show().stop().animate({opacity:0},300);
                            }
                        });

                        $('.v2Right').css({opacity:0}).animate({opacity:1},500);
                        $.main.toRight([".v2PreTitle:eq(0)",".v2PreTitle:eq(1)",".v2Subtitle",".img-responsive"],300, $.main.corners);

                        $('.page2 .contain').animate({right:0,opacity:1},1200,'easeInOutQuint',function() {
                            if($(window).width()>1400){
                                $('.page2Lt').show().animate({left:'52%',marginLeft:-$('.page2Lt').width(),opacity:1},1000,'easeInOutQuint');
                                $('.page2Rt').show().animate({right:'50.8%',marginRight:-$('.page2Rt').width(),opacity:1},1000,'easeInOutQuint');
                            }else{
                                $('.page2Lt').show().animate({left:'52%',marginLeft:-$('.page2Lt').width(),opacity:1},1000,'easeInOutQuint');
                                $('.page2Rt').show().animate({right:'51%',marginRight:-$('.page2Rt').width(),opacity:1},1000,'easeInOutQuint');
                            }
                        });
                        $(".v2ActiveArea").width($('.v2RightOver').width()).height($('.v2RightOver').height());
                    }else if(index==2){
                        //page3效果
                        $videoNav.hide();
                        $('.page3 .contain').animate({right:0,opacity:.8},1300,'easeInOutCubic',function() {
                            if($(window).height()>700){
                                $('.page3Cont').fadeIn(600).animate({bottom:'20%',opacity:1},1000,'easeInOutBack');
                            }else{
                                $('.page3Cont').fadeIn(600).animate({bottom:'2%',opacity:1},1000,'easeInOutBack');
                            }
                        });
                    }else if(index==3){
                        //page4效果
                        $videoNav.hide();
                        $('.page4 .page4Rt').animate({bottom:0},1200,EIOC,function() {
                            $('.page4 .p4Tab').animate({bottom:'40%',opacity:1},1200,EIOC);
                            $('.page4Lt img').fadeIn(500).animate({right:'-16%',opacity:1},1300,EIOC);
                        });
                    }else if(index==4){
                        //page5效果
                        $('#fullScreenBtn .img-responsive').stop().css({bottom:35}).delay(300).animate({opacity:1},600,EIOC,function(){
                            //$(this).css({bottom:-100});
							setTimeout(function(){$('.cc4').click()},1000);
                        });
						
                        $videoNav.hide();
                    }
                }
            });

            $('#myMap area').click(function(){
                runPage.go(1);
            })
        },
        fullScreenVideo:function() {

            //反射調用
            var invokeFieldOrMethod = function(element, method)
            {
                var usablePrefixMethod;
                ["webkit", "moz", "ms", "o", ""].forEach(function(prefix) {
                    if (usablePrefixMethod) return;
                    if (prefix === "") {
                        // 无前缀，方法首字母小写
                        method = method.slice(0,1).toLowerCase() + method.slice(1);
                    }
                    var typePrefixMethod = typeof element[prefix + method];
                    if (typePrefixMethod + "" !== "undefined") {
                        if (typePrefixMethod === "function") {
                            usablePrefixMethod = element[prefix + method]();
                        } else {
                            usablePrefixMethod = element[prefix + method];
                        }
                    }
                });

                return usablePrefixMethod;
            };

            //進入全屏
            function launchFullscreen(element)
            {
                //此方法不可以在異步任務中執行，否則火狐無法全屏
                if(element.requestFullscreen) {
                    element.requestFullscreen();
                } else if(element.mozRequestFullScreen) {
                    element.mozRequestFullScreen();
                } else if(element.msRequestFullscreen){
                    element.msRequestFullscreen();
                } else if(element.oRequestFullscreen){
                    element.oRequestFullscreen();
                }
                else if(element.webkitRequestFullscreen)
                {
                    element.webkitRequestFullScreen();
                }else{

                    var docHtml  = document.documentElement;
                    var docBody  = document.body;
                    var videobox  = document.getElementById('videobox');
                    var  cssText = 'width:100%;height:100%;overflow:hidden;';
                    docHtml.style.cssText = cssText;
                    docBody.style.cssText = cssText;
                    videobox.style.cssText = cssText+';'+'margin:0px;padding:0px;';
                    document.IsFullScreen = true;

                }
            }

            //退出全屏
            function exitFullscreen()
            {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if(document.oRequestFullscreen){
                    document.oCancelFullScreen();
                }else if (document.webkitExitFullscreen){
                    document.webkitExitFullscreen();
                }else{
                    var docHtml  = document.documentElement;
                    var docBody  = document.body;
                    var videobox  = document.getElementById('videobox');
                    docHtml.style.cssText = "";
                    docBody.style.cssText = "";
                    videobox.style.cssText = "";
                    document.IsFullScreen = false;
                }
            }
            document.getElementById('fullScreenBtn').addEventListener('click',function(){
               // $('.videoWin').animate({opacity:1},500,EIOC)
               var player = videojs('videoPlayer');
               player.play();
               player.requestFullScreen();
               player.on("fullscreenchange",function(){
                       if(!player.isFullScreen()){
                            $(".videoWin .vp-close").click();
                       }
               })
               player.on("ended",function(){
                       player.cancelFullScreen();
                       $(".videoWin .vp-close").click();
               })
            },false);


        }

    };
    $.extend($.fn,$.main);

    //DOM载入就绪执行
    $(function(){
        // For CKCSS, if IE, adjust Justify Layout table-cell height
        if (!!window.ActiveXObject || "ActiveXObject" in window){
            $(window).resize(function(e){
                $('.justifies>div>.jf-bg').each(function(i,d){
                    $(d).height($(this).parents(".justifies:first").height());
                })
            }).resize();

            if (/*@cc_on!@*/true) {
                $("html").addClass( 'ie' + document.documentMode);
            }
        }

        //init
        $.main.inits();

    });

})(jQuery);
