$(document).ready(function () {
    $('.inside').each(function () {
        var insideText = $(this).find('h1').text();
        $(this).find('h2').empty().text(insideText);
    });
});