$(document).ready(function () {
  
 //firstname
 $.validator.addMethod("sosid", function (value, element) {
  return this.optional(element) || value == value.match(/^[a-zA-Z0-9][a-zA-Z0-9/^\S*]*$/);
}, "Kindly provide a valid Your social media ID");
//firstname end

 
  //firstname
 $.validator.addMethod("firstName", function (value, element) {
  return this.optional(element) || value == value.match(/^[a-zA-Z][a-zA-Z\s']*$/);
}, "Kindly provide a valid First Name");
//firstname end

//lasttname
$.validator.addMethod("lastName", function (value, element) {
  return this.optional(element) || value == value.match(/^[a-zA-Z][a-zA-Z\s']*$/);
}, "Kindly provide a valid Last Name");
//lasttname end

//mobile number
$.validator.addMethod("mnumber", function (value, element) {
  return this.optional(element) || value == value.match(/^[789]\d{9}$/);
}, "Kindly provide a valid mobile number");
//mobile number end

//mobile number
$.validator.addMethod("mobileEmail", function (value, element) {
  return this.optional(element) || value == value.match(/^(?:[6789]\d{9}|\w[a-z0-9._%+-]+@\w+\.\w{2,3})$/);
}, "Kindly provide a valid Mobile number or Email ID");
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


  //otp
  $.validator.addMethod("otpnumber", function (value, element) {
    return this.optional(element) || value == value.match(/^[0-9]{6}$/);
  }, "Kindly provide a valid OTP");
  //pincode end

  //pincode
  $.validator.addMethod("pincodenumber", function (value, element) {
    return this.optional(element) || value == value.match(/^[0-9]{6}$/);
  }, "Kindly provide a valid pincode");
  //pincode end


  $('#address1, #address2').click(function() {
    $('.address-box input,.address-box select').prop("disabled",true);
  })

  $('#address3').click(function() {
    $('.address-box input,.address-box select').prop("disabled",false);
  })

  


  //dndForm
  $("#dndForm").validate({
    rules: {
      mobile: {
        required: true,
        mnumber:true,
      },
    
      
      otp: {
        required: true,
        otpnumber:true,
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
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass("is-invalid").removeClass("is-valid");
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).addClass("is-valid").removeClass("is-invalid");
    },
    submitHandler: function () {
      if ($('.confirm-box').is(":visible")) {
        $('#dndpopup').modal('show');
      } else {
        $('.hide-verify').hide();
        $('.confirm-box').removeClass('hide');
      }
    }
  });


  $("#dndForm1").validate({
    ignore: ".ignore",
    rules: {
      mobileNumEmail: {
        required: true,
        mobileEmail:true,
      },
      otp: {
        required: true,
        otpnumber:true,
      },
    },
    messages: {
      mobileNumEmail: {
        required: "Kindly provide a valid Mobile number or Email ID",
        minlength: "Kindly provide a valid Mobile number or Email ID"
      },
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
      if ($('.confirm-box').is(":visible")) {
        $('.dnd-screen1').addClass('hide');
        $('.dnd-screen2').removeClass('hide');
      } else {
        $('#otp').removeClass('ignore')
        $('.hide-verify').hide();
        $('.confirm-box').removeClass('hide');  

      }
    }
  });
  //$('#dndForm1').validate().settings.ignore = ".ignore";
  //$('#dndForm1').validate().settings.ignore = ":disabled,:hidden";


  $("#dndForm2").validate({
    rules: {
      mobileNumEmail1: {
        required: true,
        mobileEmail:true,
      },
      
      mobile1: {
        required: true,
        mnumber:true,
      },
    
      
      otp1: {
        required: true,
        otpnumber:true,
      },
    },
    messages: {
      mobileNumEmail1: {
        required: "Kindly provide a valid Mobile number or Email ID",
        minlength: "Kindly provide a valid Mobile number or Email ID"
      },
      mobile1: {
        required: "Kindly provide a valid mobile number",
        minlength: "Kindly provide a valid mobile number"
      },
      otp1: {
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
      if ($('.confirm-box').is(":visible")) {
        $('.dnd-screen1').addClass('hide');
        $('.dnd-screen2').removeClass('hide');
      } else {
        $('#otp1').removeClass('ignore');
        $('.hide-verify').hide();
        $('.confirm-box').removeClass('hide');
      }
    }
  });

  

  $("#yourself").validate({
    rules: {
      selectplatform: {
        required: true,
      },
    },
    messages: {
      selectplatform: {
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
      $('.dnd-screen2').addClass('hide');
      $('.dnd-screen3').removeClass('hide');
      $('.hide-tabs').addClass('hide');
    }
  });

  $("#yourself1").validate({
    rules: {
      selectplatform: {
        required: true,
      },
    },
    messages: {
      selectplatform: {
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
      $('.dnd-screen2').addClass('hide');
      $('.dnd-screen3').removeClass('hide');
      $('.hide-tabs').addClass('hide');
    }
  });
  





});

var form = $("#contact");
form.validate({
    errorPlacement: function errorPlacement(error, element) { element.before(error); },
    rules: {
        confirm: {
            equalTo: "#password"
        }
    }
});
form.children("div").steps({
    headerTag: "h3",
    bodyTag: "section",
    transitionEffect: "slideLeft",
    onStepChanging: function (event, currentIndex, newIndex)
    {
        form.validate().settings.ignore = ":disabled,:hidden";
        return form.valid();
    },
    onFinishing: function (event, currentIndex)
    {
        form.validate().settings.ignore = ":disabled";
        return form.valid();
    },
    onFinished: function (event, currentIndex)
    {
        alert("Submitted!");
    }
});