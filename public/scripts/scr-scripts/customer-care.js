$(document).ready(function () {

  $('.your-query .trgr:eq(0)').removeClass('act').next().hide();
  $('#tell-query select').change(function () {
    $('.query-result').slideDown();
  })
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

  $("#lookg-for").validate({
    rules: {
      fullName: {
        required: true,
        fullName: true
      },
      mobile: {
        required: true,
        mnumber: true
      },
      captch: {
        required: true
      },
      tnc: {
        required: true
      }
    },
    messages: {
      fullName: {
        required: "Kindly provide a valid name",
        minlength: "Kindly provide a valid name"
      },
      mobile: {
        required: "Kindly provide a valid mobile number",
        minlength: "Kindly provide a valid mobile number"
      },
      captch: {
        required: "Kindly provide a valid mobile number"
      },
      tnc: {
        required: ""
      }
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

});
