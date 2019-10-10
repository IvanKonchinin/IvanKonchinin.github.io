
		$(function() {
		$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
		$('#toTop').fadeIn(2000);
		} else {
		$('#toTop').fadeOut(2000);
		}
		});
		$('#toTop').click(function() {
		$('body,html').animate({scrollTop:0},500);
		});
		});

		// $(function() {
	 //        $(window).scroll(function(){
	 //            if($(this).scrollTop()>184){
	 //                $('.header-bottom').addClass('fixed');
	 //            }
	 //            else if ($(this).scrollTop()<184){
	 //                $('.header-bottom').removeClass('fixed');
	 //            }
	 //        });
	 //    });

$(function(){
	// $('h2').click(function(){
	// 	$(this).toggleClass('blue')
	// })
	// $('h2').mouseenter(function(){
	// 	$(this).toggleClass('blue')
	// });
	// $('input').keyup(function(){
	// 	$('#user').text(', ' + $(this).val());
	// 	$('#user').css('color', 'red');
	// });
	// $('.footer-bottom').click(function(){
	// 	$('.footer-bottom').hide(2000).show(2000);
	// });
	// $('h2').animate({'width': '50px'}, 1000)
	// $('h2:first').click(function(){
	// $('h2:first').slideUp(1000);
// });
// $('img').click(function(){
// 	$(this).fadeOut(500, function(){
// 		$(this).attr('src', 'img/flowers.jpg').fadeIn(500);
// 	});
// });

$("h2").toggle(function(){
      $("h2").css("color","green");},function(){
      $("h2").css("color","red");},function(){
      $("h2").css("color","blue");},function(){
      $("h2").css("color","black");
   });
// Окно с задержкой

// setTimeout(function(){

// $("#dialog").dialog({modal:true,height:220,width:330,buttons:{OK:function(){
// 	$(this).dialog('close');
// },

// 	// Отмена:function(){
// 	// 	$(this).dialog('close');
// 	// }
	
// }});	
// },3000);




	


$('.scale').click(function(){
	$('.foto-1').css({'width':'350px'});
	$('.scale').css({'display':'none'});
    $('.scaleout').fadeIn(4000);
});
$('.scaleout').click(function(){
	$('.foto-1').css({'width':'150px'});
	$('.scale').fadeIn(5000);
    $('.scaleout').hide();
});

});