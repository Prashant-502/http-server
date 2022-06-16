// Comma function
function commaNumber(val) {
  var x = val;
  x = x.toString();
  var lastThree = x.substring(x.length - 3);
  var otherNumbers = x.substring(0, x.length - 3);
  if (otherNumbers != '')
    lastThree = ',' + lastThree;
  var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
  return res;
}

// Want to invest Start
var handleMI = $("#custom-handle-MonthlyIncome1"),
  maxMI;
$("#slider-MonthlyIncome1").slider({
  range: "min",
  value: 50000,
  step: 10000,
  min: 10000,
  max: 500000,
  create: function () {
    maxMI = $("#slider-MonthlyIncome1").slider("option", "value") / 1000;
    if ($("#slider-MonthlyIncome1").slider("option", "value") >= 100000) {
      handleMI.text(maxMI + 'L');
    } else {
      handleMI.text(maxMI + 'K');
    }

  },
  slide: function (event, ui) {
    $("#MonthlyIncome1").val(commaNumber(ui.value));
    if (ui.value >= 100000) {
      handleMI.text((ui.value / 100000) + 'L');
    } else {
      handleMI.text((ui.value / 1000) + 'K');
    }

  }
});

$("#MonthlyIncome1").val(commaNumber($("#slider-MonthlyIncome1").slider("value")));

$("#MonthlyIncome1").on("keyup", function (e) {
  commaNumber($("#slider-MonthlyIncome1").slider("value", this.value));
});

$('#MonthlyIncome1').on('focus', function (e) {
  $(this).val($(this).val().replace(/,/g, ''));
});

$('#MonthlyIncome1').on('keyup keydown', function (e) {

  if ($(this).val() > 500000 &&
    e.keyCode !== 46 &&
    e.keyCode !== 8
  ) {
    e.preventDefault();
    $(this).val(500000);
  }

  if ($(this).val() >= 100000) {
    maxMI = $(this).val() / 100000;
    handleMI.text(maxMI.toFixed(2) + 'L');
  } else {
    maxMI = $(this).val() / 1000;
    handleMI.text(maxMI.toFixed(2) + 'K');
  }


});

$("#MonthlyIncome1").on("blur", function (e) {
  //console.log($(this).val(), 'ARIF');
  if ($(this).val() >= 100000) {
    maxMI = $(this).val() / 100000;
    handleMI.text(maxMI.toFixed(2) + 'L');
  } else {
    maxMI = $(this).val() / 1000;
    handleMI.text(maxMI.toFixed(2) + 'K');
  }

  var valInput = this.value;
  valInput = valInput.replace(/,/g, "");
  $(this).val(commaNumber(valInput));

  if (valInput < 9999) {
    e.preventDefault();
    $(this).val(10000);
    maxMI = $(this).val() / 1000;
    handleMI.text(maxMI + 'K');
    $(this).val(commaNumber(10000));
  }
});
// Want to invest end


// Per month Start
var handleYr5 = $("#custom-handle-tenureYearInv"),
  maxYr5;
$("#slider-tenureYearInv").slider({
  range: "min",
  value: 8,
  min: 1,
  step: 1,
  max: 30,
  create: function () {
    maxYr5 = $("#slider-tenureYearInv").slider("option", "value");
    handleYr5.text(maxYr5 + 'Y');
  },
  slide: function (event, ui) {
    $("#tenureYearInv").val(ui.value);
    handleYr5.text(ui.value + 'Y');
  }
});

$("#tenureYearInv").val($("#slider-tenureYearInv").slider("value"));

$("#tenureYearInv").on("keyup", function (e) {
  $("#slider-tenureYearInv").slider("value", this.value);
});
$("#tenureYearInv").click(function () {
  $(this).select();
});

$('#tenureYearInv').on('keyup keydown', function (e) {
  maxYr5 = $("#slider-tenureYearInv").slider("option", "value");
  handleYr5.text(maxYr5 + 'Y');
});


$("#tenureYearInv").on("blur", function (e) {
  maxYr5 = $("#slider-tenureYearInv").slider("option", "value");
  handleYr5.text(maxYr5 + 'Y');
  if ($(this).val() > 30 &&
    e.keyCode !== 46 &&
    e.keyCode !== 8
  ) {
    e.preventDefault();
    $(this).val(30);
  }

  var valInput = this.value;
  if (valInput < 5) {
    e.preventDefault();
    $(this).val(5);
    maxYr5 = $(this).val();
    handleYr5.text(maxYr5 + 'Y');
  }
});

// Per month End

// Expected return Start
var handleExrtn = $("#custom-handle-expReturn"),
  maxrtn;
$("#slider-expReturn").slider({
  range: "min",
  value: 8,
  min: 5,
  step: 1,
  max: 20,
  create: function () {
    maxrtn = $("#slider-expReturn").slider("option", "value");
    handleExrtn.text(maxrtn + '%');
  },
  slide: function (event, ui) {
    $("#expReturn").val(ui.value);
    handleExrtn.text(ui.value + '%');
  }
});

$("#expReturn").val($("#slider-expReturn").slider("value"));

$("#expReturn").on("keyup", function (e) {
  $("#slider-expReturn").slider("value", this.value);
});
$("#expReturn").click(function () {
  $(this).select();
});

$('#expReturn').on('keyup keydown', function (e) {
  maxrtn = $("#slider-expReturn").slider("option", "value");
  handleExrtn.text(maxrtn + '%');
});


$("#expReturn").on("blur", function (e) {
  maxrtn = $("#slider-expReturn").slider("option", "value");
  handleExrtn.text(maxrtn + '%');
  if ($(this).val() > 30 &&
    e.keyCode !== 46 &&
    e.keyCode !== 8
  ) {
    e.preventDefault();
    $(this).val(30);
  }

  var valInput = this.value;
  if (valInput < 5) {
    e.preventDefault();
    $(this).val(5);
    maxrtn = $(this).val();
    handleExrtn.text(maxrtn + '%');
  }
});
// Expected return End

// New to Investing
$(document).ready(function () {

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

  $("#your-goal-form").validate({
    rules: {
      presentAge: {
        required: true
      }
    },
    messages: {
      presentAge: {
        required: "Kindly provide a valid present age"
      }
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass("is-invalid").removeClass("is-valid");
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).addClass("is-valid").removeClass("is-invalid");
    },
    submitHandler: function () {
      $('.recom-goals').slideDown();
      $('html, body').animate({
        'scrollTop': $('.recom-goals').offset().top - 200
      }, 800);
    }
  });

  $("#call-back-form").validate({
    rules: {
      fullName: {
        required: true,
        fullName: true
      },
      mobile: {
        required: true,
        mnumber: true
      }
    },
    messages: {
      fullName: {
        required: "Kindly provide a valid Full Name"
      },
      mobile: {
        required: "Kindly provide a valid Phone Number"
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

  $("#your-first-crore").validate({
    rules: {
      investPerMonth: {
        required: true
      },
      savings: {
        required: true
      }
    },
    messages: {
      investPerMonth: {
        required: "Kindly provide a invest (₹) each month"
      },
      savings: {
        required: "Kindly provide a current savings"
      }
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass("is-invalid").removeClass("is-valid");
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).addClass("is-valid").removeClass("is-invalid");
    },
    submitHandler: function () {
      $('.recom-goals').slideDown();
      $('html, body').animate({
        'scrollTop': $('.recom-goals').offset().top - 200
      }, 800);
    }
  });

  $('.box-data .more a').on('click', function () {
    $(this).parent().toggleClass('act');
    $(this).parents('.box-in').next().slideToggle();
  })

  $('.invest-pers .choose-product input').on('click', function () {
    var steps = $(this).parents('.pers-exp').next();
    //console.log(steps.length); 
    if (steps.length == 0) {
      $(this).parents('.invest-pers').hide().next().show();
    } else {
      $(this).parents('.pers-exp').removeClass('active').next().addClass('active');
    }
  })

})
