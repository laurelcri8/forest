// -------------------- swiper ------------------
let swiperPopular = new Swiper(".popular_container", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
},

// breakPoint: {
//     709:{
//         slidesPerView: 3,
//     }
// }

breakpoints: {
    425: {
      slidesPerView: 2,
    },
    940: {
      spaceBetween: 25,
      slidesPerView: 4,
    },
  },
});


let open_menu= document.getElementById('open_menu');