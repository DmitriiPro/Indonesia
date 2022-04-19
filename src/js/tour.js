const tourClick = document.querySelector('.tour__click'); // нашел див будет кнопкой
const tourFreeDate = document.querySelector('.tour__free-date'); // нашел блок что скрывал с датой

tourClick.addEventListener('click', () => {
	tourFreeDate.classList.toggle('dates-free');
});

const tourClickPeople = document.querySelector('.tour__click-people'); // нашел сам див что будет кнопкой
const tourPeopleBlock = document.querySelector('.tour__people-block'); // нашел сам блок с цифрами что скрывал

tourClickPeople.addEventListener('click', () => {
	tourPeopleBlock.classList.toggle('people-click');
});

const tourClickOptions = document.querySelector('.tour__click-options'); // нашел сам див будет кнопкой 
const tourOptionsBlock = document.querySelector('.tour__options-block'); // нашел сам блок с чекбоксами

tourClickOptions.addEventListener('click', () => {
	tourOptionsBlock.classList.toggle('click-options');
})


const tourDateBtn = document.querySelector('.tour__date-btn'); // Нашел кнопку окна свободных дат при клике окно закрывается
tourDateBtn.addEventListener('click', () => {
	tourFreeDate.classList.toggle('dates-free'); // добавляю класс скрыть открыть 
});

const tourDateBtnClick = document.querySelector('.tour__date-btn-click'); // нашел кнопку из окна опции

tourDateBtnClick.addEventListener('click', () => {
	tourOptionsBlock.classList.toggle('click-options');
});