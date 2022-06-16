$(document).ready(function () {
  $(".cancelLoanBtn").click(function () {
    $(this).parents(".CTR").addClass("hide").next().show();
  });

  //otp
  $.validator.addMethod(
    "otpnumber",
    function (value, element) {
      return this.optional(element) || value == value.match(/^[0-9]{6}$/);
    },
    "Kindly provide a valid OTP"
  );
  //pincode end

  $("#otpVerify1").validate({
    rules: {
      otpm: {
        required: true,
        otpnumber: true,
      },
    },
    messages: {
      otpm: {
        required: "Kindly provide a valid OTP number",
        minlength: "Kindly provide a valid OTP number",
      },
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass("is-invalid").removeClass("is-valid");
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).addClass("is-valid").removeClass("is-invalid");
    },
    submitHandler: function () {
      //console.log(1111111);
      $('#otpVerify1').parents(".CTR").hide().next().show();
    },
  });
  //OTP Verification end
});
