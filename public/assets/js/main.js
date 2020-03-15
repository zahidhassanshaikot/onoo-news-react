jQuery(function ($) {

    'use strict';

    // Preloader

    // -------------------------------------------------------------
    //  Preloader
    // -------------------------------------------------------------

    $(window).on("load", function(){
        $('#preloader').fadeOut('slow',function(){$(this).remove();});
    });

    // -------------------------------------------------------------
    //  Toggle Menu for Mobile
    // -------------------------------------------------------------

    mobileDropdown ();
    function mobileDropdown () {
      if($('.navbar-nav').length) {
        $('.navbar-nav .sg-dropdown').append(function () {
          return '<i class="fa fa-angle-down icon" aria-hidden="true"></i>';
        });
        $('.navbar-nav .sg-dropdown .icon').on('click', function () {
          $(this).parent('li, .sg-dropdown').children('ul, .sg-dropdown-menu').slideToggle();
        });
      }
    }     

    /*==============================================================*/
    // TheiaStickySidebar
    /*==============================================================*/

    $('.sg-sticky')
        .theiaStickySidebar({
            additionalMarginTop: 0
    });

    // -------------------------------------------------------------
    //  MagnificPopup
    // -------------------------------------------------------------

    $('.sg-popup').magnificPopup({type:'iframe'});        

    // -------------------------------------------------------------
    //  Slick Slider
    // -------------------------------------------------------------  

    // $(".news-ticker").slick({
    //     infinite: true,
    //     dots: false,
    //     arrows: true,
    //     slidesToShow: 1,
    //     autoplay:true,
    //     autoplaySpeed: 1000,
    //     speed: 1000,
    //     fade:true,
    //     pauseOnHover:true,
    //     slidesToScroll: 1,
    //     nextArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    //     prevArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    // });

    // $(".post-slider").slick({
    //     infinite: true,
    //     dots: false,
    //     arrows: true,
    //     slidesToShow: 1,
    //     autoplay:true,
    //     autoplaySpeed:10000,
    //     slidesToScroll: 1,
    //     nextArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    //     prevArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    // });

    // $('.home-slider').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: true,
    //     dots: false,
    //     speed: 1500,
    //     autoplay:true,
    //     nextArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    //     prevArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    //     asNavFor: '.home-slider-nav'
    // });
    
    // $('.home-slider-nav').slick({
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     asNavFor: '.home-slider',
    //     dots: false,
    //     speed: 1500,
    //     arrows: false,
    //     focusOnSelect: true,
    //     responsive: [
    //     {
    //       breakpoint: 1200,
    //       settings: {
    //         slidesToShow:4,
    //       }
    //     },
    //     {
    //       breakpoint: 992,
    //       settings: {
    //         slidesToShow: 3,
    //       }
    //     },
    //     {
    //       breakpoint: 768,
    //       settings: {
    //         slidesToShow: 2,
    //       }
    //     },
    //     {
    //       breakpoint: 481,
    //       settings: {
    //         slidesToShow: 1,
    //       }
    //     }
    //     ]
    // });

    // -------------------------------------------------------------
    //  Carousel Animation
    // -------------------------------------------------------------

    function doAnimations( elems ) {
        var animEndEv = 'webkitAnimationEnd animationend';
        
        elems.each(function () {
            var $this = $(this),
                $animationType = $this.data('animation');
            $this.addClass($animationType).one(animEndEv, function () {
                $this.removeClass($animationType);
            });
        });
    }
    var $myCarousel = $('#home-carousel'),
        $firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");
    $myCarousel.carousel();

    doAnimations($firstAnimatingElems);
    $myCarousel.carousel('pause');
    
    $myCarousel.on('slide.bs.carousel', function (e) {
        var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
        doAnimations($animatingElems);
    });           
    /*==============================================================*/
    // carouFredSel
    /*==============================================================*/
           
    // $('.breaking-news-slider').carouFredSel({
    //     width: '100%',
    //     direction   : "bottom",
    //     scroll : 400,
    //     items: {
    //         visible: '+3'
    //     },
    //     auto: {
    //         items: 1,
    //         timeoutDuration : 4000
    //     },
    //     prev: {
    //         button: '.prev',
    //         items: 1
    //     },
    //     next: {
    //         button: '.next',
    //         items: 1
    //     }
    // });

    /*==============================================================*/
    // Select
    /*==============================================================*/    

    // $('.sg-language select').each(function(){
    //     var $this = $(this), numberOfOptions = $(this).children('option').length;
    //
    //     $this.addClass('select-hidden');
    //     $this.wrap('<div class="select"></div>');
    //     $this.after('<div class="select-styled"></div>');
    //
    //     var $styledSelect = $this.next('div.select-styled');
    //     $styledSelect.text($this.children('option').eq(0).text());
    //
    //     var $list = $('<ul />', {
    //         'class': 'select-options'
    //     }).insertAfter($styledSelect);
    //
    //     for (var i = 0; i < numberOfOptions; i++) {
    //         $('<li />', {
    //             text: $this.children('option').eq(i).text(),
    //             rel: $this.children('option').eq(i).val()
    //         }).appendTo($list);
    //     }
    //
    //     var $listItems = $list.children('li');
    //
    //     $styledSelect.click(function(e) {
    //         e.stopPropagation();
    //         $('div.select-styled.active').not(this).each(function(){
    //             $(this).removeClass('active').next('ul.select-options').hide();
    //         });
    //         $(this).toggleClass('active').next('ul.select-options').toggle();
    //     });
    //
    //     $listItems.click(function(e) {
    //         e.stopPropagation();
    //         $styledSelect.text($(this).text()).removeClass('active');
    //         $this.val($(this).attr('rel'));
    //         $list.hide();
    //     });
    //
    //     $(document).click(function() {
    //         $styledSelect.removeClass('active');
    //         $list.hide();
    //     });
    //
    // });

// script end
});
