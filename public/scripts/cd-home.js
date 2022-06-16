$(document).ready(function () {
  //mobile number
  $.validator.addMethod(
    "mnumber",
    function (value, element) {
      return this.optional(element) || value == value.match(/^[6789]\d{9}$/);
    },
    "Kindly provide a valid mobile number"
  );
  //mobile number end

  //Mobile Number verification
  $("#carStep1").validate({
    rules: {
      mobile: {
        required: true,
        mnumber: true,
      },
      tnc: {
        required: true,
      },
    },
    messages: {
      mobile: {
        required: "Kindly provide a valid mobile number",
        minlength: "Kindly provide a valid mobile number",
      },
      tnc: {
        required: "",
        minlength: "",
      },
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass("is-invalid").removeClass("is-valid");
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).addClass("is-valid").removeClass("is-invalid");
    },
    submitHandler: function () {
      window.location.replace("cd-loan-journey.html");
    },
  });
  //Mobile Number verification End
});
