$(document).ready(function () {

    // Preloader 
    $(window).load(function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    /**
     * Navigation
     */

    $('nav ul li:has(ul) > a').prepend('<i class="fa fa-angle-down"></i>');

    var lastItems = $('nav > ul > li');

    var lastItemsArr = [
        lastItems[lastItems.length - 1],
        lastItems[lastItems.length - 2],
        lastItems[lastItems.length - 3]
    ];

    for (var i = 0; i < lastItemsArr.length; i++) {

        $(lastItemsArr[i]).children('ul').find('ul').css({
            left: 'calc(-100% - 50px)',
            marginLeft: 0
        });

        $(lastItemsArr[i]).children('ul').find('.fa').css({
            transform: 'rotate(90deg)',
            left: '7px',
            right: 'auto',
        });
        $(lastItemsArr[i]).children('ul').children('li').mouseover(function () {
            $(this).find('.fa').css({
                transform: 'rotate(-90deg)',
            });
            $(this).find('ul').css({
                left: '-100%',
            });
        });
        $(lastItemsArr[i]).children('ul').children('li').mouseleave(function () {
            $(this).find('.fa').css({
                transform: 'rotate(90deg)',
            });
            $(this).find('ul').css({
                left: 'calc(-100% - 50px)',
            });
        });

    }

    /**
     * Navigation Scroll Animation
     */
    var headerHeight = $('header').outerHeight();
    $('#slider-section').css({
        marginTop: headerHeight + 'px',
    });
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 0) {
            $('header').addClass('heading-padding');
        } else {
            $('header').removeClass('heading-padding');         
            var headerHeight = $('header').outerHeight();
        }
    })

    /**
     * Search Form
     */
    $('nav .search').on('click', function () {
        $('header .search-form').slideToggle();
        
    });

    /**
     * Banner Slider
     */

    $(".slider-items").owlCarousel({
        items: 1,
        loop: true,
        // autoplay: true,
        autoplayTimeout: 2000,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });

    /**
     * Project Slider
     */

    $(".project-items").owlCarousel({
        items: 4,
        loop: true,
        // autoplay: true,
        autoplayTimeout: 2000,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        dots: false,
        responsive : {
            0 : {
                items: 1,
            },
            800 : {
                items: 2,
            },
            1030: {
                items: 4,
            }
           
        }
    });

    /**
     * Video Popup
     */

    $('.image-link').magnificPopup({
        type: 'iframe'
    });

    /**
     * Blog Slider
     */
    $(".blog-items").owlCarousel({
        items: 1,
        loop: true,
        autoplay: false,
        autoplayTimeout: 2000,
        nav: true,
        dots: false
    });
    var blogHeadingWidth = $('#blog .section-title h2').innerWidth();
    $('.blog-items .owl-nav').css({
        left: blogHeadingWidth + 'px'
    });

    /**
     * Testimonial Slider
     */
    $(".testimonial-items").owlCarousel({
        items: 1,
        loop: true,
        autoplay: false,
        autoplayTimeout: 2000,
        nav: true,
        dots: false
    });
    var testimonialHeadingWidth = $('#testimonials .section-title h2').innerWidth();
    $('.testimonial-items .owl-nav').css({
        left: testimonialHeadingWidth + 'px',
    });
    /**
     * Client Logos Slider
     */
    $(".client-logos").owlCarousel({
        items: 6,
        loop: true,
        autoplay: false,
        autoplayTimeout: 2000,
        nav: false,
        dots: false,
        margin: 30,
        responsive : {
            0 : {
                items: 1,
            },
            200 : {
                items: 2,
            },
            600 : {
                items: 3,
            },
            800 : {
                items: 4,
            },
            1030: {
                items: 6,
            }
           
        }
    });
});