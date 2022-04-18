// слайдер для блока why

const swiper = new Swiper('.photo__swiper', {

	loop: true,
	slidesPerView: 1,
	spaceBetween: 0,
    centeredSlides: true,                
    centeredSlidesBounds: true,
	
	mousewheel: true,
	keyboard: true,
	
	navigation: {
	    nextEl: '.photo__btn-right',
	    prevEl: '.photo__btn-left',
	},

});