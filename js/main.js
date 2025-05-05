document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll to accordion section when expanded
  $('.collapse').on('shown.bs.collapse', function (e) {
    const $card = $(this).closest('.card');
    $('html,body').animate({
      scrollTop: $card.offset().top
    }, 500);
  });
}); 