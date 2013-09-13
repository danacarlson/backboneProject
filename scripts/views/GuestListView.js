backboneDemo.Views.GuestListView = Backbone.View.extend({

  tagName: 'table',
  className: 'table-rsvp',

  initialize: function () {
    this.collection.on('add', this.addGuest, this);
    this.collection.on('remove', this.removeGuest, this);
    this.collection.on('change', this.showcontents, this);
  },

  render: function () {
    this.collection.each(function (guest) { this.addGuest(guest); }, this);
    return this;
  },

  addGuest: function (guest) {
    var view = new backboneDemo.Views.GuestItemView({model: guest});
    view.render();
    this.$el.append(view.el);
  },

  removeGuest: function () {
    this.$el.html('');
    this.render();
  }

});
