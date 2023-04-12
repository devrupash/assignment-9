; (function ($) {

    $(document).ready(function () {
        function numberWithCommas(x) {
            var parts = x.toString().split(".");
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return parts.join(".");
        }

        //tooltip js
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });

        $('.path').on('click', function(){
            let currentItem = $(this);
            let dataProperties = currentItem.data('properties');
            let dataUnderManagement = currentItem.data('under-management');
            let dataLocation = currentItem.data('location');
            $("#properties_count").html(numberWithCommas(dataProperties));
            $("#management_count").html(numberWithCommas(dataUnderManagement));
        

            $("#location").fadeOut(50, function(){
                $(this).attr('src', "assets/img/states/"+dataLocation);
            }).fadeIn(900);
            $('.path').find('path').attr('fill', '#3a7395');
            currentItem.find('path').attr('fill', '#012f4c');
            return false;
        });

        $("#line").attr('data-offset', "-" + $(window).height() * 2);
        // luxy js
        luxy.init({
            wrapperSpeed: "0.08"
        });

        //Scroll animation js
        new WOW().init({
            boxClass: 'wow',      // default
            animateClass: 'animated', // default
            offset: 0,          // default
            mobile: false,       // default
            live: true        // default
        });
        //Header js
        let headerSection = $('.header-section');
        $(window).on('scroll', function () {
            let scrollPosition = $(window).scrollTop();
            if (scrollPosition > 0) {
                headerSection.addClass('scrolled');
                headerSection.find('.top-menu').hide();
            } else {
                headerSection.removeClass('scrolled');
                headerSection.find('.top-menu').show();
            }
        });
        //Hero height js
        let windowWidth = $(window).width();
        let headerHeight = $('.header-section').innerHeight();
        if (windowWidth > 768) {
            $('#home-hero').css('min-height', 'calc(100vh - ' + headerHeight + 'px)');
        }
        //Magnific popup js
        $('a.transparent-link').magnificPopup({
            disableOn: 300,
            type: "iframe",
            mainClass: "mfp-fade",
            removeDelay: 160,
            preloader: false,
            fixedContentPos: false,
        });
        //Mobile menu js
        $('.bottom-menu').slicknav({
            'label': '',
            'closedSymbol': '&#9658;',
            'openedSymbol': '&#9660;',
            'prependTo': '#mobile-menu',
        });
        //blog slider for mobile
        var owl = $('.mobile-blog'),
            owlOptions = {
                loop: true,
                margin: 10,
                nav: false,
                dots: false,
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 2
                    }
                }
            };

        if ($(window).width() < 992) {
            var owlActive = owl.owlCarousel(owlOptions);
        } else {
            owl.addClass('off');
        }

        $(window).resize(function () {
            if ($(window).width() < 992) {
                if ($('.owl-carousel').hasClass('off')) {
                    var owlActive = owl.owlCarousel(owlOptions);
                    owl.removeClass('off');
                }
            } else {
                if (!$('.owl-carousel').hasClass('off')) {
                    owl.addClass('off').trigger('destroy.owl.carousel');
                    owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
                }
            }
        });


        //apartment slider js
        $(".apartment-slider").owlCarousel({
            items: 1,
            autoplay: true,
            nav: true,
            margin: 10,
            dots: false,
            loop: true,
            navText: ['<img src="assets/img/arrow-large-left.png">', '<img src="assets/img/arrow-large-right.png">'],
        });
        //featured post slider js
        $(".featured-post-slider").owlCarousel({
            items: 1,
            autoplay: true,
            nav: true,
            margin: 10,
            dots: false,
            loop: true,
            navText: ['<img src="assets/img/arrow-large-right-white.png">', '<img src="assets/img/arrow-large-left-white.png">'],
        });
        //Recent post slider js
        $(".recent-post-slider").owlCarousel({
            autoplay: true,
            nav: true,
            margin: 30,
            dots: false,
            loop: true,
            navText: ['<img src="assets/img/arrow-large-left.png">', '<img src="assets/img/arrow-large-right.png">'],
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 1,
                },
                // breakpoint from 768 up
                768: {

                    items: 2,
                }
            }
        });
        //Gallery slider slider js
        $(".gallery-slider").owlCarousel({
            autoplay: true,
            nav: true,
            margin: 30,
            dots: false,
            loop: true,
            navText: ['<img src="assets/img/arrow-large-left.png">', '<img src="assets/img/arrow-large-right.png">'],
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 2,
                },
                // breakpoint from 480 up
                480: {

                    items: 3,
                },
                // breakpoint from 768 up
                768: {

                    items: 4,
                }
            }
        });
        //Nice Select js
        $('select').niceSelect();

        //accordion
        $(".accordion-toggle").on('click', function () {
            $(this).hide();
            $(this).parent().addClass('opened').find(".accorion-content").slideDown();
        });


    });

    $(window).on('load', function () {
        $("#preloader").delay(500).fadeOut("slow");
    });

})(jQuery);

