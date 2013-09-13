backboneDemo.Views.ApplicationView = Backbone.View.extend({

  views: {
    'GuestListTable' : '',
    'BoysTotal' : '',
    'GirlsTotal' : ''
  },


  initialize: function () {
    this.collection = new backboneDemo.Collections.Guests();
    this.collection.on('sync', this.createViews, this);
    //this.collection.fetch();
  },

  createViews: function () {
    
    //this.views.GuestListTable - do i need to set an empty variable? comes outta nowhere in my mind

    var V = backboneDemo.Views, 
      opts = {collection: this.collection};  
      
    // Only create the views on the initial fetch
    this.collection.off('sync', this.createViews, this);
    this.views.GuestListTable = (new V.GuestListView(opts)).render();
    this.views.GirlsBoysTotal = (new V.GirlsBoysTotalView(opts)).render();
    this.views.SignUpView = (new V.SignUpView(opts)).render();
    this.$el.prepend(this.views.GuestListTable.el); 
    
    

    this.render();
  }
  
});
