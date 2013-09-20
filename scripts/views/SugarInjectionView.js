candyTransfer.Views.SugarInjectionView = Backbone.View.extend({

  el : "#main",
  
  events: {
    'click [data-trigger="add-sugar-injection"]' : 'addBlankTransfer',
    'click [data-trigger="remove-sugar-injection"]' : 'removeTransfer'
  },

  initialize: function () { 
    this.collection.on('add', this.onAddTransfer, this);
    this.addBlankTransfer();
  },

  remove : function() {
    this.collection.off('add', this.onAddTransfer);
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

  onAddTransfer : function (model) {
      var view = new candyTransfer.Views.EntryView({ model: model, collection: this.collection });
      view.render();
      this.$el.find('#entry-container').append(view.el);
  },
  
  removeTransfer : function(e) {
    if (e) {  e.preventDefault(); } 
  }


});
