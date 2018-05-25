$('.switch').hover(function() {
        $(this).find('.image1').hide();
        $(this).find('.text').show();
    }, function() {
        $(this).find('.text').hide();
        $(this).find('.image1').show();
});