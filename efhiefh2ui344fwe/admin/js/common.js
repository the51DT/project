$(document).ready(function(){
  // console.log("ready");

  // WebFont
  WebFont.load({
  
    // For google fonts
    google: {
      families: ['Noto Sans KR'] 
    }
  });

  // gnb
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

  adminHeaderFix();
  $(window).resize(function (){
    adminHeaderFix()
  });
  function adminHeaderFix() {
    let ConHeightFix = $('#container').height();
    $('#header').css("min-height", ConHeightFix);
  }

});