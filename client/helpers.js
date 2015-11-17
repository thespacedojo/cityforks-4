Template.registerHelper('getStars', function(rating) {
	var str = '';
	var rating = rating.toString();
	var substr = rating.split('.');
	var decimal = substr[1];

	// put full stars for whole number before the decimal
	for(i = 0; i < substr[0]; i++) {
		str += '<i class="icon ion-ios-star"></i>';
		count++;
	}

	// determine which star (full, half, empty) depending on decimal
	if (decimal) {
		if(decimal <= 3) {
			str += '<i class="icon ion-ios-star-outline"></i>';
		} else if (decimal >= 4 && decimal < 8) {
			str += '<i class="icon ion-ios-star-half"></i>';
		} else {
			str += '<i class="icon ion-ios-star"></i>';
		}
	}

	// if there are less than 5 stars, fill out the stars up to 5
	var count = (str.match(/<\/i>/g)).length;
	for(j = count; j < 5; j++) {
		str += '<i class="icon ion-ios-star-outline"></i>';
	}

	return str;
});