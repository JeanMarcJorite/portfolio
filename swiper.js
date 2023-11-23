import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const swiper = new Swiper('.swiper', {
    // Install modules
    modules: [Navigation, Pagination, Scrollbar],
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});

swiper = document.querySelector('.swiper').swiper;

// Now you can use all slider methods like
swiper.slideNext();
swiper.nextEl()
swiper.prevEl()