$(function(){
	$(".burger").click(function(){
		$('.bg-menu').toggleClass('bg-menu-open');
	})

	$(".arrow").click(function(){
		$('.social-left').toggleClass('social-right');
		$('.arrow').fadeOut();
	})


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



});