$(document).ready(function() {

    //otp
    $.validator.addMethod("otpnumber", function(value, element) {
        return this.optional(element) || value == value.match(/^[0-9]{6}$/);
    }, "Kindly provide a valid OTP");
    //otp end

    //pancard number
    $.validator.addMethod("pannumber", function(value, element) {
        return this.optional(element) || value == value.match(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/);
    }, "Please provide a valid Permanent Account Number (PAN)");
    //pancard number end

    //fullname
    $.validator.addMethod("fullname", function(value, element) {
        return this.optional(element) || value == value.match(/^.+ .+$/);
    }, "Please provide a valid full name");
    //fullname end

    //email Address
    $.validator.addMethod("emailadd", function(value, element) {

        return this.optional(element) || value == value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
    }, "Please provide a valid email address");
    //email Address end

    //mobile number
    $.validator.addMethod("mnumber", function(value, element) {
        return this.optional(element) || value == value.match(/^[6789]\d{9}$/);
    }, "Please provide a valid mobile number");
    //mobile number end


    //aadhar number
    $.validator.addMethod("aadharnumber", function(value, element) {
        value = value.split(" ").join("");
        return this.optional(element) || value == value.match(/^^[0-9]{12}$/) || value == value.match(/^^[0-9]{16}$/);
    }, "Please enter 12 digit Aadhaar or 16 digit VID number");
    //aadhar number end

    //vlidate pre aadhar form
    $("#feedbackForm").validate({
        rules: {
            preFullName: {
                required: true,
                fullname: true
            },
            preMobile: {
                required: true,
                mnumber: true
            },
            msgforu: {
                required: true
            },
            extCust: {
                required: true
            }
        },
        messages: {
            preFullName: {
                required: "Please provide First Name & Last Name",
                fullname: "Please enter valid full name",
            },
            preMobile: {
                required: "Please provide mobile number",
                mnumber: "Please enter valid mobile number"
            },
            msgforu: {
                required: "Please provide Message for us"
            },
            extCust: {
                required: ""
            },
        },
        highlight: function(element, errorClass, validClass) {
            $(element).addClass("is-invalid").removeClass("is-valid");

        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).addClass("is-valid").removeClass("is-invalid");
        },
        submitHandler: function() {

        }
    });

    $("#otherForm1").validate({
        rules: {
            request: {
                required: true
            },
            email: {
                required: true,
                emailadd: true
            },
            msgforu: {
                required: true
            }
        },
        messages: {
            request: {
                required: "Please provide your requeste",
                fullname: "Please enter valid your request",
            },
            email: {
                required: "Please provide email address",
                emailadd: "Please enter valid email address"
            },
            msgforu: {
                required: "Please provide Message for us"
            }
        },
        highlight: function(element, errorClass, validClass) {
            $(element).addClass("is-invalid").removeClass("is-valid");
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).addClass("is-valid").removeClass("is-invalid");
        },
        submitHandler: function() {
            $('.others-step.step1').removeClass('active').next().addClass('active');
        }
    });

    $("#otherForm2").validate({
        rules: {
            preMobile: {
                required: true,
                mnumber: true
            },
            otp: {
                required: true,
                otpnumber: true,
            },
        },
        messages: {
            preMobile: {
                required: "Please provide mobile number",
                mnumber: "Please enter valid mobile number"
            },
            otp: {
                required: "Kindly provide a valid OTP number",
                minlength: "Kindly provide a valid OTP number"
            }
        },
        highlight: function(element, errorClass, validClass) {
            $(element).addClass("is-invalid").removeClass("is-valid");
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).addClass("is-valid").removeClass("is-invalid");
        },
        submitHandler: function() {
            if ($('.otp-box').is(":visible")) {
                console.log(111);
                $('.others-step.step2').removeClass('active').next().addClass('active');
            } else {
                console.log(122211);
                $('.otp-box').show().prev().hide();
                $('.otp-btn').addClass('act')
                    //$('.confirm-box').removeClass('hide');
            }
        }
    });

    $('.back-btn1 .back-link').on('click', function() {
        $('.others-step.step2').removeClass('active').prev().addClass('active');
    })

    $('.services-list .viewall').on('click', function() {
        $(this).parent().next().removeClass('hide');
        $(this).parent().addClass('hide');
    });

    // $('.list-service .viewall').on('click', function() {
    //     $(this).parent().parent().addClass('hide').next().removeClass('hide')
    // });
    $('.more-services .back-link').on('click', function() {
        $('.more-services').addClass('hide').prev().removeClass('hide')
    })
    $('.goto-other').on('click', function() {
        $("#other-tab").trigger('click');
        $('html, body').animate({
            scrollTop: $(".stab-wraper.brdb").offset().top - 60
        }, 500);
    })
})

function startTime() {

    // otp timer
    if ($('#otpTimer').length) {
        let timerOn = true;

        function timer(remaining) {
            var m = Math.floor(remaining / 60);
            var s = remaining % 60;
            m = m < 10 ? '0' + m : m;
            s = s < 10 ? '0' + s : s;
            document.getElementById('otpTimer').innerHTML = 'Time Left ' + m + ':' + s;
            remaining -= 1;
            if (remaining >= 0 && timerOn) {
                setTimeout(function() {
                    timer(remaining);
                }, 1000);
                return;
            } else {
                clearTimeout(timer)
                $('#timerBox').hide()
                $('#tryAgain').fadeIn();
                $('#otpForm input').after('<label id="otpNumber-error-timeout" class="error" for="otpNumber">You have exceeded Timeout to enter Aadhaar OTP. Please try again after sometime</label>')
                authFail()

            }
            if (!timerOn) {
                return;
            }
        }
        timer(30)
    }
    // otp timer end
}

function numberOnly(event) {

    if (event.shiftKey == true) {
        event.preventDefault();
    }

    if ((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105) || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 37 || event.keyCode == 39 || event.keyCode == 46 || event.keyCode == 190) {

    } else {
        event.preventDefault();
    }

}

function alphaOnly(event) {
    var key = event.keyCode;
    return ((key >= 65 && key <= 90) || key == 8);
};
