candyTransfer.Views.SugarInjectionView = Backbone.View.extend({

  //el : "#main",

  events: {
    'click [data-trigger="add-sugar-injection"]' : 'addBlankTransfer',
    'click #confirmBt' : 'next_onClick'
  },

  initialize: function (opts) {
    console.log('initialize');
    this.app = opts.app;
    this.listenTo(this.collection, 'add', this.onAddTransfer);
    this.listenTo(this.collection, 'remove', this.renumberTransfers);

    if (this.collection.length === 0) {
      this.addBlankTransfer();
    }

    this.render();
  },

  render : function() {
    console.log('render');
    console.log(this.$el);
    var staticControls = _.template( $("#sugar-injection-controls").html());
      this.$el.find('#form-controls').append(staticControls);
      //this.$el.find('#form-header').html('');
      return this;
  },


  addBlankTransfer: function(e) {

    if (e) {  e.preventDefault(); }
    this.collection.addBlankTransfer();
  },

  next_onClick: function() {
    this.app.trigger('confirm');

   // var confirmView;
   //i need to clean up my views.

    //$(this.el).find('#entry-container, #form-controls').html('');
    //confirmView = new candyTransfer.Views.SugarInjectionConfirm({ model: model, collection: this.collection });
    //return this;
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
    console.log('add');
      var view = new candyTransfer.Views.EntryView({ model: model, collection: this.collection });
      view.render();
      this.$el.find('#entry-container').append(view.el);
  }

});
