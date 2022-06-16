$(document).ready(function() {
    //pancard number
    $.validator.addMethod(
        "pannumber",
        function(value, element) {
            return (
                this.optional(element) ||
                value == value.match(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/)
            );
        },
        "Kindly provide a valid Permanent Account Number (PAN)"
    );
    //pancard number end

    //mobile number
    $.validator.addMethod(
        "mnumber",
        function(value, element) {
            return this.optional(element) || value == value.match(/^[6789]\d{9}$/);
        },
        "Kindly provide a valid mobile number"
    );
    //mobile number end



    //fullname
    $.validator.addMethod(
        "fullNamePtrn",
        function(value, element) {
            return (
                this.optional(element) || value == value.match(/^[a-zA-Z][a-zA-Z\s']*$/)
            );
        },
        "Kindly provide a valid full name"
    );
    //fullname end

    // BIB Number
    $.validator.addMethod(
        "bibNumberPtrn",
        function(value, element) {
            return (
                this.optional(element) || value == value.match(/^[a-zA-Z0-9]{2,}/)
            );
        },
        "Kindly provide a valid BIB Number"
    );
    // BIB Number end

    //email Address
    $.validator.addMethod(
        "emailadd",
        function(value, element) {
            return (
                this.optional(element) ||
                value.match(/^[^0-9._!@#$%^&*()+|}{":?><,/;'}][a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
            );
        },
        "Kindly provide a valid email address"
    );
    //email Address end



    //pincode
    $.validator.addMethod(
        "pincodenumber",
        function(value, element) {
            return this.optional(element) || value == value.match(/^[0-9]{6}$/);
        },
        "Kindly provide a valid pincode"
    );
    //pincode end

    //otp
    $.validator.addMethod(
        "otpnumber",
        function(value, element) {
            return this.optional(element) || value == value.match(/^[0-9]{6}$/);
        },
        "Kindly provide a valid OTP"
    );
    //otp end

    //Last 4 Digits of your Credit card
    $.validator.addMethod(
        "cardL4d",
        function(value, element) {
            return this.optional(element) || value == value.match(/^[0-9]{4}$/);
        },
        "Kindly provide a valid Credit card no"
    );
    //pincode end



    $("#aemStep1").validate({
        rules: {
            emailid: {
                required: true,
                emailadd: true,
            },
            mobile: {
                required: true,
                mnumber: true,
            },

            tnc: {
                required: true,
            },
            otp: {
                required: true,
                otpnumber: true,
            },
        },
        messages: {
            emailid: {
                required: "Kindly provide a valid e-mail Address",
                minlength: "Kindly provide a valid e-mail Address"
            },
            mobile: {
                required: "Kindly provide a valid Mobile Number",
            },

            tnc: {
                required: "",
            },
            otp: {
                required: "Kindly provide a valid OTP",
            },
        },
        highlight: function(element, errorClass, validClass) {
            $(element).addClass("is-invalid").removeClass("is-valid");
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).addClass("is-valid").removeClass("is-invalid");
        },
        submitHandler: function() {
            $('.aem-journey.step1.active .dc-status-step li:first-child').removeClass('current');
            $('.aem-journey.step1.active .dc-status-step li:first-child').addClass('active');
            $('.aem-journey.step1 .dc-status-step li:nth-child(2)').addClass('current');


            if ($(".otp").is(":visible")) {
                $(".aem-journey.step1").removeClass("active");
                $(".aem-journey.step2").addClass("active");
                //$("html, body").stop().animate({ scrollTop: 0, }, 200);
            } else {
                $(".step1 .otp").show().next().addClass("act");
                $("#emailid").prop("readonly", true);
                $("#mobile").prop("readonly", true);
            }
        },
    });

    $("#aemStep2").validate({
        rules: {
            fullName: {
                required: true,
                fullNamePtrn: true,
                minlength: "3"
            },
            accNumber: {
                required: true,
            },
            bibNumber: {
                required: true,
                bibNumberPtrn: true,
                minlength: "2",
                maxlength: "15"
            },
            slcNGO: {
                required: true,
            }
        },
        messages: {
            fullName: {
                required: "Kindly provide a valid Full name",

            },
            accNumber: {
                required: "Please Select Account Number"
            },
            bibNumber: {
                required: "Kindly provide a valid  BIB Number/Certificate Number"
            },
            slcNGO: {
                required: "Please Select NGO"
            }
        },
        highlight: function(element, errorClass, validClass) {
            $(element).addClass("is-invalid").removeClass("is-valid");
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).addClass("is-valid").removeClass("is-invalid");
        },
        submitHandler: function() {
            $(".aem-journey.step2").removeClass("active");
            $(".aem-journey.step3").addClass("active");
            //$("html, body").stop().animate({ scrollTop: 0, }, 200);
        },
    });

    $("#aemStep3").validate({
        rules: {
            tenure: {
                required: true,
            },
            tn1: {
                required: true,
            },
            otp1: {
                required: true,
                otpnumber: true,
            },
        },
        messages: {
            tenure: {
                required: "Kindly provide a valid Tenure",
            },
            tnc1: {
                required: "",
            },
            otp1: {
                required: "Kindly provide a valid OTP",
            },
        },
        highlight: function(element, errorClass, validClass) {
            $(element).addClass("is-invalid").removeClass("is-valid");
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).addClass("is-valid").removeClass("is-invalid");
        },
        submitHandler: function() {
            if ($(".otp").is(":visible")) {
                $(".aem-journey.step3").removeClass("active");
                $(".aem-journey.step4").addClass("active");
                $("html, body").stop().animate({ scrollTop: 0, }, 200);
            } else {
                $(".step3 .otp").show().next().addClass("act");
            }
        },
    });

    // $("#aemStep4").validate({
    //     rules: {
    //         emiGroup: {
    //             required: true,
    //         },
    //         tnc2: {
    //             required: true,
    //         },
    //     },
    //     messages: {
    //         emiGroup: {
    //             required: "",
    //             minlength: "",
    //         },
    //         tnc2: {
    //             required: "",
    //         },
    //     },
    //     highlight: function(element, errorClass, validClass) {
    //         $(element).addClass("is-invalid").removeClass("is-valid");
    //     },
    //     unhighlight: function(element, errorClass, validClass) {
    //         $(element).addClass("is-valid").removeClass("is-invalid");
    //     },
    //     submitHandler: function() {
    //         $(".aem-journey.step4").removeClass("active");
    //         $(".aem-journey.step5").addClass("active");
    //         $("html, body").stop().animate({ scrollTop: 0, }, 200);
    //     },
    // });

    // $(".back-bx a").on("click", function() {
    //     $(this).parents('.aem-journey').removeClass("active").prev().addClass("active");
    // });

    // $("#allTrans").click(function() {
    //     $("#aemStep2 input:checkbox").not(this).prop("checked", this.checked);
    // });





    // $("#ddlPassport").change(function() {
    //     if ($(this).val() == "biswaShow") {
    //       $("." + biswaShow).show();
    //         $("#dvPassport").show();
    //     } else {
    //         $("#dvPassport").hide();
    //     }
    // });
});

$("select#slcNGO").change(function() {
    $(this).find("option:selected").each(function() {
        var optionValue = $(this).attr("value");
        if (optionValue) {
            $(".boxhide").not("." + optionValue).hide();
            $("." + optionValue).show();
        } else {
            $(".boxhide").hide();
        }
    });
}).change();

// otp timer
if ($('#timer3').length) {
    let timerOn = true;

    function timer(remaining) {
        var m = Math.floor(remaining / 60);
        var s = remaining % 60;
        m = m < 10 ? '0' + m : m;
        s = s < 10 ? '0' + s : s;
        document.getElementById('timer3').innerHTML = m + ':' + s;
        remaining -= 1;
        if (remaining >= 0 && timerOn) {
            setTimeout(function() {
                timer(remaining);
            }, 1000);
            return;
        }
        if (!timerOn) {
            return;
        }
    }
    timer(210)
}
// otp timer end


// Convert Uppercase to lower
function toLower(e) {
    setTimeout(function() {
        let v = e.target.value.toLowerCase();
        e.target.value = v;
    }, 100);
}
// end

// For only Number
function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}
