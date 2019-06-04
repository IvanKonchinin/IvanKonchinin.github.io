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
    pagination:true,
    margin:10,
    navText: ['<img src="img/prev.png">','<img src="img/next.png">'],
    items:4,
    loop:true
  });
});

if($(window).width() < 420){
	$(".owl-carousel").owlCarousel({
		nav:true,
   		navText: ['<img src="img/prev.png">','<img src="img/next.png">'],
    	items:1,
    	loop:true
	});
}

});