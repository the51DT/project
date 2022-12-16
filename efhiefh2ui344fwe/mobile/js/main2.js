
$(window).on('load', function(){
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
      $('body').on('scroll touchmove mousewheel', (event) => {                    
        event.preventDefault();
        event.stopPropagation();
        return false;
      });
      layer_gnb($gnbHref);
    }else{
      $('body').off('scroll touchmove mousewheel');
      $('a.btn-layerClose').trigger('click');
      $('.dim-layer').fadeOut().removeClass('menu-on');
      $('.all-menu').removeClass('on');
      $('#header').removeClass('active');
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
    $('#header').addClass('active');
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
  
  // slides
  const worksSlide = new Swiper(".works-slide", {
    slidesPerView: 'auto',
    // spaceBetween: 20,
    scrollbar: {
      el: ".scrollbar",
    }
  });

  const partnersSlide = new Swiper(".partners-slide", {
    autoplay: true,
    slidesPerView: 'auto',
    spaceBetween: 30,
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
    $('.main-video').load();
    setTimeout(function(){
      $('.main-video').get(0).currentTime = 0;
      $('.main-video').get(0).play();
    },0);
  };
  function bannerVideoPlay() {
    $('.banner-video').load();
    setTimeout(function(){
      $('.banner-video').get(0).currentTime = 0;
      $('.banner-video').get(0).play();
    },0);
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
      if (index == 1){
        $('#header.main-tool-bar').removeClass('main-tool-bar-scrolled');
        mainVideoPlay();
			};
      if (index == 2 && direction == 'down'){
        bannerVideoPlay();
      };
      if (index == 4 && direction == 'up'){
        bannerVideoPlay();
      };
    },
    'afterLoad': (anchorLink, index) => {
      if (index === 1){
        $('#header.main-tool-bar').removeClass('main-tool-bar-scrolled');
        mainVideoPlay();
      }
      if (index === 3){
        maskOff();
      }
    },
  });

});

