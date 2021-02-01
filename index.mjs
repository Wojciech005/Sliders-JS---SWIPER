import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'

const firstSlider = {
    a11y: true,
    // autoplay: {
    //     delay: 2000,
    //   },
      loop: true,
  
    navigation: {
        nextE1: '.swiper-button-next',
        prevE1: '.swiper-button-prev',
    },
    
    scrollbar: {
       el: '.swiper-scrollbar' ,
      
    },
    // breakpoints: {
    //     1025: {
    //         slidesPerView: 2,
    //         spaceBetween: 10
    //       },
    //       1300: {
    //         slidesPerView: 3,
    //         spaceBetween: 20
    //       },
    // }
}

const secondSlider = {
      autoplay: true,
    cubeEffect:{
    shadowOffset: 250,
    shadowScale: 1.1,
  },
      effect: 'cube',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable:  true,
      }
    }
  

new Swiper('.swiper-container-first', firstSlider)
new Swiper('.swiper-container-second', secondSlider);