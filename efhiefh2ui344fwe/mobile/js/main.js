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

  //Custom Select
  var x, i, j, l, ll, selElmnt, a, b, c;
  /* Look for any elements with the class "custom-select": */
  x = document.getElementsByClassName("custom-select");
  l = x.length;
  for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
      /* For each option in the original select element,
      create a new DIV that will act as an option item: */
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function(e) {
          /* When an item is clicked, update the original select box,
          and the selected item: */
          var y, i, k, s, h, sl, yl;
          s = this.parentNode.parentNode.getElementsByTagName("select")[0];
          sl = s.length;
          h = this.parentNode.previousSibling;
          for (i = 0; i < sl; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
              s.selectedIndex = i;
              h.innerHTML = this.innerHTML;
              y = this.parentNode.getElementsByClassName("same-as-selected");
              yl = y.length;
              for (k = 0; k < yl; k++) {
                y[k].removeAttribute("class");
              }
              this.setAttribute("class", "same-as-selected");
              break;
            }
          }
          h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
      /* When the select box is clicked, close any other select boxes,
      and open/close the current select box: */
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
  }

  function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i)
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < xl; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }

  /* If the user clicks anywhere outside the select box,
  then close all select boxes: */
  document.addEventListener("click", closeAllSelect);

  // $('.select-selected').on("click", function () {
  //   // console.log('click');
  //   let ccHeight = $('.custom-select').height();
  //   let ccHeight2 = $('.select-items').height();
  //   let ccHeight3 = ccHeight + ccHeight2

  //   if(!$(this).hasClass('expend')){
  //     $('.footer-inner').css('padding-bottom',ccHeight3);
  //     $(this).addClass('expend');
  //   }else{
  //     $('.footer-inner').attr('style',"");
  //     $(this).removeClass('expend');
  //   }
    
    
  // });

  // Layer popup
  $('.btn-example').click(function(){
    var $href = $(this).attr('href');
    layer_popup($href);
  });
  function layer_popup(el){

    var $el = $(el);
    var isDim = $el.prev().hasClass('dimBg');

    isDim ? $('.dim-layer').fadeIn() : $el.fadeIn();

    var $elWidth = ~~($el.outerWidth()),
        $elHeight = ~~($el.outerHeight()),
        docWidth = $(document).width(),
        docHeight = $(document).height();

    if ($elHeight < docHeight || $elWidth < docWidth) {
        $el.css({
            marginTop: -$elHeight /2,
            marginLeft: -$elWidth/2
        })
    } else {
        $el.css({top: 0, left: 0});
    }

    $el.find('a.btn-layerClose').click(function(){
        isDim ? $('.dim-layer').fadeOut() : $el.fadeOut();
        return false;
    });

    $('.layer .dimBg').click(function(){
        $('.dim-layer').fadeOut();
        return false;
    });

  }

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
    // touchRatio: 0,
    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev',
    },
    // effect: 'fade',
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
    $('.mask-area, #fp-nav, #header').on('scroll mousewheel touchmove', (e) => {
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
  // tl.to('.ani-area', {
  //   x: '-50%',
  //   ease: 'ease-in',
  //   duration: 0.6
  // },'start0')
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
  .add('start1-1'),
  tl.to('.txt2', {
    display: 'flex',
    duration: 0.1
  },'start1-1')
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
  
  // news-list-slide
  const swiper2 = new Swiper('.news-list-slide', {
    slidesPerView: 'auto',
    scrollbar: {
      el: ".scrollbar",
    }
  });

  // 컨텐츠 높이값 변경
  if($(window).outerHeight() > 900) {
    $('.section:not(.section1)').addClass('fit-change')
  } else {
    $('.section:not(.section1)').removeClass('fit-change')
  }

});

$(window).on('resize', () => {
  // 컨텐츠 높이값 변경
  if($(window).outerHeight() > 900) {
    $('.section:not(.section1)').addClass('fit-change')
  } else {
    $('.section:not(.section1)').removeClass('fit-change')
  }
})


/*-- loading reset --*/
$(window).on('load', () => {
  // 페이지 로딩화면
  $('.loading').hide();
  
  // 해쉬 리셋
  if(!(window.location.hash === '#home' || window.location.hash === '')){
    $(location).attr('href', 'main.html');
  };
});