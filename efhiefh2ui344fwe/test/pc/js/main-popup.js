jQuery(document).ready(function(){

  // if(jQuery(location).attr('href') == 'http://www.the-51.com/main-popup-test/'){
  //     jQuery(location).attr('href','http://www.the-51.com/home-the-fiftyone-test/')
  // };

  jQuery('#main-popup').addClass('active');
  if(jQuery('#main-popup').hasClass('active')) {
      jQuery('html, body').addClass('scroll-fixed');
      jQuery('#header-outer').hide();
  } else {
      jQuery('html, body').removeClass('scroll-fixed');
      jQuery('#header-outer').show();
  };
  jQuery('#main-popup .btn-close').on('click', function(){
      jQuery('#main-popup').removeClass('active')
      jQuery('html, body').removeClass('scroll-fixed');
      jQuery('.main-email-pointer').hide();
      jQuery('#header-outer').show();
  });

  jQuery('a').on('click', function(event) {
      if (this.hash !== '') {
        event.preventDefault();
        var hash = this.hash;
        jQuery('#main-popup').animate({
          scrollTop: jQuery(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      } 
  });

  /* ------ card-slide ------ */
  function myPlugin({ cardSlide, extendParams, on }) {
      extendParams({
          debugger: false,
      });
  };

  var wrapWidth = '546rem';
  var _winW = jQuery(window).width();
  var slideOrigin = 'center ' + wrapWidth;

  var cardSlide = new Swiper('.card-slide', {
      modules: [myPlugin],
      effect: 'creative',
      loop: true,
      autoplay: {
          disableOnInteraction: false,
          delay: 3000,
      },
      speed: 300,
      grabCursor: true,
      slideToClickedSlide: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      creativeEffect: {
          limitProgress: 5,
          prev: {
              rotate: [0, 0, -5],
              origin: slideOrigin,
          },
          next: {
              rotate: [0, 0, 5],
              origin: slideOrigin,
          },
      },
      debugger: true,
      observer: true,
      observeParents: true,
      initialSlide: 0,
      waitForTransition: true,
  });

  cardSlide.update();
  
  jQuery(window).on('resize', function() {
      cardSlide.update();
  });

  // mouse pointer
  jQuery('.main-email-pointer').click(function() {
      jQuery('#main-popup #email-address').attr('type', 'text');
      jQuery('#main-popup #email-address').select();
      var copy = document.execCommand('copy');
      jQuery('#main-popup #email-address').attr('type', 'hidden');
      if(copy) {
          alert('이메일 주소가 복사되었습니다.');
      }
  });
  jQuery('#main-popup #section4 .email-wrap').click(function() {
      jQuery('#main-popup #email-address').attr('type', 'text');
      jQuery('#main-popup #email-address').select();
      var copy = document.execCommand('copy');
      jQuery('#main-popup #email-address').attr('type', 'hidden');
      if(copy) {
          alert('이메일 주소가 복사되었습니다.');
      }
  });

  jQuery('#main-popup #section4 .email-wrap').on('mouseover', function(){
      jQuery('.main-email-pointer').css({
          opacity : 1,
          zIndex : 100
      });
  });
  jQuery('#main-popup #section4 .email-wrap').on('mouseout', function(){
      jQuery('.main-email-pointer').css({
          opacity : 0,
          zIndex : -1
      });
  });

  var pointSize = jQuery('.main-slide-pointer').width()/2;
  var pointSize2 = jQuery('.main-email-pointer').width()/2;
  
  jQuery(document).on('mousemove', function(e){    
      var mouseX = e.offsetX;
      var mouseY = e.offsetY;
      jQuery('.main-email-pointer').css('top', mouseY - pointSize2);
      jQuery('.main-email-pointer').css('left', mouseX - pointSize2);
  });
  
  if(_winW <= 768) {
      jQuery('.main-email-pointer').hide();
  } else {
      jQuery('.main-email-pointer').show();
  };



  /* ------ menu ------ */
  jQuery('#main-popup .menu > .menu-item').on('mouseenter mouseleave', function(e){
      if(e.type == 'mouseenter'){
          jQuery('#main-popup .menu > .menu-item').removeClass('active');
          jQuery(this).addClass('active');
      } else if (e.type == 'mouseleave'){
          jQuery(this).removeClass('active');
      }
  });
  // focus > menu
  jQuery('#main-popup .menu .menu-item a').on('focus', function(){
      jQuery('#main-popup .menu .menu-item').removeClass('active');
      jQuery(this).closest('li').addClass('active');
      jQuery(this).closest('.depth2').addClass('active');
  });



  /* ------ scroll animation ------ */
  function mainPopupScroll(){
      var controller = new ScrollMagic.Controller();


      /* --- section1 --- */
      var sec1 = new TimelineMax()
      .to('#main-popup #section1', 1, {opacity: 0})
      .to('#main-popup #section2 .gem3', 1, {animation: 'bg-gem-03 2s alternate infinite, float both ease .8s'})
      .to('#main-popup #section2 .gem2', 1, {animation: 'bg-gem-02 4s alternate infinite, float both ease 1.2s .4s'})

      new ScrollMagic.Scene({
          triggerElement: '#trigger1',
          duration: '50%',
      })
      .setTween(sec1)
      .addTo(controller)
      // .addIndicators();



      /* --- section2 --- */
      var sec2 = new TimelineMax()
      .to('#main-popup #section2 .desc-area', 1, {opacity: 1})
      new ScrollMagic.Scene({
          triggerElement: '#trigger2',
          duration: '100%',
      })
      .setTween(sec2)
      .addTo(controller)
      // .addIndicators();



      /* --- section3 --- */
      var sec3 = new TimelineMax()
      // gem move
      // 50% 구간
      .to('.gem4', 1, {top: '50%', scale: 0.6, left: '70%', filter: 'blur(0px)', transition: 'all .6s ease-out'})
      .to('.gem5', 1, {right: '70%', scale: 0.4, transition: 'all .6s ease-out'})
      // 50% 구간
      .to('.gem4', 1, {left: '65%', transition: 'all .6s ease-out'})
      .to('.gem5', 1, {transition: 'all .6s .6s ease-out'})
      .to('.gem5', 1, {filter: 'blur(10px)', transition: 'all .6s ease-out'})
      .to('.gem4', 1, {left: '50%', scale: 1.2, transition: 'all .6s ease-out'})
      .to('.gem5', 1, {zIndex: -1, opacity: 0, right: '50%', scale: 0.3, transition: 'all .6s ease-out'})
      // gem move

      // txt move
      .to('.txt-03 .t-01', 1, {marginLeft: '-160%', transition: 'all .3s ease-out'})
      .to('.txt-03 .t-02', 1, {marginRight: '-160%', transition: 'all .3s ease-out'})
      .to('.txt-03 .t-01', 1, {marginLeft: 0, opacity: 1, transition: 'all .3s ease-out'})
      .to('.txt-03 .t-02', 1, {marginRight: 0, opacity: 1, transition: 'all .3s ease-out'})
      // txt move
      
      // gem change
      .to('.gem4', 1, {opacity:0.8, transition: 'all .3s ease-out'})
      .to('.gem4', 0.5, {filter: 'blur(50px)', opacity: 0.8, transition: 'all .3s ease-out'})
      .to('.gem4', 0.5, {filter: 'blur(100px)', opacity: 0.2, transition: 'all .3s ease-out'})
      .to('.gem4', 1, {opacity: 0, transition: 'all .3s ease-out'})
      .to('.gem-motion', 1, {filter: 'blur(100px)', opacity: 0, transition: 'all .3s ease-out'})
      .to('.gem-motion', 1, {filter: 'blur(70px)', opacity: 0.3, transition: 'all .3s ease-out'})
      .to('.gem-motion', 1, {filter: 'blur(10px)', opacity: 0.8, transition: 'all .3s ease-out'})
      .to('.gem-motion', 1, {filter: 'blur(0px)', opacity: 1, transition: 'all .3s ease-out'})
      .to('.card-slide', 0.1, {display: 'block'})
      .to('.gem-motion', 1, {backgroundImage: 'url(http://www.the-51.com/wp-content/uploads/2022/05/gem-one.png)'})
      .to('.gem-motion', 1, {backgroundImage: 'url(http://www.the-51.com/wp-content/uploads/2022/05/gem-two.png)'})
      .to('.gem-motion', 1, {backgroundImage: 'url(http://www.the-51.com/wp-content/uploads/2022/05/gem-three.png)'})
      .to('.gem-motion', 1, {backgroundImage: 'url(http://www.the-51.com/wp-content/uploads/2022/05/gem-three.png)'})
      .to('.gem-motion', 1, {backgroundImage: 'url(http://www.the-51.com/wp-content/uploads/2022/05/gem-four.png)'})
      .to('.gem-motion', 1, {backgroundImage: 'url(http://www.the-51.com/wp-content/uploads/2022/05/gem-four.png)'})
      .to('.gem-motion', 1, {backgroundImage: 'url(http://www.the-51.com/wp-content/uploads/2022/05/gem-five.png)'})
      .to('.gem-motion', 1, {backgroundImage: 'url(http://www.the-51.com/wp-content/uploads/2022/05/gem-five.png)'})
      .to('.gem-motion', 1, {backgroundImage: 'url(http://www.the-51.com/wp-content/uploads/2022/05/gem-six.png)'})
      .to('.gem-motion', 1, {backgroundImage: 'url(http://www.the-51.com/wp-content/uploads/2022/05/gem-six.png)'})
      .to('.gem-motion', 1, {backgroundImage: 'url(http://www.the-51.com/wp-content/uploads/2022/05/gem-seven.gif)'})
      .to('.gem-motion', 1, {backgroundImage: 'url(http://www.the-51.com/wp-content/uploads/2022/05/gem-seven.gif)'})
      .to('.gem-motion', 1, {filter: 'blur(100px)', opacity: 0})
      .to('.t-03', 1, {display: 'block'})
      
      // gem change

      new ScrollMagic.Scene({
          triggerElement: '#trigger3',
          duration: '300%',
      })
      .setTween(sec3)
      .addTo(controller)
      // .addIndicators();


      var sec3_2 = new TimelineMax()
      // .to('.card-slide', 1, {display: 'block'})

      new ScrollMagic.Scene({
          triggerElement: '#trigger4',
          duration: '150%',
      })
      .setTween(sec3_2)
      .setClassToggle('#section3 .tit-area .tit', 'fixed')
      .addTo(controller)
      // .addIndicators();



      /* --- section4 --- */
      var sec4 = new TimelineMax()
      .to('.txt-03', 1, {opacity: 0})
      .to('#main-popup #section3', 1, {opacity: 0})
      .to('#main-popup #section4', 1, {opacity: 1, transition: 'all .3s ease-out'})
      .to('#main-popup #section4', 1, {opacity: 1})
      .to('#main-popup #section4', 1, {opacity: 1})

      new ScrollMagic.Scene({
          triggerElement: '#trigger6',
          duration: '50%',
      })
      .setTween(sec4)
      .addTo(controller)
      // .addIndicators();


      
      /* --- section5 --- */
      var sec5 = new TimelineMax()
      .to('#main-popup #section5', 1, {opacity: 1, transition: 'all .3s ease-out'})
      .to('#main-popup #section5', 1, {opacity: 1})
      .to('#main-popup #section5', 1, {opacity: 1})

      new ScrollMagic.Scene({
          triggerElement: '#trigger7',
          duration: '100%',
      })
      .setTween(sec5)
      .addTo(controller)
      // .addIndicators();

  }
  mainPopupScroll()

})