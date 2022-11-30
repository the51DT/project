
$(document).ready(function(){
  
  const worksSlide = new Swiper(".works-slide", {
    slidesPerView: 'auto',
    autoplay: true,
    spaceBetween: 50,
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

  const partnersSlide = new Swiper(".partners-slide", {
    autoplay: true,
    slidesPerView: 'auto',
    spaceBetween: 120,
    loop: true,
    centeredSlides: true,
  });

  gsap.registerPlugin(ScrollTrigger);

  // scroll motion
  let tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: '.section1',
      start: 'top top',
      end: '+=50%',
      scrub: 1,
      // markers: true
    }
  })
  tl1.to('.section2 .tit', {
    opacity: '1',
    paddingLeft: '160px',
    duration: 0.5
  })
  .add('start1'),
  tl1.to('.section2 .works-slide', {
    opacity: '1',
    duration: 0.3
  },'start1')

  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: '.section2',
      start: 'center',
      end: '+=15%',
      scrub: 1,
      // markers: true
    }
  })
  tl2.to('.svg-container', {        
    scale: 18,
    transformOrigin: "50%, 50%",
    ease: Power2.easeInOutease,
    zIndex: '-1',
    duration: 1
  })

  let tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: '.section2',
      start: 'center',
      end: '+=15%',
      scrub: 1,
      // markers: true
    }
  })
  tl3.to('.section3 .sec-txt-area', {
    // delay: '0.2',
    opacity: 1,
    ease: 'ease-in',
    duration: 1
  })

});

