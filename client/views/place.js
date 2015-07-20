Template.place.onCreated(function() {
  this.subscribe('place', Router.current().params._id);
});

Template.place.helpers({
  place: function() {
    return Places.findOne(Router.current().params._id);
  },
  type: function() {
    return this.types.join(", ");
  }
});
