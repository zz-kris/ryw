$(function(){
	 $(".dianji").click(function(){
    	$(".chuxian").animate({width:"300px"},400)
    	$(".cha").show()
    	$(".chuxian>ul").show()
    })
    $(".cha").click(function(){
    	$(".chuxian").animate({width:"0px"},400)
    	$(this).hide()
    	$(".chuxian>ul").hide()
    })
     
     
    $(".tutu").mouseenter(function(){
    	$(this).children("img").css({"transform":"scale(1.1)","transition":"all 1s "})
    	$(this).children(".zizi").css("background","rgba(255,255,255,0.7)")
    })
    $(".tutu").mouseleave(function(){
    	$(this).children("img").css({"transform":"scale(1)","transition":"all 1s "})
    	$(this).children(".zizi").css("background","none")
    })
    
    
    $(".fz").mouseenter(function(){
    	$(this).children("img").css({"transform":"scale(1.1)","transition":"all 1s "})
    	$(this).children("p").stop().animate({"left":"30%","opacity":"0.8"},1000);
    })
    $(".fz").mouseleave(function(){
    	$(this).children("img").css({"transform":"scale(1)","transition":"all 1s "})
    	$(this).children("p").stop().animate({"left":"0%","opacity":"0"},1000);
    })
	$(".fzz").mouseenter(function(){
		$(this).css("background-color","#f3DfCD");
    	$(this).children("a").css("color","#E38925");
    })
    $(".fzz").mouseleave(function(){
    	$(this).css("background-color","#fcf4ed");
    	$(this).children("a").css("color","black");
    })
    $(".fzz1").mouseenter(function(){
		$(this).css("background-color","#c7c7c7");
    	$(this).children("a").css("color","#E38925");
    })
    $(".fzz1").mouseleave(function(){
    	$(this).css("background-color","#d4d4d4");
    	$(this).children("a").css("color","black");
    })
    $(".fzz2").mouseenter(function(){
		$(this).css("background-color","#EAEBEC");
    	$(this).children("a").css("color","#E38925");
    })
    $(".fzz2").mouseleave(function(){
    	$(this).css("background-color","#f1f2f4");
    	$(this).children("a").css("color","black");
    })
	
//	底部
	$(".xz").mouseenter(function(){
		$(this).children("img").css({"transform":"rotate(360deg)","transition":"all 0.5s"});
    })
    $(".xz").mouseleave(function(){
    	$(this).children("img").css({"transform":"rotate(-360deg)","transition":"all 0.5s"});
    })
    $("#yi").hover(function(){
    	$("#er").show();
    },function(){
    	$("#er").hide();
    })
	
	$(document).on('scroll',function(){
		var src=$(document).scrollTop();
//		console.log(src);
		if(src>=50){
			$('.back').fadeIn();
			
		}else{
			$('.back').fadeOut();
			
		}
		
		$('.back').click(function(){
			$(document).scrollTop(0);
		})
		
	})
	
	
	
	
	
})