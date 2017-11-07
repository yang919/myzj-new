//左边侧边栏的字体效果
$(".goods-class-left-top dl dd").hover(function(){
	$(this).find("a").css({"color":"#ff5c00"});
	$(this).find("span").css({"color":"#ff5c00"});
},function(){
	$(this).find("a").css({"color":"#333"});
	$(this).find("span").css({"color":"#333"});
})

//左边侧边栏的手风琴效果

$(".goods-class-left-bottom li").hover(function(){
	$(this).find(".word").css({"display":"none"})
		   .end().siblings()
		   .find(".word").css({"display":"block"});
	$(this).find(".infor").css({"display":"block"})
		   .end().siblings()
		   .find(".infor").css({"display":"none"});
})


//右边顶部商品类型的展开和收起

$(".goods-class-right-bottom .classes #btn1").click(function(){
	$(this).parent().find(".u-class").css({"height":$(this).parent().find(".u-class").height()-60});
	$(this).next().css({"display":"block"});
	$(this).css({"display":"none"});
})
$(".goods-class-right-bottom .classes #btn2").click(function(){
	$(this).parent().find(".u-class").css({"height":$(this).parent().find(".u-class").height()+60});
	$(this).prev().css({"display":"block"});
	$(this).css({"display":"none"});
})

$(".goods-class-right-bottom .classes #btn3").click(function(){
	$(this).parent().find(".u-class").css({"height":$(this).parent().find(".u-class").height()-10});
	$(this).next().css({"display":"block"});
	$(this).css({"display":"none"});
})
$(".goods-class-right-bottom .classes #btn4").click(function(){
	$(this).parent().find(".u-class").css({"height":$(this).parent().find(".u-class").height()+10});
	$(this).prev().css({"display":"block"});
	$(this).css({"display":"none"});
})

//页码的划过效果


$(".contain-box-bottom-fenye a").hover(function(){
	$(this).css({"color":"#ff5c00","border-color":"#ff5c00"})
},function(){
	$(this).css({"color":"#b1b1b1","border-color":"#ccc"})
})
$(".contain-box-bottom-fenye #page li").hover(function(){
	$(this).find("a").css({"color":"#ff5c00","border-color":"#ff5c00"})
},function(){
	$(this).find("a").css({"color":"#b1b1b1","border-color":"#ccc"})
})





//主题内容的分页效果

var index = 1;
var pageNum = 40;
var arr=[];

function rand(min,max){
	return Math.floor(Math.random()*(max-min+1)+min);
}


$.ajax({
	type:"get",
	url:"../js/page.json",
	success:function(msg){
		arr = msg;
		showDatas(arr);
	}
})
$(".goods-order li").click(function(){
	$.ajax({
		type:"get",
		url:"../js/page.json",
		success:function(msg){
			arr = msg;
			
		}
	})
	if($(this).index()==0){
		index = 1;
		showDatas(arr);
		
	}else{
		index = 1;
		showDatas(random(arr));
	}
	$(this).find("a").css({"background":"#ff5c00","color":"white"})
		   .end().siblings()
		   .find("a").css({"background":"#f4f4f4","color":"#333"});
		   
})
function random(crr){
	var brr = [];
	console.log(crr);
	for(var i = 0 ; i < crr.length ; i++){
		var index = rand(0,crr.length-1);
		if(brr.indexOf(index) == -1){
			brr.push(crr[index]);
			crr.splice(index,1);
			i--;
		}
	}
	return brr;
}
function showDatas(json){
	var str = "";
	for(var i = pageNum*(index-1) ; i < pageNum*index ; i++ ){
		if(i < json.length){
			str +=`<li>
						<dl>
							<dt>
								<a href="http://127.0.0.1:8020/01cookie/myzj-zuixin/html/detail.html"><img src="../page-img/${json[i].src}" title="${json[i].name}"></a>
							</dt>
							<dd>
								<p class="goods-name">
									<a href="http://127.0.0.1:8020/01cookie/myzj-zuixin/html/detail.html" title="${json[i].name}">${json[i].name}<span>${json[i].span}</span></a>
									
								</p>
								<p class="goods-price">
									<span>${json[i].price}</span>
								</p>
								<p class="btns">
									<a href="#" class="btn-c">加入购物车</a>
									<a href="#" class="btn-s">收藏</a>
								</p>
							</dd>
						</dl>
					</li>`;
		}
	}
	$(".contain-box-center .contain-uu").html(str);
	var page = "";
	pageTotal = Math.ceil(json.length/pageNum);
	var html = `<strong>${index}</strong>/${pageTotal}</span>`;
	$(".pagin .text").html(html);
	for(var j = 1 ; j <= pageTotal ; j++){
		page += `<li><a href="javascript:;">${j}</a></li>`;
	}
	$("#page").html(page);
	$("#page li").eq(index-1).find("a").addClass("active");
}


$("#page").on("click","li",function(){
	index=$(this).index()+1;
	showDatas(arr);
})

$(".next-page").click (function(){
   	index++;
   	if(index > pageTotal){
   		index = pageTotal;
   	}
   	showDatas(arr);
})
   $(".prev-page").click (function(){
   	index--;
   	if(index < 1){
   		index = 1;
   	}
   	showDatas(arr);
   })

$(".n").click (function(){
   	index++;
   	if(index > pageTotal){
   		index = pageTotal;
   	}
   	showDatas(arr);
})
   $(".p").click (function(){
   	index--;
   	if(index < 1){
   		index = 1;
   	}
   	showDatas(arr);
   })