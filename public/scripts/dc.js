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
  //pincode end

  //sal amount
  $.validator.addMethod(
    "salamt",
    function (value, element) {
      return this.optional(element) || value == value.match(/^[0-9,.]*$/);
    },
    "Kindly provide a valid Salary"
  );
  //sal amount end

  //app number
  $.validator.addMethod(
    "applicationNumber",
    function (value, element) {
      return this.optional(element) || value == value.match(/^[0-9]*$/);
    },
    "Kindly provide a valid Application Number"
  );
  //app number end

  //aadhar number
  $.validator.addMethod(
    "aadharNumber",
    function (value, element) {
      return this.optional(element) || value == value.match(/^^[0-9]{12}$/);
    },
    "Kindly provide a valid Aadhar Number"
  );
  //aadhar number end

  //Mobile Number verification
  $("#dcStep1").validate({
    rules: {
      rg: {
        required: true,
      },
    },
    messages: {
      rg: {
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
      $(".dc-journey.step1").removeClass("active");
      $(".dc-journey.step2").addClass("active");
    },
  });
  //Mobile Number verification End

  $("#r1,#r2,#r3").on("click", function () {
    $(".bottom-button button").removeClass("disabled");
    $(".bottom-button button").prop("disabled", false);
  });
});

$("#dcStep2").validate({
  rules: {
    yname: {
      required: true,
      fullName: true,
    },
    mobile: {
      required: true,
      mnumber: true,
    },
    add1: {
      required: true,
    },
    msg: {
      required: true,
    },
  },
  messages: {
    yname: {
      required: "Kindly provide a valid Name",
      minlength: "Kindly provide a valid Name",
    },
    mobile: {
      required: "Kindly provide a valid whatsapp number",
      minlength: "Kindly provide a valid whatsapp number",
    },
    add1: {
      required: "Kindly provide a valid office address",
      minlength: "Kindly provide a valid office address",
    },
    msg: {
      required: "Kindly provide a personalised message",
      minlength: "Kindly provide a personalised message",
    },
  },
  highlight: function (element, errorClass, validClass) {
    $(element).addClass("is-invalid").removeClass("is-valid");
  },
  unhighlight: function (element, errorClass, validClass) {
    $(element).addClass("is-valid").removeClass("is-invalid");
  },
  submitHandler: function () {
    $(".dc-journey.step2").removeClass("active");
    $(".dc-journey.step3").addClass("active");
  },
});
//Mobile Number verification End

$("#r1,#r2,#r3").on("click", function () {
  $(".bottom-button button").removeClass("disabled");
  $(".bottom-button button").prop("disabled", false);
});

$(".step1 .btn-red1").on("click", function () {
  $(".dc-journey.step1").removeClass("active");
  $(".dc-journey.preview").addClass("active");
});

$(".step1 .btn-red").on("click", function () {
  $(".dc-journey.step1").removeClass("active");
  $(".dc-journey.step2").addClass("active");
});

$(".back-bx a").not('.op1').on("click", function () {
  $(this).parents('.dc-journey').removeClass("active").prev().addClass("active");
});

$(".preview .back-bx a").on("click", function () {
  $(".dc-journey.preview").removeClass("active");
  $(".dc-journey.step1").addClass("active");
});

$(".preview .btn-box a").on("click", function () {
  $(".dc-journey.preview").removeClass("active");
  $(".dc-journey.step2").addClass("active");
});

$(".step3 .edit").on("click", function () {
  $(".dc-journey.step3").removeClass("active");
  $(".dc-journey.step2").addClass("active");
});

function charcountupdate(str) {
  var lng = 40 - str.length;
  document.getElementById("charcount").innerHTML = "Characters left :" + lng;
}

function charcountupdate1(str) {
  var lng = 40 - str.length;
  document.getElementById("charcount1").innerHTML = "Characters left :" + lng;
}

// const shareBtn = document.querySelector('.share-btn');

// shareBtn.addEventListener('click', () => {
//   //alert(navigator.share);
//   if (navigator.share) {
//     navigator.share({
//       title: 'My awesome post!',
//       text: 'This post may or may not contain the answer to the universe',
//       url: window.location.href
//     }).then(() => {
//       console.log('Thanks for sharing!');
//     })
//     .catch(err => {
//       console.log(`Couldn't share because of`, err.message);
//     });
//   } else {
//     console.log('web share not supported');
//   }
// });