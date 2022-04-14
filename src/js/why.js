// слайдер для блока why

const swiper = new Swiper('.photo__swiper', {
	// Optional parameters
	// direction: 'vertical',
	loop: true,
	slidesPerView: 1,
	spaceBetween: 0,
  
	// If we need pagination
	// pagination: {
	//   el: '.swiper-pagination',
	// },
  
	mousewheel: true,
	keyboard: true,
	// Navigation arrows
	navigation: {
	  nextEl: '.photo__btn-right',
	  prevEl: '.photo__btn-left',
	},
  
	// And if we need scrollbar
	// scrollbar: {
	//   el: '.swiper-scrollbar',
	// },
  });