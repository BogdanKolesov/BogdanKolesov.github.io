const slider = document.querySelector('.swiper-container');
const slider1 = document.querySelector('.swiper-container1');
const slider2 = document.querySelector('.swiper-container2');
const slider3 = document.querySelector('.swiper-container3');
const slider4 = document.querySelector('.swiper-container4');

let mySwiper = new Swiper(slider, {
    slidesPerView: 2.2,
    spaceBetween: 100,
    speed: 150,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 5000,
    },
    breakpoints: {
        910: {
            slidesPerView: 2.2,
        },
        700: {
            slidesPerView: 1,
        },
        320: {
            slidesPerView: 1,
        },
    },
});

let mySwiper1 = new Swiper(slider1, {
    slidesPerView: 2.2,
    spaceBetween: 100,
    speed: 150,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 5000,
    },
    breakpoints: {
        910: {
            slidesPerView: 2.2,
        },
        700: {
            slidesPerView: 1,
        },
        320: {
            slidesPerView: 1,
        },
    },
});
let mySwiper2 = new Swiper(slider2, {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

});



let mySwiper3 = new Swiper(slider3, {
    slidesPerView: 1,
    spaceBetween: 100,
    speed: 150,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
    },
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

let mySwiper4 = new Swiper(slider4, {
    slidesPerView: 1,
    spaceBetween: 100,
    speed: 150,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
    },
    loop: true,
    pagination: {
        el: '.swiper-pagination4',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next4',
        prevEl: '.swiper-button-prev4',
    },
});