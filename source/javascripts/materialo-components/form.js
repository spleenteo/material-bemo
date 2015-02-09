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


    // Select Plugin
    $.fn.material_select = function (callback) {
      $(this).each(function(){
        $select = $(this);
        if ( $select.hasClass('browser-default') || $select.hasClass('initialized')) {
          return; // Continue to next (return false breaks out of entire loop)
        }

        var uniqueID = guid();
        var wrapper = $('<div class="select-wrapper"></div>');
        var options = $('<ul id="select-options-' + uniqueID+'" class="dropdown-content select-dropdown"></ul>');
        var selectOptions = $select.children('option');
        if ($select.find('option:selected') !== undefined) {
          var label = $select.find('option:selected');
        }
        else {
          var label = options.first();
        }


        // Create Dropdown structure
        selectOptions.each(function () {
          // Add disabled attr if disabled
          options.append($('<li class="' + (($(this).is(':disabled')) ? 'disabled' : '') + '"><span>' + $(this).html() + '</span></li>'));
        });


        options.find('li').each(function (i) {
          var $curr_select = $select;
          $(this).click(function () {
            // Check if option element is disabled
            if (!$(this).hasClass('disabled')) {
              $curr_select.find('option').eq(i).prop('selected', true);
              // Trigger onchange() event
              $curr_select.trigger('change');
              $curr_select.prev('span.select-dropdown').html($(this).text());
              if (typeof callback !== 'undefined') callback();
            }
          });

        });

        // Wrap Elements
        $select.wrap(wrapper);
        // Add Select Display Element
        var $newSelect = $('<span class="select-dropdown ' + (($select.is(':disabled')) ? 'disabled' : '')
                         + '" data-activates="select-options-' + uniqueID +'">' + label.html() + '</span>');
        $select.before($newSelect);
        $('body').append(options);
        // Check if section element is disabled
        if (!$select.is(':disabled')) {
          $newSelect.dropdown({"hover": false});
        }
        $select.addClass('initialized');

      });
    }
    // Unique ID for select
    var guid = (function() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
                   .toString(16)
                   .substring(1);
      }
      return function() {
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
               s4() + '-' + s4() + s4() + s4();
      };
    })();

  });
}( jQuery ));

$(document).ready(function() {
  $('select').material_select();
});

