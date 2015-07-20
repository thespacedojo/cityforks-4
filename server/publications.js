Meteor.publish('nearbyPlaces', function(bottomLeft, topRight) {
  // if (!bottomLeft && !topRight) {
  //   return [];
  // }
  
  return Places.find();
});

Meteor.publish('place', function(id) {
  return Places.find({_id: id});
});
