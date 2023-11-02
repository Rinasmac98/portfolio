'use strict';

// main
$(function(){
  $('h1').fadeIn(3000);
});

// event guide
$(window).on('load scroll', function(){
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();
  $('.content1').each(function(){
    var content = $(this).offset().top;
    if(content < scroll + windowHeight){
      $(this).delay(3000).css({
        opacity: 1,
        transform: 'translateX(0)'
      });
    }
  });
});

$(window).on('load scroll', function(){
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();
  $('.content2').each(function(){
    var content = $(this).offset().top;
    if(content < scroll + windowHeight){
      $(this).delay(3000).css({
        opacity: 1,
        transform: 'translateX(0)'
      });
    }
  });
});

$(window).on('load scroll', function(){
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();
  $('.content3').each(function(){
    var content = $(this).offset().top;
    if(content < scroll + windowHeight){
      $(this).delay(3000).css({
        opacity: 1,
        transform: 'translateX(0)'
      });
    }
  });
});

// calculation
const time = document.getElementById('time');
const hour = document.getElementById('hour');
const calc = document.getElementById('calc');
const result = document.getElementById('result');
const reserve = document.getElementById('reserve');
const yourName = document.getElementById('name');
const email = document.getElementById('email');

time[1].value = 1200;
time[2].value = 2000;
time[3].value = 2500;
time[4].value = 1000;

hour[1].value = 1;
hour[2].value = 2;
hour[3].value = 3;
hour[4].value = 4;
hour[5].value = 5;
hour[6].value = 6;

calc.addEventListener('click', function(){
  result.value = time.value * hour.value + '円';
});

// form
reserve.addEventListener('click', function(){
  alert('予約しますか？');
  alert('予約が完了しました。');
});
