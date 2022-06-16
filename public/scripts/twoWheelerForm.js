$(document).ready(function () {
  
 //firstname
 $.validator.addMethod("sosid", function (value, element) {
  return this.optional(element) || value == value.match(/^[a-zA-Z0-9][a-zA-Z0-9/^\S*]*$/);
}, "Kindly provide a valid Your social media ID");
//firstname end

 
  //firstname
 $.validator.addMethod("firstName", function (value, element) {
  return this.optional(element) || value == value.match(/^[a-zA-Z][a-zA-Z\s']*$/);
}, "Kindly provide a valid First Name");
//firstname end

//lasttname
$.validator.addMethod("lastName", function (value, element) {
  return this.optional(element) || value == value.match(/^[a-zA-Z][a-zA-Z\s']*$/);
}, "Kindly provide a valid Last Name");
//lasttname end

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


  //otp
  $.validator.addMethod("otpnumber", function (value, element) {
    return this.optional(element) || value == value.match(/^[0-9]{6}$/);
  }, "Kindly provide a valid OTP");
  //pincode end

  //pincode
  $.validator.addMethod("pincodenumber", function (value, element) {
    return this.optional(element) || value == value.match(/^[0-9]{6}$/);
  }, "Kindly provide a valid pincode");
  //pincode end


  $('#address1, #address2').click(function() {
    $('.address-box input,.address-box select').prop("disabled",true);
  })

  $('#address3').click(function() {
    $('.address-box input,.address-box select').prop("disabled",false);
  })

  


  //twoWheeler
  $("#twoWheeler").validate({
    rules: {
      mobile: {
        required: true,
        mnumber:true,
      },
      dob1: {
        required: true,
      },
      
      otp: {
        required: true,
        otpnumber:true,
      },
      captcha: {
        required: true,
      },
    },
    messages: {
      
      mobile: {
        required: "Kindly provide a valid mobile number",
        minlength: "Kindly provide a valid mobile number"
      },
      dob1: {
        required: "Kindly provide a valid date of birth",
        minlength: "Kindly provide a valid date of birth"
      },
      otp: {
        required: "Kindly provide a valid OTP number",
        minlength: "Kindly provide a valid OTP number"
      },
      captcha: {
        required: "Kindly provide a valid a Captcha",
        minlength: "Kindly provide a valid a Captcha"
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
        //$('.confirm-box').addClass('hide');
      } else {
        $('.hide-verify').hide();
        $('.confirm-box').removeClass('hide');
      }
    }
  });

  $("#twoWheeler2").validate({
    rules: {
      loanNumber: {
        required: true,
      },
      add1: {
        required: true,
      },
      add2: {
        required: true,
      },
      pincode: {
        required: true,
        pincodenumber:true,
      },
      city: {
        required: true,
      },
      state: {
        required: true,
      },
    },
    messages: {
      loanNumber: {
        required: "Kindly select valid Loan Number",
        minlength: "Kindly select valid Loan Number"
      },
      add1: {
        required: "Kindly provide a valid address Line 1",
        minlength: "Kindly provide a valid address Line 1"
      },
      add2: {
        required: "Kindly provide a valid address Line 2",
        minlength: "Kindly provide a valid address Line 2"
      },
      pincode: {
        required: "Kindly provide a valid pincode",
        minlength: "Kindly provide a valid pincode"
      },
      city: {
        required: "Kindly provide a valid a city",
        minlength: "Kindly provide a valid a city"
      },
      state: {
        required: "Kindly provide a valid a state",
        minlength: "Kindly provide a valid a state"
      },
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass("is-invalid").removeClass("is-valid");
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).addClass("is-valid").removeClass("is-invalid");
    },
    submitHandler: function () {
      $('#confirmModal').modal('show')
    }
  });
  //twoWheeler end
  $('.no-objection .submit-no-objection').click(function(){
    $('.successful').removeClass('hide');
    $('.no-objection').addClass('hide');
  });
  //$('#ohnomodal').modal('show');
});