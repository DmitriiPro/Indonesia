const safari = () => {
    document.addEventListener('click', event => {
        if (event.target.matches('button')) {
            event.target.focus()
        }
        })
};
safari(); // для фокуса в сафари

const scroll = () => {

    let $page = $('html, body'); // для плавного скролла по якорям
    $('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    return false;
    });

};
scroll();