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
  },

  addBlankTransfer: function(e) {
    if (e) {  e.preventDefault(); }     
    this.collection.addBlankTransfer();
  },
  
  confirmTransfers: function() {
    $(this.el).find('#entry-container').html('');
    $(this.el).find('.readonly').removeClass('hide');
     this.collection.each(function (transfer) { this.renderReadOnly(transfer); }, this);
     return this;
  },
  
  renderReadOnly : function(transfer) {    
    var view = new candyTransfer.Views.EntryView({model: transfer, collection: this.collection}); 
    view.rerender();
    this.$el.find('#entry-container').append(view.el);
  },
  
  saveTransfers : function (e) {
    if (e) { e.preventDefault(); }
    //ideally there would be some front end validation here
    //Backbone.sync('create', this.collection);
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
      if ($(this.el).find('.readonly').hasClass('hide')) {
        view.render();
      }
      else {
        view.rerender();
      }
      this.$el.find('#entry-container').append(view.el);
  }

});
