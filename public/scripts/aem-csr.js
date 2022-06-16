var stroreAmount;

function getAmount() {
    console.log(stroreAmount)
}


$(document).ready(function() {
    //amount
    $.validator.addMethod(
        "amountptr",
        function(value, element) {
            return this.optional(element) || value == value.match(/^[0-9]*$/);
        },
        "Kindly provide a valid amount"
    );
    //amount end

    //otp
    $.validator.addMethod(
        "otpnumber",
        function(value, element) {
            return this.optional(element) || value == value.match(/^[0-9]{6}$/);
        },
        "Kindly provide a valid OTP"
    );
    //otp end

    //Last 4 Digits of your Credit card
    $.validator.addMethod(
        "cardL4d",
        function(value, element) {
            return this.optional(element) || value == value.match(/^[0-9]{4}$/);
        },
        "Kindly provide a valid Credit card no"
    );
    //pincode end



    $("#amountDonateForm").validate({
        rules: {
            amountDonate: {
                required: true,
                amountptr: true,
                minlength: '2',
                maxlength: '10'
            }
        },
        messages: {
            amountDonate: {
                required: "Kindly provide a valid amount",
            }
        },
        highlight: function(element, errorClass, validClass) {
            $(element).addClass("is-invalid").removeClass("is-valid");
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).addClass("is-valid").removeClass("is-invalid");
        },
        submitHandler: function(form) {
            //console.log($(form).find('input[name="amountDonate"]').val());
            // $(form).find('input[name="amountDonate"]').val(' ');
            // return false;
        }
    });


    //  for New CSR page

    $(".csr-owl-img").owlCarousel({
        nav: false,
        dots: true,
        lazyLoad: true,
        items: 1

    });

    $(".step-cnt").owlCarousel({
        nav: false,
        dots: false,
        lazyLoad: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                margin: -50,
                dots: true,
            },
            600: {
                items: 2,
                dots: true,
            },
            1000: {
                items: 3,
            },
        },
    });


    $(".partner-owl").owlCarousel({
        nav: true,
        dots: true,
        lazyLoad: true,
        navText: [
            '<img src="images/svg/arrow-left-circle.svg" alt="">',
            '<img src="images/svg/arrow-right-circle.svg" alt="">',
        ],
        items: 4,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 4,
            },
        },
    });

    $('.list-amount').on('click', 'li a', function() {
        stroreAmount = $(this).attr('data-amount');
        $(this).parents('.list-amount').children().children().removeClass('active');
        $(this).addClass('active');
    });

    $('.otherAmount').click(function() {
        //console.log('click');
        $(this).parents('.cnt').hide();
        $(this).parents('.quick-donate').children().children('.formMobile').show();
    });

    $('.quick-donate .close-cnt a').click(function() {
        $(this).parents('.quick-donate').children().children('.cnt').show();
        $(this).parents('.quick-donate').children().children('.formMobile').hide();
    });


});
