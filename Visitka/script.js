$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true, //Зацикливаем слайдер
    margin: 0, //Отступ от элемента справа в 50px
    nav: true,
    navText: ["", ""], //Отключение навигации
    autoplay: false, //Автозапуск слайдера
    smartSpeed: 1000, //Время движения слайда
    autoplayTimeout: 5000, //Время смены слайда
    responsive: { //Адаптивность. Кол-во выводимых элементов при определенной ширине.
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
});


  // var openBtn = document.getElementById('promo-btn');
  // openBtn.addEventListener('click', function() {
  //   var win = window.open("", "", "width=400,height=200");  
  //   win.document.write();
  // });

$(document).ready(function () {
  $("#promo-btn, #header-viber, #header-whatsap").on("click", function () {
    //отменяем стандартную обработку нажатия по ссылке
    //event.preventDefault();
    //забираем идентификатор бока
    var id = $(".contacts"),
    //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top;
    //анимируем переход на расстояние - top за ... мс
    $('body,html').animate({ scrollTop: top }, 1000);
  });
});

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
  $("#submit").click(function () {
    $("#erconts").fadeIn(500);
    $.ajax(
      {
        type: "POST",
        url: "page.php", // Адрес обработчика
        data: $("#callbacks").serialize(),
        error: function () {
          $("#erconts").html("Произошла ошибка!");
        },
        beforeSend: function () {
          $("#erconts").html("Отправляем данные...");
        },
        success: function (result) {
          $("#erconts").html(result);
          checkThis();
        }
      });
    return false;
  });
});

