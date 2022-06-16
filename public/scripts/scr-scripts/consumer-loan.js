function solid(formname) {
  function cback(e) {
    var t = [];
    for (var n = inputs.length; n--;) {
      if (!inputs[n].value.length) t.push(inputs[n]);
      console.log(t.length)
    }
    var r = t.length;
    var i = inputs.length;
    var s = $('.' + formname + ' .top');
    for (var o = s.length; o--;) {
      s[o].style.width = 100 - r / i * 100 + "%";
    }
  }
  var inputs = [];
  var els = $('.' + formname + ' .form-list').find('input:visible, textarea:visible, select:visible');
  console.log($('.' + formname + ' .form-list'));
  for (var j = els.length; j--;) {
    if (els[j].type != "button" && els[j].type != "submit") {
      inputs.push(els[j]);
      els[j].addEventListener("input", cback, false);
    }
  }
}
$(document).ready(function () {

  // normal select box
  $('.normal-select-box').on('focus blur change', function (e) {
    var $currEl = $(this);
    if ($currEl.is('select')) {
      if ($currEl.val() === $("option:first", $currEl).val()) {
        $(this).removeClass('selected');
      } else {
        $(this).addClass('selected');
      }
    }
  }).trigger('blur');
  // normal select box end

  //pancard number
  $.validator.addMethod("pannumber", function (value, element) {
    return this.optional(element) || value == value.match(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/);
  }, "Kindly provide a valid Permanent Account Number (PAN)");
  //pancard number end

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

  //email Address
  $.validator.addMethod("emailadd", function (value, element) {
    return this.optional(element) || value == value.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/);
  }, "Kindly provide a valid email address");
  //email Address end

  //pincode
  $.validator.addMethod("pincodenumber", function (value, element) {
    return this.optional(element) || value == value.match(/^[0-9]{6}$/);
  }, "Kindly provide a valid pincode");
  //pincode end

  //otp
  $.validator.addMethod("otpnumber", function (value, element) {
    return this.optional(element) || value == value.match(/^[0-9]{6}$/);
  }, "Kindly provide a valid OTP");
  //pincode end

  //sal amount
  $.validator.addMethod("salamt", function (value, element) {
    return this.optional(element) || value == value.match(/^[0-9,.]*$/);
  }, "Kindly provide a valid Salary");
  //sal amount end

  //app number
  $.validator.addMethod("applicationNumber", function (value, element) {
    return this.optional(element) || value == value.match(/^[0-9]*$/);
  }, "Kindly provide a valid Application Number");
  //app number end

  //aadhar number
  $.validator.addMethod("aadharNumber", function (value, element) {
    return this.optional(element) || value == value.match(/^^[0-9]{12}$/);
  }, "Kindly provide a valid Aadhar Number");
  //aadhar number end

  $("#consumerStep0").on('submit', function (event) {
    event.preventDefault();
    event.stopPropagation();
    $('.from-screen.screen-0').removeClass('active');
    $('.from-screen.screen-1').addClass('active');
    moveTab('screen-1');
    $('html, body').animate({
      'scrollTop': 0
    }, 800);
  })

  $("#consumerStep1").validate({
    rules: {
      mobile: {
        required: true,
        mnumber: true
      },
      tnc: {
        required: true,
      },
    },
    messages: {
      mobile: {
        required: "Kindly provide a valid mobile number",
        minlength: "Kindly provide a valid mobile number"
      },
      tnc: {
        required: "",
        minlength: ""
      },
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass("is-invalid").removeClass("is-valid");
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).addClass("is-valid").removeClass("is-invalid");
    },
    submitHandler: function () {
      $('.from-screen.screen-1').removeClass('active');
      $('.from-screen.screen-2').addClass('active');
      moveTab('screen-2');
    }
  });
  //Mobile Number verification End


  // otp timer 
  if ($('#timer').length) {
    let timerOn = true;

    function timer(remaining) {
      var m = Math.floor(remaining / 60);
      var s = remaining % 60;
      m = m < 10 ? '0' + m : m;
      s = s < 10 ? '0' + s : s;
      document.getElementById('timer').innerHTML = m + ':' + s;
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


  //OTP Verification
  $("#otpVerification1").validate({
    rules: {
      otp: {
        required: true,
        otpnumber: true
      },
    },
    messages: {
      otp: {
        required: "Kindly provide a valid OTP number",
        minlength: "Kindly provide a valid OTP number"
      },
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass("is-invalid").removeClass("is-valid");
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).addClass("is-valid").removeClass("is-invalid");
    },
    submitHandler: function () {
      $('.from-screen.screen-2').removeClass('active');
      $('.from-screen.screen-3').addClass('active');
      moveTab('screen-3');

    }
  });
  //OTP Verification end

  $('#panNum').change(function () {
    if ($("#panNum").is(':checked')) {
      $('#pan').attr('required', true);
      $('#upload').removeAttr('required');
      $('#pan').attr('disabled', false);
      $('#upload').attr("disabled", true);
    }
  });
  $('#form60').change(function () {
    if ($("#form60").is(':checked')) {
      $('#upload').attr('required', true);
      $('#pan').removeAttr('required');
      $('#upload').attr('disabled', false);
      $('#pan').attr("disabled", true);
    }
  });


  //Personal Details
  $("#personalDetails1").validate({
    rules: {
      formOrPan: {
        required: true,
      },
      pan: {
        pannumber: true,
      },
      officialDocument: {
        required: true,
      },
      adharcard: {
        required: true,
        aadharNumber: true,
      },
    },
    messages: {
      formOrPan: {
        required: "",
        minlength: ""
      },
      pan: {
        required: "Kindly provide a valid Permanent Account Number (PAN)",
        minlength: "Kindly provide a valid Permanent Account Number (PAN)"
      },
      puploadan: {
        required: "",
        minlength: ""
      },
      officialDocument: {
        required: "Kindly Select official verification document",
        minlength: "Kindly Select official verification document"
      },
      officialDocument: {
        required: "Kindly Select official verification document",
        minlength: "Kindly Select official verification document"
      },
      adharcard: {
        required: "Kindly provide a valid Aadhar Number",
        minlength: "Kindly provide a valid Aadhar Number"
      },
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass("is-invalid").removeClass("is-valid");
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).addClass("is-valid").removeClass("is-invalid");
    },
    submitHandler: function () {
      if ($('.confirm-box').is(":visible")) {
        $('.from-screen.screen-3').removeClass('active');
        $('.from-screen.screen-4').addClass('active');
        moveTab('screen-4');
        $('html, body').animate({
          'scrollTop': 0
        }, 800);
      } else {
        $('.hide-verify').hide();
        $('.confirm-box').removeClass('hide');
      }
    }
  });
  //Personal Details end

});

function show1() {
  $('.switch-box-1').show();
  $('.switch-box-2').hide();
}

function show2() {
  $('.switch-box-1').hide();
  $('.switch-box-2').show();
}

function moveTab(formname) {
  var tstW = 0;
  $('.' + formname + ' .progress-list ul li.active').prevAll().each(function () {
    tstW += $(this).outerWidth(true);
    //console.log(tstW);
  });
  $('.' + formname + ' .progress-list').animate({
    scrollLeft: tstW
  }, 200);
}

$("#consPersonalDetails").validate({
  rules: {
    gender: {
      required: true,
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
  },
  messages: {
    gender: {
      required: "",
      minlength: ""
    },
    fullname: {
      required: "Kindly provide a valid full name",
      minlength: "Kindly provide a valid full name"
    },
    dob1: {
      required: "Kindly provide a valid date of birth",
      minlength: "Kindly provide a valid date of birth"
    },
    emailid: {
      required: "Kindly provide a valid e-mail Address",
      minlength: "Kindly provide a valid e-mail Address"
    },
  },
  highlight: function (element, errorClass, validClass) {
    $(element).addClass("is-invalid").removeClass("is-valid");
  },
  unhighlight: function (element, errorClass, validClass) {
    $(element).addClass("is-valid").removeClass("is-invalid");
  },
  submitHandler: function () {
    $('.tog_cont1').hide();
    $('.trgr1:eq(0)').removeClass('act');
    $('.trgr1:eq(1)').addClass('act').next().show();
    $('.trgr1:eq(0)').attr("data-state", "true");
    $('.screen-4 .progress-list ul li .top').width('33.33%');
  }
});


//Residential Details
$("#consResidentialDetails").validate({
  rules: {
    building: {
      required: true,
    },
    area: {
      required: true,
    },
    landmark: {
      required: true,
    },
    pincode: {
      required: true,
      pincodenumber: true,
    },
    city1: {
      required: true,
    },
    state1: {
      required: true,
    },
    pstatus: {
      required: true,
    }
  },
  messages: {
    building: {
      required: "Kindly provide a valid Flat No., Building Name",
      minlength: "Kindly provide a valid Flat No., Building Name",
    },
    area: {
      required: "Kindly provide a valid Road Name, Area, Colony",
      minlength: "Kindly provide a valid Road Name, Area, Colony"
    },
    landmark: {
      required: "Kindly provide a valid landmark",
      minlength: "Kindly provide a valid landmark",
    },
    pincode: {
      required: "Kindly provide a valid pincode",
      minlength: "Kindly provide a valid pincode",
    },
    city: {
      required: "Kindly provide a valid city",
      minlength: "Kindly provide a valid city",
    },
    state: {
      required: "Kindly provide a valid state",
      minlength: "Kindly provide a valid state",
    },
    pstatus: {
      required: "Kindly provide a valid property status",
      minlength: "Kindly provide a valid property status",
    }
  },
  highlight: function (element, errorClass, validClass) {
    $(element).addClass("is-invalid").removeClass("is-valid");
  },
  unhighlight: function (element, errorClass, validClass) {
    $(element).addClass("is-valid").removeClass("is-invalid");
  },
  submitHandler: function () {
    $('.tog_cont1').hide();
    $('.trgr1:eq(1)').removeClass('act');
    $('.trgr1:eq(2)').addClass('act').next().show();
    $('.trgr1:eq(0)').attr("data-state", "true");
    $('.trgr1:eq(1)').attr("data-state", "true");
    $('.screen-4 .progress-list ul li .top').width('66.66%');
  }
});

//Residential Details end

//Employment Details
$("#consEmploymentDetails").validate({
  rules: {
    employment: {
      required: true,
    },
    annual: {
      required: true,
      salamt: true,
    },
    company: {
      required: true,
    },
    // other: {
    //   required: true,
    // },
    ccard: {
      required: true,
    },
    dcard: {
      required: true,
    },
    obuilding: {
      required: true,
    },
    oarea: {
      required: true,
    },
    olandmark: {
      required: true,
    },
    opincode: {
      required: true,
      pincodenumber: true,
    },
    ocity: {
      required: true,
    },
    ostate: {
      required: true,
    }
  },
  messages: {
    employment: {
      required: "",
      minlength: "",
    },
    annual: {
      required: "Kindly provide a valid Annual Gross Income",
      minlength: "Kindly provide a valid Annual Gross Income"
    },
    company: {
      required: "Kindly provide a valid Company Name",
      minlength: "Kindly provide a valid Company Name",
    },
    // other: {
    //   required: "Kindly provide a valid Industry",
    //   minlength: "Kindly provide a valid Industry",
    // },
    obuilding: {
      required: "Kindly provide a valid Flat No., Building Name",
      minlength: "Kindly provide a valid Flat No., Building Name",
    },
    oarea: {
      required: "Kindly provide a valid Road Name, Area, Colony",
      minlength: "Kindly provide a valid Road Name, Area, Colony"
    },
    olandmark: {
      required: "Kindly provide a valid landmark",
      minlength: "Kindly provide a valid landmark",
    },
    opincode: {
      required: "Kindly provide a valid pincode",
      minlength: "Kindly provide a valid pincode",
    },
    ocity: {
      required: "Kindly provide a valid city",
      minlength: "Kindly provide a valid city",
    },
    ostate: {
      required: "Kindly provide a valid state",
      minlength: "Kindly provide a valid state",
    }
  },
  highlight: function (element, errorClass, validClass) {
    $(element).addClass("is-invalid").removeClass("is-valid");
  },
  unhighlight: function (element, errorClass, validClass) {
    $(element).addClass("is-valid").removeClass("is-invalid");
  },
  submitHandler: function () {
    window.location.replace("consumer-loan-congratulation.html");
  }
});
//Permanent Details end

// Start
$("#loanDetails").validate({
  rules: {
    loanAmt: {
      required: true,
      number: true
    },
    brand: {
      required: true
    },
    carModel: {
      required: true
    }
  },
  messages: {
    loanAmt: {
      required: "Kindly provide a valid Loan Amount"
    },
    brand: {
      required: "Kindly provide a valid Car Brand"
    },
    carModel: {
      required: "Kindly provide a valid Car Model"
    },
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
//End

$('.edit-cdetails').click(function () {
  $('.from-screen.screen-3').removeClass('active');
  $('.from-screen.screen-4').addClass('active');
  moveTab('screen-4');
  $('html, body').animate({
    'scrollTop': 0
  }, 800);
});

$('.preLoanamt a').click(function () {
  var a = $(this).attr('data-value');
  //console.log(a);
  $('#loanAmt').val(a);
  return false;
})
