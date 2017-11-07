//最大的tab栏出现和隐藏

$(".side ul li").mouseover(function(){
	$(this).find(".links").css({"display":"block","border":"1px solid #ff5c00","z-index":-1,"left":141});
	$(this).find(".li").css({"border":"1px solid #ff5c00","border-right-color":"white","width":140});
	$(this).find(".li").css({"z-index":10});
})
$(".navcontent").mouseover(function(){
	$(".all").css("background","url(../Index-img/22.jpg) no-repeat 110px center");
	$(".side").css({"display":"block","z-index":2})
})

$(".side ul li").mouseout(function(){
	$(this).find(".li").css({"border":"1px solid transparent","width":139});
	$(this).find(".links").css({"display":"none","border":"1px solid transparent","z-index":120,"left":140});
})
$(".navcontent").mouseout(function(){
	$(".all").css("background","url(../Index-img/21.jpg) no-repeat 110px center");
	$(".side").css({"display":"none"});
	//$(this).find(".li").css({"border-right-color":"white"});
})


//手机图标的切换

$(".header-top .left .lastbox").mouseover(function(){
	$(this).find("span").stop().animate({"background-position-y":-20},200)
	$(this).find("span").css("color","#ff5c00");
	$(this).find(".pic").css({"display":"block","border":"1px solid #ff5c00"});
	$(this).find(".last").css({ 'border':'1px solid #ff5c00',"height":"34px",
                            'border-bottom':"1px solid white", "background":"white"});
}).mouseout(function(){
    $(this).find("span").stop().animate({"background-position-y":6},200)
	$(this).find("span").css("color","");
	$(this).find(".pic").css({"display":"none","border":"1px solid transparent"});
	$(this).find(".last").css({ 'border':'1px solid transparent',"height":"31px",
                             "background":""});
})



//nav的直邮的显示和隐藏

$(".nav .navs .more").hover(function(){
	$(this).find("ul").css({"display":"block","background":"white","border":"1px solid #ff5c00","border-top-color":"white"});
	$(this).css({"border":"1px solid #ff5c00"})
},function(){
	$(this).find("ul").css({"display":"none","border":"1px solid transparent"});
	$(this).css({"border":"1px solid transparent"})
})

//头部小三角的切换
$(".header-top .right .one").hover(function(){
	$(this).find(".link").stop().animate({"background-position-y":-20},300)
	$(this).find("ul").css({"display":"block"});
},function(){
	$(this).find(".link").stop().animate({"background-position-y":5},300)
	$(this).find("ul").css({"display":"none"});
})


