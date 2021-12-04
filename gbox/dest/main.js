$(window).on('load', function () {
    let load = $('.load')
    load.css({
        "transform": "translateY(-100%)",
        "opacity": "0"
    })
    AOS.init()
    load.fadeOut(1500)
})
$(".text__box").addClass("active");

$(document).ready(function () {

    // ACTIVE NAV-------------
    $('.hambuger').on('click', function(e) {
        e.stopPropagation();
        $('.nav').toggleClass('active')
        $(this).toggleClass('clicked')
    })
    $('.nav').on('click', function(e) {
        e.stopPropagation();
    })

    // Active booking
    $('.booking__package li').on('click', function() {
        $('.booking__package li').removeClass('active')
        $(this).addClass('active')
    })

    // category project
    $('.project__ctg-item').on('click', function(e) {
        e.preventDefault()
        $('.project__ctg-item').removeClass('active')
        $(this).addClass('active')
    })

    // Scroll Top-----------------
    $('.backto').on('click', function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })

    // Window click
    $(window).on('click', function() {
        $('.nav').removeClass('active')
        $('.hambuger').removeClass('clicked')
    })

    // Window resize
    $(window).on('resize', function() {
        let windowWidth = $(window).outerWidth();
        if(windowWidth > 992) {
            $('.nav').removeClass('active')
            $('.hambuger').removeClass('clicked')
        }
    })
})

$('.swiper__list').flickity({
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false,
    lazyLoad: 2,
    fullscreen: true,
});

$('.gallery__list').flickity({
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false,
    pageDots: false,
    lazyLoad: 2,
})

$(".fullscreen").on('click', function() {
    $('.swiper__list').flickity('viewFullscreen')
})

$(".prev").on('click', function() {
    $('.swiper__list').flickity('previous')
    $('.gallery__list').flickity('previous')
})

$(".next").on('click', function() {
    $('.swiper__list').flickity('next')
    $('.gallery__list').flickity('next')
})