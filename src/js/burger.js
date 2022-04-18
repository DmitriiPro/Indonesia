const burgerBtn = document.querySelector('.header__burger'); // нашел кнопку бургер
const burgerNav = document.querySelector('.header__navigator'); // нашел саму навигацию бургер меню
const navBurger = $('.header__navigator');
const footerMenuLink = document.querySelector('.header__link'); // нашел сами ссылки в бургере меню
console.log(footerMenuLink)

burgerBtn.addEventListener('click', function() {
	burgerNav.classList.toggle('header__burger-toggle'); // добавил класс в котором дисплей блок класс добавляется и удаляется
	footerMenuLink.style.display = 'none';
});

// footerMenuLink.addEventListener('click', function() {
	// footerMenuLink.classList.toggle('header__burger-toggle');
	// burgerNav.classList.toggle('header__burger-toggle');
	// for(let footerMenuLink of links) {
		// footerMenuLink.addEventListener('click', function() {
		// 	// this.classList.add('links-hide')
		// 	burgerNav.classList.add('links-hide');
		// }
	// }
// });
// $('.header__link').on('click', function() {
// 	navBurger.hide();
// 	// if(window.screen.width <= 480) {
// 	// 	burgerBtn.show();
// 	// 	closeImg.hide();
	  
// 	// } 
// });