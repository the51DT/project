$(document).ready(function(){
  // WebFont
  WebFont.load({
    // For google fonts
    google: {
      families: ["Noto Sans KR", "Poppins"],
    },
  });

  // gnb
  $("#header").hover(function () {
    $("#header").toggleClass("active");
  });

  // header
  $(window).scroll(function () {
    let csTop = $(document).scrollTop();
    if (csTop > 10) {
      $(".main-tool-bar").addClass("main-tool-bar-scrolled");
    } else {
      $(".main-tool-bar").removeClass("main-tool-bar-scrolled");
    }
  });

  /*-- section1 --*/
  // main-video
  function mainVideoPlay() {
    $('.main-video').get(0).currentTime = 0;
    $('.main-video').get(0).play();
  };

  
  /*-- section3 --*/
  // program-slide
  const swiper = new Swiper('.program-slide', {
    loop: true,
    touchRatio: 0,
    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev',
    },
    effect: 'fade',
    speed: 800,
    debugger: true,
    observer: true,
    observeParents: true,
    initialSlide: 0,
    waitForTransition: true,
  });

  // slide-video handler
  function slideVideoPlay() {
    $('.swiper-slide-active .slide-video').get(0).currentTime = 0;
    $('.swiper-slide-active .slide-video').get(0).play();
  };
  function slidePlay() {
    slideVideoPlay();
    let videoRunTime = document.querySelector('.swiper-slide-active .slide-video').duration; 
    $('.progress-bar').addClass('active').children('span').css('animation', 'coolTime linear ' + videoRunTime +'s');
  };
  function resetProgress() {
    $('.progress-bar').removeClass('active').children('span').removeAttr('style');
  };

  // slide play handler
  setInterval(function() {
    if($('.swiper-slide-active .slide-video').prop('ended')){
      swiper.slideNext();
    };
  },200);
  swiper.on('slideChangeTransitionEnd', () => {
    slidePlay();
  });
  swiper.on('slideChangeTransitionStart', () => {
    resetProgress();
  });


  /*-- fullpage --*/
  $('#main').fullpage({
    autoScrolling: true,
    scrollOverflow: true,
    navigation: true,
    navigationPosition: 'right',
    scrollingSpeed: 800,
    fitToSection: false,
    keyboardScrolling: false,
    anchors: ['home', 'brand-vision', 'program', 'news', 'main-footer'],
    normalScrollElements: '.mask-area, #fp-nav, #header',
    'onLeave' : (index, nextIndex, direction) => {
			if (index == 2 && direction == 'up'){
        mainVideoPlay();
			};
		},
    'afterLoad': (anchorLink, index) => {
      if (index === 1){
        mainVideoPlay();
			};
			if (index === 3){
        slidePlay();
			} else {
        resetProgress();
      };
		},
  });
  
  
  /*-- loading animation --*/
  // mask off
  let maskOff = () => {
    $('.mask-area, #fp-nav, #header').on('scroll mousewheel', (e) => {
      var wheel = e.originalEvent.wheelDelta;
      if(!(wheel > 0)) {
        $('.loading-txt').css({'transform':'translateY(60rem)','opacity':'0','transition':'all 0.6s'});
        $('.mask-area').css({'transform':'scale(300)','transition':'transform linear 1s, opacity 0.6s ease 0.2s','transform-origin':'55% center', 'opacity':'0'});
        $('.main-txt, .arrow-down, #fp-nav').css({'opacity':'1','transition':'all 0.6s'});
        setTimeout(() => {
          $('.mask-area').fadeOut(600);
        }, 600);
      };
    });
  };

  $('body, .mask-area, #fp-nav, #header').on('scroll touchmove mousewheel', (event) => {                    
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
  .add('start0'),
  tl.to('.txt1', {
    x: 0,
    opacity: 1,
    ease: 'ease-in',
    duration: 0.6
  })
  tl.to('.ani-area', {
    x: '-50%',
    ease: 'ease-in',
    duration: 0.6
  },'start0')
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
  tl.to('.mask-area, #header, .lang-chioce', {
    opacity: 1,
    ease: 'ease-in',
    duration: 0.8,
    onComplete: function(){
      $('.bg-area').fadeIn();
      $('body').off('scroll touchmove mousewheel');
      $('.ani-area').hide();
      maskOff();
      mainVideoPlay();
    }
  });

});


/*-- loading reset --*/
$(window).on('load', () => {
  // 페이지 로딩화면
  $('.loading').hide();

  // 해쉬 리셋
  if(!(window.location.hash === '#home' || window.location.hash === '')){
    $(location).attr('href', 'main.html');
  };
});