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