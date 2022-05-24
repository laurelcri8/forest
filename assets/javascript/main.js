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
// }

breakpoints: {
    374:{
        slidesPerView: 2,
    },
    709:{
        slidesPerView: 3,
    },
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
let nav_bar=document.querySelector('.nav_bar');
open_menu.addEventListener('click', ()=>{
    open_menu.classList.toggle('fa-times');
    nav_bar.classList.toggle('active')
    
})