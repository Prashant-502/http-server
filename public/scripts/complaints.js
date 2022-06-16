$(function ($) {
  var $inputs = $('input[name=mobile],input[name=accNumber]');
  $inputs.on('input change', function () {
    $inputs.not(this).prop('required', !$(this).val().length);
  });
});

$(document).ready(function () {

  // normal select box
  $('.normal-select-box').on('focus blur change', function (e) {
    var $currEl = $(this);
    if ($currEl.is('select')) {
      if ($currEl.val() === $("option:first", $currEl).val()) {
        $(this).removeClass('selected');
      } else {
        $(this).addClass('selected');
      }
    }
  }).trigger('blur');
  // normal select box end

  //pancard number
  $.validator.addMethod("pannumber", function (value, element) {
    return this.optional(element) || value == value.match(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/);
  }, "Kindly provide a valid Permanent Account Number (PAN)");
  //pancard number end

  //mobile number
  $.validator.addMethod("mnumber", function (value, element) {
    return this.optional(element) || value == value.match(/^[789]\d{9}$/);
  }, "Kindly provide a valid mobile number");
  //mobile number end

  //fullname
  $.validator.addMethod("fullName", function (value, element) {
    return this.optional(element) || value == value.match(/^[a-zA-Z][a-zA-Z\s']*$/);
  }, "Kindly provide a valid full name");
  //fullname end

  //email Address
  $.validator.addMethod("emailadd", function (value, element) {
    return this.optional(element) || value == value.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/);
  }, "Kindly provide a valid email address");
  //email Address end

  //pincode
  $.validator.addMethod("pincodenumber", function (value, element) {
    return this.optional(element) || value == value.match(/^[0-9]{6}$/);
  }, "Kindly provide a valid pincode");
  //pincode end

  //otp
  $.validator.addMethod("otpnumber", function (value, element) {
    return this.optional(element) || value == value.match(/^[0-9]{6}$/);
  }, "Kindly provide a valid OTP");
  //pincode end

  //sal amount
  $.validator.addMethod("salamt", function (value, element) {
    return this.optional(element) || value == value.match(/^[0-9,.]*$/);
  }, "Kindly provide a valid Salary");
  //sal amount end

  //aadhar number
  $.validator.addMethod("aadharNumber", function (value, element) {
    return this.optional(element) || value == value.match(/^^[0-9]{12}$/);
  }, "Kindly provide a valid Aadhar Number");
  //aadhar number end

  //Only number
  $.validator.addMethod("onlyNumber", function (value, element) {
    return this.optional(element) || value == value.match(/^[0-9]*$/);
  }, "Kindly provide a valid Number");
  //Only number end

  // otp timer 
  if ($('#timer').length) {
    let timerOn = true;

    function timer(remaining) {
      var m = Math.floor(remaining / 60);
      var s = remaining % 60;
      m = m < 10 ? '0' + m : m;
      s = s < 10 ? '0' + s : s;
      document.getElementById('timer').innerHTML = m + ':' + s;
      remaining -= 1;
      if (remaining >= 0 && timerOn) {
        setTimeout(function () {
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


  //about yourself Verification
  $("#feedback-step1").validate({
    rules: {
      mobile: {
        mnumber: true
      },
      accNumber: {
        onlyNumber: true
      }
    },
    messages: {
      mobile: {
        required: "Kindly provide a valid mobile number",
        minlength: "Kindly provide a valid mobile number"
      },
      accNumber: {
        required: "Kindly provide a valid account number",
        minlength: "Kindly provide a valid account number"
      }
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass("is-invalid").removeClass("is-valid");
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).addClass("is-valid").removeClass("is-invalid");
    },
    submitHandler: function () {
      $('.sr-screen2').slideDown();
      $('html, body').animate({
        'scrollTop': $(".sr-screen2").offset().top - 250
      }, 800);
    }
  });
  //about yourself Verification end

  //OTP Verification
  $("#feedback-otp").validate({
    rules: {
      otp: {
        required: true,
        otpnumber: true
      },
    },
    messages: {
      otp: {
        required: "Kindly provide a valid OTP number",
        minlength: "Kindly provide a valid OTP number"
      },
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass("is-invalid").removeClass("is-valid");
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).addClass("is-valid").removeClass("is-invalid");
    },
    submitHandler: function () {
      $('.sform1').addClass('active');
      $('.sform2').slideDown();
      $('html, body').animate({
        'scrollTop': $(".sform2").offset().top - 150
      }, 800);
    }
  });
  //OTP Verification end

  $('.sform2 .choose-product label').click(function () {
    $('.sform2').addClass('active');
    $('.sform3').slideDown();
    $('html, body').animate({
      'scrollTop': $(".sform3").offset().top - 150
    }, 800);
  })

  $('.sform3 .btn-box a').click(function () {
    $('.sform3').addClass('active');
    $('.sform4').slideDown();
    $('html, body').animate({
      'scrollTop': $(".sform4").offset().top - 150
    }, 800);
  })

  //OTP Verification
  $("#feedback-step2").validate({
    rules: {
      concern: {
        required: true,
        fullName: true
      }
    },
    messages: {
      concern: {
        required: "Kindly provide a valid message"
      },
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass("is-invalid").removeClass("is-valid");
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).addClass("is-valid").removeClass("is-invalid");
    },
    submitHandler: function () {
      $('.sform4').addClass('active');
      $('.sform5').slideDown();
      $('html, body').animate({
        'scrollTop': $(".sform5").offset().top - 150
      }, 800);
    }
  });
  //OTP Verification end

  $("#reEscalation").validate({
    rules: {
      formOrPan: {
        required: true,
      },
      describe: {
        required: false,
      },
    },
    messages: {
      formOrPan: {
        required: "",
        minlength: ""
      },
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass("is-invalid").removeClass("is-valid");
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).addClass("is-valid").removeClass("is-invalid");
    },
    submitHandler: function () {
      //escalationSubmit
      $('#exampleModalCenter').modal('hide');
      $('#escalationSubmit').modal('show');
    }
  });

})
