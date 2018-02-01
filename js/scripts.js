$(document).ready(function() {

//  Menu Active

  $(function () {
    $('.menu a').each(function () {
        var location = window.location.href;
        var link = this.href;
        if(location == link) {
            $(this).addClass('active_menu');
        }
    });
});


//  NAV-ICON

  $(function() {
    $('.nav__icon').on('click', function() {
      $(this).closest('.nav__box').toggleClass('menu_state_open');
    });
  });

//Owl CAROUSEL

  $(function() {
$(".owl-carousel").owlCarousel();
});

  $('.owl-carousel').owlCarousel({
    center: true,
    items:2,
    loop:true,
    margin:10,

    responsive:{
        0:{
            items:1,

        },
        600:{
            items:2,
        }
    }
});

});
