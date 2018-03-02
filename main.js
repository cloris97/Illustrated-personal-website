/*
Code copied from: https://medium.com/@mariusc23/hide-header-on-scroll-down-show-on-scroll-up-67bbaae9a78c
Author: Marius Craciunoiu
Name: Hide header on scroll down, show on scroll up
Date retrieved: Mar. 2, 2018.
*/
var didScroll;
var lastScrollTop = 0;
var delta = 1;
var navbarHeight = $("nav").outerHeight();

// on scroll, let the interval function know the user has scrolled
$(window).scroll(function (event) {
    didScroll = true;
});

// run hasScrolled() and reset didScroll status
setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    if (Math.abs(lastScrollTop  -  st) <= delta)
        return;
    // If current position > last position AND scrolled past navbar...
    if (st > lastScrollTop && st > navbarHeight) {
        console.log(navbarHeight);
        // Scroll Down
        $("nav").fadeOut(300);
    } else {
        // Scroll Up
        // If did not scroll past the document (possible on mac)...
        if (st + $(window).height() < $(document).height()) {
            $("nav").fadeIn(300);
        }
    }
    lastScrollTop = st;
}

/*
Code copied from: https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll
Author: w3schools.com
Name: tryjquery_eff_animate_smoothscroll
Description: makes in-page link scroll smoothly.
Date retrieved: Mar. 2, 2018
*/

// Add smooth scrolling to all links
$("a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function () {

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
    } // End if
});