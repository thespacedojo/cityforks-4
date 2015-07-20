Template.map.onCreated(function() {
  L.Icon.Default.imagePath = 'packages/bevanhunt_leaflet/images';
  this.mapRendered = false;
  this.bottomLeft = new ReactiveVar;
  this.topRight = new ReactiveVar;
  this.markers = {};

  this.setBounds = function(bounds) {
    if (!bounds) {
      var bounds = this.map.getBounds();
    }
    if (bounds) {
      this.bottomLeft.set([bounds._southWest.lng, bounds._southWest.lat]);
      this.topRight.set([bounds._northEast.lng, bounds._northEast.lat]);
    }    
  };
  var template = this;
  template.autorun(function() {
    template.subscribe('nearbyPlaces', template.bottomLeft.get(), template.topRight.get());
  });
});

Template.map.onRendered(function() {
  var template = this;
  template.autorun(function() {
    if (Session.get('location') && Session.get('location').latitude) {
      latitude = Session.get('location').latitude;
      longitude = Session.get('location').longitude;
      
      if (!template.mapRendered) {
        template.map = L.map('map').setView([latitude, longitude], 15);
        template.mapRendered = true;
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(template.map);
        template.setBounds();
        template.map.on('moveend', function(event) {
          bounds = event.target.getBounds();
          template.setBounds(bounds);
          coords = {latitude: event.target.getCenter().lat, longitude: event.target.getCenter().lng};
          Meteor.call('fetchNearbyLocations', coords);
        });
      }
    }
  });
});

Template.map.onRendered(function() {
  var template = this;
  Places.find().observeChanges({
    'added': function(id, place) {
      if (!template.markers[id]) {
        template.markers[id] = L.marker([place.geometry.location.lat, place.geometry.location.lng])
        template.map.addLayer(template.markers[id]);
        template.markers[id].bindPopup(Blaze.toHTMLWithData(Template.marker, place));
      }
    },
    'removed': function(id) {
      template.map.removeLayer(template.markers[id]);
      template.markers[id] = undefined;
    }
  });
});
