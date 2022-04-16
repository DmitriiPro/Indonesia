const safari = () => {
    document.addEventListener('click', event => {
        if (event.target.matches('button')) {
            event.target.focus()
        }
        })
};
safari(); // для фокуса в сафари

// кнопки для блока booking
const bookingDateBtn = document.querySelector('.booking__date-btn'); // нашел кнопку дата
const bookingFormdate = document.querySelector('.booking__form-date'); // нашел сам блок с месяцем и датой позиционируем
const bookingFormdateBtn = document.querySelector('.booking__form-date-btn'); // нашел саму кнопку что в форме с датой и месяц
console.log(bookingFormdateBtn)
bookingDateBtn.addEventListener('click', () => {
    bookingFormdate.classList.toggle('form-active');
    console.log(55)
});

bookingFormdateBtn.addEventListener('click', () => {
    bookingFormdate.classList.toggle('form-active');
});
