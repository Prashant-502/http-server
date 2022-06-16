 /* Business Show hide Div */
 $("input[name=BusinessSegment]:radio, input[name=BusinessSegmentMob]:radio").click(function() {
     if ($('input[name=BusinessSegment]:checked, input[name=BusinessSegmentMob]:checked')) {
         $('.impExp-bx').show();
         $('.impExp-bx .list-item.op2').hide();
         $('.impExp-bx .' + $(this).val()).show();

         //  if ($(this).val() == "import Export") {
         //     $('.impExp-bx').show();
         //  }
     } else {
         $('.impExp-bx').hide();
     }
 });

 if ($(window).width() > 991) {
     $(window).scroll(function() {
         var importScroll = $('.grey-bg3.product-container .col-lg-9 .row').height() - $(window).height() + $('.impExp-bx').height() * 2 + $('header').height();
         if ($(this).scrollTop() > importScroll) {
             $('.impExp-bx').addClass('fit');
         } else {
             $('.impExp-bx').removeClass('fit');
         }
     });
 }

 /* end */

 /* Add to Compare */
 var prod_count2 = 0,
     proID2;
 var countSt = 0;
 $('input[name=addtoCheckBx]').on('click', function() {
     var isAdded2 = 0,
         title2;
     isAdded2 = $(this).attr("data-val");
     title2 = $(this).attr("data-title");
     proID2 = $(this).attr("data-id");







     if ($(this).prop('checked') == true) {
         console.log(countSt, 'ander');
         if (countSt < 3) {
             $(".cmp-list ul").prepend(
                 '<li id="' +
                 proID2 +
                 '"> <span>' +
                 title2 +
                 '</span><a href="javascript:;" class="remove-item"><img src="images/svg/close-red.svg" alt=""></a></li>'

             );
             countSt = countSt + 1;
         } else {
             $(this).parents(".card.op2")
                 .append(
                     '<div class="notif-bx"><span class="close-btn"></span><span>You can only compare 3 products at one time. Kindly remove one product to add this to compare.</span></div>'
                 );

             return false;
         }


     } else {
         $('.cmp-list ul li' + '#' + proID2).remove();
         countSt = countSt - 1;
     }

     if (countSt > 0) {
         $('.compare-bxNew').show();
     } else {
         $('.compare-bxNew').hide();
     }

     console.log(countSt);
     $('.compare-bxNew span.compare-count').text(countSt);

 });


 $(document).on("click", ".cmp-list ul li a.remove-item", function() {
     $(this).parent().remove();
     var proID2 = $(this).parent().attr("id");
     $("[data-id=" + proID2 + "]").click();
 });

 /* End */

 $(function() {
     $('.bankOfferList').owlCarousel({
         nav: false,
         dots: false,
         lazyLoad: true,
         responsiveClass: true,
         margin: 32,
         responsive: {
             0: {
                 items: 2,
                 center: true,
                 loop: true
             },
             600: {
                 items: 3
             },
             1000: {
                 items: 4
             }
         }
     });
 });
 //Filter Accordian
 $('.filter_trgr').on('click', function() {
     if ($(this).next().is(':hidden')) {
         $(this).addClass('act').next().slideDown(400);
     } else {
         $(this).next().slideUp(400, function() {
             $(this).prev().removeClass('act');
         });
     }
 });

 // Filter BTN for mobile
 $('.fixed-top a').on('click', function() {
     $('.filterBx-mob-fixTop').slideDown();
     $('body').addClass('overflow');
 });

 $('button[type=reset].close-btn').click(function() {
     $('.impExp-bx').hide();
 })

 $('.filter-top a, .filter-btm a.apply-btn').on('click', function() {
     $('.filterBx-mob-fixTop').slideUp();
     $('body').removeClass('overflow');
 })
