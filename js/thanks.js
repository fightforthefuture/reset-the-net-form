$(function() {
    // Inject secret into form.
    var secret = location.hash.substr(1);
    $('#code').val(secret);
});
