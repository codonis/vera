$('.chat a').click(function (e) {
    e.preventDefault();
    $(this).parent().addClass('clicked');
    $('.messagge').addClass('active');
});
$('.messagge-close').click(function (e) {
    e.preventDefault();
    $('.chat a').parent().removeClass('clicked');
    $('.messagge').removeClass('active');
});