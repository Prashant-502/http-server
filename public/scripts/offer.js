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
    return this.optional(element) || value == value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
  }, "Kindly provide a valid email address");
  //email Address end

  //mobile number
  $.validator.addMethod("mnumber", function (value, element) {
    return this.optional(element) || value == value.match(/^[6789]\d{9}$/);
  }, "Kindly provide a valid mobile number");
  //mobile number end

  //fullname
  $.validator.addMethod("fullName", function (value, element) {
    return this.optional(element) || value == value.match(/^[a-zA-Z][a-zA-Z\s']*$/);
  }, "Kindly provide a valid full name");
  //fullname end

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

  //Filter Accordian
  $('.filter_trgr').on('click', function () {
    if ($(this).next().is(':hidden')) {
      $(this).addClass('act').next().slideDown(400);
    } else {
      $(this).next().slideUp(400, function () {
        $(this).prev().removeClass('act');
      });
    }
  });

  // Filter BTN for mobile
  $('.filter-mob a').on('click', function () {
    $('.filter-by').slideDown();
    $('body').addClass('overflow');
  })

  $('.filter-top a').on('click', function () {
    $('.filter-by').slideUp();
    $('body').removeClass('overflow');
  })

  $("#find-brands").validate({
    rules: {
      brandname: {
        required: true
      },
      yourname: {
        required: true,
        fullName: true
      },
      mobile: {
        required: true,
        mnumber: true
      },
      tnc: {
        required: true
      }
    },
    messages: {
      brandname: {
        required: "Kindly provide a valid brand name"
      },
      yourname: {
        required: "Kindly provide a valid name"
      },
      mobile: {
        required: "Kindly provide a valid mobile number"
      },
      tnc: {
        required: ""
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

  $('.more-link').click(function () {
    $(this).parent().next().show();
  })
  $('.more-box .popup-close').click(function () {
    $(this).parent().hide();
  })

})



$(function () {
  var availableTags1 = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme"
  ];
  $("#offercity, #chooseloc").autocomplete({
    source: availableTags1,
    open: function (event, ui) {
      $(this).autocomplete("widget").css({
        "width": $(this).outerWidth()
      });
    }
  });
});