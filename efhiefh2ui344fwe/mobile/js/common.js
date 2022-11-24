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
    layer_gnb($gnbHref);
  });
  function layer_gnb(el){

    let $gnbEl = $(el);
    let gnbisDim = $gnbEl.prev().hasClass('dimBg');
    let gnbScroll = 

    gnbisDim ? $('.dim-layer').fadeIn() : $gnbEl.fadeIn();

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


    $gnbEl.find('a.btn-layerClose').click(function(){
        gnbisDim ? $('.dim-layer').fadeOut() : $gnbEl.fadeOut();
        $('html').css('overflow','auto');
        return false;
    });

    $('.layer .dimBg').click(function(){
        $('.dim-layer').fadeOut();
        return false;
    });

  }

  // header
  $(window).scroll( function() {
    let csTop = $(document).scrollTop();
    if(csTop > 10){
      $('.main-tool-bar').addClass('main-tool-bar-scrolled');
    }else{
      $('.main-tool-bar').removeClass('main-tool-bar-scrolled');
    }
  });

  // 탭 컨텐츠 숨기기
  $(".tab-content").hide();

  // 첫번째 탭콘텐츠 보이기
  $(".tab-container").each(function () {
    $(this).children(".tabs li:first").addClass("active"); //Activate first tab
    $(this).children(".tab-content").first().show();
  });

  //탭메뉴 클릭 이벤트
  $(".tabs li a").click(function (e) {
    e.preventDefault()
    $(this).parent().siblings("li").removeClass("active");
    $(this).parent().addClass("active"); 
    $(this).parent().parent().parent().parent().find(".tab-content").hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).show();
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

  // sub contents
  htmlFixBack();
  gsap.registerPlugin(ScrollTrigger);

  let subMainAni = gsap.timeline({});
  subMainAni.to('.txt-ani', {
    opacity: 1
  })

  // scroll motion
  let subMainAni2 = gsap.timeline({
    scrollTrigger: {
      trigger: '.section1-start',
      start: 'top center',
      // endTrigger: ".normal-tab-wrap",
      end: 'center 30%',
      scrub: 1,
      markers: true,
      // onToggle: self => console.log("toggled, isActive:", self.isActive),
      // onUpdate: self => {
      //   console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
      // },
      onLeave: htmlFix,
      onLeaveBack: htmlFixBack
    }
  });
  function htmlFix(){
    $('html').css('overflow-x','auto');
    // console.log('auto')
  }
  function htmlFixBack(){
    $('html').css('overflow-x','hidden');
    // console.log('hidden')
  }
  subMainAni2.to('.txt-ani', {
    transform: 'none',
    top: '680px',
    bottom: 'auto',
    left: '0',
    fontSize: '50px',
    ease: Power3.easeOut
    
  })

  const showAnim = gsap.from('.main-tool-bar', { 
    yPercent: -100,
    paused: true,
    duration: 0.2
  }).progress(1);
  
  ScrollTrigger.create({
    start: "top top",
    end: 99999,
    onUpdate: (self) => {
      self.direction === -1 ? showAnim.play() : showAnim.reverse()
    }
  });

});