'use strict';

$(function() {
  // main visual
  $(window).on('load', function(){
    $(function(){
      setTimeout(function(){
        $('.mainImage1').addClass('fadeIn');
      }, 500);
    });
  });
  $(window).on('load', function(){
    $(function(){
      setTimeout(function(){
        $('.mainImage2').addClass('fadeIn');
      }, 1000);
    });
  });
  $(window).on('load', function(){
    $(function(){
      setTimeout(function(){
        $('.mainImage3').addClass('fadeIn');
      }, 1500);
    });
  });
  $(window).on('load', function(){
    $(function(){
      setTimeout(function(){
        $('.mainImage4').addClass('fadeIn');
      }, 2000);
    });
  });
});

// slide
$(document).ready(function(){
  $('.productSlide').slick({
    autoplay: true,
  });
});