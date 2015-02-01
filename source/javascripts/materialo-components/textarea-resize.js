(function ($) {
  $(document).ready(function() {
    // Textarea Auto Resize
    if ($('.hiddendiv').length === 0) {
      var hiddenDiv = $('<div class="hiddendiv common"></div>'),
        content = null;
        $('body').append(hiddenDiv);
    }
    var text_area_selector = 'textarea';
    $('.hiddendiv').css('width', $(text_area_selector).width());

    $(text_area_selector).each(function () {
      if ($(this).val().length) {
        content = $(this).val();
        content = content.replace(/\n/g, '<br>');
        hiddenDiv.html(content + '<br>');
        $(this).css('height', hiddenDiv.height());
      }
    });
    $('body').on('keyup keydown',text_area_selector , function () {
      // console.log($(this).val());
      content = $(this).val();
      content = content.replace(/\n/g, '<br>');
      hiddenDiv.html(content + '<br>');
      // console.log(hiddenDiv.html());
      $(this).css('height', hiddenDiv.height());
    });
  });
}( jQuery ));
