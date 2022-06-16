$(document).ready(function () {
  $(".earn-points-carousel").owlCarousel({
    nav: true,
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
        items: 4,
      },
    },
  });

  $(".earn-bonus-carousel").owlCarousel({
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 2,
        nav: false,
        dots: true,
      },
      600: {
        items: 4,
        nav: false,
        dots: true,
      },
      1000: {
        items: 4,
      },
    },
  });

  $(".redeem-points-carousel").owlCarousel({
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
      },
      600: {
        items: 2,
        nav: false,
        dots: true,
      },
      1000: {
        items: 3, 
      },
    },
  });

  $(".hdeals-carosel").owlCarousel({
    center: true,
    items: 5,
    loop: true,
    nav: true,
    dots: false,
    touchDrag: false,
    mouseDrag: false,
    responsive: {
      0: {
        items: 2,
        nav: false,
        dots: true,
        touchDrag: true
      },
      600: {
        items: 3,
        nav: false,
        dots: true,
        touchDrag: true
      },
      1000: {
        items: 5,
      },
    },
  });
});
