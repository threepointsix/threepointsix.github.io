$(document).ready(function () {
    $('.research-1').click(function () {
        $('.project-1').fadeToggle();
    });
    $('.research-2').click(function () {
        $('.project-2').fadeToggle();
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