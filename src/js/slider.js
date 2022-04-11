
// слайдер блока present

// const swiper = new Swiper('.present-swiper', {

// 	enabled: false,
// 	direction: 'horizontal',
// 	slidesPerView: 1,
// 	// spaceBetween: 15,
// 	// loop: true,

// 	pagination: {
// 	    el: '.swiper-pagination',
// 		dynamicBullets: true,
// 		// type: 'bullets',
// 	},
// mousewheel: true,
// keyboard: true,
	
// });

// const checkSlider = () => {
// 	if(window.innerWidth <= 730) {
// 		swiper.enable()
		
		
// 	} else {
// 		swiper.disable()
		
// 	};
// };
// checkSlider();
// window.addEventListener('resize', checkSlider);

// console.log(swiper);






const instalClassSwiper = () => {
    
    // block.classList.add('swiper');
    // block.querySelector('ul').className = 'swiper-wrapper about__swiper-wrapper';
    // block.querySelectorAll('.about__item').forEach(item => item.className = 'swiper-slide');
    
    new Swiper('.present-swiper', {
        // direction: 'horizontal',
        slidesPerView: 1,
			// spaceBetween: 15,
        centeredSlides: true,
        centeredSlidesBounds: true,
        pagination: {
            el: '.swiper-pagination',
            // type: 'bullets',
			// dynamicBullets: true,
        },
		mousewheel: true,
		keyboard: true,

        breakpoints: {
            // when window width is >= 320px
            730: {
                slidesPerView: 1,
                centeredSlides: true,                
                centeredSlidesBounds: true,
            },
            320: {
                slidesPerView: 1,
                centeredSlides: true,                
                centeredSlidesBounds: true,
            },
        }
    });

    
};

window.addEventListener('DOMContentLoaded', () => {
    
    if (window.screen.width <= 730) {
        instalClassSwiper(document.querySelector('.present-swiper'));
        // console.log(!document.querySelector('.present-swiper').closest('.swiper'));
        if (!document.querySelector('.present-swiper').closest('.swiper'))  location.reload();
    }
});

window.addEventListener('resize', () => {

    if (window.screen.width > 730 && document.querySelector('.present-swiper').closest('.swiper')) {
        location.reload();
    }

    if (window.screen.width <= 730) {
        instalClassSwiper(document.querySelector('.present-swiper'));
        // console.log(!document.querySelector('.swiper1').closest('.swiper'));
        if (!document.querySelector('.present-swiper').closest('.swiper'))  location.reload();
    }
    
});
