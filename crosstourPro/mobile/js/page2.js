toRight = function (targets,time,end){
    $(targets).each(function(index,element){
        $(element).css({"margin-left":-$(element).width(),opacity:0})
        $(element).delay(time*index).animate({"margin-left":0,opacity:1},time);
    })

    if(end) setTimeout(end,time*targets.length);
};
$(function () {
    toRight([".v2PreTitle:eq(0)",".v2PreTitle:eq(1)",".v2Subtitle",".img-responsive",".parah-wrap"],300);
    $('.v2Bottom').css({bottom:-$('.v2Bottom').height()}).delay(1200).animate({bottom:0},500);
})