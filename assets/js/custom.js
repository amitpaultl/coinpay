!(function (n) {
    "use strict";

    // Preloader Start
    $(window).on('load',function () {
        $('#preloaderInner').fadeOut();
        $('#preloader')
            .delay(350)
            .fadeOut('slow');
        $('body')
            .delay(350)
    });
    // Preloader End

    /*---------------------------------
    Service Worker Register js
    -----------------------------------*/
    // $(window).on('load', function () {
    //     'use strict';
    //     if ('serviceWorker' in navigator) {
    //         navigator.serviceWorker
    //             .register('sw.js');
    //     }
    // });

    $(window).on('load', function () {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js').then(function(registration) {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
                }, function(err) {
                console.log('ServiceWorker registration failed: ', err);
                });
            });
        }
    })

    /*---------------------------------
    Show/Hide Password/ Toggle Password JS
    -----------------------------------*/
    $(".toggle").on("click", function () {

        if ($(".password").attr("type") == "password")
        {
            //Change type attribute
            $(".password").attr("type", "text");
            $(this).removeClass("fa-eye");
            $(this).addClass("fa-eye-slash");
        } else
        {
            //Change type attribute
            $(".password").attr("type", "password");
            $(this).addClass("fa-eye");
            $(this).removeClass("fa-eye-slash");
        }
    });
    /*---------------------------------
    Show/Hide Password/ Toggle Password JS
    -----------------------------------*/

    /*---------------------------------
    Onboarding Slider Start
    -----------------------------------*/
    $('.onboarding-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // centerMode: true,
        centerPadding: '30px',
        dots: true,
        arrows: false,
    });
    /*---------------------------------
    Onboarding Slider End
    -----------------------------------*/

})(jQuery);
