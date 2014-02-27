candyTransfer.Views.ApplicationView = Backbone.View.extend({

  //el : "#main",

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
    this.$el.append(this.views.sugarInjection.el)
    //this.views.sugarInjectionConfirm = new V.SugarInjectionConfirm(opts);
  },

  onConfirm: function () {
    this.views.sugarInjection.remove();

    var V = candyTransfer.Views,
      opts = {
        collection: this.collection,
        app: this
      };
    this.views.sugarInjectionConfirm = new V.SugarInjectionConfirm(opts);
    this.$el.append(this.views.sugarInjectionConfirm.el)
  }

});