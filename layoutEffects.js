function showFullStar() {
    var fullStar = document.getElementById('hidden-full-star');
    fullStar.style.visibility = 'visible';
}

function showHalfStar() {
    var halfStar = document.getElementById('hidden-half-star');
    halfStar.style.visibility = 'visible';
}

function showFullStarIntern() {
    var fullStarIntern = document.getElementById('hidden-fullStar');
    fullStarIntern.style.visibility = 'visible';
}

$(document).ready(function () {
    $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            },
            {
                duration: 4000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
    });
});