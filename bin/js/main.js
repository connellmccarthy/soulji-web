var user_location;
$(document).ready(function() {
	if (!checkValidation()) {
		$('.loader').fadeOut('slow', function() {
			$('.loading').fadeOut('slow');
		});
	}else {window.location='/home';}
	$('#txt-email').focus();
	console.log('Ready');


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
		document.cookie = "amp=true";
    	window.location='/home';
	});
});
