(function() { // :)



// Validate Form.
$('form').on('submit', function(e) {
    $('form').validate();

    var valid = $('form').valid();

    if (!valid) {
        e.preventDefault();
    }
});

// Show Image Preview.
$('#image').on('change', showPreview);
function showPreview() {
    if (this.files && this.files[0]) {
        var file = this.files[0];
        var previewImg = $('#preview img')[0];
        var reader = new FileReader();

        reader.onloadend = function() {
            if (file.type === 'image/png' || file.type === 'image/jpeg') {
                previewImg.src = reader.result;
            } else {
                previewImg.src = '';
            }

            console.log('File detected!!'); // TODO: Remove this debug code.
            console.log((file.size / 1024).toFixed(2) + ' kb'); // TODO: Remove this debug code.
            console.log(file.type); // TODO: Remove this debug code.
            console.log('Width =', previewImg.width); // TODO: Remove this debug code.
            console.log('Height =', previewImg.height); // TODO: Remove this debug code.
            console.log('---'); // TODO: Remove this debug code.
        }

        reader.readAsDataURL(file);
    }
}
showPreview.apply($('#image')[0]);



})(); // :)
