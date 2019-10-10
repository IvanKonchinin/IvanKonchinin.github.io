$(function() {
//Кнопка вверх
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
	
//Разноцветные заголовки
$("h2").toggle(function(){
      $("h2").css("color","green");
  	},function(){
      $("h2").css("color","red");
    },function(){
      $("h2").css("color","blue");
    },function(){
      $("h2").css("color","black");
   });
//Увеличение картинок
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

// модальное окно

$('.js-button').click(function(){
	$('.js-overlay').fadeIn(1000);
	$('.js-modal').fadeIn(1000);
	$('.js-button').fadeOut(2000);
});

$('.js-closed').click(function(){
	$('.js-overlay').fadeOut(1000);
	$('.js-modal').fadeOut(1000);
	$('.js-button').fadeIn(2000);
});
//закрытие по ESC
$(this).keydown(function(eventObject){
        if (eventObject.which == 27)
    $('.js-overlay').fadeOut(1000);
	$('.js-modal').fadeOut(1000);
	$('.js-button').fadeIn(2000);
});

$(document).mouseup(function(e){
	var popup = $('.js-modal');
	if(e.target!=popup[0]&&popup.has(e.target).length===0){
		$('.js-overlay').fadeOut(1000);
		$('.js-modal').fadeOut(1000);
		$('.js-button').fadeIn(2000);
	}
});
//открытие по таймеру с куки
$('.js-closed').click(function(){
	$.cookie('js-overlay', true);
	$('.js-overlay').hide(1000);
});
if($.cookie('js-overlay') == false)
{
	setTimeout(function(){
		$('.js-overlay').fadeIn(1000);
		$('.js-modal').fadeIn(1000);
	}, 3000)
}
else{
	$('.js-overlay').fadeOut(1000);
	$('.js-modal').fadeOut(1000);
}
// прыгающие буквы
var text = $('.text').text(),
    textArr = text.split('');

$('.text').html('');

$.each(textArr, function(i, v){
  if(v == ' '){$('.text').append('<span class="space"></span>');}
  $('.text').append('<span>'+v+'</span>');
})

});
// Предупреждение при уходе со страницы
window.onbeforeunload = function() {
  return "Данные не сохранены. Точно перейти?";
};

var a = document.getElementById('change');
a.addEventListener('mouseover',foo1);
a.addEventListener('mouseout',foo2);
function foo1(){
	a.style.color='red';
}
function foo2(){
	a.style.color='black';
}
//Появляющийся текст
// $(document).ready(function(){
//  $.fn.animate_Text = function() {
//   var string = this.text();
//   return this.each(function(){
//    var $this = $(this);
//    $this.html(string.replace(/./g, '<span class="new">$&</span>'));
//    $this.find('span.new').each(function(i, el){
//     setTimeout(function(){ $(el).addClass('div_opacity'); }, 40 * i);
//    });
//   });
//  };
//  $('.present').show();
//  $('.present').animate_Text();
// });

