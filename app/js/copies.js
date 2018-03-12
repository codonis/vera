$(document).ready(function () {
    $('.inside').each(function () {
        var insideText = $(this).find('h1').text();
        $(this).find('h2').empty().text(insideText);
    });
    var footerTellink = $('#footerTel').attr('href');
    var footerMailLink = $('#footerMail').attr('href');
    var footerTel = $('#footerTel span').text();
    var footerMail = $('#footerMail span').text();
    var contactTel = $('#contactTel');
    var contactTelElText = $('#contactTel p');
    var contactMail = $('#contactMail');
    var contactMailElText = $('#contactMail p');
    contactTel.attr('href', footerTellink);
    contactMail.attr('href', footerMailLink);
    contactMailElText.text(footerMail);
    contactTelElText.text(footerTel);
});