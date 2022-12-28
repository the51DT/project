$(window).on('load', function(){
  history.scrollRestoration = "manual";
  // WebFont
  WebFont.load({
    // For google fonts
    google: {
      families: ["Noto Sans KR", "Poppins"],
    },
  });

  // gnb
  // $("#header").hover(function () {
  //   $("#header").toggleClass("active");
  // });
  // 2022-12-28 수정 시작
  $('#header .gnb-list li a')
    .off('mouseenter focus')
    .on('mouseenter focus', function () {
      if (!$('#header').hasClass('active')) {
        $('#header').addClass('active')
      }
    })

  $('#header .gnb')
    .off('mouseleave blur')
    .on('mouseleave blur', function () {
      $('#header').removeClass('active')
    })

  $('#header .gnb-list > li:first-child')
    .find(' > a')
    .off('keydown')
    .on('keydown', function (event) {
      if (event.which == 9 && event.shiftKey) {

        $('#header').removeClass('active')
      }
    })

  $('#header .gnb-list > li:last-child .sub-list > li:last-child')
    .find(' > a')
    .off('keydown')
    .on('keydown', function (event) {
      if (event.which == 9 && !event.shiftKey) {
        $('#header').removeClass('active')
      }
    })

  $(document).on('click', function (event) {
    if ($('.gnb').has(event.target).length === 0) {
      $('#header').removeClass('active')
    }
  })
  // 2022-12-28 수정 끝

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
      c.addEventListener("click", function (e) {
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
    a.addEventListener("click", function (e) {
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
    var x,
      y,
      i,
      xl,
      yl,
      arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i);
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

  // Layer popup
  $(".btn-example").click(function () {
    var $href = $(this).attr("href");
    layer_popup($href);
  });
  function layer_popup(el) {
    var $el = $(el);
    var isDim = $el.prev().hasClass("dimBg");

    isDim ? $(".dim-layer").fadeIn() : $el.fadeIn();

    $el.find("a.btn-layerClose").click(function () {
      isDim ? $(".dim-layer").fadeOut() : $el.fadeOut();
      return false;
    });

    $(".layer .dimBg").click(function () {
      $(".dim-layer").fadeOut();
      return false;
    });
  }

  /*-- section1 --*/
  // main-video
  function mainVideoPlay() {
    $('.main-video').load();
    setTimeout(function(){
      $('.main-video').get(0).currentTime = 0;
      $('.main-video').get(0).play();
    },0);
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
    $('.swiper-slide-active .slide-video').load();
    setTimeout(function(){
      $('.swiper-slide-active .slide-video').get(0).currentTime = 0;
      $('.swiper-slide-active .slide-video').get(0).play();
    },0);
  };
  function slidePlay() {
    slideVideoPlay();
    let slideVideo = document.querySelector('.swiper-slide-active .slide-video');
    slideVideo.addEventListener('loadedmetadata',function(){
      let videoRunTime = slideVideo.duration;
      $('.progress-bar').addClass('active').children('span').css('animation','coolTime linear ' + videoRunTime + 's');
    })
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
    // anchors: ['home', 'brand-vision', 'program', 'news', 'main-footer'],
    normalScrollElements: '.mask-area, #fp-nav, #header',
    'onLeave' : (index, nextIndex, direction) => {
			if (direction == 'down'){
        $('#header.main-tool-bar').css('transform','translateY(-100%)').removeClass('main-tool-bar-scrolled')
			};
			if (direction == 'up'){
        $('#header.main-tool-bar').css('transform','translateY(0)').addClass('main-tool-bar-scrolled')
			};
			if (index == 2 && direction == 'up'){
        $('#header.main-tool-bar').removeClass('main-tool-bar-scrolled');
        mainVideoPlay();
			};
      if (index == 2 && direction == 'down'){
        slidePlay();
			};
      if (index == 4 && direction == 'up'){
        slidePlay();
			};
			if (index == 1){
        $('#header.main-tool-bar').removeClass('main-tool-bar-scrolled');
        mainVideoPlay();
			};
		},
    'afterLoad': (anchorLink, index) => {
      if (index === 1){
        $('#header.main-tool-bar').removeClass('main-tool-bar-scrolled');
        mainVideoPlay();
			};
			if (index === 3){
        slidePlay();
			} else {
        resetProgress();
      };
		},
  });

  // loading animation
  gsap.registerPlugin(ScrollTrigger);

  let body = document.querySelector('body');

  function preventDefault(e){
    e.preventDefault();
    e.stopPropagation();
    return false;
  }
  function disableScroll() {
    body.addEventListener('mousewheel', preventDefault, {passive: false});
    body.addEventListener('DOMMouseScroll', preventDefault, {passive: false});
  }
  function enableScroll() {
    body.removeEventListener('mousewheel', preventDefault, {passive: false});
    body.removeEventListener('DOMMouseScroll', preventDefault, {passive: false});
  }
  disableScroll();

  // $('body, .mask-area, #fp-nav, #header').on('scroll touchmove mousewheel', (event) => {                    
  //   event.preventDefault();
  //   event.stopPropagation();
  //   return false;
  // });

  setTimeout(function(){
    let tl = gsap.timeline({});
    tl.add('start0'),
    tl.to('.txt1', {
      y: 0,
      opacity: 1,
      ease: 'ease-in',
      duration: 0.4
    })
    tl.to('.icon-x', {
      // delay: 0.3,
      width: '7rem',
      height: '7rem',
      rotation: 45,
      y: '-50%',
      ease: 'ease-in-out',
      duration: 0.2
    },'start0')
    tl.to('.txt1', {
      delay: 0.3,
      y: '-100%',
      opacity: 0,
      ease: 'ease-out',
      duration: 0.3
    })
    .add('start1'),
    tl.to('.txt2', {
      delay: '-0.3',
      y: '-100%',
      opacity: 1,
      ease: 'ease-in',
      duration: 0.3
    },'start1')
    tl.to('.icon-x', {
      delay: '-0.3',
      rotation: 90,
      ease: 'ease-in-out',
      duration: 0.3,
      onComplete: function(){
        $('.mask-area').addClass('on');
      }
    },'start1')
    tl.to('.ani-txts', {
      delay: 0.3,
      y: '-100%',
      opacity: 0,
      ease: 'ease-in',
      duration: 0.3
    })
    .add('start2'),
    tl.to('.mask-area, .mask-area .mask, .loading-txt', {
      delay: '-0.3',
      opacity: 1,
      y: 0,
      ease: 'ease-in',
      duration: 0.3,
    },'start2')
    .add('start3'),
    tl.to('.mask-area, #header, .lang-chioce', {
      opacity: 1,
      ease: 'ease-in',
      duration: 0.3,
      onComplete: function(){
        $('.bg-area').fadeIn();
        // $('body').off('scroll touchmove mousewheel DOMMouseScroll');
        enableScroll();
        maskOff();
        $('.ani-area').hide();
        $('.mask-area').css({'opacity':'1'})
        $('html').css({'overflow-y':'scroll'});
        $('#container').css({'position':'fixed'});
        $('.mask-area').removeClass('on');
        mainVideoPlay();
      }
    },'start3')
    tl.to('#header', {
      zIndex: 1000,
      duration: 0.1,
    },'start3')
    

    // scroll motion
    // let tl2 = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: '.intro',
    //     start: 'top top',
    //     end: '+=100%',
    //     scrub: 1,
    //     markers: true
    //   }
    // })
    // tl2.to('.loading-txt', {
    //   opacity: 0,
    //   // ease: Power2.easeOut,
    //   duration: 0.1
    // })
    // tl2.to('.mask-area .mask', {
    //   scale: 2.4,
    //   transition: 'all 0.2s',
    //   x: '-35%',
    //   ease: Power4.easeOut,
    //   duration: 0.5
    // })
    // tl2.to('.mask-area', {
    //   scale: 16,
    //   ease: Power4.easeOut,
    //   transition: 'all 0.2s',
    //   duration: 0.2,
    //   onComplete: function(){
    //     $('.main-txt, .arrow-down, #fp-nav').css({'opacity':'1','transition':'all 0.2s'});
    //   }
    // })
    // tl2.to('.mask-area', {
    //   opacity: 0,
    //   ease: Power4.easeOut,
    //   duration: 0.1,
    //   onComplete: function(){
    //     $('.intro').hide();
    //   }
    // })

    // mask off
    let maskOff = () => {
      $('.mask-area, #fp-nav, #header').on('scroll mousewheel', (e) => {
        var wheel = e.originalEvent.wheelDelta;
        if(!(wheel > 0)) {
          $('.loading-txt').css({'transform':'translateY(60rem)','opacity':'0','transition':'all 0.6s'});
          $('.mask-area').css({'transform':'scale(16)','transition':'transform linear 1s, opacity 0.6s ease 0.2s','transform-origin':'55% center', 'opacity':'0'});
          $('.main-txt, .arrow-down, #fp-nav').css({'opacity':'1','transition':'all 0.6s'});
          setTimeout(() => {
            $('.mask-area').fadeOut(600);
            $('.intro').css({ 'display': 'none' }); // 2022-12-21 추가
          }, 600);
        };
      });
    };

  },1000)

  $('.arrow-down > a').on('click', (e) => {
    e.preventDefault();
    $.fn.fullpage.moveSectionDown()
  })

});


/*-- loading reset --*/
$(window).on('load', () => {
  // 페이지 로딩화면
  $('.loading').hide();

  // 해쉬 리셋
  // if(!(window.location.hash === '#home' || window.location.hash === '')){
  //   $(location).attr('href', 'main.html');
  // };
});