const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

// const scroll = new LocomotiveScroll({
//   el: document.querySelector('[data-scroll-container]'),
//   smooth: true
// });

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

 
// function customCusor(){
//   let heroContent = document.querySelector(".hero-section .section-content");

//   heroContent.addEventListener("mousemove", function(dets) {
//       gsap.to(".hero-section .cursor",{
//         x:dets.x-20,
//         y:dets.y-30,
//         scale:1,
//         opacity:1,
//         ease:"back.out"
//       })
//   });
//   heroContent.addEventListener("mouseleave", function(dets) {
//     gsap.to(".hero-section .cursor",{
//       x:dets.x-20,
//       y:dets.y-30,
//       scale:0,
//       opacity:0,
//       ease:"back.out"
//     })
//   });
// }
// customCusor();

  gsap.from(".hero-section .hero-details h1,.hero-section .hero-details h3",{
    y:100,
    duration:1.5,
    opacity:0,
    delay:.5,
    stagger:0.2,
  })


  gsap.from(".about-image-wrapper",{
    x:-400,
    opacity:0,
    // delay:1,
    duration:1,
    scrollTrigger:{
      trigger:".about-section .about-image-wrapper",
      scroll:"body",
      start:"top 60%",
      end:"bottom 30%",
     
    }
  })
  gsap.from(".about-details",{
    x:400,
    opacity:0,
    duration:1,
    // delay:1,
    scrollTrigger:{
      trigger:".about-section .about-image-wrapper",
      scroll:"body",
      start:"top 60%",
      end:"bottom 30%",
      
    }
  })
  gsap.to(".about-section .bg-about",{
    // x:400,
    scale:0.7,
    opacity:0,
    duration:.5,
    scrollTrigger:{
      trigger:".about-section .about-image-wrapper",
      scroll:"body",
      start:"top 60%",
      end:"top 30%",
    }
  })
  gsap.from(".menu-item",{
    // x:-100,
    scale:1,
    opacity:0,
    duration:1,
    stagger:0.5,
    scrollTrigger:{
      trigger:".menu-section",
      scroll:"body",
      start:"top 60%",
      end:"top 30%",
      scrollBehaviour:"smooth",
    }
  })
  gsap.from(".sctgr",{
    // y:200,
    scale:1,
    opacity:0,
    duration:5,
    scrollTrigger:{
      trigger:".testimonials-section",
      scroll:"body",
      start:"top 60%",
      end:"top 30%",
    }
  })
  gsap.from(".form-input",{
    x:500,
    scale:1,
    opacity:0,
    duration:1,
    stagger:0.5,
    scrollTrigger:{
      trigger:".contact-section",
      scroll:"body",
      start:"top 60%",
      end:"top 30%",
      scrollBehaviour:"smooth",
    }
  })
  gsap.from(".submit-button",{
    x:-500,
    scale:1,
    opacity:0,
    duration:1,
    scrollTrigger:{
      trigger:".contact-section",
      scroll:"body",
      start:"top 60%",
      end:"top 30%",
      scrollBehaviour:"smooth",
    }
  })
  gsap.from(".contact-info",{
    // x:-500,
    scale:1,
    opacity:0,
    duration:15,
    scrollTrigger:{
      trigger:".contact-section",
      scroll:"body",
      start:"top 60%",
      end:"top 30%",
      scrollBehaviour:"smooth",
    }
  })
