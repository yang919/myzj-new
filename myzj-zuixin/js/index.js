
	var timer = setInterval(autoPlay,2000);
	var $olist = $(".bt li");
	var $ulist = $(".nv");
	var index = 0;
	function autoPlay(){
		index ++;
		if( index == $olist.size() ){
			index = 0;
		}
		$olist.eq(index).addClass("active").siblings().removeClass("active");
		$ulist.animate({"left":-index*$(".bannerbox").width()},500)
	}
	$(".bt li").hover(function(){
		clearInterval(timer);
		index = $(this).index()-1;
		autoPlay();
	},function(){
		timer = setInterval(autoPlay,2000);
	})
	$.ajax({
		type:"get",
		url:"../js/data.json",
		success:function(json){
			var str1 = "";
			var str2 = "";
			var html1 = "";
			var html2 ="";
			str1 = ` <div class="empty"></div>
					 <div class="title">
						<p class="ch">${json["title1"].ch}<span>${json["title1"].sp}</span></p>
						<p class="eng">${json["title1"].eng}</p>
					 </div>`;
			for(var i = 0 ; i < json["title1"].list.length;i++){
				var item = json["title1"].list[i];
				html1 += `<div class="content">
								<div class="left"><img src="../Index-img/${item.src}"/></div>
								<div class="right">
									<a href="page.html" class="a" title="${item.link}">${item.link}</a>
									<p class="txt1">${item.txt}</p>
									<p class="txt2">￥<span>${item.price}</span>起<a href="#"><span>点击进入</span></a></p>
								</div>
						  </div>`;
			}
			for(var i = 0 ; i < json["title2"].list.length;i++){
				var item = json["title2"].list[i];
				html2 += `<div class="content new">
								<div class="left"><img src="../Index-img/${item.src}"/></div>
								<div class="right">
									<a href="#" class="free">赠品</a>
									<a href="page.html" class="a" title="${item.link}">${item.link}</a>
									<p class="txt1">${item.txt}</p>
									<P class="txt3">母婴之家发货</P>
									<p class="txt2">￥<span>${item.price}</span>起<a href="#"><span>点击进入</span></a></p>
								</div>
						  </div>`;
			}
			$(".detail-one").find(".bottom").html(html1);
			$(".detail-two").find(".bottom").html(html2);
			str2 = ` <div class="empty"></div>
					 <div class="title">
						<p class="ch">${json["title2"].ch}<span>${json["title2"].sp}</span></p>
						<p class="eng">${json["title2"].eng}</p>
					 </div>`;
			$(".detail-one .top").html(str1);
			$(".detail-two .top").html(str2);
		}
	})
