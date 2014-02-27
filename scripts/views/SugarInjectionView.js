candyTransfer.Views.SugarInjectionView = Backbone.View.extend({

  el : "#main",
  
  events: {
    'click [data-trigger="add-sugar-injection"]' : 'addBlankTransfer',
    'click #confirmBt' : 'confirmTransfers'
  },

  initialize: function () {
   
    this.listenTo(this.collection, 'add', this.onAddTransfer);
    this.listenTo(this.collection, 'remove', this.renumberTransfers);

    if (this.collection.length === 0) {
      this.addBlankTransfer();
    }
    
    this.render();
  },
  
  render : function() { 
    var staticControls = _.template( $("#sugar-injection-controls").html());
      this.$el.find('#form-controls').append(staticControls);
      this.$el.find('#form-header').html('');
      return this; 
  },


  addBlankTransfer: function(e) {
    if (e) {  e.preventDefault(); }     
    this.collection.addBlankTransfer();
  },
  
  confirmTransfers: function(model) {
    var confirmView;
    
   //i need to clean up my views.
    
    $(this.el).find('#entry-container, #form-controls').html('');
    confirmView = new candyTransfer.Views.SugarInjectionConfirm({ model: model, collection: this.collection });
    return this;
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
