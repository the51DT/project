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
    normalScrollElements: '.mask-area, #fp-nav, #header',
    'onLeave' : (index, nextIndex, direction) => {
			if (index == 1 && direction == 'down'){
        $('.mask-area').fadeOut(600);
        $('.main-txt, .arrow-down').fadeIn(800);
			};
			if (index == 2 && direction == 'up'){
        $('.mask-area').fadeIn(800);
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
    duration: 0.6,
  })
  tl.to('.mask-area, #header, .lang-chioce, #fp-nav', {
    opacity: 1,
    ease: 'ease-in',
    duration: 0.8,
    onComplete: function(){
      $('.bg-area').fadeIn();
      function videoPlay(){
        $('.main-video').get(0).currentTime = 0;
        $('.main-video').get(0).play();
        $('html').removeClass('fixed');
        $('body').off('scroll touchmove mousewheel');
        $('.ani-area').hide();
      };
      videoPlay();
    }
  })
  // tl.to('#header, .main-txt, .lang-chioce, .arrow-down, #fp-nav', {
  //   opacity: 1,
  //   ease: 'ease-in',
  //   duration: 0.8
  // })
  $('.mask-area, #fp-nav, #header').on('scroll mousewheel', (e) => {
    var wheel = e.originalEvent.wheelDelta;
    if(wheel > 0) {
      $('.mask-area').css({'transform':'scale(1)','transition':'transform 0.6s, opacity 0.3s ease 0.3s', 'opacity':'1'});
      $('.loading-txt').css({'transform':'translateY(0)','opacity':'1','transition':'all 0.6s'});
      $('.main-txt, .arrow-down').fadeOut(800);
    } else {
      $('.loading-txt').css({'transform':'translateY(60rem)','opacity':'0','transition':'all 0.6s'});
      $('.mask-area').css({'transform':'scale(500)','transition':'transform 0.6s, opacity 0.6s ease 0.2s','transform-origin':'55% center', 'opacity':'0'});
      $('.main-txt, .arrow-down').css({'opacity':'1','transition':'all 0.6s'});
      setTimeout(() => {
        $('.main-txt, .arrow-down').fadeIn(800);
      }, 300)
      setTimeout(() => {
        $('.mask-area').fadeOut(600);
      }, 600)
    }
  });

});

