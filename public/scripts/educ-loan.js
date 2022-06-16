$(document).ready(function () {
  // Comma function
  function commaNumber(val) {
    var x = val;
    x = x.toString();
    var lastThree = x.substring(x.length - 3);
    var otherNumbers = x.substring(0, x.length - 3);
    if (otherNumbers != "") lastThree = "," + lastThree;
    var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    return res;
  }

  // Loan Amout start
  var handle = $("#custom-handle-lakhs"),
    max;
  $("#slider-loanAmount").slider({
    range: "min",
    value: 2000000,
    step: 10000,
    min: 1000000,
    max: 5000000,
    create: function () {
      max = $("#slider-loanAmount").slider("option", "value") / 100000;
      handle.text(max + "L");
    },
    slide: function (event, ui) {
      $("#loanAmount").val(commaNumber(ui.value));
      handle.text(ui.value / 100000 + "L");
      calc_emi();
    },
  });

  $("#loanAmount").val(commaNumber($("#slider-loanAmount").slider("value")));

  $("#loanAmount").on("keyup", function (e) {
    commaNumber($("#slider-loanAmount").slider("value", this.value));
  });

  $("#loanAmount").on("focus", function (e) {
    $(this).val($(this).val().replace(/,/g, ""));
  });
  $("#loanAmount").on("keyup keydown", function (e) {
    if ($(this).val() > 5000000 && e.keyCode !== 46 && e.keyCode !== 8) {
      e.preventDefault();
      $(this).val(5000000);
    }

    max = $(this).val() / 100000;
    handle.text(max + "L");
  });

  $("#loanAmount").on("blur", function (e) {
    max = $(this).val() / 100000;
    handle.text(max + "L");

    var valInput = this.value;
    valInput = valInput.replace(/,/g, "");
    $(this).val(commaNumber(valInput));

    if (valInput < 99999) {
      e.preventDefault();
      $(this).val(100000);
      max = $(this).val() / 100000;
      handle.text(max + "L");
      $(this).val(commaNumber(100000));
    }
  });
  //End

  // Expected return Start
  var handleExrtn = $("#custom-handle-expReturn"),
    maxrtn;
  $("#slider-expReturn").slider({
    range: "min",
    value: 12,
    min: 8,
    step: 1,
    max: 15,
    create: function () {
      maxrtn = $("#slider-expReturn").slider("option", "value");
      handleExrtn.text(maxrtn + "%");
    },
    slide: function (event, ui) {
      $("#expReturn").val(ui.value);
      handleExrtn.text(ui.value + "%");
      calc_emi();
    },
  });

  $("#expReturn").val($("#slider-expReturn").slider("value"));

  $("#expReturn").on("keyup", function (e) {
    $("#slider-expReturn").slider("value", this.value);
  });
  $("#expReturn").click(function () {
    $(this).select();
  });

  $("#expReturn").on("keyup keydown", function (e) {
    maxrtn = $("#slider-expReturn").slider("option", "value");
    handleExrtn.text(maxrtn + "%");
  });

  $("#expReturn").on("blur", function (e) {
    maxrtn = $("#slider-expReturn").slider("option", "value");
    handleExrtn.text(maxrtn + "%");
    if ($(this).val() > 15 && e.keyCode !== 46 && e.keyCode !== 8) {
      e.preventDefault();
      $(this).val(15);
    }

    var valInput = this.value;
    if (valInput < 8) {
      e.preventDefault();
      $(this).val(8);
      maxrtn = $(this).val();
      handleExrtn.text(maxrtn + "%");
    }
  });
  // Expected return End

  // Loan Tenure
  var handleYr5 = $("#custom-handle-loanTenureYear"),
    maxYr5;
  $("#slider-loanTenureYear").slider({
    range: "min",
    value: 12,
    min: 5,
    step: 1,
    max: 15,
    create: function () {
      maxYr5 = $("#slider-loanTenureYear").slider("option", "value");
      handleYr5.text(maxYr5 + " Years");
    },
    slide: function (event, ui) {
      $("#loanTenureYear").val(ui.value);
      handleYr5.text(ui.value + " Years");
      calc_emi();
    },
  });

  $("#loanTenureYear").val($("#slider-loanTenureYear").slider("value"));

  $("#loanTenureYear").on("keyup", function (e) {
    $("#slider-loanTenureYear").slider("value", this.value);
  });
  $("#loanTenureYear").click(function () {
    $(this).select();
  });

  $("#loanTenureYear").on("keyup keydown", function (e) {
    maxYr5 = $("#slider-loanTenureYear").slider("option", "value");
    handleYr5.text(maxYr5 + " Years");
  });

  $("#loanTenureYear").on("blur", function (e) {
    maxYr5 = $("#slider-loanTenureYear").slider("option", "value");
    handleYr5.text(maxYr5 + " Years");
    if ($(this).val() > 15 && e.keyCode !== 46 && e.keyCode !== 8) {
      e.preventDefault();
      $(this).val(15);
    }

    var valInput = this.value;
    if (valInput < 5) {
      e.preventDefault();
      $(this).val(5);
      maxYr5 = $(this).val();
      handleYr5.text(maxYr5 + " Years");
    }
  });

  /* end */

  // Loan Tenure
  var handleCD = $("#custom-handle-courseDuration"),
    maxCD;
  $("#slider-courseDuration").slider({
    range: "min",
    value: 24,
    min: 6,
    step: 1,
    max: 60,
    create: function () {
      maxCD = $("#slider-courseDuration").slider("option", "value");
      handleCD.text(maxCD + " Months");
    },
    slide: function (event, ui) {
      $("#courseDuration").val(ui.value);
      handleCD.text(ui.value + " Months");
      calc_emi();
    },
  });

  $("#courseDuration").val($("#slider-courseDuration").slider("value"));

  $("#courseDuration").on("keyup", function (e) {
    $("#slider-courseDuration").slider("value", this.value);
  });
  $("#courseDuration").click(function () {
    $(this).select();
  });

  $("#courseDuration").on("keyup keydown", function (e) {
    maxCD = $("#slider-courseDuration").slider("option", "value");
    handleCD.text(maxCD + " Months");
  });

  $("#courseDuration").on("blur", function (e) {
    maxCD = $("#slider-courseDuration").slider("option", "value");
    handleCD.text(maxCD + " Months");
    if ($(this).val() > 60 && e.keyCode !== 46 && e.keyCode !== 8) {
      e.preventDefault();
      $(this).val(60);
    }

    var valInput = this.value;
    if (valInput < 6) {
      e.preventDefault();
      $(this).val(6);
      maxCD = $(this).val();
      handleCD.text(maxCD + " Months");
    }
  });

  /* end */

  //Demo function for Mutual fund banner Calculator start
  var a,b,c,d,e;

  function calc_emi() {

    a = $("#loanAmount").val().replace(/,/g, "");
    b = $("#expReturn").val();
    c = $("#loanTenureYear").val();
    d = $("#courseDuration").val();
    e = Math.round(parseInt(a)+parseInt(b)+parseInt(c)+parseInt(d));
    $('#sipr').text(commaNumber(e));
  }

  //Mutual fund banner Calculator end


  // Tax Savings Loan Amout start
  var handleTax = $("#custom-handleTax-lakhs"),
    maxTax;
  $("#slider-taxLoanAmt").slider({
    range: "min",
    value: 2000000,
    step: 10000,
    min: 1000000,
    max: 5000000,
    create: function () {
      maxTax = $("#slider-taxLoanAmt").slider("option", "value") / 100000;
      handleTax.text(maxTax + "L");
    },
    slide: function (event, ui) {
      $("#taxLoanAmt").val(commaNumber(ui.value));
      handleTax.text(ui.value / 100000 + "L");
    },
  });

  $("#taxLoanAmt").val(commaNumber($("#slider-taxLoanAmt").slider("value")));

  $("#taxLoanAmt").on("keyup", function (e) {
    commaNumber($("#slider-taxLoanAmt").slider("value", this.value));
  });

  $("#taxLoanAmt").on("focus", function (e) {
    $(this).val($(this).val().replace(/,/g, ""));
  });
  $("#taxLoanAmt").on("keyup keydown", function (e) {
    if ($(this).val() > 5000000 && e.keyCode !== 46 && e.keyCode !== 8) {
      e.preventDefault();
      $(this).val(5000000);
    }

    maxTax = $(this).val() / 100000;
    handleTax.text(maxTax + "L");
  });

  $("#taxLoanAmt").on("blur", function (e) {
    maxTax = $(this).val() / 100000;
    handleTax.text(maxTax + "L");

    var valInput = this.value;
    valInput = valInput.replace(/,/g, "");
    $(this).val(commaNumber(valInput));

    if (valInput < 99999) {
      e.preventDefault();
      $(this).val(100000);
      maxTax = $(this).val() / 100000;
      handleTax.text(maxTax + "L");
      $(this).val(commaNumber(100000));
    }
  });
  //End

  // Tax Savings Interest rate Start
  var handleTaxSav = $("#custom-handle-expRetTax"),
    maxTaxSav;
  $("#slider-expRetTax").slider({
    range: "min",
    value: 12,
    min: 8,
    step: 1,
    max: 15,
    create: function () {
      maxTaxSav = $("#slider-expRetTax").slider("option", "value");
      handleTaxSav.text(maxTaxSav + "%");
    },
    slide: function (event, ui) {
      $("#expRetTax").val(ui.value);
      handleTaxSav.text(ui.value + "%");
      //calc_emi();
    },
  });

  $("#expRetTax").val($("#slider-expRetTax").slider("value"));

  $("#expRetTax").on("keyup", function (e) {
    $("#slider-expRetTax").slider("value", this.value);
  });
  $("#expRetTax").click(function () {
    $(this).select();
  });

  $("#expRetTax").on("keyup keydown", function (e) {
    maxTaxSav = $("#slider-expRetTax").slider("option", "value");
    handleTaxSav.text(maxTaxSav + "%");
  });

  $("#expRetTax").on("blur", function (e) {
    maxTaxSav = $("#slider-expRetTax").slider("option", "value");
    handleTaxSav.text(maxTaxSav + "%");
    if ($(this).val() > 15 && e.keyCode !== 46 && e.keyCode !== 8) {
      e.preventDefault();
      $(this).val(15);
    }

    var valInput = this.value;
    if (valInput < 8) {
      e.preventDefault();
      $(this).val(8);
      maxTaxSav = $(this).val();
      handleTaxSav.text(maxTaxSav + "%");
    }
  });
  // Expected return End

  //Eligibility section
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
  $.validator.addMethod(
    "otpnumber",
    function (value, element) {
      return this.optional(element) || value == value.match(/^[0-9]{6}$/);
    },
    "Kindly provide a valid OTP"
  );
  //pincode end

  //Number only
  $.validator.addMethod(
    "numberonly",
    function (value, element) {
        return this.optional(element) || value == value.match(/^[0-9]*$/);
    },
    "Kindly provide a valid OTP"
  );
  //Number end

  $("#loan-eligibility").validate({
    rules: {
      fullName: {
        required: true,
        fullName: true,
      },
      mobile: {
        required: true,
        mnumber: true,
      },
      country:{
        required: true,
      },
      otp: {
        required: true,
        otpnumber: true,
      },
    },
    messages: {
      fullName: {
        required: "Kindly provide a valid Full Name",
      },
      mobile: {
        required: "Kindly provide a valid Mobile Number",
      },
      country: {
        required: "Kindly provide a valid Country of Study",
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
        $('#loan-eligibility').hide().next().show();
      } else {
        $(".otp").show().parents('.hero-from').addClass("act");
      }
    },
  });

  $("#loan-eligibility2").validate({
    rules: {
      examList:{
        required: true,
      },
      examScore: {
        required: true,
        numberonly: true
      },
      greScore: {
        required: true,
        numberonly: true
      },
      gmatScore: {
        required: true,
        numberonly: true
      },
    },
    messages: {
        examList: {
        required: "Kindly provide a valid Your Exam",
      },
      examScore: {
        required: "Kindly provide a valid Exam score",
        numberonly: "Kindly provide a valid Exam score"
      },
      greScore: {
        required: "Kindly provide a valid Exam score",
        numberonly: "Kindly provide a valid Exam score"
      },
      gmatScore: {
        required: "Kindly provide a valid Exam score",
        numberonly: "Kindly provide a valid Exam score"
      },
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass("is-invalid").removeClass("is-valid");
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).addClass("is-valid").removeClass("is-invalid");
    },
    submitHandler: function () {
      
    },
  });

  $('.score').hide().eq(0).show();
  $('#examList').change(function () {
    const tval = $(this).val();
    $('.score').hide();
    $('#' + tval).show();

  })

});
