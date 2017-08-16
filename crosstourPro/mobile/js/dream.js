$(function () {
    getDreamAndComment();
    getMore();
    
    submitComment();
    flushCheckNO();
    
})

function getDreamAndComment() {
        $.ajax({
            type: 'post',
            url: '/Ajax/AjaxCommon.ashx?method=getdreamInPhone'+'&pageIndex=1',
            async: true,
            success: function (result) {
                $(".dreamlist").empty();
                $(".dreamlist").append(result);
            }
        });
}

function showComment(obj)
{
    if (typeof (obj) == "undefined") {
        return;
    }

    var parentValue = $(obj).parent().attr("value");
    $('.msgbox').attr('value', parentValue);
    $('.msgbox').addClass('open');
}

function getMore()
{
    $(".loadMore").on("click", function () {
        var pageIndex = parseInt($(".loadMore").attr("title"));
        $.ajax({
            type: 'post',
            url: '/Ajax/AjaxCommon.ashx?method=getdreamInPhone' + '&pageIndex=' + pageIndex,
            async: true,
            success: function (result) {
                if (result == "")
                {
                    alert("没有更多了，请稍后再试...");
                    return;
                }
                $(".dreamlist").append(result);
                pageIndex = pageIndex + 1;
                $(".loadMore").attr("title", pageIndex);
            }
        });

    });
}


function bindZan(obj)
{
    if (typeof (obj) == "undefined") {
        return;
    }
    activityLink($(obj).parent().attr("value"), obj);
}

 

function submitComment()
{
    $(".tr-submit").on("click", function () {
        var nickName = encodeURIComponent($("#input_nickName")[0].value);
        var checkNO = $("#input_checkNO").html();
        var txtComment = encodeURIComponent($("#textarea")[0].value);
        if (nickName == "")
        {
            alert("请输入昵称");
            return;
        }

        if ($(".verCode .inputTxt")[0].value == "")
        {
            alert("请输入验证码");
            return;
        }

        if (checkNO != $(".verCode .inputTxt")[0].value)
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

        var dreamId = $('.msgbox').attr('value');

        $.ajax({
            type: "post",
            url: "/Ajax/AjaxCommon.ashx?method=submitComment" + "&dreamId=" + dreamId + "&nickName=" + nickName +  "&txtComment=" + txtComment,
            async: true,
            success: function (data) {
                if (data == 1) {
                    alert("您的评论已提交，待审核通过显示");
                    flushCheckNO();
                    $("#textarea").val("");
                    $(".verCode .inputTxt").val("");
                    //$('.videowrap').removeClass('open');
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


