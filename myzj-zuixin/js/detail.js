//购物车弹出框
$(".header .header-bottom .shopcars").hover(function(){
	$(".shopp").css({"display":"block"});
},function(){
	$(".shopp").css({"display":"none"});
})


//ul li的点击变化

//商品标题
//商品评论标题
//商品咨询标题

$(".ull li").click(function(){
	if($(this).index()==0){
		$(this).parent().css({"border-left":"0"});
	 }else{
	 	$(this).parent().css({"border-left":"1px solid #ddd"});
	 }
	 
		$(this).css({"border-top":"2px solid #ff5c00",
				 "border-left":"1px solid #ddd", 
				 "border-right":"1px solid #ddd",
				 "border-bottom":"1px solid white",
				 "height":"32px",
				"top":"-4px",
				"background":"white"
				})
		    .siblings()
		    .css(
		    	{"border":0,
				 "height":"30px",
				"top":"0px",
				"background":"white"
				}
		    )
		    $(this).find("a").css({"color":"#ff5c00"}).end().siblings().find("a").css({"color":"#333"})
	
})



//商品标题的选项卡效果

$(".product-right .uuu li").click(function(){
	if($(this).index()==1){
		$(".detail-infor").css({"display":"none"});
		$(".tupian-infor").css({"display":"none"});
		$(".goods-comment").css({"display":"block"});
		$(".goods-consult").css({"display":"block"});
	}else if($(this).index()==2){
		$(".detail-infor").css({"display":"none"});
		$(".tupian-infor").css({"display":"none"});
		$(".goods-comment").css({"display":"none"});
		$(".goods-consult").css({"display":"block"});
	}else if($(this).index()==3){
		$(".goods-consult").css({"display":"none"});
		$(".detail-infor").css({"display":"none"});
		$(".tupian-infor").css({"display":"none"});
		$(".goods-comment").css({"display":"none"});
	}else{
		$(".detail-infor").css({"display":"block"});
		$(".tupian-infor").css({"display":"block"});
		$(".goods-comment").css({"display":"block"});
		$(".goods-consult").css({"display":"block"});
	}
	
})


//评论分页

var index = 1;
var pageNum = 10;
var arr=[];
$.ajax({
	type:"get",
	url:"../js/detail.json",
	success:function(msg){
		 arr = msg;
		showData(arr);
		
	}
})
function showData(json){
	var str = "";
	for(var i = pageNum*(index-1) ; i < pageNum*index ; i++ ){
		if(i < json.length){
			str +=`<li>
						<img class="list-pic" src="../detail-img/58.png" alt="" />
						<div class="list-content">
							<p>${json[i].name}<span>${json[i].time}</span></p>
							<p>评分：<span>${json[i].score}</span></p>
							<p>内容：<span>${json[i].content}</span></p>
						</div>
					</li>`;
		}
	}
	$(".comment-list").html(str);
	var page = "";
	pageTotal = Math.ceil(json.length/pageNum);
	for(var j = 1 ; j <= pageTotal ; j++){
		page += `<li><a href="javascript:;">${j}</a></li>`;
	}
	$("#u").html(page);
	$("#u li").eq(index-1).find("a").addClass("active");
}

$("#u").on("click","li",function(){
	index=$(this).index()+1;
	showData(arr);
})
$("#right").click (function(){
 	index++;
 	if(index > pageTotal){
 		index = pageTotal;
 	}
 	showData(arr);
})
 $("#left").click (function(){
 	index--;
 	if(index < 1){
 		index = 1;
 	}
 	showData(arr);
 })


//咨询问题显示
$.ajax({
	type:"get",
	url:"../js/question.json",
	success:function(json){
		var str = "";
		for(var i = 0 ; i < json.length; i++){
			str +=` <li>
						<p>用户：${json[i].name}<span>${json[i].time}</span></p>
						<p>咨询内容：<span>${json[i].quest}</span></p>
						<p>专业回复：<span>${json[i].answer}</span></p>
					</li>`;
		}
		$(".consult-list").html(str);
	}
})