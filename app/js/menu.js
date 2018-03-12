$(document).ready(function () {
    $(".menu__list-item").hover(
        function () {
            $(this).children("ul").stop().slideDown('medium');
        },
        function () {
            $(this).children("ul").stop().slideUp('medium');
        }
    );
    if($('.menu__list-item .submenu')) {
        $('.submenu').each(function () {
            var link = $(this).siblings('a');
            var icon = '<i class="fa fa-angle-down menu__icon_submenu"></i>';
            link.addClass('no-after');
            link.append(icon);
        });
    }
});