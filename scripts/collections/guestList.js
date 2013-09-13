backboneDemo.Collections.Guests = Backbone.Collection.extend({

  url: '/backbone-exercise/data/rsvp.json',

  model: backboneDemo.Models.Guest

});