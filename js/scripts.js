$(document).ready(function() {


  $(function() {
    $('.nav__icon').on('click', function() {
      $(this).closest('.nav__box').toggleClass('menu_state_open');
    });
  });



});
