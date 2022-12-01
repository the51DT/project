
$(document).ready(function(){
  // WebFont
  WebFont.load({
  
    // For google fonts
    google: {
      families: ['Noto Sans KR', 'Poppins']
      
    }
  });

  // gnb
  // Layer popup
  $('.btn-gnb').click(function(){
    let $gnbHref = $(this).attr('href');
    let gnbLoc = $(window).scrollTop();
    let txtAniLoc = $('.section1-start').offset();
    // console.log(gnbLoc);
    if(!$('.dim-layer').hasClass('menu-on')){
      layer_gnb($gnbHref);
    }else{
      $('a.btn-layerClose').trigger('click');
      $('.dim-layer').fadeOut().removeClass('menu-on');
      $('.all-menu').removeClass('on');
      // if(){
        $('html').css('overflow','auto');
      // }
      
      return false;
    }
    
  });

  function layer_gnb(el){

    let $gnbEl = $(el);

    $('.dim-layer').fadeIn().addClass('menu-on');
    $('.all-menu').addClass('on');
    $gnbEl.fadeIn();

    // let $gnbElWidth = ~~($gnbEl.outerWidth()),
    //     $gnbElHeight = ~~($gnbEl.outerHeight()),
    //     gnbDocWidth = $(document).width(),
    //     gnbDocHeight = $(document).height();

    // if ($gnbElHeight < gnbDocHeight || $gnbElWidth < gnbDocWidth) {
    //     $gnbEl.css({
    //         marginTop: -$gnbElHeight /2,
    //         marginLeft: -$gnbElWidth/2
    //     })
    // } else {
    //     $gnbEl.css({top: 0, left: 0});
    // }
    $gnbEl.css({top: '58px', left: 0});
    $('html').css('overflow','hidden');
  }

  $('.gnb').on('click', '.gnb-list a', function(e) {
    
    if(!$(this).hasClass('nm')){
      if(!$(this).next().is(":animated")){
        // console.log('animated');
        if(!$(this).hasClass('active')){
          $(this).addClass('active');
          $(this).next().slideDown('fast');
        }else{
          $(this).removeClass('active');
          $(this).next().slideUp('fast');
        }
      
      }else{
        // console.log('stop');
      }
    }else{
      // e.preventDefault();
    }
    
  });
  
  // header
  $(window).scroll( function() {
    let csTop = $(document).scrollTop();
    
    // console.log(txtAniLoc.top);
    if(csTop > 10){
      $('.main-tool-bar').addClass('main-tool-bar-scrolled');
    }else{
      $('.main-tool-bar').removeClass('main-tool-bar-scrolled');
    }
  });

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

  const partnersSlide = new Swiper(".partners-slide", {
    autoplay: true,
    slidesPerView: 'auto',
    spaceBetween: 40,
    loop: true,
    centeredSlides: true,
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

