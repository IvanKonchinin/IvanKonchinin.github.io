$(document).ready(function(){
$('.owl-carousel').owlCarousel({
                loop:true, //Зацикливаем слайдер
                margin:30, //Отступ от элемента справа в 50px
                nav:false, //Отключение навигации
                autoplay:false, //Автозапуск слайдера
                smartSpeed:500, //Время движения слайда
                autoplayTimeout:2000, //Время смены слайда
                responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    1000:{
                        items:3
                    }
                }
            });
});