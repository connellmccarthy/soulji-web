function submit() {
	var email_data = encodeURIComponent($('#txt-email').val());
    var baseURL = 'https://docs.google.com/forms/d/e/1FAIpQLSe3JcuQpBLJAxLCtpySI1XPwpldSv3tLo2wUSAPpO3uzwIPkQ/formResponse?';
    var first_field = 'entry.1955357250=';
    var second_field = '&entry.403956790=';
    var submitRef = '&submit=Submit';
    $.getJSON("http://freegeoip.net/json/").done(function(e) {
		var user_city = e.city;
    	var user_country = e.country_name;
    	user_location = user_city + ', ' + user_country;
    	user_location = encodeURIComponent(user_location);
    	var submitURL = (baseURL + first_field + email_data + second_field + user_location + submitRef);
    	console.log(submitURL);
    	$('#no-target').attr('src', submitURL);
	});
}
function validateEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}