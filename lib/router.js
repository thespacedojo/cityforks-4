Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Meteor.startup(function () {
  if (Meteor.isClient) {
    var location = Iron.Location.get();
    if (location.queryObject.platformOverride) {
      Session.set('platformOverride', location.queryObject.platformOverride);
    }

    Session.setDefault('hasHeader', 'false');
    Session.set('hasHeader', 'false');
  }
});

Router.map(function() {
  this.route('places', {path: "/"});
  this.route('place', {path: "/p/:_id"});
  this.route('map', {path: "/map"});
});
