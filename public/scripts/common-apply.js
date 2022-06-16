$(document).ready(function () {
  //pancard number
  $.validator.addMethod("pannumber", function (value, element) {
    return this.optional(element) || value == value.match(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/);
  }, "Kindly provide a valid Permanent Account Number (PAN)");
  //pancard number end

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


  $("#common-nri").validate({
    rules: {
      fullName: {
        required: true,
        fullName: true
      },
      cotOfRes: {
        required: true
      },
      mobile: {
        required: true,
        mnumber: true
      },
      emailid: {
        required: true,
        emailadd: true
      },
      captcha: {
        required: true
      },
    },
    messages: {
      fullName: {
        required: "Kindly provide a valid Full Name"
      },
      cotOfRes: {
        required: "Kindly provide a valid Country Of Residence"
      },
      mobile: {
        required: "Kindly provide a valid Mobile Number"
      },
      emailid: {
        required: "Kindly provide a valid E-mail ID"
      },
      captcha: {
        required: "Kindly provide a valid Captcha"
      }
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass("is-invalid").removeClass("is-valid");
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).addClass("is-valid").removeClass("is-invalid");
    },
    submitHandler: function () {
      $('.sa-banner').hide().next().show();
      $('html, body').stop().animate({
        scrollTop: 0
      }, 200);
    }
  });

  $("#common-currentAccout").validate({
    rules: {
      city: {
        required: true
      },
      fullName: {
        required: true,
        fullName: true
      },
      mobile: {
        required: true,
        mnumber: true
      },
      emailid: {
        required: true,
        emailadd: true
      },
      otp: {
        required: true,
        otpnumber: true
      },
    },
    messages: {
      fullName: {
        required: "Kindly provide a valid Full Name"
      },
      cotOfRes: {
        required: "Kindly provide a valid Country Of Residence"
      },
      mobile: {
        required: "Kindly provide a valid Mobile Number"
      },
      emailid: {
        required: "Kindly provide a valid E-mail ID"
      },
      otp: {
        required: "Kindly provide a valid OTP"
      }
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass("is-invalid").removeClass("is-valid");
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).addClass("is-valid").removeClass("is-invalid");
    },
    submitHandler: function () {
      if ($('.otp').is(":visible")) {
        $('.sa-banner').hide().next().show();
        $('html, body').stop().animate({
          scrollTop: 0
        }, 200);
      } else {
        $('.otp').show().parent().addClass('act');
      }
    }
  });

  $("#common-apply").validate({
    rules: {
      product: {
        required: true
      },
      city: {
        required: true
      },
      fullName: {
        required: true,
        fullName: true
      },
      mobile: {
        required: true,
        mnumber: true
      },
      emailid: {
        required: true,
        emailadd: true
      },
      otp: {
        required: true,
        otpnumber: true
      },
    },
    messages: {
      product: {
        required: "Kindly provide a valid Product"
      },
      fullName: {
        required: "Kindly provide a valid Full Name"
      },
      cotOfRes: {
        required: "Kindly provide a valid Country Of Residence"
      },
      mobile: {
        required: "Kindly provide a valid Mobile Number"
      },
      emailid: {
        required: "Kindly provide a valid E-mail ID"
      },
      otp: {
        required: "Kindly provide a valid OTP"
      }
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass("is-invalid").removeClass("is-valid");
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).addClass("is-valid").removeClass("is-invalid");
    },
    submitHandler: function () {
      if ($('.otp').is(":visible")) {
        $('.sa-banner').hide().next().show();
        $('html, body').stop().animate({
          scrollTop: 0
        }, 200);
      } else {
        $('.otp').show().parent().addClass('act');
      }
    }
  });

})

$(function () {
  var availableTags = [
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
  $("#cotOfRes").autocomplete({
    source: availableTags
  });
});
