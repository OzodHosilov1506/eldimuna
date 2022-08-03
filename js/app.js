
$(document).ready(function(){
  $('.slider').slick({
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 3,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    nextArrow: "<button type='button' class='slick-btn slick-next'>next</button>",
    prevArrow: "<button type='button' class='slick-btn slick-prev'>prev</button>"
  });
});

// $(ducument).slick({
// })


