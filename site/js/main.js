$(document).ready(function () {
    $("#carousel1").owlCarousel({
        center: true,
        items: 2,
        loop: true,
        margin: 10,
        responsive: {
            600: {
                items: 3
            }
        }
    });
});