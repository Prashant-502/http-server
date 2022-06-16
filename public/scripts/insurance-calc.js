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
      return this.optional(element) || value == value.match(/^[6789]\d{9}$/);
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
    "Kindly provide a valid Number"
  );
  //sal amount end

  $("#insurance-step1").validate({
    rules: {
      dob12: {
        required: true,
        salamt: true,
      },
      coverFor: {
        required: true,
      },
      radioChild: {
        required: true,
      },
      icity: {
        required: true,
      },
      anIncome: {
        required: true,
        salamt: true,
      },
    },
    messages: {
      dob: {
        required: "Kindly provide a valid Date of Birth",
      },
      coverFor: {
        required: "Kindly provide a valid Cover for",
      },
      radioChild: {
        required: "",
      },
      icity: {
        required: "Kindly provide a valid City",
      },
      anIncome: {
        required: "Kindly provide a valid Annual Household Income",
      },
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass("is-invalid").removeClass("is-valid");
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).addClass("is-valid").removeClass("is-invalid");
    },
    submitHandler: function () {
      $("#insurance-step1").parent().hide().next().show();
      $("html, body").stop().animate(
        {
          scrollTop: 0,
        },
        200
      );
    },
  });

  $("#insurance-step2").validate({
    rules: {
      ftSel: {
        required: true,
      },
      inSel: {
        required: true,
      },
      wgt: {
        required: true,
        salamt: true,
      },
      radiobp: {
        required: true,
      },
      radiotob: {
        required: true,
      },
      radioalco: {
        required: true,
      },
      radioexe: {
        required: true,
      },
    },
    messages: {
      ftSel: {
        required: "Kindly provide a valid Number",
      },
      inSel: {
        required: "Kindly provide a valid Number",
      },
      wgt: {
        required: "Kindly provide a valid Weight",
      },
      radiobp: {
        required: "",
      },
      radiotob: {
        required: "",
      },
      radioalco: {
        required: "",
      },
      radioexe: {
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
      $("#healthModal").modal("show");
    },
  });

  $("#coverFor").on("change", function () {
    //console.log( this.value );
    if (this.value == "children") {
      $(this).parents("li").next().slideDown();
    } else {
      $(this).parents("li").next().slideUp();
    }
  });

  $("#kidNos").on("change", function () {
    //console.log( this.value );
    if (this.value == "1") {
      $(this).parents("li").next().slideDown();
      $(this).parents("li").next().next().slideUp();
    } else if (this.value == "2") {
      $(this).parents("li").next().slideDown();
      $(this).parents("li").next().next().slideDown();
    } else {
      $(this).parents("li").next().slideUp();
      $(this).parents("li").next().next().slideUp();
    }
  });

  $("#life-insurance-step1").validate({
    rules: {
      dobMy: {
        required: true,
      },
      anIncome: {
        required: true,
        salamt: true,
      },
      kidNos: {
        required: true,
      },
      child1: {
        required: true,
        salamt: true,
      },
      child2: {
        required: true,
        salamt: true,
      },
    },
    messages: {
      dobMy: {
        required: "Kindly provide a valid Date of Birth",
      },
      anIncome:{
        required: "Kindly provide a valid Current Monthly Expenses",
      },
      coverFor: {
        required: "Kindly provide a valid Cover for",
      },
      kidNos: {
        required: "Kindly provide a valid No. of Kids",
      },
      child1: {
        required: "Kindly provide a valid Amount for Child 1",
      },
      child2: {
        required: "Kindly provide a valid Amount for Child 2",
      },

    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass("is-invalid").removeClass("is-valid");
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).addClass("is-valid").removeClass("is-invalid");
    },
    submitHandler: function () {
      $("#life-insurance-step1").parent().hide().next().show();
      $("html, body").stop().animate(
        {
          scrollTop: 0,
        },
        200
      );
    },
  });

  $("#life-insurance-step2").validate({
    rules: {
      outloan: {
        required: true,
        salamt: true,
      },
      extinsur: {
        required: true,
        salamt: true,
      },
      allsavg: {
        required: true,
        salamt: true,
      }
    },
    messages: {
      outloan: {
        required: "Kindly provide a valid Any outstanding loan liability",
      },
      extinsur: {
        required: "Kindly provide a valid Existing life insurance cover",
      },
      allsavg: {
        required: "Kindly provide a valid Value of all your savings and investments",
      }
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass("is-invalid").removeClass("is-valid");
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).addClass("is-valid").removeClass("is-invalid");
    },
    submitHandler: function () {
      $("#healthModal").modal("show");
    },
  });
});
