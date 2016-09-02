;(function(w,d,u,$){
	$.fn.Zoomer=function(params){
		var defaults={
			speedView:200,
			speedRemove:400,
			altText:true,
			speedText:200
		};
		params=$.extend({},defaults,params);
		$(this).hover(function(){
			$(this).find("img").css("z-index",100);
			$(this).find("img").stop().animate({
					top:'-50%',
					left:'-50%',
					width:'200px',
					height:'200px'
				},params.speedView);
				
				if(params.altText){
					var altText=$(this).find("img").attr("alt");
					$(this).prepend("<span class='title'>"+altText+"</span>");
					$(".title").css({
						'marginLeft':'-50px',
						'marginTop':'100px',
						'z-index':101,
						'position':'absolute'
					});
				}
				
		},function(){
			$(this).find("img").css("z-index",0);
			$(this).find("img").stop().animate({
					top:'0%',
					left:'0%',
					width:'100px',
					height:'100px'
			},params.speedRemove);
			$(this).find(".title").remove();
			});
	}
})(window,document,undefined,$);