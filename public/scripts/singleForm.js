$(document).ready(function () {
  //firstname
  $.validator.addMethod(
    "sosid",
    function (value, element) {
      return (
        this.optional(element) ||
        value == value.match(/^[a-zA-Z0-9][a-zA-Z0-9/^\S*]*$/)
      );
    },
    "Kindly provide a valid Your social media ID"
  );
  //firstname end

  //firstname
  $.validator.addMethod(
    "firstName",
    function (value, element) {
      return (
        this.optional(element) || value == value.match(/^[a-zA-Z][a-zA-Z\s']*$/)
      );
    },
    "Kindly provide a valid First Name"
  );
  //firstname end

  //lasttname
  $.validator.addMethod(
    "lastName",
    function (value, element) {
      return (
        this.optional(element) || value == value.match(/^[a-zA-Z][a-zA-Z\s']*$/)
      );
    },
    "Kindly provide a valid Last Name"
  );
  //lasttname end

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

  //otp
  $.validator.addMethod(
    "otpnumber",
    function (value, element) {
      return this.optional(element) || value == value.match(/^[0-9]{6}$/);
    },
    "Kindly provide a valid OTP"
  );
  //pincode end

  $("#existing1").click(function () {
    $(".nornumber").addClass("hide");
    $(".regnumber").removeClass("hide");
  });

  $("#existing2").click(function () {
    $(".nornumber").removeClass("hide");
    $(".regnumber").addClass("hide");
  });

  //Home Loan Tax Statement
  $("#singleOtp").validate({
    rules: {
      // fname: {
      //   required: true,
      //   firstName: true,
      // },
      // lname: {
      //   required: true,
      //   lastName: true,
      // },
      mobile: {
        required: true,
        mnumber: true,
      },
      mobile1: {
        required: true,
        mnumber: true,
      },
      // emailid: {
      //   required: true,
      //   emailadd: true,
      // },
      // proType: {
      //   required: false,
      // },
      // social: {
      //   required: false,
      // },
      // describe: {
      //   required: true,
      // },
      otp: {
        required: true,
        otpnumber: true,
      },
      // captcha: {
      //   required: true,
      // },
    },
    messages: {
      fname: {
        required: "Kindly provide a valid first name",
        minlength: "Kindly provide a valid first name",
      },
      lname: {
        required: "Kindly provide a valid last name",
        minlength: "Kindly provide a valid last name",
      },
      mobile: {
        required: "Kindly provide a valid mobile number",
        minlength: "Kindly provide a valid mobile number",
      },
      mobile1: {
        required: "Kindly provide a valid mobile number",
        minlength: "Kindly provide a valid mobile number",
      },
      emailid: {
        required: "Kindly provide a valid email address ",
        minlength: "Kindly provide a valid email address",
      },
      social: {
        required: "Kindly provide a valid Your social media ID ",
        minlength: "Kindly provide a valid Your social media ID",
      },
      describe: {
        required: "Kindly provide a valid description ",
        minlength: "Kindly provide a valid description",
      },
      otp: {
        required: "Kindly provide a valid OTP number",
        minlength: "Kindly provide a valid OTP number",
      },
      captcha: {
        required: "Kindly provide a valid a Captcha",
        minlength: "Kindly provide a valid a Captcha",
      },
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass("is-invalid").removeClass("is-valid");
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).addClass("is-valid").removeClass("is-invalid");
    },
    submitHandler: function () {
      if ($(".confirm-box").is(":visible")) {
        $(".on-disabled").prop("disabled", true);
        $(".confirm-box").addClass("hide");
        $(".single-form1").removeClass("hide");
        //$('#loan-account').modal('show');
      } else {
        $(".hide-verify").hide();
        $(".confirm-box").removeClass("hide");
      }
    },
  });
  $("#singleOtp2").validate({
    rules: {
      fname: {
        required: true,
        firstName: true,
      },
      lname: {
        required: true,
        lastName: true,
      },
      mobile: {
        required: true,
        mnumber: true,
      },
      mobile1: {
        required: true,
        mnumber: true,
      },
      emailid: {
        required: true,
        emailadd: true,
      },
      proType: {
        required: true,
      },
      social: {
        required: true,
        sosid: false,
      },
      describe: {
        required: false,
      },
      otp: {
        required: true,
        otpnumber: true,
      },
      captcha: {
        required: true,
      },
    },
    messages: {
      fname: {
        required: "Kindly provide a valid first name",
        minlength: "Kindly provide a valid first name",
      },
      lname: {
        required: "Kindly provide a valid last name",
        minlength: "Kindly provide a valid last name",
      },
      mobile: {
        required: "Kindly provide a valid mobile number",
        minlength: "Kindly provide a valid mobile number",
      },
      mobile1: {
        required: "Kindly provide a valid mobile number",
        minlength: "Kindly provide a valid mobile number",
      },
      emailid: {
        required: "Kindly provide a valid email address ",
        minlength: "Kindly provide a valid email address",
      },
      proType: {
        required:
          "Kindly provide a valid product or service you’d like to talk to us about",
        minlength:
          "Kindly provide a valid product or service you’d like to talk to us about",
      },
      social: {
        required: "Kindly provide a valid Your social media ID ",
        minlength: "Kindly provide a valid Your social media ID",
      },
      describe: {
        required: "Kindly provide a valid description ",
        minlength: "Kindly provide a valid description",
      },
      otp: {
        required: "Kindly provide a valid OTP number",
        minlength: "Kindly provide a valid OTP number",
      },
      captcha: {
        required: "Kindly provide a valid a Captcha",
        minlength: "Kindly provide a valid a Captcha",
      },
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass("is-invalid").removeClass("is-valid");
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).addClass("is-valid").removeClass("is-invalid");
    },
    submitHandler: function () {},
  });
  //Home Loan Tax Statement end
});
