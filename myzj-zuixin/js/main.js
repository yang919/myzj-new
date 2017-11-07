//引入模块并重命名
requirejs.config({
	paths : {
		jquery : "jquery-1.11.1.min",
		reg : "regist",
		log : "login",
		cookie:"myCookie"
		
	}
})

//操作页面元素  完成功能实现
requirejs(["jquery","reg","log","cookie"],function($,reg,log,cok){
	//登陆页验证手机号
	
	$(".login-content-right ul li #uname").focus(function(){
		$(this).css({"border":"1px solid #ff9900"});
		$(this).parent().find(".message").css({"display":"none"});
	})
	$(".login-content-right ul li #uname").blur(function(){
		var userflag = reg.checkTel( $("#uname").val() );
		if(!userflag){
			$(this).css({"border":"1px solid #e60000"})
			$(this).parent().find(".message").css({"display":"block"});
			$(this).parent().find("p").removeClass("mess");
			$(this).parent().find(".message").find("img").attr({"src":"../detail-img/1.gif"});
			$(this).parent().find(".message").find("span").html("账户格式不正确！");
		}else{
			$(this).css({"border":"1px solid #59a358"})
			$(this).parent().find(".message").css({"display":"block"});
			$(this).parent().find("p").addClass("mess");
			$(this).parent().find(".message").find("img").attr({"src":"../detail-img/2.gif"});
			$(this).parent().find(".message").find("span").html("");
		}
	})
	
	//登陆页验证密码
	$(".login-content-right ul li #upwd").focus(function(){
		$(this).css({"border":"1px solid #ff9900"});
		$(this).parent().find(".message").css({"display":"none"});
	})
	$(".login-content-right ul li #upwd").blur(function(){
		var userflag = reg.checkTel( $("#uname").val() );
		if(!userflag){
			$(this).css({"border":"1px solid #e60000"})
			$(this).parent().find(".message").css({"display":"block"});
			$(this).parent().find("p").removeClass("mess");
			$(this).parent().find(".message").find("img").attr({"src":"../detail-img/1.gif"});
			$(this).parent().find(".message").find("span").html("密码长度为6-20位字符");
		}else{
			$(this).css({"border":"1px solid #59a358"})
			$(this).parent().find(".message").css({"display":"block"});
			$(this).parent().find("p").addClass("mess");
			$(this).parent().find(".message").find("img").attr({"src":"../detail-img/2.gif"});
			$(this).parent().find(".message").find("span").html("");
		}
	})
	
	//注册页验证手机号
	$(".regist-content-left ul li #uname").focus(function(){
		$(this).css({"border":"1px solid #ff9900"});
		$(this).parent().find(".message").css({"display":"none"});
	})
	$(".regist-content-left ul li #uname").blur(function(){
		var userflag = reg.checkTel( $("#uname").val() );
		if(!userflag){
			$(this).css({"border":"1px solid #e60000"})
			$(this).parent().find(".message").css({"display":"block"});
			$(this).parent().find("p").removeClass("mess");
			$(this).parent().find(".message").find("img").attr({"src":"../detail-img/1.gif"});
			$(this).parent().find(".message").find("span").html("手机格式不对，请重新输入！");
		}else{
			$(this).css({"border":"1px solid #59a358"})
			$(this).parent().find(".message").css({"display":"block"});
			$(this).parent().find("p").addClass("mess");
			$(this).parent().find(".message").find("img").attr({"src":"../detail-img/2.gif"});
			$(this).parent().find(".message").find("span").html("");
		}
	})
	
	//注册页验证密码
	$(".regist-content-left ul li #upwd").focus(function(){
		$(this).css({"border":"1px solid #ff9900"});
		$(this).parent().find(".message").css({"display":"none"});
		$(this).parent().find(".level").css({"display":"block"});
	})
	$(".regist-content-left ul li #upwd").keyup(function(){
		var pwdflag = reg.checkPwd( $("#upwd").val() );
		if(pwdflag == 1){
			$("#weak").css({"background":"#ffc353"});
			$("#middle").css({"background":"#b1b1b1"});
			$("#better").css({"background":"#b1b1b1"});
		}else if(pwdflag == 2){
			$("#weak").css({"background":"#ffc353"});
			$("#middle").css({"background":"#b6dc2f"});
			$("#better").css({"background":"#b1b1b1"});
		}else if(pwdflag == 3){
			$("#weak").css({"background":"#ffc353"});
			$("#middle").css({"background":"#b6dc2f"});
			$("#better").css({"background":"#82be0e"});
		}
	})
	$(".regist-content-left ul li #upwd").blur(function(){
		 var pwdflag = reg.checkPwd( $("#upwd").val() );
		if(!pwdflag){
			$("#weak").css({"background":"#ffc353"});
			$("#middle").css({"background":"#b1b1b1"});
			$("#better").css({"background":"#b1b1b1"});
			$(this).css({"border":"1px solid ##e60000"});
			$(this).parent().find(".message").css({"display":"block"});
			$(this).parent().find("p").removeClass("mess");
			$(this).parent().find(".message").find("img").attr({"src":"../detail-img/1.gif"});
			$(this).parent().find(".message").find("span").html("密码长度限制为6-20位字符");
			$(this).parent().find(".message").find("span").removeClass("span");
			$(this).parent().find(".level").css({"display":"none"});
		}else {
			$(this).css({"border":"1px solid #59a358"})
			$(this).parent().find(".message").css({"display":"block"});
			$(this).parent().find(".level").css({"display":"none"});
			$(this).parent().find("p").addClass("mess");
			$(this).parent().find(".message").find("img").attr({"src":"../detail-img/2.gif"});
			$(this).parent().find(".message").find("span").addClass("span");
			if(pwdflag == 1){
				$(this).parent().find(".message").find("span").html("密码强度：弱");
			}else if(pwdflag == 2){
				$(this).parent().find(".message").find("span").html("密码强度：中");
			}else if(pwdflag == 3){
				$(this).parent().find(".message").find("span").html("密码强度：强");
			}
		}
	})
	
	//注册页确认密码
	$(".regist-content-left ul li #qpwd").focus(function(){
		$(this).css({"border":"1px solid #ff9900"});
		$(this).parent().find(".message").css({"display":"none"});
	})
	$(".regist-content-left ul li #qpwd").blur(function(){
		var upwdflag = reg.qpwd( $("#upwd").val() , $("#qpwd").val() );
		if(upwdflag==2){
			$(this).css({"border":"1px solid #59a358"})
			$(this).parent().find(".message").css({"display":"block"});
			$(this).parent().find("p").addClass("mess");
			$(this).parent().find(".message").find("img").attr({"src":"../detail-img/2.gif"});
			$(this).parent().find(".message").find("span").html("");
			
		}else {
			$(this).css({"border":"1px solid #e60000"})
			$(this).parent().find(".message").css({"display":"block"});
			$(this).parent().find("p").removeClass("mess");
			$(this).parent().find(".message").find("img").attr({"src":"../detail-img/1.gif"});
			if(upwdflag == 1){
				$(this).parent().find(".message").find("span").html("重复密码不能为空，请确认");
			}else{
				$(this).parent().find(".message").find("span").html("2次密码不一致，请重新输入");
			}
		}
	})

//	var arr=[];
//	if(userflag && pwdflag  && upwdflag){
//		alert();
//			var _json ={
//				"ptel":$("#uname").val(),
//				"pwd":$("#upwd").val() 
//			}
//			arr.push(_json);
//			alert(arr);
//			setCookie("userInfo",JSON.stringify(arr));
//	}

//	$("form").submit(function(){
//		var _json ={
//			"ptel":$("#uname").val(),
//			"pwd":$("#upwd").val() 
//		}
//		arr.push(_json);
//		setCookie("userInfo",JSON.stringify(arr));
//	})
})