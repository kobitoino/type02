$(function(){
    
    var bx = $(".box_btn01"),
        ba = $(".boxArea01"),
        bc = $(".boxClose01");
   
    bx.on('click', function(){
    //    ba.show();
        // ba.animate({opacity:'show',},{duration:500, easing:'swing',});
        
        //toggleで表示と非表示設定
        ba.animate({opacity:'toggle'}, 'slow');

        // ba.animate( { height: 'toggle' }, 'slow')
    });
    bc.on('click', function(){
       ba.hide();
    // ba.animate({opacity:'hide'},{duration:500, easing:'swing'});
    });

    var bx2 = $(".box_btn02"),
        ba2 = $(".boxArea02"),
        bc2 = $(".boxClose02");
   
    bx2.on('mouseenter', function(){
    //    ba2.show();
        ba2.animate({height:'toggle'}, 'slow')
    });
    bc2.on('mouseover', function(){
       ba2.hide();
    });
   
    //topに戻るボタン
    var topbtn = $('#top_page');
      topbtn.hide();
   
     $(window).scroll(function(){
         if($(this).scrollTop() > 10) {
             topbtn.fadeIn();
         }else{
             topbtn.fadeOut();
         }
     });
   
     topbtn.click(function(){
         $('body,html').animate({
             scrollTop:0
         },500);
         return false;
     });



     $('.navToggle').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });

   
   });

$(function(){
   var ua;
    ua = navigator.userAgent;
    if (ua.match(/firefox/i)){
    $("html").addClass('firefox');
    }
});
