;(function(w,d,u,$){
	
	$.fn.linkWidthPic=function(){
		$(this).hover(function(e){
		var title=$(this).attr("title")?$(this).attr("title"):'&nbsp;';
		var t=$(this).attr("title");
		$("body").append("<div id='screenshot'><img src='" + $(this).attr("rel")+"  '/></div>");
			if(t!=undefined&&t!="&nbsp;"){
				$("#screenshot").append("<br/>"+title);
			}else{
				$("#screenshot").append(title);
			}
			$(this).attr("temp",title).removeAttr("title");
			$("#screenshot").css({
				"top":(e.pageY+20)+"px",
				"left":(e.pageX+20)+"px"
				}).fadeIn("slow");
	},function(){
		var title=$(this).attr("temp");
		$(this).attr("title",title).removeAttr("temp");
			$("#screenshot").remove();
		});
		$(this).mousemove(function(e){
			$("#screenshot").css({
				"top":(e.pageY+20)+"px",
				"left":(e.pageX+20)+"px"
			});
		});
	};
	
})(window,document,undefined,$);