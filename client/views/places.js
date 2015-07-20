Template.places.onCreated(function() {
  this.subscribe('nearbyPlaces');
});

Template.places.helpers({
  places: function() {
    return Places.find();
  }
});
