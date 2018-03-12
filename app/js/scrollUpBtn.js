var scrollUpBtn = $('.scroll-up');
$(window).scroll(function () {

    if ($(window).scrollTop() > 120) {
        scrollUpBtn.show(300);
        /* scrollUpBtn.parent().removeClass('s-hide'); */
    } else {
        scrollUpBtn.hide(300);
        /* scrollUpBtn.parent().addClass('s-hide'); */
        
    }
});
scrollUpBtn.click(function () {
    $('html,body').animate({
        scrollTop: 0
    }, 500);
});