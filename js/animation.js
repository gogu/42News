//slide ul

/** 连按崩溃版
$(function(){
	$(".slide_ul").css("marginLeft","-940px");
	$(".slide_ul li:gt(5)").css("marginLeft","10px").prependTo($(".slide_ul"));

	$(".go_left").click(function(){
			$(".slide_ul li:first-child").stop().animate({marginLeft:'+=930px'},500,'swing',function(){
					$(".slide_ul li:gt(5)").css("marginLeft","10px").prependTo($(".slide_ul"));
					$(this).css("marginLeft","10px");
				});
	});
	
	$(".go_right").click(function(){
			$(".slide_ul").stop().animate({marginLeft:'-=930px'},500,'swing',function(){
					$(".slide_ul li:lt(3)").css("marginLeft","10px").appendTo($(".slide_ul"));
					$(".slide_ul").css("marginLeft","-940px");
			});
	});
});
**/

/*连按骚跳版
为了解决连按崩溃于是颠倒顺序写了下面的，效果依然坑爹 救我……*/
$(function(){
	$(".slide_ul").css("marginLeft","-940px");
	$(".slide_ul li:gt(5)").css("marginLeft","10px").prependTo($(".slide_ul"));

	$(".go_left").click(function(){
		$(".slide_ul").css("marginLeft","-1870px");
		$(".slide_ul li:gt(5)").css("marginLeft","10px").prependTo($(".slide_ul"));
		$(".slide_ul").stop().animate({marginLeft:'+=930px'},500);
	});

	$(".go_right").click(function(){
		$(".slide_ul li:lt(3)").css("marginLeft","10px").appendTo($(".slide_ul"));
		$(".slide_ul").css("marginLeft","-10px");
		$(".slide_ul").stop().animate({marginLeft:'-=930px'},500,'swing');		
	});
});

//top10

$(function(){
	$(".bottom_1").mouseover(function(){
		$(".top10_index").stop().animate({marginTop:"0px"},100,"swing");
		$(".top10_index h3").removeClass("on_here");
		$(this).addClass('on_here');
	});
	$(".bottom_2").mouseover(function(){
		$(".top10_index").stop().animate({marginTop:"-401px"},100,"swing");
		$(".top10_index h3").removeClass("on_here");
		$(this).addClass('on_here');
	});
	$(".bottom_3").mouseover(function(){
		$(".top10_index").stop().animate({marginTop:"-802px"},100,"swing");
		$(".top10_index h3").removeClass("on_here");
		$(this).addClass("on_here");
	});
});