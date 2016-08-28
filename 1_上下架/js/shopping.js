$(function (){
		$('.shopping_product_list_6 a').click(function(){
			if($(this).parent().prev().html()=='已上架'){
				$(this).parent().prev().html('已上架').css('color','red');
				$(this).html('[上架]');
			}else{
				$(this).parent().prev().html('已上架').css('color','green');
				$(this).html('[下架]');
			}
		});
});