/**
 * Created by ximer on 07.05.2018.
 */
$(document).ready(function(){
    $('.your-class').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 7000,
    });

    $('.WindowsTop').click(function () {
            $('body, html').animate({
                scrollTop: $('.Block7').offset().top
            }, 1000);
        });
});