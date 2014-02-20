$(function(){
	var len  = $(".index_gallery > li").length;
	var index = 0;
	var adTimer;
	$(".index_gallery li").mouseover(function(){
		index  =   $(".index_gallery li").index(this);
		showImg(index);
	}).eq(0).mouseover();
	$('#index_word_box').hover(function(){
		clearInterval(adTimer);
		},function(){
			adTimer = setInterval(function(){
				showImg(index)
				index++;
				if(index==len){index=0;}
			} , 10000);
	}).trigger("mouseleave");
})
function showImg(index){
	$(".index_gallery li").removeClass("active");
	$($(".index_gallery li")[index]).addClass("active");
	$(".gallery_pic").css("display","none");
	$($(".gallery_pic")[index]).fadeIn();
	// $("#index_gallery").css("background-image","url('" + $($(".index_gallery li")[index]).attr("data-pic") + "')")
}