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

// форма отправки почты footer
const footerForm = () => {
const footerForminput = document.querySelector('.footer__form-input'); //нашел инпут почты
const footerForm = document.querySelector('.footer__form'); // нашел саму форму отправки

$('.footer__form').submit(function (event) {
    event.preventDefault();
    
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/todos',
        type: 'POST',
        data: $(this).serialize(),
        success(data) {
            console.log('Заявка успешно отправлена!!!');
            footerForm.reset();
        }, 
        error() {
            console.log('Что то пошло не так, попробуйте позже!')
        } 
    })
    
});

};
footerForm();