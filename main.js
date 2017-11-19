// Calling out medium plugin to apply after the popup is opened
function doYourMagic() {
    $(".bs-example-modal-lg").modal();
    var editor = new MediumEditor('.editable-title', {
        placeholder: {
            text: 'Title'
        }
    });
    var editor = new MediumEditor('.editable', {
        placeholder: {
            text: 'Write something ..'
        }
    });
    // Using the insert plugin 
    $('.editable').mediumInsert({
        editor: editor
    });
}

// This function trigger adds the cropping wrappers around the targeted area
if ($(window).width() > 600) {
    var basic = $('#main-cropper').croppie({
        viewport: { width: 450, height: 250 },
        boundary: { width: 750, height: 300 },
        showZoomer: false,
        url: 'http://lorempixel.com/500/400/'
    });
}else{
    var basic = $('#main-cropper').croppie({
        viewport: { width: 300, height: 180 },
        boundary: { width: 750, height: 300 },
        showZoomer: false,
        url: 'http://lorempixel.com/500/400/'
    });
}

// readFile function takes the src from the input type file and pass it to the cropping function
function readFile(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#main-cropper').croppie('bind', {
                url: e.target.result
            });
        }

        reader.readAsDataURL(input.files[0]);
    }
}

// Here we are calling the readFile function whenever there's a change in the input type field 
$('.actionUpload input').on('change', function () { readFile(this); });

