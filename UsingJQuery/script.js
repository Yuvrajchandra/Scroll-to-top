// ===== Scroll to Top ====
var btn = $('#button');

// If the page is scrolled more than 300px,
// show the scroll-to-top button
// Otherwise hide the button
$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
