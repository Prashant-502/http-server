$(document).ready(function () {
  // $("#updoc").submit(function() {
  // $('#pwait').modal('show');
  // setTimeout(function(){ 
  //   $('#pwait').modal('hide');
  //   $('.from-screen').removeClass('active');
  //   $('.from-screen.screen-2').addClass('active');
  //  }, 1000);
  // return false;
  // });
});

$(function(){
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
      "Scheme"
    ];
    $("#company,#industry").autocomplete({ 
      source: availableTags,
      open: function(event, ui) {
          $(this).autocomplete("widget").css({
              "width": $(this).outerWidth()
          });
      }
    });
});

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

  //personal-loan-2 form
  /* Calendar start */

  $("#dob,#dob1").datepicker({
    dateFormat: 'dd-mm-yy',
    maxDate: -30,
    changeMonth: true,
    changeYear: true,
    yearRange: "-50:-0.5"
  }).on('change', function() {
    $(this).valid();  
  });
  
  
  /* Calendar end */


  $("#mform").validate({
    rules: {
      mobile: {
        required: true,
        mnumber: true
      },
      dob: {
        required: true,
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

    }
  });

  //personal-loan-2 form end

  //Upload Documents screen 1

  $(function ($) {
    var $inputs = $('input[name=upload],input[name=pan]');
    $inputs.on('input change', function () {
      // Set the required property of the other input to false if this input is not empty.
      $inputs.not(this).prop('required', !$(this).val().length);
      //console.log($(this).val().length)
    });
  });




  $('.from-screen .go-back').click(function () {
    $(this).parents('.from-screen').removeClass('active');
    $(this).parents('.from-screen').prev().addClass('active');
    return false;
  });

  $('.from-screen .go-back-btn').click(function () {
    $(this).parents('.from-screen').removeClass('active');
    $(this).parents('.from-screen').prev().prev().addClass('active');
    return false;
  });


  $("#updoc").validate({
    rules: {
      pan: {
        pannumber: true
      },

    },
    messages: {
      pan: {
        required: "Kindly provide a valid Permanent Account Number (PAN)",
        minlength: "Kindly provide a valid Permanent Account Number (PAN)"
      },
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass("is-invalid").removeClass("is-valid");
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).addClass("is-valid").removeClass("is-invalid");
    },
    submitHandler: function () {
      $('#pwait').modal('show');
      setTimeout(function () {
        $('#pwait').modal('hide');
        $('.from-screen').removeClass('active');
        $('.from-screen.screen-2').addClass('active');
      }, 1000);
      return false;
    }
  });
  //Upload Documents screen 1 end

  //Upload Document screen 2
  $("#updoc1").validate({
    rules: {
      pan1: {
        pannumber: true
      },
      aadhar:{
        required: true,
        aadharNumber: true
      },
      otpAadhar:{
        required: true,
        otpnumber: true
      }
    },
    messages: {
      pan1: {
        required: "Kindly provide a valid Permanent Account Number (PAN)",
        minlength: "Kindly provide a valid Permanent Account Number (PAN)"
      },
      aadhar:{
        required: "Kindly provide a valid aadhar Number",
      },
      otpAadhar:{
        required: "Kindly provide a valid OTP Number",
      }
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass("is-invalid").removeClass("is-valid");
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).addClass("is-valid").removeClass("is-invalid");
    },
    submitHandler: function () {
      $('#pidpoup').modal('show');
      return false;
    }
  });

  $('.verifyAadhar').click(function(){
    $(this).parent().hide().next().removeClass('hide');
  })

  $('.edit-details').click(function () {
    $('.from-screen.screen-2').removeClass('active');
    $('.from-screen.screen-3').addClass('active');
    $('html, body').animate({
      'scrollTop': 0
    }, 800);
  });

  $("#partner").validate({
    rules: {
      partnerId: {
        required: true,
      },

    },
    messages: {
      partnerId: {
        required: "Kindly provide a valid Partner ID",
        minlength: "Kindly provide a valid Partner ID"
      },
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass("is-invalid").removeClass("is-valid");
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).addClass("is-valid").removeClass("is-invalid");
    },
    submitHandler: function () {
      $('#pidpoup').modal('hide');
      $('.from-screen.screen-2').removeClass('active');
      $('.from-screen.screen-3').addClass('active');
      $('html, body').animate({
        'scrollTop': 0
      }, 800);

    }
  });


  $(document).on('click', '.trgr1,.trgr2,.trgr3', function () {
    var state = $(this).attr('data-state');
    if (state == 'true') {
      $('.tog_cont1,.tog_cont2,.tog_cont3').hide();
      $('.trgr1,.trgr2,.trgr3').removeClass('act');
      $('.trgr1,.trgr2,.trgr3').attr('data-state', 'false');
      $(this).toggleClass('act').next().slideToggle();
    } else {

    }
  });



  // Personal Details form
  $('.tog_cont1').hide();
  $('.trgr1:eq(0)').addClass('act').next().show();

  $("#personalDetails").validate({
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
    }
  });

  //accordian


  var add1, add2, add3, add4, add5, add6;


  //Residential Details
  $("#residentialDetails").validate({
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


      add1 = $('#building').val()
      add2 = $('#area').val()
      add3 = $('#landmark').val()
      add4 = $('#pincode').val()
      add5 = $('#city1').val()
      add6 = $('#state1').val()

    }
  });

  //Residential Details end

  //Permanent Details


  $('#ersidence').click(function () {
    if ($("#ersidence").is(":checked")) {
      $('#buildingPermanent').val(add1);
      $('#areaPermanent').val(add2);
      $('#landmarkPermanent').val(add3);
      $('#pincodePermanent').val(add4);
      $('#cityPermanent').val(add5);
      $('#statePermanent').val(add6);
      $('#cityPermanent,#statePermanent').addClass('selected');
    } else {
      $('#buildingPermanent').val('');
      $('#areaPermanent').val('');
      $('#landmarkPermanent').val('');
      $('#pincodePermanent').val('');
      $('#cityPermanent').val('');
      $('#statePermanent').val('');
      $('#cityPermanent,#statePermanent').removeClass('selected');
    }

  })

  $("#permanentDetails").validate({
    rules: {
      buildingPermanent: {
        required: true,
      },
      areaPermanent: {
        required: true,
      },
      landmarkPermanent: {
        required: true,
      },
      pincodePermanent: {
        required: true,
        pincodenumber: true,
      },
      cityPermanent: {
        required: true,
      },
      statePermanent: {
        required: true,
      },
    },
    messages: {
      buildingPermanent: {
        required: "Kindly provide a valid Flat No., Building Name",
        minlength: "Kindly provide a valid Flat No., Building Name",
      },
      areaPermanent: {
        required: "Kindly provide a valid Road Name, Area, Colony",
        minlength: "Kindly provide a valid Road Name, Area, Colony"
      },
      landmarkPermanent: {
        required: "Kindly provide a valid landmark",
        minlength: "Kindly provide a valid landmark",
      },
      pincodePermanent: {
        required: "Kindly provide a valid pincode",
        minlength: "Kindly provide a valid pincode",
      },
      cityPermanent: {
        required: "Kindly provide a valid city",
        minlength: "Kindly provide a valid city",
      },
      statePermanent: {
        required: "Kindly provide a valid state",
        minlength: "Kindly provide a valid state",
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
      $('.trgr1:eq(2)').removeClass('act');
      $('.trgr1:eq(3)').addClass('act').next().show();
      $('.trgr1:eq(0)').attr("data-state", "true");
      $('.trgr1:eq(1)').attr("data-state", "true");
      $('.trgr1:eq(2)').attr("data-state", "true");
    }
  });
  //Permanent Details end

  //Employment Details
  $("#EmploymentDetails").validate({
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
      industry: {
        required: true,
      },
      organisation: {
        required: false,
      },
      years: {
        required: false,
      },
      months: {
        required: false,
      },
      mos: {
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
      annual: {
        required: "Kindly provide a valid Annual Gross Income",
        minlength: "Kindly provide a valid Annual Gross Income"
      },
      company: {
        required: "Kindly provide a valid Company Name",
        minlength: "Kindly provide a valid Company Name",
      },
      industry: {
        required: "Kindly provide a valid Industry",
        minlength: "Kindly provide a valid Industry",
      },
      organisation: {
        required: "Kindly provide a valid Organisation",
        minlength: "Kindly provide a valid Organisation",
      },
      years: {
        required: "Kindly provide a valid Years",
        minlength: "Kindly provide a valid Years",
      },
      months: {
        required: "Kindly provide a valid Months",
        minlength: "Kindly provide a valid Months",
      },
      mos: {
        required: "Kindly provide a valid Mode of Salary",
        minlength: "Kindly provide a valid Mode of Salary",
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
    submitHandler: function () {      
      $('.trgr1:eq(0)').attr("data-state", "true");
      $('.trgr1:eq(1)').attr("data-state", "true");
      $('.trgr1:eq(2)').attr("data-state", "true");
      $('#verifyEmail').modal('show');
      // $('html, body').animate({
      //   'scrollTop': 0
      // }, 800);

    }
  });
  //Permanent Details end

  //verify Official E-mail
  $('.voe').click(function () {
    $('#verifyEmail').modal('hide');
    $('.from-screen.screen-3').removeClass('active');
    $('.from-screen.screen-4').addClass('active');
    $('html, body').animate({
      'scrollTop': 0
    }, 800);
  })
  //verify Official E-mail end

  $('.loan-amount').click(function () {
    $('.from-screen.screen-4').removeClass('active');
    $('.from-screen.screen-5').addClass('active');

  })



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
  // Comma function end


  var handle1 = $("#custom-handle-lakhs1"),
    max;
  $("#slider-investAmount1").slider({
    range: "min",
    value: 1200000,
    step: 10000,
    min: 20000,
    max: 4000000,
    create: function () {
      max = $("#slider-investAmount1").slider("option", "value") / 100000;
      handle1.text(max.toFixed(2) + 'L');
    },
    slide: function (event, ui) {
      $("#investAmount1").val(commaNumber(ui.value));
      handle1.text((ui.value / 100000).toFixed(2) + 'L');
    }
  });

  $("#investAmount1").val(commaNumber($("#slider-investAmount1").slider("value")));

  $("#investAmount1").on("keyup", function (e) {
    commaNumber($("#slider-investAmount1").slider("value", this.value));
  });

  $('#investAmount1').on('focus', function (e) {
    $(this).val($(this).val().replace(/,/g, ''));
  });
  $('#investAmount1').on('keyup keydown', function (e) {

    if ($(this).val() > 4000000 &&
      e.keyCode !== 46 &&
      e.keyCode !== 8
    ) {
      e.preventDefault();
      $(this).val(4000000);
    }

    max = $(this).val() / 100000;
    handle1.text(max.toFixed(2) + 'L');

  });

  $("#investAmount1").on("blur", function (e) {

    max = $(this).val() / 100000;
    handle.text(max.toFixed(2) + 'L');


    var valInput = this.value;
    valInput = valInput.replace(/,/g, "");
    $(this).val(commaNumber(valInput));
    if (valInput < 99999) {
      e.preventDefault();
      $(this).val(100000);
      max = $(this).val() / 100000;
      handle.text(max.toFixed(2) + 'L');
      $(this).val(commaNumber(100000));
    }
  });


  // Tenure Month
  var handleMth1 = $("#custom-handle-mnt"),
    max2mth1;
  $("#slider-tenureMonth1").slider({
    range: "min",
    value: 7,
    min: 1,
    step: 1,
    max: 60,
    create: function () {
      max2mth1 = $("#slider-tenureMonth1").slider("option", "value");
      handleMth1.text(max2mth1 + 'M');
    },
    slide: function (event, ui) {
      $("#tenureMonth1").val(ui.value);
      handleMth1.text(ui.value + 'M');
    }
  });

  $("#tenureMonth1").val($("#slider-tenureMonth1").slider("value"));

  $("#tenureMonth1").on("keyup", function (e) {
    $("#slider-tenureMonth1").slider("value", this.value);
  });
  $("#tenureMonth1").click(function () {
    $(this).select();
  });

  $('#tenureMonth1').on('keyup keydown', function (e) {
    max2mth1 = $("#slider-tenureMonth1").slider("option", "value");
    handleMth1.text(max2mth1 + 'M');
  });


  $("#tenureMonth1").on("keyup keydown", function (e) {
    max2mth1 = $("#slider-tenureMonth1").slider("option", "value");
    handleMth1.text(max2mth1 + 'M');
    if ($(this).val() > 60 &&
      e.keyCode !== 46 &&
      e.keyCode !== 8
    ) {
      e.preventDefault();
      $(this).val(60);
    }

    var valInput = this.value;
    if (valInput < 1) {
      e.preventDefault();
      $(this).val(1);
      max2mth1 = $(this).val();
      handleMth1.text(max2mth1 + 'M');
    }
  });
  /* End */






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

   // otp timer 
   if ($('#timer1').length) {
    let timerOn = true;

    function timer(remaining) {
      var m = Math.floor(remaining / 60);
      var s = remaining % 60;
      m = m < 10 ? '0' + m : m;
      s = s < 10 ? '0' + s : s;
      document.getElementById('timer1').innerHTML = m + ':' + s;
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
  $("#otpVerification").validate({
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
      $('.from-screen.screen-5').removeClass('active');
      $('.from-screen.screen-6').addClass('active');
      setTimeout(function () {
        $('#approve').modal('show');
      }, 1000);
    }
  });
  //OTP Verification end


  $('.loan-screen').click(function () {
    $('.from-screen.screen-6').removeClass('active');
    $('.from-screen.screen-7').addClass('active');
    moveTab('screen-7');
    //$('html, body').animate({'scrollTop':0},800);
  });


  //Loan Details
  $("#loanDetails1").validate({
    rules: {
      salary: {
        required: true,
        salamt: true,
      },
    },
    messages: {
      salary: {
        required: "Kindly provide a valid Salary",
        minlength: "Kindly provide a valid Salary"
      },
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass("is-invalid").removeClass("is-valid");
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).addClass("is-valid").removeClass("is-invalid");
    },
    submitHandler: function () {
      $('.from-screen.screen-7').removeClass('active');
      $('.from-screen.screen-8').addClass('active');
    }
  });
  //Loan Details end

  //Loan Details
  $("#loanDetails1n").validate({
    rules: {
      salary: {
        required: true,
        salamt: true,
      },
    },
    messages: {
      salary: {
        required: "Kindly provide a valid Salary",
        minlength: "Kindly provide a valid Salary"
      },
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass("is-invalid").removeClass("is-valid");
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).addClass("is-valid").removeClass("is-invalid");
    },
    submitHandler: function () {
      $('.from-screen.screen-7').removeClass('active');
      $('.from-screen.screen-7-1').addClass('active');
    }
  });
  //Loan Details end

  //OKYC form
  $("#okyc").validate({
    rules: {
      auth: {
        required: true,
      },
    },
    messages: {
      auth: {
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
      $('#kycinfo').modal('show');
    }
  });
  //OKYC form end

  
  $("#uploadFS").click(function () {
    $('.from-screen.screen-7-1').removeClass('active');
    $('.from-screen.screen-8').addClass('active');
  })

  $('.upload-box a.upload-stat').click(function () {
    $('.from-screen.screen-8').removeClass('active');
    $('.from-screen.screen-8-2').addClass('active');
  })
  $("#uploadDoc").click(function () {
    $('.from-screen.screen-8-2').removeClass('active');
    $('.from-screen.screen-8-3').addClass('active');
  })

  $('.successfulOk1').click(function () {
    $('.from-screen.screen-8-3').removeClass('active');
    $('.from-screen.screen-9').addClass('active');
  })

  //password show hide
  $(".toggle-password").click(function () {
    $(this).toggleClass("active");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });
  //password show hide end


  $("#netBanking").validate({
    rules: {
      upload3: {
        required: true,
      },
      bankState: {
        required: true,
      },
    },
    messages: {
      upload3: {
        required: "Kindly provide a  Your bank statement ",
        minlength: "Kindly provide a  Your bank statement "
      },
      bankState: {
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
      $('#successful').modal('show');
    }
  });

  $("#netBanking1").validate({
    rules: {
      upload3: {
        required: true,
      },
      bankState: {
        required: true,
      },
    },
    messages: {
      upload3: {
        required: "Kindly provide a  Your bank statement ",
        minlength: "Kindly provide a  Your bank statement "
      },
      bankState: {
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
      $('#successful').modal('show');
    }
  });


  //verify Official E-mail
  $('.successfulOk').click(function () {
    $('.from-screen.screen-8').removeClass('active');
    $('.from-screen.screen-9').addClass('active');
  })
  //verify Official E-mail end

  var handle = $("#custom-handle-lakhs2"),
    max;
  $("#slider-investAmount2").slider({
    range: "min",
    value: 300000,
    step: 10000,
    min: 100000,
    max: 1300000,
    create: function () {
      max = $("#slider-investAmount2").slider("option", "value") / 100000;
      handle.text(max.toFixed(2) + 'L');
    },
    slide: function (event, ui) {
      $("#investAmount2").val(commaNumber(ui.value));
      handle.text((ui.value / 100000).toFixed(2) + 'L');
    }
  });

  $("#investAmount2").val(commaNumber($("#slider-investAmount2").slider("value")));

  $("#investAmount2").on("keyup", function (e) {
    commaNumber($("#slider-investAmount2").slider("value", this.value));
  });

  $('#investAmount2').on('focus', function (e) {
    $(this).val($(this).val().replace(/,/g, ''));
  });
  $('#investAmount2').on('keyup keydown', function (e) {

    if ($(this).val() > 1300000 &&
      e.keyCode !== 46 &&
      e.keyCode !== 8
    ) {
      e.preventDefault();
      $(this).val(1300000);
    }

    max = $(this).val() / 100000;
    handle.text(max.toFixed(2) + 'L');

  });

  $("#investAmount2").on("blur", function (e) {

    max = $(this).val() / 100000;
    handle.text(max.toFixed(2) + 'L');


    var valInput = this.value;
    valInput = valInput.replace(/,/g, "");
    $(this).val(commaNumber(valInput));
    if (valInput < 99999) {
      e.preventDefault();
      $(this).val(100000);
      max = $(this).val() / 100000;
      handle.text(max.toFixed(2) + 'L');
      $(this).val(commaNumber(100000));
    }
  });






  // Tenure Month
  var handleMth = $("#custom-handle-mnt2"),
    max2mth;
  $("#slider-tenureMonth2").slider({
    range: "min",
    value: 36,
    min: 1,
    step: 1,
    max: 60,
    create: function () {
      max2mth = $("#slider-tenureMonth2").slider("option", "value");
      handleMth.text(max2mth + 'M');
    },
    slide: function (event, ui) {
      $("#tenureMonth2").val(ui.value);
      handleMth.text(ui.value + 'M');
    }
  });

  $("#tenureMonth2").val($("#slider-tenureMonth2").slider("value"));

  $("#tenureMonth2").on("keyup", function (e) {
    $("#slider-tenureMonth2").slider("value", this.value);
  });
  $("#tenureMonth2").click(function () {
    $(this).select();
  });

  $('#tenureMonth2').on('keyup keydown', function (e) {
    max2mth = $("#slider-tenureMonth2").slider("option", "value");
    handleMth.text(max2mth + 'M');
  });


  $("#tenureMonth2").on("blur", function (e) {
    max2mth = $("#slider-tenureMonth2").slider("option", "value");
    handleMth.text(max2mth + 'M');
    if ($(this).val() > 60 &&
      e.keyCode !== 46 &&
      e.keyCode !== 8
    ) {
      e.preventDefault();
      $(this).val(60);
    }

    var valInput = this.value;
    if (valInput < 1) {
      e.preventDefault();
      $(this).val(1);
      max2mth = $(this).val();
      handleMth.text(max2mth + 'M');
    }
  });
  /* End */


  $('.cong-screen').click(function () {
    $('.from-screen.screen-9').removeClass('active');
    $('.from-screen.screen-10').addClass('active');
    moveTab('screen-10');
  });


  //Additional Details
  $('.tog_cont2').hide();
  $('.trgr2:eq(0)').addClass('act').next().show();

  $("#familyDetails").validate({
    rules: {
      fullname1: {
        required: true,
        fullName: true,
      },
      fs: {
        required: true,
      },
      fullname2: {
        required: true,
        fullName: true,
      },
      category: {
        required: true,
      },
    },
    messages: {
      fullname1: {
        required: "Kindly provide a valid full name",
        minlength: "Kindly provide a valid full name"
      },
      fs: {
        required: "",
        minlength: ""
      },
      fullname2: {
        required: "Kindly provide a valid full name",
        minlength: "Kindly provide a valid full name"
      },
      category: {
        required: "Kindly provide a select valid category",
        minlength: "Kindly provide a select valid category"
      },
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass("is-invalid").removeClass("is-valid");
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).addClass("is-valid").removeClass("is-invalid");
    },
    submitHandler: function () {
      $('.tog_cont2').hide();
      $('.trgr2:eq(0)').removeClass('act');
      $('.trgr2:eq(1)').addClass('act').next().show();
      $('.trgr2:eq(0)').attr("data-state", "true");
      $('.screen-10 .progress-list ul li .top').width('35%');
    }
  });

  //employment details
  $("#employmentDetails").validate({
    rules: {
      department: {
        required: false,
      },
      designation: {
        required: false,
      },
    },
    messages: {
      department: {
        required: "Kindly provide a select valid department",
        minlength: "Kindly provide a select valid department"
      },
      designation: {
        required: "Kindly provide a select valid designation",
        minlength: "Kindly provide a select valid designation"
      },
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass("is-invalid").removeClass("is-valid");
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).addClass("is-valid").removeClass("is-invalid");
    },
    submitHandler: function () {
      $('.tog_cont2').hide();
      $('.trgr2:eq(1)').removeClass('act');
      $('.trgr2:eq(2)').addClass('act').next().show();
      $('.trgr2:eq(0)').attr("data-state", "true");
      $('.trgr2:eq(1)').attr("data-state", "true");
      $('.screen-10 .progress-list ul li .top').width('75%');
    }
  });
  //enokitnebt detauks end

  //Office Address Details
  $("#officeDetails").validate({
    rules: {
      officeBuilding: {
        required: true,
      },
      officeArea: {
        required: true,
      },
      officeLandmark: {
        required: true,
      },
      officePincode: {
        required: true,
        pincodenumber: true,
      },
      officeCity1: {
        required: true,
      },
      officeState1: {
        required: true,
      },
    },
    messages: {
      officeBuilding: {
        required: "Kindly provide a valid Flat No., Building Name",
        minlength: "Kindly provide a valid Flat No., Building Name",
      },
      officeArea: {
        required: "Kindly provide a valid Road Name, Area, Colony",
        minlength: "Kindly provide a valid Road Name, Area, Colony"
      },
      officeLandmark: {
        required: "Kindly provide a valid landmark",
        minlength: "Kindly provide a valid landmark",
      },
      officePincode: {
        required: "Kindly provide a valid pincode",
        minlength: "Kindly provide a valid pincode",
      },
      officeCity1: {
        required: "Kindly provide a valid city",
        minlength: "Kindly provide a valid city",
      },
      officeState1: {
        required: "Kindly provide a valid state",
        minlength: "Kindly provide a valid state",
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
      $('.trgr1:eq(1)').removeClass('act');
      $('.trgr1:eq(2)').addClass('act').next().show();
      $('.trgr1:eq(0)').attr("data-state", "true");
      $('.trgr1:eq(1)').attr("data-state", "true");
      $('.from-screen.screen-10').removeClass('active');
      $('.from-screen.screen-11').addClass('active');
      $('html, body').animate({
        'scrollTop': 0
      }, 800);
      moveTab('screen-11');
      $('.screen-10 .progress-list ul li .top').width('100%');
      $('.screen-11 .progress-list ul li .top').width('0%');
    }
  });
  $("#officeDetails1").validate({
    rules: {
      officeBuilding: {
        required: true,
      },
      officeArea: {
        required: true,
      },
      officeLandmark: {
        required: true,
      },
      officePincode: {
        required: true,
        pincodenumber: true,
      },
      officeCity1: {
        required: true,
      },
      officeState1: {
        required: true,
      },
    },
    messages: {
      officeBuilding: {
        required: "Kindly provide a valid Flat No., Building Name",
        minlength: "Kindly provide a valid Flat No., Building Name",
      },
      officeArea: {
        required: "Kindly provide a valid Road Name, Area, Colony",
        minlength: "Kindly provide a valid Road Name, Area, Colony"
      },
      officeLandmark: {
        required: "Kindly provide a valid landmark",
        minlength: "Kindly provide a valid landmark",
      },
      officePincode: {
        required: "Kindly provide a valid pincode",
        minlength: "Kindly provide a valid pincode",
      },
      officeCity1: {
        required: "Kindly provide a valid city",
        minlength: "Kindly provide a valid city",
      },
      officeState1: {
        required: "Kindly provide a valid state",
        minlength: "Kindly provide a valid state",
      },
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass("is-invalid").removeClass("is-valid");
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).addClass("is-valid").removeClass("is-invalid");
    },
    submitHandler: function () {
      window.location.replace("personal-loan-step2.html");
    }
  });
  //Office Address Details end

  //Documents Upload
  $('.tog_cont3').hide();
  $('.trgr3:eq(0)').addClass('act').next().show();

  //Identity Proof
  $("#identity").validate({
    rules: {
      identityProof: {
        required: true,
      },
      upload4: {
        required: true,
      },
    },
    messages: {
      identityProof: {
        required: "Kindly provide a select Identity Proof",
        minlength: "Kindly provide a select Identity Proof"
      },
      upload4: {
        required: "Kindly provide a Identity Proof",
        minlength: "Kindly provide a Identity Proof"
      },
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass("is-invalid").removeClass("is-valid");
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).addClass("is-valid").removeClass("is-invalid");
    },
    submitHandler: function () {
      $('.tog_cont3').hide();
      $('.trgr3:eq(0)').removeClass('act');
      $('.trgr3:eq(1)').addClass('act').next().show();
      $('.trgr3:eq(0)').attr("data-state", "true");
      $('.screen-11 .progress-list ul li .top').width('25%');
    }
  });
  //Identity Proof end

  //Identity Proof
  $("#addProof1").validate({
    rules: {
      addressProof1: {
        required: true,
      },
      upload5: {
        required: true,
      },
      upload6: {
        required: true,
      },
    },
    messages: {
      identityProof: {
        required: "Kindly provide a select Address Proof",
        minlength: "Kindly provide a select Address Proof"
      },
      upload5: {
        required: "Kindly provide a Identity Proof",
        minlength: "Kindly provide a Identity Proof"
      },
      upload6: {
        required: "Kindly provide a Identity Proof",
        minlength: "Kindly provide a Identity Proof"
      },
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass("is-invalid").removeClass("is-valid");
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).addClass("is-valid").removeClass("is-invalid");
    },
    submitHandler: function () {
      $('.tog_cont3').hide();
      $('.trgr3:eq(0)').removeClass('act');
      $('.trgr3:eq(1)').removeClass('act');
      $('.trgr3:eq(2)').addClass('act').next().show();
      $('.trgr3:eq(0)').attr("data-state", "true");
      $('.trgr3:eq(1)').attr("data-state", "true");
      $('.screen-11 .progress-list ul li .top').width('50%');
    }
  });
  //Identity Proof end

  //Income Proof
  $("#income").validate({
    rules: {
      bankName: {
        required: true,
      },
      upload7: {
        required: true,
      },
      password1: {
        required: true,
      },
    },
    messages: {
      identityProof: {
        required: "Kindly provide a select Bank",
        minlength: "Kindly provide a select Bank"
      },
      upload7: {
        required: "Kindly provide a Bank statement",
        minlength: "Kindly provide a Bank statement"
      },
      password1: {
        required: "Kindly provide a passwrod shared by the bank",
        minlength: "Kindly provide a passwrod shared by the bank"
      },
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass("is-invalid").removeClass("is-valid");
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).addClass("is-valid").removeClass("is-invalid");
    },
    submitHandler: function () {
      $('.tog_cont3').hide();
      $('.trgr3:eq(0)').removeClass('act');
      $('.trgr3:eq(1)').removeClass('act');
      $('.trgr3:eq(2)').removeClass('act');
      $('.trgr3:eq(3)').addClass('act').next().show();
      $('.trgr3:eq(0)').attr("data-state", "true");
      $('.trgr3:eq(1)').attr("data-state", "true");
      $('.trgr3:eq(2)').attr("data-state", "true");
      $('.screen-11 .progress-list ul li .top').width('90%');
    }
  });
  //Income Proof end


  //Employment Proof
  $("#empProof").validate({
    rules: {
      upload8: {
        required: true,
      },
    },
    messages: {
      upload8: {
        required: "Kindly provide a Employment Proof",
        minlength: "Kindly provide a Employment Proof"
      },
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass("is-invalid").removeClass("is-valid");
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).addClass("is-valid").removeClass("is-invalid");
    },
    submitHandler: function () {
      $('.tog_cont3').hide();
      $('.trgr3:eq(0)').attr("data-state", "true");
      $('.trgr3:eq(1)').attr("data-state", "true");
      $('.trgr3:eq(2)').attr("data-state", "true");
      $('.trgr3:eq(3)').attr("data-state", "true");
      window.location.replace("personal-loan-application.html");
      $('html, body').animate({
        'scrollTop': 0
      }, 800);
      $('.screen-11 .progress-list ul li .top').width('100%');
    }
  });
  //Employment Proof end

  $("#form21").validate({
    rules: {
      mobile: {
        required: true,
        mnumber: true
      },
      otp: {
        required: true,
        otpnumber: true
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
      otp: {
        required: "Kindly provide a valid OTP number",
        minlength: "Kindly provide a valid OTP number"
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
      $('#sorry').modal('show');
    }
  });

  $("#trackLoan").validate({
    rules: {
      appNumber: {
        required: true,
        applicationNumber: true
      },
      mobile: {
        required: true,
        mnumber: true
      },
      captcha: {
        required: true,
      },
    },
    messages: {
      appNumber: {
        required: "Kindly provide a valid Loan Application Number",
        minlength: "Kindly provide a valid Loan Application Number"
      },
      mobile: {
        required: "Kindly provide a valid mobile number",
        minlength: "Kindly provide a valid mobile number"
      },
      captcha: {
        required: "Kindly provide a valid a Captcha",
        minlength: "Kindly provide a valid a Captcha"
      },
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass("is-invalid").removeClass("is-valid");
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).addClass("is-valid").removeClass("is-invalid");
    },
    submitHandler: function () {
      $('#sorry').modal('show');
    }
  });
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
    console.log(tstW);
  });
  $('.' + formname + ' .progress-list').animate({
    scrollLeft: tstW
  }, 200);
}
