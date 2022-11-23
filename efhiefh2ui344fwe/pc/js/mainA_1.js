$(document).ready(function(){
  gsap.registerPlugin(ScrollTrigger);
  
  // loading animation
  $('html').addClass('fixed');

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
  // tl.to('.ani-area', {
  //   zIndex: '-1',
  //   position: 'absolute',
  //   duration: 0.1
  // })
  tl.to('.logo', {
    delay: 0.3,
    opacity: 1,
    ease: 'ease-out',
    duration: 0.6,
    onComplete: function(){
      $('.video-area').fadeIn();
      function videoPlay(){
        $('.main-video').get(0).currentTime = 0;
        $('.main-video').get(0).play();
      };
      videoPlay();
    }
  })
  tl.to('.logo', {
    width: '10.6rem',
    top: '5rem',
    bottom: 'auto',
    left: '31rem',
    ease: Power4.easeOut,
    duration: 0.9,
    onComplete: function(){
      $('html').removeClass('fixed');
    }
  })
  tl.to('.logo2, .nav, .main-txt, .arrow-down', {
    opacity: 1,
    ease: 'ease-in',
    duration: 0.8
  })
  tl.to('.header-inner', {
    height: 'auto',
    duration: 0.1
  });


  // scroll motion
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: '.video-area',
      start: 'top top',
      scrub: 1,
      // markers: true
    }
  });
  tl2.to('.video-dim2', {
    background: '#DBFC00',
    ease: 'ease-in',
    duration: 1
  })
  tl2.to('.main-txt2', {
    x: '-100%',
    ease: 'ease-in',
    duration: 3
  })
  tl2.to('.section2', {
    opacity: 1,
    duration: 1
  });

  $(window).scroll(function() {
    let wTop = $(window).scrollTop();
    let listAreaTop = $('.list-area').offset().top;
    let videoTop = $('.video-wrap').offset().top;
    
    if(wTop > listAreaTop) {
      $('.section3 .txt-area').css({'opacity':'1','transition':'opacity ease-in 0.4s'})
    } else {
      $('.section3 .txt-area').css({'opacity':'0','transition':'opacity ease-in 0.4s'})
    };
    if(videoTop > 100) {
      $('.arrow-down').css({'opacity':'0','transition':'opacity ease-in 0.3s'})
    } else {
      $('.arrow-down').css({'opacity':'1','transition':'opacity ease-in 0.3s'})
    }
  })


  // section4 slide
  const swiper = new Swiper('.section4-slide', {
    loop: true,
    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev',
    }
  });
  function slideVideoPlay() {
    $('.swiper-slide-active .slide-video').get(0).currentTime = 0;
    $('.swiper-slide-active .slide-video').get(0).play();
  };
  $('.btn-prev, .btn-next').on('click', function() {
    slideVideoPlay();
  });
  swiper.on('slideChange', function () {
    slideVideoPlay();
  });

})