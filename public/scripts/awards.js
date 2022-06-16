$(document).ready(function () {
  $('.timeline-carousel').owlCarousel({
    loop: false,
    dots: false,
    nav: true,
    navText: ['<span class="icon-Left" aria-label="Previous"></span>', '<span class="icon-Right" aria-label="Next"></span>'],
    responsive: {
      0: {
        items: 3
      },
      600: {
        items: 6
      },
      1000: {
        items: 7
      }
    }
  });

  $('.timeline-carousel .owl-item').click(function () {
    $(this).siblings(".owl-item").removeClass("selected")
    $(this).addClass("selected");
    $(".tab-ctnt").hide();
    var activeTab = $(this).find(".year-btn").attr("data-url");
    $('#' + activeTab).fadeIn();
    return false;
  });

  $('.gallery-owl-carousel').owlCarousel({
    loop: false,
    dots: true,
    nav: true,
    slideBy: 1,
    navText: ['<span class="icon-Left" aria-label="Previous"></span>prev', '<span class="icon-Right" aria-label="Next"></span>next'],
    items: 3,
    margin: 24,
    responsive: {
      0: {
        items: 1,
        stagePadding: 30,
        margin: 20
      },
      768: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  })

  setTimeout(function () {
    $('.timeline-carousel .owl-item').first().children().find(".year").trigger('click');
    $('#IDFC-bank, #capital-first').removeClass('active');
  }, 100);
})
