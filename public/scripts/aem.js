$(document).ready(function () {
  //pancard number
  $.validator.addMethod(
    "pannumber",
    function (value, element) {
      return (
        this.optional(element) ||
        value == value.match(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/)
      );
    },
    "Kindly provide a valid Permanent Account Number (PAN)"
  );
  //pancard number end

  //mobile number
  $.validator.addMethod(
    "mnumber",
    function (value, element) {
      return this.optional(element) || value == value.match(/^[789]\d{9}$/);
    },
    "Kindly provide a valid mobile number"
  );
  //mobile number end

  //fullname
  $.validator.addMethod(
    "fullName",
    function (value, element) {
      return (
        this.optional(element) || value == value.match(/^[a-zA-Z][a-zA-Z\s']*$/)
      );
    },
    "Kindly provide a valid full name"
  );
  //fullname end

  //email Address
  $.validator.addMethod(
    "emailadd",
    function (value, element) {
      return (
        this.optional(element) ||
        value == value.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
      );
    },
    "Kindly provide a valid email address"
  );
  //email Address end

  //pincode
  $.validator.addMethod(
    "pincodenumber",
    function (value, element) {
      return this.optional(element) || value == value.match(/^[0-9]{6}$/);
    },
    "Kindly provide a valid pincode"
  );
  //pincode end

  //otp
  $.validator.addMethod(
    "otpnumber",
    function (value, element) {
      return this.optional(element) || value == value.match(/^[0-9]{6}$/);
    },
    "Kindly provide a valid OTP"
  );
  //otp end

  //Last 4 Digits of your Credit card
  $.validator.addMethod(
    "cardL4d",
    function (value, element) {
      return this.optional(element) || value == value.match(/^[0-9]{4}$/);
    },
    "Kindly provide a valid Credit card no"
  );
  //pincode end

  $("#aemStep1").validate({
    rules: {
      mobile: {
        required: true,
        mnumber: true,
      },
      cardNo: {
        required: true,
        cardL4d: true,
      },
      tnc: {
        required: true,
      },
      otp: {
        required: true,
        otpnumber: true,
      },
    },
    messages: {
      mobile: {
        required: "Kindly provide a valid Mobile Number",
      },
      cardNo: {
        required: "Kindly provide a valid Credit card no",
      },
      tnc: {
        required: "",
      },
      otp: {
        required: "Kindly provide a valid OTP",
      },
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass("is-invalid").removeClass("is-valid");
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).addClass("is-valid").removeClass("is-invalid");
    },
    submitHandler: function () {
      if ($(".otp").is(":visible")) {
        $(".aem-journey.step1").removeClass("active");
        $(".aem-journey.step2").addClass("active");
        $("html, body").stop().animate({scrollTop: 0,},200);
      } else {
        $(".step1 .otp").show().next().addClass("act");
      }
    },
  });

  $("#aemStep2").validate({
    rules: {
      transGroup: {
        required: true,
      },
    },
    messages: {
      transGroup: {
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
        $(".aem-journey.step2").removeClass("active");
        $(".aem-journey.step3").addClass("active");
        $("html, body").stop().animate({scrollTop: 0,},200);
    },
  });

  $("#aemStep3").validate({
    rules: {
      tenure: {
        required: true,
      },
      tn1: {
        required: true,
      },
      otp1: {
        required: true,
        otpnumber: true,
      },
    },
    messages: {
      tenure: {
        required: "Kindly provide a valid Tenure",
      },
      tnc1: {
        required: "",
      },
      otp1: {
        required: "Kindly provide a valid OTP",
      },
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass("is-invalid").removeClass("is-valid");
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).addClass("is-valid").removeClass("is-invalid");
    },
    submitHandler: function () {
      if ($(".otp").is(":visible")) {
        $(".aem-journey.step3").removeClass("active");
        $(".aem-journey.step4").addClass("active");
        $("html, body").stop().animate({scrollTop: 0,},200);
      } else {
        $(".step3 .otp").show().next().addClass("act");
      }
    },
  });

  $("#aemStep4").validate({
    rules: {
      emiGroup: {
        required: true,
      },
      tnc2: {
        required: true,
      },
    },
    messages: {
      emiGroup: {
        required: "",
        minlength: "",
      },
      tnc2: {
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
        $(".aem-journey.step4").removeClass("active");
        $(".aem-journey.step5").addClass("active");
        $("html, body").stop().animate({scrollTop: 0,},200);
    },
  });

  $(".back-bx a").on("click", function () {
    $(this).parents('.aem-journey').removeClass("active").prev().addClass("active");
  });

  $("#allTrans").click(function () {
    $("#aemStep2 input:checkbox").not(this).prop("checked", this.checked);
  });
});

// otp timer 
if ($('#timer3').length) {
    let timerOn = true;

    function timer(remaining) {
      var m = Math.floor(remaining / 60);
      var s = remaining % 60;
      m = m < 10 ? '0' + m : m;
      s = s < 10 ? '0' + s : s;
      document.getElementById('timer3').innerHTML = m + ':' + s;
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
