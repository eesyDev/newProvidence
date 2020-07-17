window.addEventListener('DOMContentLoaded', function() {
    $(document).ready(function() {
        $(window).scroll(function() {
            var wScroll = $(this).scrollTop();

            if (wScroll > 20) {
                $('.header').addClass('active');
                $('.slide-menu').addClass('scrolled');
            }
            else {
                $('.header').removeClass('active');
                $('.slide-menu').removeClass('scrolled');
            }
        });

        $('.bars').on('click', function(e) {
            e.preventDefault();
            $(this).addClass('open');
            $('.slide-menu').toggleClass('open');

            if ($('.slide-menu').hasClass('open')) {
                $('.close-menu').on('click', function(e) {
                    e.preventDefault();
                    $('.slide-menu').removeClass('open');
                });
            }
        });

        wow = new WOW(
            {
            boxClass:     'wow',      // default
            animateClass: 'animated', // default
            offset:       0,          // default
            mobile:       true,       // default
            live:         true        // default
        }
        );
        wow.init();
    });
});
var individualPriceTable = $('.price-tables').find('.individual');
var companyPriceTable = $('.price-tables').find('.company');

$('.switch-toggles').find('.individual').addClass('active');
$('.price-tables').find('.individual').addClass('active');

$('.switch-toggles').find('.individual').on('click', function(){
    $(this).addClass('active');
    $(this).closest('.switch-toggles').removeClass('active');
    individualPriceTable.addClass('active');
    companyPriceTable.removeClass('active');
});

$('.switch-toggles').find('.company').on('click', function(){
    $(this).addClass('active');
    $(this).closest('.switch-toggles').addClass('active');
    $(this).siblings().removeClass('active');
    companyPriceTable.addClass('active');
    individualPriceTable.removeClass('active');
});

$(document).ready(function(){
    $('.carousel-inner').slick({
        speed: 1200,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></img></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {arrows: false}
            },
            {
                breakpoint: 768,
                slidesToShow: 1
            }
        ]
    });
});