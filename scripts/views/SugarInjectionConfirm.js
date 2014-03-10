candyTransfer.Views.SugarInjectionConfirm = Backbone.View.extend({

  el : "#inner",

  events: {
    'click #saveTransfers' : 'saveTransfers',
    'click #editTransfers' : 'editTransfers'
  },

  initialize: function (opts) {  
    
    var view,
     el = this.$el,
     currentCollection = this.collection;
    this.app = opts.app;
    this.render();


    this.collection.each(function(model) {
      var confirmView = new candyTransfer.Views.ConfirmView({ model: model, collection: currentCollection });
      confirmView.render();
      el.find('#entry-container').append(confirmView.el);
    });

    this.listenTo(currentCollection, 'remove', this.renumberTransfers);
  },

  render : function () {
    var confirmTemplate = _.template( $("#sugar-injection-confirm-template").html());    
    this.$el.append(confirmTemplate);
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
     this.app.trigger('edit'); 
  }

});
