document.addEventListener('DOMContentLoaded', function () {

    var next = document.getElementById('news__scrollbar--next');
    next.onclick = function () {
        document.getElementById('news__products--scroll').scrollLeft += 200;
    };

    var back = document.getElementById('news__scrollbar--back');
    back.onclick = function () {
        document.getElementById('news__products--scroll').scrollLeft -= 200;
    };
    
}, false);