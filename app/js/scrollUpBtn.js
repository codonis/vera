var scrollUpBtn = $('.scroll-up');
$(window).scroll(function () {

    if ($(window).scrollTop() > 120) {
        scrollUpBtn.addClass('active');
        /* scrollUpBtn.parent().removeClass('s-hide'); */
    } else {
        scrollUpBtn.removeClass('active');
        /* scrollUpBtn.parent().addClass('s-hide'); */

    }
});
scrollUpBtn.click(function () {
    $('html,body').animate({
        scrollTop: 0
    }, 500);
});