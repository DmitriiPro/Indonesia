
// слайдер блока present

const instalClassSwiper = () => {
    
    new Swiper('.present-swiper', {
    
        slidesPerView: 1,
		
        centeredSlides: true,
        centeredSlidesBounds: true,
        pagination: {
            el: '.swiper-pagination',
            
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
        
        if (!document.querySelector('.present-swiper').closest('.swiper'))  location.reload();
    }
});

window.addEventListener('resize', () => {

    if (window.screen.width > 730 && document.querySelector('.present-swiper').closest('.swiper')) {
        location.reload();
    }

    if (window.screen.width <= 730) {
        instalClassSwiper(document.querySelector('.present-swiper'));
        
        if (!document.querySelector('.present-swiper').closest('.swiper'))  location.reload();
    }
    
});
