'use strict';

$(function(){
  // loading
  $('.loadingWrapper').delay(500).fadeOut(3000);

  // top button
  var top = $('#top');
  top.click(function(){
    $('body, html').animate({scrollTop: 0}, 500);
    return false;
  })
});