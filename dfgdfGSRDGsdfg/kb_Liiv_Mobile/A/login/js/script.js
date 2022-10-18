let step = 0;

$('.left').on('click', function () {
  if ($('.liiv_footer').hasClass('on')) {
    if (step === 1) {
      $('.login').removeClass('off');
      $('.header').removeClass('off');
      $('.liiv').removeClass('on');
      $('.liiv_footer').removeClass('on');
      step = 0;
    }
  }
})

$('.right').on('click', function () {
  // login on
  if (step === 0) {
    $('.splash').addClass('on');
    $('.login').addClass('off');
    $('.header').addClass('off');
    $('.splash_svg').addClass('on');
    setTimeout(() => {
      $('.splash').removeClass('on');
    }, 3000);
    setTimeout(() => {
      $('.liiv').addClass('on');
      $('.liiv_footer').addClass('on');
    }, 3000);
    step = 1;
  }
})

$('.login').on('click', function() {
    $('.splash').addClass('on');
    $('.login').addClass('off');
    $('.header').addClass('off');
    $('.splash_svg').addClass('on');
    setTimeout(() => {
      $('.splash').removeClass('on');
    }, 3000);
    setTimeout(() => {
      $('.liiv').addClass('on');
      $('.liiv_footer').addClass('on');
    }, 3000);
    step = 1;
})

$('.star').on('click', function () {
  $('.login').removeClass('off');
  $('.header').removeClass('off');
  $('.liiv').removeClass('on');
  $('.liiv_footer').removeClass('on');
  step = 0;
})

$('.more').on('click', function () {
  $('.menu').addClass('on');
  $('.liiv').removeClass('on');
})

$('.close').on('click', function () {
  $('.menu').removeClass('on');
  $('.liiv').addClass('on');
})

$('.chatImg').on('click', function () {
  $('.chat_text').addClass('on');
  setTimeout(() => {
    $('.chat_text').removeClass('on');
  }, 1000);
})

var mySwiper = new Swiper('.swiper-container', {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    },
  loop: false,
  slidesPerView: "auto",
  spaceBetween: 15,
  centeredSlides: true,
  observer: true,
  observeParents: true,
})

var mySwiper2 = new Swiper('.slide-container', {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    },
  loop: false,
  slidesPerView: "auto",
  spaceBetween: 15,
  centeredSlides: true,
  observer: true,
  observeParents: true,
})
var mySwiper = new Swiper('.swiper-container', {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    },
  loop: false,
  slidesPerView: "auto",
  spaceBetween: 15,
  centeredSlides: true,
  observer: true,
  observeParents: true,
})
mySwiper.autoplay.start();
var mySwiper2 = new Swiper('.slide-container', {
  autoplay: {
    running: true,
    delay: 2500,
    disableOnInteraction: false,
    },
  loop: false,
  slidesPerView: "auto",
  spaceBetween: 15,
  centeredSlides: true,
  observer: true,
  observeParents: true,
})
console.log(mySwiper2.autoplay)