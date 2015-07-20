Meteor.startup(function() {
  navigator.geolocation.getCurrentPosition(success);
});

success = function(position) {
  Session.set('location', {latitude: position.coords.latitude, longitude: position.coords.longitude});
  Meteor.call('fetchNearbyLocations', Session.get('location'));
};
