$(function ($) {
    'use strict'

    // Banner slider start
    $('#banner_part').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
        dots: true,
        autoplaySpeed: 2000,

    });
    // About video
    $('.venobox').venobox();
    // test slider
    $('.test_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: true,
        autoplaySpeed: 2000,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
    },

  ]

    });
    // counter part
    $('.count').counterUp({
        delay: 10,
        time: 1000
    });

    //client_slider part

    $('.client-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        dots: false,
        autoplaySpeed: 2000,
        nextArrow: '<i class="fas fa-chevron-right clien_next"></i>',
        prevArrow: '<i class="fas fa-chevron-left clien_prev"></i>',

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                }
    },

  ]

    });

    // Menu fix
    var navoff = $('.main_menu').offset().top;

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > navoff) {
            $('.main_menu').addClass('menu_fix');
        } else {
            $('.main_menu').removeClass('menu_fix');
        }


    });

//    Top to bottom
 
    $('.tp_bm').click(function () {
        $('html,body').animate({
            scrollTop: 0,
        }, 2500);
    });

    $(window).scroll(function () {
        var btscroll = $(this).scrollTop();


        if (btscroll > 300) {
            $('.tp_bm').fadeIn();
        } else {
            $('.tp_bm').fadeOut();
        }
    });
    
     //animation scroll js
    
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 50
                }, 1500);
                return false;
            }
        }
    });








});
