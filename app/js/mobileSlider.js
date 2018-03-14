$(document).ready(function () {
    function slider() {
        var slide = $('.slide'), activeSlide = $('.slide.active'), thumb = $('.slider-thumb li');
        thumb.each(function () {
            var ind = $(this).index();
            var slideIndx = slide.eq(ind).find('.inside');
            $(this).find('a').css('background-image', slideIndx.css('background-image'));
        });
        slide.eq(0).addClass('active');
        thumb.eq(activeSlide.index() + 1).addClass('active');
        thumb.each(function () {
            $(this).click(function () {
                if (!$(this).hasClass('active')) {
                    thumb.removeClass('active');
                    $(this).addClass('active');
                    slide.removeClass('active');
                    slide.eq($(this).index()).addClass('active');
                }
            });
        });
        $(window).resize(function () {
            thumb.removeClass('active');
            thumb.eq(0).addClass('active');
        });
    }
    slider();
    $(window).resize(function () {
        slider();
    });
});


