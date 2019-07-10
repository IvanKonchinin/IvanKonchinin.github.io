menu.onclick = function myFunction(){
	var x = document.getElementById('myTopnav');

	if (x.className === 'topnav'){
		x.className += ' responsive';
	} else {
		x.className = 'topnav';
	}
}

$(function() {

$(window).scroll(function() {
	if($(this).scrollTop() != 0) {
	$('#toTop').fadeIn(2000);
		} else {
			$('#toTop').fadeOut(2000);
	}
	});
	$('#toTop').click(function() {
	$('body,html').animate({scrollTop:0},700);
	});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	nav:true,
    margin:10,
    autoplay:true,
    smartSpeed:1000,
    autoplayTimeout:3000,
    navText: ['<img src="img/prev.png">','<img src="img/next.png">'],
    loop:true,
    responsive:{
    	0:{
    		items:1
    	},
    	600:{
    		items:3
    	},
    	1000:{
    		items:4
    	}
    }
  });
});
});


