Template.places.onCreated(function() {
  this.subscribe('places');
  $('body').addClass('no-subheader');
});

Template.places.helpers({
  places: function() {
    return Places.find();
  }
});
