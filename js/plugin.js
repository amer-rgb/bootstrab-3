/* global $, jquery */
$(function() { 
    'use strict';
    /*loading page*/
   $(window).load(function(){
    'use strict';
    $(".lds-ellipsis").fadeOut(2000,function() { 
      $("body").css("overflow", "auto")
      $(this).parent().fadeOut(2000, function() {
        $(this).remove()
      })
    });
  }); 
    // nice scroll 
    // $('html').niceScroll({
    //     cursorwidth: "10px",
    //     cursorcolor:"#dd2476"
    // }); 
    // smooth scrolling on anchors
  $(document).on("click",".nav-link", function(e) {
    e.preventDefault(); 
    var hash = $(this).attr("href");
    if ($(hash).length === 0) {
      return;
    }
    //console.log($(hash).offset().top)
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800)
  })

  // scrool to top 
  $(window).scroll(function(){
      $(this).scrollTop() > 700 ? $('.to-top').fadeIn() : $('.to-top').fadeOut();

  });
  $('.to-top').click(function(){
      $('body, html').animate({
          scrollTop:"0"
      },600)
  })
});