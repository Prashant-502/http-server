$(document).ready(function () {

    $(".animedh-list li").click(function () {
        $('.animedh-list li').removeClass('active');
        $(this).addClass('active');
        $('.animedh-rd-cnt').removeClass('active');
        $('.animedh-rd-cnt' + "#" + $(this).data('id')).addClass('active');
        //console.log($(this).data('id'));
    });

    //CSR page Modal for single item

    $(function () {
        var owlppt = $('.single-carousel-ppt');
        owlppt.owlCarousel({
            nav: true,
            navText: ['<span class="icon-Left" aria-label="Previous"></span>', '<span  class="icon-Right" aria-label="Next"></span>'],
            dots: false,
            margin: 10,
            responsiveClass: true,
            items: 1,
            loop: false,
            responsive: {
                0: {
                  nav: false,
                  dots:true
                },
                1000: {
                  nav: true
                }
              },
            onInitialized: counter, //When the plugin has initialized.
            onTranslated: counter //When the translation of the stage has finished.
        });

        function counter(event) {
            var element = event.target;         // DOM element, in this example .owl-carousel
            var items = event.item.count;     // Number of items
            var item = event.item.index + 1;     // Position of the current item

            // it loop is true then reset counter from 1
            if (item > items) {
                item = item - items
            }
            $('#counter-ppt').html(+item + " / " + items)
        }
    });


    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });



})