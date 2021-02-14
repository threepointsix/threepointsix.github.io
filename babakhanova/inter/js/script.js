$(document).ready(function () {
    $('.about-project-1').click(function () {
        $('.content-1').fadeToggle();
    });
    $('.programme-1').click(function () {
        $('.content-2').fadeToggle();
    });
    $('.booklet-1').click(function () {
        $('.content-3').fadeToggle();
    });
    $('.results-1').click(function () {
        $('.content-4').fadeToggle();
    });
    $('.about-project-2').click(function () {
        $('.content-5').fadeToggle();
    });
    $('.programme-2').click(function () {
        $('.content-6').fadeToggle();
    });
    $('.booklet-2').click(function () {
        $('.content-7').fadeToggle();
    });
    $(function () {
        $('.to-top').scroll(function () {
            if ($('.to-top').scrollTop() != 0) {
                $('.to-top').fadeIn();
            } else {
                $('.to-top').fadeOut();
            }
        });
        $('.to-top').click(function () {
            $('body,html').animate({scrollTop: 0}, 800);
        });

    });
});