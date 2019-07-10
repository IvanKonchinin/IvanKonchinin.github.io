$(function(){
	$(".burger").click(function(){
		$('.bg-menu').toggleClass('bg-menu-open');
	})

	$(".arrow").click(function(){
		$('.social-left').addClass('social-right');
		$('.arrow').hide();
		$('.arrow-back').show(500);
	})

	$('.arrow-back').click(function(){
		$('.social-left').removeClass('social-right');
		$('.arrow-back').hide();
		$('.arrow').show(500);
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