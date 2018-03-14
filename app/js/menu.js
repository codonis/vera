$(document).ready(function () {
    $(".menu__list-item").hover(
        function () {
            $(this).children("ul").stop().slideDown('medium');
        },
        function () {
            $(this).children("ul").stop().slideUp('medium');
        }
    );
    if ($('.menu__list-item .submenu')) {
        $('.submenu').each(function () {
            var link = $(this).siblings('a');
            var icon = '<i class="fa fa-angle-down menu__icon_submenu"></i>';
            link.addClass('no-after');
            link.append(icon);
        });
    }
    menuActions();
});
function menuActions() {
    $('#mobileMenu').click(function (e) {
        e.preventDefault();
        $('#menu').toggleClass('open');
        $(this).toggleClass('open');
        $('#footerMenu').removeClass('open');
        $('#mobileFooterMenu').removeClass('open');

    });
    $('#mobileFooterMenu').click(function (e) {
        e.preventDefault();
        $('#footerMenu').toggleClass('open');
        $('#menu').removeClass('open');
        $('#mobileMenu').removeClass('open');
        $(this).toggleClass('open');
    });
    $(window).resize(function () {
        $('#mobileMenu,#mobileFooterMenu,#footerMenu,#menu').removeClass('open');
    });
};
setTimeout(function () {
    $(window).resize(function () {
        menuActions();
    });
}, 500)