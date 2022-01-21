$(document).ready(function(){
    $('.go').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
      
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 900); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });
});

$(document).ready(function(){
	$('.owl-partners').owlCarousel({
	    loop:true,
	    autoplay:true,
	    autoplayHoverPause:true,
	    margin:10,
	    nav:true,
	    dots:false,
	    navText:['<img src="img/owl-prev.svg">','<img src="img/owl-next.svg">'],
	    responsive:{
			0:{
	            items:1
	        },
	    	576:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        992:{
	            items:5
	        },
	        1200:{
	            items:6
	        }
	    }
	});

	$('.owl-work').owlCarousel({
	    loop:false,
	    autoplay:false,
	    autoplayHoverPause:false,
	    margin:30,
	    nav:true,
	    dots:false,
	    navText:['<img src="img/owl-prev-b.svg">','<img src="img/owl-next-b.svg">'],
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        992:{
	            items:2
	        }
	    }
	});

	$('.owl-reviews').owlCarousel({
	    loop:true,
	    autoplay:true,
	    autoplayHoverPause:true,
	    margin:30,
	    nav:true,
	    dots:false,
	    navText:['<img src="img/owl-prev-b.svg">','<img src="img/owl-next-b.svg">'],
	    responsive:{
	        0:{
	            items:1
	        },
	    }
	});

	$('#button').click(function(){
	   $("input[type='file']").trigger('click');
	})

	$("input[type='file']").change(function(){
	   $('#val').text(this.value.replace(/C:\\fakepath\\/i, ''))
	})
})



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
    $(document).on("click", ".mobile-close", function(e) {
        $(".mobile_menu_container").removeClass("loaded");
        $('.mobile_menu_overlay').fadeOut(function() {
            $(".mobile_menu_container .loaded").removeClass("loaded");
            $(".mobile_menu_container .activity").removeClass("activity");
        });
    });
    /*$('.mobile-close').click(function(){
    	$('.mobile_menu_container').toggleClass('loaded');
    	$('.mobile_menu_overlay').css({
    	'display' : 'rotateZ(0deg)',
		'margin-top' : '5px',
		'color' : '#fff',
    		}
    	);
	});*/
})








