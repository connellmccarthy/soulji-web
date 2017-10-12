$(document).ready(function() {
	if (!checkValidation()) {
		window.location = "/";
	}else {
		setTimeout(function() {
		$('.loader').fadeOut('slow', function() {
			$('.background-image').addClass('animated');
			$('.loading').fadeOut('slow');
		});
		},1000);
	}
});
