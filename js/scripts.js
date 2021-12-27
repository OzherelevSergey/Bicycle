$(document).ready(function () {
    //mobile menu
    $('.menu-bottom').on('click', function () {
        $('.navigation-wrapper').addClass('active');
    });

    $('.close-menu').on('click', function () {
        $('.navigation-wrapper').removeClass('active');
    })

    // slider swiper-reviews
    const reviewsSlider = new Swiper('.swiper-reviews', {
        loop: true,
      
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
      
      });







});

