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
$('.filter h3').click(function () {
    $(this).toggleClass('open');
   $('.filter-content').slideToggle(500);
});

/*! Map Api Js Start */
var stls = [
    {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "lightness": 100
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#07a199"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#07a199"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#07a199"
            },
            {
                "lightness": 21
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#07a199"
            },
            {
                "lightness": 17
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 18
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#07a199"
            },
            {
                "lightness": 19
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.station.airport",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 17
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    }
]

var markers = [
    // [1002, -14.2350040, -51.9252800],
    // [2000, -34.028249, 151.157507],
    // [123, 39.0119020, -98.4842460],
    [50, 48.8566140, 2.3522220],
    [22, 38.7755940, -9.1353670],
    [12, 12.0733335, 52.8234367],
];

function initializeMaps() {
    var myLatLng = { lat: -25.36354, lng: 131.04454 };

    var map = new google.maps.Map(document.getElementById('map_canvas'), {
        zoom: 4,
        center: myLatLng,
        styles: stls,
        //disableDefaultUI: true,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: true
    });

    var bounds = new google.maps.LatLngBounds();

    markers.forEach(function (point) {
        generateIcon(point[0], function (src) {
            var pos = new google.maps.LatLng(point[1], point[2]);

            bounds.extend(pos);

            new google.maps.Marker({
                position: pos,
                map: map,
                icon: src,
            });
        });
    });

    map.fitBounds(bounds);
}

var generateIconCache = {};

function generateIcon(number, callback) {
    if (generateIconCache[number] !== undefined) {
        callback(generateIconCache[number]);
    }

    var fontSize = 16,
        imageWidth = imageHeight = 35;

    if (number >= 1000) {
        fontSize = 10;
        imageWidth = imageHeight = 55;
    } else if (number < 1000 && number > 100) {
        fontSize = 14;
        imageWidth = imageHeight = 45;
    }

    var svg = d3.select(document.createElement('div')).append('svg')
        .attr('viewBox', '0 0 54.4 54.4')
        .append('g')

    var circles = svg.append('circle')
        .attr('cx', '27.2')
        .attr('cy', '27.2')
        .attr('r', '21.2')
        .style('fill', '#9b59b6');

    var path = svg.append('path')
        .attr('d', 'M27.2,0C12.2,0,0,12.2,0,27.2s12.2,27.2,27.2,27.2s27.2-12.2,27.2-27.2S42.2,0,27.2,0z M6,27.2 C6,15.5,15.5,6,27.2,6s21.2,9.5,21.2,21.2c0,11.7-9.5,21.2-21.2,21.2S6,38.9,6,27.2z')
        .attr('fill', '#FFFFFF');

    var text = svg.append('text')
        .attr('dx', 27)
        .attr('dy', 32)
        .attr('text-anchor', 'middle')
        .attr('style', 'font-size:' + fontSize + 'px; fill: #FFFFFF; font-family: Arial, Verdana; font-weight: bold')
        .text(number);

    var svgNode = svg.node().parentNode.cloneNode(true),
        image = new Image();

    d3.select(svgNode).select('clippath').remove();

    var xmlSource = (new XMLSerializer()).serializeToString(svgNode);

    image.onload = (function (imageWidth, imageHeight) {
        var canvas = document.createElement('canvas'),
            context = canvas.getContext('2d'),
            dataURL;

        d3.select(canvas)
            .attr('width', imageWidth)
            .attr('height', imageHeight);

        context.drawImage(image, 0, 0, imageWidth, imageHeight);

        dataURL = canvas.toDataURL();
        generateIconCache[number] = dataURL;

        callback(dataURL);
    }).bind(this, imageWidth, imageHeight);

    image.src = 'data:image/svg+xml;base64,' + btoa(encodeURIComponent(xmlSource).replace(/%([0-9A-F]{2})/g, function (match, p1) {
        return String.fromCharCode('0x' + p1);
    }));
}

$(document).ready(function () {
    if (document.getElementById('map_canvas')) {
        initializeMaps();
    }
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



var scrollUpBtn = $('.scroll-up');
$(window).scroll(function () {

    if ($(window).scrollTop() > 120) {
        scrollUpBtn.addClass('active');
        /* scrollUpBtn.parent().removeClass('s-hide'); */
    } else {
        scrollUpBtn.removeClass('active');
        /* scrollUpBtn.parent().addClass('s-hide'); */

    }
});
scrollUpBtn.click(function () {
    $('html,body').animate({
        scrollTop: 0
    }, 500);
});
new WOW().init();