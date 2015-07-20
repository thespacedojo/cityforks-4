Meteor.publish('nearbyPlaces', function(bottomLeft, topRight) {
  console.log('Bottom Left' + bottomLeft);
  if (!bottomLeft && !topRight) {
    return [];
  }
  places = Places.find({loc: {$geoWithin: {$box: [bottomLeft, topRight]}}});
  console.log(places);
  return places;
});

Meteor.publish('places', function() {
  return Places.find();
});

Meteor.publish('place', function(id) {
  return Places.find({_id: id});
});
