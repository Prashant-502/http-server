$(document).ready(function () {
    //fullname
    $.validator.addMethod(
        "fullName",
        function (value, element) {
            return (
                this.optional(element) || value == value.match(/^[a-zA-Z][a-zA-Z\s']*$/)
            );
        },
        "Kindly provide a valid name"
    );
    //fullname end
    //sal amount
    $.validator.addMethod(
        "salamt",
        function (value, element) {
            return this.optional(element) || value == value.match(/^[0-9,.]*$/);
        },
        "Kindly provide a valid Number"
    );
    //sal amount end

    $("#rar-step1").validate({
        rules: {
            name: {
                required: true,
                fullName: true
            },
            ucic: {
                required: true,
                salamt: true,
            },
            bankRel: {
                required: true,
            },
            eotype: {
                required: true,
            },
            natofbus: {
                required: true,
            },
            typeOfgc: {
                required: true,
            },
            natofche: {
                required: true,
            },
            typeOfSer: {
                required: true,
            },
            propType: {
                required: true,
            },
        },
        messages: {
            name: {
                required: "Kindly provide a valid Name",
            },
            ucic: {
                required: "Kindly provide a valid UCIC Number",
            },
            bankRel: {
                required: "Kindly provide a valid Bank Relationship",
            },
            eotype: {
                required: "Kindly provide a valid Entity/Ownership Type",
            },
            natofbus: {
                required: "Kindly provide a valid Nature Of Business",
            },
            typeOfgc: {
                required: "Kindly provide a valid Type of Goods or Commodities",
            },
            natofche: {
                required: "Kindly provide a valid Nature of Chemical",
            },
            typeOfSer: {
                required: "Kindly provide a valid Type of Services",
            },
            propType: {
                required: "Kindly provide a valid Property Type",
            },
        },
        highlight: function (element, errorClass, validClass) {
            $(element).addClass("is-invalid").removeClass("is-valid");
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).addClass("is-valid").removeClass("is-invalid");
        },
        submitHandler: function () {
            $("#rar-step1").parent().hide().next().show();
            $("html, body").stop().animate({
                    scrollTop: 0,
                },
                200
            );
        },
    });

    $("#rar-step2").validate({
        rules: {
            noEmp: {
                required: true,
                salamt: true
            },
            empBreak: {
                required: true,
            },
            creditPeriod: {
                required: true,
            },
            creditPerdays: {
                required: true,
            },
            turnOver: {
                required: true,
                salamt: true
            },
            mgoods: {
                required: true,
            }
        },
        messages: {
            noEmp: {
                required: "Kindly provide a valid Number of Empoyee",
            },
            empBreak: {
                required: "Kindly provide a valid Number",
            },
            creditPeriod: {
                required: "Kindly provide a valid Credit Period offered",
            },
            creditPerdays: {
                required: "Kindly provide a valid Credit Period Days",
            },
            turnOver: {
                required: "Kindly provide a valid Turn Over",
            },
            mgoods: {
                required: "Kindly provide a valid Ownership in movement of goods",
            }
        },
        highlight: function (element, errorClass, validClass) {
            $(element).addClass("is-invalid").removeClass("is-valid");
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).addClass("is-valid").removeClass("is-invalid");
        },
        submitHandler: function () {
            //$("#healthModal").modal("show");
        },
    });

    $("#natofbus").on("change", function () {
        //console.log( this.value );
        if (this.value == "1") {
            $(this).parents("li").next().slideDown();
            $(this).parents("li").next().next().next().slideUp();
            $('#movofgoods').removeClass('hide');
        } else {
            $(this).parents("li").next().next().next().slideDown();
            $(this).parents("li").next().slideUp();
            $(this).parents("li").next().next().slideUp();
            $('#movofgoods').addClass('hide');
        }
    });

    $("#typeOfgc").on("change", function () {
        //console.log( this.value );
        if (this.value == "chemicals") {
            $(this).parents("li").next().slideDown();
        } else {
            $(this).parents("li").next().slideUp();
        }
    });

    $("#creditPeriod").on("change", function () {
        //console.log( this.value );
        if (this.value == "yes") {
            $(this).parents("li").next().slideDown();
        } else {
            $(this).parents("li").next().slideUp();
        }
    });

});
