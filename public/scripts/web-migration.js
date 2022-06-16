$(document).ready(function () {
  $(".earn-points-carousel").owlCarousel({
    dots: false,
    margin: 12,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
        stagePadding:30
      },
      600: {
        items: 3,
        nav: false,
        dots: true,
      },
      1000: {
        items: 3,
        margin: 50
      },
    },
  });

  $('.banner-btm2 .f16br').on('click', function(){
    $(this).toggleClass('act');
    $(this).parent().prev().toggleClass('f3');
    if ($(this).find('strong').text() == "View 5 more") {
      $(this).find('strong').text("View 5 less")
    } else {
      $(this).find('strong').text("View 5 more")
    }
  })

  
  $('.startup-acctount .nav a').on('click', function(){
    $("html, body").animate(
      {
        scrollTop: $('.startup-acctount').offset().top,
      },
      700
    );
  })

});
