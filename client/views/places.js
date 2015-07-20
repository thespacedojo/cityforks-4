Template.places.onCreated(function() {
  this.subscribe('places');
});

Template.places.helpers({
  places: function() {
    return Places.find();
  }
});
