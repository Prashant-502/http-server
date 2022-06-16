//////////////////////////////////////////
// Polyfill for IE 11
//////////////////////////////////////////

if (typeof Object.assign != 'function') {
  Object.assign = function (target) {
    'use strict';
    if (target == null) {
      throw new TypeError('Cannot convert undefined or null to object');
    }

    target = Object(target);
    for (var index = 1; index < arguments.length; index++) {
      var source = arguments[index];
      if (source != null) {
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
    }
    return target;
  };
}

/*Browser detection script start*/
var BrowserDetect = {
  init: function () {
    this.browser = this.searchString(this.dataBrowser) || "Other";
    this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "Unknown";
  },
  searchString: function (data) {
    for (var i = 0; i < data.length; i++) {
      var dataString = data[i].string;
      this.versionSearchString = data[i].subString;

      if (dataString.indexOf(data[i].subString) !== -1) {
        return data[i].identity;
      }
    }
  },
  searchVersion: function (dataString) {
    var index = dataString.indexOf(this.versionSearchString);
    if (index === -1) {
      return;
    }

    var rv = dataString.indexOf("rv:");
    if (this.versionSearchString === "Trident" && rv !== -1) {
      return parseFloat(dataString.substring(rv + 3));
    } else {
      return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
    }
  },

  dataBrowser: [{
      string: navigator.userAgent,
      subString: "Edge",
      identity: "ms-edge"
    },
    {
      string: navigator.userAgent,
      subString: "MSIE",
      identity: "explorer"
    },
    {
      string: navigator.userAgent,
      subString: "Trident",
      identity: "explorer"
    },
    {
      string: navigator.userAgent,
      subString: "Firefox",
      identity: "firefox"
    },
    {
      string: navigator.userAgent,
      subString: "Opera",
      identity: "opera"
    },
    {
      string: navigator.userAgent,
      subString: "OPR",
      identity: "opera"
    },

    {
      string: navigator.userAgent,
      subString: "Chrome",
      identity: "chrome"
    },
    {
      string: navigator.userAgent,
      subString: "Safari",
      identity: "safari"
    }
  ]
};

/* Waypoint script*/
$(function () {
  function onScrollInit(items, trigger) {
    items.each(function () {
      var osElement = $(this),
        osAnimationClass = osElement.attr('data-os-animation'),
        osAnimationDelay = osElement.attr('data-os-animation-delay');

      osElement.css({
        '-webkit-animation-delay': osAnimationDelay,
        '-moz-animation-delay': osAnimationDelay,
        'animation-delay': osAnimationDelay
      });

      var osTrigger = (trigger) ? trigger : osElement;

      osTrigger.waypoint(function () {
        osElement.addClass('animated').addClass(osAnimationClass);
      }, {
        triggerOnce: true,
        offset: '90%'
      });
    });
  }
  onScrollInit($('.os-animation'));
  onScrollInit($('.staggered-animation'), $('.staggered-animation-container'));

});




/* Blog page Scroll Indicator  Start*/
if ($('.blog-progress').length) {
  window.onscroll = function () {
    myFunction()
  };

  function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var blogHeight = $('.blog-detail').outerHeight();
    var height = blogHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }
}
/* End */

$(document).ready(function () {
  BrowserDetect.init();
  $('body').addClass(BrowserDetect.browser + " " + BrowserDetect.browser + BrowserDetect.version);

  /* lazy loads elements with default selector as ".lozad" - Lazy loading Start*/
  const observer = lozad();
  observer.observe();
  /* End */


  // Sticky Header Start 
  var offsetTop = 60;
  if ($('.secondary-tab').length) {
    var offsethd1 = $('.secondary-tab').offset().top - 70;
  }
  /* Mobile Menu start */
  $('.menu-mob a').on('click', function () {
    $('.mob-menu').slideDown();
    $('body').addClass('overflow');
  })

  $('.cls-mm').on('click', function () {
    $('.mob-menu').slideUp();
    $('body').removeClass('overflow');
  })

  if ($(window).width() < 992) {
    //$('.fot_tog, .fhd +.row').hide();
    $('.mob-smenu .fhd').on('click', function () {
      if ($(this).next().is(':hidden')) {
        $(this).parent().find('.fhd').removeClass('act').next().slideUp('slow');
        //$(this).addClass('act').next().slideDown(400);
        $(this).addClass('act').next().slideDown(400, function () {
          //console.log($(this).offset().top);
          $('.mob-menu').animate({
            scrollTop: $(this).offset().top - 80
          }, 700);
        });
      } else {
        $(this).removeClass('act').next().slideUp(500);
      }
    });
  }
  /* Mobile Menu End */

  /* Youtube Video popup start */
  // Gets the video src from the data-src on each button
  var $videoSrc, $videoTitle;
  $('.play').click(function () {
    $videoSrc = $(this).data("src");
    $videoTitle = $(this).data("title");
    // if ($(this).data("title")) {
    //   $('#videoCaption').show();
    // }
  });

  // when the modal is opened autoplay it
  $('#videoModal').on('shown.bs.modal', function () {
    $("#video-frame").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    //$('#videoCaption figcaption').text($videoTitle);
  })

  // stop playing the youtube video when I close the modal
  $('#videoModal').on('hide.bs.modal', function () {
    $("#video-frame").attr('src', $videoSrc);
  })
  /* Youtube Video popup End */

  $(window).scroll(function () {
    if ($(this).scrollTop() > offsetTop) {
      $('header').addClass('sticky');
    } else {
      $('header').removeClass('sticky');
    }

    if ($(this).scrollTop() > offsethd1) {
      $('.secondary-tab').addClass('sticky');
    } else {
      $('.secondary-tab').removeClass('sticky');
    }
    if ($('.service-box').length) {
      var offsetbtn = $('.service-box').offset().top - $(window).height();
    } else {
      //console.log(111)
      var offsetbtn = $('.footer').offset().top - $(window).height();
    }
    // console.log(offsetbtn);
    if ($(window).width() < 768) {
      if ($(this).scrollTop() > offsetbtn) {
        $('.sticky-btm').addClass('hide');
      } else {
        $('.sticky-btm').removeClass('hide');
      }
    }
  });

  $('.menu').on('click', function (e) {
    e.preventDefault();
    $(this).parents('header').removeClass('sticky');
  })
  // Sticky Header End

  /* Smoothscroll Secondary nav Start */
  var is_iPad = navigator.userAgent.match(/iPad/i) != null;
  var lastId,
    topMenu = $(".snav-wraper"),
    topMenuHeight = topMenu.outerHeight() + 70,
    menuItems = topMenu.find("a"),
    scrollItems = menuItems.map(function () {
      var item = $($(this).attr("href"));
      if (item.length) {
        return item;
      }
    });
  // For Ipad click issue 
  if (is_iPad) {
    menuItems.on('touchstart', function (e) {
      var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
      $('html, body').stop().animate({
        scrollTop: offsetTop
      }, 600);
      e.preventDefault();
    });
  } else {
    menuItems.on('click', function (e) {
      var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
      $('html, body').stop().animate({
        scrollTop: offsetTop
      }, 600);
      e.preventDefault();
    });
  }

  $(window).scroll(function () {
    var fromTop = $(this).scrollTop() + topMenuHeight;
    var cur = scrollItems.map(function () {
      if ($(this).offset().top < fromTop)
        return this;
    });
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
      lastId = id;
      menuItems
        .removeClass("active")
        .filter("[href='#" + id + "']").addClass(function () {
          tabsWidthScroll();
          return 'active';
        });
    }
  });

  // For Mobile Scroll to nav
  function tabsWidthScroll() {
    var tstW = 0;
    setTimeout(function () {
      $('.secondary-nav ul li a.active').parent().prevAll().each(function () {
        tstW += $(this).outerWidth(true);
      });
      $(".secondary-nav").animate({
        scrollLeft: tstW
      }, 500);
    }, 400);
  }
  /* Smoothscroll Secondary nav End */

  //NetBanking sticky Image Start
  if ($('.sticky-element').length) {
    var lastId1,
      topMenu1 = $(".sticky-element"),
      topMenuHeight1 = topMenu1.outerHeight(),
      menuItems1 = topMenu1.find("li"),
      scrollItems = menuItems1.map(function () {
        var item = $($(this).attr("data-href"));
        if (item.length) {
          return item;
        }
      });

    $(window).scroll(function () {
      var fromTop = $(this).scrollTop() + topMenuHeight1 + 150;

      var cur = scrollItems.map(function () {
        if ($(this).offset().top < fromTop)
          return this;
      });
      cur = cur[cur.length - 1];
      var id = cur && cur.length ? cur[0].id : "";

      if (lastId1 !== id) {
        lastId1 = id;
        menuItems1
          .removeClass("active")
          .filter("[data-href='#" + id + "']").addClass("active");
      }
    });
  }
  //NetBanking sticky Image End


  //Click event to scroll to top
  $('.scroll-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
  }); // click() scroll top EMD


  //common secondary tabs scroll to top
  $('.secondary-tab .nav a').click(function () {
    $(this).tab('show');
    $('html, body').animate({
      scrollTop: 0
    }, 800);
  })
  // common secondary tabs scroll to top scroll top EMD

  // Owl Carosel start
  $('.common-carousel').owlCarousel({
    nav: true,
    dots: true,
    margin: 30,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      2000: {
        items: 3
      }
    }
  });
  $('.common-carousel-4').owlCarousel({
    nav: true,
    navText: ['<span class="icon-Left" aria-label="Previous"></span>', '<span  class="icon-Right" aria-label="Next"></span>'],
    dots: false,
    //margin: 30,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        stagePadding: 60
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4
      }
    }
  });

  $('.related-product-carousel').owlCarousel({
    nav: true,
    navText: ['<span class="icon-Left" aria-label="Previous"></span>', '<span  class="icon-Right" aria-label="Next"></span>'],
    dots: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        stagePadding: 60,
        dots: true,
        nav: false
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4
      }
    }
  });

  //Board of Directors Carosel
  $('.bod-carousel').owlCarousel({
    nav: true,
    navText: ['<span class="icon-Left" aria-label="Previous"></span>', '<span  class="icon-Right" aria-label="Next"></span>'],
    dots: false,
    responsiveClass: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
        dots: true,
        nav: false,
        stagePadding: 40
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });

  //Corporate Governance Carosel
  $('.copgov-carousel').owlCarousel({
    nav: true,
    navText: ['<span class="icon-Left" aria-label="Previous"></span>', '<span  class="icon-Right" aria-label="Next"></span>'],
    dots: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        loop: true,
        dots: true,
        nav: false,
        center: true,
        stagePadding: 90
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });

  //About page "Always You First" for single item
  $('.report-carousel').owlCarousel({
    nav: true,
    navText: ['<span class="icon-Left" aria-label="Previous"></span>', '<span  class="icon-Right" aria-label="Next"></span>'],
    dots: true,
    responsiveClass: true,
    items: 1,
    responsive: {
      0: {
        nav: false
      },
      1000: {
        nav: true
      }
    }
  });

  //About page "Always You First" for single item
  $('.single-carousel').owlCarousel({
    nav: false,
    dots: true,
    margin: 10,
    responsiveClass: true,
    items: 1
  });

  //Home banner
  $('.hero-banner').owlCarousel({
    nav: false,
    navText: ['<span class="arw-left"></span>', '<span class="arw-right"></span>'],
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplaySpeed: 1500,
    smartSpeed: 1500,
    responsiveClass: true,
    items: 1
  });
  // Owl Carosel End
  //accordian
  $('.tog_cont').hide();
  $('.trgr:eq(0)').addClass('act').next().show();
  $('.trgr').on('click', function () {
    if ($(this).next().is(':hidden')) {
      $('.trgr').removeClass('act').next().slideUp(500);
      $(this).addClass('act').next().slideDown(400, function () {
        // scroll top When you expand other accordions 
        $('html, body').animate({
          scrollTop: $(this).offset().top - 300
        }, 700);
      });
    } else {
      $(this).removeClass('act').next().slideUp(500);
    }
  });

  //Footer collapse
  $('.fot_tog').hide();
  $('.fot_trgr').on('click', function () {
    if ($(this).next().is(':hidden')) {
      $(this).addClass('act').next().slideDown(400);
    } else {
      $(this).next().slideUp(400, function () {
        $(this).prev().removeClass('act');
      });
    }
  });

  // Mobile specific code
  if ($(window).width() < 768) {
    $('.fot_tog, .fhd +.row').hide();
    $('.fot-red .fhd').on('click', function () {
      if ($(this).next().is(':hidden')) {
        $(this).addClass('act').next().slideDown(400);
      } else {
        $(this).removeClass('act').next().slideUp(500);
      }
    });

    $('.see-more').on('click', function () {
      $(this).parents('.list-looking').removeClass('for-mob');
      $(this).parents('li').hide().eq(last);
    })

    $('.see-less').on('click', function () {
      $(this).parents('.list-looking').addClass('for-mob');
      $('.list-looking li:nth-child(6)').show();
    })

    /* Show Active Tab upfront start*/
    if ($('.mobile-move').length) {
      var tstW = 0;
      $('.secondary-tab ul li a.active').parent().prevAll().each(function () {
        tstW += $(this).outerWidth(true);
      });
      $(".secondary-tab").animate({
        scrollLeft: tstW
      }, 200);
    }
    /* Show Active Tab upfront end*/
  }


  /* Mobile banking Sticky Right side start*/
  if ($('.sticky-element').length) {
    var top = $('.start-sticky').offset().top - 190;
    var footTop = $('.sticky-end').offset().top - 400;
    var maxY = footTop - $('.sticky-element').outerHeight();
    $(window).scroll(function (evt) {
      var y = $(this).scrollTop();
      if (y > top) {

        //Quand scroll, ajoute une classe ".fixed" et supprime le Css existant 
        if (y < maxY) {
          $('.sticky-element').addClass('active').removeAttr('style');
        } else {

          //Quand la sidebar arrive au footer, supprime la classe "fixed" précèdement ajouté
          $('.sticky-element').removeClass('active').css({
            position: 'absolute',
            top: (maxY - top) + 'px'
          });
        }
      } else {
        $('.sticky-element').removeClass('active');
      }
    });
  }
  /* Mobile banking Sticky Right side end*/

  // share popup 
  $('.share-box').on('click', function () {
    if ($(this).find('.share-positon-box').is(':visible')) {
      $(this).removeClass('open');
    } else {
      $('.share-box').removeClass('open');
      $(this).addClass('open');
    }
  });
  $(document).click(function (e) {
    if (!$(e.target).parents().addBack().is('.share-box')) {
      $('.share-box').removeClass('open')
    }
  });
  // share popup end

  /* Product listing page Compare logic start*/
  var prod_count = 0,
    proID;
  $('.compare-btn').click(function () {
    //console.log(prod_count);
    $('.compare-container').addClass('show');
    var isAdded = 0,
      title;
    isAdded = $(this).attr("data-val");
    title = $(this).attr("data-title");
    proID = $(this).attr("data-id");


    if (isAdded == 0) {
      // if (prod_count >0) {
      //   $('.compare-container').hide();
      // }


      if (prod_count > 2) {
        $('.notif-bx').remove();
        $(this).parents('.card.op2').append(
          '<div class="notif-bx"><span class="close-btn"></span><span>You can only compare 3 products at one time. Kindly remove one product to add this to compare.</span></div>'
        )


        return false;
      } else {

        prod_count = prod_count + 1;
        isAdded = 1;
        $(this).parents('.cta').addClass('selected');
        $(this).text('Remove');
        $(this).find('img').attr('src', 'images/minus.png');
        $('.compare-list').prepend(
          '<li id="' + proID + '"> <span class="close-btn"></span><div class="item-title">' +
          title + '</div></li>'
        )
      }
    } else {
      prod_count = prod_count - 1;
      isAdded = 0;
      $(this).parents('.cta').removeClass('selected');
      $(this).text('Compare');
      $(this).find('img').attr('src', 'images/plus.png');
      $('#' + proID).remove();
    }
    $(this).attr("data-val", isAdded);


    if (prod_count > 0) {
      $('.cart a').removeClass('disabled')
    } else {
      $('.cart a').addClass('disabled')
    }

    $('span.count').text(prod_count);
    if (prod_count === 0) {
      $('.compare-container').removeClass('show');
    }
    if (prod_count > 2) {
      $('.compare-list li.empty').hide();
    } else {
      $('.compare-list li.empty').show();
      $('.notif-bx').remove();
    }
  });
  $(document).on("click", ".compare-list .close-btn", function () {
    $(this).parent().remove();
    var proID = $(this).parent().attr('id');
    $('[data-id=' + proID + ']').click();

  });

  $(".compare-bx .compare-list li.empty").click(function () {
    $('html,body').animate({
        scrollTop: $(".product-container").offset().top
      },
      'slow');
  });
  $(document).on("click", ".notif-bx .close-btn", function () {
    $(this).parents('.notif-bx').remove();
  })

  /* Compare End */

  // Star active start */
  $('.icon-star').on('click', function () {
    $(this).toggleClass('active');
    return false;
  })
  // Star active end */

  /*read more and less start */
  $('.read-more').on('click', function () {
    $(this).parent().next().slideDown();
    $(this).hide();
    return false;
  })
  $('.read-less').on('click', function () {
    $(this).parent().prev().find('a').show();
    $(this).parent().slideUp();
    return false;
  })
  /*read more and less end */

  // tooltips
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });

  /* Floating SelectPicker Start */


  function float() {
    $(this).parents(".form-label-group").children("label").addClass("float");
  }

  function unfloat() {
    $(this).parents(".form-label-group").children("label").removeClass("float");
  }

  function changefloat() {
    $(this).parents(".form-label-group").children("label").addClass("changefloat");
  }

  $(".selectpicker").on("show.bs.select", float);
  $(".selectpicker").on("hide.bs.select", unfloat);
  $(".selectpicker").on("changed.bs.select", changefloat);

  $('.selectpicker').selectpicker({
    dropupAuto: false
  });


  $('select.changeD-data option:selected').parents('.form-label-group').children('.form-control-placeholder').addClass('changefloat');

  /* Floating SelectPicker End */


  /* onSlectect change Page Fixed Deposit, Home Loan2  */

  $('select.changeD-data').change(function () {
    var getdata = $(this).find(':selected').val();
    //console.log($(this).parents('.d-type-with-int').find('.int-regular').length)
    $(this).parents('.d-type-with-int').find('.int-regular').text(getdata);
  });

  $('input:radio[name="rgSelection"]').change(function () {
    $('.d-type-with-int').removeClass('active');
    var getdata = ('#' + $(this).val());
    $(getdata).addClass('active');
  });

  $('input:radio[name="radioOccupation"]').change(function () {
    var getdata = $(this).val();
    $('.intOccupation').text(getdata);
  });

  /* end  */

  /*blog load more Start */
  $('.load-more-cta-1').click(function () {
    $('.load-more-1').show();
    return false;
  });
  $('.load-more-cta-2').click(function () {
    $('.load-more-2').show();
    return false;
  });
  $('.load-more').click(function () {
    $(this).parent().prev().slideDown();
    return false;
  });
  /*blog load more End */

  /* Mobile Left Right Scrolling Start */
  if ($(window).width() < 900) {

    var ulWidth = 0;
    $(".secondary-tab .nav li").each(function () {
      ulWidth = ulWidth + 10 + $(this).outerWidth(true);
    });
    $('.secondary-tab .nav').width(ulWidth);

    var ulWidth2 = 0;
    $(".sbs-tab-scroll .nav a").each(function () {
      ulWidth2 = ulWidth2 + 20 + $(this).outerWidth();
    });
    $('.sbs-tab-scroll .nav').width(ulWidth2);

    var ulWidth1 = 0;
    $(".secondary-nav .nav li").each(function () {
      ulWidth1 = ulWidth1 + 10 + $(this).outerWidth(true);
    });
    $('.secondary-nav .nav').width(ulWidth1);

    var ulWidth3 = 0;
    $(".banner-btm ul > li").each(function () {
      ulWidth3 = ulWidth3 + 1 + $(this).outerWidth(true);
    });
    $('.banner-btm ul').width(ulWidth3);

    var ulWidth4 = 0;
    $(".mob-scroll ul li").each(function () {
      ulWidth4 = ulWidth4 + 1 + $(this).outerWidth(true);
    });
    $('.mob-scroll ul').width(ulWidth4);

    var ulWidth5 = 0;
    $(".mob-scroll1 ul li").each(function () {
      ulWidth5 = ulWidth5 + 1 + $(this).outerWidth(true);
    });
    $('.mob-scroll1 ul').width(ulWidth5);

    // Blog Tab scroll in mobile
    var ulWidth6 = 0;
    $(".blog-tab-scroll ul li").each(function () {
      ulWidth6 = ulWidth6 + 1 + $(this).outerWidth(true);
    });
    $('.blog-tab-scroll ul').width(ulWidth6);

  }

  if ($(window).width() < 767) {
    var ulWidth5 = 0;
    $(".card-tab ul li").each(function () {
      ulWidth5 = ulWidth5 + 1 + $(this).outerWidth(true);
    });
    $('.card-tab ul').width(ulWidth5);

    // var ulWidthm = 0;
    // $(".active .mob-scrollm ul li").each(function () {
    //   ulWidthm = ulWidthm + 1 + $(this).outerWidth(true);
    // });
    // $('.active .mob-scrollm ul').width(ulWidthm);
  }
  /* Mobile Left Right Scrolling End */

  /* Product page Caluclator Start */

  // Comma function
  function commaNumber(val) {
    var x = val;
    x = x.toString();
    var lastThree = x.substring(x.length - 3);
    var otherNumbers = x.substring(0, x.length - 3);
    if (otherNumbers != '')
      lastThree = ',' + lastThree;
    var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    return res;
  }

  var handle = $("#custom-handle-lakhs"),
    max;
  $("#slider-investAmount").slider({
    range: "min",
    value: 1200000,
    step: 10000,
    min: 100000,
    max: 5000000,
    create: function () {
      max = $("#slider-investAmount").slider("option", "value") / 100000;
      handle.text(max.toFixed(2) + 'L');
    },
    slide: function (event, ui) {
      $("#investAmount").val(commaNumber(ui.value));
      handle.text((ui.value / 100000).toFixed(2) + 'L');
    }
  });

  $("#investAmount").val(commaNumber($("#slider-investAmount").slider("value")));

  $("#investAmount").on("keyup", function (e) {
    commaNumber($("#slider-investAmount").slider("value", this.value));
  });

  $('#investAmount').on('focus', function (e) {
    $(this).val($(this).val().replace(/,/g, ''));
  });
  $('#investAmount').on('keyup keydown', function (e) {

    if ($(this).val() > 5000000 &&
      e.keyCode !== 46 &&
      e.keyCode !== 8
    ) {
      e.preventDefault();
      $(this).val(5000000);
    }

    max = $(this).val() / 100000;
    handle.text(max.toFixed(2) + 'L');

  });

  $("#investAmount").on("blur", function (e) {

    max = $(this).val() / 100000;
    handle.text(max.toFixed(2) + 'L');


    var valInput = this.value;
    valInput = valInput.replace(/,/g, "");
    $(this).val(commaNumber(valInput));

    if (valInput < 99999) {
      e.preventDefault();
      $(this).val(100000);
      max = $(this).val() / 100000;
      handle.text(max.toFixed(2) + 'L');
      $(this).val(commaNumber(100000));
    }
  });

  // Tenure Years
  var handle2 = $("#custom-handle-yrs"),
    max2;
  $("#slider-tenureYear").slider({
    range: "min",
    value: 7,
    min: 1,
    step: 1,
    max: 30,
    create: function () {
      max2 = $("#slider-tenureYear").slider("option", "value");
      handle2.text(max2 + 'Y');
    },
    slide: function (event, ui) {
      $("#tenureYear").val(ui.value);
      handle2.text(ui.value + 'Y');
    }
  });

  $("#tenureYear").val($("#slider-tenureYear").slider("value"));

  $("#tenureYear").on("keyup", function (e) {
    $("#slider-tenureYear").slider("value", this.value);
  });
  $("#tenureYear").click(function () {
    $(this).select();
  });

  $('#tenureYear').on('keyup keydown', function (e) {
    max2 = $("#slider-tenureYear").slider("option", "value");
    handle2.text(max2 + 'Y');
  });


  $("#tenureYear").on("blur", function (e) {
    max2 = $("#slider-tenureYear").slider("option", "value");
    handle2.text(max2 + 'Y');
    if ($(this).val() > 30 &&
      e.keyCode !== 46 &&
      e.keyCode !== 8
    ) {
      e.preventDefault();
      $(this).val(30);
    }

    var valInput = this.value;
    if (valInput < 1) {
      e.preventDefault();
      $(this).val(1);
      max = $(this).val();
      handle.text(max + 'Y');
    }
  });
  /* Product page Caluclator End */

  /* Fixed Deposit */

  // Tenure Month
  var handleMth = $("#custom-handle-mnt"),
    max2mth;
  $("#slider-tenureMonth").slider({
    range: "min",
    value: 7,
    min: 1,
    step: 1,
    max: 180,
    create: function () {
      max2mth = $("#slider-tenureMonth").slider("option", "value");
      handleMth.text(max2mth + 'M');
    },
    slide: function (event, ui) {
      $("#tenureMonth").val(ui.value);
      handleMth.text(ui.value + 'M');
    }
  });

  $("#tenureMonth").val($("#slider-tenureMonth").slider("value"));

  $("#tenureMonth").on("keyup", function (e) {
    $("#slider-tenureMonth").slider("value", this.value);
  });
  $("#tenureMonth").click(function () {
    $(this).select();
  });

  $('#tenureMonth').on('keyup keydown', function (e) {
    max2mth = $("#slider-tenureMonth").slider("option", "value");
    handleMth.text(max2mth + 'M');
  });


  $("#tenureMonth").on("blur", function (e) {
    max2mth = $("#slider-tenureMonth").slider("option", "value");
    handleMth.text(max2mth + 'M');
    if ($(this).val() > 180 &&
      e.keyCode !== 46 &&
      e.keyCode !== 8
    ) {
      e.preventDefault();
      $(this).val(180);
    }

    var valInput = this.value;
    if (valInput < 1) {
      e.preventDefault();
      $(this).val(1);
      max2mth = $(this).val();
      handleMth.text(max2mth + 'M');
    }
  });
  /* End */


  /* Fixed Deposite page */

  // Tenure Month
  var handleMth = $("#custom-handle-mnt"),
    max2mth;
  $("#slider-tenureMonth").slider({
    range: "min",
    value: 7,
    min: 1,
    step: 1,
    max: 180,
    create: function () {
      max2mth = $("#slider-tenureMonth").slider("option", "value");
      handleMth.text(max2mth + 'M');
    },
    slide: function (event, ui) {
      $("#tenureMonth").val(ui.value);
      handleMth.text(ui.value + 'M');
    }
  });

  $("#tenureMonth").val($("#slider-tenureMonth").slider("value"));

  $("#tenureMonth").on("keyup", function (e) {
    $("#slider-tenureMonth").slider("value", this.value);
  });
  $("#tenureMonth").click(function () {
    $(this).select();
  });

  $('#tenureMonth').on('keyup keydown', function (e) {
    max2mth = $("#slider-tenureMonth").slider("option", "value");
    handleMth.text(max2mth + 'M');
  });


  $("#tenureMonth").on("blur", function (e) {
    max2mth = $("#slider-tenureMonth").slider("option", "value");
    handleMth.text(max2mth + 'M');
    if ($(this).val() > 180 &&
      e.keyCode !== 46 &&
      e.keyCode !== 8
    ) {
      e.preventDefault();
      $(this).val(180);
    }

    var valInput = this.value;
    if (valInput < 1) {
      e.preventDefault();
      $(this).val(1);
      max2mth = $(this).val();
      handleMth.text(max2mth + 'M');
    }
  });
  /* End */


  /* Home loan Product detail page 2 */

  //Monthly income
  var handleMI = $("#custom-handle-MonthlyIncome"),
    maxMI;
  $("#slider-MonthlyIncome").slider({
    range: "min",
    value: 50000,
    step: 10000,
    min: 10000,
    max: 500000,
    create: function () {
      maxMI = $("#slider-MonthlyIncome").slider("option", "value") / 1000;
      if ($("#slider-MonthlyIncome").slider("option", "value") >= 100000) {
        handleMI.text(maxMI + 'L');
      } else {
        handleMI.text(maxMI + 'K');
      }

    },
    slide: function (event, ui) {
      $("#MonthlyIncome").val(commaNumber(ui.value));
      if (ui.value >= 100000) {
        handleMI.text((ui.value / 100000) + 'L');
      } else {
        handleMI.text((ui.value / 1000) + 'K');
      }

    }
  });

  $("#MonthlyIncome").val(commaNumber($("#slider-MonthlyIncome").slider("value")));

  $("#MonthlyIncome").on("keyup", function (e) {
    commaNumber($("#slider-MonthlyIncome").slider("value", this.value));
  });

  $('#MonthlyIncome').on('focus', function (e) {
    $(this).val($(this).val().replace(/,/g, ''));
  });

  $('#MonthlyIncome').on('keyup keydown', function (e) {

    if ($(this).val() > 500000 &&
      e.keyCode !== 46 &&
      e.keyCode !== 8
    ) {
      e.preventDefault();
      $(this).val(500000);
    }

    if ($(this).val() >= 100000) {
      maxMI = $(this).val() / 100000;
      handleMI.text(maxMI.toFixed(2) + 'L');
    } else {
      maxMI = $(this).val() / 1000;
      handleMI.text(maxMI.toFixed(2) + 'K');
    }


  });

  $("#MonthlyIncome").on("blur", function (e) {
    //console.log($(this).val(), 'ARIF');
    if ($(this).val() >= 100000) {
      maxMI = $(this).val() / 100000;
      handleMI.text(maxMI.toFixed(2) + 'L');
    } else {
      maxMI = $(this).val() / 1000;
      handleMI.text(maxMI.toFixed(2) + 'K');
    }

    var valInput = this.value;
    valInput = valInput.replace(/,/g, "");
    $(this).val(commaNumber(valInput));

    if (valInput < 9999) {
      e.preventDefault();
      $(this).val(10000);
      maxMI = $(this).val() / 1000;
      handleMI.text(maxMI + 'K');
      $(this).val(commaNumber(10000));
    }
  });

  //Additional Income
  var handleAddMI = $("#custom-handle-AdditionalIncome"),
    maxAddMI;
  $("#slider-AdditionalIncome").slider({
    range: "min",
    value: 20000,
    step: 1000,
    min: 10000,
    max: 100000,
    create: function () {
      maxAddMI = $("#slider-AdditionalIncome").slider("option", "value") / 1000;
      if ($("#slider-AdditionalIncome").slider("option", "value") >= 100000) {
        handleAddMI.text(maxAddMI / 10 + 'L');
      } else {
        handleAddMI.text(maxAddMI + 'K');
      }

    },
    slide: function (event, ui) {
      $("#AdditionalIncome").val(commaNumber(ui.value));
      if (ui.value >= 100000) {
        handleAddMI.text((ui.value / 100000) + 'L');
      } else {
        handleAddMI.text((ui.value / 1000) + 'K');
      }

    }
  });

  $("#AdditionalIncome").val(commaNumber($("#slider-AdditionalIncome").slider("value")));

  $("#AdditionalIncome").on("keyup", function (e) {
    commaNumber($("#slider-AdditionalIncome").slider("value", this.value));
  });

  $('#AdditionalIncome').on('focus', function (e) {
    $(this).val($(this).val().replace(/,/g, ''));
  });
  $('#AdditionalIncome').on('keyup keydown', function (e) {

    if ($(this).val() > 100000 &&
      e.keyCode !== 46 &&
      e.keyCode !== 8
    ) {
      e.preventDefault();
      $(this).val(100000);
    }
    if ($(this).val() >= 100000) {
      maxAddMI = $(this).val() / 100000;
      handleAddMI.text(maxAddMI.toFixed(2) + 'L');
    } else {
      maxAddMI = $(this).val() / 1000;
      handleAddMI.text(maxAddMI.toFixed(2) + 'K');
    }

  });

  $("#AdditionalIncome").on("blur", function (e) {
    if ($(this).val() >= 100000) {
      maxAddMI = $(this).val() / 100000;
      handleAddMI.text(maxAddMI.toFixed(2) + 'L');
    } else {
      maxAddMI = $(this).val() / 1000;
      handleAddMI.text(maxAddMI.toFixed(2) + 'K');
    }


    var valInput = this.value;
    valInput = valInput.replace(/,/g, "");
    $(this).val(commaNumber(valInput));

    if (valInput < 9999) {
      e.preventDefault();
      $(this).val(10000);
      maxAddMI = $(this).val() / 1000;
      handleAddMI.text(maxAddMI + 'K');
      $(this).val(commaNumber(10000));
    }
  });

  // Tenure Years5
  var handleYr5 = $("#custom-handle-tenureYear5"),
    maxYr5;
  $("#slider-tenureYear5").slider({
    range: "min",
    value: 8,
    min: 1,
    step: 1,
    max: 30,
    create: function () {
      maxYr5 = $("#slider-tenureYear5").slider("option", "value");
      handleYr5.text(maxYr5 + 'Y');
    },
    slide: function (event, ui) {
      $("#tenureYear5").val(ui.value);
      handleYr5.text(ui.value + 'Y');
    }
  });

  $("#tenureYear5").val($("#slider-tenureYear5").slider("value"));

  $("#tenureYear5").on("keyup", function (e) {
    $("#slider-tenureYear5").slider("value", this.value);
  });
  $("#tenureYear5").click(function () {
    $(this).select();
  });

  $('#tenureYear5').on('keyup keydown', function (e) {
    maxYr5 = $("#slider-tenureYear5").slider("option", "value");
    handleYr5.text(maxYr5 + 'Y');
  });


  $("#tenureYear5").on("blur", function (e) {
    maxYr5 = $("#slider-tenureYear5").slider("option", "value");
    handleYr5.text(maxYr5 + 'Y');
    if ($(this).val() > 30 &&
      e.keyCode !== 46 &&
      e.keyCode !== 8
    ) {
      e.preventDefault();
      $(this).val(30);
    }

    var valInput = this.value;
    if (valInput < 5) {
      e.preventDefault();
      $(this).val(5);
      maxYr5 = $(this).val();
      handleYr5.text(maxYr5 + 'Y');
    }
  });

  /* end */

  //Discover our banking products carousel
  $('.dub-carousel').owlCarousel({
    nav: false,
    dots: true,
    margin: 24,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3
      }
    }
  });

  /* Calendar start */
  $("#fromdate, #todate").datepicker({
    dateFormat: 'dd-mm-yy',
    changeMonth: true,
    changeYear: true
  });
  /* Calendar end */

  /* Remove Product from compare page start*/
  $('.remove-product').on('click', function () {
    var tblCol = $(this).attr('data-cell');
    $(this).parent().hide().next().removeClass('hide');
    $('.compare-grid tbody tr').each(function () {
      $(this).find('td').eq(tblCol).empty();
    })
  })
  /* Remove Product from compare page end*/

  // Investment Owl Carosel start
  $('.customer-speak-carousel').owlCarousel({
    nav: true,
    dots: false,
    margin: 8,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3
      }
    }
  });
  $('.learn-about-carousel').owlCarousel({
    nav: false,
    dots: true,
    margin: 30,
    slideBy: 2,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 4
      }
    }
  });
  // Investment Owl Carosel end

});

// Example starter JavaScript for disabling form submissions if there are invalid fields (Form Validation)
(function () {
  'use strict';
  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

$(window).on('load', function () {
  /* Common Sticky secondary Nav start */
  if ($('.secondary-nav').length) {
    var offsethd = $('.secondary-nav').offset().top - 70;
    $(window).scroll(function () {
      if ($(this).scrollTop() > offsethd) {
        $('.secondary-nav').addClass('sticky');
      } else {
        $('.secondary-nav').removeClass('sticky');
      }
    })
  }
  /* Common Sticky secondary Nav start */
})

/* Gallery detail start */
$(document).ready(function () {
  var sync1 = $(".slider");
  var sync2 = $(".navigation-thumbs");

  var thumbnailItemClass = '.owl-item';
  var current;

  var slides = sync1.owlCarousel({
    //video: true,
    //startPosition: 12,
    items: 1,
    loop: true,
    margin: 10,
    // autoplay: true,
    // autoplayTimeout: 6000,
    // autoplayHoverPause: false,
    nav: true,
    navText: ['<span class="icon-Left" aria-label="Previous"></span>', '<span  class="icon-Right" aria-label="Next"></span>'],
    dots: false
  }).on('changed.owl.carousel', syncPosition);

  function syncPosition(el) {

    $owl_slider = $(this).data('owl.carousel');
    var loop = $owl_slider.options.loop;

    if (loop) {
      var count = el.item.count - 1;
      current = Math.round(el.item.index - (el.item.count / 2) - .5);
      if (current < 0) {
        current = count;
      }
      if (current > count) {
        current = 0;
      }
    } else {
      current = el.item.index;
    }
    //console.log("---" + current);
    var owl_thumbnail = sync2.data('owl.carousel');
    var itemClass = "." + owl_thumbnail.options.itemClass;


    var thumbnailCurrentItem = sync2
      .find(itemClass)
      .removeClass("synced")
      .eq(current);

    thumbnailCurrentItem.addClass('synced');

    if (!thumbnailCurrentItem.hasClass('active')) {
      var duration = 300;
      sync2.trigger('to.owl.carousel', [current, duration, true]);
    }
  }
  var thumbs = sync2.owlCarousel({
      //startPosition: 12,
      items: 7,
      loop: false,
      margin: 20,
      autoplay: false,
      nav: false,
      dots: false,
      responsiveClass: true,
      responsive: {
        0: {
          items: 2
        },
        600: {
          items: 4
        },
        1000: {
          items: 7
        }
      },
      onInitialized: function (e) {
        var thumbnailCurrentItem = $(e.target).find(thumbnailItemClass).eq(this._current);
        thumbnailCurrentItem.addClass('synced');
      },
    })
    .on('click', thumbnailItemClass, function (e) {

      e.preventDefault();
      var duration = 300;
      var itemIndex = $(e.target).parents(thumbnailItemClass).index();
      sync1.trigger('to.owl.carousel', [itemIndex, duration, true]);
    })
})
/* Gallery detail end */

//custom upload button 
// document.getElementById("uploadBtn").onchange = function () {
//   document.getElementById("uploadFile").value = this.value.replace("C:\\fakepath\\", "");
//   $(this).parent().parent().addClass('active');
// };
$('.uploadBtn').on('change', function () {
  var filename = this.value.split('\\').pop();
  $(this).parent().parent().find(".f-input").val(filename)
  $(this).parent().parent().addClass('active');
})
$('.filename .remove').click(function () {
  $(this).prev('.f-input').val();
  $(this).parents('.upload-file').find('.upload').val("");
  $(this).parents('.upload-file').removeClass('active');
  return false;
})
//custom upload button end

$(document).on('click', '.dropdown-menu label', function (e) {
  //console.log(e);
  e.stopPropagation();
});
