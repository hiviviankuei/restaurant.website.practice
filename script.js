$(document).ready(function(){
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: $('.next'),
        prevArrow: $('.prev'),
        responsive:[
        {
          breakpoint:1024,
          setting:{
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        ]
      });
  });


$(window).scroll(function () {
    if ($(this).scrollTop() > 165) {
      $('header').addClass("fix");
    } 
    else {
      $('header').removeClass("fix");
    }
});