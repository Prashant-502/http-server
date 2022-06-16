$(document).ready(function () {
  //sal amount
  $.validator.addMethod(
    "number",
    function (value, element) {
      return this.optional(element) || value == value.match(/^[0-9]*$/);
    },
    "Kindly provide a valid Number"
  );
  //sal amount end

  $("#your-goal-form").validate({
    rules: {
      presentAge: {
        required: true,
        number: true,
      },
    },
    messages: {
      presentAge: {
        required: "Kindly provide a valid present age",
      },
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass("is-invalid").removeClass("is-valid");
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).addClass("is-valid").removeClass("is-invalid");
    },
    submitHandler: function () {
      if (
        $('#your-goal-form input[name="light"]:checked').val() == "not-sure"
      ) {
        window.location.replace("goals-step2.html");
      } else {
        window.location.replace("goals-step3.html");
      }
    },
  });
  $("#your-goal").validate({
    rules: {
      goalAmt: {
        required: true,
        number: true,
      },
      goalDate: {
        required: true,
      },
    },
    messages: {
      goalAmt: {
        required: "Kindly provide a valid present age",
      },
      goalDate: {
        required: "Kindly provide a valid Goal Completion Date",
      },
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass("is-invalid").removeClass("is-valid");
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).addClass("is-valid").removeClass("is-invalid");
    },
    submitHandler: function () {
      window.location.replace("goals-step4.html");
    },
  });

  $("#goalStep1").validate({
    rules: {
      radioQus1: {
        required: true,
      },
    },
    messages: {
      radioQus1: {
        required: "",
      },
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass("is-invalid").removeClass("is-valid");
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).addClass("is-valid").removeClass("is-invalid");
    },
    submitHandler: function () {
      $(".from-screen.screen-1").removeClass("active");
      $(".from-screen.screen-2").addClass("active");
    },
  });
  $("#goalStep2").validate({
    rules: {
      radioQus2: {
        required: true,
      },
    },
    messages: {
      radioQus2: {
        required: "",
      },
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass("is-invalid").removeClass("is-valid");
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).addClass("is-valid").removeClass("is-invalid");
    },
    submitHandler: function () {
      $(".from-screen.screen-2").removeClass("active");
      $(".from-screen.screen-3").addClass("active");
    },
  });
  $("#goalStep3").validate({
    rules: {
      radioQus3: {
        required: true,
      },
    },
    messages: {
      radioQus3: {
        required: "",
      },
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass("is-invalid").removeClass("is-valid");
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).addClass("is-valid").removeClass("is-invalid");
    },
    submitHandler: function () {
      $(".from-screen.screen-3").removeClass("active");
      $(".from-screen.screen-4").addClass("active");
    },
  });
  $("#goalStep4").validate({
    rules: {
      radioQus4: {
        required: true,
      },
    },
    messages: {
      radioQus4: {
        required: "",
      },
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass("is-invalid").removeClass("is-valid");
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).addClass("is-valid").removeClass("is-invalid");
    },
    submitHandler: function () {
      window.location.replace("goals-step3.html");
    },
  });

  $(".goal-question .btn-red1.op1").on("click", function () {
    $(this)
      .parents(".from-screen")
      .removeClass("active")
      .prev()
      .addClass("active");
  });

  $("#reduce-ms").on("click", function () {
    //console.log(11111);
    $(this).parents(".first-crore").addClass("hide").next().removeClass("hide");
  });

  $("#goalDate")
    .datepicker({
      dateFormat: "M yy",
      changeMonth: true,
      changeYear: true,
      minDate: 0,
      //yearRange: "-50:-0.5",
    })
});
