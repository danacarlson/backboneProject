candyTransfer.Views.ApplicationView = Backbone.View.extend({

  el : "#main",

  views: {
    'sugarInjection' : ''
    //'sugarInjectionConfirm' : ''
  },

  initialize: function () {
    this.collection = new candyTransfer.Collections.Transfers();
    this.createViews();
    this.on('confirm', this.onConfirm, this);
  },

  createViews: function () {
    var V = candyTransfer.Views,
      opts = {
        collection: this.collection,
        app: this
      };

    this.views.sugarInjection = new V.SugarInjectionView(opts);
    this.$el.append(this.views.sugarInjection.el);
  },

  onConfirm: function () { 
    var innerDiv = document.createElement('div');
    
    this.views.sugarInjection.remove();
    this.views.sugarInjection.undelegateEvents();
    innerDiv.id = "inner";
    $(innerDiv).append('<div id="form-header">').append('<div id="entry-container">').append('<div id="form-controls">');
    this.$el.append(innerDiv);

    var V = candyTransfer.Views,
      opts = {
        collection: this.collection,
        app: this
      };
    this.views.sugarInjectionConfirm = new V.SugarInjectionConfirm(opts);
    this.$el.append(this.views.sugarInjectionConfirm.el);
  }

});