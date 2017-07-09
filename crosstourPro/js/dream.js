$(function () {
    getDreamAndComment();
    submitComment();
    flushCheckNO();
    $("#div_comment").css("display", "none");
})

function getDreamAndComment() {
        $.ajax({
            type: 'post',
            url: '/Ajax/AjaxCommon.ashx?method=getdream',
            async: true,
            success: function (result) {
                $(".page3Cont").empty();
                $(".page3Cont").append(result);
            }
        });
}

function getDreamInPopup(dreamId)
{
    if (dreamId != null) {
        $.ajax({
            type: 'post',
            url: '/Ajax/AjaxCommon.ashx?method=getdreamInPopup' + '&dreamId=' + dreamId,
            async: true,
            success: function (result) {
                var varry = result;
                var valueArray = varry.split('|');
                if (valueArray != null && valueArray.length >= 5) {
                    $(".tr-authorHeader img").attr("src", valueArray[0]);
                    $(".tr-authorName").html(valueArray[1]);
                    $(".tr-titleImpl").html(valueArray[2]);
                    $(".tr-titleImpl").attr("id", dreamId);
                    $(".zanCount").html(valueArray[3]);
                    $(".commentCount").html(valueArray[4]);
                }
            }
        });

        $.ajax({
            type: 'post',
            url: '/Ajax/AjaxCommon.ashx?method=getdreamComment' + '&dreamId=' + dreamId,
            async: true,
            success: function (result) {
                $('.scrollContainer').empty();
                $('.scrollContainer').append(result);
            }
        });
    }
}

function newWin(obj) {
    popupDiv('div_comment',obj);
}

function GetRequest() {
    var url = location.search; //获取url中"?"符后的字串 
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}

function bindZan(obj)
{
    if (typeof (obj) == "undefined") {
        return;
    }
    activityLink($(obj).parent().attr("value"), obj);
}

function showCommentInputDiv(obj)
{
    if (typeof (obj) == "undefined") {
        return;
    }
    $("#div_comment").css("display", "block");
    var vCommentDiv = $(obj).parent().attr("value");
    newWin(vCommentDiv);
    //var vCommentDiv = $(obj).parent().find("div");
    //if (vCommentDiv.css("display") == "none") {
    //    vCommentDiv.css("display", "block");
    //}
    //else {
    //    vCommentDiv.css("display", "none");
    //}
}

function CommentBtn(obj)
{
    if (typeof (obj) == "undefined") {
        return;
    }
    var v_comment = $(obj).parent().find("input[type='text']").val().trim();
    if (v_comment == null || v_comment == "")
    {
        alert("请输入您的评论内容");
        return;
    }
    else if (v_comment.length > 50)
    {
        alert("评论内容不能超过50字");
        return;
    }

    var  v_comment_in = encodeURIComponent(v_comment);
    var id = $(obj).parent().parent().attr("value");
    var html = "<div class=\"caseParah clearfix\"><div class=\"fl\"></div><div class=\"fr\">" + v_comment + "</div></div>";
    var v_case = $(obj).parent().parent().parent().find("div[class='dmCase']");
    var i_icon = v_case.find("i[class='dmIcons sanjIcon']");
    i_icon.after(html);
    $(obj).parent().find("input[type='text']").val("");

    $.ajax({
        type: "post",
        url: "/Ajax/AjaxCommon.ashx?method=inputComment&itemId=" + id + "&comment=" + v_comment_in,
        async: true,
        success: function (data) {
            if (data == "1") {
                alert("您的评论已提交，待审核通过正式展示");
            }
            else {
                alert("网络异常，请稍后再试");
            }
        }
    });
}

function submitComment()
{
    $(".tr-submit").on("click", function () {
        var nickName = encodeURIComponent($("#input_nickName")[0].value.trim());
        var checkNO = $("#input_checkNO")[0].value.trim();
        var txtComment = encodeURIComponent($("#txt_comment")[0].value.trim());
        if (nickName == "")
        {
            alert("请输入昵称");
            return;
        }

        if (checkNO == "")
        {
            alert("请输入验证码");
            return;
        }

        if (checkNO.toLocaleUpperCase() != $(".lab_checkNO").html())
        {
            alert("验证码不正确");
            return;
        }

        if (txtComment == "")
        {
            alert("请输入评论内容");
            return;
        }

        if (txtComment.length > 200)
        {
            alert("评论内容不超过200个字符");
            return;
        }

        var dreamId = $(".tr-titleImpl").attr("id");

        $.ajax({
            type: "post",
            url: "/Ajax/AjaxCommon.ashx?method=submitComment" + "&dreamId=" + dreamId + "&nickName=" + nickName +  "&txtComment=" + txtComment,
            async: true,
            success: function (data) {
                if (data == 1) {
                    alert("您的评论已提交，待审核通过显示");
                    flushCheckNO();
                    $("#txt_comment")[0].value = "";
                    //$("#div_comment").css("display","none");
                }
                else {
                    alert("网络异常，请稍后重试");
                }
            }
        });
    });
}

function flushCheckNO()
{
    $.ajax({
        type: "post",
        url: "/Ajax/AjaxCommon.ashx?method=updateCheckNO",
        async: true,
        success: function (data) {
            $(".lab_checkNO").html(data);
        }
    });
}

// 赞
function activityLink(itemID, targetObj) {
    var $support = $(targetObj);
    if ($support.attr("msg")) {
        alert($support.attr("msg"))
        return;
    }
    $.ajax({
        type: "post",
        url: "/Ajax/AjaxCommon.ashx?method=updateSupport&itemId=" + itemID,
        async: true,
        success: function (data) {
            var datas = data.split(';');
            zanInterval = datas[1];
            if (datas[0] == '-1') {
                $support.attr("msg", "您在" + zanInterval + "小时之内已经赞过了！");
                alert("您在" + zanInterval + "小时之内已经赞过了！");
            }
            else if (datas[0] == '0') {
                alert('系统异常，请刷新后重试！');
            }
            else {
                $support.find("span").first().html(datas[0].toString().trim());
                $support.find("i").css("background", "url(images/dmIcons_filled.png) 1px 2px  no-repeat");
                $support.attr("msg", "您在" + zanInterval + "小时之内已经赞过了！");
            }
        }
    });
}

function HandlePage(obj)
{
    if (typeof (obj) == "undefined") {
        return;
    }
    var pageIndex = 0;
    var pageValue = $(obj).html();
    if (pageValue == "上一页") {
        if ($(".pager .active").html() == "1")
        {
            alert("当前是第一页");
            return;
        }
        pageIndex = parseInt($(".pager .active").html()) - 1;
        $.ajax({
            type: 'post',
            url: '/Ajax/AjaxCommon.ashx?method=getdreamByPage' + "&pageIndex=" + pageIndex + "&direction=pre",
            async: true,
            success: function (result) {
                $(".page3Cont").empty();
                $(".page3Cont").append(result);
                if ($('.page3Cont').height() < 400) {
                    $('.page3Cont').addClass("lastPage");
                }
                else {
                    $('.page3Cont').removeClass("lastPage");
                }
            }
        });
        return;
    }
    else if (pageValue == "下一页")
    {
        pageIndex = parseInt($(".pager .active").html()) + 1;
        $.ajax({
            type: 'post',
            url: '/Ajax/AjaxCommon.ashx?method=getPageNum',
            async: true,
            success: function (result) {
                if (pageIndex > result) {
                    alert("当前是最后一页");
                    return;
                }
                else {
                    $.ajax({
                        type: 'post',
                        url: '/Ajax/AjaxCommon.ashx?method=getdreamByPage' + "&pageIndex=" + pageIndex + "&direction=next",
                        async: true,
                        success: function (result) {
                            $(".page3Cont").empty();
                            $(".page3Cont").append(result);
                            if ($('.page3Cont').height() < 400) {
                                $('.page3Cont').addClass("lastPage");
                            }
                            else {
                                $('.page3Cont').removeClass("lastPage");
                            }
                        }
                    });
                    return;
                }
            }
        });
        return;
    }
    else {
        pageIndex = parseInt($(obj).html());
    }
    $.ajax({
        type: 'post',
        url: '/Ajax/AjaxCommon.ashx?method=getdreamByPage' + "&pageIndex=" + pageIndex + "&direction=next",
        async: true,
        success: function (result) {
            $(".page3Cont").empty();
            $(".page3Cont").append(result);
            if ($('.page3Cont').height() < 400) {
                $('.page3Cont').addClass("lastPage");
            }
            else {
                $('.page3Cont').removeClass("lastPage");
            }
        }
    });
}

function popupDiv(div_id, dreamId) {

    //var div_obj = $("#" + div_id);
    //var windowWidth = document.body.clientWidth;
    //var windowHeight = document.body.clientHeight;
    //var popupHeight = div_obj.height();
    //var popupWidth = div_obj.width();
    ////添加并显示遮罩层   
    //$("<div id='mask'></div>").addClass("mask")
    //                          .width(windowWidth + document.body.scrollWidth)
    //                          .height(windowHeight + document.body.scrollHeight)
    //                          .click(function () { hideDiv(div_id); })
    //                          .appendTo("body")
    //                          .fadeIn(200);
    //div_obj.css({ "position": "absolute" })
    //       .animate({
    //           left: windowWidth / 2 - popupWidth / 2,
    //           top: windowHeight / 2 - popupHeight / 2, opacity: "show"
    //       }, "slow");

    getDreamInPopup(dreamId);
}
