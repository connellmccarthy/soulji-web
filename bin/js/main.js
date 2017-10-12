var user_location;
$(document).ready(function() {
	if (!checkValidation()) {
		$('.loader').fadeOut('slow', function() {
			$('.loading').fadeOut('slow');
		});
	}else {window.location='/home';}
	$('#txt-email').focus();
	$('#unlock').click(function() {
		if (!validateEmail($('#txt-email').val())) {
			$('.error').fadeOut('slow');
			setTimeout(function() {
				$('.error').html('Please enter a valid email');
				$('.error').fadeIn('slow');
			},500);
		} else {
			submit();
		}
	});
	$('#no-target').on('load', function() {
		console.log('Sent Data');
		document.cookie = "amp=true";
		setTimeout(function() {
			window.location='/home';
		},500);
	});
});
function checkValidation() {
	var name = "amp=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
