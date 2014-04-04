(function() { // :)



// Shortcuts.
var file = false
var previewImg = $('#preview img')[0];



// Setup popover.
var popoverTimeout = false;
$(previewImg).popover({
    content: 'Please upload a beautiful image!',
    placement: 'bottom',
    trigger: 'manual'
});



// Validate Form.
$('form').on('submit', function(e) {
    $('form').validate();

    var valid = $('form').valid();

    // Image is missing.
    if (!file) {
        valid = false;

        $(previewImg).popover('show');

        clearTimeout(popoverTimeout);
        popoverTimeout = setTimeout(function() {
            $(previewImg).popover('hide');
        }, 3000);
    }

    if (!valid) {
        e.preventDefault();
    }
});



// Update Form destination.
if (location.host === 'localhost:8080') {
    $('form').each(function() {
        this.action = this.action.replace('https://reset-the-net-form-backend.herokuapp.com', 'http://localhost:8000');
    });
}



// Show image preview.
$('#image').on('change', showPreview);
function showPreview() {
    if (this.files && this.files[0]) {
        file = this.files[0];
        var reader = new FileReader();

        reader.onloadend = function() {
            if (file.type === 'image/png' || file.type === 'image/jpeg') {
                previewImg.src = reader.result;
            } else {
                previewImg.src = 'images/upload.png';
                file = false;
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

function updateTextPreview() {
    var name = $('#name').val() || 'MyName';
    var description = $('#description').val() || 'is doing something courageous and awesome with crypto.';
    $('#preview .card strong').text(name);
    $('#preview .card span').text(description);

    var characterMax = 100;
    var characterCount = $('#name').val().length + $('#description').val().length;
    var charactersLeft = characterMax - characterCount;
    if (charactersLeft < 0) {
        description = description.substring(0, description.length + charactersLeft);
        $('#preview .card span').text(description);
        $('#description').val(description);
        return;
    }

    $('form .characters span').text(characterMax - characterCount);
}

// Update text preview.
updateTextPreview();
$('#description, #name').on('change keyup', updateTextPreview);

// Add JavaScript flag.
$('form').append('<input type="hidden" name="js" value="enabled">');

})(); // :)
