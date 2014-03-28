/** navigation children **/

//child_nav
$(function(){
	$(".navigation li").mouseover(function(){
			$(".child_nav").hide();
			$(this).children("ul").show();
	});
});

//navigation background sliding
$(window).load(function(){
	$('<li class="nav_background"></li>')
		.prependTo($(".navigation"))
		.css("background","#eee").css("position","absolute").css("width","24px").css("z-index","-1"); //创建背景
	$(".navigation").css("z-index","0");
	
	function BackHere(){
		var width_here=$(".here").width();
		var position_here=$(".here").position();
		$(".nav_background").stop().animate({width:width_here,left:position_here.left},500,'swing'); //回到当前页对应li
	}
	
	$(".nav_background").css("left","1px"); //初始位置
	BackHere();
	
	$(".navigation li").not(".nav_background")
		.mouseover(function(){
				var  width_li=$(this).width();
				var position_li=$(this).position();
				
				$(".nav_background").stop().animate({width:width_li,left:position_li.left},300,'swing');
		})
		.mouseout( function(){ BackHere(); } );
});