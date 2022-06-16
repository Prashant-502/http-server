$(document).ready(function () {
  
    $("#apf-form").validate({
        rules: {
            selState: {
            required: true
          },
          selCity: {
            required: true
          }
        },
        messages: {
            selState: {
            required: "Kindly provide a valid State"
          },
          selCity: {
            required: "Kindly provide a valid City"
          }
        },
        highlight: function (element, errorClass, validClass) {
          $(element).addClass("is-invalid").removeClass("is-valid");
        },
        unhighlight: function (element, errorClass, validClass) {
          $(element).addClass("is-valid").removeClass("is-invalid");
        },
        submitHandler: function () {
        //   $('.sa-banner').hide().next().show();
        //   $('html, body').stop().animate({
        //     scrollTop: 0
        //   }, 200);
        }
      });
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
    $("#selState,#selCity").autocomplete({ 
      source: availableTags,
      open: function(event, ui) {
          $(this).autocomplete("widget").css({
              "width": $(this).outerWidth()
          });
      }
    });
});