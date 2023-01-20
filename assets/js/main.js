(function($) { "use strict";


  jQuery(window).on('load',function(){
    $(".preloader").delay(1600).fadeOut("slow");
  });

  $(window).on('scroll',function(){
    if($(this).scrollTop() > 80){
        $('header').addClass('sticky-header');
    } else{
        $('header').removeClass('sticky-header');
    }
  });

  /***********
   mobile menu  js
   ************/
  $('.hamburger').on('click',function (event) {
    $(this).toggleClass('h-active');
    $('.main-nav').toggleClass('slidenav');
  });

  $('.header-home .main-nav ul li  a').on('click',function (event) {
    $('.hamburger').removeClass('h-active');
    $('.main-nav').removeClass('slidenav');
  });

  $(".main-nav .fl").on('click', function (event) {
    var $fl = $(this);
    $(this).parent().siblings().find('.sub-menu').slideUp();
    $(this).parent().siblings().find('.fl').addClass('flaticon-plus').text("+");
    if ($fl.hasClass('flaticon-plus')) {
      $fl.removeClass('flaticon-plus').addClass('flaticon-minus').text("-");
    } else {
      $fl.removeClass('flaticon-minus').addClass('flaticon-plus').text("+");
    }
    $fl.next(".sub-menu").slideToggle();
  });


  // mobile-search-area
  $('.search-btn').on("click", function(){
    $('.mobile-search').addClass('slide');
    
  });

  $('.search-cross-btn').on("click", function(){
    $('.mobile-search').removeClass('slide');
    
  });

   // Menu Toggle button sidebar

   var toggleIcon = document.querySelectorAll('.menu-sidebar-btn')
   var closeIcon = document.querySelectorAll('.cross-icon')
   var searchWrap = document.querySelectorAll('.menu-toggle-btn-full-shape')

   toggleIcon.forEach((element)=>{
       element.addEventListener('click', ()=>{
           document.querySelectorAll('.menu-toggle-btn-full-shape').forEach((el)=>{
               el.classList.add('show-sidebar')
           })
       })
   })

   closeIcon.forEach((element)=>{
       element.addEventListener('click', ()=>{
           document.querySelectorAll('.menu-toggle-btn-full-shape').forEach((el)=>{
               el.classList.remove('show-sidebar')
           })
       })
   })

    window.onclick = function(event){
       // Menu Toggle button sidebar
       searchWrap.forEach((el)=>{
         if(event.target === el){
           el.classList.remove('show-sidebar')
         }
       })
   }
  

  $('.custom-select').niceSelect();

// count-down1
setInterval(function time(){
  var d = new Date();
  // var days = 7 - d.getDay();
  var hours = 24 - d.getHours();
  var min = 60 - d.getMinutes();
  if((min + '').length === 1){
    min = '0' + min;
  }
  var sec = 60 - d.getSeconds();
  if((sec + '').length === 1){
        sec = '0' + sec;
  }
  jQuery('#week-countdown1 h6').html(hours+' : '+min+' : '+sec+' ')
  jQuery('#week-countdown2 h6').html(hours+' : '+min+' : '+sec+' ')
  jQuery('#week-countdown3 h6').html(hours+' : '+min+' : '+sec+' ')
  jQuery('#week-countdown4 h6').html(hours+' : '+min+' : '+sec+' ')
  jQuery('#week-countdown5 h6').html(hours+' : '+min+' : '+sec+' ')
  jQuery('#week-countdown6 h6').html(hours+' : '+min+' : '+sec+' ')
  jQuery('#week-countdown7 h6').html(hours+' : '+min+' : '+sec+' ')
  jQuery('#week-countdown8 h6').html(hours+' : '+min+' : '+sec+' ')
  jQuery('#week-countdown9 h6').html(hours+' : '+min+' : '+sec+' ')
  jQuery('#week-countdown10 h6').html(hours+' : '+min+' : '+sec+' ')
  jQuery('#week-countdown11 h6').html(hours+' : '+min+' : '+sec+' ')
  jQuery('#week-countdown12 h6').html(hours+' : '+min+' : '+sec+' ')
  jQuery('#week-countdown13 h6').html(hours+' : '+min+' : '+sec+' ')
  jQuery('#week-countdown14 h6').html(hours+' : '+min+' : '+sec+' ')
}, 1000);

// count-down2
setInterval(function time(){
  var d = new Date();
  var days = 7 - d.getDay();
  var hours = 24 - d.getHours();
  var min = 60 - d.getMinutes();
  if((min + '').length === 1){
    min = '0' + min;
  }
  var sec = 60 - d.getSeconds();
  if((sec + '').length === 1){
        sec = '0' + sec;
  }
  jQuery('#countdown2 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown21 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown22 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown23 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown24  h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown3 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown31 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown32 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown33 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown34 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown4 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown41 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown42 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown43 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown44 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown45 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown5 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown51 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown52 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown53 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown54 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown55 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown6 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown61 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown62 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown63 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown64 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown65 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown7 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown71 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown72 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown73 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown74 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown75 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown8 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown81 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown82 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown83 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S '
  )
  jQuery('#countdown9 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown91 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown92 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown93 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')

  jQuery('#countdown10 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown101 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown102 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown103 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown104 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')

  jQuery('#countdown11 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown111 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown112 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown113 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown114 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')

  jQuery('#countdown12 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')

  jQuery('#countdown13 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown131 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown132 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown133 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown134 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown135 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')

  jQuery('#countdown14 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown15 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown16 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown17 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown18 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown19 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown20 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown21 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown22 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown23 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown24 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')
  jQuery('#countdown25 h6').html(days+'D : '+hours+'H : '+min+'M : '+sec+'S ')

}, 1000);

// countdown3
(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "09/30/",
      birthday = dayMonth + yyyy;
  
  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end
  
  const countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        const now = new Date().getTime(),
              distance = countDown - now;

          

        //do something later when date is reached
        if (distance < 0) {
          document.getElementById("countdown1").style.display = "none";
          clearInterval(x);
        }
        if (distance < 0) {
          document.getElementById("countdown2").style.display = "none";
          clearInterval(x);
        }

        if (distance < 0) {
          document.getElementById("countdown4").style.display = "none";
          clearInterval(x);
        }
        //seconds
      }, 0)
  }());

// timer start
function makeTimer() {
  var endTime = new Date("March 30, 2022 00:00:00");
  var endTime = (Date.parse(endTime)) / 1000; //replace these two lines with the unix timestamp from the server
  var now = new Date();
  var now = (Date.parse(now) / 1000);
  var timeLeft = endTime - now;
  var days = Math.floor(timeLeft / 86400);
  var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
  var Xmas95 = new Date('December 25, 1995 23:15:30');
  // console.log(Xmas95);
  // console.log(Date.parse(timeLeft * 1000));
  var hour = Xmas95.getHours();
  // console.log(hour);
  var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
  var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
  if (hours < "10") {
    hours = "0" + hours;
  }
  if (minutes < "10") {
    minutes = "0" + minutes;
  }
  if (seconds < "10") {
    seconds = "0" + seconds;
  }
  $("#timer #days").html( days);
  $("#timer #hours").html( hours);
  $("#timer #minutes").html( minutes);
  $("#timer #seconds").html( seconds);

  $("#timer1 #days1").html( days);
  $("#timer1 #hours1").html( hours);
  $("#timer1 #minutes1").html( minutes);
  $("#timer1 #seconds1").html( seconds);

  $("#timer2 #days2").html( days);
  $("#timer2 #hours2").html( hours);
  $("#timer2 #minutes2").html( minutes);
  $("#timer2 #seconds2").html( seconds);

  $("#timer3 #days3").html( days);
  $("#timer3 #hours3").html( hours);
  $("#timer3 #minutes3").html( minutes);
  $("#timer3 #seconds3").html( seconds);

  $("#timer4 #days4").html( days);
  $("#timer4 #hours4").html( hours);
  $("#timer4 #minutes4").html( minutes);
  $("#timer4 #seconds4").html( seconds);

  $("#timer5 #days5").html( days);
  $("#timer5 #hours5").html( hours);
  $("#timer5 #minutes5").html( minutes);
  $("#timer5 #seconds5").html( seconds);

  $("#timer6 #days6").html( days);
  $("#timer6 #hours6").html( hours);
  $("#timer6 #minutes6").html( minutes);
  $("#timer6 #seconds6").html( seconds);

  $("#timer7 #days7").html( days);
  $("#timer7 #hours7").html( hours);
  $("#timer7 #minutes7").html( minutes);
  $("#timer7 #seconds7").html( seconds);

  $("#timer8 #days8").html( days);
  $("#timer8 #hours8").html( hours);
  $("#timer8 #minutes8").html( minutes);
  $("#timer8 #seconds8").html( seconds);

  $("#timer9 #days9").html( days);
  $("#timer9 #hours9").html( hours);
  $("#timer9 #minutes9").html( minutes);
  $("#timer9 #seconds9").html( seconds);

  $("#timer10 #days10").html( days);
  $("#timer10 #hours10").html( hours);
  $("#timer10 #minutes10").html( minutes);
  $("#timer10 #seconds10").html( seconds);

  $("#timer11 #days11").html( days);
  $("#timer11 #hours11").html( hours);
  $("#timer11 #minutes11").html( minutes);
  $("#timer11 #seconds11").html( seconds);

  $("#timer12 #days12").html( days);
  $("#timer12 #hours12").html( hours);
  $("#timer12 #minutes12").html( minutes);
  $("#timer12 #seconds12").html( seconds);

  $("#timer13 #days13").html( days);
  $("#timer13 #hours13").html( hours);
  $("#timer13 #minutes13").html( minutes);
  $("#timer13 #seconds13").html( seconds);

  $("#timer14 #days14").html( days);
  $("#timer14 #hours14").html( hours);
  $("#timer14 #minutes14").html( minutes);
  $("#timer14 #seconds14").html( seconds);

  $("#timer15 #days15").html( days);
  $("#timer15 #hours15").html( hours);
  $("#timer15 #minutes15").html( minutes);
  $("#timer15 #seconds15").html( seconds);

  $("#timer16 #days16").html( days);
  $("#timer16 #hours16").html( hours);
  $("#timer16 #minutes16").html( minutes);
  $("#timer16 #seconds16").html( seconds);

  $("#timer17 #days17").html( days);
  $("#timer17 #hours17").html( hours);
  $("#timer17 #minutes17").html( minutes);
  $("#timer17 #seconds17").html( seconds);

  $("#timer18 #days18").html( days);
  $("#timer18 #hours18").html( hours);
  $("#timer18 #minutes18").html( minutes);
  $("#timer18 #seconds18").html( seconds);

  $("#timer19 #days19").html( days);
  $("#timer19 #hours19").html( hours);
  $("#timer19 #minutes19").html( minutes);
  $("#timer19 #seconds19").html( seconds);

  $("#timer20 #days20").html( days);
  $("#timer20 #hours20").html( hours);
  $("#timer20 #minutes20").html( minutes);
  $("#timer20 #seconds20").html( seconds);

  $("#timer21 #days21").html( days);
  $("#timer21 #hours21").html( hours);
  $("#timer21 #minutes21").html( minutes);
  $("#timer21 #seconds21").html( seconds);

  $("#timer22 #hours22").html( hours);
  $("#timer22 #minutes22").html( minutes);
  $("#timer22 #seconds22").html( seconds);

  $("#timer23 #days23").html( days);
  $("#timer23 #hours23").html( hours);
  $("#timer23 #minutes23").html( minutes);
  $("#timer23 #seconds23").html( seconds);

  $("#timer24 #hours24").html( hours);
  $("#timer24 #minutes24").html( minutes);
  $("#timer24 #seconds24").html( seconds);

  $("#timer25 #days25").html( days);
  $("#timer25 #hours25").html( hours);
  $("#timer25 #minutes25").html( minutes);
  $("#timer25 #seconds25").html( seconds);

  $("#timer26 #hours26").html( hours);
  $("#timer26 #minutes26").html( minutes);
  $("#timer26 #seconds26").html( seconds);

  $("#timer27 #hours27").html( hours);
  $("#timer27 #minutes27").html( minutes);
  $("#timer27 #seconds27").html( seconds);

  $("#timer28 #hours28").html( hours);
  $("#timer28 #minutes28").html( minutes);
  $("#timer28 #seconds28").html( seconds);
}
setInterval(function() {
  makeTimer();
}, 1000);
// timer end

/* Hero slider one */
  var heroSlider = new Swiper('.hero-slide-one', {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 0,
    loop: true,
    effect: 'fade',
    centeredSlides: true,
    roundLengths: true,
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
      delay: 7000
    },
    navigation: {
      nextEl: '.hero-next1',
      prevEl: '.hero-prev1',
    },
  });

  /* Hero slider two */
  var heroSliderTwo = new Swiper('.hero-slider-two', {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 0,
    // loop: true,
    effect: 'fade',
    centeredSlides: true,
    roundLengths: true,
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
      delay: 7000
    },
    navigation: {
      nextEl: '.hero-next2',
      prevEl: '.hero-prev2',
    },
  });

  var heroSliderThree = new Swiper('.hero-slider-three', {
    slidesPerView: 1,
    speed: 1000,
    spaceBetween: 0,
    loop: false,
    effect: 'fade',
    centeredSlides: true,
    roundLengths: true,
    fadeEffect: {
      crossFade: false
    },
    autoplay: {
      delay: 7000
    },
    // navigation: {
    //   nextEl: '.hero-next2',
    //   prevEl: '.hero-prev2',
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' +0 + (index + 1) + "</span>";
      },
    },
  });

  // banner-slider-dark hero-slider-dark
  var heroSliderThree = new Swiper('.hero-slider-dark', {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 0,
    loop: true,
    effect: 'fade',
    centeredSlides: true,
    roundLengths: true,
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
      delay: 7000
    },
    // navigation: {
    //   nextEl: '.hero-next2',
    //   prevEl: '.hero-prev2',
    // },
    pagination: {
      clickable: true,
      el: ".hero-pagination",
    },
    
  });

  var testimonialSliderOne = new Swiper('.testimonial-slider', {
    slidesPerView: 1,
    speed: 1000,
    spaceBetween: 20,
    loop: true,
    roundLengths: true,
    autoplay: {
      delay: 15000
    },
    navigation: {
      nextEl: '.testi-prev',
      prevEl: '.testi-next',
    },
  });

  var topWinnerSlider_One = new Swiper('.winner-slider', {
    slidesPerView: 2,
    speed: 1000,
    spaceBetween: 24,
    loop: true,
    roundLengths: true,
    autoplay: {
      delay: 9000
    },
    navigation: {
      nextEl: '.winner-next',
      prevEl: '.winner-prev',
    },

    breakpoints: {
      480:{
        slidesPerView: 2
      },
      768:{
        slidesPerView: 3
      },
      992:{ 
        slidesPerView: 4
      },
      1200:{
        slidesPerView: 4
      },
      1400:{
        slidesPerView: 5
      },
      1600:{
        slidesPerView: 6
      },
     
    }
  });


  var testimonialSlider_two = new Swiper('.testimonial-slider-two', {
    slidesPerView: 1,
    speed: 1000,
    spaceBetween: 24,
    loop: true,
    roundLengths: true,
    autoplay: {
      delay: 9000
    },
    navigation: {
      nextEl: '.testi-next2',
      prevEl: '.testi-prev2',
    },

    breakpoints: {
      480:{
        slidesPerView: 1
      },
      768:{
        slidesPerView: 1
      },
      992:{ 
        slidesPerView: 2
      },
      1200:{
        slidesPerView: 2
      },
     
    }
  });
  var testimonialSlider_four = new Swiper('.testimonial-slider-four', {
    slidesPerView: 1,
    speed: 1000,
    spaceBetween: 24,
    loop: true,
    roundLengths: true,
    autoplay: {
      delay: 9000
    },
    navigation: {
      nextEl: '.testi-next4',
      prevEl: '.testi-prev4',
    }
  });

  // product category slider
    var swiper = new Swiper(".swiper-container", {
      slidesPerView: 4,
      speed: 1000,
      // effect: 'fade',
      spaceBetween: 2,
      slidesPerColumn: 4,

      loop: true,
      // roundLengths: true,
      autoplay: {
        delay: 9000
      },
      navigation: {
        nextEl: '.testi-next4',
        prevEl: '.testi-prev4',
      }
  });
  // product category slider end

  var categorySlider_three = new Swiper('.category-slider', {
    slidesPerView: 2,
    speed: 1000,
    spaceBetween: 24,
    loop: true,
    roundLengths: true,
    navigation: {
      nextEl: '.category-next4',
      prevEl: '.category-prev4',
    },

    breakpoints: {
      480:{
        slidesPerView: 2
      },
      768:{
        slidesPerView: 4
      },
      992:{ 
        slidesPerView: 5
      },
      1200:{
        slidesPerView: 6
      },
     
    }
  });

    // product category slider end

    var categorySlider_three = new Swiper('.category-slider3', {
      slidesPerView: 1,
      speed: 1000,
      spaceBetween: 24,
      loop: true,
      roundLengths: true,
      navigation: {
        nextEl: '.category-next3',
        prevEl: '.category-prev3',
      },
  
      breakpoints: {
        480:{
          slidesPerView: 2
        },
        768:{
          slidesPerView: 4
        },
        992:{ 
          slidesPerView: 5
        },
        1200:{
          slidesPerView: 6
        },
       
      }
    });

  var collectionSlider_three = new Swiper('.collection-slider', {
    slidesPerView: 1,
    speed: 1000,
    spaceBetween: 24,
    loop: true,
    roundLengths: true,
    navigation: {
      nextEl: '.collection-next3',
      prevEl: '.collection-prev3',
    },

    breakpoints: {
      480:{
        slidesPerView: 2
      },
      768:{
        slidesPerView: 3
      },
      992:{ 
        slidesPerView: 4
      },
      1200:{
        slidesPerView: 4
      },
     
    }
  });


  var artistSlider = new Swiper('.artist-slider', {
    slidesPerView: 1,
    speed: 1000,
    spaceBetween: 24,
    loop: true,
    roundLengths: true,
    navigation: {
      nextEl: '.artist-next',
      prevEl: '.artist-prev',
    },

    breakpoints: {
      480:{
        slidesPerView: 2
      },
      768:{
        slidesPerView: 3
      },
      992:{ 
        slidesPerView: 4
      },
      1200:{
        slidesPerView: 4
      },
     
    }
  });


  var upcomingLandAuction_slider = new Swiper('.upcoming-land-auction', {
    slidesPerView: 1,
    spaceBetween: 24,
    speed: 1000,
    loop: true,
    roundLengths: true,
    navigation: {
      nextEl: '.upcoming-next',
      prevEl: '.upcoming-prev',
    },

    breakpoints: {
      480:{
        slidesPerView: 1
      },
      768:{
        slidesPerView: 2
      },
      992:{ 
        slidesPerView: 2
      },
      1200:{
        slidesPerView: 3
      },
     
    }
  });

  var upcomingLandAuction_slider = new Swiper('.catrgory-tab-slider', {
    slidesPerView: 2,
    spaceBetween: 24,
    speed: 1000,
    loop: true,
    roundLengths: false,
    navigation: {
      nextEl: '.upcoming-next',
      prevEl: '.upcoming-prev',
    },

    breakpoints: {
      480:{
        slidesPerView: 1
      },
      768:{
        slidesPerView: 2
      },
      992:{ 
        slidesPerView: 3
      },
      1200:{
        slidesPerView: 3
      },
     
    }
  });

  var best_auction_slider = new Swiper('.best-auction-slider', {
    slidesPerView: 1,
    spaceBetween: 24,
    speed: 1000,
    loop: true,
    roundLengths: false,
    navigation: {
      nextEl: '.upcoming-next',
      prevEl: '.upcoming-prev',
    },

    breakpoints: {
      480:{
        slidesPerView: 1
      },
      768:{
        slidesPerView: 1
      },
      992:{ 
        slidesPerView: 1
      },
      1200:{
        slidesPerView: 1
      },
     
    }
  });

// Magnific Popup video
$('.video-frame').magnificPopup({
  type: 'iframe'
});
  
// Nice select
$('select').niceSelect();

  
  let autoPlayDelay = 4000;

  let options = {
    init: true,
    loop: false,
    autoplay: {
      delay: autoPlayDelay
    }
  };

  let mySwiper = new Swiper('.swiper-container', options);

  let slidersCount = mySwiper.params.loop ? mySwiper.slides.length - 2 : mySwiper.slides.length;
  let widthParts = 100 / slidersCount;

  /* counter if we need */
  $('.swiper-counter .total').html(slidersCount);
  for (let i = 0; i < slidersCount; i++) {
    $('.swiper-progress-bar .progress-sections').append('<span></span>');
  }

  function initProgressBar() {
    let calcProgress = (slidersCount - 1) * (autoPlayDelay + mySwiper.params.speed);
    calcProgress += autoPlayDelay;
    $('.swiper-progress-bar .progress').animate({
      width: '100%'
    }, calcProgress, 'linear');
  }

  initProgressBar();

  mySwiper.on('slideChange', function () {
    let progress = $('.swiper-progress-bar .progress');

    /* counter if we need */
    $('.swiper-counter .current').html(this.activeindex + 1);

    if (
      (
        this.progress === -0 || (this.progress === 1 && this.params.loop)
      ) && !progress.parent().is('.stopped')
    ) {
      progress.css('width', '0');
      if (this.activeindex === 0) {
        initProgressBar();
      }
    }

    if (progress.parent().is('.stopped')) {
      progress.animate({
        'width': Math.round(widthParts * (this.activeindex + 1)) + '%'
      }, this.params.speed, 'linear');
    }
  });

  mySwiper.on('touchMove', function () {
    $('.swiper-progress-bar .progress').stop().parent().addClass('stopped');
  });

   // password-hide and show
   
   const togglePassword = document.querySelector('#togglePassword');

   const password = document.querySelector('#password');

   if(togglePassword){
    togglePassword.addEventListener('click', function (e) {
      // toggle the type attribute
      const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
      password.setAttribute('type', type);
      // toggle the eye / eye slash icon
      this.classList.toggle('bi-eye');
    });
   }
   
  
  // confirm-password
  const togglePassword2= document.getElementById('togglePassword2');
  
  const password2 = document.querySelector('#password2');

  if (togglePassword2){
    togglePassword2.addEventListener('click', function (e) {
      // toggle the type attribute
      const type = password2.getAttribute('type') === 'password' ? 'text' : 'password';
      password2.setAttribute('type', type);
      // toggle the eye / eye slash icon
      this.classList.toggle('bi-eye');
    });
  }
  // function activaTab(tab){
  //     $('.catrgory-tab-slider id=".'+ tab +'." ').tab('show');
  // };

  // activaTab('nav-home-tab');

}(jQuery));