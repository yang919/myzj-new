$("#bottom li").mouseenter(function(){
 		var index = $(this).index()-1;
 		$(this).css({"border-color":"#ff5c00"}).siblings().css({"border-color":"#f1f1f1"});
 		$("#small img").eq(index).show().siblings().hide();
 		$("#big img").eq(index).show().siblings().hide();
 	})
 	$("#small").mouseover(function(){
 		$("#big").show();
 		$("#mask").show();
 	})
 	$("#small").mouseout(function(){
 		$("#big").hide();
 		$("#mask").hide();
 	})
 	$("#small").mousemove(function(e){
 		var e = e || event;
 		var x = e.pageX - $("#mask").width()/2 - $(".section-bottom-left").offset().left;
 		var y = e.pageY - $("#mask").height()/2 - $(".section-bottom-left").offset().top;
 		var maxL = $("#small").width() - $("#mask").width();
 		var maxT = $("#small").height() - $("#mask").height();
 		x = Math.min( maxL, Math.max(0,x) );
 		y = Math.min( maxT, Math.max(0,y) );
 		$("#mask").css({
 			"left" : x,
 			"top" :y
 		})
 		var bigImgx = x * $(".bigImage").width()/$("#mm").width();
 		var bigImgy = y * $(".bigImage").height()/$("#mm").height();
 		$(".bigImage").css({
 			"left" : -bigImgx,
 			"top" :  -bigImgy
 		})
 		$(".bigImage").css({"z-index":1});
 	})
 	


//分享的显示和隐藏
$(".outlinks .share").hover(function(){
	$(this).find("dl").css({"display":"block"});
},function(){
	$(this).find("dl").css({"display":"none"});
})


//l领取小图标显示和隐藏
$(".free-good").hover(function(){
	$(this).children("p").stop().animate({"top":44},500);
},function(){
	$(this).children("p").stop().animate({"top":70},500);
})

//赠品图片的显示和隐藏   ---- 展开和收起
$(".title").click(function(){
	if($(this).find(".look").css("display")=="none"){
		$(this).find(".look").css({"display":"block"});
		$(this).find(".slow").css({"display":"none"});
	}else{
		$(this).find(".slow").css({"display":"block"});
		$(this).find(".look").css({"display":"none"});
	}
	$(this).parent().find(".free-pics").toggle()
})

//按钮控制图片的版块切换
var target = 0;
$(".a1").click(function(){
	if(target >= 0){
		target = -$(this).parent().parent().find(".outbox").height();
	}
	target += 88;
	$(this).parent().parent().find(".outbox").animate({"top":target},1000)
	
})
$(".a2").click(function(){
	
	if(target <= -$(this).parent().parent().find(".outbox").height()+88){
		target = 88;
	}
	target -= 88;
	$(this).parent().parent().find(".outbox").animate({"top":target},1000)
	
	
})

//客户端二维码
$(".phonemenu").hover(function(){
	$("#app").css({"display":"block"});
},function(){
	$("#app").css({"display":"none"});
})

//加入购物车的遮罩层

$(".join-car").hover(function(){
	$(this).find(".zzc").css({"display":"block"});
},function(){
	$(this).find(".zzc").css({"display":"none"});
})


//评论有下划线
$(".goodtalk .talk").find("span").hover(function(){
	$(this).css({"text-decoration":"underline"});
},function(){
	$(this).css({"text-decoration":"none"});
})

//发表咨询的遮罩层
$(".ask").hover(function(){
	$(this).find(".zzc").css({"display":"block"});
},function(){
	$(this).find(".zzc").css({"display":"none"});
})




//左边浏览记录垂直滚动条的拖拽
//垂直滚动条的出现


//$(".pros-content").mouseenter(function(){
//	$(".pro-aside").css({"display":"block"});
//	
//})
//$(".pros-content").mouseleave(function(){
//	setTimeout(function(){
//		$(".pro-aside").css({"display":"none"});
//	},3000)
//})



$(".scroll-line").mousedown(function(e){
	var e = e || event;
	var disy = e.offsetY + $(".pros-content").offset().top;
	 $(document).mousemove(function(e){
		window.getSelection().removeAllRanges();
		var e = e || event;
		var y = e.pageY - disy;
		var maxT = $(".pro-aside").height() - $(".scroll-line").height();
		if( y < 0 ){
			y = 0;
		}else if( y > maxT ){
			y = maxT;
		}
		$(".scroll-line").css({"top":y+"px"});
		var contentScrollTop = $(".scroll-line").position().top * ($(".pros-box").height() - $(".pros-content").height())/maxT;
		$(".pros-box").css({"top":-contentScrollTop+"px"});
	})
})
$(document).mouseup(function(){
	 $(document).unbind("mousemove");
})


