candyTransfer.Views.SugarInjectionView = Backbone.View.extend({

  el : "#main",
  
  events: {
    'click [data-trigger="add-sugar-injection"]' : 'addBlankTransfer'
  },

  initialize: function () { 
    this.collection.on('add', this.onAddTransfer, this);
    this.collection.on('remove', this.renumberTransfers, this);
     
    if (this.collection.length === 0) {
      this.addBlankTransfer();
    }
  },

  remove : function() {
    this.collection.off('add', this.onAddTransfer);
    this.collection.off('remove', this.renumberTransferes);
  },

  addBlankTransfer: function(e) {
    var currentNum = this.collection.length;
    if (e) {  e.preventDefault(); }     
    if (currentNum < 5) {
      this.collection.add({
        'transferNumber' : currentNum+1
      });
    }
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
