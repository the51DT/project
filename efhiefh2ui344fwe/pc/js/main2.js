
$(window).on('load', function(){
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

  // header
  $(window).scroll(function () {
    let csTop = $(document).scrollTop();
    // console.log(csTop);
    if (csTop > 10) {
      $(".main-tool-bar").addClass("main-tool-bar-scrolled");
    } else {
      $(".main-tool-bar").removeClass("main-tool-bar-scrolled");
    }
  });

  const showAnim = gsap
  .from(".main-tool-bar", {
    yPercent: -100,
    paused: true,
    duration: 0.1,
  })
  .progress(1);
  
  ScrollTrigger.create({
    start: "top top",
    end: 99999,
    onUpdate: (self) => {
      self.direction === -1 ? showAnim.play() : showAnim.reverse();
    },
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

    // var $elWidth = ~~($el.outerWidth()),
    //     $elHeight = ~~($el.outerHeight()),
    //     docWidth = $(document).width(),
    //     docHeight = $(document).height();

    // if ($elHeight < docHeight || $elWidth < docWidth) {
    //     $el.css({
    //         marginTop: -$elHeight /2,
    //         marginLeft: -$elWidth/2
    //     })
    // } else {
    //     $el.css({top: 0, left: 0});
    // }

    $el.find("a.btn-layerClose").click(function () {
      isDim ? $(".dim-layer").fadeOut() : $el.fadeOut();
      return false;
    });

    $(".layer .dimBg").click(function () {
      $(".dim-layer").fadeOut();
      return false;
    });
  }

  // slides
  const worksSlide = new Swiper(".works-slide", {
    slidesPerView: 'auto',
    autoplay: true,
    loop: true,
    centeredSlides: true,
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    },
  });
  $('.works-slide').on('mouseover', function(){
    worksSlide.autoplay.stop()
  })
  $('.works-slide').on('mouseout', function(){
    worksSlide.autoplay.start()
  })

  // const partnersSlide = new Swiper(".partners-slide", {
  //   autoplay: true,
  //   slidesPerView: 'auto',
  //   loop: true,
  //   centeredSlides: true,
  // });

  const partnersSlide = new Swiper(".partners-slide", {
    spaceBetween: 0,
    // centeredSlides: true,
    speed: 5000,
    autoplay: {
      delay: 1,
    },
    loop: true,
    slidesPerView:'auto',
    allowTouchMove: false,
    disableOnInteraction: true,
    // pauseOnMouseEnter: false
  });

  // $('.partners-slide').on('mouseover', function(){
  //   partnersSlide.autoplay.stop()
  // })
  // $('.partners-slide').on('mouseout', function(){
  //   partnersSlide.autoplay.start()
  // })


  gsap.registerPlugin(ScrollTrigger);

  // scroll motion
  let tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: '.section1-trigger',
      start: 'top top',
      scrub: 1,
      // markers: true
    }
  })
  tl1.to('.section2 .tit', {
    delay: 0.6,
    opacity: 1,
    paddingLeft: '16rem',
    ease: Power2.easeOut,
    duration: 1
  })
  .add('start1'),
  tl1.to('.section2 .works-slide', {
    opacity: '1',
    duration: 1
  },'start1')

  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: '.section2-trigger',
      start: 'top top',
      scrub: 1,
      // markers: true
    }
  })
  tl2.to('.svg-container', {        
    scale: 18,
    transformOrigin: "50%, 50%",
    ease: Power2.easeInOutease,
    zIndex: '-1',
    duration: 0.5
  })
  .add('start3')
  tl2.to('.section3 .sec-txt-area', {
    opacity: 1,
    ease: 'ease-in',
    duration: 0.5
  },'start3')

  let tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: '.section3-trigger',
      start: 'center center',
      end: '100% center',
      scrub: 1,
      // markers: true
    }
  })
  tl3.to('.section4 .tit-area', {
    opacity: 1,
    paddingLeft: '16rem',
    ease: Power2.easeOut,
    duration: 1
  })

});

