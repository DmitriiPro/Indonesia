// const burgerBtn = document.querySelector('.header__burger'); // нашел кнопку бургер
// const burgerNav = document.querySelector('.header__navigator'); // нашел саму навигацию бургер меню
// const navBurger = $('.header__navigator');
// const footerMenuLink = document.querySelector('.header__link'); // нашел сами ссылки в бургере меню
// console.log(footerMenuLink)

// burgerBtn.addEventListener('click', function() {
// 	burgerNav.classList.toggle('header__burger-toggle'); // добавил класс в котором дисплей блок класс добавляется и удаляется
	
// });



///////////////////////////////
const burgerBtn = $('.header__burger'); // нашел кнопку бургер
const navBurger = $('.header__navigator'); // нашел саму навигацию бургер меню

const link = $('.header__link');

burgerBtn.on('click', function() {  // открывает окно и закрывает
	navBurger.fadeToggle(500);
	
});

$('.header__link').on('click', function() {
	navBurger.hide();
	
}); // при клике по ссылке закрывается бургер меню