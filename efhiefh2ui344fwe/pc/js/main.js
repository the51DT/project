$(document).ready(function(){

  // program slide
  const swiper = new Swiper('.program-slide', {
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



  // fullpage
  $('#main').fullpage({
    autoScrolling: true,
    scrollOverflow: true,
    navigation: true,
    navigationPosition: 'right',
    scrollingSpeed: 800,
    fitToSection: false,
    'onLeave' : (index, nextIndex, direction) => {
			// if (index == 1 && direction == 'down'){
      //   $('.mask-area, .loading-txt').fadeOut(600);
			// };
			if (index == 2 && direction == 'up'){
        // $('.mask-area, .loading-txt').fadeIn(800);
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
  
  
  
  // loading animation
  gsap.registerPlugin(ScrollTrigger);

  $('html').addClass('fixed');
  $('body').on('scroll touchmove mousewheel', function(event) {                    
    event.preventDefault();
    event.stopPropagation();
    return false;
  });

  let tl = gsap.timeline({});
  tl.to('.icon-x', {
    rotation: 315,
    ease: 'ease-in-out',
    duration: 0.6
  })
  tl.to('.txt1', {
    x: 0,
    opacity: 1,
    ease: 'ease-in',
    duration: 0.6
  })
  .add('start1'),
  tl.to('.txt1', {
    delay: 0.1,
    x: '-100%',
    opacity: 0,
    ease: 'ease-out',
    duration: 0.6
  })
  tl.to('.txt1', {
    display: 'none',
    duration: 0.1
  })
  .add('start2'),
  tl.to('.icon-x', {
    rotation: 0,
    ease: 'ease-in-out',
    duration: 0.5
  },'start1')
  tl.to('.txt2-1', {
    x: 0,
    opacity: 1,
    ease: 'ease-in',
    duration: 0.5
  },'start2')
  .add('start3'),
  tl.to('.txt2-2', {
    delay: '-0.2',
    x: 0,
    opacity: 1,
    ease: 'ease-in',
    duration: 0.5
  },'start3')
  tl.to('.icon-x, .txt2', {
    delay: 0.1,
    x: '-100%',
    opacity: 0,
    ease: 'ease-out',
    duration: 0.6
  })
  tl.to('.logo-x', {
    delay: 0.3,
    opacity: 1,
    ease: 'ease-out',
    duration: 0.6,
    onComplete: function(){
      $('.bg-area').fadeIn();
      function videoPlay(){
        $('.main-video').get(0).currentTime = 0;
        $('.main-video').get(0).play();
      };
      videoPlay();
    }
  })
  tl.to('.logo-x', {
    width: '250px',
    height: '40px',
    top: '24px',
    left: '0',
    backgroundPosition: '100% center',
    transform: 'translateY(0)',
    ease: Power4.easeOut,
    duration: 0.9,
    onComplete: function(){
      $('html').removeClass('fixed');
      $('body').off('scroll touchmove mousewheel');
      $('.ani-area').css({'z-index':'-1'});
      // $('.logo.main').css({'opacity':1, 'transition':'opacity 0.2s ease-out'})
    }
  })
  tl.to('.main-header .logo, .main-txt', {
    opacity: 1,
    ease: 'ease-in',
    duration: 0.8
  })
  tl.to('.main-header .gnb, .main-header .lang-chioce, .arrow-down, #fp-nav', {
    // delay: '-0.4',
    opacity: 1,
    ease: 'ease-in',
    duration: 0.8
  })
  tl.to('.header-inner', {
    height: 'auto',
    duration: 0.1
  });

});

