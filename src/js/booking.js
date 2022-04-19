
// кнопки для блока booking
const bookingDateBtn = document.querySelector('.booking__date-btn'); // нашел кнопку дата
const bookingFormdate = document.querySelector('.booking__form-date'); // нашел сам блок с месяцем и датой позиционируем
const bookingFormdateBtn = document.querySelector('.booking__form-date-btn'); // нашел саму кнопку что в форме с датой и месяц

bookingDateBtn.addEventListener('click', () => {
    bookingFormdate.classList.toggle('form-active');
});

bookingFormdateBtn.addEventListener('click', () => {
    bookingFormdate.classList.toggle('form-active');
});


const bookingPeopleBtn = document.querySelector('.booking__people-btn');// нашел кнопку люди
const bookingFormnum = document.querySelector('.booking__formnum');

bookingPeopleBtn.addEventListener('click', () => {
    bookingFormnum.classList.toggle('formnum-active');
});

const bookingOptionsbtn = document.querySelector('.booking__options-btn'); // нашел саму кнопку опции
const bookingFormoption = document.querySelector('.booking__formoption'); // карточка опции 
const bookingFormoptionBtn = document.querySelector('.booking__formoption-btn'); // кнопка из опций

bookingOptionsbtn.addEventListener('click', () => {
    bookingFormoption.classList.toggle('opt-active');
});
bookingFormoptionBtn.addEventListener('click', () => {
    bookingFormoption.classList.toggle('opt-active');
});


const form = () => {

const bookingForm = document.querySelector('.booking__form');
const bookingTitle = $('.booking__title');

$('.booking__form').submit(function (event) {
    event.preventDefault();
    
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/todos',
        type: 'POST',
        data: $(this).serialize(),
        success(data) {
            bookingTitle.text('Спасибо ваша заявка принята, номер заявки ' + data.id)
            bookingForm.reset();
        }, 
        error() {
            bookingTitle.text('Что то пошло не так, попробуйте позже!')
        } 
    })
    
});

};
form();


const mask = () => {
    const inputMask = document.querySelector('.booking__phone-input'); // нашел сам инпут телефон другой класс
    const tel = new Inputmask('+7 (999)-999-99-99'); // на инпут сделал маску для номера 
    tel.mask(inputMask);
};
mask();