
// Js Code for Login Modal
$(document).ready(function () {
    $("#login").click(function () { //On Button click
        $("#loginModal").modal(); // Open modal with this Id.
    });
});

// Js Code for Reserve Modal
$(document).ready(function () {
    $("#reserve1").click(function () { //On Button click
        $("#reserve").modal();  // Open modal with this Id.
    });
});


// Code for carousel
$("#carouselButton").click(function () { // Code for carousal
    if ($("#carouselButton").children("span").hasClass('fa-pause')) {
        $("#mycarousel").carousel('pause');
        $("#carouselButton").children("span").removeClass('fa-pause');
        $("#carouselButton").children("span").addClass('fa-play');
    }
    else if ($("#carouselButton").children("span").hasClass('fa-play')) {
        $("#mycarousel").carousel('cycle');
        $("#carouselButton").children("span").removeClass('fa-play');
        $("#carouselButton").children("span").addClass('fa-pause');
    }
});