$('.help').popover();
$('form').on('submit', function(e) {
    $('form').validate();

    var valid = $('form').valid();

    if (!valid) {
        e.preventDefault();
    }
});