var swiper = new Swiper(".mySwiper-home", {
    grabCursor: true,
    spaceBetween: 200,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },
    slidesPerView: "auto",
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swipe-right",
        prevEl: ".swipe-left",
      },
});