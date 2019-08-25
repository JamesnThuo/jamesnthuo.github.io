$(function() {
    $('.scroll-down').click (function() {
        // alert("Hi");
      $('html, body').animate({scrollTop: $('.product-overview').offset().top }, 'slow');
      return false;
    });
    // Home button
    $('.home').click (function() {
        // alert("Hi");
      $('html, body').animate({scrollTop: $('.carousel-section').offset().top }, 'slow');
      return false;
    });
    $('.products').click (function() {
        // alert("Hi");
      $('html, body').animate({scrollTop: $('.services-section').offset().top }, 'slow');
      return false;
    });
    $('.in-touch').click (function() {
        // alert("Hi");
      $('html, body').animate({scrollTop: $('.call-section').offset().top }, 'slow');
      return false;
    });
  });