$(document).ready(function () {
  //service request
  $('.sub-trgr').click(function(){
    $(this).parents('.looking-for').hide();
    $(this).parents('.looking-for').next().slideDown(400, function () {
      // scroll top When you expand other accordions 
      $('html, body').animate({
        scrollTop: $(this).offset().top - 300
      }, 700);
    });
    return false
  })
  $('.back-btn').click(function(){
    $(this).parents('.looking-for').hide();
    $(this).parents('.looking-for').prev().slideDown(400, function () {
      // scroll top When you expand other accordions 
      $('html, body').animate({
        scrollTop: $(this).offset().top - 300
      }, 700);
    });
    return false
  })


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

  //tracking number
  $.validator.addMethod("trackingNumber", function (value, element) {
    return this.optional(element) || value == value.match(/^[0-9]*$/);
  }, "Kindly provide a valid tracking Number");
  //tracking number end

  //aadhar number
  $.validator.addMethod("aadharNumber", function (value, element) {
    return this.optional(element) || value == value.match(/^^[0-9]{12}$/);
  }, "Kindly provide a valid Aadhar Number");
  //aadhar number end




  //Identification
  $("#identification").validate({
    rules: {
      mobile: {
        required: true,
        mnumber:true
      },
      emailid: {
        required: false,
        emailadd: true,
      },
      accNumber: {
        required: false,
        applicationNumber: true,
      },
      otp: {
        required: true,
        otpnumber:true,
      },
    },
    messages: {
      mobile: {
        required: "Kindly provide a valid registered mobile number",
        minlength: "Kindly provide a valid registered mobile number"
      },
      emailid: {
        required: "Kindly provide a valid registered e-mail Address",
        minlength: "Kindly provide a valid registered e-mail Address"
      },
      accNumber: {
        required: "Kindly provide a valid Account Number",
        minlength: "Kindly provide a valid Account Number"
      },
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
      if ($('.confirm-box').is(":visible")) {
        $('.sr-screen1').addClass('hide');
        $('.sr-screen2').removeClass('hide');
        $('html, body').animate({
          'scrollTop': 0
        }, 800);
      } else {
        $('.hide-verify').hide();
        $('.confirm-box').removeClass('hide');
      }
    }
  });
  //Identification

  //Home Loan Tax Statement
  $("#homeLoanTax").validate({
    rules: {
      mobile: {
        required: true,
        mnumber:true
      },
      emailid: {
        required: true,
        emailadd: true,
      },
      accNumber: {
        required: false,
        applicationNumber: true,
      },
      otp: {
        required: true,
        otpnumber:true,
      },
    },
    messages: {
      mobile: {
        required: "Kindly provide a valid registered mobile number",
        minlength: "Kindly provide a valid registered mobile number"
      },
      emailid: {
        required: "Kindly provide a valid registered e-mail Address",
        minlength: "Kindly provide a valid registered e-mail Address"
      },
      accNumber: {
        required: "Kindly provide a valid Account Number",
        minlength: "Kindly provide a valid Account Number"
      },
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
      if ($('.confirm-box').is(":visible")) {
        $('#loan-account').modal('show');
      } else {
        $('.hide-verify').hide();
        $('.confirm-box').removeClass('hide');
      }
    }
  });
  //Home Loan Tax Statement end

  //Home Loan Tax Statement
  $("#reportUpi").validate({
    rules: {
      transaction: {
        required: true,
      },
      wallet: {
        required: true,
      },
      describe: {
        required: false,
      },
      yourname: {
        required: true,
        fullName:true
      },
      mobile: {
        required: true,
        mnumber:true
      },
      accNumber: {
        required: false,
        applicationNumber: true,
      },
      otp: {
        required: true,
        otpnumber:true,
      },
    },
    messages: {
      transaction: {
        required: "Kindly select specific UPI transaction issue",
        minlength: "Kindly select specific UPI transaction issue"
      },
      wallet: {
        required: "Kindly select Wallet you were trying to add funds",
        minlength: "Kindly select Wallet you were trying to add funds"
      },
      
      mobile: {
        required: "Kindly provide a Describe your issue",
        minlength: "Kindly provide a Describe your issue"
      },
      yourname: {
        required: "Kindly provide a valid name",
        minlength: "Kindly provide a valid name"
      },
      mobile: {
        required: "Kindly provide a valid registered mobile number",
        minlength: "Kindly provide a valid registered mobile number"
      },
      accNumber: {
        required: "Kindly provide a valid Account Number",
        minlength: "Kindly provide a valid Account Number"
      },
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
      if ($('.confirm-box').is(":visible")) {
        //$('#loan-account').modal('show');
      } else {
        $('.hide-verify').hide();
        $('.confirm-box').removeClass('hide');
      }
    }
  });
  //Home Loan Tax Statement end


  //Track Request
  $("#track1").validate({
    rules: {
      accNumber: {
        required: true,
        trackingNumber: true,
      },
    },
    messages: {
      
      accNumber: {
        required: "Kindly provide a valid Tracking ID",
        minlength: "Kindly provide a valid Tracking ID"
      },
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass("is-invalid").removeClass("is-valid");
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).addClass("is-valid").removeClass("is-invalid");
    },
    submitHandler: function () {
      $('#sorryFind').modal('show');
    }
  });
  //Track Request end

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




});

