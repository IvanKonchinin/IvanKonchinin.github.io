//кнопка вверх

$(document).ready(function () {
  /**
   * При прокрутке страницы, показываем или скрываем кнопку
   */
  $(window).scroll(function () {
    // Если отступ сверху больше 50px то показываем кнопку "Наверх"
    if ($(this).scrollTop() > 50) {
      $('#button-up').fadeIn();
    } else {
      $('#button-up').fadeOut();
    }
  });

  /** При нажатии на кнопку мы перемещаемся к началу страницы */
  $('#button-up').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });

});




//кнопка вверх end 

$(document).ready(function () {
  $("#phone").mask("+7 (999) 999-99-99");
});

let modal_footer_send = document.querySelector('.modal_footer_send'),
    modal = document.querySelector('.modal'),
    no_freeze_spinner = document.querySelector('.no-freeze-spinner'),
    send_message = document.querySelector('.send_message'),
    modal_footer = document.querySelector('.modal-footer'),
    phone_value = document.querySelector('#phone');

function spinnerDismiss(){
  no_freeze_spinner.classList.toggle('spinner_open');
};

function sendMessage(){
  send_message.innerHTML = 'Мы свяжемся с Вами в ближайшее время!';
};

function modalFooterSend(){
  modal_footer.classList.toggle('modal_footer'); 
};

modal_footer_send.addEventListener('click', function(){
  if(phone_value.value){
    no_freeze_spinner.classList.toggle('spinner_open');
    modal_footer_send.classList.toggle('modal_close');
    setTimeout(spinnerDismiss, 3000);
    setTimeout(sendMessage, 3000);
    setTimeout(modalFooterSend, 3000);
  } else {
    alert('Заполните поле: телефон');
  }
  

});
