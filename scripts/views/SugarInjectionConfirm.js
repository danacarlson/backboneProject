candyTransfer.Views.SugarInjectionConfirm = Backbone.View.extend({

  el : "#main",
  
  events: {
    'click #saveTransfers' : 'saveTransfers',
    'click #editTransfers' : 'editTransfers' 
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
      this.$el.find('#form-controls').html('').append(staticControls); 
      this.$el.find('#form-header').html('').append(staticHeader);    
      return this; 
  },
  
  renumberTransfers : function () {
    var el = this.$el;
     
    el.find('#entry-container').html('');   
    this.collection.each(function (model) {
      model.set({
        transferNumber : this.collection.indexOf(model) + 1
      }); 
      var confirmView = new candyTransfer.Views.ConfirmView({ model: model, collection:this.collection });
      confirmView.render(); 
      el.find('#entry-container').append(confirmView.el);
     }, this);
     
     if (this.collection.length === 1) {
       el.find('[data-trigger="remove-sugar-injection"]').addClass('hide');
     };
    return this;
  },
  
  saveTransfers : function (e) {
    if (e) { e.preventDefault(); }
    //ideally there would be some front end validation here
    Backbone.sync('create', this.collection);
  },
  
  editTransfers : function (e, model) {

    $(this.el).find('#entry-container, #form-controls, #form-header').html('');
    $(this.el).find('#confirm-header').remove(); 

    var initialView = new candyTransfer.Views.SugarInjectionView({ model: model, collection: this.collection });
    
    initialView.renumberTransfers();
    
    return this;
  }

});
