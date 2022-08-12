
$(document).ready(function(){
  $('.slider').slick({
    dots: true,
    infinite: false,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 3,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    nextArrow: '<button type="button" class="slick-btn slick-angle slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-angle slick-prev"><</button>'
  });
});



$(document).ready(function(){
  $('.gallery').slick({
    slidesToShow: 3,
    slidesToScroll: 3
  });
});

$(document).ready(function(){
  $('.gallery-wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 3
  });
});

$(document).ready(function(){
  $('#year').text(new Date().getFullYear());
});
  

let typed = new typed('.elegant', {
  strings: ["Photo session with our happy brides", "It is honorable for us to be at your service in your happinest moments"],
  typeSpeed: 30
});

var options = {
  strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
  typeSpeed: 40
};

var typed = new Typed('.element', options);


