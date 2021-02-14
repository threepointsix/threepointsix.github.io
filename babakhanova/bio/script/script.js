$(document).ready(function () {
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