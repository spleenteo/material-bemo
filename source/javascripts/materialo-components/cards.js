(function ($) {
  $(document).ready(function() {

    $(document).on('click.js-card-reveal', '.js-card-reveal', function (e) {
      if ($(this).find('.js-card-description').length) {
        if ($(e.target).is($('.js-card-description .js-card-title')) || $(e.target).is($('.js-card-description .js-card-activator'))) {
          $(this).find('.js-card-description').velocity({translateY: 0}, {duration: 300, queue: false, easing: 'easeOutQuad'});
        }
        else if ($(e.target).is($('.js-card-title')) ||
                 $(e.target).is($('.js-card-activator')) ) {
          $(this).find('.js-card-description').velocity({translateY: '-100%'}, {duration: 300, queue: false, easing: 'easeOutQuad'});
        }
      }
    });
  });
}( jQuery ));
