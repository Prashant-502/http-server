function solid(formname) {
  function cback(e) {
    var t = [];
    for (var n = inputs.length; n--; ) {
      if (!inputs[n].value.length) t.push(inputs[n]);
      console.log(t.length);
    }
    var r = t.length;
    var i = inputs.length;
    var s = $("." + formname + " .top");
    for (var o = s.length; o--; ) {
      s[o].style.width = 100 - (r / i) * 100 + "%";
    }
  }
  var inputs = [];
  var els = $("." + formname + " .form-list").find(
    "input:visible, textarea:visible, select:visible"
  );
  console.log($("." + formname + " .form-list"));
  for (var j = els.length; j--; ) {
    if (els[j].type != "button" && els[j].type != "submit") {
      inputs.push(els[j]);
      els[j].addEventListener("input", cback, false);
    }
  }
}
$(document).ready(function () {
  // normal select box
  $(".normal-select-box")
    .on("focus blur change", function (e) {
      var $currEl = $(this);
      if ($currEl.is("select")) {
        if ($currEl.val() === $("option:first", $currEl).val()) {
          $(this).removeClass("selected");
        } else {
          $(this).addClass("selected");
        }
      }
    })
    .trigger("blur");
  // normal select box end

  //pancard number
    $.validator.addMethod("pannumber", function(value, element) {
    return this.optional(element) || value == value.match(/^[a-zA-Z]{3}[pP]{1}[a-zA-Z]{1}[0-9]{4}[a-zA-Z]{1}$/);
    }, "Kindly provide a valid Permanent Account Number (PAN)");
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
        value ==
          value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
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
    "pincode",
    function (value, element) {
      return this.optional(element) || value == value.match(/^[0-9]{6}$/);
    },
    "Kindly provide a pincode"
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

  //LAP loan details start
  $("#lapStep1").validate({
    rules: {
      loanp: {
        required: true,
      },
      pcity: {
        required: true,
      },
      pvalue: {
        required: true,
        salamt: true,
      },
    },
    messages: {
      loanp: {
        required: "Kindly provide a valid purpose of loan",
      },
      pcity: {
        required: "Kindly provide a valid property Location",
      },
      pvalue: {
        required: "Kindly provide a valid property value",
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
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        800
      );
    },
  });
  //LAP loan details End

  //LAP loan details start
  $("#lapStep2").validate({
    rules: {
      pan1: {
        required: true,
        pannumber: true,
      },
      fullname: {
        required: true,
        fullName: true,
      },
      dob1: {
        required: true,
      },
      emailid: {
        required: true,
        emailadd: true,
      },
      pincode: {
        required: true,
        pincode: true,
      },
      city1: {
        required: true,
      },
    },
    messages: {
      pan1: {
        required: "Kindly provide a valid PAN number",
      },
      fullname: {
        required: "Kindly provide a valid full name",
      },
      dob1: {
        required: "Kindly provide a valid date of birth",
      },
      emailid: {
        required: "Kindly provide a valid e-mail address",
      },
      pincode: {
        required: "Kindly provide a valid pincode",
      },
      city1: {
        required: "Kindly provide a valid city",
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
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        800
      );
    },
  });
  //LAP loan details End

  //Employment Details
  $("#lapStep3").validate({
    rules: {
      employment: {
        required: true,
      },
      agIncome: {
        required: true,
        salamt: true,
      },
      company2: {
        required: true,
      },
      organisation: {
        required: true,
      },
      Officialemailid: {
        required: true,
        emailadd: true,
      },
    },
    messages: {
      employment: {
        required: "",
        minlength: "",
      },
      agIncome: {
        required: "Kindly provide a valid Annual Gross Income",
        minlength: "Kindly provide a valid Annual Gross Income",
      },
      company2: {
        required: "Kindly provide a valid Company Name",
        minlength: "Kindly provide a valid Company Name",
      },
      organisation: {
        required: "Kindly provide a valid Organisation",
        minlength: "Kindly provide a valid Organisation",
      },
      Officialemailid: {
        required: "Kindly provide a valid Official e-mail ID",
        minlength: "Kindly provide a valid Official e-mail ID",
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
  //Permanent Details end
});

$(function () {
  var availableTags = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme",
  ];
  $("#brand").autocomplete({
    source: availableTags,
  });
});
