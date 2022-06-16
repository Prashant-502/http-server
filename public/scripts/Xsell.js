$(document).ready(function () {
  
 //employee
 $.validator.addMethod("empid", function (value, element) {
  return this.optional(element) || value == value.match(/^^[A-Za-z0-9_-]*$/);
}, "Kindly provide a valid Employee ID");
//employee end

//Branch ID"
$.validator.addMethod("branchcode", function (value, element) {
  return this.optional(element) || value == value.match(/^^[A-Za-z0-9_-]*$/);
}, "Kindly provide a valid Branch ID");
//Branch ID" end




  //twoWheeler
  $("#Xsell").validate({
    rules: {
      Employee: {
        required: true,
        empid:true,
      },
      branchId: {
        required: true,
        branchcode:true,
      },
      Product: {
        required: true,
      },
    },
    messages: {
      
      Employee: {
        required: "Kindly provide a valid Employee ID",
        minlength: "Kindly provide a valid Employee ID"
      },
      branchId: {
        required: "Kindly provide a valid Branch ID",
        minlength: "Kindly provide a valid Branch ID"
      },
      Product: {
        required: "Kindly select a Product",
        minlength: "Kindly select a Product"
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

});