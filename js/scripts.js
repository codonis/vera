$(document).ready(function () {
    $('.inside').each(function () {
        var insideText = $(this).find('h1').text();
        $(this).find('h2').empty().text(insideText);
    });
});
$('.filter h3').click(function () {
    $(this).toggleClass('open');
   $('.filter-content').slideToggle(500);
});
$(document).ready(function () {
    $(".menu__list-item").hover(
        function () {
            $(this).children("ul").stop().slideDown('medium');
        },
        function () {
            $(this).children("ul").stop().slideUp('medium');
        }
    );
});
new WOW().init();