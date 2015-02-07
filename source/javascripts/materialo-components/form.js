(function ($) {
  $(document).ready(function() {
    var input_selector = 'input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea';

    var basic_class   = "form__field"
    var active_class  = "form__field--valid"
    var invalid_class = "form__field--invalid"


    // Add active if input element has been pre-populated on document ready
    $(document).ready(function() {
      $(input_selector).each(function(index, element) {
        if($(element).val().length > 0) {
          $(this).parent('div').addClass(active_class);
        }
        else{
          $(this).parent('div').removeClass(active_class);
        }
      });
    });

    // Add active if form auto complete
    $(document).on('change', input_selector, function () {
      if($(this).val().length !== 0) {
       $(this).parent('div').addClass(active_class);
      }
      else{
       $(this).parent('div').removeClass(active_class);
      }
    });

  });
}( jQuery ));
