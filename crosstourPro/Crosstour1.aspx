<%@ Page language="c#" Codepage="65001" AutoEventWireup="true" %>
<%@ OutputCache Location="None" VaryByParam="none" %>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"">
    <title>歌诗图</title>
    <link href="mobile/css/main.css" rel="stylesheet">
	<link href="mobile/css/portrait.css" media="all and (orientation:portrait)" rel="stylesheet">
	<link href="mobile/css/landscape.css" media="all and (orientation:landscape)" rel="stylesheet">
</head>
<body>
	<div class="tl">
		<!--左侧顶部logo-->
		<a href="http://www.ghac.cn" target="_blank" class="ltLogo"><img class="img-responsive" src="mobile/images/ltLogo.png" alt=""/></a>
	</div>
	<div class="tr">
		<!--右侧顶部logo-->
		<a href="http://www.ghac.cn/vehicles/honda/crosstour" target="_blank" class="rtLogo"><img class="img-responsive" src="mobile/images/vehicleLogo.png" alt=""/></a>
		<a href="javascript:void(0)" class="bars fr"></a>
	</div>
	<div class="br">
		<!--右侧底部-->
		<img src="mobile/images/br.png" alt="" />
	</div>
	<div id="nav">
		<ul>
			<li class="active"><a href="mobile/Crosstour1.aspx">首页</a></li>
			<li><a href="mobile/page2.html">敢性出发</a></li>
			<li><a href="mobile/page3.html">梦想世界</a></li>
			<li><a href="javascript:void(0)" style="color: gray">星谈敢性</a></li>
			<li><a href="mobile/page5.html">歌诗图</a></li>
		</ul>
		<div class="book-btn"><a href="##">即刻报名<em></em></a></div>
	</div>
<div class="mainContent">
	<!--降落伞-->
    <div class="parachute-wrap"><img class="img-responsive" src="mobile/images/parachute.png" alt=""/></div>
	<div class="page1Txt">
		<img class="img-responsive" src="mobile/images/page1BlueTxt.png" alt=""/>
		<div class="parah-wrap">
			<p>
				每个人心中都有一个跳脱世俗、映射真我的梦想<br />
				正是如此，使我们成为独一无二、与众不同的人
			</p>
			<p>
				当我们走过一段又一段的路，做过一个又一个的选择<br />
				在不得不有过退让和妥协之后发现<br />
				我们与最初的梦想渐行渐远
			</p>
		</div>
	</div>
	<div class="videoNav"><img class="img-responsive" src="mobile/images/videoNav.png" /></div>	
</div> 
    
<div class="videowrap">
	<div class="close"><img src="mobile/css/images/close.png" alt="" /></div>
	<video controls>
		<source src="mobile/video/mov_bbb.mp4" type="video/mp4" />
		<object data="mobile/video/mov_bbb.mp4">
			<embed src="mobile/video/mov_bbb_clip.flv" />
		 </object>
	</video>	
</div>
</div>
<!-- 外部js -->
<script src="mobile/js/frame/jquery-1.11.1.min.js"></script>
<script src="mobile/js/main.js"></script>

</body>
</html>
