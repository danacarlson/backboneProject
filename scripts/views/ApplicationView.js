candyTransfer.Views.ApplicationView = Backbone.View.extend({

  el : "#main",

  views: {
    'sugarInjection' : ''
  },
  
  opts: {},

  initialize: function () {
    this.collection = new candyTransfer.Collections.Transfers();
    this.opts = {
      'collection': this.collection,
      'app': this
    }
    this.createViews();
    this.on('confirm', this.onConfirm, this);
    this.on('edit', this.onEdit, this);
  },

  createViews: function () {
    this.views.sugarInjection = new candyTransfer.Views.SugarInjectionView(this.opts);
    this.$el.append(this.views.sugarInjection.el);
  },
  
  onEdit: function () {
    this.removeView(this.views.sugarInjectionConfirm);
    this.views.sugarInjection = new candyTransfer.Views.SugarInjectionView(this.opts);
    this.$el.append(this.views.sugarInjection.el);
  },
  
  createDomElement: function() {
    var innerDiv = document.createElement('div'); 
    innerDiv.id = "inner";
    innerDiv.className = "inner";
    this.$el.append(innerDiv); 
  },
  
  removeView: function (view) {
    view.remove();
    view.undelegateEvents();
    this.createDomElement();
  },
  
  onConfirm: function () { 
    this.removeView(this.views.sugarInjection);     
    this.views.sugarInjectionConfirm = new candyTransfer.Views.SugarInjectionConfirm(this.opts);
    this.$el.append(this.views.sugarInjectionConfirm.el);
  }

});