const burgerBtn = document.querySelector('.header__burger'); // нашел кнопку бургер
const burgerNav = document.querySelector('.header__navigator'); // нашел саму навигацию бургер меню

burgerBtn.addEventListener('click', function() {
	burgerNav.classList.toggle('header__burger-toggle'); // добавил класс в котором дисплей блок класс добавляется и удаляется
});