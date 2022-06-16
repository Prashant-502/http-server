if (typeof Object.assign != 'function') {
    Object.assign = function(target) {
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

$(window).on("load", function() {
    /* Common Sticky secondary Nav start */
    if ($(".fpsub-nav").length) {
        var offsethd = $(".fpsub-nav").offset().top - 70;
        $(window).scroll(function() {
            if ($(this).scrollTop() > offsethd) {
                $(".fpsub-nav").addClass("sticky");
                $('header').addClass('secNavSticky');
            } else {
                $(".fpsub-nav").removeClass("sticky");
                $('header').removeClass('secNavSticky');
            }
        });

        if ($(this).scrollTop() > offsethd) {
            $(".fpsub-nav").addClass("sticky");
        } else {
            $(".fpsub-nav").removeClass("sticky");
        }
        // if ($(this).scrollTop() > offsethd) {
        //   $("header").addClass("sticky");
        // } else {
        //   $("header").removeClass("sticky");
        // }
        if ($(this).scrollTop() > 2) {
            $('header').addClass('zindex');
        } else {
            $('header').removeClass('zindex');
        }
    }
    /* Common Sticky secondary Nav start */
});

$(document).ready(function() {
    // Will wait for everything on the page to load.
    $(window).bind('load', function() {
        $('.overlay1, body').addClass('loaded');
        setTimeout(function() {
            $('.overlay1').css({ 'display': 'none' })
        }, 2000)
    });

    // Will remove overlay1 after 1min for users cannnot load properly.
    setTimeout(function() {
        $('.overlay1, body').addClass('loaded');
        $('.overlay1').css({ 'display': 'none' })
    }, 15000);

    /* Mobile Menu start */
    $(".menu-mob a").on("click", function() {
        $(".mob-menu").slideDown();
        $("body").addClass("overflow");
    });

    $(".cls-mm").on("click", function() {
        $(".mob-menu").slideUp();
        $("body").removeClass("overflow");
    });

    if ($(window).width() < 992) {
        //$('.fot_tog, .fhd +.row').hide();
        $(".mob-smenu .fhd").on("click", function() {
            if ($(this).next().is(":hidden")) {
                $(this).parent().find(".fhd").removeClass("act").next().slideUp("slow");
                //$(this).addClass('act').next().slideDown(400);
                $(this)
                    .addClass("act")
                    .next()
                    .slideDown(400, function() {
                        //console.log($(this).offset().top);
                        $(".mob-menu").animate({
                                scrollTop: $(this).offset().top - 80,
                            },
                            700
                        );
                    });
            } else {
                $(this).removeClass("act").next().slideUp(500);
            }
        });
        // Tab comp mobile
        $(".tabComp .fhd:eq(0)").addClass("act").next().show();
        $(".tabComp .fhd").on("click", function() {
            if ($(this).next().is(":hidden")) {
                $(this).parent().find(".fhd").removeClass("act").next().slideUp("slow");
                $(this).addClass("act").next().slideDown(400, function() {
                    $("html, body").animate({
                        scrollTop: $(this).offset().top - 300,
                    }, 700);
                });
            } else {
                $(this).removeClass("act").next().slideUp(500);
            }
        });
    }
    /* Mobile Menu End */
})

$(document).ready(function() {
    /* lazy loads elements with default selector as ".lozad" - Lazy loading Start*/
    const observer = lozad();
    observer.observe();
    /* End */

    $.scrollify({
        section: ".main-ctnr",
        interstitialSection: "",
        easing: "easeOutExpo",
        scrollSpeed: 2000,
        scrollbars: false,
        standardScrollElements: ".normal-scroll, .menu-cardList-cnt, .mob-menu, .notification-dropdown, .search-bx",
        setHeights: false,
        overflowScroll: true,
        before: function(i, panels) {

            var ref = panels[i].attr("data-section-name");

            $(".fpsub-nav a.active").removeClass("active");
            $('.fpsub-nav a[href="#' + ref + '"]').addClass("active");

            $(".main-ctnr").removeClass("active");
            current = $.scrollify.current();
            current.addClass("active");

            if ($(window).width() < 768) {
                if ($(".fpscn1, .fwscn1, .fsscn1").hasClass("active")) {
                    $(".fpsub-nav").removeClass("sticky");
                } else {
                    $(".fpsub-nav").addClass("sticky");
                }
            }

        },
        after: function() {

        },
    });

    $(".fpsub-nav a").on("click", function() {
        //console.log($(this).attr("href"));
        $(".fpsub-nav a").removeClass('active')
        $(this).addClass('active');
        $.scrollify.move($(this).attr("href"));

    });

    $(".fpsub1-nav a").on("click", function() {
        //console.log($(this).attr("href"));
        $(".fpsub1-nav a").removeClass('active')
        $(this).addClass('active');
        $.scrollify.move($(this).attr("href"));
    });

    $(window).scroll(function() {
        // if ($(this).scrollTop() > 60) {
        //     $("header").addClass("sticky");
        // } else {
        //     $("header").removeClass("sticky");
        // }
        if ($(this).scrollTop() > 2) {
            $('header').addClass('zindex');
        } else {
            $('header').removeClass('zindex');
        }
    });

    $(".menu").on("click", function(e) {
        e.preventDefault();
        $(this).parents("header").removeClass("sticky");
    });

    //fullname
    $.validator.addMethod(
        "fullname",
        function(value, element) {
            return this.optional(element) || value == value.match(/^.+ .+$/);
        },
        "Please provide a valid full name"
    );
    //fullname end

    //email Address
    $.validator.addMethod(
        "emailadd",
        function(value, element) {
            return (
                this.optional(element) ||
                value ==
                value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
            );
        },
        "Please provide a valid email address"
    );
    //email Address end

    //mobile number
    $.validator.addMethod(
        "mnumber",
        function(value, element) {
            return this.optional(element) || value == value.match(/^[6789]\d{9}$/);
        },
        "Please provide a valid mobile number"
    );
    //mobile number end

    //vlidate pre aadhar form
    $("#feedbackForm").validate({
        rules: {
            preFullName: {
                required: true,
                fullname: true,
            },
            preMobile: {
                required: true,
                mnumber: true,
            },
            emailId: {
                required: true,
                emailadd: true
            }
        },
        messages: {
            preFullName: {
                required: "Please provide valid Name",
                fullname: "Please enter valid full name",
            },
            preMobile: {
                required: "Please provide mobile number",
                mnumber: "Please enter valid mobile number",
            },
            emailId: {
                required: "Please provide Email ID",
                emailadd: "Please enter valid Email ID"
            }
        },
        highlight: function(element, errorClass, validClass) {
            $(element).addClass("is-invalid").removeClass("is-valid");
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).addClass("is-valid").removeClass("is-invalid");
        },
        submitHandler: function() {},
    });
});

// navigation layout auto shifting JS
$(document).ready(function() {

    $('.top-nav .top-nav-left li.drop-down').each(function() {
        //console.log($(this).offset().left);
        // console.log($('.menu-cardList-cnt').width(), 'abc')

        if (($(window).width() - $(this).offset().left) < $('.menu-cardList-cnt').width()) {
            $(this).addClass('rgt');
        } else {
            $(this).removeClass('rgt');
        }
    });

});