$(document).ready(function () {
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

  //sal amount
  $.validator.addMethod("amtNum", function (value, element) {
    return this.optional(element) || value == value.match(/^[0-9,.]*$/);
  }, "Please enter numbers only");
  //sal amount end

  $("#macro-loan").validate({
    rules: {
      fullName: {
        required: true,
        fullName: true
      },
      pincode:{
        required: true,
        pincodenumber: true
      },
      loanAmt:{
        required: true,
        amtNum: true
      },
      emailid:{
        emailadd:true
      },
      mobile: {
        required: true,
        mnumber: true
      },
      otp: { 
        required: true,
        otpnumber: true
      },
      busiType:{
        required: true
      }
    },
    messages: {
      fullName: {
        required: "Kindly provide a valid Full Name"
      },
      pincode: {
        required: "Kindly provide a valid Pincode"
      },
      loanAmt: {
        required: "Please enter numbers only"
      },
      mobile: {
        required: "Kindly provide a valid Mobile Number"
      },
      otp: {
        required: "Kindly provide a valid OTP"
      },
      otp: {
        required: "Kindly provide a valid Type of Business"
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