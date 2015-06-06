$(document).ready(function() {
  $("a[href^='#']").on('click', function(e) {
    var target = this.getAttribute("href");
    if (target == '#') {
      $('html, body').animate({
        scrollTop: 0
      }, 1000, 'easeInOutCubic');
    } else {
      $('html, body').animate({
        scrollTop: $(target).offset().top - 50
      }, 1000, 'easeInOutCubic');
    }
  });
});
