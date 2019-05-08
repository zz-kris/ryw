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