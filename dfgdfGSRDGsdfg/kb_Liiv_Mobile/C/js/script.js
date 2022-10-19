// 페이지 이동

let pageNum = 0;

// 추가
$('.home-btn').click(function(){
    pageNum = 0
    $('section').css({
        'opacity':'0',
        'height':'1px'
    })

    $('.section1').css({
        'opacity':'1',
        'height':'auto'
    })
})

$('.prev-btn').click(function(){
    pageNum--
    $('section').css({
        'opacity':'0',
        'height':'1px'
    })

    $('section').eq(pageNum).css({
        'opacity':'1',
        'height':'auto'
    })
    console.log('pageNum = '+ pageNum)
})

$('.next-btn').click(function(){
    pageNum++
    $('section').css({
        'opacity':'0',
        'height':'1px'
    })

    $('section').eq(pageNum).css({
        'opacity':'1',
        'height':'auto'
    })
    console.log('pageNum = '+ pageNum)
})

$('section').click(function(){
    if (pageNum != 22){
        pageNum++
        $('section').css({
            'opacity':'0',
            'height':'1px'
        })
    
        $('section').eq(pageNum).css({
            'opacity':'1',
            'height':'auto'
        })
        console.log('pageNum = '+ pageNum)
    }
})

// 추가
$('.move-btn').click(function(){
    if (pageNum == 0){
        // console
        $('.prev-btn').css({
            'display':'none'
        })
    }else if(pageNum == 22){
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
// })
// $('section .next-btn').click(function(){
//     $(this).parent().css({
//         'display':'none'
//     })
//     $(this).parent().next().css({
//         'display':'block'
//     })
// })

// $('section').click(function(){
//     $(this).css({
//         'display':'none'
//     })
//     $(this).next().css({
//         'display':'block'
//     })
// })

$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.story-cont', {
        // Optional parameters
        direction: 'vertical',
        loop: true,
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
                    // $('.swiper-button-prev').attr('style', 'background-image: url(../img/prev-1.png) !important');
                    // $('.swiper-button-next').attr('style', 'background-image: url(../img/next-1.png) !important');
                    $('.swiper-button-prev').css({
                        'opacity':'0'
                    })
                    $('.swiper-button-next').css({
                        'opacity':'0'
                    })
                    $('.swiper-button-prev.prev-1').css({
                        'opacity':'1'
                    })
                    $('.swiper-button-next.next-1').css({
                        'opacity':'1'
                    })
                } else if (this.realIndex == 1){
                    // $('.swiper-button-prev').attr('style', 'background-image: url(../img/prev-2.png) !important');
                    // $('.swiper-button-next').attr('style', 'background-image: url(../img/next-2.png) !important');
                    $('.swiper-button-prev').css({
                        'opacity':'0'
                    })
                    $('.swiper-button-next').css({
                        'opacity':'0'
                    })
                    $('.swiper-button-prev.prev-2').css({
                        'opacity':'1'
                    })
                    $('.swiper-button-next.next-2').css({
                        'opacity':'1'
                    })
                } else if (this.realIndex == 2) {
                    // $('.swiper-button-prev').attr('style', 'background-image: url(../img/prev-3.png) !important');
                    // $('.swiper-button-next').attr('style', 'background-image: url(../img/next-3.png) !important');
                    $('.swiper-button-prev').css({
                        'opacity':'0'
                    })
                    $('.swiper-button-next').css({
                        'opacity':'0'
                    })
                    $('.swiper-button-prev.prev-3').css({
                        'opacity':'1'
                    })
                    $('.swiper-button-next.next-3').css({
                        'opacity':'1'
                    })
                } else if (this.realIndex == 3) {
                    // $('.swiper-button-prev').attr('style', 'background-image: url(../img/prev-4.png) !important');
                    // $('.swiper-button-next').attr('style', 'background-image: url(../img/next-4.png) !important');
                    $('.swiper-button-prev').css({
                        'opacity':'0'
                    })
                    $('.swiper-button-next').css({
                        'opacity':'0'
                    })
                    $('.swiper-button-prev.prev-4').css({
                        'opacity':'1'
                    })
                    $('.swiper-button-next.next-4').css({
                        'opacity':'1'
                    })
                }
            }
        },
        pagination : {   // 페이저 버튼 사용자 설정
            el : '.pagination',  // 페이저 버튼을 담을 태그 설정
            clickable : true,  // 버튼 클릭 여부
            type : 'bullets', // 버튼 모양 결정 "bullets", "fraction" 
            renderBullet : function (index, className) {  // className이 기본값이 들어가게 필수 설정
                return '<a href="#" class="' + className + '">' + '</a>'
            },
            renderFraction: function (currentClass, totalClass) { // type이 fraction일 때 사용
                return '<span class="' + currentClass + '"></span>' + '<span class="' + totalClass + '"></span>';
            }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
    })
});

// /* 왼쪽 버튼 테스트 */
// $(document).on("click", ".swiper_button-prev-t", function () {
// 	$(".swiper-button-prev").click();
// });

// /* 오른쪽 버튼 테스트 */
// $(document).on("click", ".swiper_button-next-t", function () {
// 	$(".swiper-button-next").click();
// });

$('.popup').click(function(){
    $('.popup').css({
        'transform':'translateY(320px)'
    })
    $('.dim').css({
        'display':'none'
    })
})

$('.swiper-button-prev').click(function(e){
    e.stopPropagation();
})
$('.swiper-button-next').click(function(e){
    e.stopPropagation();
})