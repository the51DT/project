let step = 0;

$('.left').on('click', function () {
  if (step === 1) {
    $('.login').removeClass('off');
    $('.header').removeClass('off');
    $('.liiv').removeClass('on');
    $('.liiv_footer').removeClass('on');
    step = 0;
  }
})

$('.right').on('click', function () {
  // login on
  if (step === 0) {
    $('.splash').addClass('on');
    $('.login').addClass('off');
    $('.header').addClass('off');
    setTimeout(() => {
      $('.splash').removeClass('on');
    }, 1000);
    setTimeout(() => {
      $('.liiv').addClass('on');
      $('.liiv_footer').addClass('on');
    }, 2000);
    step = 1;
  }
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
  loop: false,
  slidesPerView: "auto",
  spaceBetween: 15,
  centeredSlides: true,
})

let slider = document.querySelector(".slide-container .slide");
let isGrab = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", grabSlider);
slider.addEventListener("mousemove", grabMove);
slider.addEventListener("mouseup", () => isGrab = false);
slider.addEventListener("mouseleave", () => isGrab = false);

function grabSlider(e) {
  e.preventDefault();
  isGrab = true;
  startX = e.x;
  scrollLeft = slider.scrollLeft;
}

function grabMove(e) {
  e.preventDefault();
  if (!isGrab) return;
  let moveX = e.x;
  let walk = (moveX - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
}