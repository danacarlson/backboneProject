candyTransfer.Views.ApplicationView = Backbone.View.extend({

  el : "#main",

  views: {
    'sugarInjection' : ''
  },

  initialize: function () {
    this.collection = new candyTransfer.Collections.Transfers();
    this.createViews();
    this.on('confirm', this.onConfirm, this);
    this.on('edit', this.onEdit, this);
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
  
  onEdit: function () {
    var innerDiv = document.createElement('div');
    
    this.views.sugarInjectionConfirm.remove();
    this.views.sugarInjection.undelegateEvents();
    innerDiv.id = "inner";
    innerDiv.className = "inner";
    this.$el.append(innerDiv); 

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
    innerDiv.className = "inner";
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