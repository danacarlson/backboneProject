candyTransfer.Views.SugarInjectionView = Backbone.View.extend({

  el : "#main",
  
  events: {
    'click [data-trigger="add-sugar-injection"]' : 'addBlankTransfer'
  },

  initialize: function () { 
    this.listenTo(this.collection, 'add', this.onAddTransfer);
    this.listenTo(this.collection, 'remove', this.renumberTransfers);

     
    if (this.collection.length === 0) {
      this.addBlankTransfer();
    }
  },

  addBlankTransfer: function(e) {
    if (e) {  e.preventDefault(); }     
      this.collection.addBlankTransfer();
  },
  
  renumberTransfers : function () { 
    this.$el.find('#entry-container').html('');
   
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
