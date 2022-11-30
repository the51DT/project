
$(document).ready(function(){

  $('.btn-gnb').on('click',function(){
    if($(this).hasClass('on')){
      $(this).closest('#header').css('background','#000')
    } else {
      $(this).closest('#header').css('background','transparent')
    }
  })
  
  const worksSlide = new Swiper(".works-slide", {
    slidesPerView: 'auto',
    spaceBetween: 20,
    scrollbar: {
      el: ".scrollbar",
    }
  });

  $('.acco-wrap .acco-btn').on('click', function(){
    window.dispatchEvent(new Event('resize'));
    if($(this).hasClass('on')){
      $(this).removeClass('on').closest('.acco-wrap').removeClass('on')
    } else {
      $(this).addClass('on').closest('.acco-wrap').addClass('on');
    }
  });

  // 컨텐츠 높이값 변경
  if($(window).outerHeight() < 700) {
    $('.section2').addClass('fit-change')
  } else {
    $('.section2').removeClass('fit-change')
  }

  $(window).on('resize', () => {
    if($(window).outerHeight() < 700) {
      $('.section2').addClass('fit-change')
    } else {
      $('.section2').removeClass('fit-change')
    }
  })

  // mask off
  let maskOff = () => {
    $('.svg-container').on('scroll mousewheel touchmove', (e) => {
      var wheel = e.originalEvent.wheelDelta;
      if(!(wheel > 0)) {
        $('.svg-container').css({'transform':'scale(18)','transform-origin':'50%, 50%','transition':'all 0.6s','z-index':'-1'});
        $('.section3 .sec-txt-area').css({'opacity':'1','transition':'all 0.6s'});
      };
      setTimeout(() => {
        $('.svg-container').fadeOut(200);
      }, 600);
    });
  };

  function mainVideoPlay() {
    $('.main-video').get(0).currentTime = 0;
    $('.main-video').get(0).play();
  };
  function bannerVideoPlay() {
    $('.banner-video').get(0).currentTime = 0;
    $('.banner-video').get(0).play();
  };

  /*-- fullpage --*/
  $('#main').fullpage({
    autoScrolling: true,
    scrollOverflow: true,
    scrollingSpeed: 800,
    fitToSection: false,
    keyboardScrolling: false,
    // anchors: ['home', 'works', 'introduce', 'partners', 'main-footer'],
    normalScrollElements: '.svg-container',
    'onLeave' : (index, nextIndex, direction) => {
      if (index == 2 && direction == 'up'){
        mainVideoPlay();
      };
      if (index == 3 && direction == 'up'){
        bannerVideoPlay();
      };
      if (index == 2 && direction == 'down'){
        bannerVideoPlay();
      };
    },
    'afterLoad': (anchorLink, index) => {
      if (index === 1){
        mainVideoPlay();
      }
      if (index === 3){
        maskOff();
      }
    },
  });

});

