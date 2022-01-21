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

	$('.branches__slider').owlCarousel({
	    loop:true,
	    margin:10,
	    nav: true,
	    navText: ["<img src='images/s-prev.svg'>", "<img src='images/s-next.svg'>"],
	    dots: false,
	    responsive:{
	    0:{
            items:1.5
        },	
        500:{
            items:2
        },
        760:{
            items:2.5
        },
        1000:{
            items:3.5
        }
    }
	});

	$('.reviews-lombards__slider').owlCarousel({
	    loop:true,
	    margin:10,
	    nav: true,
	    navText: ["<img src='images/btn-prev.png'>", "<img src='images/btn-next.png'>"],
	    dots: false,
	    responsive:{
	    0:{
            items:1
        },	
        767:{
            items:2
        },
        1000:{
            items:3
        }
    }
	});

    $('.about-reviews').owlCarousel({
        loop:true,
        margin:10,
        nav: true,
        navText: ["<img src='images/btn-prev.png'>", "<img src='images/btn-next.png'>"],
        dots: false,
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





