$(document).ready(function () {
  $(".deals-carousel").owlCarousel({
    loop: false,
    nav: false,
    margin: 12,
    //navText: ['<span class="icon-Left" aria-label="Previous"></span>', '<span class="icon-Right" aria-label="Next"></span>'],
    responsive: {
      0: {
        items: 2,
        stagePadding: 30
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
      1200: {
        items: 7,
        mouseDrag: false,
      },
    },
  });
  $(".offers-carousel").owlCarousel({
    loop: false,
    nav: true,
    margin: 12,
    navText: ['<span class="icon-Left" aria-label="Previous"></span>', '<span class="icon-Right" aria-label="Next"></span>'],
    responsive: {
      0: {
        items: 2,
        //stagePadding: 30,
        nav: false,
        margin:8
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4
      },1200: {
        items: 5
      }
    },
  });

  //mobile number
  $.validator.addMethod(
    "mnumber",
    function (value, element) {
      return this.optional(element) || value == value.match(/^[6789]\d{9}$/);
    },
    "Kindly provide a valid mobile number"
  );
  //mobile number end

  //otp
  $.validator.addMethod("otpnumber", function (value, element) {
    return this.optional(element) || value == value.match(/^[0-9]{6}$/);
  }, "Kindly provide a valid OTP");
  //pincode end

  //Mobile Number verification
  $("#loginStep1").validate({
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
      $("#loginStep1").parent().addClass("hide").next().removeClass("hide");
    },
  });
  //Mobile Number verification End

  // otp timer
  if ($("#timer").length) {
    let timerOn = true;

    function timer(remaining) {
      var m = Math.floor(remaining / 60);
      var s = remaining % 60;
      m = m < 10 ? "0" + m : m;
      s = s < 10 ? "0" + s : s;
      document.getElementById("timer").innerHTML = m + ":" + s;
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
    timer(210);
  }
  // otp timer end

  //OTP Verification
  $("#otpVerification1").validate({
    rules: {
      otp: {
        required: true,
        otpnumber: true,
      },
    },
    messages: {
      otp: {
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
      $(".from-screen.screen-2").removeClass("active");
      $(".from-screen.screen-3").addClass("active");
      moveTab("screen-3");
    },
  });
  //OTP Verification end
});
