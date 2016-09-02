$(document).ready(function() {
    $("#container #filter li a").click(function(){
		$(this).parent().parent().find("li").removeClass("current");
		$(this).parent().addClass("current");
		var filterclass=$(this).text().toLowerCase().replace(" ","-");
		if(filterclass=='all'){
			$("ul#portfolio li").fadeIn("slow");
			}else{
				$("ul#portfolio li").each(function(index, element) {
                    if($(element).hasClass(filterclass)){
							$(element).fadeIn("slow");
						}else{
							$(element).fadeOut("slow");
						}
                });
			}
	});
});