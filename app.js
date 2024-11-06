const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => menuOpenButton.click());

navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click());
});

// --------------------------------------
// const contactlink = document.querrySelectorAll(".contact-form");
// const buybutton = document.querrySelector("#buybtn");
// contactlink.forEach(link => {
//     link.addEventListener("click", () => buybutton.click());
// });



// initialize swiper

const swiper = new Swiper('.slider-wrapper', {
    // Optional parameters
    loop: true,
    grabCursor:true,
    spaceBetween: 25,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },

  });

//   let tl = gsap.timeline();
//   tl.from(".about-image-wrapper",{
//     x:-900,
//     // scale:0,
//     opacity:0,
//     duration:2,
//     scrollTrigger:{
//         trigger:".about-image-wrapper",
//         scroller:"body",
//         start:"top 60%",
//         end:"top 30%",
//         scrub:2,
//         markers:true,
//     }
//   },"a")
//   tl.from(".about-section .section-content",{
//     opacity:0,
//     duration:2,
//     x:500,
//     scrollTrigger:{
//         trigger:".about-image-wrapper",
//         scroller:"body",
//         start:"top 60%",
//         end:"top 30%",
//         scrub:2,
//         markers:true,
//     }
//   },"a")

