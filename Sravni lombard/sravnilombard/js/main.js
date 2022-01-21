$(document).ready(function(){
    $('.go').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
      
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 900); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });
});


jQuery(document).ready(function() {

	$('.main__owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    nav: false,
	    dots: true,
	    autoplay: true,
	    autoplayHoverPause: true,
	    responsive:{
	        0:{
            items:1
	        }
	    }
	});

	$('.reviews__owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    nav: true,
	    navText: ["<img src='img/arrow_left.png'>", "<img src='img/arrow_right.png'>"],
	    dots: false,
	    autoplay: false,
	    autoplayHoverPause: true,
	    responsive:{
	        0:{
            items:1
	        }
	    }
	});

	$('.rating__reviews_owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    nav: true,
	    navText: ["<img src='img/arrow_left.png'>", "<img src='img/arrow_right.png'>"],
	    dots: false,
	    autoplay: false,
	    autoplayHoverPause: true,
	    responsive:{
	        0:{
            items:1
	        }
	    }
	});

	$(window).scroll(function() {
	  $(".block").each(function() {
	    var elPos = $(this).offset().top;
	    var topOfWindow = $(window).scrollTop();
	    if (elPos < topOfWindow + 500) {
	      $(this).addClass("fadeInUp");
	    }
	  });
	});








	$(function() {
    $(document).on("click", ".mobile_menu_container .parent", function(e) {
        e.preventDefault();
        $(".mobile_menu_container .activity").removeClass("activity");
        $(this).siblings("ul").addClass("loaded").addClass("activity");
    });
    $(document).on("click", ".mobile_menu_container .back", function(e) {
        e.preventDefault();
        $(".mobile_menu_container .activity").removeClass("activity");
        $(this).parent().parent().removeClass("loaded");
        $(this).parent().parent().parent().parent().addClass("activity");
    });
    $(document).on("click", ".mobile_menu", function(e) {
        e.preventDefault();
        $(".mobile_menu_container").addClass("loaded");
        $(".mobile_menu_overlay").fadeIn();
    });
    $(document).on("click", ".go", function(e) {
        $(".mobile_menu_container").removeClass("loaded");
        $(this).fadeOut(function() {
            $(".mobile_menu_container .loaded").removeClass("loaded");
            $(".mobile_menu_container .activity").removeClass("activity");
        });
    });
    $(document).on("click", ".mobile_menu_overlay", function(e) {
        $(".mobile_menu_container").removeClass("loaded");
        $(this).fadeOut(function() {
            $(".mobile_menu_container .loaded").removeClass("loaded");
            $(".mobile_menu_container .activity").removeClass("activity");
        });
    });

})
})





