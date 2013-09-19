candyTransfer.Views.ApplicationView = Backbone.View.extend({

  views: {
    'sugarInjection' : ''
  },

  initialize: function () {
    this.collection = new candyTransfer.Collections.Transfers();
    this.createViews();
  },

  createViews: function () {
    var V = candyTransfer.Views,
      opts = {collection: this.collection}; 

    this.views.sugarInjection = new V.SugarInjectionView(opts);
  }
  
});