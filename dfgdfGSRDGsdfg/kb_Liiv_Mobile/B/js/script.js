// 페이지 이동

function chartAni(){
    var chart = window.chart = new EasyPieChart(document.querySelector('span.chart1'), {
        easing: 'easeOutElastic',
        delay: 3000,
        barColor: '#FDBD36',
        trackColor: '#FDF5E3',
        scaleColor: false,
        lineWidth: 40,
        trackWidth: 40,
        lineCap: 'round',
        size:270,
        onStep: function(from, to, percent) {
            this.el.children[0].innerHTML = Math.round(percent);
        }
    });
}

// $('.home-btn').click(function(){
//     $('section').css({
//         'display':'none'
//     })
//     $('.section1').css({
//         'display':'block'
//     })
// })
// $('section .prev-btn').click(function(){
//     $(this).parent().css({
//         'display':'none'
//     })
//     $(this).parent().prev().css({
//         'display':'block'
//     })
//     chartAni();
// })
// $('section .next-btn').click(function(){
//     $(this).parent().css({
//         'display':'none'
//     })
//     $(this).parent().next().css({
//         'display':'block'
//     })
//     // findingClass = $(this).parent().attr('class')
//     // console.log(findingClass)
//     // if (findingClass == 'sec-main'){
//     //     console.log('its main')
//     // }
//     chartAni();
// })

let pageNum = 0;

// 추가
$('.home-btn').click(function(){
    pageNum = 0
    $('section').css({
        'opacity':'0',
        'height':'1px',
        'position':'absolute'
    })

    $('.section1').css({
        'opacity':'1',
        'height':'auto',
        'position':'relative'
    })
})

$('.prev-btn').click(function(){
    pageNum--
    $('section').css({
        'opacity':'0',
        'height':'1px',
        'position':'absolute'
    })

    $('section').eq(pageNum).css({
        'opacity':'1',
        'height':'auto',
        'position':'relative'
    })
    console.log('pageNum = '+ pageNum)
})

$('.next-btn').click(function(){
    pageNum++
    $('section').css({
        'opacity':'0',
        'height':'1px',
        'position':'absolute'
    })

    $('section').eq(pageNum).css({
        'opacity':'1',
        'height':'auto',
        'position':'relative'
    })
    console.log('pageNum = '+ pageNum)
})

$('section').click(function(){
    if (pageNum != 12){
        pageNum++
        $('section').css({
            'opacity':'0',
            'height':'1px',
            'position':'absolute'
        })
    
        $('section').eq(pageNum).css({
            'opacity':'1',
            'height':'auto',
            'position':'relative'
        })
        console.log('pageNum = '+ pageNum)
    }
})

// for (let i=0; i<20; i++){
//     // console.log(i)
//     if (pageNum == i){
//         $('section')
//     }
// }

// 추가
$('.move-btn').click(function(){
    if (pageNum == 0){
        // console
        $('.prev-btn').css({
            'display':'none'
        })
    }else if(pageNum == 12){
        $('.next-btn').css({
            'display':'none'
        })
    } else {
        $('.prev-btn').css({
            'display':'block'
        })
        $('.next-btn').css({
            'display':'block'
        })
    }
})



$('.test').click(function(e){
    e.stopPropagation();
})

// accodian
    // main accodian
$('.acco').click(function(e){
    e.stopPropagation();
})
$('.serv-list-1').click(function(){
    $('.serv').css({
        'display':'block'
    })
    $('.serv-big').css({
        'display':'none'
    })
    $('.serv-1').css({
        'display':'none'
    })
    $('.serv-1-big').css({
        'display':'block'
    })
})
$('.serv-list-2').click(function(){
    console.log('click')
    $('.serv').css({
        'display':'block'
    })
    $('.serv-big').css({
        'display':'none'
    })
    $('.serv-2').css({
        'display':'none'
    })
    $('.serv-2-big').css({
        'display':'block'
    })
})
$('.serv-list-3').click(function(){
    console.log('click')
    $('.serv').css({
        'display':'block'
    })
    $('.serv-big').css({
        'display':'none'
    })
    $('.serv-3').css({
        'display':'none'
    })
    $('.serv-3-big').css({
        'display':'block'
    })
})

    // no member accodian
$('.no-mem-acco').click(function(e){
    e.stopPropagation();
})
$('.reason-list').click(function(){
    $('.reason').css({
        'display':'block'
    })
    $('.reason-big').css({
        'display':'none'
    })
})
$('.reason-list-1').click(function(){
    $('.reason-1').css({
        'display':'none'
    })
    $('.reason-1-big').css({
        'display':'block'
    })
})
$('.reason-list-2').click(function(){
    $('.reason-2').css({
        'display':'none'
    })
    $('.reason-2-big').css({
        'display':'block'
    })
})
$('.reason-list-3').click(function(){
    $('.reason-3').css({
        'display':'none'
    })
    $('.reason-3-big').css({
        'display':'block'
    })
})
$('.reason-list-4').click(function(){
    $('.reason-4').css({
        'display':'none'
    })
    $('.reason-4-big').css({
        'display':'block'
    })
})





// swipe

$('.membership').click(function(e){
    e.stopPropagation();
})

let slider = document.querySelector(".sec-main .membership");
let isGrab = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", grabSlider);
slider.addEventListener("mousemove", grabMove);
slider.addEventListener("mouseup", () => isGrab = false);
slider.addEventListener("mouseleave", () => isGrab = false);


function grabSlider(e){
    e.preventDefault();
    isGrab = true;
    startX = e.x;
    scrollLeft = slider.scrollLeft;
}

function grabMove(e){
    e.preventDefault();
    if(!isGrab) return;
    let moveX = e.x;
    let walk = (moveX - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
}

// location

let slider2 = document.querySelector(".sec-chat-full .location");
slider2.addEventListener("mousedown", grabSlider2);
slider2.addEventListener("mousemove", grabMove2);
slider2.addEventListener("mouseup", () => isGrab = false);
slider2.addEventListener("mouseleave", () => isGrab = false);

function grabSlider2(e){
    console.log('slider')
    e.preventDefault();
    isGrab = true;
    startX = e.x;
    scrollLeft = slider2.scrollLeft;
}

function grabMove2(e){
    console.log('move')
    e.preventDefault();
    if(!isGrab) return;
    let moveX = e.x;
    let walk = (moveX - startX) * 2;
    slider2.scrollLeft = scrollLeft - walk;
}

// hashtag

let slider3 = document.querySelector(".sec-chat-full .hashtag");
slider3.addEventListener("mousedown", grabSlider3);
slider3.addEventListener("mousemove", grabMove3);
slider3.addEventListener("mouseup", () => isGrab = false);
slider3.addEventListener("mouseleave", () => isGrab = false);

function grabSlider3(e){
    e.preventDefault();
    isGrab = true;
    startX = e.x;
    scrollLeft = slider3.scrollLeft;
}

function grabMove3(e){
    e.preventDefault();
    if(!isGrab) return;
    let moveX = e.x;
    let walk = (moveX - startX) * 2;
    slider3.scrollLeft = scrollLeft - walk;
}



// data swiper

$('.data-cont').click(function(e){
    e.stopPropagation();
})




$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.data-cont', {
        // Optional parameters
        // direction: 'vertical',
        loop: false,
        slidesPerView: "auto",
        spaceBetween: 15,
        centeredSlides: true,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
        observer: true,
        observeParents: true,
        on: {
            activeIndexChange: function () {
                if (this.realIndex ==0){
                    $('.circle-chart__circle').removeClass('on')
                    $('.data-cont.swiper-container .swiper-wrapper .swiper-slide:nth-child(1) .circle-chart__circle').addClass('on')
                } else if (this.realIndex == 1){
                    $('.circle-chart__circle').removeClass('on')
                    $('.data-cont.swiper-container .swiper-wrapper .swiper-slide:nth-child(2) .circle-chart__circle').addClass('on')
                } else if (this.realIndex == 2) {
                    $('.circle-chart__circle').removeClass('on')
                    $('.data-cont.swiper-container .swiper-wrapper .swiper-slide:nth-child(3) .circle-chart__circle').addClass('on')
                } if (this.realIndex == 3) {
                    $('.bar-one .bar').css({
                        '-webkit-animation': 'show-bar-one-vertical 1.2s 0.1s forwards',
                        '-moz-animation': 'show-bar-one-vertical 1.2s 0.1s forwards',
                        'animation': 'show-bar-one-vertical 1.2s 0.1s forwards'
                    })
                    $('.bar-two .bar').css({
                        '-webkit-animation': 'show-bar-two-vertical 1.2s 0.2s forwards',
                        '-moz-animation': 'show-bar-two-vertical 1.2s 0.2s forwards',
                        'animation': 'show-bar-two-vertical 1.2s 0.2s forwards'
                    })
                    $('.bar-three .bar').css({
                        '-webkit-animation': 'show-bar-three-vertical 1.2s 0.3s forwards',
                        '-moz-animation': 'show-bar-three-vertical 1.2s 0.3s forwards',
                        'animation': 'show-bar-three-vertical 1.2s 0.3s forwards'
                    })
                    $('.bar-four .bar').css({
                        '-webkit-animation': 'show-bar-four-vertical 1.2s 0.4s forwards',
                        '-moz-animation': 'show-bar-four-vertical 1.2s 0.4s forwards',
                        'animation': 'show-bar-four-vertical 1.2s 0.4s forwards'
                    })
                    $('.bar-five .bar').css({
                        '-webkit-animation': 'show-bar-five-vertical 1.2s 0.5s forwards',
                        '-moz-animation': 'show-bar-five-vertical 1.2s 0.5s forwards',
                        'animation': 'show-bar-five-vertical 1.2s 0.5s forwards'
                    })
                }
            }
        }
    })
});

$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.enjoy-cont', {
        // Optional parameters
        // direction: 'vertical',
        loop: false,
        slidesPerView: "auto",
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
        observer: true,
        observeParents: true,
        on: {
            activeIndexChange: function () {
                if (this.realIndex ==0){
                } else if (this.realIndex == 1){
                } else if (this.realIndex == 2) {
                }
            }
        }
    })
});
$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.review-cont', {
        // Optional parameters
        // direction: 'vertical',
        loop: false,
        slidesPerView: "auto",
        spaceBetween: 15,
        centeredSlides: true,
        
        on: {
            activeIndexChange: function () {
                if (this.realIndex ==0){
                } else if (this.realIndex == 1){
                } else if (this.realIndex == 2) {
                }
            }
        }
    })
});

$('.popup-1').click(function(e){
    console.log('ha,,,')
    e.stopPropagation();

    $('.popup-1').css({
        'transform':'translateY(320px)'
    })
    $('.sec-pop-1 .dim').css({
        'display':'none'
    })
})
$('.popup-2').click(function(e){
    e.stopPropagation();

    $('.popup-2').css({
        'transform':'translateY(320px)'
    })
    $('.sec-pop-2 .dim').css({
        'display':'none'
    })
})