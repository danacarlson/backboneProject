window.candyTransfer = {
  app: _.extend({}, Backbone.Events),

  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  init: function() {
    new candyTransfer.Views.ApplicationView({el: '#main'});
  }
};

candyTransfer.Views.ApplicationView = Backbone.View.extend({

  views: {
    'sugarInjection' : '',
  },


  initialize: function () {
    this.collection = new candyTransfer.Collections.Transfers();
    
    //this.collection.on('sync', this.createViews, this);
    //this.collection.fetch();
    this.createViews();
  },

  createViews: function () {
    
    var V = candyTransfer.Views,
      opts = {collection: this.collection}; 

    this.views.sugarInjection = (new V.SugarInjectionView).render();
      
    // Only create the views on the initial fetch
    /*this.collection.off('sync', this.createViews, this);
    this.views.GuestListTable = (new V.GuestListView(opts)).render();
    this.views.GirlsBoysTotal = (new V.GirlsBoysTotalView(opts)).render();
    this.views.SignUpView = (new V.SignUpView(opts)).render();
    this.$el.prepend(this.views.GuestListTable.el); */


    
    this.render();
  }
  
});





$(document).ready(function(){
  candyTransfer.init();
});
