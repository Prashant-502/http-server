$(document).ready(function () {
  $('.brand-offer-carousel').owlCarousel({
    nav: false,
    dots: true,
    lazyLoad: true,
    items: 1
  });

  $('.popular-offer-carousel').owlCarousel({
    nav: false,
    dots: true,
    margin: 30,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        stagePadding: 30,
        margin: 20
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });

  $('.card-offer-carousel').owlCarousel({
    nav: false,
    dots: true,
    lazyLoad: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        stagePadding: 60,
        dots: true,
        nav: false
      },
      600: {
        items: 3
      },
      1000: {
        items: 3
      }
    }
  });

  // Offers For You start
  function resize_offer() {
    if ($(window).width() < 992) {
      $('.forYou-offer-carousel').addClass('owl-carousel');
      $('.forYou-offer-carousel').owlCarousel({
        nav: false,
        dots: true,
        margin: 30,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
            stagePadding: 30,
            margin: 20
          },
          600: {
            items: 2
          }
        }
      });

    } else {
      $('.forYou-offer-carousel').removeClass('owl-carousel').owlCarousel('destroy');
    }
  }

  resize_offer();

  $(window).resize(function () {
    resize_offer();
  });
  // Offers For You end

  // Offer Listing page 

  //email Address
  $.validator.addMethod("emailadd", function (value, element) {
    return this.optional(element) || value == value.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/);
  }, "Kindly provide a valid email address");
  //email Address end

  $("#get-offer-form").validate({
    rules: {
      email: {
        required: true,
        emailadd: true
      }
    },
    messages: {
      email: {
        required: "Kindly provide a valid email address",
      }
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass("is-invalid").removeClass("is-valid");
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).addClass("is-valid").removeClass("is-invalid");
    },
    submitHandler: function () {

    }
  });
})
