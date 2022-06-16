function charcountupdate(str) {
  var lng = 200 - str.length;
  document.getElementById("charcount").innerHTML = "Characters left :" + lng;
}

$(document).ready(function () {
  //landmark
  $.validator.addMethod(
    "landmark",
    function (value, element) {
      return (
        this.optional(element) || value == value.match(/[a-zA-Z0-9 ,.\-?/]*$/)
      );
    },
    "Only -/.,? allowed"
  );
  //landmark end

  $("#feedbakFormValid").validate({
    rules: {
      describe: {
        //required: true,
        landmark: true,
      },
    },
    messages: {
      describe: {
        required: "Only -/.,? allowed",
      },
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass("is-invalid").removeClass("is-valid");
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).addClass("is-valid").removeClass("is-invalid");
    },
    submitHandler: function (form) {
      $('#newPopup').modal('toggle');
    }
  });
});
