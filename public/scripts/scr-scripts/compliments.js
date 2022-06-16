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

  //app number
  $.validator.addMethod("applicationNumber", function (value, element) {
    return this.optional(element) || value == value.match(/^[0-9]*$/);
  }, "Kindly provide a valid Application Number");
  //app number end

  //aadhar number
  $.validator.addMethod("aadharNumber", function (value, element) {
    return this.optional(element) || value == value.match(/^^[0-9]{12}$/);
  }, "Kindly provide a valid Aadhar Number");
  //aadhar number end

  //Mobile Number verification
  $("#compliments").validate({
    rules: {
      fullName: {
        required: true,
        fullName: true
      },
      mobile: {
        required: true,
        mnumber: true
      },
      tnc: {
        required: true,
      },
      msgTitle: {
        required: true,
        fullName: true
      },
      msgBody: {
        required: true,
        fullName: true
      },
    },
    messages: {
      fullName: {
        required: "Kindly provide a valid Full Name",
        minlength: "Kindly provide a valid Full Name"
      },
      mobile: {
        required: "Kindly provide a valid mobile number",
        minlength: "Kindly provide a valid mobile number"
      },
      extCust: {
        required: ""
      },
      msgTitle: {
        required: "Kindly provide a valid Message Title"
      },
      msgBody: {
        required: "Kindly provide a valid Message"
      }
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass("is-invalid").removeClass("is-valid");
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).addClass("is-valid").removeClass("is-invalid");
    },
    submitHandler: function () {
      $('.comp-form1').hide();
      $('.comp-form2').show().find('input').focus();
    }
  });
  //Mobile Number verification End


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


  //OTP Verification
  $("#otpVerification1").validate({
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

    }
  });
  //OTP Verification end
})
