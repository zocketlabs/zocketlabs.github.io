/*
 * nav.js
 * Scrolling, hiding/showing divs
 */

$(document).scroll(function() {
    $("#nav").toggleClass("navOnScroll",
                          $(this).scrollTop() > ($("#banner").height()
                                                 - $("#nav").height()));
});

var scrollDuration = 500;

function scrollToHome() {
    event.preventDefault();
    $("html, body").animate({
        scrollTop: 0
    }, scrollDuration);
}

function scrollToProducts() {
    event.preventDefault();
    $("html, body").animate({
        scrollTop: $("#products").offset().top
    }, scrollDuration);
}

function scrollToContact() {
    event.preventDefault();
    $("html, body").animate({
        scrollTop: $("#contact").offset().top
    }, scrollDuration);
}

function showPrivacy() {
    event.preventDefault();
    $("#privacyPolicy").show();
}

function hidePrivacy() {
    event.preventDefault();
    $("#privacyPolicy").hide();
}

