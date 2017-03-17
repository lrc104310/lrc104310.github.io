$(document).ready(function() {
	//анимация на фотографии
	$(".popup").magnificPopup({type:"image"});
	$(".popup_1").magnificPopup({type:"image"});
	$(".popup_2").magnificPopup({type:"image"});
	$(".popup_3").magnificPopup({type:"image"});
	//основная анимация
	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
	$(".top_text p").animated("fadeInUp", "fadeOutDown");
	$(".section_header h2").animated("fadeInUp", "fadeOutDown");
	$(".s_descr").animated("fadeInUp", "fadeOutDown");
	$(".animation_1").animated("fadeInLeft", "fadeOutLeft");
	$(".animation_2").animated("flipInY", "flipOutY");
	$(".animation_3").animated("fadeInRight", "fadeOutRight");
	$(".animation_right").animated("fadeInRight", "fadeOutRight");
	$(".animation_left").animated("fadeInLeft", "fadeOutLeft");
	$(".animation_center").animated("flipInY", "flipOutY");
	$("input,select,textarea").jqBootstrapValidation();


	function heightDetect() {
		$('.main_head').css("height",$(window).height());	

		$("a[href*='#']").mPageScroll2id();
	}
	heightDetect();
	$(window).resize(function(){
		heightDetect();
	});
});
		//запуск меню
$(".toggle_mnu").click(function() {
	$(".sandwich").toggleClass("active");
});
		//скрывать меню при клике
$(".top_mnu li a").click(function() {
	$(".top_mnu").fadeOut(600);
	$(".sandwich").toggleClass("active");
});
		//анимация меню и сылок
$(".toggle_mnu").click(function() {
	if ($(".top_mnu").is(":visible")) {
		$(".top_mnu").fadeOut(600);
		$(".top_mnu li a").removeClass("fadeInUp animated");
	} else {
		$(".top_mnu").fadeIn(600);
		$(".top_mnu li a").addClass("fadeInUp animated");
	};
});


$(window).load(function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
});
