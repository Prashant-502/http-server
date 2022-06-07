//////////////////////////////////////////
// Polyfill for IE 11
//////////////////////////////////////////

if (typeof Object.assign != "function") {
    Object.assign = function(target) {
        "use strict";
        if (target == null) {
            throw new TypeError("Cannot convert undefined or null to object");
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
    init: function() {
        this.browser = this.searchString(this.dataBrowser) || "Other";
        this.version =
            this.searchVersion(navigator.userAgent) ||
            this.searchVersion(navigator.appVersion) ||
            "Unknown";
    },
    searchString: function(data) {
        for (var i = 0; i < data.length; i++) {
            var dataString = data[i].string;
            this.versionSearchString = data[i].subString;

            if (dataString.indexOf(data[i].subString) !== -1) {
                return data[i].identity;
            }
        }
    },
    searchVersion: function(dataString) {
        var index = dataString.indexOf(this.versionSearchString);
        if (index === -1) {
            return;
        }

        var rv = dataString.indexOf("rv:");
        if (this.versionSearchString === "Trident" && rv !== -1) {
            return parseFloat(dataString.substring(rv + 3));
        } else {
            return parseFloat(
                dataString.substring(index + this.versionSearchString.length + 1)
            );
        }
    },

    dataBrowser: [{
            string: navigator.userAgent,
            subString: "Edge",
            identity: "ms-edge",
        },
        {
            string: navigator.userAgent,
            subString: "MSIE",
            identity: "explorer",
        },
        {
            string: navigator.userAgent,
            subString: "Trident",
            identity: "explorer",
        },
        {
            string: navigator.userAgent,
            subString: "Firefox",
            identity: "firefox",
        },
        {
            string: navigator.userAgent,
            subString: "Opera",
            identity: "opera",
        },
        {
            string: navigator.userAgent,
            subString: "OPR",
            identity: "opera",
        },

        {
            string: navigator.userAgent,
            subString: "Chrome",
            identity: "chrome",
        },
        {
            string: navigator.userAgent,
            subString: "Safari",
            identity: "safari",
        },
    ],
};

/* Waypoint script*/
$(function() {
    function onScrollInit(items, trigger) {
        items.each(function() {
            var osElement = $(this),
                osAnimationClass = osElement.attr("data-os-animation"),
                osAnimationDelay = osElement.attr("data-os-animation-delay");

            osElement.css({
                "-webkit-animation-delay": osAnimationDelay,
                "-moz-animation-delay": osAnimationDelay,
                "animation-delay": osAnimationDelay,
            });

            var osTrigger = trigger ? trigger : osElement;

            osTrigger.waypoint(
                function() {
                    osElement.addClass("animated").addClass(osAnimationClass);
                }, {
                    triggerOnce: true,
                    offset: "90%",
                }
            );
        });
    }
    onScrollInit($(".os-animation"));
    onScrollInit($(".staggered-animation"), $(".staggered-animation-container"));
});

$(document).ready(function() {
    BrowserDetect.init();
    $("body").addClass(
        BrowserDetect.browser + " " + BrowserDetect.browser + BrowserDetect.version
    );
    //$('#experience').modal('show')
    /* lazy loads elements with default selector as ".lozad" - Lazy loading Start*/
    const observer = lozad();
    observer.observe();
    /* End */
});

$(document).ready(function() {
    $(".nav-lm a").on("click", function() {
        $("html, body").animate({
            scrollTop: 0,
        }, 800);
    });
    $(".banner-lm").owlCarousel({
        nav: true,
        dots: true,
        loop: true,
        margin: 15,
        lazyLoad:true,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        navText: ["<span class='icon-Left'></span>", "<span class='icon-Right'></span>"],
        responsive: {
            0: {
                items: 1,
                stagePadding: 25,
                nav: false,
                dots: false
            },
            600: {
                items: 1,
                stagePadding: 15,
                margin: 5,
                dots: false
            },
            1000: {
                items: 1,
                margin: 0,
                stagePadding: 15,
            },
            1200: {
                items: 1,
                stagePadding: 55,
            },
            1300: {
                items: 1,
                stagePadding: 100,
            },
            1400: {
                items: 1,
                stagePadding: 135,
            },
            1600: {
                items: 1,
                stagePadding: 255,
            },
            1800: {
                items: 1,
                stagePadding: 370,
            }

        },
    });

    $(".picks-carousel").owlCarousel({
        nav: true,
        dots: true,
        margin: 7,
        items: 3,
        loop: false,
        navText: ["<span class='icon-Left'></span>", "<span class='icon-Right'></span>"],
        responsive: {
            1200: {
                items: 5,
                stagePadding: 40
            },
            1000: {
                items: 4,
                stagePadding: 20
            },
            600: {
                items: 3,
                dots: false,
                stagePadding: 20
            },
            0: {
                items: 2,
                nav: false,
                dots: false,
                stagePadding: 20
            },
        },
    });

    $(".picks-carousel-m").owlCarousel({
        nav: true,
        dots: true,
        margin: 7,
        items: 3,
        loop: false,
        navText: ["<span class='icon-Left'></span>", "<span class='icon-Right'></span>"],
        responsive: {
            1200: {
                items: 3,
                stagePadding: 20
            },
            1000: {
                items: 2,
                stagePadding: 20
            },
            600: {
                items: 3,
                stagePadding: 20
            },
            0: {
                items: 1,
                nav: false,
                dots: false,
                stagePadding: 75
            },
        },
    });

    $(".offer-carousel").owlCarousel({
        nav: false,
        dots: false,
        margin: 12,
        responsive: {
            0: {
                items: 3,
                stagePadding: 20,
            },
        },
    });

    $(".list-spot-car").owlCarousel({
        nav: true,
        dots: false,
        margin: 7,
        items: 3,
        loop: false,
        navText: ["<span class='icon-Left'></span>", "<span class='icon-Right'></span>"],
        responsive: {
            1200: {
                items: 3,
                stagePadding: 30
            },
            1000: {
                items: 2,
                stagePadding: 15
            },
            600: {
                items: 2,
                nav: false,
                dots: false,
                stagePadding: 50
            },
            0: {
                items: 1,
                nav: false,
                dots: false,
                stagePadding: 50
            },
        },
    });


    //Footer collapse
    $(".fot_tog, .list-more .drop-down .dropdown-content").hide();
    $(".fot_trgr, .list-more .drop-down a").on("click", function() {
        if ($(this).next().is(":hidden")) {
            $(this).addClass("act").next().slideDown(400);
        } else {
            $(this)
                .next()
                .slideUp(400, function() {
                    $(this).prev().removeClass("act");
                });
        }
    });

    // Mobile specific code
    if ($(window).width() < 768) {
        $(".fot_tog, .fhd +.row").hide();
        $(".fot-red .fhd").on("click", function() {
            if ($(this).next().is(":hidden")) {
                $(this).addClass("act").next().slideDown(400);
            } else {
                $(this).removeClass("act").next().slideUp(500);
            }
        });



        /* Show Active Tab upfront start*/
        // if ($(".mobile-move").length) {
        //     var tstW = 0;
        //     $(".secondary-tab ul li a.active")
        //         .parent()
        //         .prevAll()
        //         .each(function() {
        //             tstW += $(this).outerWidth(true);
        //         });
        //     $(".secondary-tab").animate({
        //             scrollLeft: tstW,
        //         },
        //         200
        //     );
        // }
        /* Show Active Tab upfront end*/
    }

    $('.more-nav-click').click(function() {
        $('.more-nav').toggleClass('act');
        $('body').toggleClass('overflow')
    });
    $('.nav-lm .nav-item .nav-link').click(function() {
        $('.nav-lm .nav-item .nav-link').removeClass('active');
        $(this).addClass('active');
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 2) {
            $('header').addClass('zindex');
        } else {
            $('header').removeClass('zindex');
        }
    });

});

// Notification JS
$(document).ready(function() {
    $('.notification-mob').on('click', function() {
        $('.notification-bx').fadeIn();
        $('body').append('<div class="overlay"></div>');
        $('.overlay').fadeIn();
        $('body').addClass('overflow');
    });
    $('.notification-bx .cls-btn').on('click', function() {
        $('.notification-bx').fadeOut(function() {
            $('.overlay').remove();
        });
        $('body').removeClass('overflow');
    });

});
