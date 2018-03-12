$('.chat a').click(function (e) {
    e.preventDefault();
    $(this).parent().addClass('clicked');
});