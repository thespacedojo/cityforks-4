Template.registerHelper('getStars', function(rating){
	var str = '';
	var num = Math.round(rating * 2)/2; // nearest .5 rating
	var rating = Math.round(rating);
	var diff = 5 - rating;

	for(i = 0; i < num; i++) {
		str += '<i class="icon ion-ios-star"></i>';
	}

	if ( rating - num != 0 ) {
		str = str.substring(0, str.length - 33);
		str += '<i class="icon ion-ios-star-half"></i>';
	}


	for(j = 0; j < diff; j++) {
		str += '<i class="icon ion-ios-star-outline"></i>';
	}

	return str;
});