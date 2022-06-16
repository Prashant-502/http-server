
$(document).ready(function () {

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
  $("#valuefyStep1").validate({
    rules: {
      tnc: {
        required: true,
      },
    },
    messages: {
      tnc: {
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
      $('.valuefy.step1').removeClass('active');
      $('.valuefy.step2').addClass('active');
    }
  });
  //Mobile Number verification End

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
      $('.valuefy.step2').removeClass('active');
      $('.valuefy.step3').addClass('active');
    }
  });

  $('#iagree').on('click',function(){
    console.log($('#tnc'))
    $('#tnc').prop( "checked", true );
  })

});
