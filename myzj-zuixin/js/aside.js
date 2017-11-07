$(".aside .person").hover(function(){
	$(this).find(".yonghu").css({"background":"#ff5c00","color":"white"});
	$(this).parent().find(".my").css({"display":"block"})
								.stop().animate({"left":"-288px"},300)
},function(){
	$(this).find(".yonghu").css({"background":"","color":""});
	$(this).parent().find(".my").css({"display":"none"})
								.stop().animate({"left":"-320px"},300)
})


$(".my i").click(function(){
	$(this).parent().parent().hide();
})

$(".my-two i").click(function(){
	$(this).parent().parent().hide();
})

$(".aside .shopCar").hover(function(){
	$(this).find(".number").css({"color":"white"});
	$(this).find("#p").css({"color":"white"});
	$(this).find(".icon-gouwuche").css({"color":"white"});
	$(this).css({"background":"#ff5c00"});
},function(){
	$(this).find(".number").css({"color":"#ff5c00"});
	$(this).find("#p").css({"color":"#535362"});
	$(this).find(".icon-gouwuche").css({"color":"#535362"});
	$(this).css({"background":""});
	$(this).children().css({"color":""});
})

$(".aside .shopCar").click(function(){
	$(this).parent().find(".my-cars").css({"display":"block"})
								.stop().animate({"left":"-288px"},300)
})
$(".my-cars .icon-chahao").click(function(e){
	var e = e || event;
	e.stopPropagation();
	$(this).parent().parent().css({"display":"none"})
		   .stop().animate({"left":"-320px"},300)
})


$(".aside .ewm").hover(function(){
	$(this).css({"background":"#ff5c00"});
	$(this).find(".erweima").css({"color":"white"});
},function(){
	$(this).css({"background":""});
	$(this).find(".erweima").css({"color":"#535362"});
})


$(".aside .wjx").hover(function(){
	$(this).css({"background":"#ff5c00"});
	$(this).find(".wujiaoxing").css({"color":"white"});
	$(this).parent().find(".my-two").css({"display":"block"})
								.stop().animate({"left":"-288px"},300)
},function(){
	$(this).css({"background":""});
	$(this).find(".wujiaoxing").css({"color":"#535362"});
	$(this).parent().find(".my-two").css({"display":"none"})
								.stop().animate({"left":"-320px"},300)
})

$(".aside .kefu").hover(function(){
	$(this).css({"background":"#ff5c00","color":"white"});
	$(this).parent().find(".my-kefu").css({"display":"block"})
								.stop().animate({"left":"-78px"},300)
},function(){
	$(this).css({"background":"","color":""});
	$(this).parent().find(".my-kefu").css({"display":"none"})
								.stop().animate({"left":"-100px"},300)
})
$(".my-kefu").hover(function(){
	$(this).find(".kf").css({"color":"#ff5c00"});
},function(){
	$(this).find(".kf").css({"color":"#535362"});
})

$(".aside .db").hover(function(){
	$(this).css({"background":"#ff5c00"});
	$(this).find(".dingbu").css({"color":"white"});
	$(this).parent().find(".my-top").css({"display":"block"})
								.stop().animate({"left":"-78px"},300);
},function(){
	$(this).css({"background":""});
	$(this).find(".dingbu").css({"color":"#535362"});
	$(this).parent().find(".my-top").css({"display":"none"})
								.stop().animate({"left":"-100px"},300);
})
$(".my-top").hover(function(){
	$(this).find(".call-back").css({"color":"#ff5c00"});
},function(){
	$(this).find(".call-back").css({"color":"#535362"});
})

	$(".db").click(function(){
		$("body,html").animate({"scrollTop":0},1000);
	})
	var flag = true;
	$(window).scroll(function(){
		if(flag){
			if($(document).scrollTop()>200){
				$(".asidepic").css({"display":"block","top":500+$(document).scrollTop()})
			}else{
				$(".asidepic").css({"display":"none","top":500})
			}
		}
		$(".asidepic i").click(function(){
			flag = false;
			$(this).parent().css("display","none");
		})
		if($(document).scrollTop()>550){
			$(".high").css({"display":"block","position":"fixed","top":0})
		}else{
			$(".high").css({"display":"none","position":"fixed","top":0});
		}
		
		
		var sTop = $("body,html").scrollTop();
		for(var i = 0 ; i < $(".detail .details").length ; i++){
			if(sTop >=  $(".detail .details").eq(i).offset().top-300 &&sTop <$(".detail .details").eq(i).offset().top-200+ ($(".detail .details").eq(i).height())){
				$(".louti li").eq(i).css({"background":"#ff5c00","color":"#fff"});
			}else{
				$(".louti li").eq(i).css({"background":"#fff","color":"#ff5c00"});
			}
		}
	})
	$(".louti li").click(function(){
		$(this).css({"background":"#ff5c00","color":"#fff"}).siblings().css({"background":"#fff","color":"#ff5c00"})
		$("body,html").animate({"scrollTop": $(".detail .details").eq( $(this).index() ).offset().top-50},1000)
	})
	$(".louti li").hover(function(){
		$(this).css({"background":"#ff5c00","color":"#fff"});
	},function(){
		$(this).css({"background":"#fff","color":"#ff5c00"});
	})
$(".ddlink").hover(function(){
	$(this).css({"border":"1px solid #ff5c00"})
	$(this).find("p").css({"display":"block","background":"#ff5c00"})
	$(this).find(".ddaa").css({"color":"white"});
	$(this).find("p").hover(function(){
		$(this).css({"background":"white"})
		$(this).find(".ddaa").css({"color":"#ff5c00"});
	},function(){
		$(this).css({"background":"#ff5c00"})
		$(this).find(".ddaa").css({"color":"white"});
	})
},function(){
	$(this).find("p").css({"display":"none"})
	$(this).css({"border":"1px solid transparent"})
})
$(".header-bottom .right .txt").focus(function(){
	$(this).val("");
})

$(".high .search .ipt").focus(function(){
	$(this).val("");
})