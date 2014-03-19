$('.help').popover();
$('form').on('submit', function(e) {
    $('form').validate();

    var res = $('form').valid();

    console.log(res); // TODO: Remove this debug code.

    e.preventDefault();
});