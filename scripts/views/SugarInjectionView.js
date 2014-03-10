candyTransfer.Views.SugarInjectionView = Backbone.View.extend({

  el : "#inner",

  events: {
    'click [data-trigger="add-sugar-injection"]' : 'addBlankTransfer',
    'click #confirmBt' : 'next_onClick'
  },

  initialize: function (opts) {
    var currentCollection = this.collection,
     container = this.$el; 
     
    this.app = opts.app;
    this.render();
    this.listenTo(this.collection, 'add', this.onAddTransfer);
    this.listenTo(this.collection, 'remove', this.renumberTransfers);

    if (this.collection.length === 0) {
      this.addBlankTransfer();
    }
    else {
       this.collection.each(function(model) { 
        var entryView = new candyTransfer.Views.EntryView({ model: model, collection: currentCollection });
        entryView.render();
        container.find('#entry-container').append(entryView.el);
      });
    }
  },

  render : function() {
    var shellTemplate = _.template( $('#sugar-injection-view-template').html());
    this.$el.append(shellTemplate);
    return this;
  },


  addBlankTransfer: function(e) {
    if (e) {  e.preventDefault(); }
    this.collection.addBlankTransfer();
  },

  next_onClick: function() {
    this.app.trigger('confirm');
  },

  renumberTransfers : function () {
    this.$el.find('#entry-container').html('');

    if (this.collection.length === 0) {
      this.addBlankTransfer();
      return;
    };

    this.collection.each(function (model) {
      model.set({
        transferNumber : this.collection.indexOf(model) + 1
      });
      this.onAddTransfer(model);
     }, this);
    return this;
  },

  onAddTransfer : function (model) { 
      var view = new candyTransfer.Views.EntryView({ model: model, collection: this.collection });
      view.render();
      this.$el.find('#entry-container').append(view.el);
  }

});
