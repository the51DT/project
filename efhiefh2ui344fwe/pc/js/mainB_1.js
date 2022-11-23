$(document).ready(() => {

  // loading animation
  $('.mask-area, .loading-txt, #fp-nav, .header').on('scroll mousewheel', (e) => {
      var wheel = e.originalEvent.wheelDelta;
      if(wheel > 0) {
        $('.mask-area').css({'transform':'scale(1)','transition':'transform 0.6s'});
        $('.loading-txt').css({'transform':'translateY(0)','opacity':'1','transition':'all 0.6s'});
        $('.section1 .main-txt').fadeOut(800);
      } else {
        $('.loading-txt').css({'transform':'translateY(60rem)','opacity':'0','transition':'all 0.6s'});
        $('.mask-area').css({'transform':'scale(200)','transition':'transform 0.8s','transform-origin':'55% center'});
        setTimeout(() => {
          $('.mask-area, .loading-txt').fadeOut(800);
          $('.section1 .main-txt').fadeIn(800);
        }, 300)
      }
    });



  // fullpage
  $('#fullpage').fullpage({
    autoScrolling: true,
    navigation: true,
    navigationPosition: 'right',
    anchors: ['home', 'brandVision', 'ourGame', 'news', 'footer'],
    scrollOverflow: true,
    scrollingSpeed: 800,
    fitToSection: false,
    normalScrollElements: '.mask-area, .loading-txt, #fp-nav, .header',
    'onLeave' : (index, nextIndex, direction) => {
			if (index == 1 && direction == 'down'){
        $('.mask-area, .loading-txt').fadeOut(600);
			};
			if (index == 2 && direction == 'up'){
        $('.mask-area, .loading-txt').fadeIn(800);
        mainVideoPlay();
			};
		},
    'afterLoad': (anchorLink, index) => {
			if (index === 3){
        swiper.autoplay.start();
        $('.progress-bar').addClass('active');
        slideVideoPlay();
			} else {
        swiper.autoplay.stop();
        $('.progress-bar').removeClass('active');
      }
		},	
  });


  // section3 slide
  const swiper = new Swiper('.section3-slide', {
    loop: true,
    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev',
    },
    effect: 'fade',
    autoplay: {
      disableOnInteraction: false,
      delay: 9000,
    },
    speed: 800,
    debugger: true,
    observer: true,
    observeParents: true,
    initialSlide: 0,
    waitForTransition: true,
  });

  swiper.autoplay.stop();

  function mainVideoPlay() {
    $('.main-video').get(0).currentTime = 0;
    $('.main-video').get(0).play();
  };
  function slideVideoPlay() {
    $('.swiper-slide-active .slide-video').get(0).currentTime = 0;
    $('.swiper-slide-active .slide-video').get(0).play();
  };
  swiper.on('slideChangeTransitionEnd', () => {
    slideVideoPlay();
    $('.progress-bar').addClass('active');
    $('.swiper-slide-active .img-wrap').css({'opacity':'1','transition':'opacity 1.2s'})
  });
  swiper.on('slideChangeTransitionStart', () => {
    $('.progress-bar').removeClass('active');
    $('.swiper-slide-active .img-wrap').css({'opacity':'0','transition-delay':'opacity 1.2s'})
  });
});

