candyTransfer.Views.SugarInjectionView = Backbone.View.extend({

  el : "#entry-container",
  model : new candyTransfer.Models.SugarInjection(),

  initialize: function () {
    //this.collection.on('add', this.addGuest, this);
    //this.collection.on('remove', this.removeGuest, this);
    //this.collection.on('change', this.showcontents, this);
    //this.render();
    this.addBlankTransfer();
  },

  render: function () {
    //this.$el.append(view.el);
    //this.collection.each(function (guest) { this.addGuest(guest); }, this);
    //return this;
  },

  addBlankTransfer: function() {
    //console.log(this.model);
    var view = new candyTransfer.Views.EntryView(this.model);
    view.render();
    this.$el.append(view.el);
  }

  /*removeGuest: function () {
    this.$el.html('');
    this.render();
  }*/

});
