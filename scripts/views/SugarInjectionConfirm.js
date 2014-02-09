candyTransfer.Views.SugarInjectionConfirm = Backbone.View.extend({

  el : "#main",
  
  events: {

  },

  initialize: function () {
    var view,
     el = this.$el,
     currentCollection = this.collection;
     
    this.render();
    
    this.collection.each(function(model) {
      var confirmView = new candyTransfer.Views.ConfirmView({ model: model, collection: currentCollection });
      confirmView.render(); 
      el.find('#entry-container').append(confirmView.el);
    });
    
    this.listenTo(currentCollection, 'remove', this.renumberTransfers);

  },
  
  render : function () {
    var staticControls = _.template( $("#sugar-injection-confirm-controls").html()),
      staticHeader =  _.template( $("#sugar-injection-confirm-header").html());
      
      this.$el.find('#form-controls').append(staticControls); 
      this.$el.find('h2').after(staticHeader);
      
      return this; 
  },
  
  renumberTransfers : function () {
    var el = this.$el;
     
    el.find('#entry-container').html('');
    
    if (this.collection.length === 0) {
      alert('none');
      //this.addBlankTransfer();
      return;
    };
   
    this.collection.each(function (model) {
      model.set({
        transferNumber : this.collection.indexOf(model) + 1
      }); 
      var confirmView = new candyTransfer.Views.ConfirmView({ model: model });
      confirmView.render(); 
      el.find('#entry-container').append(confirmView.el);
      //this.onAddTransfer(model);
     }, this);
    return this;
  }

});
